# Nội dung cơ bản (2) — Tuần 5 đến 8 🎵🔁🎮

> Chào em! Đây là phần học **tháng 2** của khóa Scratch. Em sẽ học thêm **âm thanh**, **nhiều nhân vật**, **cảm biến**, **vòng lặp**, **điều kiện** và **biến** — những mảnh ghép quan trọng để làm game hay hơn!

**Tuần 5–8** | **Buổi 9–16** | Dành cho em **8–10 tuổi**

---

# Tuần 5 — Âm thanh & nhiều sprite 🎵

---

## Buổi 9 — Học (H): Âm thanh & nhiều sprite

### Hôm nay em học gì?

Hôm nay em sẽ làm project Scratch **có tiếng** và **có nhiều nhân vật cùng lúc**! Em học cách cho nhạc nền chạy liên tục, phát tiếng khi click, và cho hai sprite nói chuyện với nhau như một đoạn hội thoại nhỏ. 🎶🐱🐶

---

### Kiến thức mới

**1. Nhóm khối Sound (Âm thanh) 🎵**

| Khối lệnh | Em dùng để làm gì? |
|-----------|-------------------|
| `start sound` | Phát một âm thanh **một lần** (tiếng click, tiếng vỗ tay...) |
| `play sound until done` | Phát âm thanh và **đợi** cho đến khi hết |
| `stop all sounds` | Tắt hết âm thanh đang phát |
| `change volume by` / `set volume to` | Chỉnh to/nhỏ âm thanh |

**2. Thêm âm thanh vào project**

- Vào tab **Sounds** của sprite hoặc **Stage** (sân khấu).
- Bấm **Choose a Sound** để chọn sẵn, hoặc **Upload** để tải file âm thanh lên.
- Nhạc nền thường đặt ở **Stage**, tiếng nhân vật đặt ở **Sprite**.

**3. Nhiều sprite cùng lúc 👥**

- Mỗi sprite có **code riêng** — giống như mỗi nhân vật có kịch bản riêng.
- Em có thể thêm sprite bằng nút **Choose a Sprite** (góc dưới phải).
- Để hai nhân vật **nói chuyện**, em dùng khối `say` và `wait` xen kẽ nhau.

**4. Khối hữu ích hôm nay**

| Nhóm | Khối lệnh |
|------|-----------|
| Events | `when green flag clicked`, `when this sprite clicked` |
| Looks | `say` ... `for` ... `secs`, `switch costume to` |
| Control | `wait` ... `secs` |
| Sound | `start sound`, `play sound until done` |

---

### Ví dụ mẫu

**Ví dụ: Mèo chào em có tiếng "Meow"**

1. Chọn sprite **Cat** (Mèo).
2. Vào tab **Sounds** → **Choose a Sound** → chọn `Meow`.
3. Kéo khối `when green flag clicked` (Events).
4. Gắn `say` `Xin chào!` `for` `2` `secs` (Looks).
5. Gắn tiếp `start sound` `Meow` (Sound).
6. Bấm **cờ xanh** — mèo nói và kêu "Meow"! 🐱

---

### TH1 — Nhạc nền + tiếng click 🔊

#### Mô tả

Em tạo một project có **nhạc nền** chạy khi bấm cờ xanh, và khi em **click vào nhân vật** thì phát thêm một tiếng riêng (ví dụ tiếng vỗ tay hoặc tiếng kêu).

#### Yêu cầu

- Nhạc nền phát khi bấm **cờ xanh**.
- Click vào sprite thì phát **một âm thanh khác** (không trùng nhạc nền).
- Sprite có thể `say` một câu ngắn khi được click.

#### Gợi ý từng bước

1. Mở Scratch, tạo project mới (hoặc dùng project tuần trước).
2. Click vào **Stage** (sân khấu, góc dưới trái).
3. Vào tab **Sounds** của Stage → **Choose a Sound** → chọn một bài nhạc nhẹ (ví dụ `Dance Around`, `Birthday`).
4. Vào tab **Code** của Stage:
   - Kéo `when green flag clicked`.
   - Gắn `forever` → bên trong gắn `start sound` ... (hoặc `play sound until done` nếu em muốn nhạc hết rồi phát lại).
5. Chọn sprite **Cat** (hoặc sprite em thích).
6. Vào tab **Sounds** của sprite → thêm âm thanh mới (ví dụ `Pop`, `Chirp`, `Meow`).
7. Vào tab **Code** của sprite:
   - Kéo `when this sprite clicked`.
   - Gắn `start sound` ... (âm thanh vừa chọn).
   - Gắn `say` `Ồ! Em click vào mình rồi!` `for` `2` `secs`.
8. Bấm cờ xanh → nghe nhạc nền.
9. Click vào sprite → nghe tiếng riêng + thấy bong bóng thoại.
10. **Lưu project** với tên `TH1-nhac-nen-click`.

#### Checklist tự kiểm

- [ ] Em đã thêm âm thanh cho Stage (nhạc nền)
- [ ] Em đã thêm âm thanh riêng cho sprite
- [ ] Bấm cờ xanh thì nhạc nền phát
- [ ] Click sprite thì phát tiếng khác (không chỉ có nhạc nền)
- [ ] Sprite `say` ít nhất 1 câu khi được click
- [ ] Em đã lưu project

---

### TH2 — Hội thoại 2 sprite 💬

#### Mô tả

Em thêm **hai sprite** và lập trình để chúng **nói chuyện** với nhau — mỗi nhân vật nói một câu, xen kẽ nhau, giống đoạn hội thoại ngắn.

#### Yêu cầu

- Có **ít nhất 2 sprite** trên Stage.
- Mỗi sprite nói **ít nhất 2 câu** (tổng cộng ít nhất 4 câu hội thoại).
- Dùng khối `wait` để nhân vật không nói cùng lúc.
- Hội thoại bắt đầu khi bấm **cờ xanh**.

#### Gợi ý từng bước

1. Giữ sprite **Cat**, thêm sprite mới: **Choose a Sprite** → chọn **Dog** (hoặc Duck, Bear...).
2. Đặt tên sprite cho dễ nhớ: đổi tên Cat thành `Meo`, Dog thành `Cho` (click vào ô tên sprite).
3. **Code cho sprite Meo:**
   - `when green flag clicked`
   - `say` `Chào Cho! Hôm nay em học Scratch nhé!` `for` `3` `secs`
   - `wait` `3` `secs` (đợi Cho nói xong — em sẽ chỉnh số giây cho khớp)
4. **Code cho sprite Cho:**
   - `when green flag clicked`
   - `wait` `3` `secs` (đợi Meo nói xong câu đầu)
   - `say` `Chào Meo! Scratch vui lắm!` `for` `3` `secs`
   - `wait` `3` `secs`
   - `say` `Mình cùng làm game nhé!` `for` `2` `secs`
5. **Quay lại code Meo**, thêm tiếp:
   - `wait` `6` `secs` (sau khi Cho nói 2 câu)
   - `say` `Đồng ý! Bắt đầu thôi!` `for` `2` `secs`
6. Bấm cờ xanh, xem hai nhân vật nói đúng thứ tự chưa.
7. Nếu nói chồng lên nhau → tăng/giảm số giây trong `wait`.
8. **Lưu project** với tên `TH2-hoi-thoai-2-sprite`.

#### Checklist tự kiểm

- [ ] Stage có ít nhất 2 sprite
- [ ] Hội thoại bắt đầu khi bấm cờ xanh
- [ ] Tổng cộng ít nhất 4 câu thoại
- [ ] Hai nhân vật không nói cùng lúc (đã dùng `wait`)
- [ ] Em đã thử bấm cờ xanh ít nhất 2 lần
- [ ] Em đã lưu project

---

### Mẹo nhỏ 💡

- **Nhạc quá to?** Dùng `set volume to` `50` `%` trước khi `start sound`.
- **Hội thoại bị lệch thời gian?** Viết ra giấy thứ tự: Meo nói → đợi → Cho nói → đợi → Meo nói...
- **Muốn nhân vật đổi mặt khi nói?** Thêm `switch costume to` trước hoặc sau khối `say`.
- Âm thanh của **Stage** và **Sprite** là riêng — nhớ chọn đúng chỗ khi thêm sound!

---

### Câu hỏi ôn

1. Em thêm nhạc nền vào **Stage** hay **Sprite**? Vì sao?
2. Khối `start sound` và `play sound until done` khác nhau thế nào?
3. Làm sao để hai sprite không nói cùng một lúc?
4. Khối `when this sprite clicked` dùng để làm gì?
5. Mỗi sprite trong Scratch có code riêng hay dùng chung code?

---

