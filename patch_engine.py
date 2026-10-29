# Patch hand-drawn-motion engine.js: never crash on a path the browser reports as empty.
# Usage: python patch_engine.py path/to/engine.js [more engine.js files...]
import sys
OLD = "  const p = s.el.getPointAtLength(s.len * q); return toStage(s.M, p.x, p.y);\n}"
NEW = """  try { const p = s.el.getPointAtLength(s.len * q); return toStage(s.M, p.x, p.y); }
  catch (e) {   // hidden frame (e.g. a preview measured before it is shown): use the path's first / last coordinate
    const n = (s.el.getAttribute('d') || '').match(/-?\\d*\\.?\\d+(?:e-?\\d+)?/gi) || ['0', '0'], i = q < .5 ? 0 : Math.max(0, (n.length & ~1) - 2);
    return toStage(s.M, +n[i] || 0, +n[i + 1] || 0);
  }
}"""
for f in sys.argv[1:]:
    s = open(f, encoding="utf-8").read()
    if NEW in s: print(f, "already patched"); continue
    if s.count(OLD) != 1: print(f, "pattern not found, skipped"); continue
    open(f, "w", encoding="utf-8").write(s.replace(OLD, NEW)); print(f, "patched")
