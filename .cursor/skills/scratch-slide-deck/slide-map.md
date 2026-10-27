# Map nội dung curriculum → slide (InnoMind Scratch) 🗺️

Ánh xạ từ các phần trong giáo án `thang-*-*.md` sang slide HTML theo chuẩn **Interactive Lab** (`AGENTS.md` mục 4). Deck mẫu: buổi Học → `tuan-16-buoi-31.html`, buổi Bài tập → `tuan-3-buoi-6.html`, khung/engine → `tuan-13-buoi-25.html`.

Cột **Tương tác** là phần học sinh **bấm được** trên slide — không được bỏ.

---

## 1. Buổi Học (H) — 14–15 slide

Ví dụ áp dụng: `tuan-16-buoi-31.html` (đúng 15 slide).

| # | Giáo án | Tag class | Layout | Tương tác |
|---|---------|-----------|--------|-----------|
| 1 | Tiêu đề buổi | `title-slide` | Emoji (bọc `<span>` để nảy lệch pha) + H1 gradient + badge Tuần/Buổi/Tuổi | — |
| 2 | Mục tiêu & khung giờ | `slide-tag orange` | `time-banner` + `cols-3` (Demo / Thực chiến / Rà soát) | — |
| 3 | `🎬 Khởi động` | `slide-tag purple` | Lab lớn (`.game-lab`) hoặc bình chọn / Đúng-Sai | **Công tắc bật/tắt + thanh "độ cuốn hút"** (hoặc bình chọn) |
| 4 | `💡 Kiến thức mới` | `slide-tag cyan` | 3 `.k-card` + `highlight-box green` | **"👀 Xem khối lệnh"** trên từng thẻ |
| 5–7 | Demo kỹ thuật 1–3 (`📘 Hướng dẫn kỹ thuật`) | `slide-tag blue` / `green` | `cols-60-40`: trái = 2–3 `.blocks-container.compact`, phải = `.anim-lab` | **Lab mô phỏng** đúng vs sai / có vs thiếu khối |
| 8 | Bác sĩ Scratch | `slide-tag red` | `cols-40-60`: trái = script bệnh nhân + triệu chứng, phải = `.clinic-grid` 2×2 | **"💊 Xem phương thuốc"** |
| 9 | Minigame | `slide-tag green` | `.arena-wrap` | **Đúng/Sai + streak + "Câu tiếp theo ➡️"** |
| 10 | `✍️ TH1` | `slide-tag red` + `th-badge` | `cols-60-40`: nhiệm vụ + checklist trái, `.story-gen` (máy gợi ý) hoặc lab phải | Máy gợi ý (tùy chọn) |
| 11 | `✍️ TH2` | `slide-tag red` + `th-badge` | `cols-60-40`: nhiệm vụ trái, checklist + tip phải | — |
| 12 | `🏆 Quiz` | `slide-tag purple` | `.quiz-arena` | **5 câu A/B/C/D + danh hiệu theo điểm** |
| 13 | `🖼️ Rà soát & lưu bài` | `slide-tag yellow` | `.checklist.interactive` + thanh tiến độ | **Bấm để tick từng mục** |
| 14 | `✅ Tổng kết` | `title-slide` | Thành tựu + `.award-grid` + "Bật mí buổi sau" | **Huy hiệu bấm để trao** |
| 15 | Ghi chú GV | `slide-tag red` | 2 `.card` (phân hóa, lỗi hay gặp) + 2 `.card` (âm thanh lớp, phân bổ thời gian) | — |

Buổi giai đoạn **khởi đầu dự án / brainstorm** được thêm slide Slot Machine (Kho tàng chủ đề + máy phát ý tưởng) như các deck tuần 12–13; buổi giai đoạn **làm game** thay bằng Demo kỹ thuật + lab.

---

## 2. Buổi Bài tập (BT) — 12–15 slide

Ví dụ áp dụng: `tuan-3-buoi-6.html` (15 slide).

| # | Giáo án | Tag class | Layout | Tương tác |
|---|---------|-----------|--------|-----------|
| 1 | Tiêu đề "Luyện tập…" | `title-slide` | Emoji nảy lệch pha + H1 + badge | — |
| 2 | `🎬 Khởi động ôn tập` | `slide-tag purple` | `.arena-wrap` | **Đúng/Sai ôn bài cũ + "Câu tiếp theo ➡️"**; câu cuối bật mí bài mới |
| 3 | `🔁 Ôn nhanh cốt lõi` | `slide-tag orange` | `cols-60-40`: `.knowledge-grid` / `.k-card` trái, `.anim-lab` phải | **Phòng thí nghiệm mô phỏng** (vd hoạt hình `đợi`) |
| 4 | Đồ nghề mới (tiện ích, khối mới) | `slide-tag` màu riêng | `cols-40-60`: 3 bước + `table-custom` khối lệnh | — |
| 5–6 | `✍️ LT1`, `✍️ LT2` | `slide-tag red` + `th-badge` | `cols-60-40`: script mẫu + checklist, LT2 có `.story-gen` | Máy gợi ý ý tưởng |
| 7 | `🩺 Bác sĩ Scratch` | `slide-tag red` | `cols-40-60` + `.clinic-grid` | **"💊 Xem phương thuốc"** |
| 8 | `🎯 Giới thiệu Mức A/B/C` | `slide-tag green` | `cols-3` `.card` + `.level-badge` | — |
| 9–11 | Thử thách A1/A2/B1/B2/C1/C2 | `slide-tag green` / xanh / `purple` | Mỗi mức 1 slide, 2 `.ex-card`; khối `.optional` = "thử thêm" | — |
| 12 | Thử thách thêm (không bắt buộc) | `slide-tag yellow` | `cols-60-40` yêu cầu + bản mẫu | — |
| 13 | `🏆 Quiz` | `slide-tag purple` | `.quiz-arena` | 5 câu + danh hiệu |
| 14 | `🖼️ Showcase & Tổng kết` | `slide-tag yellow` | Cách đi triển lãm + `.award-grid` + Bật mí buổi sau | **Huy hiệu bấm để trao** |
| 15 | Ghi chú GV | `slide-tag red` | Phân hóa · lỗi thường gặp · quản lý âm thanh · phân bổ thời gian | — |

---

## 3. Đồng bộ metadata mỗi bài

```javascript
brandSub.textContent = current === 0 || current === total - 1
  ? '· Scratch'
  : '· Tuần {T} Buổi {B}';
```

Và khớp: `<title>`, `aria-valuemax`, `counter` mặc định, `data-index` liên tục, chỉ số slide trong phân bổ thời gian ở slide Ghi chú GV.
