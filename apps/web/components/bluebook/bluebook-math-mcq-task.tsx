"use client";

import React, { useState, useEffect } from "react";
import { Maximize2, Minimize2 } from "lucide-react";
import { MathRenderer } from "../math-renderer";
import { MathStimulusCard } from "../smart-math-renderer";
import { BluebookQuestionHeader } from "./bluebook-question-header";
import { BluebookOptions } from "./bluebook-options";

interface BluebookMathMcqTaskProps {
  questionNumber: number;
  questionStem: string;
  passage?: string;
  image?: string;
  options: { id: string; text: string; image?: string }[];
  currentAnswer: string;
  onSelectAnswer: (id: string) => void;
  isMarked: boolean;
  onToggleMark: () => void;
  eliminatedOptions: Set<string>;
  onToggleEliminate: (id: string) => void;
  isSubmitted?: boolean;
  correctAnswer?: string;
  onZoomImage?: (img: string | null) => void;
}

export function BluebookMathMcqTask({
  questionNumber,
  questionStem,
  passage,
  image,
  options,
  currentAnswer,
  onSelectAnswer,
  isMarked,
  onToggleMark,
  eliminatedOptions,
  onToggleEliminate,
  isSubmitted = false,
  correctAnswer,
  onZoomImage,
}: BluebookMathMcqTaskProps) {
  const [splitRatio, setSplitRatio] = useState<number>(50);
  const [expandedPane, setExpandedPane] = useState<"none" | "left" | "right">("none");
  const [isDragging, setIsDragging] = useState(false);
  const [isEliminatorActive, setIsEliminatorActive] = useState(false);

  const isVisualGraphicStimulus = (pass?: string, img?: string): boolean => {
    if (img) return true;
    if (!pass) return false;
    // True visual graphic: SVG vector coordinate graphs or geometry diagrams
    if (pass.includes("<svg")) return true;
    // Standalone raster diagrams that are real graphs (not math equations or statements)
    if (
      pass.includes("standalone_image") &&
      !pass.includes("math-img") &&
      !pass.includes('role="math"') &&
      !pass.includes("standalone_statement") &&
      !pass.includes("math_expression")
    ) {
      return true;
    }
    return false;
  };

  const hasStimulus = isVisualGraphicStimulus(passage, image);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const container = document.getElementById("bluebook-math-container");
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

  // If question has no visual diagram (e.g. equations like 3a + 4b = 25, data tables, or pure text),
  // render the authentic single-column written problem layout, exactly like College Board Bluebook!
  if (!hasStimulus) {
    return (
      <div className="w-full flex-1 flex justify-center bg-white dark:bg-[#0c101c] p-6 sm:p-10 min-h-[580px] overflow-y-auto select-text">
        <div className="w-full max-w-3xl space-y-6">
          {/* Question Header: [ 10 ] Mark for Review + ABC Eliminator + Dashed Line */}
          <BluebookQuestionHeader
            questionNumber={questionNumber}
            isMarked={isMarked}
            onToggleMark={onToggleMark}
            isEliminatorActive={isEliminatorActive}
            onToggleEliminator={() => setIsEliminatorActive(!isEliminatorActive)}
            showEliminator={true}
          />

          {/* Written Mathematical Equation / Table directly above question stem */}
          {passage && (
            <div className="math-written-stimulus my-2 overflow-x-auto text-[17px] sm:text-[19px] font-normal text-slate-900 dark:text-white flex justify-center">
              <MathRenderer text={passage} />
            </div>
          )}

          {/* Math Question Stem with KaTeX */}
          <div className="text-[15px] sm:text-[17px] text-slate-900 dark:text-white leading-relaxed font-normal">
            <MathRenderer text={questionStem} />
          </div>

          {/* Options with (A), (B), (C), (D) and crossed-out eliminators */}
          <BluebookOptions
            options={options}
            currentAnswer={currentAnswer}
            eliminatedOptions={eliminatedOptions}
            onSelectAnswer={onSelectAnswer}
            onToggleEliminate={onToggleEliminate}
            isSubmitted={isSubmitted}
            correctAnswer={correctAnswer}
            isMath={true}
          />
        </div>
      </div>
    );
  }

  // If question has stimulus (diagram, graph, table), render the authentic split layout!
  return (
    <div
      id="bluebook-math-container"
      className="w-full flex-1 flex flex-col md:flex-row relative bg-white dark:bg-[#0c101c] min-h-[580px] overflow-hidden select-text"
    >
      {/* LEFT PANE: Diagram, Table, or Passage */}
      {expandedPane !== "right" && (
        <div
          style={{ width: leftWidth }}
          className="relative flex flex-col overflow-y-auto p-6 sm:p-8 lg:p-10 border-b md:border-b-0 md:border-r border-slate-300 dark:border-white/10"
        >
          <div className="absolute top-4 right-4 z-10">
            <button
              type="button"
              onClick={() => setExpandedPane(expandedPane === "left" ? "none" : "left")}
              className="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-white/10 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition"
              title={expandedPane === "left" ? "Restore split view" : "Expand stimulus"}
            >
              {expandedPane === "left" ? (
                <Minimize2 className="w-4 h-4" />
              ) : (
                <Maximize2 className="w-4 h-4" />
              )}
            </button>
          </div>

          <div className="space-y-4 max-w-xl pr-4">
            {passage && (
              <MathStimulusCard
                content={passage}
                title="Figure / Data Reference"
              />
            )}

            {image && (
              <div
                onClick={() => onZoomImage?.(image)}
                className="group relative cursor-zoom-in p-4 rounded-xl bg-white border border-slate-200 dark:border-white/10 hover:border-slate-400 transition"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image}
                  alt="Figure diagram"
                  className="math-stimulus-img select-none max-h-72 mx-auto object-contain"
                  loading="eager"
                />
              </div>
            )}
          </div>
        </div>
      )}

      {/* CENTER DRAGGABLE RESIZER */}
      {expandedPane === "none" && (
        <div
          onMouseDown={handleMouseDown}
          className="hidden md:flex relative w-3 bg-transparent hover:bg-slate-200 dark:hover:bg-white/10 cursor-col-resize items-center justify-center -mx-1.5 z-20 transition-colors select-none"
          title="Drag to resize panels"
        >
          <div className="w-5 h-9 rounded-md bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-md flex items-center justify-center text-[10px] font-bold tracking-tight">
            ‹ ›
          </div>
        </div>
      )}

      {/* RIGHT PANE: Question, Stem, and Answer Options */}
      {expandedPane !== "left" && (
        <div
          style={{ width: rightWidth }}
          className="relative flex-1 flex flex-col overflow-y-auto p-6 sm:p-8 lg:p-10"
        >
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

          <div className="space-y-6 max-w-2xl">
            <BluebookQuestionHeader
              questionNumber={questionNumber}
              isMarked={isMarked}
              onToggleMark={onToggleMark}
              isEliminatorActive={isEliminatorActive}
              onToggleEliminator={() => setIsEliminatorActive(!isEliminatorActive)}
              showEliminator={true}
            />

            <div className="text-[15px] sm:text-[17px] text-slate-900 dark:text-white leading-relaxed font-normal">
              <MathRenderer text={questionStem} />
            </div>

            <BluebookOptions
              options={options}
              currentAnswer={currentAnswer}
              eliminatedOptions={eliminatedOptions}
              onSelectAnswer={onSelectAnswer}
              onToggleEliminate={onToggleEliminate}
              isSubmitted={isSubmitted}
              correctAnswer={correctAnswer}
              isMath={true}
            />
          </div>
        </div>
      )}
    </div>
  );
}
