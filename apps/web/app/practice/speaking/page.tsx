"use client";

import { useState } from "react";
import Link from "next/link";
import { Sidebar } from "@/components/sidebar";
import {
  MessageSquare,
  Clock,
  Sparkles,
  ArrowRight,
  Flame,
  CheckCircle2,
  FileQuestion,
  UserCheck,
  Timer,
  Layers,
  Award,
  Compass,
  Smile,
  ShieldCheck,
} from "lucide-react";

export default function SpeakingHubPage() {
  const [selectedPart, setSelectedPart] = useState<"part1" | "part2" | "part3">("part1");

  const part1Tasks = [
    {
      id: "part1-hometown",
      title: "Hometown, Neighborhood & Local Community",
      questionsCount: "4 questions",
      duration: "4-5 mins",
      difficulty: "Familiar Topic",
      badgeColor: "bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300 border-blue-200 dark:border-blue-800",
      description: "Introductory questions exploring your home city, seasonal weather, local amenities, and recent neighborhood transformations.",
      previewQuestion: "Where is your hometown located, and what do you appreciate most about living there?",
    },
    {
      id: "part1-studies",
      title: "Academic Studies, Work & Future Ambitions",
      questionsCount: "4 questions",
      duration: "4-5 mins",
      difficulty: "Familiar Topic",
      badgeColor: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
      description: "Direct questions about your chosen major or career, daily study habits, and long-term professional aspirations.",
      previewQuestion: "What influenced your decision to pursue your current field of study or professional career?",
    },
    {
      id: "part1-tech",
      title: "Smartphones, Social Media & Screen Time",
      questionsCount: "4 questions",
      duration: "4-5 mins",
      difficulty: "Contemporary Topic",
      badgeColor: "bg-purple-50 text-purple-700 dark:bg-purple-950/50 dark:text-purple-300 border-purple-200 dark:border-purple-800",
      description: "Discuss how mobile apps, instant messaging, and digital connectivity influence your daily interactions.",
      previewQuestion: "How much time do you typically spend on your smartphone every day, and for what purpose?",
    },
    {
      id: "part1-routine",
      title: "Daily Routine, Leisure & Weekend Habits",
      questionsCount: "4 questions",
      duration: "4-5 mins",
      difficulty: "Familiar Topic",
      badgeColor: "bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300 border-amber-200 dark:border-amber-800",
      description: "Focus on morning habits, exercise routines, relaxation preferences, and leisure activities with friends.",
      previewQuestion: "Do you prefer spending your weekends outdoors or relaxing quietly at home?",
    },
    {
      id: "part1-travel",
      title: "Travel, Holiday Vacations & Transportation",
      questionsCount: "4 questions",
      duration: "4-5 mins",
      difficulty: "Familiar Topic",
      badgeColor: "bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300 border-rose-200 dark:border-rose-800",
      description: "Short answers about favorite travel destinations, preferred transport modes, and future trip aspirations.",
      previewQuestion: "What mode of public transport do you use most frequently when commuting in your city?",
    },
  ];

  const part2Tasks = [
    {
      id: "part2-person",
      title: "A Person Who Has Greatly Influenced Your Life",
      category: "Cue Card • People",
      duration: "1 min prep + 2 mins talk",
      difficulty: "Band 7.0 - 8.5",
      badgeColor: "bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300 border-rose-200 dark:border-rose-800",
      description: "Describe a mentor, teacher, family elder, or inspiring figure who helped shape your values, thinking, or career choices.",
      cues: ["Who this person is", "How you know them", "What qualities make them admirable", "Explain why they influenced you so deeply"],
    },
    {
      id: "part2-trip",
      title: "A Memorable Journey You Will Never Forget",
      category: "Cue Card • Experiences",
      duration: "1 min prep + 2 mins talk",
      difficulty: "Band 6.5 - 8.0",
      badgeColor: "bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300 border-blue-200 dark:border-blue-800",
      description: "Describe an unforgettable journey or adventure, recounting key highlights, logistical challenges, and memorable discoveries.",
      cues: ["Where you traveled to", "Who accompanied you on the trip", "What unexpected events took place", "Explain why it remains memorable"],
    },
    {
      id: "part2-app",
      title: "An Indispensable Website or Mobile Application",
      category: "Cue Card • Technology",
      duration: "1 min prep + 2 mins talk",
      difficulty: "Band 7.0 - 8.5",
      badgeColor: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
      description: "Speak about an application or digital platform that significantly enhances your daily productivity, learning, or communication.",
      cues: ["What the app or website is", "How frequently you utilize it", "What distinct features set it apart", "Explain why it is indispensable to you"],
    },
    {
      id: "part2-landmark",
      title: "A Historic Building or Landmark in Your Country",
      category: "Cue Card • Places",
      duration: "1 min prep + 2 mins talk",
      difficulty: "Band 7.5 - 8.5",
      badgeColor: "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800",
      description: "Describe an architecturally or historically significant monument, explaining its heritage and cultural resonance.",
      cues: ["Where the landmark is located", "What its architectural appearance is like", "What historical events it commemorates", "Explain why citizens value it"],
    },
    {
      id: "part2-skill",
      title: "A Useful Practical Skill You Learned as a Teenager",
      category: "Cue Card • Skills & Habits",
      duration: "1 min prep + 2 mins talk",
      difficulty: "Band 6.5 - 7.5",
      badgeColor: "bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300 border-amber-200 dark:border-amber-800",
      description: "Describe an important practical capability (such as cooking, car repair, public speaking, or coding) and its lasting value.",
      cues: ["What the skill was", "Who taught or guided you", "What challenges you faced while learning", "Explain how this skill benefits you today"],
    },
  ];

  const part3Tasks = [
    {
      id: "part3-society",
      title: "Tradition vs Modernization in Contemporary Culture",
      questionsCount: "4 abstract questions",
      duration: "4-5 mins",
      difficulty: "Band 7.5 - 9.0",
      badgeColor: "bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300 border-rose-200 dark:border-rose-800",
      description: "Examine whether globalization erodes unique cultural identities, and how heritage can be preserved in digital eras.",
      previewQuestion: "Is it essential for younger generations to strictly maintain traditional cultural customs in an increasingly globalized world?",
    },
    {
      id: "part3-workforce",
      title: "Artificial Intelligence, Automation & Future Job Markets",
      questionsCount: "4 abstract questions",
      duration: "4-5 mins",
      difficulty: "Band 8.0 - 9.0",
      badgeColor: "bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300 border-blue-200 dark:border-blue-800",
      description: "Debate the social implications of AI displacement, ethical considerations in automation, and education system adaptation.",
      previewQuestion: "What human abilities and soft skills will remain irreplaceable by artificial intelligence in the next twenty years?",
    },
    {
      id: "part3-environment",
      title: "Environmental Responsibility: Citizen vs Government",
      questionsCount: "4 abstract questions",
      duration: "4-5 mins",
      difficulty: "Band 7.5 - 8.5",
      badgeColor: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
      description: "Analyze the balance between corporate regulations, government climate legislation, and grass-roots consumer choices.",
      previewQuestion: "Do you believe strict environmental regulations or grassroots consumer habits are more effective in curbing emissions?",
    },
    {
      id: "part3-media",
      title: "Digital News, Social Media & Credibility",
      questionsCount: "4 abstract questions",
      duration: "4-5 mins",
      difficulty: "Band 7.0 - 8.5",
      badgeColor: "bg-purple-50 text-purple-700 dark:bg-purple-950/50 dark:text-purple-300 border-purple-200 dark:border-purple-800",
      description: "Discuss sensationalism, algorithm-driven echo chambers, and methods for fostering critical media literacy among citizens.",
      previewQuestion: "How can internet users reliably discern between credible investigative journalism and misinformation online?",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 flex flex-col md:flex-row transition-colors duration-200">
      <Sidebar />

      <main className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-8 space-y-8">
        {/* Header banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 bg-white dark:bg-white/[0.03] p-6 sm:p-8 rounded-3xl border border-slate-200/70 dark:border-white/[0.07] shadow-sm backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5" /> IELTS Speaking Practice
              </span>
              <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                • 3 Official Test Parts
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white tracking-tight">
              Choose Speaking Practice Task Type
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1.5 max-w-xl leading-relaxed">
              Master the official IELTS Speaking test structure: Part 1 personal questions, Part 2 Cue Cards (with 1-min prep timer & notes scratchpad), and Part 3 abstract discussion.
            </p>
          </div>

          {/* Part Selection Tabs */}
          <div className="inline-flex p-1 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200/70 dark:border-white/[0.08] self-start sm:self-auto shrink-0">
            <button
              type="button"
              onClick={() => setSelectedPart("part1")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedPart === "part1"
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Smile className="w-3.5 h-3.5" />
              <span>Part 1: Interview</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedPart("part2")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedPart === "part2"
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Timer className="w-3.5 h-3.5" />
              <span>Part 2: Cue Card</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedPart("part3")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedPart === "part3"
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Part 3: Discussion</span>
            </button>
          </div>
        </div>

        {/* Informational Clean Banner: Voice Assistant Free & High Reliability */}
        <div className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200/70 dark:border-white/[0.06] text-xs text-slate-600 dark:text-slate-300">
          <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
          <span>
            <strong className="font-semibold text-slate-800 dark:text-slate-200">Distraction-Free Structured Practice:</strong> No microphone permissions or voice assistants required. Focus on response formulation, pacing with the official prep and speaking timers, and structured note-taking.
          </span>
        </div>

        {/* Part 1 Content */}
        {selectedPart === "part1" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                  <Smile className="w-4 h-4 text-emerald-500" /> Part 1: Personal Interview (4–5 minutes)
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Short, direct answers to everyday personal questions. Aim for 2–4 sentences per answer with natural fluency and discourse markers.
                </p>
              </div>
              <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
                {part1Tasks.length} topics available
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {part1Tasks.map((task) => (
                <div
                  key={task.id}
                  className="p-6 rounded-3xl bg-white dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/[0.07] shadow-sm hover:shadow-md hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-medium border ${task.badgeColor}`}>
                        {task.difficulty}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                        <Clock className="w-3.5 h-3.5 text-emerald-500" /> {task.duration}
                      </span>
                    </div>

                    <h3 className="font-semibold text-base text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {task.title}
                    </h3>

                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                      {task.description}
                    </p>

                    <div className="mt-4 p-3 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/[0.05] text-[11px] text-slate-600 dark:text-slate-400">
                      <span className="font-semibold text-slate-700 dark:text-slate-300 block mb-0.5">Sample Question:</span>
                      &ldquo;{task.previewQuestion}&rdquo;
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/[0.05] flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                      <span className="font-medium">Part 1</span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">{task.questionsCount}</span>
                    </div>
                  </div>

                  <Link
                    href={`/practice/ielts/speaking?part=1&id=${task.id}`}
                    className="mt-5 w-full py-2.5 px-4 rounded-full bg-slate-100 hover:bg-slate-900 hover:text-white dark:bg-white/[0.05] dark:hover:bg-white dark:hover:text-slate-900 text-slate-700 dark:text-slate-200 border border-transparent dark:border-white/[0.05] text-xs font-semibold flex items-center justify-center gap-1.5 transition-all group/btn"
                  >
                    <span>Start Part 1 Practice</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Part 2 Content */}
        {selectedPart === "part2" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                  <Timer className="w-4 h-4 text-emerald-500" /> Part 2: Individual Long Turn / Cue Card
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Receive a candidate task card, use the 1-minute countdown to write bullet notes, and deliver a continuous 1–2 minute speech.
                </p>
              </div>
              <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
                {part2Tasks.length} cue cards
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {part2Tasks.map((task) => (
                <div
                  key={task.id}
                  className="p-6 rounded-3xl bg-white dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/[0.07] shadow-sm hover:shadow-md hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-medium border ${task.badgeColor}`}>
                        {task.category}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                        <Clock className="w-3.5 h-3.5 text-emerald-500" /> {task.duration}
                      </span>
                    </div>

                    <h3 className="font-semibold text-base text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {task.title}
                    </h3>

                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                      {task.description}
                    </p>

                    <div className="mt-4 p-3 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/[0.05] text-[11px] text-slate-600 dark:text-slate-400">
                      <span className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">You should say:</span>
                      <ul className="list-disc list-inside space-y-0.5">
                        {task.cues.map((cue, idx) => (
                          <li key={idx} className="text-[10.5px] truncate">{cue}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/[0.05] flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                      <span className="font-medium">{task.difficulty}</span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">1-min prep + 2-min talk</span>
                    </div>
                  </div>

                  <Link
                    href={`/practice/ielts/speaking?part=2&id=${task.id}`}
                    className="mt-5 w-full py-2.5 px-4 rounded-full bg-slate-100 hover:bg-slate-900 hover:text-white dark:bg-white/[0.05] dark:hover:bg-white dark:hover:text-slate-900 text-slate-700 dark:text-slate-200 border border-transparent dark:border-white/[0.05] text-xs font-semibold flex items-center justify-center gap-1.5 transition-all group/btn"
                  >
                    <span>Start Cue Card Practice</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Part 3 Content */}
        {selectedPart === "part3" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                  <Compass className="w-4 h-4 text-emerald-500" /> Part 3: Two-Way Analytical Discussion (4–5 minutes)
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Abstract, analytical questions linked to the Part 2 theme exploring broader societal, technological, and ethical trends.
                </p>
              </div>
              <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
                {part3Tasks.length} discussion themes
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
              {part3Tasks.map((task) => (
                <div
                  key={task.id}
                  className="p-6 rounded-3xl bg-white dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/[0.07] shadow-sm hover:shadow-md hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-medium border ${task.badgeColor}`}>
                        Part 3 • Abstract
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                        <Clock className="w-3.5 h-3.5 text-emerald-500" /> {task.duration}
                      </span>
                    </div>

                    <h3 className="font-semibold text-base text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {task.title}
                    </h3>

                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                      {task.description}
                    </p>

                    <div className="mt-4 p-3 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/[0.05] text-[11px] text-slate-600 dark:text-slate-400">
                      <span className="font-semibold text-slate-700 dark:text-slate-300 block mb-0.5">Core Question:</span>
                      &ldquo;{task.previewQuestion}&rdquo;
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/[0.05] flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                      <span className="font-medium">{task.difficulty}</span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">{task.questionsCount}</span>
                    </div>
                  </div>

                  <Link
                    href={`/practice/ielts/speaking?part=3&id=${task.id}`}
                    className="mt-5 w-full py-2.5 px-4 rounded-full bg-slate-100 hover:bg-slate-900 hover:text-white dark:bg-white/[0.05] dark:hover:bg-white dark:hover:text-slate-900 text-slate-700 dark:text-slate-200 border border-transparent dark:border-white/[0.05] text-xs font-semibold flex items-center justify-center gap-1.5 transition-all group/btn"
                  >
                    <span>Start Part 3 Practice</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
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
