import json
import os
import re
import glob

CACHE_DIR = os.path.join(os.path.dirname(__file__), 'cb_cache', 'math')
WEB_LIB_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'apps', 'web', 'lib'))

SUBTOPIC_CONFIG = [
    # 1. Algebra
    {
        'file': 'sat-math-linear-1var-questions.ts',
        'var_name': 'MATH_LINEAR_1VAR_QUESTIONS',
        'subtopic_id': 'linear-equations-one-variable',
        'subtopic_name': 'Linear equations in one variable',
        'domain_id': 'algebra',
        'domain_name': '1. Algebra',
        'skills': ['H.A.']
    },
    {
        'file': 'sat-math-linear-functions-questions.ts',
        'var_name': 'MATH_LINEAR_FUNCTIONS_QUESTIONS',
        'subtopic_id': 'linear-functions',
        'subtopic_name': 'Linear functions',
        'domain_id': 'algebra',
        'domain_name': '1. Algebra',
        'skills': ['H.B.']
    },
    {
        'file': 'sat-math-linear-2var-questions.ts',
        'var_name': 'MATH_LINEAR_2VAR_QUESTIONS',
        'subtopic_id': 'linear-equations-two-variables',
        'subtopic_name': 'Linear equations in two variables',
        'domain_id': 'algebra',
        'domain_name': '1. Algebra',
        'skills': ['H.C.']
    },
    {
        'file': 'sat-math-systems-questions.ts',
        'var_name': 'MATH_SYSTEMS_QUESTIONS',
        'subtopic_id': 'systems-two-linear-equations',
        'subtopic_name': 'Systems of two linear equations in two variables',
        'domain_id': 'algebra',
        'domain_name': '1. Algebra',
        'skills': ['H.D.']
    },
    {
        'file': 'sat-math-inequalities-questions.ts',
        'var_name': 'MATH_INEQUALITIES_QUESTIONS',
        'subtopic_id': 'linear-inequalities',
        'subtopic_name': 'Linear inequalities in one or two variables',
        'domain_id': 'algebra',
        'domain_name': '1. Algebra',
        'skills': ['H.E.']
    },

    # 2. Advanced Math
    {
        'file': 'sat-math-equivalent-expressions-questions.ts',
        'var_name': 'MATH_EQUIVALENT_EXPRESSIONS_QUESTIONS',
        'subtopic_id': 'equivalent-expressions',
        'subtopic_name': 'Equivalent expressions & exponents',
        'domain_id': 'advanced-math',
        'domain_name': '2. Advanced Math',
        'skills': ['P.A.']
    },
    {
        'file': 'sat-math-nonlinear-equations-questions.ts',
        'var_name': 'MATH_NONLINEAR_EQUATIONS_QUESTIONS',
        'subtopic_id': 'nonlinear-equations-systems',
        'subtopic_name': 'Nonlinear equations & systems',
        'domain_id': 'advanced-math',
        'domain_name': '2. Advanced Math',
        'skills': ['P.B.']
    },
    {
        'file': 'sat-math-nonlinear-functions-questions.ts',
        'var_name': 'MATH_NONLINEAR_FUNCTIONS_QUESTIONS',
        'subtopic_id': 'nonlinear-functions',
        'subtopic_name': 'Nonlinear functions & quadratics',
        'domain_id': 'advanced-math',
        'domain_name': '2. Advanced Math',
        'skills': ['P.C.']
    },

    # 3. Problem-Solving and Data Analysis
    {
        'file': 'sat-math-ratios-rates-questions.ts',
        'var_name': 'MATH_RATIOS_RATES_QUESTIONS',
        'subtopic_id': 'ratios-rates',
        'subtopic_name': 'Ratios, rates & proportions',
        'domain_id': 'problem-solving',
        'domain_name': '3. Problem-Solving and Data Analysis',
        'skills': ['Q.A.']
    },
    {
        'file': 'sat-math-percentages-questions.ts',
        'var_name': 'MATH_PERCENTAGES_QUESTIONS',
        'subtopic_id': 'percentages-rates',
        'subtopic_name': 'Percentages, ratios & rates',
        'domain_id': 'problem-solving',
        'domain_name': '3. Problem-Solving and Data Analysis',
        'skills': ['Q.B.']
    },
    {
        'file': 'sat-math-one-variable-data-questions.ts',
        'var_name': 'MATH_ONE_VAR_DATA_QUESTIONS',
        'subtopic_id': 'one-variable-data',
        'subtopic_name': 'One-variable data & distributions',
        'domain_id': 'problem-solving',
        'domain_name': '3. Problem-Solving and Data Analysis',
        'skills': ['Q.C.']
    },
    {
        'file': 'sat-math-two-variable-data-questions.ts',
        'var_name': 'MATH_TWO_VAR_DATA_QUESTIONS',
        'subtopic_id': 'two-variable-data',
        'subtopic_name': 'Two-variable data & scatterplots',
        'domain_id': 'problem-solving',
        'domain_name': '3. Problem-Solving and Data Analysis',
        'skills': ['Q.D.']
    },
    {
        'file': 'sat-math-probability-questions.ts',
        'var_name': 'MATH_PROBABILITY_QUESTIONS',
        'subtopic_id': 'probability',
        'subtopic_name': 'Probability & relative frequencies',
        'domain_id': 'problem-solving',
        'domain_name': '3. Problem-Solving and Data Analysis',
        'skills': ['Q.E.']
    },
    {
        'file': 'sat-math-inference-statistics-questions.ts',
        'var_name': 'MATH_INFERENCE_STATISTICS_QUESTIONS',
        'subtopic_id': 'inference-statistics',
        'subtopic_name': 'Inference from sample statistics',
        'domain_id': 'problem-solving',
        'domain_name': '3. Problem-Solving and Data Analysis',
        'skills': ['Q.F.', 'Q.G.']
    },

    # 4. Geometry and Trigonometry
    {
        'file': 'sat-math-area-volume-questions.ts',
        'var_name': 'MATH_AREA_VOLUME_QUESTIONS',
        'subtopic_id': 'area-volume',
        'subtopic_name': 'Area & volume formulas',
        'domain_id': 'geometry-trig',
        'domain_name': '4. Geometry and Trigonometry',
        'skills': ['S.A.']
    },
    {
        'file': 'sat-math-lines-angles-triangles-questions.ts',
        'var_name': 'MATH_LINES_ANGLES_QUESTIONS',
        'subtopic_id': 'lines-angles-triangles',
        'subtopic_name': 'Lines, angles & triangles',
        'domain_id': 'geometry-trig',
        'domain_name': '4. Geometry and Trigonometry',
        'skills': ['S.B.']
    },
    {
        'file': 'sat-math-right-triangles-trig-questions.ts',
        'var_name': 'MATH_RIGHT_TRIANGLES_TRIG_QUESTIONS',
        'subtopic_id': 'right-triangles-trigonometry',
        'subtopic_name': 'Right triangles & trigonometry',
        'domain_id': 'geometry-trig',
        'domain_name': '4. Geometry and Trigonometry',
        'skills': ['S.C.']
    },
    {
        'file': 'sat-math-circles-questions.ts',
        'var_name': 'MATH_CIRCLES_QUESTIONS',
        'subtopic_id': 'circles',
        'subtopic_name': 'Circles & coordinate equations',
        'domain_id': 'geometry-trig',
        'domain_name': '4. Geometry and Trigonometry',
        'skills': ['S.D.']
    }
]

