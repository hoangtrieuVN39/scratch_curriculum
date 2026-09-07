---
name: create-scratch-slide
description: >-
  Tạo trang trình chiếu HTML buổi học Scratch (InnoMind) từ curriculum markdown.
  Dùng khi user yêu cầu tạo/generate slide, trình chiếu, presentation, hoặc deck
  cho một buổi học, tuần, hoặc yêu cầu chuyển nội dung từ thang-*-*.md thành
  slide deck trình chiếu lớp.
---

# Create Scratch Slide (InnoMind)

Tạo file HTML **một file tự chứa** (CSS + JS inline), phong cách Scratch, tiếng Việt, lứa tuổi 8–10.

## BỎ HOÀN TOÀN Khởi động & Giải lao vận động

User đã yêu cầu loại bỏ toàn bộ phần khởi động và giải lao vận động khỏi slide:

- **Không** tạo slide "Khởi động", "Khởi động ôn tập" hay trò chơi mở đầu.
- **Không** tạo slide "Giải lao vận động", "Trò chơi vận động" giữa giờ.
- Slide deck chỉ tập trung 100% vào **nội dung kiến thức buổi học** và **bài tập thực hành**.

## Nâng cao độ khó bài tập & Gợi ý tối giản để tự tư duy

- **Nâng độ khó lên 1 bậc:** Bài tập (TH1, TH2, LT1, LT2, Mở rộng) phải vận dụng kết hợp những kiến thức đã học từ các bài trước (biến, toán tử, logic điều kiện, cảm biến, sự kiện, clone...).
- **Gợi ý tối giản, không làm sẵn toàn bộ:**
  - Tuyệt đối **KHÔNG** đưa ra toàn bộ 100% code mẫu hoàn chỉnh ăn liền.
  - Cung cấp yêu cầu mục tiêu rõ ràng (`<ul>`) kèm luồng tư duy / danh sách các khối chìa khóa cần dùng.
  - Để học sinh tự tư duy cách ghép nối, tính toán thông số và giải quyết vấn đề.

## KHÔNG dùng checklist

User đã bỏ hoàn toàn checklist khỏi slide (vô dụng khi dạy thật — lớp không tick):

- **Không** tạo slide checklist riêng (kiểu "TH1 checklist", "TH2 checklist")
- **Không** dùng component `<ul class="checklist" data-checklist>` ở bất kỳ slide nào
- Yêu cầu của bài tập viết dạng bullet `<ul>` thường dưới nhãn "Yêu cầu"
- Nếu copy từ file mẫu cũ còn CSS/JS checklist, xoá luôn khối CSS `.checklist`,
  listener `[data-checklist]` và `.checklist li` ## 100% TIẾNG VIỆT — KHÔNG DÙNG SONG NGỮ

User đã yêu cầu **bỏ hoàn toàn song ngữ**, toàn bộ nội dung và khối lệnh đều dùng **100% tiếng Việt**:

- **Không** viết dạng `move 10 steps / di chuyển 10 bước`.
- Nội dung bên trong `<div class="block">` dùng **tiếng Việt chuẩn Scratch** (vd: `khi bấm vào 🏳️`, `di chuyển 10 bước`, `nói "Xin chào!" trong 2 giây`, `lặp lại 5 lần`, `nếu ... thì`, `định nghĩa [tên khối]`, `thay đổi [điểm] một lượng 1`, `đặt [điểm] thành 0`, `bắt đầu âm thanh [Collect]`).
- Toàn bộ mô tả, bảng kiến thức, hướng dẫn, gợi ý và câu hỏi ôn tập đều viết bằng **tiếng Việt tự nhiên, chuẩn mực cho lứa tuổi 7–10**.

## Nguồn nội dung

1. Đọc buổi tương ứng trong `thang-*-*.md` hoặc `curriculum.md`
2. Map section markdown → slide theo [slide-map.md](slide-map.md) (bỏ qua Khởi động và Giải lao)
3. Thuật ngữ và khối lệnh viết bằng **100% tiếng Việt**.

## Cấu trúc slide (buổi Học) — ~9–11 slide (đã bỏ Khởi động & Giải lao)

