from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
import os
import logging

router = APIRouter()
logger = logging.getLogger(__name__)

class EmailRequest(BaseModel):
    name: str
    email: str
    phone: str
    message: str

@router.post("/send-email")
async def send_email(data: EmailRequest):
    """
    Send email via Yandex SMTP using SMTP_SSL
    """
    try:
        # Get SMTP configuration from environment
        smtp_host = os.getenv('SMTP_HOST')
        smtp_port = int(os.getenv('SMTP_PORT', '465'))
        smtp_user = os.getenv('SMTP_USER')
        smtp_pass = os.getenv('SMTP_PASS')
        mail_from = os.getenv('MAIL_FROM', smtp_user)
        
        # Validate credentials
        if not all([smtp_host, smtp_user, smtp_pass]):
            logger.error("Missing SMTP credentials")
            raise HTTPException(status_code=500, detail="Email configuration incomplete")
        
        # Create email message
        msg = MIMEMultipart('alternative')
        msg['From'] = mail_from
        msg['To'] = mail_from  # Send to self (school email)
        msg['Subject'] = f"Новое сообщение от {data.name}"
        
        # HTML email body
        html_body = f"""
        <html>
            <head>
                <style>
                    body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
                    .header {{ background: #009479; color: white; padding: 20px; border-radius: 5px; }}
                    .field {{ margin: 15px 0; padding: 10px; background: #f5f5f5; border-left: 4px solid #009479; }}
                    .label {{ font-weight: bold; color: #009479; }}
                </style>
            </head>
            <body>
                <div class="header">
                    <h2>📧 Новое сообщение с сайта</h2>
                </div>
                
                <p><strong>Дата:</strong> {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}</p>
                
                <div class="field">
                    <div class="label">Имя:</div>
                    <div>{data.name}</div>
                </div>
                
                <div class="field">
                    <div class="label">Email:</div>
                    <div>{data.email}</div>
                </div>
                
                <div class="field">
                    <div class="label">Телефон:</div>
                    <div>{data.phone}</div>
                </div>
                
                <div class="field">
                    <div class="label">Сообщение:</div>
                    <div>{data.message}</div>
                </div>
            </body>
        </html>
        """
        
        msg.attach(MIMEText(html_body, 'html'))
        
        # Send email using SMTP_SSL (port 465)
        logger.info(f"Connecting to {smtp_host}:{smtp_port}")
        with smtplib.SMTP_SSL(smtp_host, smtp_port, timeout=10) as server:
            logger.info("Logging in...")
            server.login(smtp_user, smtp_pass)
            logger.info("Sending message...")
            server.send_message(msg)
        
        logger.info(f"Email sent successfully from {data.name}")
        
        return {"success": True, "message": "Email sent successfully"}
    
    except smtplib.SMTPAuthenticationError as e:
        logger.error(f"SMTP authentication error: {str(e)}")
        raise HTTPException(status_code=500, detail=f"SMTP authentication failed: {str(e)}")
    
    except smtplib.SMTPException as e:
        logger.error(f"SMTP error: {str(e)}")
        raise HTTPException(status_code=500, detail=f"SMTP error: {str(e)}")
    
    except Exception as e:
        logger.error(f"Unexpected error: {str(e)}")
        import traceback
        logger.error(traceback.format_exc())
        raise HTTPException(status_code=500, detail=f"Error: {str(e)}")