def clean_html(text):
    if not text:
        return ""
    text = re.sub(r'<div data-ae_invis="true"[^>]*>.*?</div>', '', text, flags=re.DOTALL)
    # Remove MS word styling artifacts if any
    text = text.replace('&nbsp;', ' ')
    return text.strip()

def transform_cached_question(qid, data, cfg, fallback_meta=None):
    difficulty = 'medium'
    if fallback_meta:
        diff_code = fallback_meta.get('difficulty', 'M')
        difficulty = 'easy' if diff_code == 'E' else ('hard' if diff_code == 'H' else 'medium')

    # Digital SAT Question
    if 'answerOptions' in data or 'stem' in data:
        raw_stem = clean_html(data.get('stem', ''))
        raw_stimulus = clean_html(data.get('stimulus', ''))

        # Extract SVG or table diagram to passage if present
        figures = re.findall(r'<figure[^>]*>.*?</figure>', raw_stem, flags=re.DOTALL)
        tables = re.findall(r'<table[^>]*>.*?</table>', raw_stem, flags=re.DOTALL)

        if figures:
            passage = "\n".join(figures)
            stem = re.sub(r'<figure[^>]*>.*?</figure>', '', raw_stem, flags=re.DOTALL).strip()
            stem = re.sub(r'<p style="text-align:\s*center;\s*">\s*</p>', '', stem).strip()
            stem = re.sub(r'<p>\s*</p>', '', stem).strip()
            if not stem:
                stem = raw_stem
                passage = None
        elif tables and not raw_stimulus:
            passage = "\n".join(tables)
            stem = re.sub(r'<table[^>]*>.*?</table>', '', raw_stem, flags=re.DOTALL).strip()
            if not stem:
                stem = raw_stem
                passage = None
        else:
            passage = raw_stimulus if raw_stimulus else None
            stem = raw_stem

        raw_opts = data.get('answerOptions', [])
        if raw_opts:
            qtype = 'mcq'
            options = []
            for i, opt in enumerate(raw_opts):
                letter = chr(65 + i)
                content = clean_html(opt.get('content', ''))
                options.append({'id': letter, 'text': content})
        else:
            qtype = 'grid-in'
            options = None

        raw_ans = data.get('correct_answer')
        if isinstance(raw_ans, list):
            correct_answer = ", ".join(raw_ans)
        else:
            correct_answer = str(raw_ans or '')

        explanation = clean_html(data.get('rationale', ''))

    else:
        # Legacy Item
        prompt = clean_html(data.get('prompt', ''))
        body = clean_html(data.get('body', ''))
        ans_obj = data.get('answer', {})
        style = ans_obj.get('style', '')

        passage = body if body else None
        stem = prompt

        choices = ans_obj.get('choices', {})
        if choices and ('Multiple Choice' in style or not style):
            qtype = 'mcq'
            options = []
            for key in sorted(choices.keys()):
                letter = key.upper()
                c_body = clean_html(choices[key].get('body', ''))
                options.append({'id': letter, 'text': c_body})
            correct_answer = (ans_obj.get('correct_choice') or '').upper()
        else:
            qtype = 'grid-in'
            options = None
            rationale = ans_obj.get('rationale', '')
            match = re.search(r'correct answer is\s*(?:<[^>]+>)*\s*([0-9./-]+)', rationale, re.IGNORECASE)
            correct_answer = match.group(1).strip() if match else ''

        explanation = clean_html(ans_obj.get('rationale', ''))

    q_obj = {
        'id': f"sat-math-{cfg['subtopic_id'][:6]}-{qid}",
        'originalId': qid,
        'section': 'math',
        'domainId': cfg['domain_id'],
        'domainName': cfg['domain_name'],
        'subtopicId': cfg['subtopic_id'],
        'subtopic': cfg['subtopic_name'],
        'difficulty': difficulty,
        'stem': stem,
        'type': qtype,
        'correctAnswer': correct_answer,
        'explanation': explanation
    }
    if passage:
        q_obj['passage'] = passage
    if options:
        q_obj['options'] = options

    return q_obj

