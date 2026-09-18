"use client";

import { useState } from "react";
import Link from "next/link";
import { Sidebar } from "@/components/sidebar";
import {
  PenTool,
  Clock,
  Sparkles,
  FileText,
  BarChart3,
  LineChart,
  PieChart,
  Table2,
  GitMerge,
  MapPin,
  ArrowRight,
  Flame,
  CheckCircle2,
  Compass,
  CheckCheck,
} from "lucide-react";

export default function WritingHubPage() {
  const [selectedTask, setSelectedTask] = useState<"task1" | "task2">("task1");
  const [task1Filter, setTask1Filter] = useState<string>("all");
  const [task2Filter, setTask2Filter] = useState<string>("all");

  const task1Types = [
    {
      id: "task1-bar",
      type: "bar",
      typeName: "Bar Chart",
      title: "Global Renewable Electricity Generation (2018–2024)",
      duration: "20 mins",
      wordCount: "Min 150 words",
      difficulty: "Band 6.5 - 7.5",
      badgeColor: "bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300 border-blue-200 dark:border-blue-800",
      icon: BarChart3,
      description: "Compare electricity generation percentages across four nations (Germany, UK, China, USA) from wind, solar, and hydro sources.",
      promptSummary: "Summarize the information by selecting and reporting the main features, and make comparisons where relevant.",
    },
    {
      id: "task1-line",
      type: "line",
      typeName: "Line Graph",
      title: "International Air Passenger Traffic by Region (1990–2020)",
      duration: "20 mins",
      wordCount: "Min 150 words",
      difficulty: "Band 7.0 - 8.0",
      badgeColor: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
      icon: LineChart,
      description: "Analyze four distinct trajectories in commercial airline passenger volume in Europe, Asia-Pacific, North America, and Middle East over 30 years.",
      promptSummary: "Identify key upward trends, stability periods, and sharp fluctuations across 3 decades.",
    },
    {
      id: "task1-pie",
      type: "pie",
      typeName: "Pie Charts",
      title: "Household Energy Consumption Distribution (2010 vs 2025)",
      duration: "20 mins",
      wordCount: "Min 150 words",
      difficulty: "Band 6.5 - 7.5",
      badgeColor: "bg-purple-50 text-purple-700 dark:bg-purple-950/50 dark:text-purple-300 border-purple-200 dark:border-purple-800",
      icon: PieChart,
      description: "Compare two pie charts detailing residential energy expenditure split between heating, cooling, lighting, and electronic devices.",
      promptSummary: "Highlight notable percentage shifts from domestic heating towards digital electronics.",
    },
    {
      id: "task1-table",
      type: "table",
      typeName: "Data Table",
      title: "Public Transport Patronage & Commuter Satisfaction in 5 Cities",
      duration: "20 mins",
      wordCount: "Min 150 words",
      difficulty: "Band 7.5 - 8.5",
      badgeColor: "bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300 border-amber-200 dark:border-amber-800",
      icon: Table2,
      description: "Multi-parameter table contrasting daily commuters, punctuality ratings, and ticket affordability metrics across five metropolitan centers.",
      promptSummary: "Synthesize tabular metrics and identify correlations between ticket pricing and satisfaction.",
    },
    {
      id: "task1-process",
      type: "process",
      typeName: "Process Diagram",
      title: "The Industrial Recycling & Reprocessing of Plastic Bottles",
      duration: "20 mins",
      wordCount: "Min 150 words",
      difficulty: "Band 7.0 - 8.0",
      badgeColor: "bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300 border-rose-200 dark:border-rose-800",
      icon: GitMerge,
      description: "Six-stage sequential process flowchart from collection, sorting, shredding, pelletizing, to manufacturing polyester fiber fabrics.",
      promptSummary: "Describe the linear industrial cycle using appropriate passive voice and transitional connectors.",
    },
    {
      id: "task1-map",
      type: "map",
      typeName: "Map Comparison",
      title: "Redevelopment of Port Haven Industrial Waterfront (2000 vs Now)",
      duration: "20 mins",
      wordCount: "Min 150 words",
      difficulty: "Band 7.5 - 8.5",
      badgeColor: "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800",
      icon: MapPin,
      description: "Compare the historical transition of a dockland freight depot into a modern pedestrian promenade, residential marina, and technology hub.",
      promptSummary: "Detail spatial transformations, infrastructure replacement, and public amenity additions.",
    },
  ];

  const task2Types = [
    {
      id: "task2-opinion",
      type: "opinion",
      typeName: "Opinion (Agree or Disagree)",
      title: "AI and Automated Systems in Creative Arts",
      duration: "40 mins",
      wordCount: "Min 250 words",
      difficulty: "Band 7.0 - 8.5",
      badgeColor: "bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300 border-rose-200 dark:border-rose-800",
      description: "Some argue artificial intelligence will inevitably supersede human painters, composers, and authors. To what extent do you agree or disagree?",
      promptSummary: "Defend a cohesive stance with structured arguments on technological augmentation vs human emotional expression.",
    },
    {
      id: "task2-discussion",
      type: "discussion",
      typeName: "Discussion (Both Views + Opinion)",
      title: "State-Funded Higher Education vs Personal Tuition",
      duration: "40 mins",
      wordCount: "Min 250 words",
      difficulty: "Band 7.5 - 8.5",
      badgeColor: "bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300 border-blue-200 dark:border-blue-800",
      description: "Some people believe tertiary university education should be completely tuition-free for all citizens, while others believe students should fund their own degrees.",
      promptSummary: "Analyze economic democratization against national tax burden, then clearly state your reasoned verdict.",
    },
    {
      id: "task2-advantages",
      type: "advantages",
      typeName: "Advantages & Disadvantages",
      title: "The Rapid Transition to a Cashless Society",
      duration: "40 mins",
      wordCount: "Min 250 words",
      difficulty: "Band 6.5 - 7.5",
      badgeColor: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
      description: "In many countries, physical banknotes and coins are being phased out in favor of contactless payments and digital wallets. Do advantages outweigh disadvantages?",
      promptSummary: "Weigh transaction efficiency and crime deterrence against digital exclusion and cyber vulnerability.",
    },
    {
      id: "task2-problem",
      type: "problem",
      typeName: "Problem & Solution",
      title: "Escalating Urban Traffic Congestion & Emissions",
      duration: "40 mins",
      wordCount: "Min 250 words",
      difficulty: "Band 7.0 - 8.0",
      badgeColor: "bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300 border-amber-200 dark:border-amber-800",
      description: "Traffic jams in major metropolitan regions are worsening each year, causing severe economic slowdowns and air pollution. What are causes, and what practical solutions exist?",
      promptSummary: "Examine urban sprawl and insufficient public transit, proposing congestion taxes and rail transit expansion.",
    },
    {
      id: "task2-twopart",
      type: "twopart",
      typeName: "Two-Part / Direct Question",
      title: "Prolonged Work Hours & The Decline of Family Life",
      duration: "40 mins",
      wordCount: "Min 250 words",
      difficulty: "Band 7.5 - 8.5",
      badgeColor: "bg-purple-50 text-purple-700 dark:bg-purple-950/50 dark:text-purple-300 border-purple-200 dark:border-purple-800",
      description: "Modern professionals frequently work far longer hours than earlier generations, sacrificing family time. Why is this occurring? Is this a positive or negative development?",
      promptSummary: "Answer both distinct questions in balanced body paragraphs with lucid topical development.",
    },
  ];

  const filteredTask1 = task1Filter === "all" ? task1Types : task1Types.filter((t) => t.type === task1Filter);
  const filteredTask2 = task2Filter === "all" ? task2Types : task2Types.filter((t) => t.type === task2Filter);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 flex flex-col md:flex-row transition-colors duration-200">
      <Sidebar />

      <main className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-8 space-y-8">
        {/* Header banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 bg-white dark:bg-white/[0.03] p-6 sm:p-8 rounded-3xl border border-slate-200/70 dark:border-white/[0.07] shadow-sm backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-sky-400/10 to-teal-400/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 flex items-center gap-1.5">
                <PenTool className="w-3.5 h-3.5" /> IELTS Academic Writing
              </span>
              <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                • Real Exam Interface & Word Counter
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white tracking-tight">
              Choose Writing Task & Type
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1.5 max-w-xl leading-relaxed">
              Select your task type to begin practice. Practice visual report descriptions (Task 1) or in-depth discursive essays (Task 2) with an active word counter and exam countdown timer.
            </p>
          </div>

          {/* Main Task Toggle: Task 1 vs Task 2 */}
          <div className="inline-flex p-1 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200/70 dark:border-white/[0.08] self-start sm:self-auto shrink-0">
            <button
              type="button"
              onClick={() => setSelectedTask("task1")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedTask === "task1"
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Task 1: Reports (150 words)</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedTask("task2")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedTask === "task2"
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Task 2: Essay (250 words)</span>
            </button>
          </div>
        </div>

        {/* Task 1 Section */}
        {selectedTask === "task1" ? (
          <div className="space-y-5">
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium text-slate-400 dark:text-slate-500 mr-1">
                Filter by Type:
              </span>
              {[
                { id: "all", label: "All Visual Types" },
                { id: "bar", label: "Bar Chart" },
                { id: "line", label: "Line Graph" },
                { id: "pie", label: "Pie Chart" },
                { id: "table", label: "Table" },
                { id: "process", label: "Process Diagram" },
                { id: "map", label: "Map Comparison" },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setTask1Filter(f.id)}
                  className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all ${
                    task1Filter === f.id
                      ? "bg-sky-500 text-white shadow-sm shadow-sky-500/20"
                      : "bg-white dark:bg-white/[0.03] text-slate-600 dark:text-slate-400 border border-slate-200/70 dark:border-white/[0.08] hover:border-sky-500/40"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Task 1 Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredTask1.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    className="p-6 rounded-3xl bg-white dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/[0.07] shadow-sm hover:shadow-md hover:border-sky-500/30 dark:hover:border-sky-500/30 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-medium border ${item.badgeColor}`}>
                          {item.typeName}
                        </span>
                        <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                          <Clock className="w-3.5 h-3.5 text-sky-500" /> {item.duration}
                        </span>
                      </div>

                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-9 h-9 rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 flex items-center justify-center shrink-0">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <h3 className="font-semibold text-base text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="mt-4 p-3 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/[0.05] text-[11px] text-slate-600 dark:text-slate-400">
                        <span className="font-semibold text-slate-700 dark:text-slate-300 block mb-0.5">Prompt:</span>
                        {item.promptSummary}
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/[0.05] flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                        <span className="font-medium">{item.difficulty}</span>
                        <span className="font-semibold text-sky-600 dark:text-sky-400">{item.wordCount}</span>
                      </div>
                    </div>

                    <Link
                      href={`/practice/ielts/writing?task=1&type=${item.type}&id=${item.id}`}
                      className="mt-5 w-full py-2.5 px-4 rounded-full bg-slate-100 hover:bg-slate-900 hover:text-white dark:bg-white/[0.05] dark:hover:bg-white dark:hover:text-slate-900 text-slate-700 dark:text-slate-200 border border-transparent dark:border-white/[0.05] text-xs font-semibold flex items-center justify-center gap-1.5 transition-all group/btn"
                    >
                      <span>Start Task 1 Practice</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* Task 2 Section */
          <div className="space-y-5">
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium text-slate-400 dark:text-slate-500 mr-1">
                Filter by Essay Type:
              </span>
              {[
                { id: "all", label: "All Essay Types" },
                { id: "opinion", label: "Agree / Disagree" },
                { id: "discussion", label: "Both Views + Opinion" },
                { id: "advantages", label: "Advantages vs Disadvantages" },
                { id: "problem", label: "Problem & Solution" },
                { id: "twopart", label: "Two-Part Question" },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setTask2Filter(f.id)}
                  className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all ${
                    task2Filter === f.id
                      ? "bg-sky-500 text-white shadow-sm shadow-sky-500/20"
                      : "bg-white dark:bg-white/[0.03] text-slate-600 dark:text-slate-400 border border-slate-200/70 dark:border-white/[0.08] hover:border-sky-500/40"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Task 2 Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredTask2.map((item) => (
                <div
                  key={item.id}
                  className="p-6 rounded-3xl bg-white dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/[0.07] shadow-sm hover:shadow-md hover:border-sky-500/30 dark:hover:border-sky-500/30 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-medium border ${item.badgeColor}`}>
                        {item.typeName}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                        <Clock className="w-3.5 h-3.5 text-sky-500" /> {item.duration}
                      </span>
                    </div>

                    <h3 className="font-semibold text-base text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-4 p-3 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/[0.05] text-[11px] text-slate-600 dark:text-slate-400">
                      <span className="font-semibold text-slate-700 dark:text-slate-300 block mb-0.5">Essay Focus:</span>
                      {item.promptSummary}
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/[0.05] flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                      <span className="font-medium">{item.difficulty}</span>
                      <span className="font-semibold text-sky-600 dark:text-sky-400">{item.wordCount}</span>
                    </div>
                  </div>

                  <Link
                    href={`/practice/ielts/writing?task=2&type=${item.type}&id=${item.id}`}
                    className="mt-5 w-full py-2.5 px-4 rounded-full bg-slate-100 hover:bg-slate-900 hover:text-white dark:bg-white/[0.05] dark:hover:bg-white dark:hover:text-slate-900 text-slate-700 dark:text-slate-200 border border-transparent dark:border-white/[0.05] text-xs font-semibold flex items-center justify-center gap-1.5 transition-all group/btn"
                  >
                    <span>Start Task 2 Practice</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* IELTS Writing Strategy Advice Footer */}
        <div className="p-6 rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200/70 dark:border-white/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-slate-900 dark:text-white">Strict Time Division</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                Allocate precisely 20 mins to Task 1 (worth 33% of score) and 40 mins to Task 2 (worth 66%).
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <CheckCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-slate-900 dark:text-white">Word Count Thresholds</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                Always meet the required minimums: 150 words for Task 1 and 250 words for Task 2 to prevent penalties.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 flex items-center justify-center shrink-0">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-slate-900 dark:text-white">4 Assessment Pillars</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                Scored evenly on Task Response, Coherence & Cohesion, Lexical Resource, and Grammatical Accuracy.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
