---
name: create-scratch-slide
description: >-
  Tạo trang trình chiếu HTML buổi học Scratch (InnoMind) từ curriculum markdown.
  Tự động tích hợp Design System hiện đại, Vòng quay ý tưởng (Slot machine),
  Minigame vận động và Đấu trường Quiz trắc nghiệm. Dùng khi user yêu cầu tạo slide/deck.
---

# Create Scratch Slide (InnoMind Standard) 🚀

Tạo file HTML **một file tự chứa 100%** (CSS + JS inline), phong cách Scratch, 100% tiếng Việt, lứa tuổi 7–10, dựa trên mẫu chuẩn vàng **`tuan-13-buoi-25.html`**.

---

## 1. Mẫu Chuẩn Vàng & Quy Tắc Nền Tảng

- **Luôn bắt đầu bằng việc copy hoặc tham chiếu** `tuan-13-buoi-25.html` ở thư mục gốc repo.
- **Tên file chuẩn:** `tuan-{tuần}-buoi-{buổi}.html` (ví dụ: `tuan-13-buoi-26.html`).
- **Tự chứa 100%:** CSS inline trong `<style>`, JS inline trong `<script>`, không dùng thư viện ngoài (chỉ Google Font Nunito).
- **100% Tiếng Việt Chuẩn Scratch:** Toàn bộ nội dung, câu hỏi và khối lệnh `.block` đều viết bằng tiếng Việt chuẩn Scratch cho lứa tuổi 7–10. Không dùng song ngữ.
- **Hiệu ứng âm thanh:** **Chỉ dùng visual animation** (rung lắc `shake`, nảy nở `bounce`, xoay `slotSpin`, chuỗi streak `🔥`). KHÔNG dùng file âm thanh hoặc Web Audio API để tránh gây ồn lớp học.

---

## 2. Quy chuẩn Thành phần Tương tác (BẮT BUỘC)

### A. Buổi Học (Lý thuyết — ~14–15 slide):
1. **🎬 Khởi động tương tác (Slide 2):** Câu hỏi mở gợi cảm xúc, kích thích thảo luận cả lớp ("Game em thích nhất là gì?").
2. **🌌 Kho tàng Vũ trụ Chủ đề (Slide 5):** Thẻ trưng bày 6 thế giới truyền cảm hứng (Vũ trụ, Biển, Tiền sử, Ma thuật, Cyberpunk, Kẹo ngọt).
3. **🎰 Máy phát ý tưởng Slot Machine (Slide 6):** 3 guồng quay ngẫu nhiên [Bối cảnh] × [Nhân vật] × [Nhiệm vụ] kèm hiệu ứng quay số `slotSpin` và nút *"Thử ý tưởng Độc - Lạ"*.
4. **🏃 Minigame vận động "Thắng hay Thua?" / "Đúng hay Sai?" (Slide 10):**
   - Vận động lớp học: 🙋 Giơ tay (Thắng) / 🙇 Ngồi thụp xuống (Thua).
   - Card đổi màu xanh/đỏ, rung lắc `shake` khi sai, nảy nở khi đúng, đếm chuỗi streak `🔥`.
5. **🏆 Đấu trường Quiz Game Design (Slide 12):**
   - 5 câu trắc nghiệm A/B/C/D click chọn trực tiếp.
   - Hiện lời giải thích chi tiết, chấm điểm tự động và trao cúp vinh danh.
6. **👩‍🏫 Ghi chú cho giáo viên (Slide 15):** Hướng dẫn sư phạm phân hóa học sinh nhanh/chậm và mẹo điều phối.

### B. Buổi Bài tập (Thực hành — ~12–13 slide):
1. **🎬 Khởi động ôn tập:** Đoán game / trắc nghiệm chớp nhoáng củng cố bài trước.
2. **🔁 Trạm kỹ năng cốt lõi:** Bảng tổng hợp các khối lệnh then chốt.
3. **🩺 Bác sĩ Scratch sửa lỗi mẫu (Debugging Clinic):** Bảng chẩn đoán bệnh án lỗi logic và phương thuốc điều trị.
4. **🎯 Thử thách phân tầng 3 mức độ A/B/C:**
   - Mức A: Cơ bản & My Blocks
   - Mức B: Bác sĩ Debug
   - Mức C: Game nâng cao / Remix
