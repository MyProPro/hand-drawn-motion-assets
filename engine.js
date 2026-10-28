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
{ const st = document.createElement('style'); st.textContent = CSS + ' .qa{color:#ffb8a8;font-size:13px;line-height:1.5;border:1px solid #6b3b33;border-radius:6px;padding:8px 12px;background:#2e2220}'; document.head.appendChild(st); }
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
  return [{ ...P(`M${x1},${y1} Q${f(cx)},${f(cy)} ${x2},${y2}`), qa: 'skip' },
          { ...P(`M${f(x2 - h * Math.cos(a - .5))},${f(y2 - h * Math.sin(a - .5))} L${x2},${y2} L${f(x2 - h * Math.cos(a + .5))},${f(y2 - h * Math.sin(a + .5))}`, 4), qa: 'skip' }];
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

const CX = W / 2, CY = H / 2, U = Math.min(W, H) / 1080, TALL = H > W, NARROW = W / H < 1.5;   // NARROW = 9:16 or 1:1
// ---------- icon library (local coords, ~260 px tall, centred on 0,0) ----------
// Every icon is icon.name(seed?, option?) → item list. Place with G(x, y, scale, rotate, icon.name(…), seq)
// or let a layout place it: layout.point({ icon: 'plug' }) / { icon: icon.person(3, 'shock') }.
const R_ = roundRect;
const icon = {
  person: (sd = 1, mood = 'happy') => {
    const face = {
      happy: [P(circ(-17, -128, 5, sd + 1, 5, 1.2), 4), P(circ(17, -128, 5, sd + 2, 5, 1.2), 4), P('M-18,-104 Q0,-88 18,-104', 4)],
      shock: [P(circ(-17, -128, 8, sd + 1), 3.5), P(circ(17, -128, 8, sd + 2), 3.5), P(circ(0, -96, 10, sd + 3, 12), 3.5)],
      think: [P(circ(-17, -128, 5, sd + 1, 5, 1.2), 4), P(circ(17, -128, 5, sd + 2, 5, 1.2), 4), P('M-14,-98 L14,-101', 4)],
      sad:   [P(circ(-17, -128, 5, sd + 1, 5, 1.2), 4), P(circ(17, -128, 5, sd + 2, 5, 1.2), 4), P('M-18,-94 Q0,-108 18,-94', 4)],
    }[mood] || [];
    const arms = {
      happy: [P('M-62,-6 Q-100,-40 -112,-82', 5), P('M62,-6 Q80,30 86,62', 5)],
      shock: [P('M-62,-10 Q-96,-60 -74,-112', 5), P('M62,-10 Q96,-60 74,-112', 5), P('M-92,-150 L-110,-170 M92,-150 L110,-170', 3.5)],
      think: [P('M-62,-6 Q-78,30 -82,62', 5), P('M50,-10 Q20,-40 10,-84', 5), P(circ(72, -182, 7, sd + 4), 3), P(circ(100, -214, 11, sd + 5), 3)],
      sad:   [P('M-62,-6 Q-76,30 -80,66', 5), P('M62,-6 Q76,30 80,66', 5)],
    }[mood] || [];
    return [P(circ(0, -122, 50, sd, 52), 5), P('M-48,-138 Q-34,-182 0,-176 Q38,-182 50,-134', 4.5), ...face,
      P('M-72,90 C-72,-30 -44,-62 0,-62 C44,-62 72,-30 72,90', 5), ...arms];
  },
  house: () => [P('M-140,-20 L0,-140 L140,-20', 5.5), P('M-110,-40 L-110,115 L110,115 L110,-40', 5),
    P('M-28,115 L-28,40 L28,40 L28,115', 4), P('M50,0 L90,2 L88,42 L50,40 Z', 3.5), P('M62,-88 L62,-124 L90,-124 L90,-64', 4)],
  socket: sd => [P(R_(220, 300, 30), 5), P(circ(0, 0, 76, sd), 4.5), P('M-30,-12 L-30,14 M30,-12 L30,14', 7)],
  plug: sd => [A(scrib(0, -10, 90, 90, 6, sd), 18), P('M-60,-80 L60,-80 L70,50 Q0,82 -70,50 Z', 5),
    P('M-28,-82 L-28,-140 M28,-82 L28,-140', 7), P('M0,72 C12,130 -46,150 -18,190', 5)],
  bulb: (sd = 1, kind = 'on') => {
    const body = [P(circ(0, -40, 86, sd, 90, 1.05), 5), P('M-42,40 L-36,86 L36,86 L42,40 M-32,106 L32,106 M-22,124 L22,124', 4)];
    if (kind === 'old') return [...body, P('M-28,-18 L-14,-52 L0,-18 L14,-52 L28,-18', 3.5)];
    return [A(scrib(0, -40, 120, 110, 7, sd + 1), 26), ...body, P('M-28,-30 L28,-30', 5),
      P('M0,-152 L0,-196 M-98,-118 L-130,-148 M98,-118 L130,-148', 4.5)];
  },
  ac: sd => [A(scrib(-40, -15, 280, 50, 10, sd), 22), P(R_(400, 150, 24), 5), P('M-170,30 L170,30', 3),
    P('M110,-50 L165,-50 L165,-20 L110,-20 Z', 3.5),
    P('M-110,90 C-128,135 -90,160 -112,205 M0,90 C-18,135 22,160 0,205 M110,90 C92,135 130,160 108,205', 4)],
  remote: sd => [P(R_(130, 290, 24), 5), P('M-40,-110 L40,-110 L40,-40 L-40,-40 Z', 4), T('25°', 0, -60, 48, 'title'), P(circ(0, 30, 18, sd), 3.5), P('M-28,80 L28,80', 4)],
  fan: sd => [P(circ(0, -40, 110, sd), 5), ...[0, 120, 240].map(a => G(0, -40, 1, a, [P('M0,0 C26,-20 52,-66 16,-88 C-10,-70 -10,-30 0,0', 4)])),
    P(circ(0, -40, 12, sd + 1), 4), P('M0,70 L0,150 M-70,150 L70,150', 5)],
  tv: () => [P(R_(280, 180, 18), 5), P('M-110,-60 L-80,-75', 3.5), P('M-40,92 L-62,135 M40,92 L62,135 M-90,135 L90,135', 4.5)],
  fridge: () => [P(R_(170, 300, 18), 5), P('M-85,-40 L85,-40', 4), P('M55,-110 L55,-75 M55,-5 L55,45', 6)],
  battery: (sd = 1, level = .4) => [A(scrib(-110 + 110 * level, 0, 220 * level - 20, 70, 6, sd), 24), P(R_(240, 120, 18), 5),
    P('M120,-28 L142,-28 L142,28 L120,28', 5)],
  bolt: sd => [A('M-12,-70 L18,-70 L-6,0 L20,0 L-26,70', 20), P('M-15,-110 L45,-110 L-8,-10 L40,-10 L-50,110 L-18,25 L-55,25 Z', 5)],
  sun: sd => [A(scrib(0, 0, 90, 90, 6, sd), 22), P(circ(0, 0, 62, sd + 1), 5),
    P([0, 45, 90, 135, 180, 225, 270, 315].map(a => { const c = Math.cos(a * Math.PI / 180), s = Math.sin(a * Math.PI / 180); return `M${f(c * 90)},${f(s * 90)} L${f(c * 125)},${f(s * 125)}`; }).join(' '), 4.5)],
  solar: () => [P('M-140,40 L-90,-90 L140,-90 L90,40 Z', 5), P('M-115,-25 L115,-25 M-57,40 L-12,-90 M27,40 L72,-90', 3), P('M0,40 L0,120 M-50,120 L50,120', 5)],
  coin: sd => [A(scrib(0, 0, 80, 80, 6, sd), 22), P(circ(0, 0, 80, sd + 1), 5), P(circ(0, 0, 62, sd + 2), 3), T('Rp', 0, 18, 52, 'title')],
  coins: sd => [P(circ(0, 60, 90, sd, 28), 5), P('M-90,60 L-90,90 M90,60 L90,90', 5), P('M-90,90 Q0,122 90,90', 5),
    P(circ(0, 10, 90, sd + 1, 28), 5), P('M-90,10 L-90,40 M90,10 L90,40', 5), P(circ(0, -40, 90, sd + 2, 28), 5), P('M-90,-40 L-90,-10 M90,-40 L90,-10', 5)],
  money: sd => [A(scrib(0, 0, 200, 70, 9, sd), 24), P(R_(280, 140, 14), 5), P(circ(0, 0, 40, sd + 1), 4), T('Rp', 0, 14, 40, 'title'), P('M-120,-50 L-90,-50 M90,50 L120,50', 3.5)],
  wallet: sd => [P(R_(260, 170, 22), 5), P('M30,-38 L130,-38 L130,38 L30,38', 5), P(circ(64, 0, 10, sd), 4), P('M-130,-55 L90,-55', 3.5)],
  receipt: (sd = 1, label = 'Rp ???') => [A(scrib(0, 40, 200, 44, 9, sd), 24),
    P('M-120,-150 L120,-148 L121,120 L96,144 L72,120 L48,144 L24,120 L0,144 L-24,120 L-48,144 L-72,120 L-96,144 L-120,120 L-121,-146', 5),
    P('M-80,-100 L50,-100 M-80,-62 L80,-62', 4), T(label, 0, 62, 58, 'title', undefined, 220)],
  piggy: sd => [A(scrib(-10, 0, 150, 90, 7, sd), 24), P(circ(0, 0, 112, sd + 1, 82), 5), P('M-36,-70 L-20,-104 L0,-76', 4.5),
    P(circ(110, 6, 22, sd + 2, 28), 4.5), P('M104,0 L104,10 M116,0 L116,10', 3), P(circ(45, -25, 5, sd + 3), 4),
    P('M-60,72 L-60,108 M50,72 L50,108', 5), P('M-112,-8 C-142,-30 -152,12 -126,16', 4), P('M-26,-80 L24,-80', 5)],
  clock: sd => [P(circ(0, 0, 105, sd), 5.5), P('M0,0 L0,-66 M0,0 L50,22', 5.5), P('M0,-90 L0,-80 M90,0 L80,0 M0,90 L0,80 M-90,0 L-80,0', 4)],
  calendar: sd => [P(R_(230, 220, 18), 5), P('M-115,-50 L115,-50', 4.5), P('M-55,-132 L-55,-92 M55,-132 L55,-92', 6),
    P('M-70,0 L-40,0 M-15,0 L15,0 M40,0 L70,0 M-70,50 L-40,50 M-15,50 L15,50', 4), A(scrib(55, 50, 40, 30, 4, sd), 20), P(circ(55, 50, 26, sd + 1), 4)],
  hourglass: sd => [A('M-30,80 L30,80 L0,40 Z', 18), P('M-70,-120 L70,-120 M-70,120 L70,120', 5.5),
    P('M-55,-120 C-55,-40 -12,-18 -12,0 C-12,18 -55,40 -55,120 M55,-120 C55,-40 12,-18 12,0 C12,18 55,40 55,120', 5)],
  phone: sd => [P(R_(140, 260, 26), 5), P('M-52,-96 L52,-96 L52,84 L-52,84 Z', 3.5), P(circ(0, 108, 9, sd), 3.5)],
  laptop: () => [P(R_(250, 170, 14), 5), P('M-100,-60 L-70,-78', 3.5), P('M-160,90 L160,90 L136,118 L-136,118 Z', 5)],
  wifi: sd => [P('M-120,-40 Q0,-140 120,-40', 5), P('M-80,0 Q0,-70 80,0', 5), P('M-40,40 Q0,5 40,40', 5), P(circ(0, 78, 10, sd), 6)],
  lock: sd => [A(scrib(0, 40, 110, 70, 6, sd), 20), P(R_(170, 140, 20), 5), P('M-50,-70 L-50,-110 C-50,-170 50,-170 50,-110 L50,-70', 5),
    P(circ(0, 30, 14, sd + 1), 4), P('M0,44 L0,74', 5)],
  gear: sd => [P(circ(0, 0, 78, sd), 5),
    P([0, 45, 90, 135, 180, 225, 270, 315].map(a => { const c = Math.cos(a * Math.PI / 180), s = Math.sin(a * Math.PI / 180); return `M${f(c * 80)},${f(s * 80)} L${f(c * 112)},${f(s * 112)}`; }).join(' '), 14),
    P(circ(0, 0, 28, sd + 1), 4.5)],
  chartUp: sd => [P('M-130,-110 L-130,110 L140,110', 5), A('M-100,70 L-40,10 L10,40 L90,-60', 22), P('M-100,70 L-40,10 L10,40 L100,-75', 5.5), P('M62,-78 L102,-77 L100,-37', 5.5)],
  chartDown: sd => [P('M-130,-110 L-130,110 L140,110', 5), P('M-100,-70 L-40,-10 L10,-40 L100,75', 5.5), P('M62,78 L102,77 L100,37', 5.5)],
  bars: sd => [P('M-130,-120 L-130,110 L140,110', 5), P('M-95,110 L-95,40 L-50,40 L-50,110 M-20,110 L-20,-10 L25,-10 L25,110', 4.5),
    A(scrib(80, 15, 30, 150, 6, sd), 26), P('M55,110 L55,-80 L100,-80 L100,110', 4.5)],
  check: sd => [A(scrib(0, 0, 160, 130, 7, sd), 26), P('M-90,10 L-25,75 L100,-80', 9)],
  cross: () => [P('M-80,-80 L80,80', 9), P('M80,-80 L-80,80', 9)],
  star: sd => [A(scrib(0, 10, 110, 90, 6, sd), 24), P('M0,-110 L28,-36 L106,-34 L44,14 L66,90 L0,46 L-66,90 L-44,14 L-106,-34 L-28,-36 Z', 5)],
  target: sd => [P(circ(0, 0, 110, sd), 5), P(circ(0, 0, 72, sd + 1), 4.5), A(scrib(0, 0, 50, 50, 5, sd + 2), 22), P(circ(0, 0, 32, sd + 3), 4.5),
    P('M0,0 L110,-110', 5), P('M90,-110 L110,-110 L110,-90 M100,-130 L130,-100', 4)],
  trophy: sd => [A(scrib(0, -40, 90, 80, 6, sd), 24), P('M-64,-110 L64,-110 C64,-10 30,20 0,20 C-30,20 -64,-10 -64,-110', 5),
    P('M-64,-90 C-112,-90 -106,-24 -50,-24 M64,-90 C112,-90 106,-24 50,-24', 4.5), P('M0,20 L0,70 M-56,70 L56,70 L56,104 L-56,104 Z', 5)],
  magnifier: sd => [P(circ(-20, -20, 80, sd), 5.5), P('M-60,-50 Q-40,-80 -10,-82', 3.5), P('M38,38 L118,118', 10)],
  megaphone: () => [P('M-80,-36 L70,-100 L70,100 L-80,36 Z', 5), P('M-80,-36 L-116,-36 L-116,36 L-80,36', 5), P('M-90,36 L-70,100 L-40,100 L-56,36', 4.5),
    P('M100,-50 Q130,0 100,50 M122,-82 Q172,0 122,82', 4)],
  book: () => [P('M0,-80 C-50,-104 -112,-96 -136,-80 L-136,90 C-112,74 -50,66 0,90 C50,66 112,74 136,90 L136,-80 C112,-96 50,-104 0,-80 L0,90', 5),
    P('M-110,-40 L-30,-50 M-110,0 L-30,-10 M30,-50 L110,-40 M30,-10 L110,0', 3.5)],
  pencil: () => [P('M-100,70 L60,-90 L100,-50 L-60,110 L-120,130 Z', 5), P('M40,-70 L80,-30 M-100,70 L-60,110', 4)],
  chat: (sd = 1, text = '') => [P(R_(280, 170, 40), 5), P('M-60,85 L-90,140 L-10,85', 5), ...(text ? [T(text, 0, 18, 64, 'body', undefined, 230)] : [P('M-80,-25 L80,-25 M-80,20 L40,20', 4)])],
  warning: sd => [A(scrib(0, 30, 120, 80, 6, sd), 22), P('M0,-120 L130,105 L-130,105 Z', 5.5), P('M0,-40 L0,40', 9), P(circ(0, 72, 6, sd + 1), 8)],
  leaf: () => [P('M-100,90 C-110,-40 20,-120 120,-110 C110,0 30,100 -100,90', 5), P('M-100,90 C-20,10 30,-30 100,-90', 4)],
  tree: sd => [P(cloud(0, -50, 230, 190, 9, sd), 5), P('M-22,150 L-16,40 M22,150 L16,40', 5), P('M-16,70 L-50,40 M16,60 L48,30', 4)],
  drop: sd => [A(scrib(0, 40, 80, 80, 6, sd), 22), P('M0,-110 C40,-50 76,-6 76,34 C76,82 40,110 0,110 C-40,110 -76,82 -76,34 C-76,-6 -40,-50 0,-110', 5), P('M-36,30 Q-34,66 -6,80', 4)],
  car: sd => [P('M-160,40 L-160,0 L-110,-10 L-70,-66 L70,-66 L110,-10 L160,0 L160,40 Z', 5), P('M-58,-56 L-80,-12 L80,-12 L58,-56', 3.5),
    P(circ(-88, 46, 30, sd), 5), P(circ(88, 46, 30, sd + 1), 5)],
  idea: sd => [G(0, 10, 1.9, 0, lightbulb(sd))], heart: sd => [G(0, 30, 2.3, 0, heart(sd))],
  question: sd => [G(0, 0, 2.2, 0, question(sd))], bell: sd => [G(0, 0, 2, 0, bell(sd))],
};
// icon by name or ready item list
const asIcon = (v, sd = 7) => Array.isArray(v) ? v : (icon[v] ? icon[v](sd) : (console.warn('HandDrawn: unknown icon', v), icon.question(sd)));

