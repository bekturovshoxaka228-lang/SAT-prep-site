"use client";

import { useState } from "react";
import Link from "next/link";
import { Sidebar } from "@/components/sidebar";
import {
  Award,
  BookOpen,
  GraduationCap,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function MocksHubPage() {
  const [examCategory, setExamCategory] = useState<"ielts" | "sat">("ielts");
  const [selectedCambridgeBook, setSelectedCambridgeBook] = useState<string>("cambridge-19");

  const cambridgeBooks = [
    {
      id: "cambridge-19",
      name: "Cambridge IELTS 19 Academic",
      year: "2024 (Latest)",
      tests: [
        { id: "c19-t1", title: "Test 1 (Academic)", difficulty: "Band 6.5–9.0", isNew: true },
        { id: "c19-t2", title: "Test 2 (Academic)", difficulty: "Band 6.5–9.0", isNew: true },
        { id: "c19-t3", title: "Test 3 (Academic)", difficulty: "Band 6.5–9.0", isNew: false },
        { id: "c19-t4", title: "Test 4 (Academic)", difficulty: "Band 6.5–9.0", isNew: false },
      ],
    },
    {
      id: "cambridge-18",
      name: "Cambridge IELTS 18 Academic",
      year: "2023",
      tests: [
        { id: "c18-t1", title: "Test 1 (Academic)", difficulty: "Band 6.0–8.5", isNew: false },
        { id: "c18-t2", title: "Test 2 (Academic)", difficulty: "Band 6.0–8.5", isNew: false },
        { id: "c18-t3", title: "Test 3 (Academic)", difficulty: "Band 6.0–8.5", isNew: false },
        { id: "c18-t4", title: "Test 4 (Academic)", difficulty: "Band 6.0–8.5", isNew: false },
      ],
    },
    {
      id: "cambridge-17",
      name: "Cambridge IELTS 17 Academic",
      year: "2022",
      tests: [
        { id: "c17-t1", title: "Test 1 (Academic)", difficulty: "Band 6.0–8.5", isNew: false },
        { id: "c17-t2", title: "Test 2 (Academic)", difficulty: "Band 6.0–8.5", isNew: false },
        { id: "c17-t3", title: "Test 3 (Academic)", difficulty: "Band 6.0–8.5", isNew: false },
        { id: "c17-t4", title: "Test 4 (Academic)", difficulty: "Band 6.0–8.5", isNew: false },
      ],
    },
    {
      id: "cambridge-16",
      name: "Cambridge IELTS 16 Academic",
      year: "2021",
      tests: [
        { id: "c16-t1", title: "Test 1 (Academic)", difficulty: "Band 6.0–8.5", isNew: false },
        { id: "c16-t2", title: "Test 2 (Academic)", difficulty: "Band 6.0–8.5", isNew: false },
        { id: "c16-t3", title: "Test 3 (Academic)", difficulty: "Band 6.0–8.5", isNew: false },
        { id: "c16-t4", title: "Test 4 (Academic)", difficulty: "Band 6.0–8.5", isNew: false },
      ],
    },
  ];

  const satPastExams = [
    {
      id: "sat-may-2024",
      title: "May 2024 International Official Exam",
      source: "College Board Past Official Exam (QAS)",
      year: "May 2024",
      format: "Section 1 (RW: 54 Qs) + Section 2 (Math: 44 Qs)",
      duration: "134 mins",
      isRecent: true,
      difficulty: "High Adaptive",
      badgeColor: "bg-[#007EA7]/15 text-[#007EA7] dark:bg-[#00263C] dark:text-[#00A8E8] border border-[#007EA7]/30",
      description: "Official international test administration featuring genuine adaptive Module 1 and Module 2 routing.",
    },
    {
      id: "sat-mar-2024",
      title: "March 2024 US Official Exam",
      source: "College Board First US Digital Exam",
      year: "March 2024",
      format: "Section 1 (RW: 54 Qs) + Section 2 (Math: 44 Qs)",
      duration: "134 mins",
      isRecent: true,
      difficulty: "High Adaptive",
      badgeColor: "bg-[#007EA7]/15 text-[#007EA7] dark:bg-[#00263C] dark:text-[#00A8E8] border border-[#007EA7]/30",
      description: "Official debut digital administration in the United States with standard curve grading.",
    },
    {
      id: "sat-nov-2023",
      title: "November 2023 International Past Exam",
      source: "College Board International QAS",
      year: "November 2023",
      format: "Section 1 (RW: 54 Qs) + Section 2 (Math: 44 Qs)",
      duration: "134 mins",
      isRecent: false,
      difficulty: "Balanced",
      badgeColor: "bg-[#003459]/10 text-[#005980] dark:bg-[#003459] dark:text-[#00A8E8] border border-[#003459]/30",
      description: "Comprehensive past exam with challenging Vocabulary in Context and Quadratics.",
    },
    {
      id: "sat-bluebook-1",
      title: "Official Bluebook™ Practice Test 1",
      source: "College Board Benchmark Test",
      year: "Official Practice",
      format: "Section 1 (RW: 54 Qs) + Section 2 (Math: 44 Qs)",
      duration: "134 mins",
      isRecent: false,
      difficulty: "Standard Diagnostic",
      badgeColor: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
      description: "Primary calibration test recommended for all students to establish starting baseline score.",
    },
    {
      id: "sat-bluebook-2",
      title: "Official Bluebook™ Practice Test 2",
      source: "College Board Benchmark Test",
      year: "Official Practice",
      format: "Section 1 (RW: 54 Qs) + Section 2 (Math: 44 Qs)",
      duration: "134 mins",
      isRecent: false,
      difficulty: "Adaptive Standard",
      badgeColor: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
      description: "Official calibration test with rigorous reading evidence and linear equations.",
    },
  ];

  const currentBook =
    cambridgeBooks.find((b) => b.id === selectedCambridgeBook) || cambridgeBooks[0];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 flex flex-col md:flex-row transition-colors duration-200">
      <Sidebar />

      <main className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-8 space-y-8">
        {/* Header Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 bg-white dark:bg-white/[0.03] p-6 sm:p-8 rounded-3xl border border-slate-200/70 dark:border-white/[0.07] shadow-sm backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-indigo-400/10 to-sky-400/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" /> Full Mock Exam Simulator Hub
              </span>
              <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                • Real Test Conditions
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white tracking-tight">
              Full Exam Mocks
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1.5 max-w-xl leading-relaxed">
              Choose between official Cambridge IELTS Books (16–19) or genuine Past Digital SAT Exams (2023–2024 &amp; Bluebook).
            </p>
          </div>

          {/* Exam Category Switcher (IELTS vs SAT) */}
          <div className="grid grid-cols-2 p-1 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200/70 dark:border-white/[0.08] self-start sm:self-auto min-w-[280px]">
            <button
              type="button"
              onClick={() => setExamCategory("ielts")}
              className={`flex items-center justify-center gap-2 py-2 px-4 rounded-full text-xs font-semibold transition-all ${
                examCategory === "ielts"
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>IELTS Mock</span>
            </button>
            <button
              type="button"
              onClick={() => setExamCategory("sat")}
              className={`flex items-center justify-center gap-2 py-2 px-4 rounded-full text-xs font-semibold transition-all ${
                examCategory === "sat"
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>SAT Mock</span>
            </button>
          </div>
        </div>

        {/* Content Section: IELTS Cambridge Mocks */}
        {examCategory === "ielts" ? (
          <div className="space-y-6">
            {/* Cambridge Book Selector Chips */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-sky-500" /> Select Official IELTS Cambridge Book:
                </span>
                <span className="text-xs text-sky-600 dark:text-sky-400 font-medium">
                  Official Academic Series
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {cambridgeBooks.map((book) => (
                  <button
                    key={book.id}
                    type="button"
                    onClick={() => setSelectedCambridgeBook(book.id)}
                    className={`py-2 px-4 rounded-full text-xs font-medium border transition-all ${
                      selectedCambridgeBook === book.id
                        ? "bg-sky-500 text-white border-sky-500 shadow-sm shadow-sky-500/20"
                        : "bg-white dark:bg-white/[0.03] text-slate-600 dark:text-slate-400 border-slate-200/70 dark:border-white/[0.08] hover:border-sky-500/40"
                    }`}
                  >
                    <span>{book.name}</span>
                    <span className="ml-1.5 text-[11px] opacity-75">({book.year})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Book Tests Grid */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-500" />
                    {currentBook.name} • 4 Academic Mock Tests
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Each full mock covers complete test sections: Listening (4 sections), Reading (3 passages), and Writing (Tasks 1 &amp; 2).
                  </p>
                </div>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                  Band 1.0 – 9.0
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {currentBook.tests.map((t, idx) => (
                  <div
                    key={t.id}
                    className="p-6 rounded-3xl bg-white dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/[0.07] shadow-sm hover:shadow-md hover:border-sky-500/30 dark:hover:border-sky-500/30 transition-all flex flex-col justify-between group relative overflow-hidden"
                  >
                    {t.isNew && (
                      <div className="absolute top-4 right-4 text-[10px] px-2.5 py-0.5 rounded-full font-semibold bg-sky-500 text-white shadow-sm">
                        LATEST EXAM
                      </div>
                    )}

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-sky-600 dark:text-sky-400">
                          CAMBRIDGE #{selectedCambridgeBook.split("-")[1]}
                        </span>
                        <span className="text-slate-400 dark:text-slate-500 text-xs">• Mock #{idx + 1}</span>
                      </div>

                      <h3 className="text-base font-semibold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                        {currentBook.name} • {t.title}
                      </h3>

                      <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-100 dark:border-white/[0.05] text-center text-xs">
                        <div className="p-2.5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/[0.05]">
                          <span className="text-slate-400 dark:text-slate-500 text-[10px] block font-medium">Listening</span>
                          <span className="font-semibold text-slate-800 dark:text-slate-200">40 Qs • 30m</span>
                        </div>
                        <div className="p-2.5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/[0.05]">
                          <span className="text-slate-400 dark:text-slate-500 text-[10px] block font-medium">Reading</span>
                          <span className="font-semibold text-slate-800 dark:text-slate-200">40 Qs • 60m</span>
                        </div>
                        <div className="p-2.5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/[0.05]">
                          <span className="text-slate-400 dark:text-slate-500 text-[10px] block font-medium">Writing</span>
                          <span className="font-semibold text-slate-800 dark:text-slate-200">2 Tasks • 60m</span>
                        </div>
                      </div>
                    </div>

                    <Link
                      href={`/practice/ielts/reading?mock=${t.id}`}
                      className="mt-6 w-full py-2.5 px-4 rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm group/btn"
                    >
                      <span>Start Cambridge Mock Test</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Content Section: Digital SAT Past Exams */
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-sky-500" />
                  Digital SAT Past Official Exams &amp; Bluebook Tests
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Official College Board test administrations with adaptive Section 1 &amp; 2 routing and 400–1600 scale.
                </p>
              </div>
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                1600 Point Scale
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {satPastExams.map((exam) => (
                <div
                  key={exam.id}
                  className="p-6 rounded-3xl bg-white dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/[0.07] shadow-sm hover:shadow-md hover:border-sky-500/30 dark:hover:border-sky-500/30 transition-all flex flex-col justify-between group relative overflow-hidden"
                >
                  {exam.isRecent && (
                    <div className="absolute top-4 right-4 text-[10px] px-2.5 py-0.5 rounded-full font-semibold bg-sky-500 text-white shadow-sm">
                      OFFICIAL PAST EXAM
                    </div>
                  )}

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-sky-600 dark:text-sky-400">
                        {exam.source}
                      </span>
                      <span className="text-slate-400 dark:text-slate-500 text-xs">• {exam.year}</span>
                    </div>

                    <h3 className="text-base font-semibold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      {exam.title}
                    </h3>

                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                      {exam.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mt-4 pt-3 border-t border-slate-100 dark:border-white/[0.05] text-xs">
                      <div className="p-2.5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/[0.05]">
                        <span className="text-slate-400 dark:text-slate-500 text-[10px] block font-medium">Structure</span>
                        <span className="font-semibold text-slate-800 dark:text-slate-200">
                          {exam.format}
                        </span>
                      </div>
                      <div className="p-2.5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/[0.05]">
                        <span className="text-slate-400 dark:text-slate-500 text-[10px] block font-medium">Timing</span>
                        <span className="font-semibold text-slate-800 dark:text-slate-200">
                          {exam.duration} (Timed)
                        </span>
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/practice/sat?mockExam=${exam.id}`}
                    className="mt-6 w-full py-2.5 px-4 rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm group/btn"
                  >
                    <span>Launch Official SAT Mock Exam</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
