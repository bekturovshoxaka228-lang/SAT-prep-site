"use client";

import React from "react";
import { Bookmark } from "lucide-react";

interface BluebookQuestionHeaderProps {
  questionNumber: number;
  isMarked: boolean;
  onToggleMark: () => void;
  isEliminatorActive?: boolean;
  onToggleEliminator?: () => void;
  showEliminator?: boolean;
}

export function BluebookQuestionHeader({
  questionNumber,
  isMarked,
  onToggleMark,
  isEliminatorActive = false,
  onToggleEliminator,
  showEliminator = true,
}: BluebookQuestionHeaderProps) {
  return (
    <div className="w-full select-none pb-4">
      <div className="flex items-center justify-between gap-3">
        {/* Left: Question Badge & Mark for Review */}
        <div className="flex items-center gap-3">
          {/* Black Square Question Number Badge */}
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-[3px] bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs sm:text-sm flex items-center justify-center shadow-xs shrink-0">
            {questionNumber}
          </div>

          {/* Mark for Review Button */}
          <button
            type="button"
            onClick={onToggleMark}
            className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition group"
            title="Mark question to review later"
          >
            <Bookmark
              className={`w-4 h-4 transition-colors ${
                isMarked
                  ? "fill-amber-500 text-amber-500"
                  : "text-slate-500 group-hover:text-slate-800 dark:group-hover:text-slate-200"
              }`}
            />
            <span className={isMarked ? "font-semibold text-amber-600 dark:text-amber-400" : ""}>
              Mark for Review
            </span>
          </button>
        </div>

        {/* Right: Answer Eliminator (ABC Tool) */}
        {showEliminator && onToggleEliminator && (
          <button
            type="button"
            onClick={onToggleEliminator}
            className={`flex items-center justify-center px-2.5 py-1 rounded-md text-xs font-bold transition border ${
              isEliminatorActive
                ? "bg-[#002f6c] text-white border-[#002f6c] shadow-xs"
                : "bg-white dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border-slate-300 dark:border-white/20 hover:bg-slate-100 dark:hover:bg-white/10"
            }`}
            title="Cross-out answer choices (Answer Eliminator)"
          >
            <span className="tracking-wider relative inline-block">
              ABC
              {/* Strike-through line across ABC */}
              <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-red-500 transform -rotate-12" />
            </span>
          </button>
        )}
      </div>

      {/* Dashed Line Separator as in Bluebook */}
      <div className="w-full border-b-[2px] border-dashed border-slate-300 dark:border-white/20 mt-3" />
    </div>
  );
}