### BTVN1 — Click phát tiếng 🖱️

#### Mô tả

Ở nhà, em làm project: khi click vào sprite thì phát âm thanh và nhân vật phản ứng (nói hoặc đổi costume).

#### Yêu cầu

- Có **1 sprite** (em tự chọn nhân vật).
- Khi **click** vào sprite → phát **1 âm thanh** + `say` **1 câu**.
- Khi click **lần 2, lần 3...** vẫn hoạt động bình thường.

#### Gợi ý từng bước

1. Tạo project mới, chọn sprite em thích.
2. Thêm 1 âm thanh vào sprite (tab Sounds).
3. Code: `when this sprite clicked` → `start sound` ... → `say` ... `for` `2` `secs`.
4. (Tùy chọn) Thêm `next costume` để mỗi lần click đổi hình.
5. Thử click nhiều lần, lưu project tên `BTVN1-click-sound`.

#### Checklist tự kiểm

- [ ] Click sprite thì có tiếng
- [ ] Click sprite thì có bong bóng thoại
- [ ] Hoạt động khi click nhiều lần
- [ ] Em đã lưu project để mang đến buổi BT

---

### BTVN2 — Hội thoại 4 câu 📝

#### Mô tả

Em làm hội thoại **4 câu** giữa **2 sprite** (mỗi nhân vật nói 2 câu), có `wait` để không nói chồng lên nhau.

#### Yêu cầu

- 2 sprite, tổng **4 câu** thoại.
- Bắt đầu khi bấm cờ xanh.
- Nội dung hội thoại do em tự sáng tác (chào hỏi, hỏi thăm, kể chuyện...).

#### Gợi ý từng bước

1. Chọn 2 sprite (ví dụ: Cá và Chim).
2. Viết kịch bản 4 câu ra giấy trước.
3. Lập trình sprite 1: câu 1 → `wait` → (sprite 2 nói câu 2, 3) → câu 4.
4. Lập trình sprite 2: `wait` → câu 2 → `wait` → câu 3.
5. Chạy thử, chỉnh `wait` cho khớp.
6. Lưu project tên `BTVN2-hoi-thoai-4-cau`.

#### Checklist tự kiểm

- [ ] Có đúng 2 sprite
- [ ] Có đúng 4 câu thoại
- [ ] Không nói cùng lúc
- [ ] Nội dung hội thoại có ý nghĩa (em tự nghĩ)
- [ ] Em đã lưu project

---

## Buổi 10 — Bài tập (BT): Luyện Sound 🎧

### Ôn nhanh

Nhớ lại buổi trước nhé em:

- **Sound:** `start sound`, `play sound until done` — nhạc nền thường ở **Stage**.
- **Nhiều sprite:** mỗi sprite code riêng; dùng `say` + `wait` để hội thoại.
- **Events:** `when green flag clicked`, `when this sprite clicked`.

---

### Chữa BTVN

#### BTVN1 — Click phát tiếng: Em tự kiểm tra

| Em kiểm tra | Đúng khi... |
|-------------|-------------|
| Click có tiếng | Mỗi lần click sprite đều nghe thấy âm thanh |
| Có phản ứng | Có `say` hoặc đổi costume khi click |
| Lặp lại được | Click 5 lần liên tiếp vẫn OK |
| Code đúng chỗ | Khối `when this sprite clicked` nằm ở sprite (không phải Stage) |

**Nếu chưa đúng:** Kiểm tra tab Sounds đã có âm thanh chưa; kiểm tra khối `start sound` đã chọn đúng tên sound chưa.

#### BTVN2 — Hội thoại 4 câu: Em tự kiểm tra

| Em kiểm tra | Đúng khi... |
|-------------|-------------|
| Đủ 4 câu | Đếm được 4 lần `say` (2 sprite × 2 câu) |
| Đúng thứ tự | Nhân vật nói lần lượt, không chồng |
| Có `wait` | Ít nhất 2 khối `wait` trong project |
| Cờ xanh | Bấm cờ xanh là hội thoại bắt đầu |

**Nếu nói chồng:** Tăng số giây `wait` — thời gian `wait` ≈ thời gian `say` `for` ... `secs` của câu trước.

---

### Chọn bài mở rộng

Em chọn **1 mức** A, B hoặc C, rồi chọn **1 trong 2 bài** của mức đó.

| Mức | Khi nào chọn |
|-----|--------------|
| **A1 hoặc A2** | Em luyện nhạc nền (A1) hoặc tiếng Pop khi click (A2) 🎵 |
| **B1 hoặc B2** | Em luyện hội thoại dài (B1) hoặc phỏng vấn 4 câu (B2) 💬 |
| **C1 hoặc C2** | Em làm kịch bản ngắn (C1) hoặc mini phim có trống + backdrop (C2) 🎬 |

Em chỉ cần làm **1 bài** em chọn!

---

### Bài A1 — Nhạc nền 🎵

| | Nội dung |
|---|----------|
| **Mô tả** | Em tạo project có nhạc nền chạy liên tục khi bấm cờ xanh. Có thể thêm backdrop đẹp. |
| **Yêu cầu bắt buộc** | Nhạc đặt ở Stage; bấm cờ xanh thì nhạc phát; có ít nhất 1 sprite trên Stage |
| **Gợi ý bước** | 1. Chọn Stage → Sounds → thêm nhạc. 2. Code Stage: `when green flag clicked` → `forever` → `start sound` ... 3. Chọn backdrop em thích. 4. Thêm sprite trang trí. 5. Lưu project. |
| **Checklist** | - [ ] Nhạc phát khi cờ xanh<br>- [ ] Nhạc gắn với Stage<br>- [ ] Có backdrop<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm nút tắt nhạc: `when space key pressed` → `stop all sounds` |

---

### Bài B1 — Hội thoại 2 nhân vật 💬

| | Nội dung |
|---|----------|
| **Mô tả** | Em viết hội thoại **6 câu** trở lên giữa 2 sprite, có chủ đề (ví dụ: đi siêu thị, đi công viên). |
| **Yêu cầu bắt buộc** | 2 sprite; ≥ 6 câu `say`; dùng `wait`; bắt đầu bằng cờ xanh |
| **Gợi ý bước** | 1. Viết kịch bản 6 câu. 2. Chia: ai nói câu nào. 3. Code từng sprite với `wait` khớp thời gian. 4. Chạy thử, sửa `wait`. 5. Lưu project. |
| **Checklist** | - [ ] ≥ 6 câu thoại<br>- [ ] Không nói chồng<br>- [ ] Có chủ đề rõ ràng<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm `switch costume to` khi nhân vật vui/buồn |

---

### Bài C1 — Kịch bản ngắn 🎬

| | Nội dung |
|---|----------|
| **Mô tả** | Em làm **câu chuyện ngắn** 3 cảnh: đổi backdrop + hội thoại + âm thanh (tiếng cười, tiếng vỗ tay...). |
| **Yêu cầu bắt buộc** | ≥ 2 backdrop; ≥ 2 sprite; ≥ 1 âm thanh; hội thoại ≥ 4 câu; dùng `switch backdrop to` |
| **Gợi ý bước** | 1. Chọn 2–3 backdrop. 2. Viết kịch bản 3 cảnh. 3. Cảnh 1: backdrop 1 + giới thiệu. 4. `wait` → `switch backdrop to` cảnh 2. 5. Tiếp tục hội thoại + `start sound`. 6. Lưu project. |
| **Checklist** | - [ ] ≥ 2 backdrop đổi trong chương trình<br>- [ ] Có âm thanh<br>- [ ] Có hội thoại<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm nhạc nền nhẹ ở Stage suốt câu chuyện |

---

### Bài A2 — Pop click 🖱️

| | Nội dung |
|---|----------|
| **Mô tả** | Em làm sprite **phát tiếng Pop** mỗi lần em click — kèm phản ứng (`say` hoặc đổi costume). |
| **Yêu cầu bắt buộc** | `when this sprite clicked`; `start sound` Pop (hoặc âm thanh em chọn); có `say` hoặc `next costume`; click nhiều lần vẫn hoạt động |
| **Gợi ý bước** | 1. Chọn sprite em thích. 2. Tab Sounds → thêm `Pop`. 3. Code: `when this sprite clicked` → `start sound` Pop → `say` `Pop!` `for` `1` `secs`. 4. (Tùy chọn) Thêm `next costume`. 5. Click thử 5 lần. 6. Lưu project. |
| **Checklist** | - [ ] Mỗi lần click có tiếng Pop<br>- [ ] Có phản ứng (say hoặc đổi costume)<br>- [ ] Click lặp lại được<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm `change size by` (-5) mỗi lần click — sprite nhỏ dần |

