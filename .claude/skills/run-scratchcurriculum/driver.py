#!/usr/bin/env python3
"""
REPL driver for the ScratchCurriculum slide decks (static, self-contained
HTML files). Serves the repo root over HTTP and drives a headless Chromium
via Playwright, one command per stdin line, chromium-cli style.

Usage:
    python driver.py [--port 8765] [--session NAME]
    (then pipe commands to stdin, or run interactively)

Commands:
    nav <file.html>        Navigate to http://localhost:<port>/<file.html>
    screenshot [name]       Save a full-page PNG to screenshots/<session>/
    click <selector>        Click the first element matching a CSS selector
    press <key>              Send a keyboard key to the page (e.g. ArrowRight)
    text <selector>          Print textContent of the first match
    count <selector>         Print number of elements matching a selector
    eval <js-expression>     Evaluate JS in the page, print the JSON result
    wait-for <selector>      Wait until a selector is visible
    sleep [ms]                Pause (default 400ms) — slides CSS-transition
                               over ~0.32s; screenshot right after a `press`
                               catches the fade mid-flight
    console                  Print any collected console errors
    quit                     Close the browser and exit
"""
import argparse
import json
import sys
import threading
import time
import http.server
import functools
from pathlib import Path

from playwright.sync_api import sync_playwright

# Windows consoles default to a legacy code page (e.g. cp1258) that can't
# encode Vietnamese slide text echoed back by `text`/`eval`/error messages.
sys.stdout.reconfigure(encoding="utf-8")
sys.stderr.reconfigure(encoding="utf-8")

REPO_ROOT = Path(__file__).resolve().parents[3]
SKILL_DIR = Path(__file__).resolve().parent


def start_server(port):
    handler = functools.partial(
        http.server.SimpleHTTPRequestHandler, directory=str(REPO_ROOT)
    )
    server = http.server.ThreadingHTTPServer(("127.0.0.1", port), handler)
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    return server


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--port", type=int, default=8765)
    parser.add_argument("--session", default="default")
    args = parser.parse_args()

    shot_dir = SKILL_DIR / "screenshots" / args.session
    shot_dir.mkdir(parents=True, exist_ok=True)

    server = start_server(args.port)
    console_errors = []

    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1440, "height": 900})
        page.on(
            "console",
            lambda msg: console_errors.append(msg.text) if msg.type == "error" else None,
        )
        shot_counter = 0

        print(f"[driver] serving {REPO_ROOT} on http://localhost:{args.port}", flush=True)
        print("[driver] ready", flush=True)

        for raw in sys.stdin:
            line = raw.strip()
            if not line or line.startswith("#"):
                continue
            parts = line.split(maxsplit=1)
            cmd = parts[0]
            arg = parts[1] if len(parts) > 1 else ""

            try:
                if cmd == "nav":
                    url = arg if arg.startswith("http") else f"http://localhost:{args.port}/{arg}"
                    page.goto(url, wait_until="load")
                    print(f"[ok] nav {url}")
                elif cmd == "screenshot":
                    shot_counter += 1
                    name = arg or f"{shot_counter:02d}"
                    out = shot_dir / f"{name}.png"
                    page.screenshot(path=str(out), full_page=True)
                    latest = shot_dir / "screenshot.png"
                    page.screenshot(path=str(latest), full_page=True)
                    print(f"[ok] screenshot {out}")
                elif cmd == "click":
                    page.click(arg, timeout=5000)
                    print(f"[ok] click {arg}")
                elif cmd == "press":
                    page.keyboard.press(arg)
                    print(f"[ok] press {arg}")
                elif cmd == "text":
                    print(page.text_content(arg))
                elif cmd == "count":
                    print(page.locator(arg).count())
                elif cmd == "eval":
                    result = page.evaluate(arg)
                    print(json.dumps(result))
                elif cmd == "wait-for":
                    page.wait_for_selector(arg, state="visible", timeout=10000)
                    print(f"[ok] wait-for {arg}")
                elif cmd == "sleep":
                    ms = int(arg or "400")
                    time.sleep(ms / 1000)
                    print(f"[ok] sleep {ms}ms")
                elif cmd == "console":
                    if console_errors:
                        for e in console_errors:
                            print(f"[console-error] {e}")
                    else:
                        print("[ok] no console errors")
                elif cmd == "quit":
                    break
                else:
                    print(f"[error] unknown command: {cmd}")
            except Exception as e:
                print(f"[error] {cmd}: {e}")

        browser.close()
    server.shutdown()


if __name__ == "__main__":
    main()
