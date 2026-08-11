#!/usr/bin/env python3
# Scans photo folders and writes assets/gallery/manifest.js
# Re-run whenever you add photos:  python3 gen-gallery.py
import os, glob, json

root = os.path.dirname(os.path.abspath(__file__))
base = os.path.join(root, 'assets', 'gallery')

def imgs(d, prefix):
    files = []
    for ext in ('*.jpg', '*.jpeg', '*.png', '*.JPG', '*.JPEG', '*.PNG'):
        files += glob.glob(os.path.join(d, ext))
    files = sorted(set(files))
    return [prefix + os.path.basename(f) for f in files]

out = {}
for c in ['auction', 'blooddrives', 'showcase', 'execs']:
    out[c] = imgs(os.path.join(base, c), 'assets/gallery/%s/' % c)

# per-exec carousels: assets/board/<name>/*.jpg
board = {}
bdir = os.path.join(root, 'assets', 'board')
for name in ['ananya', 'anush', 'sahana', 'gurtaj', 'camille', 'sarah']:
    d = os.path.join(bdir, name)
    if os.path.isdir(d):
        board[name] = imgs(d, 'assets/board/%s/' % name)
out['board'] = board

with open(os.path.join(base, 'manifest.js'), 'w') as f:
    f.write('window.HOPE_GALLERY = ' + json.dumps(out, indent=2) + ';\n')
print({k: (len(v) if isinstance(v, list) else {n: len(x) for n, x in v.items()}) for k, v in out.items()})
