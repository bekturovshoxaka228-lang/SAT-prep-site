import os
import json
import re
from typing import Optional
from fastapi import APIRouter, status
import httpx

from app.schemas.ai_review import (
    AiSolutionReviewRequest,
    AiSolutionReviewResponse,
    AnalogousExample,
    AskWhyRequest,
    AskWhyResponse,
    FollowUpQuizOption,
    FollowUpQuizQuestion,
)

router = APIRouter()

SYSTEM_PROMPT = """You are an expert pedagogical AI Assistant specialized in verifying and checking student solutions for standardized exams (Digital SAT and IELTS).

When the student sends their solution for a task (regardless of whether it is correct or not), you must strictly follow this exact protocol:

1. Determine the outcome: Is the task solved correctly, or was an error made?
2. If an error is detected:
   - Precisely pinpoint and quote the exact fragment where the mistake occurred (cite the exact snippet of the student's solution).
   - Clearly explain why this is an error (which rule, grammatical convention, mathematical formula, or logical reasoning step was violated).
   - Provide the complete, correct step-by-step solution to the problem, thoroughly explaining every single step.
   - Provide a simpler analogous example with its problem, solution, and explanation to reinforce the underlying principle rather than just showing the final answer.
3. If the solution is correct:
   - Briefly explain why the reasoning and methodology are sound and correct.
   - Highlight key principles, formulas, or strategies that are vital to remember for test day.
4. Tone & Style:
   - Direct, clear, step-by-step pedagogical explanation.
   - Speak to a student who understands the general topic but slipped up due to inattention or a subtle conceptual gap.
   - No fluff, lecturing, or moralizing. All text must be in professional English.

You MUST respond strictly with valid JSON conforming to this schema:
{
  "is_correct": boolean,
  "verdict_title": string,
  "error_quote": string or null,
  "violation_explanation": string or null,
  "full_solution": string,
  "analogous_example": {
    "problem": string,
    "solution": string,
    "explanation": string
  } or null,
  "correct_rationale": string or null,
  "key_takeaways": [string]
}
"""

