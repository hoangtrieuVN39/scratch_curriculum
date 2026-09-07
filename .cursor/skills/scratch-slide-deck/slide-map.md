# Map nội dung curriculum → slide (InnoMind Scratch) 🗺️

Ánh xạ chi tiết từ các phần trong tài liệu markdown `thang-*-*.md` sang slide trình chiếu HTML chuẩn **`tuan-13-buoi-25.html`**.

---

## 1. Buổi Học (H) — Khung 14–15 slide chuẩn

| # | Markdown heading / Phần | Slide tag class | Layout & Thành phần giao diện |
|---|-------------------------|-----------------|--------------------------------|
| 1 | Tiêu đề buổi học | `title-slide` | Emoji lớn + H1 gradient + Badges Tuần/Buổi/Độ tuổi |
| 2 | `#### 🎬 Khởi động` | `slide-tag orange` | `highlight-box orange` + 2 card thảo luận & bí mật game hay |
| 3 | `#### 💡 Kiến thức mới 1` | `slide-tag blue` | `highlight-box blue` + 3 card (Hành động ➡️ Phản hồi ➡️ Thắng/Thua) |
| 4 | `#### Phân loại / Cẩm nang` | `slide-tag purple` | `table-custom` 5 thể loại game kinh điển trên Scratch |
| 5 | `#### 🌌 Kho tàng Chủ đề` | `slide-tag cyan` | `universe-grid` 6 card chủ đề (Vũ trụ, Biển, Tiền sử, Ma thuật, Cyberpunk, Kẹo ngọt) |
| 6 | `#### 🎰 Máy phát Ý tưởng` | `slide-tag orange` | **Slot Machine 3 guồng quay** ngẫu nhiên + nút quay `btnSpin` + banner gợi ý |
| 7 | `#### 📋 Ví dụ mẫu` | `slide-tag green` | `cols-3` phân tích 3 hồ sơ game mẫu có luật cụ thể |
| 8 | `#### ✍️ Thực hành 1 (TH1)`| `slide-tag red` + `th-label` | `cols-60-40`: 4 bước brainstorm trái, mẫu kẻ bảng 3 cột phải |
| 9 | `#### ⚖️ Kiến thức mới 2` | `slide-tag blue` | So sánh 2 card: ❌ Luật Mơ Hồ vs ✅ Luật Cụ Thể (3 biến số vàng) |
| 10| `#### 🏃 Minigame vận động` | `slide-tag green` | **Đấu trường "Thắng hay Thua?"**: Bộ 9 tình huống, card nảy/rung, chuỗi streak |
| 11| `#### ✍️ Thực hành 2 (TH2)`| `slide-tag red` + `th-label` | Mẫu điền luật thắng/thua + card kiểm tra mâu thuẫn |
| 12| `#### 🏆 Đấu trường Quiz` | `slide-tag purple` | **Quiz Arena**: 5 câu hỏi A/B/C/D tương tác trực tiếp, chấm điểm + trao cúp |
| 13| `#### 🛡️ Mẹo & Bẫy thiết kế`| `slide-tag yellow` | `cols-3` hóa giải 3 bẫy (Game quá to, Luật quá khó, Quên kết thúc) |
| 14| `#### 🎉 Tổng kết` | `title-slide` | Tuyên dương thành quả, hé lộ nhiệm vụ Storyboard buổi sau |
| 15| `#### 👩‍🏫 Ghi chú giáo viên` | `slide-tag red` | Hướng dẫn phân hóa tốc độ, xử lý ý tưởng quá to và mẹo điều phối lớp |

---

## 2. Buổi Bài tập (BT) — Khung 12–13 slide chuẩn

| # | Markdown heading / Phần | Slide tag class | Layout & Thành phần giao diện |
|---|-------------------------|-----------------|--------------------------------|
| 1 | Tiêu đề "Luyện tập…" | `title-slide` | Emoji + H1 gradient + Badge Tuần/Buổi/Bài tập |
| 2 | `#### 🎬 Khởi động ôn tập` | `slide-tag purple` | Mini-quiz phản xạ / Đoán nhanh kiến thức buổi trước |
| 3 | `#### 🔁 Ôn nhanh cốt lõi` | `slide-tag orange` | Trạm kỹ năng: `knowledge-grid` tổng hợp các khối lệnh then chốt |
| 4 | `#### ✍️ Luyện tập 1 (LT1)` | `slide-tag red` + `btvn-label` | Refactor / Gom code My Blocks hoặc bài tập kỹ năng nâng cao |
| 5 | `#### 🩺 Luyện tập 2 (LT2)` | `slide-tag red` + `btvn-label` | **Bác sĩ Debug**: Bảng chẩn đoán 3 ca bệnh lỗi code & phương thuốc sửa |
| 6 | `#### 🎯 Giới thiệu Mức A/B/C` | `slide-tag green` | `knowledge-grid` 3 cột: Mức A (Cơ bản), Mức B (Debug), Mức C (Game hoàn chỉnh) |
| 7–11| `#### Thử thách A1/A2/B1/B2/C1/C2`| `slide-tag green/blue/purple` | Mỗi bài 1 slide riêng: Cột trái yêu cầu & mục tiêu, cột phải gợi ý tư duy |
| 12| `#### 🖼️ Showcase & Tổng kết` | `title-slide` | Mời 3–4 bạn demo game trước lớp, bình chọn và vinh danh |

---

## 3. Quy tắc Khối lệnh Scratch (100% Tiếng Việt)

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

- Màu sắc phân loại khối:
  - `event`: Vàng cam (`#ffbf00`)
  - `motion`: Xanh dương (`#4c97ff`)
  - `looks`: Tím (`#9966ff`)
  - `sound`: Hồng tím (`#cf63cf`)
  - `control`: Cam (`#ffab19`)
  - `sensing`: Xanh lơ (`#5cb1d6`)
  - `operator`: Xanh lá (`#59c059`)
  - `variable`: Cam đậm (`#ff8c1a`)
  - `define` / `myblock`: Hồng đỏ (`#ff6680`)