---

### Bài B2 — Phỏng vấn 4 câu 🎤

| | Nội dung |
|---|----------|
| **Mô tả** | Em làm **phỏng vấn**: 1 sprite hỏi em **4 câu** bằng `ask`, mỗi câu có phản hồi ngắn dùng `answer`. |
| **Yêu cầu bắt buộc** | 4 khối `ask`; phản hồi sau mỗi câu (dùng `answer` hoặc `join`); có `wait` giữa các câu; bắt đầu bằng cờ xanh |
| **Gợi ý bước** | 1. Viết 4 câu hỏi (tên, sở thích, môn học yêu thích, ước mơ). 2. Code: ask 1 → say (join `Em là ` answer) → wait → ask 2 → ... 3. Cuối: `say` `Cảm ơn em đã phỏng vấn!`. 4. Chạy thử, chỉnh `wait`. 5. Lưu project. |
| **Checklist** | - [ ] Đủ 4 câu hỏi `ask`<br>- [ ] Mỗi câu có phản hồi<br>- [ ] Thứ tự đúng, không chồng<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm `switch costume to` khi em trả lời xong câu cuối (mặt vui) |

---

### Bài C2 — Mini phim drum + backdrop 🥁

| | Nội dung |
|---|----------|
| **Mô tả** | Em làm **mini phim** ngắn: đổi backdrop theo nhịp, có tiếng **trống (drum)** và hội thoại ngắn. |
| **Yêu cầu bắt buộc** | ≥ 2 backdrop; ≥ 1 sprite; ≥ 1 âm thanh drum hoặc beat; `switch backdrop to` ít nhất 2 lần; hội thoại ≥ 3 câu |
| **Gợi ý bước** | 1. Chọn 2–3 backdrop (ví dụ: sân khấu, rừng, bãi biển). 2. Thêm sound Drum hoặc Beatbox. 3. Cảnh 1: backdrop 1 + `say` giới thiệu + `start sound` drum. 4. `wait` → `switch backdrop to` cảnh 2 + hội thoại tiếp. 5. Lưu project. |
| **Checklist** | - [ ] ≥ 2 backdrop đổi trong chương trình<br>- [ ] Có tiếng drum/beat<br>- [ ] Có hội thoại ≥ 3 câu<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm nhạc nền nhẹ ở Stage chạy suốt mini phim |

---

# Tuần 6 — Cảm biến & thuật toán 🧠

---

## Buổi 11 — Học (H): Cảm biến & thuật toán

### Hôm nay em học gì?

Hôm nay em học nhóm khối **Sensing** (Cảm biến) — giúp Scratch **"cảm nhận"** môi trường: chạm biên màn hình, hỏi em câu hỏi và nhận câu trả lời. Em cũng làm quen với **thuật toán**: các bước có thứ tự để máy tính hiểu và làm đúng! 🔍💬

---

### Kiến thức mới

**1. Nhóm khối Sensing (Cảm biến)**

| Khối lệnh | Em dùng để làm gì? |
|-----------|-------------------|
| `touching` `edge` `?` | Kiểm tra sprite có **chạm biên** màn hình không (trả về đúng/sai) |
| `ask` ... `and wait` | Hiện ô hỏi, **đợi** em gõ câu trả lời |
| `answer` | Lấy **câu trả lời** em vừa gõ (dùng sau khối `ask`) |
| `key` ... `pressed?` | Kiểm tra phím có đang được bấm không |
| `mouse down?` | Kiểm tra chuột có đang nhấn không |

**2. Thuật toán là gì? 🤔**

Thuật toán = **các bước có thứ tự** để giải một việc.

*Ví dụ thuật toán "ăn sáng":*
1. Rửa tay
2. Lấy bánh mì
3. Ăn
4. Uống sữa

Trong Scratch, thuật toán là chuỗi khối lệnh: hỏi → đợi trả lời → kiểm tra → phản hồi.

**3. Khối `if` ... `then` (nhóm Control)**

- Nếu **điều kiện đúng** → chạy khối bên trong.
- Ví dụ: `if` `touching` `edge` `?` `then` → `bounce` (nảy lại khi chạm biên).

**4. Kết hợp ask + answer**

```
ask [Tên em là gì?] and wait
say (join [Chào ] (answer)) for (2) secs
```

---

### Ví dụ mẫu

**Ví dụ: Hỏi tên và chào**

1. Kéo `when green flag clicked`.
2. Gắn `ask` `Tên em là gì?` `and wait`.
3. Gắn `say` (join `Xin chào, ` `answer`) `for` `3` `secs`.
4. Bấm cờ xanh → gõ tên → sprite chào em! 👋

---

### TH1 — Chạm biên (touching edge) 🏓

#### Mô tả

Em cho sprite **di chuyển liên tục** và **nảy lại** khi chạm biên màn hình — giống quả bóng đập tường!

#### Yêu cầu

- Sprite di chuyển liên tục (dùng `forever`).
- Khi `touching` `edge` `?` thì `bounce` (nảy lại).
- Dùng khối `if` ... `then` bên trong `forever`.

#### Gợi ý từng bước

1. Chọn sprite (ví dụ Ball hoặc Cat).
2. Kéo khối:
   ```
   when green flag clicked
   forever
     move (10) steps
     if <touching [edge] ?> then
       bounce
   ```
3. Bấm cờ xanh — sprite chạy và nảy khi chạm biên!
4. Thử đổi số bước `move` (5, 15, 20) — em thấy tốc độ thay đổi.
5. (Tùy chọn) Thêm `point in direction` `(pick random 1 to 360)` khi bắt đầu để hướng ngẫu nhiên.
6. Lưu project tên `TH1-touching-edge`.

#### Checklist tự kiểm

- [ ] Sprite di chuyển liên tục (`forever` + `move`)
- [ ] Có khối `if` `touching` `edge` `?`
- [ ] Chạm biên thì `bounce`
- [ ] Sprite không "kẹt" ở góc màn hình
- [ ] Em đã lưu project

---

### TH2 — Hỏi 1 câu (ask) ❓

#### Mô tả

Em dùng khối `ask` để hỏi người chơi **1 câu hỏi**, rồi sprite **trả lời** dựa trên câu trả lời của em (dùng `answer`).

#### Yêu cầu

- Có khối `ask` ... `and wait`.
- Sprite `say` lại câu trả lời (dùng `answer` hoặc `join`).
- Bắt đầu khi bấm cờ xanh.

#### Gợi ý từng bước

1. Chọn sprite Cat.
2. Code:
   ```
   when green flag clicked
   ask [Màu sắc em thích nhất là gì?] and wait
   say (join [Em thích màu ] (answer) [!]) for (3) secs
   ```
3. Bấm cờ xanh → gõ "xanh lá" → mèo nói "Em thích màu xanh lá!"
4. Thử gõ màu khác.
5. Lưu project tên `TH2-ask-1-cau`.

#### Checklist tự kiểm

- [ ] Có khối `ask` khi bấm cờ xanh
- [ ] Ô hỏi hiện ra và em gõ được
- [ ] Sprite `say` có dùng `answer`
- [ ] Thử ít nhất 2 câu trả lời khác nhau
- [ ] Em đã lưu project

---

### Mẹo nhỏ 💡

- Khối `answer` chỉ có ý nghĩa **ngay sau** khối `ask` — đừng đặt quá xa!
- Muốn hỏi câu thứ hai? Dùng thêm một khối `ask` nữa (sau khi xử lý câu 1).
- `touching` `edge` `?` nằm trong nhóm **Sensing** — hình lục giác màu xanh nhạt.
- Viết thuật toán ra giấy trước khi kéo khối — em sẽ code nhanh hơn!

---

### Câu hỏi ôn

1. Khối `ask` và `answer` dùng để làm gì?
2. `touching` `edge` `?` trả về gì khi sprite chạm biên?
3. Thuật toán là gì? Cho ví dụ ngoài đời sống.
4. Khối `if` ... `then` dùng khi nào?
5. Em cần đặt `bounce` bên trong hay bên ngoài khối `if`?

---

### BTVN1 — Hỏi tuổi 🎂

#### Mô tả

Em hỏi "Em bao nhiêu tuổi?" và sprite chúc mừng sinh nhật hoặc nói lời chào có nhắc tuổi.

#### Yêu cầu

- `ask` câu hỏi về tuổi.
- Sprite `say` có chứa `answer` (tuổi em gõ).
- Thêm ít nhất 1 câu chúc hoặc nhận xét.

#### Gợi ý từng bước

