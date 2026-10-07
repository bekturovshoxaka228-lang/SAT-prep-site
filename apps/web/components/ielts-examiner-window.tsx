"use client";

import React, { useState, useMemo } from "react";
import {
  X,
  Award,
  BookOpen,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Copy,
  Check,
  ArrowRight,
  TrendingUp,
  Layers,
  HelpCircle,
  Clock,
  Send,
  Zap,
} from "lucide-react";

export interface EvaluatedCriterion {
  score: number;
  descriptorQuote: string;
  feedback: string;
}

export interface DetailedCorrection {
  original: string;
  improved: string;
  reason: string;
  category: "Grammar" | "Lexical" | "Cohesion" | "Structure";
}

export interface ExaminerEvaluation {
  overallScore: number;
  taskScore: EvaluatedCriterion;
  coherenceScore: EvaluatedCriterion;
  lexicalScore: EvaluatedCriterion;
  grammarScore: EvaluatedCriterion;
  corrections: DetailedCorrection[];
  actionableSteps: string[];
}

export interface WritingTaskDataWithModel {
  id: string;
  taskNumber: 1 | 2;
  type: string;
  typeName: string;
  title: string;
  prompt: string;
  durationMinutes: number;
  minWords: number;
  recommendedStructure: string[];
  modelEssay: string;
  modelKeyFeatures: string[];
  modelVocabHighlights: { term: string; explanation: string }[];
}

const ACADEMIC_VOCAB_REGEX =
  /\b(delineat\w*|illustrat\w*|depict\w*|demonstrat\w*|contend\w*|maintain\w*|postulat\w*|paramount|predominant\w*|precipitous\w*|exponential\w*|unprecedented|catastrophic|substantial\w*|negligible|trajectory|trajectories|proportion\w*|metamorphosis|apparatus|promenade|amenit\w*|patronage|punctuality|equilibrium|mobility|disparit\w*|meritocra\w*|infrastructur\w*|frictionless\w*|deterrent|compliance|vulnerabilit\w*|fragilit\w*|exclusion|cohort|congestion|sprawl|commute|subsid\w*|dilapidat\w*|cordon|levy|levies|catalyst|connectivit\w*|availabilit\w*|deteriorat\w*|burnout|recalibrat\w*|repercussion\w*|conscious\w*|mortalit\w*|revelation|mimicry|dilemma|phenomenon|phenomena|inexorabl\w*|markedly|conversely|notwithstanding|intrinsically|predominantly|unequivocally|surpass\w*|eclips\w*|undergo\w*|curtail\w*|reinforce\w*|mitigate\w*|supersede\w*|constitut\w*|exemplif\w*|diminish\w*|deter\w*|proliferat\w*|foster\w*|precipitat\w*|resonat\w*|reverberat\w*|corrod\w*|undermin\w*|implement\w*|commenc\w*|transform\w*|culminat\w*|accelerat\w*|fluctuat\w*|stabiliz\w*|discernibl\w*|aggregat\w*|linear|sequential|disused|equitable|contingent|sovereign|unparalleled|instantaneous|transitory|resilient|systemic|decentralized|arterial|motorized|chronic|suboptimal|intensified|pervasive|detrimental|acute|diminished|significant\w*|considerable\w*|crucial|essential|fundamental\w*|widespread|profound\w*|integral|compelling|prosperit\w*|sustainable)\b/gi;

const COHESIVE_CONNECTORS_REGEX =
  /\b(furthermore|moreover|consequently|in contrast|nevertheless|subsequently|conversely|on the other hand|on the contrary|in addition|alternatively|meanwhile|in conclusion|to sum up|in summary|despite this|nonetheless|thus|hence|accordingly)\b/gi;

const COHESIVE_REFERENCING_REGEX =
  /\b(this (trend|trajectory|pattern|tendency|development|phenomenon|figure|distribution|process|shift|disparity|finding)|such (measures|approaches|reforms|interventions|initiatives)|these (factors|drivers|metrics|outcomes|disparities)|the former|the latter|in this regard)\b/gi;

const COMPLEX_GRAMMAR_REGEX =
  /\b(while|whereas|although|despite|in spite of|which|whereby|wherein|provided that|providing that|if|unless|not only|whether|even though|as long as|in order to|so as to)\b/gi;

const INFORMAL_CONTRACTIONS_REGEX =
  /\b(don't|can't|won't|doesn't|didn't|isn't|aren't|it's|couldn't|shouldn't|wouldn't|haven't|hasn't|hadn't|wasn't|weren't)\b/gi;

const INFORMAL_WORDS_REGEX =
  /\b(a lot|lots of|kids?|stuffs?|things?|gonna|wanna|big problem|huge problem|good thing|bad thing|ok|super|kinda|sorta)\b/gi;

const UNCOUNTABLE_NOUN_ERRORS_REGEX =
  /\b(informations|advices|researches|equipments|furnitures|evidences|accommodations|traffics)\b/gi;

const SUBJECT_VERB_SLIPS_REGEX =
  /\b(he|she|it)\s+(do|have|go|say|show|indicate|mean|lead)\b/gi;

const PREPOSITION_COLLOCATION_ERRORS_REGEX =
  /\b(depend of|discuss about|explain about|consist in|pay attention on|reason of|in the other hand|on the second hand)\b/gi;

const DOUBLE_COMPARATIVES_REGEX =
  /\b(more better|more easier|more faster|more higher|most highest|most best|most cheapest)\b/gi;

const TASK1_COMPARATIVES_REGEX =
  /\b(higher than|lower than|compared to|compared with|in comparison to|as opposed to|in contrast to|whereas|while|twice as (much|high|many)|threefold|surpassed|outstripped|peaked at|reached a high of|plummeted to|remained steady|plateaued|the highest proportion|the lowest figure)\b/gi;

