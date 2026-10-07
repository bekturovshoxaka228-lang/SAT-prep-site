"use client";

import React, { useState, useEffect } from "react";
import { Maximize2, Minimize2 } from "lucide-react";
import { BluebookQuestionHeader } from "./bluebook-question-header";
import { BluebookOptions } from "./bluebook-options";

interface BluebookRwTaskProps {
  questionNumber: number;
  passage?: string;
  questionStem: string;
  options: { id: string; text: string; image?: string }[];
  currentAnswer: string;
  onSelectAnswer: (id: string) => void;
  isMarked: boolean;
  onToggleMark: () => void;
  eliminatedOptions: Set<string>;
  onToggleEliminate: (id: string) => void;
  isSubmitted?: boolean;
  correctAnswer?: string;
}

function formatUnderlineText(text: string) {
  if (!text.includes("<u>") && !text.includes("</u>")) {
    return text;
  }
  const sanitized = text
    .replace(/(?:<u\b[^>]*>\s*)+/gi, "<u>")
    .replace(/(?:\s*<\/u\b[^>]*>)+/gi, "</u>");

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
          className="underline underline-offset-4 decoration-2 decoration-slate-900 dark:decoration-white font-semibold"
        >
          {inner}
        </span>
      );
    }
    const cleanPart = part.replace(/<\/?u\b[^>]*>/gi, "");
    return <span key={idx}>{cleanPart}</span>;
  });
}

function renderFormattedPassage(text: string) {
  if (!text) return null;
  const sanitized = text.replace(/,\s*\n+\s*/g, ", ");
  const paragraphs = sanitized
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className="space-y-4">
      {paragraphs.map((paragraph, pIdx) => {
        const lines = paragraph.split("\n").map((l) => l.trim());
        const isPoetry = lines.length >= 3 && lines.every((l) => l.length < 65);

        if (isPoetry) {
          return (
            <div
              key={pIdx}
              className="space-y-1.5 pl-4 border-l-2 border-slate-300 dark:border-white/20 italic font-serif text-[15px] sm:text-[16px]"
            >
              {lines.map((line, lIdx) => (
                <div key={lIdx}>{formatUnderlineText(line)}</div>
              ))}
            </div>
          );
        }

        // Check if paragraph is rhetorical bulleted research notes
        const isBulletedNotes = lines.length >= 2 && lines.every((l) => l.startsWith("•") || l.startsWith("-") || /^\d+\./.test(l));
        if (isBulletedNotes) {
          return (
            <ul key={pIdx} className="space-y-2 list-disc pl-5 font-serif text-[15px] sm:text-[16px] leading-relaxed">
              {lines.map((line, lIdx) => (
                <li key={lIdx}>{formatUnderlineText(line.replace(/^[•\-\d.]\s*/, ""))}</li>
              ))}
            </ul>
          );
        }

        return (
          <p
            key={pIdx}
            className="font-serif text-[15px] sm:text-[16.5px] leading-[1.75] text-[#111827] dark:text-[#f3f4f6]"
          >
            {formatUnderlineText(paragraph)}
          </p>
        );
      })}
    </div>
  );
}

export function BluebookRwTask({
  questionNumber,
  passage,
  questionStem,
  options,
  currentAnswer,
  onSelectAnswer,
  isMarked,
  onToggleMark,
  eliminatedOptions,
  onToggleEliminate,
  isSubmitted = false,
  correctAnswer,
}: BluebookRwTaskProps) {
  const [splitRatio, setSplitRatio] = useState<number>(50);
  const [expandedPane, setExpandedPane] = useState<"none" | "left" | "right">("none");
  const [isDragging, setIsDragging] = useState(false);
  const [isEliminatorActive, setIsEliminatorActive] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const container = document.getElementById("bluebook-rw-container");
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
      id="bluebook-rw-container"
      className="w-full flex-1 flex flex-col md:flex-row relative bg-white dark:bg-[#0c101c] min-h-[580px] overflow-hidden select-text"
    >
      {/* LEFT PANE: Reading Passage */}
      {expandedPane !== "right" && passage && (
        <div
          style={{ width: leftWidth }}
          className="relative flex flex-col overflow-y-auto p-6 sm:p-8 lg:p-10 border-b md:border-b-0 md:border-r border-slate-300 dark:border-white/10"
        >
          {/* Top expand/collapse button */}
          <div className="absolute top-4 right-4 z-10">
            <button
              type="button"
              onClick={() => setExpandedPane(expandedPane === "left" ? "none" : "left")}
              className="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-white/10 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition"
              title={expandedPane === "left" ? "Restore split view" : "Expand passage"}
            >
              {expandedPane === "left" ? (
                <Minimize2 className="w-4 h-4" />
              ) : (
                <Maximize2 className="w-4 h-4" />
              )}
            </button>
          </div>

          <div className="max-w-2xl pr-4 sm:pr-6">
            {renderFormattedPassage(passage)}
          </div>
        </div>
      )}

      {/* CENTER DRAGGABLE RESIZER HANDLE */}
      {expandedPane === "none" && passage && (
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

      {/* RIGHT PANE: Question, Stem, and Answer Options */}
      {expandedPane !== "left" && (
        <div
          style={{ width: passage ? rightWidth : "100%" }}
          className="relative flex-1 flex flex-col overflow-y-auto p-6 sm:p-8 lg:p-10"
        >
          {/* Top expand/collapse button (only when passage exists) */}
          {passage && (
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
          )}

          <div className="space-y-6 max-w-2xl">
            {/* Question Header: [ 1 ] Mark for Review + ABC Eliminator + Dashed Line */}
            <BluebookQuestionHeader
              questionNumber={questionNumber}
              isMarked={isMarked}
              onToggleMark={onToggleMark}
              isEliminatorActive={isEliminatorActive}
              onToggleEliminator={() => setIsEliminatorActive(!isEliminatorActive)}
              showEliminator={true}
            />

            {/* Question Prompt */}
            <div className="text-[15px] sm:text-[16px] text-slate-900 dark:text-white leading-relaxed font-medium">
              {questionStem}
            </div>

            {/* Multiple Choice Options with (A), (B), (C), (D) and Cross-out tools */}
            <BluebookOptions
              options={options}
              currentAnswer={currentAnswer}
              eliminatedOptions={eliminatedOptions}
              onSelectAnswer={onSelectAnswer}
              onToggleEliminate={onToggleEliminate}
              isSubmitted={isSubmitted}
              correctAnswer={correctAnswer}
              isMath={false}
            />
          </div>
        </div>
      )}
    </div>
  );
}