// ---------- scene layouts (return a full scene; sizes adapt to 16:9, 9:16 and 1:1) ----------
const BIG = TALL ? 1.9 * U : NARROW ? 1.55 * U : 1.45 * U;      // main drawing scale
const TY = TALL ? 290 * U : NARROW ? 170 * U : 180 * U;          // title baseline
const CAP = TALL ? H * .86 : H - 110 * U;                         // caption baseline
const TS = TALL ? 112 * U : 92 * U;                               // title size
const titleT = (s, y = TY, seq = 0) => T(s, CX, y, TS, 'title', seq, W - 180 * U);
const capT = (s, seq = 2) => s ? [T(s, CX, CAP, TALL ? 66 * U : 60 * U, 'body', seq, W - 200 * U)] : [];
const layout = {
  // Hook: big question + one strong picture. { title, sub, icon, cap, side: icon for a small extra (optional) }
  hook: ({ title, sub = '', icon: ic = 'question', cap = '', side = null, hold = 2.2 }) => ({ hold, items: [
    titleT(title, sub ? TY : TY + 40 * U, 0),
    ...(sub ? [T(sub, CX, TY + (TALL ? 125 : 105) * U, (TALL ? 100 : 84) * U, 'body', 0.1, W - 200 * U),
      A(`M${CX - 240 * U},${TY + (TALL ? 105 : 88) * U} Q${CX},${TY + (TALL ? 92 : 76) * U} ${CX + 240 * U},${TY + (TALL ? 110 : 92) * U}`, 30, 0.2)] : []),
    G(CX - (side ? 60 : 0) * U, CY + (TALL ? 110 : NARROW ? 80 : 120) * U, BIG * (NARROW && !TALL ? .9 : 1), -2, asIcon(ic, 11), 0.5),
    ...(side ? [G(CX + (NARROW ? 320 : 420) * U, CY - (TALL ? 170 : 60) * U, BIG * .42, 6, asIcon(side, 12), 1)] : []),
    ...capT(cap)] }),
  // One idea: title, one big picture (+ optional label under it, small side icon), caption.
  point: ({ title, icon: ic, label = '', cap = '', side = null, hold = 2.5 }) => {
    const s = BIG, y = CY - (label ? (TALL ? 60 : 50) : -30) * U;
    return { hold, items: [
      titleT(title),
      G(CX, y, s, 0, asIcon(ic, 21), 0.5),
      ...(label ? [T(label, CX, y + 205 * s + 70 * U, (TALL ? 90 : 70) * U, 'title', 0.9, W - 240 * U)] : []),
      ...(side ? [G(CX + (NARROW ? 330 : 520) * U, CY - (TALL ? 300 : 120) * U, BIG * .4, 8, asIcon(side, 22), 1)] : []),
      ...capT(cap)] };
  },
  // Comparison: left vs right. winner: 'left' | 'right' | null. stat: big highlighted text under the pair.
  compare: ({ title, left, right, winner = 'right', stat = '', cap = '', hold = 2.6 }) => {
    const dx = (NARROW ? 250 : 420) * U, s = BIG * (TALL ? .72 : NARROW ? .62 : .7), y = CY - (TALL ? 180 : NARROW ? 70 : 40) * U;
    const ly = y + 185 * s + 55 * U, sy = ly + (TALL ? 190 : 120) * U;
    const lab = (o, x, seq) => o.label ? [T(o.label, x, ly, (TALL ? 70 : 58) * U, 'title', seq, dx * 1.5)] : [];
    const wx = winner === 'left' ? CX - dx : CX + dx, lx = winner === 'left' ? CX + dx : CX - dx;
    return { hold, items: [
      titleT(title),
      G(CX - dx, y, s, 0, asIcon(left.icon, 32), 0.5), G(CX + dx, y, s, 0, asIcon(right.icon, 33), 0.7),
      ...(winner ? [G(lx, y, s * .95, 0, icon.cross(), 1.6), { ...G(wx + 120 * s, y - 120 * s, s * .5, 0, icon.check(31), 1.7), qa: 'skip' }] : []),
      ...lab(left, CX - dx, 0.9), ...lab(right, CX + dx, 0.95),
      ...(stat ? [T(stat, CX, sy, (TALL ? 96 : 72) * U, 'title', 1.9, W - 220 * U),
        A(`M${CX - 280 * U},${sy - 20 * U} Q${CX},${sy - 32 * U} ${CX + 280 * U},${sy - 14 * U}`, 34, 2)] : []),
      ...capT(stat && TALL ? '' : cap)] };
  },
  // Steps: 2–4 icons with labels, connected by arrows (vertical on 9:16, horizontal otherwise).
  steps: ({ title, steps, cap = '', hold = 2.8 }) => {
    const n = steps.length, items = [titleT(title)];
    const s = TALL ? BIG * .5 : BIG * (NARROW ? .5 : .62);
    const span = TALL ? (CAP - TY - 560 * U) / Math.max(1, n - 1) : Math.min(560 * U, (W - 420 * U) / Math.max(1, n - 1));
    steps.forEach((st, i) => {
      const x = TALL ? CX - 170 * U : CX + (i - (n - 1) / 2) * span, y = TALL ? TY + 230 * U + i * span : CY - 40 * U;
      items.push(G(x, y, s, 0, asIcon(st.icon, 41 + i), 0.5 + i));
      items.push(T(st.label, TALL ? CX + 150 * U : x, TALL ? y + 22 * U : y + 225 * s + 50 * U, (TALL ? 64 : 52) * U, 'title', 0.6 + i, TALL ? W * .42 : span * .92));
      if (i < n - 1) items.push(...(TALL ? arrow(x, y + 160 * s + 20 * U, x, y + span - 160 * s - 20 * U, 30 * U)
        : arrow(x + 165 * s + 20 * U, y, x + span - 165 * s - 20 * U, y, -30 * U)).map(a => ({ ...a, seq: 0.8 + i })));
    });
    return { hold, items: [...items, ...capT(cap, n + 1)] };
  },
  // Big number or fact. { title, value: '75%', label, icon }
  stat: ({ title, value, label = '', icon: ic = null, cap = '', hold = 2.6 }) => ({ hold, items: [
    titleT(title),
    ...(ic ? [G(CX, CY - (TALL ? 290 : NARROW ? 225 : 210) * U, BIG * (TALL ? .75 : .58), 0, asIcon(ic, 51), 0.3)] : []),
    T(value, CX, CY + (ic ? 140 : 40) * U, (TALL ? 260 : 210) * U, 'title', 0.5, W - 200 * U),
    A(`M${CX - 300 * U},${CY + (ic ? 110 : 10) * U} Q${CX},${CY + (ic ? 95 : -5) * U} ${CX + 300 * U},${CY + (ic ? 115 : 15) * U}`, 60, 0.6),
    ...(label ? [T(label, CX, CY + (ic ? 270 : 170) * U, (TALL ? 80 : 64) * U, 'body', 0.8, W - 220 * U)] : []),
    ...capT(cap)] }),
  // CTA: question/title + marker button + fitting doodle + arrow. icon: 'bell' | 'heart' | 'chat' | any icon
  cta: ({ title, title2 = '', action = 'FOLLOW', sub = '', icon: ic = 'bell', hold = 3 }) => ({ hold, items: [
    titleT(title, TY, 0), ...(title2 ? [titleT(title2, TY + TS * 1.5, 0.1)] : []),
    G(CX, CY + (TALL ? 40 : 60) * U, (TALL ? 1.1 : 1) * U, 0, button(620, 170, 61), 0.5),
    T(action, CX, CY + (TALL ? 72 : 92) * U, 96 * U, 'title', 0.6, 540 * U),
    G(CX + (NARROW ? 300 : 420) * U, CY - (TALL ? 210 : NARROW ? 110 : 90) * U, (TALL ? .7 : .55) * U, 10, asIcon(ic, 62), 1),
    ...arrow(CX - (NARROW ? 330 : 480) * U, CY + (TALL ? 380 : 230) * U, CX - (NARROW ? 240 : 330) * U, CY + (TALL ? 170 : 130) * U, -50 * U).map(a => ({ ...a, seq: 1.2 })),
    ...capT(sub)] }),
};

