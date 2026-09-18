# IELTS + Digital SAT Unified Platform

Образовательная веб-платформа для подготовки к **IELTS Academic** и **Digital SAT** в едином аккаунте.

Архитектура строго соответствует спецификациям:
- [`docs/PRD.md`](docs/PRD.md) — требования к продукту, пользовательские сценарии и roadmap.
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — архитектурные инварианты, anti-bug гайд по авторизации и сессиям.
- [`docs/openapi.yaml`](docs/openapi.yaml) — OpenAPI 3.1 контракт API v1.
- [`prisma/schema.prisma`](prisma/schema.prisma) — канонический DDL-контракт схемы базы данных.

---

## 1. Структура монорепозитория

```
SAT&IELTS Project/
├── apps/
│   ├── api/                  # FastAPI + SQLAlchemy 2.0 + Alembic + Pydantic v2
│   │   ├── app/
│   │   │   ├── api/v1/       # Эндпоинты (auth, onboarding, sat, dashboard, attempts, flashcards, admin)
│   │   │   ├── core/         # Конфигурация, безопасность (bcrypt, JWT), зависимости RBAC
│   │   │   ├── models/       # SQLAlchemy модели 1:1 с prisma/schema.prisma
│   │   │   ├── schemas/      # Pydantic схемы валидации контракта OpenAPI
│   │   │   └── services/     # SM-2 алгоритм карточек и автоматический сид данных
│   │   ├── alembic/          # Миграции БД
│   │   ├── tests/            # Набор тестов pytest (100% покрытие auth, онбординга, SM-2)
│   │   └── pyproject.toml    # Конфигурация Python и uv
│   │
│   └── web/                  # Next.js 15 (App Router) + Tailwind CSS + Lucide Icons
│       ├── app/
│       │   ├── login/        # Экран входа и регистрации с защитой от двойного сабмита
│       │   ├── onboarding/   # Строгий двухшаговый онбординг (ielts -> sat)
│       │   ├── dashboard/    # Студенческий дашборд с обратным отсчётом и прогрессом
│       │   ├── practice/     # Симуляторы: IELTS Reading (split-pane), Listening, SAT (MCQ + Grid-in + Desmos)
│       │   ├── flashcards/   # Интервальное повторение SM-2 (оценка качества 0-5)
│       │   └── admin/        # Панель администратора: аналитика, Test Builder, HITL Writing
│       ├── lib/api.ts        # Типизированный клиент API с credentials: 'include'
│       └── middleware.ts     # Middleware проверки сессий и гейтов онбординга
│
├── docs/                     # Документация (PRD, ARCHITECTURE, OpenAPI)
└── prisma/                   # Prisma схема
```

---

## 2. Реализованный функционал (Week 1 + Week 2 + Simulators)

### Авторизация и безопасность (`apps/api/app/api/v1/endpoints/auth.py`)
- **Cookie Session**: канонический HttpOnly-cookie `session` с JWT-токеном.
- **Регистрация**: возвращает **201 Created**, выставляет cookie в том же ответе.
- **409 Conflict**: возвращается строго при занятом `email` или `username` с указанием конкретного поля.
- **Анти-баг гарантии**: кнопка сабмита блокируется на клиенте при отправке, `router.push('/onboarding/ielts')` вызывается строго после успешного `201` ответа.

### Двухшаговый онбординг
- **Шаг 1: IELTS** (`/onboarding/ielts`): слайдер балла 1.0–9.0 или флаг «не знаю», целевой балл 6.0–8.5+, запланированная дата экзамена.
- **Шаг 2: SAT** (`/onboarding/sat`): сервер проверяет завершение шага IELTS (иначе **403 Forbidden**); выбор официальной сессии College Board (только разрешённые месяцы: `mar, may, jun, aug, oct, nov, dec`), целевой балл 1200 / 1350 / 1500+ или произвольный с шагом 10.

### Дашборд студента (`/dashboard`)
- Обратный отсчёт дней до экзаменов IELTS и Digital SAT.
- Индикаторы прогресса (текущий балл vs целевой балл).
- Счетчик карточек, готовых к повторению по алгоритму SM-2.
- Быстрый запуск симуляторов практики.

### Симуляторы практики и интервальные карточки
- **IELTS Reading**: сплит-панель (пассаж слева, вопросы справа), таймер секции.
- **IELTS Listening**: аудиоплеер с обработкой блокировки автовоспроизведения, таймкоды, таймер.
- **Digital SAT**: адаптивный формат модулей, вопросы с выбором ответа (MCQ), ввод численного ответа (Grid-In), встроенный калькулятор Desmos.
- **Flashcards (SuperMemo SM-2)**: интерактивный переворот карточки, оценка качества воспоминания от 0 до 5, автоматический расчёт интервалов и фактора лёгкости.

### Панель администратора и модератора (`/admin/*`)
- **Аналитика**: общее число студентов, прошедших онбординг, количество попыток за сегодня, очередь эссе.
- **Test Builder**: создание и публикация секций экзаменов и вопросов.
- **HITL Writing Queue**: ручная калибровка и переопределение оценок эссе по 4 критериям IELTS (Task Achievement, Coherence & Cohesion, Lexical Resource, Grammatical Range) с записью в журнал аудита `audit_logs`.

---

## 3. Быстрый запуск

### Запуск бэкенда (FastAPI)
```bash
cd "apps/api"
.venv\Scripts\uvicorn app.main:app --reload --port 8000
```
- API доступен по адресу: `http://127.0.0.1:8000`
- Swagger UI документация: `http://127.0.0.1:8000/docs`

### Запуск фронтенда (Next.js 15)
```bash
cd "apps/web"
npm run dev
```
- Веб-приложение доступно по адресу: `http://localhost:3000`
- Все запросы `/api/v1/*` автоматически проксируются на бэкенд FastAPI.

---

## 4. Тестирование

Бэкенд покрыт набором автотестов `pytest`:
```bash
cd "apps/api"
.venv\Scripts\pytest -v
```
Тесты проверяют:
1. `test_auth_register_flow`: регистрацию (201), уникальность email/username (409), валидацию (422), установку и проверку cookie сессии, логин (200), логаут (204).
2. `test_onboarding_strict_sequence`: запрет перехода к SAT без IELTS (403), запрет доступа к дашборду без завершения онбординга (403), успешное прохождение шагов 1 и 2 и открытие дашборда.
3. `test_flashcards_and_attempts`: интервальное повторение SM-2, создание и отправка попыток с подсчётом баллов, права администратора.

---

## 5. Предустановленные тестовые данные (Seed)
- **Учётная запись администратора**:
  - Логин: `admin` или `admin@example.com`
  - Пароль: `AdminPassword123!`
  - Роль: `admin` (доступны все экраны `/admin/*`)
- **Официальные сессии Digital SAT**: College Board сессии на 2026 и 2027 годы (март, май, июнь, август, октябрь, ноябрь, декабрь).
- **Карточки SM-2**: академический вокабуляр IELTS и SAT.
- **Опубликованные тесты**: пробные модули IELTS Reading и Digital SAT.
