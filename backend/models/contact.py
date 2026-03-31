from pydantic import BaseModel, Field, EmailStr, ConfigDict
from datetime import datetime, timezone
import uuid


class ContactFormCreate(BaseModel):
    """Contact form submission from frontend"""
    name: str = Field(..., min_length=1, max_length=100)
    phone: str = Field(..., min_length=5, max_length=20)
    email: EmailStr
    message: str = Field(..., min_length=1, max_length=1000)


class ContactForm(BaseModel):
    """Contact form model with metadata"""
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    email: str
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    status: str = Field(default="pending")  # pending, contacted, closed