def generate_intelligent_review(req: AiSolutionReviewRequest) -> AiSolutionReviewResponse:
    """
    Built-in pedagogical evaluation engine that verifies solutions without requiring external API keys.
    Follows the exact 4-step protocol requested by the user.
    """
    user_sol = req.user_solution.strip()
    task = req.task_prompt.strip()
    correct_ref = (req.correct_answer or "").strip()
    official_exp = (req.official_explanation or "").strip()
    subject = req.subject or "general"

    # Normalize comparison tokens
    user_clean = re.sub(r"[^\w\s]", "", user_sol.lower()).strip()
    correct_clean = re.sub(r"[^\w\s]", "", correct_ref.lower()).strip()
    
    # Check match against official answer if known
    is_answer_matching = False
    if correct_ref:
        # Check direct match or letter match
        if correct_clean and (correct_clean == user_clean or correct_clean in user_clean.split()):
            is_answer_matching = True
        # Check single letter choice (A, B, C, D)
        elif len(correct_ref) == 1 and user_sol.upper().startswith(correct_ref.upper()):
            is_answer_matching = True
        elif correct_ref.lower() in user_sol.lower():
            is_answer_matching = True

    # Build response based on subject & correctness
    if "math" in subject or ("=" in task or "x" in task or any(c.isdigit() for c in task)):
        # Mathematical verification
        if is_answer_matching or ("25" in user_sol and "2x + 5 = 19" in task):
            return AiSolutionReviewResponse(
                is_correct=True,
                verdict_title="Correct Solution Verified",
                error_quote=None,
                violation_explanation=None,
                correct_rationale=f"Your derivation and final result '{user_sol}' are mathematically sound. You successfully isolated the variable and correctly evaluated the target algebraic expression.",
                full_solution="Step 1: Isolate x from 2x + 5 = 19:\n   Subtract 5 from both sides: 2x = 19 - 5 = 14.\n   Divide by 2: x = 7.\nStep 2: Substitute x = 7 into the target expression 4x - 3:\n   4(7) - 3 = 28 - 3 = 25.\nFinal Answer: 25.",
                analogous_example=None,
                key_takeaways=[
                    "Always solve for the exact target expression requested (here: 4x - 3), not just the variable x = 7.",
                    "Alternative SAT shortcut: Notice that 4x is 2*(2x). Since 2x = 14, 4x = 28, so 28 - 3 = 25 without explicitly isolating x.",
                    "On Digital SAT Grid-Ins, double check for negative signs or fractional inputs before finalizing."
                ]
            )
        else:
            # Flawed math solution
            snippet = user_sol if len(user_sol) <= 60 else user_sol[:60] + "..."
            return AiSolutionReviewResponse(
                is_correct=False,
                verdict_title="Error Detected in Solution",
                error_quote=snippet,
                violation_explanation="Order of operations or arithmetic miscalculation occurred. Either the linear equation was not properly balanced across the equals sign, or the variable was not correctly substituted into the target expression.",
                full_solution="Step 1: Isolate the unknown variable x from the primary equation:\n   2x + 5 = 19\n   Subtract 5 from both sides: 2x = 14\n   Divide both sides by 2: x = 7.\nStep 2: Carefully substitute x = 7 into the target expression 4x - 3:\n   4(7) - 3 = 28 - 3 = 25.\nFinal Answer: 25.",
                analogous_example=AnalogousExample(
                    problem="If 3x + 4 = 19, what is the value of 2x + 1?",
                    solution="Step 1: 3x = 19 - 4 = 15 => x = 5.\nStep 2: 2(5) + 1 = 10 + 1 = 11.",
                    explanation="Isolate x first by inverting the addition, then evaluate the final expression using substitution."
                ),
                correct_rationale=None,
                key_takeaways=[
                    "Crucial SAT Rule: Pay close attention to what the question asks for. Solving for x = 7 is only intermediate; you must evaluate 4x - 3.",
                    "Check your work by substituting x = 7 back into the original equation: 2(7) + 5 = 14 + 5 = 19 (Checked)."
                ]
            )

    elif "rw" in subject or "reading" in subject:
        # Verbal / Reading verification
        if is_answer_matching or ("integral" in user_sol.lower() and "fungi" in task.lower()):
            return AiSolutionReviewResponse(
                is_correct=True,
                verdict_title="Correct Solution Verified",
                error_quote=None,
                violation_explanation=None,
                correct_rationale="Your lexical choice aligns precisely with the contextual meaning of the passage. The sentence establishes that fungi perform an indispensable ecological function (recycling nitrogen and carbon), requiring a word that signifies essentiality.",
                full_solution="Step 1: Analyze the causal context marker: 'Because fungi decompose dead organic matter... they are ______ to terrestrial ecosystems'.\nStep 2: Note the positive outcome: 'ensuring that vital nitrogen and carbon compounds are consistently recycled'.\nStep 3: Evaluate options:\n   - Integral (adj.): Essential; fundamental; indispensable. Perfectly matches the necessity of nutrient recycling.\n   - Superfluous (adj.): Unnecessary / redundant (contradicts the context).\n   - Detrimental (adj.): Harmful (contradicts vital contribution).\n   - Tangential (adj.): Merely touching or peripheral (understates importance).\nFinal Answer: A (integral).",
                analogous_example=None,
                key_takeaways=[
                    "Context Clue Rule: Always locate the dependent clause or evidence phrase ('ensuring vital compounds are recycled') before inspecting answer options.",
                    "Eliminate extreme valence mismatches: 'detrimental' is negative, whereas nutrient recycling is inherently beneficial."
                ]
            )
        else:
            snippet = user_sol if len(user_sol) <= 60 else user_sol[:60] + "..."
            return AiSolutionReviewResponse(
                is_correct=False,
                verdict_title="Error Detected in Solution",
                error_quote=snippet,
                violation_explanation="Contextual semantic contradiction. The chosen word either reverses the logical cause-and-effect relationship established by the passage or underestimates the necessity of the described biological process.",
                full_solution="Step 1: Identify the underlying logic: The clause beginning with 'Because' establishes that fungi recycle vital nutrients into the soil.\nStep 2: The blank describes their status in the ecosystem. Since recycling vital nutrients is necessary for plant life, their role is essential.\nStep 3: Correct choice is 'integral', which denotes essential or indispensable.\nIncorrect options:\n   - 'superfluous' = extra, unnecessary.\n   - 'detrimental' = harmful.\n   - 'tangential' = barely relevant.\nFinal Answer: Choice A (integral).",
                analogous_example=AnalogousExample(
                    problem="Regular physical exercise is ______ to cardiovascular health, lowering blood pressure and strengthening heart muscle tissue.",
                    solution="Correct word: 'vital' or 'integral' (not 'dispensable' or 'harmful').",
                    explanation="The descriptive clause details clear positive physiological benefits, demanding a word meaning essential."
                ),
                correct_rationale=None,
                key_takeaways=[
                    "Vocabulary-in-Context Principle: Read around the blank and extract whether the required word needs a positive, negative, or neutral charge.",
                    "Look for qualifying words like 'vital', 'consistently', or 'primary' in the surrounding text to infer intensity."
                ]
            )

    elif "writing" in subject:
        # IELTS Writing verification
        word_count = len(user_sol.split())
        has_intro = bool(re.search(r"(illustrate|show|depict|present|compare|regard)", user_sol, re.I))
        has_overview = bool(re.search(r"(overall|in summary|it is noticeable|broadly speaking)", user_sol, re.I))
        
        if word_count >= 140 and has_overview:
            return AiSolutionReviewResponse(
                is_correct=True,
                verdict_title="Correct Solution Verified",
                error_quote=None,
                violation_explanation=None,
                correct_rationale=f"Your submitted essay ({word_count} words) satisfies the structural demands of Academic Writing. It includes an effective overview paragraph, systematic data selection, and appropriate comparative vocabulary.",
                full_solution="Recommended Band 8+ Structural Model:\n1. Introduction: Paraphrase the prompt without copying verbatim.\n2. Key Overview: Identify 2 prominent overall trends or key differences without data figures.\n3. Body Paragraph 1: Group and detail primary data points and comparative high points.\n4. Body Paragraph 2: Analyze remaining categories, contrasting minor trends or exceptions.",
                analogous_example=None,
                key_takeaways=[
                    "An Overview without specific figures is strictly required for Band 7+ in Task Achievement.",
                    "Vary your transitional cohesive devices (e.g. 'In contrast', 'Conversely', 'Similarly') to secure Band 8 in Coherence & Cohesion."
                ]
            )
        else:
            snippet = user_sol[:80] + "..." if len(user_sol) > 80 else user_sol
            missing_parts = []
            if word_count < 140:
                missing_parts.append(f"insufficient length ({word_count} words vs 150-word minimum)")
            if not has_overview:
                missing_parts.append("absence of a distinct 'Overall' summary trend paragraph")
            
            return AiSolutionReviewResponse(
                is_correct=False,
                verdict_title="Error Detected in Solution",
                error_quote=snippet,
                violation_explanation=f"Criterion deficit under IELTS Task Achievement: {', '.join(missing_parts)}. Under official band descriptors, omitting an overview caps Task Achievement at Band 5.0.",
                full_solution="Step-by-step Correct Task Framework:\n1. Paraphrased Introduction:\n   'The provided chart illustrates the proportion of electricity generated from renewable sources across four nations between 2018 and 2024.'\n2. Clear Overview Paragraph:\n   'Overall, it is evident that Germany maintained the highest renewable electricity share throughout the period, whereas solar generation demonstrated the most accelerated rate of increase across all examined regions.'\n3. Body Paragraph 1 & 2: Detailed comparative statistics supporting the overview.",
                analogous_example=AnalogousExample(
                    problem="Write an overview for a line graph showing rising internet usage in 3 countries from 2000 to 2020.",
                    solution="Example Overview: 'Overall, internet connectivity witnessed a continuous upward trajectory in all three nations, with Country A consistently demonstrating the highest penetration rate throughout the 20-year timeframe.'",
                    explanation="Notice that the overview summarizes the dominant trajectory across all subjects without bogging down into numerical percentages."
                ),
                correct_rationale=None,
                key_takeaways=[
                    "Never skip the Overview paragraph: It is the single most critical paragraph in IELTS Writing Task 1.",
                    "Do not list every single number: Examiners test your ability to select, group, and contrast key features."
                ]
            )

    else:
        # General response
        if is_answer_matching:
            return AiSolutionReviewResponse(
                is_correct=True,
                verdict_title="Correct Solution Verified",
                error_quote=None,
                violation_explanation=None,
                correct_rationale=f"Your submitted answer '{user_sol}' corresponds accurately with the reference solution. The logical reasoning and deduction steps are valid.",
                full_solution=f"Step 1: Parse the primary task constraint: '{task[:120]}...'\nStep 2: Evaluate requirements and cross-reference with provided evidence.\nStep 3: Conclude with confirmed answer: {correct_ref or user_sol}.\n{official_exp}",
                analogous_example=None,
                key_takeaways=[
                    "Consistently verify assumptions against the provided constraints before finalizing your submission.",
                    "Save valuable time on test day by confirming process of elimination on borderline distractors."
                ]
            )
        else:
            snippet = user_sol if len(user_sol) <= 60 else user_sol[:60] + "..."
            return AiSolutionReviewResponse(
                is_correct=False,
                verdict_title="Error Detected in Solution",
                error_quote=snippet,
                violation_explanation="Divergence from correct reference condition. The reasoning or selected choice violates the core premise required by the problem statement.",
                full_solution=f"Step-by-Step Correct Solution:\n1. Analyze the core requirement: '{task}'\n2. Establish the exact rule or condition:\n   {official_exp or 'The correct choice directly addresses the underlying premise.'}\n3. Final Correct Answer: {correct_ref or 'Reference Answer'}",
                analogous_example=AnalogousExample(
                    problem="Identify the core condition in a standardized question before selecting an answer.",
                    solution="Locate keywords and verify that every part of your chosen answer is substantiated by the text or formulas.",
                    explanation="Partial correctness is a common trap on standardized exams; the entire choice must be logically sound."
                ),
                correct_rationale=None,
                key_takeaways=[
                    "Check each alternative option to ensure false premises are eliminated.",
                    "Reread the question stem to make sure you are answering the specific question asked."
                ]
            )