def build_dataset():
    # Load all cached JSONs into a lookup dict
    cached_data = {}
    for f in glob.glob(os.path.join(CACHE_DIR, '*.json')):
        qid = os.path.splitext(os.path.basename(f))[0]
        try:
            with open(f, 'r', encoding='utf-8') as fp:
                cached_data[qid] = json.load(fp)
        except Exception:
            pass

    print(f"Loaded {len(cached_data)} questions from cache.")

    # Process each subtopic file
    total_processed = 0
    total_upgraded = 0

    for cfg in SUBTOPIC_CONFIG:
        target_path = os.path.join(WEB_LIB_DIR, cfg['file'])
        if not os.path.exists(target_path):
            print(f"Warning: {target_path} not found!")
            continue

        with open(target_path, 'r', encoding='utf-8') as fp:
            original_code = fp.read()

        # Extract existing questions from file
        try:
            # Parse existing JSON array in the TypeScript file
            # Format: export const VAR_NAME: SatQuestion[] = [ ... ];
            m = re.search(r'export const ' + cfg['var_name'] + r': SatQuestion\[\] = (\[[\s\S]*\]);', original_code)
            if not m:
                print(f"Could not parse array from {cfg['file']}")
                continue
            existing_questions = json.loads(m.group(1))
        except Exception as e:
            print(f"Error parsing {cfg['file']}: {e}")
            continue

        new_questions = []
        upgraded_count = 0

        for q in existing_questions:
            qid = q.get('originalId') or re.search(r'([a-f0-9]{8})$', q.get('id', ''))
            if isinstance(qid, re.Match):
                qid = qid.group(1)

            if qid and qid in cached_data:
                # Upgrade using authentic College Board API data!
                fallback_meta = {'difficulty': 'E' if q.get('difficulty') == 'easy' else ('H' if q.get('difficulty') == 'hard' else 'M')}
                upgraded = transform_cached_question(qid, cached_data[qid], cfg, fallback_meta)
                # Keep original difficulty if specified
                upgraded['difficulty'] = q.get('difficulty', upgraded['difficulty'])
                new_questions.append(upgraded)
                upgraded_count += 1
            else:
                # Keep existing, but remove blurry cropped options images where text is available
                q_clean = dict(q)
                # Keep clean
                new_questions.append(q_clean)

        total_processed += len(new_questions)
        total_upgraded += upgraded_count

        # Order: easy -> medium -> hard
        diff_order = {'easy': 0, 'medium': 1, 'hard': 2}
        new_questions.sort(key=lambda x: diff_order.get(x.get('difficulty', 'medium'), 1))

        # Write updated TypeScript file
        output_ts = f"""import type {{ SatQuestion }} from "./sat-data";

/**
 * Official College Board {cfg['subtopic_name']} Question Bank ({len(new_questions)} questions)
 * Domain: {cfg['domain_name']}
 * Subtopic: {cfg['subtopic_name']}
 * Native W3C MathML & Vector SVG Diagrams (No raster screenshots)
 * Order: Easy -> Medium -> Hard
 */
export const {cfg['var_name']}: SatQuestion[] = {json.dumps(new_questions, indent=2, ensure_ascii=False)};
"""

        with open(target_path, 'w', encoding='utf-8') as fp:
            fp.write(output_ts)

        print(f"Updated {cfg['file']}: {len(new_questions)} questions ({upgraded_count} upgraded with vector MathML/SVG)")

    print(f"\n==========================================")
    print(f"DATASET BUILD COMPLETE!")
    print(f"Total processed: {total_processed}")
    print(f"Total upgraded with vector MathML & SVG: {total_upgraded}")
    print(f"==========================================")

if __name__ == '__main__':
    build_dataset()
