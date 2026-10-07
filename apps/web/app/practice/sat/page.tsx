"use client";

import { useState, useEffect, useMemo, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  ArrowLeft,
  Clock,
  Timer,
  Pause,
  Play,
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
  Minus,
  PanelRight,
  PanelLeft,
} from "lucide-react";
import { AiSolutionReviewer, AiRecommendationCard } from "@/components/ai-solution-reviewer";
import { VocabularyDrawer } from "@/components/vocabulary-drawer";
import { StudentProducedResponse } from "@/components/student-produced-response";
import { MathRenderer } from "@/components/math-renderer";
import { MathStimulusCard } from "@/components/smart-math-renderer";
import {
  BluebookHeader,
  BluebookBanner,
  BluebookRwTask,
  BluebookMathMcqTask,
  BluebookGridIn,
  BluebookFooter,
  BluebookReferenceSheet,
  BluebookDirectionsModal,
  BluebookMoreModal,
} from "@/components/bluebook";
import {
  RW_DOMAINS,
  MATH_DOMAINS,
  ALL_SAT_QUESTIONS,
  type SatQuestion,
  type DomainMeta,
} from "@/lib/sat-data";

function formatUnderlineText(text: string) {
  if (!text.includes("<u>") && !text.includes("</u>")) {
    return text;
  }
  // 1. Sanitize any duplicate or malformed <u> / </u> tags
  const sanitized = text
    .replace(/(?:<u\b[^>]*>\s*)+/gi, "<u>")
    .replace(/(?:\s*<\/u\b[^>]*>)+/gi, "</u>");

  // 2. Split by clean <u>...</u> boundaries
  const parts = sanitized.split(/(<u>[\s\S]*?<\/u>)/g);

  return parts.map((part, idx) => {
    if (part.startsWith("<u>") && part.endsWith("</u>")) {
      const inner = part
        .slice(3, -4)
        .replace(/<\/?u\b[^>]*>/gi, "")
        .trim();
      return (
        <span
          key={idx}
          className="underline underline-offset-4 decoration-2 decoration-sky-600 dark:decoration-sky-400 font-semibold bg-sky-50/80 dark:bg-sky-950/50 px-1 py-0.5 rounded text-sky-950 dark:text-sky-100"
        >
          {inner}
        </span>
      );
    }
    // Strip any rogue remaining <u> or </u> or malformed tags in normal text
    const cleanPart = part.replace(/<\/?u\b[^>]*>/gi, "");
    return <span key={idx}>{cleanPart}</span>;
  });
}

