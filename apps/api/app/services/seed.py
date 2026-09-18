from datetime import date
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from app.models.entities import (
    User, UserProfile, SatOfficialSession, Flashcard, Exam, ExamSection, Question
)
from app.models.enums import (
    UserRole, SatMonth, FlashcardDeck, ExamType, ExamSectionKind, QuestionType
)
from app.core.security import get_password_hash

OFFICIAL_SAT_SESSIONS = [
    {"year": 2026, "month": SatMonth.mar, "start_date": date(2026, 3, 14), "registration_deadline": date(2026, 2, 27), "is_published": True},
    {"year": 2026, "month": SatMonth.may, "start_date": date(2026, 5, 2), "registration_deadline": date(2026, 4, 17), "is_published": True},
    {"year": 2026, "month": SatMonth.jun, "start_date": date(2026, 6, 6), "registration_deadline": date(2026, 5, 22), "is_published": True},
    {"year": 2026, "month": SatMonth.aug, "start_date": date(2026, 8, 22), "registration_deadline": date(2026, 8, 7), "is_published": True},
    {"year": 2026, "month": SatMonth.oct, "start_date": date(2026, 10, 3), "registration_deadline": date(2026, 9, 18), "is_published": True},
    {"year": 2026, "month": SatMonth.nov, "start_date": date(2026, 11, 7), "registration_deadline": date(2026, 10, 23), "is_published": True},
    {"year": 2026, "month": SatMonth.dec, "start_date": date(2026, 12, 5), "registration_deadline": date(2026, 11, 20), "is_published": True},
    {"year": 2027, "month": SatMonth.mar, "start_date": date(2027, 3, 13), "registration_deadline": date(2027, 2, 26), "is_published": True},
    {"year": 2027, "month": SatMonth.may, "start_date": date(2027, 5, 1), "registration_deadline": date(2027, 4, 16), "is_published": True},
    {"year": 2027, "month": SatMonth.jun, "start_date": date(2027, 6, 5), "registration_deadline": date(2027, 5, 21), "is_published": True},
]

SAMPLE_FLASHCARDS = [
    {
        "front": "Ubiquitous",
        "back": "Present, appearing, or found everywhere. Synonyms: omnipresent, pervasive.",
        "deck": FlashcardDeck.ielts,
        "tags": ["vocabulary", "band-8", "ielts-reading"],
    },
    {
        "front": "Mitigate",
        "back": "Make less severe, serious, or painful. Example: Policies designed to mitigate environmental impact.",
        "deck": FlashcardDeck.ielts,
        "tags": ["vocabulary", "academic", "writing-task2"],
    },
    {
        "front": "Ephemeral",
        "back": "Lasting for a very short time. Synonyms: fleeting, transient.",
        "deck": FlashcardDeck.sat,
        "tags": ["reading-writing", "sat-vocab"],
    },
    {
        "front": "Quadratic Vertex Formula",
        "back": "For y = ax² + bx + c, the x-coordinate of the vertex is x = -b / (2a).",
        "deck": FlashcardDeck.sat,
        "tags": ["math", "algebra", "formulas"],
    },
    {
        "front": "Pragmatic",
        "back": "Dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations.",
        "deck": FlashcardDeck.mixed,
        "tags": ["vocabulary", "academic"],
    },
]

