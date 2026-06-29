# Logic nâng cao — Tuần 9 đến 12 🎲📡👥🧩

> Chào em! Đây là phần học **tháng 3** của khóa Scratch. Em sẽ học **toán tử & số ngẫu nhiên**, **broadcast** (gửi tin nhắn giữa các sprite), **clone** (nhân bản nhân vật) và **My Blocks** (tự tạo khối lệnh) — để game của em gọn code hơn và chơi hay hơn!

**Tuần 9–12** | **Buổi 17–24** | Dành cho em **8–10 tuổi**

---

# Tuần 9 — Biến & toán tử 🎲

---

## Buổi 17 — Học (H): Biến & toán tử

### Hôm nay em học gì?

Hôm nay em học nhóm khối **Operators** (Toán tử) — đặc biệt là `pick random` để tạo **số ngẫu nhiên** (như tung xúc xắc!). Em cũng dùng **nhiều biến cùng lúc** trong một game: ví dụ vừa đếm **điểm**, vừa đếm **thời gian**. Đây là bước quan trọng để em làm game có luật chơi phong phú hơn! 🎯⏱️

---

### Kiến thức mới

**1. Nhóm khối Operators (Toán tử) 🔢**

| Khối lệnh | Em dùng để làm gì? |
|-----------|-------------------|
| `pick random` `1` `to` `6` | Chọn **một số ngẫu nhiên** trong khoảng (ví dụ xúc xắc 1–6) |
| `+` `-` `*` `/` | Cộng, trừ, nhân, chia hai số |
| `>` `<` `=` | So sánh: lớn hơn, nhỏ hơn, bằng |
| `and` `or` `not` | Kết hợp nhiều điều kiện |
| `join` `hello` `world` | Nối chữ với số hoặc chữ khác |
| `mod` | Lấy **phần dư** (ví dụ 7 mod 2 = 1) |

**2. pick random — Số ngẫu nhiên 🎲**

- Máy tính "bốc" một số trong khoảng em chọn — mỗi lần có thể khác nhau.
- Xúc xắc: `pick random` `1` `to` `6`
- Vị trí ngẫu nhiên: `go to x:` `(pick random -200 to 200)` `y:` `(pick random -150 to 150)`

**3. Nhiều biến trong một game 📊**

Em có thể tạo **nhiều biến** — mỗi biến là một "hộp nhớ" riêng:

| Biến ví dụ | Lưu gì? |
|------------|---------|
| `điểm` | Số điểm người chơi gom được |
| `thời gian` | Số giây còn lại hoặc đã chơi |
| `mạng` | Số lần được chơi lại (tuần sau dùng nhiều hơn) |
| `số xúc xắc` | Kết quả tung xúc xắc |

- Tạo biến: **Variables** → **Make a Variable** → đặt tên.
- Tick ô nhỏ cạnh tên biến → hiện số trên Stage.
- Mỗi biến có `set` và `change` riêng — em nhớ **reset đúng biến** khi bắt đầu game!

**4. Kết hợp biến + toán tử**

```
set [thời gian] to (60)
forever
  wait (1) secs
  change [thời gian] by (-1)
```

```
set [số xúc xắc] to (pick random 1 to 6)
say (join [Xúc xắc: ] (số xúc xắc)) for (2) secs
```

---

### Ví dụ mẫu

**Ví dụ: Tung xúc xắc khi bấm phím Space**

1. Tạo biến `số xúc xắc` → tick hiển thị trên Stage.
2. Kéo `when` `space` `key pressed`.
3. Gắn `set` `số xúc xắc` `to` `(pick random 1 to 6)`.
4. Gắn `say` (join `Em tung được: ` `số xúc xắc`) `for` `2` `secs`.
5. Bấm **Space** nhiều lần — mỗi lần số thay đổi! 🎲

---

### TH1 — Hiển thị xúc xắc ngẫu nhiên 🎲

#### Mô tả

Em làm chương trình **tung xúc xắc**: mỗi lần bấm **cờ xanh** (hoặc phím Space), biến `số xúc xắc` nhận giá trị ngẫu nhiên từ 1 đến 6 và sprite **nói kết quả**.

#### Yêu cầu

- Có biến `số xúc xắc` hiển thị trên Stage.
- Dùng `pick random` `1` `to` `6`.
- Sprite `say` kết quả (dùng `join` hoặc hiện biến).
- Mỗi lần tung, số **thay đổi** (không cố định một số).

#### Gợi ý từng bước

1. Tạo project mới, chọn sprite Cat (hoặc emoji xúc xắc nếu em tìm được).
2. **Variables** → **Make a Variable** → tên `số xúc xắc` → For all sprites.
3. Tick hiển thị biến trên Stage.
4. Code:
   ```
   when green flag clicked
   set [số xúc xắc] to (pick random 1 to 6)
   say (join [Xúc xắc: ] (số xúc xắc)) for (2) secs
   ```
5. (Tùy chọn) Thêm `when space key pressed` → lặp lại `set` + `say` để tung nhiều lần không cần bấm cờ xanh.
6. Bấm cờ xanh ít nhất 5 lần (hoặc Space 5 lần) — kiểm tra số có đổi không.
7. **Lưu project** với tên `TH1-xuc-xac-random`.

#### Checklist tự kiểm

- [ ] Có biến `số xúc xắc` trên Stage
- [ ] Dùng `pick random 1 to 6`
- [ ] Sprite `say` kết quả mỗi lần tung
- [ ] Em thử tung ≥ 5 lần, thấy số khác nhau
- [ ] Em đã lưu project

---

### TH2 — Hai biến: điểm + thời gian ⏱️🏆

#### Mô tả

Em tạo game mini có **hai biến**: `điểm` (tăng khi click sprite) và `thời gian` (đếm ngược từ 30 về 0). Hết giờ thì sprite báo tổng điểm!

#### Yêu cầu

- Có **2 biến**: `điểm` và `thời gian`, đều hiển thị trên Stage.
- Cờ xanh: `set điểm to 0`, `set thời gian to 30`.
- Click sprite → `change điểm by 1`.
- Song song: `forever` → `wait 1 secs` → `change thời gian by -1`.
- Khi `thời gian` `=` `0` → `say` tổng điểm → `stop all`.

#### Gợi ý từng bước

1. Tạo biến `điểm` và `thời gian` → tick hiển thị cả hai.
2. **Code cờ xanh (sprite Cat):**
   ```
   when green flag clicked
   set [điểm] to (0)
   set [thời gian] to (30)
   ```
3. **Đếm ngược thời gian** (cùng sprite hoặc Stage):
   ```
   when green flag clicked
   repeat until <(thời gian) = (0)>
     wait (1) secs
     change [thời gian] by (-1)
   say (join [Hết giờ! Điểm: ] (điểm)) for (3) secs
   stop [all]
   ```
4. **Click tăng điểm:**
   ```
   when this sprite clicked
   change [điểm] by (1)
   start sound [Pop]
   ```
5. Bấm cờ xanh, click nhanh nhiều lần trong 30 giây — xem điểm tăng và thời gian giảm.
6. **Lưu project** với tên `TH2-diem-va-thoi-gian`.

#### Checklist tự kiểm

- [ ] Có 2 biến hiển thị trên Stage
- [ ] Cờ xanh reset cả điểm và thời gian
- [ ] Click sprite tăng điểm
- [ ] Thời gian đếm ngược từ 30 về 0
- [ ] Hết giờ có `say` báo điểm và game dừng
- [ ] Em đã lưu project

---

### Mẹo nhỏ 💡

- `pick random` **không** cần biến — nhưng lưu vào biến thì em đọc lại và so sánh dễ hơn.
- Khi có nhiều biến, viết ra giấy: **biến nào reset lúc nào**, **biến nào thay đổi khi nào**.
- Đếm ngược: dùng `repeat until thời gian = 0` hoặc `forever` + `if thời gian = 0 then stop all`.
- `join` giúp nối chữ với số: `join [Điểm: ] [điểm]` — kéo biến vào ô tròn!

---

### Câu hỏi ôn

1. `pick random 1 to 6` dùng để làm gì? Cho ví dụ ngoài xúc xắc.
2. Một game có thể có mấy biến? Kể tên 3 biến em có thể dùng.
3. `set` và `change` khác nhau thế nào? Khi nào dùng từng loại?
4. Khối `join` dùng để làm gì?
5. Tại sao nên reset biến khi bấm cờ xanh?

---

### BTVN1 — Xúc xắc khi nhấn phím 🎲

#### Mô tả

Ở nhà, em làm xúc xắc: mỗi lần nhấn phím **Space** (hoặc phím em chọn) thì tung xúc xắc — hiện số mới và sprite phản ứng.

#### Yêu cầu

- Biến `số xúc xắc` hiển thị trên Stage.
- Nhấn **Space** → `set` số ngẫu nhiên 1–6 → `say` kết quả.
- Nhấn nhiều lần liên tiếp vẫn hoạt động (không cần bấm cờ xanh lại).

#### Gợi ý từng bước

1. Tạo biến `số xúc xắc`.
2. `when green flag clicked` → `set số xúc xắc to 0` (hoặc 1).
3. `when space key pressed`:
   - `set số xúc xắc to (pick random 1 to 6)`
   - `say (join [🎲 ] (số xúc xắc)) for (1.5) secs`
   - (Tùy chọn) `start sound` Pop
4. Thử Space 10 lần.
5. Lưu project tên `BTVN1-xuc-xac-phim`.

#### Checklist tự kiểm

- [ ] Space tung được xúc xắc
- [ ] Số hiện trên Stage và trong `say`
- [ ] Tung nhiều lần không bị lỗi
- [ ] Em đã lưu project để mang đến buổi BT

---

### BTVN2 — Đếm ngược thời gian ⏳

#### Mô tả

