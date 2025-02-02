import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    FLASK_ENV = os.getenv("FLASK_ENV")
    API_KEY = os.getenv("TREFLE_API_KEY")
    MONGO_URI = os.getenv("MONGO_URI")
