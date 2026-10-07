"use client";

import React, { useMemo } from "react";
import katex from "katex";

interface MathRendererProps {
  text: string;
  className?: string;
}

/**
 * Cleans unintended newlines after commas, mid-sentence breaks, and invisible Unicode chars.
 */
export function cleanTextWhitespace(text: string): string {
  if (!text) return "";
  // 1. Remove invisible Unicode characters (U+2060-U+2064, zero-width spaces, invisible times)
  let res = text.replace(/[\u200B-\u200D\uFEFF\u2060-\u2064]|&#8202;|&#8203;|&#65024;/g, " ");
  // 2. Fix comma followed by newline ("новый абзац после запятой")
  res = res.replace(/,\s*\n+\s*/g, ", ");
  // 3. Fix mid-sentence hard wrapping (keep double \n\n for paragraphs, preserve bullet points)
  res = res.replace(/(?<!\n)\n(?!\n|\s*[•\-*]|\s*\d+\.|\s*<p|\s*<\/p|\s*<div|\s*<\/div|\s*<figure|\s*<table|\s*<ul|\s*<ol|\s*<li)/g, " ");
  // 4. Normalize non-breaking spaces (HTML entity & unicode)
  res = res.replace(/&#160;|&nbsp;|&#xA0;|&#xa0;|\u00A0/gi, " ");
  // 5. Clean common punctuation entities in general text
  res = res.replace(/&rsquo;|&lsquo;|&#8217;|&#8216;/gi, "'");
  res = res.replace(/&rdquo;|&ldquo;|&#8221;|&#8220;/gi, '"');
  res = res.replace(/&mdash;|&#8212;/gi, " — ");
  res = res.replace(/&ndash;|&#8211;/gi, " – ");
  res = res.replace(/&#8209;/gi, "-");
  return res;
}

interface XmlNode {
  tag: string;
  attrs: Record<string, string>;
  children: (XmlNode | string)[];
}

/**
 * High-performance, resilient XML tree parser for W3C MathML.
 * Handles nested elements at arbitrary depth without regex corruption.
 */
export function parseXmlTree(xmlStr: string): XmlNode[] {
  let pos = 0;
  const len = xmlStr.length;

  function parseChildren(): (XmlNode | string)[] {
    const children: (XmlNode | string)[] = [];
    while (pos < len) {
      const nextOpen = xmlStr.indexOf("<", pos);
      if (nextOpen === -1) {
        const text = xmlStr.slice(pos).trim();
        if (text) children.push(text);
        pos = len;
        break;
      }
      if (nextOpen > pos) {
        const text = xmlStr.slice(pos, nextOpen).trim();
        if (text) children.push(text);
        pos = nextOpen;
      }

      // Closing tag: </...
      if (xmlStr[pos + 1] === "/") {
        const closeEnd = xmlStr.indexOf(">", pos);
        if (closeEnd === -1) {
          pos = len;
          break;
        }
        pos = closeEnd + 1;
        break;
      }

      // Opening tag: <tag ...>
      const closeTagIndex = xmlStr.indexOf(">", pos);
      if (closeTagIndex === -1) {
        pos = len;
        break;
      }
      const tagContent = xmlStr.slice(pos + 1, closeTagIndex).trim();
      pos = closeTagIndex + 1;

      const isSelfClosing = tagContent.endsWith("/");
      const cleanTagContent = isSelfClosing ? tagContent.slice(0, -1).trim() : tagContent;
      const parts = cleanTagContent.split(/\s+/);
      const tag = parts[0].toLowerCase();

      const attrs: Record<string, string> = {};
      const attrRegex = /([a-zA-Z0-9_:-]+)=(?:["']([^"']*)["']|([^\s>]+))/g;
      let am: RegExpExecArray | null;
      while ((am = attrRegex.exec(cleanTagContent)) !== null) {
        attrs[am[1].toLowerCase()] = am[2] !== undefined ? am[2] : am[3];
      }

      const node: XmlNode = { tag, attrs, children: [] };
      if (!isSelfClosing && tag !== "br" && tag !== "hr") {
        node.children = parseChildren();
      }
      children.push(node);
    }
    return children;
  }

  return parseChildren() as XmlNode[];
}

/**
 * Normalizes entity references, invisible characters, and whitespace in MathML before parsing.
 */
export function decodeEntitiesAndCleanMath(str: string): string {
  if (!str) return "";
  let s = str;
  // Replace escaped newlines/tabs from JSON or strings
  s = s.replace(/\\r/g, " ").replace(/\\n/g, " ").replace(/\\t/g, " ");
  s = s.replace(/[\r\n\t]+/g, " ");

  // Zero-width and invisible chars
  s = s.replace(/[\u200B-\u200D\uFEFF\u2060-\u2064]|&#8202;|&#8203;|&#65024;/g, "");

  // Non-breaking spaces inside math
  s = s.replace(/&#160;|&nbsp;|&#xA0;|&#xa0;|\u00A0/gi, " ");

  // Overlines & macrons
  s = s.replace(/&#175;|&macr;/gi, "¯");

  // Hexadecimal entities
  s = s.replace(/&#x00024;/gi, "\\$");
  s = s.replace(/&#x00028;/gi, "(");
  s = s.replace(/&#x00029;/gi, ")");
  s = s.replace(/&#x0002B;/gi, "+");
  s = s.replace(/&#x0003D;/gi, "=");
  s = s.replace(/&#x02212;/gi, " - ");
  s = s.replace(/&#x02218;/gi, "^{\\circ} ");

  // Mathematical entities
  s = s.replace(/&#8722;|&minus;|−/g, " - ");
  s = s.replace(/&#183;|&middot;|&sdot;|·/g, " \\cdot ");
  s = s.replace(/&#215;|&times;|×/g, " \\times ");
  s = s.replace(/&#247;|&divide;|÷/g, " \\div ");
  s = s.replace(/&#176;|&deg;|°/g, "^{\\circ} ");
  s = s.replace(/&#177;|&plusmn;|±/g, " \\pm ");
  s = s.replace(/&#8804;|&le;|≤/g, " \\le ");
  s = s.replace(/&#8805;|&ge;|≥/g, " \\ge ");
  s = s.replace(/&#8776;|≈/g, " \\approx ");
  s = s.replace(/&#8736;|&ang;|∠/g, " \\angle ");
  s = s.replace(/&#9651;|&#8710;|△|∆/g, " \\triangle ");
  s = s.replace(/&#8209;/g, "-");
  s = s.replace(/&ne;|≠/g, " \\ne ");
  s = s.replace(/&prime;|′/g, "'");
  s = s.replace(/&rsquo;|&lsquo;|’|‘/g, "'");
  s = s.replace(/&rdquo;|&ldquo;|”|“/g, '"');
  s = s.replace(/&mdash;|&ndash;|—|–/g, " - ");
  s = s.replace(/&#960;|&pi;|π/g, " \\pi ");
  s = s.replace(/&#952;|&theta;|θ/g, " \\theta ");
  s = s.replace(/&#945;|&alpha;|α/g, " \\alpha ");
  s = s.replace(/&#946;|&beta;|β/g, " \\beta ");
  s = s.replace(/&lt;|&#60;/g, "<");
  s = s.replace(/&gt;|&#62;/g, ">");
  s = s.replace(/&amp;/g, "&");

  return s;
}

/**
 * Converts a MathML AST node into standard KaTeX-compatible LaTeX.
 */
function nodeToLatex(node: XmlNode | string): string {
  if (typeof node === "string") {
    return node;
  }
  const tag = node.tag;
  const children = node.children;
  const renderChildren = () => children.map((c) => nodeToLatex(c)).join("");

  switch (tag) {
    case "math":
    case "mrow":
    case "mstyle":
      return renderChildren();

    case "mi": {
      let val = renderChildren().trim();
      val = val.replace(/&#960;|&pi;/g, "\\pi ");
      val = val.replace(/&#952;|&theta;/g, "\\theta ");
      val = val.replace(/&#945;|&alpha;/g, "\\alpha ");
      val = val.replace(/&#946;|&beta;/g, "\\beta ");
      val = val.replace(/[\u2060-\u2064]/g, "");
      val = val.replace(/𝓁/g, "\\ell");
      if (/^(sin|cos|tan|cot|sec|csc|log|ln|arcsin|arccos|arctan)$/.test(val)) {
        return `\\${val} `;
      }
      return val;
    }

    case "mn": {
      let val = renderChildren().trim();
      val = val.replace(/[\u2060-\u2064]/g, "");
      return val;
    }

    case "mo": {
      let val = renderChildren().trim();
      val = val.replace(/[\u2060-\u2064]/g, "");
      if (val === "&le;" || val === "≤" || val === "\\le") return " \\le ";
      if (val === "&ge;" || val === "≥" || val === "\\ge") return " \\ge ";
      if (val === "&ne;" || val === "≠" || val === "\\ne") return " \\ne ";
      if (val === "&plusmn;" || val === "±" || val === "\\pm") return " \\pm ";
      if (val === "&times;" || val === "×" || val === "\\times") return " \\times ";
      if (val === "&middot;" || val === "·" || val === "\\cdot") return " \\cdot ";
      if (val === "&deg;" || val === "°" || val === "^{\\circ}") return "^\\circ ";
      if (val === "−" || val === "&minus;" || val === "-") return " - ";
      if (val === "+") return " + ";
      if (val === "=") return " = ";
      if (val === "<" || val === "&lt;") return " < ";
      if (val === ">" || val === "&gt;") return " > ";
      if (val === ",") return ", ";
      if (val === "$" || val === "\\$") return "\\$";
      if (val === "(" || val === ")" || val === "[" || val === "]") return val;
      if (val === "{" || val === "}") return `\\${val}`;
      if (val === "|") return "|";
      if (val === "%" || val === "\\%") return "\\%";
      return ` ${val} `;
    }

    case "mfrac": {
      if (children.length >= 2) {
        const num = nodeToLatex(children[0]).trim();
        const den = nodeToLatex(children[1]).trim();
        return `\\frac{${num}}{${den}}`;
      }
      return renderChildren();
    }

    case "msup": {
      if (children.length >= 2) {
        const base = nodeToLatex(children[0]).trim();
        const exp = nodeToLatex(children[1]).trim();
        return `{${base}}^{${exp}}`;
      }
      return renderChildren();
    }

    case "msub": {
      if (children.length >= 2) {
        const base = nodeToLatex(children[0]).trim();
        const sub = nodeToLatex(children[1]).trim();
        return `{${base}}_{${sub}}`;
      }
      return renderChildren();
    }

    case "msubsup": {
      if (children.length >= 3) {
        const base = nodeToLatex(children[0]).trim();
        const sub = nodeToLatex(children[1]).trim();
        const sup = nodeToLatex(children[2]).trim();
        return `{${base}}_{${sub}}^{${sup}}`;
      }
      return renderChildren();
    }

    case "msqrt": {
      return `\\sqrt{${renderChildren().trim()}}`;
    }

    case "mroot": {
      if (children.length >= 2) {
        const base = nodeToLatex(children[0]).trim();
        const root = nodeToLatex(children[1]).trim();
        return `\\sqrt[${root}]{${base}}`;
      }
      return renderChildren();
    }

    case "mfenced": {
      const open = (node.attrs.open !== undefined ? node.attrs.open : "(").replace(/["'\\]/g, "").trim();
      const close = (node.attrs.close !== undefined ? node.attrs.close : ")").replace(/["'\\]/g, "").trim();
      const inner = renderChildren().trim();
      const left = open === "{" ? "\\left\\{" : open === "" ? "" : open === "|" ? "\\left|" : `\\left${open}`;
      const right = close === "}" ? "\\right\\}" : close === "" ? "" : close === "|" ? "\\right|" : `\\right${close}`;
      return `${left} ${inner} ${right}`;
    }

    case "mover": {
      if (children.length >= 2) {
        const base = nodeToLatex(children[0]).trim();
        const over = nodeToLatex(children[1]).trim();
        if (over === "¯" || over === "-" || over === "—" || over === "\\overline{}" || over === "&#175;" || over === "&macr;") return `\\overline{${base}}`;
        if (over === "^" || over === "⌢") return `\\widehat{${base}}`;
        if (over === "→" || over === "\\rightarrow" || over === "&#8594;") return `\\vec{${base}}`;
        return `\\overset{${over}}{${base}}`;
      }
      return renderChildren();
    }

    case "mtext": {
      let text = renderChildren().trim();
      text = text.replace(/\\?\$/g, "\\$");
      return text ? `\\text{${text}}` : "";
    }

    case "mtable": {
      const rows: string[] = [];
      for (const rowNode of children) {
        if (typeof rowNode !== "string" && rowNode.tag === "mtr") {
          const cells: string[] = [];
          for (const cellNode of rowNode.children) {
            if (typeof cellNode !== "string" && cellNode.tag === "mtd") {
              cells.push(nodeToLatex(cellNode).trim());
            }
          }
          rows.push(cells.join(" & "));
        }
      }
      return `\\begin{matrix} ${rows.join(" \\\\ ")} \\end{matrix}`;
    }

    case "menclose": {
      return `\\overline{${renderChildren().trim()}}`;
    }

    default:
      return renderChildren();
  }
}

/**
 * Converts standard W3C MathML into LaTeX notation for KaTeX rendering.
 */
export function convertMathMlToLatex(mml: string): string {
  if (!mml) return "";
  const cleanedMml = decodeEntitiesAndCleanMath(mml);
  const tree = parseXmlTree(cleanedMml);
  if (tree.length === 0) return "";
  let latex = nodeToLatex(tree[0]);
  // Fix unescaped percentage signs in math mode
  latex = latex.replace(/(?<!\\)%/g, "\\%");
  latex = latex.replace(/\\n/g, " ").replace(/\n/g, " ").replace(/\s+/g, " ").trim();
  return latex;
}

/**
 * Checks if an alt description is an image figure description rather than a math formula.
 */
function isFigureDescription(text: string): boolean {
  if (!text) return true;
  if (text.length > 120) return true;
  if (/^The figure presents\b/i.test(text)) return true;
  if (/^Graph of\b/i.test(text)) return true;
  return false;
}

/**
 * Converts College Board spoken math alt strings into crisp LaTeX math expressions.
 * E.g.:
 * - "with coordinates zero comma 8" -> "(0, 8)"
 * - "y equals, 6 x plus 8" -> "y = 6x + 8"
 * - "0 comma 18" -> "(0, 18)"
 * - "0 comma negative 1" -> "(0, -1)"
 * - "m equals 6" -> "m = 6"
 */
export function spokenMathToLatex(text: string): string {
  if (!text || isFigureDescription(text)) return "";
  let s = text.trim();

  // Strip leading speech wrappers: "with coordinates", "the point", "coordinates"
  s = s.replace(/^(?:with\s+coordinates\s+|the\s+point\s+|coordinates\s+)+/gi, "");

  // Numbers written as words
  const wordToNum: Record<string, string> = {
    zero: "0", one: "1", two: "2", three: "3", four: "4",
    five: "5", six: "6", seven: "7", eight: "8", nine: "9", ten: "10"
  };
  for (const [w, n] of Object.entries(wordToNum)) {
    s = s.replace(new RegExp(`\\b${w}\\b`, "gi"), n);
  }

  // Spoken fractions
  s = s.replace(/\bone\s+half\b/gi, "\\frac{1}{2}");
  s = s.replace(/\bone\s+third\b/gi, "\\frac{1}{3}");
  s = s.replace(/\btwo\s+thirds\b/gi, "\\frac{2}{3}");
  s = s.replace(/\bone\s+fourth\b/gi, "\\frac{1}{4}");
  s = s.replace(/\bthree\s+fourths\b/gi, "\\frac{3}{4}");
  s = s.replace(/\bthe\s+fraction\s+(.*?)\s+over\s+([a-zA-Z0-9\(\)]+)/gi, "\\frac{$1}{$2}");

  // Speech pause commas after words like equals, times, plus, minus
  s = s.replace(/\b(equals|times|plus|minus)\s*,/gi, "$1");
  s = s.replace(/,\s*(times|plus|minus)\b/gi, " $1");

  // Parentheses & brackets
  s = s.replace(/\bopen\s+parenthesis\s*,?\s*/gi, "(");
  s = s.replace(/\s*,?\s*close\s+parenthesis\b/gi, ")");
  s = s.replace(/\bopen\s+bracket\s*,?\s*/gi, "[");
  s = s.replace(/\s*,?\s*close\s+bracket\b/gi, "]");

  // Exponents
  s = s.replace(/([a-zA-Z0-9\)])\s*,?\s*squared\b/gi, "$1^2");
  s = s.replace(/([a-zA-Z0-9\)])\s*,?\s*cubed\b/gi, "$1^3");
  s = s.replace(/\bsquared\b/gi, "^2");
  s = s.replace(/\bcubed\b/gi, "^3");
  s = s.replace(/\braised\s+to\s+the\s+(.*?)\s+power\b/gi, "^{$1}");

  // Square roots
  s = s.replace(/\bsquare\s+root\s+of\s+([a-zA-Z0-9]+)/gi, "\\sqrt{$1}");

  // Inequalities and equality
  s = s.replace(/\b(?:which\s+is|is)?\s*less\s+than\s+or\s+equal\s+to\b/gi, "\\le");
  s = s.replace(/\b(?:which\s+is|is)?\s*greater\s+than\s+or\s+equal\s+to\b/gi, "\\ge");
  s = s.replace(/\b(?:which\s+is|is)?\s*less\s+than\b/gi, "<");
  s = s.replace(/\b(?:which\s+is|is)?\s*greater\s+than\b/gi, ">");
  s = s.replace(/\bnot\s+equal\s+to\b/gi, "\\ne");
  s = s.replace(/\bequals?\b/gi, "=");

  // Spoken punctuation & signs
  s = s.replace(/\bcomma\b/gi, ",");
  s = s.replace(/\bnegative\b/gi, "-");
  s = s.replace(/\bpositive\b/gi, "+");
  s = s.replace(/\bpoint\b/gi, ".");

  // Operations
  s = s.replace(/\bplus\s+or\s+minus\b/gi, "\\pm");
  s = s.replace(/\bplus\b/gi, "+");
  s = s.replace(/\bminus\b/gi, "-");
  s = s.replace(/\btimes\s*,?\s*\(/gi, "(");
  s = s.replace(/\btimes\b/gi, "\\cdot");

  // Symbols
  s = s.replace(/\bdegrees?\b/gi, "^{\\circ}");
  s = s.replace(/\bpercent\b/gi, "\\%");
  s = s.replace(/\bdollars?\b/gi, "\\$");

  // Collapse spaced digits: "0 . 0 5 4" -> "0.054"
  for (let i = 0; i < 5; i++) {
    s = s.replace(/(\d)\s+(\d)/g, "$1$2");
  }

  // Combine coefficient and variable: "6 x" -> "6x"
  s = s.replace(/(\d)\s+([a-zA-Z])\b/g, "$1$2");

  // Clean spacing around operators
  s = s.replace(/\s*,\s*/g, ", ");
  s = s.replace(/\s*\.\s*/g, ".");
  s = s.replace(/\s*=\s*,?\s*/g, " = ");
  s = s.replace(/\s*\+\s*,?\s*/g, " + ");
  s = s.replace(/\s*-\s*,?\s*/g, " - ");
  s = s.replace(/\s*\\le\s*,?\s*/g, " \\le ");
  s = s.replace(/\s*\\ge\s*,?\s*/g, " \\ge ");
  s = s.replace(/\s*<\s*,?\s*/g, " < ");
  s = s.replace(/\s*>\s*,?\s*/g, " > ");
  s = s.replace(/\s*\\cdot\s*,?\s*/g, " \\cdot ");

  // Fix binary vs unary minus:
  s = s.replace(/([a-zA-Z0-9\)])\s*-\s*([a-zA-Z0-9\(])/g, "$1 - $2");
  s = s.replace(/([=\(<,])\s*-\s*([0-9a-zA-Z])/g, "$1 -$2");
  if (s.startsWith("- ")) {
    s = "-" + s.slice(2);
  }

  // Remove commas before closing parentheses or after opening
  s = s.replace(/,\s*\)/g, ")");
  s = s.replace(/\(\s*,/g, "(");
  s = s.replace(/\)\s*,\s*\(/g, ") (");
  s = s.replace(/,\s*=/g, " =");
  s = s.replace(/,\s*\\le/g, " \\le");
  s = s.replace(/,\s*\\ge/g, " \\ge");

  s = s.replace(/\s+/g, " ").trim();

  // If coordinate-like "x, y" without parens, wrap in parens
  if (/^-?[0-9a-zA-Z.]+\s*,\s*-?[0-9a-zA-Z.]+$/.test(s)) {
    s = `(${s})`;
  }

  return s;
}

/**
 * Safely processes math content:
 * 1. Cleans unintended newlines after commas and hard line wraps.
 * 2. Converts raster base64 math images with spoken alts into crisp KaTeX formulas (0 artifacts).
 * 3. Converts currency MathML (<mo>$</mo><mn>36</mn>) into clean text ($36).
 * 4. Renders <math>...</math> formulas via KaTeX for crisp typography and horizontal alignment.
 * 5. Renders standard LaTeX delimiters ($...$, $$...$$, \(...\), \[...\]).
 * 6. Replaces spoken words in math contexts ("comma" -> ",", "negative 5" -> "-5").
 */
export function processMathContent(rawText: string): string {
  if (!rawText) return "";

  // 1. Clean whitespace, mid-sentence newlines, and commas with newlines
  let res = cleanTextWhitespace(rawText);

  // 1b. Strip rogue bold/strong tags and inline font-weight to guarantee uniform thin font
  res = res.replace(/<span[^>]*font-weight:\s*(?:700|600|bold)[^>]*>(.*?)<\/span>/gi, "$1");
  res = res.replace(/<b\b[^>]*>(.*?)<\/b>/gi, "$1");
  res = res.replace(/<strong\b[^>]*>(.*?)<\/strong>/gi, "$1");
  res = res.replace(/\s*style=["'][^"']*font-weight:[^"']*["']/gi, "");
  res = res.replace(/\s*mathvariant=["'](?:bold|bold-italic)["']/gi, "");

  // 1c. Replace legacy base64 raster math images with crisp KaTeX vector math
  // Catches:
  // <span class="math_expression"><span class="math-container"><img ... alt="..."></span></span>
  // <span class="math-container"><img ... alt="..."></span>
  res = res.replace(
    /(?:<span\b[^>]*class=["'][^"']*math_expression[^"']*["'][^>]*>\s*)?<span\b[^>]*class=["'][^"']*math-container[^"']*["'][^>]*>\s*<img\b[^>]*alt=["']([^"']+)["'][^>]*>\s*<\/span>(?:\s*<\/span>)?/gi,
    (match, alt) => {
      const latex = spokenMathToLatex(alt);
      if (latex) {
        try {
          return katex.renderToString(latex, { displayMode: false, throwOnError: false });
        } catch {
          return `<span class="inline-math font-medium">${latex}</span>`;
        }
      }
      return match;
    }
  );

  // Catch standalone math-img or role="math" images with alt
  res = res.replace(
    /<img\b[^>]*(?:class=["'][^"']*math-img[^"']*["']|role=["']math["'])[^>]*alt=["']([^"']+)["'][^>]*>/gi,
    (match, alt) => {
      const latex = spokenMathToLatex(alt);
      if (latex) {
        try {
          return katex.renderToString(latex, { displayMode: false, throwOnError: false });
        } catch {
          return `<span class="inline-math font-medium">${latex}</span>`;
        }
      }
      return match;
    }
  );

  // 2. Convert MathML currency: <math ...><mo>$</mo><mn>36</mn></math> -> $36
  res = res.replace(
    /<math[^>]*>\s*<mo>\$<\/mo>\s*(?:<mrow>\s*)?<mn>([0-9.,]+)<\/mn>(?:\s*<\/mrow>)?\s*<\/math>/gi,
    "$$$1"
  );
  res = res.replace(
    /<math[^>]*>\s*<mo>\$<\/mo>\s*(?:<mrow>\s*)?<mi>([a-zA-Z])<\/mi>(?:\s*<\/mrow>)?\s*<\/math>/gi,
    "$$$1"
  );

  // 3. Convert all <math>...</math> tags to KaTeX HTML
  res = res.replace(/<math[^>]*>[\s\S]*?<\/math>/gi, (match) => {
    try {
      const latex = convertMathMlToLatex(match);
      if (latex) {
        const rendered = katex.renderToString(latex, {
          displayMode: false,
          throwOnError: false,
        });
        if (!rendered.includes("katex-error")) {
          return rendered;
        }
        // Fallback: try spoken math if available in alttext
        const altMatch = match.match(/alttext=["']([^"']+)["']/i);
        if (altMatch && altMatch[1]) {
          const spokenLatex = spokenMathToLatex(altMatch[1]);
          if (spokenLatex) {
            const spokenRendered = katex.renderToString(spokenLatex, {
              displayMode: false,
              throwOnError: false,
            });
            if (!spokenRendered.includes("katex-error")) {
              return spokenRendered;
            }
          }
        }
        // Safe fallback without red KaTeX error markup
        const safeText = latex.replace(/\\text\{([^}]+)\}/g, "$1").replace(/[\\{}]/g, "");
        return `<span class="inline-math font-medium">${safeText}</span>`;
      }
    } catch {
      // Keep original MathML as fallback
    }
    return match;
  });

  // 4. Convert LaTeX delimiters if any ($$...$$, \(...\), \[...\], and $formula$)
  const latexRegex = /(\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\\\([\s\S]*?\\\)|\$(?!\s|\d)([^\$<>]+?)(?<!\s)\$)/g;
  res = res.replace(latexRegex, (match) => {
    let formula = match;
    let displayMode = false;
    if (match.startsWith("$$") && match.endsWith("$$")) {
      formula = match.slice(2, -2).trim();
      displayMode = true;
    } else if (match.startsWith("\\[") && match.endsWith("\\]")) {
      formula = match.slice(2, -2).trim();
      displayMode = true;
    } else if (match.startsWith("\\(") && match.endsWith("\\)")) {
      formula = match.slice(2, -2).trim();
      displayMode = false;
    } else if (match.startsWith("$") && match.endsWith("$")) {
      formula = match.slice(1, -1).trim();
      displayMode = false;
    }

    try {
      const rendered = katex.renderToString(formula, {
        displayMode,
        throwOnError: false,
      });
      if (!rendered.includes("katex-error")) {
        return rendered;
      }
      return `<span class="inline-math font-medium">${formula.replace(/[\\{}]/g, "")}</span>`;
    } catch {
      return match;
    }
  });

  // 5. Clean spoken math words in regular text:
  // - "comma" -> ","
  // - "negative 5" -> "-5"
  // - "upper A" -> "A"
  res = res.replace(/\(\s*(-?\d+(?:\.\d+)?)\s+comma\s+negative\s+(\d+(?:\.\d+)?)\s*\)/gi, "($1, -$2)");
  res = res.replace(/\(\s*(-?\d+(?:\.\d+)?)\s+comma\s+(-?\d+(?:\.\d+)?)\s*\)/gi, "($1, $2)");
  res = res.replace(/\b(\d+)\s+comma\s+negative\s+(\d+)\b/gi, "$1, -$2");
  res = res.replace(/\b(\d+)\s+comma\s+(\d+)\b/gi, "$1, $2");
  res = res.replace(/\bzero\s+comma\b/gi, "0,");
  res = res.replace(/\bcomma\s+negative\s+(\d+)\b/gi, ", -$1");
  res = res.replace(/\bcomma\s+(\d+)\b/gi, ", $1");
  res = res.replace(/\bnegative\s+(\d+(?:\.\d+)?)\b/gi, "-$1");
  res = res.replace(/\bnegative\s+([a-zA-Z])\b/gi, "-$1");
  res = res.replace(/\bupper\s+([A-Z])\b/g, "$1");

  return res;
}

/**
 * Safely renders text with inline/block LaTeX formulas, MathML, SVG diagrams, and data tables.
 * Uses KaTeX for crisp math rendering and uniform baseline typography.
 */
export function MathRenderer({ text, className = "" }: MathRendererProps) {
  const processedHtml = useMemo(() => {
    if (!text) return "";
    return processMathContent(text);
  }, [text]);

  return (
    <div
      className={`smart-math-content math-problem-text font-normal text-slate-900 dark:text-slate-100 ${className}`}
      dangerouslySetInnerHTML={{ __html: processedHtml }}
    />
  );
}

/**
 * Renders a fraction or number preview for student-produced responses.
 */
export function MathAnswerPreview({ value }: { value: string }) {
  const trimmed = (value || "").trim();

  const previewContent = useMemo(() => {
    if (!trimmed) {
      return (
        <span className="text-slate-400 dark:text-slate-500 italic text-sm">
          Введите число или дробь (например, 7/2 или 3.5)...
        </span>
      );
    }

    // Fraction: e.g. "7/2" or "-1/3"
    if (trimmed.includes("/")) {
      const parts = trimmed.split("/");
      if (parts.length === 2) {
        const numStr = parts[0].trim();
        const denStr = parts[1].trim();

        if (!denStr) {
          return (
            <span className="text-amber-600 dark:text-amber-400 font-mono text-sm">
              Неполная дробь: {numStr}/...
            </span>
          );
        }

        const num = Number(numStr);
        const den = Number(denStr);

        if (!isNaN(num) && !isNaN(den) && den !== 0) {
          const decimalVal = num / den;
          const isNeg = numStr.startsWith("-");
          const absNum = Math.abs(num);

          let formula = `\\frac{${numStr}}{${denStr}}`;
          if (isNeg && !denStr.startsWith("-")) {
            formula = `-\\frac{${absNum}}{${denStr}}`;
          }

          let katexHtml = "";
          try {
            katexHtml = katex.renderToString(formula, { displayMode: false });
          } catch {
            katexHtml = `${numStr}/${denStr}`;
          }

          return (
            <div className="flex items-center gap-3 py-1 text-slate-800 dark:text-slate-200">
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Дробь:
              </span>
              <span
                className="text-lg font-semibold inline-flex items-center"
                dangerouslySetInnerHTML={{ __html: katexHtml }}
              />
              <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">
                (≈ {decimalVal.toFixed(4).replace(/\.?0+$/, "")})
              </span>
            </div>
          );
        }
      }
    }

    // Decimal or Integer: e.g. "3.5" or "-14"
    const num = Number(trimmed);
    if (!isNaN(num)) {
      let katexHtml = "";
      try {
        katexHtml = katex.renderToString(trimmed, { displayMode: false });
      } catch {
        katexHtml = trimmed;
      }
      return (
        <div className="flex items-center gap-3 py-1 text-slate-800 dark:text-slate-200">
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Число:
          </span>
          <span
            className="text-lg font-mono font-bold text-sky-700 dark:text-sky-300"
            dangerouslySetInnerHTML={{ __html: katexHtml }}
          />
        </div>
      );
    }

    // Invalid format
    return (
      <span className="text-rose-500 dark:text-rose-400 text-xs font-medium">
        Неверный формат числа или дроби
      </span>
    );
  }, [trimmed]);

  return (
    <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/70 dark:border-white/[0.08] min-h-[44px] flex items-center">
      {previewContent}
    </div>
  );
}