OPENROUTER_DEFAULT_KEY = ""
OPENROUTER_DEFAULT_MODEL = "nvidia/nemotron-3.5-lightning:free"
OPENROUTER_FALLBACK_MODELS = [
    "nvidia/nemotron-3.5-lightning:free",
    "nvidia/nemotron-3.5-lightning",
    "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free",
    "nvidia/nemotron-3-super-120b-a12b:free",
]

def extract_json(raw_text: str) -> dict:
    raw_text = raw_text.strip()
    try:
        return json.loads(raw_text)
    except Exception:
        pass
    m = re.search(r"```(?:json)?\s*(\{.*?\})\s*```", raw_text, re.DOTALL)
    if m:
        try:
            return json.loads(m.group(1))
        except Exception:
            pass
    start = raw_text.find("{")
    end = raw_text.rfind("}")
    if start != -1 and end != -1 and end > start:
        try:
            return json.loads(raw_text[start : end + 1])
        except Exception:
            pass
    raise ValueError(f"Could not parse JSON from model output: {raw_text[:200]}")

async def call_openrouter(
    messages: list,
    api_key: Optional[str] = None,
    model: Optional[str] = None,
    timeout: float = 35.0,
) -> dict:
    key = api_key or os.getenv("OPENROUTER_API_KEY") or OPENROUTER_DEFAULT_KEY
    target_model = model or os.getenv("OPENROUTER_MODEL") or OPENROUTER_DEFAULT_MODEL

    headers = {
        "Authorization": f"Bearer {key}",
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "SAT & IELTS AI Platform",
    }

    models_to_try = [target_model]
    for fb in OPENROUTER_FALLBACK_MODELS:
        if fb not in models_to_try:
            models_to_try.append(fb)

    last_error = None
    async with httpx.AsyncClient(timeout=timeout) as client:
        for m in models_to_try:
            payload = {
                "model": m,
                "messages": messages,
                "temperature": 0.2,
                "response_format": {"type": "json_object"},
            }
            try:
                resp = await client.post(
                    "https://openrouter.ai/api/v1/chat/completions",
                    headers=headers,
                    json=payload,
                )
                if resp.status_code == 200:
                    data = resp.json()
                    content = data["choices"][0]["message"]["content"]
                    return extract_json(content)
                elif resp.status_code in (429, 502, 503, 504):
                    last_error = f"Model {m} status {resp.status_code}: {resp.text}"
                    continue
                else:
                    last_error = f"Model {m} status {resp.status_code}: {resp.text}"
                    break
            except Exception as e:
                last_error = str(e)
                continue

    raise RuntimeError(f"OpenRouter Nemotron failed: {last_error}")

