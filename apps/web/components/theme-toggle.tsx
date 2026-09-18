"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "./theme-provider";
import { Sun, Moon, Laptop, Check } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
  variant?: "icon" | "segmented" | "dropdown";
}

export function ThemeToggle({
  className = "",
  variant = "icon",
}: ThemeToggleProps) {
  const { theme, resolvedTheme, setTheme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-xl bg-slate-200/60 dark:bg-[#00263C] border border-[#d2e2e9] dark:border-[#003459] ${className}`}
      />
    );
  }

  // Segmented control (useful for settings or headers)
  if (variant === "segmented") {
    return (
      <div
        className={`inline-flex items-center p-1 rounded-xl bg-slate-100 dark:bg-[#00263C] border border-[#d2e2e9] dark:border-[#003459] text-xs font-medium text-[#405157] dark:text-[#808B8F] ${className}`}
      >
        <button
          type="button"
          onClick={() => setTheme("light")}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-all ${
            theme === "light"
              ? "bg-white text-[#00171F] shadow-sm font-semibold dark:bg-[#003459] dark:text-white"
              : "hover:text-[#00171F] dark:hover:text-white"
          }`}
          title="Light theme"
        >
          <Sun className="w-3.5 h-3.5 text-amber-500" />
          <span>Light</span>
        </button>
        <button
          type="button"
          onClick={() => setTheme("dark")}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-all ${
            theme === "dark"
              ? "bg-white text-[#00171F] shadow-sm font-semibold dark:bg-[#003459] dark:text-white"
              : "hover:text-[#00171F] dark:hover:text-white"
          }`}
          title="Dark theme"
        >
          <Moon className="w-3.5 h-3.5 text-[#00A8E8]" />
          <span>Dark</span>
        </button>
        <button
          type="button"
          onClick={() => setTheme("system")}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-all ${
            theme === "system"
              ? "bg-white text-[#00171F] shadow-sm font-semibold dark:bg-[#003459] dark:text-white"
              : "hover:text-[#00171F] dark:hover:text-white"
          }`}
          title="System theme"
        >
          <Laptop className="w-3.5 h-3.5 text-[#808B8F]" />
          <span>Auto</span>
        </button>
      </div>
    );
  }

  // Dropdown variant
  if (variant === "dropdown") {
    return (
      <div className={`relative inline-block ${className}`} ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-[#00263C] dark:hover:bg-[#003459] border border-[#d2e2e9] dark:border-[#003459] text-[#405157] dark:text-[#808B8F] transition-all shadow-sm"
          title="Change color theme"
          aria-label="Toggle theme"
        >
          {resolvedTheme === "dark" ? (
            <Moon className="w-4 h-4 text-[#00A8E8] animate-in spin-in-90 duration-300" />
          ) : (
            <Sun className="w-4 h-4 text-amber-500 animate-in spin-in-90 duration-300" />
          )}
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-36 py-1.5 rounded-xl bg-white dark:bg-[#00263C] border border-[#d2e2e9] dark:border-[#003459] shadow-xl z-50 animate-in fade-in-50 zoom-in-95 duration-150">
            <button
              type="button"
              onClick={() => {
                setTheme("light");
                setIsOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium transition ${
                theme === "light"
                  ? "text-[#007EA7] dark:text-[#00A8E8] bg-[#007EA7]/10 dark:bg-[#003459]/50 font-bold"
                  : "text-[#405157] dark:text-[#808B8F] hover:bg-slate-50 dark:hover:bg-[#003459]/40"
              }`}
            >
              <span className="flex items-center gap-2">
                <Sun className="w-3.5 h-3.5 text-amber-500" /> Light
              </span>
              {theme === "light" && <Check className="w-3.5 h-3.5 text-[#007EA7]" />}
            </button>

            <button
              type="button"
              onClick={() => {
                setTheme("dark");
                setIsOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium transition ${
                theme === "dark"
                  ? "text-[#007EA7] dark:text-[#00A8E8] bg-[#007EA7]/10 dark:bg-[#003459]/50 font-bold"
                  : "text-[#405157] dark:text-[#808B8F] hover:bg-slate-50 dark:hover:bg-[#003459]/40"
              }`}
            >
              <span className="flex items-center gap-2">
                <Moon className="w-3.5 h-3.5 text-[#00A8E8]" /> Dark
              </span>
              {theme === "dark" && <Check className="w-3.5 h-3.5 text-[#00A8E8]" />}
            </button>

            <button
              type="button"
              onClick={() => {
                setTheme("system");
                setIsOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium transition ${
                theme === "system"
                  ? "text-[#007EA7] dark:text-[#00A8E8] bg-[#007EA7]/10 dark:bg-[#003459]/50 font-bold"
                  : "text-[#405157] dark:text-[#808B8F] hover:bg-slate-50 dark:hover:bg-[#003459]/40"
              }`}
            >
              <span className="flex items-center gap-2">
                <Laptop className="w-3.5 h-3.5 text-[#808B8F]" /> System
              </span>
              {theme === "system" && <Check className="w-3.5 h-3.5 text-[#007EA7]" />}
            </button>
          </div>
        )}
      </div>
    );
  }

  // Quick single-click toggle variant
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`group relative flex items-center justify-center w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-[#00263C] dark:hover:bg-[#003459] border border-[#d2e2e9] dark:border-[#003459] text-[#405157] dark:text-[#808B8F] transition-all shadow-sm ${className}`}
      title={
        resolvedTheme === "dark"
          ? "Switch to Light theme"
          : "Switch to Dark theme"
      }
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="w-4 h-4 text-amber-400 transition-transform group-hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-[#007EA7] transition-transform group-hover:-rotate-12" />
      )}
    </button>
  );
}
