"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  ArrowLeft,
  MessageSquare,
  Clock,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  FileText,
  Smile,
  Timer,
  Compass,
  Lightbulb,
  CheckCheck,
  Edit3,
  Volume2,
  Info,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { AiSolutionReviewer, AiRecommendationCard } from "@/components/ai-solution-reviewer";

interface SpeakingPack {
  id: string;
  part: 1 | 2 | 3;
  title: string;
  category: string;
  instructions: string;
  // For Part 1 & Part 3
  questions?: Array<{
    id: number;
    prompt: string;
    tips: string;
    suggestedVocab: string[];
  }>;
  // For Part 2
  cueCard?: {
    topic: string;
    cues: string[];
    strategy: string[];
  };
}

const SPEAKING_PACKS: Record<string, SpeakingPack> = {
  // Part 1
  "part1-hometown": {
    id: "part1-hometown",
    part: 1,
    title: "Hometown, Neighborhood & Local Community",
    category: "Personal Interview",
    instructions: "Answer each question directly in 2 to 4 sentences. Speak naturally and elaborate with a specific detail or personal example.",
    questions: [
      {
        id: 1,
        prompt: "Where is your hometown located, and how would you describe it?",
        tips: "Give geographical location and 1-2 distinct characteristics (e.g. bustling metropolis vs tranquil coastal town).",
        suggestedVocab: ["Nestled in", "Vibrant community", "Industrial hub", "Picturesque scenery"],
      },
      {
        id: 2,
        prompt: "What is your favorite spot in your hometown to spend your free time?",
        tips: "Name a specific park, cafe, or library and explain why you feel at peace or energized there.",
        suggestedVocab: ["Go-to spot", "Lively atmosphere", "A sanctuary of calm", "Rich architectural heritage"],
      },
      {
        id: 3,
        prompt: "Has your hometown changed significantly over the past five to ten years?",
        tips: "Mention infrastructure, transport, or population expansion.",
        suggestedVocab: ["Rapid modernization", "Commercial boom", "Pedestrian zones", "Extensive redevelopment"],
      },
      {
        id: 4,
        prompt: "Do you anticipate continuing to reside in your hometown in the near future?",
        tips: "Express your future intentions with conditional phrases (e.g. 'Unless career opportunities arise elsewhere...').",
        suggestedVocab: ["Strong sense of belonging", "Broaden my horizons", "For the foreseeable future", "Pursue career prospects"],
      },
    ],
  },
  "part1-studies": {
    id: "part1-studies",
    part: 1,
    title: "Academic Studies, Work & Future Ambitions",
    category: "Personal Interview",
    instructions: "Answer clearly with academic vocabulary and precise time markers.",
    questions: [
      {
        id: 1,
        prompt: "Are you currently a student or do you work in a full-time profession?",
        tips: "State your major/role clearly and where you are pursuing it.",
        suggestedVocab: ["Currently majoring in", "Hands-on experience", "Rigorous curriculum", "Professional field"],
      },
      {
        id: 2,
        prompt: "What initially inspired you to pursue this particular discipline or career path?",
        tips: "Recall a formative moment, mentor, or genuine curiosity.",
        suggestedVocab: ["Sparked my fascination", "Steep learning curve", "Passionate about", "Long-standing interest"],
      },
      {
        id: 3,
        prompt: "What aspect of your daily studies or job do you find most intellectually engaging?",
        tips: "Highlight problem solving, analytical thinking, or teamwork.",
        suggestedVocab: ["Intellectually stimulating", "Collaborative projects", "Analytical reasoning", "Overcoming hurdles"],
      },
      {
        id: 4,
        prompt: "Where do you envision yourself professionally in five years from now?",
        tips: "Formulate realistic milestones and international aspirations.",
        suggestedVocab: ["Attain leadership", "Specialized expertise", "Global opportunities", "Pioneer innovative solutions"],
      },
    ],
  },
  "part1-tech": {
    id: "part1-tech",
    part: 1,
    title: "Smartphones, Social Media & Screen Time",
    category: "Personal Interview",
    instructions: "Discuss digital habits balanced with personal self-discipline.",
    questions: [
      {
        id: 1,
        prompt: "How much time do you typically spend using your smartphone each day?",
        tips: "Give an honest estimate and break down usage (study, entertainment, communication).",
        suggestedVocab: ["Glued to the screen", "Productivity apps", "Essential utility", "Digital detox"],
      },
      {
        id: 2,
        prompt: "Which mobile applications do you rely on most heavily for your daily routines?",
        tips: "Explain why specific tools are indispensable.",
        suggestedVocab: ["Streamline my schedule", "Instant messaging", "Cloud storage", "Indispensable tool"],
      },
      {
        id: 3,
        prompt: "Do you think technology makes people more connected or more isolated?",
        tips: "Give a balanced opinion with a short justification.",
        suggestedVocab: ["Double-edged sword", "Superficial interactions", "Bridge geographical distances", "Fosters meaningful bonds"],
      },
      {
        id: 4,
        prompt: "Did you use digital gadgets frequently when you were a child?",
        tips: "Contrast earlier childhood memories with today's ubiquitous screens.",
        suggestedVocab: ["In stark contrast to", "Outdoor recreational activities", "Analog upbringing", "Technological revolution"],
      },
    ],
  },
  "part1-routine": {
    id: "part1-routine",
    part: 1,
    title: "Daily Routine, Leisure & Weekend Habits",
    category: "Personal Interview",
    instructions: "Describe habits and relaxation techniques with good sentence variety.",
    questions: [
      {
        id: 1,
        prompt: "What is your typical morning routine before starting your study or work day?",
        tips: "Outline sequential morning rituals.",
        suggestedVocab: ["Early riser", "Kickstart my morning", "Consistent routine", "Set intentions"],
      },
      {
        id: 2,
        prompt: "Do you prefer spending your weekends outdoors or relaxing quietly at home?",
        tips: "Express preferences with contrast markers.",
        suggestedVocab: ["Unwind and recharge", "Venture into nature", "Sedentary lifestyle", "Quality leisure time"],
      },
      {
        id: 3,
        prompt: "How do you manage your time when faced with numerous deadlines?",
        tips: "Mention prioritization frameworks or time-blocking.",
        suggestedVocab: ["Prioritize high-impact tasks", "To-do lists", "Avoid procrastination", "Maintain focus"],
      },
      {
        id: 4,
        prompt: "Is there any hobby you would like to take up in the future?",
        tips: "Name a creative or athletic pursuit.",
        suggestedVocab: ["Eager to delve into", "Master a musical instrument", "Dedicate time to", "Creative outlet"],
      },
    ],
  },
  "part1-travel": {
    id: "part1-travel",
    part: 1,
    title: "Travel, Holiday Vacations & Transportation",
    category: "Personal Interview",
    instructions: "Share travel experiences and preferences using past and future forms.",
    questions: [
      {
        id: 1,
        prompt: "Do you enjoy traveling to unfamiliar destinations?",
        tips: "Discuss the thrill of experiencing new cultures and perspectives.",
        suggestedVocab: ["Wanderlust", "Broaden horizons", "Immerse in local traditions", "Step outside comfort zone"],
      },
      {
        id: 2,
        prompt: "What public transport mode do you use most frequently in your city?",
        tips: "Compare subway, buses, or trains for punctuality and convenience.",
        suggestedVocab: ["Cost-effective", "Avoid rush-hour congestion", "Punctual rail transit", "Seamless connectivity"],
      },
      {
        id: 3,
        prompt: "Do you prefer traveling alone or in a group with friends and family?",
        tips: "Weigh spontaneous solo independence vs shared camaraderie.",
        suggestedVocab: ["Solo expedition", "Shared camaraderie", "Flexible itinerary", "Cherished memories"],
      },
      {
        id: 4,
        prompt: "Which country would be at the very top of your bucket list to visit next?",
        tips: "Give reasons based on architecture, nature, or history.",
        suggestedVocab: ["Breathtaking landscapes", "Historic marvels", "Culinary heritage", "High on my wishlist"],
      },
    ],
  },

  // Part 2: Cue Cards
  "part2-person": {
    id: "part2-person",
    part: 2,
    title: "A Person Who Has Greatly Influenced Your Life",
    category: "Cue Card • People",
    instructions: "You will have 1 minute to prepare your response and jot down notes. Then speak for 1 to 2 minutes on the topic card.",
    cueCard: {
      topic: "Describe a person who has had a significant influence on your life.",
      cues: [
        "Who this person is and how you first met them",
        "What kind of person they are (character and demeanor)",
        "What specific advice or guidance they offered you",
        "And explain why this person has had such a profound impact on your personal development",
      ],
      strategy: [
        "Minute 0:00 - 0:30: Introduce the person and their relationship to you.",
        "Minute 0:30 - 1:00: Describe their personal qualities with 2-3 strong adjectives (e.g. empathetic, steadfast).",
        "Minute 1:00 - 1:30: Share a concrete story or pivotal moment where they guided you.",
        "Minute 1:30 - 2:00: Reflect on how their example continues to shape your decisions today.",
      ],
    },
  },
  "part2-trip": {
    id: "part2-trip",
    part: 2,
    title: "A Memorable Journey You Will Never Forget",
    category: "Cue Card • Experiences",
    instructions: "You will have 1 minute to prepare your response and jot down notes. Then speak for 1 to 2 minutes on the topic card.",
    cueCard: {
      topic: "Describe an unforgettable journey or trip that you went on.",
      cues: [
        "Where you traveled to and how you got there",
        "Who accompanied you on this journey",
        "What memorable or unexpected events happened",
        "And explain why this journey left such an indelible impression on you",
      ],
      strategy: [
        "Minute 0:00 - 0:30: Set the scene: destination, time of year, travel companions.",
        "Minute 0:30 - 1:15: Narrate the key highlights, sensory details, and any hurdles faced.",
        "Minute 1:15 - 2:00: Explain the emotional takeaway and why it remains vivid in your memory.",
      ],
    },
  },
  "part2-app": {
    id: "part2-app",
    part: 2,
    title: "An Indispensable Website or Mobile Application",
    category: "Cue Card • Technology",
    instructions: "You will have 1 minute to prepare your response and jot down notes. Then speak for 1 to 2 minutes on the topic card.",
    cueCard: {
      topic: "Describe a website or mobile application that you use regularly and consider essential.",
      cues: [
        "What the app or website is and what it does",
        "How frequently you use it and for what primary tasks",
        "What distinct features make it superior to alternatives",
        "And explain why you would find it difficult to manage without it",
      ],
      strategy: [
        "Minute 0:00 - 0:30: Name the app, its core function, and how you discovered it.",
        "Minute 0:30 - 1:15: Detail its user interface and specific features that boost your efficiency.",
        "Minute 1:15 - 2:00: Contrast your routine with and without this digital tool.",
      ],
    },
  },
  "part2-landmark": {
    id: "part2-landmark",
    part: 2,
    title: "A Historic Building or Landmark in Your Country",
    category: "Cue Card • Places",
    instructions: "You will have 1 minute to prepare your response and jot down notes. Then speak for 1 to 2 minutes on the topic card.",
    cueCard: {
      topic: "Describe a historical building or cultural landmark located in your country.",
      cues: [
        "Where it is located and what era it dates back to",
        "What its architectural appearance looks like",
        "What historic events or traditions it is associated with",
        "And explain why this building holds cultural significance for citizens",
      ],
      strategy: [
        "Minute 0:00 - 0:30: Introduce the landmark, location, and historical origins.",
        "Minute 0:30 - 1:15: Describe structural architecture, building materials, and ambiance.",
        "Minute 1:15 - 2:00: Emphasize national pride and heritage preservation.",
      ],
    },
  },
  "part2-skill": {
    id: "part2-skill",
    part: 2,
    title: "A Useful Practical Skill You Learned as a Teenager",
    category: "Cue Card • Skills & Habits",
    instructions: "You will have 1 minute to prepare your response and jot down notes. Then speak for 1 to 2 minutes on the topic card.",
    cueCard: {
      topic: "Describe a practical skill you learned that proved useful in your life.",
      cues: [
        "What the skill was and why you decided to learn it",
        "Who taught or guided you through the learning process",
        "What challenges or frustrations you encountered while mastering it",
        "And explain how having this skill has benefited you in practical everyday life",
      ],
      strategy: [
        "Minute 0:00 - 0:30: Introduce the skill and the context in which you began learning.",
        "Minute 0:30 - 1:15: Detail the learning stages, perseverance, and mentorship.",
        "Minute 1:15 - 2:00: Provide concrete examples of how this skill solves real problems today.",
      ],
    },
  },

  // Part 3: Abstract Discussions
  "part3-society": {
    id: "part3-society",
    part: 3,
    title: "Tradition vs Modernization in Contemporary Culture",
    category: "Two-Way Analytical Discussion",
    instructions: "Answer with extended abstract arguments. Use formal discourse markers and weigh contrasting societal perspectives.",
    questions: [
      {
        id: 1,
        prompt: "Is it essential for younger generations to maintain traditional customs in an increasingly globalized world?",
        tips: "Balance cultural preservation with progressive social evolution.",
        suggestedVocab: ["Cultural heritage", "Homogenization", "Rooted in ancestry", "Societal cohesion"],
      },
      {
        id: 2,
        prompt: "How has consumerism and mass commercialization altered the way families celebrate historic holidays?",
        tips: "Contrast historical spiritual/communal values with contemporary gift-giving commercial hype.",
        suggestedVocab: ["Commercial exploitation", "Focal point", "Superficial materialism", "Shared introspection"],
      },
      {
        id: 3,
        prompt: "Do older and younger generations hold irreconcilable perspectives on moral values?",
        tips: "Discuss intergenerational dialogue, tolerance, and societal shifts.",
        suggestedVocab: ["Intergenerational friction", "Mutual understanding", "Changing social mores", "Bridging the divide"],
      },
      {
        id: 4,
        prompt: "Can national governments play an active role in safeguarding indigenous folklore and arts?",
        tips: "Propose institutional funding, school curricula, and museum preservation.",
        suggestedVocab: ["State patronage", "Curricular integration", "Preserve cultural relics", "Tangible support"],
      },
    ],
  },
  "part3-workforce": {
    id: "part3-workforce",
    part: 3,
    title: "Artificial Intelligence, Automation & Future Job Markets",
    category: "Two-Way Analytical Discussion",
    instructions: "Examine technological and economic shifts with sophisticated arguments.",
    questions: [
      {
        id: 1,
        prompt: "What human abilities and soft skills will remain irreplaceable by artificial intelligence in the next twenty years?",
        tips: "Highlight genuine empathy, ethical reasoning, and creative leadership.",
        suggestedVocab: ["Emotional intelligence", "Nuanced diplomacy", "Ethical discernment", "Abstract ingenuity"],
      },
      {
        id: 2,
        prompt: "Should educational institutions overhaul traditional curricula to emphasize programming and data literacy?",
        tips: "Advocate for a synthesis of STEM competencies and critical thinking humanities.",
        suggestedVocab: ["Interdisciplinary curriculum", "Cognitive agility", "Rote memorization", "Technological fluency"],
      },
      {
        id: 3,
        prompt: "How can economies prevent mass technological unemployment among low-skilled workers?",
        tips: "Discuss retraining initiatives, lifelong learning, and social safety nets.",
        suggestedVocab: ["Reskilling programs", "Universal safety nets", "Economic disruption", "Equitable transition"],
      },
      {
        id: 4,
        prompt: "Will remote work permanently diminish the significance of metropolitan corporate districts?",
        tips: "Analyze urban decentralization, commercial real estate, and digital nomadism.",
        suggestedVocab: ["Decentralized workforce", "Commercial real estate decline", "Workplace flexibility", "Urban revitalization"],
      },
    ],
  },
  "part3-environment": {
    id: "part3-environment",
    part: 3,
    title: "Environmental Responsibility: Citizen vs Government",
    category: "Two-Way Analytical Discussion",
    instructions: "Debate corporate responsibility versus grassroots environmental efforts.",
    questions: [
      {
        id: 1,
        prompt: "Are legislative penalties or consumer educational campaigns more effective in reducing carbon emissions?",
        tips: "Compare regulatory enforcement (taxes, bans) with voluntary lifestyle shifts.",
        suggestedVocab: ["Stringent legislation", "Carbon taxation", "Public awareness drives", "Deterrent effect"],
      },
      {
        id: 2,
        prompt: "Should developed nations bear a disproportionate financial burden for global climate mitigation?",
        tips: "Discuss historical cumulative emissions vs developing nations' industrial aspirations.",
        suggestedVocab: ["Historical emissions liability", "Climate reparations", "Equitable burden-sharing", "Renewable subsidies"],
      },
      {
        id: 3,
        prompt: "How can individuals realistically minimize their domestic waste footprint without sacrificing living standards?",
        tips: "Mention circular economy, composting, and packaging minimization.",
        suggestedVocab: ["Circular economy", "Zero-waste lifestyle", "Biodegradable packaging", "Conscious consumerism"],
      },
      {
        id: 4,
        prompt: "Will market forces and green tech innovations solve the ecological crisis faster than state policies?",
        tips: "Examine private sector investment in batteries/fusion vs state infrastructure planning.",
        suggestedVocab: ["Green capital investment", "Technological breakthroughs", "Subsidized transition", "Regulatory mandates"],
      },
    ],
  },
  "part3-media": {
    id: "part3-media",
    part: 3,
    title: "Digital News, Social Media & Credibility",
    category: "Two-Way Analytical Discussion",
    instructions: "Analyze journalistic integrity and digital information literacy.",
    questions: [
      {
        id: 1,
        prompt: "How can internet users reliably discern between credible investigative reporting and fabricated misinformation?",
        tips: "Discuss source verification, fact-checking outlets, and recognizing clickbait sensationalism.",
        suggestedVocab: ["Cross-reference sources", "Algorithmic echo chambers", "Sensationalist clickbait", "Media literacy"],
      },
      {
        id: 2,
        prompt: "Do tech corporations have a civic duty to censor harmful falsehoods on their platforms?",
        tips: "Weigh free speech rights against preventing public health and democratic harms.",
        suggestedVocab: ["Content moderation", "Freedom of expression", "Disinformation dissemination", "Algorithmic accountability"],
      },
      {
        id: 3,
        prompt: "Has the rapid 24-hour news cycle degraded the quality of in-depth investigative journalism?",
        tips: "Contrast superficial breaking-news alerts with thorough multi-month investigative research.",
        suggestedVocab: ["24-hour news cycle", "Sensationalism over substance", "Investigative rigor", "Attention economy"],
      },
      {
        id: 4,
        prompt: "Should school curricula mandate formal training in digital critical thinking from a young age?",
        tips: "Propose practical classroom modules on evaluating digital claims.",
        suggestedVocab: ["Critical inquiry", "Digital citizenship", "Skeptical discernment", "Navigating the web safely"],
      },
    ],
  },
};

