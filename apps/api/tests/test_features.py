import pytest
from httpx import AsyncClient
from sqlalchemy import select
from app.core.database import AsyncSessionLocal
from app.models.entities import Exam, Question

@pytest.mark.asyncio
async def test_flashcards_and_attempts(client: AsyncClient):
    # 1. Login as admin
    login_resp = await client.post("/api/v1/auth/login", json={
        "login": "admin",
        "password": "AdminPassword123!",
    })
    assert login_resp.status_code == 200
    admin_cookie = {"session": login_resp.cookies["session"]}

    # 2. Check admin dashboard stats
    stats_resp = await client.get("/api/v1/admin/dashboard-stats", cookies=admin_cookie)
    assert stats_resp.status_code == 200
    stats = stats_resp.json()
    assert "users_total" in stats
    assert "exams_published" in stats

    # 3. Check due flashcards
    due_resp = await client.get("/api/v1/flashcards/due", cookies=admin_cookie)
    assert due_resp.status_code == 200
    items = due_resp.json()["items"]
    assert len(items) > 0
    first_card = items[0]

    # 4. Review flashcard with quality 5 (SM-2)
    review_resp = await client.post(
        f"/api/v1/flashcards/{first_card['id']}/review",
        cookies=admin_cookie,
        json={"quality": 5},
    )
    assert review_resp.status_code == 200
    review_data = review_resp.json()
    assert review_data["repetition"] == 1
    assert review_data["interval_days"] == 1
    assert review_data["ease_factor"] >= 2.5

    # 5. Create attempt on seeded published exam
    async with AsyncSessionLocal() as session:
        exam_res = await session.execute(select(Exam).where(Exam.is_published.is_(True)))
        exam = exam_res.scalars().first()
        exam_id = exam.id

        q_res = await session.execute(select(Question))
        question = q_res.scalars().first()
        q_id = question.id
        correct_ans = question.correct_answer

    att_resp = await client.post(
        "/api/v1/attempts",
        cookies=admin_cookie,
        json={"exam_id": exam_id},
    )
    assert att_resp.status_code == 201
    attempt_id = att_resp.json()["id"]

    # 6. Upsert correct answer
    ans_resp = await client.post(
        f"/api/v1/attempts/{attempt_id}/answers",
        cookies=admin_cookie,
        json={
            "question_id": q_id,
            "answer": correct_ans,
        },
    )
    assert ans_resp.status_code == 200
    assert ans_resp.json()["is_correct"] is True

    # 7. Submit attempt
    sub_resp = await client.post(
        f"/api/v1/attempts/{attempt_id}/submit",
        cookies=admin_cookie,
    )
    assert sub_resp.status_code == 200
    assert sub_resp.json()["status"] == "scored"
    assert sub_resp.json()["score"] >= 1.0
