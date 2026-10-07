"use client";

import React, { useMemo, useState } from "react";
import katex from "katex";
import { Info, Maximize2, X, ZoomIn } from "lucide-react";

interface SmartMathRendererProps {
  content: string;
  className?: string;
  enableZoom?: boolean;
}

import { processMathContent } from "./math-renderer";

/**
 * Splits stimulus content into visual diagram (SVG/table/image) and textual details/description.
 * This ensures graphs are clean, pristine and zoomable without text awkwardly trapped inside.
 */
export function splitMathStimulus(rawContent: string): {
  visualHtml: string;
  descriptionHtml: string;
  hasVisual: boolean;
  hasDescription: boolean;
} {
  if (!rawContent) {
    return { visualHtml: "", descriptionHtml: "", hasVisual: false, hasDescription: false };
  }

  // 1. Process math notation in content first (including KaTeX, spoken math cleanup, etc.)
  const processed = processMathContent(rawContent);

  // 2. Extract SVG diagram or genuine graphic image (never tables or math formulas)
  const svgMatch = processed.match(/<svg[\s\S]*?<\/svg>/i);
  const imgMatch =
    !svgMatch && !processed.includes("math-img") && !processed.includes('role="math"')
      ? processed.match(/<img\b[^>]+src=[^>]+>/i)
      : null;

  let visualHtml = "";
  let descriptionHtml = processed;

  if (svgMatch) {
    visualHtml = svgMatch[0];
    descriptionHtml = processed.replace(visualHtml, "");
  } else if (imgMatch) {
    visualHtml = imgMatch[0];
    descriptionHtml = processed.replace(visualHtml, "");
  } else {
    visualHtml = "";
    descriptionHtml = processed;
  }

  // Clean description HTML:
  // Remove wrapping empty <figure>, <p></p>, and sr-only classes
  descriptionHtml = descriptionHtml
    .replace(/<\/?figure[^>]*>/gi, "")
    .replace(/\bclass=["']sr-only["']/gi, 'class="stimulus-description-body"')
    .replace(/role=["']region["']/gi, "")
    .replace(/aria-label=["'][^"']*["']/gi, "")
    .replace(/<p[^>]*>\s*<\/p>/gi, "")
    .trim();

  // Check if description has actual visible alphanumeric characters
  const rawTextOnly = descriptionHtml.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").trim();
  const hasDescription = rawTextOnly.length > 0;
  const hasVisual = visualHtml.length > 0;

  return {
    visualHtml,
    descriptionHtml: hasDescription ? descriptionHtml : "",
    hasVisual,
    hasDescription,
  };
}

/**
 * SmartMathRenderer renders:
 * 1. Native W3C MathML (<math>) equations
 * 2. Pure vector SVG (<svg>) graphs, coordinate planes, and geometric figures
 * 3. Formatted semantic HTML tables (<table>)
 * 4. KaTeX LaTeX formulas
 * All styled with unified typography (18px desktop / 16px mobile) and flawless dark/light mode compatibility.
 */
export function SmartMathRenderer({
  content,
  className = "",
  enableZoom = true,
}: SmartMathRendererProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  const processedHtml = useMemo(() => {
    return processMathContent(content);
  }, [content]);

  // Check if content contains an SVG figure or image that can be zoomed
  const hasVisual = useMemo(() => {
    return content.includes("<svg") || (content.includes("<img") && !content.includes("math-img"));
  }, [content]);

  return (
    <>
      <div
        className={`smart-math-content math-problem-text text-slate-900 dark:text-slate-100 ${className}`}
        dangerouslySetInnerHTML={{ __html: processedHtml }}
      />

      {/* Optional Fullscreen Zoom Modal for SVG diagrams or figures */}
      {hasVisual && enableZoom && isZoomed && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setIsZoomed(false)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-auto border border-slate-200 dark:border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <ZoomIn className="w-4 h-4 text-[#007EA7] dark:text-[#00A8E8]" />
                Детальный просмотр графика / фигуры
              </span>
              <button
                type="button"
                onClick={() => setIsZoomed(false)}
                className="p-2 rounded-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div
              className="smart-math-content zoom-expanded flex items-center justify-center p-4"
              dangerouslySetInnerHTML={{ __html: processedHtml }}
            />
          </div>
        </div>
      )}
    </>
  );
}

/**
 * Dedicated Stimulus Card component for rendering visual materials
 * (SVG geometric diagrams, coordinate graphs, and data tables) on the left column.
 * Separates visual graphics from descriptive points into two clean containers.
 */
export function MathStimulusCard({
  content,
  title = "Материалы к заданию (график / фигура)",
  className = "",
}: {
  content: string;
  title?: string;
  className?: string;
}) {
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);

  const { visualHtml, descriptionHtml, hasVisual, hasDescription } = useMemo(() => {
    return splitMathStimulus(content);
  }, [content]);

  return (
    <div className={`space-y-4 ${className}`}>
      {/* 1. Visual Figure Container: pure white card with crisp contrast for vector exam SVGs */}
      {hasVisual && (
        <div className="space-y-2">
          {/* Header bar with title and zoom trigger */}
          <div className="flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-slate-400 px-1">
            <span className="flex items-center gap-1.5 text-[#007EA7] dark:text-[#00A8E8]">
              <span className="w-2 h-2 rounded-full bg-[#007EA7] dark:bg-[#00A8E8] inline-block animate-pulse" />
              <span>{title}</span>
            </span>
            <button
              type="button"
              onClick={() => setIsZoomModalOpen(true)}
              className="text-[11px] text-slate-500 hover:text-[#007EA7] dark:hover:text-[#00A8E8] flex items-center gap-1 transition px-2.5 py-1 rounded-lg hover:bg-slate-100 dark:hover:bg-white/[0.06] border border-transparent hover:border-slate-200 dark:hover:border-white/[0.1]"
              title="Нажмите, чтобы открыть во весь экран"
            >
              <Maximize2 className="w-3 h-3" />
              <span>Увеличить</span>
            </button>
          </div>

          <div
            onClick={() => setIsZoomModalOpen(true)}
            className="group relative cursor-zoom-in p-5 sm:p-6 rounded-2xl bg-white text-slate-900 border border-slate-200/90 dark:border-white/[0.15] shadow-xs hover:border-[#007EA7]/50 dark:hover:border-[#00A8E8]/50 transition flex items-center justify-center overflow-x-auto"
          >
            <div
              className="smart-math-content max-w-full flex items-center justify-center select-none group-hover:scale-[1.01] transition-transform duration-200"
              dangerouslySetInnerHTML={{ __html: visualHtml }}
            />
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition bg-slate-900/80 text-white rounded-full p-2 pointer-events-none shadow-md">
              <Maximize2 className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      )}

      {/* 2. Separate Description / Points Container */}
      {hasDescription && (
        <div className="rounded-2xl p-4 sm:p-5 bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.08] shadow-xs space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            <Info className="w-3.5 h-3.5 text-[#007EA7] dark:text-[#00A8E8]" />
            <span>Данные графика / Описание точек</span>
          </div>
          <div
            className="smart-math-content text-[14px] sm:text-[15px] leading-relaxed text-slate-700 dark:text-slate-300 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_li]:leading-normal"
            dangerouslySetInnerHTML={{ __html: descriptionHtml }}
          />
        </div>
      )}

      {/* Fullscreen modal */}
      {isZoomModalOpen && hasVisual && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setIsZoomModalOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[92vh] bg-white rounded-3xl p-6 sm:p-10 shadow-2xl overflow-auto border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                <ZoomIn className="w-4 h-4 text-[#007EA7]" />
                {title} — Детальный просмотр
              </span>
              <button
                type="button"
                onClick={() => setIsZoomModalOpen(false)}
                className="p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div
              className="smart-math-content zoom-expanded flex items-center justify-center p-4 text-slate-900"
              dangerouslySetInnerHTML={{ __html: visualHtml }}
            />
            {hasDescription && (
              <div className="mt-6 pt-4 border-t border-slate-200 text-slate-700 text-sm">
                <div className="font-semibold text-xs uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-[#007EA7]" />
                  <span>Ключевые точки / Описание:</span>
                </div>
                <div
                  className="smart-math-content text-slate-700 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1"
                  dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
