import uuid
from datetime import datetime, timezone
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from sqlalchemy import DateTime, String

def utc_now() -> datetime:
    return datetime.now(timezone.utc)

class Base(DeclarativeBase):
    pass
