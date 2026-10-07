import { WORDS_IN_CONTEXT_QUESTIONS } from "./sat-wic-questions";
import { TEXT_STRUCTURE_QUESTIONS } from "./sat-tsp-questions";
import { CROSS_TEXT_QUESTIONS } from "./sat-ctc-questions";
import { CENTRAL_IDEAS_QUESTIONS } from "./sat-cid-questions";
import { INFERENCES_QUESTIONS } from "./sat-inf-questions";
import { COMMAND_OF_EVIDENCE_QUESTIONS } from "./sat-coe-questions";
import { EVIDENCE_TEXTUAL_QUESTIONS } from "./sat-coet-questions";
import { EVIDENCE_QUANTITATIVE_QUESTIONS } from "./sat-coeq-questions";
import { RHETORICAL_SYNTHESIS_QUESTIONS } from "./sat-rs-questions";
import { TRANSITIONS_QUESTIONS } from "./sat-transitions-questions";
import { BOUNDARIES_QUESTIONS } from "./sat-boundaries-questions";
import { FSS_QUESTIONS } from "./sat-fss-questions";
// Math 1. Algebra
import { MATH_LINEAR_1VAR_QUESTIONS } from "./sat-math-linear-1var-questions";
import { MATH_LINEAR_FUNCTIONS_QUESTIONS } from "./sat-math-linear-functions-questions";
import { MATH_LINEAR_2VAR_QUESTIONS } from "./sat-math-linear-2var-questions";
import { MATH_SYSTEMS_QUESTIONS } from "./sat-math-systems-questions";
import { MATH_INEQUALITIES_QUESTIONS } from "./sat-math-inequalities-questions";

// Math 2. Advanced Math
import { MATH_NONLINEAR_FUNCTIONS_QUESTIONS } from "./sat-math-nonlinear-functions-questions";
import { MATH_NONLINEAR_EQUATIONS_QUESTIONS } from "./sat-math-nonlinear-equations-questions";
import { MATH_EQUIVALENT_EXPRESSIONS_QUESTIONS } from "./sat-math-equivalent-expressions-questions";

// Math 3. Problem-Solving and Data Analysis
import { MATH_PERCENTAGES_QUESTIONS } from "./sat-math-percentages-questions";
import { MATH_RATIOS_RATES_QUESTIONS } from "./sat-math-ratios-rates-questions";
import { MATH_PROBABILITY_QUESTIONS } from "./sat-math-probability-questions";
import { MATH_ONE_VAR_DATA_QUESTIONS } from "./sat-math-one-variable-data-questions";
import { MATH_TWO_VAR_DATA_QUESTIONS } from "./sat-math-two-variable-data-questions";
import { MATH_INFERENCE_STATISTICS_QUESTIONS } from "./sat-math-inference-statistics-questions";

