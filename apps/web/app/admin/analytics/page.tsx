"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { api } from "@/lib/api";
import { Navbar } from "@/components/navbar";
import {
  Users,
  CheckCircle2,
  Activity,
  FileCheck,
  BookOpen,
  ArrowLeft,
  ShieldCheck,
  PenTool,
  Calendar,
  Layers,
  Loader2,
  BarChart3,
  TrendingUp,
} from "lucide-react";

export default function AdminAnalyticsPage() {
  const [stats, setStats] = useState<{
    users_total: number;
    users_onboarded: number;
    attempts_today: number;
    writing_queue_pending: number;
    exams_published: number;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStats() {
      try {
        const res = await api.admin.stats();
        if (res.ok && res.data) {
          setStats(res.data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadStats();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center text-slate-500 dark:text-slate-400">
        <Loader2 className="w-9 h-9 animate-spin text-amber-500 mb-3" />
        <span className="text-sm font-medium">Loading Admin Analytics...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-200">
      {/* Admin Navbar */}
      <Navbar variant="admin" role="admin" username="admin" />

      {/* Main Stats Grid */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800/60">
                Staff Control Plane
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Platform Health & Analytics
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
              Real-time aggregate performance metrics for IELTS and Digital SAT cohorts.
            </p>
          </div>

          <Link
            href="/dashboard"
            className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Return to Student View
          </Link>
        </div>

        {stats && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="p-5 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-lg">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3.5 shadow-sm">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-3xl font-extrabold text-slate-900 dark:text-white">{stats.users_total}</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider font-bold">
                Total Students
              </div>
            </div>

            <div className="p-5 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-lg">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3.5 shadow-sm">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                {stats.users_onboarded}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider font-bold">
                Fully Onboarded
              </div>
            </div>

            <div className="p-5 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-lg">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-3.5 shadow-sm">
                <Activity className="w-5 h-5" />
              </div>
              <div className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
                {stats.attempts_today}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider font-bold">
                Attempts Today
              </div>
            </div>

            <div className="p-5 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-lg">
              <div className="w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3.5 shadow-sm">
                <FileCheck className="w-5 h-5" />
              </div>
              <div className="text-3xl font-extrabold text-amber-600 dark:text-amber-400">
                {stats.writing_queue_pending}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider font-bold">
                HITL Writing Queue
              </div>
            </div>

            <div className="p-5 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-lg">
              <div className="w-10 h-10 rounded-2xl bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-3.5 shadow-sm">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="text-3xl font-extrabold text-rose-600 dark:text-rose-400">
                {stats.exams_published}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider font-bold">
                Published Exams
              </div>
            </div>
          </div>
        )}

        {/* Quick actions for staff */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-lg space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center shadow-sm">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Test Builder & Simulator CMS
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Create and publish official IELTS sections (audio cues, reading texts, prompts) and Digital SAT adaptive modules (Math grid-in, Reading & Writing).
            </p>
            <Link
              href="/admin/tests"
              className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white transition shadow-md shadow-rose-600/20"
            >
              Open Test Builder
            </Link>
          </div>

          <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-lg space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shadow-sm">
              <PenTool className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Human-in-the-Loop Writing Review
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Review and override AI grading for IELTS Task 1 & Task 2 across official criteria (Task Achievement, Coherence, Lexical, Grammar).
            </p>
            <Link
              href="/admin/writing-queue"
              className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition shadow-md shadow-blue-600/20"
            >
              Review Writing Queue
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
