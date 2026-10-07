"use client";

import React from "react";
import { X, HelpCircle, Keyboard, Maximize, FileText } from "lucide-react";

interface BluebookMoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDirections?: () => void;
}

export function BluebookMoreModal({
  isOpen,
  onClose,
  onOpenDirections,
}: BluebookMoreModalProps) {
  if (!isOpen) return null;

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-md flex flex-col bg-white dark:bg-[#121620] text-slate-900 dark:text-slate-100 rounded-2xl shadow-2xl border border-slate-300 dark:border-white/10 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#181d2a]">
          <h2 className="text-base font-bold tracking-tight text-slate-900 dark:text-white">
            Tools & Settings
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-white/10 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action List */}
        <div className="p-4 space-y-2 text-sm">
          <button
            type="button"
            onClick={() => {
              toggleFullscreen();
              onClose();
            }}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/[0.05] text-left text-slate-800 dark:text-slate-200 transition"
          >
            <Maximize className="w-4 h-4 text-[#007EA7]" />
            <div>
              <div className="font-semibold text-xs">Toggle Full Screen Mode</div>
              <div className="text-[11px] text-slate-500">Maximize exam test window</div>
            </div>
          </button>

          {onOpenDirections && (
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenDirections();
              }}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-white/[0.05] text-left text-slate-800 dark:text-slate-200 transition"
            >
              <FileText className="w-4 h-4 text-[#007EA7]" />
              <div>
                <div className="font-semibold text-xs">Section Directions</div>
                <div className="text-[11px] text-slate-500">Review instructions for this section</div>
              </div>
            </button>
          )}

          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <Keyboard className="w-4 h-4 text-[#007EA7]" />
              <span>Keyboard Shortcuts</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 dark:text-slate-400">
              <div><kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-white/10 font-mono text-[10px]">A</kbd> / <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-white/10 font-mono text-[10px]">B</kbd> / <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-white/10 font-mono text-[10px]">C</kbd> / <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-white/10 font-mono text-[10px]">D</kbd> Choose option</div>
              <div><kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-white/10 font-mono text-[10px]">←</kbd> / <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-white/10 font-mono text-[10px]">→</kbd> Previous / Next</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#181d2a] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold hover:opacity-90 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