Em làm đồng hồ **đếm ngược**: bắt đầu từ 10 (hoặc 20), mỗi giây giảm 1, về 0 thì sprite nói "Hết giờ!" và dừng.

#### Yêu cầu

- Biến `thời gian` hiển thị trên Stage.
- Cờ xanh: `set thời gian to 10` (hoặc 20).
- Mỗi giây `change thời gian by -1`.
- Về 0 → `say` `Hết giờ!` → `stop all`.

#### Gợi ý từng bước

1. Tạo biến `thời gian`.
2. `when green flag clicked` → `set thời gian to 10`.
3. `repeat until thời gian = 0`:
   - `wait 1 secs`
   - `change thời gian by -1`
4. `say` `⏰ Hết giờ!` `for` `2` `secs` → `stop all`.
5. Lưu project tên `BTVN2-dem-nguoc`.

#### Checklist tự kiểm

- [ ] Thời gian đếm 10 → 9 → ... → 0
- [ ] Mỗi giây giảm đúng 1
- [ ] Về 0 có thông báo và dừng
- [ ] Em đã lưu project

---

## Buổi 18 — Bài tập (BT): Luyện Operators 🎲

### Ôn nhanh

Nhớ lại buổi trước nhé em:

- **Operators:** `pick random`, `join`, so sánh `>` `<` `=`
- **Nhiều biến:** mỗi biến một việc — `điểm`, `thời gian`...
- **set** = gán giá trị mới; **change** = cộng/trừ thêm
- Luôn **reset biến** khi bấm cờ xanh!

---

### Chữa BTVN

#### BTVN1 — Xúc xắc khi nhấn phím: Em tự kiểm tra

| Em kiểm tra | Đúng khi... |
|-------------|-------------|
| Phím Space | Mỗi lần Space có số mới 1–6 |
| Hiển thị | Biến trên Stage đổi theo |
| Phản hồi | Có `say` hoặc âm thanh |
| Lặp lại | Space 5 lần liên tiếp OK, không cần cờ xanh |

**Nếu chưa đúng:** Kiểm tra khối `when space key pressed` (không phải `when green flag`); kiểm tra `pick random 1 to 6` nằm trong `set`.

#### BTVN2 — Đếm ngược: Em tự kiểm tra

| Em kiểm tra | Đúng khi... |
|-------------|-------------|
| Bắt đầu | Cờ xanh → thời gian = 10 (hoặc số em chọn) |
| Đếm ngược | Mỗi giây giảm 1 |
| Kết thúc | Về 0 → `say` Hết giờ → dừng |
| Không âm | Thời gian không xuống -1, -2... |

**Nếu đếm quá nhanh/chậm:** Kiểm tra có `wait 1 secs` trong vòng lặp chưa.

---

### Chọn bài mở rộng

Em chọn **1 mức** A, B hoặc C, rồi chọn **1 trong 2 bài** của mức đó. Làm hết checklist trước khi đổi bài.

| Mức | Khi nào chọn |
|-----|--------------|
| **A1 hoặc A2** | Em luyện `pick random` và biến (xúc xắc, đồng xu) |
| **B1 hoặc B2** | Em luyện `ask` + so sánh số |
| **C1 hoặc C2** | Em làm game gom điểm có giới hạn thời gian |

---

### Bài A1 — Xúc xắc 🎲

| | Nội dung |
|---|----------|
| **Mô tả** | Em làm xúc xắc **đẹp hơn**: có costume hoặc emoji đổi theo số (1–6), tung bằng Space, có âm thanh. |
| **Yêu cầu bắt buộc** | Biến `số xúc xắc`; Space tung random 1–6; `say` kết quả; ≥ 1 âm thanh khi tung |
| **Gợi ý bước** | 1. Biến `số xúc xắc`. 2. Space → set random → say → start sound. 3. (Tùy chọn) `if số xúc xắc = 6` → say `May mắn!`. 4. Lưu project. |
| **Checklist** | - [ ] Space tung được<br>- [ ] Số 1–6<br>- [ ] Có âm thanh<br>- [ ] Em đã lưu project |
| **Thử thêm** | Đếm số lần tung 6 bằng biến `lần may mắn` |

---

### Bài A2 — Tung đồng xu Heads/Tails 🪙

| | Nội dung |
|---|----------|
| **Mô tả** | Em làm **tung đồng xu**: mỗi lần bấm Space, random **Heads** (Ngửa) hoặc **Tails** (Sấp). Sprite `say` kết quả bằng tiếng Việt hoặc tiếng Anh. |
| **Yêu cầu bắt buộc** | Biến `kết quả` hoặc `đồng xu`; Space → random 1 hoặc 2; `if` hiển thị Ngửa/Sấp; có `say` hoặc đổi costume |
| **Gợi ý bước** | 1. Biến `đồng xu`. 2. Space → `set đồng xu to (pick random 1 to 2)`. 3. `if đồng xu = 1` → `say` `Ngửa (Heads)!` 4. `else` → `say` `Sấp (Tails)!` 5. (Tùy chọn) 2 costume cho 2 mặt đồng xu. 6. Lưu project. |
| **Checklist** | - [ ] Space tung được<br>- [ ] Chỉ có Ngửa hoặc Sấp<br>- [ ] Có phản hồi rõ ràng<br>- [ ] Em đã lưu project |
| **Thử thêm** | Biến `số lần ngửa` — đếm mỗi khi ra Heads |

---

### Bài B1 — Đoán số 🔮

| | Nội dung |
|---|----------|
| **Mô tả** | Máy **bốc số bí mật** từ 1 đến 10. Em dùng `ask` để đoán — đúng thì thắng, sai thì gợi ý "lớn hơn" hoặc "nhỏ hơn". |
| **Yêu cầu bắt buộc** | Biến `số bí mật`; cờ xanh bốc random 1–10; `ask` đoán; `if` so sánh `answer` với `số bí mật`; có `else` gợi ý |
| **Gợi ý bước** | 1. Biến `số bí mật`. 2. Cờ xanh: `set số bí mật to (pick random 1 to 10)`. 3. `ask` `Đoán số từ 1 đến 10?` 4. `if answer = số bí mật` → say `Đúng!` 5. `else if answer < số bí mật` → say `Thử số lớn hơn!` 6. `else` → say `Thử số nhỏ hơn!` 7. Lưu project. |
| **Checklist** | - [ ] Có số bí mật random<br>- [ ] Có ask đoán<br>- [ ] Đúng/sai có phản hồi khác nhau<br>- [ ] Em đã lưu project |
| **Thử thêm** | Biến `lượt đoán` — đoán tối đa 5 lần |

---

### Bài B2 — Đoán cao/thấp 2 số random 📊

| | Nội dung |
|---|----------|
| **Mô tả** | Máy bốc **2 số ngẫu nhiên** từ 1 đến 10. Em dùng `ask` đoán số nào **lớn hơn** — đúng thì thắng, sai thì sprite nói số nào lớn hơn. |
| **Yêu cầu bắt buộc** | Biến `số A` và `số B`; cờ xanh bốc 2 số random; `ask` `Số nào lớn hơn? (A hay B)`; `if` so sánh `answer` với số lớn hơn; có `else` báo đáp án đúng |
| **Gợi ý bước** | 1. Biến `số A`, `số B`. 2. Cờ xanh: set random cho cả hai. 3. `say` (join `A = ` `số A`) rồi `say` (join `B = ` `số B`). 4. `ask` đoán A hay B lớn hơn. 5. `if số A > số B` và `answer = A` → đúng; tương tự cho B; `else` → gợi ý. 6. Lưu project. |
| **Checklist** | - [ ] Có 2 số random khác nhau hoặc bằng<br>- [ ] Có ask đoán<br>- [ ] Đúng/sai có phản hồi<br>- [ ] Em đã lưu project |
| **Thử thêm** | Nếu `số A = số B` → `say` `Hòa! Bốc lại nhé!` và bốc lại |

---

### Bài C1 — Game 60 giây ⏱️

| | Nội dung |
|---|----------|
| **Mô tả** | Trong **60 giây**, em click vào sprite càng nhiều càng tốt để gom điểm. Hết giờ báo điểm và xếp hạng (ví dụ ≥ 30 điểm = Giỏi!). |
| **Yêu cầu bắt buộc** | Biến `điểm` và `thời gian`; reset cờ xanh (điểm=0, thời gian=60); click +1 điểm; đếm ngược; hết giờ `say` điểm + `if` xếp hạng |
| **Gợi ý bước** | 1. Hai biến, hiển thị Stage. 2. Cờ xanh reset. 3. `repeat until thời gian = 0`: wait 1 → change thời gian -1. 4. Click → change điểm +1. 5. Hết giờ: say điểm; `if điểm >= 30` → say `Giỏi lắm!`. 6. Lưu project. |
| **Checklist** | - [ ] 60 giây đếm ngược<br>- [ ] Click tăng điểm<br>- [ ] Hết giờ báo điểm<br>- [ ] Có xếp hạng theo điểm<br>- [ ] Em đã lưu project |
| **Thử thêm** | Sprite di chuyển random mỗi khi click — khó bắt hơn! |

---

### Bài C2 — Game 30 giây countdown ⏳

| | Nội dung |
|---|----------|
| **Mô tả** | Giống game click gom điểm nhưng chỉ **30 giây** — nhanh hơn, căng hơn! Hết giờ báo điểm và xếp hạng (ví dụ ≥ 15 điểm = Giỏi!). |
| **Yêu cầu bắt buộc** | Biến `điểm` và `thời gian`; reset cờ xanh (điểm=0, thời gian=30); click +1 điểm; đếm ngược; hết giờ `say` điểm + `if` xếp hạng + `stop all` |
| **Gợi ý bước** | 1. Hai biến hiển thị Stage. 2. Cờ xanh: `set điểm to 0`, `set thời gian to 30`. 3. `repeat until thời gian = 0`: wait 1 → change thời gian -1. 4. Click sprite → change điểm +1. 5. Hết giờ: say điểm; `if điểm >= 15` → say `Giỏi lắm!`. 6. Lưu project. |
| **Checklist** | - [ ] 30 giây đếm ngược<br>- [ ] Click tăng điểm<br>- [ ] Hết giờ báo điểm<br>- [ ] Có xếp hạng theo điểm<br>- [ ] Em đã lưu project |
| **Thử thêm** | Sprite nhỏ dần mỗi 10 giây (`change size by` -10) — khó click hơn! |