1. `when green flag clicked`
2. `ask` `Em bao nhiêu tuổi?` `and wait`
3. `say` (join `Wow! Em ` `answer` ` tuổi rồi! Chúc em học giỏi!`) `for` `4` `secs`
4. Lưu project tên `BTVN1-hoi-tuoi`.

#### Checklist tự kiểm

- [ ] Có hỏi về tuổi
- [ ] Có dùng `answer` trong `say`
- [ ] Có câu chúc hoặc nhận xét
- [ ] Em đã lưu project

---

### BTVN2 — Quiz 2 câu 📋

#### Mô tả

Em làm **bài quiz nhỏ 2 câu hỏi**: hỏi câu 1 → đợi trả lời → hỏi câu 2 → cảm ơn.

#### Yêu cầu

- Có **2 khối** `ask` (2 câu hỏi khác nhau).
- Sau mỗi câu, sprite `say` phản hồi ngắn (có thể dùng `answer`).
- Cuối cùng sprite `say` lời cảm ơn.

#### Gợi ý từng bước

1. Câu 1: `ask` `Thủ đô Việt Nam là gì?` → `say` (join `Em trả lời: ` `answer`) `for` `2` `secs`
2. `wait` `2` `secs`
3. Câu 2: `ask` `1 + 1 = ?` → `say` (join `Đáp án của em: ` `answer`) `for` `2` `secs`
4. `say` `Cảm ơn em đã tham gia quiz!` `for` `2` `secs`
5. Lưu project tên `BTVN2-quiz-2-cau`.

#### Checklist tự kiểm

- [ ] Có đúng 2 câu hỏi `ask`
- [ ] Có phản hồi sau mỗi câu
- [ ] Có lời cảm ơn cuối
- [ ] Thứ tự: hỏi 1 → trả lời 1 → hỏi 2 → trả lời 2
- [ ] Em đã lưu project

---

## Buổi 12 — Bài tập (BT): Luyện Sensing 🔍

### Ôn nhanh

- **Sensing:** `touching`, `ask`, `answer`, `key pressed?`
- **if ... then:** chạy code khi điều kiện đúng
- **Thuật toán:** các bước có thứ tự — hỏi → nhận → phản hồi

---

### Chữa BTVN

#### BTVN1 — Hỏi tuổi

| Em kiểm tra | Đúng khi... |
|-------------|-------------|
| Có `ask` | Ô hỏi hiện "bao nhiêu tuổi" (hoặc tương tự) |
| Có `answer` | Sprite nói lại số tuổi em gõ |
| Có lời chúc | Có thêm câu chúc/nhận xét sau khi biết tuổi |

#### BTVN2 — Quiz 2 câu

| Em kiểm tra | Đúng khi... |
|-------------|-------------|
| 2 câu hỏi | Đếm được 2 khối `ask` |
| Thứ tự đúng | Câu 2 chỉ hiện sau khi trả lời câu 1 |
| Có phản hồi | Mỗi câu có `say` sau `ask` |
| Kết thúc | Có lời cảm ơn cuối |

---

### Chọn bài mở rộng

Em chọn **1 mức** A, B hoặc C, rồi chọn **1 trong 2 bài** của mức đó.

| Mức | Khi nào chọn |
|-----|--------------|
| **A1 hoặc A2** | Em luyện quiz 1 câu (A1) hoặc chạm màu/sprite (A2) ❓ |
| **B1 hoặc B2** | Em luyện quiz 3 câu (B1) hoặc máy tính tuổi (B2) 📝 |
| **C1 hoặc C2** | Em luyện trắc nghiệm điểm (C1) hoặc quiz 5 câu (C2) ⭐ |

---

### Bài A1 — Quiz 1 câu ❓

| | Nội dung |
|---|----------|
| **Mô tả** | Em làm quiz 1 câu hỏi có **đáp án đúng**. Nếu trả lời đúng → sprite khen; sai → sprite gợi ý thử lại. |
| **Yêu cầu bắt buộc** | 1 câu `ask`; dùng `if` ... `then` so sánh `answer`; có `say` khi đúng và khi sai |
| **Gợi ý bước** | 1. `ask` `2 + 3 = ?` 2. `if` `answer` `=` `5` `then` → `say` `Đúng rồi!` 3. Thêm `else` → `say` `Chưa đúng, thử lại nhé!` 4. Lưu project. |
| **Checklist** | - [ ] Có 1 câu hỏi<br>- [ ] Có kiểm tra đúng/sai<br>- [ ] Có phản hồi khi đúng và sai<br>- [ ] Em đã lưu project |
| **Thử thêm** | Đổi câu hỏi sang kiến thức em thích (động vật, thể thao...) |

---

### Bài B1 — Quiz 3 câu 📝

| | Nội dung |
|---|----------|
| **Mô tả** | Em làm quiz **3 câu hỏi** liên tiếp, mỗi câu có phản hồi, cuối cùng tổng kết. |
| **Yêu cầu bắt buộc** | 3 khối `ask`; phản hồi sau mỗi câu; `wait` giữa các câu; lời kết cuối |
| **Gợi ý bước** | 1. Viết 3 câu hỏi. 2. Code: ask 1 → say → wait → ask 2 → say → wait → ask 3 → say → tổng kết. 3. Chạy thử toàn bộ. 4. Lưu project. |
| **Checklist** | - [ ] 3 câu hỏi<br>- [ ] Phản hồi mỗi câu<br>- [ ] Có lời kết<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm `switch costume to` khi trả lời đúng (mặt vui) |

---

### Bài C1 — Trắc nghiệm điểm ⭐

| | Nội dung |
|---|----------|
| **Mô tả** | Em làm quiz 3 câu và **đếm điểm**: mỗi câu đúng +1, cuối cùng báo tổng điểm. (Dùng biến — em sẽ học kỹ tuần 8, hôm nay làm thử!) |
| **Yêu cầu bắt buộc** | 3 câu có đáp án; biến `điểm` (hoặc `score`); `set` `điểm` `to` `0` lúc đầu; `change` `điểm` `by` `1` khi đúng; `say` tổng điểm cuối |
| **Gợi ý bước** | 1. Variables → Make a Variable → `điểm`. 2. Cờ xanh: `set` `điểm` `to` `0`. 3. Mỗi câu: `ask` → `if` đúng → `change` `điểm` `by` `1`. 4. Cuối: `say` (join `Điểm của em: ` `điểm`). 5. Lưu project. |
| **Checklist** | - [ ] Có biến điểm<br>- [ ] 3 câu hỏi<br>- [ ] Đúng thì tăng điểm<br>- [ ] Cuối có báo điểm<br>- [ ] Em đã lưu project |
| **Thử thêm** | Nếu điểm = 3 thì `say` `Xuất sắc!` |

---

### Bài A2 — Chạm màu / sprite 🎨

| | Nội dung |
|---|----------|
| **Mô tả** | Em cho sprite **phản ứng khi chạm** màu hoặc chạm sprite khác — dùng `touching` và `if` ... `then`. |
| **Yêu cầu bắt buộc** | Có `if` `touching` (màu hoặc sprite); phản ứng rõ ràng (`say`, đổi costume, hoặc `start sound`); sprite di chuyển bằng phím hoặc `forever` + `move` |
| **Gợi ý bước** | 1. Thêm backdrop có vùng màu rõ (hoặc thêm sprite thứ 2). 2. Code: `forever` → `if` `key` phím → di chuyển. 3. Trong `forever`: `if` `touching` `[màu]` hoặc `[sprite]` → `say` `Chạm rồi!` + `start sound`. 4. Chạy thử. 5. Lưu project. |
| **Checklist** | - [ ] Có `if touching`<br>- [ ] Chạm thì có phản ứng<br>- [ ] Sprite di chuyển được<br>- [ ] Em đã lưu project |
| **Thử thêm** | Đổi màu sprite (`change color effect by`) khi chạm |

---

### Bài B2 — Máy tính tuổi 🎂

| | Nội dung |
|---|----------|
| **Mô tả** | Em hỏi **năm sinh** của người chơi, rồi sprite **tính tuổi** và chúc mừng (tuổi ≈ 2026 − năm sinh). |
| **Yêu cầu bắt buộc** | `ask` năm sinh; dùng `answer`; `say` kết quả tuổi (có thể dùng `join` hoặc phép trừ đơn giản); có lời chúc |
| **Gợi ý bước** | 1. `when green flag clicked` → `ask` `Em sinh năm nào?` `and wait`. 2. `say` (join `Vậy em khoảng ` (2026 - answer) ` tuổi nhé!`) `for` `3` `secs`. 3. Thêm `say` lời chúc. 4. Thử với 2 năm sinh khác nhau. 5. Lưu project. |
| **Checklist** | - [ ] Có `ask` năm sinh<br>- [ ] Có tính/báo tuổi<br>- [ ] Có lời chúc<br>- [ ] Em đã lưu project |
| **Thử thêm** | Nếu tuổi < 8 thì `say` `Em còn nhỏ quá!`; nếu ≥ 8 thì `say` `Tuổi học Scratch rồi!` |

