"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  XCircle,
  Maximize2,
  Info,
  ChevronDown,
  ChevronUp,
  Sparkles,
  HelpCircle,
  FileQuestion,
  Check,
} from "lucide-react";
import { MathRenderer, MathAnswerPreview } from "./math-renderer";
import { MathStimulusCard } from "./smart-math-renderer";
import { AiRecommendationCard, ExplanationParagraphsView } from "./ai-solution-reviewer";
import type { SatQuestion } from "@/lib/sat-data";

interface StudentProducedResponseProps {
  question: SatQuestion;
  currentAnswer: string;
  isSubmitted: boolean;
  isCorrect: boolean;
  onSelectAnswer: (val: string) => void;
  onSubmit: () => void;
  onZoomImage?: (img: string | null) => void;
  onOpenAi?: () => void;
  onAskWhy?: (question?: string) => void;
}

const VALID_GRID_IN_CHARS = /^[0-9./-]*$/;

export function StudentProducedResponse({
  question,
  currentAnswer,
  isSubmitted,
  isCorrect,
  onSelectAnswer,
  onSubmit,
  onZoomImage,
  onOpenAi,
  onAskWhy,
}: StudentProducedResponseProps) {
  const [isInstructionsOpen, setIsInstructionsOpen] = useState(false);

  // Sanitize user input to valid Digital SAT grid-in characters and length limits
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;

    // Filter to allowed characters only: digits, period, minus, slash
    val = val.replace(/[^0-9./-]/g, "");

    // Enforce College Board length limit: max 6 for negative, max 5 for positive
    const maxLen = val.startsWith("-") ? 6 : 5;
    if (val.length > maxLen) {
      val = val.slice(0, maxLen);
    }

    onSelectAnswer(val);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isSubmitted && currentAnswer.trim()) {
      e.preventDefault();
      onSubmit();
    }
  };

  // When submitted: Two-column layout strictly following the rule:
  // LEFT: Answer review (разбор, оценка, фидбек)
  // RIGHT: Исходный вопрос и ответ респондента/пользователя
  if (isSubmitted) {
    return (
      <div className="w-full flex-1 flex flex-col md:flex-row overflow-hidden border border-slate-200/80 dark:border-white/[0.08] rounded-3xl bg-white dark:bg-white/[0.02] shadow-xs md:min-h-[580px] md:h-[calc(100vh-14rem)] md:max-h-[820px]">
        {/* LEFT COLUMN: ANSWER REVIEW (РАЗБОР, ОЦЕНКА, ФИДБЕК) */}
        <div className="flex flex-col md:w-1/2 overflow-y-auto border-b md:border-b-0 md:border-r border-slate-200/80 dark:border-white/[0.08] p-6 lg:p-8 bg-slate-50/50 dark:bg-white/[0.015] space-y-6">
          <div className="space-y-6 max-w-xl w-full">
            {/* Review Header with Status Badge */}
            <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-200/70 dark:border-white/[0.06]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-sky-50 dark:bg-sky-950/60 flex items-center justify-center text-[#007EA7] dark:text-[#00A8E8]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 block">
                    Answer review
                  </span>
                  <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                    Разбор и оценка решения
                  </span>
                </div>
              </div>

              {isCorrect ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800/60 shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  Верно (+1 балл)
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-100 dark:bg-red-950/60 text-red-800 dark:text-red-300 border border-red-300 dark:border-red-800/60 shadow-2xs">
                  <XCircle className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
                  Неверно (0 баллов)
                </span>
              )}
            </div>

            {/* Answer Comparison Summary */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200/70 dark:border-emerald-900/40">
                <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider block mb-1">
                  Правильный ответ:
                </span>
                <div className="text-lg font-mono font-bold text-emerald-900 dark:text-emerald-200 flex items-center">
                  <MathRenderer text={question.correctAnswer} />
                </div>
              </div>

              <div className={`p-3.5 rounded-2xl border ${
                isCorrect
                  ? "bg-emerald-50/70 dark:bg-emerald-950/20 border-emerald-200/70 dark:border-emerald-900/40"
                  : "bg-red-50/70 dark:bg-red-950/20 border-red-200/70 dark:border-red-900/40"
              }`}>
                <span className={`text-[11px] font-semibold uppercase tracking-wider block mb-1 ${
                  isCorrect ? "text-emerald-700 dark:text-emerald-400" : "text-red-700 dark:text-red-400"
                }`}>
                  Ваш ответ:
                </span>
                <span className={`text-lg font-mono font-bold block ${
                  isCorrect ? "text-emerald-900 dark:text-emerald-200" : "text-red-900 dark:text-red-200"
                }`}>
                  {currentAnswer || "—"}
                </span>
              </div>
            </div>

            {/* Detailed Solution Explanation */}
            <div className="space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-[#007EA7] dark:text-[#00A8E8]" />
                Пошаговый разбор задачи (Explanation)
              </span>
              <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.08] text-slate-800 dark:text-slate-200 text-sm leading-relaxed shadow-2xs">
                {/(?:Choice|Option|Вариант)\s+[A-DА-Я0-9]/i.test(question.explanation) ? (
                  <ExplanationParagraphsView
                    text={question.explanation}
                    onAskWhyChoice={(choiceLetter) =>
                      onAskWhy
                        ? onAskWhy(`Почему Choice ${choiceLetter} неверен?`)
                        : onOpenAi?.()
                    }
                  />
                ) : (
                  <MathRenderer text={question.explanation} className="leading-relaxed" />
                )}
              </div>
            </div>

            {/* AI Recommendation Card with Interactive Drawer Trigger */}
            <AiRecommendationCard
              isCorrect={isCorrect}
              correctAnswer={question.correctAnswer}
              explanation={question.explanation}
              onOpenAi={onOpenAi || (() => {})}
              onAskWhy={onAskWhy}
            />

            {/* College Board Scoring Acceptance Note */}
            <div className="p-3.5 rounded-2xl bg-sky-50/70 dark:bg-sky-950/20 border border-sky-200/60 dark:border-sky-900/40 text-xs text-sky-900 dark:text-sky-300 space-y-1">
              <span className="font-semibold block">Правило эквивалентности Digital SAT:</span>
              <p className="text-[11.5px] leading-relaxed text-sky-800 dark:text-sky-300/90">
                Система автоматически принимает эквивалентные обыкновенные и десятичные дроби (например, 7/2 и 3.5 считаются одинаково верными).
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: ИСХОДНЫЙ ВОПРОС И ОТВЕТ РЕСПОНДЕНТА/ПОЛЬЗОВАТЕЛЯ */}
        <div className="flex-1 md:w-1/2 overflow-y-auto p-6 lg:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-6 max-w-xl w-full">
            {/* Column Header */}
            <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-200/70 dark:border-white/[0.06]">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <FileQuestion className="w-4 h-4 text-[#007EA7] dark:text-[#00A8E8]" />
                Исходный вопрос и ваш ответ
              </span>
              <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/[0.06] text-slate-600 dark:text-slate-400">
                Grid-In (Open-Ended)
              </span>
            </div>

            {/* Question Stimulus Diagram or Image (if available) */}
            {question.passage ? (
              <MathStimulusCard
                content={question.passage}
                title="Материалы к задаче (график / фигура)"
              />
            ) : question.image ? (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-slate-400 px-1">
                  <span className="text-[#007EA7] dark:text-[#00A8E8]">
                    Материалы к задаче
                  </span>
                  {onZoomImage && (
                    <button
                      type="button"
                      onClick={() => onZoomImage(question.image || null)}
                      className="text-[11px] text-slate-500 hover:text-[#007EA7] dark:hover:text-[#00A8E8] flex items-center gap-1 transition px-2 py-1 rounded-md hover:bg-slate-100 dark:hover:bg-white/[0.05]"
                    >
                      <Maximize2 className="w-3 h-3" />
                      <span>Увеличить</span>
                    </button>
                  )}
                </div>
                <div
                  onClick={() => onZoomImage && onZoomImage(question.image || null)}
                  className="group relative cursor-zoom-in p-4 rounded-2xl bg-white border border-slate-200/90 dark:border-white/[0.12] shadow-2xs hover:border-[#007EA7]/50 dark:hover:border-[#00A8E8]/50 transition flex items-center justify-center overflow-hidden"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={question.image}
                    alt="График или условие к вопросу"
                    className="math-stimulus-img select-none transition-transform duration-200 group-hover:scale-[1.01]"
                    loading="eager"
                  />
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition bg-slate-900/80 text-white rounded-full p-2 pointer-events-none shadow-md">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ) : null}

            {/* Question Stem in Unified Typography */}
            <div className="space-y-2 pt-1">
              <MathRenderer text={question.stem} className="math-problem-stem font-normal text-slate-900 dark:text-white" />
            </div>

            {/* Respondent's Submitted Answer Box */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Ответ респондента (Ваш ответ):
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  {currentAnswer.length}/{currentAnswer.startsWith("-") ? 6 : 5} симв.
                </span>
              </div>

              {/* Submitted Answer Display Box */}
              <div className="relative">
                <div
                  className={`w-full rounded-2xl px-4 py-3.5 text-lg font-mono font-bold flex items-center justify-between border-2 shadow-2xs ${
                    isCorrect
                      ? "bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-200 ring-1 ring-emerald-500/20"
                      : "bg-red-50/80 dark:bg-red-950/40 border-red-500 text-red-900 dark:text-red-200 ring-1 ring-red-500/20"
                  }`}
                >
                  <span>{currentAnswer || "(нет ответа)"}</span>
                  {isCorrect ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                  )}
                </div>
              </div>

              {/* Answer Preview (Интерпретация системой) */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                  Answer preview (Интерпретация ответа):
                </span>
                <MathAnswerPreview value={currentAnswer} />
              </div>

              {/* Reference to Digital SAT Rules */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsInstructionsOpen(!isInstructionsOpen)}
                  className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/[0.05] hover:bg-slate-200/80 dark:hover:bg-white/[0.08] text-slate-700 dark:text-slate-300 flex items-center gap-1.5 transition"
                >
                  <Info className="w-3.5 h-3.5 text-[#007EA7] dark:text-[#00A8E8]" />
                  <span>Справочник правил записи ответа</span>
                  {isInstructionsOpen ? (
                    <ChevronUp className="w-3.5 h-3.5" />
                  ) : (
                    <ChevronDown className="w-3.5 h-3.5" />
                  )}
                </button>

                {isInstructionsOpen && (
                  <div className="mt-2.5 p-4 rounded-2xl bg-slate-50/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.08] space-y-4 max-h-64 overflow-y-auto text-xs animate-in fade-in duration-150">
                    <InstructionsContent />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // When not yet submitted (answering mode):
  // Standard exam mode: Left = Question Stem & Stimulus, Right = Answer Input & Live Preview
  return (
    <div className="w-full flex-1 flex flex-col md:flex-row overflow-hidden border border-slate-200/80 dark:border-white/[0.08] rounded-3xl bg-white dark:bg-white/[0.02] shadow-xs md:min-h-[580px] md:h-[calc(100vh-14rem)] md:max-h-[820px]">
      {/* LEFT COLUMN: QUESTION STEM AND STIMULUS (50% WIDTH, INDEPENDENT SCROLL) */}
      <div className="flex flex-col md:w-1/2 overflow-y-auto border-b md:border-b-0 md:border-r border-slate-200/80 dark:border-white/[0.08] p-6 lg:p-8 bg-slate-50/40 dark:bg-white/[0.01]">
        <div className="space-y-6 max-w-xl w-full">
          {/* Column Header */}
          <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-200/70 dark:border-white/[0.06]">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <FileQuestion className="w-4 h-4 text-[#007EA7] dark:text-[#00A8E8]" />
              Условие задачи (Question)
            </span>
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-sky-50 dark:bg-sky-950/50 text-[#007EA7] dark:text-[#00A8E8]">
              Grid-In
            </span>
          </div>

          {/* Question Stimulus Diagram or Image (if available) */}
          {question.passage ? (
            <MathStimulusCard
              content={question.passage}
              title="Материалы к задаче (график / фигура)"
            />
          ) : question.image ? (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-slate-400 px-1">
                <span className="text-[#007EA7] dark:text-[#00A8E8]">
                  Материалы к задаче
                </span>
                {onZoomImage && (
                  <button
                    type="button"
                    onClick={() => onZoomImage(question.image || null)}
                    className="text-[11px] text-slate-500 hover:text-[#007EA7] dark:hover:text-[#00A8E8] flex items-center gap-1 transition px-2 py-1 rounded-md hover:bg-slate-100 dark:hover:bg-white/[0.05]"
                  >
                    <Maximize2 className="w-3 h-3" />
                    <span>Увеличить</span>
                  </button>
                )}
              </div>
              <div
                onClick={() => onZoomImage && onZoomImage(question.image || null)}
                className="group relative cursor-zoom-in p-4 rounded-2xl bg-white border border-slate-200/90 dark:border-white/[0.12] shadow-2xs hover:border-[#007EA7]/50 dark:hover:border-[#00A8E8]/50 transition flex items-center justify-center overflow-hidden"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={question.image}
                  alt="График или условие к вопросу"
                  className="math-stimulus-img select-none transition-transform duration-200 group-hover:scale-[1.01]"
                  loading="eager"
                />
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition bg-slate-900/80 text-white rounded-full p-2 pointer-events-none shadow-md">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ) : null}

          {/* Question Stem in Unified Typography */}
          <div className="space-y-2 pt-1">
            <MathRenderer text={question.stem} className="math-problem-stem font-normal text-slate-900 dark:text-white" />
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: ANSWER INPUT, LIVE PREVIEW, DIRECTIONS, AND CHECK (50% WIDTH, INDEPENDENT SCROLL) */}
      <div className="flex-1 md:w-1/2 overflow-y-auto p-6 lg:p-8 flex flex-col justify-between space-y-6">
        <div className="space-y-6 max-w-xl w-full">
          {/* Column Header with Instructions Toggle */}
          <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-100 dark:border-white/[0.05]">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Ввод ответа (Student-Produced Response)
            </span>
            <button
              type="button"
              onClick={() => setIsInstructionsOpen(!isInstructionsOpen)}
              className="quiz-option-btn text-xs font-semibold px-2.5 py-1 rounded-full bg-sky-50 hover:bg-sky-100 dark:bg-sky-950/40 dark:hover:bg-sky-900/50 text-[#007EA7] dark:text-[#00A8E8] flex items-center gap-1.5 transition"
            >
              <Info className="w-3.5 h-3.5" strokeWidth={2} />
              <span>Правила ввода</span>
              {isInstructionsOpen ? (
                <ChevronUp className="w-3.5 h-3.5" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {/* Collapsible Directions Box */}
          {isInstructionsOpen && (
            <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.08] space-y-4 max-h-72 overflow-y-auto text-xs animate-in fade-in duration-200">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200/70 dark:border-white/[0.07]">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-sky-100 dark:bg-sky-950/60 text-[#007EA7] dark:text-[#00A8E8]">
                  Digital SAT Rules
                </span>
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  Правила записи численного ответа
                </span>
              </div>
              <InstructionsContent />
            </div>
          )}

          {/* Input & Live Preview Area */}
          <div className="space-y-3 pt-1">
            <div className="flex items-center justify-between">
              <label
                htmlFor="grid-in-input"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300"
              >
                Ваш ответ (Student Answer):
              </label>
              <span className="text-[11px] text-slate-400 dark:text-slate-500 font-mono">
                {currentAnswer.length}/{currentAnswer.startsWith("-") ? 6 : 5} символов
              </span>
            </div>

            {/* Restricted Input Box */}
            <div className="relative">
              <input
                id="grid-in-input"
                type="text"
                autoComplete="off"
                autoCorrect="off"
                spellCheck={false}
                value={currentAnswer}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Впишите число или дробь (например, 7/2 или 3.5)..."
                className="w-full rounded-2xl px-4 py-3.5 text-lg font-mono font-bold transition focus:outline-none bg-slate-50/90 dark:bg-white/[0.04] border border-slate-300/80 dark:border-white/[0.12] text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-[#007EA7] dark:focus:ring-[#00A8E8] focus:border-transparent"
              />
            </div>

            {/* Answer Preview (Как ответ будет прочитан системой) */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                Answer preview (Предпросмотр интерпретации):
              </span>
              <MathAnswerPreview value={currentAnswer} />
            </div>

            {/* Submit / Check Answer Button */}
            <div className="pt-2">
              <button
                type="button"
                disabled={!currentAnswer.trim()}
                onClick={onSubmit}
                className="quiz-option-btn w-full py-3 px-5 rounded-2xl bg-[#007EA7] hover:bg-[#0093C8] disabled:opacity-40 disabled:pointer-events-none text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-xs transition active:scale-98 cursor-pointer"
              >
                <Check className="w-4 h-4" strokeWidth={2.5} />
                <span>Проверить ответ</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Clean, structured instructions matching official College Board Digital SAT specifications.
 */
function InstructionsContent() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 text-xs sm:text-[13.5px] leading-relaxed">
      {/* Rules list */}
      <div className="space-y-3">
        <div className="flex items-start gap-2.5">
          <span className="w-5 h-5 rounded-full bg-[#007EA7]/15 dark:bg-[#00A8E8]/20 text-[#007EA7] dark:text-[#00A8E8] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
            1
          </span>
          <p>
            Ответ может быть <strong>целым числом</strong>, <strong>десятичной дробью</strong> или <strong>обыкновенной дробью</strong>.
          </p>
        </div>

        <div className="flex items-start gap-2.5">
          <span className="w-5 h-5 rounded-full bg-[#007EA7]/15 dark:bg-[#00A8E8]/20 text-[#007EA7] dark:text-[#00A8E8] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
            2
          </span>
          <p>
            Максимум <strong>5 символов</strong> для положительного ответа и <strong>6 символов</strong> для отрицательного (считая знак минус).
          </p>
        </div>

        <div className="flex items-start gap-2.5">
          <span className="w-5 h-5 rounded-full bg-[#007EA7]/15 dark:bg-[#00A8E8]/20 text-[#007EA7] dark:text-[#00A8E8] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
            3
          </span>
          <p>
            Если ответ — дробь, которая не помещается в лимит символов, впишите её <strong>десятичное значение</strong>.
          </p>
        </div>

        <div className="flex items-start gap-2.5">
          <span className="w-5 h-5 rounded-full bg-[#007EA7]/15 dark:bg-[#00A8E8]/20 text-[#007EA7] dark:text-[#00A8E8] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
            4
          </span>
          <p>
            Если у задачи <strong>несколько правильных ответов</strong>, впишите любой один из них.
          </p>
        </div>

        <div className="flex items-start gap-2.5">
          <span className="w-5 h-5 rounded-full bg-[#007EA7]/15 dark:bg-[#00A8E8]/20 text-[#007EA7] dark:text-[#00A8E8] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
            5
          </span>
          <p>
            <strong>Не пишите</strong> знаки <code className="px-1 py-0.5 bg-slate-100 dark:bg-white/10 rounded font-mono">%</code>, <code className="px-1 py-0.5 bg-slate-100 dark:bg-white/10 rounded font-mono">$</code>, запятые-разделители тысяч, единицы измерения и пробелы.
          </p>
        </div>
      </div>

      {/* Critical note on mixed numbers */}
      <div className="p-3.5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-300/60 dark:border-amber-700/40 text-xs text-amber-900 dark:text-amber-200 space-y-1">
        <div className="font-bold flex items-center gap-1.5 text-amber-800 dark:text-amber-300">
          <Info className="w-4 h-4 shrink-0" />
          <span>Важно: смешанные числа (Mixed Numbers)</span>
        </div>
        <p>
          Смешанное число <span className="font-semibold">3 ½</span> необходимо записывать как неправильную дробь <strong className="font-mono">7/2</strong> или десятичную <strong className="font-mono">3.5</strong>. Запись с пробелом <em>3 1/2</em> будет прочитана системой как <strong>31/2</strong>.
        </p>
      </div>

      {/* Examples Grid */}
      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
          Примеры правильной записи:
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          <div className="p-2.5 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-200/70 dark:border-white/[0.06] text-center shadow-2xs">
            <span className="font-mono font-bold text-sky-700 dark:text-sky-300 block text-base">3.5</span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">десятичная</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-200/70 dark:border-white/[0.06] text-center shadow-2xs">
            <span className="font-mono font-bold text-sky-700 dark:text-sky-300 block text-base">7/2</span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">дробь</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-200/70 dark:border-white/[0.06] text-center shadow-2xs">
            <span className="font-mono font-bold text-sky-700 dark:text-sky-300 block text-base">-1/3</span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">отрицательная</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-200/70 dark:border-white/[0.06] text-center shadow-2xs">
            <span className="font-mono font-bold text-sky-700 dark:text-sky-300 block text-base">.25</span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">без нуля (0.25)</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-200/70 dark:border-white/[0.06] text-center shadow-2xs">
            <span className="font-mono font-bold text-sky-700 dark:text-sky-300 block text-base">2/3</span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">дробь</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-200/70 dark:border-white/[0.06] text-center shadow-2xs">
            <span className="font-mono font-bold text-sky-700 dark:text-sky-300 block text-base">-5</span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">отрицательное</span>
          </div>
        </div>
      </div>
    </div>
  );
}
