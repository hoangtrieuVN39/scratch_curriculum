---
name: scratch-slide-deck
description: >-
  Tạo trang trình chiếu HTML buổi học Scratch (InnoMind) từ curriculum markdown.
  Dùng khi user yêu cầu slide/trình chiếu/presentation cho buổi học, tuần, hoặc
  chuyển nội dung từ thang-*-*.md thành deck trình chiếu lớp.
---

# Scratch Slide Deck (InnoMind)

Tạo file HTML **một file tự chứa** (CSS + JS inline), phong cách Scratch, tiếng Việt, lứa tuổi 8–10.

## Mẫu chuẩn

**Luôn bắt đầu bằng copy** `tuan-3-buoi-5.html` (mẫu chuẩn ở root repo) — đừng viết lại từ đầu.

Chỉ sửa:
- `<title>`, nội dung slide, `aria-valuemax`, metadata tuần/buổi
- Biến `brandSub` trong JS (dòng `· Tuần X Buổi Y`)
- Đặt tên file: `tuan-{tuần}-buoi-{buổi}.html` ở root repo

## Nguồn nội dung

1. Đọc buổi tương ứng trong `thang-*-*.md` hoặc `curriculum.md`
2. Map section markdown → slide theo [slide-map.md](slide-map.md)
3. Giữ nguyên thuật ngữ Scratch trong `<code>` (mô tả ngoài khối): `` `wait` ``, `` `switch costume` ``, TH1/TH2/BTVN
4. **Nội dung `.block` (khối Scratch mô phỏng):** song ngữ Anh–Việt — `tên khối tiếng Anh / mô tả tiếng Việt` (vd. `move 10 steps / di chuyển 10 bước`). Phần còn lại của slide vẫn **tiếng Việt**.

## Cấu trúc slide (buổi Học)

| # | Slide | Nguồn markdown |
|---|-------|----------------|
| 1 | Tiêu đề | `### Buổi N — Học: …` |
| 2 | Mục tiêu | `#### Hôm nay em học gì?` |
| 3 | Kiến thức mới | `#### Kiến thức mới` → `.k-card` |
| 4 | Ví dụ mẫu | `#### Ví dụ mẫu` → `.blocks` |
| 5 | TH1 | `#### Thực hành 1` → `.cols` nếu nhiều khối |
| 6 | TH1 checklist | checklist → `data-checklist` |
| 7 | TH2 | `#### Thực hành 2` |
| 8 | TH2 checklist + gợi ý sáng tạo | checklist + `.card` |
| 9 | Mẹo nhỏ | `#### Mẹo nhỏ` → `.tip` 2 cột |
| 10 | Câu hỏi ôn | `#### Câu hỏi ôn` → `data-quiz` + đáp án ẩn |
| 11 | BTVN1 | `#### Bài tập về nhà 1` |
| 12 | BTVN2 | `#### Bài tập về nhà 2` |
| 13 | Tổng kết | tóm tắt khối lệnh buổi học |

Buổi **Bài tập (BT)** — điều chỉnh slide-map; xem [slide-map.md](slide-map.md).

## Buổi Khai giảng (kết hợp Buổi 1)

File: `tuan-1-buoi-1.html` — **18 slide** = 5 khai giảng + 13 buổi Học.

| # | Slide | Nguồn |
|---|-------|--------|
| 1 | Chào mừng / tiêu đề khóa | `curriculum.md` |
| 2 | Em sẽ làm được gì sau khóa | mục tiêu khóa |
| 3 | Lộ trình 4 giai đoạn | bảng giai đoạn |
| 4 | Cách học mỗi tuần (H + BT) | lịch tuần |
| 5 | Giới thiệu giảng viên | thông tin GV (`.instructor-wrap`) |
| 6–18 | 13 slide chuẩn Buổi 1 Học | `thang-1-noi-dung-co-ban-phan-1.md` |

`brandSub`: slide 0–4 → `· Khai giảng`; slide 5–17 → `· Tuần 1 Buổi 1`.

## Component nhanh

```html
<!-- Tag loại slide -->
<span class="slide-tag green">Thực hành</span>

<!-- Khối Scratch — song ngữ trong .block, phần khác tiếng Việt -->
<div class="blocks">
  <div class="block event">when green flag clicked / khi bấm cờ xanh</div>
  <div class="block looks indent">say "Xin chào!" for 2 seconds / nói "Xin chào!" trong 2 giây</div>
  <div class="block control indent">wait 0.5 seconds / chờ 0.5 giây</div>
</div>

<!-- Lặp (C-block) -->
<div class="block control c-block indent">
  repeat 5 / lặp 5 lần
  <div class="c-body">
    <div class="block looks">next costume / trang phục kế tiếp</div>
    <div class="block control">wait 0.3 seconds / chờ 0.3 giây</div>
  </div>
</div>

<!-- Nhãn TH/BTVN -->
<span class="th-label">TH1</span>
<span class="th-label btvn-label">BTVN1</span>
```

Class khối: `event` (vàng), `looks` (tím), `control` (cam), `motion` (xanh), `sound` (hồng).

## Quy tắc song ngữ khối lệnh

- **Chỉ** nội dung bên trong `<div class="block">` (và dòng đầu C-block như `repeat 5 / lặp 5 lần`)
- Format: `English block text / bản dịch tiếng Việt`
- Giữ nguyên tên khối Scratch bằng tiếng Anh (đúng giao diện Scratch)
- Lời nói trong `say "…"` giữ nguyên tiếng Việt nếu là câu thoại của học sinh
- CSS `.block`: `white-space: normal` để dòng song ngữ xuống hàng khi cần

## Quy tắc layout

- Slide dày (TH + nhiều khối): dùng `.cols` hoặc `.cols-60-40`
- Kiến thức 5 mục: `.knowledge-grid` với `span-2` / `span-3`
- Không để `.slide-body` tràn — kiểm tra `scrollHeight > clientHeight`
- Một slide = một ý chính; checklist tách slide riêng cho lớp tự tick

## JS — không được phá

Giữ nguyên logic điều hướng từ mẫu. **Bắt buộc:**

- Mỗi slide có đúng một trong: `active` | `prev` | `next`
- `keydown` listener riêng, **không** gộp nhầm vào `click` listener
- Fullscreen: `html:fullscreen` (không `body:fullscreen`), hỗ trợ `webkit`
- `goTo()` cập nhật: counter, dots, progressBar, `brandSub`, `aria-hidden`

## Kiểm tra trước khi giao

Chạy checklist [checklist.md](checklist.md). Tối thiểu:

1. `python -m http.server 8765` → mở file trong browser
2. Tiến 3 slide → lùi 3 slide (counter + nội dung khớp)
3. Phím `F` fullscreen, `Esc` thoát
4. Click chấm tiến độ, checklist, quiz reveal

## Phạm vi thay đổi

- **Được**: nội dung slide, title, badge tuần/buổi, số slide (cập nhật `total` tự động qua `querySelectorAll`)
- **Không**: tách file CSS/JS riêng, thêm framework, tạo file `.md` mới trừ khi user yêu cầu

## Tài liệu thêm

- Map markdown → slide: [slide-map.md](slide-map.md)
- QA đầy đủ: [checklist.md](checklist.md)
