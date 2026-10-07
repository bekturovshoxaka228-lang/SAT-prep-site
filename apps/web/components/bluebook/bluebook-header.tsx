"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  Clock,
  Calculator,
  FileSpreadsheet,
  MoreVertical,
  Highlighter,
  Pause,
  Play,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

interface BluebookHeaderProps {
  section: "rw" | "math";
  sectionTitle?: string;
  timeFormatted: string;
  isPaused: boolean;
  onTogglePause: () => void;
  onOpenDirections: () => void;
  onOpenCalculator?: () => void;
  onOpenReference?: () => void;
  onOpenMore: () => void;
  onOpenHighlights?: () => void;
  isCalculatorActive?: boolean;
  backHref?: string;
}

export function BluebookHeader({
  section,
  sectionTitle,
  timeFormatted,
  isPaused,
  onTogglePause,
  onOpenDirections,
  onOpenCalculator,
  onOpenReference,
  onOpenMore,
  onOpenHighlights,
  isCalculatorActive = false,
  backHref,
}: BluebookHeaderProps) {
  const [isTimerHidden, setIsTimerHidden] = useState(false);

  const defaultTitle =
    section === "rw"
      ? "Section 1: Reading and Writing"
      : "Section II, Module 1: Math";

  const displayTitle = sectionTitle || defaultTitle;

  return (
    <header className="w-full bg-[#f8fafc] dark:bg-[#0b0f19] border-b border-slate-200 dark:border-white/10 select-none">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left Section: Section Title & Directions Dropdown */}
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          {backHref && (
            <Link
              href={backHref}
              className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-white/10 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition"
              title="Return to Menu"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
          )}

          <div className="flex flex-col">
            <h1 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white tracking-tight truncate max-w-[200px] sm:max-w-none">
              {displayTitle}
            </h1>
            <button
              type="button"
              onClick={onOpenDirections}
              className="flex items-center gap-1 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition group text-left"
            >
              <span>Directions</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-transform group-hover:translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Center Section: Timer with Hide/Show Pill Toggle */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-1.5 h-6">
            {!isTimerHidden ? (
              <span className="text-base sm:text-lg font-bold font-mono tracking-wider text-slate-900 dark:text-white tabular-nums">
                {timeFormatted}
              </span>
            ) : (
              <Clock className="w-4 h-4 text-slate-400 dark:text-slate-500" />
            )}
            <button
              type="button"
              onClick={onTogglePause}
              className="p-0.5 rounded text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition"
              title={isPaused ? "Resume" : "Pause"}
              aria-label={isPaused ? "Resume" : "Pause"}
            >
              {isPaused ? (
                <Play className="w-3 h-3 fill-current text-amber-500" />
              ) : (
                <Pause className="w-3 h-3 fill-current" />
              )}
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsTimerHidden(!isTimerHidden)}
            className="mt-0.5 px-3 py-0.5 rounded-full border border-slate-300 dark:border-white/20 bg-white dark:bg-white/[0.05] hover:bg-slate-100 dark:hover:bg-white/10 text-[11px] font-medium text-slate-700 dark:text-slate-300 transition shadow-2xs"
          >
            {isTimerHidden ? "Show" : "Hide"}
          </button>
        </div>

        {/* Right Section: Tools (Calculator, Reference, Highlights & Notes, More) */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          {section === "math" ? (
            <>
              {/* Calculator Button */}
              {onOpenCalculator && (
                <button
                  type="button"
                  onClick={onOpenCalculator}
                  className={`flex flex-col items-center justify-center px-2 sm:px-3 py-1 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-white/10 transition group ${
                    isCalculatorActive ? "bg-sky-100 dark:bg-sky-950/60 text-[#007EA7] dark:text-[#00A8E8]" : ""
                  }`}
                  title="Desmos Graphing Calculator"
                >
                  <Calculator className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white" />
                  <span className="text-[10px] sm:text-[11px] font-medium mt-0.5">
                    Calculator
                  </span>
                </button>
              )}

              {/* Reference Sheet Button */}
              {onOpenReference && (
                <button
                  type="button"
                  onClick={onOpenReference}
                  className="flex flex-col items-center justify-center px-2 sm:px-3 py-1 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-white/10 transition group"
                  title="SAT Reference Sheet"
                >
                  <FileSpreadsheet className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white" />
                  <span className="text-[10px] sm:text-[11px] font-medium mt-0.5">
                    Reference
                  </span>
                </button>
              )}
            </>
          ) : (
            <>
              {/* Highlights & Notes Button */}
              <button
                type="button"
                onClick={onOpenHighlights}
                className="flex flex-col items-center justify-center px-2 sm:px-3 py-1 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-white/10 transition group"
                title="Highlights & Notes"
              >
                <Highlighter className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white" />
                <span className="text-[10px] sm:text-[11px] font-medium mt-0.5 whitespace-nowrap">
                  Highlights & Notes
                </span>
              </button>
            </>
          )}

          {/* More Menu Button */}
          <button
            type="button"
            onClick={onOpenMore}
            className="flex flex-col items-center justify-center px-2 sm:px-2.5 py-1 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-white/10 transition group"
            title="More Options"
          >
            <MoreVertical className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white" />
            <span className="text-[10px] sm:text-[11px] font-medium mt-0.5">
              More
            </span>
          </button>

          <div className="pl-1 sm:pl-2 border-l border-slate-300 dark:border-white/10">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
