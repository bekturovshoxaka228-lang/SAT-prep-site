"use client";

import { useState } from "react";
import Link from "next/link";
import { Sidebar } from "@/components/sidebar";
import {
  Headphones,
  Clock,
  Sparkles,
  Flame,
  Volume2,
  ArrowRight,
  Radio,
} from "lucide-react";

export default function ListeningHubPage() {
  const [selectedType, setSelectedType] = useState<"short" | "full">("short");

  const shortDrills = [
    {
      id: "audio-micro-1",
      title: "Names, Phone Numbers & Postcodes",
      audioLength: "1:45 mins",
      questionsCount: "5 questions",
      focusType: "Spelling & Numbers Drill",
      difficulty: "Fast Dictation",
      badgeColor: "bg-[#007EA7]/15 text-[#007EA7] dark:bg-[#00263C] dark:text-[#00A8E8] border border-[#007EA7]/30",
      description: "Fast-paced native speaker spelling out complex British postcodes, surnames, and dates.",
    },
    {
      id: "audio-micro-2",
      title: "Campus Map & Spatial Directions",
      audioLength: "2:10 mins",
      questionsCount: "4 questions",
      focusType: "Map Labeling",
      difficulty: "Spatial Orientation",
      badgeColor: "bg-[#00A8E8]/10 text-[#007EA7] dark:bg-[#00263C] dark:text-[#00A8E8] border border-[#00A8E8]/30",
      description: "Identify campus auditoriums and laboratory wings following verbal directional instructions.",
    },
    {
      id: "audio-micro-3",
      title: "Conference Registration & Fees",
      audioLength: "1:30 mins",
      questionsCount: "4 questions",
      focusType: "Form Completion",
      difficulty: "Price & Timetable Cues",
      badgeColor: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
      description: "Quick numbers and dates form filling with subtle distractor correction.",
    },
  ];

  const fullSections = [
    {
      id: "section-1",
      title: "Section 1: University Accommodation Booking",
      speakers: "2 speakers (Student & Receptionist)",
      questionsCount: "10 questions",
      format: "Notes & Form Completion",
      duration: "7 mins playback + timer",
      difficulty: "Band 6.0 - 7.0",
      badgeColor: "bg-[#007EA7]/15 text-[#007EA7] dark:bg-[#00263C] dark:text-[#00A8E8] border border-[#007EA7]/30",
      description: "Official everyday social context. Student reserving campus dormitory and specifying dietary preferences.",
      recommended: true,
    },
    {
      id: "section-2",
      title: "Section 2: City Botanical Gardens Visitor Guide",
      speakers: "1 speaker (Monologue)",
      questionsCount: "10 questions",
      format: "Plan Labeling & Multiple Choice",
      duration: "8 mins playback + timer",
      difficulty: "Band 7.0 - 8.0",
      badgeColor: "bg-[#00A8E8]/10 text-[#007EA7] dark:bg-[#00263C] dark:text-[#00A8E8] border border-[#00A8E8]/30",
      description: "Public information monologue detailing seasonal plant exhibits and conservatory regulations.",
    },
    {
      id: "section-3",
      title: "Section 3: Environmental Science Dissertation Tutorial",
      speakers: "3 speakers (Tutor & 2 Undergraduates)",
      questionsCount: "10 questions",
      format: "Multiple Choice & Matching",
      duration: "8 mins playback + timer",
      difficulty: "Band 8.0 - 9.0",
      badgeColor: "bg-[#003459]/10 text-[#005980] dark:bg-[#003459] dark:text-[#00A8E8] border border-[#003459]/30",
      description: "Academic discussion evaluating sample data methodologies and peer-reviewed journal citations.",
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
                <Headphones className="w-3.5 h-3.5 text-[#007EA7] dark:text-[#00A8E8]" strokeWidth={1.75} /> IELTS Academic Listening
              </span>
              <span className="text-xs text-slate-400 font-normal">
                • Британский и международные акценты
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white tracking-tight">
              Выберите формат аудирования
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 max-w-xl font-normal leading-relaxed">
              Отрабатывайте распознавание чисел, дат и имен в микро-заданиях или тренируйте полные 10-вопросные секции IELTS.
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
              <span>Микро-аудио</span>
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
              <Radio className="w-4 h-4 text-[#007EA7] dark:text-[#00A8E8]" strokeWidth={1.75} />
              <span>Полные секции</span>
            </button>
          </div>
        </div>

        {/* Listening Options Grid */}
        {selectedType === "short" ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                  <Flame className="w-5 h-5 text-[#007EA7] dark:text-[#00A8E8]" strokeWidth={1.75} /> Микро-аудио дрилы
                </h2>
                <p className="text-xs text-slate-400">
                  Аудиофрагменты до 2 минут для отработки правописания, чисел и ориентации по карте.
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
                        <Volume2 className="w-3.5 h-3.5 text-[#007EA7]" strokeWidth={1.75} /> {drill.audioLength}
                      </span>
                    </div>

                    <h3 className="font-semibold text-base text-slate-900 dark:text-white group-hover:text-[#007EA7] dark:group-hover:text-[#00A8E8] transition-colors">
                      {drill.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed font-normal">
                      {drill.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/[0.05] flex items-center justify-between text-xs text-slate-400 font-normal">
                      <span>{drill.focusType}</span>
                      <span className="font-medium text-[#007EA7] dark:text-[#00A8E8]">
                        {drill.questionsCount}
                      </span>
                    </div>
                  </div>

                  <Link
                    href={`/practice/ielts/listening?drill=${drill.id}`}
                    className="mt-5 w-full py-2.5 px-4 rounded-full bg-slate-100 hover:bg-[#007EA7] dark:bg-white/[0.06] dark:hover:bg-[#007EA7] text-slate-700 hover:text-white dark:text-slate-200 dark:hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition group/btn shadow-xs"
                  >
                    <span>Запустить аудирование</span>
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
                  <Radio className="w-5 h-5 text-[#007EA7] dark:text-[#00A8E8]" strokeWidth={1.75} /> Официальные секции IELTS 1–4
                </h2>
                <p className="text-xs text-slate-400">
                  Аудиотреки на 10 вопросов с паузами для проверки и переноса ответов.
                </p>
              </div>
              <span className="text-xs font-medium text-slate-400">
                3 секции
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {fullSections.map((sec) => (
                <div
                  key={sec.id}
                  className="p-6 rounded-3xl bg-white dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/[0.07] shadow-xs flex flex-col justify-between hover:border-slate-300 dark:hover:border-white/[0.12] transition group relative overflow-hidden"
                >
                  {sec.recommended && (
                    <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#007EA7] text-white flex items-end justify-center rotate-45 pb-1">
                      <Sparkles className="w-3.5 h-3.5 mb-1" strokeWidth={1.75} />
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`text-[10.5px] px-2.5 py-0.5 rounded-full font-medium border ${sec.badgeColor}`}
                      >
                        {sec.difficulty}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                        <Clock className="w-3.5 h-3.5 text-[#007EA7]" strokeWidth={1.75} /> {sec.duration}
                      </span>
                    </div>

                    <h3 className="font-semibold text-base text-slate-900 dark:text-white group-hover:text-[#007EA7] dark:group-hover:text-[#00A8E8] transition-colors">
                      {sec.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed font-normal">
                      {sec.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/[0.05] flex items-center justify-between text-xs text-slate-400 font-normal">
                      <span>{sec.format}</span>
                      <span className="font-medium text-[#007EA7] dark:text-[#00A8E8]">
                        {sec.questionsCount}
                      </span>
                    </div>
                  </div>

                  <Link
                    href={`/practice/ielts/listening?section=${sec.id}`}
                    className="mt-5 w-full py-2.5 px-4 rounded-full bg-[#007EA7] hover:bg-[#0093C8] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition shadow-xs group/btn"
                  >
                    <span>Открыть секцию</span>
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
