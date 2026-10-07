"use client";

import React, { useState } from "react";
import { CheckCircle2, XCircle, Maximize2, Minimize2 } from "lucide-react";
import { MathRenderer, MathAnswerPreview } from "../math-renderer";
import { MathStimulusCard } from "../smart-math-renderer";
import { BluebookQuestionHeader } from "./bluebook-question-header";

interface BluebookGridInProps {
  questionNumber: number;
  questionStem: string;
  passage?: string;
  image?: string;
  currentAnswer: string;
  onSelectAnswer: (val: string) => void;
  isMarked: boolean;
  onToggleMark: () => void;
  isSubmitted?: boolean;
  isCorrect?: boolean;
  correctAnswer?: string;
  onZoomImage?: (img: string | null) => void;
}

export function BluebookGridIn({
  questionNumber,
  questionStem,
  passage,
  image,
  currentAnswer,
  onSelectAnswer,
  isMarked,
  onToggleMark,
  isSubmitted = false,
  isCorrect = false,
  correctAnswer,
  onZoomImage,
}: BluebookGridInProps) {
  const [splitRatio, setSplitRatio] = useState<number>(50); // percentage for left pane
  const [expandedPane, setExpandedPane] = useState<"none" | "left" | "right">("none");
  const [isDragging, setIsDragging] = useState(false);

  // Character filtering & limit
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/[^0-9./-]/g, "");
    const maxLen = val.startsWith("-") ? 6 : 5;
    if (val.length > maxLen) {
      val = val.slice(0, maxLen);
    }
    onSelectAnswer(val);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const container = document.getElementById("bluebook-split-container");
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const newRatio = ((e.clientX - rect.left) / rect.width) * 100;
      if (newRatio >= 25 && newRatio <= 75) {
        setSplitRatio(newRatio);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const leftWidth =
    expandedPane === "left" ? "100%" : expandedPane === "right" ? "0%" : `${splitRatio}%`;
  const rightWidth =
    expandedPane === "right" ? "100%" : expandedPane === "left" ? "0%" : `${100 - splitRatio}%`;

  return (
    <div
      id="bluebook-split-container"
      className="w-full flex-1 flex flex-col md:flex-row relative bg-white dark:bg-[#0c101c] min-h-[580px] overflow-hidden select-text"
    >
      {/* LEFT PANE: Student-produced response directions & Examples Table */}
      {expandedPane !== "right" && (
        <div
          style={{ width: leftWidth }}
          className="relative flex flex-col overflow-y-auto p-6 lg:p-8 border-b md:border-b-0 md:border-r border-slate-300 dark:border-white/10"
        >
          {/* Top expand/collapse button */}
          <div className="absolute top-4 right-4 z-10">
            <button
              type="button"
              onClick={() => setExpandedPane(expandedPane === "left" ? "none" : "left")}
              className="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-white/10 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition"
              title={expandedPane === "left" ? "Restore split view" : "Expand directions"}
            >
              {expandedPane === "left" ? (
                <Minimize2 className="w-4 h-4" />
              ) : (
                <Maximize2 className="w-4 h-4" />
              )}
            </button>
          </div>

          <div className="space-y-6 max-w-xl text-slate-900 dark:text-slate-100 text-sm">
            <h2 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white">
              Student-produced response directions
            </h2>

            {/* Official Bluebook Bullets */}
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200 list-disc pl-5 leading-relaxed">
              <li>
                If you find <strong>more than one correct answer</strong>, enter only one answer.
              </li>
              <li>
                You can enter up to 5 characters for a <strong>positive</strong> answer and up to 6 characters (including the negative sign) for a <strong>negative</strong> answer.
              </li>
              <li>
                If your answer is a <strong>fraction</strong> that doesn’t fit in the provided space, enter the decimal equivalent.
              </li>
              <li>
                If your answer is a <strong>decimal</strong> that doesn’t fit in the provided space, enter it by truncating or rounding at the fourth digit.
              </li>
              <li>
                If your answer is a <strong>mixed number</strong> (such as <span className="font-serif">3½</span>), enter it as an improper fraction (7/2) or its decimal equivalent (3.5).
              </li>
              <li>
                Don’t enter <strong>symbols</strong> such as a percent sign, comma, or dollar sign.
              </li>
            </ul>

            {/* Examples Table */}
            <div className="space-y-2 pt-2">
              <h3 className="text-center font-bold text-xs uppercase tracking-wider text-slate-600 dark:text-slate-400">
                Examples
              </h3>
              <div className="border border-slate-300 dark:border-white/20 rounded-lg overflow-hidden text-xs">
                <table className="w-full text-center border-collapse">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-white/[0.04] border-b border-slate-300 dark:border-white/20 font-semibold text-slate-700 dark:text-slate-300">
                      <th className="py-2.5 px-3 border-r border-slate-300 dark:border-white/20 w-1/4">Answer</th>
                      <th className="py-2.5 px-3 border-r border-slate-300 dark:border-white/20 w-1/2">Acceptable ways to enter answer</th>
                      <th className="py-2.5 px-3 w-1/4">Unacceptable: will NOT receive credit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-300 dark:divide-white/20 text-slate-800 dark:text-slate-200">
                    <tr>
                      <td className="py-3 px-2 font-mono font-bold border-r border-slate-300 dark:border-white/20">3.5</td>
                      <td className="py-3 px-2 border-r border-slate-300 dark:border-white/20 font-mono space-y-1">
                        <div>3.5</div>
                        <div>3.50</div>
                        <div>7/2</div>
                      </td>
                      <td className="py-3 px-2 font-mono text-slate-500 space-y-1">
                        <div>31/2</div>
                        <div>3 1/2</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-mono font-bold border-r border-slate-300 dark:border-white/20">2/3</td>
                      <td className="py-3 px-2 border-r border-slate-300 dark:border-white/20 font-mono space-y-1">
                        <div>2/3</div>
                        <div>.6666</div>
                        <div>.6667</div>
                      </td>
                      <td className="py-3 px-2 font-mono text-slate-500 space-y-1">
                        <div>0.66</div>
                        <div>.66</div>
                        <div>0.67</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-mono font-bold border-r border-slate-300 dark:border-white/20">-1/3</td>
                      <td className="py-3 px-2 border-r border-slate-300 dark:border-white/20 font-mono space-y-1">
                        <div>-1/3</div>
                        <div>-.3333</div>
                        <div>-.3334</div>
                      </td>
                      <td className="py-3 px-2 font-mono text-slate-500 space-y-1">
                        <div>-0.33</div>
                        <div>-.33</div>
                        <div>-0.34</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CENTER DRAGGABLE RESIZER HANDLE */}
      {expandedPane === "none" && (
        <div
          onMouseDown={handleMouseDown}
          className="hidden md:flex relative w-3 bg-transparent hover:bg-slate-200 dark:hover:bg-white/10 cursor-col-resize items-center justify-center -mx-1.5 z-20 transition-colors select-none"
          title="Drag to resize panels"
        >
          {/* Black vertical pill with left/right arrows */}
          <div className="w-5 h-9 rounded-md bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-md flex items-center justify-center text-[10px] font-bold tracking-tight">
            ‹ ›
          </div>
        </div>
      )}

      {/* RIGHT PANE: Question, Stem, Input Box, and Live Answer Preview */}
      {expandedPane !== "left" && (
        <div
          style={{ width: rightWidth }}
          className="relative flex-1 flex flex-col overflow-y-auto p-6 lg:p-8"
        >
          {/* Top expand/collapse button */}
          <div className="absolute top-4 right-4 z-10">
            <button
              type="button"
              onClick={() => setExpandedPane(expandedPane === "right" ? "none" : "right")}
              className="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-white/10 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition"
              title={expandedPane === "right" ? "Restore split view" : "Expand question"}
            >
              {expandedPane === "right" ? (
                <Minimize2 className="w-4 h-4" />
              ) : (
                <Maximize2 className="w-4 h-4" />
              )}
            </button>
          </div>

          <div className="space-y-6 max-w-xl">
            {/* Question Header: [ 16 ] Mark for Review + Dashed Line */}
            <BluebookQuestionHeader
              questionNumber={questionNumber}
              isMarked={isMarked}
              onToggleMark={onToggleMark}
              showEliminator={false}
            />

            {/* Stimulus diagram / passage / image if any */}
            {passage && (
              passage.includes("<svg") || (image && !passage.includes("standalone_statement")) ? (
                <MathStimulusCard content={passage} title="Figure / Data Reference" />
              ) : (
                <div className="math-written-stimulus my-2 overflow-x-auto text-[17px] sm:text-[19px] font-normal text-slate-900 dark:text-white flex justify-center">
                  <MathRenderer text={passage} />
                </div>
              )
            )}
            {image && (
              <div
                onClick={() => onZoomImage?.(image)}
                className="cursor-zoom-in rounded-xl border border-slate-200 dark:border-white/10 p-3 bg-white max-w-md"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image} alt="Task diagram" className="max-h-56 mx-auto object-contain" />
              </div>
            )}

            {/* Question Stem */}
            <div className="text-[15px] sm:text-[16px] lg:text-[17px] leading-relaxed text-slate-900 dark:text-slate-100 font-normal">
              <MathRenderer text={questionStem} />
            </div>

            {/* Free Response Input Field */}
            <div className="space-y-3 pt-2">
              <div className="relative inline-block">
                <input
                  type="text"
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck={false}
                  disabled={isSubmitted}
                  value={currentAnswer}
                  onChange={handleInputChange}
                  placeholder=""
                  className={`w-36 sm:w-44 h-12 rounded-lg border-2 px-3.5 text-lg font-mono font-bold transition focus:outline-none ${
                    isSubmitted
                      ? isCorrect
                        ? "border-emerald-500 bg-emerald-50 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200"
                        : "border-red-500 bg-red-50 text-red-900 dark:bg-red-950/40 dark:text-red-200"
                      : "border-slate-400 dark:border-white/30 bg-white dark:bg-white/[0.04] text-slate-900 dark:text-white focus:border-slate-900 dark:focus:border-white"
                  }`}
                />

                {isSubmitted && (
                  <div className="absolute -right-8 top-1/2 -translate-y-1/2">
                    {isCorrect ? (
                      <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-500" />
                    )}
                  </div>
                )}
              </div>

              {/* Live Answer Preview Matching Photo 3 */}
              <div className="pt-2">
                <div className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                  Answer Preview:
                </div>
                <div className="min-h-10 flex items-center">
                  {currentAnswer ? (
                    <div className="px-3 py-1.5 rounded-md border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02]">
                      <MathAnswerPreview value={currentAnswer} />
                    </div>
                  ) : (
                    <span className="text-slate-400 text-xs italic">
                      Type your answer above to preview
                    </span>
                  )}
                </div>
              </div>

              {/* In submitted review mode: show correct answer */}
              {isSubmitted && correctAnswer && (
                <div className="p-3.5 rounded-xl border border-emerald-300 dark:border-emerald-900/60 bg-emerald-50/70 dark:bg-emerald-950/20 text-xs text-emerald-900 dark:text-emerald-300 mt-4">
                  <span className="font-bold uppercase tracking-wider block mb-0.5">Correct Answer:</span>
                  <div className="text-base font-mono font-bold">
                    <MathRenderer text={correctAnswer} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
