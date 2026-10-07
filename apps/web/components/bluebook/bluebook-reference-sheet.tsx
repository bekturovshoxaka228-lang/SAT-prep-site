"use client";

import React from "react";
import { X } from "lucide-react";
import { MathRenderer } from "../math-renderer";

interface BluebookReferenceSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BluebookReferenceSheet({ isOpen, onClose }: BluebookReferenceSheetProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-white dark:bg-[#121620] text-slate-900 dark:text-slate-100 rounded-2xl shadow-2xl border border-slate-300 dark:border-white/10 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#181d2a]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#007EA7]" />
            <h2 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white">
              Reference Information
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-white/10 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition"
            title="Close Reference Sheet (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content with official SAT formulas & SVG diagrams */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6 text-sm">
          {/* 2D Area & Perimeter Grid */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
              Area and Perimeter Formulas
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {/* Circle */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02] flex flex-col items-center text-center">
                <svg width="70" height="70" viewBox="0 0 100 100" className="stroke-slate-700 dark:stroke-slate-200 fill-none mb-2">
                  <circle cx="50" cy="50" r="40" strokeWidth="2.5" />
                  <line x1="50" y1="50" x2="90" y2="50" strokeWidth="2" strokeDasharray="3,3" />
                  <circle cx="50" cy="50" r="2.5" className="fill-slate-700 dark:fill-slate-200" />
                  <text x="70" y="44" className="text-[14px] font-serif fill-slate-700 dark:fill-slate-200" stroke="none">r</text>
                </svg>
                <div className="space-y-1 font-serif">
                  <div><MathRenderer text="$A = \pi r^2$" /></div>
                  <div><MathRenderer text="$C = 2\pi r$" /></div>
                </div>
              </div>

              {/* Rectangle */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02] flex flex-col items-center text-center">
                <svg width="70" height="70" viewBox="0 0 100 100" className="stroke-slate-700 dark:stroke-slate-200 fill-none mb-2">
                  <rect x="15" y="25" width="70" height="50" strokeWidth="2.5" />
                  <text x="50" y="20" textAnchor="middle" className="text-[14px] font-serif fill-slate-700 dark:fill-slate-200" stroke="none">$\ell$</text>
                  <text x="92" y="55" className="text-[14px] font-serif fill-slate-700 dark:fill-slate-200" stroke="none">w</text>
                </svg>
                <div className="font-serif">
                  <MathRenderer text="$A = \ell w$" />
                </div>
              </div>

              {/* Triangle */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02] flex flex-col items-center text-center">
                <svg width="70" height="70" viewBox="0 0 100 100" className="stroke-slate-700 dark:stroke-slate-200 fill-none mb-2">
                  <polygon points="15,75 85,75 55,20" strokeWidth="2.5" />
                  <line x1="55" y1="20" x2="55" y2="75" strokeWidth="1.5" strokeDasharray="3,3" />
                  <polyline points="55,68 62,68 62,75" strokeWidth="1" />
                  <text x="50" y="92" textAnchor="middle" className="text-[14px] font-serif fill-slate-700 dark:fill-slate-200" stroke="none">b</text>
                  <text x="59" y="48" className="text-[14px] font-serif fill-slate-700 dark:fill-slate-200" stroke="none">h</text>
                </svg>
                <div className="font-serif">
                  <MathRenderer text="$A = \frac{1}{2} b h$" />
                </div>
              </div>

              {/* Pythagorean Theorem */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02] flex flex-col items-center text-center">
                <svg width="70" height="70" viewBox="0 0 100 100" className="stroke-slate-700 dark:stroke-slate-200 fill-none mb-2">
                  <polygon points="20,80 80,80 20,20" strokeWidth="2.5" />
                  <polyline points="20,70 30,70 30,80" strokeWidth="1" />
                  <text x="12" y="52" className="text-[14px] font-serif fill-slate-700 dark:fill-slate-200" stroke="none">a</text>
                  <text x="50" y="95" textAnchor="middle" className="text-[14px] font-serif fill-slate-700 dark:fill-slate-200" stroke="none">b</text>
                  <text x="55" y="48" className="text-[14px] font-serif fill-slate-700 dark:fill-slate-200" stroke="none">c</text>
                </svg>
                <div className="font-serif">
                  <MathRenderer text="$c^2 = a^2 + b^2$" />
                </div>
              </div>
            </div>
          </div>

          {/* Special Right Triangles */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
              Special Right Triangles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* 30-60-90 */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02] flex items-center justify-between gap-4">
                <svg width="110" height="75" viewBox="0 0 130 90" className="stroke-slate-700 dark:stroke-slate-200 fill-none">
                  <polygon points="20,75 110,75 20,20" strokeWidth="2.5" />
                  <polyline points="20,65 30,65 30,75" strokeWidth="1" />
                  <text x="10" y="50" className="text-[13px] font-serif fill-slate-700 dark:fill-slate-200" stroke="none">x</text>
                  <text x="65" y="88" textAnchor="middle" className="text-[13px] font-serif fill-slate-700 dark:fill-slate-200" stroke="none">x√3</text>
                  <text x="72" y="42" className="text-[13px] font-serif fill-slate-700 dark:fill-slate-200" stroke="none">2x</text>
                  <text x="25" y="32" className="text-[10px] font-sans fill-slate-600 dark:fill-slate-300" stroke="none">60°</text>
                  <text x="88" y="72" className="text-[10px] font-sans fill-slate-600 dark:fill-slate-300" stroke="none">30°</text>
                </svg>
                <div className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
                  <div className="font-bold text-slate-800 dark:text-slate-100">30° - 60° - 90° Triangle</div>
                  <div>Sides ratio: <span className="font-mono font-semibold">$x : x\sqrt{'{3}'} : 2x$</span></div>
                </div>
              </div>

              {/* 45-45-90 */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02] flex items-center justify-between gap-4">
                <svg width="100" height="75" viewBox="0 0 110 90" className="stroke-slate-700 dark:stroke-slate-200 fill-none">
                  <polygon points="20,75 85,75 20,10" strokeWidth="2.5" />
                  <polyline points="20,65 30,65 30,75" strokeWidth="1" />
                  <text x="10" y="45" className="text-[13px] font-serif fill-slate-700 dark:fill-slate-200" stroke="none">s</text>
                  <text x="50" y="88" textAnchor="middle" className="text-[13px] font-serif fill-slate-700 dark:fill-slate-200" stroke="none">s</text>
                  <text x="60" y="40" className="text-[13px] font-serif fill-slate-700 dark:fill-slate-200" stroke="none">s√2</text>
                  <text x="24" y="24" className="text-[10px] font-sans fill-slate-600 dark:fill-slate-300" stroke="none">45°</text>
                  <text x="65" y="70" className="text-[10px] font-sans fill-slate-600 dark:fill-slate-300" stroke="none">45°</text>
                </svg>
                <div className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
                  <div className="font-bold text-slate-800 dark:text-slate-100">45° - 45° - 90° Triangle</div>
                  <div>Sides ratio: <span className="font-mono font-semibold">$s : s : s\sqrt{'{2}'}$</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* 3D Solids Volumes */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
              Volume Formulas
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {/* Rectangular Prism */}
              <div className="p-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02] text-center space-y-1">
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">Prism</div>
                <div className="font-serif text-xs"><MathRenderer text="$V = \ell w h$" /></div>
              </div>

              {/* Cylinder */}
              <div className="p-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02] text-center space-y-1">
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">Cylinder</div>
                <div className="font-serif text-xs"><MathRenderer text="$V = \pi r^2 h$" /></div>
              </div>

              {/* Sphere */}
              <div className="p-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02] text-center space-y-1">
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">Sphere</div>
                <div className="font-serif text-xs"><MathRenderer text="$V = \frac{4}{3}\pi r^3$" /></div>
              </div>

              {/* Cone */}
              <div className="p-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02] text-center space-y-1">
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">Cone</div>
                <div className="font-serif text-xs"><MathRenderer text="$V = \frac{1}{3}\pi r^2 h$" /></div>
              </div>

              {/* Pyramid */}
              <div className="p-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02] text-center space-y-1">
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">Pyramid</div>
                <div className="font-serif text-xs"><MathRenderer text="$V = \frac{1}{3}\ell w h$" /></div>
              </div>
            </div>
          </div>

          {/* Key Geometric Principles */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] text-xs space-y-1.5 text-slate-700 dark:text-slate-300">
            <div>• The number of degrees of arc in a circle is <strong>360</strong>.</div>
            <div>• The number of radians of arc in a circle is <strong>$2\pi$</strong>.</div>
            <div>• The sum of the measures in degrees of the angles of a triangle is <strong>180</strong>.</div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#181d2a] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-1.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold hover:opacity-90 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
