---
name: run-scratchcurriculum
description: >-
  Serve, launch, and drive the ScratchCurriculum slide decks (self-contained
  HTML presentations for the InnoMind Scratch course). Use when asked to run,
  start, preview, or screenshot a `tuan-*.html` slide deck, or to verify a
  slide-deck edit actually renders and navigates correctly.
---

This repo is a set of standalone, self-contained HTML slide decks
(`tuan-*.html` — no build step, no server-side code). Drive it via
`.claude/skills/run-scratchcurriculum/driver.py`: it serves the repo root
over HTTP and drives a headless Chromium (Playwright) with one command per
line, chromium-cli style.

All paths below are relative to the repo root.

## Prerequisites

Python 3 with the `playwright` package and its Chromium browser installed
(already satisfied in this environment; on a fresh machine):

```bash
python -m pip install playwright
python -m playwright install chromium
```

No Node install, no `npm run` — the decks are plain HTML/CSS/JS files.

## Run (agent path)

Pipe commands to the driver's stdin. It starts its own static file server
(default port 8765) and a headless Chromium session, then executes commands
in order:

```bash
python .claude/skills/run-scratchcurriculum/driver.py --session smoke <<'EOF'
nav tuan-3-buoi-5.html
wait-for .slide.active
text #counter
screenshot 01-slide1
press ArrowRight
press ArrowRight
sleep 400
text #counter
screenshot 02-slide3
console
quit
EOF
```

Screenshots land in
`.claude/skills/run-scratchcurriculum/screenshots/<session>/<name>.png`
(also mirrored to `screenshot.png` in that folder as the latest one).

| command | what it does |
|---|---|
| `nav <file.html>` | Navigate to `http://localhost:<port>/<file.html>` (or an absolute URL) |
| `screenshot [name]` | Full-page PNG to `screenshots/<session>/` |
| `click <selector>` | Click first element matching a CSS selector |
| `press <key>` | Send a keyboard key to the page (`ArrowRight`, `Home`, `End`, `f`, ` `, `Escape`) |
| `text <selector>` | Print `textContent` of the first match |
| `count <selector>` | Print number of matching elements |
| `eval <js>` | Evaluate a JS expression in the page, print JSON result |
| `wait-for <selector>` | Wait until a selector is visible |
| `sleep [ms]` | Pause (default 400ms) |
| `console` | Print any collected `console.error` output |
| `quit` | Close the browser and exit |

Slide navigation is keyboard-driven (`ArrowRight`/`ArrowLeft`/`Space`/`Home`/`End`),
so `press` is how you page through a deck — there's no URL fragment per slide.
`.checklist li` and `.quiz-item` are click-to-toggle; only the active slide's
elements are visible/clickable, so navigate to the right slide first.

## Run (human path)

```bash
python -m http.server 8765
```

Then open `http://localhost:8765/tuan-3-buoi-5.html` in a browser.
Useless in a headless/agent context — use the driver above instead.

## Test

There is no automated test suite (static content repo). "Testing" a slide
deck means driving it with the script above and eyeballing the screenshots,
plus checking `console` for JS errors after clicking through checklist/quiz
elements.

## Gotchas

- **Slides CSS-transition (~0.32s).** A `screenshot` taken immediately after
  `press ArrowRight` catches two slides mid-fade overlapping each other
  (verified — looked like ghosting/double text). Add `sleep 400` between a
  `press` and a `screenshot` you actually care about.
- **Only the active slide is interactable.** Every `.slide` stays in the DOM
  (classed `prev`/`active`/`next`), so a selector like `.checklist li` will
  resolve to *an* element even on the wrong slide — `click` then times out
  with "element is not visible" rather than erroring on a missing selector.
  `press Home`/`End`/`ArrowRight` to the right slide index before clicking.
- **Windows console encoding.** Vietnamese slide text echoed back through
  `text`/`eval`/error messages breaks on the default `cp1258` codepage
  (`UnicodeEncodeError`). The driver forces UTF-8 stdout/stderr — don't
  remove that `sys.stdout.reconfigure(encoding="utf-8")` line.
- **Fullscreen works headless.** `press f` toggles `document.fullscreenElement`
  successfully even in headless Chromium (verified) — no special flag needed.
- **Slide counts differ per file.** `tuan-1-buoi-1.html` (Khai giảng + Buổi 1)
  has 18 slides; most others have 13 — don't hardcode `total`, read `#counter`
  or `count .slide` instead.
