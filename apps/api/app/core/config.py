from pydantic_settings import BaseSettings, SettingsConfigDict
from typing import Optional, List

class Settings(BaseSettings):
    PROJECT_NAME: str = "IELTS + Digital SAT Platform API"
    VERSION: str = "1.0.0"
    API_V1_STR: str = "/api/v1"
    
    # Security
    SECRET_KEY: str = "dev-secret-key-sat-ielts-platform-super-secret-2026"
    ALGORITHM: str = "HS256"
    SESSION_EXPIRE_DAYS: int = 14
    COOKIE_NAME: str = "session"
    COOKIE_SECURE: bool = False  # Set to True in production (HTTPS)
    COOKIE_SAMESITE: str = "lax"
    
    # Database
    DATABASE_URL: str = "sqlite+aiosqlite:///./app.db"
    
    # CORS
    BACKEND_CORS_ORIGINS: List[str] = [
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ]

    model_config = SettingsConfigDict(
        env_file=".env",
        case_sensitive=True,
    )

settings = Settings()