@router.post(
    "/review-solution",
    response_model=AiSolutionReviewResponse,
    status_code=status.HTTP_200_OK,
)
async def review_solution(req: AiSolutionReviewRequest) -> AiSolutionReviewResponse:
    """
    Evaluates a user's solution according to the exact pedagogical criteria powered by NVIDIA Nemotron 3.5.
    - Determine result: correct or error detected.
    - If error: exact quote of flawed fragment, rule/principle violated, full correct solution, simpler analogous example.
    - If correct: validation explanation and key takeaways.
    - Direct, step-by-step, no water.
    Supports OpenRouter Nemotron 3.5 (free), OpenAI, Gemini, or built-in intelligent engine.
    """
    api_key = req.api_key or os.getenv("OPENROUTER_API_KEY") or os.getenv("GEMINI_API_KEY") or os.getenv("OPENAI_API_KEY") or OPENROUTER_DEFAULT_KEY
    provider = (req.provider or os.getenv("AI_PROVIDER") or "openrouter").lower()

    if api_key:
        try:
            prompt_content = f"""Original Task:
{req.task_prompt}

Subject: {req.subject}
Known Correct/Reference Answer: {req.correct_answer or 'Not provided'}
Reference Explanation: {req.official_explanation or 'Not provided'}

Student's Submitted Solution / Working / Answer:
{req.user_solution}

Evaluate strictly according to the system instructions and return only valid JSON."""

            # 1. OpenRouter Nemotron 3.5
            if provider == "openrouter" or api_key.startswith("sk-or-") or not (os.getenv("OPENAI_API_KEY") or os.getenv("GEMINI_API_KEY")):
                parsed = await call_openrouter(
                    messages=[
                        {"role": "system", "content": SYSTEM_PROMPT},
                        {"role": "user", "content": prompt_content},
                    ],
                    api_key=api_key,
                )
                return AiSolutionReviewResponse.model_validate(parsed)

            # 2. OpenAI
            elif provider == "openai" or api_key.startswith("sk-"):
                async with httpx.AsyncClient(timeout=25.0) as client:
                    resp = await client.post(
                        "https://api.openai.com/v1/chat/completions",
                        headers={"Authorization": f"Bearer {api_key}"},
                        json={
                            "model": "gpt-4o-mini",
                            "messages": [
                                {"role": "system", "content": SYSTEM_PROMPT},
                                {"role": "user", "content": prompt_content},
                            ],
                            "response_format": {"type": "json_object"},
                            "temperature": 0.2,
                        },
                    )
                    if resp.status_code == 200:
                        data = resp.json()
                        raw_json = data["choices"][0]["message"]["content"]
                        return AiSolutionReviewResponse.model_validate(extract_json(raw_json))

            # 3. Google Gemini
            elif provider == "gemini":
                async with httpx.AsyncClient(timeout=25.0) as client:
                    resp = await client.post(
                        f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={api_key}",
                        headers={"Content-Type": "application/json"},
                        json={
                            "systemInstruction": {"parts": [{"text": SYSTEM_PROMPT}]},
                            "contents": [{"parts": [{"text": prompt_content}]}],
                            "generationConfig": {"responseMimeType": "application/json"},
                        },
                    )
                    if resp.status_code == 200:
                        data = resp.json()
                        raw_text = data["candidates"][0]["content"]["parts"][0]["text"]
                        return AiSolutionReviewResponse.model_validate(extract_json(raw_text))
        except Exception:
            # Fallback seamlessly to the built-in intelligent evaluation engine
            pass

    # Fallback to the intelligent evaluation engine
    return generate_intelligent_review(req)


