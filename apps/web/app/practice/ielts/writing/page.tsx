"use client";

import { useState, useEffect, useMemo, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  ArrowLeft,
  Clock,
  CheckCircle2,
  AlertCircle,
  FileText,
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
  ChevronRight,
  Info,
  CheckCheck,
  Copy,
  PenTool,
} from "lucide-react";
import { AiSolutionReviewer, AiRecommendationCard } from "@/components/ai-solution-reviewer";

interface WritingTaskData {
  id: string;
  taskNumber: 1 | 2;
  type: string;
  typeName: string;
  title: string;
  prompt: string;
  durationMinutes: number;
  minWords: number;
  recommendedStructure: string[];
}

const TASKS_DATA: Record<string, WritingTaskData> = {
  "task1-bar": {
    id: "task1-bar",
    taskNumber: 1,
    type: "bar",
    typeName: "Bar Chart",
    title: "Global Renewable Electricity Generation (2018–2024)",
    prompt:
      "The bar chart below illustrates the proportion of total electricity generated from renewable sources (Wind, Solar, and Hydro) in four countries (Germany, United Kingdom, China, and the United States) between 2018 and 2024.\n\nSummarize the information by selecting and reporting the main features, and make comparisons where relevant.",
    durationMinutes: 20,
    minWords: 150,
    recommendedStructure: [
      "Introduction: Paraphrase the prompt and describe what the axes and categories represent.",
      "Overview: State the overarching trends (e.g. Germany leading overall renewable share, solar experiencing the steepest rate of expansion across all four nations).",
      "Body Paragraph 1: Detailed figures for Germany and the United Kingdom, comparing wind and hydro volumes.",
      "Body Paragraph 2: Detailed figures for China and the United States, highlighting solar growth trajectories.",
    ],
  },
  "task1-line": {
    id: "task1-line",
    taskNumber: 1,
    type: "line",
    typeName: "Line Graph",
    title: "International Air Passenger Traffic by Region (1990–2020)",
    prompt:
      "The line graph shows changes in the number of international commercial airline passengers (in millions) across three major regions from 1990 to 2020.\n\nSummarize the information by selecting and reporting the main features, and make comparisons where relevant.",
    durationMinutes: 20,
    minWords: 150,
    recommendedStructure: [
      "Introduction: Paraphrase the title and timeline of passenger traffic across the three regions.",
      "Overview: Highlight the general upward trajectory in all regions followed by the dramatic sharp decline towards 2020.",
      "Body Paragraph 1: Contrast European and North American volumes from 1990 to 2010.",
      "Body Paragraph 2: Describe Asia-Pacific's rapid escalation post-2005 and the universal 2020 dip.",
    ],
  },
  "task1-pie": {
    id: "task1-pie",
    taskNumber: 1,
    type: "pie",
    typeName: "Pie Charts",
    title: "Household Energy Consumption Distribution (2010 vs 2025)",
    prompt:
      "The two pie charts compare the distribution of domestic household energy expenditure across different appliances and utilities in 2010 and projected figures for 2025.\n\nSummarize the information by selecting and reporting the main features, and make comparisons where relevant.",
    durationMinutes: 20,
    minWords: 150,
    recommendedStructure: [
      "Introduction: Rephrase the prompt identifying the two comparative temporal periods and domestic categories.",
      "Overview: Point out the reduction in space heating dominance and the surge in digital/electronic appliance power consumption.",
      "Body Paragraph 1: Analyze heating, water heating, and cooling percentages.",
      "Body Paragraph 2: Analyze kitchen appliances, lighting, and computing electronics.",
    ],
  },
  "task1-table": {
    id: "task1-table",
    taskNumber: 1,
    type: "table",
    typeName: "Data Table",
    title: "Public Transport Patronage & Commuter Satisfaction in 5 Cities",
    prompt:
      "The table provides data regarding daily transit passenger numbers, ticket affordability indexes, and user satisfaction ratings in five capital cities in 2023.\n\nSummarize the information by selecting and reporting the main features, and make comparisons where relevant.",
    durationMinutes: 20,
    minWords: 150,
    recommendedStructure: [
      "Introduction: Outline the table scope, metrics measured, and the five cities evaluated.",
      "Overview: Note that highest satisfaction does not necessarily correlate with highest daily rider volumes.",
      "Body Paragraph 1: Compare passenger volumes and punctuality rates.",
      "Body Paragraph 2: Correlate affordability scores with overall customer satisfaction ratings.",
    ],
  },
  "task1-process": {
    id: "task1-process",
    taskNumber: 1,
    type: "process",
    typeName: "Process Diagram",
    title: "The Industrial Recycling & Reprocessing of Plastic Bottles",
    prompt:
      "The diagram illustrates the sequential stages involved in the collection, mechanical recycling, and industrial transformation of post-consumer plastic bottles into synthetic fleece clothing.\n\nSummarize the information by selecting and reporting the main features, and make comparisons where relevant.",
    durationMinutes: 20,
    minWords: 150,
    recommendedStructure: [
      "Introduction: Define the cyclic process, starting from consumer sorting and ending at finished manufactured apparel.",
      "Overview: Mention the total number of linear stages and the transformation from rigid plastic to spun yarn.",
      "Body Paragraph 1: Detail the mechanical preparation (cleaning, colour sorting, shredding into flakes).",
      "Body Paragraph 2: Detail the thermal extrusion, yarn spinning, and weaving into fleece garments.",
    ],
  },
  "task1-map": {
    id: "task1-map",
    taskNumber: 1,
    type: "map",
    typeName: "Map Comparison",
    title: "Redevelopment of Port Haven Industrial Waterfront (2000 vs Now)",
    prompt:
      "The two maps illustrate the urban redevelopment of the Port Haven docklands area between the year 2000 and the present day.\n\nSummarize the information by selecting and reporting the main features, and make comparisons where relevant.",
    durationMinutes: 20,
    minWords: 150,
    recommendedStructure: [
      "Introduction: Rephrase the prompt indicating the spatial location and the redevelopment timeframe.",
      "Overview: State the overarching shift from a derelict industrial commercial port to a pedestrianized residential and leisure zone.",
      "Body Paragraph 1: Describe the transformation of cargo warehouses into luxury apartments and a technology hub.",
      "Body Paragraph 2: Describe infrastructural additions including footbridges, promenade gardens, and public transport links.",
    ],
  },
  "task2-opinion": {
    id: "task2-opinion",
    taskNumber: 2,
    type: "opinion",
    typeName: "Opinion (Agree or Disagree)",
    title: "AI and Automated Systems in Creative Arts",
    prompt:
      "Some people argue that artificial intelligence will eventually replace human artists, writers, and musicians.\n\nTo what extent do you agree or disagree?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
    durationMinutes: 40,
    minWords: 250,
    recommendedStructure: [
      "Introduction: Paraphrase the prompt statement, formulate a direct thesis statement indicating whether you agree, disagree, or take a qualified stance.",
      "Body Paragraph 1: Address the capabilities and efficiency of generative AI in replicating stylistic patterns, drafting, and algorithmic composition.",
      "Body Paragraph 2: Defend the irreplaceable core of human emotional experience, existential consciousness, and genuine cultural empathy in authentic art.",
      "Conclusion: Reiterate your core thesis in fresh vocabulary and provide a brief forward-looking perspective.",
    ],
  },
  "task2-discussion": {
    id: "task2-discussion",
    taskNumber: 2,
    type: "discussion",
    typeName: "Discussion (Both Views + Opinion)",
    title: "State-Funded Higher Education vs Personal Tuition",
    prompt:
      "Some people believe that tertiary university education should be completely tuition-free for all citizens, while others believe students should fund their own degrees.\n\nDiscuss both views and give your own opinion.\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
    durationMinutes: 40,
    minWords: 250,
    recommendedStructure: [
      "Introduction: Paraphrase both perspectives and explicitly outline your thesis/opinion.",
      "Body Paragraph 1: Discuss arguments for free state-funded higher education (social mobility, meritocracy, skilled national workforce).",
      "Body Paragraph 2: Discuss arguments for tuition fees (fiscal sustainability, preventing university underfunding, student personal commitment).",
      "Conclusion: Synthesize both arguments, reinforcing your personal viewpoint with reasoned justification.",
    ],
  },
  "task2-advantages": {
    id: "task2-advantages",
    taskNumber: 2,
    type: "advantages",
    typeName: "Advantages & Disadvantages",
    title: "The Rapid Transition to a Cashless Society",
    prompt:
      "In many countries, physical banknotes and coins are increasingly being replaced by contactless payments, mobile apps, and digital transactions.\n\nDo the advantages of a cashless society outweigh the disadvantages?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
    durationMinutes: 40,
    minWords: 250,
    recommendedStructure: [
      "Introduction: Introduce the global cashless trend and state your verdict on whether benefits surpass drawbacks.",
      "Body Paragraph 1: Examine the substantial benefits (frictionless commerce, reduced street crime, automated bookkeeping, efficiency).",
      "Body Paragraph 2: Scrutinize the risks (cyber vulnerability, tech outages, marginalization of senior citizens or unbanked populations).",
      "Conclusion: Weigh both sides decisively, reaffirming why advantages (or disadvantages) are more significant in the long term.",
    ],
  },
  "task2-problem": {
    id: "task2-problem",
    taskNumber: 2,
    type: "problem",
    typeName: "Problem & Solution",
    title: "Escalating Urban Traffic Congestion & Emissions",
    prompt:
      "In many metropolitan regions around the globe, severe traffic congestion has become a daily reality, causing widespread delays and rising air pollution.\n\nWhat are the primary causes of this problem, and what practical measures can governments and city planners implement to resolve it?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
    durationMinutes: 40,
    minWords: 250,
    recommendedStructure: [
      "Introduction: Introduce the problem of urban gridlock and state that systemic causes require multi-faceted policy interventions.",
      "Body Paragraph 1: Identify root causes (poor urban zoning, inadequate public rail networks, car ownership subsidies, suburban sprawl).",
      "Body Paragraph 2: Propose actionable solutions (congestion charging zones, subsidized bus rapid transit, pedestrian infrastructure, remote work incentives).",
      "Conclusion: Summarize the causes and emphasize that sustained municipal commitment will alleviate congestion.",
    ],
  },
  "task2-twopart": {
    id: "task2-twopart",
    taskNumber: 2,
    type: "twopart",
    typeName: "Two-Part / Direct Question",
    title: "Prolonged Work Hours & The Decline of Family Life",
    prompt:
      "In contemporary society, many full-time workers spend significantly longer hours at work than previous generations, resulting in reduced family time.\n\nWhy is this occurring? Is this a positive or negative development?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
    durationMinutes: 40,
    minWords: 250,
    recommendedStructure: [
      "Introduction: Paraphrase the trend and provide succinct thesis answers to both core questions.",
      "Body Paragraph 1 (Question 1): Explain the drivers behind longer work hours (cost of living, hyper-competitive global economies, digital connectivity).",
      "Body Paragraph 2 (Question 2): Argue why this is predominantly a negative trend (family breakdown, stress, developmental deficit in children).",
      "Conclusion: Summarize the causative factors and reaffirm the negative societal repercussions.",
    ],
  },
};

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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAiDrawerOpen, setIsAiDrawerOpen] = useState(false);
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
    if (isTimerRunning && timeLeft > 0 && !isSubmitted) {
      interval = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, timeLeft, isSubmitted]);

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
  const isWordCountMet = words >= task.minWords;

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
    setIsSubmitted(true);
    setIsTimerRunning(false);
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
          {!isSubmitted ? (
            <div className="flex-1 flex flex-col p-6 rounded-3xl bg-white dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/[0.07] shadow-sm backdrop-blur-sm space-y-4 min-h-[550px]">
              {/* Stats Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/[0.05]">
                <div className="flex items-center gap-4 text-xs font-semibold">
                  {/* Word count with dynamic threshold color */}
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-400 dark:text-slate-500 font-medium">Words:</span>
                    <span
                      className={`font-mono font-semibold px-2.5 py-0.5 rounded-full ${
                        isWordCountMet
                          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                          : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                      }`}
                    >
                      {words} / {task.minWords} min
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
                  className="flex items-center gap-2 px-5 py-2 rounded-full bg-rose-500 hover:bg-rose-600 text-white text-xs font-semibold shadow-sm transition-all group"
                >
                  <span>Submit Practice Essay</span>
                  <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ) : (
            /* Submission Confirmation View */
            <div className="p-8 rounded-3xl bg-white dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/[0.07] shadow-sm backdrop-blur-sm space-y-6">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
                  <CheckCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-base text-emerald-900 dark:text-emerald-200">
                    Practice Task Saved Successfully!
                  </h3>
                  <p className="text-xs text-emerald-700 dark:text-emerald-400 mt-0.5">
                    Your response has been recorded. AI evaluation and 4-criteria band scoring will be activated in an upcoming platform release.
                  </p>
                </div>
              </div>

              {/* Stats Summary */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/[0.05] text-center">
                  <span className="text-[10px] uppercase font-medium text-slate-400 block mb-1">Total Words</span>
                  <span className="text-lg font-semibold text-slate-900 dark:text-white font-mono">{words}</span>
                  <span className={`text-[10px] block mt-0.5 font-semibold ${isWordCountMet ? "text-emerald-600 dark:text-emerald-400" : "text-amber-600 dark:text-amber-400"}`}>
                    {isWordCountMet ? "✓ Minimum Met" : "⚠ Below Minimum"}
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/[0.05] text-center">
                  <span className="text-[10px] uppercase font-medium text-slate-400 block mb-1">Paragraphs</span>
                  <span className="text-lg font-semibold text-slate-900 dark:text-white font-mono">{paragraphs}</span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Target: 4-5</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/[0.05] text-center">
                  <span className="text-[10px] uppercase font-medium text-slate-400 block mb-1">Time Remaining</span>
                  <span className="text-lg font-semibold text-slate-900 dark:text-white font-mono">
                    {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">of {task.durationMinutes} mins</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/[0.05] text-center">
                  <span className="text-[10px] uppercase font-medium text-slate-400 block mb-1">Task Type</span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white mt-1 block truncate">
                    {task.typeName}
                  </span>
                  <span className="text-[10px] text-rose-500 font-semibold block mt-0.5">Task {task.taskNumber}</span>
                </div>
              </div>

              {/* Your Written Response Preview */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Your Submitted Text:</h4>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(essayText);
                      alert("Text copied to clipboard!");
                    }}
                    className="flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    <Copy className="w-3.5 h-3.5" /> Copy Text
                  </button>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-800 dark:text-slate-200 whitespace-pre-line leading-relaxed font-serif max-h-72 overflow-y-auto">
                  {essayText}
                </div>
              </div>

              {/* Recommendation Card */}
              <AiRecommendationCard
                isCorrect={isWordCountMet}
                correctAnswer={`Task ${task.taskNumber} Requirement: ${task.minWords}+ words with complete Overview and comparative data.`}
                explanation={`Recommended structure: ${task.recommendedStructure.join(" | ")}`}
                onOpenAi={() => setIsAiDrawerOpen(true)}
              />

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
                >
                  Continue Editing
                </button>

                <div className="flex items-center gap-3">
                  <Link
                    href="/practice/writing"
                    className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition flex items-center gap-1.5"
                  >
                    <span>Practice Another Task</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Global Side Drawer Reviewer (Docked to side, doesn't cover screen) */}
        <AiSolutionReviewer
          taskPrompt={`Task ${task.taskNumber} (${task.typeName}): ${task.prompt}`}
          userSolution={essayText}
          officialExplanation={`Target Structure: ${task.recommendedStructure.join(" | ")}`}
          subject="ielts-writing"
          isOpen={isAiDrawerOpen}
          onClose={() => setIsAiDrawerOpen(false)}
        />
      </main>
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
