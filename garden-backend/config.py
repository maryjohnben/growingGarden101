import os
from dotenv import load_dotenv

load_dotenv() #load env variables from .env

class Config:
    FLASK_ENV = os.getenv("FLASK_ENV", "development")
    TREFLE_API_PLANT = os.getenv("TREFLE_API_PLANT")
    TREFLE_API_SPECIES = os.getenv("TREFLE_API_SPECIES")
    MONGO_URI = os.getenv("MONGO_URI")
    OPENAI_PROJECT = os.getenv("OPENAI_PROJECT")
    GOOGLE_GEMINI_TOKEN = os.getenv("GOOGLE_GEMINI_TOKEN")
