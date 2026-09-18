"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  ArrowLeft,
  Clock,
  CheckCircle2,
  XCircle,
  Loader2,
  BookOpen,
  Type,
  ChevronLeft,
  ChevronRight,
  BookA,
  RotateCcw,
} from "lucide-react";
import { AiSolutionReviewer, AiRecommendationCard } from "@/components/ai-solution-reviewer";
import { VocabularyDrawer } from "@/components/vocabulary-drawer";

interface IeltsReadingQuestion {
  id: string;
  stem: string;
  options: { id: string; text: string }[];
  correctAnswer: string;
  explanation: string;
}

const PASSAGE_1_QUESTIONS: IeltsReadingQuestion[] = [
  {
    id: "q-1",
    stem: "According to Paragraph A, what is the primary cause of urban heat islands?",
    options: [
      { id: "A", text: "The replacement of natural vegetation with heat-absorbing pavement and structures" },
      { id: "B", text: "Inability to predict meteorological variances in coastal zones" },
      { id: "C", text: "Geographic presence of freshwater lakes in surrounding basins" },
      { id: "D", text: "Exclusive reliance on subterranean geological strata" },
    ],
    correctAnswer: "A",
    explanation:
      "Paragraph A explicitly states that urban heat islands occur when cities replace natural land cover with dense concentrations of pavement and buildings that absorb and retain heat.",
  },
  {
    id: "q-2",
    stem: "According to Paragraph B, how do trees and vegetation stabilize local urban temperatures?",
    options: [
      { id: "A", text: "Through shade provision and cooling via evapotranspiration" },
      { id: "B", text: "By blocking solar radiation entirely with impenetrable canopies" },
      { id: "C", text: "By accelerating atmospheric wind speeds along city corridors" },
      { id: "D", text: "By absorbing carbon monoxide directly into ground bedrock" },
    ],
    correctAnswer: "A",
    explanation:
      "Paragraph B directly states: 'Trees and vegetation, on the other hand, provide shade and cool the environment through evapotranspiration, generating stable microclimates.'",
  },
  {
    id: "q-3",
    stem: "Paragraph C notes that researchers restore environmental equilibrium using:",
    options: [
      { id: "A", text: "Cool reflective materials, urban forestry, and ecological architecture" },
      { id: "B", text: "Heavy mechanical air conditioning in open outdoor plazas" },
      { id: "C", text: "Paving over waterways with subterranean culverts" },
      { id: "D", text: "Artificial rain dispersal using chemical cloud-seeding" },
    ],
    correctAnswer: "A",
    explanation:
      "Paragraph C states: 'Mitigation strategies implemented by international researchers involve cool reflective materials, expansive urban forestry initiatives, and ecological architecture designed to restore equilibrium.'",
  },
];