5. **🖼️ Showcase & Tổng kết:** Trình chiếu sản phẩm, khen ngợi và cổ vũ.

---

## 3. Thư viện Component Sẵn Dùng

### 3.1. Khối Scratch Tiếng Việt
```html
<div class="blocks">
  <div class="block event">khi bấm vào 🏳️</div>
  <div class="block variable indent">đặt [điểm] thành (0)</div>
  <div class="block control c-block indent">
    liên tục
    <div class="c-body">
      <div class="block motion">di chuyển (5) bước</div>
    </div>
  </div>
</div>
```

### 3.2. Vòng quay Ý tưởng (Slot Machine)
```html
<div class="slot-machine-container">
  <div class="slot-reels">
    <div class="reel-box" id="reel1">
      <span class="reel-label">Vũ trụ / Bối cảnh</span>
      <div class="reel-val" id="reelVal1">🚀 Vũ trụ Viễn tưởng</div>
    </div>
    <div class="reel-box" id="reel2">
      <span class="reel-label">Nhân vật chính</span>
      <div class="reel-val" id="reelVal2">🐱 Mèo Ninja</div>
    </div>
    <div class="reel-box" id="reel3">
      <span class="reel-label">Thể loại &amp; Nhiệm vụ</span>
      <div class="reel-val" id="reelVal3">🍎 Thu thập Tinh thể</div>
    </div>
  </div>
  <div class="slot-actions">
    <button class="btn-spin" id="btnSpin">🎰 QUAY Ý TƯỞNG MỚI!</button>
    <button class="btn-quick-idea" id="btnPresetIdea">💡 Thử ý tưởng Độc - Lạ</button>
  </div>
  <div class="slot-result-banner" id="slotBanner">
    👉 <strong>Ý tưởng Game:</strong> Em điều khiển <strong>Mèo Ninja</strong> trong <strong>Vũ trụ</strong> để <strong>Thu thập Tinh thể</strong>!
  </div>
</div>
```

### 3.3. Minigame Vận động (Win/Lose Arena)
```html
<div class="arena-container">
  <div class="arena-status-bar">
    <span>🙋 Giơ 2 tay = <strong>THẮNG</strong> &nbsp;|&nbsp; 🙇 Ngồi thụp xuống = <strong>THUA</strong></span>
    <span class="arena-streak" id="arenaStreak">🔥 Chuỗi đúng: 0</span>
  </div>
  <div class="arena-card" id="arenaCard">
    <div style="font-size:2rem;" id="arenaEmoji">🍎</div>
    <div class="arena-prompt" id="arenaPrompt">Bắt đủ 15 quả táo!</div>
    <div class="arena-subprompt" id="arenaSubprompt">Biến Điểm = 15</div>
  </div>
  <div class="arena-buttons">
    <button class="btn-arena win" id="btnChooseWin">🏆 ĐÂY LÀ THẮNG! (Giơ tay 🙋)</button>
    <button class="btn-arena lose" id="btnChooseLose">💥 ĐÂY LÀ THUA! (Ngồi xuống 🙇)</button>
  </div>
  <div class="arena-feedback" id="arenaFeedback">
    Cả lớp cùng thực hiện động tác trước khi thầy/cô bấm kiểm tra!
  </div>
</div>
```

### 3.4. Đấu trường Quiz (Interactive Quiz Arena)
```html
<div class="quiz-arena">
  <div class="quiz-header">
    <span id="quizProgressText">Câu hỏi 1 / 5</span>
    <span id="quizScoreText" style="color:var(--scratch-orange); font-weight:900;">⭐ Điểm: 0</span>
  </div>
  <div class="quiz-question-box" id="quizQuestion">
    1. Thế nào là định nghĩa đúng của một trò chơi (Game)?
  </div>
  <div class="quiz-options" id="quizOptions">
    <!-- Render options qua JS -->
  </div>
  <div class="quiz-explain" id="quizExplain">
    <!-- Giải thích chi tiết sau khi bấm chọn -->
  </div>
  <div class="quiz-nav-row">
    <button class="btn-quiz-next" id="btnQuizNext">Câu tiếp theo ➡️</button>
  </div>
</div>
```

---

## 4. Tài liệu tham chiếu

- Ánh xạ chi tiết markdown → slide: [slide-map.md](slide-map.md)
