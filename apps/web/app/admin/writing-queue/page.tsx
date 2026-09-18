"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, PenTool, CheckCircle2, ShieldAlert, Award } from "lucide-react";
import { Navbar } from "@/components/navbar";

export default function AdminWritingQueuePage() {
  const [taskAchievement, setTaskAchievement] = useState<number>(7.0);
  const [coherence, setCoherence] = useState<number>(6.5);
  const [lexical, setLexical] = useState<number>(7.0);
  const [grammar, setGrammar] = useState<number>(6.5);
  const [comment, setComment] = useState(
    "Well structured Task 2 essay. Minor preposition slips in paragraph 3."
  );
  const [saved, setSaved] = useState(false);

  const overall = (taskAchievement + coherence + lexical + grammar) / 4;
  const roundedOverall = Math.round(overall * 2) / 2;

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-200">
      <Navbar variant="admin" role="admin" username="admin" />

      <main className="flex-1 max-w-5xl w-full mx-auto p-4 sm:p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              IELTS Writing Evaluation #1
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
              Task 2 Essay • Student submission awaiting official moderator calibration.
            </p>
          </div>

          <Link
            href="/admin/analytics"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Analytics
          </Link>
        </div>

        {saved && (
          <div className="p-4 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 rounded-2xl flex items-center gap-3 text-emerald-800 dark:text-emerald-300 text-sm">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" /> Human override saved and logged to audit trail with status &apos;final&apos;!
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Essay Submission */}
          <div className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-6 rounded-3xl shadow-sm dark:shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
              <span className="font-bold text-rose-600 dark:text-rose-400">Prompt / Question</span>
              <span className="font-mono">284 Words</span>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 italic font-serif leading-relaxed">
              &quot;Some people believe that university education should focus on graduate employability, while others argue it should emphasize broader academic knowledge. Discuss both views and give your own opinion.&quot;
            </p>

            <div className="pt-2">
              <span className="text-xs uppercase font-bold text-slate-500 dark:text-slate-400 block mb-2 tracking-wider">
                Student Essay Text
              </span>
              <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800/80 text-xs text-slate-800 dark:text-slate-300 font-serif leading-relaxed space-y-3">
                <p>
                  In contemporary society, the core objective of tertiary education remains a subject of ongoing debate. While some argue that academic institutions should primarily prepare undergraduates for the competitive job market, others contend that universities exist to foster critical thinking and scholarly exploration.
                </p>
                <p>
                  On the one hand, advocates of vocation-oriented curriculums emphasize that high tuition fees necessitate direct career returns. Graduating with specialized practical competencies enables youth to secure gainful employment swiftly...
                </p>
              </div>
            </div>
          </div>

          {/* Grading Rubrics */}
          <div className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-6 rounded-3xl shadow-sm dark:shadow-xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" /> IELTS 4 Criteria Rubric Override
              </h3>
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-xl bg-blue-600 text-white shadow-sm">
                Band {roundedOverall.toFixed(1)}
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs text-slate-700 dark:text-slate-300 mb-1 font-medium">
                  <span>Task Achievement</span>
                  <span className="font-bold text-rose-600 dark:text-rose-400">{taskAchievement.toFixed(1)}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="9"
                  step="0.5"
                  value={taskAchievement}
                  onChange={(e) => setTaskAchievement(parseFloat(e.target.value))}
                  className="w-full accent-rose-600 h-2 bg-slate-200 dark:bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-700 dark:text-slate-300 mb-1 font-medium">
                  <span>Coherence & Cohesion</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">{coherence.toFixed(1)}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="9"
                  step="0.5"
                  value={coherence}
                  onChange={(e) => setCoherence(parseFloat(e.target.value))}
                  className="w-full accent-blue-600 h-2 bg-slate-200 dark:bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-700 dark:text-slate-300 mb-1 font-medium">
                  <span>Lexical Resource</span>
                  <span className="font-bold text-indigo-600 dark:text-indigo-400">{lexical.toFixed(1)}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="9"
                  step="0.5"
                  value={lexical}
                  onChange={(e) => setLexical(parseFloat(e.target.value))}
                  className="w-full accent-indigo-600 h-2 bg-slate-200 dark:bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-700 dark:text-slate-300 mb-1 font-medium">
                  <span>Grammatical Range & Accuracy</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">{grammar.toFixed(1)}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="9"
                  step="0.5"
                  value={grammar}
                  onChange={(e) => setGrammar(parseFloat(e.target.value))}
                  className="w-full accent-emerald-600 h-2 bg-slate-200 dark:bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Moderator Notes & Specific Feedback
                </label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={3}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl p-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              <button
                type="button"
                onClick={handleSave}
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold rounded-xl transition shadow-lg shadow-blue-600/20 text-xs"
              >
                Approve & Save Final Evaluation
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
