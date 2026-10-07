from pathlib import Path
from pydantic_settings import BaseSettings, SettingsConfigDict
from typing import Optional, List

API_DIR = Path(__file__).resolve().parent.parent.parent
DEFAULT_DB_FILE = (API_DIR / "app.db").as_posix()

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
    DATABASE_URL: str = f"sqlite+aiosqlite:///{DEFAULT_DB_FILE}"
    
    # CORS
    BACKEND_CORS_ORIGINS: List[str] = [
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ]

    # OpenRouter & AI
    OPENROUTER_API_KEY: Optional[str] = ""
    OPENROUTER_MODEL: str = "nvidia/nemotron-3.5-lightning:free"
    AI_PROVIDER: str = "openrouter"

    model_config = SettingsConfigDict(
        env_file=".env",
        case_sensitive=True,
        extra="ignore",
    )

settings = Settings()
