import enum

class UserRole(str, enum.Enum):
    student = "student"
    admin = "admin"
    content_manager = "content_manager"
    moderator = "moderator"

class IeltsTargetBand(str, enum.Enum):
    BAND_6_0 = "6.0"
    BAND_6_5 = "6.5"
    BAND_7_0 = "7.0"
    BAND_7_5 = "7.5"
    BAND_8_0 = "8.0"
    BAND_8_5_PLUS = "8.5+"

class DatePrecision(str, enum.Enum):
    day = "day"
    month = "month"

class SatMonth(str, enum.Enum):
    mar = "mar"
    may = "may"
    jun = "jun"
    aug = "aug"
    oct = "oct"
    nov = "nov"
    dec = "dec"

class ExamType(str, enum.Enum):
    ielts = "ielts"
    digital_sat = "digital_sat"

class ExamSectionKind(str, enum.Enum):
    listening = "listening"
    reading = "reading"
    writing = "writing"
    speaking = "speaking"
    rw = "rw"
    math = "math"

class QuestionType(str, enum.Enum):
    mcq = "mcq"
    grid_in = "grid_in"
    writing_task = "writing_task"
    speaking_prompt = "speaking_prompt"
    listening_item = "listening_item"
    reading_item = "reading_item"

class AttemptStatus(str, enum.Enum):
    in_progress = "in_progress"
    submitted = "submitted"
    scored = "scored"
    abandoned = "abandoned"

class AiWritingEvalStatus(str, enum.Enum):
    ai_pending = "ai_pending"
    ai_done = "ai_done"
    human_review = "human_review"
    final = "final"

class FlashcardDeck(str, enum.Enum):
    ielts = "ielts"
    sat = "sat"
    mixed = "mixed"

class AuditAction(str, enum.Enum):
    adjust_score = "adjust_score"
    reset_progress = "reset_progress"
    override_writing = "override_writing"
    publish_exam = "publish_exam"
    other = "other"

class OnboardingStep(str, enum.Enum):
    ielts = "ielts"
    sat = "sat"
    complete = "complete"
