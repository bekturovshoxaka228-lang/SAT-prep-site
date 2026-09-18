from datetime import datetime
from typing import Optional, List
from pydantic import BaseModel, Field
from app.models.enums import FlashcardDeck

class FlashcardReviewRequest(BaseModel):
    quality: int = Field(ge=0, le=5, description="SM-2 quality rating 0 to 5")

class UserFlashcardProgressResponse(BaseModel):
    user_id: str
    flashcard_id: str
    ease_factor: float
    interval_days: int
    repetition: int
    next_review: datetime
    last_reviewed_at: Optional[datetime] = None
    last_quality: Optional[int] = None

    model_config = {
        "from_attributes": True
    }

class FlashcardDueItem(BaseModel):
    id: str
    front: str
    back: str
    deck: FlashcardDeck
    tags: List[str] = []
    progress: Optional[UserFlashcardProgressResponse] = None

    model_config = {
        "from_attributes": True
    }
