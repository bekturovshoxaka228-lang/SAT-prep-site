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

const SYSTEM_PROMPT = `You are an expert pedagogical AI Assistant specialized in verifying and checking student solutions for standardized exams (Digital SAT and IELTS).
Follow this protocol:
1. Determine whether the solution is correct or an error was made.
2. If error detected:
   - error_quote: cite exact fragment where mistake occurred
   - violation_explanation: explain why this is an error
   - full_solution: complete step-by-step correct solution
   - analogous_example: simpler analogous problem, solution, and explanation
3. If correct:
   - correct_rationale: why reasoning is sound
   - key_takeaways: key rules to remember
Respond strictly with valid JSON:
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
}`;

function extractJson(raw: string): any {
  const trimmed = raw.trim();
  try {
    return JSON.parse(trimmed);
  } catch {
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
      user_solution,
      correct_answer,
      official_explanation,
      subject = "general",
      api_key,
      model,
    } = body;

    const key = api_key || OPENROUTER_API_KEY;
    const targetModel = model || OPENROUTER_MODEL;

    const promptContent = `Original Task:
${task_prompt}

Subject: ${subject}
Known Correct/Reference Answer: ${correct_answer || "Not provided"}
Reference Explanation: ${official_explanation || "Not provided"}

Student's Submitted Solution / Working / Answer:
${user_solution}

Evaluate strictly according to system instructions and return valid JSON.`;

    const modelsToTry = [targetModel, ...FALLBACK_MODELS.filter((m) => m !== targetModel)];
    let lastError: any = null;

    for (const m of modelsToTry) {
      try {
        const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${key}`,
            "Content-Type": "application/json",
            "HTTP-Referer": "http://localhost:3000",
            "X-Title": "SAT & IELTS AI Platform",
          },
          body: JSON.stringify({
            model: m,
            messages: [
              { role: "system", content: SYSTEM_PROMPT },
              { role: "user", content: promptContent },
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