function SpeakingSimulatorContent() {
  const searchParams = useSearchParams();
  const packId = searchParams.get("id") || "part1-hometown";
  const pack = SPEAKING_PACKS[packId] || SPEAKING_PACKS["part1-hometown"];

  // Part 1 & Part 3 State
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [qTimer, setQTimer] = useState(45);
  const [isQTimerRunning, setIsQTimerRunning] = useState(false);

  // Part 2 Cue Card State
  const [prepTime, setPrepTime] = useState(60); // 1-minute prep
  const [isPrepRunning, setIsPrepRunning] = useState(false);
  const [speakTime, setSpeakTime] = useState(120); // 2-minute talk
  const [isSpeakRunning, setIsSpeakRunning] = useState(false);

  // Common scratchpad notes
  const [notes, setNotes] = useState("");
  const [isAiDrawerOpen, setIsAiDrawerOpen] = useState(false);
  const [isSessionFinished, setIsSessionFinished] = useState(false);

  // Question timer interval
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isQTimerRunning && qTimer > 0) {
      interval = setInterval(() => {
        setQTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isQTimerRunning, qTimer]);

  // Part 2: 1-minute prep timer
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isPrepRunning && prepTime > 0) {
      interval = setInterval(() => {
        setPrepTime((prev) => {
          if (prev <= 1) {
            setIsPrepRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPrepRunning, prepTime]);

  // Part 2: 2-minute talk timer
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isSpeakRunning && speakTime > 0) {
      interval = setInterval(() => {
        setSpeakTime((prev) => {
          if (prev <= 1) {
            setIsSpeakRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isSpeakRunning, speakTime]);

  // Switch questions in Part 1 / Part 3
  const handleNextQuestion = () => {
    if (pack.questions && currentQIndex < pack.questions.length - 1) {
      setCurrentQIndex((prev) => prev + 1);
      setQTimer(pack.part === 1 ? 45 : 60);
      setIsQTimerRunning(false);
    } else {
      setIsSessionFinished(true);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQIndex > 0) {
      setCurrentQIndex((prev) => prev - 1);
      setQTimer(pack.part === 1 ? 45 : 60);
      setIsQTimerRunning(false);
    }
  };

  const currentQuestion = pack.questions ? pack.questions[currentQIndex] : null;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-200">
      {/* Top Test Header Bar */}
      <header className="sticky top-0 z-30 flex items-center justify-between px-4 sm:px-6 h-14 bg-white/80 dark:bg-[#090d16]/80 border-b border-slate-200/70 dark:border-white/[0.07] backdrop-blur-md">
        <div className="flex items-center gap-3">
          <Link
            href="/practice/speaking"
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white px-3 py-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-white/[0.05] transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Speaking Hub</span>
          </Link>

          <span className="text-slate-300 dark:text-slate-700">|</span>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-3 py-0.5 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
              Part {pack.part}
            </span>
            <span className="text-xs font-medium text-slate-600 dark:text-slate-300 hidden md:inline truncate max-w-sm">
              {pack.title}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-medium text-slate-400 hidden sm:inline">
            Official Simulation
          </span>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Practice Content */}
      <main className="flex-1 max-w-5xl w-full mx-auto p-4 sm:p-8 space-y-6">
        {!isSessionFinished ? (
          <>
            {/* PART 1 & PART 3: INTERVIEW & DISCUSSION INTERFACE */}
            {pack.part !== 2 && currentQuestion && (
              <div className="space-y-6">
                {/* Question Progress Tracker */}
                <div className="flex items-center justify-between p-4 rounded-3xl bg-white dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/[0.07] shadow-sm backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-400">Question Progress:</span>
                    <div className="flex items-center gap-1.5">
                      {pack.questions?.map((_, idx) => (
                        <span
                          key={idx}
                          className={`w-6 h-6 rounded-full text-xs font-semibold flex items-center justify-center transition-all ${
                            idx === currentQIndex
                              ? "bg-rose-500 text-white shadow-sm"
                              : idx < currentQIndex
                              ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                              : "bg-slate-100 dark:bg-white/[0.05] text-slate-400"
                          }`}
                        >
                          {idx + 1}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Individual Question Self-Timer */}
                  <div className="flex items-center gap-2 bg-slate-50 dark:bg-white/[0.02] px-3 py-1.5 rounded-full border border-slate-200/60 dark:border-white/[0.06] font-mono text-xs">
                    <Clock className="w-3.5 h-3.5 text-rose-500" />
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{qTimer}s target</span>
                    <button
                      onClick={() => setIsQTimerRunning(!isQTimerRunning)}
                      className="p-1 text-slate-400 hover:text-slate-800 dark:hover:text-white transition"
                      title={isQTimerRunning ? "Pause" : "Start"}
                    >
                      {isQTimerRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                    </button>
                    <button
                      onClick={() => {
                        setIsQTimerRunning(false);
                        setQTimer(pack.part === 1 ? 45 : 60);
                      }}
                      className="p-1 text-slate-400 hover:text-slate-800 dark:hover:text-white transition"
                      title="Reset"
                    >
                      <RotateCcw className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Question Examiner Card */}
                <div className="p-8 rounded-3xl bg-white dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/[0.07] shadow-sm backdrop-blur-sm space-y-6 relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-3 py-1 rounded-full border border-rose-200 dark:border-rose-800/60">
                      Examiner Prompt #{currentQuestion.id} of {pack.questions?.length}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {pack.part === 1 ? "Aim for 2-4 sentences" : "Aim for 3-5 sentences"}
                    </span>
                  </div>

                  <div className="p-6 rounded-2xl bg-rose-500/[0.04] dark:bg-rose-500/[0.05] border border-rose-500/20 space-y-2">
                    <span className="text-xs font-semibold text-rose-500 uppercase tracking-wider block">
                      Examiner Question:
                    </span>
                    <p className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white leading-relaxed font-serif">
                      &ldquo;{currentQuestion.prompt}&rdquo;
                    </p>
                  </div>

                  {/* Structuring Advice & Band 7+ Vocab */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/[0.05] space-y-1.5">
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                        <Lightbulb className="w-3.5 h-3.5 text-amber-500" /> Response Strategy
                      </span>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        {currentQuestion.tips}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/[0.05] space-y-1.5">
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-rose-500" /> High-Band Collocations
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {currentQuestion.suggestedVocab.map((v, i) => (
                          <span
                            key={i}
                            className="text-[11px] px-2.5 py-0.5 rounded-full bg-white dark:bg-white/[0.05] border border-slate-200/70 dark:border-white/[0.08] font-medium text-slate-700 dark:text-slate-300"
                          >
                            {v}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Quick Scratchpad / Mental Notes */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <Edit3 className="w-3.5 h-3.5 text-indigo-500" /> Optional Mental Notes / Bullet Points:
                    </label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Jot down keywords, connectors (e.g. 'In all honesty...', 'For instance...')..."
                      rows={3}
                      className="w-full p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/70 dark:border-white/[0.07] text-xs sm:text-sm text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500/50 resize-none font-mono"
                    />
                  </div>

                  {/* Recommendation Card */}
                  <AiRecommendationCard
                    isCorrect={notes.trim().length > 15}
                    correctAnswer="Band 7+ Structured Points"
                    explanation={`Strategy: ${currentQuestion.tips}. Key Collocations: ${currentQuestion.suggestedVocab.join(", ")}`}
                    onOpenAi={() => setIsAiDrawerOpen(true)}
                  />

                  {/* Navigation Controls */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-white/[0.05]">
                    <button
                      type="button"
                      disabled={currentQIndex === 0}
                      onClick={handlePrevQuestion}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                        currentQIndex === 0
                          ? "opacity-40 cursor-not-allowed text-slate-400"
                          : "text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/[0.05] hover:bg-slate-200 dark:hover:bg-white/[0.09]"
                      }`}
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Previous Question</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleNextQuestion}
                      className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-rose-500 hover:bg-rose-600 text-white text-xs font-semibold shadow-sm transition-all group"
                    >
                      <span>
                        {currentQIndex === (pack.questions?.length ?? 1) - 1
                          ? "Complete Practice Session"
                          : "Next Question"}
                      </span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* PART 2: CUE CARD SIMULATOR */}
            {pack.part === 2 && pack.cueCard && (
              <div className="space-y-6">
                {/* Official Dual Timers: 1-Min Prep & 2-Min Talk */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Preparation Timer */}
                  <div
                    className={`p-5 rounded-3xl border transition-all ${
                      prepTime === 0
                        ? "bg-slate-100 dark:bg-white/[0.02] border-slate-200/70 dark:border-white/[0.06] opacity-80"
                        : "bg-amber-500/[0.04] dark:bg-amber-500/[0.05] border-amber-500/20 shadow-xs"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
                        <Timer className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                        1-Minute Preparation Timer
                      </span>
                      <span className="text-lg font-mono font-semibold text-amber-700 dark:text-amber-300">
                        00:{String(prepTime).padStart(2, "0")}
                      </span>
                    </div>

                    <p className="text-[11px] text-amber-800/80 dark:text-amber-400 mb-3">
                      {prepTime === 0
                        ? "✓ 1 minute preparation completed! You should now start speaking."
                        : "Use this time to write bullet notes on the notepad below."}
                    </p>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setIsPrepRunning(!isPrepRunning)}
                        className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-semibold transition"
                      >
                        {isPrepRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                        <span>{isPrepRunning ? "Pause Prep" : "Start 1-Min Prep"}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setIsPrepRunning(false);
                          setPrepTime(60);
                        }}
                        className="px-3 py-1.5 rounded-full text-xs font-medium text-slate-400 hover:text-slate-800 dark:hover:text-white"
                      >
                        Reset
                      </button>
                    </div>
                  </div>

                  {/* Speaking Timer */}
                  <div
                    className={`p-5 rounded-3xl border transition-all ${
                      isSpeakRunning
                        ? "bg-rose-500/[0.04] dark:bg-rose-500/[0.05] border-rose-500/20 shadow-xs"
                        : "bg-white dark:bg-white/[0.03] border-slate-200/70 dark:border-white/[0.07]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-rose-900 dark:text-rose-300 flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-rose-500" />
                        2-Minute Speech Window
                      </span>
                      <span className="text-lg font-mono font-semibold text-rose-600 dark:text-rose-400">
                        {Math.floor(speakTime / 60)}:{String(speakTime % 60).padStart(2, "0")}
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-3">
                      Target speaking duration: 1 to 2 minutes continuously without long pauses.
                    </p>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setIsSpeakRunning(!isSpeakRunning)}
                        className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-rose-500 hover:bg-rose-600 text-white text-xs font-semibold transition shadow-sm"
                      >
                        {isSpeakRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                        <span>{isSpeakRunning ? "Pause Speech" : "Start Speaking"}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setIsSpeakRunning(false);
                          setSpeakTime(120);
                        }}
                        className="px-3 py-1.5 rounded-full text-xs font-medium text-slate-400 hover:text-slate-800 dark:hover:text-white"
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                </div>

                {/* Candidate Task Card (Official Box) */}
                <div className="p-8 rounded-3xl bg-white dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/[0.07] shadow-sm backdrop-blur-sm space-y-6">
                  <div className="border-b border-slate-100 dark:border-white/[0.05] pb-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 block mb-0.5">
                        IELTS Speaking • Candidate Task Card
                      </span>
                      <h2 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white font-serif">
                        {pack.cueCard.topic}
                      </h2>
                    </div>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300">
                      Part 2
                    </span>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 block">
                      You should say:
                    </span>
                    <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                      {pack.cueCard.cues.map((cue, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                          <span>{cue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Structuring Guidelines */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 space-y-2">
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-rose-500" /> Delivery Pacing Strategy
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-600 dark:text-slate-400">
                      {pack.cueCard.strategy.map((item, idx) => (
                        <div key={idx} className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 1-Minute Prep Scratchpad */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Edit3 className="w-3.5 h-3.5 text-indigo-500" /> Candidate Scratchpad (Notes taken during 1-min prep):
                      </span>
                      <span className="text-[10px] text-slate-400 font-normal">
                        Not graded in exam, used for your cues only
                      </span>
                    </label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="- Who: My high school chemistry teacher, Mr. Davies&#10;- When: 2018, preparing for national olympiad&#10;- Character: Patient, inspiring, relentless work ethic&#10;- Impact: Instilled scientific rigor and belief in overcoming adversity"
                      rows={5}
                      className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500 font-mono resize-y leading-relaxed"
                    />
                  </div>

                  {/* Finish Cue Card Button */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setIsSessionFinished(true)}
                      className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-md shadow-rose-600/25 transition group"
                    >
                      <span>Complete Cue Card Practice</span>
                      <CheckCheck className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          /* COMPLETION CONFIRMATION SCREEN */
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
                <CheckCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base text-emerald-900 dark:text-emerald-200">
                  Speaking Practice Session Completed!
                </h3>
                <p className="text-xs text-emerald-700 dark:text-emerald-400 mt-0.5">
                  Great work practicing your response formulation. Objective band scoring and detailed audio evaluation will be enabled in an upcoming release.
                </p>
              </div>
            </div>

            {/* Stats Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Part Completed</span>
                <span className="text-lg font-extrabold text-slate-900 dark:text-white font-mono">Part {pack.part}</span>
                <span className="text-[10px] text-rose-600 font-bold block mt-0.5">{pack.category}</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Topic Practiced</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white block truncate mt-1">
                  {pack.title}
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">IELTS Speaking Standard</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Notes Taken</span>
                <span className="text-lg font-extrabold text-slate-900 dark:text-white font-mono">
                  {notes.trim().length > 0 ? "Saved" : "None"}
                </span>
                <span className="text-[10px] text-emerald-600 block mt-0.5 font-semibold">Structured Cues</span>
              </div>
            </div>

            {/* Candidate Notes Preview if filled */}
            {notes.trim().length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Your Practice Notes:</h4>
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">
                  {notes}
                </div>
              </div>
            )}

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => {
                  setIsSessionFinished(false);
                  setCurrentQIndex(0);
                  setPrepTime(60);
                  setSpeakTime(120);
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
              >
                Repeat This Practice
              </button>

              <Link
                href="/practice/speaking"
                className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition flex items-center gap-1.5"
              >
                <span>Choose Another Speaking Task</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
        {/* Global Side Drawer Reviewer (Docked to side, doesn't cover screen) */}
        <AiSolutionReviewer
          taskPrompt={pack.part === 2 ? `Cue Card: ${pack.cueCard?.topic}` : `Speaking Prompt: ${currentQuestion?.prompt || ""}`}
          userSolution={notes}
          officialExplanation={pack.part === 2 ? pack.cueCard?.strategy.join(" | ") : currentQuestion?.tips}
          subject="ielts-speaking"
          isOpen={isAiDrawerOpen}
          onClose={() => setIsAiDrawerOpen(false)}
        />
      </main>
    </div>
  );
}

export default function IELTSSpeakingSimulatorPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center text-slate-500">
          Loading IELTS Speaking Simulator...
        </div>
      }
    >
      <SpeakingSimulatorContent />
    </Suspense>
  );
}
