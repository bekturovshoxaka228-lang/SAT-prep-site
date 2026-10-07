import urllib.request
import json
import os
import re
import html
from concurrent.futures import ThreadPoolExecutor

CACHE_DIR = os.path.join(os.path.dirname(__file__), 'cb_cache', 'math')
os.makedirs(CACHE_DIR, exist_ok=True)

URL_QLIST = 'https://qbank-api.collegeboard.org/msreportingquestionbank-prod/questionbank/digital/get-questions'
URL_GET_Q = 'https://qbank-api.collegeboard.org/msreportingquestionbank-prod/questionbank/digital/get-question'

def fetch_question_list(domain_code):
    payload = json.dumps({'asmtEventId': 99, 'test': 2, 'domain': domain_code}).encode('utf-8')
    req = urllib.request.Request(URL_QLIST, data=payload, headers={'Content-Type': 'application/json', 'User-Agent': 'Mozilla/5.0'})
    return json.loads(urllib.request.urlopen(req).read().decode('utf-8'))

def get_question_detail(meta):
    qid = meta.get('questionId')
    cache_file = os.path.join(CACHE_DIR, f"{qid}.json")
    if os.path.exists(cache_file):
        try:
            with open(cache_file, 'r', encoding='utf-8') as f:
                return meta, json.load(f)
        except Exception:
            pass

    ext_id = meta.get('external_id') or meta.get('ibn')
    if not ext_id:
        return meta, None

    payload = json.dumps({'external_id': ext_id}).encode('utf-8')
    req = urllib.request.Request(URL_GET_Q, data=payload, headers={'Content-Type': 'application/json', 'User-Agent': 'Mozilla/5.0'})
    try:
        data = json.loads(urllib.request.urlopen(req).read().decode('utf-8'))
        with open(cache_file, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False)
        return meta, data
    except Exception as e:
        print(f"Error fetching {qid} ({ext_id}): {e}")
        return meta, None

def clean_html(text):
    if not text:
        return ""
    # Strip unnecessary trailing invisibles
    text = re.sub(r'<div data-ae_invis="true"[^>]*>.*?</div>', '', text, flags=re.DOTALL)
    return text.strip()

def normalize_question(meta, data, subtopic_id, subtopic_name, domain_id, domain_name):
    qid = meta.get('questionId')
    difficulty = 'easy' if meta.get('difficulty') == 'E' else ('hard' if meta.get('difficulty') == 'H' else 'medium')
    
    # Check if Digital SAT or Legacy
    if 'answerOptions' in data or 'stem' in data:
        # Digital SAT
        raw_stem = clean_html(data.get('stem', ''))
        raw_stimulus = clean_html(data.get('stimulus', ''))
        
        # Check for figure in stem
        figures = re.findall(r'<figure[^>]*>.*?</figure>', raw_stem, flags=re.DOTALL)
        if figures:
            passage = "\n".join(figures)
            stem = re.sub(r'<figure[^>]*>.*?</figure>', '', raw_stem, flags=re.DOTALL).strip()
            # Clean empty wrapper paragraphs
            stem = re.sub(r'<p style="text-align:\s*center;\s*">\s*</p>', '', stem).strip()
            stem = re.sub(r'<p>\s*</p>', '', stem).strip()
            if not stem:
                stem = raw_stem
                passage = None
        else:
            passage = raw_stimulus if raw_stimulus else None
            stem = raw_stem

        # Options
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

        # Correct Answer
        raw_ans = data.get('correct_answer')
        if isinstance(raw_ans, list):
            correct_answer = ", ".join(raw_ans)
        else:
            correct_answer = str(raw_ans or '')

        explanation = clean_html(data.get('rationale', ''))

    else:
        # Legacy item
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
            # Extract from rationale if possible
            rationale = ans_obj.get('rationale', '')
            match = re.search(r'correct answer is\s*(?:<[^>]+>)*\s*([0-9./-]+)', rationale, re.IGNORECASE)
            if match:
                correct_answer = match.group(1).strip()
            else:
                correct_answer = ''

        explanation = clean_html(ans_obj.get('rationale', ''))

    q_obj = {
        'id': f"sat-math-{meta.get('skill_cd', 'x').lower().replace('.', '')}-{qid}",
        'originalId': qid,
        'section': 'math',
        'domainId': domain_id,
        'domainName': domain_name,
        'subtopicId': subtopic_id,
        'subtopic': subtopic_name,
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

if __name__ == '__main__':
    print("Testing Geometry & Trigonometry download (Domain S)...")
    s_list = fetch_question_list('S')
    print(f"Total S questions: {len(s_list)}")

    with ThreadPoolExecutor(max_workers=25) as ex:
        results = list(ex.map(get_question_detail, s_list))

    print(f"Fetched {len(results)} items")
    valid = [(m, d) for m, d in results if d]
    print(f"Valid details: {len(valid)}")

    sample_norm = normalize_question(valid[0][0], valid[0][1], 'circles', 'Circles', 'geometry-trig', '4. Geometry and Trigonometry')
    print("\nNormalized Sample:")
    print(json.dumps(sample_norm, indent=2, ensure_ascii=False)[:800])
