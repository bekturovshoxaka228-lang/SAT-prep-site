"use client";

import { useState, useEffect, useMemo, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  ArrowLeft,
  Clock,
  CheckCircle2,
  Play,
  Pause,
  RotateCcw,
  Save,
  Send,
  Sparkles,
  BarChart3,
  LineChart,
  PieChart,
  Table2,
  GitMerge,
  MapPin,
} from "lucide-react";
import { IELTS_WRITING_TASKS } from "@/lib/ielts-writing-tasks";
import { ExaminerReviewModal } from "@/components/ielts-examiner-window";

const TASKS_DATA = IELTS_WRITING_TASKS;


function WritingVisualExhibit({ type }: { type: string }) {
  if (type === "bar") {
    return (
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
        <div className="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200">
          <span className="flex items-center gap-1.5">
            <BarChart3 className="w-4 h-4 text-blue-500" /> Renewable Electricity Share by Country (%)
          </span>
          <span className="text-[10px] text-slate-400 font-mono">Official Source: IEA 2024</span>
        </div>

        {/* Bar Chart Visual Representation */}
        <div className="space-y-2.5 pt-2">
          {[
            { country: "Germany", wind: 32, solar: 22, hydro: 6, total: 60 },
            { country: "United Kingdom", wind: 29, solar: 11, hydro: 3, total: 43 },
            { country: "China", wind: 15, solar: 18, hydro: 16, total: 49 },
            { country: "United States", wind: 12, solar: 10, hydro: 7, total: 29 },
          ].map((item) => (
            <div key={item.country} className="space-y-1">
              <div className="flex justify-between text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                <span>{item.country}</span>
                <span className="font-mono text-rose-600 dark:text-rose-400 font-bold">{item.total}% Total</span>
              </div>
              <div className="w-full h-5 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden flex shadow-inner">
                <div style={{ width: `${item.wind}%` }} className="bg-sky-500 h-full" title={`Wind: ${item.wind}%`} />
                <div style={{ width: `${item.solar}%` }} className="bg-amber-400 h-full" title={`Solar: ${item.solar}%`} />
                <div style={{ width: `${item.hydro}%` }} className="bg-teal-500 h-full" title={`Hydro: ${item.hydro}%`} />
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-4 pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] font-medium text-slate-600 dark:text-slate-400">
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-sm bg-sky-500 inline-block" /> Wind Power
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-sm bg-amber-400 inline-block" /> Solar PV
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-sm bg-teal-500 inline-block" /> Hydroelectric
          </span>
        </div>
      </div>
    );
  }

  if (type === "line") {
    return (
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
        <div className="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200">
          <span className="flex items-center gap-1.5">
            <LineChart className="w-4 h-4 text-emerald-500" /> Air Passengers Trajectory (Millions / Year)
          </span>
          <span className="text-[10px] text-slate-400 font-mono">1990 - 2020</span>
        </div>

        <div className="grid grid-cols-4 gap-2 pt-1 text-center">
          {[
            { year: "1990", eu: "180M", na: "210M", ap: "85M" },
            { year: "2000", eu: "290M", na: "320M", ap: "160M" },
            { year: "2015", eu: "470M", na: "440M", ap: "490M" },
            { year: "2020", eu: "140M", na: "180M", ap: "190M" },
          ].map((row) => (
            <div key={row.year} className="p-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
              <span className="font-bold text-xs text-slate-800 dark:text-slate-200 block mb-1">{row.year}</span>
              <div className="space-y-0.5 text-[10px]">
                <div className="text-emerald-600 dark:text-emerald-400 font-mono">EU: {row.eu}</div>
                <div className="text-blue-600 dark:text-blue-400 font-mono">NA: {row.na}</div>
                <div className="text-purple-600 dark:text-purple-400 font-mono">AP: {row.ap}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] font-medium text-slate-600 dark:text-slate-400">
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">• Europe</span>
          <span className="text-blue-600 dark:text-blue-400 font-bold">• North America</span>
          <span className="text-purple-600 dark:text-purple-400 font-bold">• Asia-Pacific</span>
        </div>
      </div>
    );
  }

  if (type === "pie") {
    return (
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
        <div className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
          <PieChart className="w-4 h-4 text-purple-500" /> Domestic Energy Proportion Breakdown
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 text-center">
            <span className="font-bold text-xs text-slate-800 dark:text-slate-200 block mb-2">Year 2010</span>
            <div className="space-y-1 text-[11px] text-left">
              <div className="flex justify-between"><span>Space Heating:</span> <span className="font-mono font-bold">52%</span></div>
              <div className="flex justify-between"><span>Water Heating:</span> <span className="font-mono font-bold">18%</span></div>
              <div className="flex justify-between"><span>Electronics:</span> <span className="font-mono font-bold">15%</span></div>
              <div className="flex justify-between"><span>Lighting:</span> <span className="font-mono font-bold">15%</span></div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 text-center">
            <span className="font-bold text-xs text-slate-800 dark:text-slate-200 block mb-2">Year 2025 (Projected)</span>
            <div className="space-y-1 text-[11px] text-left">
              <div className="flex justify-between"><span>Space Heating:</span> <span className="font-mono font-bold text-rose-500">38% (↓)</span></div>
              <div className="flex justify-between"><span>Water Heating:</span> <span className="font-mono font-bold">16%</span></div>
              <div className="flex justify-between"><span>Electronics:</span> <span className="font-mono font-bold text-emerald-500">34% (↑)</span></div>
              <div className="flex justify-between"><span>Lighting:</span> <span className="font-mono font-bold text-rose-500">12% (↓)</span></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "table") {
    return (
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
        <div className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
          <Table2 className="w-4 h-4 text-amber-500" /> Transit Metrics Comparison Table
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-[10px] text-slate-400 font-bold uppercase">
                <th className="py-2">City</th>
                <th className="py-2">Daily Riders</th>
                <th className="py-2">Punctuality</th>
                <th className="py-2">Monthly Cost</th>
                <th className="py-2">Satisfaction</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-mono text-[11px]">
              <tr><td className="py-1.5 font-bold font-sans">Tokyo</td><td>7.2M</td><td>99.2%</td><td>$115</td><td className="text-emerald-600 font-bold">94%</td></tr>
              <tr><td className="py-1.5 font-bold font-sans">London</td><td>3.8M</td><td>91.4%</td><td>$185</td><td className="text-amber-600 font-bold">78%</td></tr>
              <tr><td className="py-1.5 font-bold font-sans">Vienna</td><td>1.9M</td><td>96.8%</td><td>$40</td><td className="text-emerald-600 font-bold">96%</td></tr>
              <tr><td className="py-1.5 font-bold font-sans">New York</td><td>4.3M</td><td>82.1%</td><td>$132</td><td className="text-rose-600 font-bold">64%</td></tr>
              <tr><td className="py-1.5 font-bold font-sans">Singapore</td><td>3.1M</td><td>98.5%</td><td>$85</td><td className="text-emerald-600 font-bold">91%</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  if (type === "process") {
    return (
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
        <div className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
          <GitMerge className="w-4 h-4 text-rose-500" /> Plastic Bottle Recycling Flowchart
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-center text-xs">
          {[
            { step: "1", title: "Collection & Sorting", desc: "Bottles sorted by polymer type & colour" },
            { step: "2", title: "Washing & Flaking", desc: "Mechanically shredded into fine clean flakes" },
            { step: "3", title: "Thermal Melting", desc: "Flakes heated and extruded into pellets" },
            { step: "4", title: "Yarn Extrusion", desc: "Melted polymer drawn into polyester threads" },
            { step: "5", title: "Spinning & Weaving", desc: "Spun into textured fleece fabric rolls" },
            { step: "6", title: "Garment Production", desc: "Finished consumer jacket manufacturing" },
          ].map((s) => (
            <div key={s.step} className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 flex flex-col justify-between">
              <span className="w-5 h-5 rounded-full bg-rose-100 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 font-bold text-[10px] mx-auto mb-1 flex items-center justify-center">
                {s.step}
              </span>
              <span className="font-bold text-[11px] text-slate-900 dark:text-white leading-tight">{s.title}</span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">{s.desc}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "map") {
    return (
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
        <div className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
          <MapPin className="w-4 h-4 text-indigo-500" /> Port Haven Waterfront Site Plan
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
            <span className="font-bold text-xs text-rose-600 dark:text-rose-400 block mb-1">Year 2000 (Industrial)</span>
            <ul className="list-disc list-inside text-[11px] text-slate-600 dark:text-slate-400 space-y-1">
              <li>Heavy cargo crane docks along north shoreline</li>
              <li>3 massive disused brick freight warehouses</li>
              <li>Single railway track for coal and freight</li>
              <li>Enclosed polluted wasteland basin</li>
            </ul>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
            <span className="font-bold text-xs text-emerald-600 dark:text-emerald-400 block mb-1">Present Day (Redeveloped)</span>
            <ul className="list-disc list-inside text-[11px] text-slate-600 dark:text-slate-400 space-y-1">
              <li>Warehouses converted into luxury loft apartments</li>
              <li>Light rail station & pedestrian footbridge</li>
              <li>Waterfront promenade with cafes and public park</li>
              <li>Clean public marina for sailing yachts</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

function WritingSimulatorContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const taskId = searchParams.get("id") || "task1-bar";
  const task = TASKS_DATA[taskId] || TASKS_DATA["task1-bar"];

  const [essayText, setEssayText] = useState("");
  const [timeLeft, setTimeLeft] = useState(task.durationMinutes * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [isExaminerModalOpen, setIsExaminerModalOpen] = useState(false);
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  // Load draft from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(`ielts_writing_draft_${task.id}`);
    if (saved) {
      setEssayText(saved);
    }
  }, [task.id]);

  // Timer countdown
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, timeLeft]);

  // Word count & paragraph calculation
  const words = useMemo(() => {
    const trimmed = essayText.trim();
    if (!trimmed) return 0;
    return trimmed.split(/\s+/).length;
  }, [essayText]);

  const paragraphs = useMemo(() => {
    const trimmed = essayText.trim();
    if (!trimmed) return 0;
    return trimmed.split(/\n\s*\n/).filter((p) => p.trim().length > 0).length;
  }, [essayText]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const handleSaveDraft = () => {
    localStorage.setItem(`ielts_writing_draft_${task.id}`, essayText);
    setSaveStatus("Draft saved locally!");
    setTimeout(() => setSaveStatus(null), 2500);
  };

  const handleClear = () => {
    if (confirm("Are you sure you want to clear your current text?")) {
      setEssayText("");
      localStorage.removeItem(`ielts_writing_draft_${task.id}`);
    }
  };

  const handleSubmit = () => {
    if (words < 10) {
      alert("Please write at least a few sentences before submitting your practice task.");
      return;
    }
    setIsTimerRunning(false);
    setIsExaminerModalOpen(true);
    localStorage.setItem(`ielts_writing_draft_${task.id}`, essayText);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-200">
      {/* Top Test Header Bar */}
      <header className="sticky top-0 z-30 flex items-center justify-between px-4 sm:px-6 h-14 bg-white/80 dark:bg-[#090d16]/80 border-b border-slate-200/70 dark:border-white/[0.07] backdrop-blur-md">
        <div className="flex items-center gap-3">
          <Link
            href="/practice/writing"
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white px-3 py-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-white/[0.05] transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Writing Hub</span>
          </Link>

          <span className="text-slate-300 dark:text-slate-700">|</span>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-3 py-0.5 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
              Task {task.taskNumber}: {task.typeName}
            </span>
            <span className="text-xs font-medium text-slate-600 dark:text-slate-300 hidden md:inline truncate max-w-sm">
              {task.title}
            </span>
          </div>
        </div>

        {/* Center: Exam Timer */}
        <div className="flex items-center gap-2 bg-slate-100 dark:bg-white/[0.05] px-3 py-1.5 rounded-full border border-slate-200/60 dark:border-white/[0.08] font-mono">
          <Clock className={`w-4 h-4 ${timeLeft < 300 ? "text-rose-500 animate-pulse" : "text-slate-400"}`} />
          <span className={`text-sm font-semibold ${timeLeft < 300 ? "text-rose-500" : "text-slate-800 dark:text-slate-200"}`}>
            {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
          </span>

          <button
            onClick={() => setIsTimerRunning(!isTimerRunning)}
            title={isTimerRunning ? "Pause Timer" : "Resume Timer"}
            className="p-1 hover:bg-slate-200 dark:hover:bg-white/[0.08] rounded-full text-slate-400 hover:text-slate-800 dark:hover:text-white transition"
          >
            {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={() => {
              setIsTimerRunning(false);
              setTimeLeft(task.durationMinutes * 60);
            }}
            title="Reset Timer"
            className="p-1 hover:bg-slate-200 dark:hover:bg-white/[0.08] rounded-full text-slate-400 hover:text-slate-800 dark:hover:text-white transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Right side: Theme toggle */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </header>

      {/* Main Workspace (Split Pane) */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Official Prompt & Visual Exhibit (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-3xl bg-white dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/[0.07] shadow-sm backdrop-blur-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-full border border-rose-500/20">
                    Official Instructions
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {task.durationMinutes} mins • {task.minWords}+ words
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/[0.05] text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  You should spend about {task.durationMinutes} minutes on this task. Write at least {task.minWords} words.
                </div>

                {/* Task Prompt text */}
                <div>
                  <h2 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">Task Prompt:</h2>
                  <div className="p-4 rounded-2xl bg-rose-500/[0.04] dark:bg-rose-500/[0.05] border border-rose-500/20 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-line font-serif">
                    {task.prompt}
                  </div>
                </div>

                {/* If Task 1, display Visual Exhibit */}
                {task.taskNumber === 1 && (
                  <div>
                    <h3 className="text-xs font-semibold text-slate-900 dark:text-white mb-2">Visual Exhibit Data:</h3>
                    <WritingVisualExhibit type={task.type} />
                  </div>
                )}

                {/* Structuring Advice Accordion */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/[0.05] space-y-2">
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-rose-500" /> Recommended Band 7+ Structure
                  </span>
                  <ul className="space-y-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                    {task.recommendedStructure.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-4 h-4 rounded-full bg-slate-200 dark:bg-white/[0.08] text-slate-700 dark:text-slate-300 font-semibold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column: Writing Editor & Stats (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col space-y-4">
              <div className="flex-1 flex flex-col p-6 rounded-3xl bg-white dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/[0.07] shadow-sm backdrop-blur-sm space-y-4 min-h-[550px]">
                {/* Stats Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/[0.05]">
                  <div className="flex items-center gap-4 text-xs font-semibold">
                    {/* Word count - Neutral exam mode (no live validation signs) */}
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-400 dark:text-slate-500 font-medium">Words:</span>
                      <span className="font-mono font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/[0.08]">
                        {words}
                      </span>
                    </div>

                    {/* Paragraph count */}
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <span className="text-slate-400 dark:text-slate-500 font-medium">Paragraphs:</span>
                      <span className="font-mono font-semibold text-slate-800 dark:text-slate-200">{paragraphs}</span>
                    </div>
                  </div>

                  {saveStatus && (
                    <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> {saveStatus}
                    </span>
                  )}
                </div>

                {/* Textarea Editor */}
                <div className="flex-1 flex flex-col">
                  <textarea
                    value={essayText}
                    onChange={(e) => setEssayText(e.target.value)}
                    placeholder={`Start writing your ${task.taskNumber === 1 ? "Task 1 report" : "Task 2 essay"} here...\n\nStructure tip:\n1. Introduction (Paraphrase the prompt)\n2. Overview / Thesis statement\n3. Body Paragraphs with specific data / argumentation\n4. Conclusion`}
                    className="w-full flex-1 min-h-[380px] p-4 rounded-2xl bg-slate-50/50 dark:bg-white/[0.01] border border-slate-200/70 dark:border-white/[0.07] text-sm sm:text-base text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500/50 font-serif leading-relaxed resize-y"
                    spellCheck={false}
                  />
                </div>

                {/* Bottom Action Controls */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-white/[0.05]">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleClear}
                      className="px-3.5 py-2 rounded-full text-xs font-medium text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition"
                    >
                      Clear Text
                    </button>

                    <button
                      type="button"
                      onClick={handleSaveDraft}
                      className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/[0.05] hover:bg-slate-200 dark:hover:bg-white/[0.09] transition-all"
                    >
                      <Save className="w-3.5 h-3.5" />
                      <span>Save Draft</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="flex items-center gap-2 px-5 py-2 rounded-full bg-rose-500 hover:bg-rose-600 text-white text-xs font-semibold shadow-sm transition-all group cursor-pointer"
                  >
                    <span>Submit Practice Essay</span>
                    <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
      </main>

        {/* Dedicated Examiner Evaluation & Model Writing Window */}
        <ExaminerReviewModal
          isOpen={isExaminerModalOpen}
          onClose={() => {
            router.replace("/practice/writing");
          }}
          task={task}
          userEssay={essayText}
        />
    </div>
  );
}

export default function IELTSWritingSimulatorPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center text-slate-500">
          Loading IELTS Writing Simulator...
        </div>
      }
    >
      <WritingSimulatorContent />
    </Suspense>
  );
}
