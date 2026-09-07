---
name: create-scratch-slide
description: >-
  Tạo trang trình chiếu slide HTML tương tác cao cho các buổi học Scratch InnoMind
  từ tài liệu markdown giáo án (thang-*-*.md). Tự động tích hợp Design System hiện đại,
  Vòng quay ý tưởng (Slot machine), Minigame vận động (Thắng/Thua) và Đấu trường Quiz trắc nghiệm.
---

# Kỹ năng Tạo Slide Bài giảng Scratch (InnoMind Standard) 🚀

Kỹ năng này cung cấp toàn bộ quy trình, Design System và thư viện Component sẵn có để tạo ra một file trình chiếu HTML **độc lập, tự chứa 100%, thẩm mỹ đỉnh cao** dựa theo mẫu chuẩn vàng **`tuan-13-buoi-25.html`**.

---

## 1. Mẫu Chuẩn Vàng & Quy Tắc Cốt Lõi

- **File mẫu chuẩn:** `tuan-13-buoi-25.html` ở thư mục gốc repo.
- **Tên file đầu ra:** `tuan-{tuần}-buoi-{buổi}.html` (ví dụ: `tuan-13-buoi-26.html`).
- **Tự chứa hoàn toàn:** Mọi CSS nằm trong `<style>`, JavaScript nằm trong `<script>`. Không import CSS/JS bên ngoài (chỉ dùng Google Font Nunito).
- **Ngôn ngữ:** **100% Tiếng Việt chuẩn Scratch cho lứa tuổi 7–10**. Không dùng song ngữ trong khối lệnh `.block`.
- **Hiệu ứng âm thanh:** **Chỉ dùng visual animation** (rung lắc `shake`, nảy nở `bounce`, xoay `slotSpin`, chuỗi streak `🔥`). KHÔNG dùng file âm thanh hoặc Web Audio API để tránh gây ồn lớp học.

---

## 2. Cấu trúc Slide theo Loại Buổi Học

### A. Buổi Học (Lý thuyết & Sáng tạo — 14–15 slide)

| # | Loại Slide | Tên Slide / Thành phần | Nội dung chi tiết |
|---|------------|------------------------|-------------------|
| 1 | Title | Tiêu đề bài học | Emoji lớn, H1 gradient, Subtitle, Badges Tuần/Buổi/Tuổi |
| 2 | Warmup | 🎬 Khởi động (5–10 phút) | Thảo luận tương tác, khơi gợi cảm xúc và câu hỏi tò mò |
| 3 | Concept 1 | 💡 Kiến thức mới 1 | Định nghĩa cốt lõi chia thành 3 thẻ card trực quan |
| 4 | Deep Dive | 🕹️ Phân loại / Cẩm nang | Bảng tổng hợp các dạng / cơ chế / phép toán |
| 5 | Universe | 🌌 Kho tàng Chủ đề | Trưng bày 6 thế giới truyền cảm hứng (Vũ trụ, Biển, Tiền sử...) |
| 6 | Interactive 1| 🎰 Vòng quay ý tưởng | **Slot Machine 3 guồng quay** ngẫu nhiên tạo ý tưởng game |
| 7 | Examples | 📋 3 Ví dụ mẫu | 3 hồ sơ ví dụ chuẩn chỉnh (Bắt sao, Quiz, Đuổi bắt...) |
| 8 | Practice 1 | ✍️ Thực hành 1 (20 phút) | Hướng dẫn từng bước, mẫu kẻ bảng, tiêu chí tự kiểm tra |
| 9 | Concept 2 | ⚖️ Kiến thức mới 2 | Phân tích sâu, so sánh đối chiếu Rõ ràng vs Mơ hồ |
| 10| Interactive 2| 🏃 Minigame vận động | **Đấu trường "Thắng hay Thua?" / "Đúng hay Sai?"** phản xạ toàn thân |
| 11| Practice 2 | ✍️ Thực hành 2 (20 phút) | Điền khung mẫu chuẩn, checklist tự kiểm tra mâu thuẫn |
| 12| Interactive 3| 🏆 Đấu trường Quiz | **Bộ 5 câu trắc nghiệm A/B/C/D** tương tác chấm điểm + cúp |
| 13| Tips | ⚠️ Mẹo nhỏ & Tránh bẫy | 3 cái bẫy thường gặp của học sinh và bí quyết khắc phục |
| 14| Summary | 🎉 Tổng kết & Chuẩn bị | Vinh danh thành quả buổi học, hé lộ nhiệm vụ buổi sau |
| 15| Teacher | 👩‍🏫 Ghi chú cho giáo viên | Chiến thuật sư phạm, phân hóa nhanh/chậm, mẹo điều phối |

