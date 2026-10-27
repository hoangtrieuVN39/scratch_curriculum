import sys, re, json, time, threading, functools, http.server
from pathlib import Path
from playwright.sync_api import sync_playwright

sys.stdout.reconfigure(encoding="utf-8")
ROOT = Path(__file__).resolve().parents[1]
OUT = Path(__file__).resolve().parent / "shots"
OUT.mkdir(exist_ok=True)
FILE = "tuan-18-buoi-36.html"
PORT = 8791

handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=str(ROOT))
class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass
handler = functools.partial(Quiet, directory=str(ROOT))
server = http.server.ThreadingHTTPServer(("127.0.0.1", PORT), handler)
threading.Thread(target=server.serve_forever, daemon=True).start()

errors = []

def goto_slide(page, idx):
    page.evaluate(f"goTo({idx})")
    page.wait_for_timeout(500)

def run(vw, vh, tag):
    with sync_playwright() as p:
        b = p.chromium.launch()
        page = b.new_page(viewport={"width": vw, "height": vh})
        page.on("pageerror", lambda e: errors.append(f"[{tag}] pageerror: {e}"))
        page.on("console", lambda m: errors.append(f"[{tag}] console.{m.type}: {m.text}") if m.type == "error" and "fonts.g" not in m.text and "ERR_" not in m.text else None)
        page.goto(f"http://127.0.0.1:{PORT}/{FILE}", wait_until="load")
        page.wait_for_timeout(400)
        total = page.evaluate("total")
        print(f"[{tag}] total slides = {total}, counter = {page.text_content('#counter')}, aria-valuemax = {page.get_attribute('#progressBar','aria-valuemax')}")
        # overflow check on every slide
        for i in range(total):
            goto_slide(page, i)
            ov = page.evaluate("""() => { const s = document.querySelector('.slide.active'); const b = s.querySelector('.slide-body'); const m = s.querySelector('.slide-main');
              return { body: b ? b.scrollHeight - b.clientHeight : 0, main: m.scrollHeight - m.clientHeight }; }""")
            flag = "" if ov["body"] <= 0 and ov["main"] <= 0 else "   <<< OVERFLOW"
            print(f"[{tag}] slide {i+1}: overflow body={ov['body']} main={ov['main']}{flag}")
        b.close()