async def seed_database(db: AsyncSession) -> None:
    # 1. Seed official SAT dates
    for item in OFFICIAL_SAT_SESSIONS:
        stmt = select(SatOfficialSession).where(
            SatOfficialSession.year == item["year"],
            SatOfficialSession.month == item["month"],
        )
        existing = (await db.execute(stmt)).scalar_one_or_none()
        if not existing:
            db.add(SatOfficialSession(**item))

    # 2. Seed Admin user if not exists
    stmt_admin = select(User).where(User.username == "admin")
    existing_admin = (await db.execute(stmt_admin)).scalar_one_or_none()
    admin_id = None
    if not existing_admin:
        admin_user = User(
            email="admin@example.com",
            username="admin",
            password_hash=get_password_hash("AdminPassword123!"),
            role=UserRole.admin,
        )
        db.add(admin_user)
        await db.flush()
        admin_id = admin_user.id

        admin_profile = UserProfile(
            user_id=admin_user.id,
            onboarding_completed=True,
        )
        db.add(admin_profile)
    else:
        admin_id = existing_admin.id

    # 3. Seed Flashcards
    for fc_data in SAMPLE_FLASHCARDS:
        stmt_fc = select(Flashcard).where(Flashcard.front == fc_data["front"])
        existing_fc = (await db.execute(stmt_fc)).scalar_one_or_none()
        if not existing_fc:
            db.add(Flashcard(**fc_data, created_by_id=admin_id))

    # 4. Seed a sample IELTS practice test if none exist
    stmt_exam = select(Exam).where(Exam.exam_type == ExamType.ielts)
    existing_exam = (await db.execute(stmt_exam)).scalar_one_or_none()
    if not existing_exam:
        ielts_exam = Exam(
            title="IELTS Academic Practice Test 1",
            exam_type=ExamType.ielts,
            description="Full IELTS Academic test with Reading and Listening modules",
            is_published=True,
            created_by_id=admin_id,
        )
        db.add(ielts_exam)
        await db.flush()

        # Reading section
        reading_sec = ExamSection(
            exam_id=ielts_exam.id,
            kind=ExamSectionKind.reading,
            title="Reading Section: Passage 1",
            duration_sec=3600,
            sort_order=1,
            instructions="Read the passage and answer the questions.",
        )
        db.add(reading_sec)
        await db.flush()

        q1 = Question(
            exam_section_id=reading_sec.id,
            question_type=QuestionType.mcq,
            content={
                "passage": "Urban heat islands occur when cities replace natural land cover with dense concentrations of pavement, buildings, and other surfaces that absorb and retain heat.",
                "question": "What primary factor causes urban heat islands according to the text?",
            },
            options=["Replacement of natural land with pavement and buildings", "High consumption of electricity in urban areas", "Presence of rivers within metropolitan areas", "Changes in regional weather patterns"],
            correct_answer="Replacement of natural land with pavement and buildings",
            hint="Look at the first sentence.",
            explanation="The text directly states that cities replace natural land cover with dense concentrations of pavement and buildings that retain heat.",
            sort_order=1,
            points=1.0,
        )
        db.add(q1)

        # SAT Exam
        sat_exam = Exam(
            title="Digital SAT Official Practice Test 1",
            exam_type=ExamType.digital_sat,
            description="Digital SAT Reading & Writing (RW) and Math simulation",
            is_published=True,
            created_by_id=admin_id,
        )
        db.add(sat_exam)
        await db.flush()

        sat_sec = ExamSection(
            exam_id=sat_exam.id,
            kind=ExamSectionKind.rw,
            title="Reading and Writing - Module 1",
            module_index=1,
            duration_sec=1920,
            sort_order=1,
            instructions="Read each prompt carefully and select the best answer.",
        )
        db.add(sat_sec)
        await db.flush()

        sat_q1 = Question(
            exam_section_id=sat_sec.id,
            question_type=QuestionType.mcq,
            content={
                "stem": "Because fungi decompose dead organic matter, they are ______ to ecosystems, ensuring that essential nutrients are recycled into the soil.",
                "question": "Which choice completes the text with the most logical and precise word?",
            },
            options=["integral", "superfluous", "detrimental", "tangential"],
            correct_answer="integral",
            hint="The text notes that they ensure essential nutrients are recycled.",
            explanation="'Integral' means essential to completeness, fitting the context that fungi recycle essential nutrients.",
            sort_order=1,
            points=1.0,
        )
        db.add(sat_q1)

    await db.commit()