---

### Bài C2 — Quiz 5 câu 📋

| | Nội dung |
|---|----------|
| **Mô tả** | Em làm quiz **5 câu hỏi** liên tiếp, mỗi câu có phản hồi, cuối cùng tổng kết. |
| **Yêu cầu bắt buộc** | 5 khối `ask`; phản hồi sau mỗi câu; `wait` giữa các câu; lời kết cuối; bắt đầu bằng cờ xanh |
| **Gợi ý bước** | 1. Viết 5 câu hỏi (toán, kiến thức, sở thích...). 2. Code: ask 1 → say → wait → ask 2 → ... → ask 5 → tổng kết. 3. Chạy thử toàn bộ 5 câu. 4. Chỉnh `wait` nếu chồng. 5. Lưu project. |
| **Checklist** | - [ ] 5 câu hỏi `ask`<br>- [ ] Phản hồi mỗi câu<br>- [ ] Có lời kết<br>- [ ] Thứ tự đúng<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm biến đếm điểm — mỗi câu đúng +1, cuối báo tổng |

---

# Tuần 7 — Vòng lặp 🔁

---

## Buổi 13 — Học (H): Vòng lặp

### Hôm nay em học gì?

Hôm nay em học **vòng lặp** — cách bảo máy tính **lặp lại** một việc nhiều lần mà không cần copy khối lệnh! Em sẽ dùng `repeat` (lặp số lần cố định) và `forever` (lặp mãi mãi). Em cũng thử **Pen** (bút vẽ) để vẽ hình! ✏️🔁

---

### Kiến thức mới

**1. Nhóm khối Control — Vòng lặp**

| Khối lệnh | Em dùng để làm gì? |
|-----------|-------------------|
| `repeat` (10) | Lặp khối bên trong **đúng số lần** (ví dụ 5, 10...) |
| `forever` | Lặp **mãi mãi** (đến khi bấm dừng đỏ) |
| `repeat until` `<>` | Lặp cho đến khi điều kiện đúng |

**2. Tại sao cần vòng lặp?**

Thay vì kéo 10 lần `move 10 steps`, em chỉ cần:
```
repeat (10)
  move (10) steps
```
→ Gọn và dễ sửa!

**3. Pen Extension (Bút vẽ) ✏️**

- Bấm **+** ở góc dưới trái (Add Extension) → chọn **Pen**.
- Khối hữu ích:
  - `pen down` — hạ bút, sprite vẽ khi di chuyển
  - `pen up` — nhấc bút, không vẽ
  - `clear` — xóa hết nét vẽ
  - `set pen color to` — đổi màu bút

**4. Vẽ hình bằng repeat**

Vẽ tam giác = lặp 3 lần: `move` + `turn` 120 độ.

---

### Ví dụ mẫu

**Ví dụ: Nhảy 5 lần**

1. `when green flag clicked`
2. `repeat` `5`
   - `change y by` `20` (nhảy lên)
   - `wait` `0.2` `secs`
   - `change y by` `-20` (rơi xuống)
   - `wait` `0.2` `secs`
3. Bấm cờ xanh — sprite nhảy 5 lần! 🦘

---

### TH1 — Repeat 5 lần 🔢

#### Mô tả

Em dùng khối `repeat` `(5)` để sprite **nhảy** hoặc **di chuyển** đúng 5 lần, mỗi lần có `wait` ngắn.

#### Yêu cầu

- Dùng `repeat` `(5)` (không copy 5 khối giống nhau).
- Bên trong `repeat` có ít nhất 2 khối lệnh.
- Kết thúc sau đúng 5 lần lặp (không lặp mãi).

#### Gợi ý từng bước

1. Chọn sprite Cat.
2. Đặt vị trí ban đầu: `go to x: 0 y: 0`.
3. Code:
   ```
   when green flag clicked
   go to x: (0) y: (0)
   repeat (5)
     change y by (30)
     wait (0.3) secs
     change y by (-30)
     wait (0.3) secs
   ```
4. Bấm cờ xanh — đếm xem có đúng 5 lần nhảy không.
5. Thử đổi số trong `repeat` thành 3 hoặc 7.
6. Lưu project tên `TH1-repeat-5`.

#### Checklist tự kiểm

- [ ] Có khối `repeat` `(5)`
- [ ] Bên trong có ≥ 2 khối lệnh
- [ ] Sprite lặp đúng 5 lần rồi dừng
- [ ] Em đã thử đổi số lần lặp
- [ ] Em đã lưu project

---

### TH2 — Forever nảy tường (bounce) 🏀

#### Mô tả

Em kết hợp `forever` + `move` + `if touching edge` + `bounce` để sprite **chạy mãi** và nảy khi chạm biên — giống DVD logo!

#### Yêu cầu

- Dùng `forever` (không dùng `repeat` cho phần di chuyển chính).
- Có `move` và `if` `touching` `edge` → `bounce`.
- Sprite chạy liên tục cho đến khi em bấm nút dừng đỏ.

#### Gợi ý từng bước

1. Chọn sprite Ball (hoặc đổi Cat sang costume nhỏ).
2. `when green flag clicked` → `point in direction` `(pick random 1 to 360)`.
3. `forever`:
   - `move` `(8)` `steps`
   - `if` `touching` `edge` `?` `then` → `bounce`
4. Bấm cờ xanh — xem bóng nảy khắp màn hình!
5. Thử tăng `move` lên 15 — nhanh hơn!
6. Lưu project tên `TH2-forever-bounce`.

#### Checklist tự kiểm

- [ ] Có khối `forever`
- [ ] Có `move` bên trong `forever`
- [ ] Có `if touching edge` + `bounce`
- [ ] Sprite chạy liên tục (không dừng sau vài giây)
- [ ] Em đã lưu project

---

### Mẹo nhỏ 💡

- `repeat` = biết **bao nhiêu lần**; `forever` = **không biết** hoặc muốn chạy mãi (game, hoạt hình).
- Trước khi vẽ bằng Pen: nhớ `clear` và `pen down`.
- Góc quay tam giác: `turn` `(120)` độ (vì 360 ÷ 3 = 120).
- Góc quay vuông: `turn` `(90)` độ.

---

### Câu hỏi ôn

1. `repeat` và `forever` khác nhau thế nào?
2. Khi nào em dùng `repeat` thay vì copy nhiều khối giống nhau?
3. Khối `pen down` làm gì?
4. Muốn vẽ tam giác cần `repeat` bao nhiêu lần? Mỗi lần `turn` bao nhiêu độ?
5. `bounce` thường dùng cùng khối sensing nào?

---

### BTVN1 — Repeat 10 lần 🔟

#### Mô tả

Em dùng `repeat` `(10)` để sprite **đi thẳng** 10 lần (mỗi lần `move` một đoạn) hoặc **đổi costume** 10 lần.

#### Yêu cầu

- `repeat` `(10)`.
- Mỗi lần lặp sprite thay đổi rõ ràng (di chuyển hoặc đổi hình).
- Có `wait` ngắn giữa các lần (tùy chọn nhưng nên có).

#### Gợi ý từng bước

1. `when green flag clicked` → `go to x: (-200) y: (0)`
2. `repeat` `(10)` → `move` `(20)` `steps` → `wait` `(0.2)` `secs`
3. Hoặc: `repeat` `(10)` → `next costume` → `wait` `(0.3)` `secs`
4. Lưu project tên `BTVN1-repeat-10`.

#### Checklist tự kiểm

- [ ] `repeat` đúng 10
- [ ] Có thay đổi mỗi lần lặp
- [ ] Em đã đếm thử đủ 10 lần
- [ ] Em đã lưu project

---

### BTVN2 — Vẽ tam giác bằng Pen 🔺

#### Mô tả

Em thêm extension **Pen** và dùng `repeat` `(3)` để vẽ **hình tam giác**.

#### Yêu cầu

- Đã thêm extension Pen.
- `clear` trước khi vẽ; `pen down` khi bắt đầu vẽ.
- `repeat` `(3)`: `move` + `turn` `120` độ.
- Tam giác nhìn thấy rõ trên Stage.

#### Gợi ý từng bước

