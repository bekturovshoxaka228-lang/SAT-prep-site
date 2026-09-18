"use client";

import React from "react";
import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
  showBadge?: boolean;
  className?: string;
  href?: string;
}

export function LogoMark({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      {/* Outer ambient glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#007EA7] to-[#00A8E8] opacity-30 blur-md transition-opacity group-hover:opacity-60" />

      {/* SVG Icon */}
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative w-full h-full drop-shadow-[0_2px_8px_rgba(0,168,232,0.35)] transition-transform duration-300 group-hover:scale-105"
      >
        <defs>
          <linearGradient id="psGrad1" x1="4" y1="4" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00A8E8" />
            <stop offset="50%" stopColor="#007EA7" />
            <stop offset="100%" stopColor="#003459" />
          </linearGradient>
          <linearGradient id="psGrad2" x1="6" y1="28" x2="30" y2="8" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#00A8E8" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="psGlow" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#00E5FF" />
            <stop offset="100%" stopColor="#00A8E8" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Squircle base plate */}
        <rect
          x="1"
          y="1"
          width="34"
          height="34"
          rx="11"
          fill="url(#psGrad1)"
        />
        {/* Subtle top edge glass shine */}
        <rect
          x="1"
          y="1"
          width="34"
          height="34"
          rx="11"
          stroke="url(#psGlow)"
          strokeWidth="1.2"
        />

        {/* Modern dynamic intertwining ribbons forming stylized 'P' and orbital sphere */}
        {/* Dynamic lower sweep */}
        <path
          d="M8.5 24.5C10 27 13.5 28 17.5 27.5C22.5 26.8 26.5 22.8 27.2 17.8C27.6 15 26.8 12.5 25 10.8"
          stroke="#FFFFFF"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeDasharray="0.1 0"
          className="opacity-90"
        />

        {/* Ascending apex ribbon */}
        <path
          d="M12 25V11C12 9.5 13.5 8.2 16.5 8.2C21.5 8.2 24.5 11 24.5 15.2C24.5 19.5 21 22 16.5 22H12"
          stroke="#FFFFFF"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Dynamic bright aqua accent overlay arc */}
        <path
          d="M16 12C18.8 12 20.8 13.3 20.8 15.2C20.8 17.2 18.8 18.5 16 18.5"
          stroke="url(#psGrad2)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Radiant spark in upper-right orbital */}
        <circle cx="26.5" cy="9.5" r="2.2" fill="url(#coreGlow)" />
        <circle cx="26.5" cy="9.5" r="1" fill="#FFFFFF" />
      </svg>
    </div>
  );
}

export function Logo({
  size = "md",
  showWordmark = true,
  showBadge = true,
  className = "",
  href = "/dashboard",
}: LogoProps) {
  const sizeClasses = {
    sm: { mark: "w-7 h-7", text: "text-sm", sub: "text-[10px]" },
    md: { mark: "w-8 h-8", text: "text-[15px]", sub: "text-[11px]" },
    lg: { mark: "w-10 h-10", text: "text-lg", sub: "text-xs" },
  }[size];

  const content = (
    <div className={`inline-flex items-center gap-2.5 select-none group ${className}`}>
      <LogoMark className={sizeClasses.mark} />

      {showWordmark && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span className={`font-semibold tracking-tight text-slate-900 dark:text-white ${sizeClasses.text}`}>
              Prep<span className="bg-gradient-to-r from-[#007EA7] via-[#00A8E8] to-[#38BDF8] bg-clip-text text-transparent">Sphere</span>
            </span>
            {showBadge && (
              <span className="px-1.5 py-0.5 rounded-full text-[9px] font-medium tracking-wide bg-sky-50 dark:bg-sky-950/50 text-[#007EA7] dark:text-[#00A8E8] border border-sky-200/60 dark:border-sky-800/40">
                AI
              </span>
            )}
          </div>
          <span className={`text-slate-400 dark:text-slate-500 font-normal tracking-normal mt-1 ${sizeClasses.sub}`}>
            IELTS &amp; Digital SAT
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="focus:outline-none">
        {content}
      </Link>
    );
  }

  return content;
}