def interact():
    with sync_playwright() as p:
        b = p.chromium.launch()
        page = b.new_page(viewport={"width": 1366, "height": 768})
        page.on("pageerror", lambda e: errors.append(f"[interact] pageerror: {e}"))
        page.on("console", lambda m: errors.append(f"[interact] console.{m.type}: {m.text}") if m.type == "error" and "fonts.g" not in m.text and "ERR_" not in m.text else None)
        page.goto(f"http://127.0.0.1:{PORT}/{FILE}", wait_until="load")
        page.wait_for_timeout(300)
        shot = lambda n: page.screenshot(path=str(OUT / f"{n}.png"))

        # slide 1
        shot("s01")
        # slide 2 arena
        goto_slide(page, 1)
        shot("s02-start")
        expected = [False, True, False, True, False, True]
        for i, ans in enumerate(expected):
            # click the WRONG answer on the 2nd question to see feedback, otherwise right
            choose_true = ans if i != 1 else (not ans)
            page.click("#btnArenaTrue" if choose_true else "#btnArenaFalse")
            page.wait_for_timeout(500)
            fb = page.inner_text("#arenaFeedback")
            streak = page.inner_text("#arenaStreak")
            print(f"arena q{i+1}: {fb[:90]} | {streak} | next visible={page.is_visible('#btnArenaNext')} label={page.inner_text('#btnArenaNext')}")
            if i == 1: shot("s02-wrong")
            if i == 2: shot("s02-right")
            page.click("#btnArenaNext"); page.wait_for_timeout(350)
        print("after restart:", page.inner_text("#arenaText")[:50], page.inner_text("#arenaStreak"))

        # slide 3 k-cards + lab A
        goto_slide(page, 2)
        for btn in page.query_selector_all("#slLabA .btn-reveal"):
            btn.click(); page.wait_for_timeout(120)
        page.wait_for_timeout(300)
        shot("s03-cards")
        for bid, nm in [("btnLaOk", "ok"), ("btnLaNoGround", "noGround"), ("btnLaNoSnap", "noSnap")]:
            page.click(f"#{bid}")
            page.wait_for_timeout(600)
            shot(f"s03-lab-{nm}-mid")
            page.wait_for_timeout(3200)
            print(f"labA {nm}: y={page.inner_text('#laY')} vy={page.inner_text('#laVy')} | {page.inner_text('#laFeedback')[:110]}")
            shot(f"s03-lab-{nm}-end")

        # slide 4 lab B
        goto_slide(page, 3)
        shot("s04-start")
        for bid, nm, wait in [("btnLbOk", "ok", 7500), ("btnLbNoDamp", "noDamp", 5500), ("btnLbOutside", "outside", 3800)]:
            page.click(f"#{bid}")
            page.wait_for_timeout(1500)
            if nm == "ok": shot("s04-lab-ok-mid")
            page.wait_for_timeout(wait)
            print(f"labB {nm}: vy={page.inner_text('#lbVy')} power={page.inner_text('#lbPower')} dots={page.locator('#lbStage .pl-dot').count()} | {page.inner_text('#lbFeedback')[:120]}")
            shot(f"s04-lab-{nm}-end")
        # restart mid-run
        page.click("#btnLbOk"); page.wait_for_timeout(300); page.click("#btnLbNoDamp"); page.wait_for_timeout(300)
        print("labB restart mid-run dots (should be small):", page.locator('#lbStage .pl-dot').count())

        # slide 5 lab C
        goto_slide(page, 4)
        shot("s05-start")
        # jump before start
        page.click("#btnLcJump"); print("labC jump before start:", page.inner_text('#lcFeedback')[:80])
        # lose path: start and never jump
        page.click("#btnLcStart")
        page.wait_for_timeout(2600)
        shot("s05-lab-hit")
        page.wait_for_timeout(2600)
        print("labC lose:", page.inner_text('#lcState'), "|", page.inner_text('#lcFeedback')[:140])
        shot("s05-lab-stopped")
        # win path: time the jump. obstacle reaches char at ~ frame (240+100)/6 = 57; jump ~ frame 42-46
        page.click("#btnLcStart")
        for _ in range(400):
            x = page.evaluate("lcX")
            if x < LCJUMP_X: break
            page.wait_for_timeout(4)
        page.click("#btnLcJump")
        page.wait_for_timeout(500)
        shot("s05-lab-jump")
        # try double jump in air
        page.click("#btnLcJump"); print("labC air jump:", page.inner_text('#lcFeedback')[:100])
        page.wait_for_timeout(1800)
        print("labC after jump: dodged =", page.inner_text('#lcDodged'), "state =", page.inner_text('#lcState'), "| fb:", page.inner_text('#lcFeedback')[:90])
        # bug toggle path
        page.click("#btnLcBug"); print("bug btn:", page.inner_text('#btnLcBug'))
        page.click("#btnLcStart")
        page.wait_for_timeout(6200)
        print("labC bug on:", page.inner_text('#lcState'), "|", page.inner_text('#lcFeedback')[:140])
        shot("s05-lab-bug")
        page.click("#btnLcReset")
        print("labC reset:", page.inner_text('#lcState'), page.inner_text('#lcDodged'))

        # slide 6 clinic
        goto_slide(page, 5)
        shot("s06-before")
        for btn in page.query_selector_all("#slLabA ~ section .btn-cure, .slide.active .btn-cure"):
            btn.click(); page.wait_for_timeout(100)
        page.wait_for_timeout(300)
        shot("s06-after")

        for i in (6, 7, 8, 9):
            goto_slide(page, i); shot(f"s{i+1:02d}")

        # slide 11 quiz: pick answers [1,3,0,2,1] except wrong first
        goto_slide(page, 10)
        picks = [0, 3, 0, 2, 1]   # first one wrong deliberately -> 80 pts
        for qi, pk in enumerate(picks):
            page.click(f"#quizOptions .quiz-opt-btn[data-opt='{pk}']"); page.wait_for_timeout(350)
            if qi == 0: shot("s11-wrong")
            if qi == 1: shot("s11-right")
            page.click("#btnQuizNext"); page.wait_for_timeout(350)
        print("quiz final:", page.inner_text('#quizQuestion')[:80], "|", page.inner_text('#quizOptions')[:60])
        shot("s11-final")

        # slide 12 checklist
        goto_slide(page, 11)
        items = page.query_selector_all("#finalChecklist li")
        for li in items[:3]:
            li.click(); page.wait_for_timeout(100)
        print("check mid:", page.inner_text('#checkStatus'))
        shot("s12-mid")
        for li in items[3:]:
            li.click(); page.wait_for_timeout(100)
        print("check full:", page.inner_text('#checkStatus'))
        page.wait_for_timeout(500); shot("s12-full")

        # slide 13 awards
        goto_slide(page, 12)
        for a in page.query_selector_all(".slide.active .award"):
            a.click(); page.wait_for_timeout(100)
        page.wait_for_timeout(300); shot("s13")
        goto_slide(page, 13); shot("s14")

        # click near the edge of a component must not change slide
        goto_slide(page, 2)
        before = page.evaluate("current")
        box = page.locator("#labA").bounding_box()
        page.mouse.click(box["x"] + 3, box["y"] + 3)
        page.wait_for_timeout(300)
        print("edge click keeps slide:", before == page.evaluate("current"))
        b.close()

LCJUMP_X = -24   # nhấn Nhảy khi hòn đá còn cách nhân vật (x=-100) khoảng 76 đơn vị

if __name__ == "__main__":
    mode = sys.argv[1] if len(sys.argv) > 1 else "all"
    if mode in ("all", "overflow"):
        run(1366, 768, "1366x768")
        run(1920, 1080, "1920x1080")
    if mode in ("all", "interact"):
        interact()
    print("\n=== ERRORS ===")
    print("\n".join(errors) if errors else "none")
    server.shutdown()
