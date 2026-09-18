"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  BookOpen,
  ArrowRight,
  Calendar,
  Target,
  Award,
  AlertCircle,
  Loader2,
  Sparkles,
} from "lucide-react";

const TARGET_BANDS = ["6.0", "6.5", "7.0", "7.5", "8.0", "8.5+"] as const;

export default function OnboardingIeltsPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form states
  const [currentUnknown, setCurrentUnknown] = useState(false);
  const [currentBand, setCurrentBand] = useState<number>(6.0);
  const [targetBand, setTargetBand] = useState<typeof TARGET_BANDS[number]>("7.5");
  const [previousBand, setPreviousBand] = useState<string>("");
  const [datePrecision, setDatePrecision] = useState<"day" | "month">("day");
  const [plannedDate, setPlannedDate] = useState<string>("");
  const [plannedYear, setPlannedYear] = useState<number>(2026);
  const [plannedMonth, setPlannedMonth] = useState<number>(10);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setError(null);

    if (datePrecision === "day" && !plannedDate) {
      setError("Please select your planned test date");
      return;
    }

    const payload: any = {
      current_unknown: currentUnknown,
      current_band: currentUnknown ? null : currentBand,
      target_band: targetBand,
      previous_band: previousBand ? parseFloat(previousBand) : null,
      date_precision: datePrecision,
      planned_date: datePrecision === "day" ? plannedDate : null,
      planned_year: datePrecision === "month" ? plannedYear : null,
      planned_month: datePrecision === "month" ? plannedMonth : null,
    };

    setIsSubmitting(true);
    try {
      const res = await api.onboarding.ielts(payload);
      if (res.ok) {
        await router.push("/onboarding/sat");
      } else {
        setIsSubmitting(false);
        setError(res.error?.message || "Failed to save IELTS profile. Please check inputs.");
      }
    } catch (err: any) {
      setIsSubmitting(false);
      setError("Network error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-200">
      {/* Top Header */}
      <header className="w-full px-6 py-4 flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-rose-500 via-indigo-600 to-blue-500 flex items-center justify-center font-black text-white shadow-md shadow-indigo-500/20">
            PS
          </div>
          <span className="font-bold text-slate-900 dark:text-white text-base">PrepSphere Setup</span>
        </div>
        <ThemeToggle />
      </header>

      <div className="flex-1 flex items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 rounded-3xl shadow-xl dark:shadow-2xl transition-all">
          {/* Progress header */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/30 flex items-center justify-center text-rose-600 dark:text-rose-400 shadow-sm">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-rose-600 dark:text-rose-400 font-bold">
                  Step 1 of 2
                </span>
                <h1 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  IELTS Academic Profile
                </h1>
              </div>
            </div>
            <span className="text-xs px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400 font-semibold border border-slate-200 dark:border-slate-700">
              50% Complete
            </span>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/60 rounded-2xl flex items-start gap-3 text-rose-700 dark:text-rose-400 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Current Band */}
            <div className="bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 p-5 rounded-2xl">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                  <Award className="w-4 h-4 text-rose-500" /> Current IELTS Band
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200">
                  <input
                    type="checkbox"
                    checked={currentUnknown}
                    onChange={(e) => setCurrentUnknown(e.target.checked)}
                    className="rounded border-slate-300 dark:border-slate-700 text-indigo-600 focus:ring-indigo-500 bg-white dark:bg-slate-900"
                  />
                  I don&apos;t know yet
                </label>
              </div>

              {!currentUnknown ? (
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2 font-medium">
                    <span>1.0 Beginner</span>
                    <span className="text-lg font-extrabold text-rose-600 dark:text-rose-400">
                      Band {currentBand.toFixed(1)}
                    </span>
                    <span>9.0 Expert</span>
                  </div>
                  <input
                    type="range"
                    min="1.0"
                    max="9.0"
                    step="0.5"
                    value={currentBand}
                    onChange={(e) => setCurrentBand(parseFloat(e.target.value))}
                    className="w-full accent-rose-600 h-2 bg-slate-200 dark:bg-slate-800 rounded-lg cursor-pointer"
                  />
                </div>
              ) : (
                <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                  We will calibrate your initial level automatically after your first diagnostic simulator test.
                </p>
              )}
            </div>

            {/* Target Band */}
            <div className="bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 p-5 rounded-2xl">
              <label className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2">
                <Target className="w-4 h-4 text-rose-500" /> Target Band Score
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {TARGET_BANDS.map((band) => (
                  <button
                    key={band}
                    type="button"
                    onClick={() => setTargetBand(band)}
                    className={`py-2.5 text-center text-sm font-bold rounded-xl border transition-all ${
                      targetBand === band
                        ? "bg-rose-600 text-white border-rose-500 shadow-md shadow-rose-600/25"
                        : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                    }`}
                  >
                    {band}
                  </button>
                ))}
              </div>
            </div>

            {/* Planned Date */}
            <div className="bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 p-5 rounded-2xl">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-rose-500" /> Planned Exam Date
                </label>
                <div className="flex gap-1 bg-white dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-slate-800 text-xs">
                  <button
                    type="button"
                    onClick={() => setDatePrecision("day")}
                    className={`px-3 py-1 rounded-lg font-semibold transition ${
                      datePrecision === "day"
                        ? "bg-indigo-600 text-white shadow-sm"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    Specific Day
                  </button>
                  <button
                    type="button"
                    onClick={() => setDatePrecision("month")}
                    className={`px-3 py-1 rounded-lg font-semibold transition ${
                      datePrecision === "month"
                        ? "bg-indigo-600 text-white shadow-sm"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    Month & Year
                  </button>
                </div>
              </div>

              {datePrecision === "day" ? (
                <input
                  type="date"
                  value={plannedDate}
                  onChange={(e) => setPlannedDate(e.target.value)}
                  className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
                />
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <select
                    value={plannedMonth}
                    onChange={(e) => setPlannedMonth(parseInt(e.target.value))}
                    className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
                  >
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                      <option key={m} value={m}>
                        Month {m} (
                        {new Date(2026, m - 1, 1).toLocaleString("default", {
                          month: "long",
                        })}
                        )
                      </option>
                    ))}
                  </select>
                  <select
                    value={plannedYear}
                    onChange={(e) => setPlannedYear(parseInt(e.target.value))}
                    className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
                  >
                    <option value={2026}>2026</option>
                    <option value={2027}>2027</option>
                    <option value={2028}>2028</option>
                  </select>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-gradient-to-r from-rose-600 to-indigo-600 hover:from-rose-500 hover:to-indigo-500 active:from-rose-700 active:to-indigo-700 text-white font-bold rounded-2xl shadow-lg shadow-rose-600/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Saving IELTS Profile...</span>
                </>
              ) : (
                <>
                  <span>Continue to Step 2: Digital SAT</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