---

## 3. Thư viện Component & Code Snippets Sẵn Dùng

### 3.1. Design System Tokens & Khung CSS
```css
:root {
  --scratch-orange: #ff8c1a;
  --scratch-blue: #4c97ff;
  --scratch-purple: #9966ff;
  --scratch-green: #59c059;
  --scratch-yellow: #ffbf00;
  --scratch-red: #ff6680;
  --scratch-cyan: #00bcd4;
  --scratch-dark: #1e2a3a;
  --scratch-bg: #f0f4f8;
  --slide-w: min(1120px, 95vw);
  --slide-h: min(720px, 86vh);
}

body {
  font-family: 'Nunito', 'Segoe UI', sans-serif;
  background: radial-gradient(circle at 10% 20%, #1e3a8a 0%, #0f172a 90%);
  min-height: 100vh;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  overflow: hidden; color: var(--scratch-dark);
}

.slide {
  position: absolute; inset: 0; background: #fff;
  border-radius: 22px;
  box-shadow: 0 28px 70px rgba(0,0,0,0.45);
  display: flex; flex-direction: column;
  opacity: 0; visibility: hidden;
  transform: translateX(40px) scale(0.98);
  transition: opacity 0.32s ease, transform 0.32s ease;
}
.slide.active { opacity: 1; visibility: visible; transform: translateX(0) scale(1); }
```

---

### 3.2. Khối Scratch Mô Phỏng (100% Tiếng Việt)
```html
<div class="blocks">
  <div class="block event">khi bấm vào 🏳️</div>
  <div class="block variable indent">đặt [điểm] thành (0)</div>
  <div class="block control c-block indent">
    liên tục
    <div class="c-body">
      <div class="block motion">di chuyển (5) bước</div>
      <div class="block control c-block">
        nếu &lt;đang chạm [Táo v]?&gt; thì
        <div class="c-body">
          <div class="block variable">thay đổi [điểm] một lượng (1)</div>
          <div class="block sound">bắt đầu âm thanh [Collect]</div>
        </div>
      </div>
    </div>
  </div>
</div>
```

---

### 3.3. Component: Vòng quay Ý tưởng (Slot Machine)
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

---

### 3.4. Component: Minigame Vận động (Win/Lose Arena)
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

---

### 3.5. Component: Đấu trường Quiz (Interactive Quiz Arena)
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
    <!-- Render options qua JavaScript -->
  </div>
  <div class="quiz-explain" id="quizExplain">
    <!-- Lời giải thích hiển thị sau khi bấm chọn -->
  </div>
  <div class="quiz-nav-row">
    <button class="btn-quiz-next" id="btnQuizNext">Câu tiếp theo ➡️</button>
  </div>
</div>
```

---

## 4. Quy trình Tạo Slide Mới

1. **Đọc giáo án markdown:** Mở file tháng tương ứng (`thang-4-du-an-game.md`) và tìm đúng buổi học.
2. **Khởi tạo từ file chuẩn:** Copy toàn bộ khung từ `tuan-13-buoi-25.html`.
3. **Cập nhật nội dung:**
   - Tiêu đề, số tuần, số buổi, ngày tháng.
   - Thay đổi các bộ câu hỏi Quiz (5 câu), các tình huống Minigame vận động (8–10 câu), và dữ liệu Slot Machine phù hợp bài học.
   - Viết các khối lệnh `.block` chuẩn tiếng Việt.
4. **Kiểm tra tự động:**
   - Đảm bảo số lượng `<section class="slide">` khớp với `aria-valuemax` trên thanh progress bar.
   - Kiểm tra `node -e "new (require('vm').Script)(jsCode)"` để không có lỗi syntax JavaScript.