| # | Slide | Nguồn markdown |
|---|-------|----------------|
| 1 | Tiêu đề | `### Buổi N — Học: …` |
| 2 | Mục tiêu | `#### Hôm nay em học gì?` |
| 3 | Kiến thức mới 1 | `#### Kiến thức mới` → `.k-card` |
| 4 | Kiến thức mới 2 / Debug / Cẩm nang | Chi tiết kỹ năng & bảng tra cứu |
| 5 | Ví dụ mẫu 1 | `#### Ví dụ mẫu 1` → `.blocks` (100% tiếng Việt) |
| 6 | Ví dụ mẫu 2 / Dự đoán | `#### Ví dụ mẫu 2` + Em đoán xem? |
| 7 | TH1 (Nâng cao + Gợi ý mở) | Yêu cầu tổng hợp + gợi ý luồng tư duy |
| 8 | TH2 (Nâng cao + Đa sprite/tình huống) | Yêu cầu nâng cao + gợi ý khối chìa khóa |
| 9 | Thử thách / Mẹo nhỏ | Kỹ thuật nâng cao + `.tip` |
| 10 | Câu hỏi ôn | `#### Câu hỏi ôn` → `data-quiz` + đáp án ẩn |
| 11 | Tổng kết | tóm tắt kiến thức cốt lõi buổi học |

Buổi **Bài tập (BT)** — điều chỉnh slide-map; xem [slide-map.md](slide-map.md).

## Component nhanh

```html
<!-- Tag loại slide -->
<span class="slide-tag green">Thực hành</span>

<!-- Khối Scratch — 100% TIẾNG VIỆT -->
<div class="blocks">
  <div class="block event">khi bấm vào 🏳️ (cờ xanh)</div>
  <div class="block looks indent">nói "Xin chào!" trong 2 giây</div>
  <div class="block control indent">đợi 0.5 giây</div>
</div>

<!-- Lặp (C-block) -->
<div class="block control c-block indent">
  lặp lại 5 lần
  <div class="c-body">
    <div class="block looks">trang phục kế tiếp</div>
    <div class="block control">đợi 0.3 giây</div>
  </div>
</div>

<!-- Nhãn TH/BTVN -->
<span class="th-label">TH1</span>
<span class="th-label btvn-label">BTVN1</span>
```

Class khối: `event` (vàng), `define` / `myblock` (hồng/đỏ), `looks` (tím), `control` (cam), `motion` (xanh), `sound` (hồng tím), `variable` (cam đậm), `operator` (xanh lá).

## Bài mở rộng (A/B/C) — 1 slide/bài, khung game

Áp dụng cho mọi bài A1/A2/B1/B2/C1/C2 trong buổi Bài tập (BT):

**1. Mỗi bài (A1, A2, B1, B2, C1, C2) là 1 `<section class="slide">` riêng**,
không gộp cặp vào 1 slide. Bố cục bên trong dùng `.cols.cols-60-40`:
mô tả 1 câu ngay dưới `<h2>`, rồi cột trái 60% = yêu cầu + gợi ý/thử thêm,
cột phải 40% = `.blocks` minh hoạ (100% tiếng Việt).

