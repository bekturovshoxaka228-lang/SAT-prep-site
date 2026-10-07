import { NextResponse } from "next/server";

const OPENROUTER_API_KEY =
  process.env.OPENROUTER_API_KEY ||
  "";
const OPENROUTER_MODEL =
  process.env.OPENROUTER_MODEL || "nvidia/nemotron-3.5-lightning:free";

const FALLBACK_MODELS = [
  "nvidia/nemotron-3.5-lightning:free",
  "nvidia/nemotron-3.5-lightning",
  "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free",
  "nvidia/nemotron-3-super-120b-a12b:free",
];

function extractJson(raw: string): any {
  const trimmed = raw.trim();
  try {
    return JSON.parse(trimmed);
  } catch {
    // try code block
    const m = trimmed.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
    if (m) {
      try {
        return JSON.parse(m[1]);
      } catch {}
    }
    const start = trimmed.indexOf("{");
    const end = trimmed.lastIndexOf("}");
    if (start !== -1 && end !== -1 && end > start) {
      return JSON.parse(trimmed.slice(start, end + 1));
    }
    throw new Error("Cannot parse JSON from model output");
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      task_prompt,
      question,
      user_solution,
      correct_answer,
      official_explanation,
      subject = "general",
      api_key,
      model,
    } = body;

    const key = api_key || OPENROUTER_API_KEY;
    const targetModel = model || OPENROUTER_MODEL;

    const systemPrompt = `Ты — первоклассный интерактивный ИИ-наставник по Digital SAT и IELTS, работающий на базе модели NVIDIA Nemotron 3.5.
Твоя задача — не просто сухо отвечать, а глубоко и понятно объяснять ответ («на пальцах», пошагово, раскрывая суть логики и ловушек College Board) И ОБЯЗАТЕЛЬНО задавать студенту интерактивный проверочный вопрос (Follow-Up Quiz) во время объяснения задачи, чтобы закрепить понимание!

Ты ДОЛЖЕН ответить строго в валидном JSON по следующей схеме:
{
  "answer": "Подробный педагогический разбор: интуиция, пошаговые действия, почему верный ответ именно такой и почему дистракторы не подходят (на русском языке)",
  "key_rule": "Краткое ключевое правило, формула или совет по ловушкам для экзамена",
  "detailed_breakdown": "Углубленное пошаговое объяснение деталей и тонкостей задачи с лайфхаками",
  "suggested_follow_up": ["Вопрос для уточнения 1", "Вопрос для уточнения 2"],
  "follow_up_quiz": {
    "question": "Интерактивный проверочный вопрос студенту на закрепление логики этой задачи",
    "options": [
      {"id": "A", "text": "Вариант 1", "is_correct": false, "feedback": "Пояснение ошибки"},
      {"id": "B", "text": "Вариант 2", "is_correct": true, "feedback": "Верно! Объяснение почему"},
      {"id": "C", "text": "Вариант 3", "is_correct": false, "feedback": "Пояснение ошибки"}
    ],
    "explanation": "Итоговое пояснение проверочного вопроса"
  }
}`;

    const userPrompt = `Условие задания:
${task_prompt}

Предмет / Секция: ${subject}
Правильный ответ: ${correct_answer || "Не указан"}
Официальное пояснение: ${official_explanation || "Не указано"}
Ответ студента: ${user_solution || "Не указан"}

Вопрос студента:
${question}

Ответь строго в формате JSON с подробным разбором и обязательным проверочным вопросом follow_up_quiz.`;

    const modelsToTry = [targetModel, ...FALLBACK_MODELS.filter((m) => m !== targetModel)];
    let lastError: any = null;

    for (const m of modelsToTry) {
      try {
        const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
          method: "POST",
          signal: AbortSignal.timeout(25000),
          headers: {
            Authorization: `Bearer ${key}`,
            "Content-Type": "application/json",
            "HTTP-Referer": "http://localhost:3000",
            "X-Title": "SAT & IELTS AI Platform",
          },
          body: JSON.stringify({
            model: m,
            messages: [
              { role: "system", content: systemPrompt },
              { role: "user", content: userPrompt },
            ],
            temperature: 0.2,
            response_format: { type: "json_object" },
          }),
        });

        if (res.ok) {
          const data = await res.json();
          const rawContent = data.choices?.[0]?.message?.content;
          if (rawContent) {
            const parsed = extractJson(rawContent);
            return NextResponse.json(parsed);
          }
        } else if ([429, 502, 503, 504].includes(res.status)) {
          lastError = `Model ${m} returned HTTP ${res.status}`;
          continue;
        } else {
          lastError = `Model ${m} returned HTTP ${res.status}`;
          break;
        }
      } catch (err: any) {
        lastError = err.message;
        continue;
      }
    }

    return NextResponse.json(
      { error: `OpenRouter Nemotron call failed: ${lastError}` },
      { status: 502 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
