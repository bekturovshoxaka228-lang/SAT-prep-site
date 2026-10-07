import type { SatQuestion } from "./sat-data";
import { EVIDENCE_TEXTUAL_QUESTIONS } from "./sat-coet-questions";
import { EVIDENCE_QUANTITATIVE_QUESTIONS } from "./sat-coeq-questions";

/**
 * Unified Official College Board Command of Evidence Question Bank (277 questions total)
 * Combines 133 Quantitative questions with visual graphs/tables and 144 Textual questions.
 * Grouped by difficulty: Easy (71) -> Medium (85) -> Hard (121)
 */
const easyQuestions: SatQuestion[] = [
 ...EVIDENCE_QUANTITATIVE_QUESTIONS.filter((q) => q.difficulty === "easy"),
 ...EVIDENCE_TEXTUAL_QUESTIONS.filter((q) => q.difficulty === "easy"),
];

const mediumQuestions: SatQuestion[] = [
 ...EVIDENCE_QUANTITATIVE_QUESTIONS.filter((q) => q.difficulty === "medium"),
 ...EVIDENCE_TEXTUAL_QUESTIONS.filter((q) => q.difficulty === "medium"),
];

const hardQuestions: SatQuestion[] = [
 ...EVIDENCE_QUANTITATIVE_QUESTIONS.filter((q) => q.difficulty === "hard"),
 ...EVIDENCE_TEXTUAL_QUESTIONS.filter((q) => q.difficulty === "hard"),
];

export const COMMAND_OF_EVIDENCE_QUESTIONS: SatQuestion[] = [
 ...easyQuestions,
 ...mediumQuestions,
 ...hardQuestions,
];