// Math 4. Geometry and Trigonometry
import { MATH_AREA_VOLUME_QUESTIONS } from "./sat-math-area-volume-questions";
import { MATH_LINES_ANGLES_QUESTIONS } from "./sat-math-lines-angles-triangles-questions";
import { MATH_RIGHT_TRIANGLES_TRIG_QUESTIONS } from "./sat-math-right-triangles-trig-questions";
import { MATH_CIRCLES_QUESTIONS } from "./sat-math-circles-questions";

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
  options?: { id: string; text: string; image?: string }[];
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
      "Linear equations in one variable, linear functions, linear equations in two variables, systems of two linear equations in two variables, and linear inequalities.",
    subtopics: [
      { id: "linear-equations-one-variable", name: "Linear equations in one variable" },
      { id: "linear-functions", name: "Linear functions" },
      { id: "linear-equations-two-variables", name: "Linear equations in two variables" },
      { id: "systems-two-linear-equations", name: "Systems of two linear equations in two variables" },
      { id: "linear-inequalities", name: "Linear inequalities in one or two variables" },
    ],
  },
  {
    id: "advanced-math",
    name: "2. Advanced Math",
    description:
      "Nonlinear functions, quadratics, exponents, radicals, and polynomial operations.",
    subtopics: [
      { id: "nonlinear-functions", name: "Nonlinear functions & quadratics" },
      { id: "nonlinear-equations-systems", name: "Nonlinear equations & systems" },
      { id: "equivalent-expressions", name: "Equivalent expressions & exponents" },
    ],
  },
  {
    id: "problem-solving",
    name: "3. Problem-Solving and Data Analysis",
    description:
      "Ratios, percentages, rates, probability, statistics, and data interpretation from charts.",
    subtopics: [
      { id: "percentages-rates", name: "Percentages, ratios & rates" },
      { id: "ratios-rates", name: "Ratios, rates & proportions" },
      { id: "probability", name: "Probability & relative frequencies" },
      { id: "one-variable-data", name: "One-variable data & distributions" },
      { id: "two-variable-data", name: "Two-variable data & scatterplots" },
      { id: "inference-statistics", name: "Inference from sample statistics" },
    ],
  },
  {
    id: "geometry-trig",
    name: "4. Geometry and Trigonometry",
    description:
      "Area, volume formulas, coordinate circle equations, and right-triangle trigonometry.",
    subtopics: [
      { id: "circles", name: "Circles & coordinate equations" },
      { id: "area-volume", name: "Area & volume formulas" },
      { id: "lines-angles-triangles", name: "Lines, angles & triangles" },
      { id: "right-triangles-trigonometry", name: "Right triangles & trigonometry" },
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
  // 194 Official College Board Transitions Questions (Easy -> Medium -> Hard)
  ...TRANSITIONS_QUESTIONS,
  // 204 Official College Board Rhetorical Synthesis Questions (Easy -> Medium -> Hard)
  ...RHETORICAL_SYNTHESIS_QUESTIONS,

  // ==========================================
  // READING & WRITING: 4. Standard English Conventions
  // ==========================================
  // 213 Official College Board Boundaries & Punctuation Questions (Easy -> Medium -> Hard)
  ...BOUNDARIES_QUESTIONS,
  // 208 Official College Board Form, Structure, and Sense Questions (Easy -> Medium -> Hard)
  ...FSS_QUESTIONS,

  // ==========================================
  // MATH: 1. Algebra (616 Official College Board Questions)
  // ==========================================
  // 112 Official College Board Linear Equations in One Variable Questions (Easy -> Medium -> Hard)
  ...MATH_LINEAR_1VAR_QUESTIONS,
  // 170 Official College Board Linear Functions Questions (Easy -> Medium -> Hard)
  ...MATH_LINEAR_FUNCTIONS_QUESTIONS,
  // 130 Official College Board Linear Equations in Two Variables Questions (Easy -> Medium -> Hard)
  ...MATH_LINEAR_2VAR_QUESTIONS,
  // 126 Official College Board Systems of Two Linear Equations Questions (Easy -> Medium -> Hard)
  ...MATH_SYSTEMS_QUESTIONS,
  // 78 Official College Board Linear Inequalities in One or Two Variables Questions (Easy -> Medium -> Hard)
  ...MATH_INEQUALITIES_QUESTIONS,

  // ==========================================
  // MATH: 2. Advanced Math (540 Official College Board Questions)
  // ==========================================
  ...MATH_NONLINEAR_FUNCTIONS_QUESTIONS,
  ...MATH_NONLINEAR_EQUATIONS_QUESTIONS,
  ...MATH_EQUIVALENT_EXPRESSIONS_QUESTIONS,

  // ==========================================
  // MATH: 3. Problem-Solving and Data Analysis (421 Official College Board Questions)
  // ==========================================
  ...MATH_PERCENTAGES_QUESTIONS,
  ...MATH_RATIOS_RATES_QUESTIONS,
  ...MATH_PROBABILITY_QUESTIONS,
  ...MATH_ONE_VAR_DATA_QUESTIONS,
  ...MATH_TWO_VAR_DATA_QUESTIONS,
  ...MATH_INFERENCE_STATISTICS_QUESTIONS,

  // ==========================================
  // MATH: 4. Geometry and Trigonometry (348 Official College Board Questions)
  // ==========================================
  ...MATH_AREA_VOLUME_QUESTIONS,
  ...MATH_LINES_ANGLES_QUESTIONS,
  ...MATH_RIGHT_TRIANGLES_TRIG_QUESTIONS,
  ...MATH_CIRCLES_QUESTIONS,
];
