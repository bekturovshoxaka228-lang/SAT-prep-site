import pytest
from httpx import AsyncClient

@pytest.mark.asyncio
async def test_auth_register_flow(client: AsyncClient):
    # 1. Register a new student
    register_payload = {
        "email": "student1@example.com",
        "username": "student_one",
        "password": "Password123!",
    }
    resp = await client.post("/api/v1/auth/register", json=register_payload)
    assert resp.status_code == 201
    data = resp.json()
    assert data["email"] == "student1@example.com"
    assert data["username"] == "student_one"
    assert data["role"] == "student"
    assert data["onboarding_completed"] is False
    assert data["onboarding_step"] == "ielts"
    assert "session" in resp.cookies

    cookie_val = resp.cookies["session"]

    # 2. Duplicate email should return 409 Conflict specifically with field='email'
    dup_email_payload = {
        "email": "student1@example.com",
        "username": "student_diff",
        "password": "Password123!",
    }
    dup_resp = await client.post("/api/v1/auth/register", json=dup_email_payload)
    assert dup_resp.status_code == 409
    dup_data = dup_resp.json()
    assert dup_data["code"] == "conflict"
    assert dup_data["field"] == "email"

    # 3. Duplicate username should return 409 Conflict specifically with field='username'
    dup_user_payload = {
        "email": "student_diff@example.com",
        "username": "student_one",
        "password": "Password123!",
    }
    dup_u_resp = await client.post("/api/v1/auth/register", json=dup_user_payload)
    assert dup_u_resp.status_code == 409
    dup_u_data = dup_u_resp.json()
    assert dup_u_data["code"] == "conflict"
    assert dup_u_data["field"] == "username"

    # 4. Short password should return 422
    invalid_pwd = {
        "email": "student_short@example.com",
        "username": "short_user",
        "password": "123",
    }
    inv_resp = await client.post("/api/v1/auth/register", json=invalid_pwd)
    assert inv_resp.status_code == 422
    assert inv_resp.json()["code"] == "validation_error"

    # 5. /auth/me with session cookie
    me_resp = await client.get("/api/v1/auth/me", cookies={"session": cookie_val})
    assert me_resp.status_code == 200
    assert me_resp.json()["username"] == "student_one"
    assert me_resp.json()["onboarding_step"] == "ielts"

    # 6. /auth/me without session cookie returns 401
    client.cookies.clear()
    unauth_resp = await client.get("/api/v1/auth/me")
    assert unauth_resp.status_code == 401

    # 7. Login with email
    login_resp = await client.post("/api/v1/auth/login", json={
        "login": "student1@example.com",
        "password": "Password123!",
    })
    assert login_resp.status_code == 200
    assert "session" in login_resp.cookies

    # 8. Login with username
    login_user_resp = await client.post("/api/v1/auth/login", json={
        "login": "student_one",
        "password": "Password123!",
    })
    assert login_user_resp.status_code == 200

    # 9. Login with invalid password returns 401
    bad_login = await client.post("/api/v1/auth/login", json={
        "login": "student_one",
        "password": "WrongPassword",
    })
    assert bad_login.status_code == 401

    # 10. Logout returns 204
    logout_resp = await client.post("/api/v1/auth/logout", cookies={"session": cookie_val})
    assert logout_resp.status_code == 204
