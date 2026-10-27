---
name: create-scratch-slide
description: >-
  Tạo trang trình chiếu HTML buổi học Scratch (InnoMind) từ curriculum markdown.
  Slide theo phong cách "Interactive Lab": phòng thí nghiệm mô phỏng bấm-để-thấy,
  Bác sĩ Scratch bấm-xem-phương-thuốc, minigame Đúng/Sai (click, có nút Câu tiếp theo)
  và Đấu trường Quiz có danh hiệu. Dùng khi user yêu cầu tạo/sửa slide/deck.
---

# Create Scratch Slide (InnoMind Standard) 🚀

Tạo file HTML **một file tự chứa 100%** (CSS + JS inline), phong cách Scratch, 100% tiếng Việt, lứa tuổi 7–10.

> Quy chuẩn gốc nằm ở `AGENTS.md` (mục 4 = Interactive Lab). File này là **cách làm cụ thể**: copy component từ đâu, cấu trúc HTML/JS ra sao, kiểm thử thế nào. Nếu hai nơi mâu thuẫn, `AGENTS.md` thắng.

---

## 1. Nguồn để copy (không viết lại từ đầu)

| Cần gì | Copy từ |
|--------|---------|
| Khung slide, topbar, dots, progress, fullscreen, swipe, phím tắt | `tuan-13-buoi-25.html` |
| Phong cách tương tác mới nhất, **buổi Học** (15 slide, 4 lab mô phỏng) | `tuan-16-buoi-31.html` |
| Phong cách tương tác mới nhất, **buổi Bài tập** (15 slide, lab hoạt hình, máy gợi ý, huy hiệu) | `tuan-3-buoi-6.html` |

- **Tên file:** `tuan-{tuần}-buoi-{buổi}.html` ở thư mục gốc repo.
- **Tự chứa 100%:** chỉ Google Font Nunito, không thư viện ngoài.
- **100% Tiếng Việt chuẩn Scratch**, không song ngữ trong `.block`.
- **Không âm thanh:** chỉ animation (`shake`, `bounce`, `popIn`, `slotSpin`, `pulse`). Lab về âm thanh cũng chỉ mô phỏng bằng hình.
- **Đổi metadata khi copy:** `<title>`, `aria-valuemax`, `counter` mặc định `1 / N`, `brandSub` (`· Tuần X Buổi Y`), badge Tuần/Buổi, câu "Bật mí buổi sau", ghi chú giáo viên.

---

## 2. Khung slide & thành phần (tóm tắt — chi tiết ở `slide-map.md`)

**Buổi Học (14–15 slide):** Tiêu đề → Khung giờ → **Khởi động tương tác** → Kiến thức mới (thẻ bấm xem khối lệnh) → **Demo 1–3, mỗi demo có lab bên phải** → **Bác sĩ Scratch** → **Minigame Đúng/Sai** → TH1 → TH2 → **Quiz** → Rà soát & lưu (checklist bấm-để-tick) → Tổng kết (huy hiệu) → Ghi chú GV.

**Buổi Bài tập (12–15 slide):** Tiêu đề → **Khởi động Đúng/Sai** → Trạm kỹ năng (thẻ + **lab**) → LT1 → LT2 (+ máy gợi ý) → **Bác sĩ Scratch** → Giới thiệu Mức A/B/C → các slide Mức → Thử thách thêm → **Quiz** → Showcase (huy hiệu) → Ghi chú GV.

Slot Machine chỉ dùng khi buổi cần gợi ý sáng tạo (khởi động dự án, brainstorm, hoặc slide "Bí ý tưởng?" trong TH/LT như `story-gen`).

---

## 3. Thư viện Component

### 3.1. Khối Scratch tiếng Việt

```html
<div class="blocks-container compact">
  <div class="block event">khi nhận <span class="block-arg">BatDau v</span></div>
  <div class="block control c-block">
    <span class="block-head">liên tục</span>
    <div class="c-body">
      <div class="block motion">di chuyển <span class="block-arg">5</span> bước</div>
    </div>
  </div>
</div>
```

