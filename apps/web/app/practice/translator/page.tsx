"use client";

import { useState } from "react";
import { Sidebar } from "@/components/sidebar";
import {
  Languages,
  Sparkles,
  ArrowRight,
  Copy,
  Check,
  RotateCcw,
  BookOpen,
  Award,
  Zap,
  Bookmark,
} from "lucide-react";

interface ParaphraseResult {
  band7: string;
  band8: string;
  band9: string;
  keyCollocations: string[];
  grammarNotes: string;
}

const PRESET_ACADEMIC_EXPRESSIONS = [
  {
    category: "Overview / Trends (Task 1)",
    original: "График показывает значительный рост в использовании смартфонов с 2010 по 2020 год.",
    band7: "The graph shows a substantial growth in smartphone usage from 2010 to 2020.",
    band8: "The line graph illustrates an exponential increase in smartphone adoption over the ten-year period between 2010 and 2020.",
    band9: "The diagram depicts a pronounced upward trajectory in mobile device penetration, with figures surging precipitously between 2010 and 2020.",
    collocations: ["exponential increase", "upward trajectory", "surging precipitously"],
  },
  {
    category: "Agree / Disagree (Task 2)",
    original: "Многие люди думают, что технологии делают людей ленивыми и вредят общению.",
    band7: "Many people believe that technology makes individuals lazy and harms communication.",
    band8: "A considerable proportion of society contends that digital devices encourage sedentary habits and impair interpersonal communication.",
    band9: "It is widely postulated that burgeoning technological reliance fosters domestic lethargy whilst eroding the fabric of face-to-face interpersonal discourse.",
    collocations: ["fosters domestic lethargy", "eroding the fabric of", "interpersonal discourse"],
  },
  {
    category: "Cause & Effect",
    original: "Глобальное потепление приводит к наводнениям и потере урожая во многих странах.",
    band7: "Global warming causes floods and harvest loss in numerous countries.",
    band8: "Climate change triggers severe inundations and agricultural yield failures across multiple regions.",
    band9: "Anthropogenic climate disruption precipitates catastrophic hydrological surges and culminates in catastrophic agricultural deficit globally.",
    collocations: ["precipitates catastrophic", "agricultural yield failures", "anthropogenic disruption"],
  },
];

