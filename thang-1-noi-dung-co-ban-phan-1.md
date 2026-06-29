# Tháng 1 — Nội dung cơ bản (phần 1)

> **Tuần 1–4** | Buổi 1–8 | Dành cho em **8–10 tuổi**
>
> Em sẽ làm quen Scratch, cho nhân vật di chuyển, tạo hoạt hình và điều khiển bằng phím.

[← Về lộ trình tổng](curriculum.md) | Tiếp theo: [Tháng 2 — phần 2](thang-2-noi-dung-co-ban-phan-2.md)

---

## Tuần 1 — Làm quen Scratch

### Buổi 1 — Học: Làm quen Scratch

#### Hôm nay em học gì?

Sau buổi này, em biết **lập trình là gì**, nhận biết **Stage, Sprite, Backdrop, khối lệnh** và bấm **cờ xanh** để chạy chương trình đầu tiên.

#### Kiến thức mới

| Từ | Nghĩa |
|----|--------|
| **Lập trình** | Ra lệnh cho máy tính làm từng việc theo thứ tự |
| **Stage** | Sân khấu — nơi nhân vật biểu diễn |
| **Sprite** | Nhân vật trên sân khấu |
| **Backdrop** | Phông nền phía sau |
| **Khối lệnh** | Mảnh lego — ghép lại thành chương trình |
| **Cờ xanh** | Nút "Bắt đầu!" |

**Ẩn dụ:** Scratch giống sân khấu kịch — Sprite là diễn viên, khối lệnh là kịch bản, cờ xanh là hiệu lệnh mở màn!

#### Ví dụ mẫu — Mèo di chuyển

