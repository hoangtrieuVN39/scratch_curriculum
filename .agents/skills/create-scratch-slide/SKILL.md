---
name: create-scratch-slide
description: >-
  Tạo trang trình chiếu HTML buổi học Scratch (InnoMind) từ curriculum markdown, theo phong cách
  "Interactive Lab": phòng thí nghiệm mô phỏng bấm-để-thấy, Bác sĩ Scratch bấm-xem-phương-thuốc,
  minigame Đúng/Sai (click, có nút Câu tiếp theo) và Đấu trường Quiz có danh hiệu.
---

# Tạo Slide Bài giảng Scratch (InnoMind Standard) 🚀

> **Nguồn chuẩn duy nhất:** [`AGENTS.md`](../../../AGENTS.md) (quy chuẩn, mục 4 = Interactive Lab) và
> [`.claude/skills/create-scratch-slide/SKILL.md`](../../../.claude/skills/create-scratch-slide/SKILL.md)
> (thư viện component + quy trình + kiểm thử) cùng [`slide-map.md`](../../../.claude/skills/create-scratch-slide/slide-map.md).
> File này chỉ là bản tóm tắt để tránh trôi lệch — **hãy đọc các file trên trước khi làm**.

## Tóm tắt bắt buộc

- **Nguồn copy:** engine/khung → `tuan-13-buoi-25.html`; buổi **Học** → `tuan-16-buoi-31.html`; buổi **Bài tập** → `tuan-3-buoi-6.html`. Không viết lại từ đầu.
- Tên file `tuan-{tuần}-buoi-{buổi}.html` ở thư mục gốc; HTML tự chứa 100% (chỉ Google Font Nunito).
- **100% tiếng Việt chuẩn Scratch**, không song ngữ; header `.c-block` có điều kiện phải bọc trong đúng một `<span class="block-head">`.
- **Học sinh phải bấm để hiểu:** mỗi khái niệm mới có phòng thí nghiệm mô phỏng `.anim-lab` (Học ≥ 2, Bài tập ≥ 1), mô phỏng **đúng Scratch thật**.
- **Bác sĩ Scratch:** thẻ ca bệnh chỉ hiện triệu chứng, bấm "💊 Xem phương thuốc" mới hiện cách sửa.
- **Minigame Đúng/Sai:** click nút, không vận động thể chất; sau mỗi câu hiện "Câu tiếp theo ➡️", **không tự chuyển câu**.
- **Quiz:** 5 câu A/B/C/D, 20 điểm/câu, đáp án đúng rải đều vị trí, danh hiệu theo điểm.
- **Không âm thanh thật**, kể cả lab về âm thanh (mô phỏng bằng hình).
- Mọi component gọi `e.stopPropagation()` và nằm trong danh sách loại trừ của listener `click` điều hướng.
- Kiểm thử headless ở 1366×768 & 1920×1080: không tràn slide, không lỗi console, bấm thử mọi nút và **xem ảnh chụp**.