---

# Tuần 10 — Broadcast & trạng thái game 📡

---

## Buổi 19 — Học (H): Broadcast

### Hôm nay em học gì?

Hôm nay em học **broadcast** (phát sóng) — cách gửi **tin nhắn** giữa các sprite để chúng **phối hợp** với nhau. Em cũng học **trạng thái game** (chờ, đang chơi, kết thúc) — giúp game của em có luồng chơi rõ ràng! 📡🎮

---

### Kiến thức mới

**1. Broadcast là gì? 📡**

- Broadcast = **gửi tin nhắn** mà nhiều sprite có thể **nghe** cùng lúc.
- Giống thầy/cô hô "Bắt đầu!" — tất cả học sinh đều nghe và làm việc.

| Khối lệnh | Em dùng để làm gì? |
|-----------|-------------------|
| `broadcast` `tên tin` | **Gửi** một tin nhắn (ví dụ `start`, `game over`) |
| `broadcast` `tên tin` `and wait` | Gửi tin và **đợi** đến khi mọi sprite xử lý xong |
| `when I receive` `tên tin` | **Nghe** tin nhắn và chạy code bên dưới |

**2. Tạo tin nhắn broadcast mới**

- Trong khối `broadcast`, bấm menu → **New message** → gõ tên (ví dụ `start`, `game over`).
- Tên tin nên **ngắn, dễ nhớ** — tiếng Anh không dấu thường dễ dùng: `start`, `game over`, `win`.

**3. Trạng thái game (Game States) 🎮**

| Trạng thái | Em làm gì? |
|------------|-----------|
| **Chờ** (Menu) | Hiện nút Play, chưa chơi |
| **Đang chơi** (Playing) | Nhân vật di chuyển, tính điểm |
| **Kết thúc** (Game Over) | Dừng game, hiện điểm, chờ chơi lại |

- Dùng biến `trạng thái` hoặc broadcast để chuyển giữa các trạng thái.

**4. Khối hữu ích hôm nay**

| Nhóm | Khối lệnh |
|------|-----------|
| Events | `broadcast`, `when I receive`, `when green flag clicked` |
| Control | `stop all`, `stop other scripts in sprite`, `forever` |
| Variables | `set`, `change` |
| Looks | `say`, `show`, `hide` |

---

### Ví dụ mẫu

**Ví dụ: Nút Start bằng broadcast**

1. Sprite **Nút Play**: `when this sprite clicked` → `broadcast` `start`.
2. Sprite **Cat**:
   ```
   when I receive [start]
   say [Bắt đầu chơi!] for (1) secs
   ```
3. Click nút Play → Cat nói "Bắt đầu chơi!" dù Cat không được click trực tiếp! 📡

---

### TH1 — Broadcast "bắt đầu" 🚀

#### Mô tả

Em tạo **nút Start**: khi click vào sprite nút Play, nó `broadcast` tin `start` — các sprite khác nhận tin và **bắt đầu chơi** (di chuyển, hiện lên...).

#### Yêu cầu

- Có sprite **nút Play** (hoặc chữ "START").
- Click nút → `broadcast` `start`.
- Ít nhất **1 sprite khác** có `when I receive start` và phản ứng (di chuyển, `say`, `show`...).
- Cờ xanh: reset game (ẩn nhân vật hoặc về vị trí ban đầu).

#### Gợi ý từng bước

1. Thêm sprite **Button2** (hoặc tự vẽ chữ START) — đặt tên `Nút Play`.
2. Thêm sprite **Cat** làm nhân vật chính.
3. **Code Nút Play:**
   ```
   when this sprite clicked
   broadcast [start]
   ```
4. **Code Cat:**
   ```
   when green flag clicked
   hide
   go to x: (-150) y: (0)

   when I receive [start]
   show
   say [Bắt đầu!] for (1) secs
   forever
     move (5) steps
     if <touching [edge] ?> then
       bounce
   ```
5. Bấm cờ xanh → Cat ẩn. Click nút Play → Cat hiện và di chuyển!
6. **Lưu project** với tên `TH1-broadcast-start`.

#### Checklist tự kiểm

- [ ] Có sprite nút Play
- [ ] Click nút → `broadcast start`
- [ ] Sprite khác có `when I receive start`
- [ ] Sau khi nhận tin, sprite phản ứng rõ ràng
- [ ] Em đã lưu project

---

### TH2 — Broadcast "game over" 💀

#### Mô tả

Em mở rộng project TH1: khi nhân vật **chạm biên đỏ** (hoặc chạm sprite địch), game `broadcast` `game over` — tất cả dừng lại và hiện thông báo.

#### Yêu cầu

- Có `broadcast` `game over` khi thua (chạm biên đỏ, chạm địch...).
- Ít nhất 1 sprite có `when I receive game over` → `stop all` hoặc `say` điểm.
- Có biến `điểm` (tùy chọn) hiển thị khi kết thúc.

#### Gợi ý từng bước

1. Tiếp tục project TH1 hoặc tạo mới.
2. Tạo biến `điểm`, reset khi `receive start`.
3. **Trong Cat** (khi đang chơi), thêm kiểm tra thua:
   ```
   when I receive [start]
   set [điểm] to (0)
   show
   forever
     move (5) steps
     if <touching [edge] ?> then
       broadcast [game over]
   ```
4. **Khi nhận game over:**
   ```
   when I receive [game over]
   say (join [Game Over! Điểm: ] (điểm)) for (3) secs
   stop all
   ```
5. Thử: Start → chơi → chạm biên → Game Over!
6. **Lưu project** với tên `TH2-broadcast-game-over`.

#### Checklist tự kiểm

- [ ] Có `broadcast game over` khi thua
- [ ] Có `when I receive game over`
- [ ] Game dừng sau khi thua (`stop all`)
- [ ] Có thông báo Game Over
- [ ] Em đã lưu project

---

### Mẹo nhỏ 💡

- Đặt tên broadcast **giống hệt** ở cả `broadcast` và `when I receive` — sai một chữ là không nhận được tin!
- `broadcast and wait` đợi tất cả script `when I receive` chạy xong.
- Một sprite có thể có **nhiều** `when I receive` — mỗi tin một khối riêng.
- Dùng `stop other scripts in sprite` nếu chỉ muốn dừng script hiện tại của một sprite.

---

### Câu hỏi ôn

1. Broadcast dùng để làm gì? Cho ví dụ trong game.
2. Khối `broadcast` và `when I receive` khác nhau thế nào?
3. Game có 3 trạng thái thường là gì?
4. Làm sao để nhiều sprite cùng bắt đầu khi em chỉ click một nút?
5. `stop all` làm gì? Khi nào em dùng nó?

---

### BTVN1 — Nút Play hoàn chỉnh ▶️

#### Mô tả

Ở nhà, em làm game có **nút Play**: bấm cờ xanh → game chờ; click nút Play → `broadcast start` → nhân vật bắt đầu di chuyển.

#### Yêu cầu

- Sprite nút Play, click → `broadcast start`.
- Nhân vật ẩn hoặc đứng yên khi chưa Start.
- `when I receive start` → nhân vật hiện và di chuyển (4 phím hoặc tự động).

#### Gợi ý từng bước

1. Nút Play + nhân vật chính.
2. Cờ xanh: nhân vật `hide` hoặc `go to` vị trí chờ.
3. Nút: `when clicked` → `broadcast start`.
4. Nhân vật: `when I receive start` → `show` → code di chuyển.
5. Lưu project tên `BTVN1-nut-play`.

#### Checklist tự kiểm

- [ ] Chưa Start thì chưa chơi được
- [ ] Click Play thì game bắt đầu
- [ ] Dùng broadcast
- [ ] Em đã lưu project

---

### BTVN2 — Game 3 trạng thái 🎮

#### Mô tả

Em làm game có **3 trạng thái** rõ ràng: **Chờ** (hiện nút Play), **Đang chơi** (điều khiển + tính điểm), **Kết thúc** (Game Over, hiện điểm).

#### Yêu cầu

- Biến `trạng thái` hoặc dùng broadcast: `chờ`, `chơi`, `kết thúc`.
- Chờ: chỉ hiện nút Play.
- Chơi: điều khiển nhân vật, gom điểm.
- Kết thúc: `broadcast game over` hoặc điểm đủ → dừng + báo điểm.

#### Gợi ý từng bước

1. Tạo biến `trạng thái` và `điểm`.
2. Cờ xanh: `set trạng thái to chờ`, `set điểm to 0`.
3. Nút Play: `broadcast start` → `set trạng thái to chơi`.
4. Khi `trạng thái = chơi`: code di chuyển + gom điểm chạy.
5. Khi thua: `broadcast game over` → `set trạng thái to kết thúc`.
6. Lưu project tên `BTVN2-3-trang-thai`.

#### Checklist tự kiểm

- [ ] Có 3 trạng thái rõ ràng
- [ ] Chờ → Play → Chơi → Kết thúc
- [ ] Có biến điểm
- [ ] Em đã lưu project

---

## Buổi 20 — Bài tập (BT): Trạng thái game 📡

### Ôn nhanh