1. Mở [scratch.mit.edu](https://scratch.mit.edu) → **Create** (Tạo).
2. Kéo khối **Events** → `when green flag clicked`.
3. Gắn khối **Motion** → `move 10 steps` (lặp 3 lần).
4. Bấm **cờ xanh** → mèo đi!

#### Thực hành 1 (TH1) — "Mèo chào em"

**Mô tả:** Cho mèo Scratch đi 30 bước khi em bấm cờ xanh.

**Yêu cầu:**
- Có khối `when green flag clicked`
- Mèo di chuyển tổng cộng 30 bước
- Chương trình chạy được

**Gợi ý từng bước:**
1. Kéo `when green flag clicked` (Events).
2. Gắn `move 10 steps` (Motion) — làm **3 lần** (10 + 10 + 10 = 30).
3. Bấm cờ xanh và quan sát.

**Checklist tự kiểm:**
- [ ] Có khối cờ xanh ở đầu chuỗi
- [ ] Mèo di chuyển khi bấm cờ xanh
- [ ] Tổng cộng khoảng 30 bước

#### Thực hành 2 (TH2) — "Đổi cảnh mới"

**Mô tả:** Đổi phông nền, đổi nhân vật và đặt tên riêng cho sprite.

**Yêu cầu:**
- Backdrop khác backdrop mặc định
- Sprite khác mèo mặc định (hoặc chỉnh mèo)
- Sprite có tên riêng (không để "Sprite1")

**Gợi ý từng bước:**
1. Góc dưới phải → **Choose a Backdrop** → chọn cảnh em thích.
2. **Choose a Sprite** → chọn nhân vật (ví dụ: Dog, Bear, Unicorn…).
3. Click ô tên sprite phía trên → gõ tên mới (ví dụ: `Luna`, `Robot`).

**Checklist tự kiểm:**
- [ ] Backdrop đã đổi
- [ ] Sprite đã đổi hoặc chỉnh sửa
- [ ] Có tên riêng cho sprite

#### Mẹo nhỏ

- **Bấm cờ xanh không chạy?** → Kiểm tra đã có `when green flag clicked` chưa.
- **Khối không dính?** → Kéo sát khối phía trên, đợi nó "khớp" như lego.
- **Sprite không di chuyển?** → Thêm khối `move` sau khối Events.

#### Câu hỏi ôn

1. Stage trong Scratch là gì?
2. Sprite là gì?
3. Cờ xanh dùng để làm gì?
4. Khối lệnh giống vật gì trong đời thực? (Gợi ý: lego / kịch bản)
5. Em cần khối Events nào để bắt đầu chương trình khi bấm cờ xanh?

#### Bài tập về nhà 1 (BTVN1) — "Lưu project đầu tiên"

**Mô tả:** Lưu project Scratch về máy với tên của em.

**Yêu cầu:**
- File đuôi `.sb3`
- Tên file: `scratch-[tên em]` (ví dụ: `scratch-Minh`)
- Mở lại file được

**Gợi ý từng bước:**
1. **File** → **Save to your computer**.
2. Chọn thư mục (Desktop hoặc Documents).
3. Đặt tên `scratch-[tên em]` → **Save**.
4. Mở lại file để kiểm tra.

**Checklist tự kiểm:**
- [ ] Đã lưu file `.sb3`
- [ ] Tên file đúng quy tắc
- [ ] Mở lại được, project còn nguyên

#### Bài tập về nhà 2 (BTVN2) — "Mèo quay vòng"

**Mô tả:** Mèo đi 50 bước rồi quay một vòng tròn (360°).

**Yêu cầu:**
- `move` tổng 50 bước
- Quay 360° (một vòng)
- Chạy khi bấm cờ xanh

**Gợi ý từng bước:**
1. `when green flag clicked`.
2. `move 10 steps` × **5** (= 50 bước).
3. `turn 15 degrees` × **24** (= 360°), hoặc dùng `turn 360 degrees` nếu có.

**Checklist tự kiểm:**
- [ ] Đủ 50 bước di chuyển
- [ ] Mèo quay tròn một vòng
- [ ] Chạy khi cờ xanh

---

### Buổi 2 — Bài tập: Khám phá Scratch

#### Ôn nhanh

- **Stage** = sân khấu | **Sprite** = nhân vật | **Backdrop** = phông nền
- **Cờ xanh** = bắt đầu chương trình
- **Lưu project** = File → Save to your computer

#### Chữa BTVN

**BTVN1 — Lưu project:** Mở file đã lưu. Checklist: có file `.sb3`? Tên đúng? Mở lại được?

**BTVN2 — Mèo quay vòng:** Bấm cờ xanh. Mèo có đi đủ và quay tròn không? Nếu thiếu bước `move` hoặc `turn`, em bổ sung ngay đầu buổi.

| Lỗi thường gặp | Em thử |
|----------------|--------|
| Không tìm thấy file | Tìm trong Desktop / Downloads |
| Quay chưa tròn | Thêm `turn` hoặc tăng số lần lặp |
| Không chạy | Kiểm tra `when green flag clicked` |

#### Chọn bài mở rộng

Em chọn **1 mức** A, B hoặc C, rồi chọn **1 trong 2 bài** của mức đó. Làm hết checklist trước khi đổi bài.

| Mức | Khi nào chọn |
|-----|--------------|
| **A1 hoặc A2** | Em muốn làm chắc: đổi cảnh, sprite, lưu file |
| **B1 hoặc B2** | Em muốn kết hợp di chuyển + nói chuyện qua backdrop |
| **C1 hoặc C2** | Em muốn sáng tạo giới thiệu bản thân |

#### Bài A1 — Cơ bản: "Phòng của em"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Tạo cảnh phòng ngủ với nhân vật em thích |
| **Yêu cầu bắt buộc** | (1) Đổi backdrop phòng (2) Chọn sprite (3) Đặt tên sprite (4) Lưu project |
| **Gợi ý bước** | Backdrop → Bedroom; Sprite → nhân vật yêu thích; đặt tên; File → Save |
| **Checklist** | Backdrop đổi / Sprite đổi / Có tên / Đã lưu `.sb3` |
| **Thử thêm** | Thêm 1 sprite phụ (đồ vật: cây, bóng đèn…) |

#### Bài A2 — Cơ bản: "Thư viện nhân vật"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Em tạo "thư viện" với 3 sprite khác nhau trên cùng một backdrop |
| **Yêu cầu bắt buộc** | (1) Thêm 3 sprite (2) Mỗi sprite có tên riêng (3) Đặt vị trí khác nhau (4) Lưu project |
| **Gợi ý bước** | Chọn sprite 1 → đặt tên → `go to` vị trí trái; lặp cho sprite 2 (giữa), sprite 3 (phải) |
| **Checklist** | 3 sprite / 3 tên riêng / Vị trí khác nhau / Đã lưu `.sb3` |
| **Thử thêm** | Mỗi sprite `say` tên mình khi cờ xanh |

#### Bài B1 — Trung bình: "Chuyến tham quan"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Nhân vật "đi tham quan" qua 3 bối cảnh khác nhau |
| **Yêu cầu bắt buộc** | (1) 3 backdrop (2) Sprite di chuyển khi cờ xanh (3) `say` lời chào mỗi cảnh |
| **Gợi ý bước** | `when green flag clicked` → `switch backdrop to` hoặc `next backdrop` → `move` → `say` "Xin chào!" → `wait 1 seconds` — lặp cho 3 cảnh |
| **Checklist** | 3 backdrop / Có `move` / Có `say` / Chạy được |
| **Thử thêm** | Thêm `glide` thay vì `move` giữa các cảnh |

#### Bài B2 — Trung bình: "Hành trình 2 cảnh"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Nhân vật đi qua 2 bối cảnh, mỗi cảnh có lời chào |
| **Yêu cầu bắt buộc** | (1) 2 backdrop (2) `move` hoặc `glide` (3) `say` ở mỗi cảnh (4) `wait` giữa các cảnh |
| **Gợi ý bước** | Cảnh 1: backdrop 1 → `move` → `say` "Xin chào!" → `wait 1` → `switch backdrop to` cảnh 2 → `say` "Đến nơi rồi!" |
| **Checklist** | 2 backdrop / Có di chuyển / 2 câu `say` / Chạy được |
| **Thử thêm** | Thêm `turn` trước khi đổi cảnh |

#### Bài C1 — Thử thách: "Poster Scratch đầu tay"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Poster giới thiệu bản thân bằng Scratch |
| **Yêu cầu bắt buộc** | (1) Backdrop tự chọn (2) Sprite tự chọn (3) Ít nhất 3 khối lệnh (4) `say` tên + 1 sở thích |
| **Gợi ý bước** | Kết hợp `move`, `turn`, `say` theo ý thích; ví dụ: `say` "Em tên Minh, em thích bóng đá!" |
| **Checklist** | 3+ khối / Có lời giới thiệu / Sáng tạo riêng |
| **Thử thêm** | Thêm sprite thứ 2 là "bạn thân" |

#### Bài C2 — Thử thách: "Thẻ danh thiếp"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Sprite giới thiệu em qua thẻ danh thiếp ảo — tên, tuổi, sở thích |
| **Yêu cầu bắt buộc** | (1) `say` tên (2) `say` tuổi hoặc lớp (3) `say` 1 sở thích (4) Có `wait` giữa các câu |
| **Gợi ý bước** | `when green flag clicked` → `say` "Em tên…" → `wait 2` → `say` "Em 9 tuổi" → `wait 2` → `say` "Em thích vẽ!" |
| **Checklist** | 3 thông tin / Có `wait` / Backdrop đẹp / Sáng tạo riêng |
| **Thử thêm** | Thêm `switch costume` khi nói từng dòng |

---

## Tuần 2 — Di chuyển & Tọa độ

### Buổi 3 — Học: Di chuyển & Tọa độ

#### Hôm nay em học gì?

Em điều khiển sprite **di chuyển chính xác hơn** bằng `move`, `turn`, tọa độ **X-Y**, `go to` và `glide`.

#### Kiến thức mới

- **Tọa độ X-Y:** Stage có trục ngang (X) và dọc (Y). Giữa màn hình là (0, 0).
- **`move 10 steps`:** Đi thẳng theo hướng sprite đang nhìn.
- **`turn 90 degrees`:** Quay 90° (góc vuông).
- **`go to x: _ y: _`:** Nhảy đến vị trí cụ thể.
- **`glide 1 secs to x: _ y: _`:** Trượt mượt đến vị trí.

**Mẹo:** Di chuột trên Stage — em thấy số X, Y ở dưới giúp biết vị trí!

#### Ví dụ mẫu — Đi đến góc màn hình

1. `when green flag clicked`
2. `go to x: (-150) y: (0)` — sang trái
3. `wait 0.5 seconds`
4. `go to x: (150) y: (0)` — sang phải

#### Thực hành 1 (TH1) — "Đi thẳng 50 bước"

**Mô tả:** Sprite đi thẳng 50 bước, quay 90° sang phải, đi thêm 30 bước.

**Yêu cầu:**
- Tổng hai đoạn: 50 bước + 30 bước
- Có `turn 90 degrees` giữa hai đoạn

**Gợi ý từng bước:**
1. `when green flag clicked`
2. `move 10 steps` × 5 (= 50)
3. `turn 90 degrees`
4. `move 10 steps` × 3 (= 30)

**Checklist tự kiểm:**
- [ ] Đoạn đầu 50 bước
- [ ] Có quay 90°
- [ ] Đoạn sau 30 bước

#### Thực hành 2 (TH2) — "Đi qua 3 điểm"

**Mô tả:** Dùng `go to` đưa sprite qua 3 vị trí trên Stage.

**Yêu cầu:**
- Dùng `go to x: _ y: _` ít nhất 3 lần
- Có `wait` giữa các lần (để em nhìn rõ)

**Gợi ý từng bước:**
1. Điểm 1: `go to x: (-100) y: (80)`
2. `wait 0.5 seconds`
3. Điểm 2: `go to x: (0) y: (-80)`
4. `wait 0.5 seconds`
5. Điểm 3: `go to x: (100) y: (80)`

**Checklist tự kiểm:**
- [ ] 3 vị trí `go to` khác nhau
- [ ] Có `wait` giữa các lần
- [ ] Sprite đi đúng khi cờ xanh

#### Mẹo nhỏ

- Sprite đi **sai hướng**? → Thêm `point in direction 90` (hoặc 0, 180, -90) trước `move`.
- `go to` quá nhanh? → Dùng `glide` thay `go to`.

#### Câu hỏi ôn

1. Trục X nằm ngang hay dọc?
2. `go to` và `glide` khác nhau thế nào?
3. Quay 90° một lần, sprite quay bao nhiêu độ?
4. Làm sao biết tọa độ vị trí chuột trên Stage?
5. Em cần khối nào để sprite nhảy thẳng đến điểm (100, 50)?

#### Bài tập về nhà 1 (BTVN1) — "Vẽ chữ L"

**Mô tả:** Dùng `move` và `turn` vẽ đường đi hình chữ **L**.

**Yêu cầu:**
- Ít nhất 2 đoạn `move` và 1 lần `turn 90 degrees`
- Hình giống chữ L (đi ngang rồi đi dọc, hoặc ngược lại)

**Gợi ý từng bước:**
1. `move` 80 bước (cạnh dài của L).
2. `turn 90 degrees`.
3. `move` 40 bước (cạnh ngắn).

**Checklist tự kiểm:**
- [ ] Có ít nhất 2 đoạn `move`
- [ ] Có `turn 90 degrees`
- [ ] Đường đi giống chữ L

#### Bài tập về nhà 2 (BTVN2) — "Trượt qua 3 vị trí"

**Mô tả:** Dùng `glide` đưa sprite qua 3 điểm mượt mà.

**Yêu cầu:**
- 3 lần `glide` đến 3 tọa độ khác nhau
- Mỗi lần glide khoảng 1 giây

**Gợi ý từng bước:**
1. `glide 1 secs to x: (-120) y: (0)`
2. `glide 1 secs to x: (0) y: (100)`
3. `glide 1 secs to x: (120) y: (0)`

**Checklist tự kiểm:**
- [ ] 3 lần `glide`
- [ ] 3 vị trí khác nhau
- [ ] Chuyển động mượt, không nhảy cóc

---

### Buổi 4 — Bài tập: Luyện Motion

#### Ôn nhanh

- `move` = đi thẳng | `turn` = quay
- `go to` = nhảy đến điểm | `glide` = trượt đến điểm
- Tọa độ X (ngang), Y (dọc) — giữa Stage là (0, 0)

#### Chữa BTVN

**BTVN1 — Chữ L:** Sprite có đi 2 đoạn và quay 90° tạo hình L không?

**BTVN2 — Glide 3 điểm:** Có đủ 3 lần `glide`? Nếu sprite "nhảy cóc", đổi `go to` thành `glide`.

#### Chọn bài mở rộng

Em chọn **1 mức** A, B hoặc C, rồi chọn **1 trong 2 bài** của mức đó.

| Mức | Khi nào chọn |
|-----|--------------|
| **A1 hoặc A2** | Em luyện `move` + `turn` |
| **B1 hoặc B2** | Em luyện `go to` / `glide` đến điểm cụ thể |
| **C1 hoặc C2** | Em thử thách đường đi phức tạp hơn |

#### Bài A1 — Cơ bản: "Đường thẳng và góc vuông"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Sprite đi 100 bước, quay 90°, đi 50 bước |
| **Yêu cầu bắt buộc** | `move` 100 bước + `turn 90` + `move` 50 bước |
| **Gợi ý bước** | Dùng `move 10` × 10, rồi turn, rồi `move 10` × 5 |
| **Checklist** | 100 bước / Quay 90° / 50 bước tiếp |
| **Thử thêm** | Thêm `pen down` (Pen extension) để vẽ đường đi |

#### Bài A2 — Cơ bản: "Hình vuông nhỏ"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Dùng `move` và `turn 90 degrees` vẽ đường đi hình vuông |
| **Yêu cầu bắt buộc** | 4 cạnh bằng nhau; 4 lần `turn 90 degrees` |
| **Gợi ý bước** | `move 50` → `turn 90` → lặp 4 lần (hoặc `repeat 4`) |
| **Checklist** | 4 cạnh / 4 lần quay 90° / Hình đóng kín / Chạy khi cờ xanh |
| **Thử thêm** | Dùng Pen extension để thấy hình vuông |

#### Bài B1 — Trung bình: "Vượt 5 điểm"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Sprite `go to` lần lượt 5 điểm |
| **Yêu cầu bắt buộc** | 5 lần `go to` hoặc `glide`; có `wait` giữa các điểm |
| **Gợi ý bước** | Điểm: (-150,100) → (-50,-50) → (50,100) → (150,-50) → (0,0) |
| **Checklist** | 5 điểm / Có wait / Chạy khi cờ xanh |
| **Thử thêm** | Mỗi điểm sprite `say` "Đã đến!" |

#### Bài B2 — Trung bình: "Điểm đích"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Sprite `glide` đến điểm đích và báo "Đến rồi!" |
| **Yêu cầu bắt buộc** | (1) `glide` đến tọa độ đích (2) `say` khi đến (3) Có cờ xanh bắt đầu |
| **Gợi ý bước** | `when green flag clicked` → `glide 2 secs to x: (100) y: (80)` → `say` "Đến rồi!" `for 2 seconds` |
| **Checklist** | Có `glide` / Có `say` / Đích rõ ràng / Chạy được |
| **Thử thêm** | Thêm điểm xuất phát và điểm đích khác nhau |

#### Bài C1 — Thử thách: "Mê cung mini"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Sprite `glide` qua 6 ô trên lưới, **không đi chéo** |
| **Yêu cầu bắt buộc** | 6 lần `glide`; chỉ đi ngang hoặc dọc từng ô |
| **Gợi ý bước** | Tưởng tượng lưới 3×2; đi từ góc trái dưới → phải → phải → lên → lên → phải |
| **Checklist** | 6 ô / Không chéo / Dùng `glide` |
| **Thử thêm** | Vẽ lưới bằng Pen trước khi đi |

#### Bài C2 — Thử thách: "Đường zigzag"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Sprite đi zigzag — 6 đoạn `move` và `turn` xen kẽ |
| **Yêu cầu bắt buộc** | 6 đoạn; mỗi đoạn quay góc (ví dụ 60° hoặc 120°) |
| **Gợi ý bước** | `move 40` → `turn 60` → `move 40` → `turn -60` — lặp 3 lần |
| **Checklist** | 6 đoạn / Có `turn` xen kẽ / Đường zigzag rõ / Chạy được |
| **Thử thêm** | Đổi góc quay để zigzag khác nhau |

---

## Tuần 3 — Hoạt hình & Chuỗi lệnh

### Buổi 5 — Học: Hoạt hình & Chuỗi lệnh

#### Hôm nay em học gì?

Em tạo **hoạt hình** bằng chuỗi lệnh tuần tự, `wait`, đổi **costume** và cho sprite **nói chuyện**.

#### Kiến thức mới

- **Chuỗi lệnh:** Máy chạy từ **trên xuống dưới**, từng khối một.
- **`wait 1 seconds`:** Dừng 1 giây (Control).
- **`switch costume to`:** Đổi trang phục / hình nhân vật (Looks).
- **`say` / `think`:** Nói hoặc suy nghĩ (bong bóng thoại).
- **`show` / `hide`:** Hiện / ẩn sprite.

#### Ví dụ mẫu — Nhảy và nói

1. `when green flag clicked`
2. `switch costume to costume2`
3. `say` "Nhảy nào!" `for 1 seconds`
4. `wait 0.5 seconds`
5. `switch costume to costume1`

#### Thực hành 1 (TH1) — "Nhảy 3 bước"

**Mô tả:** Đổi costume 3 lần + `wait` tạo hiệu ứng nhảy.

**Yêu cầu:**
- Ít nhất 3 lần `switch costume` (hoặc `next costume`)
- Có `wait` giữa các lần đổi

**Gợi ý từng bước:**
1. `when green flag clicked`
2. `switch costume to` costume1 → `wait 0.3 seconds`
3. costume2 → `wait 0.3 seconds`
4. costume3 → `wait 0.3 seconds`
5. (Tuỳ chọn) quay lại costume1

**Checklist tự kiểm:**
- [ ] 3 lần đổi costume
- [ ] Có `wait`
- [ ] Nhìn giống động tác nhảy

#### Thực hành 2 (TH2) — "Câu chuyện 2 cảnh"

**Mô tả:** Kể chuyện ngắn 2 cảnh: mỗi cảnh đổi costume + `say` 1 câu.

**Yêu cầu:**
- 2 cảnh rõ ràng
- Mỗi cảnh có `say` và đổi costume (hoặc backdrop)

**Gợi ý từng bước:**
1. Cảnh 1: `say` "Ngày xửa ngày xưa…" → `wait 2 seconds`
2. `switch costume to` costume2
3. Cảnh 2: `say` "Có một chú mèo…" → `wait 2 seconds`

**Checklist tự kiểm:**
- [ ] 2 cảnh
- [ ] Mỗi cảnh có `say`
- [ ] Có đổi costume hoặc backdrop

#### Mẹo nhỏ

- Nói quá nhanh? → Tăng thời gian trong `say … for 2 seconds` hoặc thêm `wait`.
- Costume không đổi? → Kiểm tra sprite có nhiều hơn 1 costume trong tab Costumes.

#### Câu hỏi ôn

1. Scratch chạy khối lệnh theo thứ tự nào?
2. `wait` dùng để làm gì?
3. `say` và `think` khác nhau thế nào?
4. Làm sao đổi trang phục nhân vật?
5. Em muốn sprite ẩn đi — dùng khối gì?

#### Bài tập về nhà 1 (BTVN1) — "Nhảy 5 lần"

**Mô tả:** Lặp đổi costume + wait để nhảy **5 lần**.

**Yêu cầu:**
- Ít nhất 5 chu kỳ đổi costume (có thể dùng `repeat 5` nếu đã học, hoặc viết tay 5 lần)
- Có `wait` mỗi lần

**Gợi ý từng bước:**
1. `when green flag clicked`
2. Lặp 5 lần: `next costume` → `wait 0.3 seconds`

**Checklist tự kiểm:**
- [ ] 5 lần nhảy / đổi costume
- [ ] Có `wait`
- [ ] Hoạt hình mượt

#### Bài tập về nhà 2 (BTVN2) — "Câu chuyện 3 cảnh"

**Mô tả:** Kể chuyện **3 cảnh**, mỗi cảnh có `say` ít nhất 1 câu.

**Yêu cầu:**
- 3 cảnh (đổi costume hoặc backdrop)
- 3 câu thoại trở lên

**Gợi ý từng bước:**
1. Cảnh 1: backdrop + `say` câu mở đầu
2. Cảnh 2: đổi costume + `say` câu giữa
3. Cảnh 3: đổi backdrop + `say` câu kết

**Checklist tự kiểm:**
- [ ] 3 cảnh
- [ ] 3+ câu `say`
- [ ] Có `wait` giữa các cảnh

---

### Buổi 6 — Bài tập: Luyện Looks

#### Ôn nhanh

- Chuỗi lệnh chạy từ trên xuống
- `wait` = tạm dừng | `switch costume` = đổi hình
- `say` = nói | `show`/`hide` = hiện/ẩn

#### Extension Music 🎵

Thêm extension: góc dưới trái → **+** → **Music**.

| Khối lệnh | Em dùng để làm gì? |
|-----------|-------------------|
| `play drum` ... `for` ... `beats` | Phát tiếng **trống** (Snare, Bass Drum…) |
| `play note` ... `for` ... `beats` | Phát **nốt nhạc** (số càng cao = cao độ cao hơn) |
| `rest for` ... `beats` | **Im lặng** đúng số nhịp |
| `set instrument to` | Chọn nhạc cụ (Piano, Guitar…) cho `play note` |
| `set tempo to` ... `bpm` | Chỉnh nhịp nhanh/chậm |

Buổi hôm nay em gắn Music vào bài Looks — trống theo nhịp nhảy, nốt nhạc mở cảnh, tiếng bất ngờ khi `show`!

#### Chữa BTVN

**BTVN1:** Có đủ 5 lần đổi costume + wait không?

**BTVN2:** Có 3 cảnh và 3 câu `say`? Thiếu `wait` thì thêm giữa các cảnh.

#### Chọn bài mở rộng

Em chọn **1 mức** A, B hoặc C, rồi chọn **1 trong 2 bài** của mức đó.

| Mức | Khi nào chọn |
|-----|--------------|
| **A1 hoặc A2** | Em luyện costume + `wait` + **trống theo nhịp** |
| **B1 hoặc B2** | Em kể chuyện nhiều cảnh + **nhạc / trống** |
| **C1 hoặc C2** | Em thêm hiệu ứng Looks + **âm thanh Music** |

#### Bài A1 — Cơ bản: "Nhảy 3 bước (nâng cao)"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Hoạt hình nhảy với 3 costume + tiếng trống Music |
| **Yêu cầu bắt buộc** | 3 costume + `wait` + chạy khi cờ xanh |
| **Gợi ý bước** | `next costume` × 3 với `wait 0.4` giữa mỗi lần |
| **Checklist** | 3 costume / Có wait / Chạy được |
| **Thử thêm** | Thêm `play drum (1 Snare) for (0.25) beats` mỗi lần nhảy |

#### Bài A2 — Cơ bản: "Nhịp điệu"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Đổi costume theo nhịp nhanh (0.2 giây) — như nhảy disco, có trống |
| **Yêu cầu bắt buộc** | `next costume` + `wait 0.2 seconds` lặp ít nhất 8 lần |
| **Gợi ý bước** | `when green flag clicked` → `repeat 8` → `next costume` → `play drum (4 Claves) for (0.2) beats` → `wait 0.2 seconds` |
| **Checklist** | Có `repeat` hoặc lặp tay / `wait 0.2` / ≥ 8 lần đổi / Nhịp đều |
| **Thử thêm** | Thử `set tempo to (180) bpm` hoặc `wait 0.5` để so sánh nhịp |

#### Bài B1 — Trung bình: "Câu chuyện 3 cảnh"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Truyện 3 cảnh: mỗi cảnh costume + 1 câu thoại |
| **Yêu cầu bắt buộc** | 3 cảnh; 3 câu `say`; đổi backdrop hoặc costume mỗi cảnh |
| **Gợi ý bước** | Mở đầu → cao trào → kết thúc; mỗi cảnh `wait 2 seconds` |
| **Checklist** | 3 cảnh / 3 câu / Đổi hình hoặc nền |
| **Thử thêm** | `set instrument to (1 Piano)` + `play note` mở mỗi cảnh |

#### Bài B2 — Trung bình: "Kịch bản 4 cảnh"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Kể chuyện 4 cảnh — mỗi cảnh đổi backdrop hoặc costume + 1 câu thoại |
| **Yêu cầu bắt buộc** | 4 cảnh; 4 câu `say`; có `wait` giữa cảnh |
| **Gợi ý bước** | Cảnh 1 mở đầu → `wait` → Cảnh 2 cao trào → `wait` → Cảnh 3 → Cảnh 4 kết |
| **Checklist** | 4 cảnh / 4 câu / Có đổi hình hoặc nền / Có `wait` |
| **Thử thêm** | `play drum (2 Bass Drum) for (0.5) beats` giữa các cảnh; thử `think` thay `say` ở 1 cảnh |

#### Bài C1 — Thử thách: "Biến hình thần chú"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Nhân vật `say` câu thần chú rồi biến hình (đổi costume) |
| **Yêu cầu bắt buộc** | `say` thần chú → `wait` → `switch costume` sang hình "biến hình" |
| **Gợi ý bước** | `say` "Biến hình!" → `play note (72) for (0.3) beats` → `wait 1` → costume đặc biệt → `say` "Ta là…!" |
| **Checklist** | Có thần chú / Có biến hình / Có kết |
| **Thử thêm** | 2–3 nốt tăng dần (60 → 64 → 67) trước khi biến; biến lại costume cũ sau 3 giây |

#### Bài C2 — Thử thách: "Câu chuyện ma vui"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Kể chuyện ma hài: sprite `hide` rồi `show` bất ngờ + `say` |
| **Yêu cầu bắt buộc** | (1) `hide` (2) `wait` (3) `show` (4) `say` câu bất ngờ |
| **Gợi ý bước** | `say` "Trong rừng tối…" → `hide` → `rest for (2) beats` → `show` → `play drum (1 Snare) for (0.5) beats` → `say` "Bù!" |
| **Checklist** | Có hide/show / Có wait hoặc rest / Có thoại / Gây bất ngờ vui |
| **Thử thêm** | Đổi loại trống (Snare, Bass Drum) để thử âm thanh khác nhau |

#### Bài tập về nhà

**BTVN:** Tạo một bài nhạc dài **1 phút** bằng các khối **Music**.

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Em sáng tác bài nhạc khoảng 60 giây, chỉ dùng extension Music |
| **Yêu cầu bắt buộc** | Extension Music; ≥ 1 `play note`; ≥ 1 `play drum`; có `set tempo to`; tổng thời gian ~1 phút khi chạy cờ xanh |
| **Gợi ý bước** | 1. Thêm Music (+ góc dưới trái). 2. `set tempo to (120) bpm`. 3. `set instrument to (1 Piano)`. 4. Xếp chuỗi `play note` + `play drum` + `rest`. 5. Dùng `repeat` cho đoạn lặp. 6. Nghe thử — chỉnh đến đủ ~1 phút. 7. Lưu project. |
| **Checklist** | Có Music / Có note + drum / Có tempo / ~1 phút / Đã lưu project |
| **Thử thêm** | Đổi nhạc cụ giữa các đoạn; dùng `rest` tạo khoảng lặng |

Mang project đến **Buổi 7 — Sự kiện & Điều khiển** để chia sẻ!

---

## Tuần 4 — Sự kiện & Điều khiển

### Buổi 7 — Học: Sự kiện & Điều khiển

#### Hôm nay em học gì?

Em điều khiển sprite bằng **phím** và **click chuột** — không chỉ bấm cờ xanh!

#### Kiến thức mới

- **`when green flag clicked`:** Bắt đầu khi cờ xanh.
- **`when key pressed`:** Khi nhấn phím (mũi tên, space…).
- **`when this sprite clicked`:** Khi click vào sprite.
- Mỗi khối Events có thể bắt đầu **chuỗi lệnh riêng**.

**Ví dụ:** Phím ↑ → `change y by 10` (đi lên). Phím ↓ → `change y by -10`.

#### Ví dụ mẫu — Đi lên / xuống

1. Khối riêng: `when key up arrow pressed` → `change y by 10`
2. Khối riêng: `when key down arrow pressed` → `change y by -10`

#### Thực hành 1 (TH1) — "Lên và xuống"

**Mô tả:** Nhấn phím ↑ sprite đi lên, phím ↓ sprite đi xuống.

**Yêu cầu:**
- 2 khối Events riêng (up và down)
- Dùng `change y by`

**Gợi ý từng bước:**
1. `when key up arrow pressed` → `change y by 10`
2. `when key down arrow pressed` → `change y by -10`

**Checklist tự kiểm:**
- [ ] Phím ↑ hoạt động
- [ ] Phím ↓ hoạt động
- [ ] Hai khối Events tách riêng

#### Thực hành 2 (TH2) — "Điều khiển 4 hướng"

**Mô tả:** Dùng 4 phím mũi tên di chuyển sprite.

**Yêu cầu:**
- ↑ ↓ ← → đều hoạt động
- Dùng `change x by` / `change y by`

**Gợi ý từng bước:**
1. ↑ → `change y by 10`
2. ↓ → `change y by -10`
3. → → `change x by 10`
4. ← → `change x by -10`

**Checklist tự kiểm:**
- [ ] 4 phím đều điều khiển được
- [ ] 4 khối Events riêng
- [ ] Sprite không đi ra ngoài Stage (tuỳ chọn: giới hạn)

#### Mẹo nhỏ

- Nhấn phím không phản ứng? → Click vào vùng Stage trước (Scratch cần "focus").
- Di chuyển quá nhanh? → Giảm số bước (5 thay vì 10).

#### Câu hỏi ôn

1. `when key pressed` khác `when green flag clicked` thế nào?
2. Làm sao sprite đi lên khi nhấn phím ↑?
3. Em có thể có nhiều khối Events không?
4. `when this sprite clicked` dùng khi nào?
5. `change x by 10` nghĩa là gì?

#### Bài tập về nhà 1 (BTVN1) — "Space đổi costume"

**Mô tả:** Mỗi lần nhấn **phím Space**, sprite đổi sang costume tiếp theo.

**Yêu cầu:**
- `when key space pressed`
- `next costume` hoặc `switch costume`

**Gợi ý từng bước:**
1. `when key space pressed`
2. `next costume`

**Checklist tự kiểm:**
- [ ] Nhấn Space đổi hình
- [ ] Sprite có ít nhất 2 costume
- [ ] Hoạt động mỗi lần nhấn

#### Bài tập về nhà 2 (BTVN2) — "Click để chào"

**Mô tả:** Click vào sprite → sprite `say` lời chào.

**Yêu cầu:**
- `when this sprite clicked`
- `say` ít nhất 1 câu

**Gợi ý từng bước:**
1. `when this sprite clicked`
2. `say` "Chào bạn!" `for 2 seconds`

**Checklist tự kiểm:**
- [ ] Click sprite có phản ứng
- [ ] Có lời chào
- [ ] Có thể click nhiều lần

---

### Buổi 8 — Bài tập: Luyện Events

#### Ôn nhanh

- Events = "Khi… thì…" (khi nhấn phím, khi click…)
- Mỗi sự kiện có thể có chuỗi khối riêng
- `change x by` / `change y by` = di chuyển từng bước nhỏ

#### Chữa BTVN

**BTVN1:** Nhấn Space — costume có đổi không? Sprite cần ≥ 2 costume.

**BTVN2:** Click sprite — có `say` không? Kiểm tra khối `when this sprite clicked`.

| Lỗi thường gặp | Em thử |
|----------------|--------|
| Gộp nhiều phím vào 1 khối Events | Tách mỗi phím thành 1 khối `when key` riêng |
| Nhấn phím không di chuyển | Kiểm tra `change x/y` — dấu +/− có đúng không? |
| Nhảy mãi lên trời | Thêm `change y by -30` sau `wait` để rơi xuống |
| `if touching` không chạy | Chọn đúng tên sprite trong dropdown |

#### Chọn bài mở rộng

Em chọn **1 mức** A, B hoặc C, rồi chọn **1 trong 2 bài** của mức đó.

| Mức | Khi nào chọn |
|-----|--------------|
| **A1 hoặc A2** | Em luyện điều khiển phím |
| **B1 hoặc B2** | Em kết hợp phím + phản ứng |
| **C1 hoặc C2** | Em làm mini game tương tác |

#### Bài A1 — Cơ bản: "Tứ phương"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Điều khiển sprite 4 hướng bằng phím mũi tên — sprite quay đúng hướng khi đi |
| **Yêu cầu bắt buộc** | 4 phím ↑↓←→; mỗi phím 1 khối Events; mỗi phím có `point in direction` (↑0, ↓180, ←-90, →90) |
| **Gợi ý bước** | `change y` cho lên/xuống; `change x` cho trái/phải; thêm `point in direction` trước khi di chuyển |
| **Checklist** | 4 phím / 4 khối Events / Hướng nhìn đúng / Di chuyển mượt |
| **Thử thêm** | Backdrop bản đồ + `if on edge, bounce` |

#### Bài A2 — Cơ bản: "Trái và phải"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Chỉ dùng phím ← và → — sprite quay hướng khi đổi chiều |
| **Yêu cầu bắt buộc** | `when key left arrow` → `point in direction (-90)` → `change x by -10`; tương tự phải với `90` |
| **Gợi ý bước** | Tạo 2 khối Events riêng; thử `glide 0.1 secs to x: (x position) y: (y position)` sau `change x` cho mượt |
| **Checklist** | ← hoạt động / → hoạt động / Quay hướng đúng / 2 khối Events |
| **Thử thêm** | `if on edge, bounce` — không trôi khỏi sân |

#### Bài B1 — Trung bình: "Nhân vật phản ứng"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | 3 phím khác nhau → mỗi phím đổi costume và phát âm thanh riêng |
| **Yêu cầu bắt buộc** | 3 phím (ví dụ a / s / d); mỗi phím: `switch costume to` khác nhau + `play sound` khác nhau |
| **Gợi ý bước** | `when key a pressed` → `switch costume to` A → `play sound` A; lặp cho s và d |
| **Checklist** | 3 phím hoạt động / Mỗi phím costume khác / Mỗi phím âm thanh khác |
| **Thử thêm** | Thêm `say` ngắn mỗi khi nhấn phím |

#### Bài B2 — Trung bình: "Nhảy khi Space"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Nhấn Space → nhảy lên rồi rơi xuống — chỉ nhảy khi đứng trên sàn |
| **Yêu cầu bắt buộc** | `when key space pressed` → `if touching color` (sàn) → `change y by 30` → `wait 0.3` → `change y by -30` |
| **Gợi ý bước** | Chọn backdrop có màu sàn rõ; dùng eyedropper lấy màu sàn cho `touching color` |
| **Checklist** | Space nhảy / Có lên và xuống / Chỉ nhảy khi chạm sàn / Không bay mãi |
| **Thử thêm** | `play sound` khi nhảy |

#### Bài C1 — Thử thách: "Mini đuổi bắt"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Player điều khiển phím đuổi Target di chuyển ngẫu nhiên; chạm → thắng |
| **Yêu cầu bắt buộc** | 2 sprite; Player: 4 phím mũi tên; Target: `forever` + `glide 1 secs to random position`; Player: `forever` + `if touching [Target]` → `say` + `play sound` + `hide` Target |
| **Gợi ý bước** | Đặt tên sprite rõ (Player, Target); kiểm tra dropdown `touching` chọn đúng Target |
| **Checklist** | 2 sprite / Player điều khiển được / Target di chuyển / Chạm có thông báo + ẩn Target |
| **Thử thêm** | Bấm cờ xanh → `show` Target lại để chơi tiếp |

#### Bài C2 — Thử thách: "Trốn thợ săn chuột"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Prey chạy bằng phím; Hunter (thợ săn) luôn đuổi theo chuột — ai chạm ai thắng |
| **Yêu cầu bắt buộc** | Prey: 4 phím mũi tên; Hunter: `forever` → `point towards mouse-pointer` → `move 8 steps`; Hunter: `forever` + `if touching [Prey]` → `say` "Bắt được!" + `stop all` |
| **Gợi ý bước** | Thêm 2 sprite (ví dụ Chuột + Mèo); code Hunter trên sprite Mèo, code Prey trên sprite Chuột |
| **Checklist** | Prey điều khiển phím / Hunter theo chuột / Chạm có thông báo / Game dừng khi bắt được |
| **Thử thêm** | Prey `say` "Còn chạy được!" mỗi 5 giây (stack `wait 5` riêng) |

---

## Tổng kết tháng 1

Em đã học:
- Giao diện Scratch, Motion, Looks, Events
- Hoạt hình, câu chuyện ngắn, điều khiển bằng phím

**Tiếp theo:** [Tháng 2 — Âm thanh, cảm biến, vòng lặp, biến](thang-2-noi-dung-co-ban-phan-2.md)
