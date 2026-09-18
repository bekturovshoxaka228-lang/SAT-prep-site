"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import {
  BookOpen,
  GraduationCap,
  Layers,
  ShieldAlert,
  LogOut,
  Sparkles,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

interface NavbarProps {
  username?: string;
  role?: string;
  onLogout?: () => void;
  variant?: "dashboard" | "practice" | "admin" | "minimal";
}

export function Navbar({ username, role, onLogout, variant = "dashboard" }: NavbarProps) {
  const pathname = usePathname();
  const isStaff = role === "admin" || role === "content_manager" || role === "moderator";

  return (
    <header className="border-b border-[#d2e2e9]/90 dark:border-[#003459]/90 bg-white/90 dark:bg-[#00171F]/90 backdrop-blur-md sticky top-0 z-40 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo & Brand */}
        <div className="flex items-center gap-6">
          <Link href="/dashboard" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#003459] via-[#007EA7] to-[#00A8E8] flex items-center justify-center font-black text-white shadow-md shadow-[#007EA7]/25 group-hover:scale-105 transition-transform">
              PS
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-[#00171F] dark:text-white text-base tracking-tight">
                  PrepSphere
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded font-mono font-semibold bg-[#007EA7]/10 text-[#007EA7] dark:bg-[#00263C] dark:text-[#00A8E8] border border-[#007EA7]/30">
                  AI PRO
                </span>
              </div>
              <span className="text-[11px] text-[#405157] dark:text-[#808B8F] font-medium">
                IELTS Academic &amp; Digital SAT
              </span>
            </div>
          </Link>

          {/* Center Links (if on dashboard or admin) */}
          {variant === "dashboard" && (
            <nav className="hidden md:flex items-center gap-1.5 ml-4 pl-4 border-l border-[#d2e2e9] dark:border-[#003459]">
              <Link
                href="/dashboard"
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  pathname === "/dashboard"
                    ? "bg-[#007EA7]/10 dark:bg-[#00263C] text-[#007EA7] dark:text-[#00A8E8] border border-[#007EA7]/25 shadow-sm"
                    : "text-[#405157] dark:text-[#808B8F] hover:text-[#007EA7] dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-[#00263C]/50"
                }`}
              >
                Dashboard
              </Link>
              <Link
                href="/flashcards"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  pathname === "/flashcards"
                    ? "bg-[#007EA7]/10 dark:bg-[#00263C] text-[#007EA7] dark:text-[#00A8E8] border border-[#007EA7]/25 shadow-sm"
                    : "text-[#405157] dark:text-[#808B8F] hover:text-[#007EA7] dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-[#00263C]/50"
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-[#00A8E8]" />
                <span>SM-2 Deck</span>
              </Link>
              <Link
                href="/practice/reading"
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-[#405157] dark:text-[#808B8F] hover:text-[#007EA7] dark:hover:text-[#00A8E8] hover:bg-[#007EA7]/10 dark:hover:bg-[#00263C]/40 transition"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#007EA7]" />
                <span>IELTS Hub</span>
              </Link>
              <Link
                href="/practice/sat-rw"
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-[#405157] dark:text-[#808B8F] hover:text-[#007EA7] dark:hover:text-[#00A8E8] hover:bg-[#007EA7]/10 dark:hover:bg-[#00263C]/40 transition"
              >
                <GraduationCap className="w-3.5 h-3.5 text-[#00A8E8]" />
                <span>SAT Hub</span>
              </Link>
            </nav>
          )}

          {variant === "admin" && (
            <nav className="hidden md:flex items-center gap-1 ml-4 pl-4 border-l border-[#d2e2e9] dark:border-[#003459]">
              <Link
                href="/admin/analytics"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  pathname === "/admin/analytics"
                    ? "bg-[#007EA7]/10 dark:bg-[#00263C] text-[#007EA7] dark:text-[#00A8E8] border border-[#007EA7]/30"
                    : "text-[#405157] dark:text-[#808B8F] hover:text-[#007EA7] dark:hover:text-white"
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" /> Analytics
              </Link>
              <Link
                href="/admin/tests"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  pathname === "/admin/tests"
                    ? "bg-[#007EA7]/10 dark:bg-[#00263C] text-[#007EA7] dark:text-[#00A8E8] border border-[#007EA7]/30"
                    : "text-[#405157] dark:text-[#808B8F] hover:text-[#007EA7] dark:hover:text-white"
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" /> Test Builder
              </Link>
              <Link
                href="/admin/writing-queue"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  pathname === "/admin/writing-queue"
                    ? "bg-[#007EA7]/10 dark:bg-[#00263C] text-[#007EA7] dark:text-[#00A8E8] border border-[#007EA7]/30"
                    : "text-[#405157] dark:text-[#808B8F] hover:text-[#007EA7] dark:hover:text-white"
                }`}
              >
                <ShieldAlert className="w-3.5 h-3.5" /> Writing Queue
              </Link>
            </nav>
          )}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Staff shortcut if on student view */}
          {isStaff && variant !== "admin" && (
            <Link
              href="/admin/analytics"
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-[#003459]/10 dark:bg-[#00263C] text-[#007EA7] dark:text-[#00A8E8] border border-[#007EA7]/30 hover:bg-[#007EA7]/15 transition"
            >
              <ShieldAlert className="w-3.5 h-3.5" /> Staff Portal
            </Link>
          )}

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* User profile info */}
          {username && (
            <div className="flex items-center gap-2 pl-2 border-l border-[#d2e2e9] dark:border-[#003459] text-xs">
              <div className="w-7 h-7 rounded-lg bg-[#007EA7]/15 dark:bg-[#00263C] text-[#007EA7] dark:text-[#00A8E8] border border-[#007EA7]/30 flex items-center justify-center font-bold text-xs uppercase">
                {username.slice(0, 2)}
              </div>
              <span className="hidden sm:inline font-medium text-[#00171F] dark:text-slate-200">
                @{username}
              </span>
            </div>
          )}

          {/* Sign Out Button */}
          {onLogout && (
            <button
              onClick={onLogout}
              title="Sign Out"
              className="p-2 text-[#808B8F] hover:text-rose-600 dark:text-[#808B8F] dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-xl transition"
            >
              <LogOut className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
