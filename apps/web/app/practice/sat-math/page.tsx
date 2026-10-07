"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Sidebar } from "@/components/sidebar";
import {
  Calculator,
  ArrowRight,
  GraduationCap,
  Layers,
  FileEdit,
} from "lucide-react";
import { MATH_DOMAINS, ALL_SAT_QUESTIONS } from "@/lib/sat-data";

const MATH_SUBTOPIC_DESCRIPTIONS: Record<string, string> = {
  "linear-equations-one-variable": "Solving, manipulating, and analyzing single-variable linear equations and algebraic word problems.",
  "linear-functions": "Interpreting function notation, slopes, y-intercepts, and modeling real-world linear relationships.",
  "linear-equations-two-variables": "Graphing, standard form, slope-intercept form, and lines in the xy-plane.",
  "systems-two-linear-equations": "Linear systems, substitution, elimination, parallel lines, and solution counts (0, 1, or infinitely many).",
  "linear-inequalities": "Single-variable and two-variable linear inequalities, systems of inequalities, and viable solution regions.",
  "nonlinear-functions": "Quadratic, exponential, and polynomial functions, vertex form, parabolas, and growth models.",
  "nonlinear-equations-systems": "Solving nonlinear equations, systems of linear and nonlinear equations, and radicals.",
  "equivalent-expressions": "Factoring, expanding, exponent properties, and equivalent algebraic expressions.",
  "quadratics": "Factoring quadratics, parabolas, vertex form, and the quadratic formula.",
  "exponents": "Exponent rules, radical expressions, and equivalent algebraic forms.",
  "polynomials": "Polynomial division, factor theorem, and polynomial arithmetic.",
  "percentages-rates": "Unit conversions, percentage change, proportions, ratios, and multi-step percentage problems.",
  "ratios-rates": "Ratios, proportions, rates, and unit analysis in context.",
  "probability": "Conditional probability, relative frequencies, two-way tables, and sample spaces.",
  "one-variable-data": "Mean, median, mode, range, standard deviation, and boxplots.",
  "two-variable-data": "Scatterplots, lines of best fit, correlation, and two-variable models.",
  "inference-statistics": "Margin of error, confidence intervals, and inferences from random samples.",
  "circles": "Standard circle equation (x-h)² + (y-k)² = r², center, radius, arc length, and sector area.",
  "area-volume": "Area of 2D shapes, surface area, and volume of 3D geometric figures.",
  "lines-angles-triangles": "Angle relationships, parallel lines, triangle angle sum, and polygon theorems.",
  "right-triangles-trigonometry": "Pythagorean theorem, special right triangles, and trigonometric ratios (sin, cos, tan).",
  "triangles-trig": "Special right triangles, similarity, and trigonometric ratios (sin, cos, tan).",
  "data-probability": "Two-way frequency tables, conditional probability, and data spreads.",
};

const FULL_MATH_MODULES = [
  {
    id: "math-mod-1",
    title: "Math • Module 1",
    subtitle: "Full Adaptive Section (MCQ & Grid-In)",
    questionsCount: "22 questions",
    duration: "35 mins",
    format: "Built-in Desmos Calculator",
    difficulty: "Adaptive Standard",
    description: "Standard College Board multistage module containing 17 MCQs and 5 Grid-In questions.",
    recommended: true,
  },
  {
    id: "math-mod-2-hard",
    title: "Math • Module 2 (Hard Route)",
    subtitle: "Targeting 700–800 Math Scaled Score",
    questionsCount: "22 questions",
    duration: "35 mins",
    format: "Challenging Quadratics & 3D Geometry",
    difficulty: "High Tier (750+ Aim)",
    description: "Advanced multi-step problems, complex parametric systems, and circle coordinate geometry.",
  },
];