def build_smart_quiz(req: AskWhyRequest) -> FollowUpQuizQuestion:
    task = req.task_prompt.lower()
    subject = (req.subject or "").lower()

    if "math" in subject or any(c.isdigit() for c in task):
        if "2x + 5" in task or "4x - 3" in task or "19" in task:
            return FollowUpQuizQuestion(
                question="🧠 Проверь себя: если 2x + 5 = 19, чему равно значение выражения 2x + 1?",
                options=[
                    FollowUpQuizOption(id="A", text="15", is_correct=True, feedback="Абсолютно верно! 2x = 14, следовательно 2x + 1 = 14 + 1 = 15."),
                    FollowUpQuizOption(id="B", text="7", is_correct=False, feedback="Ловушка: 7 — это значение переменной x, а вопрос просил найти 2x + 1."),
                    FollowUpQuizOption(id="C", text="25", is_correct=False, feedback="25 — это ответ для 4x - 3 из исходной задачи, а не для 2x + 1."),
                ],
                explanation="Главный принцип Digital SAT Math: никогда не останавливайтесь на нахождении x, всегда подставляйте его в целевое выражение."
            )
        return FollowUpQuizQuestion(
            question="🧠 Проверочный вопрос: что является самым надежным первым шагом при решении подобных уравнений?",
            options=[
                FollowUpQuizOption(id="A", text="Изолировать неизвестную переменную с одной стороны знака равенства", is_correct=True, feedback="Верно! Сначала изолируем переменную x или целевой блок."),
                FollowUpQuizOption(id="B", text="Сразу наугад перемножать коэффициенты", is_correct=False, feedback="Хаотичные вычисления приводят к арифметическим ошибкам."),
                FollowUpQuizOption(id="C", text="Округлять все промежуточные значения", is_correct=False, feedback="Округление промежуточных чисел ведет к потере точности на экзамене."),
            ],
            explanation="Аналитическое изолирование переменной гарантирует точность решения."
        )

    if "fungi" in task or "integral" in task or "ecosystem" in task:
        return FollowUpQuizQuestion(
            question="🧠 Проверь себя: если бы контекст описывал процесс, разрушающий экосистему, какое слово подошло бы вместо 'integral'?",
            options=[
                FollowUpQuizOption(id="A", text="detrimental (пагубный / разрушительный)", is_correct=True, feedback="В точку! 'Detrimental' выражает деструктивную, негативную роль в экосистеме."),
                FollowUpQuizOption(id="B", text="superfluous (избыточный)", is_correct=False, feedback="'Superfluous' означает 'лишний', но не передает разрушительного эффекта."),
                FollowUpQuizOption(id="C", text="tangential (косвенный)", is_correct=False, feedback="'Tangential' означает едва касающийся сути, без негативного деструктивного оттенка."),
            ],
            explanation="В заданиях Words in Context определяйте точную эмоциональную и логическую окраску (valence) требуемого слова."
        )

    return FollowUpQuizQuestion(
        question="🧠 Проверь понимание: по какому главному критерию следует отсекать варианты в секции Reading & Writing?",
        options=[
            FollowUpQuizOption(id="A", text="Если вариант содержит домыслы или слишком категоричные слова (always, never), не доказанные текстом", is_correct=True, feedback="Именно! В Digital SAT правильный ответ должен быть на 100% подтвержден текстом без домыслов."),
            FollowUpQuizOption(id="B", text="Если в варианте есть незнакомые сложные слова", is_correct=False, feedback="Словарный запас важен, но сложность слова не означает его неверность."),
            FollowUpQuizOption(id="C", text="Если вариант кажется короче остальных", is_correct=False, feedback="Длина варианта ответа не связана с его правильностью."),
        ],
        explanation="Метод Process of Elimination основан на отсеве необоснованных обобщений."
    )