function renderFormattedPassage(text: string) {
  if (!text) return null;
  // Clean unintended comma+newlines and hard mid-sentence linebreaks
  const sanitized = text.replace(/,\s*\n+\s*/g, ", ");
  const paragraphs = sanitized
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

        const isBulletList = lines.some((l) => l.startsWith("•") || l.startsWith("-"));
        if (isBulletList) {
          return (
            <div key={pIdx} className="space-y-2">
              {lines.map((line, lIdx) => {
                if (line.startsWith("•") || line.startsWith("-")) {
                  const bulletText = line.replace(/^[•\-]\s*/, "");
                  return (
                    <div key={lIdx} className="flex items-start gap-2.5 pl-1.5 text-slate-800 dark:text-slate-200">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-700 dark:bg-slate-300 mt-2 shrink-0" />
                      <span className="flex-1 leading-relaxed">{formatUnderlineText(bulletText)}</span>
                    </div>
                  );
                }
                return (
                  <p key={lIdx} className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium pb-1">
                    {formatUnderlineText(line)}
                  </p>
                );
              })}
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
    : searchParams.get("tab") === "math" || searchParams.get("section") === "math"
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
  const [isCalcMinimized, setIsCalcMinimized] = useState(false);
  const [calcDock, setCalcDock] = useState<"right" | "left" | "custom">("right");
  const [calcPos, setCalcPos] = useState<{ x: number; y: number }>({ x: 0, y: 76 });
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef<{ startX: number; startY: number; initX: number; initY: number }>({
    startX: 0,
    startY: 0,
    initX: 0,
    initY: 0,
  });
  const calcCardRef = useRef<HTMLDivElement>(null);

  const handleDragStart = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("button")) return;
    e.preventDefault();
    isDraggingRef.current = true;

    const rect = calcCardRef.current?.getBoundingClientRect();
    const currentLeft = rect ? rect.left : window.innerWidth - 560;
    const currentTop = rect ? rect.top : 76;

    dragStartRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initX: currentLeft,
      initY: currentTop,
    };
    setCalcDock("custom");

    const onMouseMove = (moveEvent: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const dx = moveEvent.clientX - dragStartRef.current.startX;
      const dy = moveEvent.clientY - dragStartRef.current.startY;
      const newX = Math.max(10, Math.min(window.innerWidth - 320, dragStartRef.current.initX + dx));
      const newY = Math.max(10, Math.min(window.innerHeight - 120, dragStartRef.current.initY + dy));
      setCalcPos({ x: newX, y: newY });
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if ((e.target as HTMLElement).closest("button")) return;
    if (e.touches.length !== 1) return;
    const touch = e.touches[0];
    isDraggingRef.current = true;

    const rect = calcCardRef.current?.getBoundingClientRect();
    const currentLeft = rect ? rect.left : window.innerWidth - 560;
    const currentTop = rect ? rect.top : 76;

    dragStartRef.current = {
      startX: touch.clientX,
      startY: touch.clientY,
      initX: currentLeft,
      initY: currentTop,
    };
    setCalcDock("custom");

    const onTouchMove = (moveEvent: TouchEvent) => {
      if (!isDraggingRef.current || moveEvent.touches.length !== 1) return;
      const t = moveEvent.touches[0];
      const dx = t.clientX - dragStartRef.current.startX;
      const dy = t.clientY - dragStartRef.current.startY;
      const newX = Math.max(10, Math.min(window.innerWidth - 320, dragStartRef.current.initX + dx));
      const newY = Math.max(10, Math.min(window.innerHeight - 120, dragStartRef.current.initY + dy));
      setCalcPos({ x: newX, y: newY });
    };

    const onTouchEnd = () => {
      isDraggingRef.current = false;
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };

    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);
  };
  const [isVocabOpen, setIsVocabOpen] = useState(false);
  const [isAiDrawerOpen, setIsAiDrawerOpen] = useState(false);
  const [aiInitialQuestion, setAiInitialQuestion] = useState<string | undefined>(undefined);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const handleOpenAiWhy = (questionPrompt?: string) => {
    setAiInitialQuestion(questionPrompt || "Почему правильный ответ именно такой?");
    setIsAiDrawerOpen(true);
  };

  // Active question index within filtered questions
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(() => {
    const qParam = targetQuestion?.id || qIdParam;
    if (qParam) {
      const pool = ALL_SAT_QUESTIONS.filter((q) => {
        if (q.section !== initialTab) return false;
        if (initialDomain !== "all" && q.domainId !== initialDomain) return false;
        if (initialSubtopic !== "all" && q.subtopicId !== initialSubtopic) return false;
        if (initialDifficulty !== "all" && q.difficulty !== initialDifficulty) return false;
        return true;
      });
      const idx = pool.findIndex((q) => q.id === qParam);
      if (idx !== -1) return idx;
    }
    return 0;
  });

  // Bluebook-style Question Review Modal state
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);
  const [modalFilter, setModalFilter] = useState<"all" | "unanswered" | "marked" | "easy" | "medium" | "hard">("all");

  // User answers and submission status keyed by question ID
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submittedStatus, setSubmittedStatus] = useState<Record<string, boolean>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<string, boolean>>({});
  const [eliminatedOptionsMap, setEliminatedOptionsMap] = useState<Record<string, string[]>>({});

  // Bluebook Modals
  const [isDirectionsOpen, setIsDirectionsOpen] = useState(false);
  const [isReferenceOpen, setIsReferenceOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  // Check if we are in Full Module / Mock Test mode or Topic Practice mode
  const moduleParam = searchParams.get("module") || searchParams.get("mockExam");
  const isModuleMode = Boolean(moduleParam);

  // Timer & Stopwatch state
  const [isPaused, setIsPaused] = useState(false);
  const [timeLeft, setTimeLeft] = useState(initialTab === "math" ? 2100 : 1920);
  const [stopwatchTime, setStopwatchTime] = useState(0);

  // Sync module timer duration on tab/module change
  useEffect(() => {
    if (isModuleMode) {
      setTimeLeft(activeTab === "math" ? 2100 : 1920);
      setIsPaused(false);
    }
  }, [activeTab, isModuleMode, moduleParam]);

  // Reset stopwatch when subtopic or domain or tab changes in practice mode
  useEffect(() => {
    if (!isModuleMode) {
      setStopwatchTime(0);
      setIsPaused(false);
    }
  }, [selectedSubtopic, selectedDomain, activeTab, isModuleMode]);

  // Timer / Stopwatch ticker
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      if (isModuleMode) {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      } else {
        setStopwatchTime((prev) => prev + 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isPaused, isModuleMode]);

  const formatTime = (totalSeconds: number) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    if (hrs > 0) {
      return `${hrs}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    }
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

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

    const tabParam = searchParams.get("tab") || searchParams.get("section");
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
    if (isModuleMode) {
      if (moduleParam === "rw-mod-1") return "Reading & Writing • Модуль 1";
      if (moduleParam === "rw-mod-2-hard") return "Reading & Writing • Модуль 2 (Сложный)";
      if (moduleParam === "math-mod-1") return "Math • Модуль 1";
      if (moduleParam === "math-mod-2-hard") return "Math • Модуль 2 (Сложный)";
      return "Полный модуль";
    }
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
    return activeDomainMeta ? activeDomainMeta.name : "Все типы заданий";
  }, [selectedSubtopic, activeDomainMeta, activeTab, selectedDomain, isModuleMode, moduleParam]);

  // Filtered questions based on active section, domain, subtopic, and difficulty
  const filteredQuestions = useMemo(() => {
    if (isModuleMode) {
      const isHard = moduleParam?.toLowerCase().includes("hard");
      let pool = ALL_SAT_QUESTIONS.filter((q) => q.section === activeTab);
      if (isHard) {
        pool = pool.filter((q) => q.difficulty === "hard" || q.difficulty === "medium");
      }
      const count = activeTab === "math" ? 22 : 27;
      return pool.slice(0, count);
    }

    return ALL_SAT_QUESTIONS.filter((q) => {
      if (q.section !== activeTab) return false;
      if (selectedDomain !== "all" && q.domainId !== selectedDomain) return false;
      if (selectedSubtopic !== "all") {
        if (selectedSubtopic === "command-of-evidence") {
          if (!["command-of-evidence", "evidence", "evidence-textual", "evidence-quantitative"].includes(q.subtopicId)) {
            return false;
          }
        } else if (q.subtopicId !== selectedSubtopic) {
          return false;
        }
      }
      if (selectedDifficulty !== "all" && q.difficulty !== selectedDifficulty) return false;
      return true;
    });
  }, [activeTab, selectedDomain, selectedSubtopic, selectedDifficulty, isModuleMode, moduleParam]);

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
    if (!currentQuestion || !currentAnswer) return;
    setSubmittedStatus((prev) => ({ ...prev, [currentQuestion.id]: true }));
  };

  const handleReset = () => {
    if (!currentQuestion) return;
    setSubmittedStatus((prev) => ({ ...prev, [currentQuestion.id]: false }));
  };

  const toggleMarkReview = () => {
    if (!currentQuestion) return;
    setMarkedForReview((prev) => ({
      ...prev,
      [currentQuestion.id]: !prev[currentQuestion.id],
    }));
  };

  const toggleEliminateOption = (optionId: string) => {
    if (!currentQuestion) return;
    setEliminatedOptionsMap((prev) => {
      const existing = prev[currentQuestion.id] || [];
      const set = new Set(existing);
      if (set.has(optionId)) {
        set.delete(optionId);
      } else {
        set.add(optionId);
      }
      return { ...prev, [currentQuestion.id]: Array.from(set) };
    });
  };

  const currentEliminatedSet = useMemo(() => {
    if (!currentQuestion) return new Set<string>();
    return new Set(eliminatedOptionsMap[currentQuestion.id] || []);
  }, [currentQuestion, eliminatedOptionsMap]);

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

  // Close modal on Escape key press or unpause
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isQuestionModalOpen) setIsQuestionModalOpen(false);
        if (isPaused) setIsPaused(false);
        if (zoomedImage) setZoomedImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isQuestionModalOpen, isPaused, zoomedImage]);

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

  const isCorrect = useMemo(() => {
    if (!currentQuestion || !currentAnswer.trim()) return false;
    if (currentQuestion.type === "mcq") {
      return currentAnswer.toUpperCase().trim() === currentQuestion.correctAnswer.toUpperCase().trim();
    }
    const userVal = currentAnswer.trim().toLowerCase();
    const acceptedVals = currentQuestion.correctAnswer
      .split(",")
      .map((s) => s.trim().toLowerCase());
    if (acceptedVals.includes(userVal)) return true;

    const parseNum = (v: string): number | null => {
      if (v.includes("/")) {
        const parts = v.split("/").map(Number);
        return parts.length === 2 && parts[1] !== 0 ? parts[0] / parts[1] : null;
      }
      const n = Number(v);
      return isNaN(n) ? null : n;
    };
    const userNum = parseNum(userVal);
    if (userNum !== null) {
      for (const acc of acceptedVals) {
        const accNum = parseNum(acc);
        if (accNum !== null && Math.abs(userNum - accNum) < 0.001) {
          return true;
        }
      }
    }
    return false;
  }, [currentQuestion, currentAnswer]);

  const hasStimulus = Boolean(currentQuestion?.passage || currentQuestion?.image);

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#090d16] text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-200">
      {/* Top Test Header in authentic Bluebook exam style */}
      <BluebookHeader
        section={activeTab}
        sectionTitle={
          isModuleMode
            ? currentSubtopicName
            : activeTab === "rw"
            ? "Section 1: Reading and Writing"
            : "Section II, Module 1: Math"
        }
        timeFormatted={isModuleMode ? formatTime(timeLeft) : formatTime(stopwatchTime)}
        isPaused={isPaused}
        onTogglePause={() => setIsPaused((prev) => !prev)}
        onOpenDirections={() => setIsDirectionsOpen(true)}
        onOpenCalculator={() => {
          if (showCalculator && isCalcMinimized) {
            setIsCalcMinimized(false);
          } else {
            setShowCalculator(!showCalculator);
            setIsCalcMinimized(false);
          }
        }}
        onOpenReference={() => setIsReferenceOpen(true)}
        onOpenMore={() => setIsMoreOpen(true)}
        onOpenHighlights={() => setIsVocabOpen(true)}
        isCalculatorActive={showCalculator && !isCalcMinimized}
        backHref={activeTab === "math" ? "/practice/sat-math" : "/practice/sat-rw"}
      />

      {/* Authentic Bluebook Navy Subheader Banner */}
      <BluebookBanner label={isModuleMode ? "THIS IS A PRACTICE TEST" : "THIS IS A PRACTICE TEST"} />

      {/* Authentic Full-Width Digital SAT Bluebook Canvas */}
      <main
        className={`flex-1 w-full flex flex-col justify-between transition-all duration-300 ease-out ${
          showCalculator && !isCalcMinimized
            ? calcDock === "right"
              ? "lg:pr-[460px]"
              : calcDock === "left"
              ? "lg:pl-[460px]"
              : ""
            : ""
        }`}
      >
        {currentQuestion ? (
          <div className="flex-1 flex flex-col bg-white dark:bg-[#0c101c]">
            {/* Reading and Writing Task Window (Photo 1) */}
            {currentQuestion.section === "rw" ? (
              <BluebookRwTask
                questionNumber={activeQuestionIndex + 1}
                passage={currentQuestion.passage}
                questionStem={currentQuestion.stem}
                options={currentQuestion.options || []}
                currentAnswer={currentAnswer}
                onSelectAnswer={handleSelectAnswer}
                isMarked={isCurrentMarked}
                onToggleMark={toggleMarkReview}
                eliminatedOptions={currentEliminatedSet}
                onToggleEliminate={toggleEliminateOption}
                isSubmitted={isCurrentSubmitted}
                correctAnswer={currentQuestion.correctAnswer}
              />
            ) : currentQuestion.type === "grid-in" ? (
              /* Math Student-Produced Response / Grid-In Task Window (Photo 3) */
              <BluebookGridIn
                questionNumber={activeQuestionIndex + 1}
                questionStem={currentQuestion.stem}
                passage={currentQuestion.passage}
                image={currentQuestion.image}
                currentAnswer={currentAnswer}
                onSelectAnswer={handleSelectAnswer}
                isMarked={isCurrentMarked}
                onToggleMark={toggleMarkReview}
                isSubmitted={isCurrentSubmitted}
                isCorrect={isCorrect}
                correctAnswer={currentQuestion.correctAnswer}
                onZoomImage={(img) => setZoomedImage(img)}
              />
            ) : (
              /* Math Multiple Choice Task Window (Photo 2) */
              <BluebookMathMcqTask
                questionNumber={activeQuestionIndex + 1}
                questionStem={currentQuestion.stem}
                passage={currentQuestion.passage}
                image={currentQuestion.image}
                options={currentQuestion.options || []}
                currentAnswer={currentAnswer}
                onSelectAnswer={handleSelectAnswer}
                isMarked={isCurrentMarked}
                onToggleMark={toggleMarkReview}
                eliminatedOptions={currentEliminatedSet}
                onToggleEliminate={toggleEliminateOption}
                isSubmitted={isCurrentSubmitted}
                correctAnswer={currentQuestion.correctAnswer}
                onZoomImage={(img) => setZoomedImage(img)}
              />
            )}

            {/* Instant Pedagogical Recommendation Card when answer is submitted */}
            {isCurrentSubmitted && (
              <div className="border-t border-slate-200 dark:border-white/10 p-4 sm:p-6 bg-slate-50 dark:bg-white/[0.02]">
                <div className="max-w-4xl mx-auto">
                  <AiRecommendationCard
                    isCorrect={isCorrect}
                    correctAnswer={
                      currentQuestion.type === "mcq"
                        ? `Choice ${currentQuestion.correctAnswer}`
                        : currentQuestion.correctAnswer
                    }
                    explanation={currentQuestion.explanation}
                    onOpenAi={() => setIsAiDrawerOpen(true)}
                    onAskWhy={handleOpenAiWhy}
                  />
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="p-12 text-center space-y-4">
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Вопросы не найдены по выбранным фильтрам.
            </p>
            <div className="flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setSelectedDifficulty("all")}
                className="px-4 py-2 rounded-full bg-[#007EA7] hover:bg-[#0093C8] text-white text-xs font-semibold"
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
                className="px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200/70 dark:bg-white/[0.06] dark:hover:bg-white/[0.1] text-slate-700 dark:text-slate-300 text-xs font-medium"
              >
                Сбросить все фильтры
              </button>
            </div>
          </div>
        )}

        {/* Authentic Bluebook Sticky Footer */}
        <BluebookFooter
          currentIndex={activeQuestionIndex}
          totalQuestions={filteredQuestions.length}
          onBack={handleBack}
          onNext={handleNext}
          onOpenNavigator={() => setIsQuestionModalOpen(true)}
          onCheckAnswer={handleCheck}
          onResetAnswer={handleReset}
          isAnswerEntered={Boolean(currentAnswer.trim())}
          isSubmitted={isCurrentSubmitted}
          isLastQuestion={activeQuestionIndex === filteredQuestions.length - 1}
          studentName={
            activeTab === "rw"
              ? "Reading & Writing Module"
              : "Math Module"
          }
        />
      </main>

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
            options={currentQuestion.options}
            initialQuestion={aiInitialQuestion}
            isOpen={isAiDrawerOpen}
            onClose={() => {
              setIsAiDrawerOpen(false);
              setAiInitialQuestion(undefined);
            }}
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

        {/* Pause Modal */}
        {isPaused && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150"
            onClick={() => setIsPaused(false)}
          >
            <div
              className="w-full max-w-sm bg-white dark:bg-[#0c1322] border border-slate-200/80 dark:border-white/[0.1] rounded-3xl p-6 text-center shadow-2xl space-y-4 animate-in zoom-in-95 duration-150"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 flex items-center justify-center mx-auto text-amber-600 dark:text-amber-400">
                <Pause className="w-7 h-7 fill-current" />
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {isModuleMode ? "Тестирование на паузе" : "Решение на паузе"}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {isModuleMode
                    ? "Таймер модуля остановлен. Вы можете сделать перерыв и продолжить в любое время."
                    : "Секундомер остановлен. Вы можете отдохнуть и продолжить в любой момент."}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 py-3 border-y border-slate-100 dark:border-white/[0.06] text-left text-xs">
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-white/[0.02]">
                  <span className="text-slate-400 block text-[11px] mb-1">
                    {isModuleMode ? "Осталось времени" : "Затрачено времени"}
                  </span>
                  <span className="text-base font-bold font-mono text-slate-900 dark:text-white">
                    {isModuleMode ? formatTime(timeLeft) : formatTime(stopwatchTime)}
                  </span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-white/[0.02]">
                  <span className="text-slate-400 block text-[11px] mb-1">Вопрос</span>
                  <span className="text-base font-bold text-slate-900 dark:text-white">
                    {activeQuestionIndex + 1} из {filteredQuestions.length}
                  </span>
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <button
                  type="button"
                  onClick={() => setIsPaused(false)}
                  className="w-full py-2.5 px-4 rounded-full bg-[#007EA7] hover:bg-[#0093C8] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition shadow-xs"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{isModuleMode ? "Возобновить тест" : "Продолжить решение"}</span>
                </button>
                {!isModuleMode && (
                  <button
                    type="button"
                    onClick={() => {
                      setStopwatchTime(0);
                      setIsPaused(false);
                    }}
                    className="w-full py-2 px-4 rounded-full border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-300 text-xs font-medium flex items-center justify-center gap-1.5 transition"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Сбросить секундомер</span>
                  </button>
                )}
                <Link
                  href={activeTab === "math" ? "/practice/sat-math" : "/practice/sat-rw"}
                  className="block text-center text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 pt-1 transition"
                >
                  Выйти в меню
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Time's Up Modal for Module mode */}
        {isModuleMode && timeLeft === 0 && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
            <div className="w-full max-w-sm bg-white dark:bg-[#0c1322] border border-rose-200 dark:border-rose-900/60 rounded-3xl p-6 text-center shadow-2xl space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/60 flex items-center justify-center mx-auto text-rose-600 dark:text-rose-400">
                <Clock className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Время вышло!</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Время, отведенное на данный модуль, завершилось. Вы можете проверить свои ответы в окне обзора.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsQuestionModalOpen(true)}
                className="w-full py-2.5 px-4 rounded-full bg-[#007EA7] hover:bg-[#0093C8] text-white text-xs font-semibold transition shadow-xs"
              >
                Открыть обзор вопросов
              </button>
            </div>
          </div>
        )}

        {/* Footer info */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400 dark:text-slate-500 pt-4 border-t border-slate-200/70 dark:border-white/[0.06]">
          <span>Официальная структура тем College Board Digital SAT</span>
          <span>Практика навыков Reading &amp; Writing и Math</span>
        </div>
      {/* Bluebook Directions Modal */}
      <BluebookDirectionsModal
        isOpen={isDirectionsOpen}
        section={activeTab}
        onClose={() => setIsDirectionsOpen(false)}
      />

      {/* Bluebook SAT Math Reference Sheet Modal */}
      <BluebookReferenceSheet
        isOpen={isReferenceOpen}
        onClose={() => setIsReferenceOpen(false)}
      />

      {/* Bluebook More Menu Modal */}
      <BluebookMoreModal
        isOpen={isMoreOpen}
        onClose={() => setIsMoreOpen(false)}
        onOpenDirections={() => setIsDirectionsOpen(true)}
      />

      {/* Floating / Docked Desmos Calculator (Movable & Persistent State) */}
      <div
        ref={calcCardRef}
        style={
          !showCalculator || isCalcMinimized
            ? { display: "none" }
            : calcDock === "right"
            ? { top: "76px", right: "16px" }
            : calcDock === "left"
            ? { top: "76px", left: "16px" }
            : { top: `${calcPos.y}px`, left: `${calcPos.x}px` }
        }
        className="fixed z-50 flex flex-col bg-white dark:bg-[#0b1220] border border-slate-200/90 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden w-[92vw] sm:w-[420px] lg:w-[440px] xl:w-[450px] h-[480px] sm:h-[500px] max-h-[76vh] resize min-w-[320px] min-h-[350px] select-none transition-[box-shadow]"
      >
        {/* Desmos Draggable Header Bar */}
        <div
          onMouseDown={handleDragStart}
          onTouchStart={handleTouchStart}
          className="flex items-center justify-between px-4 py-2.5 bg-slate-100/90 dark:bg-white/[0.04] border-b border-slate-200/70 dark:border-white/[0.06] cursor-move text-xs select-none"
          title="Зажмите и перетащите в удобное место экрана"
        >
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 font-semibold text-slate-800 dark:text-white">
              <Calculator className="w-4 h-4 text-[#007EA7] dark:text-[#00A8E8]" strokeWidth={2} />
              <span>Desmos Calculator</span>
            </div>
            <span className="hidden sm:inline text-[10px] font-medium px-2 py-0.5 rounded-full bg-sky-50 dark:bg-sky-950/50 text-[#007EA7] dark:text-[#00A8E8] border border-sky-200/60 dark:border-sky-800/40">
              Bluebook™
            </span>
          </div>

          {/* Window Control Buttons */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setCalcDock(calcDock === "left" ? "right" : "left")}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-white/[0.08] transition"
              title={calcDock === "left" ? "Прикрепить справа" : "Прикрепить слева"}
            >
              {calcDock === "left" ? (
                <PanelRight className="w-3.5 h-3.5" strokeWidth={1.75} />
              ) : (
                <PanelLeft className="w-3.5 h-3.5" strokeWidth={1.75} />
              )}
            </button>
            <button
              type="button"
              onClick={() => setIsCalcMinimized(true)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-white/[0.08] transition"
              title="Свернуть калькулятор"
            >
              <Minus className="w-3.5 h-3.5" strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={() => {
                setShowCalculator(false);
                setIsCalcMinimized(false);
              }}
              className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition"
              title="Закрыть калькулятор"
            >
              <X className="w-3.5 h-3.5" strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Desmos Iframe */}
        <div className="flex-1 w-full h-[calc(100%-42px)] bg-white">
          <iframe
            src="https://www.desmos.com/calculator"
            className="w-full h-full border-0 bg-white"
            title="Desmos Graphing Calculator"
          />
        </div>
      </div>

      {/* Minimized Floating Quick Button */}
      {showCalculator && isCalcMinimized && (
        <button
          type="button"
          onClick={() => setIsCalcMinimized(false)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#007EA7] hover:bg-[#0093C8] text-white shadow-2xl cursor-pointer transition-all hover:scale-105 active:scale-95 group"
          title="Развернуть калькулятор Desmos"
        >
          <Calculator className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" strokeWidth={2} />
          <span className="text-xs font-semibold">Desmos (Развернуть)</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </button>
      )}
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
