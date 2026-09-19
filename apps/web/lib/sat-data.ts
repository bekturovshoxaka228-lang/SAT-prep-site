import { WORDS_IN_CONTEXT_QUESTIONS } from "./sat-wic-questions";
import { TEXT_STRUCTURE_QUESTIONS } from "./sat-tsp-questions";
import { CROSS_TEXT_QUESTIONS } from "./sat-ctc-questions";
import { CENTRAL_IDEAS_QUESTIONS } from "./sat-cid-questions";
import { INFERENCES_QUESTIONS } from "./sat-inf-questions";
import { EVIDENCE_TEXTUAL_QUESTIONS } from "./sat-coet-questions";
import { EVIDENCE_QUANTITATIVE_QUESTIONS } from "./sat-coeq-questions";

export interface SubtopicMeta {
  id: string;
  name: string;
}

export interface DomainMeta {
  id: string;
  name: string;
  description: string;
  subtopics: SubtopicMeta[];
}

export interface SatQuestion {
  id: string;
  originalId?: string;
  section: "rw" | "math";
  domainId: string;
  domainName: string;
  subtopicId: string;
  subtopic: string;
  difficulty: "easy" | "medium" | "hard";
  image?: string;
  passage?: string;
  stem: string;
  type: "mcq" | "grid-in";
  options?: { id: string; text: string }[];
  correctAnswer: string;
  explanation: string;
}

export const RW_DOMAINS: DomainMeta[] = [
  {
    id: "craft-structure",
    name: "1. Craft and Structure",
    description:
      "Tests vocabulary in context, text purpose and underlined structure, and cross-text comprehension.",
    subtopics: [
      { id: "words-in-context", name: "Words in context" },
      { id: "underlined-structure", name: "Text structure and purpose" },
      { id: "cross-text", name: "Cross-text connections" },
    ],
  },
  {
    id: "info-ideas",
    name: "2. Information and Ideas",
    description:
      "Tests comprehension, analysis, and reasoning — locating, interpreting, and integrating information from texts and graphics.",
    subtopics: [
      { id: "central-ideas", name: "Central ideas and details" },
      { id: "evidence-textual", name: "Command of evidence (textual)" },
      { id: "evidence-quantitative", name: "Command of evidence (quantitative / graphs)" },
      { id: "inferences", name: "Inferences" },
    ],
  },
  {
    id: "expression-ideas",
    name: "3. Expression of Ideas",
    description:
      "Tests revision skills — rhetorical synthesis of research notes and logical sentence transitions.",
    subtopics: [
      { id: "rhetorical-synthesis", name: "Rhetorical synthesis (notes)" },
      { id: "transitions", name: "Transitions" },
    ],
  },
  {
    id: "conventions",
    name: "4. Standard English Conventions",
    description:
      "Tests grammar, punctuation, sentence boundaries, and agreement conventions.",
    subtopics: [
      { id: "boundaries", name: "Boundaries & punctuation" },
      { id: "form-structure", name: "Form, structure, and sense" },
    ],
  },
];

export const MATH_DOMAINS: DomainMeta[] = [
  {
    id: "algebra",
    name: "1. Algebra",
    description:
      "Linear equations in one and two variables, systems of linear equations, and linear functions.",
    subtopics: [
      { id: "linear-equations", name: "Linear equations (1 & 2 variables)" },
      { id: "systems-equations", name: "Systems of linear equations" },
      { id: "linear-functions", name: "Linear functions & slopes" },
    ],
  },
  {
    id: "advanced-math",
    name: "2. Advanced Math",
    description:
      "Nonlinear functions, quadratics, exponents, radicals, and polynomial operations.",
    subtopics: [
      { id: "quadratics", name: "Nonlinear functions & quadratics" },
      { id: "exponents", name: "Equivalent expressions & exponents" },
      { id: "polynomials", name: "Polynomial operations & factoring" },
    ],
  },
  {
    id: "problem-solving",
    name: "3. Problem-Solving and Data Analysis",
    description:
      "Ratios, percentages, rates, probability, statistics, and data interpretation from charts.",
    subtopics: [
      { id: "percentages-rates", name: "Percentages, ratios & rates" },
      { id: "data-probability", name: "Probability & data tables" },
    ],
  },
  {
    id: "geometry-trig",
    name: "4. Geometry and Trigonometry",
    description:
      "Area, volume formulas, coordinate circle equations, and right-triangle trigonometry.",
    subtopics: [
      { id: "circles", name: "Circles & coordinate equations" },
      { id: "trigonometry", name: "Right triangles & trigonometry" },
      { id: "area-volume", name: "Area & volume formulas" },
    ],
  },
];