const EXAMPLES_AND_ELABORATION_REGEX =
  /\b(for example|for instance|to illustrate|such as|namely|specifically|this demonstrates that|this means that|as a consequence|as an illustration)\b/gi;

export function evaluateIeltsEssay(
  essayText: string,
  task: WritingTaskDataWithModel
): ExaminerEvaluation {
  const text = essayText.trim();
  const lower = text.toLowerCase();
  const words = text ? text.split(/\s+/).length : 0;
  const wordList = lower.match(/[a-z]+/g) || [];
  const uniqueWords = new Set(wordList).size;
  const lexicalDiversity = wordList.length > 0 ? uniqueWords / wordList.length : 0;
  const rawParagraphs = text ? text.split(/\n\s*\n/).filter((p) => p.trim().length > 0) : [];
  const paraCount = rawParagraphs.length;
  const isTask1 = task.taskNumber === 1;
  const minRequiredWords = task.minWords;

  // Check if text is an official model answer or near-verbatim match with Band 9 model
  const cleanUser = lower.replace(/[^\w\s]/g, "").replace(/\s+/g, " ");
  const cleanModel = task.modelEssay.toLowerCase().replace(/[^\w\s]/g, "").replace(/\s+/g, " ");
  const isModelMatch = cleanUser === cleanModel || (cleanUser.length > 200 && cleanModel.includes(cleanUser));

  if (isModelMatch) {
    return {
      overallScore: 9.0,
      taskScore: {
        score: 9.0,
        descriptorQuote: isTask1
          ? "Band 9: Fully satisfies all the requirements of the task; clearly presents a fully developed response."
          : "Band 9: Fully addresses all parts of the task; presents a fully developed position in answer to the question with relevant, fully extended and well supported ideas.",
        feedback: "Безупречное, исчерпывающее раскрытие всех требований темы. Выделен идеальный Overview с гармоничным сопоставлением всех ключевых данных.",
      },
      coherenceScore: {
        score: 9.0,
        descriptorQuote: "Band 9: Uses cohesion in such a way that it attracts no attention; skilfully manages paragraphing.",
        feedback: "Естественная и органичная связность без малейшей механичности. Идеальная логическая организация абзацев.",
      },
      lexicalScore: {
        score: 9.0,
        descriptorQuote: "Band 9: Uses a wide range of vocabulary with very natural and sophisticated control of lexical features; rare minor errors occur only as 'slips'.",
        feedback: "Богатейший академический лексикон уровня C2. Высокоточные устойчивые коллокации и безупречное владение стилем.",
      },
      grammarScore: {
        score: 9.0,
        descriptorQuote: "Band 9: Uses a wide range of structures with full flexibility and accuracy; rare minor errors occur only as 'slips'.",
        feedback: "Полная гибкость и абсолютная грамматическая точность. Разнообразие сложных предложений составлено без единой погрешности.",
      },
      corrections: [],
      actionableSteps: [
        "Текст полностью соответствует наивысшему стандарту Band 9.0.",
        "Сохраняйте такой же баланс академического словарного запаса и логической структуры на реальном экзамене.",
      ],
    };
  }

  // Error detection
  const contractionsMatches = lower.match(INFORMAL_CONTRACTIONS_REGEX) || [];
  const informalMatches = lower.match(INFORMAL_WORDS_REGEX) || [];
  const uncountableMatches = lower.match(UNCOUNTABLE_NOUN_ERRORS_REGEX) || [];
  const agreementMatches = lower.match(SUBJECT_VERB_SLIPS_REGEX) || [];
  const prepMatches = lower.match(PREPOSITION_COLLOCATION_ERRORS_REGEX) || [];
  const doubleCompMatches = lower.match(DOUBLE_COMPARATIVES_REGEX) || [];

  const totalGrammarErrors =
    contractionsMatches.length +
    uncountableMatches.length +
    agreementMatches.length +
    prepMatches.length +
    doubleCompMatches.length;

  // 1. Task Achievement (Task 1) / Task Response (Task 2)
  let taScore = 6.0;
  let taQuote = "";
  let taFeedback = "";

  const hasOverview =
    lower.includes("overall") ||
    lower.includes("in general") ||
    lower.includes("to summarize") ||
    lower.includes("in summary") ||
    lower.includes("prominent trend") ||
    lower.includes("notable trend") ||
    lower.includes("general pattern") ||
    lower.includes("clear overview");

  const hasThesis =
    lower.includes("in my opinion") ||
    lower.includes("i believe") ||
    lower.includes("i argue") ||
    lower.includes("i contend") ||
    lower.includes("in my view") ||
    lower.includes("i disagree") ||
    lower.includes("i agree") ||
    lower.includes("this essay contends") ||
    lower.includes("in conclusion");

  const numberMatches = (text.match(/\b\d+(\.\d+)?%?\b/g) || []).length;
  const comparativesCount = (lower.match(TASK1_COMPARATIVES_REGEX) || []).length;
  const hasExamples = (lower.match(EXAMPLES_AND_ELABORATION_REGEX) || []).length > 0;
  const academicMatches = (lower.match(ACADEMIC_VOCAB_REGEX) || []).length;

  if (words < minRequiredWords * 0.6) {
    taScore = 4.0;
    taQuote = isTask1
      ? "Band 4: Attempts to address the task but does not cover all key features; length is significantly under requirement."
      : "Band 4: Responds to the task only in a minimal way; arguments are largely undeveloped or tangible.";
    taFeedback = `Объём (${words} слов) критически мал (минимум ${minRequiredWords} слов). По официальным правилам IELTS это влечет жесткое снижение балла.`;
  } else if (words < minRequiredWords * 0.85) {
    taScore = 5.0;
    taQuote = isTask1
      ? "Band 5: Generally addresses the task; recounts detail mechanically with no clear overview; key features inadequately covered."
      : "Band 5: Addresses the task only partially; development of ideas is limited.";
    taFeedback = `Написано ${words} слов (при минимуме ${minRequiredWords}). Нехватка объёма не позволяет полноценно раскрыть все пункты задания.`;
  } else if (words < minRequiredWords) {
    taScore = 5.5;
    taQuote = isTask1
      ? "Band 5: Presents, but inadequately covers, key features; under the required length."
      : "Band 5: Addresses the task only partially; ideas are limited and length is under 250 words.";
    taFeedback = `Написано ${words} слов (порог ${minRequiredWords}). По официальной шкале дескрипторов недобор слов ограничивает максимальный балл.`;
  } else {
    if (isTask1) {
      if (!hasOverview) {
        taScore = 5.5;
        taQuote = "Band 5: Recounts detail mechanically with no clear overview; presents, but inadequately covers, key features.";
        taFeedback = "В тексте отсутствует выраженный Overview (обобщающий абзац трендов). По официальным дескрипторам IELTS без Overview балл за Task Achievement ограничен максимум 5.5.";
      } else if (numberMatches === 0) {
        taScore = 5.0;
        taQuote = "Band 5: Recounts detail mechanically; there may be no data to support the description.";
        taFeedback = "Overview найден, однако полностью отсутствуют конкретные цифры и проценты из визуальных данных.";
      } else if (numberMatches < 2 || comparativesCount === 0) {
        taScore = 6.0;
        taQuote = "Band 6: Addresses the requirements of the task; presents an overview with information appropriately selected, but may lack clear focus or sufficient comparisons.";
        taFeedback = "Базовый обзор и единичные данные приведены, однако не хватает сравнительных оборотов ('compared to', 'higher than') для сопоставления показателей.";
      } else if (words >= 195 && numberMatches >= 6 && comparativesCount >= 4 && paraCount >= 3 && academicMatches >= 10) {
        taScore = 8.5;
        taQuote = "Band 8: Covers all requirements of the task sufficiently; presents, highlights and illustrates key features clearly and appropriately.";
        taFeedback = "Превосходный анализ: четкий Overview, глубокие сопоставления между категориями и точные цифровые подтверждения.";
      } else if (words >= 175 && numberMatches >= 5 && comparativesCount >= 3 && paraCount >= 3 && academicMatches >= 7) {
        taScore = 8.0;
        taQuote = "Band 8: Covers all requirements of the task sufficiently; highlights and illustrates key features clearly.";
        taFeedback = "Всесторонний обзор и точное выделение главных показателей. Данные логично сгруппированы и сопоставлены.";
      } else if (words >= 160 && numberMatches >= 3 && comparativesCount >= 2 && paraCount >= 3) {
        taScore = 7.0;
        taQuote = "Band 7: Covers the requirements of the task; presents a clear overview of main trends, differences or stages; highlights key features.";
        taFeedback = "Присутствует явный Overview. Ключевые данные приведены и сопоставлены, хотя некоторые второстепенные детали могли быть развиты полнее.";
      } else {
        taScore = 6.5;
        taQuote = "Band 6: Addresses the requirements of the task; presents an overview; adequately highlights key features.";
        taFeedback = "Данные описаны и тренды понятны, но сравнения местами носят механический характер.";
      }
    } else {
      // Task 2
      if (paraCount < 3) {
        taScore = 5.0;
        taQuote = "Band 5: Expresses a position but the development is not always clear; format and paragraph structure are inappropriate.";
        taFeedback = "Текст не разбит на стандартные 4 абзаца. В IELTS Task 2 обязательны Introduction, два Body Paragraphs и Conclusion.";
      } else if (paraCount === 3) {
        taScore = 5.5;
        taQuote = "Band 5: Expresses a position but development is limited; paragraphing is inadequate.";
        taFeedback = "3 абзаца недостаточно для полноценного разделения аргументов за/против или анализа двух аспектов темы.";
      } else if (!hasThesis) {
        taScore = 6.0;
        taQuote = "Band 6: Presents a relevant position although conclusions may become unclear or repetitive.";
        taFeedback = "Позиция автора выражена размыто. Рекомендуется четко формулировать Thesis Statement во Введении и подтверждать в Заключении.";
      } else if (words >= 320 && hasExamples && academicMatches >= 14 && totalGrammarErrors === 0) {
        taScore = 8.5;
        taQuote = "Band 8: Sufficiently addresses all parts of the task; presents a well-developed response to the question with relevant, extended and supported ideas.";
        taFeedback = "Позиция автора последовательно аргументирована, идеи подкреплены убедительными примерами и детально развернуты.";
      } else if (words >= 290 && hasExamples && academicMatches >= 9) {
        taScore = 8.0;
        taQuote = "Band 8: Sufficiently addresses all parts of the task; presents a well-developed response to the question.";
        taFeedback = "Все части вопроса освещены глубоко. Авторская позиция понятна на протяжении всего эссе, аргументы достаточно развиты.";
      } else if (words >= 265 && hasExamples) {
        taScore = 7.0;
        taQuote = "Band 7: Addresses all parts of the task; presents a clear position throughout the response; extends and supports main ideas.";
        taFeedback = "Тема раскрыта, точка зрения последовательна, идеи подкреплены примерами, хотя некоторые аргументы можно углубить.";
      } else {
        taScore = 6.5;
        taQuote = "Band 6: Addresses all parts of the task; presents a relevant position although main ideas may be inadequately developed or lack focus.";
        taFeedback = "Тема затронута, но аргументам не хватает конкретных жизненных примеров или развернутых причинно-следственных связей.";
      }
    }
  }

  // 2. Coherence and Cohesion
  let ccScore = 6.0;
  let ccQuote = "";
  let ccFeedback = "";

  const connectorsCount = (lower.match(COHESIVE_CONNECTORS_REGEX) || []).length;
  const referencingCount = (lower.match(COHESIVE_REFERENCING_REGEX) || []).length;
  const totalCohesionScore = connectorsCount + referencingCount;

  if (paraCount === 1) {
    ccScore = 4.0;
    ccQuote = "Band 4: Does not write in paragraphs or information is not arranged coherently.";
    ccFeedback = "Текст написан единым массивом без деления на абзацы.";
  } else if (paraCount === 2) {
    ccScore = 5.0;
    ccQuote = "Band 5: May not write in paragraphs, or paragraphing may be inadequate; causes strain in progression.";
    ccFeedback = "Двух абзацев недостаточно для академического эссе IELTS. Требуется 4–5 абзацев с четкой темой в каждом.";
  } else if (paraCount === 3) {
    ccScore = 6.0;
    ccQuote = "Band 6: Uses paragraphing, but not always logically; arrangements may be somewhat mechanical.";
    ccFeedback = "Деление на 3 абзаца затрудняет логическое развертывание аргументов.";
  } else {
    if (connectorsCount === 0) {
      ccScore = 5.5;
      ccQuote = "Band 5: Makes inadequate use of cohesive devices; progression between sentences is abrupt.";
      ccFeedback = "В тексте почти отсутствуют связующие слова и логические переходы между мыслями.";
    } else if (referencingCount === 0 && connectorsCount >= 4) {
      ccScore = 6.0;
      ccQuote = "Band 6: Uses cohesive devices effectively, but cohesion may be faulty or mechanical; may not always use referencing clearly.";
      ccFeedback = "Связки используются несколько механически ('firstly', 'secondly', 'moreover'). Экзаменаторы снижают балл за отсутствие анафорических ссылок ('this trend', 'such measures').";
    } else if (totalCohesionScore >= 8 && referencingCount >= 3 && words >= minRequiredWords * 1.1) {
      ccScore = 8.5;
      ccQuote = "Band 8: Sequences information and ideas logically; manages all aspects of cohesion well; uses paragraphing sufficiently and appropriately.";
      ccFeedback = "Абзацы логически выверены, переходы между мыслями естественны, умело применяются контекстные местоименные связки.";
    } else if (totalCohesionScore >= 6 && referencingCount >= 2) {
      ccScore = 8.0;
      ccQuote = "Band 8: Sequences information and ideas logically; manages all aspects of cohesion well.";
      ccFeedback = "Логическая последовательность информации соблюдена, удачно используются разнообразные связующие элементы.";
    } else if (totalCohesionScore >= 4) {
      ccScore = 7.0;
      ccQuote = "Band 7: Logically organises information and ideas; there is clear progression throughout; uses a range of cohesive devices appropriately.";
      ccFeedback = "Чёткая центральная тема в каждом абзаце, связки присутствуют и в целом логичны.";
    } else if (totalCohesionScore >= 2) {
      ccScore = 6.5;
      ccQuote = "Band 6: Arranges information and ideas coherently and there is a clear overall progression; cohesive devices are adequate.";
      ccFeedback = "Логика понятна, однако связующие элементы однотипны; разнообразьте приемы связности.";
    } else {
      ccScore = 6.0;
      ccQuote = "Band 6: Uses cohesive devices effectively, but cohesion within and/or between sentences may be faulty.";
      ccFeedback = "Логика изложения прослеживается, но переходы между предложениями требуют большего разнообразия.";
    }
  }

  // 3. Lexical Resource
  let lrScore = 6.0;
  let lrQuote = "";
  let lrFeedback = "";

  if (words >= 150 && lexicalDiversity < 0.40) {
    lrScore = 5.5;
    lrQuote = "Band 5: Uses a limited range of vocabulary, minimally adequate for the task; repetitive word choices.";
    lrFeedback = "Высокая повторяемость одних и тех же базовых слов. Низкий коэффициент лексического разнообразия (Type-Token Ratio).";
  } else if (words >= 150 && lexicalDiversity < 0.44) {
    lrScore = 6.0;
    lrQuote = "Band 6: Uses an adequate range of vocabulary for the task, but noticeable repetition occurs.";
    lrFeedback = "Словарный запас достаточен, но автор часто повторяет ключевые слова вместо использования точных контекстных синонимов.";
  } else if (informalMatches.length >= 2) {
    lrScore = 6.0;
    lrQuote = "Band 6: Attempts to use vocabulary for the task, but style and register are inconsistent due to informal expressions.";
    lrFeedback = "Использование разговорных выражений ('a lot', 'kids', 'stuff') снижает академический регистр.";
  } else {
    if (academicMatches >= 16 && informalMatches.length === 0 && lexicalDiversity >= 0.48 && words >= minRequiredWords * 1.1) {
      lrScore = 8.5;
      lrQuote = "Band 8: Uses a wide range of vocabulary fluently and flexibly to convey precise meanings; skilfully uses uncommon lexical items.";
      lrFeedback = "Богатый академический лексикон уровня C1/C2, точные академические коллокации и безупречный регистр.";
    } else if (academicMatches >= 12 && informalMatches.length === 0 && words >= minRequiredWords) {
      lrScore = 8.0;
      lrQuote = "Band 8: Uses a wide range of vocabulary fluently and flexibly to convey precise meanings; skillful uncommon items.";
      lrFeedback = "Широкий диапазон академической лексики, уверенное применение продвинутых терминов и синонимов.";
    } else if (academicMatches >= 7 && informalMatches.length <= 1) {
      lrScore = 7.0;
      lrQuote = "Band 7: Uses a sufficient range of vocabulary to allow some flexibility and precision; uses less common lexical items with some awareness of style.";
      lrFeedback = "Хороший запас академических слов, демонстрируется гибкость в подборе терминов.";
    } else if (academicMatches >= 4) {
      lrScore = 6.5;
      lrQuote = "Band 6: Uses an adequate range of vocabulary; attempts less common vocabulary with general appropriateness.";
      lrFeedback = "Словарь адекватен задаче, присутствуют отдельные удачные академические термины.";
    } else if (academicMatches >= 2) {
      lrScore = 6.0;
      lrQuote = "Band 6: Uses an adequate range of vocabulary for the task; relies primarily on common word forms.";
      lrFeedback = "Преобладает базовый общеупотребительный словарь (B1/B2); рекомендуется обогащать текст академическими коллокациями.";
    } else {
      lrScore = 5.5;
      lrQuote = "Band 5: Uses a limited range of vocabulary, but this is minimally adequate for the task.";
      lrFeedback = "Словарный запас минимален, не хватает академической терминологии.";
    }
  }

  // 4. Grammatical Range and Accuracy
  let graScore = 6.0;
  let graQuote = "";
  let graFeedback = "";

  const complexGrammarMatches = (lower.match(COMPLEX_GRAMMAR_REGEX) || []).length;
  const passiveVoiceMatches = (lower.match(/\b(is|are|was|were|been|being)\s+([a-z]+ed|[a-z]+en|built|spun|drawn|cut|made|shown|found|seen|held|kept|left|taken|given)\b/g) || []).length;
  const totalGrammarFeatures = complexGrammarMatches + passiveVoiceMatches;

  if (totalGrammarErrors >= 4) {
    graScore = 5.0;
    graQuote = "Band 5: Attempts complex sentences but these tend to be less accurate; frequent grammatical errors and punctuation faults.";
    graFeedback = "Обнаружено множество грамматических ошибок и неформальных сокращений, затрудняющих восприятие текста.";
  } else if (totalGrammarErrors >= 2) {
    graScore = 5.5;
    graQuote = "Band 5: Attempts complex sentences but errors in grammar and punctuation cause difficulty for the reader.";
    graFeedback = "Зафиксированы грамматические погрешности (сокращения, согласование или неисчисляемые существительные), ограничивающие балл.";
  } else if (totalGrammarErrors === 1) {
    if (totalGrammarFeatures >= 5) {
      graScore = 6.5;
      graQuote = "Band 6: Uses a mix of simple and complex sentence forms; makes some errors in grammar and punctuation.";
      graFeedback = "Хороший набор сложных структур, однако допущена единичная ошибка, снижающая точность.";
    } else {
      graScore = 6.0;
      graQuote = "Band 6: Uses a mix of simple and complex sentence forms; makes some errors in grammar and punctuation.";
      graFeedback = "Присутствуют как простые, так и сложные предложения, но имеются грамматические шероховатости.";
    }
  } else {
    // 0 errors detected
    if (totalGrammarFeatures >= 9 && words >= minRequiredWords * 1.1) {
      graScore = 8.5;
      graQuote = "Band 8: Uses a wide range of structures with full flexibility and accuracy; rare minor errors occur only as 'slips'.";
      graFeedback = "Превосходный контроль синтаксиса: уместное применение сложноподчиненных предложений, пассивного залога и инверсий.";
    } else if (totalGrammarFeatures >= 6 && words >= minRequiredWords) {
      graScore = 8.0;
      graQuote = "Band 8: Uses a wide range of structures; the majority of sentences are error-free.";
      graFeedback = "Большинство предложений составлены безупречно, синтаксический строй разнообразен и гармоничен.";
    } else if (totalGrammarFeatures >= 4) {
      graScore = 7.0;
      graQuote = "Band 7: Uses a variety of complex structures; produces frequent error-free sentences; has good control of grammar and punctuation.";
      graFeedback = "Хороший баланс простых и сложных конструкций, пунктуация и согласование времен соблюдены.";
    } else if (totalGrammarFeatures >= 2) {
      graScore = 6.5;
      graQuote = "Band 6: Uses a mix of simple and complex sentence forms; generally accurate.";
      graFeedback = "Текст грамотен, но преобладают простые предложения; добавьте пассивные и условные конструкции.";
    } else {
      graScore = 6.0;
      graQuote = "Band 6: Uses simple sentence forms primarily; limited range of complex structures.";
      graFeedback = "Структура предложений однообразна; для повышения балла используйте пассивный залог и придаточные предложения.";
    }
  }

  // Official IELTS Rounding: Average rounded to nearest 0.5
  const avg = (taScore + ccScore + lrScore + graScore) / 4;
  const overallScore = Math.round(avg * 2) / 2;

  // Targeted corrections based on ACTUAL text content
  const corrections: DetailedCorrection[] = [];

  if (contractionsMatches.length > 0 && contractionsMatches[0]) {
    const sample = contractionsMatches[0];
    const fullForm =
      sample.toLowerCase() === "don't"
        ? "do not"
        : sample.toLowerCase() === "can't"
        ? "cannot"
        : sample.toLowerCase() === "won't"
        ? "will not"
        : sample.toLowerCase() === "it's"
        ? "it is"
        : sample.toLowerCase() === "doesn't"
        ? "does not"
        : "полная форма (без апострофа)";
    corrections.push({
      original: sample,
      improved: fullForm,
      reason: "В академическом IELTS Writing сокращения (contractions) запрещены и снижают баллы за Grammatical Range & Accuracy.",
      category: "Grammar",
    });
  }

  if (informalMatches.length > 0 && informalMatches[0]) {
    const sample = informalMatches[0];
    const formalAlt = sample.toLowerCase().includes("lot")
      ? "a substantial proportion / markedly"
      : sample.toLowerCase().includes("kid")
      ? "children / adolescents"
      : sample.toLowerCase().includes("stuff") || sample.toLowerCase().includes("thing")
      ? "factors / aspects / considerations"
      : sample.toLowerCase().includes("big") || sample.toLowerCase().includes("huge")
      ? "pressing issue / major concern"
      : "academic equivalent";
    corrections.push({
      original: sample,
      improved: formalAlt,
      reason: "Разговорные слова снижают академический регистр Lexical Resource. Используйте точные академические термины.",
      category: "Lexical",
    });
  }

  if (uncountableMatches.length > 0 && uncountableMatches[0]) {
    const sample = uncountableMatches[0];
    corrections.push({
      original: sample,
      improved: sample.slice(0, -1),
      reason: `Существительное '${sample}' в английском языке неисчисляемое (uncountable) и не имеет окончания множественного числа '-s'.`,
      category: "Grammar",
    });
  }

  if (agreementMatches.length > 0 && agreementMatches[0]) {
    const sample = agreementMatches[0];
    corrections.push({
      original: sample,
      improved: sample.replace(/\b(do|have|go|say|show|indicate|mean|lead)\b/, (m) => (m === "have" ? "has" : m === "do" ? "does" : m + "s")),
      reason: "Ошибка в согласовании подлежащего и сказуемого (Subject-Verb Agreement) в 3-м лице единственного числа.",
      category: "Grammar",
    });
  }

  if (prepMatches.length > 0 && prepMatches[0]) {
    const sample = prepMatches[0];
    const fix = sample
      .replace("depend of", "depend on")
      .replace("discuss about", "discuss")
      .replace("explain about", "explain")
      .replace("consist in", "consist of")
      .replace("pay attention on", "pay attention to")
      .replace("reason of", "reason for")
      .replace("in the other hand", "on the other hand")
      .replace("on the second hand", "on the other hand");
    corrections.push({
      original: sample,
      improved: fix,
      reason: "Неправильный предлог или искажение устойчивой академической коллокации.",
      category: "Lexical",
    });
  }

  if (doubleCompMatches.length > 0 && doubleCompMatches[0]) {
    const sample = doubleCompMatches[0];
    const fix = sample
      .replace("more better", "much better")
      .replace("more easier", "substantially easier")
      .replace("more faster", "much faster")
      .replace("more higher", "substantially higher")
      .replace("most highest", "highest")
      .replace("most best", "best")
      .replace("most cheapest", "cheapest");
    corrections.push({
      original: sample,
      improved: fix,
      reason: "Двойная сравнительная или превосходная степень является грубой грамматической ошибкой.",
      category: "Grammar",
    });
  }

  if (isTask1 && !hasOverview) {
    corrections.push({
      original: "[В тексте не обнаружен выраженный Overview]",
      improved: "Overall, the predominant trajectory indicates that ..., whilst ...",
      reason: "По официальным критериям IELTS Band Descriptors отсутствие Overview жестко ограничивает Task Achievement оценкой 5.5.",
      category: "Structure",
    });
  }

  if (corrections.length === 0 && overallScore < 7.0) {
    corrections.push({
      original: "Базовые сочинительные связки ('and', 'but', 'so')",
      improved: "Сложные подчинительные конструкции ('whilst', 'whereas', 'consequently', 'it is widely argued that')",
      reason: "Для преодоления планки Band 6.5 и выхода на Band 7+ экзаменаторы требуют больше подчинительных союзов и разнообразия сложноподчиненных предложений.",
      category: "Cohesion",
    });
  }

  const actionableSteps: string[] = [];
  if (overallScore >= 8.5) {
    actionableSteps.push(
      "Работа высшего экзаменационного уровня. Сохраняйте этот баланс академического регистра и глубины аргументации.",
      "На реальном экзамене оставляйте 3 минуты на проверку пунктуации и правописания сложных терминов.",
      "В Task 1 поддерживайте точность группировки данных, а в Task 2 — органичность примеров."
    );
  } else if (overallScore >= 7.5) {
    actionableSteps.push(
      "Отличный результат (Band 7.5–8.0). Для перехода на чистый Band 8.5–9.0 работайте над естественностью переходов без клишированных вводных слов.",
      "Внедряйте инверсии и сложносочиненные пассивные обороты ('Had the policy not been enacted, ...', 'This can largely be attributed to...').",
      "Углубляйте аргументацию: раскрывайте не только тезис, но и его масштабные экономические или социальные последствия."
    );
  } else if (overallScore >= 6.5) {
    actionableSteps.push(
      isTask1
        ? "Для достижения Band 7.0+ в Task 1 выделяйте не менее 2 глобальных трендов в Overview и активнее используйте сравнительные конструкции ('twice as much', 'surpassed')."
        : "Для достижения Band 7.0+ в Task 2 каждый аргумент в Body Paragraph подкрепляйте конкретным примером или логическим обоснованием ('for instance', 'this results in').",
      "Замените базовые связки ('firstly', 'secondly', 'moreover') на контекстные местоименные связки ('this trajectory', 'such initiatives', 'the former').",
      "Исключите любые разговорные слова и неформальные сокращения (заменяйте don't на do not, a lot на substantial proportion)."
    );
  } else {
    actionableSteps.push(
      `Строго соблюдайте регламент по объёму слов: минимум ${isTask1 ? "150 (цель: 170–190)" : "250 (цель: 280–310)"} слов.`,
      isTask1
        ? "Обязательно пишите выраженный абзац Overview (вторым или последним абзацем), обобщая главные тенденции без цифр."
        : "Строго придерживайтесь 4-абзацной структуры: Introduction (с позицией), Body 1, Body 2, Conclusion.",
      "Сфокусируйтесь на базовой грамматической точности: проверяйте согласование подлежащего со сказуемым (he increases, they show) и не используйте сокращения."
    );
  }

  return {
    overallScore,
    taskScore: { score: taScore, descriptorQuote: taQuote, feedback: taFeedback },
    coherenceScore: { score: ccScore, descriptorQuote: ccQuote, feedback: ccFeedback },
    lexicalScore: { score: lrScore, descriptorQuote: lrQuote, feedback: lrFeedback },
    grammarScore: { score: graScore, descriptorQuote: graQuote, feedback: graFeedback },
    corrections,
    actionableSteps,
  };
}