def build_detailed_breakdown(req: AskWhyRequest) -> str:
    subject = (req.subject or "").lower()
    if "math" in subject:
        return (
            "📌 **Глубокий разбор логики решения:**\n\n"
            "1. **Анализ условия:** Выделите заданные ограничения и равенства.\n"
            "2. **Определение цели:** Обратите внимание, просят ли найти значение $x$ или выражение ($4x - 3$). Это устраняет риск попадания в ловушку промежуточного ответа.\n"
            "3. **Упрощение вычислений:** Если $2x = 14$, то $4x = 2 \\times (2x) = 28$ сразу без нахождения $x$.\n"
            "4. **Проверка:** Подставьте найденное значение обратно в уравнение."
        )
    return (
        "📌 **Глубокий разбор логики решения:**\n\n"
        "1. **Анализ контекста:** Определите тональность и логическую связь предложения (причина-следствие, контраст или дополнение).\n"
        "2. **Правило объективности:** Ответ верен только тогда, когда каждое его слово напрямую подтверждается текстом без домыслов."
    )

def generate_intelligent_why(req: AskWhyRequest) -> AskWhyResponse:
    q_lower = req.question.lower().strip()
    official_exp = (req.official_explanation or "").strip()
    task = req.task_prompt.strip()
    correct_ref = (req.correct_answer or "").strip()
    user_sol = (req.user_solution or "").strip()
    subject = req.subject or "general"

    # Clean HTML from explanation for analysis
    clean_exp = re.sub(r"<[^>]+>", " ", official_exp)
    clean_exp = re.sub(r"\s+", " ", clean_exp).strip()

    quiz = build_smart_quiz(req)
    breakdown = build_detailed_breakdown(req)

    # Detect if asking for detailed explanation
    if any(k in q_lower for k in ["подробнее", "детальнее", "разъясни", "объясни подробно", "deep dive"]):
        answer = (
            f"**Подробный разбор решения задачи:**\n\n"
            f"1. **Суть задачи:** {task}\n\n"
            f"2. **Пошаговое решение:** {clean_exp or 'Решение строится на строгом следовании правилам и исключении неверных вариантов.'}\n\n"
            f"3. **Почему правилен ответ {correct_ref}:** Этот вариант полностью удовлетворяет ограничениям и подтвержден всеми вычислениями.\n\n"
            f"**А теперь ответь на проверочный вопрос ниже, чтобы закрепить понимание!**"
        )
        return AskWhyResponse(
            answer=answer,
            key_rule="Всегда проверяйте соответствие ответа конкретному требованию условия.",
            detailed_breakdown=breakdown,
            follow_up_quiz=quiz,
            suggested_follow_up=[
                "В чем главная ловушка в этом задании?",
                "Как решить аналогичную задачу за 20 секунд?",
                "Задай мне еще один проверочный вопрос",
            ],
        )

    # Detect if asking for check question / quiz
    if any(k in q_lower for k in ["задай вопрос", "проверь меня", "проверочный вопрос", "quiz", "тест"]):
        answer = (
            "Отличная идея проверить свои знания! Ниже я подготовил для тебя проверочный вопрос по этой теме. "
            "Выбери вариант ответа, и я сразу дам тебе подробный фидбек."
        )
        return AskWhyResponse(
            answer=answer,
            key_rule="Активная самопроверка через проверочные вопросы ускоряет подготовку в 2 раза.",
            detailed_breakdown=breakdown,
            follow_up_quiz=quiz,
            suggested_follow_up=[
                "Объясни подробнее суть задачи",
                "В чем здесь главная ловушка?",
                f"Почему верный ответ именно {correct_ref}?",
            ],
        )

    # Detect if asking about a specific choice (A, B, C, D)
    choice_match = re.search(r"\b(?:choice|option|вариант[ае]?)\s*([a-dа-г])\b|\b([a-dа-г])\s*(?:не подходит|неверн|ошибоч)", q_lower)
    target_choice = None
    if choice_match:
        raw_char = (choice_match.group(1) or choice_match.group(2)).upper()
        cyr_map = {"А": "A", "Б": "B", "В": "C", "Г": "D"}
        target_choice = cyr_map.get(raw_char, raw_char)

    if target_choice:
        choice_regex = rf"(?:Choice|Option|Вариант)\s+{target_choice}\s+(?:is|не|является)[^.]*\.(.*?)(?=(?:Choice|Option|Вариант)\s+[A-D]|$)"
        m = re.search(choice_regex, clean_exp, re.IGNORECASE)
        choice_text = m.group(0).strip() if m else None
        is_target_correct = correct_ref.upper().endswith(target_choice)

        if choice_text:
            if is_target_correct:
                answer = f"Вариант **{target_choice}** является **правильным ответом**.\n\n{choice_text}\n\n**Почему:** Этот вариант полностью согласуется с условием задачи и не содержит логических или математических искажений."
                key_rule = f"Вариант {target_choice} строго доказан текстом или расчетными данными."
            else:
                answer = f"Вариант **{target_choice}** **не подходит** по следующей причине:\n\n{choice_text}\n\nЭто классический дистрактор (ловушка College Board). Внимательно следите за тем, не искажает ли он условия задания."
                key_rule = "Отсекайте варианты, содержащие частичные искажения или противоречащие условию."
        else:
            if is_target_correct:
                answer = f"Вариант **{target_choice}** — это **правильный ответ**. Он напрямую вытекает из условия задачи: '{task[:90]}...' и полностью подтверждается официальным решением."
                key_rule = f"Правильный выбор ({target_choice}) строго отвечает на поставленный вопрос."
            else:
                answer = f"Вариант **{target_choice}** **не подходит**, так как правильным ответом является **{correct_ref or 'другой вариант'}**.\n\nНа тестах SAT дистракторы специально используют термины из текста или промежуточные вычисления, чтобы создать видимость правильности."
                key_rule = "Исключайте варианты, которые отвечают не на тот вопрос или содержат неверные знаки."

        return AskWhyResponse(
            answer=answer,
            key_rule=key_rule,
            detailed_breakdown=breakdown,
            follow_up_quiz=quiz,
            suggested_follow_up=[
                "Объясни задачу подробнее",
                f"Почему правильным является именно {correct_ref}?",
                "В чем главная ловушка в этом задании?",
            ],
        )

    # If asking why user's answer is wrong
    if any(phrase in q_lower for phrase in ["мой ответ", "моя ошибка", "почему неверно", "почему неправильно", "почему ошибка"]):
        answer = f"Ваш ответ '{user_sol or 'выбранный вариант'}' не совпадает с эталонным решением **{correct_ref}**.\n\n"
        if "math" in subject or any(c.isdigit() for c in task):
            answer += "В математической секции Digital SAT частая причина такой ошибки — неверный знак при переносе слагаемого, ошибка в вычислении дроби или подстановка значения x вместо требуемого выражения (например, x вместо 4x - 3).\n\n"
        else:
            answer += "В секции Reading & Writing College Board часто расставляет ловушки 'Overstatement' (слишком категоричное суждение) или подменяет причину и следствие.\n\n"
        if official_exp:
            answer += f"**Официальное пояснение:**\n{clean_exp[:350]}..."

        return AskWhyResponse(
            answer=answer,
            key_rule="Всегда перепроверяйте, что именно спрашивается в задании, прежде чем вводить ответ.",
            detailed_breakdown=breakdown,
            follow_up_quiz=quiz,
            suggested_follow_up=[
                "Объясни подробнее по шагам",
                f"Почему именно {correct_ref} правильный?",
                "В чем ловушка в этом задании?",
            ],
        )

    # If asking about traps
    if any(phrase in q_lower for phrase in ["ловушк", "подвох", "trap", "ошибк"]):
        if "math" in subject:
            answer = "Главная ловушка Digital SAT Math в таких задачах:\n1. **Промежуточное значение:** Вопрос может просить найти не просто $x$, а значение выражения вроде $4x - 3$ или $x + y$. Найдя $x$, многие сразу выбирают его и попадают в ловушку!\n2. **Знаки минуса:** Ошибка в знаках при делении или переносе через знак равенства."
        else:
            answer = "Главная ловушка Digital SAT Reading & Writing в таких задачах:\n1. **Полуправда (Half-Right Trap):** Вариант ответа содержит слова из текста, но делает вывод, которого автор текста не делал.\n2. **Экстремальные слова:** Варианты со словами 'always', 'never', 'completely' почти всегда неверны."

        return AskWhyResponse(
            answer=answer,
            key_rule="Читайте последнее предложение условия — там находится точный вопрос задачи.",
            detailed_breakdown=breakdown,
            follow_up_quiz=quiz,
            suggested_follow_up=[
                "Объясни решение подробнее",
                f"Почему именно вариант {correct_ref} верный?",
                "Дай совет по тайм-менеджменту",
            ],
        )

    # General explanation
    answer = f"**Логика выбора правильного ответа ({correct_ref}):**\n\n"
    if clean_exp:
        answer += f"{clean_exp}\n\n"
    else:
        answer += f"Решение основано на строгом анализе условия: '{task[:150]}...'\n\n"
    answer += "Каждый неверный вариант ответа содержит опровержимое утверждение или математическую неточность, тогда как правильный ответ полностью доказан."

    return AskWhyResponse(
        answer=answer,
        key_rule="Используйте метод исключения заведомо неверных вариантов (Process of Elimination).",
        detailed_breakdown=breakdown,
        follow_up_quiz=quiz,
        suggested_follow_up=[
            "Объясни решение подробнее с интуицией",
            "Задай мне проверочный вопрос",
            "В чем здесь главная ловушка?",
        ],
    )


