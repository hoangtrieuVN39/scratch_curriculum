# Map nội dung curriculum → slide

> **QUY TẮC QUAN TRỌNG:**
> 1. **BỎ HOÀN TOÀN Khởi động & Giải lao vận động** khỏi mọi slide deck.
> 2. **Bài tập nâng độ khó 1 bậc:** Vận dụng kết hợp kiến thức đã học trước đó.
> 3. **Gợi ý tối giản để tự tư duy:** Tuyệt đối KHÔNG cho sẵn 100% full code hoàn chỉnh ăn liền; chỉ cung cấp yêu cầu và luồng logic / khối chìa khóa gợi mở.
> 4. **Không dùng checklist** ở bất kỳ slide nào (đã bỏ hoàn toàn — xem SKILL.md). Yêu cầu bài tập = `<ul>` thường dưới nhãn "Yêu cầu".

## Buổi Học (H) — Khung slide chuẩn (đã loại bỏ Khởi động & Giải lao)

| Markdown heading | Slide tag class | Layout |
|------------------|-----------------|--------|
| Tiêu đề buổi | `title-slide` | emoji + h1 gradient + badge Tuần/Buổi/độ tuổi |
| `Hôm nay em học gì?` | `slide-tag purple` (Mục tiêu) | `highlight-box red/orange` + bullet mục tiêu |
| `Kiến thức mới 1` | `slide-tag red/purple` | `knowledge-grid` + `k-card` theo màu nhóm Scratch |
| `Kiến thức mới 2 / Debug` | `slide-tag orange/red` | `.cols` hoặc bảng tra cứu / quy trình kỹ năng |
| `Ví dụ mẫu 1` | `slide-tag` | `.cols`: blocks trái (100% tiếng Việt), Quan sát + Lợi ích phải |
| `Ví dụ mẫu 2 / Dự đoán` | `slide-tag` | `.cols`: blocks mẫu + Card "Em đoán xem?" kích thích tư duy |
| `Thực hành 1 (TH1)` (Nâng cao) | `slide-tag green` + `th-label` | `.cols-60-40`: Yêu cầu tổng hợp trái, gợi ý luồng logic/khối then chốt phải |
| `Thực hành 2 (TH2)` (Nâng cao) | tương TH1 | Yêu cầu đa sprite/tình huống, gợi ý mở để học sinh tự ghép |
| `Thử thách / Mẹo nhỏ` | `slide-tag orange/yellow` | Thử thách tư duy + `.tip` kỹ thuật |
| `Câu hỏi ôn / Ôn tập` | `slide-tag purple` | `quiz-item` + `quiz-answer` ẩn (click mở đáp án) |
| Tổng kết | `title-slide` | bullet ✅ các kiến thức & kỹ năng trọng tâm |

## Buổi Bài tập (BT)

Khung chuẩn:

| # | Nội dung | Slide |
|---|----------|-------|
| 1 | Tiêu đề "Luyện …" | title-slide |
| 2 | Ôn nhanh kiến thức nền tảng | bullet + blocks minh họa cốt lõi |
| 3… | Luyện tập tại lớp (LT1/LT2) — Nâng cao độ khó | yêu cầu (`<ul>`) + gợi ý tư duy / khối then chốt |
| … | Giới thiệu bài mở rộng A/B/C | highlight-box + `knowledge-grid` 3 `k-card` (tên game mỗi mức) |
| … | Bài A1 / A2 / B1 / B2 / C1 / C2 — mỗi bài 1 slide | full-width, yêu cầu tích hợp + gợi ý mở |
| cuối | Tổng kết / Showcase | title-slide |

**Mỗi bài A1/A2/B1/B2/C1/C2 là 1 slide riêng** — không gộp cặp "chọn A1 hoặc
A2" vào 1 slide. Slide giới thiệu vẫn giới thiệu cả 3 mức và nhắc lớp
dùng chấm điều hướng để nhảy tới bài đã chọn.

### Slide 1 bài mở rộng

`<h2>` = `th-label` + tên game (2–4 chữ + emoji, không phải mô tả kỹ thuật)
→ mô tả 1 câu kể chuyện → `.cols.cols-60-40`: cột trái = "Yêu cầu" dạng
`<ul>` thường (gộp "Yêu cầu bắt buộc" + tiêu chí markdown thành 1 danh sách,
KHÔNG viết thành câu `A / B / C`) + "✨ Thử thêm"; cột phải = "Gợi ý khối
lệnh" dạng `.blocks` (dùng `.block ... optional` cho phần lặp lại nếu bài
có nhiều bước giống nhau, vd. 5 điểm/6 ô lưới). Chi tiết + ví dụ đầy đủ:
xem mục "Bài mở rộng" trong [SKILL.md](SKILL.md).

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