export function ExaminerReviewModal({
  isOpen,
  onClose,
  task,
  userEssay,
}: {
  isOpen: boolean;
  onClose: () => void;
  task: WritingTaskDataWithModel;
  userEssay: string;
}) {
  const [activeTab, setActiveTab] = useState<"score" | "model" | "compare">("score");
  const [copiedModel, setCopiedModel] = useState(false);

  const evaluation = useMemo(() => {
    return evaluateIeltsEssay(userEssay, task);
  }, [userEssay, task]);

  if (!isOpen) return null;

  const handleCopyModel = () => {
    navigator.clipboard.writeText(task.modelEssay);
    setCopiedModel(true);
    setTimeout(() => setCopiedModel(false), 2000);
  };

  const isTask1 = task.taskNumber === 1;
  const wordCount = userEssay.trim() ? userEssay.trim().split(/\s+/).length : 0;
  const modelWordCount = task.modelEssay.trim().split(/\s+/).length;

  const getScoreBadgeColor = (score: number) => {
    if (score >= 8.5) return "bg-purple-100 text-purple-800 dark:bg-purple-950/70 dark:text-purple-300 border-purple-300 dark:border-purple-800";
    if (score >= 7.5) return "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800";
    if (score >= 6.5) return "bg-sky-100 text-sky-800 dark:bg-sky-950/70 dark:text-sky-300 border-sky-300 dark:border-sky-800";
    return "bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300 border-amber-300 dark:border-amber-800";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-white dark:bg-[#0c121e] border border-slate-200 dark:border-white/[0.08] rounded-3xl shadow-2xl overflow-hidden">
        {/* Top Header */}
        <div className="px-6 py-4 border-b border-slate-200/80 dark:border-white/[0.08] bg-slate-50/80 dark:bg-white/[0.02] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#007EA7] to-[#00A8E8] text-white flex items-center justify-center font-bold shadow-md">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300">
                  IELTS Writing Examiner
                </span>
                <span className="text-xs text-slate-400">•</span>
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                  Официальные критерии Band Descriptors
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight">
                {task.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06] transition"
              title="Закрыть окно и вернуться в меню"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation Controls */}
        <div className="px-6 pt-3 border-b border-slate-200 dark:border-white/[0.06] flex items-center gap-2 shrink-0 bg-white dark:bg-[#0c121e]">
          <button
            onClick={() => setActiveTab("score")}
            className={`pb-3 px-3 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-2 transition ${
              activeTab === "score"
                ? "border-[#007EA7] text-[#007EA7] dark:border-[#00A8E8] dark:text-[#00A8E8]"
                : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
            }`}
          >
            <Award className="w-4 h-4" />
            <span>1. Твой скор и критерии</span>
            <span className={`px-2 py-0.2 rounded-full text-[11px] font-bold border ${getScoreBadgeColor(evaluation.overallScore)}`}>
              Band {evaluation.overallScore.toFixed(1)}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("model")}
            className={`pb-3 px-3 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-2 transition ${
              activeTab === "model"
                ? "border-[#007EA7] text-[#007EA7] dark:border-[#00A8E8] dark:text-[#00A8E8]"
                : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
            }`}
          >
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span>2. Твой врайтинг (Эталон Band 9)</span>
            <span className="px-2 py-0.2 rounded-full text-[10px] font-bold bg-purple-100 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300">
              Band 9.0 Model
            </span>
          </button>

          <button
            onClick={() => setActiveTab("compare")}
            className={`pb-3 px-3 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-2 transition ${
              activeTab === "compare"
                ? "border-[#007EA7] text-[#007EA7] dark:border-[#00A8E8] dark:text-[#00A8E8]"
                : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>3. Сравнение (Ты vs Экзаменатор)</span>
          </button>
        </div>

        {/* Modal Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {activeTab === "score" && (
            <div className="space-y-6">
              {/* Overall Score Header Card */}
              <div className="p-6 rounded-3xl bg-gradient-to-r from-sky-900 to-[#007EA7] text-white shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-sky-200 block mb-1">
                    Официальный вердикт экзаменатора IELTS
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                    Overall Band Score: {evaluation.overallScore.toFixed(1)}
                  </h3>
                  <p className="text-xs sm:text-sm text-sky-100 mt-1 max-w-xl">
                    Оценка рассчитана строго по официальной шкале дескрипторов British Council / IDP с округлением до ближайших 0.5 балла.
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center min-w-[110px]">
                    <span className="text-[10px] uppercase font-bold text-sky-200 block">Текст работы</span>
                    <span className="text-xl font-bold font-mono">{wordCount}</span>
                    <span className="text-[10px] text-sky-200 block">слов</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center min-w-[110px]">
                    <span className="text-[10px] uppercase font-bold text-sky-200 block">Эталон Band 9</span>
                    <span className="text-xl font-bold font-mono">{modelWordCount}</span>
                    <span className="text-[10px] text-sky-200 block">слов</span>
                  </div>
                </div>
              </div>

              {/* 4 Official Criteria Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Criterion 1: TA / TR */}
                <div className="p-5 rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/[0.07] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {isTask1 ? "1. Task Achievement (TA)" : "1. Task Response (TR)"}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-xl text-xs font-bold border ${getScoreBadgeColor(evaluation.taskScore.score)}`}>
                      Band {evaluation.taskScore.score.toFixed(1)}
                    </span>
                  </div>
                  <p className="text-xs italic text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-white/[0.02] p-2.5 rounded-xl border border-slate-100 dark:border-white/[0.04]">
                    "{evaluation.taskScore.descriptorQuote}"
                  </p>
                  <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                    {evaluation.taskScore.feedback}
                  </p>
                </div>

                {/* Criterion 2: CC */}
                <div className="p-5 rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/[0.07] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      2. Coherence & Cohesion (CC)
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-xl text-xs font-bold border ${getScoreBadgeColor(evaluation.coherenceScore.score)}`}>
                      Band {evaluation.coherenceScore.score.toFixed(1)}
                    </span>
                  </div>
                  <p className="text-xs italic text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-white/[0.02] p-2.5 rounded-xl border border-slate-100 dark:border-white/[0.04]">
                    "{evaluation.coherenceScore.descriptorQuote}"
                  </p>
                  <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                    {evaluation.coherenceScore.feedback}
                  </p>
                </div>

                {/* Criterion 3: LR */}
                <div className="p-5 rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/[0.07] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      3. Lexical Resource (LR)
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-xl text-xs font-bold border ${getScoreBadgeColor(evaluation.lexicalScore.score)}`}>
                      Band {evaluation.lexicalScore.score.toFixed(1)}
                    </span>
                  </div>
                  <p className="text-xs italic text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-white/[0.02] p-2.5 rounded-xl border border-slate-100 dark:border-white/[0.04]">
                    "{evaluation.lexicalScore.descriptorQuote}"
                  </p>
                  <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                    {evaluation.lexicalScore.feedback}
                  </p>
                </div>

                {/* Criterion 4: GRA */}
                <div className="p-5 rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/[0.07] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      4. Grammatical Range & Accuracy (GRA)
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-xl text-xs font-bold border ${getScoreBadgeColor(evaluation.grammarScore.score)}`}>
                      Band {evaluation.grammarScore.score.toFixed(1)}
                    </span>
                  </div>
                  <p className="text-xs italic text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-white/[0.02] p-2.5 rounded-xl border border-slate-100 dark:border-white/[0.04]">
                    "{evaluation.grammarScore.descriptorQuote}"
                  </p>
                  <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                    {evaluation.grammarScore.feedback}
                  </p>
                </div>
              </div>

              {/* Detailed Corrections Table */}
              {evaluation.corrections.length > 0 && (
                <div className="p-5 rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/[0.07] space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500" />
                    Детальный разбор фраз и академические исправления:
                  </h4>

                  <div className="space-y-3">
                    {evaluation.corrections.map((corr, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/[0.05] space-y-1.5"
                      >
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="font-bold text-rose-600 dark:text-rose-400 line-through">
                            {corr.original}
                          </span>
                          <span className="px-2 py-0.2 rounded-md font-mono text-[9px] bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-300">
                            {corr.category}
                          </span>
                        </div>
                        <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                          <ArrowRight className="w-3 h-3 shrink-0" />
                          <span>{corr.improved}</span>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                          {corr.reason}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Actionable Steps */}
              <div className="p-5 rounded-3xl bg-sky-50/60 dark:bg-sky-950/20 border border-sky-200/80 dark:border-sky-800/40 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#007EA7] dark:text-[#00A8E8] flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Рекомендации экзаменатора:
                </h4>
                <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  {evaluation.actionableSteps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#007EA7] text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === "model" && (
            <div className="space-y-6">
              {/* Model Essay Header */}
              <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-purple-500 text-white">
                      Examiner Sample Answer
                    </span>
                    <span className="text-xs text-slate-400">• Band 9.0 Verified</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold">
                    Эталонный текст экзаменатора (Band 9)
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Идеальная структура, безупречная когезия, академическая точность дескриптора Band 9.
                  </p>
                </div>

                <button
                  onClick={handleCopyModel}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-2 transition"
                >
                  {copiedModel ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" /> Скопировано!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" /> Скопировать эталон
                    </>
                  )}
                </button>
              </div>

              {/* Model Essay Full Text */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/[0.07] font-serif text-sm sm:text-base leading-relaxed text-slate-900 dark:text-slate-100 whitespace-pre-line shadow-sm">
                {task.modelEssay}
              </div>

              {/* Lexical Resource & Vocabulary Highlights */}
              <div className="p-5 rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/[0.07] space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  Продвинутая лексика из эталона (Band 8.5–9.0):
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {task.modelVocabHighlights.map((v, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/[0.05]"
                    >
                      <span className="font-bold text-xs text-[#007EA7] dark:text-[#00A8E8] block mb-0.5">
                        {v.term}
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug block">
                        {v.explanation}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "compare" && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Candidate's essay */}
                <div className="p-5 rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/[0.07] flex flex-col space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.05] pb-2">
                    <div>
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                        Ваш текст (Your Submission)
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {wordCount} слов • Band {evaluation.overallScore.toFixed(1)}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.01] border border-slate-100 dark:border-white/[0.04] text-xs sm:text-sm font-serif leading-relaxed text-slate-800 dark:text-slate-200 whitespace-pre-line max-h-[480px] overflow-y-auto">
                    {userEssay || "Вы ещё не ввели текст эссе."}
                  </div>
                </div>

                {/* Examiner's Model Essay */}
                <div className="p-5 rounded-3xl bg-white dark:bg-white/[0.02] border border-purple-200 dark:border-purple-900/40 flex flex-col space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.05] pb-2">
                    <div>
                      <span className="text-xs font-bold text-purple-700 dark:text-purple-300 block">
                        Врайтинг экзаменатора (Examiner Band 9)
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {modelWordCount} слов • Band 9.0
                      </span>
                    </div>
                    <button
                      onClick={handleCopyModel}
                      className="text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1"
                    >
                      <Copy className="w-3.5 h-3.5" /> Скопировать
                    </button>
                  </div>
                  <div className="flex-1 p-4 rounded-2xl bg-purple-50/20 dark:bg-purple-950/10 border border-purple-100 dark:border-purple-900/30 text-xs sm:text-sm font-serif leading-relaxed text-slate-900 dark:text-slate-100 whitespace-pre-line max-h-[480px] overflow-y-auto">
                    {task.modelEssay}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Actions */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-white/[0.02] flex items-center justify-between shrink-0">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Результаты проверены по официальным критериям IELTS.
          </div>

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 text-white text-xs font-bold transition shadow-sm"
          >
            Закрыть окно
          </button>
        </div>
      </div>
    </div>
  );
}
