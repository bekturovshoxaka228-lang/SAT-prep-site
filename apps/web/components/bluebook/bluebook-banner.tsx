"use client";

import React from "react";

interface BluebookBannerProps {
  label?: string;
}

export function BluebookBanner({ label = "THIS IS A PRACTICE TEST" }: BluebookBannerProps) {
  return (
    <div className="w-full relative select-none">
      {/* Dashed white/grey top marker track as in Bluebook */}
      <div className="w-full h-1.5 bg-[#141b36] flex items-center justify-between px-1 overflow-hidden opacity-90">
        <div className="w-full border-t-[2px] border-dashed border-white/40 tracking-[4px]" />
      </div>

      {/* Navy blue strip */}
      <div className="w-full bg-[#182348] text-white py-1.5 px-4 text-center">
        <span className="text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-white/95">
          {label}
        </span>
      </div>
    </div>
  );
}