- **Broadcast:** `broadcast` gửi tin, `when I receive` nhận tin.
- **Trạng thái game:** Chờ → Đang chơi → Kết thúc.
- **stop all:** dừng toàn bộ script khi Game Over.
- Nhiều sprite có thể cùng lắng nghe một tin broadcast.

---

### Chữa BTVN

#### BTVN1 — Nút Play: Em tự kiểm tra

| Em kiểm tra | Đúng khi... |
|-------------|-------------|
| Có nút Play | Sprite riêng hoặc nút rõ ràng |
| Broadcast start | Click nút → thấy `broadcast start` |
| Chưa Start đứng yên | Cờ xanh xong, chưa click Play thì chưa chơi |
| Sau Start mới chơi | `when I receive start` kích hoạt di chuyển |

**Nếu không chạy:** Kiểm tra tên tin `start` giống hệt ở `broadcast` và `when I receive`.

#### BTVN2 — 3 trạng thái: Em tự kiểm tra

| Em kiểm tra | Đúng khi... |
|-------------|-------------|
| Có 3 giai đoạn | Chờ → Chơi → Kết thúc |
| Có điểm | Biến điểm hiển thị khi chơi |
| Game Over | Có thông báo khi kết thúc |
| Chơi lại được | Bấm cờ xanh hoặc Play lại được |

---

### Chọn bài mở rộng

Em chọn **1 mức** A, B hoặc C, rồi chọn **1 trong 2 bài** của mức đó. Làm hết checklist trước khi đổi bài.

| Mức | Khi nào chọn |
|-----|--------------|
| **A1 hoặc A2** | Em luyện nút Start và broadcast |
| **B1 hoặc B2** | Em làm game nhiều màn / level |
| **C1 hoặc C2** | Em thử thách với mạng hoặc 2 người chơi |

---

### Bài A1 — Nút Start ▶️

| | Nội dung |
|---|----------|
| **Mô tả** | Em làm màn hình **chờ đẹp**: backdrop menu, nút START to, click → broadcast → game bắt đầu. |
| **Yêu cầu bắt buộc** | Backdrop menu; sprite nút START; `broadcast start`; nhân vật chờ đến khi Start |
| **Gợi ý bước** | 1. Chọn backdrop đẹp. 2. Sprite nút START ở giữa. 3. Click → broadcast. 4. Nhân vật ẩn khi chờ, hiện khi start. 5. Lưu project. |
| **Checklist** | - [ ] Có màn hình chờ<br>- [ ] Nút Start hoạt động<br>- [ ] Broadcast đúng<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm âm thanh "click" khi bấm Start |

---

### Bài A2 — Pause broadcast ⏸️

| | Nội dung |
|---|----------|
| **Mô tả** | Em thêm nút **PAUSE** vào game đang chơi: bấm Pause → `broadcast pause` → mọi sprite **dừng**; bấm Resume → `broadcast resume` → chơi tiếp. |
| **Yêu cầu bắt buộc** | Nút Start + nút Pause; `broadcast pause` và `broadcast resume`; code di chuyển nằm trong `when I receive start` và dừng khi `when I receive pause`; có biến `đang chơi` (tùy chọn) |
| **Gợi ý bước** | 1. Game đơn giản có Start. 2. Thêm sprite nút PAUSE. 3. Click Pause → `broadcast pause`. 4. Trên nhân vật: `when I receive pause` → `stop other scripts in sprite`. 5. Nút RESUME → `broadcast resume` → `broadcast start` lại hoặc tiếp tục script. 6. Lưu project. |
| **Checklist** | - [ ] Có nút Pause<br>- [ ] Pause dừng game<br>- [ ] Resume chơi tiếp được<br>- [ ] Em đã lưu project |
| **Thử thêm** | Khi Pause, backdrop đổi màu xám (`change color effect`) |

---

### Bài B1 — Game 3 màn 🎯

| | Nội dung |
|---|----------|
| **Mô tả** | Game có **3 màn** (level): thắng màn 1 → `broadcast` `màn 2` → đổi backdrop và tăng độ khó. |
| **Yêu cầu bắt buộc** | ≥ 2 backdrop; `broadcast` chuyển màn; mỗi màn khó hơn (nhanh hơn, nhiều địch hơn...) |
| **Gợi ý bước** | 1. Màn 1: bắt sao 5 lần → `broadcast màn 2`. 2. `when I receive màn 2` → đổi backdrop → tăng tốc. 3. Màn 3: thêm địch. 4. Thắng → `say` `Em thắng!` 5. Lưu project. |
| **Checklist** | - [ ] Có ít nhất 2 màn<br>- [ ] Dùng broadcast chuyển màn<br>- [ ] Màn sau khó hơn<br>- [ ] Em đã lưu project |
| **Thử thêm** | Hiển thị biến `màn hiện tại` trên Stage |

---

### Bài B2 — Level up broadcast khi đủ điểm 🆙

| | Nội dung |
|---|----------|
| **Mô tả** | Game 1 màn: khi `điểm` đạt **10** → `broadcast level up` → backdrop đổi, địch di chuyển **nhanh hơn**, điểm reset về 0 và level tăng lên 2. |
| **Yêu cầu bắt buộc** | Biến `điểm` và `level`; `if điểm >= 10` → `broadcast level up`; `when I receive level up` → đổi backdrop + tăng tốc địch + `change level by 1` + reset điểm |
| **Gợi ý bước** | 1. Biến `điểm`, `level`. 2. Game bắt sao đơn giản. 3. Trong `forever`: `if điểm >= 10` → `broadcast level up` → `set điểm to 0`. 4. `when I receive level up` → `change level by 1` → đổi backdrop → tăng tốc sao/địch. 5. `say` (join `Level ` `level` `!`). 6. Lưu project. |
| **Checklist** | - [ ] Đủ 10 điểm → level up<br>- [ ] Dùng broadcast `level up`<br>- [ ] Màn sau khó hơn<br>- [ ] Có biến level hiển thị<br>- [ ] Em đã lưu project |
| **Thử thêm** | Level 3: thêm 1 sprite địch di chuyển ngang |

---

### Bài C1 — Game có mạng ❤️

| | Nội dung |
|---|----------|
| **Mô tả** | Game điều khiển nhân vật **tránh địch**. Chạm địch → **mất 1 mạng**. Hết mạng → `broadcast game over`. |
| **Yêu cầu bắt buộc** | Biến `mạng` (bắt đầu = 3); chạm địch → `change mạng by -1`; `if mạng = 0` → `broadcast game over`; có nút Start |
| **Gợi ý bước** | 1. Biến `mạng` và `điểm`. 2. Start: `set mạng to 3`. 3. Điều khiển 4 phím. 4. Địch di chuyển. 5. Chạm địch → -1 mạng. 6. Mạng = 0 → game over. 7. Lưu project. |
| **Checklist** | - [ ] Có biến mạng<br>- [ ] Chạm địch mất mạng<br>- [ ] Hết mạng → Game Over<br>- [ ] Có nút Start<br>- [ ] Em đã lưu project |
| **Thử thêm** | Nhấp nháy nhân vật 1 giây khi mất mạng (dùng `ghost` effect) |

---

### Bài C2 — Hai người chơi 2 sprite chung điểm 👫

| | Nội dung |
|---|----------|
| **Mô tả** | **2 sprite** trên Stage — người chơi 1 dùng phím mũi tên, người chơi 2 dùng phím **W A S D**. Cả hai cùng bắt sao và **chung biến `điểm`** (For all sprites). |
| **Yêu cầu bắt buộc** | 2 sprite điều khiển khác nhau; biến `điểm` For all sprites; chạm sao → `change điểm by 1`; có nút Start; hết 30 giây → `say` tổng điểm chung |
| **Gợi ý bước** | 1. Sprite Cat: phím mũi tên. 2. Sprite Dog (hoặc nhân vật 2): W= lên, S=xuống, A=trái, D=phải. 3. Biến `điểm` — tick For all sprites. 4. Sao: chạm Cat hoặc Dog → +1 điểm. 5. `broadcast start` → đếm ngược 30 giây. 6. Lưu project. |
| **Checklist** | - [ ] 2 người điều khiển được<br>- [ ] Chung 1 biến điểm<br>- [ ] Cả hai đều bắt sao được<br>- [ ] Có giới hạn thời gian<br>- [ ] Em đã lưu project |
| **Thử thêm** | Hiển thị `say` ai bắt được sao cuối cùng |

---

# Tuần 11 — Clone 👥

---

## Buổi 21 — Học (H): Clone

### Hôm nay em học gì?

Hôm nay em học **clone** (nhân bản) — tạo **nhiều bản sao** của một sprite mà không cần thêm từng nhân vật thủ công! Em sẽ làm hiệu ứng **mưa**, **sao rơi**, **bong bóng bay** — những thứ cần rất nhiều nhân vật giống nhau! 🌧️⭐

---

### Kiến thức mới

**1. Clone là gì? 👥**

- Clone = **bản sao** của sprite gốc — giống hệt hình, âm thanh, nhưng có **vị trí riêng**.
- Sprite gốc gọi là **bản gốc**; các bản sao gọi là **clone**.
- Một sprite có thể tạo **rất nhiều** clone!

| Khối lệnh | Em dùng để làm gì? |
|-----------|-------------------|
| `create clone of` `myself` | Tạo **một bản sao** của chính sprite này |
| `when I start as a clone` | Code chạy khi **clone vừa được tạo** |
| `delete this clone` | **Xóa** clone hiện tại (không xóa bản gốc) |

**2. Quy tắc quan trọng ⚠️**

- Code trên **bản gốc** (ví dụ `when green flag clicked` → `create clone`) khác với code trên **clone** (`when I start as a clone`).
- Clone **không** chạy lại code `when green flag clicked` của bản gốc.
- Luôn `delete this clone` khi clone ra khỏi màn hình — nếu không, clone tích tụ và game **chậm dần**!

**3. Mưa / sao rơi — mẫu thuật toán 🌧️**