// ---------- look of the drawer ----------
// null keeps the photo's own colour (black sweater, black pen). Any '#rrggbb' recolours it with texture kept.
// ink = colour of everything drawn and written (whiteboard style: keep it dark).
const LOOK = Object.assign({ shirt: null, pen: null, ink: '#1E1E1E' }, cfg.look);

// ---------- scenes (written by the page) ----------
const SCENES = cfg.scenes({ W, H, CX, CY, U, TALL, NARROW, P, A, T, G, arrow, circ, cloud, scrib, smooth, rng,
  heart, question, spark, curly, lightbulb, button, bell, roundRect, icon, layout });

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
      if (it.qa) g.dataset.qa = it.qa;
      parent.appendChild(g); render(it.items, g, scale * (it.s || 1), list, it.seq ?? inh); continue;
    }
    if (it.t === 't') {
      const title = it.font === 'title';
      const t = el('text', { x: it.x, y: it.y, 'font-size': it.size, 'text-anchor': 'middle', class: 'txt',
        'font-family': title ? "'Permanent Marker', 'Comic Sans MS', cursive" : "'Caveat', 'Segoe Print', cursive",
        'font-weight': title ? 400 : 700 });
      t.textContent = it.s; parent.appendChild(t);
      if (it.qa) t.dataset.qa = it.qa;
      const room = Math.min(it.maxW || Infinity, (W - 160 * U) / scale), wNow = t.getComputedTextLength();   // never wider than the screen
      const words = it.s.split(' ');
      if (wNow > room * 1.35 && words.length > 2 && !it.oneLine) {   // much too long: break into two balanced lines
        let best = 1, bestD = Infinity;
        for (let i = 1; i < words.length; i++) { const d = Math.abs(words.slice(0, i).join(' ').length - words.slice(i).join(' ').length); if (d < bestD) { bestD = d; best = i; } }
        const lh = it.size * 1.25, lines = [words.slice(0, best).join(' '), words.slice(best).join(' ')];
        t.remove();
        lines.forEach((line, li) => {
          const tl = el('text', { x: it.x, y: it.y - lh / 2 + li * lh, 'font-size': it.size, 'text-anchor': 'middle', class: 'txt',
            'font-family': title ? "'Permanent Marker', 'Comic Sans MS', cursive" : "'Caveat', 'Segoe Print', cursive", 'font-weight': title ? 400 : 700 });
          tl.textContent = line; parent.appendChild(tl);
          const wl = tl.getComputedTextLength();
          if (wl > room) { tl.setAttribute('font-size', (it.size * room / wl).toFixed(1)); tl.dataset.shrink = (room / wl).toFixed(2); }
          list.push({ el: tl, kind: 't', seq: (it.seq ?? inh ?? 2) + li * .01, ord: it.ord + li * .5 });
        });
        continue;
      }
      if (wNow > room) { t.setAttribute('font-size', (it.size * room / wNow).toFixed(1)); t.dataset.shrink = (room / wNow).toFixed(2); }
      list.push({ el: t, kind: 't', seq: it.seq ?? inh ?? 2, ord: it.ord }); continue;
    }
    const p = el('path', { d: it.d, class: it.t === 'a' ? 'acc' : 'ink', 'stroke-width': (it.w / scale).toFixed(2) });
    if (it.qa) p.dataset.qa = it.qa;
    parent.appendChild(p);
    list.push({ el: p, kind: it.t, seq: it.seq ?? inh ?? (it.t === 'a' ? 1 : 0), ord: it.ord });
  }
}

