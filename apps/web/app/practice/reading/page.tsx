"use client";

import { useState } from "react";
import Link from "next/link";
import { Sidebar } from "@/components/sidebar";
import {
  BookOpen,
  Clock,
  Sparkles,
  Flame,
  ArrowRight,
  FileText,
} from "lucide-react";

export default function ReadingHubPage() {
  const [selectedType, setSelectedType] = useState<"short" | "full">("short");

  const shortDrills = [
    {
      id: "micro-1",
      title: "Urban Microclimates & Heat Sinks",
      paragraphCount: "2 paragraphs",
      questionsCount: "4 questions",
      questionType: "True / False / Not Given",
      duration: "6 mins",
      difficulty: "Medium",
      badgeColor: "bg-[#007EA7]/15 text-[#007EA7] dark:bg-[#00263C] dark:text-[#00A8E8] border border-[#007EA7]/30",
      description: "Quick drill targeting spatial heat retention and vegetation impact in metropolitan areas.",
    },
    {
      id: "micro-2",
      title: "Deep-Sea Hydrothermal Vent Ecosystems",
      paragraphCount: "2 paragraphs",
      questionsCount: "5 questions",
      questionType: "Matching Headings",
      duration: "7 mins",
      difficulty: "Hard",
      badgeColor: "bg-[#003459]/10 text-[#005980] dark:bg-[#003459] dark:text-[#00A8E8] border border-[#003459]/30",
      description: "Fast-paced heading identification for chemosynthetic organisms living in extreme conditions.",
    },
    {
      id: "micro-3",
      title: "The Evolution of Written Numerals",
      paragraphCount: "1 paragraph",
      questionsCount: "3 questions",
      questionType: "Summary Completion",
      duration: "5 mins",
      difficulty: "Standard",
      badgeColor: "bg-[#00A8E8]/10 text-[#007EA7] dark:bg-[#00263C] dark:text-[#00A8E8] border border-[#00A8E8]/30",
      description: "Fill-in-the-blank drill examining Sumerian cuneiform tallies to Brahmi decimal notation.",
    },
  ];

  const fullPassages = [
    {
      id: "passage-1",
      title: "Passage 1: The Urban Heat Island Phenomenon",
      length: "820 words",
      questionsCount: "13 questions",
      questionType: "MCQ & True/False/Not Given",
      duration: "20 mins",
      difficulty: "Band 6.5 - 7.5",
      badgeColor: "bg-[#007EA7]/15 text-[#007EA7] dark:bg-[#00263C] dark:text-[#00A8E8] border border-[#007EA7]/30",
      description: "Standard Academic Section 1 passage investigating nocturnal radiation entrapment and mitigation via green roofs.",
      recommended: true,
    },
    {
      id: "passage-2",
      title: "Passage 2: Cognitive Plasticity & Adult Bilingualism",
      length: "910 words",
      questionsCount: "13 questions",
      questionType: "Sentence Completion & Matching",
      duration: "20 mins",
      difficulty: "Band 7.5 - 8.5",
      badgeColor: "bg-[#00A8E8]/10 text-[#007EA7] dark:bg-[#00263C] dark:text-[#00A8E8] border border-[#00A8E8]/30",
      description: "In-depth scientific research on neurological white-matter connectivity in late language learners.",
    },
    {
      id: "passage-3",
      title: "Passage 3: Austronesian Wayfinding & Indigenous Navigation",
      length: "950 words",
      questionsCount: "14 questions",
      questionType: "Multiple Choice & Yes/No/Not Given",
      duration: "20 mins",
      difficulty: "Band 8.0 - 9.0",
      badgeColor: "bg-[#003459]/10 text-[#005980] dark:bg-[#003459] dark:text-[#00A8E8] border border-[#003459]/30",
      description: "Complex historical analysis of celestial star compasses, wave swell patterns, and long-range Pacific voyaging.",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--background)] text-slate-900 dark:text-slate-100 flex flex-col md:flex-row transition-colors duration-200">
      <Sidebar />

      <main className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-8 space-y-6">
        {/* Header banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-white/[0.03] p-6 sm:p-8 rounded-3xl border border-slate-200/70 dark:border-white/[0.07] shadow-xs transition-all relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#007EA7]/5 dark:bg-[#007EA7]/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/40 text-[#007EA7] dark:text-[#00A8E8] border border-sky-200/60 dark:border-sky-800/40 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#007EA7] dark:text-[#00A8E8]" strokeWidth={1.75} /> IELTS Academic Reading
              </span>
              <span className="text-xs text-slate-400 font-normal">
                • Сплит-экран
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white tracking-tight">
              Выберите формат чтения
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 max-w-xl font-normal leading-relaxed">
              Быстрые микро-дрилы для тренировки конкретных типов вопросов или полные 20-минутные экзаменационные пассажи.
            </p>
          </div>

          {/* Type Toggle Tabs */}
          <div className="inline-flex p-1 rounded-full bg-slate-100/80 dark:bg-white/[0.05] border border-slate-200/60 dark:border-white/[0.06] self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setSelectedType("short")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all ${
                selectedType === "short"
                  ? "bg-white dark:bg-white/[0.08] text-[#007EA7] dark:text-[#00A8E8] shadow-xs"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Flame className="w-4 h-4 text-[#007EA7] dark:text-[#00A8E8]" strokeWidth={1.75} />
              <span>Микро-пассажи</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedType("full")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all ${
                selectedType === "full"
                  ? "bg-white dark:bg-white/[0.08] text-[#007EA7] dark:text-[#00A8E8] shadow-xs"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <FileText className="w-4 h-4 text-[#007EA7] dark:text-[#00A8E8]" strokeWidth={1.75} />
              <span>Полные тексты</span>
            </button>
          </div>
        </div>

        {/* Practice Selection Grid */}
        {selectedType === "short" ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                  <Flame className="w-5 h-5 text-[#007EA7] dark:text-[#00A8E8]" strokeWidth={1.75} /> Микро-пассажи (Быстрые дрилы)
                </h2>
                <p className="text-xs text-slate-400">
                  1–2 абзаца для быстрой отработки поиска ключевых слов и сканирования текста.
                </p>
              </div>
              <span className="text-xs font-medium text-slate-400">
                3 задания
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {shortDrills.map((drill) => (
                <div
                  key={drill.id}
                  className="p-6 rounded-3xl bg-white dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/[0.07] shadow-xs flex flex-col justify-between hover:border-slate-300 dark:hover:border-white/[0.12] transition group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`text-[10.5px] px-2.5 py-0.5 rounded-full font-medium border ${drill.badgeColor}`}
                      >
                        {drill.difficulty}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                        <Clock className="w-3.5 h-3.5 text-[#007EA7]" strokeWidth={1.75} /> {drill.duration}
                      </span>
                    </div>

                    <h3 className="font-semibold text-base text-slate-900 dark:text-white group-hover:text-[#007EA7] dark:group-hover:text-[#00A8E8] transition-colors">
                      {drill.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed font-normal">
                      {drill.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/[0.05] flex items-center justify-between text-xs text-slate-400 font-normal">
                      <span>{drill.paragraphCount}</span>
                      <span className="font-medium text-[#007EA7] dark:text-[#00A8E8]">
                        {drill.questionsCount}
                      </span>
                    </div>
                  </div>

                  <Link
                    href={`/practice/ielts/reading?drill=${drill.id}`}
                    className="mt-5 w-full py-2.5 px-4 rounded-full bg-slate-100 hover:bg-[#007EA7] dark:bg-white/[0.06] dark:hover:bg-[#007EA7] text-slate-700 hover:text-white dark:text-slate-200 dark:hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition group/btn shadow-xs"
                  >
                    <span>Начать микро-пассаж</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" strokeWidth={1.75} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#007EA7] dark:text-[#00A8E8]" strokeWidth={1.75} /> Официальные пассажи IELTS (Full-Length)
                </h2>
                <p className="text-xs text-slate-400">
                  Полные тексты 800+ слов с 13–14 вопросами и стандартным 20-минутным таймером.
                </p>
              </div>
              <span className="text-xs font-medium text-slate-400">
                3 пассажа
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {fullPassages.map((psg) => (
                <div
                  key={psg.id}
                  className="p-6 rounded-3xl bg-white dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/[0.07] shadow-xs flex flex-col justify-between hover:border-slate-300 dark:hover:border-white/[0.12] transition group relative overflow-hidden"
                >
                  {psg.recommended && (
                    <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#007EA7] text-white flex items-end justify-center rotate-45 pb-1">
                      <Sparkles className="w-3.5 h-3.5 mb-1" strokeWidth={1.75} />
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`text-[10.5px] px-2.5 py-0.5 rounded-full font-medium border ${psg.badgeColor}`}
                      >
                        {psg.difficulty}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                        <Clock className="w-3.5 h-3.5 text-[#007EA7]" strokeWidth={1.75} /> {psg.duration}
                      </span>
                    </div>

                    <h3 className="font-semibold text-base text-slate-900 dark:text-white group-hover:text-[#007EA7] dark:group-hover:text-[#00A8E8] transition-colors">
                      {psg.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed font-normal">
                      {psg.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/[0.05] flex items-center justify-between text-xs text-slate-400 font-normal">
                      <span>{psg.length}</span>
                      <span className="font-medium text-[#007EA7] dark:text-[#00A8E8]">
                        {psg.questionsCount}
                      </span>
                    </div>
                  </div>

                  <Link
                    href={`/practice/ielts/reading?passage=${psg.id}`}
                    className="mt-5 w-full py-2.5 px-4 rounded-full bg-[#007EA7] hover:bg-[#0093C8] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition shadow-xs group/btn"
                  >
                    <span>Открыть пассаж</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" strokeWidth={1.75} />
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
