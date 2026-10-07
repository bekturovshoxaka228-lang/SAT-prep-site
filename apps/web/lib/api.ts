export interface MeResponse {
  id: string;
  email: string;
  username: string;
  role: "student" | "admin" | "content_manager" | "moderator";
  onboarding_completed: boolean;
  onboarding_step: "ielts" | "sat" | "complete";
  ielts_onboarding_at: string | null;
  sat_onboarding_at: string | null;
}

export interface ConflictError {
  code: "conflict";
  message: string;
  field: "email" | "username";
}

export interface SatOfficialSession {
  id: string;
  year: number;
  month: "mar" | "may" | "jun" | "aug" | "oct" | "nov" | "dec";
  start_date: string;
  registration_deadline: string | null;
  is_published: boolean;
}

export interface DashboardResponse {
  ielts: {
    current_band: number | null;
    current_unknown: boolean;
    target_band: "6.0" | "6.5" | "7.0" | "7.5" | "8.0" | "8.5+";
    planned_date: string | null;
    date_precision: "day" | "month" | null;
    countdown_days: number | null;
  };
  sat: {
    current_score: number | null;
    current_unknown: boolean;
    target_score: number;
    sat_target_is_plus: boolean;
    session: SatOfficialSession | null;
    countdown_days: number | null;
  };
  flashcards_due_count: number;
  recent_attempts: any[];
}

export interface FlashcardItem {
  id: string;
  front: string;
  back: string;
  deck: "ielts" | "sat" | "mixed";
  tags: string[];
  progress?: {
    repetition: number;
    interval_days: number;
    ease_factor: number;
    next_review: string;
  } | null;
}

async function request<T>(
  url: string,
  options: RequestInit = {}
): Promise<{ ok: boolean; status: number; data: T | null; error: any }> {
  try {
    const res = await fetch(url, {
      ...options,
      credentials: "include", // Essential for session cookie!
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    if (res.status === 204) {
      return { ok: true, status: 204, data: null, error: null };
    }

    let data: any = null;
    try {
      const text = await res.text();
      if (text && text.trim().length > 0) {
        data = JSON.parse(text);
      }
    } catch {
      data = null;
    }

    if (!res.ok) {
      return { ok: false, status: res.status, data: null, error: data };
    }
    return { ok: true, status: res.status, data, error: null };
  } catch (err: any) {
    return {
      ok: false,
      status: 0,
      data: null,
      error: { code: "network_error", message: err.message || "Network error" },
    };
  }
}

export const api = {
  auth: {
    register: (payload: { email: string; username: string; password: string }, signal?: AbortSignal) =>
      request<MeResponse>("/api/v1/auth/register", {
        method: "POST",
        body: JSON.stringify(payload),
        signal,
      }),
    login: (payload: { login: string; password: string }, signal?: AbortSignal) =>
      request<MeResponse>("/api/v1/auth/login", {
        method: "POST",
        body: JSON.stringify(payload),
        signal,
      }),
    logout: () =>
      request<void>("/api/v1/auth/logout", {
        method: "POST",
      }),
    me: (signal?: AbortSignal) =>
      request<MeResponse>("/api/v1/auth/me", {
        method: "GET",
        signal,
      }),
  },
  onboarding: {
    ielts: (payload: any, signal?: AbortSignal) =>
      request<MeResponse>("/api/v1/onboarding/ielts", {
        method: "POST",
        body: JSON.stringify(payload),
        signal,
      }),
    sat: (payload: any, signal?: AbortSignal) =>
      request<MeResponse>("/api/v1/onboarding/sat", {
        method: "POST",
        body: JSON.stringify(payload),
        signal,
      }),
  },
  sat: {
    officialDates: (includePast = false) =>
      request<{ items: SatOfficialSession[] }>(`/api/v1/sat/official-dates?include_past=${includePast}`),
  },
  dashboard: {
    get: (signal?: AbortSignal) =>
      request<DashboardResponse>("/api/v1/dashboard", {
        method: "GET",
        signal,
      }),
  },
  flashcards: {
    due: () =>
      request<{ items: FlashcardItem[] }>("/api/v1/flashcards/due"),
    review: (flashcardId: string, quality: number) =>
      request<any>(`/api/v1/flashcards/${flashcardId}/review`, {
        method: "POST",
        body: JSON.stringify({ quality }),
      }),
  },
  attempts: {
    list: (params?: { exam_type?: string; status?: string }) => {
      const q = new URLSearchParams(params as any).toString();
      return request<{ items: any[] }>(`/api/v1/attempts?${q}`);
    },
    create: (payload: { exam_id: string; exam_section_id?: string; module_index?: number }) =>
      request<any>("/api/v1/attempts", {
        method: "POST",
        body: JSON.stringify(payload),
      }),
    get: (attemptId: string) =>
      request<any>(`/api/v1/attempts/${attemptId}`),
    upsertAnswer: (attemptId: string, questionId: string, answer: any) =>
      request<any>(`/api/v1/attempts/${attemptId}/answers`, {
        method: "POST",
        body: JSON.stringify({ question_id: questionId, answer }),
      }),
    submit: (attemptId: string) =>
      request<any>(`/api/v1/attempts/${attemptId}/submit`, {
        method: "POST",
      }),
  },
  admin: {
    stats: () =>
      request<any>("/api/v1/admin/dashboard-stats"),
    createTest: (payload: any) =>
      request<any>("/api/v1/admin/tests/create", {
        method: "POST",
        body: JSON.stringify(payload),
      }),
    overrideWriting: (evaluationId: string, payload: any) =>
      request<any>(`/api/v1/admin/writing/${evaluationId}/override`, {
        method: "PATCH",
        body: JSON.stringify(payload),
      }),
  },
};