export default function SatMathHubPage() {
  const [selectedType, setSelectedType] = useState<"tasks" | "full">("tasks");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");
  const [selectedGroup, setSelectedGroup] = useState<string>("all");

  const mathQuestions = useMemo(() => {
    return ALL_SAT_QUESTIONS.filter((q) => q.section === "math");
  }, []);

  const totalFilteredQuestions = useMemo(() => {
    return mathQuestions.filter((q) => {
      if (selectedDifficulty !== "all" && q.difficulty !== selectedDifficulty) return false;
      if (selectedGroup !== "all" && q.domainId !== selectedGroup) return false;
      return true;
    }).length;
  }, [mathQuestions, selectedDifficulty, selectedGroup]);

  const difficultyCounts = useMemo(() => {
    return {
      all: mathQuestions.length,
      easy: mathQuestions.filter((q) => q.difficulty === "easy").length,
      medium: mathQuestions.filter((q) => q.difficulty === "medium").length,
      hard: mathQuestions.filter((q) => q.difficulty === "hard").length,
    };
  }, [mathQuestions]);

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#090d16] text-slate-900 dark:text-slate-100 flex flex-col md:flex-row transition-colors duration-200">
      <Sidebar />

      <main className="flex-1 max-w-5xl w-full mx-auto p-4 sm:p-8 space-y-7">
        {/* Clean Header Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 bg-white dark:bg-white/[0.03] p-6 sm:p-7 rounded-3xl border border-slate-200/70 dark:border-white/[0.07] shadow-xs transition-all">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-sky-50 dark:bg-sky-950/50 text-[#007EA7] dark:text-[#00A8E8] flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" strokeWidth={1.75} /> Digital SAT Section 2
              </span>
              <span className="text-xs text-slate-400 font-medium">
                • Built-in Desmos Calculator
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white tracking-tight">
              Math Practice
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm max-w-xl leading-relaxed">
              Выберите уровень сложности и тренируйте математические темы Digital SAT.
            </p>
          </div>

          {/* Toggle Tabs */}
          <div className="inline-flex p-1 rounded-full bg-slate-100 dark:bg-white/[0.05] border border-slate-200/60 dark:border-white/[0.06] self-start sm:self-auto shrink-0">
            <button
              type="button"
              onClick={() => setSelectedType("tasks")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedType === "tasks"
                  ? "bg-white dark:bg-white/[0.12] text-[#007EA7] dark:text-white shadow-xs"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Layers className="w-3.5 h-3.5" strokeWidth={1.75} />
              <span>Задания по сложности</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedType("full")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedType === "full"
                  ? "bg-white dark:bg-white/[0.12] text-[#007EA7] dark:text-white shadow-xs"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <FileEdit className="w-3.5 h-3.5" strokeWidth={1.75} />
              <span>Full Modules</span>
            </button>
          </div>
        </div>

        {selectedType === "tasks" ? (
          <div className="space-y-7">
            {/* Minimalist Difficulty Filter */}
            <div className="bg-white dark:bg-white/[0.03] p-4 sm:p-5 rounded-3xl border border-slate-200/70 dark:border-white/[0.07] shadow-xs space-y-3.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Уровень сложности:
                </span>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  <b className="text-slate-900 dark:text-white font-semibold">{totalFilteredQuestions}</b> вопросов доступно
                </span>
              </div>

              {/* Difficulty Pills */}
              <div className="flex items-center gap-2 flex-wrap">
                <button
                  type="button"
                  onClick={() => setSelectedDifficulty("all")}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-2 ${
                    selectedDifficulty === "all"
                      ? "bg-[#007EA7] text-white shadow-xs"
                      : "bg-slate-100 dark:bg-white/[0.05] text-slate-600 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-white/[0.08]"
                  }`}
                >
                  <span>Все уровни</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    selectedDifficulty === "all" ? "bg-white/20 text-white" : "text-slate-400"
                  }`}>
                    {difficultyCounts.all}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedDifficulty("easy")}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-2 ${
                    selectedDifficulty === "easy"
                      ? "bg-emerald-600 text-white shadow-xs"
                      : "bg-emerald-50/70 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100/70 dark:hover:bg-emerald-900/40"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Легкие</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    selectedDifficulty === "easy" ? "bg-white/20 text-white" : "text-emerald-600 dark:text-emerald-400"
                  }`}>
                    {difficultyCounts.easy}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedDifficulty("medium")}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-2 ${
                    selectedDifficulty === "medium"
                      ? "bg-amber-500 text-white shadow-xs"
                      : "bg-amber-50/70 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300 hover:bg-amber-100/70 dark:hover:bg-amber-900/40"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Средние</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    selectedDifficulty === "medium" ? "bg-white/20 text-white" : "text-amber-600 dark:text-amber-400"
                  }`}>
                    {difficultyCounts.medium}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedDifficulty("hard")}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-2 ${
                    selectedDifficulty === "hard"
                      ? "bg-rose-500 text-white shadow-xs"
                      : "bg-rose-50/70 dark:bg-rose-950/30 text-rose-700 dark:text-rose-300 hover:bg-rose-100/70 dark:hover:bg-rose-900/40"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  <span>Сложные 750+</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    selectedDifficulty === "hard" ? "bg-white/20 text-white" : "text-rose-600 dark:text-rose-400"
                  }`}>
                    {difficultyCounts.hard}
                  </span>
                </button>
              </div>

              {/* Math Domain Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pt-2 border-t border-slate-100 dark:border-white/[0.05]">
                <button
                  type="button"
                  onClick={() => setSelectedGroup("all")}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                    selectedGroup === "all"
                      ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  Все области
                </button>
                {MATH_DOMAINS.map((dom) => (
                  <button
                    key={dom.id}
                    type="button"
                    onClick={() => setSelectedGroup(dom.id)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                      selectedGroup === dom.id
                        ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold"
                        : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    {dom.name}
                  </button>
                ))}
              </div>
            </div>

            {/* TASK TYPES ORGANIZED BY MATH DOMAINS */}
            {MATH_DOMAINS.map((domain) => {
              if (selectedGroup !== "all" && selectedGroup !== domain.id) return null;

              const domainQuestions = mathQuestions.filter(
                (q) =>
                  q.domainId === domain.id &&
                  (selectedDifficulty === "all" || q.difficulty === selectedDifficulty)
              );

              return (
                <section key={domain.id} className="space-y-3.5">
                  {/* Clean Section Header */}
                  <div className="flex items-center justify-between gap-3 px-1">
                    <div>
                      <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                        {domain.name}
                      </h2>
                      <p className="text-xs text-slate-400 max-w-xl">
                        {domain.description}
                      </p>
                    </div>

                    <Link
                      href={`/practice/sat?tab=math&domain=${domain.id}&difficulty=${selectedDifficulty}`}
                      className="text-xs font-semibold text-[#007EA7] dark:text-[#00A8E8] hover:underline flex items-center gap-1 shrink-0"
                    >
                      <span>Все задачи раздела ({domainQuestions.length})</span>
                      <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.75} />
                    </Link>
                  </div>

                  {/* Task Types Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {domain.subtopics.map((subtopic) => {
                      const subQuestions = mathQuestions.filter(
                        (q) =>
                          q.domainId === domain.id &&
                          q.subtopicId === subtopic.id &&
                          (selectedDifficulty === "all" || q.difficulty === selectedDifficulty)
                      );

                      return (
                        <div
                          key={subtopic.id}
                          className="p-5 rounded-3xl bg-white dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/[0.07] hover:border-[#00A8E8]/50 dark:hover:border-[#00A8E8]/40 hover:shadow-xs transition-all duration-200 flex flex-col justify-between group"
                        >
                          <div className="space-y-2.5">
                            {/* Difficulty and count header */}
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 bg-slate-100/80 dark:bg-white/[0.05] px-2.5 py-0.5 rounded-full">
                                {subQuestions.length} {subQuestions.length === 1 ? "задача" : "задач"}
                              </span>

                              {selectedDifficulty !== "all" ? (
                                <span
                                  className={`text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1.5 ${
                                    selectedDifficulty === "easy"
                                      ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300"
                                      : selectedDifficulty === "medium"
                                      ? "bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300"
                                      : "bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300"
                                  }`}
                                >
                                  <span
                                    className={`w-1.5 h-1.5 rounded-full ${
                                      selectedDifficulty === "easy"
                                        ? "bg-emerald-500"
                                        : selectedDifficulty === "medium"
                                        ? "bg-amber-500"
                                        : "bg-rose-500"
                                    }`}
                                  />
                                  {selectedDifficulty}
                                </span>
                              ) : (
                                <span className="text-[10px] text-slate-400 font-medium">
                                  Все уровни
                                </span>
                              )}
                            </div>

                            {/* Task Title */}
                            <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-[#007EA7] dark:group-hover:text-[#00A8E8] transition-colors leading-snug">
                              {subtopic.name}
                            </h3>

                            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                              {MATH_SUBTOPIC_DESCRIPTIONS[subtopic.id] || "Targeted practice for this official Digital SAT math topic."}
                            </p>
                          </div>

                          {/* Action Button */}
                          <Link
                            href={`/practice/sat?tab=math&domain=${domain.id}&subtopic=${subtopic.id}&difficulty=${selectedDifficulty}`}
                            className="mt-4 w-full py-2.5 px-4 rounded-full bg-slate-100 hover:bg-[#007EA7] hover:text-white dark:bg-white/[0.05] dark:hover:bg-[#00A8E8] dark:hover:text-white text-slate-700 dark:text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 group/btn"
                          >
                            <span>Начать практику</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" strokeWidth={1.75} />
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </section>
              );
            })}

            {totalFilteredQuestions === 0 && (
              <div className="bg-white dark:bg-white/[0.03] p-8 rounded-3xl text-center space-y-3 border border-slate-200/70 dark:border-white/[0.07]">
                <p className="text-sm text-slate-400">
                  Нет задач, соответствующих выбранным фильтрам.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedDifficulty("all");
                    setSelectedGroup("all");
                  }}
                  className="px-4 py-2 rounded-full bg-[#007EA7] text-white text-xs font-semibold"
                >
                  Сбросить фильтры
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Full Module Section */
          <div className="space-y-4">
            <div className="flex items-center justify-between px-1">
              <div>
                <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-[#007EA7] dark:text-[#00A8E8]" strokeWidth={1.75} /> Полные модули Digital SAT Math (22 вопроса • 35 мин)
                </h2>
                <p className="text-xs text-slate-400">
                  Официальный формат Bluebook™ с калькулятором Desmos.
                </p>
              </div>
              <span className="text-xs font-medium text-slate-400">
                2 модуля
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {FULL_MATH_MODULES.map((mod) => (
                <div
                  key={mod.id}
                  className="p-6 rounded-3xl bg-white dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/[0.07] shadow-xs flex flex-col justify-between hover:border-[#00A8E8]/40 transition group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] px-2.5 py-0.5 rounded-full font-semibold bg-sky-50 dark:bg-sky-950/50 text-[#007EA7] dark:text-[#00A8E8]">
                        {mod.difficulty}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {mod.questionsCount}
                      </span>
                    </div>

                    <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-[#007EA7] dark:group-hover:text-[#00A8E8] transition-colors">
                      {mod.title}
                    </h3>
                    <div className="text-xs font-medium text-[#007EA7] dark:text-[#00A8E8] mt-0.5">
                      {mod.subtitle}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                      {mod.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/[0.05] flex items-center justify-between text-xs text-slate-400">
                      <span>{mod.format}</span>
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        {mod.duration}
                      </span>
                    </div>
                  </div>

                  <Link
                    href={`/practice/sat?module=${mod.id}&tab=math`}
                    className="mt-5 w-full py-2.5 px-4 rounded-full bg-[#007EA7] hover:bg-[#0093C8] active:bg-[#005980] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition shadow-xs group/btn"
                  >
                    <span>Запустить модуль</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" strokeWidth={1.75} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
