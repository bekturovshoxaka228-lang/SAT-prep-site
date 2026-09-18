"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, Plus, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { api } from "@/lib/api";
import { Navbar } from "@/components/navbar";

export default function AdminTestBuilderPage() {
  const [title, setTitle] = useState("IELTS Mock Diagnostic #2");
  const [examType, setExamType] = useState<"ielts" | "digital_sat">("ielts");
  const [sectionTitle, setSectionTitle] = useState("Reading Section 1");
  const [durationSec, setDurationSec] = useState(3600);
  const [questionText, setQuestionText] = useState("What is the author's primary perspective?");
  const [correctAnswer, setCorrectAnswer] = useState("Critical assessment");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCreateTest = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    const payload = {
      title,
      exam_type: examType,
      is_published: true,
      sections: [
        {
          kind: examType === "ielts" ? "reading" : "rw",
          title: sectionTitle,
          duration_sec: durationSec,
          sort_order: 1,
          questions: [
            {
              question_type: "mcq",
              content: { stem: questionText },
              options: ["Critical assessment", "Objective indifference", "Passionate support", "Ambiguous neutrality"],
              correct_answer: correctAnswer,
              sort_order: 1,
              points: 1.0,
            },
          ],
        },
      ],
    };

    try {
      const res = await api.admin.createTest(payload);
      if (res.ok) {
        setSuccess(true);
      } else {
        setError(res.error?.message || "Failed to create exam test.");
      }
    } catch (err: any) {
      setError("Network error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-200">
      <Navbar variant="admin" role="admin" username="admin" />

      <main className="flex-1 max-w-3xl w-full mx-auto p-4 sm:p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">Create Exam Module</h1>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
              Build and immediately publish official simulator tests for students.
            </p>
          </div>
          <Link
            href="/admin/analytics"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Analytics
          </Link>
        </div>

        {success && (
          <div className="p-4 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 rounded-2xl flex items-center gap-3 text-emerald-800 dark:text-emerald-300 text-sm">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" /> Test successfully published and made available in practice simulators!
          </div>
        )}

        {error && (
          <div className="p-4 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/60 rounded-2xl flex items-center gap-3 text-rose-700 dark:text-rose-400 text-sm">
            <AlertCircle className="w-5 h-5" /> {error}
          </div>
        )}

        <form
          onSubmit={handleCreateTest}
          className="space-y-6 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 rounded-3xl shadow-sm dark:shadow-xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Exam Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Exam Format
              </label>
              <select
                value={examType}
                onChange={(e) => setExamType(e.target.value as any)}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
              >
                <option value="ielts">IELTS Academic</option>
                <option value="digital_sat">Digital SAT</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Section Name
              </label>
              <input
                type="text"
                value={sectionTitle}
                onChange={(e) => setSectionTitle(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Duration (seconds)
              </label>
              <input
                type="number"
                value={durationSec}
                onChange={(e) => setDurationSec(parseInt(e.target.value))}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
              Sample Question Content
            </label>
            <textarea
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
              rows={3}
              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl p-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
              Correct Answer String
            </label>
            <input
              type="text"
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-rose-600 hover:bg-rose-500 active:bg-rose-700 text-white font-bold rounded-xl shadow-lg shadow-rose-600/20 flex items-center justify-center gap-2 transition disabled:opacity-50"
          >
            {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
            <span>Publish Test Module</span>
          </button>
        </form>
      </main>
    </div>
  );
}