```
when green flag clicked
forever
  create clone of [myself]
  wait (0.3) secs

when I start as a clone
go to x: (pick random -240 to 240) y: (180)
repeat until <y position < -180>
  change y by (-5)
delete this clone
```

**4. Khối hữu ích hôm nay**

| Nhóm | Khối lệnh |
|------|-----------|
| Control | `create clone of`, `when I start as a clone`, `delete this clone` |
| Motion | `go to`, `change y by`, `change x by` |
| Operators | `pick random` |
| Events | `when` `key` `pressed` |

---

### Ví dụ mẫu

**Ví dụ: Một giọt mưa rơi**

1. Chọn sprite nhỏ (ví dụ Dot hoặc vẽ hình giọt nước).
2. Code bản gốc:
   ```
   when green flag clicked
   create clone of [myself]
   ```
3. Code clone:
   ```
   when I start as a clone
   go to x: (pick random -240 to 240) y: (180)
   repeat until <y position < -180>
     change y by (-8)
   delete this clone
   ```
4. Bấm cờ xanh — một giọt mưa rơi từ trên xuống! 🌧️

---

### TH1 — Mưa đơn giản (clone liên tục) 🌧️

#### Mô tả

Em làm hiệu ứng **mưa**: bản gốc liên tục tạo clone, mỗi clone xuất hiện ở vị trí ngẫu nhiên phía trên và **rơi xuống**, rồi tự xóa khi chạm đáy màn hình.

#### Yêu cầu

- Sprite giọt mưa (hoặc emoji 💧).
- Bản gốc: `forever` → `create clone` → `wait` ngắn.
- Clone: `go to` vị trí random trên cùng → rơi xuống → `delete this clone`.

#### Gợi ý từng bước

1. Chọn sprite **Dot** (hoặc vẽ giọt nước nhỏ) — đặt tên `Giọt mưa`.
2. Thu nhỏ sprite (kích thước khoảng 30–50%).
3. **Code bản gốc:**
   ```
   when green flag clicked
   hide
   forever
     create clone of [myself]
     wait (0.2) secs
   ```
4. **Code clone:**
   ```
   when I start as a clone
   show
   go to x: (pick random -240 to 240) y: (180)
   repeat until <y position < -180>
     change y by (-6)
   delete this clone
   ```
5. Bấm cờ xanh — em thấy mưa rơi liên tục!
6. Thử đổi `wait 0.2` thành `0.1` (mưa dày hơn) hoặc `0.5` (mưa thưa hơn).
7. **Lưu project** với tên `TH1-mua-don-gian`.

#### Checklist tự kiểm

- [ ] Bản gốc `hide` và tạo clone liên tục
- [ ] Clone xuất hiện ở vị trí random phía trên
- [ ] Clone rơi xuống (`change y by` số âm)
- [ ] Clone tự `delete this clone` khi ra khỏi màn hình
- [ ] Em đã lưu project

---

### TH2 — Clone khi nhấn phím 🎈

#### Mô tả

Em làm game: mỗi lần nhấn phím **Space**, tạo **một clone** bay lên (hoặc bắn ra) — giống bắn bong bóng hoặc pháo hoa!

#### Yêu cầu

- Nhấn Space → `create clone of myself`.
- Clone: xuất hiện tại vị trí nhân vật (hoặc giữa màn hình) → di chuyển (bay lên / bay ngang).
- Clone tự xóa khi ra khỏi màn hình hoặc sau vài giây.

#### Gợi ý từng bước

1. Chọn sprite **Balloon** hoặc **Star** — đặt tên `Bong bóng`.
2. Đặt sprite ở dưới màn hình: `go to x: 0 y: -150`.
3. **Code bản gốc:**
   ```
   when green flag clicked
   show
   go to x: (0) y: (-150)

   when [space] key pressed
   create clone of [myself]
   ```
4. **Code clone:**
   ```
   when I start as a clone
   go to x: (pick random -200 to 200) y: (-150)
   repeat until <y position > 180>
     change y by (4)
   delete this clone
   ```
5. Bấm cờ xanh, nhấn Space nhiều lần — nhiều bong bóng bay lên!
6. **Lưu project** với tên `TH2-clone-phim`.

#### Checklist tự kiểm

- [ ] Space tạo clone mới
- [ ] Mỗi clone di chuyển (bay lên hoặc sang ngang)
- [ ] Clone tự xóa khi xong
- [ ] Em đã thử nhấn Space ít nhất 5 lần
- [ ] Em đã lưu project

---

### Mẹo nhỏ 💡

- Bản gốc nên `hide` nếu em chỉ muốn thấy **clone** trên màn hình (như mưa).
- Nếu game **chậm dần**, kiểm tra em đã `delete this clone` chưa — clone không xóa sẽ tích tụ!
- `wait` giữa mỗi lần `create clone` điều chỉnh **mật độ** (mưa dày hay thưa).
- Clone **kế thừa** costume và âm thanh của bản gốc — đổi costume bản gốc thì clone cũng đổi.

---

### Câu hỏi ôn

1. Clone khác sprite gốc thế nào?
2. Khối `when I start as a clone` dùng để làm gì?
3. Tại sao phải `delete this clone`?
4. Làm sao để mưa rơi liên tục?
5. `create clone of myself` nên đặt ở bản gốc hay clone?

---

### BTVN1 — Xóa clone đúng cách 🗑️

#### Mô tả

Ở nhà, em làm hiệu ứng **nhiều hạt** rơi (mưa, tuyết, lá...) và đảm bảo mỗi clone **tự xóa** khi chạm đáy màn hình — game không bị chậm.

#### Yêu cầu

- Bản gốc tạo clone liên tục (`forever` + `wait`).
- Clone rơi từ trên xuống.
- **Bắt buộc** có `delete this clone` khi clone ra khỏi màn hình.

#### Gợi ý từng bước

1. Sprite nhỏ (Dot, Snowflake, hoặc emoji).
2. Bản gốc: hide + forever create clone + wait 0.3.
3. Clone: random x trên cùng → rơi → delete khi y < -180.
4. Chơi 1 phút — game vẫn mượt, không đơ.
5. Lưu project tên `BTVN1-xoa-clone`.

#### Checklist tự kiểm

- [ ] Clone tự xóa khi rơi hết màn hình
- [ ] Game chạy 1 phút không bị chậm
- [ ] Có ít nhất 10 clone cùng lúc trên màn hình
- [ ] Em đã lưu project

---

### BTVN2 — Sao rơi ⭐

#### Mô tả

Em làm **sao rơi** từ trên xuống. Nhân vật chính **bắt sao** (chạm clone) để +1 điểm. Sao chạm đáy thì biến mất (delete clone).

#### Yêu cầu

- Sao (clone) rơi liên tục từ trên.
- Nhân vật điều khiển 4 phím.
- Chạm sao → +1 điểm + `delete this clone` (hoặc sao tự xóa).
- Biến `điểm` hiển thị trên Stage.

#### Gợi ý từng bước

1. Sprite **Star** làm sao rơi (clone). Sprite **Cat** điều khiển.
2. Star bản gốc: hide + forever create clone.
3. Star clone: random x, rơi xuống; `if touching Cat` → `change điểm by 1` → `delete this clone`; nếu y < -180 → `delete this clone`.
4. Cat: điều khiển 4 phím; cờ xanh reset điểm.
5. Lưu project tên `BTVN2-sao-roi`.

#### Checklist tự kiểm

- [ ] Sao rơi liên tục
- [ ] Chạm sao tăng điểm
- [ ] Sao biến mất sau khi bắt hoặc chạm đáy
- [ ] Em đã lưu project

---

## Buổi 22 — Bài tập (BT): Luyện Clone 👥

### Ôn nhanh

- **Clone:** `create clone of myself` tạo bản sao.
- **when I start as a clone:** code chạy trên mỗi clone mới.
- **delete this clone:** xóa clone — luôn xóa khi không cần nữa!
- Bản gốc thường `hide`; clone `show` và di chuyển.

---

### Chữa BTVN

#### BTVN1 — Xóa clone: Em tự kiểm tra

| Em kiểm tra | Đúng khi... |
|-------------|-------------|
| Có delete | Thấy `delete this clone` trong code clone |
| Không chậm | Chơi 1 phút game vẫn mượt |
| Clone rơi | Clone xuất hiện và di chuyển |
| Bản gốc ẩn | Không thấy sprite gốc đứng yên giữa màn hình |

**Nếu game chậm:** Thêm `delete this clone` — có thể em quên xóa clone cũ.

#### BTVN2 — Sao rơi: Em tự kiểm tra

| Em kiểm tra | Đúng khi... |
|-------------|-------------|
| Sao rơi | Clone liên tục rơi từ trên |
| Bắt được | Chạm sao → điểm +1 |
| Sao biến mất | Sau khi bắt hoặc chạm đáy, sao không còn |
| Điều khiển | 4 phím mũi tên hoạt động |

---

### Chọn bài mở rộng

Em chọn **1 mức** A, B hoặc C, rồi chọn **1 trong 2 bài** của mức đó. Làm hết checklist trước khi đổi bài.

| Mức | Khi nào chọn |
|-----|--------------|
| **A1 hoặc A2** | Em luyện clone rơi xuống (mưa, tuyết) |
| **B1 hoặc B2** | Em luyện clone bay lên (bong bóng, sao) |
| **C1 hoặc C2** | Em làm game bắt đồ rơi có điểm |

---

### Bài A1 — Mưa emoji 🌧️