Màu: `event` vàng · `motion` xanh dương · `looks` tím · `control` cam nhạt · `variable` cam · `sound` hồng · `sensing` xanh nhạt · `music` xanh ngọc (tiện ích Âm nhạc). Khối tùy chọn "thử thêm": `.block.optional` (viền đứt).

#### ⚠️ Cạm bẫy bắt buộc tránh: header `.c-block` có điều kiện

`.block.c-block` dùng `display:flex; flex-direction:column`. Header **trộn text với `<span class="block-arg">`** (`nếu <đang chạm [X]?> thì`, `lặp lại cho đến khi <...>`) sẽ bị tách thành nhiều dòng nếu không bọc trong **một** `<span class="block-head">`:

```html
<!-- ❌ SAI — vỡ thành 3 dòng -->
<div class="block control c-block">
  nếu &lt;đang chạm <span class="block-arg">PhiHanhGia v</span>?&gt; thì
  <div class="c-body">...</div>
</div>

<!-- ✅ ĐÚNG -->
<div class="block control c-block">
  <span class="block-head">nếu &lt;đang chạm <span class="block-arg">PhiHanhGia v</span>?&gt; thì</span>
  <div class="c-body">...</div>
</div>
```

CSS: `.block-head { display: block; }`. Cứ bọc `.block-head` cho **mọi** header `.c-block` cho khỏi phải nhớ. Phải soi ảnh chụp mọi slide có khối điều kiện trước khi báo hoàn thành.

### 3.2. Phòng thí nghiệm mô phỏng (`.anim-lab`) — thành phần cốt lõi

Khung:

```html
<div class="anim-lab" id="xxLab">
  <div class="anim-lab-title">📢 Phòng thí nghiệm …</div>
  <div class="xx-stage"><!-- sân khấu mini: sprite emoji, nhãn trạng thái --></div>
  <div class="anim-btns">           <!-- .three nếu 3 nút -->
    <button class="btn-anim" id="btnXxOk">✅ Cách đúng</button>
    <button class="btn-anim danger" id="btnXxBad">❌ Quên / dùng sai</button>
  </div>
  <div class="anim-feedback" id="xxFeedback">Gợi ý bấm thử…</div>
</div>
```

JS mẫu — `async` + `runId`, hằng số có tên:

```js
const XX_STEP_MS = 300;
let xxRunId = 0;
function resetXx() { xxRunId++; /* trả sân khấu về ban đầu */ }
async function runXx(isCorrect) {
  resetXx();
  const runId = xxRunId;
  for (let i = 0; i < STEPS; i++) {
    await sleep(XX_STEP_MS);
    if (runId !== xxRunId) return;     // bị Làm lại / bấm nút khác → bỏ
    /* cập nhật hình */
  }
  feedback.innerHTML = isCorrect ? '<span style="color:#15803d;">🎉 …</span>' : '<span style="color:#dc2626;">⚠️ … vì sao lỗi</span>';
}
```

Các lab đã có (copy nguyên):

