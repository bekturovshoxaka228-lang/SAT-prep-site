"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { api, DashboardResponse, MeResponse } from "@/lib/api";
import { Sidebar } from "@/components/sidebar";
import { useExamMode } from "@/lib/exam-mode-context";
import {
  BookOpen,
  GraduationCap,
  Calendar,
  Clock,
  Layers,
  Award,
  ChevronRight,
  Headphones,
  PenTool,
  MessageSquare,
  FileEdit,
  Calculator,
  Sparkles,
  Target,
  ArrowRight,
  LogIn,
  UserPlus,
  Compass,
  AlertCircle,
  Languages,
  Check,
  Star,
  ArrowRightLeft,
  Flame,
} from "lucide-react";

const DEFAULT_DASHBOARD_DATA: DashboardResponse = {
  ielts: {
    current_band: null,
    current_unknown: true,
    target_band: "8.5+",
    planned_date: null,
    date_precision: null,
    countdown_days: 32,
  },
  sat: {
    current_score: 1340,
    current_unknown: false,
    target_score: 1600,
    sat_target_is_plus: false,
    session: null,
    countdown_days: 48,
  },
  flashcards_due_count: 5,
  recent_attempts: [],
};

const GUEST_ME: MeResponse = {
  id: "guest",
  email: "guest@prepsphere.io",
  username: "Гость",
  role: "student",
  onboarding_completed: true,
  onboarding_step: "complete",
  ielts_onboarding_at: null,
  sat_onboarding_at: null,
};

function formatIeltsBand(band: string | null | undefined): string {
  if (!band) return "8.5";
  return band.replace("BAND_", "").replace("_", ".");
}

