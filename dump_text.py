import json
import os

with open('extracted_materials.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

os.makedirs('text_dumps', exist_ok=True)
for k, v in data.items():
    clean_name = k.replace('.pdf', '').replace(' ', '_').replace('__', '_')
    out_path = os.path.join('text_dumps', clean_name + '.txt')
    with open(out_path, 'w', encoding='utf-8') as out:
        out.write(f"=== {k} (Total pages: {v['total_pages']}) ===\n\n")
        for p in v['pages']:
            if p['text'].strip():
                out.write(f"--- [Page {p['page']}] ---\n")
                out.write(p['text'] + "\n\n")

print("Dumped text files into text_dumps folder successfully.")