| | Nội dung |
|---|----------|
| **Mô tả** | Em làm **mưa emoji** (💧, ❄️, 🍂...) rơi liên tục. Đổi backdrop thành bầu trời xám cho đẹp! |
| **Yêu cầu bắt buộc** | Clone liên tục; emoji rơi từ trên; `delete this clone` khi chạm đáy; backdrop phù hợp |
| **Gợi ý bước** | 1. Sprite emoji nhỏ. 2. Bản gốc hide + forever clone + wait. 3. Clone random x, rơi, delete. 4. Backdrop bầu trời. 5. Lưu project. |
| **Checklist** | - [ ] Mưa rơi liên tục<br>- [ ] Clone tự xóa<br>- [ ] Có backdrop đẹp<br>- [ ] Em đã lưu project |
| **Thử thêm** | Random 2–3 emoji khác nhau (đổi costume khi clone bắt đầu) |

---

### Bài A2 — Tuyết rơi clone chậm ❄️

| | Nội dung |
|---|----------|
| **Mô tả** | Em làm **tuyết rơi chậm**: clone bông tuyết (❄️) rơi từ trên xuống **chậm hơn mưa** (wait 0.8 giây giữa mỗi clone, `change y by` -2). Backdrop đêm hoặc mùa đông. |
| **Yêu cầu bắt buộc** | Clone liên tục với `wait (0.8) secs`; clone rơi chậm (`change y by` -2 hoặc -3); `delete this clone` khi chạm đáy; bản gốc `hide` |
| **Gợi ý bước** | 1. Sprite ❄️ nhỏ. 2. Bản gốc hide → `forever` → `create clone of myself` → `wait (0.8) secs`. 3. Clone: random x, `go to y: 180`, rơi chậm, delete khi y < -180. 4. Backdrop Winter hoặc Night. 5. Lưu project. |
| **Checklist** | - [ ] Tuyết rơi chậm, đều<br>- [ ] Clone tự xóa<br>- [ ] Không lag sau 1 phút<br>- [ ] Em đã lưu project |
| **Thử thêm** | Random kích thước mỗi bông (`set size to (pick random 30 to 80)`) |

---

### Bài B1 — Bắn bong bóng 🎈

| | Nội dung |
|---|----------|
| **Mô tả** | Em điều khiển **súng bong bóng** ở dưới màn hình. Nhấn Space → bắn clone bong bóng bay lên. Bong bóng chạm trần thì nổ (đổi costume + delete). |
| **Yêu cầu bắt buộc** | Nhân vật di chuyển trái/phải; Space tạo clone; clone bay lên; chạm trên cùng → delete (hoặc hiệu ứng nổ) |
| **Gợi ý bước** | 1. Sprite súng ở dưới, phím trái/phải. 2. Space → create clone tại vị trí súng. 3. Clone bay lên. 4. y > 170 → start sound + delete. 5. Lưu project. |
| **Checklist** | - [ ] Súng di chuyển trái/phải<br>- [ ] Space bắn bong bóng<br>- [ ] Bong bóng bay lên và biến mất<br>- [ ] Em đã lưu project |
| **Thử thêm** | Đếm số bong bóng bắn bằng biến `số bong bóng` |

---

### Bài B2 — Bắn sao Space clone bay lên 🚀

| | Nội dung |
|---|----------|
| **Mô tả** | Em điều khiển **tàu vũ trụ** ở dưới màn hình. Nhấn **Space** → bắn **clone sao** bay lên. Sao chạm trần → `delete this clone` + âm thanh. |
| **Yêu cầu bắt buộc** | Sprite tàu di chuyển trái/phải; Space → `create clone of myself`; clone bay lên (`change y by` 8); chạm trên cùng (y > 170) → delete; bản gốc hide |
| **Gợi ý bước** | 1. Sprite Rocket ở dưới, phím trái/phải. 2. Bản gốc hide. 3. Space → create clone tại vị trí tàu. 4. `when I start as a clone`: show → `forever` → `change y by 8` → `if y > 170` → start sound + delete. 5. Lưu project. |
| **Checklist** | - [ ] Tàu di chuyển trái/phải<br>- [ ] Space bắn sao bay lên<br>- [ ] Sao biến mất khi chạm trần<br>- [ ] Em đã lưu project |
| **Thử thêm** | Biến `số sao bắn` — tăng mỗi lần Space |

---

### Bài C1 — Bắt sao rơi ⭐

| | Nội dung |
|---|----------|
| **Mô tả** | Game **bắt sao rơi** hoàn chỉnh: sao clone rơi ngẫu nhiên, nhân vật điều khiển bắt sao gom điểm trong 30 giây. Hết giờ báo điểm! |
| **Yêu cầu bắt buộc** | Clone sao rơi; điều khiển 4 phím; biến `điểm`; đếm ngược 30 giây; hết giờ `say` điểm + `stop all`; clone delete khi bắt hoặc chạm đáy |
| **Gợi ý bước** | 1. Biến `điểm` và `thời gian`. 2. Star clone rơi. 3. Cat bắt sao +1. 4. Đếm ngược 30 giây. 5. Hết giờ báo điểm. 6. Lưu project. |
| **Checklist** | - [ ] Sao rơi liên tục<br>- [ ] Bắt sao tăng điểm<br>- [ ] Có giới hạn 30 giây<br>- [ ] Hết giờ báo điểm<br>- [ ] Em đã lưu project |
| **Thử thêm** | Sao rơi nhanh dần theo thời gian (tăng tốc độ `change y`) |

---

### Bài C2 — Fruit catch nhiều loại điểm khác 🍎🍌

| | Nội dung |
|---|----------|
| **Mô tả** | Game **bắt trái cây rơi**: clone táo 🍎 (+1 điểm), chuối 🍌 (+2 điểm), dưa hấu 🍉 (+3 điểm) — mỗi loại random costume khi clone bắt đầu. Nhân vật điều khiển bắt trong 30 giây. |
| **Yêu cầu bắt buộc** | Clone trái cây rơi liên tục; random costume (≥ 2 loại); chạm → `change điểm` theo loại (`if costume = táo` → +1...); biến `điểm`; đếm ngược 30 giây; `delete this clone` khi bắt hoặc chạm đáy |
| **Gợi ý bước** | 1. Sprite trái cây có 3 costume. 2. Clone rơi + random costume. 3. Cat điều khiển 4 phím. 4. Trên Cat: `if touching Fruit` → kiểm tra costume → cộng điểm tương ứng → `delete clone` (broadcast hoặc code trên Fruit). 5. Đếm ngược 30 giây. 6. Lưu project. |
| **Checklist** | - [ ] ≥ 2 loại trái cây rơi<br>- [ ] Mỗi loại điểm khác nhau<br>- [ ] Có giới hạn 30 giây<br>- [ ] Clone tự xóa<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm trái xấu 🍄 (-1 điểm khi bắt nhầm) |

---

# Tuần 12 — My Blocks & debug 🧩

---

## Buổi 23 — Học (H): My Blocks & debug

### Hôm nay em học gì?

Hôm nay em học **My Blocks** (khối tự tạo) — gom nhiều khối lệnh thành **một khối riêng** để code gọn và dễ đọc hơn. Em cũng học cách **debug** (tìm và sửa lỗi) khi project không chạy đúng! 🧩🔧

---

### Kiến thức mới

**1. My Blocks là gì? 🧩**

- My Blocks = khối lệnh **em tự đặt tên** và tự viết bên trong.
- Giống như em gói nhiều bước thành **một hành động** có tên dễ nhớ.

*Ví dụ:* Thay vì mỗi lần viết 3 khối reset điểm + vị trí + costume, em tạo khối `reset game` — gọi một lần là xong!

**2. Cách tạo My Block**

1. Vào nhóm **My Blocks** (màu hồng).
2. Bấm **Make a Block**.
3. Gõ tên (ví dụ `reset game`, `tăng điểm`).
4. (Tùy chọn) Thêm **tham số** (số hoặc chữ em truyền vào).
5. Định nghĩa code bên trong khối `define`.
6. Dùng khối mới ở bất kỳ đâu trong project!

| Khối lệnh | Em dùng để làm gì? |
|-----------|-------------------|
| `define` `tên khối` | **Định nghĩa** — viết code bên trong My Block |
| `tên khối` (khối gọi) | **Gọi** My Block — chạy code đã định nghĩa |

**3. Ví dụ My Block hữu ích**

| Tên khối | Bên trong làm gì? |
|----------|-------------------|
| `reset game` | `set điểm to 0`, `go to` vị trí ban đầu, `switch costume` |
| `tăng điểm` | `change điểm by 1`, `start sound` Collect |
| `game over` | `say` điểm, `stop all` |

**4. Debug — Tìm và sửa lỗi 🔧**

Khi project **không chạy đúng**, em debug theo các bước:

| Bước | Em làm gì? |
|------|-----------|
| 1. Đọc lỗi | Scratch có báo đỏ không? Đọc kỹ thông báo. |
| 2. Chạy từng phần | Bấm cờ xanh, thử từng sự kiện (phím, click) riêng. |
| 3. Kiểm tra tên | Biến, broadcast, sprite — tên có **giống hệt** không? |
| 4. Kiểm tra thứ tự | `set` trước `change`? `when I receive` đã có chưa? |
| 5. Thêm `say` test | Tạm thêm `say` để xem code có chạy đến đó không. |
| 6. Hỏi bạn / thầy cô | Nếu vẫn bí, mang project đến hỏi! |

**5. Lỗi thường gặp**

| Triệu chứng | Nguyên nhân có thể |
|-------------|-------------------|
| Sprite không di chuyển | Quên `forever`; code nằm sai sprite |
| Điểm không tăng | Quên `change`; biến sai tên |
| Broadcast không hoạt động | Tên tin khác nhau ở `broadcast` và `receive` |
| Game chậm dần | Clone không `delete` |
| Nhân vật biến mất | Quên `show`; `hide` nhầm chỗ |

---

### Ví dụ mẫu

**Ví dụ: Tạo khối `reset điểm`**

