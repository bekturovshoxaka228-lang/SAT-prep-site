"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  BookA,
  Search,
  Sparkles,
  Star,
  Layers,
  X,
  ExternalLink,
  Tag,
  BookOpen,
  Volume2,
  Check,
} from "lucide-react";

export interface VocabularyWord {
  id: string;
  word: string;
  phonetic: string;
  pos: "adj." | "noun" | "verb" | "adv.";
  definition: string;
  example: string;
  synonyms: string[];
  exam: "sat" | "ielts" | "both";
  category: string;
}

export const ACADEMIC_VOCABULARY: VocabularyWord[] = [
  {
    id: "v-1",
    word: "Integral",
    phonetic: "/ˈɪntɪɡrəl/",
    pos: "adj.",
    definition: "Necessary to make a whole complete; essential or fundamental.",
    example: "Because fungi decompose organic matter, they are integral to nutrient cycles in forest ecosystems.",
    synonyms: ["essential", "fundamental", "indispensable", "vital"],
    exam: "both",
    category: "High-Frequency Academic",
  },
  {
    id: "v-2",
    word: "Superfluous",
    phonetic: "/suːˈpɜːrfluəs/",
    pos: "adj.",
    definition: "Exceeding what is sufficient or required; redundant or unnecessary.",
    example: "The editor cut out superfluous adjectives to keep the scientific abstract concise.",
    synonyms: ["redundant", "excessive", "unneeded", "gratuitous"],
    exam: "sat",
    category: "SAT Words in Context",
  },
  {
    id: "v-3",
    word: "Detrimental",
    phonetic: "/ˌdɛtrɪˈmɛntl/",
    pos: "adj.",
    definition: "Tending to cause harm or damage; injurious.",
    example: "Prolonged exposure to sulfur dioxide has a detrimental effect on respiratory health.",
    synonyms: ["harmful", "damaging", "injurious", "deleterious"],
    exam: "both",
    category: "Science & Environment",
  },
  {
    id: "v-4",
    word: "Tangential",
    phonetic: "/tænˈdʒɛnʃəl/",
    pos: "adj.",
    definition: "Hardly touching a matter; peripheral or merely superficially relevant.",
    example: "The speaker made several tangential remarks that distracted from the core thesis.",
    synonyms: ["peripheral", "divergent", "marginal", "incidental"],
    exam: "sat",
    category: "SAT Craft & Structure",
  },
  {
    id: "v-5",
    word: "Mitigate",
    phonetic: "/ˈmɪtɪɡeɪt/",
    pos: "verb",
    definition: "To make less severe, serious, or painful; alleviate.",
    example: "Urban reforestation initiatives help mitigate the urban heat island effect.",
    synonyms: ["alleviate", "attenuate", "reduce", "moderate"],
    exam: "ielts",
    category: "IELTS Academic Task 2",
  },
  {
    id: "v-6",
    word: "Ephemeral",
    phonetic: "/ɪˈfɛmərəl/",
    pos: "adj.",
    definition: "Lasting for a very short time; transitory; fleeting.",
    example: "The artist captured the ephemeral beauty of twilight across the desert sands.",
    synonyms: ["transitory", "fleeting", "transient", "evanescent"],
    exam: "sat",
    category: "SAT Literature & Humanities",
  },
  {
    id: "v-7",
    word: "Ubiquitous",
    phonetic: "/juːˈbɪkwɪtəs/",
    pos: "adj.",
    definition: "Present, appearing, or found everywhere; omnipresent.",
    example: "Smartphones and digital displays have become ubiquitous in contemporary society.",
    synonyms: ["omnipresent", "pervasive", "universal", "everywhere"],
    exam: "ielts",
    category: "IELTS Band 8+ Vocabulary",
  },
  {
    id: "v-8",
    word: "Pragmatic",
    phonetic: "/præɡˈmætɪk/",
    pos: "adj.",
    definition: "Dealing with things sensibly and realistically based on practical rather than theoretical considerations.",
    example: "City planners adopted a pragmatic approach to transit expansion given budget limits.",
    synonyms: ["practical", "realistic", "utilitarian", "hard-headed"],
    exam: "both",
    category: "Social Sciences",
  },
  {
    id: "v-9",
    word: "Corroborate",
    phonetic: "/kəˈrɒbəreɪt/",
    pos: "verb",
    definition: "Confirm or give support to (a statement, theory, or finding) with evidence.",
    example: "Recent geological ice-core samples corroborate the historical temperature models.",
    synonyms: ["confirm", "verify", "substantiate", "authenticate"],
    exam: "sat",
    category: "SAT Textual Evidence",
  },
  {
    id: "v-10",
    word: "Anomalous",
    phonetic: "/əˈnɒmələs/",
    pos: "adj.",
    definition: "Deviating from what is standard, normal, or expected; abnormal.",
    example: "The sensor detected anomalous seismic readings preceding the geothermal eruption.",
    synonyms: ["abnormal", "irregular", "atypical", "aberrant"],
    exam: "both",
    category: "Scientific Reasoning",
  },
  {
    id: "v-11",
    word: "Paucity",
    phonetic: "/ˈpɔːsɪti/",
    pos: "noun",
    definition: "The presence of something in only small or insufficient quantities or amounts; scarcity.",
    example: "The study was constrained by a paucity of reliable historical census records.",
    synonyms: ["scarcity", "dearth", "shortage", "deficiency"],
    exam: "sat",
    category: "Academic Vocabulary",
  },
  {
    id: "v-12",
    word: "Disseminate",
    phonetic: "/dɪˈsɛmɪneɪt/",
    pos: "verb",
    definition: "Spread or disperse (something, especially information) widely.",
    example: "Academic journals disseminate peer-reviewed research to international scientists.",
    synonyms: ["distribute", "broadcast", "circulate", "promulgate"],
    exam: "ielts",
    category: "IELTS Academic Writing",
  },
];