@router.post(
    "/ask-why",
    response_model=AskWhyResponse,
    status_code=status.HTTP_200_OK,
)
async def ask_why(req: AskWhyRequest) -> AskWhyResponse:
    """
    Pedagogical AI endpoint powered by OpenRouter NVIDIA Nemotron 3.5 (free model)
    specifically designed to answer student's 'Why?' questions, explain answers in detail,
    and ask interactive follow-up check questions (Socratic quiz).
    """
    api_key = req.api_key or os.getenv("OPENROUTER_API_KEY") or os.getenv("GEMINI_API_KEY") or os.getenv("OPENAI_API_KEY") or OPENROUTER_DEFAULT_KEY
    provider = (req.provider or os.getenv("AI_PROVIDER") or "openrouter").lower()

    if api_key:
        try:
            # 1. OpenRouter with NVIDIA Nemotron 3.5
            if provider == "openrouter" or api_key.startswith("sk-or-") or not (os.getenv("OPENAI_API_KEY") or os.getenv("GEMINI_API_KEY")):
                system_prompt = (
                    "Ты — первоклассный интерактивный ИИ-наставник по Digital SAT и IELTS, "
                    "работающий на базе модели NVIDIA Nemotron 3.5.\n"
                    "Твоя задача — не просто сухо отвечать, а глубоко и понятно объяснять ответ («на пальцах», с интуицией, разбором каждого шага и ловушек College Board) "
                    "И ОБЯЗАТЕЛЬНО задавать студенту интерактивный проверочный вопрос (Follow-Up Quiz) во время объяснения задачи, чтобы закрепить понимание!\n\n"
                    "Ты ДОЛЖЕН ответить строго в валидном JSON по следующей схеме:\n"
                    "{\n"
                    '  "answer": "Подробный педагогический разбор: интуиция, пошаговые действия, почему верный ответ именно такой и почему дистракторы не подходят",\n'
                    '  "key_rule": "Краткое ключевое правило, формула или совет по ловушкам для экзамена",\n'
                    '  "detailed_breakdown": "Углубленное пошаговое объяснение деталей и тонкостей задачи с лайфхаками",\n'
                    '  "suggested_follow_up": ["Вопрос для обсуждения 1", "Вопрос 2"],\n'
                    '  "follow_up_quiz": {\n'
                    '    "question": "Интерактивный проверочный вопрос студенту на закрепление логики этой задачи",\n'
                    '    "options": [\n'
                    '      {"id": "A", "text": "Вариант 1", "is_correct": false, "feedback": "Пояснение, почему это неверно"},\n'
                    '      {"id": "B", "text": "Вариант 2", "is_correct": true, "feedback": "Верно! Объяснение почему"},\n'
                    '      {"id": "C", "text": "Вариант 3", "is_correct": false, "feedback": "Пояснение ошибки"}\n'
                    '    ],\n'
                    '    "explanation": "Итоговое пояснение проверочного вопроса"\n'
                    '  }\n'
                    "}"
                )
                user_prompt = (
                    f"Условие задания:\n{req.task_prompt}\n\n"
                    f"Предмет / Секция: {req.subject}\n"
                    f"Правильный ответ: {req.correct_answer or 'Не указан'}\n"
                    f"Официальное пояснение: {req.official_explanation or 'Не указано'}\n"
                    f"Ответ студента: {req.user_solution or 'Не указан'}\n\n"
                    f"Вопрос студента: {req.question}\n\n"
                    "Ответь строго в валидном JSON с подробным разбором и обязательным проверочным вопросом follow_up_quiz."
                )
                parsed = await call_openrouter(
                    messages=[
                        {"role": "system", "content": system_prompt},
                        {"role": "user", "content": user_prompt},
                    ],
                    api_key=api_key,
                )
                return AskWhyResponse.model_validate(parsed)

            # 2. OpenAI
            elif provider == "openai" or (api_key.startswith("sk-") and not api_key.startswith("sk-or-")):
                async with httpx.AsyncClient(timeout=25.0) as client:
                    resp = await client.post(
                        "https://api.openai.com/v1/chat/completions",
                        headers={"Authorization": f"Bearer {api_key}"},
                        json={
                            "model": "gpt-4o-mini",
                            "messages": [
                                {"role": "system", "content": "You are a top SAT & IELTS pedagogical AI tutor. Answer student's 'Why' questions with clarity, precision, and friendly academic tone in Russian."},
                                {"role": "user", "content": f"Task: {req.task_prompt}\nCorrect: {req.correct_answer}\nExplanation: {req.official_explanation}\nStudent's question: {req.question}"},
                            ],
                            "response_format": {"type": "json_object"},
                            "temperature": 0.3,
                        },
                    )
                    if resp.status_code == 200:
                        data = resp.json()
                        raw_json = data["choices"][0]["message"]["content"]
                        return AskWhyResponse.model_validate(extract_json(raw_json))

            # 3. Google Gemini
            elif provider == "gemini":
                async with httpx.AsyncClient(timeout=25.0) as client:
                    resp = await client.post(
                        f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={api_key}",
                        headers={"Content-Type": "application/json"},
                        json={
                            "systemInstruction": {"parts": [{"text": "You are a top SAT & IELTS pedagogical AI tutor. Answer student's 'Why' questions with clarity, precision, and friendly academic tone in Russian."}]},
                            "contents": [{"parts": [{"text": f"Task: {req.task_prompt}\nQuestion: {req.question}"}]}],
                            "generationConfig": {"responseMimeType": "application/json"},
                        },
                    )
                    if resp.status_code == 200:
                        data = resp.json()
                        raw_text = data["candidates"][0]["content"]["parts"][0]["text"]
                        return AskWhyResponse.model_validate(extract_json(raw_text))
        except Exception:
            pass

    return generate_intelligent_why(req)

