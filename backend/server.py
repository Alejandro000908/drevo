from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os
from pathlib import Path

# Load environment variables
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Create FastAPI app
app = FastAPI(title="Drevo Poznanii Email API")

# CORS middleware
cors_origins = os.getenv('CORS_ORIGINS', '*').split(',')
app.add_middleware(
    CORSMiddleware,
    allow_origins=cors_origins if cors_origins != ['*'] else ['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create /api router
api_router = APIRouter(prefix="/api")

# Import and include email routes
from routes import email
api_router.include_router(email.router)

# Include the API router
app.include_router(api_router)

@app.get("/")
async def root():
    return {"message": "Drevo Poznanii Email API", "status": "running"}
