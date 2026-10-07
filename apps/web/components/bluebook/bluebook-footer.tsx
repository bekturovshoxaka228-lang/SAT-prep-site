"use client";

import React from "react";
import { ChevronLeft, ChevronRight, ChevronUp, CheckCircle2, RotateCcw, LayoutGrid } from "lucide-react";

interface BluebookFooterProps {
  currentIndex: number;
  totalQuestions: number;
  onBack: () => void;
  onNext: () => void;
  onOpenNavigator: () => void;
  onCheckAnswer?: () => void;
  onResetAnswer?: () => void;
  isAnswerEntered: boolean;
  isSubmitted: boolean;
  isLastQuestion: boolean;
  studentName?: string;
}

export function BluebookFooter({
  currentIndex,
  totalQuestions,
  onBack,
  onNext,
  onOpenNavigator,
  onCheckAnswer,
  onResetAnswer,
  isAnswerEntered,
  isSubmitted,
  isLastQuestion,
  studentName = "Student Practice",
}: BluebookFooterProps) {
  return (
    <footer className="w-full bg-[#f8fafc] dark:bg-[#0b0f19] border-t border-slate-200 dark:border-white/10 px-4 sm:px-6 lg:px-8 py-3 select-none">
      <div className="max-w-[1920px] mx-auto flex items-center justify-between gap-3">
        {/* Left: Test Status or Info */}
        <div className="text-xs font-medium text-slate-500 dark:text-slate-400 hidden sm:block">
          <span>{studentName}</span>
        </div>

        {/* Center: Bluebook Question Navigator Trigger */}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={onOpenNavigator}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-300 dark:border-white/20 bg-white dark:bg-white/[0.05] hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-slate-100 text-xs sm:text-sm font-semibold transition shadow-2xs group"
            title="Review all questions"
          >
            <LayoutGrid className="w-3.5 h-3.5 text-slate-600 dark:text-slate-300" />
            <span>
              Question {currentIndex + 1} of {totalQuestions}
            </span>
            <ChevronUp className="w-4 h-4 text-slate-400 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Right: Back, Check / Retry, Next */}
        <div className="flex items-center gap-2">
          {/* Back Button */}
          <button
            type="button"
            onClick={onBack}
            disabled={currentIndex === 0}
            className="flex items-center gap-1 px-3.5 sm:px-4 py-1.5 rounded-full border border-slate-300 dark:border-white/20 bg-white dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none text-xs sm:text-sm font-medium transition"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back</span>
          </button>

          {/* Check / Try Again (Practice Mode) */}
          {onCheckAnswer && !isSubmitted && (
            <button
              type="button"
              disabled={!isAnswerEntered}
              onClick={onCheckAnswer}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#007EA7] hover:bg-[#0093C8] text-white text-xs sm:text-sm font-semibold shadow-xs disabled:opacity-40 disabled:pointer-events-none transition"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Check</span>
            </button>
          )}

          {onResetAnswer && isSubmitted && (
            <button
              type="button"
              onClick={onResetAnswer}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-medium transition hover:bg-slate-300 dark:hover:bg-white/15"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retry</span>
            </button>
          )}

          {/* Next Button */}
          <button
            type="button"
            onClick={onNext}
            disabled={isLastQuestion}
            className="flex items-center gap-1 px-5 sm:px-6 py-1.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90 disabled:opacity-30 disabled:pointer-events-none text-xs sm:text-sm font-semibold transition shadow-xs"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
