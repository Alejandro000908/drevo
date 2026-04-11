from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Dict, Any, Optional
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
import os
import re
import logging

router = APIRouter()
logger = logging.getLogger(__name__)

class EmailFormData(BaseModel):
    formName: Optional[str] = "Formulario de contacto"
    pageUrl: Optional[str] = ""
    submittedAt: Optional[str] = ""
    fields: Dict[str, Any]

def sanitize_input(text: str) -> str:
    """Sanitiza el input para prevenir inyección de código"""
    if not isinstance(text, str):
        text = str(text)
    # Remover caracteres peligrosos
    text = re.sub(r'[<>\'\"&]', '', text)
    return text.strip()

def detect_email_field(fields: Dict[str, Any]) -> Optional[str]:
    """Detecta automáticamente el campo de email en el formulario"""
    email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    
    # Buscar por nombre de campo común
    for key in ['email', 'correo', 'e-mail', 'mail']:
        if key in fields and re.match(email_pattern, str(fields[key])):
            return fields[key]
    
    # Buscar en todos los campos
    for value in fields.values():
        if isinstance(value, str) and re.match(email_pattern, value):
            return value
    
    return None

def format_email_body(data: EmailFormData, user_email: Optional[str]) -> str:
    """Formatea el cuerpo del email de forma legible"""
    html = f"""
    <html>
        <head>
            <style>
                body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
                .header {{ background: #4CAF50; color: white; padding: 20px; border-radius: 5px; }}
                .info {{ background: #f5f5f5; padding: 15px; border-left: 4px solid #4CAF50; margin: 20px 0; }}
                .field {{ margin: 10px 0; padding: 10px; background: white; border: 1px solid #ddd; }}
                .label {{ font-weight: bold; color: #4CAF50; }}
                .value {{ margin-top: 5px; }}
            </style>
        </head>
        <body>
            <div class="header">
                <h2>📧 {sanitize_input(data.formName)}</h2>
            </div>
            
            <div class="info">
                <p><strong>📍 Página:</strong> {sanitize_input(data.pageUrl)}</p>
                <p><strong>🕐 Fecha y hora:</strong> {sanitize_input(data.submittedAt) or datetime.now().strftime('%Y-%m-%d %H:%M:%S')}</p>
                {f'<p><strong>✉️ Email del usuario:</strong> {sanitize_input(user_email)}</p>' if user_email else ''}
            </div>
            
            <h3>📋 Datos del formulario:</h3>
    """
    
    # Agregar todos los campos no vacíos
    for key, value in data.fields.items():
        if value and str(value).strip():
            sanitized_key = sanitize_input(key)
            sanitized_value = sanitize_input(str(value))
            html += f"""
            <div class="field">
                <div class="label">{sanitized_key}:</div>
                <div class="value">{sanitized_value}</div>
            </div>
            """
    
    html += """
        </body>
    </html>
    """
    
    return html

@router.post("/send-email")
async def send_email(data: EmailFormData):
    """
    Endpoint global para enviar emails desde cualquier formulario
    Solo procesa formularios marcados con data-email-form="true"
    """
    try:
        # Validar que existan campos
        if not data.fields:
            raise HTTPException(status_code=400, detail="No hay campos para enviar")
        
        # Detectar email del usuario
        user_email = detect_email_field(data.fields)
        
        # Obtener configuración SMTP desde variables de entorno
        smtp_host = os.getenv('SMTP_HOST')
        smtp_port = int(os.getenv('SMTP_PORT', '465'))
        smtp_user = os.getenv('SMTP_USER')
        smtp_pass = os.getenv('SMTP_PASS')
        mail_from = os.getenv('MAIL_FROM', smtp_user)
        
        # Log de configuración (sin password)
        logger.info(f"SMTP Config: host={smtp_host}, port={smtp_port}, user={smtp_user}")
        
        # Validar que existan las credenciales
        if not all([smtp_host, smtp_user, smtp_pass]):
            logger.error(f"Faltan credenciales SMTP: host={smtp_host is not None}, user={smtp_user is not None}, pass={smtp_pass is not None}")
            raise HTTPException(status_code=500, detail="Configuración de email incompleta")
        
        # Crear mensaje
        msg = MIMEMultipart('alternative')
        msg['From'] = mail_from
        msg['To'] = smtp_user  # Enviar a la cuenta de la escuela
        msg['Subject'] = f"Nuevo mensaje: {data.formName}"
        
        # Formatear cuerpo del email
        html_body = format_email_body(data, user_email)
        msg.attach(MIMEText(html_body, 'html'))
        
        # Enviar email usando SMTP de Yandex
        with smtplib.SMTP_SSL(smtp_host, smtp_port) as server:
            server.login(smtp_user, smtp_pass)
            server.send_message(msg)
        
        logger.info(f"Email enviado exitosamente desde {data.formName}")
        
        return {"ok": True, "message": "Email enviado exitosamente"}
    
    except smtplib.SMTPAuthenticationError:
        logger.error("Error de autenticación SMTP")
        raise HTTPException(status_code=500, detail="Error de autenticación con el servidor de correo")
    
    except smtplib.SMTPException as e:
        logger.error(f"Error SMTP: {str(e)}")
        raise HTTPException(status_code=500, detail="Error al enviar el email")
    
    except Exception as e:
        logger.error(f"Error inesperado al enviar email: {str(e)}")
        raise HTTPException(status_code=500, detail="Error al procesar la solicitud")
