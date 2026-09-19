"use client";

import { useState, useEffect, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  ArrowLeft,
  Clock,
  Calculator,
  CheckCircle2,
  XCircle,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  Bookmark,
  BookA,
  Sparkles,
  Loader2,
  RotateCcw,
  LayoutGrid,
  X,
  BarChart3,
  Maximize2,
} from "lucide-react";
import { AiSolutionReviewer, AiRecommendationCard } from "@/components/ai-solution-reviewer";
import { VocabularyDrawer } from "@/components/vocabulary-drawer";
import {
  RW_DOMAINS,
  MATH_DOMAINS,
  ALL_SAT_QUESTIONS,
  type SatQuestion,
  type DomainMeta,
} from "@/lib/sat-data";

function formatUnderlineText(text: string) {
  if (!text.includes("<u>")) {
    return text;
  }
  const parts = text.split(/(<u>.*?<\/u>)/g);
  return parts.map((part, idx) => {
    if (part.startsWith("<u>") && part.endsWith("</u>")) {
      const inner = part.slice(3, -4);
      return (
        <span
          key={idx}
          className="underline underline-offset-4 decoration-2 decoration-sky-600 dark:decoration-sky-400 font-semibold bg-sky-50/80 dark:bg-sky-950/50 px-1 py-0.5 rounded text-sky-950 dark:text-sky-100"
        >
          {inner}
        </span>
      );
    }
    return <span key={idx}>{part}</span>;
  });
}

function renderFormattedPassage(text: string) {
  const paragraphs = text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className="space-y-3.5">
      {paragraphs.map((paragraph, pIdx) => {
        const lines = paragraph.split("\n").map((l) => l.trim());
        const isPoetry = lines.length >= 3 && lines.every((l) => l.length < 65);

        if (isPoetry) {
          return (
            <div
              key={pIdx}
              className="space-y-1 pl-4 border-l-2 border-sky-400/40 dark:border-sky-500/30 italic my-2 font-serif text-[14px]"
            >
              {lines.map((line, lIdx) => (
                <div key={lIdx}>{formatUnderlineText(line)}</div>
              ))}
            </div>
          );
        }

        const isIntro =
          paragraph.startsWith("The following text is") ||
          paragraph.startsWith("This text is") ||
          paragraph.startsWith("Adapted from");

        const isTextHeader = lines.length > 0 && /^(Text\s+[12]|Passage\s+[12])$/i.test(lines[0]);
        const headerText = isTextHeader ? lines[0] : "";
        const bodyLines = isTextHeader ? lines.slice(1) : lines;

        return (
          <div key={pIdx} className="space-y-1">
            {headerText && (
              <div className="font-bold text-xs tracking-wider uppercase text-sky-700 dark:text-sky-300 select-none pt-0.5">
                {headerText}
              </div>
            )}
            <p
              className={`leading-relaxed ${
                isIntro
                  ? "text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 italic pb-1.5 border-b border-slate-200/60 dark:border-white/[0.06]"
                  : "text-slate-800 dark:text-slate-200"
              }`}
            >
              {formatUnderlineText(bodyLines.join(" "))}
            </p>
          </div>
        );
      })}
    </div>
  );
}