export default function AcademicTranslatorPage() {
  const [inputText, setInputText] = useState("");
  const [copiedBand, setCopiedBand] = useState<string | null>(null);
  const [activePreset, setActivePreset] = useState<number | null>(0);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedBand(label);
    setTimeout(() => setCopiedBand(null), 2000);
  };

  const handleSelectPreset = (idx: number) => {
    setActivePreset(idx);
    setInputText(PRESET_ACADEMIC_EXPRESSIONS[idx].original);
  };

  const currentPreset = activePreset !== null ? PRESET_ACADEMIC_EXPRESSIONS[activePreset] : null;

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-[#070a12] text-slate-900 dark:text-slate-100 overflow-hidden font-sans">
      <Sidebar />

      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Header banner */}
        <header className="px-6 py-6 border-b border-slate-200/70 dark:border-white/[0.07] bg-white/70 dark:bg-[#090d16]/70 backdrop-blur-md sticky top-0 z-20">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase bg-sky-100 text-[#007EA7] dark:bg-sky-950/60 dark:text-[#00A8E8]">
                  IELTS Academic Assistant
                </span>
                <span className="text-xs text-slate-400 dark:text-slate-500">•</span>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Lexical Resource Band 7.0–9.0
                </span>
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2.5">
                <Languages className="w-6 h-6 text-[#00A8E8]" />
                Academic Translator & Paraphraser
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Преобразуйте простые фразы и мысли в академические формулировки уровня Band 7.0, 8.0 и 9.0 для Task 1 и Task 2.
              </p>
            </div>
          </div>
        </header>

        <div className="max-w-6xl mx-auto w-full p-6 space-y-6">
          {/* Quick preset selector */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Популярные академические шаблоны:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {PRESET_ACADEMIC_EXPRESSIONS.map((preset, idx) => (
                <button
                  key={preset.category}
                  onClick={() => handleSelectPreset(idx)}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    activePreset === idx
                      ? "border-[#007EA7] dark:border-[#00A8E8] bg-sky-50/70 dark:bg-sky-950/30 shadow-sm"
                      : "border-slate-200/80 dark:border-white/[0.07] bg-white dark:bg-[#0c121e] hover:border-slate-300 dark:hover:border-white/10"
                  }`}
                >
                  <span className="text-[11px] font-bold text-[#007EA7] dark:text-[#00A8E8] block mb-1">
                    {preset.category}
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
                    {preset.original}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Input Box */}
          <div className="p-5 rounded-3xl bg-white dark:bg-[#0c121e] border border-slate-200/80 dark:border-white/[0.07] shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-[#00A8E8]" />
                Исходная фраза или мысль:
              </label>
              <button
                onClick={() => {
                  setInputText("");
                  setActivePreset(null);
                }}
                className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" /> Очистить
              </button>
            </div>

            <textarea
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value);
                setActivePreset(null);
              }}
              rows={3}
              placeholder="Введите предложение на русском или простом английском языке..."
              className="w-full p-3.5 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02] text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#007EA7]/20 focus:border-[#007EA7] transition"
            />
          </div>

          {/* Academic Paraphrasing Levels (Band 7, 8, 9) */}
          {currentPreset && (
            <div className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500" />
                Академические трансформации по Band Descriptors:
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Band 7 */}
                <div className="p-5 rounded-3xl bg-white dark:bg-[#0c121e] border border-slate-200/80 dark:border-white/[0.07] flex flex-col justify-between space-y-4 shadow-sm hover:border-slate-300 transition">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300">
                        Band 7.0
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium">Clear & Formal</span>
                    </div>
                    <p className="text-sm text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                      "{currentPreset.band7}"
                    </p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(currentPreset.band7, "band7")}
                    className="w-full py-2 px-3 rounded-xl border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/[0.04] text-xs font-semibold text-slate-600 dark:text-slate-300 flex items-center justify-center gap-1.5 transition"
                  >
                    {copiedBand === "band7" ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" /> Скопировано
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" /> Скопировать
                      </>
                    )}
                  </button>
                </div>

                {/* Band 8 */}
                <div className="p-5 rounded-3xl bg-white dark:bg-[#0c121e] border border-sky-300 dark:border-sky-800/60 flex flex-col justify-between space-y-4 shadow-sm hover:border-sky-400 transition relative overflow-hidden">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-sky-100 text-[#007EA7] dark:bg-sky-950/60 dark:text-[#00A8E8]">
                        Band 8.0
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium">Sophisticated Range</span>
                    </div>
                    <p className="text-sm text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                      "{currentPreset.band8}"
                    </p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(currentPreset.band8, "band8")}
                    className="w-full py-2 px-3 rounded-xl bg-sky-50 dark:bg-sky-950/40 hover:bg-sky-100 dark:hover:bg-sky-900/50 text-xs font-semibold text-[#007EA7] dark:text-[#00A8E8] flex items-center justify-center gap-1.5 transition"
                  >
                    {copiedBand === "band8" ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" /> Скопировано
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" /> Скопировать
                      </>
                    )}
                  </button>
                </div>

                {/* Band 9 */}
                <div className="p-5 rounded-3xl bg-white dark:bg-[#0c121e] border border-purple-300 dark:border-purple-800/60 flex flex-col justify-between space-y-4 shadow-sm hover:border-purple-400 transition relative overflow-hidden">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300">
                        Band 9.0
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium">Native-Level Elegance</span>
                    </div>
                    <p className="text-sm text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                      "{currentPreset.band9}"
                    </p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(currentPreset.band9, "band9")}
                    className="w-full py-2 px-3 rounded-xl bg-purple-50 dark:bg-purple-950/40 hover:bg-purple-100 dark:hover:bg-purple-900/50 text-xs font-semibold text-purple-700 dark:text-purple-300 flex items-center justify-center gap-1.5 transition"
                  >
                    {copiedBand === "band9" ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" /> Скопировано
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" /> Скопировать
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Collocations pill bar */}
              <div className="p-4 rounded-2xl bg-white dark:bg-[#0c121e] border border-slate-200/80 dark:border-white/[0.07] flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mr-2">
                  <Zap className="w-3.5 h-3.5 text-amber-500" /> Ключевые коллокации (Band 8+):
                </span>
                {currentPreset.collocations.map((col) => (
                  <span
                    key={col}
                    className="px-2.5 py-1 rounded-xl text-xs font-mono font-semibold bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-slate-300"
                  >
                    {col}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
