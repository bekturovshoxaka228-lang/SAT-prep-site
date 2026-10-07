"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { Logo } from "./logo";
import { api } from "@/lib/api";
import {
  LayoutDashboard,
  BookOpen,
  Headphones,
  PenTool,
  MessageSquare,
  Languages,
  FileEdit,
  Calculator,
  Award,
  Layers,
  ShieldAlert,
  LogOut,
  Menu,
  X,
  ArrowRightLeft,
} from "lucide-react";
import { useExamMode } from "@/lib/exam-mode-context";

interface SidebarProps {
  username?: string;
  role?: string;
  onLogout?: () => void;
}

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

interface NavGroup {
  group: string;
  tag?: string;
  items: NavItem[];
}

export function Sidebar({ username: initialUsername, role: initialRole, onLogout }: SidebarProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [username, setUsername] = useState(initialUsername || "student");
  const [role, setRole] = useState(initialRole || "student");

  useEffect(() => {
    if (!initialUsername) {
      api.auth.me().then((res) => {
        if (res.ok && res.data) {
          setUsername(res.data.username);
          setRole(res.data.role);
        }
      }).catch(() => {});
    }
  }, [initialUsername]);

  const handleLogout = async () => {
    if (onLogout) {
      onLogout();
    } else {
      try {
        await api.auth.logout();
      } finally {
        window.location.href = "/login";
      }
    }
  };

  const { mode, toggleMode } = useExamMode();
  const isStaff = role === "admin" || role === "content_manager" || role === "moderator";

  // Dynamic Navigation based on active exam mode
  const navItems: NavGroup[] = [
    {
      group: mode === "SAT" ? "DIGITAL SAT TRACK" : "IELTS ACADEMIC TRACK",
      tag: mode,
      items:
        mode === "SAT"
          ? [
              {
                name: "Dashboard",
                href: "/dashboard",
                icon: LayoutDashboard,
              },
              {
                name: "Reading & Writing",
                href: "/practice/sat-rw",
                icon: FileEdit,
              },
              {
                name: "Math",
                href: "/practice/sat-math",
                icon: Calculator,
              },
              {
                name: "Full Mocks",
                href: "/practice/mocks",
                icon: Award,
              },
              {
                name: "Flashcards",
                href: "/flashcards",
                icon: Layers,
              },
            ]
          : [
              {
                name: "Dashboard",
                href: "/dashboard",
                icon: LayoutDashboard,
              },
              {
                name: "Reading",
                href: "/practice/reading",
                icon: BookOpen,
              },
              {
                name: "Listening",
                href: "/practice/listening",
                icon: Headphones,
              },
              {
                name: "Writing",
                href: "/practice/writing",
                icon: PenTool,
              },
              {
                name: "Speaking",
                href: "/practice/speaking",
                icon: MessageSquare,
              },
              {
                name: "Translator",
                href: "/practice/translator",
                icon: Languages,
              },
            ],
    },
  ];

  if (isStaff) {
    navItems.push({
      group: "ADMIN",
      items: [
        {
          name: "Staff Analytics",
          href: "/admin/analytics",
          icon: ShieldAlert,
        },
      ],
    });
  }

  const sidebarContent = (
    <div className="flex flex-col h-full bg-white dark:bg-[#090d16] border-r border-slate-200/70 dark:border-white/[0.07] w-64 select-none transition-colors duration-200">
      {/* Brand Header */}
      <div className="p-5 border-b border-slate-100 dark:border-white/[0.05] flex items-center justify-between">
        <Logo size="md" href="/dashboard" />

        {mobileOpen && (
          <button
            onClick={() => setMobileOpen(false)}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition md:hidden"
          >
            <X className="w-5 h-5" strokeWidth={1.75} />
          </button>
        )}
      </div>

      {/* Mode Switcher Pill */}
      <div className="px-3 pt-3 pb-1">
        <button
          onClick={toggleMode}
          className="w-full flex items-center justify-between px-3 py-2 rounded-2xl bg-slate-50 dark:bg-white/[0.03] hover:bg-slate-100 dark:hover:bg-white/[0.06] border border-slate-200/60 dark:border-white/[0.06] text-xs font-semibold text-slate-700 dark:text-slate-300 transition-all group"
          title="Нажмите для переключения между Digital SAT и IELTS Academic"
        >
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${mode === "SAT" ? "bg-[#007EA7]" : "bg-[#00A8E8]"}`} />
            <span className="font-semibold text-xs">
              {mode === "SAT" ? "Digital SAT Track" : "IELTS Academic Track"}
            </span>
          </div>
          <ArrowRightLeft className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#007EA7] dark:group-hover:text-[#00A8E8] transition-colors" />
        </button>
      </div>

      {/* Navigation list */}
      <div className="flex-1 overflow-y-auto py-5 px-3 space-y-5">
        {navItems.map((sec) => (
          <div key={sec.group}>
            <div className="px-3 mb-1.5 flex items-center justify-between">
              <span className="text-[10px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase">
                {sec.group}
              </span>
              {sec.tag && (
                <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-md font-mono bg-slate-100 dark:bg-white/[0.06] text-slate-500 dark:text-slate-400">
                  {sec.tag}
                </span>
              )}
            </div>
            <nav className="space-y-0.5">
              {sec.items.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/dashboard" &&
                    item.href !== "/practice/sat" &&
                    pathname.startsWith(item.href)) ||
                  (item.href === "/practice/sat" &&
                    (pathname === "/practice/sat" || pathname.startsWith("/practice/sat?")));
                const Icon = item.icon;

                return (
                  <Link
                    key={`${item.name}-${item.href}`}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`group flex items-center justify-between px-3 py-2 rounded-2xl text-xs font-medium transition-all ${
                      isActive
                        ? "bg-sky-50 dark:bg-sky-950/40 text-[#007EA7] dark:text-[#00A8E8] font-semibold"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-100/70 dark:hover:bg-white/[0.04] hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-7 h-7 rounded-xl flex items-center justify-center transition-colors ${
                          isActive
                            ? "bg-[#007EA7]/10 dark:bg-[#00A8E8]/15 text-[#007EA7] dark:text-[#00A8E8]"
                            : "text-slate-400 group-hover:text-[#007EA7] dark:group-hover:text-[#00A8E8]"
                        }`}
                      >
                        <Icon className="w-4 h-4" strokeWidth={1.75} />
                      </div>
                      <span>{item.name}</span>
                    </div>
                  </Link>
                );
              })}
            </nav>
          </div>
        ))}
      </div>

      {/* User & Theme Footer */}
      <div className="p-3 border-t border-slate-100 dark:border-white/[0.05] space-y-2">
        <div className="flex items-center justify-between px-2">
          <span className="text-[11px] font-medium text-slate-400">
            Theme
          </span>
          <ThemeToggle />
        </div>

        <div className="flex items-center justify-between p-2 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-100 dark:border-white/[0.05]">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-[#007EA7]/20 to-[#00A8E8]/20 text-[#007EA7] dark:text-[#00A8E8] flex items-center justify-center font-bold text-xs uppercase">
              {username.slice(0, 2)}
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate max-w-[100px]">
                @{username}
              </span>
              <span className="text-[10px] text-slate-400 capitalize">
                {role || "Student"}
              </span>
            </div>
          </div>

          <button
            onClick={handleLogout}
            title="Sign Out"
            className="p-1.5 text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-xl transition"
          >
            <LogOut className="w-4 h-4" strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Left Sidebar */}
      <aside className="hidden md:flex flex-col h-screen sticky top-0 z-30 shrink-0">
        {sidebarContent}
      </aside>

      {/* Mobile Top Header with Menu Button */}
      <div className="md:hidden sticky top-0 z-40 flex items-center justify-between px-4 h-14 bg-white/95 dark:bg-[#090d16]/95 border-b border-slate-200/70 dark:border-white/[0.07] backdrop-blur-md">
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/[0.05]"
            aria-label="Open navigation"
          >
            <Menu className="w-5 h-5" strokeWidth={1.75} />
          </button>
          <Logo size="sm" href="/dashboard" />
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Slide-over Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative z-10 w-64 max-w-[80vw] h-full shadow-2xl animate-in slide-in-from-left duration-200">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