const loadFonts = Promise.all([document.fonts.load('80px "Permanent Marker"'), document.fonts.load('700 80px "Caveat"')]).catch(() => {});
await Promise.race([loadFonts, new Promise(r => setTimeout(r, 3000))]);
// Some preview frames start hidden; give them a moment to get a size before measuring text.
for (let i = 0; i < 40 && !(stage.getBoundingClientRect().width > 0); i++) await new Promise(r => setTimeout(r, 100));

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
  return { page, poly, list, hold: sc.hold, content: g };
});

// ---------- automatic layout fixer (runs before timing, so the hand follows the fixed positions) ----------
// Repairs what an AI-written scene often gets wrong: text inside a bubble/box that is too wide for it,
// items outside the safe area, and items that overlap. video.autofix = false turns it off.
const FIXED = [];
if (VIDEO.autofix !== false) S.forEach((sc, k) => {
  const M = 56 * U, gap = 18 * U;
  const nodes = [...sc.content.children].filter(n => !n.classList.contains('acc') && n.dataset.qa !== 'skip');
  const box = n => stageBox(n);
  const area = b => (b.x1 - b.x0) * (b.y1 - b.y0);
  const inside = (a, c, pad = 8) => c.x0 >= a.x0 - pad && c.x1 <= a.x1 + pad && c.y0 >= a.y0 - pad && c.y1 <= a.y1 + pad;
  const hit = (a, c) => { const ix = Math.min(a.x1, c.x1) - Math.max(a.x0, c.x0), iy = Math.min(a.y1, c.y1) - Math.max(a.y0, c.y0);
    return ix > 10 && iy > 10 && ix * iy > .06 * Math.min(area(a), area(c)) && !inside(a, c) && !inside(c, a); };
  const isText = n => n.tagName === 'text';
  const move = (n, dx, dy) => {
    if (isText(n)) { n.setAttribute('x', +n.getAttribute('x') + dx); n.setAttribute('y', +n.getAttribute('y') + dy); }
    else n.setAttribute('transform', `translate(${dx.toFixed(1)} ${dy.toFixed(1)}) ${n.getAttribute('transform') || ''}`);
  };
  const shrink = (n, f) => {
    if (isText(n)) { n.setAttribute('font-size', (+n.getAttribute('font-size') * f).toFixed(1)); return; }
    const b = box(n), cx = (b.x0 + b.x1) / 2, cy = (b.y0 + b.y1) / 2;
    n.setAttribute('transform', `translate(${cx.toFixed(1)} ${cy.toFixed(1)}) scale(${f.toFixed(3)}) translate(${(-cx).toFixed(1)} ${(-cy).toFixed(1)}) ${n.getAttribute('transform') || ''}`);
  };
  const fitBounds = n => {
    let b = box(n); if (!b) return;
    const kw = (W - 2 * M) / (b.x1 - b.x0), kh = (H - 2 * M) / (b.y1 - b.y0);
    if (kw < 1 || kh < 1) { shrink(n, Math.min(kw, kh) * .97); b = box(n); }
    const dx = b.x0 < M ? M - b.x0 : b.x1 > W - M ? W - M - b.x1 : 0, dy = b.y0 < M ? M - b.y0 : b.y1 > H - M ? H - M - b.y1 : 0;
    if (dx || dy) { move(n, dx, dy); return true; }
  };
  // 1) text whose centre sits inside a drawing (bubble, button, sign) but sticks out: shrink it to fit inside
  for (const t of nodes.filter(isText)) for (const d of nodes.filter(n => !isText(n))) {
    const tb = box(t), db = box(d); if (!tb || !db) continue;
    const cx = (tb.x0 + tb.x1) / 2, cy = (tb.y0 + tb.y1) / 2;
    if (cx > db.x0 && cx < db.x1 && cy > db.y0 && cy < db.y1 && !inside(db, tb, 4) && area(db) > area(tb)) {
      const f = Math.min(1, (db.x1 - db.x0) * .84 / (tb.x1 - tb.x0), (db.y1 - db.y0) * .8 / (tb.y1 - tb.y0));
      if (f < .98) { shrink(t, f); const nb = box(t); move(t, cx - (nb.x0 + nb.x1) / 2, cy - (nb.y0 + nb.y1) / 2); FIXED.push(k + 1); }
    }
  }
  // attachments: text centred in a drawing, and arrows (qa=skip) near a drawing, travel with that drawing
  const drawingsAll = nodes.filter(n => !isText(n));
  const attached = new Map(), attachedTo = new Set();
  const nearest = (b, maxD) => { let best = null, bd = maxD;
    for (const d of drawingsAll) { const db = box(d); if (!db) continue;
      const dx = Math.max(db.x0 - b.x1, b.x0 - db.x1, 0), dy = Math.max(db.y0 - b.y1, b.y0 - db.y1, 0), dist = Math.hypot(dx, dy);
      if (dist < bd) { bd = dist; best = d; } }
    return best; };
  for (const t of nodes.filter(isText)) { const tb = box(t); if (!tb) continue; const cx = (tb.x0 + tb.x1) / 2, cy = (tb.y0 + tb.y1) / 2;
    const d = drawingsAll.find(d => { const db = box(d); return db && cx > db.x0 && cx < db.x1 && cy > db.y0 && cy < db.y1 && area(db) > area(tb); });
    if (d) { (attached.get(d) || attached.set(d, []).get(d)).push(t); attachedTo.add(t); } }
  for (const a of [...sc.content.children].filter(n => n.dataset.qa === 'skip' && !n.classList.contains('acc'))) {
    const ab = box(a); const d = ab && nearest(ab, 160 * U); if (d) (attached.get(d) || attached.set(d, []).get(d)).push(a); }
  const baseMove = move;
  const moveAll = (n, dx, dy) => { baseMove(n, dx, dy); for (const c of attached.get(n) || []) baseMove(c, dx, dy); };
  // 2) keep everything inside the safe area
  for (const n of nodes) if (!attachedTo.has(n)) { const b0 = box(n); if (fitBounds(n)) { const b1 = box(n);
    for (const c of attached.get(n) || []) baseMove(c, (b1.x0 + b1.x1 - b0.x0 - b0.x1) / 2, (b1.y0 + b1.y1 - b0.y0 - b0.y1) / 2); FIXED.push(k + 1); } }
  // 3) resolve overlaps: place items in reading order; move a colliding item to the nearest free spot, shrink if there is none
  const placed = [];
  // big items keep their place; smaller ones move out of their way
  const order = nodes.filter(n => !attachedTo.has(n)).map(n => ({ n, b: box(n) })).filter(o => o.b).sort((a, c) => area(c.b) - area(a.b));
  const container = (o, others) => others.some(p => { const cx = (o.b.x0 + o.b.x1) / 2, cy = (o.b.y0 + o.b.y1) / 2;
    return (cx > p.b.x0 && cx < p.b.x1 && cy > p.b.y0 && cy < p.b.y1 && area(p.b) > 2 * area(o.b)) || inside(p.b, o.b); });
  for (const o of order) {
    for (let tries = 0; tries < 4; tries++) {
      o.b = box(o.n);
      const clash = placed.filter(p => hit(p.b, o.b) && !container(o, [p]) && !container(p, [o]));
      if (!clash.length) break;
      const cands = [];
      for (const p of clash) {
        cands.push([0, p.b.y1 + gap - o.b.y0], [0, p.b.y0 - gap - o.b.y1], [p.b.x1 + gap - o.b.x0, 0], [p.b.x0 - gap - o.b.x1, 0]);
      }
      const ok = cands.map(([dx, dy]) => ({ dx, dy, d: Math.hypot(dx, dy) })).sort((a, c) => a.d - c.d).find(({ dx, dy }) => {
        const nb = { x0: o.b.x0 + dx, x1: o.b.x1 + dx, y0: o.b.y0 + dy, y1: o.b.y1 + dy };
        return nb.x0 >= M && nb.x1 <= W - M && nb.y0 >= M && nb.y1 <= H - M && !placed.some(p => hit(p.b, nb) && !container({ b: nb }, [p]));
      });
      if (ok) { moveAll(o.n, ok.dx, ok.dy); FIXED.push(k + 1); break; }
      shrink(o.n, .85); FIXED.push(k + 1);
    }
    o.b = box(o.n); placed.push(o);
  }
});
if (FIXED.length) console.info(`HandDrawn: layout fixed automatically in scene(s) ${[...new Set(FIXED)].join(', ')}`);

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
// Element → stage coordinates from the transform attributes only (independent of on-screen size,
// so it also works in hidden, zero-size or scaled preview frames such as Gemini Canvas).
function localToStage(el) {
  let m = new DOMMatrix();
  for (let n = el; n && n !== stage; n = n.parentNode) {
    const c = n.transform && n.transform.baseVal && n.transform.baseVal.consolidate();
    if (c) { const k = c.matrix; m = new DOMMatrix([k.a, k.b, k.c, k.d, k.e, k.f]).multiply(m); }
  }
  return m;
}
// Pass 1: measure every stroke once.
S.forEach(sc => {
  let prev = null;
  for (const s of sc.list) {
    s.M = localToStage(s.el);
    if (s.kind === 't') {
      s.bb = s.el.getBBox();
      if (!(s.bb.width > 0)) { const n = s.el.textContent.length, fs = +s.el.getAttribute('font-size');   // hidden frame: estimate
        s.bb = { x: +s.el.getAttribute('x') - n * fs * .28, y: +s.el.getAttribute('y') - fs * .8, width: n * fs * .56, height: fs }; }
      const id = 'clip' + (clipId++), cp = el('clipPath', { id, clipPathUnits: 'userSpaceOnUse' });
      s.rect = el('rect', { x: s.bb.x - 12, y: s.bb.y - 30, width: 0, height: s.bb.height + 60 });
      cp.appendChild(s.rect); defs.appendChild(cp); s.el.setAttribute('clip-path', `url(#${id})`);
      s.base = clamp(s.bb.width * 0.0026, .4, 1.4);
    } else {
      s.len = s.el.getTotalLength(); if (!(s.len > 0)) s.len = 200;
      s.el.style.strokeDasharray = `${s.len} ${s.len + 2}`;
      s.base = clamp(s.len * PEN, .1, .85);
    }
    s.p0 = pointOn(s, 0); s.p1 = pointOn(s, 1);
    s.travel = prev ? 0.04 + Math.min(.22, Math.hypot(s.p0.x - prev.p1.x, s.p0.y - prev.p1.y) / 5000) : 0;
    prev = s;
  }
});
// Pass 2: lay out time. speed < 1 draws faster; extra = seconds added to every scene's hold.
function layoutTime(speed, extra) {
  let cursor = 0;
  S.forEach((sc, k) => {
    sc.start = cursor; cursor += 0.45;
    for (const s of sc.list) {
      cursor += s.travel * speed; s.dur = Math.max(.06, s.base * speed);
      s.start = cursor; s.end = cursor + s.dur; cursor = s.end;
    }
    sc.drawEnd = cursor; sc.narrStart = sc.start + 0.3;
    sc.holdEnd = Math.max(cursor + 0.5 + Math.max(0.7, Math.max(1.2, sc.hold) + extra), sc.narrStart + (NARR[k] || 0) + 0.7);
    sc.flipEnd = k < S.length - 1 ? sc.holdEnd + FLIP : sc.holdEnd;
    cursor = sc.flipEnd + 0.1;
  });
  return S[S.length - 1].holdEnd + 0.3;
}
let TOTAL = layoutTime(1, 0);
const WARN = [];                // timing / quality warnings, shown under the preview and exported as window.QA
const fitTo = (goal, minSpeed, minHoldExtra) => {   // stretch holds, or draw faster / shorten holds down to the limits
  const bisect = (fn, lo, hi) => { for (let i = 0; i < 30; i++) { const m = (lo + hi) / 2; if (fn(m) < goal) lo = m; else hi = m; } return hi; };
  if (TOTAL < goal) return layoutTime(1, bisect(x => layoutTime(1, x), 0, goal));
  let t = layoutTime(Math.max(minSpeed, bisect(k => layoutTime(k, 0), minSpeed, 1)), 0);
  if (t > goal + .05 && minHoldExtra < 0) t = layoutTime(minSpeed, bisect(x => layoutTime(minSpeed, x), minHoldExtra, 0));
  return t;
};
const D = VIDEO.duration;
if (Array.isArray(D)) {         // range [min, max]: natural pace; only stretch to min, or tighten gently (≥ 0.75× speed) to reach max
  const [lo, hi] = D;
  if (TOTAL < lo) TOTAL = fitTo(lo, 1, 0);
  else if (TOTAL > hi) TOTAL = fitTo(hi, .75, -0.6);
  if (TOTAL > hi + 1) WARN.push({ scene: 0, type: 'durasi', msg: `Isi butuh ${TOTAL.toFixed(0)} dtk, lebih dari batas ${hi} dtk: kurangi adegan/poin atau pilih rentang lebih panjang` });
} else if (D) {                 // exact length (legacy): may draw fast; warns when it has to
  TOTAL = fitTo(D, .3, -1.5);
  if (Math.abs(TOTAL - D) > 1) WARN.push({ scene: 0, type: 'durasi', msg: `Diminta ${D} dtk tapi adegan butuh ${TOTAL.toFixed(1)} dtk` });
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
// ---------- quality check: overlaps, safe area, long text, small main drawing, busy scenes ----------
function stageBox(node) {
  try {
    const b = node.getBBox(); if (!(b.width > 0 || b.height > 0)) return null;
    const M = localToStage(node), pts = [[b.x, b.y], [b.x + b.width, b.y], [b.x, b.y + b.height], [b.x + b.width, b.y + b.height]].map(([x, y]) => new DOMPoint(x, y).matrixTransform(M));
    const xs = pts.map(q => q.x), ys = pts.map(q => q.y);
    return { x0: Math.min(...xs), y0: Math.min(...ys), x1: Math.max(...xs), y1: Math.max(...ys) };
  } catch (e) { return null; }
}
{
  const M0 = 40 * U, pad = 8, inside = (a, c) => c.x0 >= a.x0 - pad && c.x1 <= a.x1 + pad && c.y0 >= a.y0 - pad && c.y1 <= a.y1 + pad;
  S.forEach((sc, k) => {
    const name = n => n.tagName === 'text' ? `teks "${n.textContent.slice(0, 22)}"` : 'gambar';
    const boxes = [...sc.content.children].filter(n => !n.classList.contains('acc') && n.dataset.qa !== 'skip')
      .map(n => ({ n, b: stageBox(n), name: name(n) })).filter(o => o.b);
    for (const o of boxes) {
      const b = o.b;
      if (b.x0 < M0 || b.y0 < M0 || b.x1 > W - M0 || b.y1 > H - M0) WARN.push({ scene: k + 1, type: 'batas', msg: `${o.name} keluar area aman` });
      if (o.n.dataset.shrink && +o.n.dataset.shrink < .7) WARN.push({ scene: k + 1, type: 'teks', msg: `${o.name} terlalu panjang (diperkecil ${Math.round((1 - o.n.dataset.shrink) * 100)}%)` });
    }
    for (let i = 0; i < boxes.length; i++) for (let j = i + 1; j < boxes.length; j++) {
      const a = boxes[i].b, c = boxes[j].b;
      if (inside(a, c) || inside(c, a)) continue;                        // text inside a bubble/button is intended
      const ix = Math.min(a.x1, c.x1) - Math.max(a.x0, c.x0), iy = Math.min(a.y1, c.y1) - Math.max(a.y0, c.y0);
      if (ix > 12 && iy > 12 && ix * iy > .12 * Math.min((a.x1 - a.x0) * (a.y1 - a.y0), (c.x1 - c.x0) * (c.y1 - c.y0)))
        WARN.push({ scene: k + 1, type: 'tabrakan', msg: `${boxes[i].name} bertabrakan dengan ${boxes[j].name}` });
    }
    const drawings = boxes.filter(o => o.n.tagName === 'g');
    const bigText = boxes.some(o => o.n.tagName === 'text' && +o.n.getAttribute('font-size') >= 180 * U);
    if (drawings.length && !bigText && Math.max(...drawings.map(o => Math.max((o.b.x1 - o.b.x0) / W, (o.b.y1 - o.b.y0) / H))) < (drawings.length >= 3 ? .18 : .3))
      WARN.push({ scene: k + 1, type: 'kecil', msg: 'gambar utama terlalu kecil (perbesar sampai ±50% lebar/tinggi layar)' });
    if (sc.list.length > (NARROW ? 40 : 50)) WARN.push({ scene: k + 1, type: 'ramai', msg: `${sc.list.length} goresan — terlalu ramai, sederhanakan` });
  });
  WARN.forEach(w => console.warn(`HandDrawn QA${w.scene ? ' adegan ' + w.scene : ''}: ${w.msg}`));
}
window.QA = WARN;
if (!isFinite(TOTAL)) {   // should never happen; show it instead of a blank page
  document.querySelector('.frame').insertAdjacentHTML('beforeend', '<p style="color:#b00;font:14px sans-serif;padding:12px">Animation timing could not be computed (TOTAL = ' + TOTAL + ').</p>');
  throw new Error('HandDrawn: TOTAL is not finite');
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
if (WARN.length) {   // show quality warnings under the preview (never in the rendered video)
  const box = document.createElement('div'); box.className = 'qa';
  box.textContent = 'Periksa: ' + WARN.map(w => `${w.scene ? 'adegan ' + w.scene + ' — ' : ''}${w.msg}`).join(' · ');
  document.querySelector('.wrap').appendChild(box);
}
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
