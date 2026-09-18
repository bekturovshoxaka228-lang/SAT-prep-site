from typing import Optional, List, Any
from pydantic import BaseModel, ConfigDict

class ErrorResponse(BaseModel):
    code: str
    message: str
    field: Optional[str] = None

class ConflictErrorResponse(BaseModel):
    code: str = "conflict"
    message: str
    field: str  # "email" | "username"

class ValidationDetail(BaseModel):
    loc: List[str]
    msg: str

class ValidationErrorResponse(BaseModel):
    code: str = "validation_error"
    message: str
    details: List[ValidationDetail]