export default function DashboardPage() {
  const router = useRouter();
  const { mode, toggleMode, setMode } = useExamMode();
  const [data, setData] = useState<DashboardResponse>(DEFAULT_DASHBOARD_DATA);
  const [me, setMe] = useState<MeResponse>(GUEST_ME);
  const [isGuest, setIsGuest] = useState(false);
  const [onboardingPrompt, setOnboardingPrompt] = useState<string | null>(null);

  // Custom local overrides for days & aim (interactive)
  const [satDaysOverride, setSatDaysOverride] = useState<number | null>(null);
  const [satAimOverride, setSatAimOverride] = useState<number | null>(null);
  const [ieltsDaysOverride, setIeltsDaysOverride] = useState<number | null>(null);
  const [ieltsAimOverride, setIeltsAimOverride] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function load() {
      try {
        const [meRes, dashRes] = await Promise.all([
          api.auth.me(),
          api.dashboard.get(),
        ]);

        if (!isMounted) return;

        if (meRes.ok && meRes.data) {
          setMe(meRes.data);
          setIsGuest(false);

          if (dashRes.ok && dashRes.data) {
            setData(dashRes.data);
          } else if (dashRes.status === 403) {
            if (meRes.data.onboarding_step === "ielts") {
              setOnboardingPrompt("/onboarding/ielts");
            } else if (meRes.data.onboarding_step === "sat") {
              setOnboardingPrompt("/onboarding/sat");
            } else {
              setOnboardingPrompt("/onboarding/ielts");
            }
          }
        } else {
          setIsGuest(true);
          setMe(GUEST_ME);
          setData(DEFAULT_DASHBOARD_DATA);
        }
      } catch (err) {
        console.error("Error loading dashboard:", err);
        if (isMounted) {
          setIsGuest(true);
        }
      }
    }

    load();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleLogout = async () => {
    if (!isGuest) {
      await api.auth.logout();
    }
    router.push("/login");
  };

  const isSAT = mode === "SAT";

  // Days and Aim calculations
  const satDays = satDaysOverride ?? data.sat.countdown_days ?? 48;
  const satAim = satAimOverride ?? data.sat.target_score ?? 1600;
  const satCurrentScore = data.sat.current_score ?? 1340;

  const ieltsDays = ieltsDaysOverride ?? data.ielts.countdown_days ?? 32;
  const ieltsAim = ieltsAimOverride ?? formatIeltsBand(data.ielts.target_band);
  const ieltsCurrentScore = data.ielts.current_band ?? 7.5;

  // SAT Checkpoints: 400, 800, 1200, 1600
  const satCheckpoints = [
    { value: 400, label: "400", achieved: satCurrentScore >= 400, note: "Базовый уровень" },
    { value: 800, label: "800", achieved: satCurrentScore >= 800, note: "Стандартная планка" },
    { value: 1200, label: "1200", achieved: satCurrentScore >= 1200, note: "Конкурентный балл" },
    { value: 1600, label: "1600", achieved: satCurrentScore >= 1600, isTarget: true, note: "Максимум (Ivy League)" },
  ];

  // IELTS Checkpoints: 0, 5.0, 6.5, 9.0
  const ieltsCheckpoints = [
    { value: 0, label: "0", achieved: true, note: "Старт" },
    { value: 5.0, label: "5.0", achieved: ieltsCurrentScore >= 5.0, note: "Modest User" },
    { value: 6.5, label: "6.5", achieved: ieltsCurrentScore >= 6.5, note: "Competent (B2)" },
    { value: 9.0, label: "9.0", achieved: ieltsCurrentScore >= 9.0, isTarget: true, note: "Expert (C2 Max)" },
  ];

  const satProgressPercent = Math.min(100, Math.max(8, Math.round(((satCurrentScore - 400) / (1600 - 400)) * 100)));
  const ieltsProgressPercent = Math.min(100, Math.max(8, Math.round((ieltsCurrentScore / 9.0) * 100)));

  const handleEditDays = () => {
    const current = isSAT ? satDays : ieltsDays;
    const input = prompt(`Сколько дней осталось до экзамена (${isSAT ? "SAT" : "IELTS"})?`, String(current));
    if (input) {
      const num = parseInt(input.trim(), 10);
      if (!isNaN(num) && num > 0) {
        if (isSAT) setSatDaysOverride(num);
        else setIeltsDaysOverride(num);
      }
    }
  };

  const handleEditAim = () => {
    const hint = isSAT ? "1550 или 1600" : "Band 8.0 или Band 8.5";
    const current = isSAT ? String(satAim) : ieltsAim;
    const input = prompt(`Укажите целевой балл Aim (${hint}):`, current);
    if (input && input.trim()) {
      if (isSAT) {
        const num = parseInt(input.trim(), 10);
        if (!isNaN(num)) setSatAimOverride(num);
      } else {
        setIeltsAimOverride(input.trim());
      }
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-slate-900 dark:text-slate-100 flex flex-col md:flex-row transition-colors duration-200 font-sans">
      {/* Left Sidebar Menu (Dynamically adapts to SAT/IELTS) */}
      <Sidebar
        username={isGuest ? "Гость" : me.username}
        role={isGuest ? "Ознакомительный доступ" : me.role}
        onLogout={handleLogout}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-8 space-y-6">
        
        {/* ========================================================================= */}
        {/* TOP INTERACTIVE BANNER: Prominent "Turn to IELTS" / "Turn to SAT" button */}
        {/* ========================================================================= */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-[#00171F] via-[#00263C] to-[#003459] text-white border border-[#005980]/40 shadow-sm transition-all">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#007EA7] to-[#00A8E8] text-white flex items-center justify-center shadow-sm shrink-0">
              {isSAT ? (
                <GraduationCap className="w-6 h-6" strokeWidth={1.8} />
              ) : (
                <BookOpen className="w-6 h-6" strokeWidth={1.8} />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider text-[#00A8E8] font-bold">
                  {isSAT ? "Активный режим: Digital SAT" : "Активный режим: IELTS Academic"}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </div>
              <div className="text-sm font-medium text-slate-200 mt-0.5">
                {isSAT
                  ? "Сфокусированная подготовка к секциям Reading & Writing и Math"
                  : "Комплексная подготовка: Reading, Listening, Writing, Speaking"}
              </div>
            </div>
          </div>

          {/* Eye-catching "Turn to IELTS" / "Turn to SAT" button with smooth arrow */}
          <button
            onClick={toggleMode}
            className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-[#007EA7] to-[#00A8E8] hover:from-[#0093C8] hover:to-[#00A8E8] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#007EA7]/25 flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer group shrink-0"
            title="Переключить режим экзамена"
          >
            <span>{isSAT ? "Turn to IELTS" : "Turn to SAT"}</span>
            <ArrowRight
              className={`w-5 h-5 transition-transform duration-300 ${
                !isSAT ? "rotate-180" : "group-hover:translate-x-1"
              }`}
              strokeWidth={2}
            />
          </button>
        </div>

        {/* Guest or Onboarding Prompts */}
        {isGuest ? (
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 bg-gradient-to-r from-sky-500/10 via-sky-500/5 to-transparent dark:from-sky-500/15 dark:via-sky-500/5 border border-sky-500/30 rounded-3xl">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-[#007EA7] text-white flex items-center justify-center shrink-0 shadow-xs">
                <Compass className="w-5 h-5" strokeWidth={1.75} />
              </div>
              <div>
                <h2 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                  Ознакомительный режим платформы
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 max-w-xl">
                  Вам открыты все задания и пробные тесты. Войдите или создайте аккаунт, чтобы сохранять персональный прогресс.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 shrink-0 self-end sm:self-auto">
              <Link
                href="/login"
                className="px-4 py-2 rounded-xl bg-[#007EA7] hover:bg-[#0093C8] text-white text-xs font-semibold shadow-xs flex items-center gap-1.5 transition-all"
              >
                <LogIn className="w-3.5 h-3.5" strokeWidth={1.75} />
                Войти
              </Link>
              <Link
                href="/login?mode=register"
                className="px-4 py-2 rounded-xl bg-white dark:bg-white/[0.08] hover:bg-slate-50 dark:hover:bg-white/[0.12] text-slate-800 dark:text-white border border-slate-200/80 dark:border-white/[0.1] text-xs font-medium transition-all"
              >
                <UserPlus className="w-3.5 h-3.5" strokeWidth={1.75} />
                Регистрация
              </Link>
            </div>
          </div>
        ) : onboardingPrompt ? (
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 bg-amber-500/10 border border-amber-500/30 rounded-3xl">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                <AlertCircle className="w-5 h-5" strokeWidth={1.75} />
              </div>
              <div>
                <h2 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                  Настройте персональные цели подготовки
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Укажите желаемый балл для расчета точного графика подготовки и дней до экзамена.
                </p>
              </div>
            </div>
            <Link
              href={onboardingPrompt}
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold shadow-xs flex items-center gap-1.5 transition-all shrink-0 self-end sm:self-auto"
            >
              Настроить цели
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.75} />
            </Link>
          </div>
        ) : null}

        {/* Welcome Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 bg-white dark:bg-white/[0.03] p-6 sm:p-7 rounded-3xl border border-slate-200/70 dark:border-white/[0.07] shadow-xs transition-all">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-sky-50 dark:bg-sky-950/40 text-[#007EA7] dark:text-[#00A8E8] border border-sky-200/60 dark:border-sky-800/40">
                Персональный трек: {isSAT ? "Digital SAT" : "IELTS Academic"}
              </span>
              <span className="text-xs text-slate-400">
                • Активная адаптивная программа
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              {isGuest ? "Добро пожаловать в PrepSphere!" : `С возвращением, ${me.username}!`}
              <Sparkles className="w-5 h-5 text-amber-500" strokeWidth={1.75} />
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 max-w-xl leading-relaxed">
              {isSAT
                ? "Вся статистика, аналитика и практические модули Digital SAT (RW + Math) доступны ниже."
                : "Все направления IELTS (Reading, Listening, Writing, Speaking) синхронизированы с вашим планом."}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 self-start sm:self-auto">
            <Link
              href="/flashcards"
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-sky-50/70 hover:bg-sky-100/60 dark:bg-sky-950/30 dark:hover:bg-sky-950/50 text-[#007EA7] dark:text-[#00A8E8] border border-sky-200/60 dark:border-sky-800/40 transition-all shadow-xs group"
            >
              <div className="w-8 h-8 rounded-xl bg-[#007EA7] text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs">
                <Layers className="w-4 h-4" strokeWidth={1.75} />
              </div>
              <div className="text-left">
                <div className="text-xs text-[#007EA7] dark:text-[#00A8E8] font-medium">Колода SM-2</div>
                <div className="text-sm font-semibold flex items-center gap-2">
                  <span>На повторение:</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#007EA7] text-white font-mono text-xs font-semibold">
                    {data.flashcards_due_count}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DYNAMIC PROGRESS & GOALS CARD: "Till Exam" with Days, Aim & Checkpoints   */}
        {/* ========================================================================= */}
        <div className="bg-white dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/[0.07] p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-xs transition-all space-y-6">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#007EA7]/10 via-[#00A8E8]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Card Header: Title & Track Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200/60 dark:border-sky-800/40 flex items-center justify-center text-[#007EA7] dark:text-[#00A8E8] shadow-xs">
                {isSAT ? (
                  <GraduationCap className="w-6 h-6" strokeWidth={1.8} />
                ) : (
                  <BookOpen className="w-6 h-6" strokeWidth={1.8} />
                )}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {isSAT ? "Digital SAT" : "IELTS Academic"}
                  </h2>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-sky-50 dark:bg-sky-950/40 text-[#007EA7] dark:text-[#00A8E8] border border-sky-200/60 dark:border-sky-800/40">
                    {isSAT ? "College Board Blueprint" : "Cambridge Scale"}
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {isSAT
                    ? "Многоэтапный адаптивный формат с секциями Reading & Writing и Math"
                    : "Академический формат оценки 4 языковых компетенций"}
                </p>
              </div>
            </div>

            {/* Aim Badge (Interactive Target Score) */}
            <div
              onClick={handleEditAim}
              className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-sky-500/10 via-sky-500/5 to-transparent dark:from-sky-500/15 border border-sky-500/30 hover:border-sky-500/60 cursor-pointer transition-all group self-start sm:self-auto"
              title="Нажмите, чтобы изменить целевой балл (Aim)"
            >
              <div className="w-9 h-9 rounded-xl bg-[#007EA7] text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs">
                <Target className="w-4 h-4" strokeWidth={2} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-[#007EA7] dark:text-[#00A8E8] uppercase tracking-wider">
                  Целевой балл (Aim)
                </div>
                <div className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                  {isSAT ? `${satAim} б.` : `${ieltsAim}`}
                </div>
              </div>
            </div>
          </div>

          {/* Countdown Banner: Clock + Days Left */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              onClick={handleEditDays}
              className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/[0.05] hover:border-slate-300 dark:hover:border-white/[0.1] transition-all cursor-pointer flex items-center justify-between group"
              title="Нажмите, чтобы изменить число дней"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/[0.05] text-[#007EA7] dark:text-[#00A8E8] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <Clock className="w-6 h-6" strokeWidth={1.8} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    До экзамена (Till Exam)
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                    {isSAT ? `${satDays} дней` : `${ieltsDays} дней`}
                  </div>
                </div>
              </div>
              <span className="text-xs text-[#007EA7] dark:text-[#00A8E8] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Изменить ✏️
              </span>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/[0.05] flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/[0.05] text-[#007EA7] dark:text-[#00A8E8] flex items-center justify-center shadow-xs">
                  <Calendar className="w-6 h-6" strokeWidth={1.8} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Сессия / Расписание
                  </div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {isSAT ? "Официальная сессия 2026" : "Академический тест 2026"}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {isSAT ? "Тайминг: 2 ч 14 мин • 2 модуля" : "Тайминг: 2 ч 45 мин • 4 модуля"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* LINEAR PROGRESS TRACKER with round checkpoints */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between text-xs font-medium">
              <span className="text-slate-500 dark:text-slate-400">
                Текущий срез готовности:{" "}
                <strong className="text-slate-900 dark:text-white font-bold text-sm">
                  {isSAT ? `${satCurrentScore} / 1600 б.` : `Band ${ieltsCurrentScore} / 9.0`}
                </strong>
              </span>
              <span className="text-slate-500 dark:text-slate-400">
                Цель:{" "}
                <strong className="text-[#007EA7] dark:text-[#00A8E8] font-bold text-sm">
                  {isSAT ? `${satAim} б.` : `${ieltsAim}`}
                </strong>
              </span>
            </div>

            {/* Modern Oceanic Track with checkpoints */}
            <div className="relative pt-2 pb-6">
              <div className="w-full h-3 bg-slate-100 dark:bg-white/[0.06] rounded-full overflow-hidden p-0.5 shadow-inner">
                <div
                  className="h-full bg-gradient-to-r from-[#007EA7] via-[#0093C8] to-[#00A8E8] rounded-full transition-all duration-700 ease-out shadow-xs"
                  style={{
                    width: `${isSAT ? satProgressPercent : ieltsProgressPercent}%`,
                  }}
                />
              </div>

              {/* Checkpoints positioned along the bar */}
              <div className="flex items-center justify-between mt-3 px-1">
                {(isSAT ? satCheckpoints : ieltsCheckpoints).map((cp) => (
                  <div key={cp.label} className="flex flex-col items-center">
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all shadow-xs ${
                        cp.isTarget
                          ? "bg-gradient-to-tr from-[#007EA7] to-[#00A8E8] text-white ring-2 ring-[#00A8E8]/40"
                          : cp.achieved
                          ? "bg-[#007EA7] text-white"
                          : "bg-slate-200 dark:bg-white/[0.1] text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      {cp.isTarget ? (
                        <Star className="w-3.5 h-3.5 fill-white" />
                      ) : cp.achieved ? (
                        <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                      ) : (
                        <span>{cp.label}</span>
                      )}
                    </div>
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1 font-mono">
                      {cp.label}
                    </div>
                    <div className="text-[10px] text-slate-400 hidden sm:block">
                      {cp.note}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Action Footer in Goal Card */}
          <div className="pt-4 border-t border-slate-100 dark:border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-slate-500 dark:text-slate-400">
              {isSAT
                ? "Балл 1300+ уверенно покрывает 85% топовых программ США."
                : "Band 7.5+ достаточен для Oxford, Cambridge и ведущих мировых вузов."}
            </span>
            <div className="flex items-center gap-2">
              <Link
                href={isSAT ? "/practice/sat-rw" : "/practice/reading"}
                className="font-semibold text-[#007EA7] dark:text-[#00A8E8] hover:underline flex items-center gap-1.5"
              >
                <span>{isSAT ? "К практике Digital SAT" : "К практике IELTS"}</span>
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DYNAMIC PRACTICE CATALOG: Adapts to active mode (SAT vs IELTS)            */}
        {/* ========================================================================= */}
        <div className="bg-white dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/[0.07] p-6 sm:p-8 rounded-3xl shadow-xs transition-all space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                <Target className="w-5 h-5 text-[#007EA7] dark:text-[#00A8E8]" strokeWidth={1.75} />
                <span>{isSAT ? "Разделы подготовки Digital SAT" : "Разделы подготовки IELTS Academic"}</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {isSAT
                  ? "Практикуйте официальные форматы заданий Reading & Writing, Math и симуляторы"
                  : "Тренируйте все 4 языковых модуля с мгновенной проверкой и аналитикой"}
              </p>
            </div>
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-white/[0.05] text-slate-600 dark:text-slate-400">
              {isSAT ? "5 направлений" : "6 направлений"}
            </span>
          </div>

          {/* Cards for SAT */}
          {isSAT ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {/* SAT Reading & Writing */}
              <Link
                href="/practice/sat-rw"
                className="p-5 rounded-2xl bg-slate-50/60 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/[0.05] hover:border-slate-300 dark:hover:border-white/[0.12] hover:bg-white dark:hover:bg-white/[0.04] transition-all group shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 dark:bg-sky-950/40 text-[#007EA7] dark:text-[#00A8E8] flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform shadow-xs">
                    <FileEdit className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <span className="text-[10px] font-bold text-[#007EA7] dark:text-[#00A8E8] uppercase tracking-wider block">
                    Секция 1 • Verbal
                  </span>
                  <h4 className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-[#007EA7] dark:group-hover:text-[#00A8E8] transition-colors mt-0.5">
                    Reading &amp; Writing
                  </h4>
                  <p className="text-[11.5px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed font-normal">
                    Craft &amp; Structure, Information &amp; Ideas, Standard English Conventions.
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs font-semibold text-[#007EA7] dark:text-[#00A8E8]">
                  <span>Тренировать</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.75} />
                </div>
              </Link>

              {/* SAT Math */}
              <Link
                href="/practice/sat-math"
                className="p-5 rounded-2xl bg-slate-50/60 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/[0.05] hover:border-slate-300 dark:hover:border-white/[0.12] hover:bg-white dark:hover:bg-white/[0.04] transition-all group shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 dark:bg-sky-950/40 text-[#007EA7] dark:text-[#00A8E8] flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform shadow-xs">
                    <Calculator className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <span className="text-[10px] font-bold text-[#007EA7] dark:text-[#00A8E8] uppercase tracking-wider block">
                    Секция 2 • Math
                  </span>
                  <h4 className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-[#007EA7] dark:group-hover:text-[#00A8E8] transition-colors mt-0.5">
                    Math Practice
                  </h4>
                  <p className="text-[11.5px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed font-normal">
                    Algebra, Advanced Math, Problem-Solving, Geometry &amp; Trigonometry с поддержкой Desmos.
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs font-semibold text-[#007EA7] dark:text-[#00A8E8]">
                  <span>Тренировать</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.75} />
                </div>
              </Link>

              {/* Full Mocks */}
              <Link
                href="/practice/mocks"
                className="p-5 rounded-2xl bg-slate-50/60 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/[0.05] hover:border-slate-300 dark:hover:border-white/[0.12] hover:bg-white dark:hover:bg-white/[0.04] transition-all group shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 dark:bg-sky-950/40 text-[#007EA7] dark:text-[#00A8E8] flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform shadow-xs">
                    <Award className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <span className="text-[10px] font-bold text-[#007EA7] dark:text-[#00A8E8] uppercase tracking-wider block">
                    Симулятор
                  </span>
                  <h4 className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-[#007EA7] dark:group-hover:text-[#00A8E8] transition-colors mt-0.5">
                    Full Mock Exams
                  </h4>
                  <p className="text-[11.5px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed font-normal">
                    Полные официальные симуляторы с адаптивными модулями и точным таймингом.
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs font-semibold text-[#007EA7] dark:text-[#00A8E8]">
                  <span>Запустить тест</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.75} />
                </div>
              </Link>
            </div>
          ) : (
            /* Cards for IELTS */
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {/* 1. Reading */}
              <Link
                href="/practice/reading"
                className="p-5 rounded-2xl bg-slate-50/60 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/[0.05] hover:border-slate-300 dark:hover:border-white/[0.12] hover:bg-white dark:hover:bg-white/[0.04] transition-all group shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 dark:bg-sky-950/40 text-[#007EA7] dark:text-[#00A8E8] flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform shadow-xs">
                    <BookOpen className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <span className="text-[10px] font-bold text-[#007EA7] dark:text-[#00A8E8] uppercase tracking-wider block">
                    Модуль 1
                  </span>
                  <h4 className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-[#007EA7] dark:group-hover:text-[#00A8E8] transition-colors mt-0.5">
                    Reading
                  </h4>
                  <p className="text-[11.5px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed font-normal">
                    Академические пассажи (Passages 1–3) и все типы вопросов.
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs font-semibold text-[#007EA7] dark:text-[#00A8E8]">
                  <span>Открыть</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.75} />
                </div>
              </Link>

              {/* 2. Listening */}
              <Link
                href="/practice/listening"
                className="p-5 rounded-2xl bg-slate-50/60 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/[0.05] hover:border-slate-300 dark:hover:border-white/[0.12] hover:bg-white dark:hover:bg-white/[0.04] transition-all group shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 dark:bg-sky-950/40 text-[#007EA7] dark:text-[#00A8E8] flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform shadow-xs">
                    <Headphones className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <span className="text-[10px] font-bold text-[#007EA7] dark:text-[#00A8E8] uppercase tracking-wider block">
                    Модуль 2
                  </span>
                  <h4 className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-[#007EA7] dark:group-hover:text-[#00A8E8] transition-colors mt-0.5">
                    Listening
                  </h4>
                  <p className="text-[11.5px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed font-normal">
                    4 аудиосекции с британским и международным произношением.
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs font-semibold text-[#007EA7] dark:text-[#00A8E8]">
                  <span>Открыть</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.75} />
                </div>
              </Link>

              {/* 3. Writing */}
              <Link
                href="/practice/writing"
                className="p-5 rounded-2xl bg-slate-50/60 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/[0.05] hover:border-slate-300 dark:hover:border-white/[0.12] hover:bg-white dark:hover:bg-white/[0.04] transition-all group shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 dark:bg-sky-950/40 text-[#007EA7] dark:text-[#00A8E8] flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform shadow-xs">
                    <PenTool className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <span className="text-[10px] font-bold text-[#007EA7] dark:text-[#00A8E8] uppercase tracking-wider block">
                    Модуль 3
                  </span>
                  <h4 className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-[#007EA7] dark:group-hover:text-[#00A8E8] transition-colors mt-0.5">
                    Writing
                  </h4>
                  <p className="text-[11.5px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed font-normal">
                    Task 1 (графики/схемы) и Task 2 (эссе) с мгновенной AI оценкой.
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs font-semibold text-[#007EA7] dark:text-[#00A8E8]">
                  <span>Открыть</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.75} />
                </div>
              </Link>

              {/* 4. Speaking */}
              <Link
                href="/practice/speaking"
                className="p-5 rounded-2xl bg-slate-50/60 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/[0.05] hover:border-slate-300 dark:hover:border-white/[0.12] hover:bg-white dark:hover:bg-white/[0.04] transition-all group shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 dark:bg-sky-950/40 text-[#007EA7] dark:text-[#00A8E8] flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform shadow-xs">
                    <MessageSquare className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <span className="text-[10px] font-bold text-[#007EA7] dark:text-[#00A8E8] uppercase tracking-wider block">
                    Модуль 4
                  </span>
                  <h4 className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-[#007EA7] dark:group-hover:text-[#00A8E8] transition-colors mt-0.5">
                    Speaking
                  </h4>
                  <p className="text-[11.5px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed font-normal">
                    Интерактивный AI-экзаменатор (Part 1, Part 2 Cue Card, Part 3).
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs font-semibold text-[#007EA7] dark:text-[#00A8E8]">
                  <span>Открыть</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.75} />
                </div>
              </Link>
            </div>
          )}
        </div>

      </main>
    </div>
  );
}
