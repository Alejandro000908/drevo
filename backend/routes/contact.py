from fastapi import APIRouter, HTTPException
from motor.motor_asyncio import AsyncIOMotorDatabase
from models.contact import ContactForm, ContactFormCreate
import logging

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/contact", tags=["contact"])


def init_contact_routes(db: AsyncIOMotorDatabase):
    """Initialize contact routes with database connection"""
    
    @router.post("", response_model=dict)
    async def submit_contact_form(form_data: ContactFormCreate):
        """Submit a contact form"""
        try:
            # Create contact form object with metadata
            contact = ContactForm(**form_data.model_dump())
            
            # Convert to dict and serialize datetime to ISO string for MongoDB
            doc = contact.model_dump()
            doc['created_at'] = doc['created_at'].isoformat()
            
            # Insert into database
            result = await db.contacts.insert_one(doc)
            
            logger.info(f"Contact form submitted: {contact.id} from {contact.email}")
            
            # TODO: Send email notification here (add email service later)
            
            return {
                "success": True,
                "message": "Спасибо! Мы свяжемся с вами в ближайшее время.",
                "contact_id": contact.id
            }
            
        except Exception as e:
            logger.error(f"Error submitting contact form: {str(e)}")
            raise HTTPException(status_code=500, detail="Произошла ошибка при отправке формы")
    
    @router.get("", response_model=list)
    async def get_all_contacts():
        """Get all contact form submissions (admin endpoint)"""
        try:
            contacts = await db.contacts.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
            
            # Convert ISO string timestamps back to datetime objects
            for contact in contacts:
                if isinstance(contact.get('created_at'), str):
                    contact['created_at'] = contact['created_at']
            
            return contacts
            
        except Exception as e:
            logger.error(f"Error fetching contacts: {str(e)}")
            raise HTTPException(status_code=500, detail="Error fetching contacts")
    
    return router