1. Add Extension → **Pen**.
2. `when green flag clicked` → `clear` → `pen down` → `go to x: (0) y: (0)`.
3. `set pen color to` màu em thích.
4. `repeat` `(3)` → `move` `(100)` `steps` → `turn` `(120)` `degrees`
5. `pen up` khi xong.
6. Lưu project tên `BTVN2-ve-tam-giac`.

#### Checklist tự kiểm

- [ ] Có extension Pen
- [ ] Có `clear` và `pen down`
- [ ] `repeat` `(3)` với `move` và `turn` 120
- [ ] Thấy tam giác trên Stage
- [ ] Em đã lưu project

---

## Buổi 14 — Bài tập (BT): Luyện Loop 🔁

### Ôn nhanh

- `repeat` (n) — lặp n lần rồi dừng
- `forever` — lặp mãi (game, hoạt hình liên tục)
- **Pen:** `clear`, `pen down`, `pen up`, `set pen color to`

---

### Chữa BTVN

#### BTVN1 — Repeat 10

| Em kiểm tra | Đúng khi... |
|-------------|-------------|
| Đúng 10 lần | `repeat` hiển thị (10) |
| Có hiệu ứng | Mỗi lần lặp thấy sprite đổi (vị trí/costume) |
| Dừng đúng | Sau 10 lần không lặp thêm (trừ khi bấm cờ xanh lại) |

#### BTVN2 — Tam giác Pen

| Em kiểm tra | Đúng khi... |
|-------------|-------------|
| Có Pen | Thấy khối Pen trong code |
| Có tam giác | Stage có hình 3 cạnh |
| Góc đúng | `turn` 120 độ, lặp 3 lần |
| Không lem | Có `clear` lúc đầu |

**Nếu hình sai:** Kiểm tra `move` đủ dài (80–120); kiểm tra `turn` đúng 120.

---

### Chọn bài mở rộng

Em chọn **1 mức** A, B hoặc C, rồi chọn **1 trong 2 bài** của mức đó.

| Mức | Khi nào chọn |
|-----|--------------|
| **A1 hoặc A2** | Em luyện `repeat` nhảy (A1) hoặc vẽ vòng tròn (A2) 🦘 |
| **B1 hoặc B2** | Em luyện bóng nảy (B1) hoặc ping-pong tăng tốc (B2) 🏀 |
| **C1 hoặc C2** | Em vẽ vuông Pen (C1) hoặc ngôi sao Pen (C2) ⬜ |

---

### Bài A1 — Nhảy 10 lần 🦘

| | Nội dung |
|---|----------|
| **Mô tả** | Sprite **nhảy lên xuống** đúng 10 lần, có âm thanh mỗi lần chạm "đất". |
| **Yêu cầu bắt buộc** | `repeat` (10); nhảy bằng `change y by`; có `wait`; có `start sound` mỗi lần rơi xuống |
| **Gợi ý bước** | 1. `go to` vị trí giữa Stage. 2. `repeat` (10): lên → xuống → `start sound` Pop → `wait`. 3. Lưu project. |
| **Checklist** | - [ ] Nhảy 10 lần<br>- [ ] Có tiếng khi rơi<br>- [ ] Em đã lưu project |
| **Thử thêm** | Mỗi lần nhảy `change size by` (-5) — sprite nhỏ dần |

---

### Bài B1 — Bóng nảy 🏀

| | Nội dung |
|---|----------|
| **Mô tả** | Quả bóng nảy **mãi** trong Stage, đổi màu hoặc costume khi chạm biên. |
| **Yêu cầu bắt buộc** | `forever`; `move`; `if touching edge` → `bounce`; đổi màu hoặc `next costume` khi chạm biên |
| **Gợi ý bước** | 1. Sprite Ball. 2. `forever` → move → if edge → bounce → `change pen color by` hoặc `next costume`. 3. Lưu project. |
| **Checklist** | - [ ] Chạy liên tục<br>- [ ] Nảy biên<br>- [ ] Đổi màu/costume khi chạm biên<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm `when sprite clicked` → `move` nhanh hơn 5 giây |

---

### Bài C1 — Vẽ vuông Pen ⬜

| | Nội dung |
|---|----------|
| **Mô tả** | Em vẽ **hình vuông** bằng Pen: 4 cạnh bằng nhau, góc vuông. |
| **Yêu cầu bắt buộc** | Pen extension; `repeat` (4); `move` cùng số bước; `turn` 90 độ; `set pen color to` |
| **Gợi ý bước** | 1. `clear` → `pen down` → `go to` góc. 2. `set pen size to` 4. 3. `repeat` (4) → `move` (80) → `turn` (90). 4. `pen up`. 5. Lưu project. |
| **Checklist** | - [ ] Hình 4 cạnh<br>- [ ] Các cạnh nhìn bằng nhau<br>- [ ] Có màu bút<br>- [ ] Em đã lưu project |
| **Thử thêm** | Vẽ 2 vuông lồng nhau (2 màu khác nhau) |

---

### Bài A2 — Vòng tròn (repeat + turn nhỏ) ⭕

| | Nội dung |
|---|----------|
| **Mô tả** | Em dùng `repeat` với **bước nhỏ + quay nhỏ** để sprite vẽ đường tròn (hoặc gần tròn). |
| **Yêu cầu bắt buộc** | `repeat` (36) hoặc (72); mỗi lần `move` ngắn (5–10 bước) + `turn` nhỏ (5–10 độ); có `wait` ngắn (tùy chọn) |
| **Gợi ý bước** | 1. `go to` giữa Stage. 2. `repeat` (36) → `move` (10) → `turn` (10) `degrees`. 3. Bấm cờ xanh — xem đường cong. 4. Thử đổi số lần lặp và góc quay. 5. Lưu project. |
| **Checklist** | - [ ] Có `repeat` với move + turn<br>- [ ] Đường cong khép kín (gần tròn)<br>- [ ] Không copy tay nhiều khối giống nhau<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm Pen extension: `pen down` trước `repeat` để thấy hình tròn |

---

### Bài B2 — Ping-pong tăng tốc 🏓

| | Nội dung |
|---|----------|
| **Mô tả** | Quả bóng nảy **mãi** trong Stage và **tăng tốc dần** mỗi khi chạm biên. |
| **Yêu cầu bắt buộc** | `forever` + `move`; `if touching edge` → `bounce`; tăng tốc bằng `change` số bước `move` hoặc biến `tốc độ`; chạm biên ít nhất 3 lần thấy nhanh hơn |
| **Gợi ý bước** | 1. Tạo biến `tốc độ`, `set` `to` `5` khi cờ xanh. 2. `forever` → `move` `tốc độ` `steps` → `if touching edge` → `bounce` → `change tốc độ by 1`. 3. Chạy thử, quan sát bóng nhanh dần. 4. Lưu project. |
| **Checklist** | - [ ] Bóng nảy liên tục<br>- [ ] Tốc độ tăng khi chạm biên<br>- [ ] Có biến hoặc cách tăng tốc rõ ràng<br>- [ ] Em đã lưu project |
| **Thử thêm** | Giới hạn tốc độ tối đa: `if tốc độ > 20` thì không tăng nữa |

---

### Bài C2 — Ngôi sao Pen (repeat 5, turn 144) ⭐

| | Nội dung |
|---|----------|
| **Mô tả** | Em dùng **Pen** vẽ **ngôi sao 5 cánh** bằng `repeat` (5) và `turn` (144) độ. |
| **Yêu cầu bắt buộc** | Pen extension; `clear` + `pen down`; `repeat` (5); `move` cùng số bước; `turn` (144) độ; `set pen color to` |
| **Gợi ý bước** | 1. Add Extension → Pen. 2. `clear` → `pen down` → `go to` giữa Stage. 3. `set pen color to` vàng. 4. `repeat` (5) → `move` (100) → `turn` (144). 5. `pen up`. 6. Lưu project. |
| **Checklist** | - [ ] Có extension Pen<br>- [ ] `repeat` (5) với turn 144°<br>- [ ] Thấy ngôi sao 5 cánh<br>- [ ] Có màu bút<br>- [ ] Em đã lưu project |
| **Thử thêm** | Vẽ 2 ngôi sao chồng nhau (2 màu, kích thước khác) |

---

# Tuần 8 — Điều kiện & biến 🎯

---

## Buổi 15 — Học (H): Điều kiện & biến

### Hôm nay em học gì?

Hôm nay em học **if / else** (nếu thì / không thì) để Scratch **quyết định** làm gì, và **biến** (variable) để **lưu số** như điểm số trong game! Đây là nền tảng để em làm game có luật chơi và tính điểm. 🎮⭐

---

### Kiến thức mới

**1. if ... else (Nếu thì / Không thì)**

