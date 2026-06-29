# Map nội dung curriculum → slide

## Buổi Học (H) — 13 slide chuẩn

| Markdown heading | Slide tag class | Layout |
|------------------|-----------------|--------|
| Tiêu đề buổi | `title-slide` | emoji + h1 gradient + badge Tuần/Buổi/độ tuổi |
| `Hôm nay em học gì?` | `slide-tag` (Mục tiêu) | `highlight-box orange` + bullet |
| `Kiến thức mới` | `slide-tag purple` | `knowledge-grid` + `k-card` theo màu nhóm Scratch |
| `Ví dụ mẫu` | `slide-tag` | `.cols`: blocks trái (song ngữ), Quan sát + Thử ngay phải |
| `Thực hành 1 (TH1)` | `slide-tag green` + `th-label` | `.cols-60-40`: yêu cầu trái, blocks phải |
| TH1 checklist | `slide-tag green` | `checklist` + lời nhắc giơ tay |
| `Thực hành 2 (TH2)` | tương TH1 | |
| TH2 checklist | checklist + 2 `.card` (sáng tạo + hoàn thành) | |
| `Mẹo nhỏ` | `slide-tag yellow` | `.tip` × 4 trong `.cols` 2×2 |
| `Câu hỏi ôn` | `slide-tag purple` | `quiz-item` + `quiz-answer` ẩn |
| `BTVN1` | `slide-tag red` + `btvn-label` | highlight + yêu cầu + blocks + checklist |
| `BTVN2` | tương BTVN1 | |
| Tổng kết | `title-slide` | bullet ✅ các khối lệnh chính |

## Song ngữ khối lệnh (`.block`)

Chỉ nội dung trong `.block` — format `English / tiếng Việt`:

| Khối | Ví dụ |
|------|--------|
| Events | `when green flag clicked / khi bấm cờ xanh` |
| Motion | `move 10 steps / di chuyển 10 bước` |
| Looks | `say "Hi!" for 2 seconds / nói "Hi!" trong 2 giây` |
| Control | `wait 1 seconds / chờ 1 giây` · `repeat 5 / lặp 5 lần` |
| Motion (quay) | `turn 360 degrees / quay 360 độ` |

Phần mô tả slide, checklist, quiz, mẹo — **tiếng Việt**; tên khối trong `<code>` giữ tiếng Anh.

## Buổi Khai giảng — 5 slide đầu (trước 13 slide Học)

| Nội dung | Slide tag | Layout |
|----------|-----------|--------|
| Chào mừng khóa | `title-slide` | badge Khai giảng + Tuần 1 |
| Mục tiêu khóa | `slide-tag orange` | bullet từ `curriculum.md` |
| Lộ trình 4 giai đoạn | `slide-tag orange` | `.stage-table` |
| Cách học mỗi tuần | `slide-tag orange` | 2 `.card` (H + BT) |
| Giới thiệu GV | `slide-tag orange` + `.instructor-wrap` | avatar + tên + bullet + liên hệ |

## Buổi Bài tập (BT) — gợi ý 10–12 slide

| Nội dung | Slide |
|----------|-------|
| Tiêu đề "Luyện …" | title-slide |
| Ôn nhanh (bullet buổi H trước) | Mục tiêu |
| Chữa BTVN1 | checklist + gợi ý chữa |
| Chữa BTVN2 | checklist |
| Giới thiệu bài mở rộng A/B/C | highlight-box |
| Bài A1/A2 (chọn 1) | 2 card mô tả ngắn |
| Bài B1/B2 | tương tự |
| Bài C1/C2 | tương tự |
| BTVN (cuối buổi) | `slide-tag red` + `btvn-label` — highlight + yêu cầu + blocks Music |
| Tổng kết | title-slide |

## Màu k-card theo nhóm Scratch

| Nhóm | Class | Ví dụ khối |
|------|-------|------------|
| Events / Control | `orange` | when, wait, repeat |
| Looks | `purple` | switch costume, say |
| Motion | `blue` | move, glide |
| Sensing / vận hành | `green` | ask, touching |
| Đặc biệt / cảnh báo | `red` | show/hide, dừng |

## Metadata cần đổi mỗi buổi

```javascript
brandSub.textContent = current === 0 || current === total - 1
  ? '· Scratch'
  : '· Tuần {T} Buổi {B}';
```

```html
<title>Tuần {T} — Buổi {B}: {chủ đề}</title>
<span class="badge">📅 Tuần {T}</span>
<span class="badge">📖 Buổi {B} — Học</span>
```

Giai đoạn curriculum (cho subtitle): xem `curriculum.md` — Tháng 1–4 map từ `thang-1` … `thang-4`.

## Đáp án quiz mẫu

Mỗi `quiz-item` có `quiz-answer` — cô click để hiện. Viết ngắn, đúng thuật ngữ lớp 8–10 tuổi.
