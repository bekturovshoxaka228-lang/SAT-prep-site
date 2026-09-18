"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { api, DashboardResponse, MeResponse } from "@/lib/api";
import { Sidebar } from "@/components/sidebar";
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
  Loader2,
  Target,
  ArrowRight,
} from "lucide-react";

export default function DashboardPage() {
  const router = useRouter();
  const [data, setData] = useState<DashboardResponse | null>(null);
  const [me, setMe] = useState<MeResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const [meRes, dashRes] = await Promise.all([
          api.auth.me(),
          api.dashboard.get(),
        ]);

        if (!meRes.ok) {
          router.push("/login");
          return;
        }
        setMe(meRes.data);

        if (!dashRes.ok) {
          if (dashRes.status === 403) {
            if (meRes.data?.onboarding_step === "ielts") {
              router.push("/onboarding/ielts");
            } else if (meRes.data?.onboarding_step === "sat") {
              router.push("/onboarding/sat");
            }
          }
          return;
        }
        setData(dashRes.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [router]);

  const handleLogout = async () => {
    await api.auth.logout();
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--background)] flex flex-col items-center justify-center text-slate-500">
        <Loader2 className="w-8 h-8 animate-spin text-[#007EA7] dark:text-[#00A8E8] mb-3" strokeWidth={1.75} />
        <span className="text-sm font-medium">Загрузка личного кабинета...</span>
      </div>
    );
  }

  if (!data || !me) return null;

  return (
    <div className="min-h-screen bg-[var(--background)] text-slate-900 dark:text-slate-100 flex flex-col md:flex-row transition-colors duration-200">
      {/* Left Sidebar Menu */}
      <Sidebar
        username={me.username}
        role={me.role}
        onLogout={handleLogout}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-8 space-y-6">
        {/* Welcome Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 bg-white dark:bg-white/[0.03] p-6 sm:p-7 rounded-3xl border border-slate-200/70 dark:border-white/[0.07] shadow-xs transition-all">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-sky-50 dark:bg-sky-950/40 text-[#007EA7] dark:text-[#00A8E8] border border-sky-200/60 dark:border-sky-800/40">
                Персональный трек подготовки
              </span>
              <span className="text-xs text-slate-400">
                • Активный обратный отсчет
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              С возвращением, {me.username}! <Sparkles className="w-5 h-5 text-amber-500" strokeWidth={1.75} />
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 max-w-xl leading-relaxed">
              Все направления подготовки (Reading, Listening, Writing, Speaking, SAT RW, Math и пробные тесты) доступны ниже.
            </p>
          </div>

          <Link
            href="/flashcards"
            className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-sky-50/70 hover:bg-sky-100/60 dark:bg-sky-950/30 dark:hover:bg-sky-950/50 text-[#007EA7] dark:text-[#00A8E8] border border-sky-200/60 dark:border-sky-800/40 transition-all shadow-xs self-start sm:self-auto group"
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

        {/* Clean Exam Countdowns & Targets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* IELTS Card */}
          <div className="bg-white dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/[0.07] p-6 sm:p-7 rounded-3xl relative overflow-hidden shadow-xs transition-all flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#007EA7]/5 dark:bg-[#007EA7]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200/60 dark:border-sky-800/40 flex items-center justify-center text-[#007EA7] dark:text-[#00A8E8]">
                    <BookOpen className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h2 className="font-semibold text-lg text-slate-900 dark:text-white">IELTS Academic</h2>
                    <span className="text-xs text-slate-400">4 навыка английского языка</span>
                  </div>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/40 text-[#007EA7] dark:text-[#00A8E8] font-semibold border border-sky-200/60 dark:border-sky-800/40">
                  Цель: Band {data.ielts.target_band}
                </span>
              </div>

              {/* Countdown widget */}
              <div className="bg-slate-50/70 dark:bg-white/[0.02] p-4 rounded-2xl border border-slate-200/60 dark:border-white/[0.05] mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="p-2 rounded-xl bg-white dark:bg-white/[0.05] text-[#007EA7] dark:text-[#00A8E8] shadow-xs">
                    <Clock className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                      До экзамена
                    </div>
                    <div className="text-xl font-bold text-slate-900 dark:text-white">
                      {data.ielts.countdown_days !== null
                        ? `${data.ielts.countdown_days} дн.`
                        : "Дата не задана"}
                    </div>
                  </div>
                </div>
                {data.ielts.planned_date && (
                  <div className="text-xs font-medium text-slate-600 dark:text-slate-300 flex items-center gap-1.5 bg-white dark:bg-white/[0.05] px-3 py-1.5 rounded-full border border-slate-200/60 dark:border-white/[0.05] shadow-xs">
                    <Calendar className="w-3.5 h-3.5 text-[#007EA7]" strokeWidth={1.75} />
                    {data.ielts.planned_date}
                  </div>
                )}
              </div>

              {/* Progress widget */}
              <div className="space-y-2.5">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-slate-500 dark:text-slate-400">
                    Текущий:{" "}
                    <strong className="text-slate-900 dark:text-white font-semibold">
                      {data.ielts.current_unknown
                        ? "Диагностика..."
                        : `Band ${data.ielts.current_band?.toFixed(1) || "—"}`}
                    </strong>
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">
                    Цель: <strong className="text-[#007EA7] dark:text-[#00A8E8] font-semibold">Band {data.ielts.target_band}</strong>
                  </span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 dark:bg-white/[0.05] rounded-full overflow-hidden p-0.5">
                  <div
                    className="h-full bg-gradient-to-r from-[#007EA7] to-[#00A8E8] rounded-full transition-all duration-500 shadow-xs"
                    style={{
                      width: data.ielts.current_band
                        ? `${Math.min(100, (data.ielts.current_band / 9) * 100)}%`
                        : "25%",
                    }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>Band 4.0</span>
                  <span>Band 6.0</span>
                  <span>Band 7.5</span>
                  <span>Band 9.0 Max</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/[0.05] flex items-center justify-between text-xs">
              <span className="text-slate-400">Секции: Reading, Listening, Writing, Speaking</span>
              <Link
                href="/practice/reading"
                className="font-semibold text-[#007EA7] dark:text-[#00A8E8] hover:underline flex items-center gap-1"
              >
                К заданиям IELTS <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.75} />
              </Link>
            </div>
          </div>

          {/* SAT Card */}
          <div className="bg-white dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/[0.07] p-6 sm:p-7 rounded-3xl relative overflow-hidden shadow-xs transition-all flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#00A8E8]/5 dark:bg-[#00A8E8]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200/60 dark:border-sky-800/40 flex items-center justify-center text-[#007EA7] dark:text-[#00A8E8]">
                    <GraduationCap className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h2 className="font-semibold text-lg text-slate-900 dark:text-white">Digital SAT</h2>
                    <span className="text-xs text-slate-400">Многоэтапный адаптивный формат</span>
                  </div>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/40 text-[#007EA7] dark:text-[#00A8E8] font-semibold border border-sky-200/60 dark:border-sky-800/40">
                  Цель: {data.sat.target_score}
                  {data.sat.sat_target_is_plus ? "+" : ""} б.
                </span>
              </div>

              {/* Countdown widget */}
              <div className="bg-slate-50/70 dark:bg-white/[0.02] p-4 rounded-2xl border border-slate-200/60 dark:border-white/[0.05] mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="p-2 rounded-xl bg-white dark:bg-white/[0.05] text-[#007EA7] dark:text-[#00A8E8] shadow-xs">
                    <Clock className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                      До экзамена
                    </div>
                    <div className="text-xl font-bold text-slate-900 dark:text-white">
                      {data.sat.countdown_days !== null
                        ? `${data.sat.countdown_days} дн.`
                        : "Дата не задана"}
                    </div>
                  </div>
                </div>
                {data.sat.session && (
                  <div className="text-xs font-medium text-slate-600 dark:text-slate-300 flex items-center gap-1.5 bg-white dark:bg-white/[0.05] px-3 py-1.5 rounded-full border border-slate-200/60 dark:border-white/[0.05] shadow-xs">
                    <Calendar className="w-3.5 h-3.5 text-[#007EA7]" strokeWidth={1.75} />
                    <span>{data.sat.session.month.toUpperCase()} {data.sat.session.year}</span>
                  </div>
                )}
              </div>

              {/* Progress widget */}
              <div className="space-y-2.5">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-slate-500 dark:text-slate-400">
                    Текущий:{" "}
                    <strong className="text-slate-900 dark:text-white font-semibold">
                      {data.sat.current_unknown ? "Диагностика..." : `${data.sat.current_score} б.`}
                    </strong>
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">
                    Цель:{" "}
                    <strong className="text-[#007EA7] dark:text-[#00A8E8] font-semibold">
                      {data.sat.target_score}
                      {data.sat.sat_target_is_plus ? "+" : ""} б.
                    </strong>
                  </span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 dark:bg-white/[0.05] rounded-full overflow-hidden p-0.5">
                  <div
                    className="h-full bg-gradient-to-r from-[#007EA7] to-[#00A8E8] rounded-full transition-all duration-500 shadow-xs"
                    style={{
                      width: data.sat.current_score
                        ? `${Math.min(100, (data.sat.current_score / 1600) * 100)}%`
                        : "30%",
                    }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>400 Min</span>
                  <span>1000 Baseline</span>
                  <span>1350 Target</span>
                  <span>1600 Max</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/[0.05] flex items-center justify-between text-xs">
              <span className="text-slate-400">Секции: Reading &amp; Writing, Math</span>
              <Link
                href="/practice/sat-rw"
                className="font-semibold text-[#007EA7] dark:text-[#00A8E8] hover:underline flex items-center gap-1"
              >
                К заданиям SAT <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.75} />
              </Link>
            </div>
          </div>
        </div>

        {/* Practice Navigation Catalog */}
        <div className="bg-white dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/[0.07] p-6 sm:p-8 rounded-3xl shadow-xs transition-all space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                <Target className="w-5 h-5 text-[#007EA7] dark:text-[#00A8E8]" strokeWidth={1.75} />
                Каталог практических заданий и симуляторов
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Выберите раздел для тренировки микро-навыков, полных секций или официальных пробных тестов.
              </p>
            </div>
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-white/[0.05] text-slate-600 dark:text-slate-400">
              7 направлений
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* 1. Reading */}
            <Link
              href="/practice/reading"
              className="p-5 rounded-2xl bg-slate-50/60 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/[0.05] hover:border-slate-300 dark:hover:border-white/[0.12] hover:bg-white dark:hover:bg-white/[0.04] transition-all group shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-sky-50 dark:bg-sky-950/40 text-[#007EA7] dark:text-[#00A8E8] flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform shadow-xs">
                  <BookOpen className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <span className="text-[10px] font-medium text-[#007EA7] dark:text-[#00A8E8] uppercase tracking-wider block">
                  1. IELTS
                </span>
                <h4 className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-[#007EA7] dark:group-hover:text-[#00A8E8] transition-colors mt-0.5">
                  Reading
                </h4>
                <p className="text-[11.5px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed font-normal">
                  Микро-дрилы или полные экзаменационные пассажи (Passages 1–3).
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
                <span className="text-[10px] font-medium text-[#007EA7] dark:text-[#00A8E8] uppercase tracking-wider block">
                  2. IELTS
                </span>
                <h4 className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-[#007EA7] dark:group-hover:text-[#00A8E8] transition-colors mt-0.5">
                  Listening
                </h4>
                <p className="text-[11.5px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed font-normal">
                  Аудио-тренажеры или полные секции 1–4.
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
                <span className="text-[10px] font-medium text-[#007EA7] dark:text-[#00A8E8] uppercase tracking-wider block">
                  3. IELTS
                </span>
                <h4 className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-[#007EA7] dark:group-hover:text-[#00A8E8] transition-colors mt-0.5">
                  Writing
                </h4>
                <p className="text-[11.5px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed font-normal">
                  Task 1 (графики и диаграммы) или Task 2 (эссе) с таймером.
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
                <span className="text-[10px] font-medium text-[#007EA7] dark:text-[#00A8E8] uppercase tracking-wider block">
                  4. IELTS
                </span>
                <h4 className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-[#007EA7] dark:group-hover:text-[#00A8E8] transition-colors mt-0.5">
                  Speaking
                </h4>
                <p className="text-[11.5px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed font-normal">
                  Part 1, Part 2 (карточки с темами) и Part 3 (дискуссия).
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs font-semibold text-[#007EA7] dark:text-[#00A8E8]">
                <span>Открыть</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.75} />
              </div>
            </Link>

            {/* 5. Reading and Writing (SAT) */}
            <Link
              href="/practice/sat-rw"
              className="p-5 rounded-2xl bg-slate-50/60 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/[0.05] hover:border-slate-300 dark:hover:border-white/[0.12] hover:bg-white dark:hover:bg-white/[0.04] transition-all group shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-sky-50 dark:bg-sky-950/40 text-[#007EA7] dark:text-[#00A8E8] flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform shadow-xs">
                  <FileEdit className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <span className="text-[10px] font-medium text-[#007EA7] dark:text-[#00A8E8] uppercase tracking-wider block">
                  5. Digital SAT
                </span>
                <h4 className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-[#007EA7] dark:group-hover:text-[#00A8E8] transition-colors mt-0.5">
                  Reading &amp; Writing
                </h4>
                <p className="text-[11.5px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed font-normal">
                  Тренировка по типам вопросов с фильтрацией по сложности.
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs font-semibold text-[#007EA7] dark:text-[#00A8E8]">
                <span>Открыть</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.75} />
              </div>
            </Link>

            {/* 6. Math (SAT) */}
            <Link
              href="/practice/sat-math"
              className="p-5 rounded-2xl bg-slate-50/60 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/[0.05] hover:border-slate-300 dark:hover:border-white/[0.12] hover:bg-white dark:hover:bg-white/[0.04] transition-all group shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-sky-50 dark:bg-sky-950/40 text-[#007EA7] dark:text-[#00A8E8] flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform shadow-xs">
                  <Calculator className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <span className="text-[10px] font-medium text-[#007EA7] dark:text-[#00A8E8] uppercase tracking-wider block">
                  6. Digital SAT
                </span>
                <h4 className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-[#007EA7] dark:group-hover:text-[#00A8E8] transition-colors mt-0.5">
                  Math
                </h4>
                <p className="text-[11.5px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed font-normal">
                  Алгебра, геометрия и тригонометрия с Desmos калькулятором.
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs font-semibold text-[#007EA7] dark:text-[#00A8E8]">
                <span>Открыть</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.75} />
              </div>
            </Link>

            {/* 7. Mocks */}
            <Link
              href="/practice/mocks"
              className="p-5 rounded-2xl bg-slate-50/60 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/[0.05] hover:border-slate-300 dark:hover:border-white/[0.12] hover:bg-white dark:hover:bg-white/[0.04] transition-all group shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-sky-50 dark:bg-sky-950/40 text-[#007EA7] dark:text-[#00A8E8] flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform shadow-xs">
                  <Award className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <span className="text-[10px] font-medium text-[#007EA7] dark:text-[#00A8E8] uppercase tracking-wider block">
                  7. Пробные тесты
                </span>
                <h4 className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-[#007EA7] dark:group-hover:text-[#00A8E8] transition-colors mt-0.5">
                  Официальные Mocks
                </h4>
                <p className="text-[11.5px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed font-normal">
                  Cambridge IELTS 14–19 и официальные тесты Digital SAT.
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs font-semibold text-[#007EA7] dark:text-[#00A8E8]">
                <span>Открыть</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.75} />
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