interface VocabularyDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filterDefault?: "all" | "sat" | "ielts";
}

export function VocabularyDrawer({
  isOpen,
  onClose,
  filterDefault = "all",
}: VocabularyDrawerProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedExam, setSelectedExam] = useState<"all" | "sat" | "ielts" | "starred">(
    filterDefault
  );
  const [starredWords, setStarredWords] = useState<Set<string>>(new Set());

  const toggleStar = (id: string) => {
    setStarredWords((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const filteredWords = useMemo(() => {
    return ACADEMIC_VOCABULARY.filter((item) => {
      const matchesSearch =
        item.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.synonyms.some((syn) => syn.toLowerCase().includes(searchQuery.toLowerCase()));

      if (!matchesSearch) return false;

      if (selectedExam === "starred") {
        return starredWords.has(item.id);
      }
      if (selectedExam === "all") return true;
      if (selectedExam === "sat") return item.exam === "sat" || item.exam === "both";
      if (selectedExam === "ielts") return item.exam === "ielts" || item.exam === "both";
      return true;
    });
  }, [searchQuery, selectedExam, starredWords]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-50 bg-slate-900/40 dark:bg-slate-950/60 backdrop-blur-sm transition-opacity animate-in fade-in"
        />
      )}

      {/* Slide-out Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full sm:w-[480px] max-w-[94vw] bg-white dark:bg-[#0c121e] border-l border-slate-200/80 dark:border-white/[0.08] shadow-2xl flex flex-col font-sans transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200/70 dark:border-white/[0.06] flex items-center justify-between bg-slate-50/80 dark:bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-indigo-600/90 text-white flex items-center justify-center shadow-xs">
              <BookA className="w-4 h-4" strokeWidth={1.75} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                  Банк академических слов
                </h3>
                <span className="text-[10px] font-medium uppercase px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/40">
                  SAT &amp; IELTS
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-normal">
                Ключевая лексика с контекстом реального экзамена
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="quiz-option-btn p-2 rounded-full border border-slate-200/70 dark:border-white/[0.08] text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.05] transition"
            title="Закрыть"
          >
            <X className="w-4 h-4" strokeWidth={1.75} />
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 border-b border-slate-200/70 dark:border-white/[0.06] bg-white dark:bg-[#0c121e] space-y-3">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" strokeWidth={1.75} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск слова, перевода или синонима..."
              className="w-full text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-full bg-slate-50/70 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.08] text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition"
            />
          </div>

          {/* Exam Switcher Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto text-xs font-medium pb-1">
            <button
              type="button"
              onClick={() => setSelectedExam("all")}
              className={`quiz-option-btn px-3.5 py-1.5 rounded-full transition ${
                selectedExam === "all"
                  ? "bg-indigo-600 text-white shadow-xs"
                  : "bg-slate-100 dark:bg-white/[0.05] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Все ({ACADEMIC_VOCABULARY.length})
            </button>
            <button
              type="button"
              onClick={() => setSelectedExam("sat")}
              className={`quiz-option-btn px-3.5 py-1.5 rounded-full transition ${
                selectedExam === "sat"
                  ? "bg-[#007EA7] text-white shadow-xs"
                  : "bg-slate-100 dark:bg-white/[0.05] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Digital SAT
            </button>
            <button
              type="button"
              onClick={() => setSelectedExam("ielts")}
              className={`quiz-option-btn px-3.5 py-1.5 rounded-full transition ${
                selectedExam === "ielts"
                  ? "bg-rose-600 text-white shadow-xs"
                  : "bg-slate-100 dark:bg-white/[0.05] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              IELTS Academic
            </button>
            <button
              type="button"
              onClick={() => setSelectedExam("starred")}
              className={`quiz-option-btn px-3.5 py-1.5 rounded-full flex items-center gap-1.5 transition ${
                selectedExam === "starred"
                  ? "bg-amber-500 text-white shadow-xs"
                  : "bg-slate-100 dark:bg-white/[0.05] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Star className="w-3 h-3" strokeWidth={1.75} />
              <span>Избранные ({starredWords.size})</span>
            </button>
          </div>
        </div>

        {/* Word Cards List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
          {filteredWords.length === 0 ? (
            <div className="text-center py-12 text-slate-500 dark:text-slate-400 space-y-2">
              <BookOpen className="w-8 h-8 mx-auto text-slate-400" strokeWidth={1.75} />
              <p className="text-sm font-medium">Слова не найдены.</p>
              <p className="text-xs">Попробуйте изменить поисковый запрос.</p>
            </div>
          ) : (
            filteredWords.map((item) => {
              const isStarred = starredWords.has(item.id);
              return (
                <div
                  key={item.id}
                  className="p-4 rounded-3xl bg-slate-50/60 dark:bg-white/[0.02] border border-slate-200/70 dark:border-white/[0.06] shadow-xs hover:border-indigo-300/80 dark:hover:border-indigo-700/60 transition space-y-2.5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-base sm:text-[17px] font-semibold text-slate-900 dark:text-white tracking-tight">
                        {item.word}
                      </span>
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                        {item.phonetic}
                      </span>
                      <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-slate-200/70 dark:bg-white/[0.06] text-slate-700 dark:text-slate-300">
                        {item.pos}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleStar(item.id)}
                      className="quiz-option-btn p-1 text-slate-400 hover:text-amber-500 transition"
                      title={isStarred ? "Удалить из избранного" : "Добавить в избранное"}
                    >
                      <Star
                        className={`w-4 h-4 ${
                          isStarred ? "text-amber-500 fill-amber-500" : ""
                        }`}
                        strokeWidth={1.75}
                      />
                    </button>
                  </div>

                  {/* Definition */}
                  <p className="text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 font-normal leading-relaxed">
                    {item.definition}
                  </p>

                  {/* Context Example */}
                  <div className="p-3 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/[0.05] text-xs italic text-slate-600 dark:text-slate-300 leading-relaxed font-serif">
                    &ldquo;{item.example}&rdquo;
                  </div>

                  {/* Synonyms & Badge */}
                  <div className="flex items-center justify-between gap-2 pt-1 text-[11px] flex-wrap">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="font-medium text-slate-400">Синонимы:</span>
                      {item.synonyms.map((syn, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-full bg-slate-200/60 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 font-medium text-[10.5px]"
                        >
                          {syn}
                        </span>
                      ))}
                    </div>

                    <span className="text-[10px] font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 px-2 py-0.5 rounded-full border border-indigo-200/60 dark:border-indigo-800/40">
                      {item.category}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Shortcut to SM-2 Spaced Repetition Flashcards */}
        <div className="p-4 border-t border-slate-200/70 dark:border-white/[0.06] bg-slate-50/80 dark:bg-white/[0.02] flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" strokeWidth={1.75} />
            <span className="text-xs text-slate-600 dark:text-slate-400">
              Интервальные карточки SM-2
            </span>
          </div>

          <Link
            href="/flashcards"
            className="quiz-option-btn px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-xs flex items-center gap-1.5 transition"
          >
            <span>Карточки</span>
            <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.75} />
          </Link>
        </div>
      </div>
    </>
  );
}
