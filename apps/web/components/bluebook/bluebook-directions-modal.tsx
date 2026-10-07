"use client";

import React from "react";
import { X } from "lucide-react";

interface BluebookDirectionsModalProps {
  isOpen: boolean;
  section: "rw" | "math";
  onClose: () => void;
}

export function BluebookDirectionsModal({
  isOpen,
  section,
  onClose,
}: BluebookDirectionsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl flex flex-col bg-white dark:bg-[#121620] text-slate-900 dark:text-slate-100 rounded-2xl shadow-2xl border border-slate-300 dark:border-white/10 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#181d2a]">
          <h2 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white">
            {section === "rw" ? "Section 1: Reading and Writing Directions" : "Section 2: Math Directions"}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-white/10 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition"
            title="Close Directions"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300 overflow-y-auto max-h-[70vh]">
          {section === "rw" ? (
            <>
              <p>
                The questions in this section address a number of important reading and writing skills. Each question includes one or more passages, which may include a table or a graph.
              </p>
              <p>
                Read each passage and question carefully, and then choose the best answer to the question based on the passage(s).
              </p>
              <p>
                All questions in this section are multiple-choice with four options. Each question has a single best answer.
              </p>
              <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] text-xs space-y-1 text-slate-600 dark:text-slate-400">
                <span className="font-semibold text-slate-900 dark:text-white">Test Tips:</span>
                <div>• You can highlight text and leave notes using the <strong>Highlights & Notes</strong> tool.</div>
                <div>• Use the <strong>ABC tool</strong> to cross out options you know are incorrect.</div>
                <div>• You may adjust the width of the reading passage and question columns with the central divider.</div>
              </div>
            </>
          ) : (
            <>
              <p>
                The questions in this section address a number of important math skills.
              </p>
              <p>
                Use of a calculator is permitted for all questions. You may use the built-in Desmos graphing calculator located in the top menu.
              </p>
              <p>
                A reference sheet with geometric formulas is accessible at any time from the top menu.
              </p>
              <p>
                For multiple-choice questions, solve each problem and choose the correct answer from the four choices provided.
              </p>
              <p>
                For student-produced response questions, solve each problem and enter your answer into the input box following the specific entry rules.
              </p>
              <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] text-xs space-y-1 text-slate-600 dark:text-slate-400">
                <span className="font-semibold text-slate-900 dark:text-white">Test Tips:</span>
                <div>• Answers may be entered as integers, decimals, or improper fractions (e.g., 7/2).</div>
                <div>• Mixed numbers such as 3 1/2 will not be accepted unless entered as 3.5 or 7/2.</div>
                <div>• Do not enter symbols such as $, %, or commas.</div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#181d2a] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-1.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold hover:opacity-90 transition"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
