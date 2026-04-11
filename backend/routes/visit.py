from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from datetime import datetime
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

router = APIRouter()

class VisitRequest(BaseModel):
    fullName: str
    phone: str
    email: EmailStr
    visitDate: str

@router.post("/visit-request")
async def create_visit_request(visit: VisitRequest):
    """
    Handle visit booking request and send email notification via Yandex SMTP
    """
    try:
        # Email content in Russian
        subject = f"Новая заявка на пробный день - {visit.fullName}"
        
        html_content = f"""
        <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
                    <div style="background: linear-gradient(135deg, #009479 0%, #00BFA5 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
                        <h1 style="color: white; margin: 0;">🏫 Новая заявка на пробный день</h1>
                    </div>
                    
                    <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px;">
                        <h2 style="color: #009479; margin-top: 0;">Информация о посетителе:</h2>
                        
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 12px; border-bottom: 1px solid #eee;"><strong>👤 Имя:</strong></td>
                                <td style="padding: 12px; border-bottom: 1px solid #eee;">{visit.fullName}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px; border-bottom: 1px solid #eee;"><strong>📞 Телефон:</strong></td>
                                <td style="padding: 12px; border-bottom: 1px solid #eee;">{visit.phone}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px; border-bottom: 1px solid #eee;"><strong>📧 Email:</strong></td>
                                <td style="padding: 12px; border-bottom: 1px solid #eee;">{visit.email}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px;"><strong>📅 Желаемая дата визита:</strong></td>
                                <td style="padding: 12px;">{visit.visitDate}</td>
                            </tr>
                        </table>
                        
                        <div style="margin-top: 30px; padding: 20px; background-color: #f0f9f7; border-left: 4px solid #009479; border-radius: 5px;">
                            <p style="margin: 0; color: #009479;"><strong>⏰ Требуется действие:</strong></p>
                            <p style="margin: 10px 0 0 0;">Пожалуйста, свяжитесь с посетителем как можно скорее для подтверждения даты и времени визита.</p>
                        </div>
                        
                        <div style="margin-top: 20px; text-align: center; color: #999; font-size: 12px;">
                            <p>Получено {datetime.now().strftime("%d.%m.%Y в %H:%M")}</p>
                        </div>
                    </div>
                </div>
            </body>
        </html>
        """
        
        # Create message
        msg = MIMEMultipart('alternative')
        msg['Subject'] = subject
        msg['From'] = os.getenv('SMTP_USER', 'Drevop@ya.ru')
        msg['To'] = 'Drevop@ya.ru'
        
        # Attach HTML
        html_part = MIMEText(html_content, 'html', 'utf-8')
        msg.attach(html_part)
        
        # Send email using Yandex SMTP
        smtp_host = os.getenv('SMTP_HOST', 'smtp.yandex.com')
        smtp_port = int(os.getenv('SMTP_PORT', 465))
        smtp_user = os.getenv('SMTP_USER')
        smtp_password = os.getenv('SMTP_PASS')
        
        if not smtp_user or not smtp_password:
            print("Warning: SMTP credentials not configured. Email not sent.")
            print(f"Visit request details: {visit.dict()}")
            # Still return success for development
            return {
                "success": True,
                "message": "Solicitud recibida (email no configurado)"
            }
        
        # Try SSL first (port 465), fallback to TLS (port 587)
        try:
            with smtplib.SMTP_SSL(smtp_host, smtp_port, timeout=10) as server:
                server.login(smtp_user, smtp_password)
                server.send_message(msg)
        except Exception as e:
            print(f"SSL failed, trying TLS: {e}")
            with smtplib.SMTP(smtp_host, 587, timeout=10) as server:
                server.starttls()
                server.login(smtp_user, smtp_password)
                server.send_message(msg)
        
        return {
            "success": True,
            "message": "Solicitud de visita enviada exitosamente"
        }
        
    except Exception as e:
        print(f"Error sending visit request email: {e}")
        import traceback
        traceback.print_exc()
        raise HTTPException(
            status_code=500,
            detail=f"Error al procesar la solicitud: {str(e)}"
        )