| Khối lệnh | Em dùng để làm gì? |
|-----------|-------------------|
| `if` `<>` `then` | Nếu đúng → chạy khối bên trong |
| `if` `<>` `then` `else` | Đúng → nhánh trên; **sai** → nhánh `else` |

*Ví dụ:*
```
if <touching [Star] ?> then
  change [điểm] by (1)
else
  say [Chưa chạm sao!] for (1) secs
```

**2. Biến (Variables) 📊**

- Biến = **hộp nhớ** lưu một giá trị (thường là số).
- Tạo biến: **Variables** → **Make a Variable** → đặt tên (ví dụ `điểm`, `score`).
- Chọn **For all sprites** nếu cả game dùng chung điểm.

| Khối lệnh | Em dùng để làm gì? |
|-----------|-------------------|
| `set` `điểm` `to` `0` | Gán điểm = 0 (reset) |
| `change` `điểm` `by` `1` | Tăng điểm lên 1 |
| `điểm` (ô tròn) | Đọc giá trị hiện tại của điểm |

**3. touching sprite khác**

- `touching` `[Tên sprite]` `?` — kiểm tra có chạm nhân vật khác không.
- Dùng trong game: chạm sao → +điểm; chạm địch → -mạng.

**4. Hiển thị biến trên Stage**

- Tick ô nhỏ cạnh tên biến trong Variables → số hiện góc Stage.

---

### Ví dụ mẫu

**Ví dụ: Đếm click**

1. Tạo biến `số lần click`.
2. `when green flag clicked` → `set` `số lần click` `to` `0`.
3. `when this sprite clicked` → `change` `số lần click` `by` `1`.
4. Bấm cờ xanh, click sprite nhiều lần — xem số tăng! 🔢

---

### TH1 — If touching (chạm sprite) ⭐

#### Mô tả

Em thêm sprite **Sao** (Star). Khi nhân vật chính **chạm sao**, sao di chuyển vị trí mới và có tiếng — dùng `if` `touching`.

#### Yêu cầu

- Có ít nhất 2 sprite (nhân vật + sao).
- Nhân vật điều khiển bằng phím mũi tên.
- Trong `forever`: `if` `touching` `[Star]` → `start sound` + `go to` vị trí ngẫu nhiên cho sao.

#### Gợi ý từng bước

1. Giữ Cat, thêm sprite **Star**.
2. Thu nhỏ Star, `go to` vị trí ngẫu nhiên: `go to x: (pick random -200 to 200) y: (pick random -150 to 150)`.
3. **Code Cat — điều khiển:**
   - `when green flag clicked` → `forever`:
     - `if` `key` `up arrow` `pressed?` → `change y by` `5`
     - (tương tự down, left, right)
4. **Code Cat — chạm sao:**
   - Trong cùng `forever` (hoặc `forever` thứ 2):
   - `if` `touching` `Star` `?` `then`:
     - `start sound` `Collect`
     - `go to x: (pick random -200 to 200) y: (pick random -150 to 150)` — **chọn "Star" trong menu** bằng cách kéo khối `go to` khi đang chọn sprite Star, hoặc dùng `broadcast` (tuần sau học kỹ hơn). *Cách đơn giản:* đặt code chạm sao **trên sprite Star**:
5. **Code Star:**
   ```
   when green flag clicked
   go to (vị trí ngẫu nhiên)
   forever
     if <touching [Cat] ?> then
       start sound [Collect]
       go to x: (pick random -200 to 200) y: (pick random -150 to 150)
   ```
6. Lưu project tên `TH1-if-touching`.

#### Checklist tự kiểm

- [ ] Điều khiển nhân vật bằng phím được
- [ ] Có `if touching` Star
- [ ] Chạm sao có tiếng
- [ ] Sao nhảy sang chỗ mới khi bị chạm
- [ ] Em đã lưu project

---

### TH2 — Biến điểm (score) 🏆

#### Mô tả

Em tạo biến `điểm`, reset về 0 khi bắt đầu, và **tăng điểm** mỗi khi chạm sao.

#### Yêu cầu

- Biến `điểm` hiển thị trên Stage.
- Cờ xanh: `set` `điểm` `to` `0`.
- Chạm sao: `change` `điểm` `by` `1`.
- Kết hợp với TH1 (cùng project hoặc project mới).

#### Gợi ý từng bước

1. **Variables** → **Make a Variable** → tên `điểm` → For all sprites.
2. Tick hiển thị biến trên Stage.
3. `when green flag clicked` → `set` `điểm` `to` `0` (đặt ở Cat hoặc Star).
4. Trong `if touching Cat` (trên Star): thêm `change` `điểm` `by` `1`.
5. Bấm cờ xanh, chạm sao 5 lần — điểm phải = 5!
6. Lưu project tên `TH2-bien-diem`.

#### Checklist tự kiểm

- [ ] Có biến `điểm` trên Stage
- [ ] Bắt đầu game điểm = 0
- [ ] Mỗi lần chạm sao điểm +1
- [ ] Em đã thử chạm ≥ 5 lần
- [ ] Em đã lưu project

---

### Mẹo nhỏ 💡

- Luôn `set điểm to 0` khi **cờ xanh** — không reset thì điểm cũ còn từ lần chơi trước!
- `if` ... `else` giúp game có **hai nhánh** rõ ràng (đúng/sai, thắng/thua).
- Code `if touching` nên nằm trong `forever` để kiểm tra **liên tục**.
- Đặt tên biến tiếng Việt không dấu hoặc tiếng Anh đều được — quan trọng là em nhớ!

---

### Câu hỏi ôn

1. Biến dùng để làm gì? Cho ví dụ trong game.
2. `set` và `change` khác nhau thế nào?
3. `if` ... `else` dùng khi nào?
4. Làm sao hiển thị điểm trên màn hình Stage?
5. Tại sao `if touching` thường đặt trong `forever`?

---

### BTVN1 — If-else đơn giản 🔀

#### Mô tả

Em hỏi một câu (hoặc dùng phím) và dùng **if-else**: đúng thì sprite vui, sai thì sprite buồn.

#### Yêu cầu

- Có `ask` HOẶC nhấn phím để kiểm tra.
- Có `if` ... `then` ... `else`.
- Nhánh đúng và nhánh sai có phản ứng khác nhau (`say` hoặc `switch costume to`).

#### Gợi ý từng bước

1. `when green flag clicked` → `ask` `5 + 5 = ?` `and wait`
2. `if` `answer` `=` `10` `then` → `say` `Giỏi quá!` `for` `2` `secs` → `switch costume to` costume vui
3. `else` → `say` `Cố lên nhé!` `for` `2` `secs`
4. Lưu project tên `BTVN1-if-else`.

#### Checklist tự kiểm

- [ ] Có `if` và `else`
- [ ] Đúng và sai phản ứng khác nhau
- [ ] Em thử cả đáp án đúng và sai
- [ ] Em đã lưu project

---

### BTVN2 — Bắt sao đơn giản 🌟

#### Mô tả

Em làm game mini: điều khiển nhân vật, chạm sao để **+1 điểm**, sao nhảy chỗ mới. Có biến `điểm`.

#### Yêu cầu

- Điều khiển 4 phím mũi tên.
- Biến `điểm`; reset khi cờ xanh.
- Chạm sao → +1 điểm + sao đổi vị trí + có tiếng.

#### Gợi ý từng bước

1. Cat + Star, biến `điểm`.
2. Code di chuyển 4 phím (như tuần 4).
3. Star: `if touching Cat` → `change điểm by 1` → `start sound` → `go to` random.
4. Cat hoặc Star: cờ xanh → `set điểm to 0`.
5. Lưu project tên `BTVN2-bat-sao`.

#### Checklist tự kiểm

- [ ] Điều khiển 4 hướng OK
- [ ] Có biến điểm hiển thị
- [ ] Chạm sao tăng điểm
- [ ] Sao đổi vị trí sau khi chạm
- [ ] Em đã lưu project

---

## Buổi 16 — Bài tập (BT): Game điểm cơ bản 🎮

### Ôn nhanh

- **if / else:** quyết định hai nhánh
- **Biến:** `set`, `change`, hiển thị trên Stage
- **Game mini:** điều khiển + chạm + điểm

---

### Chữa BTVN

#### BTVN1 — If-else

| Em kiểm tra | Đúng khi... |
|-------------|-------------|
| Có else | Thấy khối `else` gắn với `if` |
| Hai nhánh khác nhau | Đúng/sai có `say` hoặc costume khác nhau |
| Thử cả hai | Em gõ đúng và sai đều thấy phản ứng khác |

#### BTVN2 — Bắt sao

