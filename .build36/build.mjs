import fs from 'node:fs';
import { body, TOTAL } from './body.mjs';

const SRC = new URL('../tuan-3-buoi-6.html', import.meta.url);
const OUT = new URL('../tuan-18-buoi-36.html', import.meta.url);
const lines = fs.readFileSync(SRC, 'utf8').split(/\r?\n/);
const line = n => lines[n - 1];

// Khung + CSS gốc (dòng 1–313), đổi title
let head = lines.slice(0, 313).join('\n')
  .replace('<title>Tuần 3 — Buổi 6: Luyện Hiển thị &amp; Âm nhạc</title>', '<title>Tuần 18 — Buổi 36: Luyện Trọng lực</title>');
if (!head.includes('Buổi 36')) throw new Error('Không thay được <title>');
const extraCss = fs.readFileSync(new URL('./extra.css', import.meta.url), 'utf8');

// Engine điều hướng (dòng 975–1043) — đổi nhãn & danh sách loại trừ click
let engine = lines.slice(974, 1043).join('\n')
  .replace("'· Tuần 3 Buổi 6'", "'· Tuần 18 Buổi 36'")
  .replace(/e\.target\.closest\('button, code, [^']*'\)/,
    "e.target.closest('button, code, .global-topbar, .nav, .quiz-arena, .arena-wrap, .anim-lab, .pl-stage, .story-gen, .clinic-card, .k-card, .award-grid, .checklist.interactive')");
if (!engine.includes('Tuần 18 Buổi 36') || !engine.includes('.pl-stage')) throw new Error('Engine chưa được vá');

const app = fs.readFileSync(new URL('./app.js', import.meta.url), 'utf8');

const html = `${head}
${extraCss}  </style>
</head>
<body>

<div class="progress-bar" id="progressBar" role="progressbar" aria-valuemin="1" aria-valuemax="${TOTAL}" aria-valuenow="1"></div>

<header class="global-topbar">
  <div class="brand">
    <span class="brand-icon">🍎</span>
    <span>InnoMind <span class="brand-sub" id="brandSub">· Scratch</span></span>
  </div>
  <div class="slide-dots" id="dots" aria-label="Chọn slide"></div>
  <div class="topbar-actions">
    <button class="icon-btn" id="btnFullscreen" title="Toàn màn hình (F)">⛶</button>
  </div>
</header>

<div class="deck" id="deck">
${body}

</div>

<nav class="nav" aria-label="Điều hướng slide">
  <button id="btnPrev" title="Slide trước (←)" aria-label="Slide trước">&#8592;</button>
  <span class="slide-counter" id="counter" aria-live="polite">1 / ${TOTAL}</span>
  <button id="btnNext" title="Slide sau (→)" aria-label="Slide sau">&#8594;</button>
</nav>
<p class="hint" id="hint">← → hoặc Phím cách · F toàn màn hình · Esc thoát · click hai bên màn hình</p>
<button class="fs-exit" id="btnExitFs" title="Thoát toàn màn hình (Esc)">✕</button>

<script>
${engine}
${app}
</script>
</body>
</html>
`;
fs.writeFileSync(OUT, html, 'utf8');
console.log('OK', TOTAL, 'slides', html.length, 'chars');
