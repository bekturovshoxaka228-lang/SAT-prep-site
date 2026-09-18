"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { api, SatOfficialSession } from "@/lib/api";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  GraduationCap,
  ArrowRight,
  Target,
  Calendar,
  Award,
  AlertCircle,
  Loader2,
  CheckCircle,
} from "lucide-react";

export default function OnboardingSatPage() {
  const router = useRouter();
  const [sessions, setSessions] = useState<SatOfficialSession[]>([]);
  const [loadingDates, setLoadingDates] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form states
  const [currentUnknown, setCurrentUnknown] = useState(false);
  const [currentScore, setCurrentScore] = useState<number>(1100);
  const [targetPreset, setTargetPreset] = useState<"1200" | "1350" | "1500+" | "custom">("1350");
  const [customTarget, setCustomTarget] = useState<number>(1400);
  const [satSessionId, setSatSessionId] = useState<string>("");

  useEffect(() => {
    async function loadDates() {
      try {
        const res = await api.sat.officialDates(false);
        if (res.ok && res.data) {
          setSessions(res.data.items);
          if (res.data.items.length > 0) {
            setSatSessionId(res.data.items[0].id);
          }
        }
      } catch (err) {
        console.error("Failed to load SAT dates", err);
      } finally {
        setLoadingDates(false);
      }
    }
    loadDates();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setError(null);

    if (!satSessionId) {
      setError("Please select an official College Board SAT test date");
      return;
    }

    let targetScore = 1350;
    let satTargetIsPlus = false;

    if (targetPreset === "1200") {
      targetScore = 1200;
    } else if (targetPreset === "1350") {
      targetScore = 1350;
    } else if (targetPreset === "1500+") {
      targetScore = 1500;
      satTargetIsPlus = true;
    } else {
      targetScore = customTarget;
      if (targetScore % 10 !== 0) {
        setError("Target score must be a multiple of 10");
        return;
      }
    }

    const payload = {
      current_unknown: currentUnknown,
      current_score: currentUnknown ? null : currentScore,
      target_score: targetScore,
      sat_target_is_plus: satTargetIsPlus,
      sat_session_id: satSessionId,
    };

    setIsSubmitting(true);
    try {
      const res = await api.onboarding.sat(payload);
      if (res.ok && res.data) {
        await router.push("/dashboard");
      } else {
        setIsSubmitting(false);
        if (res.status === 403) {
          setError("IELTS step was not completed. Redirecting to IELTS profile...");
          setTimeout(() => router.push("/onboarding/ielts"), 1500);
        } else {
          setError(res.error?.message || "Failed to save SAT profile. Please verify inputs.");
        }
      }
    } catch (err) {
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
              <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold">
                  Step 2 of 2
                </span>
                <h1 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  Digital SAT Profile
                </h1>
              </div>
            </div>
            <span className="text-xs px-3 py-1 bg-blue-50 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 font-bold rounded-full border border-blue-200 dark:border-blue-500/30">
              Final Step
            </span>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/60 rounded-2xl flex items-start gap-3 text-rose-700 dark:text-rose-400 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Current Score */}
            <div className="bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 p-5 rounded-2xl">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-500" /> Current Digital SAT Score
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200">
                  <input
                    type="checkbox"
                    checked={currentUnknown}
                    onChange={(e) => setCurrentUnknown(e.target.checked)}
                    className="rounded border-slate-300 dark:border-slate-700 text-blue-600 focus:ring-blue-500 bg-white dark:bg-slate-900"
                  />
                  I don&apos;t know yet
                </label>
              </div>

              {!currentUnknown ? (
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2 font-medium">
                    <span>400 Baseline</span>
                    <span className="text-lg font-extrabold text-blue-600 dark:text-blue-400">
                      {currentScore} pts
                    </span>
                    <span>1600 Max</span>
                  </div>
                  <input
                    type="range"
                    min="400"
                    max="1600"
                    step="10"
                    value={currentScore}
                    onChange={(e) => setCurrentScore(parseInt(e.target.value))}
                    className="w-full accent-blue-600 h-2 bg-slate-200 dark:bg-slate-800 rounded-lg cursor-pointer"
                  />
                </div>
              ) : (
                <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                  We will calculate your baseline after completing your first Module 1 diagnostic.
                </p>
              )}
            </div>

            {/* Target Score */}
            <div className="bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 p-5 rounded-2xl">
              <label className="block text-sm font-bold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-500" /> Target SAT Score
              </label>
              <div className="grid grid-cols-4 gap-2 mb-3">
                {(["1200", "1350", "1500+", "custom"] as const).map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setTargetPreset(preset)}
                    className={`py-2.5 text-center text-sm font-bold rounded-xl border transition-all ${
                      targetPreset === preset
                        ? "bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/25"
                        : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                    }`}
                  >
                    {preset === "custom" ? "Custom" : preset}
                  </button>
                ))}
              </div>

              {targetPreset === "custom" && (
                <div className="mt-3">
                  <input
                    type="number"
                    min="400"
                    max="1600"
                    step="10"
                    value={customTarget}
                    onChange={(e) => setCustomTarget(parseInt(e.target.value))}
                    className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    placeholder="Enter score (400 - 1600 in steps of 10)"
                  />
                </div>
              )}
            </div>

            {/* Official College Board Session */}
            <div className="bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 p-5 rounded-2xl">
              <label className="block text-sm font-bold text-slate-800 dark:text-slate-200 mb-1.5 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-500" /> College Board Official Session
              </label>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                Official College Board international test sessions (Mar, May, Jun, Aug, Oct, Nov, Dec).
              </p>

              {loadingDates ? (
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs py-2">
                  <Loader2 className="w-4 h-4 animate-spin text-blue-500" /> Loading official exam dates...
                </div>
              ) : (
                <select
                  value={satSessionId}
                  onChange={(e) => setSatSessionId(e.target.value)}
                  className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                >
                  {sessions.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.month.toUpperCase()} {s.year} (Exam Date: {s.start_date}
                      {s.registration_deadline ? ` | Reg Deadline: ${s.registration_deadline}` : ""})
                    </option>
                  ))}
                </select>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting || loadingDates}
              className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 active:from-blue-700 active:to-indigo-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Completing Onboarding...</span>
                </>
              ) : (
                <>
                  <span>Complete Setup & Enter Dashboard</span>
                  <CheckCircle className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
