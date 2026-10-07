import urllib.request
import json
import os
import re
import time
import random
from concurrent.futures import ThreadPoolExecutor

CACHE_DIR = os.path.join(os.path.dirname(__file__), 'cb_cache', 'math')
os.makedirs(CACHE_DIR, exist_ok=True)

URL_QLIST = 'https://qbank-api.collegeboard.org/msreportingquestionbank-prod/questionbank/digital/get-questions'
URL_GET_Q = 'https://qbank-api.collegeboard.org/msreportingquestionbank-prod/questionbank/digital/get-question'

# Proxy pool management
WORKING_PROXIES = ['47.254.122.220:5443']

def refresh_proxies():
    global WORKING_PROXIES
    try:
        url = 'https://api.proxyscrape.com/v2/?request=displayproxies&protocol=http&timeout=4000&country=all&ssl=all&anonymity=all'
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=8) as resp:
            lines = resp.read().decode('utf-8').strip().split('\r\n')
            new_proxies = [l.strip() for l in lines if ':' in l]
            # Shuffle and add to pool
            random.shuffle(new_proxies)
            WORKING_PROXIES = ['47.254.122.220:5443'] + new_proxies[:40]
            print(f"Loaded {len(WORKING_PROXIES)} proxy candidates.")
    except Exception as e:
        print(f"Failed to refresh proxies: {e}")

refresh_proxies()

def get_opener(proxy=None):
    if proxy:
        handler = urllib.request.ProxyHandler({'http': f'http://{proxy}', 'https': f'http://{proxy}'})
    else:
        handler = urllib.request.ProxyHandler({})
    return urllib.request.build_opener(handler)

def fetch_question_list(domain_code):
    payload = json.dumps({'asmtEventId': 99, 'test': 2, 'domain': domain_code}).encode('utf-8')
    headers = {'Content-Type': 'application/json', 'User-Agent': 'Mozilla/5.0'}
    for p in WORKING_PROXIES[:10]:
        try:
            opener = get_opener(p)
            req = urllib.request.Request(URL_QLIST, data=payload, headers=headers)
            with opener.open(req, timeout=8) as resp:
                data = json.loads(resp.read().decode('utf-8'))
                print(f"Fetched question list for domain {domain_code} via {p}: {len(data)} items")
                return data
        except Exception as e:
            continue
    raise RuntimeError(f"Could not fetch question list for domain {domain_code}")

def fetch_single_detail(meta):
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

    # Try working proxies
    for attempt in range(8):
        proxy = random.choice(WORKING_PROXIES[:15]) if WORKING_PROXIES else None
        try:
            opener = get_opener(proxy)
            req = urllib.request.Request(URL_GET_Q, data=payload, headers=headers)
            with opener.open(req, timeout=7) as resp:
                data = json.loads(resp.read().decode('utf-8'))
                with open(cache_file, 'w', encoding='utf-8') as f:
                    json.dump(data, f, ensure_ascii=False)
                return meta, data
        except urllib.error.HTTPError as e:
            if e.code in [403, 429]:
                # Try next proxy
                continue
        except Exception:
            continue

    return meta, None

if __name__ == '__main__':
    print("Testing fetching domain S...")
    s_list = fetch_question_list('S')
    print(f"Total S items: {len(s_list)}")
    
    t0 = time.time()
    with ThreadPoolExecutor(max_workers=8) as ex:
        results = list(ex.map(fetch_single_detail, s_list))
    
    valid = [(m, d) for m, d in results if d]
    dt = time.time() - t0
    print(f"Completed Domain S: {len(valid)} / {len(s_list)} fetched in {dt:.2f}s!")
