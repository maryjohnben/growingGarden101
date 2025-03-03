import os
from dotenv import load_dotenv

load_dotenv() #load env variables from .env

class Config:
    FLASK_ENV = os.getenv("FLASK_ENV", "development")
    TREFLE_API_PLANT = os.getenv("TREFLE_API_PLANT")
    TREFLE_API_SPECIES = os.getenv("TREFLE_API_SPECIES")
    MONGO_URI = os.getenv("MONGO_URI")
