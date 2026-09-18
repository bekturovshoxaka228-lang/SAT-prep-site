import pytest
from httpx import AsyncClient

@pytest.mark.asyncio
async def test_onboarding_strict_sequence(client: AsyncClient):
    # 1. Register new student
    reg_resp = await client.post("/api/v1/auth/register", json={
        "email": "onboard_test@example.com",
        "username": "onboard_user",
        "password": "Password123!",
    })
    assert reg_resp.status_code == 201
    cookie = {"session": reg_resp.cookies["session"]}

    # 2. Get official SAT sessions
    sat_dates_resp = await client.get("/api/v1/sat/official-dates", params={"include_past": True})
    assert sat_dates_resp.status_code == 200
    sessions = sat_dates_resp.json()["items"]
    assert len(sessions) > 0
    chosen_session_id = sessions[0]["id"]

    # 3. Attempt SAT onboarding BEFORE IELTS -> MUST return 403 Forbidden!
    sat_early_resp = await client.post(
        "/api/v1/onboarding/sat",
        cookies=cookie,
        json={
            "current_unknown": True,
            "target_score": 1350,
            "sat_session_id": chosen_session_id,
        },
    )
    assert sat_early_resp.status_code == 403
    assert sat_early_resp.json()["code"] == "forbidden"

    # 4. Attempt Dashboard before onboarding complete -> MUST return 403
    dash_early_resp = await client.get("/api/v1/dashboard", cookies=cookie)
    assert dash_early_resp.status_code == 403

    # 5. Complete Step 1: IELTS Onboarding
    ielts_resp = await client.post(
        "/api/v1/onboarding/ielts",
        cookies=cookie,
        json={
            "current_unknown": False,
            "current_band": 6.5,
            "target_band": "7.5",
            "previous_band": 6.0,
            "date_precision": "day",
            "planned_date": "2026-11-20",
        },
    )
    assert ielts_resp.status_code == 200
    ielts_data = ielts_resp.json()
    assert ielts_data["onboarding_step"] == "sat"
    assert ielts_data["onboarding_completed"] is False
    assert ielts_data["ielts_onboarding_at"] is not None

    # 6. Complete Step 2: SAT Onboarding
    sat_resp = await client.post(
        "/api/v1/onboarding/sat",
        cookies=cookie,
        json={
            "current_unknown": False,
            "current_score": 1150,
            "target_score": 1500,
            "sat_target_is_plus": True,
            "previous_score": 1100,
            "sat_session_id": chosen_session_id,
        },
    )
    assert sat_resp.status_code == 200
    sat_data = sat_resp.json()
    assert sat_data["onboarding_completed"] is True
    assert sat_data["onboarding_step"] == "complete"
    assert sat_data["sat_onboarding_at"] is not None

    # 7. Access Dashboard now -> MUST return 200
    dash_resp = await client.get("/api/v1/dashboard", cookies=cookie)
    assert dash_resp.status_code == 200
    dash_data = dash_resp.json()
    assert dash_data["ielts"]["target_band"] == "7.5"
    assert dash_data["ielts"]["current_band"] == 6.5
    assert dash_data["sat"]["target_score"] == 1500
    assert dash_data["sat"]["sat_target_is_plus"] is True
    assert dash_data["sat"]["session"] is not None
    assert dash_data["flashcards_due_count"] >= 0
