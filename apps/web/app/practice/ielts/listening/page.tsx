"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  ArrowLeft,
  Headphones,
  Play,
  Pause,
  Clock,
  Volume2,
  CheckCircle2,
  AlertCircle,
  XCircle,
  Loader2,
} from "lucide-react";
import { AiSolutionReviewer, AiRecommendationCard } from "@/components/ai-solution-reviewer";

function ListeningSimulatorContent() {
  const searchParams = useSearchParams();
  const sectionParam = searchParams.get("section");
  const drillParam = searchParams.get("drill");

  const [isPlaying, setIsPlaying] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const [timeLeft, setTimeLeft] = useState(drillParam ? 300 : 1800); // 5m for drill or 30m for full test
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isAiDrawerOpen, setIsAiDrawerOpen] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          setAutoplayBlocked(true);
        });
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
      setAutoplayBlocked(false);
    }
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  let headerTitle = "IELTS Academic Listening • Section 1";
  let trackTitle = "Section 1: Housing Accommodation Inquiry";
  let formTitle = "University Accommodation Booking Form";
  let labelText = "Maximum weekly budget:";
  let expectedAnswer = "150";

  if (sectionParam === "section-2") {
    headerTitle = "IELTS Academic Listening • Section 2";
    trackTitle = "Section 2: City Botanical Gardens Visitor Guide";
    formTitle = "Botanical Gardens Visitor Regulations";
    labelText = "Maximum group size for guided tours:";
    expectedAnswer = "25";
  } else if (sectionParam === "section-3") {
    headerTitle = "IELTS Academic Listening • Section 3";
    trackTitle = "Section 3: Environmental Science Dissertation Tutorial";
    formTitle = "Dissertation Methodology Notes";
    labelText = "Number of sample locations surveyed:";
    expectedAnswer = "12";
  } else if (drillParam) {
    headerTitle = "IELTS Audio Micro-Drill • Fast Practice";
    trackTitle = "Focused Drill: Names, Numbers & Postcodes";
    formTitle = "Quick Dictation Form";
    labelText = "Student Registration ID:";
    expectedAnswer = "9482";
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-200">
      {/* Top Bar */}
      <header className="border-b border-slate-200/70 dark:border-white/[0.07] bg-white/80 dark:bg-[#090d16]/80 backdrop-blur-md px-4 sm:px-6 h-16 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <Link
            href="/practice/listening"
            className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition"
          >
            <ArrowLeft className="w-4 h-4" /> Exit to Hub
          </Link>
          <span className="text-slate-300 dark:text-slate-700">|</span>
          <span className="text-xs font-semibold text-rose-600 dark:text-rose-400 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20 flex items-center gap-1.5">
            <Headphones className="w-3.5 h-3.5" />
            <span>{headerTitle}</span>
          </span>
        </div>

        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="flex items-center gap-2 bg-slate-100 dark:bg-white/[0.05] px-3 py-1.5 rounded-full border border-slate-200/60 dark:border-white/[0.08] text-xs font-mono text-slate-800 dark:text-slate-200">
            <Clock className="w-3.5 h-3.5 text-rose-500" />
            <span className="font-semibold">
              {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
            </span>
          </div>

          <ThemeToggle />

          <button
            onClick={() => setSubmitted(true)}
            className="px-4 py-1.5 bg-rose-500 hover:bg-rose-600 active:bg-rose-700 text-white rounded-full text-xs font-semibold transition-all shadow-sm"
          >
            {submitted ? "Submitted" : "Submit"}
          </button>
        </div>
      </header>

      {/* Main Player & Items */}
      <main className="flex-1 max-w-3xl w-full mx-auto p-4 sm:p-10 space-y-6">
        {/* Autoplay fallback banner */}
        {autoplayBlocked && (
          <div className="p-4 bg-amber-50 dark:bg-amber-500/10 border border-amber-200/80 dark:border-amber-500/30 rounded-2xl flex items-center justify-between">
            <div className="text-xs font-semibold text-amber-800 dark:text-amber-300">
              Browser blocked audio autoplay. Click to start listening playback:
            </div>
            <button
              onClick={togglePlay}
              className="px-3.5 py-1.5 bg-amber-500 text-slate-950 rounded-full text-xs font-semibold hover:bg-amber-400 transition"
            >
              Play Audio Now
            </button>
          </div>
        )}

        {/* Audio Player Card */}
        <div className="bg-white dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/[0.07] p-6 rounded-3xl flex items-center justify-between shadow-sm backdrop-blur-sm transition-all">
          <div className="flex items-center gap-4">
            <button
              onClick={togglePlay}
              className="w-12 h-12 rounded-2xl bg-rose-500 hover:bg-rose-600 active:bg-rose-700 text-white flex items-center justify-center shadow-md shadow-rose-500/25 transition-transform hover:scale-105 active:scale-95"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
            </button>
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                <Headphones className="w-4 h-4 text-rose-500" />
                {trackTitle}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Listening Cue: 00:00 - 05:30 • Single playback official standard
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-white/[0.03] px-3 py-1.5 rounded-full border border-slate-200/60 dark:border-white/[0.06]">
            <Volume2 className="w-4 h-4 text-rose-500" />
            <span className="font-mono">{isPlaying ? "Streaming" : "Paused"}</span>
          </div>

          <audio
            ref={audioRef}
            src="https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg"
            onEnded={() => setIsPlaying(false)}
          />
        </div>

        {/* Form Fill Item */}
        <div className="bg-white dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/[0.07] p-6 sm:p-8 rounded-3xl shadow-sm backdrop-blur-sm transition-all">
          <span className="text-xs uppercase font-semibold text-rose-500 tracking-wider mb-2 block">
            Questions 1–3
          </span>
          <h2 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-6 leading-snug">
            Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.
          </h2>

          <div className="bg-slate-50 dark:bg-white/[0.02] p-6 rounded-2xl border border-slate-100 dark:border-white/[0.05] space-y-4 text-sm text-slate-800 dark:text-slate-300 font-serif leading-relaxed">
            <h4 className="font-sans font-semibold text-slate-900 dark:text-white text-base mb-2">
              {formTitle}
            </h4>
            <div>
              • Preferred location: <strong className="text-slate-900 dark:text-white font-semibold">Near North Campus</strong>
            </div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <span>• {labelText}</span>
              <div className="relative inline-flex items-center">
                <input
                  type="text"
                  disabled={submitted}
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder={expectedAnswer}
                  className={`w-32 px-3 py-1.5 rounded-xl text-center font-mono font-semibold text-sm focus:outline-none transition ${
                    submitted
                      ? answer.trim().toLowerCase() === expectedAnswer.toLowerCase()
                        ? "bg-emerald-50 dark:bg-emerald-950/50 border-2 border-emerald-500 text-emerald-900 dark:text-emerald-200"
                        : "bg-red-50 dark:bg-red-950/50 border-2 border-red-500 text-red-900 dark:text-red-200"
                      : "bg-white dark:bg-white/[0.05] border border-slate-300 dark:border-white/[0.15] text-slate-900 dark:text-white focus:ring-2 focus:ring-rose-500"
                  }`}
                />
                {submitted && (
                  <span className="ml-2">
                    {answer.trim().toLowerCase() === expectedAnswer.toLowerCase() ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 inline" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500 inline" />
                    )}
                  </span>
                )}
              </div>
              <span>units / response</span>
            </div>
          </div>

          {/* Submit / Reset Actions */}
          <div className="mt-5 flex items-center gap-3">
            {!submitted ? (
              <button
                type="button"
                disabled={!answer.trim()}
                onClick={() => setSubmitted(true)}
                className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-md shadow-rose-600/20 disabled:opacity-40 transition active:scale-95"
              >
                Check Answer
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold transition"
              >
                Try Again / Reset
              </button>
            )}
          </div>

          {/* Recommendation & Correct Answer Banner */}
          {submitted && (
            <AiRecommendationCard
              isCorrect={answer.trim().toLowerCase() === expectedAnswer.toLowerCase()}
              correctAnswer={expectedAnswer}
              explanation={`Expected phrase: ${expectedAnswer}. Adheres to official NO MORE THAN TWO WORDS AND/OR A NUMBER standard.`}
              onOpenAi={() => setIsAiDrawerOpen(true)}
            />
          )}
        </div>

        {/* Global Side Drawer Reviewer (Docked to side, doesn't cover screen) */}
        <AiSolutionReviewer
          taskPrompt={`IELTS Listening: ${formTitle} - ${labelText}`}
          userSolution={answer}
          correctAnswer={expectedAnswer}
          officialExplanation={`Expected keyword: ${expectedAnswer}. Adheres to the NO MORE THAN TWO WORDS AND/OR A NUMBER limit.`}
          subject="ielts-listening"
          isOpen={isAiDrawerOpen}
          onClose={() => setIsAiDrawerOpen(false)}
        />
      </main>
    </div>
  );
}

export default function IeltsListeningPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center text-slate-500">
          <Loader2 className="w-8 h-8 animate-spin text-rose-500 mr-2" />
          Loading Listening Simulator...
        </div>
      }
    >
      <ListeningSimulatorContent />
    </Suspense>
  );
}