| Lab | Nguồn | Dạy điều gì |
|-----|-------|-------------|
| Phòng thí nghiệm hoạt hình (`#animLab`) | buổi 6 | `đợi` giữa các lần đổi trang phục vs quên `đợi` |
| Game Lab công tắc + thanh cuốn hút (`.game-lab`) | buổi 31 | Nút Bắt đầu / nhạc / tiếng ting làm game hấp dẫn hơn |
| Phòng thí nghiệm Phát tin (`#bcLab`) | buổi 31 | Tên tin khớp vs gõ sai chữ hoa |
| Phòng thí nghiệm âm thanh (`#sndLab`) | buổi 31 | `bắt đầu âm thanh` vs `phát âm thanh … cho đến hết` |
| Phòng thí nghiệm Thắng/Thua (`#endLab`) | buổi 31 | Luật thắng/thua bằng phát tin; công tắc 🐞 quên `dừng lại [tập lệnh này]` |
| Điều khiển từ xa (`.rm-lab`) | buổi 7 | Khởi động bấm-lệnh thay cho trò vận động; người máy làm theo nút bấm |
| Phi thuyền (`#shipLab`, `.mini-stage.focusable`) | buổi 7 | `khi nhấn phím` + `thay đổi x/y`; bàn phím thật chỉ nhận khi **click Sân khấu (focus)**; nút "Thêm khối ← →" |
| Ai nghe sự kiện nào? (`#evtLab`) | buổi 7 | Mỗi khối Events chỉ chạy khi đúng sự kiện; chuỗi vừa chạy sáng lên |
| Điệp viên đoán phím (`#spyLab`) | buổi 7 | Bản máy tính của trò chơi cặp "đoán phím" |
| Săn lỗi trên game mẫu (`#huntLab`, `.hotspot`) | buổi 32 | Click chỗ đáng nghi → lỗi vào Phiếu Bắt Lỗi (có 1 điểm "không phải lỗi" làm bẫy) |
| Cân bằng game (`#balLab`, 2 thanh trượt) | buổi 32 | Tốc độ rơi / độ nhạy phím ↔ thời gian thực tính từ 30 khung hình/giây, thanh "độ vui" |
| Bảng theo dõi sửa lỗi (`#fixBoard`) | buổi 32 | Bấm thẻ đổi Cần sửa → Đang sửa → Đã sửa |

> Phím mũi tên của slide trùng với phím của lab: lab có bàn phím phải gọi `e.stopPropagation()` trong `keydown` của chính Sân khấu (xem `#shipStage` ở buổi 7), nếu không bấm ↑ ↓ sẽ lật slide.

Khi thêm lab mới: mô phỏng phải **đúng Scratch thật** (xem `AGENTS.md` 4.1).

### 3.3. Bác sĩ Scratch — bấm để xem phương thuốc

```html
<div class="clinic-card">
  <span class="clinic-badge sick">Bệnh 1: Nhảy cóc 🐸</span>
  <span class="clinic-symptom">Chỉ thấy trang phục cuối.</span>
  <button class="btn-cure">💊 Xem phương thuốc</button>
  <div class="clinic-cure">Thêm <code>đợi (0.3) giây</code> …</div>   <!-- ẩn cho đến khi .cured -->
</div>
```
```js
document.querySelectorAll('.btn-cure').forEach(btn =>
  btn.addEventListener('click', e => { e.stopPropagation(); btn.closest('.clinic-card').classList.add('cured'); }));
```
Bên trái đặt 1–2 script "bệnh nhân" (`.blocks-container.compact`) + hộp `highlight-box red` liệt kê triệu chứng và câu hỏi "Cả lớp tìm xem có mấy bệnh?".

### 3.4. Minigame Đúng / Sai (click — KHÔNG vận động thể chất)

HTML: `.arena-wrap` > `.arena-rule-bar` (+ `#arenaStreak`) · `.arena-scenario` (`#arenaEmoji/#arenaText/#arenaSub`) · `.arena-btns` (`#btnArenaTrue/#btnArenaFalse`) · `#arenaFeedback` · `#btnArenaNext` (ẩn).

Quy tắc JS (copy từ buổi 31):
- Sau khi trả lời: khóa 2 nút, thêm `.right`/`.wrongc` lên card (bounce / shake), cập nhật streak, **hiện `#btnArenaNext`**. **Không** `setTimeout` tự sang câu.
- Sai → hiển thị `Chưa đúng, đáp án là ĐÚNG/SAI! …`; dữ liệu `explain` **không** bắt đầu bằng "ĐÚNG!/SAI!".
- Câu cuối → nút đổi thành "Chơi lại từ đầu 🔄", reset streak.
- 6–7 tình huống `{ emoji, text, sub, answer, explain }`, xen kẽ đúng/sai.