function SatPracticeContent() {
  const searchParams = useSearchParams();
  const qIdParam = searchParams.get("qId");
  const targetQuestion = qIdParam ? ALL_SAT_QUESTIONS.find((q) => q.id === qIdParam) : null;

  const initialTab = targetQuestion
    ? targetQuestion.section
    : searchParams.get("tab") === "math"
    ? "math"
    : "rw";
  const initialDomain = targetQuestion
    ? targetQuestion.domainId
    : searchParams.get("domain") || "all";
  const initialSubtopic = targetQuestion
    ? targetQuestion.subtopicId
    : searchParams.get("subtopic") || "all";
  const initialDifficulty = targetQuestion
    ? targetQuestion.difficulty
    : searchParams.get("difficulty") || "all";

  const [activeTab, setActiveTab] = useState<"rw" | "math">(initialTab);
  const [selectedDomain, setSelectedDomain] = useState<string>(initialDomain);
  const [selectedSubtopic, setSelectedSubtopic] = useState<string>(initialSubtopic);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>(initialDifficulty);
  const [showCalculator, setShowCalculator] = useState(false);
  const [isVocabOpen, setIsVocabOpen] = useState(false);
  const [isAiDrawerOpen, setIsAiDrawerOpen] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  // Active question index within filtered questions
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  // Bluebook-style Question Review Modal state
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);
  const [modalFilter, setModalFilter] = useState<"all" | "unanswered" | "marked" | "easy" | "medium" | "hard">("all");

  // User answers and submission status keyed by question ID
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submittedStatus, setSubmittedStatus] = useState<Record<string, boolean>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<string, boolean>>({});

  // Countdown timer
  const [timeLeft, setTimeLeft] = useState(initialTab === "math" ? 2100 : 1920);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // Sync tab, domain, subtopic, difficulty & qId from search params
  useEffect(() => {
    const qParam = searchParams.get("qId");
    if (qParam) {
      const q = ALL_SAT_QUESTIONS.find((item) => item.id === qParam);
      if (q) {
        setActiveTab(q.section);
        setSelectedDomain(q.domainId);
        setSelectedSubtopic(q.subtopicId);
        setSelectedDifficulty(q.difficulty);
        return;
      }
    }

    const tabParam = searchParams.get("tab");
    const domainParam = searchParams.get("domain");
    const subtopicParam = searchParams.get("subtopic");
    const difficultyParam = searchParams.get("difficulty");

    if (tabParam === "math" || tabParam === "rw") {
      setActiveTab(tabParam);
    }
    if (domainParam) {
      setSelectedDomain(domainParam);
    }
    if (subtopicParam) {
      setSelectedSubtopic(subtopicParam);
    }
    if (difficultyParam) {
      setSelectedDifficulty(difficultyParam);
    }
  }, [searchParams]);

  // Current domain metadata list
  const currentDomainList = activeTab === "rw" ? RW_DOMAINS : MATH_DOMAINS;

  // Active domain object if selected
  const activeDomainMeta = currentDomainList.find((d) => d.id === selectedDomain);

  // Active subtopic name for display
  const currentSubtopicName = useMemo(() => {
    if (selectedSubtopic && selectedSubtopic !== "all" && activeDomainMeta) {
      const found = activeDomainMeta.subtopics.find((s) => s.id === selectedSubtopic);
      if (found) return found.name;
    }
    const currentQ = ALL_SAT_QUESTIONS.find(
      (q) =>
        q.section === activeTab &&
        (selectedDomain === "all" || q.domainId === selectedDomain) &&
        (selectedSubtopic === "all" || q.subtopicId === selectedSubtopic)
    );
    if (currentQ) {
      return currentQ.subtopic;
    }
    return activeDomainMeta ? activeDomainMeta.name : "All Task Types";
  }, [selectedSubtopic, activeDomainMeta, activeTab, selectedDomain]);

  // Filtered questions based on active section, domain, subtopic, and difficulty
  const filteredQuestions = useMemo(() => {
    return ALL_SAT_QUESTIONS.filter((q) => {
      if (q.section !== activeTab) return false;
      if (selectedDomain !== "all" && q.domainId !== selectedDomain) return false;
      if (selectedSubtopic !== "all" && q.subtopicId !== selectedSubtopic) return false;
      if (selectedDifficulty !== "all" && q.difficulty !== selectedDifficulty) return false;
      return true;
    });
  }, [activeTab, selectedDomain, selectedSubtopic, selectedDifficulty]);

  // Jump to specific question if qId matches in filtered list
  useEffect(() => {
    const qParam = searchParams.get("qId");
    if (qParam && filteredQuestions.length > 0) {
      const foundIdx = filteredQuestions.findIndex((q) => q.id === qParam);
      if (foundIdx !== -1) {
        setActiveQuestionIndex(foundIdx);
      }
    }
  }, [searchParams, filteredQuestions]);

  // Reset question index when filters change without qId override
  useEffect(() => {
    const qParam = searchParams.get("qId");
    if (!qParam) {
      setActiveQuestionIndex(0);
    }
  }, [activeTab, selectedDomain, selectedSubtopic, selectedDifficulty, searchParams]);

  const currentQuestion = filteredQuestions[activeQuestionIndex] || filteredQuestions[0];
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] || "" : "";
  const isCurrentSubmitted = currentQuestion ? !!submittedStatus[currentQuestion.id] : false;
  const isCurrentMarked = currentQuestion ? !!markedForReview[currentQuestion.id] : false;

  const handleSelectAnswer = (ans: string) => {
    if (isCurrentSubmitted || !currentQuestion) return;
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: ans }));
  };

  const handleCheck = () => {
    if (!currentQuestion) return;
    setSubmittedStatus((prev) => ({ ...prev, [currentQuestion.id]: true }));
  };

  const handleReset = () => {
    if (!currentQuestion) return;
    setSubmittedStatus((prev) => ({ ...prev, [currentQuestion.id]: false }));
  };

  const handleBack = () => {
    if (activeQuestionIndex > 0) {
      setActiveQuestionIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (activeQuestionIndex < filteredQuestions.length - 1) {
      setActiveQuestionIndex((prev) => prev + 1);
    }
  };

  const toggleMarkReview = () => {
    if (!currentQuestion) return;
    setMarkedForReview((prev) => ({
      ...prev,
      [currentQuestion.id]: !prev[currentQuestion.id],
    }));
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isQuestionModalOpen) {
        setIsQuestionModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isQuestionModalOpen]);

  // Statistics for Bluebook Question Review Modal
  const modalStats = useMemo(() => {
    let answered = 0;
    let marked = 0;
    let easy = 0;
    let medium = 0;
    let hard = 0;

    filteredQuestions.forEach((q) => {
      if (answers[q.id]) answered++;
      if (markedForReview[q.id]) marked++;
      if (q.difficulty === "easy") easy++;
      if (q.difficulty === "medium") medium++;
      if (q.difficulty === "hard") hard++;
    });

    return {
      total: filteredQuestions.length,
      answered,
      unanswered: filteredQuestions.length - answered,
      marked,
      easy,
      medium,
      hard,
    };
  }, [filteredQuestions, answers, markedForReview]);

  // Filtered questions to display in Bluebook Question Review Modal
  const displayedModalQuestions = useMemo(() => {
    return filteredQuestions
      .map((q, idx) => ({ q, originalIndex: idx }))
      .filter(({ q }) => {
        if (modalFilter === "unanswered") return !answers[q.id];
        if (modalFilter === "marked") return !!markedForReview[q.id];
        if (modalFilter === "easy") return q.difficulty === "easy";
        if (modalFilter === "medium") return q.difficulty === "medium";
        if (modalFilter === "hard") return q.difficulty === "hard";
        return true;
      });
  }, [filteredQuestions, modalFilter, answers, markedForReview]);

  const isCorrect =
    currentQuestion &&
    (currentQuestion.type === "mcq"
      ? currentAnswer.toUpperCase() === currentQuestion.correctAnswer.toUpperCase()
      : currentAnswer.trim() === currentQuestion.correctAnswer.trim());

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#090d16] text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-200">
      {/* Top Test Header in style of Bluebook / Digital SAT */}
      <header className="border-b border-slate-200/70 dark:border-white/[0.07] bg-white/95 dark:bg-[#090d16]/95 backdrop-blur-md px-4 sm:px-6 h-16 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <Link
            href={activeTab === "math" ? "/practice/sat-math" : "/practice/sat-rw"}
            className="quiz-option-btn flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-white/[0.06] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.75} /> Назад в меню
          </Link>
          <span className="text-slate-200 dark:text-white/[0.1]">|</span>
          <span className="text-xs font-semibold text-[#007EA7] dark:text-[#00A8E8] bg-sky-50 dark:bg-sky-950/50 px-3 py-1 rounded-full">
            Digital SAT • {activeTab === "rw" ? "Reading & Writing" : "Math"}
          </span>
        </div>

        {/* Informative Current Task Badge (Non-interactive) */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/[0.05] text-xs">
          <span className="text-slate-400 font-medium">Задание:</span>
          <span className="font-semibold text-slate-800 dark:text-slate-200">
            {currentSubtopicName}
          </span>
        </div>

        {/* Quick Tools */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsVocabOpen(true)}
            className={`quiz-option-btn flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition ${
              isVocabOpen
                ? "bg-indigo-600 text-white shadow-xs"
                : "bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-white/[0.09]"
            }`}
            title="Open Academic Vocabulary Bank"
          >
            <BookA className="w-3.5 h-3.5 text-indigo-500" strokeWidth={1.75} />
            <span className="hidden sm:inline">Словарь</span>
          </button>

          <button
            type="button"
            onClick={() => setShowCalculator(!showCalculator)}
            className={`quiz-option-btn flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition ${
              showCalculator
                ? "bg-[#007EA7] text-white shadow-xs"
                : "bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-white/[0.09]"
            }`}
          >
            <Calculator className="w-3.5 h-3.5 text-[#007EA7] dark:text-[#00A8E8]" strokeWidth={1.75} />
            <span className="hidden sm:inline">Калькулятор</span>
          </button>

          <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-white/[0.05] px-3 py-1.5 rounded-full text-xs font-mono font-semibold text-slate-800 dark:text-slate-200">
            <Clock className="w-3.5 h-3.5 text-[#007EA7] dark:text-[#00A8E8]" strokeWidth={1.75} />
            <span>
              {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
            </span>
          </div>

          <ThemeToggle />
        </div>
      </header>

      {/* Simulator Layout */}
      <div className="flex-1 max-w-4xl w-full mx-auto p-4 sm:p-7 flex flex-col justify-between space-y-5">
        {/* Desmos Calculator Panel if toggled */}
        {showCalculator && (
          <div className="bg-white dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/[0.07] rounded-3xl p-4 shadow-xl">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 dark:border-white/[0.05] text-xs font-semibold text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <Calculator className="w-4 h-4 text-[#007EA7]" strokeWidth={1.75} /> Калькулятор Desmos
              </span>
              <button
                onClick={() => setShowCalculator(false)}
                className="quiz-option-btn text-slate-400 hover:text-slate-900 dark:hover:text-white text-xs font-bold px-2 py-0.5 rounded-full"
              >
                ✕ Закрыть
              </button>
            </div>
            <iframe
              src="https://www.desmos.com/calculator"
              className="w-full h-80 rounded-2xl border border-slate-100 dark:border-white/[0.05] bg-white"
              title="Desmos Graphing Calculator"
            />
          </div>
        )}

        {/* Active Task Banner (Non-interactive: question type cannot be changed from within questions) */}
        {/* Current Question Display Card */}
        {currentQuestion ? (
          <div className="bg-white dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/[0.07] p-6 sm:p-8 rounded-3xl shadow-xs transition-all space-y-6">
            <div className="flex items-center justify-between gap-3 text-xs pb-4 border-b border-slate-100 dark:border-white/[0.05]">
              {/* Question Number & Difficulty Level */}
              <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap">
                {/* Question Number Badge */}
                <span className="font-semibold text-xs text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-white/[0.06] px-2.5 py-0.5 rounded-full border border-slate-200/70 dark:border-white/[0.08] flex items-center gap-1">
                  <span>Вопрос</span>
                  <span className="font-bold text-[#007EA7] dark:text-[#00A8E8]">
                    {activeQuestionIndex + 1}
                  </span>
                  <span className="text-slate-400 dark:text-slate-500 font-normal">
                    из {filteredQuestions.length}
                  </span>
                </span>

                {/* Difficulty level badge */}
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium uppercase tracking-wider border flex items-center gap-1.5 ${
                    currentQuestion.difficulty === "easy"
                      ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border-emerald-200/60 dark:border-emerald-800/40"
                      : currentQuestion.difficulty === "medium"
                      ? "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300 border-amber-200/60 dark:border-amber-800/40"
                      : "bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300 border-rose-200/60 dark:border-rose-800/40"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      currentQuestion.difficulty === "easy"
                        ? "bg-emerald-500"
                        : currentQuestion.difficulty === "medium"
                        ? "bg-amber-500"
                        : "bg-rose-500"
                    }`}
                  />
                  {currentQuestion.difficulty === "easy" ? "Easy" : currentQuestion.difficulty === "medium" ? "Medium" : "Hard"}
                </span>

                {/* Question Bank ID */}
                {currentQuestion.originalId && (
                  <span
                    className="text-[11px] font-mono text-slate-400 dark:text-slate-500 px-2 py-0.5 rounded bg-slate-100/60 dark:bg-white/[0.03] border border-slate-200/40 dark:border-white/[0.05]"
                    title="Официальный ID вопроса College Board"
                  >
                    ID: {currentQuestion.originalId}
                  </span>
                )}
              </div>

              {/* Mark for Review Button */}
              <button
                type="button"
                onClick={toggleMarkReview}
                className={`quiz-option-btn flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition ${
                  isCurrentMarked
                    ? "bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-300/70 dark:border-amber-700/60 font-semibold"
                    : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 bg-slate-100 dark:bg-white/[0.05] border border-slate-200/60 dark:border-white/[0.08]"
                }`}
                title="Отметить вопрос для повторного просмотра"
              >
                <Bookmark
                  className={`w-3.5 h-3.5 ${isCurrentMarked ? "fill-amber-500 text-amber-500" : ""}`}
                  strokeWidth={1.75}
                />
                <span>{isCurrentMarked ? "Отмечен для повтора" : "Отметить (Review)"}</span>
              </button>
            </div>

            {/* Visual Graph / Table if question has an image */}
            {currentQuestion.image && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-slate-400 px-1">
                  <span className="flex items-center gap-1.5 text-[#007EA7] dark:text-[#00A8E8]">
                    <BarChart3 className="w-4 h-4" strokeWidth={2} />
                    <span>График / Таблица данных</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => setZoomedImage(currentQuestion.image || null)}
                    className="text-[11px] text-slate-500 hover:text-[#007EA7] dark:hover:text-[#00A8E8] flex items-center gap-1 transition px-2 py-1 rounded-md hover:bg-slate-100 dark:hover:bg-white/[0.05]"
                    title="Нажмите, чтобы открыть во весь экран"
                  >
                    <Maximize2 className="w-3 h-3" />
                    <span>Увеличить</span>
                  </button>
                </div>
                <div
                  onClick={() => setZoomedImage(currentQuestion.image || null)}
                  className="group relative cursor-zoom-in p-4 sm:p-6 rounded-2xl bg-white border border-slate-200/90 dark:border-white/[0.12] shadow-2xs hover:border-[#007EA7]/50 dark:hover:border-[#00A8E8]/50 transition flex items-center justify-center overflow-hidden"
                >
                  {/* Clean white background container ensuring high contrast for black-and-white exam diagrams in all themes */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={currentQuestion.image}
                    alt="График или таблица к вопросу"
                    className="max-h-[360px] sm:max-h-[420px] w-auto max-w-full object-contain select-none transition-transform duration-200 group-hover:scale-[1.01]"
                    loading="eager"
                  />
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition bg-slate-900/80 text-white rounded-full p-2 pointer-events-none shadow-md">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            )}

            {/* Reading Passage if applicable */}
            {currentQuestion.passage && (
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50/70 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/[0.05] text-slate-800 dark:text-slate-200 text-[14.5px] sm:text-[15px] leading-relaxed font-serif">
                {renderFormattedPassage(currentQuestion.passage)}
              </div>
            )}

            {/* Question Stem */}
            <h3 className="text-sm sm:text-[15px] font-semibold text-slate-900 dark:text-white leading-relaxed">
              {currentQuestion.stem}
            </h3>

            {/* MCQ Options */}
            {currentQuestion.type === "mcq" && currentQuestion.options && (
              <div className="space-y-2.5 max-w-2xl">
                {currentQuestion.options.map((opt) => {
                  const isSelected = currentAnswer === opt.id;
                  const isOptCorrect = opt.id === currentQuestion.correctAnswer;

                  let btnStyles =
                    "bg-slate-50/60 dark:bg-white/[0.02] border-slate-200/70 dark:border-white/[0.06] text-slate-800 dark:text-slate-300 hover:bg-slate-100/80 dark:hover:bg-white/[0.04] hover:border-slate-300/80 dark:hover:border-white/[0.1]";

                  if (isCurrentSubmitted) {
                    if (isSelected) {
                      if (isOptCorrect) {
                        btnStyles =
                          "bg-emerald-50/80 dark:bg-emerald-950/30 border-emerald-500/60 ring-1 ring-emerald-500/30 text-emerald-900 dark:text-emerald-200 font-medium";
                      } else {
                        btnStyles =
                          "bg-red-50/80 dark:bg-red-950/30 border-red-500/60 ring-1 ring-red-500/30 text-red-900 dark:text-red-200 font-medium";
                      }
                    } else if (isOptCorrect) {
                      btnStyles =
                        "bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-500/40 text-emerald-800 dark:text-emerald-300";
                    } else {
                      btnStyles = "opacity-40 border-slate-200/60 dark:border-white/[0.04] text-slate-400";
                    }
                  } else if (isSelected) {
                    btnStyles =
                      "bg-sky-50/70 dark:bg-sky-950/40 border-[#007EA7] dark:border-[#00A8E8] ring-1 ring-[#007EA7]/40 text-slate-900 dark:text-white font-medium";
                  }

                  return (
                    <button
                      key={opt.id}
                      type="button"
                      disabled={isCurrentSubmitted}
                      onClick={() => handleSelectAnswer(opt.id)}
                      className={`quiz-option-btn w-full text-left p-3.5 sm:p-4 rounded-2xl border flex items-center justify-between gap-3 text-sm transition-all ${btnStyles}`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-colors shrink-0 ${
                            isCurrentSubmitted && isSelected && !isOptCorrect
                              ? "bg-red-500 text-white"
                              : isCurrentSubmitted && isOptCorrect
                              ? "bg-emerald-600 text-white"
                              : isSelected
                              ? "bg-[#007EA7] text-white"
                              : "border border-slate-200 dark:border-white/[0.1] text-slate-500 dark:text-slate-400 bg-white dark:bg-white/[0.04]"
                          }`}
                        >
                          {opt.id}
                        </span>
                        <span className="leading-relaxed">{opt.text}</span>
                      </div>

                      {isCurrentSubmitted && isSelected && !isOptCorrect && (
                        <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                      )}
                      {isCurrentSubmitted && isOptCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Grid-In Numeric Input */}
            {currentQuestion.type === "grid-in" && (
              <div className="max-w-xs space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                  Student-Produced Numeric Response:
                </label>
                <div className="relative">
                  <input
                    type="text"
                    disabled={isCurrentSubmitted}
                    value={currentAnswer}
                    onChange={(e) => handleSelectAnswer(e.target.value)}
                    placeholder="Enter value (e.g. 25)..."
                    className={`w-full rounded-2xl px-4 py-3 text-base font-mono font-semibold transition focus:outline-none ${
                      isCurrentSubmitted
                        ? isCorrect
                          ? "bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-500 ring-1 ring-emerald-500/30 text-emerald-900 dark:text-emerald-200"
                          : "bg-red-50 dark:bg-red-950/40 border-2 border-red-500 ring-1 ring-red-500/30 text-red-900 dark:text-red-200"
                        : "bg-slate-50/70 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.1] text-slate-900 dark:text-white placeholder-slate-400 focus:ring-1 focus:ring-[#007EA7] dark:focus:ring-[#00A8E8]"
                    }`}
                  />
                  {isCurrentSubmitted && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      {isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-500" />
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Bottom Controls: BACK, QUESTION NAVIGATOR, CHECK, NEXT */}
            <div className="mt-8 pt-5 border-t border-slate-100 dark:border-white/[0.05] flex items-center justify-between gap-3 flex-wrap">
              {/* Back Button */}
              <button
                type="button"
                onClick={handleBack}
                disabled={activeQuestionIndex === 0}
                className="quiz-option-btn px-4 py-2 rounded-full border border-slate-200/70 dark:border-white/[0.08] hover:bg-slate-100/70 dark:hover:bg-white/[0.05] text-slate-700 dark:text-slate-300 disabled:opacity-30 disabled:pointer-events-none text-xs font-medium flex items-center gap-1.5 transition"
              >
                <ChevronLeft className="w-4 h-4" strokeWidth={1.75} />
                <span>Назад</span>
              </button>

              {/* Bluebook-style Question Navigation Button */}
              <button
                type="button"
                onClick={() => setIsQuestionModalOpen(true)}
                className="quiz-option-btn px-4 py-2 rounded-full border border-slate-200/80 dark:border-white/[0.1] bg-slate-50 dark:bg-white/[0.04] hover:bg-sky-50 dark:hover:bg-sky-950/30 hover:border-[#007EA7]/40 text-slate-800 dark:text-slate-100 text-xs font-semibold flex items-center gap-2 transition shadow-2xs group"
                title="Открыть окно всех вопросов (как в Bluebook)"
              >
                <LayoutGrid className="w-4 h-4 text-[#007EA7] dark:text-[#00A8E8]" strokeWidth={1.75} />
                <span>Вопрос {activeQuestionIndex + 1} из {filteredQuestions.length}</span>
                <ChevronUp className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#007EA7] dark:group-hover:text-[#00A8E8] transition-transform group-hover:-translate-y-0.5" />
              </button>

              {/* Check / Try Again & Next Buttons */}
              <div className="flex items-center gap-2">
                {!isCurrentSubmitted ? (
                  <button
                    type="button"
                    disabled={!currentAnswer.trim()}
                    onClick={handleCheck}
                    className="quiz-option-btn px-6 py-2 rounded-full bg-[#007EA7] hover:bg-[#0093C8] text-white text-xs font-semibold shadow-xs disabled:opacity-40 disabled:pointer-events-none flex items-center gap-1.5 transition"
                  >
                    <CheckCircle2 className="w-4 h-4" strokeWidth={1.75} />
                    <span>Проверить ответ</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="quiz-option-btn px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200/80 dark:bg-white/[0.06] dark:hover:bg-white/[0.1] text-slate-700 dark:text-slate-300 text-xs font-medium flex items-center gap-1.5 transition"
                  >
                    <RotateCcw className="w-3.5 h-3.5" strokeWidth={1.75} />
                    <span>Попробовать снова</span>
                  </button>
                )}

                {/* Next Button */}
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={activeQuestionIndex === filteredQuestions.length - 1}
                  className="quiz-option-btn px-5 py-2 rounded-full bg-[#007EA7] hover:bg-[#0093C8] text-white disabled:opacity-30 disabled:pointer-events-none text-xs font-semibold flex items-center gap-1.5 transition shadow-xs"
                >
                  <span>Далее</span>
                  <ChevronRight className="w-4 h-4" strokeWidth={1.75} />
                </button>
              </div>
            </div>

            {/* Instant AI Recommendation Banner when checked */}
            {isCurrentSubmitted && (
              <AiRecommendationCard
                isCorrect={isCorrect}
                correctAnswer={
                  currentQuestion.type === "mcq"
                    ? `Choice ${currentQuestion.correctAnswer}`
                    : currentQuestion.correctAnswer
                }
                explanation={currentQuestion.explanation}
                onOpenAi={() => setIsAiDrawerOpen(true)}
              />
            )}
          </div>
        ) : (
          <div className="bg-white dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/[0.07] p-8 rounded-3xl text-center space-y-3">
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Вопросы не найдены по выбранным фильтрам.
            </p>
            <div className="flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setSelectedDifficulty("all")}
                className="quiz-option-btn px-4 py-2 rounded-full bg-[#007EA7] hover:bg-[#0093C8] text-white text-xs font-semibold"
              >
                Сбросить фильтр сложности
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedDomain("all");
                  setSelectedSubtopic("all");
                  setSelectedDifficulty("all");
                }}
                className="quiz-option-btn px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200/70 dark:bg-white/[0.06] dark:hover:bg-white/[0.1] text-slate-700 dark:text-slate-300 text-xs font-medium"
              >
                Сбросить все фильтры
              </button>
            </div>
          </div>
        )}

        {/* Global Side Drawer Reviewer (Instant pedagogical breakdown) */}
        {currentQuestion && (
          <AiSolutionReviewer
            taskPrompt={
              currentQuestion.passage
                ? `${currentQuestion.passage}\n${currentQuestion.stem}`
                : currentQuestion.stem
            }
            userSolution={
              currentQuestion.type === "mcq" && currentAnswer
                ? `Choice ${currentAnswer}`
                : currentAnswer
            }
            correctAnswer={
              currentQuestion.type === "mcq"
                ? `Choice ${currentQuestion.correctAnswer}`
                : currentQuestion.correctAnswer
            }
            officialExplanation={currentQuestion.explanation}
            subject={activeTab === "rw" ? "sat-rw" : "sat-math"}
            isOpen={isAiDrawerOpen}
            onClose={() => setIsAiDrawerOpen(false)}
          />
        )}

        {/* Academic Vocabulary Bank Drawer */}
        <VocabularyDrawer
          isOpen={isVocabOpen}
          onClose={() => setIsVocabOpen(false)}
          filterDefault="sat"
        />

        {/* Bluebook Question Navigator Modal */}
        {isQuestionModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150"
            onClick={() => setIsQuestionModalOpen(false)}
          >
            <div
              className="w-full max-w-3xl bg-white dark:bg-[#0c1322] border border-slate-200/80 dark:border-white/[0.1] rounded-3xl shadow-2xl flex flex-col max-h-[88vh] overflow-hidden animate-in zoom-in-95 duration-150"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-5 sm:p-6 border-b border-slate-100 dark:border-white/[0.06] flex items-center justify-between gap-4 bg-slate-50/40 dark:bg-white/[0.02]">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-sky-50 dark:bg-sky-950/50 text-[#007EA7] dark:text-[#00A8E8] flex items-center gap-1.5 border border-sky-200/50 dark:border-sky-800/40">
                      <LayoutGrid className="w-3.5 h-3.5" /> Bluebook™ Question Review
                    </span>
                    <span className="text-slate-300 dark:text-slate-700">•</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {currentSubtopicName}
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                    Вопросы раздела ({modalStats.total})
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setIsQuestionModalOpen(false)}
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/[0.08] text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition"
                  title="Закрыть (Esc)"
                >
                  <X className="w-5 h-5" strokeWidth={1.75} />
                </button>
              </div>

              {/* Filter Pills & Status Legend */}
              <div className="px-5 sm:px-6 py-3 border-b border-slate-100 dark:border-white/[0.06] bg-slate-50/70 dark:bg-white/[0.01] flex flex-wrap items-center justify-between gap-3 text-xs">
                {/* Filter Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto py-1 max-w-full">
                  <button
                    type="button"
                    onClick={() => setModalFilter("all")}
                    className={`px-3 py-1 rounded-full text-xs font-semibold transition ${
                      modalFilter === "all"
                        ? "bg-[#007EA7] text-white shadow-xs"
                        : "bg-white dark:bg-white/[0.05] text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/[0.09] border border-slate-200/70 dark:border-white/[0.06]"
                    }`}
                  >
                    Все ({modalStats.total})
                  </button>
                  <button
                    type="button"
                    onClick={() => setModalFilter("unanswered")}
                    className={`px-3 py-1 rounded-full text-xs font-semibold transition ${
                      modalFilter === "unanswered"
                        ? "bg-slate-800 text-white dark:bg-white dark:text-slate-900 shadow-xs"
                        : "bg-white dark:bg-white/[0.05] text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/[0.09] border border-slate-200/70 dark:border-white/[0.06]"
                    }`}
                  >
                    Неотвеченные ({modalStats.unanswered})
                  </button>
                  <button
                    type="button"
                    onClick={() => setModalFilter("marked")}
                    className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 transition ${
                      modalFilter === "marked"
                        ? "bg-amber-500 text-white shadow-xs"
                        : "bg-white dark:bg-white/[0.05] text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/30 border border-amber-200/70 dark:border-amber-900/40"
                    }`}
                  >
                    <Bookmark className="w-3 h-3 fill-amber-500" />
                    <span>Отмеченные ({modalStats.marked})</span>
                  </button>
                  {modalStats.easy > 0 && (
                    <button
                      type="button"
                      onClick={() => setModalFilter("easy")}
                      className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 transition ${
                        modalFilter === "easy"
                          ? "bg-emerald-600 text-white shadow-xs"
                          : "bg-white dark:bg-white/[0.05] text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 border border-emerald-200/70 dark:border-emerald-900/40"
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>Easy ({modalStats.easy})</span>
                    </button>
                  )}
                  {modalStats.medium > 0 && (
                    <button
                      type="button"
                      onClick={() => setModalFilter("medium")}
                      className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 transition ${
                        modalFilter === "medium"
                          ? "bg-amber-600 text-white shadow-xs"
                          : "bg-white dark:bg-white/[0.05] text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/30 border border-amber-200/70 dark:border-amber-900/40"
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <span>Medium ({modalStats.medium})</span>
                    </button>
                  )}
                  {modalStats.hard > 0 && (
                    <button
                      type="button"
                      onClick={() => setModalFilter("hard")}
                      className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 transition ${
                        modalFilter === "hard"
                          ? "bg-rose-600 text-white shadow-xs"
                          : "bg-white dark:bg-white/[0.05] text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 border border-rose-200/70 dark:border-rose-900/40"
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      <span>Hard ({modalStats.hard})</span>
                    </button>
                  )}
                </div>

                {/* Legend */}
                <div className="hidden sm:flex items-center gap-3 text-[11px] text-slate-400 shrink-0">
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#007EA7]" /> Текущий
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-400" /> С ответом
                  </span>
                  <span className="flex items-center gap-1">
                    <Bookmark className="w-2.5 h-2.5 text-amber-500 fill-amber-500" /> Отмечен
                  </span>
                </div>
              </div>

              {/* Scrollable Question Grid */}
              <div className="p-5 sm:p-6 overflow-y-auto flex-1">
                {displayedModalQuestions.length > 0 ? (
                  <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2 sm:gap-2.5">
                    {displayedModalQuestions.map(({ q, originalIndex }) => {
                      const isSelectedQ = originalIndex === activeQuestionIndex;
                      const hasAnswer = !!answers[q.id];
                      const isSub = !!submittedStatus[q.id];
                      const isMarked = !!markedForReview[q.id];

                      return (
                        <button
                          key={q.id}
                          type="button"
                          onClick={() => {
                            setActiveQuestionIndex(originalIndex);
                            setIsQuestionModalOpen(false);
                          }}
                          className={`h-11 sm:h-12 rounded-2xl text-xs font-semibold relative flex flex-col items-center justify-center transition-all ${
                            isSelectedQ
                              ? "bg-[#007EA7] text-white shadow-md ring-2 ring-[#007EA7] ring-offset-2 ring-offset-white dark:ring-offset-[#0c1322] scale-[1.03]"
                              : isSub
                              ? "bg-slate-200/80 dark:bg-white/[0.12] text-slate-900 dark:text-white border border-slate-300/80 dark:border-white/[0.15]"
                              : hasAnswer
                              ? "bg-sky-50 dark:bg-sky-950/50 text-[#007EA7] dark:text-[#00A8E8] border border-sky-300/70 dark:border-sky-800/60"
                              : "bg-slate-50 dark:bg-white/[0.03] text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-white/[0.07] hover:border-[#007EA7]/60 dark:hover:border-[#00A8E8]/60 hover:bg-slate-100/80 dark:hover:bg-white/[0.06]"
                          }`}
                        >
                          <span>{originalIndex + 1}</span>
                          {isMarked && (
                            <Bookmark
                              className="w-3 h-3 text-amber-500 fill-amber-500 absolute top-1 right-1"
                              strokeWidth={2}
                            />
                          )}
                          {/* Difficulty Pip */}
                          <span
                            className={`w-1.5 h-1.5 rounded-full absolute bottom-1.5 ${
                              isSelectedQ
                                ? "bg-white/80"
                                : q.difficulty === "easy"
                                ? "bg-emerald-500/80"
                                : q.difficulty === "medium"
                                ? "bg-amber-500/80"
                                : "bg-rose-500/80"
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <div className="py-12 text-center text-slate-400 text-sm">
                    Нет вопросов по выбранному фильтру.
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-5 border-t border-slate-100 dark:border-white/[0.06] bg-slate-50/50 dark:bg-white/[0.01] flex items-center justify-between gap-3">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Отвечено: <b className="text-slate-800 dark:text-slate-200">{modalStats.answered}</b> из {modalStats.total}
                  {modalStats.marked > 0 && (
                    <span> • Отмечено: <b className="text-amber-600 dark:text-amber-400">{modalStats.marked}</b></span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setIsQuestionModalOpen(false)}
                  className="px-5 py-2 rounded-full bg-[#007EA7] hover:bg-[#0093C8] text-white text-xs font-semibold transition shadow-xs"
                >
                  Вернуться к вопросу {activeQuestionIndex + 1}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Lightbox / Zoom Modal for Graphs */}
        {zoomedImage && (
          <div
            onClick={() => setZoomedImage(null)}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 cursor-zoom-out animate-in fade-in duration-150"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-200 overflow-auto flex flex-col items-center"
            >
              <button
                type="button"
                onClick={() => setZoomedImage(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition shadow-xs"
                title="Закрыть (Esc)"
              >
                <X className="w-5 h-5" strokeWidth={2} />
              </button>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 select-none">
                Официальный график / Таблица вопроса
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={zoomedImage}
                alt="Увеличенный график"
                className="max-h-[78vh] w-auto max-w-full object-contain select-none"
              />
            </div>
          </div>
        )}

        {/* Footer info */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400 dark:text-slate-500 pt-4 border-t border-slate-200/70 dark:border-white/[0.06]">
          <span>Официальная структура тем College Board Digital SAT</span>
          <span>Практика навыков Reading &amp; Writing и Math</span>
        </div>
      </div>
    </div>
  );
}

export default function SatPracticePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center text-slate-500">
          <Loader2 className="w-8 h-8 animate-spin text-blue-500 mr-2" />
          Loading Digital SAT Simulator...
        </div>
      }
    >
      <SatPracticeContent />
    </Suspense>
  );
}
