---
name: scratch-slide-deck
description: >-
  Tạo trang trình chiếu HTML buổi học Scratch (InnoMind) từ curriculum markdown, theo phong cách
  "Interactive Lab": phòng thí nghiệm mô phỏng bấm-để-thấy, Bác sĩ Scratch bấm-xem-phương-thuốc,
  minigame Đúng/Sai (click, có nút Câu tiếp theo) và Đấu trường Quiz có danh hiệu. Dùng khi user yêu cầu tạo slide/deck.
---

# Scratch Slide Deck (InnoMind) 🚀

> **Nguồn chuẩn duy nhất:** [`AGENTS.md`](../../../AGENTS.md) (quy chuẩn, mục 4 = Interactive Lab) và
> [`.claude/skills/create-scratch-slide/SKILL.md`](../../../.claude/skills/create-scratch-slide/SKILL.md)
> (thư viện component + quy trình + kiểm thử). File này chỉ là bản tóm tắt để tránh trôi lệch — **hãy đọc các file trên trước khi làm**.

## Tóm tắt bắt buộc

- **Nguồn copy:** engine/khung → `tuan-13-buoi-25.html`; buổi **Học** → `tuan-16-buoi-31.html`; buổi **Bài tập** → `tuan-3-buoi-6.html`. Không viết lại từ đầu, không dùng mẫu cũ lỗi thời.
- Tên file `tuan-{tuần}-buoi-{buổi}.html` ở thư mục gốc; đổi `<title>`, `brandSub`, `aria-valuemax`, badge Tuần/Buổi.
- HTML tự chứa 100% (chỉ Google Font Nunito). **100% tiếng Việt chuẩn Scratch**, tuyệt đối không song ngữ.
- **Học sinh phải bấm để hiểu:** mỗi khái niệm mới có phòng thí nghiệm mô phỏng (Học ≥ 2, Bài tập ≥ 1), mô phỏng **đúng Scratch thật**.
- **Bác sĩ Scratch** bấm "💊 Xem phương thuốc"; **Minigame Đúng/Sai** click nút + "Câu tiếp theo ➡️" (không tự chuyển, không vận động thể chất); **Quiz** 5 câu có danh hiệu theo điểm.
- **Không âm thanh thật.** Chỉ animation CSS.
- Điều hướng: `←` `→` `Space` `Home` `End` `F` `Esc`, dots, progress bar, swipe.

## Tài liệu tham chiếu

- Ánh xạ giáo án → slide: [slide-map.md](slide-map.md)
- Checklist kiểm thử chất lượng: [checklist.md](checklist.md)