1. **My Blocks** → **Make a Block** → tên `reset điểm`.
2. Scratch tạo khối `define reset điểm` — em gắn bên dưới:
   ```
   define reset điểm
   set [điểm] to (0)
   ```
3. Ở chỗ khác:
   ```
   when green flag clicked
   reset điểm
   ```
4. Gọn hơn nhiều so với lặp lại `set điểm to 0` ở nhiều nơi! 🧩

---

### TH1 — Tạo khối "reset game" 🔄

#### Mô tả

Em tạo My Block tên **`reset game`** — bên trong reset điểm về 0, đưa nhân vật về vị trí ban đầu, và đổi về costume đầu. Gọi khối này khi bấm cờ xanh.

#### Yêu cầu

- Có My Block `reset game` với ít nhất **3 khối lệnh** bên trong.
- `when green flag clicked` → gọi `reset game`.
- Biến `điểm` reset về 0.

#### Gợi ý từng bước

1. Tạo biến `điểm` (For all sprites).
2. **My Blocks** → **Make a Block** → tên `reset game`.
3. Gắn vào `define reset game`:
   ```
   define reset game
   set [điểm] to (0)
   go to x: (0) y: (0)
   switch costume to [costume1]
   ```
4. Thêm:
   ```
   when green flag clicked
   reset game
   ```
5. Thử: chơi game tăng điểm → bấm cờ xanh lại → điểm về 0, nhân vật về giữa!
6. **Lưu project** với tên `TH1-my-block-reset`.

#### Checklist tự kiểm

- [ ] Có My Block `reset game`
- [ ] Bên trong có ≥ 3 khối lệnh
- [ ] Cờ xanh gọi `reset game`
- [ ] Điểm và vị trí reset đúng
- [ ] Em đã lưu project

---

### TH2 — Tạo khối "tăng điểm" 🏆

#### Mô tả

Em tạo My Block **`tăng điểm`** — bên trong tăng biến điểm +1 và phát âm thanh. Mỗi khi chạm sao (hoặc click), em chỉ cần gọi **một khối** thay vì viết lại nhiều lần.

#### Yêu cầu

- My Block `tăng điểm`: `change điểm by 1` + `start sound`.
- Dùng khối này ít nhất **2 lần** trong project (ví dụ: chạm sao và chạm ngôi sao vàng).
- Kết hợp với `reset game` từ TH1.

#### Gợi ý từng bước

1. Tiếp tục project TH1.
2. Thêm sprite **Star**.
3. **Make a Block** → tên `tăng điểm`:
   ```
   define tăng điểm
   change [điểm] by (1)
   start sound [Collect]
   ```
4. **Code Star:**
   ```
   when green flag clicked
   go to (vị trí ngẫu nhiên)
   forever
     if <touching [Cat] ?> then
       tăng điểm
       go to x: (pick random -200 to 200) y: (pick random -150 to 150)
   ```
5. (Tùy chọn) Thêm sprite sao vàng — chạm cũng gọi `tăng điểm`.
6. Bấm cờ xanh → chạm sao → nghe tiếng + điểm tăng!
7. **Lưu project** với tên `TH2-my-block-tang-diem`.

#### Checklist tự kiểm

- [ ] Có My Block `tăng điểm`
- [ ] Gọi `tăng điểm` ít nhất 2 lần trong project
- [ ] Chạm sao → điểm +1 + có tiếng
- [ ] `reset game` vẫn hoạt động khi cờ xanh
- [ ] Em đã lưu project

---

### Mẹo nhỏ 💡

- Đặt tên My Block **bằng tiếng Việt không dấu** hoặc tiếng Anh: `reset game`, `tang diem` — dễ đọc, dễ nhớ.
- Một My Block nên làm **một việc rõ ràng** — đừng nhét quá nhiều việc không liên quan.
- Khi debug, thêm tạm `say` `đến đây rồi!` — nếu không thấy bong bóng thoại, code phía trên có vấn đề.
- **Sao chép project** trước khi sửa lớn — File → Save as a copy.

---

### Câu hỏi ôn

1. My Block dùng để làm gì?
2. Khối `define` và khối gọi My Block khác nhau thế nào?
3. Em tạo My Block mới ở đâu trong Scratch?
4. Khi game không chạy, em debug bằng cách nào? (Nêu 3 bước)
5. Tại sao nên gom code lặp lại thành My Block?

---

### BTVN1 — Gom code thành My Block 🧩

#### Mô tả

Ở nhà, em mở project cũ (game bắt sao hoặc game tuần trước) và **refactor** (gom code): tạo ít nhất **2 My Blocks** (ví dụ `reset game` và `tăng điểm`), thay thế code lặp lại.

#### Yêu cầu

- Ít nhất **2 My Blocks** có tên rõ ràng.
- Mỗi My Block có ≥ 2 khối lệnh bên trong.
- Game vẫn chạy **giống như trước** khi refactor.

#### Gợi ý từng bước

1. Mở project game cũ.
2. Tìm đoạn code **lặp lại** nhiều lần (reset, tăng điểm, game over...).
3. Tạo My Block cho mỗi đoạn.
4. Thay code cũ bằng khối gọi My Block.
5. Chạy thử — mọi thứ vẫn hoạt động?
6. Lưu project tên `BTVN1-refactor-my-block`.

#### Checklist tự kiểm

- [ ] Có ≥ 2 My Blocks
- [ ] Code gọn hơn trước
- [ ] Game chạy đúng như cũ
- [ ] Em đã lưu project

---

### BTVN2 — Sửa 1 project lỗi mẫu 🔧

#### Mô tả

Thầy/cô gửi em **1 project Scratch bị lỗi** (hoặc em tải project mẫu `BT-loi-1.sb3`). Em đọc mô tả lỗi, **tìm nguyên nhân** và **sửa** cho game chạy đúng.

#### Project lỗi mẫu — Mô tả lỗi cho em đọc

**Game "Bắt sao" bị 3 lỗi:**

| Lỗi | Triệu chứng | Gợi ý sửa |
|-----|-------------|-----------|
| **Lỗi 1** | Bấm cờ xanh, điểm **không về 0** — vẫn giữ điểm cũ | Thiếu `set điểm to 0` khi `when green flag clicked` |
| **Lỗi 2** | Nhấn phím mũi tên, Cat **không di chuyển** | Code di chuyển nằm **ngoài** `forever`, hoặc thiếu `forever` |
| **Lỗi 3** | Chạm sao, điểm **không tăng** | Tên biến sai: code dùng `score` nhưng biến tên `điểm` (hoặc ngược lại) |

#### Yêu cầu

- Em sửa **cả 3 lỗi** trên.
- Sau khi sửa: cờ xanh reset điểm; phím di chuyển OK; chạm sao +1 điểm.
- Viết ra giấy (hoặc comment Scratch): em đã sửa gì ở mỗi lỗi.

#### Gợi ý từng bước

1. Mở project lỗi.
2. Đọc bảng lỗi ở trên.
3. **Lỗi 1:** Tìm `when green flag clicked` → thêm `set [điểm] to (0)`.
4. **Lỗi 2:** Tìm code di chuyển Cat → bọc trong `forever`.
5. **Lỗi 3:** Kiểm tra tên biến trong `change` — phải khớp với biến đã tạo.
6. Chạy thử từng lỗi sau khi sửa.
7. Lưu project tên `BTVN2-sua-loi-1`.

#### Checklist tự kiểm

- [ ] Cờ xanh → điểm = 0
- [ ] Phím mũi tên di chuyển Cat
- [ ] Chạm sao → điểm +1
- [ ] Em ghi chú đã sửa gì
- [ ] Em đã lưu project

---

## Buổi 24 — Bài tập (BT): Game mini hoàn chỉnh 🎮

### Ôn nhanh

- **My Blocks:** gom code lặp → gọn, dễ đọc.
- **define** = viết bên trong; khối gọi = dùng ở nơi khác.
- **Debug:** đọc lỗi → chạy từng phần → kiểm tra tên biến/broadcast → thêm `say` test.
- Game hay thường có: Start, điểm, Game Over, reset.

---

### Chữa BTVN

#### BTVN1 — Refactor My Block: Em tự kiểm tra

| Em kiểm tra | Đúng khi... |
|-------------|-------------|
| Có ≥ 2 My Blocks | Thấy ít nhất 2 khối tự tạo trong My Blocks |
| Code gọn hơn | Ít khối lặp lại hơn project cũ |
| Game vẫn chạy | Chơi thử — mọi tính năng OK |
| Tên rõ ràng | Tên khối mô tả đúng việc làm |

**Nếu game hỏng sau refactor:** Kiểm tra `define` còn đủ khối bên trong không; kiểm tra chỗ gọi My Block đúng sprite chưa.

#### BTVN2 — Sửa lỗi mẫu: Em tự kiểm tra

| Em kiểm tra | Đúng khi... |
|-------------|-------------|
| Lỗi 1 sửa | Cờ xanh → điểm = 0 |
| Lỗi 2 sửa | Phím mũi tên di chuyển được |
| Lỗi 3 sửa | Chạm sao → điểm tăng |
| Có ghi chú | Em biết mình sửa gì |

---

### Chọn bài mở rộng

Em chọn **1 mức** A, B hoặc C, rồi chọn **1 trong 2 bài** của mức đó. Làm hết checklist trước khi đổi bài.

| Mức | Khi nào chọn |
|-----|--------------|
| **A1 hoặc A2** | Em luyện My Blocks gom code |
| **B1 hoặc B2** | Em luyện debug / sửa lỗi |
| **C1 hoặc C2** | Em làm hoặc remix game hoàn chỉnh |

---

### Bài A1 — Refactor My Block 🧩