| Em kiểm tra | Đúng khi... |
|-------------|-------------|
| Điểm tăng | Mỗi lần chạm sao +1 |
| Reset | Cờ xanh → điểm về 0 |
| Sao nhảy | Sau khi chạm, sao ở vị trí mới |
| Điều khiển | 4 phím mũi tên hoạt động |

---

### Chọn bài mở rộng

Em chọn **1 mức** A, B hoặc C, rồi chọn **1 trong 2 bài** của mức đó.

| Mức | Khi nào chọn |
|-----|--------------|
| **A1 hoặc A2** | Em luyện đếm click (A1) hoặc đếm thời gian (A2) 🖱️ |
| **B1 hoặc B2** | Em luyện bắt sao (B1) hoặc bắt táo rơi (B2) 🌟 |
| **C1 hoặc C2** | Em luyện tránh thiên thạch (C1) hoặc game 3 mạng (C2) ☄️ |

---

### Bài A1 — Đếm click 🖱️

| | Nội dung |
|---|----------|
| **Mô tả** | Em đếm **số lần click** vào sprite bằng biến. Khi đủ 10 lần → sprite chúc mừng! |
| **Yêu cầu bắt buộc** | Biến `lần click`; `set` 0 khi cờ xanh; `when sprite clicked` → `change` +1; `if` `lần click` `=` `10` → `say` chúc mừng |
| **Gợi ý bước** | 1. Tạo biến. 2. Cờ xanh reset. 3. Click → tăng biến. 4. `if` đủ 10 → `say` `Em click 10 lần rồi!`. 5. Lưu project. |
| **Checklist** | - [ ] Biến hiển thị trên Stage<br>- [ ] Click tăng số<br>- [ ] Đủ 10 có thông báo<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm `else` khi chưa đủ 10: `say` (join `Còn ` (10 - lần click) ` lần nữa!`) |

---

### Bài B1 — Bắt sao 🌟

| | Nội dung |
|---|----------|
| **Mô tả** | Game **bắt sao**: trong 30 giây em gom càng nhiều sao càng tốt. Hết giờ → báo điểm. |
| **Yêu cầu bắt buộc** | Biến `điểm`; biến hoặc `wait` 30 giây; điều khiển 4 phím; chạm sao +1; hết giờ `say` tổng điểm và `stop all` |
| **Gợi ý bước** | 1. Biến `điểm`, reset cờ xanh. 2. Cat điều khiển 4 phím. 3. Star: chạm → +1 → random vị trí. 4. `when green flag` → `wait` 30 secs → `say` (join `Hết giờ! Điểm: ` `điểm`) → `stop all`. 5. Lưu project. |
| **Checklist** | - [ ] Chơi được bằng phím<br>- [ ] Có giới hạn thời gian<br>- [ ] Hết giờ báo điểm<br>- [ ] Em đã lưu project |
| **Thử thêm** | Nếu điểm ≥ 15 thì `say` `Siêu sao!` |

---

### Bài C1 — Tránh thiên thạch ☄️

| | Nội dung |
|---|----------|
| **Mô tả** | Tàu vũ trụ **tránh thiên thạch** rơi từ trên. Không bị trúng càng lâu càng tốt — dùng biến `thời gian` hoặc `điểm sống`. |
| **Yêu cầu bắt buộc** | ≥ 2 sprite (tàu + thiên thạch); điều khiển trái/phải; thiên thạch rơi (`repeat` hoặc `forever` + `change y`); `if touching` thiên thạch → `say` Game Over + `stop all`; biến đếm thời gian hoặc điểm |
| **Gợi ý bước** | 1. Sprite Rocket (tàu) ở dưới, điều khiển trái/phải. 2. Sprite thiên thạch: `go to` trên cùng → `forever` → `change y by` (-5) → chạm biên dưới thì `go to` lại trên. 3. `if touching` thiên thạch → thua. 4. Biến `giây`: `forever` → `wait` 1 → `change giây by 1`. 5. Lưu project. |
| **Checklist** | - [ ] Tàu di chuyển trái/phải<br>- [ ] Thiên thạch rơi liên tục<br>- [ ] Chạm thì Game Over<br>- [ ] Có biến (thời gian hoặc điểm)<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm âm thanh nổ khi Game Over; thiên thạch rơi nhanh dần theo thời gian |

---

### Bài A2 — Đếm thời gian click ⏱️

| | Nội dung |
|---|----------|
| **Mô tả** | Em đếm **thời gian** (giây) bằng biến — đồng hồ chạy khi cờ xanh; mỗi lần click sprite thì dừng và báo em chơi được bao lâu. |
| **Yêu cầu bắt buộc** | Biến `giây`; `set` `giây` `to` `0` khi cờ xanh; `forever` → `wait` 1 → `change giây by 1`; `when sprite clicked` → `say` (join `Em chơi được ` `giây` ` giây!`) → `stop all` |
| **Gợi ý bước** | 1. Tạo biến `giây`, hiển thị trên Stage. 2. Cờ xanh: `set giây to 0` + `forever` đếm giây. 3. Click sprite → `say` thời gian + `stop all`. 4. Chơi thử 2–3 lần. 5. Lưu project. |
| **Checklist** | - [ ] Biến `giây` hiển thị và tăng<br>- [ ] Click thì báo thời gian<br>- [ ] Cờ xanh reset về 0<br>- [ ] Em đã lưu project |
| **Thử thêm** | Nếu `giây` ≥ 10 thì `say` `Em giỏi quá!` trước khi dừng |

---

### Bài B2 — Bắt táo rơi 🍎

| | Nội dung |
|---|----------|
| **Mô tả** | Game **bắt táo rơi**: táo rơi từ trên xuống, em điều khiển giỏ hoặc nhân vật bắt — mỗi lần bắt được +1 điểm. |
| **Yêu cầu bắt buộc** | ≥ 2 sprite (nhân vật/giỏ + táo); điều khiển trái/phải; táo rơi (`forever` + `change y by` âm); `if touching` táo → +1 điểm + táo về trên; biến `điểm` |
| **Gợi ý bước** | 1. Biến `điểm`, reset cờ xanh. 2. Nhân vật điều khiển ← → ở dưới Stage. 3. Táo: `go to` trên → `forever` → rơi xuống → chạm biên dưới thì về trên. 4. `if touching` táo → `change điểm by 1` → `start sound` → táo `go to` random trên. 5. Lưu project. |
| **Checklist** | - [ ] Điều khiển trái/phải OK<br>- [ ] Táo rơi liên tục<br>- [ ] Bắt được thì +1 điểm<br>- [ ] Có biến điểm hiển thị<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm giới hạn 30 giây — hết giờ báo điểm và `stop all` |

---

### Bài C2 — Game 3 mạng ❤️❤️❤️

| | Nội dung |
|---|----------|
| **Mô tả** | Em làm game có **3 mạng** (lives): chạm địch thì mất 1 mạng; hết 3 mạng → Game Over. Kết hợp điều khiển + va chạm + biến. |
| **Yêu cầu bắt buộc** | Biến `mạng`; `set mạng to 3` khi cờ xanh; `if touching` địch → `change mạng by -1` + địch về vị trí mới; `if mạng = 0` → `say` Game Over + `stop all`; hiển thị `mạng` trên Stage |
| **Gợi ý bước** | 1. Tạo biến `mạng`, hiển thị trên Stage. 2. Nhân vật điều khiển 4 phím (hoặc trái/phải). 3. Sprite địch di chuyển/rơi. 4. Chạm địch: `change mạng by -1`, đợi ngắn, kiểm tra `if mạng = 0`. 5. Lưu project. |
| **Checklist** | - [ ] Bắt đầu có 3 mạng<br>- [ ] Chạm địch mất 1 mạng<br>- [ ] Hết mạng → Game Over<br>- [ ] Biến `mạng` hiển thị trên Stage<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm âm thanh khi mất mạng; khi còn 1 mạng sprite `say` `Cẩn thận!` |

---

## Em đã hoàn thành tháng 2! 🎉

Sau 8 buổi (tuần 5–8), em đã biết:

- 🎵 Thêm **âm thanh** và làm **hội thoại** nhiều sprite
- 🔍 Dùng **Sensing** (`ask`, `touching`) và **thuật toán**
- 🔁 Dùng **vòng lặp** `repeat` và `forever`, vẽ bằng **Pen**
- 🎯 Dùng **if/else** và **biến** để làm game có điểm

Tuần sau em sẽ học **broadcast**, **clone** và **My Blocks** — game của em sẽ hay hơn nhiều! Tiếp tục trong file [thang-3-logic-nang-cao.md](thang-3-logic-nang-cao.md) nhé! 🚀