```html
<section class="slide" data-index="5" aria-label="A1">
  <div class="slide-main">
    <span class="slide-tag green">Bài mở rộng · Mức A</span>
    <h2><span class="th-label">A1</span> 🚚 Rô-bốt giao hàng</h2>
    <div class="slide-body">
      <p style="font-weight:600; margin-bottom:10px;">Rô-bốt đi 100 bước, rẽ vuông góc (90°), rồi đi tiếp 50 bước để tới nhà khách hàng!</p>
      <div class="cols cols-60-40">
        <div>
          <p class="section-label" style="margin-top:0;">Yêu cầu</p>
          <ul>
            <li>Di chuyển đủ 100 bước</li>
            <li>Xoay 90 độ</li>
            <li>Đi tiếp 50 bước</li>
            <li>Kích hoạt khi bấm cờ xanh</li>
          </ul>
          <p class="section-label">✨ Thử thêm</p>
          <p style="font-size:0.92rem; font-weight:600; color:#5a6a7e;">Dùng mở rộng Bút vẽ (Pen) để vẽ đường giao hàng</p>
        </div>
        <div>
          <p class="section-label" style="margin-top:0;">Gợi ý khối lệnh</p>
          <div class="blocks">
            <div class="block event">khi bấm vào 🏳️</div>
            <div class="block motion indent">di chuyển 100 bước</div>
            <div class="block motion indent">xoay phải 90 độ</div>
            <div class="block motion indent">di chuyển 50 bước</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

**2. "Yêu cầu" là `<ul>` thường, mỗi ý một `<li>`.**

**3. Gợi ý khối lệnh:** Không cho sẵn 100% code mà đưa ra các khối chìa khóa và luồng logic để học sinh tự hoàn thiện.

**4. Đặt tên bài theo bối cảnh game/câu chuyện, không mô tả kỹ thuật.**tập. Đoạn mô tả 1 câu dưới `<h2>` kể câu
chuyện đó, nhưng **yêu cầu kỹ thuật, khối lệnh giữ nguyên 100%** so với
markdown nguồn — chỉ đổi cách kể, không đổi bài tập.

| Mô tả kỹ thuật (khô khan) | Khung game |
|---|---|
| "Đường thẳng và góc vuông" (move + turn) | 🚚 Rô-bốt giao hàng |
| "Hình vuông nhỏ" (repeat + move/turn) | 🛡️ Lính canh tuần tra |
| "Vượt 5 điểm" (go to / glide) | ⭐ Thu thập ngôi sao |
| "Điểm đích" (glide + say) | 🏁 Về đích! |
| "Mê cung mini" (glide theo lưới) | 🗝️ Giải cứu khỏi mê cung |
| "Đường zigzag" (move + turn xen kẽ) | 💨 Né chướng ngại vật |

Khi tạo buổi BT mới, nếu markdown nguồn (`thang-*.md`) chưa có tên game,
đặt tên game trong slide **và** cập nhật lại markdown nguồn để hai bên khớp
nhau (xem `curriculum.md` mục "Bài mở rộng" — quy tắc đặt tên game đã ghi ở đó).

**5. Slide "Chọn bài mở rộng" (giới thiệu A/B/C trước các slide bài) vẫn giữ
nguyên** — 3 `k-card` tóm tắt Mức A/B/C, thêm 1 câu nhắc: "Mỗi bài có 1 slide
riêng — bấm chấm phía trên để tới bài em chọn."

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
- Một slide = một ý chính
- Một bài tập (A1, A2, B1…) = một slide riêng, không gộp 2 bài "chọn 1
  trong 2" vào cùng slide — xem mục "Bài mở rộng" phía trên

## JS — không được phá

Giữ nguyên logic điều hướng từ mẫu. **Bắt buộc:**

- Mỗi slide có đúng một trong: `active` | `prev` | `next`
- `keydown` listener riêng, **không** gộp nhầm vào `click` listener
- Fullscreen: `html:fullscreen` (không `body:fullscreen`), hỗ trợ `webkit`
- `goTo()` cập nhật: counter, dots, progressBar, `brandSub`, `aria-hidden`

## Kiểm tra trước khi giao

Dùng skill `run-scratchcurriculum` (`.claude/skills/run-scratchcurriculum/driver.py`)
để lái thật bằng headless Chromium thay vì chỉ mở tay:

```bash
python .claude/skills/run-scratchcurriculum/driver.py --session qa <<'EOF'
nav tuan-{tuần}-buoi-{buổi}.html
wait-for .slide.active
count .slide
text #counter
press ArrowRight
press ArrowRight
sleep 400
text #counter
press End
text #counter
console
quit
EOF
```

1. `count .slide` khớp tổng số slide dự kiến — buổi Học: 11; buổi BT: khung
   (tiêu đề, khởi động/ôn, luyện tập hoặc chữa bài, giới thiệu bài mở rộng)
   + 6 slide bài A1/A2/B1/B2/C1/C2 + tổng kết; Khai giảng: 16. `aria-valuemax`
   và counter khớp con số đó. (Deck tạo trước khi bỏ checklist có thể nhiều hơn.)
2. Tiến 2–3 slide → `#counter` tăng đúng; `press Home` → lùi về đúng slide 1
3. `console` không có lỗi JS
4. Quiz (`data-quiz`): click trên đúng slide đang active → hiện đáp án
   (xem Gotchas trong `run-scratchcurriculum/SKILL.md`)
5. Không còn dấu vết checklist: `grep` không ra `data-checklist` hoặc
   `class="checklist"` trong file
6. Chụp screenshot 1 slide bài mở rộng, nhìn bằng mắt: cột `.cols-60-40` cân
   đối, không tràn `.slide-body`, tên bài là khung game chứ không phải mô tả
   kỹ thuật

## Phạm vi thay đổi

- **Được**: nội dung slide, title, badge tuần/buổi, số slide (cập nhật `total` tự động qua `querySelectorAll`)
- **Được**: sửa lại file `thang-*.md` nguồn (tên bài, mô tả) khi đổi tên bài
  mở rộng theo khung game, để markdown và slide luôn khớp nhau — đây là sửa
  file có sẵn, không phải tạo file `.md` mới
- **Không**: tách file CSS/JS riêng, thêm framework, tạo file `.md` mới trừ khi user yêu cầu
- **Không**: đổi yêu cầu kỹ thuật của bài tập khi đặt tên game — chỉ đổi
  cách kể, số khối lệnh và tiêu chí phải giữ nguyên

## Tài liệu thêm

- Map markdown → slide: [slide-map.md](slide-map.md)
