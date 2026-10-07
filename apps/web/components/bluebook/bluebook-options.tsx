"use client";

import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { MathRenderer } from "../math-renderer";

interface OptionItem {
  id: string;
  text: string;
  image?: string;
}

interface BluebookOptionsProps {
  options: OptionItem[];
  currentAnswer: string;
  eliminatedOptions: Set<string>;
  onSelectAnswer: (id: string) => void;
  onToggleEliminate: (id: string) => void;
  isSubmitted?: boolean;
  correctAnswer?: string;
  isMath?: boolean;
}

export function BluebookOptions({
  options,
  currentAnswer,
  eliminatedOptions,
  onSelectAnswer,
  onToggleEliminate,
  isSubmitted = false,
  correctAnswer,
  isMath = false,
}: BluebookOptionsProps) {
  return (
    <div className="space-y-3 w-full">
      {options.map((opt) => {
        const isSelected = currentAnswer === opt.id;
        const isEliminated = eliminatedOptions.has(opt.id);
        const isCorrect = isSubmitted && opt.id === correctAnswer;
        const isWrongSelection = isSubmitted && isSelected && !isCorrect;

        // Container classes
        let borderClass = "border-slate-300 dark:border-white/20 hover:border-slate-400 dark:hover:border-white/30 bg-white dark:bg-white/[0.02]";
        let circleClass = "border-slate-400 dark:border-white/30 text-slate-700 dark:text-slate-300";

        if (isSubmitted) {
          if (isSelected) {
            if (isCorrect) {
              borderClass = "border-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/20 ring-1 ring-emerald-500";
              circleClass = "bg-emerald-600 text-white border-emerald-600";
            } else {
              borderClass = "border-red-500 bg-red-50/60 dark:bg-red-950/20 ring-1 ring-red-500";
              circleClass = "bg-red-500 text-white border-red-500";
            }
          } else if (isCorrect) {
            borderClass = "border-emerald-500 bg-emerald-50/30 dark:bg-emerald-950/10 border-dashed";
            circleClass = "bg-emerald-600 text-white border-emerald-600";
          } else {
            borderClass = "border-slate-200 dark:border-white/10 opacity-40";
          }
        } else if (isSelected) {
          borderClass = "border-slate-900 dark:border-white ring-1 ring-slate-900 dark:ring-white bg-slate-50/80 dark:bg-white/[0.05]";
          circleClass = "bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white font-bold";
        } else if (isEliminated) {
          borderClass = "border-slate-200 dark:border-white/10 opacity-40 bg-slate-50/40 dark:bg-white/[0.01]";
        }

        return (
          <div
            key={opt.id}
            className={`group relative flex items-center justify-between rounded-xl border transition-all duration-150 ${borderClass}`}
          >
            {/* Main Clickable Option Area */}
            <button
              type="button"
              disabled={isSubmitted}
              onClick={() => {
                if (isEliminated) {
                  onToggleEliminate(opt.id); // un-eliminate if user clicks to select
                }
                onSelectAnswer(opt.id);
              }}
              className="flex items-center gap-3.5 flex-1 min-w-0 p-3.5 sm:p-4 text-left cursor-pointer"
            >
              {/* Left Circle Badge (A), (B), (C), (D) */}
              <span
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center text-xs sm:text-sm font-semibold shrink-0 transition-colors ${circleClass}`}
              >
                {opt.id}
              </span>

              {/* Option Text / Content */}
              <div
                className={`flex-1 min-w-0 text-[15px] sm:text-[16px] leading-relaxed text-slate-900 dark:text-slate-100 ${
                  isEliminated ? "line-through text-slate-400 dark:text-slate-500" : ""
                }`}
              >
                {opt.image ? (
                  <div className="py-1 px-2.5 rounded-lg bg-white inline-flex items-center border border-slate-200">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={opt.image}
                      alt={`Option ${opt.id}`}
                      className="math-option-img select-none max-h-16 object-contain"
                      loading="eager"
                    />
                  </div>
                ) : isMath ? (
                  <MathRenderer text={opt.text} />
                ) : (
                  <span>{opt.text}</span>
                )}
              </div>

              {/* Submission feedback status icon */}
              {isSubmitted && (
                <div className="shrink-0 pl-2">
                  {isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
                  {isWrongSelection && <XCircle className="w-5 h-5 text-red-500" />}
                </div>
              )}
            </button>

            {/* Right: Eliminator (Cross Out) Button */}
            {!isSubmitted && (
              <div className="pr-3 pl-1 shrink-0">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleEliminate(opt.id);
                  }}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition border ${
                    isEliminated
                      ? "bg-slate-200 dark:bg-white/20 border-slate-400 text-slate-900 dark:text-white"
                      : "border-transparent text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:hover:bg-white/10"
                  }`}
                  title={isEliminated ? `Restore option ${opt.id}` : `Cross out option ${opt.id}`}
                  aria-label={`Cross out option ${opt.id}`}
                >
                  <span className="relative font-bold text-xs">
                    {opt.id}
                    <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1.5px] bg-slate-600 dark:bg-slate-300 transform -rotate-12" />
                  </span>
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
