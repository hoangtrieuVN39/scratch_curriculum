---
name: scratch-slide-deck
description: >-
  Tạo trang trình chiếu HTML buổi học Scratch (InnoMind) từ curriculum markdown.
  Tự động tích hợp Design System hiện đại, Vòng quay ý tưởng (Slot machine),
  Minigame vận động và Đấu trường Quiz trắc nghiệm. Dùng khi user yêu cầu tạo slide/deck.
---

# Scratch Slide Deck (InnoMind) 🚀

Tạo file HTML **một file tự chứa 100%** (CSS + JS inline), phong cách Scratch, 100% tiếng Việt, lứa tuổi 7–10, dựa trên mẫu chuẩn vàng **`tuan-13-buoi-25.html`**.

---

## 1. Mẫu Chuẩn Vàng

**Luôn bắt đầu bằng việc copy hoặc tham chiếu** `tuan-13-buoi-25.html` ở thư mục gốc repo — không viết lại từ các mẫu cũ lỗi thời!

- Tên file chuẩn: `tuan-{tuần}-buoi-{buổi}.html` ở thư mục gốc repo.
- Đổi metadata: `<title>`, `brandSub` trong JS (`· Tuần X Buổi Y`), `aria-valuemax="15"`, badge Tuần/Buổi/Độ tuổi.
- Tự chứa 100%: CSS nằm trong `<style>`, JavaScript nằm trong `<script>`, không dùng thư viện ngoài ngoại trừ Google Font Nunito.

---

## 2. Tiêu chuẩn 100% Tiếng Việt Chuẩn Scratch

- **Tuyệt đối KHÔNG dùng song ngữ** dạng `move 10 steps / di chuyển 10 bước`.
- Toàn bộ nội dung bên trong `<div class="block">` dùng **tiếng Việt chuẩn Scratch**:
  - `khi bấm vào 🏳️` (Event)
  - `di chuyển 10 bước`, `đi tới điểm x: 0 y: -120` (Motion)
  - `nói "Xin chào!" trong 2 giây`, `trang phục kế tiếp` (Looks)
  - `liên tục`, `lặp lại 10 lần`, `nếu <...> thì` (Control)
  - `đặt [điểm] thành 0`, `thay đổi [điểm] một lượng 1` (Variable)
  - `tạo bản sao của [tôi]`, `khi tôi bắt đầu là một bản sao` (Clone)
  - `định nghĩa [tên khối]` (My Blocks)

---

## 3. Quy chuẩn Game Tương tác & Quiz (BẮT BUỘC)

Mỗi bài giảng cần tạo sự cuốn hút, vận động và tư duy tích cực thông qua các component tương tác:

### A. Buổi Học (Lý thuyết — ~14–15 slide)
1. **🎬 Khởi động tương tác (Slide 2):** Câu hỏi mở gợi cảm xúc, kích thích thảo luận cả lớp.
2. **🌌 Kho tàng Vũ trụ Chủ đề (Slide 5):** Thẻ trưng bày 6 thế giới (Vũ trụ, Biển, Tiền sử, Ma thuật, Cyberpunk, Kẹo ngọt).
3. **🎰 Máy phát ý tưởng Slot Machine (Slide 6):** 3 guồng quay ngẫu nhiên [Bối cảnh] × [Nhân vật] × [Nhiệm vụ] kèm hiệu ứng quay số `slotSpin` và nút *"Thử ý tưởng Độc - Lạ"*.
4. **🏃 Minigame vận động "Thắng hay Thua?" / "Đúng hay Sai?" (Slide 10):**
   - Vận động lớp học: 🙋 Giơ tay (Thắng) / 🙇 Ngồi thụp xuống (Thua).
   - Card đổi màu xanh/đỏ, rung lắc `shake` khi sai, nảy nở khi đúng, đếm chuỗi streak `🔥`.
5. **🏆 Đấu trường Quiz Game Design (Slide 12):**
   - 5 câu trắc nghiệm A/B/C/D click chọn trực tiếp.
   - Hiện lời giải thích chi tiết, chấm điểm tự động và trao cúp vinh danh.
6. **👩‍🏫 Ghi chú cho giáo viên (Slide 15):** Hướng dẫn sư phạm phân hóa học sinh.

### B. Buổi Bài tập (Thực hành — ~12–13 slide)
1. **🎬 Khởi động ôn tập:** Đoán game / trắc nghiệm chớp nhoáng củng cố bài trước.
2. **🔁 Trạm kỹ năng cốt lõi:** Bảng tổng hợp các khối lệnh then chốt.
3. **🩺 Bác sĩ Scratch sửa lỗi mẫu (Debugging Clinic):** Bảng chẩn đoán bệnh án lỗi logic và phương thuốc điều trị.
4. **🎯 Thử thách phân tầng 3 mức độ A/B/C:**
   - Mức A: Cơ bản & My Blocks
   - Mức B: Bác sĩ Debug
   - Mức C: Game nâng cao / Remix
5. **🖼️ Showcase & Tổng kết:** Trình chiếu sản phẩm, khen ngợi và cổ vũ.

---

## 4. Chính sách Hiệu ứng

- **Chỉ dùng visual animation:** CSS keyframes (`shake`, `bounce`, `slotSpin`, `pulse`), màu sắc glow và particle visual.
- **KHÔNG dùng âm thanh lớn:** Tránh gây ồn ào không gian lớp học khi giáo viên giảng bài.

---

## 5. Navigation & Phím tắt

Giữ nguyên engine điều hướng từ `tuan-13-buoi-25.html`:
- `ArrowRight` / `Spacebar` / `PageDown`: Tiến slide
- `ArrowLeft` / `PageUp`: Lùi slide
- `Home` / `End`: Về đầu / Về cuối
- `F`: Phóng toàn màn hình
- `Esc`: Thoát toàn màn hình
- Chạm vuốt (Touch Swipe) trên tablet / màn hình cảm ứng
- Dots navigation trên topbar + thanh tiến trình Progress bar trên cùng.

---

## 6. Tài liệu tham chiếu

- Ánh xạ chi tiết markdown → slide: [slide-map.md](slide-map.md)
- Checklist kiểm thử chất lượng: [checklist.md](checklist.md)