### 3.5. Đấu trường Quiz

```html
<div class="quiz-arena">
  <div class="quiz-header"><span id="quizProgressText">Câu hỏi 1 / 5</span><span id="quizScoreText">⭐ Điểm: 0</span></div>
  <div class="quiz-question-box" id="quizQuestion"></div>
  <div class="quiz-options" id="quizOptions"></div>
  <div class="quiz-explain" id="quizExplain"></div>
  <div class="quiz-nav-row"><button class="btn-quiz-next" id="btnQuizNext">Câu tiếp theo ➡️</button></div>
</div>
```
5 câu × 20 điểm; **đáp án đúng rải đều A/B/C/D**; cuối buổi: cúp `.trophy` + danh hiệu theo `quizTitleFor(score)` (≥ 80 / ≥ 40 / còn lại).

### 3.6. Các component nhỏ

| Component | Class / id | Ghi chú |
|-----------|-----------|---------|
| Thẻ kiến thức bấm xem khối lệnh | `.k-card` > `.btn-reveal` + `.k-reveal` | toggle `.open`, đổi nhãn nút "👀 Xem / 🙈 Ẩn khối lệnh" |
| Máy gợi ý 3 guồng | `.story-gen`, `.story-reel`, `.btn-spin` | `slotSpin` + `landed`; copy hàm `spinReel` (`Promise.all` với `STAGGER`) |
| Checklist rà soát | `.checklist.interactive` + `.check-progress` | tick toggle + thanh tiến độ + câu chúc khi đủ |
| Huy hiệu | `.award-grid` > `.award` | toggle `.lit` |

**Mọi handler gọi `e.stopPropagation()`** và container phải nằm trong danh sách loại trừ của listener `click` điều hướng (xem `AGENTS.md` 4.1).

---

## 4. Quy trình tạo slide mới

1. **Đọc giáo án** `thang-*.md` đúng buổi (thời lượng, TH/LT, nội dung Bật mí buổi sau). **Đối chiếu hành vi khối lệnh với Scratch thật**; giáo án sai thì sửa trong slide và báo người dùng.
2. **Chọn deck nguồn** ở mục 1 (Học → buổi 31; Bài tập → buổi 6), copy toàn bộ file sang tên mới.
3. **Thay nội dung:** tiêu đề/metadata, khối lệnh, dữ liệu Đúng/Sai (6–7), Quiz (5), thẻ Bác sĩ (3–4), **lab mới cho khái niệm của buổi** (mục 3.2), ghi chú GV + phân bổ thời gian khớp số slide.
4. **Đồng bộ số slide:** `aria-valuemax`, `counter` mặc định, `data-index`, chỉ số slide trong phân bổ thời gian của slide GV.
5. **Kiểm thử** (mục 5) rồi mới báo hoàn thành.

---

## 5. Kiểm thử bắt buộc

Dùng skill `run-scratchcurriculum` hoặc Playwright headless. Tối thiểu:

1. Viewport **1366×768** và **1920×1080**: mỗi `.slide-body` không tràn (`scrollHeight - clientHeight === 0`); ghi nhận `pageerror` / `console.error` (bỏ qua lỗi tải Google Font khi offline) — phải rỗng.
2. Đi qua toàn bộ slide, **bấm thử từng nút** của mọi lab / minigame / quiz / checklist / huy hiệu, `sleep` đủ lâu (lab async) rồi chụp ảnh.
3. **Xem ảnh** các slide có lab, Bác sĩ, Tổng kết, và mọi slide có khối lệnh điều kiện (không vỡ dòng `.c-block`).
4. Kiểm tra đường thắng lẫn thua của lab có nhiều nhánh; bấm "Làm lại" giữa chừng không để lại trạng thái treo.

Mẹo: slide chuyển ~0.32s nên chờ ≥ 450ms sau khi bấm → trước khi chụp; chỉ slide đang `active` mới bấm được.
