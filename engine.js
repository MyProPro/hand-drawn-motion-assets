/* hand-drawn-motion engine — whiteboard animation (hand, page flip, timing, look).
 * Use: load this file with a script tag, then call HandDrawn.run({ title, video, look, narr, scenes }). See SKILL.md.
 * Hosted copy: https://cdn.jsdelivr.net/gh/MyProPro/hand-drawn-motion-assets@v1.2/engine.js
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
const VIDEO = Object.assign({ ratio: '16:9', duration: null }, cfg.video);
// look.style: 'whiteboard' (default) or 'sand' (sand art on a lightbox: finger carves light into dark sand, palm sweeps between scenes)
const SAND = ((cfg.look && cfg.look.style) || cfg.style) === 'sand';
// look.style 'marker': children's-book look — white paper, coloured felt-tip lines (P(..., colour) / paint()), marker fills, the pen takes the colour it draws with
const MARKER = ((cfg.look && cfg.look.style) || cfg.style) === 'marker';   // ratio '16:9' | '9:16' | '1:1'; duration in seconds (null = natural pace)
const SIZES = { '16:9': [1920, 1080], '9:16': [1080, 1920], '1:1': [1080, 1080] };
const [W, H] = SIZES[VIDEO.ratio] || SIZES['16:9'];
const PACE = VIDEO.pace === 'slow' ? 1.6 : 1;   // video.pace: 'slow' = calm drawing for stories
const FPS = 30, PEN = 0.0009, AS = (VIDEO.ratio === '16:9' ? 1 : 0.85) * (SAND ? 0.8 : 1);   // AS = arm scale
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
const HAND_POINT = 'ARM_HAND';   // pointing-hand photo for the sand style; embedded by scripts/build.py, else loaded from ARM_URL
if (MARKER) {   // white paper, felt-tip ink: slightly see-through so overlapping strokes get darker, like real markers
  stage.querySelector(':scope > rect').setAttribute('fill', '#FFFFFF');
  document.querySelector('.frame').style.background = '#FFFFFF';
  document.querySelector('.looks').style.display = 'none';   // colours are set per object in the page
  const st = document.createElement('style');
  st.textContent = '.ink{stroke-opacity:.92;mix-blend-mode:multiply} .acc{mix-blend-mode:multiply}';
  document.head.appendChild(st);
}
if (SAND) {   // lightbox + sand instead of paper, finger photo instead of the pen arm, sweep instead of page flip
  defs.insertAdjacentHTML('beforeend', `
  <radialGradient id="sandLight" cx="50%" cy="46%" r="72%"><stop offset="0" stop-color="#ffe4a6"/><stop offset=".45" stop-color="#f1b058"/><stop offset="1" stop-color="#6e360e"/></radialGradient>
  <filter id="sandGrain" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">
    <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="3" result="g"/>
    <feTurbulence type="fractalNoise" baseFrequency="0.0035" numOctaves="2" seed="8" result="p"/>
    <feComposite in="g" in2="p" operator="arithmetic" k2="0.55" k3="0.4" result="n"/>
    <feColorMatrix in="n" type="matrix" values="0 0 0 0 0.16  0 0 0 0 0.095  0 0 0 0 0.035  0 0 0 -1.4 1.6"/>
  </filter>
  <filter id="sandCarve" filterUnits="userSpaceOnUse" x="-100" y="-100" width="${W + 200}" height="${H + 200}" color-interpolation-filters="sRGB">
    <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" seed="5" result="t"/>
    <feDisplacementMap in="SourceAlpha" in2="t" scale="10" xChannelSelector="R" yChannelSelector="G" result="a"/>
    <feGaussianBlur in="a" stdDeviation="1.3" result="ab"/>
    <feMorphology in="ab" operator="dilate" radius="7" result="dil"/>
    <feGaussianBlur in="dil" stdDeviation="6" result="rimA"/>
    <feFlood flood-color="#0d0602" flood-opacity=".6"/><feComposite in2="rimA" operator="in" result="rim"/>
    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" seed="9" result="gr"/>
    <feColorMatrix in="gr" type="matrix" values="0 0 0 0 1  0 0 0 0 .88  0 0 0 0 .6  0 0 0 -.8 1.3" result="litc"/>
    <feComposite in="litc" in2="ab" operator="in" result="lit"/>
    <feMerge><feMergeNode in="rim"/><feMergeNode in="lit"/></feMerge>
  </filter>
  <filter id="sandGlow" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="70"/></filter>
  <filter id="sandPileBlur" x="-60%" y="-10%" width="220%" height="120%"><feGaussianBlur stdDeviation="28"/></filter>
  <filter id="sandDust" x="0" y="0" width="100%" height="100%">
    <feTurbulence type="fractalNoise" baseFrequency="1.3" numOctaves="1" seed="11"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0.12  0 0 0 0 0.07  0 0 0 0 0.03  0 0 0 11 -6.6"/>
  </filter>
  <filter id="handShade" x="-20%" y="-20%" width="150%" height="150%" color-interpolation-filters="sRGB">
    <feColorMatrix type="matrix" values="0.86 0 0 0 0.02  0 0.8 0 0 0.01  0 0 0.72 0 0  0 0 0 1 0" result="lit"/>
    <feDropShadow in="lit" dx="40" dy="55" stdDeviation="26" flood-color="#0b0502" flood-opacity="0.55"/>
  </filter>`);
  const rects = stage.querySelectorAll(':scope > rect');
  rects[0].setAttribute('fill', 'url(#sandLight)');
  rects[0].insertAdjacentHTML('afterend', `<rect width="${W}" height="${H}" filter="url(#sandGrain)"/>`);
  rects[rects.length - 1].setAttribute('filter', 'url(#sandDust)');
  flap.style.display = flapShadow.style.display = 'none';
  flipfx.insertAdjacentHTML('beforeend', '<polygon id="sandPile" fill="#2b190b" opacity=".85" filter="url(#sandPileBlur)"/>');
  document.querySelector('.frame').style.background = '#2a1a0c';
  document.querySelector('.looks').style.display = 'none';
  hand.setAttribute('filter', 'url(#handShade)'); document.getElementById('arm').setAttribute('filter', 'url(#handShade)');
  hand.firstElementChild.setAttribute('transform', 'translate(-116 -120)');
  document.getElementById('armBaseImg').setAttribute('href', HAND_POINT.length > 100 ? 'data:image/webp;base64,' + HAND_POINT : `${ARM_URL}/hand_point.webp`);
  { const st = document.createElement('style'); st.textContent = '.acc{opacity:0}'; document.head.appendChild(st); }   // no highlighter in sand: the glow behind the picture does that job
}
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
const P = (d, w = 4.5, seq, c) => ({ t: 'p', d, w, seq, c });   // c = line colour (default: look.ink)
const A = (d, w = 16, seq, c) => ({ t: 'a', d, w, seq, c });   // c = crayon colour (default: the yellow accent)
// at('river', item, …): these items start drawing when the narrator says [river] (see scene.say)
// paint('#hex', items): give every line and text in these items (and their groups) that colour, unless they already have one
const paint = (c, ...items) => items.flat().map(function rec(it) { return it.t === 'g' ? { ...it, items: it.items.map(rec) } : (it.t === 'p' || it.t === 't') && !it.c ? { ...it, c } : it; });
// grass(x0, x1, y, colour): a row of short blades, drawn left to right
const grass = (x0, x1, y, c = '#43A047', h = 46, seed = 3) => { const R = rng(seed); let d = '';
  for (let x = x0; x < x1; x += 13 + R() * 9) { const hh = h * (.6 + R() * .5), lean = (R() - .4) * 22; d += ` M${f(x)},${f(y + R() * 8)} q${f(lean * .3)},${f(-hh * .6)} ${f(lean)},${f(-hh)}`; }
  return { t: 'g', x: 0, y: 0, s: 1, r: 0, act: 'wave', qa: 'bg', items: [{ t: 'p', d: d.trim(), w: 6, c }] }; };   // grass always waves
// act('hop', G(...)): the drawing comes alive once it is finished — hop | bounce | breathe | sway | shiver | droop | bob | pulse | nod | float
//   | ripple (water) | wave (grass, plants) | wiggle (small things on the ground) | flutter (flags, leaves) | twinkle (sparkles) | none (meant to stay still)
const act = (name, ...items) => items.flat().map(it => ({ ...(it.t === 'g' ? it : { t: 'g', x: 0, y: 0, s: 1, r: 0, items: [it] }), act: name }));
// journey(G(...), [{ at: 'one', x, y }, …]): the drawing jumps (arc) to stage position x, y when the narrator says [one] —
// one character travelling through the scene instead of being drawn twice. Options per step: h (arc height), d (seconds), tilt.
const journey = (item, steps) => ({ ...item, path: steps.map(st => ({ ...(st.walk ? { h: 0, tilt: 0 } : { h: 110, d: .65, tilt: 10 }), ...st, at: String(st.at).toLowerCase() })) });
// mirror(G(...)): the same drawing facing left (characters face right by default)
const mirror = (...items) => items.flat().map(it => ({ ...(it.t === 'g' ? it : { t: 'g', x: 0, y: 0, s: 1, r: 0, items: [it] }), flip: !(it.flip) }));
// speaks([2, 4], G(...)): the character's mouth moves while sentences 2 and 4 of the scene's say are spoken
const speaks = (lines, ...items) => items.flat().map(it => ({ ...it, talk: lines }));
// gone('yum', ...items): these items are wiped away when the narrator says [yum] (e.g. an old face before a new expression is drawn)
const gone = (cue, ...items) => items.flat().map(it => ({ ...it, gone: String(cue).toLowerCase() }));
// crayon(shape, colour): colour a closed shape with crayon hatching that stays inside its outline
const crayon = (shape, c = '#F2C94C', seq, w, sp, kind = 'hatch', ring = false) => ({ t: 'a', d: shape, w: w ?? (MARKER ? 22 : 13), seq, c, fill: true, sp: sp ?? (MARKER ? 17 : 22), kind, ring });   // ring: inner shapes are holes (a mane around a face, a donut)   // kind 'hatch' | 'scribble' (looping, for leaves and bushes)
const at = (cue, ...items) => items.flat().map(it => ({ ...it, cue: String(cue).toLowerCase() }));
const T = (s, x, y, size, font = 'body', seq, maxW, c) => ({ t: 't', s, x, y, size, font, seq, maxW, c });   // text shrinks to fit maxW (default: canvas width − 160)
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
  // ---- nature & weather ----
  moon: sd => [A(scrib(-30, 0, 70, 150, 6, sd), 22), P('M30,-112 C-60,-104 -104,-24 -84,40 C-64,104 20,124 72,92 C8,82 -32,32 -26,-18 C-20,-68 6,-98 30,-112 Z', 5),
    P('M70,-70 Q74,-56 88,-52 Q74,-48 70,-34 Q66,-48 52,-52 Q66,-56 70,-70', 3.5)],
  cloud: sd => [A(scrib(0, 10, 200, 80, 8, sd), 22), P(cloud(0, 0, 290, 160, 9, sd + 1), 5)],
  rain: sd => [P(cloud(0, -50, 270, 140, 9, sd), 5), A(scrib(0, -50, 180, 60, 7, sd + 1), 22),
    P('M-70,50 L-84,92 M-10,50 L-24,92 M50,50 L36,92 M-40,104 L-54,146 M20,104 L6,146 M80,104 L66,146', 4.5)],
  snow: sd => [P(cloud(0, -50, 270, 140, 9, sd), 5),
    ...[[-70, 70], [0, 110], [70, 70], [-40, 140], [40, 140]].map(([x, y]) => P(`M${x - 14},${y} L${x + 14},${y} M${x - 9},${y - 12} L${x + 9},${y + 12} M${x + 9},${y - 12} L${x - 9},${y + 12}`, 3.5))],
  rainbow: sd => [A('M-105,70 C-105,-75 105,-75 105,70', 22), P('M-145,70 C-145,-125 145,-125 145,70', 5), P('M-105,70 C-105,-75 105,-75 105,70', 4.5),
    P('M-68,70 C-68,-30 68,-30 68,70', 4.5), P(cloud(-125, 78, 90, 46, 6, sd), 4), P(cloud(125, 78, 90, 46, 6, sd + 1), 4)],
  wind: () => [P('M-130,-40 L60,-40 C110,-40 112,-104 70,-104 C40,-104 38,-72 54,-62', 5), P('M-140,10 L110,10 C160,10 160,74 118,74 C90,74 88,46 102,38', 5), P('M-120,60 L30,60', 5)],
  fire: sd => [A('M0,30 C26,50 30,90 0,104 C-30,90 -26,50 0,30 Z', 20),
    P('M0,-124 C40,-74 92,-32 82,40 C74,100 32,122 0,122 C-32,122 -74,100 -82,40 C-88,-10 -52,-30 -40,-72 C-20,-42 -10,-44 0,-124 Z', 5),
    P('M0,10 C24,40 34,76 18,98 M0,10 C-24,40 -34,76 -18,98', 3.5)],
  flower: sd => [A(scrib(0, -50, 60, 60, 5, sd), 22), P(circ(0, -50, 30, sd), 5),
    ...[0, 60, 120, 180, 240, 300].map((a, i) => P(circ(Math.cos(a * Math.PI / 180) * 60, -50 + Math.sin(a * Math.PI / 180) * 60, 28, sd + i + 1), 4.5)),
    P('M0,40 C-8,70 8,100 0,130', 5), P('M0,92 C26,64 66,70 78,80 C58,106 22,106 0,92', 4)],
  mountain: sd => [A(scrib(40, 30, 120, 90, 6, sd), 22), P('M-160,100 L-60,-50 L-14,14 L50,-112 L160,100 Z', 5),
    P('M30,-74 L50,-112 L70,-74 Q60,-62 50,-72 Q40,-62 30,-74', 4), P('M-160,100 L160,100', 5)],
  fish: sd => [A(scrib(-10, 0, 150, 60, 7, sd), 22), P('M-110,0 C-60,-72 50,-72 104,0 C50,72 -60,72 -110,0', 5), P('M-110,0 L-162,-52 L-150,0 L-162,52 Z', 5),
    P(circ(58, -14, 9, sd + 1), 5), P('M26,-38 Q10,0 26,38', 4)],
  apple: sd => [A(scrib(0, 20, 150, 120, 7, sd), 24), P('M0,-60 C-40,-92 -112,-72 -112,10 C-112,82 -50,122 0,102 C50,122 112,82 112,10 C112,-72 40,-92 0,-60', 5),
    P('M0,-60 Q4,-92 20,-114', 5), P('M12,-88 C32,-122 72,-112 82,-102 C62,-80 32,-78 12,-88 Z', 4)],
  // ---- things ----
  cup: sd => [A(scrib(0, 20, 130, 110, 7, sd), 22), P('M-90,-56 L90,-56 L70,90 L-70,90 Z', 5), P('M86,-26 C140,-26 140,44 76,44', 5),
    P('M-30,-86 Q-48,-108 -30,-130 M20,-86 Q2,-108 20,-130', 4), P('M-124,110 Q0,130 124,110', 5)],
  gift: sd => [A(scrib(0, 40, 200, 120, 8, sd), 24), P('M-110,-30 L110,-30 L110,112 L-110,112 Z', 5), P('M-126,-72 L126,-72 L126,-30 L-126,-30 Z', 5),
    P('M-14,-72 L-14,112 M14,-72 L14,112', 4), P('M0,-72 C-30,-124 -92,-114 -62,-74', 4.5), P('M0,-72 C30,-124 92,-114 62,-74', 4.5)],
  rocket: sd => [A('M-24,74 Q0,140 24,74', 20), P('M0,-142 C50,-92 62,-12 50,62 L-50,62 C-62,-12 -50,-92 0,-142 Z', 5), P(circ(0, -42, 24, sd), 4.5),
    P('M-52,18 L-92,92 L-50,72 M52,18 L92,92 L50,72', 5), P('M-26,74 Q0,140 26,74', 4.5)],
  plane: () => [P('M-150,-10 C-60,-26 90,-26 142,-6 C162,4 142,18 120,20 L-132,20 Z', 5), P('M-20,4 L40,92 L72,92 L42,4', 5),
    P('M-132,-6 L-152,-72 L-120,-72 L-90,-16', 5), P('M40,-8 L50,-8 M70,-8 L80,-8 M100,-6 L108,-6', 5)],
  bus: sd => [A(scrib(0, -60, 220, 30, 8, sd), 18), P(R_(300, 170, 22), 5), P('M-150,-10 L150,-10', 4), P('M-80,-85 L-80,-10 M0,-85 L0,-10 M80,-85 L80,-10', 4),
    P(circ(-82, 92, 28, sd + 1), 5), P(circ(82, 92, 28, sd + 2), 5)],
  bike: sd => [P(circ(-92, 40, 60, sd), 5), P(circ(92, 40, 60, sd + 1), 5), P('M-92,40 L-20,-40 L60,-40 L92,40 M-20,-40 L10,40 L60,-40 M10,40 L-92,40', 4.5),
    P('M-38,-58 L-4,-58', 6), P('M60,-40 L50,-82 L82,-88', 5)],
  globe: sd => [A(scrib(-30, -30, 80, 70, 6, sd), 22), P(circ(0, 0, 112, sd + 1), 5), P(circ(0, 0, 50, sd + 2, 112), 4), P('M-112,0 L112,0', 4),
    P('M-96,-56 Q0,-40 96,-56 M-96,56 Q0,72 96,56', 3.5)],
  pin: sd => [A(scrib(0, -40, 110, 110, 7, sd), 24), P('M0,124 C-30,62 -92,12 -92,-40 C-92,-102 -50,-132 0,-132 C50,-132 92,-102 92,-40 C92,12 30,62 0,124 Z', 5),
    P(circ(0, -40, 32, sd + 1), 4.5)],
  map: sd => [P('M-150,-90 L-50,-120 L50,-90 L150,-120 L150,90 L50,120 L-50,90 L-150,120 Z', 5), P('M-50,-120 L-50,90 M50,-90 L50,120', 3.5),
    P('M-110,64 Q-60,4 0,24 Q60,44 96,-46', 3.5), P('M82,-60 L112,-30 M112,-60 L82,-30', 5)],
  mail: sd => [A(scrib(0, 30, 200, 80, 8, sd), 22), P(R_(280, 180, 16), 5), P('M-140,-88 L0,22 L140,-88', 5)],
  camera: sd => [P(R_(280, 180, 24), 5), P('M-60,-90 L-40,-122 L40,-122 L60,-90', 5), A(scrib(0, 10, 60, 60, 5, sd), 20),
    P(circ(0, 10, 58, sd + 1), 5), P(circ(0, 10, 30, sd + 2), 4), P(circ(100, -54, 9, sd + 3), 4)],
  music: sd => [A('M-46,-86 L94,-116', 20), P(circ(-72, 72, 28, sd + 1, 21), 5), P(circ(68, 42, 28, sd + 2, 21), 5),
    P('M-46,68 L-46,-100 M94,38 L94,-130', 5), P('M-46,-100 L94,-130 M-46,-70 L94,-100', 8)],
  cart: sd => [A(scrib(10, 0, 190, 70, 7, sd), 22), P('M-152,-92 L-112,-92 L-82,50 L100,50 L132,-50 L-102,-50', 5),
    P(circ(-62, 92, 18, sd + 1), 5), P(circ(80, 92, 18, sd + 2), 5)],
  bag: sd => [A(scrib(0, 50, 170, 110, 7, sd), 22), P('M-100,-40 L100,-40 L122,124 L-122,124 Z', 5), P('M-50,-40 C-50,-112 50,-112 50,-40', 5)],
  key: sd => [A(scrib(-80, 0, 70, 70, 6, sd), 22), P(circ(-80, 0, 50, sd + 1), 5), P(circ(-80, 0, 16, sd + 2), 4), P('M-30,0 L132,0 M92,0 L92,40 M122,0 L122,30', 6)],
  shield: sd => [A(scrib(0, 0, 150, 160, 7, sd), 22), P('M0,-132 C40,-102 80,-98 112,-98 C112,20 72,92 0,132 C-72,92 -112,20 -112,-98 C-80,-98 -40,-102 0,-132 Z', 5),
    P('M-42,0 L-8,34 L52,-38', 7)],
  flag: sd => [A('M-90,-80 C-40,-104 20,-60 100,-84', 22), P('M-100,-132 L-100,132', 6), P('M-100,-122 C-40,-152 20,-92 112,-122 L112,10 C20,40 -40,-20 -100,10', 5)],
  document: sd => [P('M-92,-132 L50,-132 L102,-80 L102,132 L-92,132 Z', 5), P('M50,-132 L50,-80 L102,-80', 4.5),
    A('M-56,-30 L60,-30', 22), P('M-56,-30 L60,-30 M-56,16 L60,16 M-56,62 L20,62', 4)],
  folder: sd => [A(scrib(0, 30, 220, 100, 8, sd), 22), P('M-142,-82 L-62,-82 L-40,-56 L142,-56 L142,102 L-142,102 Z', 5), P('M-142,-30 L142,-30', 3.5)],
  pie: sd => [A('M0,0 L0,-104 C60,-104 100,-60 92,52 Z', 26), P(circ(0, 0, 112, sd), 5), P('M0,0 L0,-112 M0,0 L97,56 M0,0 L-90,66', 5)],
  // ---- people & feelings ----
  smile: sd => [A(scrib(0, 0, 150, 150, 8, sd), 24), P(circ(0, 0, 112, sd + 1), 5), P(circ(-38, -30, 9, sd + 2), 6), P(circ(38, -30, 9, sd + 3), 6), P('M-56,30 Q0,88 56,30', 5)],
  people: sd => [A(scrib(0, 60, 160, 60, 7, sd), 20), P(circ(-100, -30, 30, sd), 5), P(circ(100, -30, 30, sd + 1), 5), P(circ(0, -56, 38, sd + 2), 5),
    P('M-150,100 C-150,20 -50,20 -50,100 M50,100 C50,20 150,20 150,100', 5), P('M-60,120 C-60,0 60,0 60,120', 5)],
  thumbsUp: sd => [A(scrib(30, 30, 130, 120, 7, sd), 22), P('M-120,-6 L-66,-6 L-66,120 L-120,120 Z', 5),
    P('M-66,4 C-26,-18 -6,-60 -6,-112 C26,-112 38,-80 28,-30 L102,-30 C132,-30 132,10 112,14 C132,26 126,54 106,58 C122,68 116,96 94,98 C106,112 92,126 72,126 L-66,112', 5)],
  eye: sd => [P('M-142,0 C-80,-82 80,-82 142,0 C80,82 -80,82 -142,0 Z', 5), A(scrib(0, 0, 60, 60, 5, sd), 20), P(circ(0, 0, 46, sd + 1), 4.5), P(circ(0, 0, 18, sd + 2), 7)],
  brain: sd => [A(scrib(0, 0, 200, 130, 8, sd), 22), P(cloud(0, 0, 270, 200, 11, sd + 1), 5), P('M0,-94 C-24,-44 24,-4 0,94', 4),
    P('M-90,-20 Q-60,-40 -40,-10 M40,10 Q60,-20 90,0 M-80,40 Q-50,30 -40,60 M50,50 Q70,30 90,50', 3.5)],
  // ---- tech, work & school ----
  robot: sd => [A(scrib(0, 0, 150, 110, 7, sd), 22), P(R_(210, 170, 26), 5), P(circ(-46, -18, 18, sd + 1), 5), P(circ(46, -18, 18, sd + 2), 5),
    P('M-44,40 L44,40', 6), P('M0,-85 L0,-118', 5), P(circ(0, -130, 12, sd + 3), 5), P('M-105,-24 L-128,-24 L-128,24 L-105,24 M105,-24 L128,-24 L128,24 L105,24', 5)],
  video: sd => [A(scrib(0, 0, 200, 120, 8, sd), 22), P(R_(280, 190, 30), 5), P('M-32,-52 L52,0 L-32,52 Z', 5.5)],
  mic: sd => [A(scrib(0, -50, 60, 120, 6, sd), 20), P('M-40,-62 C-40,-142 40,-142 40,-62 L40,10 C40,62 -40,62 -40,10 Z', 5),
    P('M-72,0 C-72,82 72,82 72,0', 5), P('M0,64 L0,122 M-52,122 L52,122', 5)],
  headphones: sd => [P('M-100,40 C-100,-142 100,-142 100,40', 6), A('M-112,40 L-80,40 M80,40 L112,40', 30),
    P('M-122,18 L-70,18 L-70,112 L-122,112 Z', 5), P('M122,18 L70,18 L70,112 L122,112 Z', 5)],
  school: sd => [A('M-110,-40 L0,-86 L110,-40 L0,4 Z', 22), P('M-152,-40 L0,-102 L152,-40 L0,22 Z', 5), P('M-90,-14 L-90,62 C-60,94 60,94 90,62 L90,-14', 5),
    P('M152,-40 L152,44', 4), P(circ(152, 54, 10, sd), 4)],
  pill: () => [G(0, 0, 1, -32, [A('M-110,0 C-110,-56 -50,-56 0,-56 L0,56 C-50,56 -110,56 -110,0 Z', 24), P(R_(260, 112, 56), 5), P('M0,-56 L0,56', 5)])],
  link: () => [G(-56, 0, 1, -32, [P(R_(170, 86, 43), 6)]), G(56, 0, 1, -32, [P(R_(170, 86, 43), 6)])],
  brush: sd => [A('M-130,130 C-120,90 -90,70 -66,86 C-50,100 -70,130 -130,130 Z', 22), P('M-130,130 C-120,90 -90,70 -66,86 C-50,100 -70,130 -130,130 Z', 5),
    P('M-70,84 L-50,64 L-30,84 L-50,104 Z', 5), P('M-50,64 L110,-120 L130,-100 L-30,84', 5)],
  idea: sd => [G(0, 10, 1.9, 0, lightbulb(sd))], heart: sd => [G(0, 30, 2.3, 0, heart(sd))],
  question: sd => [G(0, 0, 2.2, 0, question(sd))], bell: sd => [G(0, 0, 2, 0, bell(sd))],
};
// icon by name or ready item list
// common other names → existing icons, so a guessed name still draws the right thing
Object.entries({ home: 'house', user: 'person', man: 'person', woman: 'person', search: 'magnifier', email: 'mail', letter: 'mail', envelope: 'mail',
  timer: 'clock', time: 'clock', lightning: 'bolt', electricity: 'bolt', energy: 'bolt', message: 'chat', comment: 'chat', speech: 'chat',
  play: 'video', youtube: 'video', ai: 'robot', bot: 'robot', location: 'pin', place: 'pin', food: 'apple', fruit: 'apple', coffee: 'cup', tea: 'cup',
  drink: 'cup', shop: 'cart', shopping: 'cart', basket: 'cart', like: 'thumbsUp', ok: 'thumbsUp', team: 'people', family: 'people', group: 'people',
  file: 'document', paper: 'document', note: 'document', education: 'school', graduation: 'school', medicine: 'pill', health: 'pill',
  water: 'drop', plant: 'leaf', nature: 'tree', world: 'globe', earth: 'globe', security: 'shield', safe: 'shield', password: 'lock',
  settings: 'gear', money2: 'coins', cash: 'money', growth: 'chartUp', chart: 'bars', goal: 'target', win: 'trophy', award: 'trophy',
  announce: 'megaphone', light: 'bulb', lamp: 'bulb', love: 'heart', happy: 'smile', smiley: 'smile', notification: 'bell', alert: 'warning',
  write: 'pencil', edit: 'pencil', storm: 'rain', weather: 'cloud', night: 'moon', star2: 'star', paint: 'brush', art: 'brush',
  sound: 'music', song: 'music', photo: 'camera', picture: 'camera', travel: 'plane', airplane: 'plane', car2: 'car', bicycle: 'bike',
  gifts: 'gift', present: 'gift', launch: 'rocket', startup: 'rocket', hot: 'fire', flame: 'fire', idea2: 'idea', see: 'eye', view: 'eye',
  think: 'brain', mind: 'brain', smart: 'brain', microphone: 'mic', podcast: 'mic', audio: 'headphones', listen: 'headphones',
  connect: 'link', chain: 'link', key2: 'key', unlock: 'key', finish: 'flag', start: 'flag',
}).forEach(([a, b]) => { if (!icon[a] && icon[b]) icon[a] = icon[b]; });
// a name that does not exist never crashes: it draws a question mark and the preview lists the name, so it can be fixed
const MISSING_ICONS = new Set();
const iconLib = icon;
const iconProxy = new Proxy(iconLib, { get: (o, k) => (typeof k !== 'string' || k in o) ? o[k]
  : (sd => { MISSING_ICONS.add(k); console.warn('HandDrawn: unknown icon', k); return o.question(sd); }) });
const asIcon = (v, sd = 7) => Array.isArray(v) ? v : (iconLib[v] ? iconLib[v](sd) : (MISSING_ICONS.add(v), console.warn('HandDrawn: unknown icon', v), iconLib.question(sd)));

// ---------- scene layouts (return a full scene; sizes adapt to 16:9, 9:16 and 1:1) ----------
const BIG = TALL ? 1.9 * U : NARROW ? 1.55 * U : 1.45 * U;      // main drawing scale
const TY = TALL ? 290 * U : NARROW ? 170 * U : 180 * U;          // title baseline
const CAP = TALL ? H * .86 : H - 110 * U;                         // caption baseline
const TS = TALL ? 112 * U : 92 * U;                               // title size
const titleT = (s, y = TY, seq = 0) => T(s, CX, y, TS, 'title', seq, W - 180 * U);
const capT = (s, seq = 2) => s ? [T(s, CX, CAP, TALL ? 66 * U : 60 * U, 'body', seq, W - 200 * U)] : [];
const layout = {
  // Hook: big question + one strong picture. { title, sub, icon, cap, side: icon for a small extra (optional) }
  hook: ({ title, sub = '', icon: ic = 'question', cap = '', side = null, hold = 2.2 }) => ({ kind: 'hook', hold, items: [
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
      const x = TALL ? CX - 230 * U : CX + (i - (n - 1) / 2) * span, y = TALL ? TY + 230 * U + i * span : CY - 40 * U;
      items.push(G(x, y, s, 0, asIcon(st.icon, 41 + i), 0.5 + i));
      items.push(T(st.label, TALL ? CX + 165 * U : x, TALL ? y + 22 * U : y + 225 * s + 50 * U, (TALL ? 64 : 52) * U, 'title', 0.6 + i, TALL ? W * .38 : span * .92));
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
  cta: ({ title, title2 = '', action = 'FOLLOW', sub = '', icon: ic = 'bell', hold = 3 }) => ({ kind: 'cta', hold, items: [
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
if (SAND) LOOK.shirt = LOOK.pen = null;   // the sand hand keeps its own black sleeve

// ---------- scenes (written by the page) ----------
// ---------- character library (children's stories) ----------
// Every character faces right, stands on y = +128 (local), is ~300 px wide at scale 1 and is centred near (0, 0).
//   chars.rabbit({ mood: 'happy', pose: 'stand', seed: 1 })   → items for G(x, y, scale, 0, …)
//   chars.rabbit.body('walk') + chars.rabbit.face('sad')        → body and face apart, to change the expression mid-scene
// moods: happy, excited, sad, scared, surprised, think, sleepy, angry, hungry, neutral
// poses: stand, walk (two leg sets, swapped by journey({ walk: true })), jump, sleep;  bird also: fly;  crocodile also: water, back
const chars = (() => {
  const E = '#3E2723';
  const grp = (items, extra = {}) => ({ t: 'g', x: 0, y: 0, s: 1, r: 0, items, ...extra });
  // ---- shared face: one visible eye (side view), mouth near the snout ----
  function face(mood, a, c, sd = 1) {
    const r = a.r, ex = a.ex, ey = a.ey, mx = a.mx, my = a.my, w = a.mw || 9;
    const eye = k => [P(circ(ex, ey, r * k, sd), 3.5, undefined, E), crayon(circ(ex + 1, ey + 1, r * k * .62, sd + 1), E, undefined, 8, 4),
      P(circ(ex - r * k * .3, ey - r * k * .35, 2, sd + 2), 4, undefined, '#FFFFFF')];
    const closed = P(`M${ex - r},${ey + 1} Q${ex},${ey - r * 1.3} ${ex + r},${ey + 1}`, 4.5, undefined, E);
    const shut = P(`M${ex - r},${ey - 2} Q${ex},${ey + r * .8} ${ex + r},${ey - 2}`, 4, undefined, E);
    const brow = k => P(`M${ex - r * 1.2},${ey - r * 1.7 - k * r * .55} L${ex + r * 1.2},${ey - r * 1.7 + k * r * .55}`, 3.5, undefined, E);
    const M = (...items) => grp(items, { mouth: true });
    const mouth = {
      smile: () => M(P(`M${mx - w},${my - 2} Q${mx},${my + w * 1.1} ${mx + w},${my - 2}`, 4, undefined, E)),
      grin: () => { const d = `M${mx - w * 1.1},${my - 3} Q${mx},${my + w * 1.6} ${mx + w * 1.1},${my - 3} Z`; return M(crayon(d, '#E57373', undefined, 6, 4), P(d, 4, undefined, E)); },
      frown: () => M(P(`M${mx - w},${my + 5} Q${mx},${my - w * .7} ${mx + w},${my + 5}`, 4, undefined, E)),
      o: () => M(P(circ(mx, my + 3, w * .6, sd + 3), 4, undefined, E)),
      flat: () => M(P(`M${mx - w * .8},${my} L${mx + w * .8},${my + 1}`, 4, undefined, E)),
      wavy: () => M(P(`M${mx - w},${my} q${w / 2},-5 ${w},0 q${w / 2},5 ${w},0`, 3.5, undefined, E)),
      open: () => M(P(`M${mx - w * .7},${my - 2} Q${mx},${my + w} ${mx + w * .7},${my - 2}`, 4, undefined, E)),
    };
    const tear = P(`M${ex + 3},${ey + r + 5} q-6,14 0,20 q6,-6 0,-20`, 3, undefined, '#1E88E5');
    const sweat = P(`M${ex - r * 2},${ey - r * 1.4} q-6,14 0,20 q6,-6 0,-20`, 3, undefined, '#1E88E5');
    const parts = {
      happy: [closed, mouth.smile()], excited: [...eye(1.15), mouth.grin()], sad: [...eye(1), brow(-1), mouth.frown(), tear],
      scared: [...eye(1.25), brow(-1), mouth.wavy(), sweat], surprised: [...eye(1.3), mouth.o()], think: [...eye(1), brow(-.6), mouth.flat()],
      sleepy: [shut, mouth.flat()], angry: [...eye(1), brow(1.3), mouth.flat()], hungry: [...eye(1), mouth.open()], neutral: [...eye(1), mouth.smile()],
    }[mood] || [...eye(1), mouth.smile()];
    const blush = a.bx != null && mood !== 'angry' ? [crayon(circ(a.bx, a.by, r * .9, sd + 5), c.blush || '#F48FB1', undefined, 8, 5)] : [];
    return [...blush, ...parts];
  }
  // ---- legs: stick (thin lines) or thick (filled columns); walk gives two sets swapped while moving ----
  function legs(pose, L, c, sd) {
    const one = (x, x2, yEnd, bend) => {
      if (!L.thick) return [P(bend ? `M${x},${L.y0} Q${(x + x2) / 2 + bend},${(L.y0 + yEnd) / 2} ${x2},${yEnd}` : `M${x},${L.y0} L${x2},${yEnd}`, 6, undefined, c.line)];
      const w = L.w / 2, d = `M${x - w},${L.y0} L${x2 - w},${yEnd - 6} Q${x2},${yEnd + 4} ${x2 + w},${yEnd - 6} L${x + w},${L.y0} Z`;
      return [crayon(d, c.fill, undefined, 12, 12), P(d, 5, undefined, c.line)];
    };
    const g = L.y0 + L.len;
    const set = (df, db, lift = 0) => [...L.front.map((x, i) => one(x, x + df[i], g - lift)), ...L.back.map((x, i) => one(x, x + db[i], g - lift))].flat();
    if (pose === 'walk') return [grp(set([24, -16], [-16, 24]), { leg: 'a' }), grp(set([-16, 24], [24, -16]), { leg: 'b', still: true })];
    if (pose === 'jump') return [...L.front.map(x => one(x, x + 46, L.y0 + L.len * .45, 18)), ...L.back.map(x => one(x, x - 50, L.y0 + L.len * .4, -18))].flat();
    if (pose === 'sleep') return [...L.front.map(x => one(x, x + 40, L.y0 + Math.min(L.len, 40) * .55, 10)), ...L.back.map(x => one(x, x + 40, L.y0 + Math.min(L.len, 40) * .55, 10))].flat();
    return set([4, -4], [-4, 4]);
  }
  // ---- build a character from its parts ----
  function make(def) {
    const body = (pose = 'stand', sd = 1) => {
      if (def.special && def.special[pose]) return def.special[pose](sd);
      const dy = pose === 'sleep' && def.legs ? def.legs.len * .6 : 0;
      const parts = [...def.shapes(sd, pose), ...(def.legs ? legs(pose, def.legs, def.c, sd) : []), ...(def.extras ? def.extras(pose, sd) : [])];
      if (pose === 'sleep') parts.push(T('z Z', def.face.ex + 40, def.face.ey - 50 - dy, 40, 'title', undefined, undefined, '#5C6BC0'));
      return [grp(parts, { x: 0, y: dy, r: pose === 'jump' ? -8 : 0 })];
    };
    const faceOf = (mood = 'happy', pose = 'stand', sd = 1) => {
      if (def.special && def.special[pose] && !def.specialFace) return [];
      const dy = pose === 'sleep' && def.legs ? def.legs.len * .6 : 0, a = def.special && def.special[pose] && def.specialFace ? def.specialFace[pose] : def.face;
      return [grp(face(pose === 'sleep' ? 'sleepy' : mood, a, def.c, sd), { x: 0, y: dy, r: pose === 'jump' ? -8 : 0 })];
    };
    const fn = ({ mood = 'happy', pose = 'stand', seed = 1 } = {}) => [grp([...body(pose, seed), ...faceOf(mood, pose, seed)], { act: 'breathe' })];   // alive by default
    fn.body = (pose, sd) => body(pose, sd); fn.face = (mood, pose, sd) => faceOf(mood, pose, sd); fn.colors = def.c;
    return fn;
  }
  const shape = (d, c, w = 5.5, fill = c.fill, sp, ring) => [crayon(d, fill, undefined, undefined, sp, 'hatch', ring), P(d, w, undefined, c.line)];

  // ---------------- the animals ----------------
  const kancil = make({
    c: { line: '#8D5A2B', fill: '#E3A869' },
    shapes: (sd) => [
      ...shape('M-95,10 C-100,-40 -40,-60 20,-50 C60,-44 85,-20 80,15 C76,45 30,55 -30,52 C-75,50 -92,38 -95,10 Z', kancil.colors),
      ...shape('M52,-34 C62,-72 72,-96 96,-108 C120,-118 150,-108 168,-92 C176,-84 172,-76 160,-74 C140,-72 122,-68 110,-54 C100,-42 92,-24 80,-8 C72,4 58,-8 52,-34 Z', kancil.colors),
      ...shape('M100,-104 C86,-140 90,-166 104,-172 C120,-160 122,-128 114,-106 Z', kancil.colors, 5),
      P('M-95,0 C-112,-10 -114,-26 -102,-32', 5, undefined, '#8D5A2B'), P(circ(168, -90, 4, sd + 4), 5, undefined, E)],
    legs: { y0: 40, len: 86, front: [55, 33], back: [-60, -82] },
    face: { ex: 128, ey: -96, r: 10, mx: 154, my: -79, mw: 9, bx: 140, by: -78 },
  });
  const crocC = { line: '#2E7D32', fill: '#8BCF7E' };
  const crocodile = make({
    c: crocC,
    shapes: (sd) => [
      ...shape('M-150,40 C-150,0 -60,-12 40,-10 C80,-9 100,-22 130,-30 C170,-40 230,-34 250,-12 C254,-4 248,4 236,6 L140,10 C120,22 100,40 60,50 C0,64 -100,64 -150,40 Z', crocC),
      ...shape('M-148,30 C-200,32 -250,16 -292,26 C-250,44 -200,58 -146,50 Z', crocC, 5),
      P('M-100,-6 l10,-16 l10,16 l10,-16 l10,16 l10,-16 l10,16 l10,-16 l10,16 l10,-16 l10,16', 4, undefined, crocC.line),
      P(circ(142, -36, 15, sd), 4.5, undefined, crocC.line), P('M150,4 L238,0', 4, undefined, crocC.line),
      P('M160,4 l6,-8 l6,8 l6,-8 l6,8 l6,-8 l6,8 l6,-8 l6,8', 3, undefined, '#9E9E9E'), P(circ(240, -16, 3, sd + 2), 4, undefined, E)],
    legs: { y0: 52, len: 76, front: [70, 40], back: [-80, -110], thick: true, w: 26 },
    face: { ex: 141, ey: -37, r: 7, mx: 200, my: 8, mw: 16 },
    special: {
      water: sd => [grp([
        ...shape('M-170,0 C-172,-24 -120,-30 -62,-28 C-30,-27 -10,-46 10,-62 C30,-76 62,-72 76,-56 C92,-40 112,-30 160,-30 L160,8 C60,6 20,8 -20,10 C-80,14 -150,12 -170,0 Z', crocC),
        P(circ(40, -60, 16, sd), 4.5, undefined, crocC.line), P(circ(-156, -14, 4, sd + 2), 4.5, undefined, crocC.line),
        P('M160,-30 L178,-46 L196,-30 L214,-46 L232,-30', 4.5, undefined, crocC.line),
        P('M-150,2 L-142,-9 L-134,3 L-126,-9 L-118,3 L-110,-9 L-102,3 L-94,-9 L-86,3', 3.5, undefined, '#9E9E9E')])],
      back: sd => [grp([...shape('M-115,10 C-85,-30 85,-30 115,10 Z', crocC),
        P('M-60,-14 L-50,-30 L-40,-17 M-10,-22 L0,-38 L10,-22 M40,-17 L50,-30 L60,-14', 4.5, undefined, crocC.line),
        P(circ(-98, -6, 9, sd), 4.5, undefined, crocC.line), P(circ(-98, -6, 3, sd + 1), 5, undefined, E)])],
    },
    specialFace: { water: { ex: 38, ey: -60, r: 8, mx: -120, my: 6, mw: 20 }, back: { ex: -98, ey: -6, r: 4, mx: -80, my: 6, mw: 1 } },
  });
  const rabC = { line: '#6D5D57', fill: '#EFE7E1', blush: '#F48FB1' };
  const rabbit = make({
    c: rabC,
    shapes: (sd) => [
      ...shape(circ(-10, 48, 82, sd, 64), rabC),
      ...shape('M58,-78 C38,-150 48,-200 70,-205 C92,-200 92,-150 82,-82 Z', rabC, 5),
      ...shape('M86,-84 C92,-150 112,-196 130,-192 C143,-180 122,-130 102,-78 Z', rabC, 5),
      P('M66,-100 C58,-140 64,-176 72,-186 M94,-100 C104,-140 116,-170 124,-176', 3, undefined, '#F48FB1'),
      ...shape(circ(78, -34, 52, sd + 1), rabC),
      ...shape(circ(-94, 36, 20, sd + 2), rabC, 4.5, '#FFFFFF'),
      crayon(circ(126, -26, 6, sd + 3), '#F48FB1', undefined, 6, 4), P(circ(126, -26, 6, sd + 3), 3.5, undefined, rabC.line),
      P('M118,-16 L150,-22 M118,-10 L150,-6', 2.5, undefined, rabC.line)],
    legs: { y0: 88, len: 40, front: [48, 26], back: [-48, -70] },
    face: { ex: 96, ey: -46, r: 9, mx: 116, my: -10, mw: 7, bx: 104, by: -22 },
  });
  const turC = { line: '#2E7D32', fill: '#C5E1A5', shell: '#8BC34A', blush: '#F48FB1' };
  const turtle = make({
    c: turC,
    shapes: (sd) => [
      ...shape(circ(152, 28, 38, sd + 1), turC),
      ...shape('M-122,62 C-122,-62 122,-62 122,62 Z', turC, 6, turC.shell),
      P('M-60,60 L-40,10 L40,10 L60,60 M-40,10 L-70,-20 M40,10 L70,-20 M-40,10 Q0,-30 40,10', 4, undefined, turC.line),
      P('M-132,62 Q0,88 132,62', 5, undefined, turC.line), P('M-122,56 L-152,64 L-120,70', 4.5, undefined, turC.line)],
    legs: { y0: 70, len: 58, front: [86, 48], back: [-84, -46], thick: true, w: 34 },
    face: { ex: 164, ey: 16, r: 7, mx: 178, my: 40, mw: 8, bx: 166, by: 34 },
  });
  const catC = { line: '#E65100', fill: '#FFB74D', blush: '#F48FB1' };
  const cat = make({
    c: catC,
    shapes: (sd) => [
      ...shape('M-100,20 C-105,-25 -40,-40 20,-35 C60,-30 80,-10 78,20 C76,50 30,58 -30,56 C-80,54 -98,45 -100,20 Z', catC),
      P('M-60,-30 L-50,0 M-25,-36 L-18,-4 M10,-34 L14,-2', 5, undefined, catC.line),
      ...shape('M62,-86 L66,-132 L94,-100 Z', catC, 5), ...shape('M104,-102 L130,-132 L134,-86 Z', catC, 5),
      ...shape(circ(96, -56, 48, sd + 1), catC),
      P('M-100,10 C-140,0 -152,-60 -120,-92', 6, undefined, catC.line),
      crayon(circ(136, -48, 5, sd + 3), '#F48FB1', undefined, 6, 4),
      P('M126,-36 L158,-42 M126,-30 L158,-26', 2.5, undefined, catC.line)],
    legs: { y0: 45, len: 83, front: [55, 35], back: [-60, -80] },
    face: { ex: 112, ey: -64, r: 8, mx: 128, my: -34, mw: 7, bx: 118, by: -42 },
  });
  const birdC = { line: '#1565C0', fill: '#64B5F6', blush: '#F48FB1' };
  const WING_DOWN = 'M-30,-5 C0,-20 40,-10 30,20 C10,35 -25,25 -30,-5 Z', WING_UP = 'M-24,-12 C-16,-84 26,-96 40,-64 C30,-34 8,-18 -24,-12 Z';
  const bird = make({
    c: birdC,
    shapes: (sd) => [
      ...shape('M-70,0 C-70,-60 20,-80 60,-40 C80,-20 80,20 50,40 C10,62 -60,50 -70,0 Z', birdC),
      ...shape('M-68,0 L-122,-22 L-112,6 L-128,30 L-68,16 Z', birdC, 5),
      ...shape('M72,-40 L112,-28 L72,-16 Z', { line: '#E65100', fill: '#FFB300' }, 4.5)],
    legs: null,
    extras: (pose) => pose === 'fly'
      ? [grp(shape(WING_DOWN, birdC, 5), { leg: 'a' }), grp(shape(WING_UP, birdC, 5), { leg: 'b', still: true }), P('M-10,46 L-34,60 M10,48 L-14,64', 4, undefined, '#E65100')]
      : [...shape(WING_DOWN, birdC, 5), P('M0,48 L-4,128 M22,48 L26,128 M-4,128 l-14,0 M-4,128 l10,0 M26,128 l-12,0 M26,128 l12,0', 4.5, undefined, '#E65100')],
    face: { ex: 50, ey: -40, r: 8, mx: 88, my: -22, mw: 6, bx: 54, by: -20 },
  });
  const antC = { line: '#8E2B1B', fill: '#E57373' };
  const ant = make({
    c: antC,
    shapes: (sd) => [
      ...shape(circ(-62, -4, 58, sd, 46), antC), ...shape(circ(28, 2, 30, sd + 1, 24), antC), ...shape(circ(96, -12, 34, sd + 2), antC),
      P('M104,-42 C108,-74 122,-90 140,-94 M92,-44 C86,-78 96,-100 110,-108', 4, undefined, antC.line),
      P(circ(141, -95, 5, sd + 3), 5, undefined, antC.line), P(circ(111, -109, 5, sd + 4), 5, undefined, antC.line)],
    legs: { y0: 18, len: 110, front: [52, 32], back: [10, -6] },
    face: { ex: 108, ey: -20, r: 7, mx: 122, my: 4, mw: 7, bx: 112, by: -2 },
  });
  const eleC = { line: '#546E7A', fill: '#B0BEC5', blush: '#F48FB1' };
  const elephant = make({
    c: eleC,
    shapes: (sd) => [
      ...shape('M-140,30 C-150,-60 -40,-92 40,-82 C100,-74 120,-40 118,10 C116,50 60,62 -20,62 C-90,62 -135,60 -140,30 Z', eleC),
      ...shape(circ(132, -50, 62, sd + 1), eleC),
      ...shape('M176,-28 C202,12 192,62 172,82 C162,90 148,84 154,72 C170,48 170,12 150,-8 Z', eleC, 5),
      ...shape('M98,-92 C40,-112 30,-20 70,0 C96,10 112,-22 106,-62 Z', eleC, 5),
      P('M170,-4 q16,8 26,-4', 4, undefined, '#9E9E9E'), P('M-140,20 C-160,30 -166,50 -160,70', 5, undefined, eleC.line)],
    legs: { y0: 52, len: 76, front: [84, 44], back: [-92, -124], thick: true, w: 38 },
    face: { ex: 146, ey: -70, r: 8, mx: 162, my: -16, mw: 7, bx: 150, by: -44 },
  });
  const monC = { line: '#5D4037', fill: '#A1887F', blush: '#F48FB1' };
  const monkey = make({
    c: monC,
    shapes: (sd) => [
      ...shape('M-90,10 C-95,-30 -30,-45 20,-40 C55,-36 75,-15 72,15 C70,45 30,52 -20,50 C-65,48 -88,38 -90,10 Z', monC),
      P('M-90,0 C-140,-10 -152,-80 -112,-92 C-86,-98 -80,-70 -100,-66', 6, undefined, monC.line),
      ...shape(circ(54, -62, 17, sd + 2), monC, 5, '#F3D3B5'),
      ...shape(circ(90, -60, 50, sd + 1), monC),
      ...shape('M96,-74 C128,-84 150,-54 136,-28 C122,-6 86,-14 86,-42 Z', monC, 4.5, '#F3D3B5')],
    legs: { y0: 40, len: 88, front: [50, 30], back: [-55, -75] },
    face: { ex: 112, ey: -60, r: 8, mx: 126, my: -30, mw: 8, bx: 120, by: -38 },
  });
  const lionC = { line: '#B26A00', fill: '#FFCC80', blush: '#F48FB1' }, maneC = { line: '#8D4E00', fill: '#E65100' };
  const lion = make({
    c: lionC,
    shapes: (sd) => [
      ...shape('M-100,20 C-105,-25 -40,-42 20,-38 C60,-34 80,-12 78,20 C76,50 30,58 -30,56 C-80,54 -98,45 -100,20 Z', lionC),
      P('M-100,10 C-130,0 -140,-30 -128,-50', 6, undefined, lionC.line), ...shape(circ(-126, -56, 12, sd + 3), maneC, 4.5),
      ...shape(circ(92, -60, 74, sd + 1) + ' ' + circ(100, -56, 46, sd + 2), maneC, 5, maneC.fill, undefined, true),   // mane: a ring around the face
      ...shape(circ(100, -56, 48, sd + 2), lionC),
      ...shape(circ(78, -100, 14, sd + 4), lionC, 4.5),
      P(circ(138, -48, 6, sd + 5), 5, undefined, '#5D4037')],
    legs: { y0: 45, len: 83, front: [55, 35], back: [-60, -80], thick: true, w: 26 },
    face: { ex: 116, ey: -66, r: 8, mx: 134, my: -32, mw: 8, bx: 122, by: -44 },
  });
  // make / shape are open so a story can add a new animal in the same style; it gets every pose and mood for free
  return { kancil, crocodile, rabbit, turtle, cat, bird, ant, elephant, monkey, lion, make, shape };
})();

const SCENES = (cfg.scenes({ W, H, CX, CY, U, TALL, NARROW, P, A, T, G, arrow, circ, cloud, scrib, smooth, rng,
  heart, question, spark, curly, lightbulb, button, bell, roundRect, icon: iconProxy, layout, at, crayon, paint, grass, act, gone, journey, speaks, mirror, chars }) || [])
  .filter(Boolean).map(sc => Array.isArray(sc) ? { items: sc } : sc);   // tolerate stray commas / undefined scenes
{ const clean = it => { it.items = (it.items || []).filter(Boolean); it.items.forEach(x => x.t === 'g' && clean(x)); }; SCENES.forEach(clean); }

// ---------- render ----------
function el(tag, attrs) { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); return e; }
let ordCounter = 0;
function number(items) { for (const it of items) { it.ord = ordCounter++; if (it.t === 'g') number(it.items); } }
let clipId = 0;
function render(items, parent, scale, list, inh) {
  scale = Math.abs(scale) || 1;   // mirrored groups (scale −1) keep normal line widths and crayon spacing
  const dom = [...items].sort((a, b) => (a.t === 'a' ? 0 : 1) - (b.t === 'a' ? 0 : 1)); // accents sit behind ink
  for (let it of dom) {
    if (it.t === 'g') {
      const g = el('g', { transform: `translate(${it.x} ${it.y}) rotate(${it.r || 0}) scale(${(it.flip ? -1 : 1) * (it.s || 1)} ${it.s || 1})` });   // flip: mirrored left-right
      if (it.qa) g.dataset.qa = it.qa;
      if (it.cue) g.dataset.cue = it.cue;
      if (it.gone) g.dataset.gone = it.gone;
      if (it.leg) g.dataset.leg = it.leg;                 // 'a' / 'b': two leg (or wing) poses swapped while walking / flying
      if (it.mouth) g.dataset.mouth = '1';               // opens and closes while this character speaks
      if (it.talk) g.dataset.talk = [].concat(it.talk).join(',');
      parent.appendChild(g);
      let into = g;
      if (it.path) { into = el('g', {}); into.dataset.path = JSON.stringify(it.path); g.appendChild(into); }   // moves along waypoints on cue words
      if (it.act) { const ia = el('g', {}); ia.dataset.act = it.act; ia.dataset.scale = scale * (it.s || 1); into.appendChild(ia); into = ia; }   // moves once drawn
      render(it.items, into, scale * (it.s || 1), it.still ? [] : list, it.seq ?? inh); continue;   // still: shown when needed, never drawn by the hand
    }
    if (it.t === 't') {
      const title = it.font === 'title';
      const t = el('text', { x: it.x, y: it.y, 'font-size': it.size, 'text-anchor': 'middle', class: 'txt',
        'font-family': title ? "'Permanent Marker', 'Comic Sans MS', cursive" : "'Caveat', 'Segoe Print', cursive",
        'font-weight': title ? 400 : 700 });
      t.textContent = it.s; if (it.c) t.style.fill = it.c; parent.appendChild(t);
      if (it.qa) t.dataset.qa = it.qa;
      if (it.cue) t.dataset.cue = it.cue;
      if (it.gone) t.dataset.gone = it.gone;
      const room = Math.min(it.maxW || Infinity, (W - 160 * U) / scale), wNow = t.getComputedTextLength();   // never wider than the screen
      const words = it.s.split(' ');
      if (wNow > room * 1.35 && words.length > 2 && !it.oneLine) {   // much too long: break into two balanced lines
        let best = 1, bestD = Infinity;
        for (let i = 1; i < words.length; i++) { const d = Math.abs(words.slice(0, i).join(' ').length - words.slice(i).join(' ').length); if (d < bestD) { bestD = d; best = i; } }
        const lh = it.size * 1.25, lines = [words.slice(0, best).join(' '), words.slice(best).join(' ')];
        // titles sit at the top with a subtitle under them: grow upward so nothing below gets covered
        const y0 = title ? Math.max(it.y - lh, (56 * U + it.size * .8) / scale) : it.y;   // body text grows downward
        t.remove();
        lines.forEach((line, li) => {
          const tl = el('text', { x: it.x, y: y0 + li * lh, 'font-size': it.size, 'text-anchor': 'middle', class: 'txt',
            'font-family': title ? "'Permanent Marker', 'Comic Sans MS', cursive" : "'Caveat', 'Segoe Print', cursive", 'font-weight': title ? 400 : 700 });
          tl.textContent = line; if (it.c) tl.style.fill = it.c; tl.dataset.wrap = String(it.ord); if (it.cue) tl.dataset.cue = it.cue; parent.appendChild(tl);
          const wl = tl.getComputedTextLength();
          if (wl > room) { tl.setAttribute('font-size', (it.size * room / wl).toFixed(1)); tl.dataset.shrink = (room / wl).toFixed(2); }
          list.push({ el: tl, kind: 't', seq: (it.seq ?? inh ?? 2) + li * .01, ord: it.ord + li * .5 });
        });
        continue;
      }
      if (wNow > room) { t.setAttribute('font-size', (it.size * room / wNow).toFixed(1)); t.dataset.shrink = (room / wNow).toFixed(2); }
      list.push({ el: t, kind: 't', seq: it.seq ?? inh ?? 2, ord: it.ord }); continue;
    }
    if (it.t === 'a' && it.fill) {   // crayon: dense back-and-forth hatching, clipped to the shape so the colour stays inside the lines
      const tmp = el('path', { d: it.d }); parent.appendChild(tmp); let b = null; try { b = tmp.getBBox(); } catch (e) {} tmp.remove();
      if (b && b.width > 0) {
        const id = 'cray' + (clipId++), cp = el('clipPath', { id }); cp.appendChild(el('path', it.ring ? { d: it.d, 'clip-rule': 'evenodd' } : { d: it.d })); parent.appendChild(cp);
        const sp = (it.sp || 15) / scale, sl = b.height * .35, R = rng(it.ord + 7); let d = '';   // spacing in screen pixels, like the stroke width
        if (it.kind === 'scribble') {   // loops rolling across the shape, row by row (tree crowns, bushes, clouds)
          const r = sp * 1.6; let row = 0;
          for (let y = b.y + r * .6; y <= b.y + b.height; y += r * 1.1, row++) {
            const dir = row % 2 ? -1 : 1, xs = dir > 0 ? b.x - r : b.x + b.width + r, xe = dir > 0 ? b.x + b.width + r : b.x - r;
            for (let k = 0, x = xs; dir > 0 ? x < xe : x > xe; k++, x += dir * r * .09) {
              const a = k * .7, px = x + r * Math.cos(a) * dir, py = y + r * .9 * Math.sin(a) + (R() - .5) * 3;
              d += (d ? ' L' : 'M') + px.toFixed(1) + ',' + py.toFixed(1);
            }
          }
        } else
        for (let x = b.x - sl, i = 0; x <= b.x + b.width + sp; x += sp, i++) {
          const top = i % 2 === 0, px = x + (top ? sl : 0) + (R() - .5) * 4, py = top ? b.y - 6 : b.y + b.height + 6;
          d += (d ? ' L' : 'M') + px.toFixed(1) + ',' + py.toFixed(1);
        }
        it = { ...it, d, clipId: id };
      }
    }
    const p = el('path', { d: it.d, class: it.t === 'a' ? 'acc' : 'ink', 'stroke-width': (it.w * (SAND ? (it.t === 'a' ? 3 : 2.3) : 1) / scale).toFixed(2) });   // sand: a fingertip makes wide lines
    if (it.qa) p.dataset.qa = it.qa;
    if (it.cue) p.dataset.cue = it.cue;
    if (it.gone) p.dataset.gone = it.gone;
    if (it.c && it.t === 'a' && !SAND) { p.style.stroke = it.c; p.style.opacity = .78; }
    if (it.clipId) { p.setAttribute('clip-path', `url(#${it.clipId})`); p.style.opacity = SAND ? 0 : MARKER ? .82 : .7; }
    if (it.c && it.t === 'p') p.style.stroke = it.c;
    parent.appendChild(p);
    list.push({ el: p, kind: it.t, seq: it.seq ?? inh ?? (it.t === 'a' ? 1 : 0), ord: it.ord });
  }
}

// Measure text only after the handwriting fonts are really in (late fonts make text wider than measured).
const fontsReady = () => document.fonts.check('80px "Permanent Marker"') && document.fonts.check('700 80px "Caveat"');
const loadFonts = Promise.all([document.fonts.load('80px "Permanent Marker"'), document.fonts.load('700 80px "Caveat"')]).catch(() => {});
await Promise.race([loadFonts, new Promise(r => setTimeout(r, 8000))]);
for (let i = 0; i < 40 && !fontsReady(); i++) await new Promise(r => setTimeout(r, 100));
await (document.fonts.ready || Promise.resolve());
// Some preview frames start hidden; give them a moment to get a size before measuring text.
for (let i = 0; i < 40 && !(stage.getBoundingClientRect().width > 0); i++) await new Promise(r => setTimeout(r, 100));

// ---------- scene backgrounds: time of day + place (scene.bg = { time, place, weather }) ----------
// Not drawn by the hand: a soft watercolour wash (sky + ground) and a faint far-away sketch fade in when the scene starts,
// so the mood is there at once and the hand only draws what matters to the story.
const BG_TIME = {
  dawn:      { sky: ['#B39DDB', '#FFCCBC'], light: '#FFAB91', sun: [.18, .56, '#FF8A65'], ground: .9 },
  morning:   { sky: ['#BBDEFB', '#FFF3E0'], light: '#FFE082', sun: [.16, .3, '#FFCA28'], ground: 1 },
  noon:      { sky: ['#64B5F6', '#E3F2FD'], light: '#FFF59D', sun: [.82, .14, '#FFD54F'], ground: 1 },
  afternoon: { sky: ['#90CAF9', '#FFE0B2'], light: '#FFCC80', sun: [.8, .3, '#FFB300'], ground: .95 },
  sunset:    { sky: ['#7E57C2', '#FF8A65'], light: '#FFAB91', sun: [.75, .56, '#FF7043'], ground: .8 },
  night:     { sky: ['#1A237E', '#3949AB'], light: '#C5CAE9', moon: [.8, .18], ground: .55, dim: .2 },
};
const BG_PLACE = {
  field:    { ground: '#AED581', far: 'hills' },   park:    { ground: '#A5D6A7', far: 'park' },
  forest:   { ground: '#81C784', far: 'trees' },   river:   { ground: '#A5D6A7', far: 'hills' },
  beach:    { ground: '#FFE0B2', far: 'sea' },     village: { ground: '#C5E1A5', far: 'houses' },
  mountain: { ground: '#C5E1A5', far: 'mountains' }, home:  { wall: '#FFF3E0', floor: '#D7CCC8', far: 'room' },
};
function mixHex(a, b, k) { const p = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16)); const x = p(a), y = p(b);
  return '#' + x.map((v, i) => Math.round(v + (y[i] - v) * k).toString(16).padStart(2, '0')).join(''); }
let bgId = 0;
function makeBg(spec) {
  const T0 = BG_TIME[spec.time] || BG_TIME.morning, PL = BG_PLACE[spec.place] || BG_PLACE.field, id = 'bg' + (bgId++);
  const motion = spec.motion || 'gentle', live = motion === 'still' ? 0 : motion === 'lively' ? 1.8 : 1;
  const g = el('g', { 'pointer-events': 'none' }), HZ = H * (TALL ? .58 : .62);
  // layers for parallax: sky (farthest) → far sketch → ground → weather (nearest)
  const skyL = el('g', {}), farL = el('g', {}), groundL = el('g', {}), wxL = el('g', {});
  g.appendChild(skyL); g.appendChild(groundL); g.appendChild(farL); g.appendChild(wxL);
  const anim = { clouds: [], stars: [], sun: null, rays: null, moonGlow: null, waves: [], birds: [], live };
  if (!defs.querySelector('#bgWash')) defs.insertAdjacentHTML('beforeend',
    '<filter id="bgWash" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="3" seed="4" result="t"/>' +
    '<feDisplacementMap in="SourceGraphic" in2="t" scale="26" xChannelSelector="R" yChannelSelector="G"/></filter>' +
    '<filter id="bgSketch"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="7" result="t"/><feDisplacementMap in="SourceGraphic" in2="t" scale="4"/></filter>' +
    '<filter id="bgGlow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="22"/></filter>');
  const dark = c => T0.ground < 1 ? mixHex(c, '#1A237E', 1 - T0.ground) : c;
  if (PL.far === 'room') {   // indoors: wall + floor, a window showing the time of day
    skyL.appendChild(el('rect', { x: -40, y: -40, width: W + 80, height: H * .7 + 40, fill: dark(PL.wall), opacity: .75, filter: 'url(#bgWash)' }));
    groundL.appendChild(el('rect', { x: -40, y: H * .7, width: W + 80, height: H * .3 + 40, fill: dark(PL.floor), opacity: .7, filter: 'url(#bgWash)' }));
    const wx = W * .66, wy = H * .14, ww = W * .2, wh = H * .3;
    farL.appendChild(el('rect', { x: wx, y: wy, width: ww, height: wh, fill: T0.sky[0], opacity: .7 }));
    if (!T0.moon) { const c = el('path', { d: cloud(wx + ww * .35, wy + wh * .35, ww * .4, wh * .22, 9, 51), fill: '#FFFFFF', opacity: .8 }); farL.appendChild(c);
      anim.clouds.push({ el: c, v: 5, x0: wx + ww * .35, lo: wx, hi: wx + ww, clip: true }); }
    farL.appendChild(el('path', { d: `M${wx},${wy} h${ww} v${wh} h${-ww} Z M${wx + ww / 2},${wy} v${wh} M${wx},${wy + wh / 2} h${ww}`, fill: 'none', stroke: '#8D6E63', 'stroke-width': 6, opacity: .55, filter: 'url(#bgSketch)' }));
    return { g, layers: { skyL, farL, groundL, wxL }, anim, dim: T0.dim || 0 };
  }
  // sky and ground wash
  const lg = el('linearGradient', { id: id + 's', x1: 0, y1: 0, x2: 0, y2: 1 }); lg.appendChild(el('stop', { offset: 0, 'stop-color': T0.sky[0] })); lg.appendChild(el('stop', { offset: 1, 'stop-color': T0.sky[1] })); defs.appendChild(lg);
  skyL.appendChild(el('rect', { x: -120, y: -120, width: W + 240, height: HZ + 150, fill: `url(#${id}s)`, opacity: .62, filter: 'url(#bgWash)' }));
  const gd = PL.far === 'sea' ? `M-120,${HZ + 40} L${W + 120},${HZ + 40} L${W + 120},${H + 120} L-120,${H + 120} Z` : `M-120,${HZ + 10} C${W * .3},${HZ - 30} ${W * .6},${HZ + 40} ${W + 120},${HZ} L${W + 120},${H + 120} L-120,${H + 120} Z`;
  if (PL.far === 'sea') farL.appendChild(el('rect', { x: -120, y: HZ - 10, width: W + 240, height: 60, fill: dark('#81D4FA'), opacity: .6, filter: 'url(#bgWash)' }));
  groundL.appendChild(el('path', { d: gd, fill: dark(PL.ground), opacity: .55, filter: 'url(#bgWash)' }));
  // sun (soft glow + slowly turning rays) or moon (glow, crescent) and twinkling stars
  // bg.sun / bg.moon: [x, y] as fractions of the frame, or false; bg.clouds: false
  if (T0.sun && spec.sun !== false) {
    const [sx, sy] = spec.sun || T0.sun, c = T0.sun[2], cx = W * sx, cy = H * sy, r = 70 * U;
    const sg = el('g', {}); skyL.appendChild(sg);
    sg.appendChild(el('circle', { cx, cy, r: r * 1.7, fill: c, opacity: .22, filter: 'url(#bgGlow)' }));
    const rays = el('g', { stroke: c, 'stroke-width': 7 * U, 'stroke-linecap': 'round', opacity: .4 }); sg.appendChild(rays);
    for (let i = 0; i < 10; i++) { const a = i * Math.PI / 5; rays.appendChild(el('path', { d: `M${cx + Math.cos(a) * r * 1.35},${cy + Math.sin(a) * r * 1.35} L${cx + Math.cos(a) * r * 1.85},${cy + Math.sin(a) * r * 1.85}` })); }
    sg.appendChild(el('path', { d: circ(cx, cy, r, 9), fill: c, opacity: .6, filter: 'url(#bgWash)' }));
    anim.sun = { g: sg, cx, cy }; anim.rays = { g: rays, cx, cy };
  }
  if (T0.moon && spec.moon !== false) { const [mx, my] = spec.moon || spec.sun || T0.moon, cx = W * mx, cy = H * my - 60 * U, r = 60 * U;
    const glow = el('circle', { cx, cy: cy + r * .0, r: r * 2.2, fill: '#FFF9C4', opacity: .18, filter: 'url(#bgGlow)' }); skyL.appendChild(glow); anim.moonGlow = glow;
    skyL.appendChild(el('circle', { cx, cy, r, fill: '#FFF9C4', opacity: .85 }));
    skyL.appendChild(el('path', { d: circ(cx + 26 * U, cy + 6 * U, 52 * U, 3), fill: mixHex(T0.sky[0], '#FFFFFF', .36) }));   // same tone as the washed sky → crescent
    const R = rng(11); for (let i = 0; i < 30; i++) { const x = R() * W, y = R() * HZ * .8, st = el('path', { d: `M${x - 6},${y} L${x + 6},${y} M${x},${y - 6} L${x},${y + 6}`, stroke: '#FFF9C4', 'stroke-width': 3 });
      skyL.appendChild(st); anim.stars.push({ el: st, base: .45 + R() * .45, w: 1.2 + R() * 2.5, ph: R() * 6 }); } }
  else if (spec.clouds !== false) [[.3, .16, 300, 9], [.55, .26, 220, 14], [.9, .12, 260, 7]].forEach(([x, y, w, v], i) => {
    const c = el('path', { d: cloud(W * x, H * y, w * U, w * .45 * U, 10, 20 + i), fill: '#FFFFFF', opacity: .6, filter: 'url(#bgWash)' }); skyL.appendChild(c);
    anim.clouds.push({ el: c, v, x0: W * x, lo: -W * .25, hi: W * 1.25 }); });
  // faint far-away sketch (not drawn by the hand)
  const sk = el('g', { fill: 'none', stroke: dark('#7A8F6A'), 'stroke-width': 3.5, opacity: .42, filter: 'url(#bgSketch)', 'stroke-linecap': 'round' }); farL.appendChild(sk);
  const line = d => { const p = el('path', { d }); sk.appendChild(p); return p; };
  const R = rng(5);
  if (PL.far === 'hills' || PL.far === 'park') { line(`M-120,${HZ - 10} C${W * .15},${HZ - 120 * U} ${W * .3},${HZ - 110 * U} ${W * .42},${HZ - 20} C${W * .55},${HZ - 150 * U} ${W * .8},${HZ - 130 * U} ${W + 120},${HZ - 30}`); }
  if (PL.far === 'park') { for (let i = 0; i < 5; i++) { const x = W * (.12 + i * .19), y = HZ - 30; line(cloud(x, y - 60 * U, 90 * U, 80 * U, 8, 30 + i)); line(`M${x},${y - 20 * U} L${x},${y + 10}`); }
    line(`M-120,${HZ + 30} L${W + 120},${HZ + 30} M-120,${HZ + 5} L${W + 120},${HZ + 5}` + Array.from({ length: 24 }, (_, i) => ` M${i * W / 23},${HZ - 5} L${i * W / 23},${HZ + 40}`).join('')); }
  if (PL.far === 'trees') for (let i = 0; i < 9; i++) { const x = W * (i / 8), h = (110 + R() * 70) * U; line(cloud(x, HZ - h * .55, 150 * U, h, 9, 40 + i)); }
  if (PL.far === 'houses') { line(`M-120,${HZ - 10} C${W * .3},${HZ - 90 * U} ${W * .6},${HZ - 70 * U} ${W + 120},${HZ - 20}`);
    for (let i = 0; i < 4; i++) { const x = W * (.15 + i * .22), y = HZ - 12, w = 90 * U, h = 70 * U; line(`M${x - w / 2},${y} v${-h} h${w} v${h} M${x - w / 2 - 12},${y - h} L${x},${y - h - 55 * U} L${x + w / 2 + 12},${y - h} M${x - 12},${y} v${-34 * U} h24 v${34 * U}`); }
    if (T0.moon) for (let i = 0; i < 4; i++) { const x = W * (.15 + i * .22); farL.appendChild(el('rect', { x: x - 30 * U, y: HZ - 62 * U, width: 22 * U, height: 20 * U, fill: '#FFE082', opacity: .7 })); } }   // lit windows at night
  if (PL.far === 'mountains') { line(`M-120,${HZ} L${W * .18},${HZ - 300 * U} L${W * .36},${HZ - 40} L${W * .55},${HZ - 380 * U} L${W * .78},${HZ - 60} L${W * .9},${HZ - 220 * U} L${W + 120},${HZ - 30}`);
    line(`M${W * .5},${HZ - 300 * U} L${W * .55},${HZ - 380 * U} L${W * .6},${HZ - 300 * U}`); }
  if (PL.far === 'sea') { line(`M-120,${HZ - 10} L${W + 120},${HZ - 10}`); for (let i = 0; i < 7; i++) anim.waves.push({ el: line(`M${W * (.08 + i * .14)},${HZ + 15} q20,-12 40,0 q20,12 40,0`), ph: i * .9 }); }
  if (PL.far === 'river') for (let i = 0; i < 5; i++) anim.waves.push({ el: line(`M${W * (.1 + i * .2)},${HZ + 30 * U} q16,-9 32,0 q16,9 32,0`), ph: i * 1.3 });
  // a few far-away birds crossing the sky now and then (daytime)
  if (!T0.moon && live) for (let i = 0; i < (live > 1 ? 3 : 1); i++) { const b = el('path', { d: 'M-14,0 Q-7,-8 0,0 Q7,-8 14,0', fill: 'none', stroke: dark('#5D6D7E'), 'stroke-width': 3, opacity: .55, 'stroke-linecap': 'round' });
    skyL.appendChild(b); anim.birds.push({ el: b, y: H * (.12 + i * .07), v: 70 + i * 25, ph: i * 9 + 3 }); }
  // weather
  let weather = null;
  if (spec.weather === 'rain' || spec.weather === 'snow') {
    const wg = el('g', { opacity: spec.weather === 'rain' ? .55 : .9 }); wxL.appendChild(wg); const Rw = rng(17), drops = [];
    for (let i = 0; i < 70; i++) { const d = el('path', spec.weather === 'rain' ? { d: 'M0,0 l-6,26', stroke: '#5C9BD5', 'stroke-width': 3, 'stroke-linecap': 'round' } : { d: circ(0, 0, 8, i), fill: '#FFFFFF', stroke: '#90A4AE', 'stroke-width': 2.5 });
      wg.appendChild(d); drops.push({ d, x: Rw() * (W + 100), y: Rw() * H, v: spec.weather === 'rain' ? 900 + Rw() * 300 : 70 + Rw() * 50, sway: Rw() * 6 }); }
    weather = { drops, snow: spec.weather === 'snow' };
  }
  return { g, layers: { skyL, farL, groundL, wxL }, anim, dim: T0.dim || 0, weather };
}
// Living background at time t (u = seconds since the scene's page started to show, f = current camera zoom)
function bgUpdate(bg, t, u, f, zx, zy) {
  const A = bg.anim, lv = A.live;
  // intro: the background settles from a gentle zoom as the scene opens; then parallax follows the camera zoom
  const intro = 1 + .08 * (1 - ease(c01(u / 1.6))) * (lv ? 1 : 0);
  bg.g.setAttribute('transform', intro === 1 ? '' : `translate(${(W / 2 * (1 - intro)).toFixed(1)} ${(H * .45 * (1 - intro)).toFixed(1)}) scale(${intro.toFixed(4)})`);
  const par = (el, k) => { const s = 1 + (f - 1) * k; el.setAttribute('transform', s === 1 ? '' : `translate(${(zx * (1 - s)).toFixed(1)} ${(zy * (1 - s)).toFixed(1)}) scale(${s.toFixed(4)})`); };
  par(bg.layers.skyL, .2); par(bg.layers.farL, .45); par(bg.layers.groundL, .7); par(bg.layers.wxL, .9);
  if (!lv) return;
  for (const c of A.clouds) { const span = c.hi - c.lo, x = ((c.x0 - c.lo + u * c.v * lv) % span + span) % span + c.lo; c.el.setAttribute('transform', `translate(${(x - c.x0).toFixed(1)} 0)`); }
  for (const st of A.stars) st.el.setAttribute('opacity', (st.base * (.55 + .45 * Math.sin(t * st.w + st.ph))).toFixed(2));
  if (A.rays) A.rays.g.setAttribute('transform', `rotate(${(t * 5 * lv % 360).toFixed(2)} ${A.rays.cx} ${A.rays.cy})`);
  if (A.sun) { const k = 1 + .03 * Math.sin(t * 1.3); A.sun.g.setAttribute('transform', `translate(${(A.sun.cx * (1 - k)).toFixed(1)} ${(A.sun.cy * (1 - k)).toFixed(1)}) scale(${k.toFixed(4)})`); }
  if (A.moonGlow) A.moonGlow.setAttribute('opacity', (.14 + .08 * Math.sin(t * .9)).toFixed(3));
  for (const w of A.waves) w.el.setAttribute('transform', `translate(${(8 * Math.sin(t * 1.4 + w.ph)).toFixed(1)} 0)`);
  for (const b of A.birds) { const span = W + 400, x = ((u + b.ph) * b.v * lv) % (span * 2) - 200;   // crosses, then stays away for a while
    if (x > span - 200) { b.el.setAttribute('opacity', '0'); continue; }
    b.el.setAttribute('opacity', '.55'); b.el.setAttribute('transform', `translate(${x.toFixed(1)} ${(b.y + 12 * Math.sin(t * 1.7 + b.ph)).toFixed(1)}) scale(1 ${(1 - .5 * Math.abs(Math.sin(t * 7 + b.ph))).toFixed(2)})`); }
}

// Each scene is a page of paper. Pages are stacked; earlier pages lie on top and are flipped away.
const fullRect = `0,0 ${W},0 ${W},${H} 0,${H}`;
const S = SCENES.map((sc, k) => {
  const page = el('g', { class: 'page', 'clip-path': `url(#page${k})` });
  const cp = el('clipPath', { id: `page${k}` }), poly = el('polygon', { points: fullRect });
  cp.appendChild(poly); defs.appendChild(cp);
  if (!SAND) page.appendChild(el('rect', { width: W, height: H, fill: MARKER ? '#FFFFFF' : '#F7F5EF' }));
  const bg = sc.bg && !SAND ? makeBg(sc.bg) : null; if (bg) page.appendChild(bg.g);   // mood: sky, ground, far sketch (fades in)
  const glow = SAND ? el('ellipse', { cx: CX, cy: CY, rx: 300, ry: 220, fill: '#ffcf7e', opacity: 0, filter: 'url(#sandGlow)' }) : null;   // thinner sand behind the picture
  if (glow) page.appendChild(glow);
  const g = el('g', { filter: SAND ? 'url(#sandCarve)' : 'url(#wobble)' }); page.appendChild(g);
  if (bg && bg.dim) page.appendChild(el('rect', { width: W, height: H, fill: '#1A237E', opacity: bg.dim, style: 'mix-blend-mode:multiply', 'pointer-events': 'none' }));   // night: everything a little darker
  pagesLayer.insertBefore(page, pagesLayer.firstChild);
  number(sc.items); const list = []; render(sc.items, g, 1, list);
  // narration cues: scene.say = 'Kancil walks to the [river] …' → items wrapped in at('river', …) start when that word is spoken
  // say may be one string or a list of sentences: the narrator speaks them one after another while the picture is drawn
  let cues = null, segs = null;
  if (sc.say != null) {
    cues = {}; segs = [];
    (Array.isArray(sc.say) ? sc.say : [sc.say]).forEach((txt, j) => {
      let plain = '', last = 0; const local = {};
      txt.replace(/\[([^\]]+)\]/g, (m, word, i) => { plain += txt.slice(last, i); local[word.toLowerCase()] = plain.length; plain += word; last = i + m.length; return m; });
      plain += txt.slice(last);
      for (const c in local) cues[c] = { seg: j, frac: local[c] / Math.max(1, plain.length) };
      segs.push({ text: plain, est: plain.length / 14 });   // seconds, until the real narration length arrives via narr
    });
  }
  const order = cues ? Object.keys(cues) : [];
  for (const e of list) { const c = e.el.closest && e.el.closest('[data-cue]'); e.cue = c ? c.dataset.cue : null; }
  const rank = e => (e.cue && order.includes(e.cue)) ? 1 + order.indexOf(e.cue) : 0;
  list.sort((a, b) => rank(a) - rank(b) || a.seq - b.seq || a.ord - b.ord);
  { const seen = new Set(); for (const e of list) if (e.cue && cues && cues[e.cue] != null && !seen.has(e.cue)) { e.cueAt = cues[e.cue]; seen.add(e.cue); } }
  return { page, poly, list, hold: sc.hold, content: g, glow, segs, cues, zoom: sc.zoom || null, bg };
});

// ---------- automatic layout fixer (runs before timing, so the hand follows the fixed positions) ----------
// Repairs what an AI-written scene often gets wrong: text inside a bubble/box that is too wide for it,
// items outside the safe area, and items that overlap. video.autofix = false turns it off.
const FIXED = [];
if (VIDEO.autofix !== false) S.forEach((sc, k) => {
  if (SCENES[k].autofix === false) return;   // hand-composed scene: keep every position as written
  const M = 56 * U, gap = 18 * U;
  const nodes = [...sc.content.children].filter(n => !n.classList.contains('acc') && n.dataset.qa !== 'skip' && n.dataset.qa !== 'bg');   // qa:'bg' = ground, water, sky: never moved
  const wrapGroup = id => [...sc.content.children].filter(m => m.dataset.wrap === id);
  const box = n => { if (!n.dataset.wrap) return stageBox(n);   // a wrapped text counts as one block
    const bs = wrapGroup(n.dataset.wrap).map(stageBox).filter(Boolean); if (!bs.length) return null;
    return { x0: Math.min(...bs.map(b => b.x0)), y0: Math.min(...bs.map(b => b.y0)), x1: Math.max(...bs.map(b => b.x1)), y1: Math.max(...bs.map(b => b.y1)) }; };
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
  // the second line of a wrapped text travels with the first
  for (const n of nodes) if (n.dataset.wrap && !attachedTo.has(n)) for (const m of nodes) if (m !== n && m.dataset.wrap === n.dataset.wrap && !attachedTo.has(m)) {
    (attached.get(n) || attached.set(n, []).get(n)).push(m); attachedTo.add(m); }
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
      const clash = placed.filter(p => hit(p.b, o.b) && !container(o, [p]) && !container(p, [o]) && !(o.n.dataset.wrap && o.n.dataset.wrap === p.n.dataset.wrap));
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
// sand: the palm pushes the sand back from right to left; the old picture stays only left of a rough edge
const sweepX = u => W + 120 - (W + 240) * ease(u);
const edgeAt = (x, y) => x + 22 * Math.sin(y * .011 + 1.7) + 9 * Math.sin(y * .043);
const sweepPoly = x => { const a = [{ x: 0, y: 0 }]; for (let y = 0; y <= H; y += 30) a.push({ x: edgeAt(x, y), y }); a.push({ x: 0, y: H }); return a; };
const pilePoly = x => { const a = []; for (let y = -40; y <= H + 40; y += 30) a.push({ x: edgeAt(x, y) - 90, y }); for (let y = H + 40; y >= -40; y -= 30) a.push({ x: edgeAt(x, y) + 70, y }); return a; };
const SWEEP0 = { x: W + 160, y: H * .55 };
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
if (SAND) S.forEach(sc => {   // place each scene's glow behind its drawing (after the layout fixer moved things)
  let b = null; try { b = sc.content.getBBox(); } catch (e) {}
  if (!b || !(b.width > 0)) return;
  const ink = [...sc.content.children].filter(n => n.tagName === 'g').map(stageBox).filter(Boolean);
  const bx = ink.length ? { x0: Math.min(...ink.map(q => q.x0)), y0: Math.min(...ink.map(q => q.y0)), x1: Math.max(...ink.map(q => q.x1)), y1: Math.max(...ink.map(q => q.y1)) } : { x0: b.x, y0: b.y, x1: b.x + b.width, y1: b.y + b.height };
  sc.glow.setAttribute('cx', (bx.x0 + bx.x1) / 2); sc.glow.setAttribute('cy', (bx.y0 + bx.y1) / 2);
  sc.glow.setAttribute('rx', Math.max(260 * U, (bx.x1 - bx.x0) * .6)); sc.glow.setAttribute('ry', Math.max(200 * U, (bx.y1 - bx.y0) * .7));
});
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
      s.base = clamp(s.bb.width * 0.0026, .4, 1.4) * PACE;
    } else {
      s.len = s.el.getTotalLength(); if (!(s.len > 0)) s.len = 200;
      s.el.style.strokeDasharray = `${s.len} ${s.len + 2}`;
      s.base = clamp(s.len * PEN, .1, .85) * PACE;
    }
    s.p0 = pointOn(s, 0); s.p1 = pointOn(s, 1);
    s.travel = prev ? (0.04 + Math.min(.22, Math.hypot(s.p0.x - prev.p1.x, s.p0.y - prev.p1.y) / 5000)) * (PACE > 1 ? 1.3 : 1) : 0;
    prev = s;
  }
});
// Pass 2: lay out time. speed < 1 draws faster; extra = seconds added to every scene's hold.
// Narration length of sentence j in scene k: real audio length from narr (number per scene or list per sentence), else an estimate.
const cues_ = sc => sc.cues || {};
// Exact cue times (seconds from the start of the sentence) measured by scripts/align_words.py, injected by build.py.
const CUE_TIMES = window.HD_CUE_TIMES || {};
const cueSec = (k, j, cue) => { const c = CUE_TIMES[k + 1]; const m = Array.isArray(c) ? c[j] : (j === 0 ? c : null); return m && typeof m[cue] === 'number' ? m[cue] : undefined; };
function segDur(k, j) {
  const sc = S[k], n = NARR[k], G = sc.segs || [];
  if (Array.isArray(n)) return n[j] ?? G[j].est;
  if (typeof n === 'number' && G.length) { const tot = G.reduce((a, g) => a + g.est, 0) || 1; return n * G[j].est / tot; }
  return G[j].est;
}
function layoutTime(speed, extra) {
  let cursor = 0;
  S.forEach((sc, k) => {
    sc.start = cursor; cursor += 0.45; sc.narrStart = sc.start + 0.3;
    const G = sc.segs || [], st = [], en = [];
    // sentence m starts when the previous one has ended and the drawing of the previous part is (almost) done
    // sentences with a [cue] wait until the drawing before it is (almost) done; sentences without a cue follow the previous one
    // straight away, so they fill the time while the hand keeps drawing ("a tall, round tree here…")
    const hasCue = m => Object.values(cues_(sc)).some(c => c.seg === m);
    const open = j => { for (let m = st.length; m <= j; m++) { st[m] = m === 0 ? sc.narrStart : hasCue(m) ? Math.max(en[m - 1] + 0.25, cursor - 0.4) : en[m - 1] + 0.25; en[m] = st[m] + segDur(k, m); } };
    if (G.length) open(0);
    for (const s of sc.list) {
      cursor += s.travel * speed; s.dur = Math.max(.06, s.base * speed);
      if (s.cueAt) { open(s.cueAt.seg); const exact = cueSec(k, s.cueAt.seg, s.cue);   // word time from Whisper if known, else estimated from its position
        cursor = Math.max(cursor, st[s.cueAt.seg] + (exact ?? s.cueAt.frac * (en[s.cueAt.seg] - st[s.cueAt.seg])) - 0.1); }   // wait for the spoken word
      s.start = cursor; s.end = cursor + s.dur; cursor = s.end;
    }
    sc.drawEnd = cursor;
    if (G.length) open(G.length - 1);   // closing sentences after the drawing
    sc.segStarts = st; sc.segEnds = en;
    sc.narrEnd = G.length ? en[en.length - 1] : sc.narrStart + (NARR[k] || 0);
    sc.holdEnd = Math.max(cursor + 0.5 + Math.max(0.7, Math.max(1.2, sc.hold) + extra), sc.narrEnd + 0.7);
    sc.flipEnd = k < S.length - 1 ? sc.holdEnd + FLIP : sc.holdEnd;
    cursor = sc.flipEnd + 0.1;
  });
  return S[S.length - 1].holdEnd + 0.3;
}
let TOTAL = layoutTime(1, 0);
const WARN = [];                // timing / quality warnings, shown under the preview and exported as window.QA
if (MISSING_ICONS.size) WARN.push({ scene: 0, type: 'icon', msg: `ikon tidak ada: ${[...MISSING_ICONS].join(', ')} — digambar sebagai tanda tanya; ganti dengan ikon yang ada atau gambar doodle sendiri` });
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

// living drawings: each act starts when the last stroke inside it is finished; gone items fade when their cue word starts
S.forEach(sc => {
  sc.acts = [...sc.content.querySelectorAll('[data-act]')].map(g => {
    const own = sc.list.filter(x => g.contains(x.el)); let b = null; try { b = g.getBBox(); } catch (e) {}
    return { g, name: g.dataset.act, k: 1 / (+g.dataset.scale || 1), t0: own.length ? Math.max(...own.map(x => x.end)) + 0.15 : sc.start + 0.3,
      bx: b ? b.x + b.width / 2 : 0, by: b ? b.y + b.height : 0, cy: b ? b.y + b.height / 2 : 0 };
  });
  const cueStart = {}; for (const x of sc.list) if (x.cue && cueStart[x.cue] == null) cueStart[x.cue] = x.start;
  // a cue word with nothing drawn on it still has a time: when the narrator says it
  const k = S.indexOf(sc);
  for (const [c, q] of Object.entries(sc.cues || {})) if (cueStart[c] == null && sc.segStarts && sc.segStarts[q.seg] != null)
    cueStart[c] = sc.segStarts[q.seg] + (cueSec(k, q.seg, c) ?? q.frac * (sc.segEnds[q.seg] - sc.segStarts[q.seg]));
  sc.gones = [...sc.content.querySelectorAll('[data-gone]')].map(el => ({ el, t0: cueStart[el.dataset.gone] ?? Infinity }));
  sc.paths = [...sc.content.querySelectorAll('[data-path]')].map(g => {
    const base = g.parentNode.transform.baseVal.consolidate(), m = base ? base.matrix : { e: 0, f: 0 };
    let px = m.e, py = m.f;
    const steps = JSON.parse(g.dataset.path).map(st => { const from = { x: px, y: py }; px = st.x; py = st.y; const cue = cueStart[st.at] ?? Infinity;
      if (st.walk) { const d = st.d ?? Math.max(.6, Math.hypot(st.x - from.x, st.y - from.y) / 200); return { ...st, d, from, t0: cue, t1: cue + d }; }   // walking starts on the word
      const t1 = cue + .15; return { ...st, from, t0: t1 - st.d, t1 }; });   // a jump lands just after the word starts
    return { g, steps, inv: m.a ? 1 / Math.hypot(m.a, m.b) : 1, legs: [...g.querySelectorAll('[data-leg]')] };
  });
  sc.talks = [...sc.content.querySelectorAll('[data-talk]')].map(g => ({ lines: g.dataset.talk.split(',').map(Number),
    mouths: [...g.querySelectorAll('[data-mouth]')].map(m => { let b = null; try { b = m.getBBox(); } catch (e) {} return { m, cx: b ? b.x + b.width / 2 : 0, cy: b ? b.y + b.height * .35 : 0 }; }) }));
  sc.content.querySelectorAll('[data-leg="b"]').forEach(l => { l.style.display = 'none'; });
});
function actTransform(a, t) {
  const u = t - a.t0; if (u <= 0) return '';
  const e = Math.min(1, u / 0.4), k = a.k, S2 = Math.sin, PI2 = 2 * Math.PI;
  const about = (px, py, inner) => `translate(${px.toFixed(1)} ${py.toFixed(1)}) ${inner} translate(${(-px).toFixed(1)} ${(-py).toFixed(1)})`;
  switch (a.name) {
    case 'hop': { const p = (u % 1.3) / 1.3, up = p < .45 ? S2(Math.PI * p / .45) : 0, land = p >= .45 && p < .55 ? S2(Math.PI * (p - .45) / .1) : 0;
      return `translate(0 ${(-42 * k * up * e).toFixed(1)}) ` + about(a.bx, a.by, `scale(${(1 + .05 * land * e).toFixed(3)} ${(1 - .06 * land * e).toFixed(3)})`); }
    case 'bounce': { const v = Math.abs(S2(Math.PI * u / .55)); return `translate(0 ${(-14 * k * v * e).toFixed(1)}) ` + about(a.bx, a.by, `scale(1 ${(1 + .03 * v * e).toFixed(3)})`); }
    case 'breathe': return about(a.bx, a.by, `scale(1 ${(1 + .025 * S2(PI2 * u / 2.4) * e).toFixed(4)})`);
    case 'sway': return about(a.bx, a.by, `rotate(${(3 * S2(PI2 * u / 2.6) * e).toFixed(2)})`);
    case 'shiver': return `translate(${(3 * k * S2(PI2 * 11 * u) * e).toFixed(2)} 0) ` + about(a.bx, a.by, `rotate(${(.8 * S2(PI2 * 7 * u) * e).toFixed(2)})`);
    case 'droop': return about(a.bx, a.by, `rotate(${((2.5 + 1.2 * S2(PI2 * u / 3.2)) * e).toFixed(2)}) scale(1 ${(1 - .02 * e + .012 * S2(PI2 * u / 3.2) * e).toFixed(4)})`);
    case 'bob': return `translate(0 ${(7 * k * S2(PI2 * u / 2.2) * e).toFixed(1)}) ` + about(a.bx, a.cy, `rotate(${(1.5 * S2(PI2 * u / 3.1) * e).toFixed(2)})`);
    case 'pulse': return about(a.bx, a.cy, `scale(${(1 + .07 * S2(PI2 * u / .9) * e).toFixed(3)})`);
    case 'nod': return about(a.bx, a.by, `rotate(${(5 * S2(PI2 * u / 2.8) * e).toFixed(2)})`);
    case 'float': return `translate(0 ${(-8 * k * S2(PI2 * u / 1.8) * e).toFixed(1)})`;
    case 'ripple': return `translate(${(7 * k * S2(PI2 * u / 2.2) * e).toFixed(1)} ${(2 * k * S2(PI2 * u / 1.3) * e).toFixed(1)}) ` + about(a.bx, a.cy, `scale(1 ${(1 + .025 * S2(PI2 * u / 1.7) * e).toFixed(4)})`);
    case 'wave': return about(a.bx, a.by, `skewX(${(4 * S2(PI2 * u / 2.4) * e).toFixed(2)})`);
    case 'wiggle': return about(a.bx, a.by, `rotate(${(2.5 * S2(PI2 * u / 1.6) * e).toFixed(2)})`);
    case 'flutter': return about(a.bx, a.cy, `rotate(${(4 * S2(PI2 * u / .7) * e).toFixed(2)}) scale(1 ${(1 + .04 * S2(PI2 * u / .5) * e).toFixed(3)})`);
    case 'twinkle': return about(a.bx, a.cy, `scale(${(1 + .12 * Math.abs(S2(PI2 * u / 1.1)) * e).toFixed(3)})`);
    case 'none': return '';
    default: return '';
  }
}
// story mode: every finished drawing should move a little, in a way that fits it — warn about drawings that stay frozen
S.forEach((sc, k) => {
  if (!sc.segs || !sc.segs.length) return;   // story scenes only (scene.say)
  const moving = n => n.dataset.act != null || n.dataset.path != null || n.querySelector('[data-act],[data-path]');
  const frozen = [...sc.content.children].filter(n => n.tagName !== 'clipPath' && !n.classList.contains('acc') && !(n.dataset.qa === 'bg' && n.tagName === 'path') && !moving(n));
  if (frozen.length) WARN.push({ scene: k + 1, type: 'diam', msg: `${frozen.length} gambar diam setelah digambar (${frozen.slice(0, 3).map(n => n.tagName === 'text' ? '"' + n.textContent.slice(0, 12) + '"' : 'gambar').join(', ')}) — beri act(): air ripple, rumput wave, pohon sway, benda kecil wiggle, bendera flutter, tokoh breathe, atau none kalau memang diam` });
});
// story narration: warn when the narrator is silent for long while the hand keeps drawing
S.forEach((sc, k) => {
  if (!sc.segs || !sc.segs.length) return;
  const gaps = sc.segStarts.map((s0, j) => [j, (j ? s0 : sc.start + 0.45) - (j ? sc.segEnds[j - 1] : sc.start + 0.45)]);
  gaps.push([sc.segs.length, sc.drawEnd - sc.segEnds[sc.segEnds.length - 1]]);
  const [j, g] = gaps.reduce((a, b) => b[1] > a[1] ? b : a, [0, 0]);
  if (g > 3) WARN.push({ scene: k + 1, type: 'narasi', msg: `narator diam ${g.toFixed(0)} dtk saat gambar masih jalan (sebelum kalimat ke-${j + 1}) — tambahkan ±${Math.round(g * 2.3)} kata komentar/cerita` });
});
function pointOn(s, q) {
  if (s.kind === 't') {
    const b = s.bb, x = b.x + b.width * q, y = b.y + b.height * .72 + Math.sin(q * b.width / 16) * b.height * .1;
    return toStage(s.M, x, y);
  }
  try { const p = s.el.getPointAtLength(s.len * q); return toStage(s.M, p.x, p.y); }
  catch (e) {   // hidden frame (e.g. a preview measured before it is shown): use the path's first / last coordinate
    const n = (s.el.getAttribute('d') || '').match(/-?\d*\.?\d+(?:e-?\d+)?/gi) || ['0', '0'], i = q < .5 ? 0 : Math.max(0, (n.length & ~1) - 2);
    return toStage(s.M, +n[i] || 0, +n[i + 1] || 0);
  }
}
const lerp = (a, b, u) => ({ x: a.x + (b.x - a.x) * u, y: a.y + (b.y - a.y) * u });
function handPos(t) {
  const k = S.findIndex(s => t >= s.start && t <= s.flipEnd); if (k < 0) return OFF;
  const sc = S[k], L = sc.list, first = L[0], last = L[L.length - 1];
  if (t > sc.holdEnd) {                                   // flipping the page by its corner
    const u = (t - sc.holdEnd) / FLIP;
    if (SAND) return { x: sweepX(u) + 40 * AS, y: H * (.55 + .18 * Math.sin(u * Math.PI * 2.5)) };
    return u <= RELEASE ? grabAt(u) : lerp(grabAt(RELEASE), OFF, ease((u - RELEASE) / (1 - RELEASE)));
  }
  if (k < S.length - 1 && t > sc.holdEnd - .5) return lerp(OFF, SAND ? SWEEP0 : GRAB, ease((t - (sc.holdEnd - .5)) / .5));
  if (t < first.start) return lerp(OFF, first.p0, ease(c01((t - (first.start - .4)) / .4)));
  if (t > last.end) return lerp(last.p1, OFF, ease(c01((t - last.end) / .5)));
  for (let i = 0; i < L.length; i++) {
    const s = L[i], n = L[i + 1];
    if (t >= s.start && t <= s.end) return pointOn(s, ease((t - s.start) / s.dur));
    if (n && t > s.end && t < n.start) {
      const gap = n.start - s.end, out = .45, back = .45;
      if (gap > 1.1) {   // a long wait (narrator still talking): the hand leaves the page, then comes back just before the next stroke
        if (t < s.end + out) return lerp(s.p1, OFF, ease((t - s.end) / out));
        if (t > n.start - back) return lerp(OFF, n.p0, ease((t - (n.start - back)) / back));
        return OFF;
      }
      return lerp(s.p1, n.p0, ease((t - s.end) / gap));
    }
  }
  return OFF;
}

// ---------- arm & body (photo forearm rotating at the pen tip, upper arm + torso drawn behind) ----------
// Measured on assets/arm_*.webp (1254×1254): pen tip (81,206), sleeve exits the photo at (1219,1099).
const TIP_IMG = SAND ? { x: 116, y: 120 } : { x: 81, y: 206 }, ELBOW = SAND ? { x: 1080, y: 1010 } : { x: 1138, y: 893 },
  SLEEVE_DIR = SAND ? { x: 0.76, y: 0.65 } : { x: 0.765, y: 0.644 };
const ELBOW_BASE = Math.atan2(ELBOW.y, ELBOW.x);
const SHOULDER = { x: W + 680, y: H + 720 }, UPPER = 420 * AS;            // shoulder rests off-frame; leans in when reaching far
const SLEEVE_L = { lo: 0.0129, mean: 0.0899 }, PEN_L = { lo: 0.0526, mean: 0.1544 };
function tint(hex, st) {   // colour matrix that keeps the fabric/plastic texture but changes its colour
  if (/^rgb/.test(hex)) hex = '#' + hex.match(/\d+/g).slice(0, 3).map(v => (+v).toString(16).padStart(2, '0')).join('');   // style colours read back as rgb()
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

let penNow;
function seek(t) {
  S.forEach((sc, k) => {
    const prevFlipStart = k > 0 ? S[k - 1].holdEnd : -1;
    sc.page.style.display = (t >= prevFlipStart && (t <= sc.flipEnd || k === S.length - 1)) ? '' : 'none';
    if (k < S.length - 1 && t > sc.holdEnd && t <= sc.flipEnd) {
      if (SAND) { const x = sweepX((t - sc.holdEnd) / FLIP); sc.poly.setAttribute('points', pts(sweepPoly(x)));
        document.getElementById('sandPile').setAttribute('points', pts(pilePoly(x))); flipfx.style.display = ''; }
      else {
      const f = foldAt((t - sc.holdEnd) / FLIP), flapPts = pts(cut(RECT, f, false).map(p => reflect(p, f)));
      sc.poly.setAttribute('points', pts(cut(RECT, f, true)));
      flap.setAttribute('points', flapPts); flapShadow.setAttribute('points', flapPts); flipfx.style.display = ''; }
    } else sc.poly.setAttribute('points', fullRect);
    if (sc.bg) { const k0 = k > 0 ? S[k - 1].holdEnd : -0.3;   // fades in while the page turns to it (or at the very start)
      sc.bg.g.style.opacity = String(k === 0 ? Math.min(1, (t + .3) / .8) : c01((t - k0) / Math.max(.4, FLIP * .6)));
      const z = sc.zoom ? ease(c01((t - sc.drawEnd - 0.3) / Math.max(1, sc.holdEnd - sc.drawEnd - 0.3))) : 0, zf = sc.zoom ? 1 + ((sc.zoom.s || 1.15) - 1) * z : 1;
      bgUpdate(sc.bg, t, t - k0, zf, sc.zoom ? sc.zoom.x : W / 2, sc.zoom ? sc.zoom.y : H / 2);
      if (sc.bg.weather) for (const d of sc.bg.weather.drops) { const y = (d.y + t * d.v) % (H + 60) - 30, x = d.x + (sc.bg.weather.snow ? Math.sin(t * 1.3 + d.sway) * 18 : -((d.y + t * d.v) % (H + 60)) * .23);
        d.d.setAttribute('transform', `translate(${x.toFixed(1)} ${y.toFixed(1)})`); } }
    for (const a of sc.acts || []) a.g.setAttribute('transform', actTransform(a, t));
    for (const pth of sc.paths || []) {   // offset from the drawn position, in the group's own (scaled) units
      let x = 0, y = 0, rot = 0, stepping = null; const o = pth.steps.length ? pth.steps[0].from : { x: 0, y: 0 };
      for (const st of pth.steps) {
        if (t >= st.t1) { x = st.x - o.x; y = st.y - o.y; rot = 0; continue; }
        if (t > st.t0) { const q = (t - st.t0) / st.d, e2 = q * q * (3 - 2 * q);
          const lin = st.walk ? q : e2;   // walking moves at an even pace
          x = st.from.x - o.x + (st.x - st.from.x) * lin; y = st.from.y - o.y + (st.y - st.from.y) * lin - st.h * Math.sin(Math.PI * q); rot = -st.tilt * Math.cos(Math.PI * q);
          if (st.walk || st.flap) { stepping = Math.floor((t - st.t0) * 3.6) % 2; if (st.walk) y -= 5 * Math.abs(Math.sin(Math.PI * (t - st.t0) * 3.6)); } }
        break;
      }
      pth.g.setAttribute('transform', `translate(${(x * pth.inv).toFixed(1)} ${(y * pth.inv).toFixed(1)}) rotate(${rot.toFixed(1)})`);
      for (const l of pth.legs) l.style.display = (stepping === 1 ? l.dataset.leg === 'b' : l.dataset.leg === 'a') ? '' : 'none';
    }
    for (const tk of sc.talks || []) {   // mouth flaps while this character's sentences are spoken
      const j = tk.lines.find(n => sc.segStarts && t >= sc.segStarts[n - 1] && t < sc.segEnds[n - 1]);
      for (const mo of tk.mouths) { if (!j) { mo.m.setAttribute('transform', ''); continue; }
        const u = t - sc.segStarts[j - 1], o2 = Math.abs(Math.sin(2 * Math.PI * 3.1 * u)) * (.55 + .45 * Math.abs(Math.sin(2 * Math.PI * .9 * u + 1)));
        mo.m.setAttribute('transform', `translate(${mo.cx} ${mo.cy}) scale(1 ${(1 + 1.1 * o2).toFixed(3)}) translate(${-mo.cx} ${-mo.cy})`); }
    }
    for (const g of sc.gones || []) g.el.style.opacity = t < g.t0 ? '' : String(Math.max(0, 1 - (t - g.t0) / .3));
    if (sc.zoom) {   // slow camera push-in while the finished picture rests: scene.zoom = { x, y, s }
      const z = ease(c01((t - sc.drawEnd - 0.3) / Math.max(1, sc.holdEnd - sc.drawEnd - 0.3))), f = 1 + ((sc.zoom.s || 1.15) - 1) * z;
      sc.content.setAttribute('transform', f === 1 ? '' : `translate(${(sc.zoom.x * (1 - f)).toFixed(1)} ${(sc.zoom.y * (1 - f)).toFixed(1)}) scale(${f.toFixed(4)})`);
    }
    if (sc.glow) sc.glow.setAttribute('opacity', (.32 * c01((t - sc.start) / (sc.drawEnd - sc.start + .01))).toFixed(3));
    for (const s of sc.list) {
      const q = ease(c01((t - s.start) / s.dur));
      if (s.kind === 't') s.rect.setAttribute('width', q >= 1 ? (s.bb.width + 24 + 4 * W).toFixed(1) : ((s.bb.width + 24) * q).toFixed(1));   // fully open when written, so a late font can never cut the text
      else { s.el.style.visibility = q > 0 ? 'visible' : 'hidden'; s.el.style.strokeDashoffset = s.len * (1 - q); }
    }
  });
  if (!S.some((sc, k) => k < S.length - 1 && t > sc.holdEnd && t <= sc.flipEnd)) flipfx.style.display = 'none';
  placeArm(handPos(t));
  if (MARKER) {   // the pen takes the colour of the stroke being drawn, as if the artist switched markers
    let col = null;
    for (const sc of S) { if (t < sc.start || t > sc.holdEnd) continue;
      for (const x of sc.list) { if (x.start > t) break; col = x.el.style.stroke || x.el.style.fill || null; } }
    if (col !== penNow) { penNow = col; const layer = document.getElementById('penLayer');
      layer.style.display = col ? '' : 'none'; if (col) document.getElementById('penMatrix').setAttribute('values', tint(col, PEN_L).matrix); }
  }
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
    const boxes = [...sc.content.children].filter(n => !n.classList.contains('acc') && n.dataset.qa !== 'skip' && n.dataset.qa !== 'bg')
      .map(n => ({ n, b: stageBox(n), name: name(n) })).filter(o => o.b);
    for (const o of boxes) {
      const b = o.b;
      if (b.x0 < M0 || b.y0 < M0 || b.x1 > W - M0 || b.y1 > H - M0) WARN.push({ scene: k + 1, type: 'batas', msg: `${o.name} keluar area aman` });
      if (o.n.dataset.shrink && +o.n.dataset.shrink < .7) WARN.push({ scene: k + 1, type: 'teks', msg: `${o.name} terlalu panjang (diperkecil ${Math.round((1 - o.n.dataset.shrink) * 100)}%)` });
    }
    for (let i = 0; i < boxes.length; i++) for (let j = i + 1; j < boxes.length; j++) {
      const a = boxes[i].b, c = boxes[j].b;
      if (inside(a, c) || inside(c, a)) continue;                        // text inside a bubble/button is intended
      if (boxes[i].n.dataset.wrap && boxes[i].n.dataset.wrap === boxes[j].n.dataset.wrap) continue;   // two lines of one wrapped text
      const ix = Math.min(a.x1, c.x1) - Math.max(a.x0, c.x0), iy = Math.min(a.y1, c.y1) - Math.max(a.y0, c.y0);
      if (SCENES[k].autofix === false) continue;   // hand-composed: overlaps are intended
      if (ix > 12 && iy > 12 && ix * iy > .12 * Math.min((a.x1 - a.x0) * (a.y1 - a.y0), (c.x1 - c.x0) * (c.y1 - c.y0)))
        WARN.push({ scene: k + 1, type: 'tabrakan', msg: `${boxes[i].name} bertabrakan dengan ${boxes[j].name}` });
    }
    const drawings = boxes.filter(o => o.n.tagName === 'g');
    const bigText = boxes.some(o => o.n.tagName === 'text' && +o.n.getAttribute('font-size') >= 180 * U);
    if (drawings.length && !bigText && Math.max(...drawings.map(o => Math.max((o.b.x1 - o.b.x0) / W, (o.b.y1 - o.b.y0) / H))) < (drawings.length >= 3 ? .18 : .3))
      WARN.push({ scene: k + 1, type: 'kecil', msg: 'gambar utama terlalu kecil (perbesar sampai ±50% lebar/tinggi layar)' });
    if (sc.list.length > (NARROW ? 40 : 50) * (PACE > 1 ? 1.4 : 1)) WARN.push({ scene: k + 1, type: 'ramai', msg: `${sc.list.length} goresan — terlalu ramai, sederhanakan` });
  });
  // structure: hook first, CTA last (layout.hook / layout.cta, or { kind: 'hook' | 'cta', ... } on a custom scene)
  if (SCENES[0] && SCENES[0].kind !== 'hook') WARN.unshift({ scene: 1, type: 'struktur', msg: 'adegan pertama bukan HOOK — pakai layout.hook (pertanyaan / fakta mengejutkan)' });
  if (SCENES.length > 1 && SCENES[SCENES.length - 1].kind !== 'cta') WARN.push({ scene: SCENES.length, type: 'struktur', msg: 'adegan terakhir bukan CTA — pakai layout.cta' });
  WARN.forEach(w => console.warn(`HandDrawn QA${w.scene ? ' adegan ' + w.scene : ''}: ${w.msg}`));
}
window.QA = WARN;
if (!isFinite(TOTAL)) {   // should never happen; show it instead of a blank page
  document.querySelector('.frame').insertAdjacentHTML('beforeend', '<p style="color:#b00;font:14px sans-serif;padding:12px">Animation timing could not be computed (TOTAL = ' + TOTAL + ').</p>');
  throw new Error('HandDrawn: TOTAL is not finite');
}
window.seek = seek; window.TOTAL = TOTAL; window.FPS = FPS;
window.HD_DEBUG = { S };   // for inspecting timing from the console
// Timeline for the audio mixer (scripts/mix.py): when narration starts, when the pen touches paper, when pages flip.
// Pen-tip speed while drawing, sampled 50×/s (0 = pen lifted). Drawing sound follows it: steady hiss on long lines,
// rhythmic scratches when colouring back and forth, short bursts when writing, silence while the hand travels.
const PSR = 50;
const penSpeed = (() => {
  const strokes = S.flatMap(sc => sc.list).filter(x => x.end > x.start).sort((a, b) => a.start - b.start);
  const n = Math.ceil(TOTAL * PSR) + 1, out = new Array(n).fill(0); let i = 0;
  for (let fr = 0; fr < n; fr++) {
    const t = fr / PSR; while (i < strokes.length && strokes[i].end < t) i++;
    const st = strokes[i]; if (!st || t < st.start) continue;
    const t0 = Math.max(st.start, t - .01), t1 = Math.min(st.end, t + .01); if (t1 <= t0) continue;
    const a = handPos(t0), b = handPos(t1); out[fr] = Math.round(Math.hypot(b.x - a.x, b.y - a.y) / (t1 - t0));
  }
  return out;
})();
window.TIMELINE = {
  total: TOTAL, fps: FPS, w: W, h: H, style: SAND ? 'sand' : 'whiteboard',
  scenes: S.map(s => ({ start: s.start, narrStart: s.narrStart, drawEnd: s.drawEnd, holdEnd: s.holdEnd, flipEnd: s.flipEnd, segStarts: s.segStarts || [], segEnds: s.segEnds || [] })),
  strokes: S.flatMap(s => s.list.map(x => [+x.start.toFixed(3), +x.end.toFixed(3), x.kind])),
  flips: S.slice(0, -1).map(s => s.holdEnd),
  psr: PSR, penSpeed,
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
// ---------- preview sound (browser only; the MP4 gets its sound from scripts/mix.py) ----------
// Sound effects follow the strokes, a whoosh plays at every page change, generated music loops softly and ducks under
// the narrator. The narrator is the browser's own voice reading scene.say (preview only; the MP4 uses real TTS).
const AUD = (() => {
  let ctx = null, on = false, scrib, scribFilter, scribGain, music, musicGain, lastT = 0, spokenFor = -1, voice = null;
  const lang = cfg.lang || (document.documentElement.lang === 'en' ? 'en-US' : 'id-ID');
  const wantMale = /male|cowok|pria/i.test(cfg.voice || '') && !/female/i.test(cfg.voice || '');
  const pickVoice = () => { const vs = (window.speechSynthesis && speechSynthesis.getVoices()) || [];
    const mine = vs.filter(v => v.lang && v.lang.toLowerCase().startsWith(lang.slice(0, 2)));
    const fem = /female|woman|aria|jenny|zira|samantha|ava|allison|susan|gadis|damayanti|google us english|google bahasa/i, mal = /male|man|guy|david|mark|daniel|ardi|andika/i;
    voice = mine.find(v => (wantMale ? mal : fem).test(v.name) && !(wantMale ? /female/i : /\bmale\b/i).test(v.name)) || mine[0] || null; };
  if (window.speechSynthesis) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
  // Recorded narration embedded by `build.py --audio <dir> --embed-audio` (window.HD_NARR_AUDIO): played in the preview
  // exactly where the MP4 will have it; scenes or sentences without a recording fall back to the browser voice.
  const REC = window.HD_NARR_AUDIO || null, recBuf = {}, recPlaying = {};
  const recItems = () => { const out = []; S.forEach((sc, k) => { const r = REC && REC[k + 1]; if (!r) return;
    if (Array.isArray(r)) (sc.segStarts || []).forEach((t0, j) => r[j] && out.push({ key: `${k}_${j}`, t0 }));
    else out.push({ key: `${k}_0`, t0: (sc.segStarts && sc.segStarts[0]) ?? sc.narrStart }); }); return out; };
  async function decodeRec() {
    if (!REC) return;
    for (const [k, v] of Object.entries(REC)) for (const [j, url] of (Array.isArray(v) ? v : [v]).entries()) {
      if (!url) continue;
      try { const b64 = url.split(',')[1], bin = atob(b64), u8 = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
        recBuf[`${k - 1}_${j}`] = await ctx.decodeAudioData(u8.buffer); } catch (e) { console.warn('narration audio', k, j, e); }
    }
  }
  const stopRec = () => { for (const key in recPlaying) { try { recPlaying[key].stop(); } catch (e) {} delete recPlaying[key]; } };
  function syncRec(t) {   // keep each recorded sentence playing exactly while the timeline is inside it (works with pause and seek)
    for (const it of recItems()) { const b = recBuf[it.key]; if (!b) continue;
      const inside = t >= it.t0 && t < it.t0 + b.duration - .05;
      if (inside && !recPlaying[it.key]) { const src = ctx.createBufferSource(); src.buffer = b; src.connect(ctx.destination);
        src.start(0, Math.max(0, t - it.t0)); recPlaying[it.key] = src; src.onended = () => { if (recPlaying[it.key] === src) delete recPlaying[it.key]; }; }
      if (!inside && recPlaying[it.key]) { try { recPlaying[it.key].stop(); } catch (e) {} delete recPlaying[it.key]; }
    }
  }
  const hasRec = (k, j) => { const r = REC && REC[k + 1]; return !!(r && (Array.isArray(r) ? r[j] : j === 0)); };   // recorded → never use the browser voice
  const say = (k, j) => { if (hasRec(k, j)) return; const g = S[k].segs && S[k].segs[j]; if (!g || !window.speechSynthesis) return;
    const u = new SpeechSynthesisUtterance(g.text.replace(/[“”"]/g, ''));
    u.lang = lang; if (voice) u.voice = voice; u.rate = PACE > 1 ? .9 : 1; u.pitch = 1.05; speechSynthesis.speak(u); };
  const noise = (sec) => { const b = ctx.createBuffer(1, ctx.sampleRate * sec, ctx.sampleRate), d = b.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; return b; };
  function whoosh(when) {
    const src = ctx.createBufferSource(); src.buffer = noise(1.5);
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = SAND ? 900 : 1400; bp.Q.value = .6;
    const g = ctx.createGain(); g.gain.setValueAtTime(0, when); g.gain.linearRampToValueAtTime(SAND ? 1.1 : .8, when + .35); g.gain.exponentialRampToValueAtTime(.001, when + 1.3);
    src.connect(bp).connect(g).connect(ctx.destination); src.start(when); src.stop(when + 1.5);
  }
  function makeMusic(mood) {   // a short plucked loop + soft pad, rendered once into a buffer
    const C = [60, 64, 67, 72], Am = [57, 60, 64, 69], F = [53, 57, 60, 65], G7 = [55, 59, 62, 67];
    const M = { calm: { bpm: 76, ch: [C, Am, F, G7], pat: [0, 2, 1, 3, 2, 1, 3, 2], dec: 1.6, oct: 0 },
      playful: { bpm: 112, ch: [C, F, G7, C], pat: [0, 2, 3, 2, 1, 2, 3, 2], dec: 4.5, oct: 12 },
      upbeat: { bpm: 108, ch: [C, G7, Am, F], pat: [0, 2, 3, 2, 1, 2, 3, 2], dec: 3, oct: 0 } }[mood] || null;
    const m = M || { bpm: 76, ch: [C, Am, F, G7], pat: [0, 2, 1, 3, 2, 1, 3, 2], dec: 1.6, oct: 0 };
    const sr = ctx.sampleRate, step = 60 / m.bpm / 2, len = Math.round(32 * step * sr), buf = ctx.createBuffer(2, len, sr);
    const L = buf.getChannelData(0), Rr = buf.getChannelData(1), hz = n => 440 * Math.pow(2, (n - 69) / 12);
    for (let i = 0; i < 32; i++) {
      const note = m.ch[Math.floor(i / 8)][m.pat[i % 8]] + m.oct, f0 = hz(note), start = Math.round(i * step * sr), n = Math.round(1.6 * sr);
      for (let j = 0; j < n; j++) { const tt = j / sr, v = (Math.sin(2 * Math.PI * f0 * tt) + .3 * Math.sin(4 * Math.PI * f0 * tt)) * Math.exp(-tt * m.dec) * .18;
        const k = (start + j) % len; L[k] += v; Rr[k] += v * .9; }
    }
    for (let c = 0; c < 4; c++) { const a = Math.round(c * 8 * step * sr), n = Math.round(8 * step * sr);
      for (let j = 0; j < n; j++) { const tt = j / sr, env = Math.sin(Math.PI * j / n) * .035;
        let v = 0; for (const nn of m.ch[c]) v += Math.sin(2 * Math.PI * hz(nn - 12) * tt); L[a + j] += v * env; Rr[a + j] += v * env; } }
    return buf;
  }
  function start() {
    if (!ctx) {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      const src = ctx.createBufferSource(); src.buffer = noise(3); src.loop = true;
      const hp = ctx.createBiquadFilter(); hp.type = 'bandpass'; hp.frequency.value = SAND ? 2600 : 3200; hp.Q.value = SAND ? .5 : .9; scribFilter = hp;
      scribGain = ctx.createGain(); scribGain.gain.value = 0; src.connect(hp).connect(scribGain).connect(ctx.destination); src.start();
      music = ctx.createBufferSource(); music.buffer = makeMusic(VIDEO.music || (SAND ? 'calm' : PACE > 1 ? 'playful' : 'calm')); music.loop = true;
      musicGain = ctx.createGain(); musicGain.gain.value = 0; music.connect(musicGain).connect(ctx.destination); music.start();
    }
    ctx.resume(); on = true; spokenFor = -1; decodeRec();
    { const o = ctx.createOscillator(), g = ctx.createGain(), w = ctx.currentTime;   // short "ting" so you know sound is on
      o.frequency.value = 880; g.gain.setValueAtTime(.25, w); g.gain.exponentialRampToValueAtTime(.001, w + .5);
      o.connect(g).connect(ctx.destination); o.start(w); o.stop(w + .55); }
  }
  function stop() { on = false; stopRec(); if (ctx) { scribGain.gain.setTargetAtTime(0, ctx.currentTime, .05); musicGain.gain.setTargetAtTime(0, ctx.currentTime, .2); }
    if (window.speechSynthesis) speechSynthesis.cancel(); }
  function update(t, playing) {
    if (!ctx || !on) { lastT = t; return; }
    const now = ctx.currentTime;
    if (!playing) { scribGain.gain.setTargetAtTime(0, now, .05); musicGain.gain.setTargetAtTime(0, now, .3); stopRec(); lastT = t; return; }
    syncRec(t);
    const sp = penSpeed[Math.min(penSpeed.length - 1, Math.round(t * PSR))] || 0, v = Math.min(1.3, sp / 1200);   // pen-tip speed → loudness and brightness
    scribGain.gain.setTargetAtTime(Math.pow(v, .8) * (SAND ? .16 : .1) * (.85 + .3 * Math.random()), now, .015);
    scribFilter.frequency.setTargetAtTime((SAND ? 1500 : 1900) + (SAND ? 1500 : 2400) * Math.min(1, v), now, .03);
    for (const fl of window.TIMELINE.flips) if (lastT < fl && t >= fl) whoosh(now);
    S.forEach((sc, k) => (sc.segStarts || []).forEach((t0, j) => { const id = k * 100 + j; if (lastT < t0 && t >= t0 && spokenFor !== id) { spokenFor = id; say(k, j); } }));
    const speaking = Object.keys(recPlaying).length > 0 || (window.speechSynthesis && speechSynthesis.speaking);
    musicGain.gain.setTargetAtTime(speaking ? .16 : .42, now, .25);
    lastT = t;
  }
  function jumped(t) { lastT = t; spokenFor = -1; stopRec(); if (window.speechSynthesis) speechSynthesis.cancel(); }
  function status() {
    const voices = window.speechSynthesis ? speechSynthesis.getVoices().length : 0;
    if (REC) return `audio: ${ctx ? ctx.state : 'belum'} · narator: rekaman (${Object.keys(recBuf).length} file)`;
    return `audio: ${ctx ? ctx.state : 'belum'} · narator: ${!window.speechSynthesis ? 'tidak didukung' : voice ? voice.name : voices ? 'tidak ada suara ' + lang : 'memuat…'}`;
  }
  return { start, stop, update, jumped, status, get on() { return on; } };
})();
const soundBtn = document.createElement('button'); soundBtn.type = 'button'; soundBtn.textContent = '🔊 Putar dengan suara';
playBtn.parentNode.insertBefore(soundBtn, playBtn);
const soundInfo = document.createElement('span'); soundInfo.className = 'time'; soundInfo.style.textAlign = 'left';
soundBtn.after(soundInfo);
soundBtn.addEventListener('click', () => {
  if (AUD.on) { AUD.stop(); soundBtn.textContent = '🔊 Putar dengan suara'; soundInfo.textContent = 'suara mati'; return; }
  try { AUD.start(); } catch (e) { soundInfo.textContent = 'suara gagal: ' + e.message; console.error(e); return; }
  t = 0; AUD.jumped(0); setPlaying(true); soundBtn.textContent = '🔇 Matikan suara';
  setTimeout(() => { soundInfo.textContent = AUD.status(); }, 600);
});
restartBtn.addEventListener('click', () => AUD.jumped(0));
range.addEventListener('input', () => AUD.jumped(+range.value));
playBtn.addEventListener('click', () => { if (!playing && window.speechSynthesis) speechSynthesis.cancel(); });
(function loop(now) {
  if (playing) { t += (now - last) / 1000; if (t >= TOTAL) { t = TOTAL; setPlaying(false); } }
  last = now; seek(t); AUD.update(t, playing);
  range.value = t.toFixed(2); timeEl.textContent = `${fmt(t)} / ${fmt(TOTAL)}`;
  requestAnimationFrame(loop);
})(performance.now());
})().catch(e => {   // show a readable error instead of a blank page, so it can be pasted back into the chat
  console.error(e);
  const box = document.createElement('div'); box.className = 'qa';
  box.style.cssText = 'margin:16px;font:14px/1.5 system-ui,sans-serif;color:#ffb8a8;background:#2e2220;border:1px solid #6b3b33;border-radius:6px;padding:10px 14px';
  box.textContent = 'Error HandDrawn: ' + (e && e.message || e) + ' — tempel pesan ini ke chat supaya adegannya diperbaiki.';
  (document.querySelector('.wrap') || document.body).appendChild(box);
});
} };
})();