export const ALL_SAT_QUESTIONS: SatQuestion[] = [
  // ==========================================
  // READING & WRITING: 1. Craft and Structure
  // ==========================================
  // 261 Official College Board Words in Context Questions (Easy -> Medium -> Hard)
  ...WORDS_IN_CONTEXT_QUESTIONS,
  // 149 Official College Board Text Structure and Purpose Questions (Easy -> Medium -> Hard)
  ...TEXT_STRUCTURE_QUESTIONS,
  // 59 Official College Board Cross-Text Connections Questions (Easy -> Medium -> Hard)
  ...CROSS_TEXT_QUESTIONS,


  // ==========================================
  // READING & WRITING: 2. Information and Ideas
  // ==========================================
  // 138 Official College Board Central Ideas and Details Questions (Easy -> Medium -> Hard)
  ...CENTRAL_IDEAS_QUESTIONS,
  // 144 Official College Board Command of Evidence (Textual) Questions (Easy -> Medium -> Hard)
  ...EVIDENCE_TEXTUAL_QUESTIONS,
  // 133 Official College Board Command of Evidence (Quantitative / Graphs) Questions with visual charts (Easy -> Medium -> Hard)
  ...EVIDENCE_QUANTITATIVE_QUESTIONS,
  // 140 Official College Board Inferences Questions (Easy -> Medium -> Hard)
  ...INFERENCES_QUESTIONS,

  // ==========================================
  // READING & WRITING: 3. Expression of Ideas
  // ==========================================
  {
    id: "rw-ei-2",
    section: "rw",
    domainId: "expression-ideas",
    domainName: "3. Expression of Ideas",
    subtopicId: "transitions",
    subtopic: "Transitions",
    difficulty: "easy",
    passage:
      "Solar photovoltaic cells generate clean electricity by absorbing sunlight. ______, their energy production drops considerably during overcast winter afternoons when solar irradiance is limited.",
    stem: "Which choice completes the text with the most logical transition?",
    type: "mcq",
    options: [
      { id: "A", text: "However," },
      { id: "B", text: "Furthermore," },
      { id: "C", text: "Similarly," },
      { id: "D", text: "Consequently," },
    ],
    correctAnswer: "A",
    explanation:
      "Sentence 1 establishes an advantageous clean energy property, while Sentence 2 introduces an operational limitation (winter drops). 'However,' correctly marks this contrast.",
  },
  {
    id: "rw-ei-transitions-med",
    section: "rw",
    domainId: "expression-ideas",
    domainName: "3. Expression of Ideas",
    subtopicId: "transitions",
    subtopic: "Transitions",
    difficulty: "medium",
    passage:
      "Metropolitan centers frequently register surface temperatures 3°C to 5°C higher than surrounding rural valleys due to heat-retaining concrete. ______, installing high-albedo reflective roofs and planting canopy trees can drastically offset this localized heat accumulation.",
    stem: "Which choice completes the text with the most logical transition?",
    type: "mcq",
    options: [
      { id: "A", text: "Fortunately," },
      { id: "B", text: "Furthermore," },
      { id: "C", text: "Similarly," },
      { id: "D", text: "For instance," },
    ],
    correctAnswer: "A",
    explanation:
      "Sentence 1 details a severe urban heat problem, while Sentence 2 introduces an effective mitigation countermeasure. 'Fortunately,' correctly establishes this positive turn.",
  },
  {
    id: "rw-ei-transitions-hard",
    section: "rw",
    domainId: "expression-ideas",
    domainName: "3. Expression of Ideas",
    subtopicId: "transitions",
    subtopic: "Transitions",
    difficulty: "hard",
    passage:
      "Geophysicists historically hypothesized that the Earth's inner core was a uniform crystalline sphere of solid iron. Recent seismic wave tomography, ______, reveals anisotropic zones where shear waves traverse the western hemisphere significantly slower than the eastern hemisphere.",
    stem: "Which choice completes the text with the most logical transition?",
    type: "mcq",
    options: [
      { id: "A", text: "however," },
      { id: "B", text: "in addition," },
      { id: "C", text: "consequently," },
      { id: "D", text: "furthermore," },
    ],
    correctAnswer: "A",
    explanation:
      "Sentence 1 states a historical hypothesis of core uniformity, while Sentence 2 details empirical findings showing asymmetry. 'however,' correctly establishes this pivotal contrast.",
  },
  {
    id: "rw-ei-synth-easy",
    section: "rw",
    domainId: "expression-ideas",
    domainName: "3. Expression of Ideas",
    subtopicId: "rhetorical-synthesis",
    subtopic: "Rhetorical synthesis (notes)",
    difficulty: "easy",
    passage:
      "While researching Mars exploration, a student noted:\n• NASA's Perseverance rover touched down in Jezero Crater in February 2021.\n• Jezero Crater was once an ancient lake basin with an active river delta.\n• The rover carries the MOXIE instrument, which produces oxygen from Martian atmospheric CO2.\n• The student wants to emphasize where Perseverance landed and why that location was chosen.",
    stem: "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    type: "mcq",
    options: [
      {
        id: "A",
        text: "Perseverance touched down in Jezero Crater because this ancient lake basin and river delta offers optimal conditions for investigating past Martian water activity.",
      },
      {
        id: "B",
        text: "Equipped with the MOXIE oxygen generation device, Perseverance was launched by NASA in 2021.",
      },
      {
        id: "C",
        text: "Jezero Crater is an ancient planetary feature located on Mars.",
      },
      {
        id: "D",
        text: "The MOXIE instrument converts carbon dioxide into breathable oxygen during rover expeditions.",
      },
    ],
    correctAnswer: "A",
    explanation:
      "Choice A directly fulfills both specified criteria: naming the landing location (Jezero Crater) and explaining why it was chosen (ancient lake basin and river delta).",
  },
  {
    id: "rw-ei-1",
    section: "rw",
    domainId: "expression-ideas",
    domainName: "3. Expression of Ideas",
    subtopicId: "rhetorical-synthesis",
    subtopic: "Rhetorical synthesis (notes)",
    difficulty: "medium",
    passage:
      "While researching a topic, a student has taken the following notes:\n• The Voyager 1 space probe was launched by NASA in September 1977.\n• It carries the Golden Record, a 12-inch gold-plated copper phonograph disc.\n• The Golden Record was designed to portray the diversity of life and culture on Earth.\n• It contains spoken greetings in 55 human languages and 90 minutes of musical selections.\n• Carl Sagan chaired the NASA committee that selected the audio and visual contents.\n• In August 2012, Voyager 1 crossed the heliopause into interstellar space.",
    stem: "The student wants to emphasize the purpose and cultural contents of the Golden Record. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    type: "mcq",
    options: [
      {
        id: "A",
        text: "Curated by a committee led by Carl Sagan, the Golden Record carries spoken greetings in 55 languages and 90 minutes of eclectic music to represent Earth's cultural diversity to potential extraterrestrial life.",
      },
      {
        id: "B",
        text: "Launched in September 1977, Voyager 1 became the first human-made craft to cross into interstellar space in August 2012.",
      },
      {
        id: "C",
        text: "Voyager 1, which carries a 12-inch gold-plated copper record, was constructed by NASA researchers in the 1970s.",
      },
      {
        id: "D",
        text: "Greetings in 55 languages were recorded by NASA before Voyager 1 crossed the heliopause in 2012.",
      },
    ],
    correctAnswer: "A",
    explanation:
      "Choice A directly addresses both the cultural contents (55 languages, 90 minutes of music) and the primary purpose (representing Earth's cultural diversity).",
  },
  {
    id: "rw-ei-synth-hard",
    section: "rw",
    domainId: "expression-ideas",
    domainName: "3. Expression of Ideas",
    subtopicId: "rhetorical-synthesis",
    subtopic: "Rhetorical synthesis (notes)",
    difficulty: "hard",
    passage:
      "While conducting an astrophysicist profile, a student took the following notes:\n• Dr. Jocelyn Bell Burnell discovered the first radio pulsars in 1967 as a graduate student at Cambridge.\n• The discovery was recognized with the 1974 Nobel Prize in Physics, awarded solely to Antony Hewish and Martin Ryle.\n• Burnell was excluded from the Nobel prize citation despite recording and verifying the anomaly.\n• In 2018, Burnell won the $3 million Special Breakthrough Prize in Fundamental Physics and donated all proceeds to fund minority graduate scholarships.",
    stem: "The student wants to contrast Burnell's initial Nobel exclusion with her later recognition and philanthropic impact. Which choice most effectively accomplishes this goal?",
    type: "mcq",
    options: [
      {
        id: "A",
        text: "Although initially excluded from the 1974 Nobel Prize awarded for the pulsar discovery she made, Burnell was later honored with the 2018 Breakthrough Prize and donated the entire $3 million purse to support underrepresented physics scholars.",
      },
      {
        id: "B",
        text: "Dr. Jocelyn Bell Burnell discovered pulsars in 1967 while working as a Cambridge graduate researcher alongside Antony Hewish.",
      },
      {
        id: "C",
        text: "The Breakthrough Prize awarded in 2018 carried a monetary award of $3 million for fundamental discoveries in radio astronomy.",
      },
      {
        id: "D",
        text: "Antony Hewish and Martin Ryle received the 1974 Nobel Prize in Physics for astronomical research performed at Cambridge.",
      },
    ],
    correctAnswer: "A",
    explanation:
      "Choice A directly sets up the contrast ('Although initially excluded... Burnell was later honored...') while highlighting both her later recognition and her philanthropic scholarship donation.",
  },

  // ==========================================
  // READING & WRITING: 4. Standard English Conventions
  // ==========================================
  {
    id: "rw-sec-1",
    section: "rw",
    domainId: "conventions",
    domainName: "4. Standard English Conventions",
    subtopicId: "boundaries",
    subtopic: "Boundaries & punctuation",
    difficulty: "easy",
    passage:
      "In 1928, astronomer Edwin Hubble demonstrated that distant galaxies are consistently receding from one ______ this pivotal finding provided foundational empirical backing for the expanding universe theory.",
    stem: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    type: "mcq",
    options: [
      { id: "A", text: "another, and" },
      { id: "B", text: "another" },
      { id: "C", text: "another," },
      { id: "D", text: "another; and" },
    ],
    correctAnswer: "A",
    explanation:
      "Two independent clauses must be joined with a comma and coordinating conjunction (', and') or a semicolon alone. Choice A correctly links the clauses.",
  },
  {
    id: "rw-sec-boundaries-hard",
    section: "rw",
    domainId: "conventions",
    domainName: "4. Standard English Conventions",
    subtopicId: "boundaries",
    subtopic: "Boundaries & punctuation",
    difficulty: "hard",
    passage:
      "When marine biologist Sylvia Earle founded Mission Blue in 2009, her primary objective was establishing global marine protected areas ______ known colloquially as 'Hope Spots' — to shield vulnerable coral reefs and migratory routes from commercial overfishing.",
    stem: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    type: "mcq",
    options: [
      { id: "A", text: "—" },
      { id: "B", text: "," },
      { id: "C", text: ";" },
      { id: "D", text: ":" },
    ],
    correctAnswer: "A",
    explanation:
      "A pair of em dashes is required to set off the nonessential parenthetical phrase '— known colloquially as 'Hope Spots' —'. Because the closing dash is already present after 'Hope Spots', an opening dash (Choice A) must precede 'known'.",
  },
  {
    id: "rw-sec-form-easy",
    section: "rw",
    domainId: "conventions",
    domainName: "4. Standard English Conventions",
    subtopicId: "form-structure",
    subtopic: "Form, structure, and sense",
    difficulty: "easy",
    passage:
      "Throughout the mountainous valleys of western Norway, every winter blizzard and mountain snowfall ______ the stability of steep avalanche barriers constructed along the railway lines.",
    stem: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    type: "mcq",
    options: [
      { id: "A", text: "tests" },
      { id: "B", text: "test" },
      { id: "C", text: "are testing" },
      { id: "D", text: "were tested" },
    ],
    correctAnswer: "A",
    explanation:
      "When compound subjects are modified by 'every' ('every winter blizzard and mountain snowfall'), the subject takes a singular verb: 'tests'.",
  },
  {
    id: "rw-sec-2",
    section: "rw",
    domainId: "conventions",
    domainName: "4. Standard English Conventions",
    subtopicId: "form-structure",
    subtopic: "Form, structure, and sense",
    difficulty: "medium",
    passage:
      "Neither the principal investigator nor the laboratory technicians ______ able to replicate the anomalous thermoelectric voltage spikes observed during the initial trial run.",
    stem: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    type: "mcq",
    options: [
      { id: "A", text: "were" },
      { id: "B", text: "was" },
      { id: "C", text: "is" },
      { id: "D", text: "being" },
    ],
    correctAnswer: "A",
    explanation:
      "In a 'neither... nor' construction, the verb agrees with the closer subject. 'Laboratory technicians' is plural, requiring the plural verb 'were'.",
  },

  // ==========================================
  // MATH: 1. Algebra
  // ==========================================
  {
    id: "math-alg-1",
    section: "math",
    domainId: "algebra",
    domainName: "1. Algebra",
    subtopicId: "linear-equations",
    subtopic: "Linear equations (1 & 2 variables)",
    difficulty: "easy",
    stem: "If 2x + 5 = 19, what is the value of 4x - 3?",
    type: "grid-in",
    correctAnswer: "25",
    explanation: "2x + 5 = 19 => 2x = 14 => x = 7. Then 4(7) - 3 = 28 - 3 = 25.",
  },
  {
    id: "math-alg-3",
    section: "math",
    domainId: "algebra",
    domainName: "1. Algebra",
    subtopicId: "linear-functions",
    subtopic: "Linear functions & slopes",
    difficulty: "easy",
    stem: "A line in the xy-plane passes through the points (2, 7) and (6, 19). What is the slope of the line?",
    type: "grid-in",
    correctAnswer: "3",
    explanation: "Slope m = (y2 - y1) / (x2 - x1) = (19 - 7) / (6 - 2) = 12 / 4 = 3.",
  },
  {
    id: "math-alg-2",
    section: "math",
    domainId: "algebra",
    domainName: "1. Algebra",
    subtopicId: "systems-equations",
    subtopic: "Systems of linear equations",
    difficulty: "medium",
    stem: "At a school store, 3 notebooks and 2 pens cost $26. If 1 notebook and 4 pens cost $22, what is the cost, in dollars, of one notebook?",
    type: "grid-in",
    correctAnswer: "6",
    explanation:
      "Let n = notebook, p = pen: 3n + 2p = 26 and n + 4p = 22. Multiply first equation by 2: 6n + 4p = 52. Subtract second equation: 5n = 30 => n = 6.",
  },
  {
    id: "math-alg-hard-1",
    section: "math",
    domainId: "algebra",
    domainName: "1. Algebra",
    subtopicId: "systems-equations",
    subtopic: "Systems of linear equations",
    difficulty: "hard",
    stem: "In the system of equations 4x - ky = 12 and 6x + 9y = 27, for what value of the constant k does the system have no solution?",
    type: "grid-in",
    correctAnswer: "-6",
    explanation:
      "Parallel lines with different y-intercepts have no solution. Ratio of coefficients must match: 4/6 = -k/9 => 2/3 = -k/9 => -k = 6 => k = -6. Check constants: 12/27 = 4/9 ≠ 2/3, confirming no solution exists.",
  },

  // ==========================================
  // MATH: 2. Advanced Math
  // ==========================================
  {
    id: "math-adv-2",
    section: "math",
    domainId: "advanced-math",
    domainName: "2. Advanced Math",
    subtopicId: "exponents",
    subtopic: "Equivalent expressions & exponents",
    difficulty: "easy",
    stem: "If 3^(2x - 1) = 243, what is the value of x?",
    type: "grid-in",
    correctAnswer: "3",
    explanation: "243 = 3^5. Therefore, 2x - 1 = 5 => 2x = 6 => x = 3.",
  },
  {
    id: "math-adv-3",
    section: "math",
    domainId: "advanced-math",
    domainName: "2. Advanced Math",
    subtopicId: "polynomials",
    subtopic: "Polynomial operations & factoring",
    difficulty: "easy",
    stem: "What is the positive solution to the equation (x^2 - 16) / (x - 4) = 11?",
    type: "grid-in",
    correctAnswer: "7",
    explanation:
      "Factor numerator: (x - 4)(x + 4) / (x - 4) = x + 4 for x ≠ 4. Thus x + 4 = 11 => x = 7.",
  },
  {
    id: "math-adv-1",
    section: "math",
    domainId: "advanced-math",
    domainName: "2. Advanced Math",
    subtopicId: "quadratics",
    subtopic: "Nonlinear functions & quadratics",
    difficulty: "medium",
    stem: "A projectile's height in meters is modeled by h(t) = -(t - 6)^2 + 49, where t is time in seconds. What is the maximum height, in meters, reached by the projectile?",
    type: "grid-in",
    correctAnswer: "49",
    explanation:
      "In vertex form h(t) = a(t - h)^2 + k, since a = -1 < 0, the maximum value occurs at the vertex (6, 49), so the maximum height is 49.",
  },
  {
    id: "math-adv-hard-1",
    section: "math",
    domainId: "advanced-math",
    domainName: "2. Advanced Math",
    subtopicId: "quadratics",
    subtopic: "Nonlinear functions & quadratics",
    difficulty: "hard",
    stem: "The quadratic equation 2x^2 - bx + 18 = 0 has exactly one real solution. If b > 0, what is the value of b?",
    type: "grid-in",
    correctAnswer: "12",
    explanation:
      "A quadratic ax^2 + bx + c = 0 has exactly one real solution when its discriminant D = b^2 - 4ac = 0. Here a = 2, c = 18, so (-b)^2 - 4(2)(18) = 0 => b^2 - 144 = 0 => b = 12 (since b > 0).",
  },

  // ==========================================
  // MATH: 3. Problem-Solving and Data Analysis
  // ==========================================
  {
    id: "math-ps-easy-1",
    section: "math",
    domainId: "problem-solving",
    domainName: "3. Problem-Solving and Data Analysis",
    subtopicId: "percentages-rates",
    subtopic: "Percentages, ratios & rates",
    difficulty: "easy",
    stem: "A highway delivery truck travels at a constant speed of 65 miles per hour. How many miles will the truck travel in 4 hours?",
    type: "grid-in",
    correctAnswer: "260",
    explanation: "Distance = Speed * Time = 65 miles/hour * 4 hours = 260 miles.",
  },
  {
    id: "math-ps-1",
    section: "math",
    domainId: "problem-solving",
    domainName: "3. Problem-Solving and Data Analysis",
    subtopicId: "percentages-rates",
    subtopic: "Percentages, ratios & rates",
    difficulty: "medium",
    stem: "An online store discounts an item by 20%. During a weekend flash sale, that discounted price is reduced by an additional 10%. If the original price was $800, what is the final sale price in dollars?",
    type: "grid-in",
    correctAnswer: "576",
    explanation: "800 * (1 - 0.20) = $640. Then 640 * (1 - 0.10) = $576.",
  },
  {
    id: "math-ps-2",
    section: "math",
    domainId: "problem-solving",
    domainName: "3. Problem-Solving and Data Analysis",
    subtopicId: "data-probability",
    subtopic: "Probability & data tables",
    difficulty: "hard",
    stem: "In a sample of 100 students, 60 study Spanish, 30 study French, and 10 study both languages. What is the probability (expressed as a percentage from 0 to 100) that a randomly chosen student studies neither language?",
    type: "grid-in",
    correctAnswer: "20",
    explanation:
      "Students studying at least one language: 60 + 30 - 10 = 80. Students studying neither: 100 - 80 = 20. Probability: 20/100 = 20%.",
  },

  // ==========================================
  // MATH: 4. Geometry and Trigonometry
  // ==========================================
  {
    id: "math-gt-1",
    section: "math",
    domainId: "geometry-trig",
    domainName: "4. Geometry and Trigonometry",
    subtopicId: "circles",
    subtopic: "Circles & coordinate equations",
    difficulty: "easy",
    stem: "A circle in the xy-plane has the equation (x - 3)^2 + (y + 5)^2 = 64. What is the radius of the circle?",
    type: "grid-in",
    correctAnswer: "8",
    explanation: "Standard circle equation is (x - h)^2 + (y - k)^2 = r^2. Here r^2 = 64 => r = 8.",
  },
  {
    id: "math-gt-2",
    section: "math",
    domainId: "geometry-trig",
    domainName: "4. Geometry and Trigonometry",
    subtopicId: "trigonometry",
    subtopic: "Right triangles & trigonometry",
    difficulty: "medium",
    stem: "In a right triangle with acute angles A and B, if sin(A) = 0.6, what is the value of cos(B)?",
    type: "grid-in",
    correctAnswer: "0.6",
    explanation: "In any right triangle with complementary acute angles A and B, cos(B) = sin(A) = 0.6.",
  },
  {
    id: "math-gt-3",
    section: "math",
    domainId: "geometry-trig",
    domainName: "4. Geometry and Trigonometry",
    subtopicId: "area-volume",
    subtopic: "Area & volume formulas",
    difficulty: "medium",
    stem: "A right circular cylinder has a base radius of 3 units and a height of 8 units. What is the volume of the cylinder divided by π?",
    type: "grid-in",
    correctAnswer: "72",
    explanation: "Volume V = π * r^2 * h = π * 3^2 * 8 = 72π. Volume divided by π is 72.",
  },
  {
    id: "math-gt-hard-1",
    section: "math",
    domainId: "geometry-trig",
    domainName: "4. Geometry and Trigonometry",
    subtopicId: "circles",
    subtopic: "Circles & coordinate equations",
    difficulty: "hard",
    stem: "A circle in the xy-plane has the equation x^2 + 8x + y^2 - 10y = 59. What is the radius of the circle?",
    type: "grid-in",
    correctAnswer: "10",
    explanation:
      "Complete the square: (x^2 + 8x + 16) + (y^2 - 10y + 25) = 59 + 16 + 25 => (x + 4)^2 + (y - 5)^2 = 100. Since r^2 = 100, radius r = 10.",
  },
];