function ReadingSimulatorContent() {
  const searchParams = useSearchParams();
  const passageParam = searchParams.get("passage");
  const drillParam = searchParams.get("drill");
  const mockParam = searchParams.get("mock");

  const [timeLeft, setTimeLeft] = useState(drillParam ? 420 : 1200);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [submittedQuestions, setSubmittedQuestions] = useState<Record<number, boolean>>({});
  const [isAiDrawerOpen, setIsAiDrawerOpen] = useState(false);
  const [isVocabOpen, setIsVocabOpen] = useState(false);
  const [fontSize, setFontSize] = useState<"normal" | "large">("normal");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const questions = PASSAGE_1_QUESTIONS;
  const currentQuestion = questions[currentQIndex];
  const selectedOption = userAnswers[currentQIndex] || null;
  const isSubmitted = !!submittedQuestions[currentQIndex];

  const handleSelectOption = (optId: string) => {
    if (isSubmitted) return;
    setUserAnswers((prev) => ({ ...prev, [currentQIndex]: optId }));
  };

  const handleCheck = () => {
    setSubmittedQuestions((prev) => ({ ...prev, [currentQIndex]: true }));
  };

  const handleReset = () => {
    setSubmittedQuestions((prev) => ({ ...prev, [currentQIndex]: false }));
  };

  const handleBack = () => {
    if (currentQIndex > 0) {
      setCurrentQIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentQIndex < questions.length - 1) {
      setCurrentQIndex((prev) => prev + 1);
    }
  };

  let headerTitle = "IELTS Academic Reading • Passage 1";
  let passageHeading = "The Urban Heat Island Phenomenon";
  let paragraphA =
    "Urban heat islands (UHIs) occur when cities replace natural land cover with dense concentrations of pavement, buildings, and other surfaces that absorb and retain heat. This effect increases energy costs, air pollution levels, and heat-related illness and mortality in urban metropolitan centers worldwide.";

  if (passageParam === "passage-2") {
    headerTitle = "IELTS Academic Reading • Passage 2";
    passageHeading = "Cognitive Plasticity & Adult Bilingualism";
    paragraphA =
      "For decades, neurolinguists subscribed to the critical period hypothesis, postulating that native-like linguistic competence was inaccessible to post-pubescent learners due to rigid synaptic pruning. However, modern functional neuroimaging reveals that the adult brain retains profound neuroplasticity.";
  } else if (passageParam === "passage-3") {
    headerTitle = "IELTS Academic Reading • Passage 3";
    passageHeading = "Austronesian Wayfinding & Indigenous Navigation";
    paragraphA =
      "Long before European navigators ventured across the open Atlantic with magnetic compasses, Polynesian and Micronesian voyagers traversed thousands of nautical miles across the Pacific Ocean using sophisticated indigenous wayfinding techniques based on celestial star paths and oceanic swells.";
  } else if (drillParam) {
    headerTitle = "IELTS Micro-Drill • Quick Practice";
    passageHeading = "Targeted Reading Drill: Multiple Choice";
  } else if (mockParam) {
    headerTitle = `Cambridge Academic Mock Test • ${mockParam.toUpperCase()}`;
  }

  const isCorrect = selectedOption === currentQuestion.correctAnswer;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-200">
      {/* Top Bar */}
      <header className="border-b border-slate-200/70 dark:border-white/[0.07] bg-white/80 dark:bg-[#090d16]/80 backdrop-blur-md px-4 sm:px-6 h-16 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <Link
            href="/practice/reading"
            className="quiz-option-btn flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition"
          >
            <ArrowLeft className="w-4 h-4" /> Exit to Hub
          </Link>
          <span className="text-slate-300 dark:text-slate-700">|</span>
          <span className="text-xs font-semibold text-rose-600 dark:text-rose-400 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{headerTitle}</span>
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Dedicated Vocabulary Access Button */}
          <button
            type="button"
            onClick={() => setIsVocabOpen(true)}
            className={`quiz-option-btn flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
              isVocabOpen
                ? "bg-indigo-600 text-white border-indigo-500 shadow-sm"
                : "bg-white dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border-slate-200/70 dark:border-white/[0.08] hover:bg-slate-50 dark:hover:bg-white/[0.08]"
            }`}
            title="Open Academic Vocabulary Bank"
          >
            <BookA className="w-3.5 h-3.5 text-indigo-500" />
            <span className="hidden sm:inline">Vocabulary</span>
          </button>

          {/* Font Size Toggle */}
          <button
            type="button"
            onClick={() => setFontSize(fontSize === "normal" ? "large" : "normal")}
            className="quiz-option-btn flex items-center gap-1 px-3 py-1.5 rounded-full border border-slate-200/70 dark:border-white/[0.08] text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/[0.08] transition"
            title="Adjust text size"
          >
            <Type className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{fontSize === "normal" ? "Standard" : "Large"}</span>
          </button>

          <div className="flex items-center gap-2 bg-slate-100 dark:bg-white/[0.05] px-3 py-1.5 rounded-full border border-slate-200/60 dark:border-white/[0.08] text-xs font-mono text-slate-800 dark:text-slate-200">
            <Clock className="w-3.5 h-3.5 text-rose-500" />
            <span className="font-semibold">
              {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
            </span>
          </div>

          <ThemeToggle />
        </div>
      </header>

      {/* Split Pane Area */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200/70 dark:divide-white/[0.07] overflow-hidden">
        {/* Left Pane: Reading Passage */}
        <div className="p-6 sm:p-10 overflow-y-auto max-h-[calc(100vh-4rem)] bg-white dark:bg-transparent">
          <div className="max-w-prose mx-auto">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-rose-500 mb-2">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              Reading Passage
            </div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white mb-6 tracking-tight">
              {passageHeading}
            </h1>

            <div
              className={`space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed font-serif ${
                fontSize === "large" ? "text-base sm:text-lg" : "text-sm sm:text-base"
              }`}
            >
              <p>
                <strong className="font-sans font-semibold text-rose-500 mr-1.5">
                  [Paragraph A]
                </strong>
                {paragraphA}
              </p>
              <p>
                <strong className="font-sans font-semibold text-rose-500 mr-1.5">
                  [Paragraph B]
                </strong>
                On a hot summer day, surfaces can reach temperatures that are substantially higher than
                the surrounding air. Trees and vegetation, on the other hand, provide shade and cool the
                environment through evapotranspiration, generating stable microclimates.
              </p>
              <p>
                <strong className="font-sans font-semibold text-rose-500 mr-1.5">
                  [Paragraph C]
                </strong>
                Mitigation strategies implemented by international researchers involve cool reflective
                materials, expansive urban forestry initiatives, and ecological architecture designed to
                restore environmental equilibrium.
              </p>
            </div>
          </div>
        </div>

        {/* Right Pane: Questions */}
        <div className="p-6 sm:p-10 overflow-y-auto max-h-[calc(100vh-4rem)] bg-slate-50/50 dark:bg-white/[0.01] flex flex-col justify-between">
          <div className="max-w-prose mx-auto w-full">
            {/* Question Selector Pills */}
            <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-200/70 dark:border-white/[0.07]">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Questions:
                </span>
                {questions.map((q, idx) => {
                  const isSelectedQ = idx === currentQIndex;
                  const hasAnswer = !!userAnswers[idx];
                  const isQSub = !!submittedQuestions[idx];

                  return (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => setCurrentQIndex(idx)}
                      className={`quiz-option-btn w-8 h-8 rounded-full text-xs font-semibold flex items-center justify-center border transition-all ${
                        isSelectedQ
                          ? "bg-rose-500 text-white border-rose-500 shadow-sm"
                          : isQSub
                          ? "bg-slate-100 dark:bg-white/[0.06] text-slate-900 dark:text-white border-slate-300/80 dark:border-white/[0.1]"
                          : hasAnswer
                          ? "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20"
                          : "bg-white dark:bg-white/[0.03] text-slate-600 dark:text-slate-400 border-slate-200/70 dark:border-white/[0.07] hover:border-slate-300"
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              <span className="text-xs font-medium text-rose-600 dark:text-rose-400">
                Question {currentQIndex + 1} of {questions.length}
              </span>
            </div>

            <h2 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-5">
              {currentQuestion.stem}
            </h2>

            {/* Options List */}
            <div className="space-y-3">
              {currentQuestion.options.map((opt) => {
                const isSelected = selectedOption === opt.id;
                const isOptCorrect = opt.id === currentQuestion.correctAnswer;

                let optStyles =
                  "bg-white dark:bg-white/[0.03] border-slate-200/70 dark:border-white/[0.07] text-slate-700 dark:text-slate-300 shadow-xs hover:border-slate-300 dark:hover:border-white/[0.15]";

                if (isSubmitted) {
                  if (isSelected) {
                    if (isOptCorrect) {
                      optStyles =
                        "bg-emerald-500/10 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-semibold";
                    } else {
                      optStyles =
                        "bg-rose-500/10 border-rose-500 text-rose-900 dark:text-rose-200 font-semibold";
                    }
                  } else if (isOptCorrect) {
                    optStyles =
                      "bg-emerald-500/10 border-emerald-500/60 text-emerald-800 dark:text-emerald-300";
                  } else {
                    optStyles = "opacity-40 border-slate-200/70 dark:border-white/[0.07] text-slate-400";
                  }
                } else if (isSelected) {
                  optStyles =
                    "bg-rose-500/10 border-rose-500 text-slate-900 dark:text-white font-medium shadow-xs";
                }

                return (
                  <div
                    key={opt.id}
                    onClick={() => handleSelectOption(opt.id)}
                    className={`quiz-option-btn flex items-start justify-between gap-3.5 p-4 rounded-2xl border cursor-pointer transition-all ${optStyles}`}
                  >
                    <div className="flex items-start gap-3.5">
                      <input
                        type="radio"
                        name={`q-${currentQuestion.id}`}
                        checked={isSelected}
                        onChange={() => {}}
                        disabled={isSubmitted}
                        className="mt-1 accent-rose-500"
                      />
                      <span className="text-sm sm:text-base leading-relaxed">
                        <strong className="text-rose-600 dark:text-rose-400">{opt.id}.</strong> {opt.text}
                      </span>
                    </div>

                    {isSubmitted && isSelected && !isOptCorrect && (
                      <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    )}
                    {isSubmitted && isOptCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom Action Bar: BACK, CHECK, NEXT */}
            <div className="mt-8 pt-5 border-t border-slate-200/70 dark:border-white/[0.07] flex items-center justify-between gap-3 flex-wrap">
              {/* Back Button */}
              <button
                type="button"
                onClick={handleBack}
                disabled={currentQIndex === 0}
                className="quiz-option-btn px-4 py-2 rounded-full border border-slate-200/70 dark:border-white/[0.08] hover:bg-slate-100 dark:hover:bg-white/[0.08] text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:pointer-events-none text-xs font-semibold flex items-center gap-1.5 transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              {/* Check / Try Again Button */}
              <div className="flex items-center gap-2">
                {!isSubmitted ? (
                  <button
                    type="button"
                    disabled={!selectedOption}
                    onClick={handleCheck}
                    className="quiz-option-btn px-6 py-2 rounded-full bg-rose-500 hover:bg-rose-600 text-white text-xs font-semibold shadow-sm disabled:opacity-40 disabled:pointer-events-none flex items-center gap-1.5 transition-all"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Check Answer</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="quiz-option-btn px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-all"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Try Again / Reset</span>
                  </button>
                )}
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNext}
                disabled={currentQIndex === questions.length - 1}
                className="quiz-option-btn px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 text-white disabled:opacity-40 disabled:pointer-events-none text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Instant AI Recommendation Banner when checked */}
            {isSubmitted && (
              <AiRecommendationCard
                isCorrect={isCorrect}
                correctAnswer={`Choice ${currentQuestion.correctAnswer}`}
                explanation={currentQuestion.explanation}
                onOpenAi={() => setIsAiDrawerOpen(true)}
              />
            )}
          </div>
        </div>

        {/* Global Side Drawer Reviewer (Docked to side, doesn't cover screen) */}
        <AiSolutionReviewer
          taskPrompt={currentQuestion.stem}
          userSolution={selectedOption ? `Choice ${selectedOption}` : ""}
          correctAnswer={`Choice ${currentQuestion.correctAnswer}`}
          officialExplanation={currentQuestion.explanation}
          subject="ielts-reading"
          isOpen={isAiDrawerOpen}
          onClose={() => setIsAiDrawerOpen(false)}
        />

        {/* Dedicated Vocabulary Drawer (Direct access to academic words) */}
        <VocabularyDrawer
          isOpen={isVocabOpen}
          onClose={() => setIsVocabOpen(false)}
          filterDefault="ielts"
        />
      </div>
    </div>
  );
}

export default function IeltsReadingPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center text-slate-500">
          <Loader2 className="w-8 h-8 animate-spin text-rose-500 mr-2" />
          Loading Reading Simulator...
        </div>
      }
    >
      <ReadingSimulatorContent />
    </Suspense>
  );
}
