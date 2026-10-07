import urllib.request
import json
import os
import time
import random
from concurrent.futures import ThreadPoolExecutor

CACHE_DIR = os.path.join(os.path.dirname(__file__), 'cb_cache', 'math')
os.makedirs(CACHE_DIR, exist_ok=True)

PROXIES = [
    '103.237.102.191:11111',
    '38.18.230.153:8888',
    '194.88.150.90:8443',
    '184.75.221.82:3118',
    '95.3.69.222:8080',
    '16.162.102.250:555',
    '178.92.72.162:8080',
    '47.254.122.220:5443',
    '178.92.72.73:8080',
    '118.99.68.214:8080',
    '111.119.162.248:10916',
    '111.119.162.248:10936',
    '23.149.60.70:5555',
    '111.119.162.248:10945',
    '111.119.162.248:10915'
]

URL_QLIST = 'https://qbank-api.collegeboard.org/msreportingquestionbank-prod/questionbank/digital/get-questions'
URL_GET_Q = 'https://qbank-api.collegeboard.org/msreportingquestionbank-prod/questionbank/digital/get-question'

openers = [
    urllib.request.build_opener(urllib.request.ProxyHandler({'http': f'http://{p}', 'https': f'http://{p}'}))
    for p in PROXIES
]

def fetch_domain_list(d_code):
    payload = json.dumps({'asmtEventId': 99, 'test': 2, 'domain': d_code}).encode('utf-8')
    headers = {'Content-Type': 'application/json', 'User-Agent': 'Mozilla/5.0'}
    for opener in openers:
        try:
            req = urllib.request.Request(URL_QLIST, data=payload, headers=headers)
            with opener.open(req, timeout=6) as resp:
                data = json.loads(resp.read().decode('utf-8'))
                print(f"Domain {d_code}: {len(data)} questions found.")
                return data
        except Exception:
            continue
    print(f"Failed to fetch list for domain {d_code}")
    return []

def fetch_question(meta):
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
    headers = {'Content-Type': 'application/json', 'User-Agent': 'Mozilla/5.0'}

    for _ in range(len(openers)):
        opener = random.choice(openers)
        try:
            req = urllib.request.Request(URL_GET_Q, data=payload, headers=headers)
            with opener.open(req, timeout=5) as resp:
                data = json.loads(resp.read().decode('utf-8'))
                with open(cache_file, 'w', encoding='utf-8') as f:
                    json.dump(data, f, ensure_ascii=False)
                return meta, data
        except Exception:
            continue

    return meta, None

if __name__ == '__main__':
    all_metas = []
    for d in ['H', 'P', 'Q', 'S']:
        all_metas.extend(fetch_domain_list(d))

    print(f"Total questions to process: {len(all_metas)}")
    already_cached = sum(1 for m in all_metas if os.path.exists(os.path.join(CACHE_DIR, f"{m.get('questionId')}.json")))
    print(f"Already cached: {already_cached} / {len(all_metas)}")
    needed = [m for m in all_metas if not os.path.exists(os.path.join(CACHE_DIR, f"{m.get('questionId')}.json"))]
    print(f"Remaining to download: {len(needed)}")

    t0 = time.time()
    with ThreadPoolExecutor(max_workers=20) as ex:
        results = list(ex.map(fetch_question, needed))

    success = sum(1 for m, d in results if d)
    print(f"Downloaded {success} / {len(needed)} in {time.time()-t0:.1f}s!")
    total_in_cache = len(os.listdir(CACHE_DIR))
    print(f"Total now in cache: {total_in_cache}")