| | Nội dung |
|---|----------|
| **Mô tả** | Em refactor project game (bắt sao, tránh địch...) thành **3 My Blocks**: `reset game`, `tăng điểm`, `game over`. |
| **Yêu cầu bắt buộc** | 3 My Blocks; mỗi khối ≥ 2 lệnh bên trong; game chạy đúng sau refactor |
| **Gợi ý bước** | 1. Mở project game. 2. Tạo `reset game`, `tăng điểm`, `game over`. 3. Thay code cũ. 4. Chạy thử toàn bộ. 5. Lưu project. |
| **Checklist** | - [ ] 3 My Blocks<br>- [ ] Game chạy đúng<br>- [ ] Code gọn hơn<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm tham số cho `tăng điểm` (truyền số điểm cộng thêm) |

---

### Bài A2 — My Block gameOver 🛑

| | Nội dung |
|---|----------|
| **Mô tả** | Em tạo My Block **`game over`** — bên trong: `say` thông báo, `broadcast game over`, `stop all`. Gọi khối này khi hết thời gian hoặc hết mạng. |
| **Yêu cầu bắt buộc** | My Block `game over` với ≥ 3 khối bên trong (`say` + `broadcast game over` + `stop all`); gọi ít nhất **2 lần** trong project (ví dụ: hết giờ và hết mạng); kết hợp với `reset game` |
| **Gợi ý bước** | 1. Mở project game có điểm + thời gian. 2. **Make a Block** → `game over`. 3. Bên trong: `say` `Game Over!` → `broadcast game over` → `stop all`. 4. Hết thời gian → gọi `game over`. 5. (Tùy chọn) Hết mạng → cũng gọi `game over`. 6. Lưu project. |
| **Checklist** | - [ ] Có My Block `game over`<br>- [ ] Bên trong có say + broadcast + stop all<br>- [ ] Gọi ≥ 2 lần trong project<br>- [ ] Game dừng đúng khi gọi<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm `start sound` Explosion khi game over |

---

### Bài B1 — Sửa 3 project lỗi 🔧

| | Nội dung |
|---|----------|
| **Mô tả** | Em sửa **3 project** bị lỗi. Mỗi project có bảng mô tả lỗi — em đọc, tìm và sửa. |
| **Yêu cầu bắt buộc** | Sửa xong cả 3 project; mỗi project chạy đúng theo mô tả sau khi sửa |

**Project lỗi 1 — "Bắt sao"** (giống BTVN2)

| Lỗi | Triệu chứng | Gợi ý sửa |
|-----|-------------|-----------|
| Lỗi 1 | Điểm không reset | Thêm `set điểm to 0` khi cờ xanh |
| Lỗi 2 | Cat không di chuyển | Bọc code di chuyển trong `forever` |
| Lỗi 3 | Chạm sao không +điểm | Sửa tên biến cho khớp |

**Project lỗi 2 — "Nút Start"**

| Lỗi | Triệu chứng | Gợi ý sửa |
|-----|-------------|-----------|
| Lỗi 1 | Click nút Play, game không bắt đầu | Tên broadcast sai: `start` vs `Start` — phải giống hệt |
| Lỗi 2 | Game bắt đầu ngay khi cờ xanh (không cần Play) | Code di chuyển nằm trong `when green flag` thay vì `when I receive start` |
| Lỗi 3 | Game Over không dừng | Thiếu `stop all` sau `when I receive game over` |

**Project lỗi 3 — "Mưa clone"**

| Lỗi | Triệu chứng | Gợi ý sửa |
|-----|-------------|-----------|
| Lỗi 1 | Không thấy mưa | Code rơi nằm trên bản gốc thay vì `when I start as a clone` |
| Lỗi 2 | Game chậm dần sau 30 giây | Thiếu `delete this clone` |
| Lỗi 3 | Mưa rơi từ giữa màn hình | Clone thiếu `go to y: 180` (trên cùng) |

| **Gợi ý bước** | 1. Mở project 1 → đọc bảng lỗi → sửa → chạy thử. 2. Lặp lại project 2 và 3. 3. Ghi chú mỗi lỗi em sửa gì. 4. Lưu cả 3 project. |
| **Checklist** | - [ ] Project 1 chạy đúng<br>- [ ] Project 2 chạy đúng<br>- [ ] Project 3 chạy đúng<br>- [ ] Em có ghi chú sửa lỗi<br>- [ ] Em đã lưu cả 3 project |
| **Thử thêm** | Tự tạo 1 lỗi cố ý cho bạn sửa |

---

### Bài B2 — Sửa project lỗi #4 🔧

| | Nội dung |
|---|----------|
| **Mô tả** | Em sửa **1 project** bị lỗi (thầy/cô gửi `BT-loi-4.sb3`). Đọc bảng lỗi, tìm nguyên nhân và sửa cho game chạy đúng. |
| **Yêu cầu bắt buộc** | Sửa xong cả 3 lỗi; game có Start, điểm, và My Block hoạt động đúng sau khi sửa |

**Project lỗi 4 — "Game bắt táo"**

| Lỗi | Triệu chứng | Gợi ý sửa |
|-----|-------------|-----------|
| **Lỗi 1** | Bấm nút Start, game **không bắt đầu** — nhân vật đứng yên | Tên broadcast sai: code dùng `Start` nhưng nút gửi `start` — phải **giống hệt** |
| **Lỗi 2** | Chạm táo, điểm **không tăng** | My Block `tăng điểm` có `define` nhưng code chạm táo **không gọi** khối — thiếu khối gọi `tăng điểm` |
| **Lỗi 3** | Hết 30 giây, game **không dừng** — vẫn chơi tiếp | My Block `game over` thiếu `stop all` bên trong `define` |

| **Gợi ý bước** | 1. Mở project lỗi 4. 2. Đọc bảng lỗi. 3. **Lỗi 1:** So sánh tên tin ở `broadcast` và `when I receive`. 4. **Lỗi 2:** Tìm code `touching` táo → thêm gọi `tăng điểm`. 5. **Lỗi 3:** Mở `define game over` → thêm `stop all`. 6. Chạy thử toàn bộ. 7. Ghi chú em sửa gì. 8. Lưu project. |
| **Checklist** | - [ ] Start hoạt động<br>- [ ] Chạm táo tăng điểm<br>- [ ] Hết giờ game dừng<br>- [ ] Em có ghi chú sửa lỗi<br>- [ ] Em đã lưu project |
| **Thử thêm** | Tự tạo thêm 1 lỗi nhỏ cho bạn sửa |

---

### Bài C1 — Game mini hoàn chỉnh 🎮

| | Nội dung |
|---|----------|
| **Mô tả** | Em làm **một game mini hoàn chỉnh** kết hợp tất cả kỹ năng tháng 3: biến, broadcast, clone (hoặc nhiều sprite), My Blocks, có Start và Game Over. |
| **Yêu cầu bắt buộc** | Nút Start (`broadcast`); biến `điểm`; điều khiển nhân vật; ≥ 1 My Block; Game Over (`broadcast` + `stop all`); có âm thanh |
| **Gợi ý bước** | 1. Chọn thể loại: bắt sao rơi / tránh địch / bắn bong bóng. 2. Vẽ storyboard 3 bước: Start → Chơi → Game Over. 3. Code nút Start + reset. 4. Code gameplay chính. 5. Tạo My Block `reset game` và `game over`. 6. Thêm âm thanh. 7. Chơi thử 3 lần, sửa bug. 8. Lưu project. |
| **Checklist** | - [ ] Có nút Start<br>- [ ] Có biến điểm<br>- [ ] Có ≥ 1 My Block<br>- [ ] Có Game Over<br>- [ ] Có âm thanh<br>- [ ] Em chơi thử 3 lần không lỗi<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm biến `mạng` hoặc đếm ngược thời gian; thêm màn thắng khi đủ điểm |

---

### Bài C2 — Remix game tuần 22 🔄

| | Nội dung |
|---|----------|
| **Mô tả** | Em **remix** (cải tiến) project game **tuần 22** (bắt sao rơi, fruit catch, hoặc bài clone em thích) — thêm **nút Start**, **biến điểm**, và **≥ 2 My Blocks** (`reset game`, `game over` hoặc `tăng điểm`). |
| **Yêu cầu bắt buộc** | Mở project tuần 22 (hoặc tạo lại); nút Start + `broadcast start`; biến `điểm` hiển thị Stage; ≥ 2 My Blocks; Game Over khi hết thời gian (`broadcast` + `stop all`); gameplay clone vẫn hoạt động |
| **Gợi ý bước** | 1. Mở project buổi 22 (File → Save as a copy). 2. Thêm sprite nút START → `broadcast start`. 3. Code gameplay chuyển vào `when I receive start`. 4. Tạo `reset game` (cờ xanh) và `game over` (hết giờ). 5. Gom code tăng điểm thành `tăng điểm`. 6. Chơi thử 3 lần. 7. Lưu project tên `Remix-tuan-22`. |
| **Checklist** | - [ ] Có nút Start<br>- [ ] Có biến điểm<br>- [ ] Có ≥ 2 My Blocks<br>- [ ] Clone vẫn rơi/bắt OK<br>- [ ] Có Game Over<br>- [ ] Em chơi thử 3 lần không lỗi<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm âm thanh khác nhau cho mỗi loại điểm (fruit catch) |

---

## Em đã hoàn thành tháng 3! 🎉

Sau 8 buổi (tuần 9–12), em đã biết:

- 🎲 Dùng **Operators** và **pick random**, quản lý **nhiều biến**
- 📡 Dùng **broadcast** và **trạng thái game** (chờ → chơi → kết thúc)
- 👥 Tạo **clone** cho mưa, sao rơi, bong bóng — và **xóa clone** đúng cách
- 🧩 Tạo **My Blocks** để code gọn, và **debug** khi project bị lỗi

Tuần sau em bước vào **Dự án game** — tự thiết kế game theo ý thích! Tiếp tục trong file [thang-4-du-an-game.md](thang-4-du-an-game.md) nhé! 🚀
