/* hand-drawn-motion engine — whiteboard animation (hand, page flip, timing, look).
 * Use: load this file with a script tag, then call HandDrawn.run({ title, video, look, narr, scenes }). See SKILL.md.
 * Hosted copy: https://cdn.jsdelivr.net/gh/MyProPro/hand-drawn-motion-assets@main/engine.js
 */
(function () {
const CSS = "\n  /* Layout: one 16:9 paper stage, simple transport bar under it. Single dark-studio look on purpose. */\n  :root {\n    --bg: #1f1d1a; --panel: #2b2824; --line: #4a443c; --fg: #efe9dd; --muted: #a39a8a;\n    --paper: #F7F5EF; --ink: #1E1E1E; --accent: #F2C94C;\n    --ui: ui-sans-serif, system-ui, -apple-system, \"Segoe UI\", Roboto, sans-serif;\n    color-scheme: dark;\n  }\n  body {\n    background: var(--bg); color: var(--fg); font-family: var(--ui);\n    padding-left: max(16px, env(safe-area-inset-left, 0px));\n    padding-right: max(16px, env(safe-area-inset-right, 0px));\n    padding-block: 20px;\n  }\n  .wrap { max-width: 1100px; margin: 0 auto; display: flex; flex-direction: column; gap: 12px; }\n  .frame { width: 100%; max-width: 100%; aspect-ratio: 16 / 9; background: var(--paper); border-radius: 6px; overflow: hidden; box-shadow: 0 12px 32px rgb(0 0 0 / .35); }\n  svg#stage { display: block; width: 100%; height: 100%; }\n  .bar { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }\n  button { font: 600 14px var(--ui); color: var(--fg); background: var(--panel); border: 1px solid var(--line); border-radius: 6px; padding: 8px 14px; cursor: pointer; }\n  button:hover { border-color: var(--muted); }\n  button:focus-visible, input:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }\n  input[type=range] { flex: 1; min-width: 140px; accent-color: var(--accent); }\n  .looks { gap: 14px; font-size: 13px; color: var(--muted); }\n  .looks label { display: inline-flex; align-items: center; gap: 6px; }\n  .looks input[type=color] { width: 34px; height: 26px; padding: 0; border: 1px solid var(--line); border-radius: 4px; background: var(--panel); }\n  .time { font-variant-numeric: tabular-nums; color: var(--muted); font-size: 13px; min-width: 96px; text-align: right; }\n  .ink { fill: none; stroke: var(--ink); stroke-linecap: round; stroke-linejoin: round; }\n  .acc { fill: none; stroke: var(--accent); stroke-linecap: round; stroke-linejoin: round; opacity: .85; }\n  .txt { fill: var(--ink); }\n";
const MARKUP = "<div class=\"wrap\">\n  <div class=\"frame\">\n    <svg id=\"stage\" viewBox=\"0 0 1920 1080\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Animasi whiteboard\">\n      <defs id=\"defs\">\n        <filter id=\"wobble\">\n          <feTurbulence id=\"turb\" type=\"fractalNoise\" baseFrequency=\"0.02\" numOctaves=\"2\" seed=\"1\"/>\n          <feDisplacementMap in=\"SourceGraphic\" scale=\"2.5\"/>\n        </filter>\n        <filter id=\"grain\">\n          <feTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"2\" stitchTiles=\"stitch\"/>\n          <feColorMatrix values=\"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.06 0\"/>\n        </filter>\n        <filter id=\"soft\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\"><feGaussianBlur stdDeviation=\"14\"/></filter>\n        <filter id=\"shirtTint\" color-interpolation-filters=\"sRGB\"><feColorMatrix id=\"shirtMatrix\" type=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0\"/></filter>\n        <filter id=\"penTint\" color-interpolation-filters=\"sRGB\"><feColorMatrix id=\"penMatrix\" type=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0\"/></filter>\n      </defs>\n      <rect width=\"1920\" height=\"1080\" fill=\"#F7F5EF\"/>\n      <g id=\"pages\"></g>\n      <rect width=\"1920\" height=\"1080\" filter=\"url(#grain)\" pointer-events=\"none\"/>\n      <g id=\"flipfx\" style=\"display:none\">\n        <polygon id=\"flapShadow\" fill=\"#000\" opacity=\"0.22\" filter=\"url(#soft)\" transform=\"translate(16 10)\"/>\n        <polygon id=\"flap\" fill=\"#E9E4D7\" stroke=\"#D3CCBC\" stroke-width=\"2\"/>\n      </g>\n      <g id=\"arm\" fill=\"none\" stroke=\"#17171a\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n        <path id=\"torso\" stroke-width=\"900\"/>\n        <path id=\"armUpper\" stroke-width=\"400\"/>\n      </g>\n      <g id=\"hand\" transform=\"translate(2010 1160)\">\n        <g transform=\"translate(-81 -206)\">\n          <image id=\"armBaseImg\" href=\"data:image/webp;base64,ARM_BASE\" width=\"1254\" height=\"1254\"/>\n          <image id=\"sleeveLayer\" href=\"data:image/webp;base64,ARM_SLEEVE\" width=\"1254\" height=\"1254\" filter=\"url(#shirtTint)\" style=\"display:none\"/>\n          <image id=\"penLayer\" href=\"data:image/webp;base64,ARM_PEN\" width=\"1254\" height=\"1254\" filter=\"url(#penTint)\" style=\"display:none\"/>\n        </g>\n      </g>\n    </svg>\n  </div>\n  <div class=\"bar\">\n    <button id=\"play\" type=\"button\">Jeda</button>\n    <button id=\"restart\" type=\"button\">Ulangi</button>\n    <input id=\"seek\" type=\"range\" min=\"0\" max=\"1\" step=\"0.01\" value=\"0\" aria-label=\"Posisi animasi\">\n    <span class=\"time\" id=\"time\">0:00 / 0:00</span>\n  </div>\n  <div class=\"bar looks\">\n    <label for=\"shirtC\">Kaus <input id=\"shirtC\" type=\"color\" value=\"#17171a\"></label>\n    <label for=\"penC\">Pena <input id=\"penC\" type=\"color\" value=\"#1a1a1a\"></label>\n    <label for=\"inkC\">Tinta <input id=\"inkC\" type=\"color\" value=\"#1e1e1e\"></label>\n    <button id=\"lookReset\" type=\"button\">Warna asli</button>\n  </div>\n</div>";
window.HandDrawn = { run(cfg) {

return (async () => {
document.documentElement.lang = document.documentElement.lang || 'id';
if (!document.querySelector('link[data-hd-fonts]')) { const l = document.createElement('link'); l.rel = 'stylesheet'; l.dataset.hdFonts = '1';
  l.href = 'https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Permanent+Marker&display=swap'; document.head.appendChild(l); }
{ const st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st); }
document.body.insertAdjacentHTML('afterbegin', MARKUP.replace('Animasi whiteboard', (cfg.title || 'Animasi whiteboard').replace(/"/g, '')));
const NS = 'http://www.w3.org/2000/svg';
// ---------- video settings (filled from the intake: ratio and target length) ----------
const VIDEO = Object.assign({ ratio: '16:9', duration: null }, cfg.video);   // ratio '16:9' | '9:16' | '1:1'; duration in seconds (null = natural pace)
const SIZES = { '16:9': [1920, 1080], '9:16': [1080, 1920], '1:1': [1080, 1080] };
const [W, H] = SIZES[VIDEO.ratio] || SIZES['16:9'];
const FPS = 30, PEN = 0.0009, AS = VIDEO.ratio === '16:9' ? 1 : 0.85;   // AS = arm scale
const OFF = { x: W + 90, y: H + 80 };
// Narration length per scene in seconds; filled in by scripts/build.py --audio. Scenes last at least this long.
const NARR = cfg.narr || [];
const stage = document.getElementById('stage'), pagesLayer = document.getElementById('pages');
stage.setAttribute('viewBox', `0 0 ${W} ${H}`);
stage.querySelectorAll(':scope > rect').forEach(r => { r.setAttribute('width', W); r.setAttribute('height', H); });
{ const fr = document.querySelector('.frame'); fr.style.aspectRatio = `${W} / ${H}`;
  if (H > W) { fr.style.width = `min(100%, calc(78vh * ${W / H}))`; fr.style.margin = '0 auto'; } }
// Arm photo: embedded by scripts/build.py, or loaded from ARM_URL when the file was not built
// (Gemini app / Canvas preview). Point ARM_URL at a public folder with the three .webp files.
const ARM_URL = 'https://raw.githubusercontent.com/MyProPro/hand-drawn-motion-assets/main';
for (const [id, file] of [['armBaseImg', 'arm_base.webp'], ['sleeveLayer', 'arm_sleeve.webp'], ['penLayer', 'arm_pen.webp']]) {
  const img = document.getElementById(id);
  if (img.getAttribute('href').length < 100 && ARM_URL && !ARM_URL.includes('USERNAME')) img.setAttribute('href', `${ARM_URL}/${file}`);
}
const flipfx = document.getElementById('flipfx'), flap = document.getElementById('flap'), flapShadow = document.getElementById('flapShadow');
const armUpper = document.getElementById('armUpper'), torso = document.getElementById('torso');
const hand = document.getElementById('hand'), turb = document.getElementById('turb'), defs = document.getElementById('defs');
const ease = x => x < .5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
const c01 = x => Math.min(1, Math.max(0, x));
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));

// ---------- path helpers (seeded, deterministic) ----------
function rng(s) { return () => { s |= 0; s = s + 0x6D2B79F5 | 0; let t = Math.imul(s ^ s >>> 15, 1 | s); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
const f = n => n.toFixed(1);
function smooth(pts) {
  let d = `M${f(pts[0][0])},${f(pts[0][1])}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
    d += ` C${f(p1[0] + (p2[0] - p0[0]) / 6)},${f(p1[1] + (p2[1] - p0[1]) / 6)} ${f(p2[0] - (p3[0] - p1[0]) / 6)},${f(p2[1] - (p3[1] - p1[1]) / 6)} ${f(p2[0])},${f(p2[1])}`;
  }
  return d;
}
function circ(cx, cy, r, seed = 1, ry = r, turn = 1.07) {
  const R = rng(seed), ph = R() * 6, ps = R() * 6, a0 = -2.3 + R() * .4, n = clamp(Math.round(r / 6), 10, 40), pts = [];
  for (let i = 0; i <= n; i++) {
    const a = a0 + i / n * Math.PI * 2 * turn, k = 1 + .035 * Math.sin(2 * a + ph) + .02 * Math.sin(5 * a + ps) + (i / n) * .03;
    pts.push([cx + Math.cos(a) * r * k, cy + Math.sin(a) * ry * k]);
  }
  return smooth(pts);
}
function cloud(cx, cy, w, h, b = 12, seed = 3) {
  const R = rng(seed), pts = [];
  for (let i = 0; i <= b; i++) { const a = -Math.PI / 2 - .25 + i / b * Math.PI * 2; pts.push([cx + Math.cos(a) * w / 2 * (.93 + R() * .07), cy + Math.sin(a) * h / 2 * (.9 + R() * .1)]); }
  let d = `M${f(pts[0][0])},${f(pts[0][1])}`;
  for (let i = 0; i < b; i++) { const p = pts[i], q = pts[i + 1], mx = (p[0] + q[0]) / 2, my = (p[1] + q[1]) / 2, k = 1.28 + R() * .12; d += ` Q${f(cx + (mx - cx) * k)},${f(cy + (my - cy) * k)} ${f(q[0])},${f(q[1])}`; }
  return d;
}
function scrib(cx, cy, w, h, n = 9, seed = 5) {
  const R = rng(seed); let d = '';
  for (let i = 0; i <= n; i++) { const x = cx - w / 2 + w * i / n + (R() - .5) * 8, y = cy + (i % 2 ? h / 2 : -h / 2) * (.8 + R() * .2); d += (i ? ' L' : 'M') + f(x) + ',' + f(y); }
  return d;
}

// ---------- element constructors ----------
const P = (d, w = 4.5, seq) => ({ t: 'p', d, w, seq });
const A = (d, w = 16, seq) => ({ t: 'a', d, w, seq });
const T = (s, x, y, size, font = 'body', seq, maxW) => ({ t: 't', s, x, y, size, font, seq, maxW });   // text shrinks to fit maxW (default: canvas width − 160)
const G = (x, y, s, r, items, seq) => ({ t: 'g', x, y, s, r, items, seq }); // seq here is inherited by children
function arrow(x1, y1, x2, y2, bend = 60) {
  const mx = (x1 + x2) / 2, my = (y1 + y2) / 2, dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy);
  const cx = mx - dy / L * bend, cy = my + dx / L * bend, a = Math.atan2(y2 - cy, x2 - cx), h = 26;
  return [P(`M${x1},${y1} Q${f(cx)},${f(cy)} ${x2},${y2}`),
          P(`M${f(x2 - h * Math.cos(a - .5))},${f(y2 - h * Math.sin(a - .5))} L${x2},${y2} L${f(x2 - h * Math.cos(a + .5))},${f(y2 - h * Math.sin(a + .5))}`, 4)];
}

// ---------- doodles (local coordinates around 0,0) ----------
const heart = sd => [A(scrib(0, -12, 64, 38, 7, sd), 14),
  P('M0,32 C-30,10 -62,-12 -50,-38 C-40,-60 -12,-56 0,-34 C12,-56 40,-60 50,-38 C62,-12 30,10 0,32')];
const question = sd => [P('M-34,-46 C-36,-86 36,-92 38,-50 C40,-20 4,-18 2,14', 5), P(circ(2, 44, 6, sd, 6, 1.2), 5)];
const spark = [P('M0,-26 Q4,-4 26,0 Q4,4 0,26 Q-4,4 -26,0 Q-4,-4 0,-26', 3.5)];
const curly = [P('M0,0 C30,-50 100,-40 90,0 C82,34 30,20 52,-14 C74,-48 150,-30 190,10'), P('M160,6 L192,12 L186,-20', 4)];
const lightbulb = sd => [P(circ(0, -20, 58, sd, 62, 1.04)), P('M-26,36 L-24,70 M24,36 L22,70', 4), P('M-30,78 Q0,86 30,78', 4), P('M-24,92 Q0,100 24,92', 4),
  P('M-14,0 Q0,-26 14,0', 3), A(scrib(0, -24, 70, 50, 7, sd + 1), 16)];
// Add topic-specific doodles here as functions returning item arrays (local coords around 0,0).

// CTA helpers (used by the last scene)
const roundRect = (w, h, r = 34) => `M${-w / 2 + r},${-h / 2} L${w / 2 - r},${-h / 2 + 2} Q${w / 2},${-h / 2} ${w / 2},${-h / 2 + r} L${w / 2 - 2},${h / 2 - r} Q${w / 2},${h / 2} ${w / 2 - r},${h / 2} L${-w / 2 + r},${h / 2 - 2} Q${-w / 2},${h / 2} ${-w / 2},${h / 2 - r} L${-w / 2 + 2},${-h / 2 + r} Q${-w / 2},${-h / 2} ${-w / 2 + r + 6},${-h / 2 - 1}`;
const button = (w, h, sd) => [A(scrib(0, 0, w - 40, h - 30, 14, sd), 30), P(roundRect(w, h), 5.5)];
const bell = sd => [A(scrib(0, -6, 60, 60, 7, sd), 16),
  P('M-42,30 C-40,-18 -30,-50 0,-52 C30,-50 40,-18 42,30'), P('M-58,32 Q0,40 58,32'), P(circ(0, 46, 9, sd + 1), 4),
  P(circ(0, -62, 7, sd + 2), 3.5), P('M-72,-30 Q-84,-6 -74,18', 3), P('M72,-30 Q84,-6 74,18', 3)];

// ---------- look of the drawer ----------
// null keeps the photo's own colour (black sweater, black pen). Any '#rrggbb' recolours it with texture kept.
// ink = colour of everything drawn and written (whiteboard style: keep it dark).
const LOOK = Object.assign({ shirt: null, pen: null, ink: '#1E1E1E' }, cfg.look);

// ---------- scenes (written by the page) ----------
const CX = W / 2, CY = H / 2, U = Math.min(W, H) / 1080, TALL = H > W, NARROW = W / H < 1.5;   // NARROW = 9:16 or 1:1
const SCENES = cfg.scenes({ W, H, CX, CY, U, TALL, NARROW, P, A, T, G, arrow, circ, cloud, scrib, smooth, rng,
  heart, question, spark, curly, lightbulb, button, bell, roundRect });

// ---------- render ----------
function el(tag, attrs) { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); return e; }
let ordCounter = 0;
function number(items) { for (const it of items) { it.ord = ordCounter++; if (it.t === 'g') number(it.items); } }
let clipId = 0;
function render(items, parent, scale, list, inh) {
  const dom = [...items].sort((a, b) => (a.t === 'a' ? 0 : 1) - (b.t === 'a' ? 0 : 1)); // accents sit behind ink
  for (const it of dom) {
    if (it.t === 'g') {
      const g = el('g', { transform: `translate(${it.x} ${it.y}) rotate(${it.r || 0}) scale(${it.s || 1})` });
      parent.appendChild(g); render(it.items, g, scale * (it.s || 1), list, it.seq ?? inh); continue;
    }
    if (it.t === 't') {
      const title = it.font === 'title';
      const t = el('text', { x: it.x, y: it.y, 'font-size': it.size, 'text-anchor': 'middle', class: 'txt',
        'font-family': title ? "'Permanent Marker', 'Comic Sans MS', cursive" : "'Caveat', 'Segoe Print', cursive",
        'font-weight': title ? 400 : 700 });
      t.textContent = it.s; parent.appendChild(t);
      const room = it.maxW || (W - 160) / scale, wNow = t.getComputedTextLength();
      if (wNow > room) t.setAttribute('font-size', (it.size * room / wNow).toFixed(1));
      list.push({ el: t, kind: 't', seq: it.seq ?? inh ?? 2, ord: it.ord }); continue;
    }
    const p = el('path', { d: it.d, class: it.t === 'a' ? 'acc' : 'ink', 'stroke-width': (it.w / scale).toFixed(2) });
    parent.appendChild(p);
    list.push({ el: p, kind: it.t, seq: it.seq ?? inh ?? (it.t === 'a' ? 1 : 0), ord: it.ord });
  }
}

const loadFonts = Promise.all([document.fonts.load('80px "Permanent Marker"'), document.fonts.load('700 80px "Caveat"')]).catch(() => {});
await Promise.race([loadFonts, new Promise(r => setTimeout(r, 3000))]);

// Each scene is a page of paper. Pages are stacked; earlier pages lie on top and are flipped away.
const fullRect = `0,0 ${W},0 ${W},${H} 0,${H}`;
const S = SCENES.map((sc, k) => {
  const page = el('g', { class: 'page', 'clip-path': `url(#page${k})` });
  const cp = el('clipPath', { id: `page${k}` }), poly = el('polygon', { points: fullRect });
  cp.appendChild(poly); defs.appendChild(cp);
  page.appendChild(el('rect', { width: W, height: H, fill: '#F7F5EF' }));
  const g = el('g', { filter: 'url(#wobble)' }); page.appendChild(g);
  pagesLayer.insertBefore(page, pagesLayer.firstChild);
  number(sc.items); const list = []; render(sc.items, g, 1, list);
  list.sort((a, b) => a.seq - b.seq || a.ord - b.ord);
  return { page, poly, list, hold: sc.hold };
});

// ---------- page flip geometry ----------
const FLIP = 1.3, TILT = Math.round(Math.min(W, H) / 3);
const foldAt = u => { const xt = W + TILT - (W + TILT + 40) * ease(u); return { xt, xb: xt - TILT }; };
const xLine = (f, y) => f.xt + (f.xb - f.xt) * y / H;
function cut(poly, f, keepLeft) { // Sutherland–Hodgman against the fold line
  const val = p => (keepLeft ? 1 : -1) * (xLine(f, p.y) - p.x), out = [];
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i], b = poly[(i + 1) % poly.length], va = val(a), vb = val(b);
    if (va >= 0) out.push(a);
    if ((va >= 0) !== (vb >= 0)) { const k = va / (va - vb); out.push({ x: a.x + (b.x - a.x) * k, y: a.y + (b.y - a.y) * k }); }
  }
  return out;
}
function reflect(p, f) {
  const dx = f.xb - f.xt, dy = H, L = Math.hypot(dx, dy), ux = dx / L, uy = dy / L;
  const vx = p.x - f.xt, vy = p.y, d = vx * ux + vy * uy, px = f.xt + ux * d, py = uy * d;
  return { x: 2 * px - p.x, y: 2 * py - p.y };
}
const RECT = [{ x: 0, y: 0 }, { x: W, y: 0 }, { x: W, y: H }, { x: 0, y: H }];
const pts = a => a.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ') || '0,0';
const GRAB = { x: W - 40, y: H - 30 };          // where the hand pinches the page corner
const grabAt = u => { const f = foldAt(u); return GRAB.x > xLine(f, GRAB.y) ? reflect(GRAB, f) : GRAB; };
let RELEASE = 1; for (let u = 0; u <= 1; u += 0.01) if (grabAt(u).x < 320) { RELEASE = u; break; }

// ---------- timeline ----------
const toStage = (M, x, y) => { const p = new DOMPoint(x, y).matrixTransform(M); return { x: p.x, y: p.y }; };
const stageInv = stage.getScreenCTM().inverse();
// Pass 1: measure every stroke once.
S.forEach(sc => {
  let prev = null;
  for (const s of sc.list) {
    s.M = stageInv.multiply(s.el.getScreenCTM());
    if (s.kind === 't') {
      s.bb = s.el.getBBox();
      const id = 'clip' + (clipId++), cp = el('clipPath', { id, clipPathUnits: 'userSpaceOnUse' });
      s.rect = el('rect', { x: s.bb.x - 12, y: s.bb.y - 30, width: 0, height: s.bb.height + 60 });
      cp.appendChild(s.rect); defs.appendChild(cp); s.el.setAttribute('clip-path', `url(#${id})`);
      s.base = clamp(s.bb.width * 0.0026, .4, 1.4);
    } else {
      s.len = s.el.getTotalLength();
      s.el.style.strokeDasharray = `${s.len} ${s.len + 2}`;
      s.base = clamp(s.len * PEN, .1, .85);
    }
    s.p0 = pointOn(s, 0); s.p1 = pointOn(s, 1);
    s.travel = prev ? 0.04 + Math.min(.22, Math.hypot(s.p0.x - prev.p1.x, s.p0.y - prev.p1.y) / 5000) : 0;
    prev = s;
  }
});
// Pass 2: lay out time. speed < 1 draws faster; extra = seconds added to every scene's hold.
function layout(speed, extra) {
  let cursor = 0;
  S.forEach((sc, k) => {
    sc.start = cursor; cursor += 0.45;
    for (const s of sc.list) {
      cursor += s.travel * speed; s.dur = Math.max(.06, s.base * speed);
      s.start = cursor; s.end = cursor + s.dur; cursor = s.end;
    }
    sc.drawEnd = cursor; sc.narrStart = sc.start + 0.3;
    sc.holdEnd = Math.max(cursor + 0.5 + Math.max(1.2, sc.hold) + extra, sc.narrStart + (NARR[k] || 0) + 0.7);
    sc.flipEnd = k < S.length - 1 ? sc.holdEnd + FLIP : sc.holdEnd;
    cursor = sc.flipEnd + 0.1;
  });
  return S[S.length - 1].holdEnd + 0.3;
}
let TOTAL = layout(1, 0);
if (VIDEO.duration) {           // fit the requested length: hold longer, or draw faster (never below 0.35×)
  const goal = VIDEO.duration, bisect = (f, lo, hi) => { for (let i = 0; i < 30; i++) { const m = (lo + hi) / 2; if (f(m) < goal) lo = m; else hi = m; } return hi; };
  if (TOTAL < goal) TOTAL = layout(1, bisect(x => layout(1, x), 0, goal));
  else TOTAL = layout(Math.max(.35, bisect(k => layout(k, 0), .35, 1)), 0);
  if (Math.abs(TOTAL - goal) > 1) console.warn(`Requested ${goal}s but scenes need ${TOTAL.toFixed(1)}s (narration too long or too many strokes)`);
}

function pointOn(s, q) {
  if (s.kind === 't') {
    const b = s.bb, x = b.x + b.width * q, y = b.y + b.height * .72 + Math.sin(q * b.width / 16) * b.height * .1;
    return toStage(s.M, x, y);
  }
  const p = s.el.getPointAtLength(s.len * q); return toStage(s.M, p.x, p.y);
}
const lerp = (a, b, u) => ({ x: a.x + (b.x - a.x) * u, y: a.y + (b.y - a.y) * u });
function handPos(t) {
  const k = S.findIndex(s => t >= s.start && t <= s.flipEnd); if (k < 0) return OFF;
  const sc = S[k], L = sc.list, first = L[0], last = L[L.length - 1];
  if (t > sc.holdEnd) {                                   // flipping the page by its corner
    const u = (t - sc.holdEnd) / FLIP;
    return u <= RELEASE ? grabAt(u) : lerp(grabAt(RELEASE), OFF, ease((u - RELEASE) / (1 - RELEASE)));
  }
  if (k < S.length - 1 && t > sc.holdEnd - .5) return lerp(OFF, GRAB, ease((t - (sc.holdEnd - .5)) / .5));
  if (t < first.start) return lerp(OFF, first.p0, ease(c01((t - (first.start - .4)) / .4)));
  if (t > last.end) return lerp(last.p1, OFF, ease(c01((t - last.end) / .5)));
  for (let i = 0; i < L.length; i++) {
    const s = L[i], n = L[i + 1];
    if (t >= s.start && t <= s.end) return pointOn(s, ease((t - s.start) / s.dur));
    if (n && t > s.end && t < n.start) return lerp(s.p1, n.p0, ease((t - s.end) / (n.start - s.end)));
  }
  return OFF;
}

// ---------- arm & body (photo forearm rotating at the pen tip, upper arm + torso drawn behind) ----------
// Measured on assets/arm_*.webp (1254×1254): pen tip (81,206), sleeve exits the photo at (1219,1099).
const TIP_IMG = { x: 81, y: 206 }, ELBOW = { x: 1138, y: 893 }, SLEEVE_DIR = { x: 0.765, y: 0.644 };
const ELBOW_BASE = Math.atan2(ELBOW.y, ELBOW.x);
const SHOULDER = { x: W + 680, y: H + 720 }, UPPER = 420 * AS;            // shoulder rests off-frame; leans in when reaching far
const SLEEVE_L = { lo: 0.0129, mean: 0.0899 }, PEN_L = { lo: 0.0526, mean: 0.1544 };
function tint(hex, st) {   // colour matrix that keeps the fabric/plastic texture but changes its colour
  const c = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255), b = 0.4 / (st.mean - st.lo), a = 0.85 - b * st.mean;
  return { matrix: c.map(v => [v * b * .2126, v * b * .7152, v * b * .0722, 0, v * a].join(' ')).join(' ') + ' 0 0 0 1 0',
           flat: '#' + c.map(v => Math.round(Math.min(1, v * .9) * 255).toString(16).padStart(2, '0')).join('') };
}
function applyLook() {
  document.documentElement.style.setProperty('--ink', LOOK.ink || '#1E1E1E');
  for (const [key, st, layer, mat] of [['shirt', SLEEVE_L, 'sleeveLayer', 'shirtMatrix'], ['pen', PEN_L, 'penLayer', 'penMatrix']]) {
    const on = !!LOOK[key]; document.getElementById(layer).style.display = on ? '' : 'none';
    if (on) document.getElementById(mat).setAttribute('values', tint(LOOK[key], st).matrix);
  }
  document.getElementById('arm').setAttribute('stroke', LOOK.shirt ? tint(LOOK.shirt, SLEEVE_L).flat : '#17171a');
}
applyLook();
armUpper.setAttribute('stroke-width', 400 * AS); torso.setAttribute('stroke-width', 900 * AS);
window.setLook = l => { Object.assign(LOOK, l); applyLook(); };   // e.g. setLook({ shirt: '#C0392B' })
const rot = (v, c, s) => ({ x: v.x * c - v.y * s, y: v.x * s + v.y * c });
function placeArm(P) {
  const theta = clamp(Math.atan2(SHOULDER.y - P.y, SHOULDER.x - P.x) - ELBOW_BASE, -0.5, 0.35);
  const c = Math.cos(theta), s = Math.sin(theta), e = rot({ x: ELBOW.x * AS, y: ELBOW.y * AS }, c, s), d = rot(SLEEVE_DIR, c, s);
  const E = { x: P.x + e.x, y: P.y + e.y }, E2 = { x: E.x + d.x * 260 * AS, y: E.y + d.y * 260 * AS };
  let S = { ...SHOULDER }; const dist = Math.hypot(S.x - E2.x, S.y - E2.y);
  if (dist > UPPER) S = { x: E2.x + (S.x - E2.x) / dist * UPPER, y: E2.y + (S.y - E2.y) / dist * UPPER };
  const f = p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`;
  const E0 = { x: E.x - d.x * 200 * AS, y: E.y - d.y * 200 * AS };      // start under the feathered photo edge
  armUpper.setAttribute('d', `M${f(E0)} L${f(E2)} L${f(S)}`);
  torso.setAttribute('d', `M${f(S)} l700,900`);
  hand.setAttribute('transform', `translate(${P.x.toFixed(1)} ${P.y.toFixed(1)}) rotate(${(theta * 180 / Math.PI).toFixed(2)}) scale(${AS})`);
}

function seek(t) {
  S.forEach((sc, k) => {
    const prevFlipStart = k > 0 ? S[k - 1].holdEnd : -1;
    sc.page.style.display = (t >= prevFlipStart && (t <= sc.flipEnd || k === S.length - 1)) ? '' : 'none';
    if (k < S.length - 1 && t > sc.holdEnd && t <= sc.flipEnd) {
      const f = foldAt((t - sc.holdEnd) / FLIP), flapPts = pts(cut(RECT, f, false).map(p => reflect(p, f)));
      sc.poly.setAttribute('points', pts(cut(RECT, f, true)));
      flap.setAttribute('points', flapPts); flapShadow.setAttribute('points', flapPts); flipfx.style.display = '';
    } else sc.poly.setAttribute('points', fullRect);
    for (const s of sc.list) {
      const q = ease(c01((t - s.start) / s.dur));
      if (s.kind === 't') s.rect.setAttribute('width', ((s.bb.width + 24) * q).toFixed(1));
      else { s.el.style.visibility = q > 0 ? 'visible' : 'hidden'; s.el.style.strokeDashoffset = s.len * (1 - q); }
    }
  });
  if (!S.some((sc, k) => k < S.length - 1 && t > sc.holdEnd && t <= sc.flipEnd)) flipfx.style.display = 'none';
  placeArm(handPos(t));
  turb.setAttribute('seed', 1 + Math.floor(t * 8) % 4);
}
window.seek = seek; window.TOTAL = TOTAL; window.FPS = FPS;
// Timeline for the audio mixer (scripts/mix.py): when narration starts, when the pen touches paper, when pages flip.
window.TIMELINE = {
  total: TOTAL, fps: FPS, w: W, h: H,
  scenes: S.map(s => ({ start: s.start, narrStart: s.narrStart, drawEnd: s.drawEnd, holdEnd: s.holdEnd, flipEnd: s.flipEnd })),
  strokes: S.flatMap(s => s.list.map(x => [+x.start.toFixed(3), +x.end.toFixed(3), x.kind])),
  flips: S.slice(0, -1).map(s => s.holdEnd),
};

// ---------- playback UI ----------
const playBtn = document.getElementById('play'), restartBtn = document.getElementById('restart');
const range = document.getElementById('seek'), timeEl = document.getElementById('time');
range.max = TOTAL.toFixed(2);
const fmt = s => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
let t = reduced ? TOTAL - 0.3 : 0, playing = !reduced, last = performance.now();
const setPlaying = v => { playing = v; playBtn.textContent = v ? 'Jeda' : 'Putar'; };
setPlaying(playing);
playBtn.addEventListener('click', () => { if (!playing && t >= TOTAL) t = 0; setPlaying(!playing); });
restartBtn.addEventListener('click', () => { t = 0; setPlaying(true); });
range.addEventListener('input', () => { t = +range.value; setPlaying(false); });
const lookInputs = { shirt: 'shirtC', pen: 'penC', ink: 'inkC' };
for (const [k, id] of Object.entries(lookInputs)) {
  const inp = document.getElementById(id); if (LOOK[k]) inp.value = LOOK[k];
  inp.addEventListener('input', () => { setLook({ [k]: inp.value }); seek(t); });
}
document.getElementById('lookReset').addEventListener('click', () => {
  setLook({ shirt: null, pen: null, ink: '#1E1E1E' }); document.getElementById('shirtC').value = '#17171a';
  document.getElementById('penC').value = '#1a1a1a'; document.getElementById('inkC').value = '#1e1e1e'; seek(t);
});
if (location.search.includes('render=1')) { seek(0); return; }
(function loop(now) {
  if (playing) { t += (now - last) / 1000; if (t >= TOTAL) { t = TOTAL; setPlaying(false); } }
  last = now; seek(t);
  range.value = t.toFixed(2); timeEl.textContent = `${fmt(t)} / ${fmt(TOTAL)}`;
  requestAnimationFrame(loop);
})(performance.now());
})();
} };
})();
