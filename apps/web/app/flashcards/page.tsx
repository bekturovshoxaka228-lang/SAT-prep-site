"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { api, FlashcardItem } from "@/lib/api";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  ArrowLeft,
  RotateCw,
  CheckCircle2,
  Sparkles,
  AlertCircle,
  Loader2,
  Layers,
  HelpCircle,
  Eye,
} from "lucide-react";

export default function FlashcardsPage() {
  const [cards, setCards] = useState<FlashcardItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reviewedCount, setReviewedCount] = useState(0);

  useEffect(() => {
    async function fetchCards() {
      try {
        const res = await api.flashcards.due();
        if (res.ok && res.data) {
          setCards(res.data.items);
        }
      } catch (err) {
        console.error("Failed to load flashcards", err);
      } finally {
        setLoading(false);
      }
    }
    fetchCards();
  }, []);

  const handleRating = async (quality: number) => {
    if (isSubmitting || cards.length === 0) return;
    const currentCard = cards[currentIndex];
    setIsSubmitting(true);

    try {
      await api.flashcards.review(currentCard.id, quality);
      setFlipped(false);
      setReviewedCount((prev) => prev + 1);
      setCurrentIndex((prev) => prev + 1);
    } catch (err) {
      console.error("Failed to submit rating", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] flex flex-col items-center justify-center text-slate-500 dark:text-slate-400">
        <Loader2 className="w-8 h-8 animate-spin text-sky-500 mb-3" />
        <span className="text-sm font-medium">Loading SM-2 spaced repetition cards...</span>
      </div>
    );
  }

  const isDeckCompleted = currentIndex >= cards.length;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-200">
      {/* Navigation header */}
      <header className="border-b border-slate-200/70 dark:border-white/[0.07] bg-white/80 dark:bg-[#090d16]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>

          <div className="flex items-center gap-3">
            <div className="text-xs font-semibold px-3 py-1 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>SM-2 Spaced Repetition</span>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Card area */}
      <main className="flex-1 max-w-2xl w-full mx-auto px-4 py-8 sm:py-12 flex flex-col justify-center">
        {isDeckCompleted ? (
          <div className="text-center p-8 sm:p-10 bg-white dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/[0.07] rounded-3xl shadow-sm backdrop-blur-sm">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mx-auto flex items-center justify-center mb-4">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2 tracking-tight">
              All due cards completed!
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto mb-6 leading-relaxed">
              You reviewed <strong className="text-slate-900 dark:text-white font-semibold">{reviewedCount} flashcards</strong> in this session. The SM-2 spaced repetition engine has scheduled your next optimal review intervals.
            </p>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 text-white text-xs font-semibold transition-all shadow-sm"
            >
              Return to Dashboard
            </Link>
          </div>
        ) : (
          <div>
            {/* Progress counter & Deck tag */}
            <div className="flex items-center justify-between text-xs text-slate-400 dark:text-slate-500 mb-3">
              <span className="font-medium">
                Card {currentIndex + 1} of {cards.length}
              </span>
              <span className="capitalize px-3 py-0.5 bg-slate-100 dark:bg-white/[0.04] rounded-full text-slate-600 dark:text-slate-300 font-medium text-[11px] border border-slate-200/70 dark:border-white/[0.08]">
                {cards[currentIndex].deck} Deck
              </span>
            </div>

            {/* Flashcard container */}
            <div
              onClick={() => setFlipped(!flipped)}
              className="min-h-[300px] sm:min-h-[360px] bg-white dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/[0.07] hover:border-sky-500/30 dark:hover:border-sky-500/30 p-8 rounded-3xl shadow-sm backdrop-blur-sm flex flex-col justify-between cursor-pointer transition-all select-none relative group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-widest font-semibold text-slate-400 dark:text-slate-500">
                  {flipped ? "Answer / Definition" : "Term / Question"}
                </span>
                <span className="text-xs text-slate-400 group-hover:text-sky-600 dark:group-hover:text-sky-400 flex items-center gap-1.5 transition">
                  <RotateCw className="w-3.5 h-3.5" /> Click to flip
                </span>
              </div>

              <div className="my-auto py-8 text-center px-4">
                <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white tracking-tight leading-snug">
                  {flipped ? cards[currentIndex].back : cards[currentIndex].front}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5 justify-center">
                {cards[currentIndex].tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/[0.04] text-slate-500 dark:text-slate-400 font-mono border border-slate-200/60 dark:border-white/[0.06]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Rating controls (Shown after flip) */}
            {flipped ? (
              <div className="mt-6 bg-white dark:bg-white/[0.03] p-5 rounded-3xl border border-slate-200/70 dark:border-white/[0.07] shadow-sm transition-all">
                <div className="text-xs text-center font-medium text-slate-500 dark:text-slate-400 mb-3">
                  How well did you recall this item? (SM-2 Quality 0 - 5)
                </div>
                <div className="grid grid-cols-6 gap-2">
                  {[
                    {
                      q: 0,
                      label: "0",
                      sub: "Blackout",
                      color:
                        "bg-rose-50 hover:bg-rose-100 border-rose-200/70 text-rose-700 dark:bg-rose-950/40 dark:border-rose-900/60 dark:text-rose-300",
                    },
                    {
                      q: 1,
                      label: "1",
                      sub: "Forgot",
                      color:
                        "bg-rose-50 hover:bg-rose-100 border-rose-200/70 text-rose-700 dark:bg-rose-950/30 dark:border-rose-900/50 dark:text-rose-300",
                    },
                    {
                      q: 2,
                      label: "2",
                      sub: "Hard",
                      color:
                        "bg-amber-50 hover:bg-amber-100 border-amber-200/70 text-amber-700 dark:bg-amber-950/40 dark:border-amber-900/60 dark:text-amber-300",
                    },
                    {
                      q: 3,
                      label: "3",
                      sub: "Good",
                      color:
                        "bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-800 dark:bg-white/[0.05] dark:border-white/[0.08] dark:text-slate-200",
                    },
                    {
                      q: 4,
                      label: "4",
                      sub: "Easy",
                      color:
                        "bg-sky-50 hover:bg-sky-100 border-sky-200/70 text-sky-700 dark:bg-sky-950/40 dark:border-sky-900/60 dark:text-sky-300",
                    },
                    {
                      q: 5,
                      label: "5",
                      sub: "Perfect",
                      color:
                        "bg-emerald-50 hover:bg-emerald-100 border-emerald-200/70 text-emerald-700 dark:bg-emerald-950/40 dark:border-emerald-900/60 dark:text-emerald-300",
                    },
                  ].map((btn) => (
                    <button
                      key={btn.q}
                      type="button"
                      disabled={isSubmitting}
                      onClick={() => handleRating(btn.q)}
                      className={`p-2.5 rounded-2xl border flex flex-col items-center justify-center transition active:scale-95 disabled:opacity-50 ${btn.color}`}
                    >
                      <span className="font-semibold text-sm sm:text-base">{btn.label}</span>
                      <span className="text-[10px] opacity-75 hidden sm:inline">{btn.sub}</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mt-4 text-center">
                <button
                  type="button"
                  onClick={() => setFlipped(true)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline"
                >
                  <Eye className="w-3.5 h-3.5" /> Show Answer & Rate Recall
                </button>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
