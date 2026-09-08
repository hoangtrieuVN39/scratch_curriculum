# Logic nâng cao — Tuần 9 đến 12 🎲📡👥🧩

> Chào em! Đây là phần học **tháng 3** của khóa Scratch. Em sẽ học **toán tử & số ngẫu nhiên**, **broadcast** (gửi tin nhắn giữa các sprite), **clone** (nhân bản nhân vật) và **My Blocks** (tự tạo khối lệnh) — để game của em gọn code hơn và chơi hay hơn!

**Tuần 9–12** | **Buổi 17–24** | Dành cho em **7–10 tuổi**

---

# Tuần 9 — Biến & toán tử 🎲

---

## Buổi 17 — Học (H): Biến & toán tử

### Hôm nay em học gì?

Hôm nay em học nhóm khối **Operators** (Toán tử) — đặc biệt là `pick random` để tạo **số ngẫu nhiên** (như tung xúc xắc!). Em cũng dùng **nhiều biến cùng lúc** trong một game: ví dụ vừa đếm **điểm**, vừa đếm **thời gian**. Đây là bước quan trọng để em làm game có luật chơi phong phú hơn! 🎯⏱️

---

### 🎬 Khởi động (10 phút)

**Trò chơi "Đoán số bí mật"**

- Giáo viên nghĩ trong đầu một số bí mật từ 1 đến 6 (không nói ra). Cả lớp lần lượt hô một số từ 1–6, giáo viên chỉ trả lời "Lớn hơn!" hoặc "Nhỏ hơn!" cho đến khi có bạn đoán trúng.
- Hỏi cả lớp: "Số bí mật của cô/thầy có phải lúc nào cũng giống nhau không? Nếu chơi lại, số bí mật có đổi không?" → dẫn vào khái niệm máy tính cũng có thể tự "bốc" một số ngẫu nhiên mỗi lần chơi, giống như tung xúc xắc.
- Hỏi nhanh: "Trong Scratch, mình có khối nào giúp máy tính tự chọn số ngẫu nhiên không?" (gợi mở `pick random`).

---

### Kiến thức mới (20 phút)

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

**Vì sao quan trọng?** Nếu game nào cũng chỉ diễn ra y hệt mỗi lần chơi thì rất nhanh chán — `pick random` giúp mỗi lần chơi một khác (vị trí quái vật, số xúc xắc, câu hỏi đố...), giống như xáo bài trước mỗi ván. Nhiều biến cùng lúc giúp game "nhớ" song song nhiều thứ (vừa điểm vừa thời gian) — đây chính là nền tảng để tuần sau em học broadcast, phối hợp nhiều sprite với nhau.

---

### Ví dụ mẫu 1 — Tung xúc xắc khi bấm phím Space

1. Tạo biến `số xúc xắc` → tick hiển thị trên Stage.
2. Kéo `when` `space` `key pressed`.
3. Gắn `set` `số xúc xắc` `to` `(pick random 1 to 6)`.
4. Gắn `say` (join `Em tung được: ` `số xúc xắc`) `for` `2` `secs`.
5. Bấm **Space** nhiều lần — mỗi lần số thay đổi! 🎲

### Ví dụ mẫu 2 — So sánh `set` và `change`

1. Tạo biến `điểm`.
2. `set [điểm] to (0)` → điểm hiện 0 trên Stage, dù trước đó điểm là bao nhiêu.
3. Bấm khối `change [điểm] by (1)` liên tiếp 3 lần → điểm tăng dần 1 → 2 → 3.
4. Bấm lại `set [điểm] to (0)` → điểm quay về 0 ngay lập tức, bất kể trước đó là bao nhiêu.

*(Cùng là thao tác với biến, nhưng `set` là "đặt lại từ đầu", còn `change` là "cộng/trừ thêm vào giá trị cũ" — chọn đúng khối tùy vào việc em muốn reset hay cộng dồn!)*

### Em đoán xem?

Nếu biến `điểm` đang là 5, và em gắn liên tiếp **2 khối** `change điểm by 1`, em đoán điểm sẽ là bao nhiêu? Còn nếu thay bằng **1 khối** `set điểm to 1` thì sao? Đoán trước, rồi thử trên Scratch để kiểm tra!

---

### Thực hành 1 (TH1) — (15 phút) "Hiển thị xúc xắc ngẫu nhiên 🎲"

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

### 🤸 Giải lao vận động (5 phút)

**Trò chơi "Xúc xắc người"**

- Cả lớp đứng thành vòng tròn. Giáo viên hô "Pick random 1 to 6!" rồi hô to một con số bất kỳ từ 1–6.
- Cả lớp phải nhảy đúng số cái tương ứng với con số đó (ví dụ số 4 thì nhảy 4 cái tại chỗ) càng nhanh càng tốt.
- Mời 1 em lên làm "người hô số ngẫu nhiên" thay giáo viên, để cảm nhận rõ mình đang đóng vai `pick random`.
- Chơi 3–4 vòng, tăng tốc độ hô số dần để tạo không khí vui nhộn, giúp em nhớ khoảng số 1–6 của xúc xắc.

---

### Thực hành 2 (TH2) — (15 phút) "Hai biến: điểm + thời gian ⏱️🏆"

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

### 🤝 Thử thách nhóm/sáng tạo (10–15 phút)

**"Cùng thi đấu 30 giây"**

- Ghép cặp 2 bạn, mỗi bạn dùng project TH2 của mình. Cả hai cùng bấm cờ xanh một lượt, thi xem trong 30 giây ai click được nhiều điểm hơn.
- Hết giờ, hai bạn so sánh điểm và chia sẻ mẹo: "Làm sao bạn click nhanh vậy?"
- Khuyến khích: nếu còn thời gian, đổi mức thời gian (ví dụ rút xuống 15 giây) và thi lại vòng 2 xem điểm có đổi nhiều không.
- Giáo viên mời 1–2 cặp có điểm cao nhất chia sẻ chiến thuật trước lớp.

---

### Mẹo nhỏ 💡

- `pick random` **không** cần biến — nhưng lưu vào biến thì em đọc lại và so sánh dễ hơn.
- Khi có nhiều biến, viết ra giấy: **biến nào reset lúc nào**, **biến nào thay đổi khi nào**.
- Đếm ngược: dùng `repeat until thời gian = 0` hoặc `forever` + `if thời gian = 0 then stop all`.
- `join` giúp nối chữ với số: `join [Điểm: ] [điểm]` — kéo biến vào ô tròn!
- Nếu số hiện trên Stage không đổi, kiểm tra khối `set`/`change` có đang nằm **đúng bên trong** sự kiện (cờ xanh, phím, click) hay bị rớt ra ngoài.

---

### 🎉 Tổng kết & Ôn tập trò chơi (10 phút)

**"Trạm tiếp sức trả lời"** — chia lớp 2 đội, mỗi đội cử đại diện trả lời nhanh 1 câu rồi đổi người:

1. `pick random 1 to 6` dùng để làm gì? Cho ví dụ ngoài xúc xắc.
2. Một game có thể có mấy biến? Kể tên 3 biến em có thể dùng.
3. `set` và `change` khác nhau thế nào? Khi nào dùng từng loại?
4. Khối `join` dùng để làm gì?
5. Tại sao nên reset biến khi bấm cờ xanh?

Đội trả lời đúng nhanh nhất mỗi câu được 1 điểm — tổng kết đội thắng cuối giờ.

- Mời 1–2 em chia sẻ project TH2 "điểm + thời gian" của mình.
- Hẹn gặp lại ở buổi Bài tập tuần này để làm Luyện tập 1, 2 và bài mở rộng!

---

### 👩‍🏫 Ghi chú cho giáo viên

**Kịch bản demo nhanh:**
- Trước Kiến thức mới, mở Scratch, kéo khối `pick random 1 to 6` ra và bấm thử nhiều lần liên tiếp ngay trên máy chiếu để cả lớp thấy số đổi ngẫu nhiên bằng mắt.
- Demo trực tiếp Ví dụ mẫu 2 (so sánh `set` và `change`) — bấm `change điểm by 1` vài lần rồi bấm `set điểm to 0` để học sinh thấy rõ khác biệt.

**Lỗi thường gặp (ngoài phần Mẹo nhỏ):**
- Học sinh nhầm `pick random 1 to 6` với việc tự gõ số cố định — nhắc kéo đúng khối Operators màu xanh lá, không gõ tay số cứng.
- Quên tick hiển thị biến trên Stage nên không thấy số thay đổi — nhắc tick vào ô vuông cạnh tên biến trong Variables.
- Ở TH2, một số em quên `set thời gian to 30` ở cờ xanh nên chơi lại thì thời gian bị cộng dồn từ lần trước — nhắc đặt `set` ngay đầu chuỗi cờ xanh.

**Quản lý lớp học:**
- Khởi động "Đoán số bí mật": giới hạn mỗi bạn chỉ đoán 1 lần/lượt để tất cả có cơ hội tham gia.
- Giải lao vận động: nhắc học sinh nhảy tại chỗ, không xô đẩy bạn bên cạnh trong vòng tròn.
- Thử thách nhóm: để ý các cặp có điểm chênh lệch lớn — động viên thay vì so sánh hơn thua.

---

## Buổi 18 — Bài tập (BT): Luyện Operators 🎲

### 🎬 Khởi động ôn tập (10 phút)

**"Đúng hay Sai?"** — Giáo viên đọc từng câu, học sinh giơ ngón cái lên (Đúng) hoặc xuống (Sai):
1. "`pick random 1 to 6` luôn cho ra cùng một số mỗi lần." (Sai — số ngẫu nhiên, có thể khác nhau)
2. "`set điểm to 0` làm điểm cộng thêm 1." (Sai — `set` là đặt lại giá trị mới)
3. "`change thời gian by -1` làm biến thời gian giảm 1." (Đúng)
4. "Một game chỉ được có tối đa 1 biến." (Sai — có thể có nhiều biến)
5. "`join` giúp nối chữ và số lại với nhau để hiển thị." (Đúng)

### Ôn nhanh

Nhớ lại buổi trước nhé em:

- **Operators:** `pick random`, `join`, so sánh `>` `<` `=`
- **Nhiều biến:** mỗi biến một việc — `điểm`, `thời gian`...
- **set** = gán giá trị mới; **change** = cộng/trừ thêm
- Luôn **reset biến** khi bấm cờ xanh!

---

### ✍️ Luyện tập 1, 2 (LT1/LT2) (15–20 phút)

Đầu buổi, em làm tại lớp có hướng dẫn hai bài luyện tập ngắn, nối tiếp buổi Học tuần trước — không phải chữa bài tập về nhà, mà là luyện lại ngay tại lớp có giáo viên hỗ trợ.

*Gợi ý:* Em có thể đổi máy với bạn bên cạnh trong 2 phút để cùng kiểm tra checklist của nhau — nếu phát hiện thiếu bước nào, nhắc bạn bổ sung.

#### Luyện tập 1 (LT1) — "Xúc xắc khi nhấn phím 🎲"

**Mô tả:** Em luyện làm xúc xắc: mỗi lần nhấn phím **Space** (hoặc phím em chọn) thì tung xúc xắc — hiện số mới và sprite phản ứng, làm ngay tại lớp có giáo viên hỗ trợ.

**Yêu cầu:**
- Biến `số xúc xắc` hiển thị trên Stage.
- Nhấn **Space** → `set` số ngẫu nhiên 1–6 → `say` kết quả.
- Nhấn nhiều lần liên tiếp vẫn hoạt động (không cần bấm cờ xanh lại).

**Gợi ý từng bước:**
1. Tạo biến `số xúc xắc`.
2. `when green flag clicked` → `set số xúc xắc to 0` (hoặc 1).
3. `when space key pressed`:
   - `set số xúc xắc to (pick random 1 to 6)`
   - `say (join [🎲 ] (số xúc xắc)) for (1.5) secs`
   - (Tùy chọn) `start sound` Pop
4. Thử Space 10 lần.
5. Lưu project tên `LT1-xuc-xac-phim`.

**Checklist tự kiểm:**
- [ ] Space tung được xúc xắc
- [ ] Số hiện trên Stage và trong `say`
- [ ] Tung nhiều lần không bị lỗi
- [ ] Em đã lưu project

| Em kiểm tra | Đúng khi... |
|-------------|-------------|
| Phím Space | Mỗi lần Space có số mới 1–6 |
| Hiển thị | Biến trên Stage đổi theo |
| Phản hồi | Có `say` hoặc âm thanh |
| Lặp lại | Space 5 lần liên tiếp OK, không cần cờ xanh |

**Nếu chưa đúng:** Kiểm tra khối `when space key pressed` (không phải `when green flag`); kiểm tra `pick random 1 to 6` nằm trong `set`.

#### Luyện tập 2 (LT2) — "Đếm ngược thời gian ⏳"

**Mô tả:** Em luyện làm đồng hồ **đếm ngược**: bắt đầu từ 10 (hoặc 20), mỗi giây giảm 1, về 0 thì sprite nói "Hết giờ!" và dừng — làm ngay tại lớp, có khó khăn gì cứ hỏi giáo viên.

**Yêu cầu:**
- Biến `thời gian` hiển thị trên Stage.
- Cờ xanh: `set thời gian to 10` (hoặc 20).
- Mỗi giây `change thời gian by -1`.
- Về 0 → `say` `Hết giờ!` → `stop all`.

**Gợi ý từng bước:**
1. Tạo biến `thời gian`.
2. `when green flag clicked` → `set thời gian to 10`.
3. `repeat until thời gian = 0`:
   - `wait 1 secs`
   - `change thời gian by -1`
4. `say` `⏰ Hết giờ!` `for` `2` `secs` → `stop all`.
5. Lưu project tên `LT2-dem-nguoc`.

**Checklist tự kiểm:**
- [ ] Thời gian đếm 10 → 9 → ... → 0
- [ ] Mỗi giây giảm đúng 1
- [ ] Về 0 có thông báo và dừng
- [ ] Em đã lưu project

| Em kiểm tra | Đúng khi... |
|-------------|-------------|
| Bắt đầu | Cờ xanh → thời gian = 10 (hoặc số em chọn) |
| Đếm ngược | Mỗi giây giảm 1 |
| Kết thúc | Về 0 → `say` Hết giờ → dừng |
| Không âm | Thời gian không xuống -1, -2... |

**Nếu đếm quá nhanh/chậm:** Kiểm tra có `wait 1 secs` trong vòng lặp chưa.

---

### 🎯 Giới thiệu bài mở rộng (10 phút)

Giáo viên demo nhanh **1 ví dụ mẫu** (ví dụ bài A1 "Xúc xắc") trên máy chiếu — chỉ rõ cách thêm costume/âm thanh khi tung, trước khi học sinh tự chọn mức bài cho mình.

Em chọn **1 mức** A, B hoặc C, rồi chọn **1 trong 2 bài** của mức đó. Làm hết checklist trước khi đổi bài.

| Mức | Khi nào chọn |
|-----|--------------|
| **A1 hoặc A2** | Em luyện `pick random` và biến (xúc xắc, đồng xu) |
| **B1 hoặc B2** | Em luyện `ask` + so sánh số |
| **C1 hoặc C2** | Em làm game gom điểm có giới hạn thời gian |

---

### ✍️ Làm bài mở rộng (30–35 phút)

#### Bài A1 — Xúc xắc 🎲

| | Nội dung |
|---|----------|
| **Mô tả** | Lớp học sắp tổ chức hội chợ trò chơi — em được giao nhiệm vụ làm gian hàng "xúc xắc may mắn"! Em làm xúc xắc **đẹp hơn**: có costume hoặc emoji đổi theo số (1–6), tung bằng Space, có âm thanh. |
| **Yêu cầu bắt buộc** | Biến `số xúc xắc`; Space tung random 1–6; `say` kết quả; ≥ 1 âm thanh khi tung |
| **Gợi ý bước** | 1. Biến `số xúc xắc`. 2. Space → set random → say → start sound. 3. (Tùy chọn) `if số xúc xắc = 6` → say `May mắn!`. 4. Lưu project. |
| **Checklist** | - [ ] Space tung được<br>- [ ] Số 1–6<br>- [ ] Có âm thanh<br>- [ ] Em đã lưu project |
| **Thử thêm** | Đếm số lần tung ra 6 bằng biến `lần may mắn`, và khi đạt 3 lần may mắn liên tiếp thì sprite ăn mừng bằng hiệu ứng đổi màu (`change color effect`) + âm thanh chiến thắng riêng. |

---

#### Bài A2 — Tung đồng xu Heads/Tails 🪙

| | Nội dung |
|---|----------|
| **Mô tả** | Ở gian hàng bên cạnh, bạn em làm trò "tung đồng xu đoán may rủi". Em làm **tung đồng xu**: mỗi lần bấm Space, random **Heads** (Ngửa) hoặc **Tails** (Sấp). Sprite `say` kết quả bằng tiếng Việt hoặc tiếng Anh. |
| **Yêu cầu bắt buộc** | Biến `kết quả` hoặc `đồng xu`; Space → random 1 hoặc 2; `if` hiển thị Ngửa/Sấp; có `say` hoặc đổi costume |
| **Gợi ý bước** | 1. Biến `đồng xu`. 2. Space → `set đồng xu to (pick random 1 to 2)`. 3. `if đồng xu = 1` → `say` `Ngửa (Heads)!` 4. `else` → `say` `Sấp (Tails)!` 5. (Tùy chọn) 2 costume cho 2 mặt đồng xu. 6. Lưu project. |
| **Checklist** | - [ ] Space tung được<br>- [ ] Chỉ có Ngửa hoặc Sấp<br>- [ ] Có phản hồi rõ ràng<br>- [ ] Em đã lưu project |
| **Thử thêm** | Biến `số lần ngửa` — đếm mỗi khi ra Heads, và thêm biến `tổng lượt tung` để cuối cùng `say` tỉ lệ ra Heads (ví dụ "Ngửa 6/10 lần") giúp em thấy random không phải lúc nào cũng chia đều 50/50. |

---

#### Bài B1 — Đoán số 🔮

| | Nội dung |
|---|----------|
| **Mô tả** | Em trở thành "nhà tiên tri nhỏ" của lớp — thử thách bạn bè đoán đúng con số bí mật! Máy **bốc số bí mật** từ 1 đến 10. Em dùng `ask` để đoán — đúng thì thắng, sai thì gợi ý "lớn hơn" hoặc "nhỏ hơn". |
| **Yêu cầu bắt buộc** | Biến `số bí mật`; cờ xanh bốc random 1–10; `ask` đoán; `if` so sánh `answer` với `số bí mật`; có `else` gợi ý |
| **Gợi ý bước** | 1. Biến `số bí mật`. 2. Cờ xanh: `set số bí mật to (pick random 1 to 10)`. 3. `ask` `Đoán số từ 1 đến 10?` 4. `if answer = số bí mật` → say `Đúng!` 5. `else if answer < số bí mật` → say `Thử số lớn hơn!` 6. `else` → say `Thử số nhỏ hơn!` 7. Lưu project. |
| **Checklist** | - [ ] Có số bí mật random<br>- [ ] Có ask đoán<br>- [ ] Đúng/sai có phản hồi khác nhau<br>- [ ] Em đã lưu project |
| **Thử thêm** | Biến `lượt đoán` — đoán tối đa 5 lần, hết 5 lần mà chưa đúng thì sprite tự tiết lộ đáp án và mời chơi lại; nếu đoán đúng trong ít lượt (≤ 3) thì hiện thêm lời khen đặc biệt "Siêu trí tuệ!". |

---

#### Bài B2 — Đoán cao/thấp 2 số random 📊

| | Nội dung |
|---|----------|
| **Mô tả** | Hai đội chơi mini-game so tài: máy bốc **2 số ngẫu nhiên** từ 1 đến 10, đại diện mỗi đội đoán xem số nào **lớn hơn**. Em dùng `ask` đoán — đúng thì thắng, sai thì sprite nói số nào lớn hơn. |
| **Yêu cầu bắt buộc** | Biến `số A` và `số B`; cờ xanh bốc 2 số random; `ask` `Số nào lớn hơn? (A hay B)`; `if` so sánh `answer` với số lớn hơn; có `else` báo đáp án đúng |
| **Gợi ý bước** | 1. Biến `số A`, `số B`. 2. Cờ xanh: set random cho cả hai. 3. `say` (join `A = ` `số A`) rồi `say` (join `B = ` `số B`). 4. `ask` đoán A hay B lớn hơn. 5. `if số A > số B` và `answer = A` → đúng; tương tự cho B; `else` → gợi ý. 6. Lưu project. |
| **Checklist** | - [ ] Có 2 số random khác nhau hoặc bằng<br>- [ ] Có ask đoán<br>- [ ] Đúng/sai có phản hồi<br>- [ ] Em đã lưu project |
| **Thử thêm** | Nếu `số A = số B` → `say` `Hòa! Bốc lại nhé!` và bốc lại tự động; thêm biến `số lần thắng` đếm qua nhiều ván liên tiếp để biết ai "may mắn" hơn trong 5 ván. |

---

#### Bài C1 — Game 60 giây ⏱️

| | Nội dung |
|---|----------|
| **Mô tả** | Đây là gian hàng "hot" nhất hội chợ lớp: trong **60 giây**, em click vào sprite càng nhiều càng tốt để gom điểm, ai đạt hạng "Giỏi" sẽ được ghi tên lên bảng vàng của lớp! Hết giờ báo điểm và xếp hạng (ví dụ ≥ 30 điểm = Giỏi!). |
| **Yêu cầu bắt buộc** | Biến `điểm` và `thời gian`; reset cờ xanh (điểm=0, thời gian=60); click +1 điểm; đếm ngược; hết giờ `say` điểm + `if` xếp hạng |
| **Gợi ý bước** | 1. Hai biến, hiển thị Stage. 2. Cờ xanh reset. 3. `repeat until thời gian = 0`: wait 1 → change thời gian -1. 4. Click → change điểm +1. 5. Hết giờ: say điểm; `if điểm >= 30` → say `Giỏi lắm!`. 6. Lưu project. |
| **Checklist** | - [ ] 60 giây đếm ngược<br>- [ ] Click tăng điểm<br>- [ ] Hết giờ báo điểm<br>- [ ] Có xếp hạng theo điểm<br>- [ ] Em đã lưu project |
| **Thử thêm** | Sprite di chuyển random mỗi khi click — khó bắt hơn! Thêm 2 mức xếp hạng nữa (ví dụ < 15 = "Cố lên!", 15–29 = "Khá", ≥ 30 = "Giỏi lắm!") để mọi bạn đều nhận được lời động viên phù hợp. |

---

#### Bài C2 — Game 30 giây countdown ⏳

| | Nội dung |
|---|----------|
| **Mô tả** | Phiên bản "tốc độ" của gian hàng gom điểm — chỉ **30 giây**, nhanh hơn, căng hơn, đòi hỏi phản xạ nhanh! Hết giờ báo điểm và xếp hạng (ví dụ ≥ 15 điểm = Giỏi!). |
| **Yêu cầu bắt buộc** | Biến `điểm` và `thời gian`; reset cờ xanh (điểm=0, thời gian=30); click +1 điểm; đếm ngược; hết giờ `say` điểm + `if` xếp hạng + `stop all` |
| **Gợi ý bước** | 1. Hai biến hiển thị Stage. 2. Cờ xanh: `set điểm to 0`, `set thời gian to 30`. 3. `repeat until thời gian = 0`: wait 1 → change thời gian -1. 4. Click sprite → change điểm +1. 5. Hết giờ: say điểm; `if điểm >= 15` → say `Giỏi lắm!`. 6. Lưu project. |
| **Checklist** | - [ ] 30 giây đếm ngược<br>- [ ] Click tăng điểm<br>- [ ] Hết giờ báo điểm<br>- [ ] Có xếp hạng theo điểm<br>- [ ] Em đã lưu project |
| **Thử thêm** | Sprite nhỏ dần mỗi 10 giây (`change size by` -10) — khó click hơn! Thêm biến `điểm cao nhất` lưu lại kỷ lục của lần chơi tốt nhất trong buổi, để em thi đấu với chính mình ở các lượt chơi sau. |

---

### 🖼️ Showcase (10 phút)

"Gallery walk" — em để project đang chạy trên máy, cả lớp đứng dậy đi vòng quanh xem project của 3–4 bạn gần nhất trong 1–2 phút, đặc biệt chú ý các bài mức C xem bạn gom điểm được bao nhiêu. Giáo viên mời 2–3 em xung phong trình chiếu project của mình trước lớp.

### ✅ Tổng kết (5 phút)

Nhắc lại: hôm nay em đã luyện `pick random`, nhiều biến, và thử sức với các bài mở rộng từ xúc xắc đến game gom điểm có thời gian. Buổi sau (**Buổi 18.5 — Game Jam hoặc Buổi 19 — Broadcast**) em sẽ bước vào đấu trường lập trình game đỉnh cao.

---

## Buổi 18.5 — Game Jam: Đấu trường Arcade 6 Game Đỉnh Cao 🕹️🏆

### Hôm nay em làm gì?

Hôm nay là buổi **Arcade Game Jam đặc biệt**! Em sẽ vận dụng toàn bộ "vũ khí tối thượng" đã học trong Tháng 3 (Toán tử `lấy ngẫu nhiên`, `<`, `>`, `=`, `kết hợp`, `và`/`hoặc` cùng các Biến số `điểm`, `mạng`, `thời gian`) để tự tay thiết kế **1 trong 6 tựa game Arcade kinh điển** hoặc sáng tạo game riêng của mình! 🚀🎮

---

### 🎮 Kho tàng 6 Vũ trụ Arcade Game (Phân cấp 3 cấp độ)

| Cấp độ | Tựa Game | Thể loại | Trọng tâm Logic & Toán tử |
|:---|:---|:---|:---|
| ⭐ **Dễ** | **1. Đoán Số Thần Tài** 🎯 | Logic / Số học | `lấy ngẫu nhiên từ 1 đến 100`, so sánh `answer > bí mật`, `answer < bí mật`, đếm biến `số lần đoán` |
| ⭐ **Dễ** | **2. Hứng Táo & Tránh Bom** 🍎💣 | Thu thập / Phản xạ | Tọa độ x ngẫu nhiên `lấy ngẫu nhiên từ -200 đến 200`, rơi từ trên xuống, táo `+1 điểm`, bom `-1 mạng` |
| ⭐⭐ **Vừa** | **3. Né Thiên Thạch Vũ Trụ** 🚀☄️ | Sinh tồn / Tăng tốc | Phi thuyền di chuyển 4 hướng, thiên thạch tăng tốc dần theo thời gian: `tốc độ = 4 + (điểm / 10)` |
| ⭐⭐ **Vừa** | **4. Thần Tính Siêu Tốc** 🧠⚡ | Math Battle / Trí tuệ | Tự sinh ngẫu nhiên `số A` và `số B`, dùng khối `kết hợp` tạo câu hỏi toán học, giới hạn thời gian trả lời |
| ⭐⭐⭐ **Thử thách** | **5. Pong Tâng Bóng Cầu Vồng** 🏓🌈 | Arcade cổ điển | Thanh đỡ hứng bóng, bóng nảy góc ngẫu nhiên `-45 đến 45 độ`, kiểm tra rơi đáy `tọa độ y < -160` |
| ⭐⭐⭐ **Thử thách** | **6. Khủng Long Vượt Sa Mạc** 🦖🌵 | Runner vô tận | Phím Space nhảy qua chướng ngại vật, cây xương rồng xuất hiện với khoảng cách ngẫu nhiên |

---

### 🧱 Kế hoạch 4 bước hoàn thiện game (35–45 phút)

1. **Bước 1 — Khung sườn (10p):** Chọn 1 nhân vật chính + 1 vật phẩm/chướng ngại vật, tạo sân khấu mang phong cách Retro Arcade.
2. **Bước 2 — Bộ biến số (10p):** Tạo ít nhất 2 biến (ví dụ: `điểm` và `thời gian`, hoặc `điểm` và `mạng`). Luôn nhớ **đặt giá trị ban đầu khi bấm vào 🏳️**.
3. **Bước 3 — Linh hồn Toán tử (15p):** Ghép khối `lấy ngẫu nhiên` để vị trí xuất hiện hoặc câu hỏi không bao giờ lặp lại; dùng các phép so sánh `>`, `<`, `=` để xử lý thắng / thua.
4. **Bước 4 — Hiệu ứng & Đánh bóng (10p):** Thêm âm thanh khi ghi điểm, màn hình Game Over / You Win rực rỡ và đếm kỷ lục `điểm cao nhất`.

---

### 🛡️ 3 Chiêu thức nâng tầm Game Pro

- **Chiêu 1 — Tăng độ khó theo thời gian:** Dùng phép toán `đặt [tốc độ] thành (4 + (điểm / 10))` để điểm càng cao, game càng kịch tính!
- **Chiêu 2 — Combo Streak thưởng điểm:** Khi đạt chuỗi đúng liên tiếp, thưởng thêm `+5 điểm` và hiệu ứng đổi màu sprite!
- **Chiêu 3 — Kỷ lục High Score:** Nếu `điểm > điểm cao nhất` thì `đặt [điểm cao nhất] thành (điểm)`.

---

### 👏 Showcase & Trải nghiệm (15 phút)

- **Đổi máy trải nghiệm chéo:** Mỗi học sinh chuyển sang máy bạn bên cạnh chơi thử trong 3 phút, tìm kiếm "kỷ lục gia Arcade" của lớp.
- **Vinh danh:** Trao danh hiệu *Arcade Master* cho các bạn hoàn thiện game mượt mà, sáng tạo và có độ thử thách cao.

---

### ✅ Tổng kết

Hôm nay em đã thực chiến vận dụng Toán tử và Biến số vào các tựa game Arcade hoàn chỉnh. Buổi sau (**Buổi 19 — Broadcast**) em sẽ học cách gửi tin nhắn giữa các sprite để chúng phối hợp với nhau! 📡✨

---

# Tuần 10 — Broadcast & trạng thái game 📡

---

## Buổi 19 — Học (H): Broadcast

### Hôm nay em học gì?

Hôm nay em học **broadcast** (phát sóng) — cách gửi **tin nhắn** giữa các sprite để chúng **phối hợp** với nhau. Em cũng học **trạng thái game** (chờ, đang chơi, kết thúc) — giúp game của em có luồng chơi rõ ràng! 📡🎮

---

### 🎬 Khởi động (10 phút)

**Trò chơi "Cả lớp cùng nghe hiệu lệnh"**

- Hỏi cả lớp: "Tuần trước mình có biến `điểm` và `thời gian` — nhưng nếu mình có 2, 3 sprite trên Stage, làm sao để TẤT CẢ cùng bắt đầu chơi một lượt khi em chỉ bấm 1 nút?"
- Giáo viên hô to một "tin nhắn" bí mật, ví dụ "Con thỏ!" — bất kỳ bạn nào đang cầm đồ vật màu trắng phải giơ tay lên ngay (quy ước trước). Thử vài "tin nhắn" khác nhau gắn với quy ước khác nhau.
- Dẫn vào bài: đó chính là ý tưởng của **broadcast** trong Scratch — một sprite "hô" tin nhắn, các sprite khác đã "đăng ký nghe" tin đó sẽ tự động phản ứng.

---

### Kiến thức mới (20 phút)

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

**Vì sao quan trọng?** Không có broadcast, mỗi sprite chỉ biết "nghe" cờ xanh hoặc phím bấm — rất khó để nhiều sprite cùng làm việc ăn khớp (ví dụ 5 quái vật cùng bắt đầu di chuyển đúng lúc). Broadcast giống như một "hệ thống loa phát thanh" chung của cả project: một sprite hô lên, mọi sprite khác nghe được cùng lúc và tự biết phải làm gì — đây là chìa khóa để làm game nhiều nhân vật phối hợp nhịp nhàng.

---

### Ví dụ mẫu 1 — Nút Start bằng broadcast

1. Sprite **Nút Play**: `when this sprite clicked` → `broadcast` `start`.
2. Sprite **Cat**:
   ```
   when I receive [start]
   say [Bắt đầu chơi!] for (1) secs
   ```
3. Click nút Play → Cat nói "Bắt đầu chơi!" dù Cat không được click trực tiếp! 📡

### Ví dụ mẫu 2 — `broadcast` thường vs `broadcast and wait`

1. Sprite A: `when green flag clicked` → `broadcast [đếm]` → `say [Đã gửi tin xong!] for (1) secs` — chạy `say` **ngay lập tức**, không cần biết sprite B đã đếm xong chưa.
2. Đổi thành: `when green flag clicked` → `broadcast [đếm] and wait` → `say [Đã gửi tin xong!] for (1) secs` — lần này `say` chỉ chạy **sau khi** sprite B chạy xong toàn bộ code `when I receive đếm`.
3. Sprite B: `when I receive [đếm]` → `say [1] for (1) secs` → `say [2] for (1) secs` → `say [3] for (1) secs`.

*(Cùng gửi một tin, nhưng `broadcast` không chờ — sprite gửi tin làm việc tiếp ngay; `broadcast and wait` thì "dừng lại chờ" đến khi bên nhận xử lý xong mới đi tiếp!)*

### Em đoán xem?

Nếu sprite A gửi `broadcast [batdau]` nhưng sprite B lại viết `when I receive [start]` (tên tin khác nhau), em đoán sprite B có nhận được tin và chạy code không? Đoán trước, rồi thử tạo 2 sprite đơn giản để kiểm tra!

---

### Thực hành 1 (TH1) — (15 phút) "Đếm ngược khởi động cuộc đua! 🏁"

#### Mô tả

Em tạo **nút Start** — nhưng click nút không chạy ngay: nó `broadcast` tin `countdown` để đếm ngược **"3... 2... 1..."**, rồi mới `broadcast` tin `start` để **CẢ HAI** sprite khác cùng lúc bắt đầu di chuyển. Đúng chất "loa phát thanh chung" của broadcast!

#### Yêu cầu

- Có sprite **nút Play** (hoặc chữ "START").
- Click nút → `broadcast` `countdown`.
- Một sprite nhận `countdown` → `say` "3", "2", "1" (mỗi số 1 giây) → `broadcast` `start`.
- **Ít nhất 2 sprite khác nhau** đều có `when I receive start` và đều phản ứng (hiện + di chuyển).
- Cờ xanh: reset tất cả (ẩn nhân vật, về vị trí ban đầu).

#### Gợi ý từng bước

1. Thêm sprite **Button2** (hoặc tự vẽ chữ START) — đặt tên `Nút Play`.
2. Thêm sprite **Cat** và **Star** làm 2 "vận động viên".
3. **Code Nút Play:**
   ```
   when this sprite clicked
   broadcast [countdown]
   ```
4. **Code Cat — đếm ngược rồi phát tin start:**
   ```
   when green flag clicked
   hide
   go to x: (-150) y: (0)

   when I receive [countdown]
   show
   say [3] for (1) secs
   say [2] for (1) secs
   say [1] for (1) secs
   broadcast [start]

   when I receive [start]
   forever
     move (5) steps
     if <touching [edge] ?> then
       bounce
   ```
5. **Code Star — chỉ nghe start, không đếm ngược:**
   ```
   when green flag clicked
   hide
   go to x: (150) y: (0)

   when I receive [start]
   show
   forever
     move (4) steps
     if <touching [edge] ?> then
       bounce
   ```
6. Bấm cờ xanh → cả 2 ẩn. Click nút Play → nghe đếm "3, 2, 1" rồi CẢ Cat và Star cùng chạy!
7. **Lưu project** với tên `TH1-dem-ngoc-cuoc-dua`.

#### Checklist tự kiểm

- [ ] Có sprite nút Play
- [ ] Click nút → `broadcast countdown` → đếm "3, 2, 1" → `broadcast start`
- [ ] Có ít nhất 2 sprite khác nhau nghe `start`
- [ ] Cả 2 sprite cùng lúc phản ứng khi nhận `start`
- [ ] Em đã lưu project

---

### 🤸 Giải lao vận động (5 phút)

**Trò chơi "Chuyền tin nhắn"**

- Cả lớp đứng thành 1–2 hàng dọc (giống dây chuyền). Giáo viên thì thầm một "tin nhắn" ngắn (ví dụ một từ hoặc một động tác) vào tai bạn đầu hàng.
- Bạn đầu hàng "broadcast" tin bằng cách thì thầm lại cho bạn kế tiếp, cứ thế truyền đến cuối hàng.
- Bạn cuối hàng phải hô to tin nhắn nhận được và làm đúng động tác — cả lớp so sánh xem tin có bị "lệch" so với tin gốc không.
- Dẫn dắt: "Trong Scratch, tin nhắn broadcast luôn truyền đi **chính xác 100%**, không bị đổi giữa đường như trò chơi vừa rồi — miễn là tên tin gõ đúng!"

---

### Thực hành 2 (TH2) — (15 phút) "Thắng hay Game Over? 🏆💀"

#### Mô tả

Em mở rộng project TH1: không chỉ có thua — Cat còn có thể **thắng**! Chạm Star để +1 điểm, đủ 5 điểm thì `broadcast` `win`; chạm biên thì `broadcast` `game over`. Một sprite **Bảng thông báo** mới lắng nghe **CẢ HAI** tin nhắn khác nhau và hiện đúng lời tương ứng.

#### Yêu cầu

- Biến `điểm`, reset khi `receive start`.
- Cat chạm Star → `change điểm by 1`; đủ 5 điểm → `broadcast win`.
- Cat chạm biên → `broadcast game over`.
- Có sprite (Bảng thông báo) với **CẢ HAI**: `when I receive game over` và `when I receive win`, mỗi tin hiện lời khác nhau kèm điểm, rồi `stop all`.

#### Gợi ý từng bước

1. Tiếp tục project TH1.
2. Tạo biến `điểm`, reset khi `receive start`.
3. **Trong Cat** (khi đang chơi), thêm kiểm tra thắng/thua:
   ```
   when I receive [start]
   set [điểm] to (0)
   show
   forever
     move (5) steps
     if <touching [Star] ?> then
       change [điểm] by (1)
       if <điểm = (5)> then
         broadcast [win]
     if <touching [edge] ?> then
       broadcast [game over]
   ```
4. **Thêm sprite mới "Bảng thông báo":**
   ```
   when I receive [game over]
   say (join [💀 Game Over! Điểm: ] (điểm)) for (3) secs
   stop all

   when I receive [win]
   say (join [🏆 Chiến thắng! Điểm: ] (điểm)) for (3) secs
   stop all
   ```
5. Thử cả 2 kết quả: chạm đủ 5 lần Star để thắng, hoặc chạm biên để thua.
6. **Lưu project** với tên `TH2-thang-hay-game-over`.

#### Checklist tự kiểm

- [ ] Có `broadcast game over` khi chạm biên
- [ ] Có `broadcast win` khi đủ 5 điểm
- [ ] Sprite Bảng thông báo nghe được cả 2 tin, hiện đúng lời
- [ ] Game dừng sau khi thắng hoặc thua (`stop all`)
- [ ] Em đã lưu project

---

### 🤝 Thử thách nhóm/sáng tạo (10–15 phút)

**"Đố bạn đoán tin nhắn"**

- Ghép cặp 2 bạn. Bạn A chạy project TH2 của mình cho bạn B xem màn hình (không xem code), bạn B đoán: "Lúc nào thì `broadcast game over` được gửi đi, và lúc nào thì `broadcast win` được gửi đi?"
- Sau khi đoán, bạn A mở code cho bạn B kiểm tra xem đoán đúng không.
- Đổi vai, thử với project của bạn B.
- Khuyến khích: nếu còn thời gian, mỗi cặp thử đổi tên tin `game over` thành một tên khác (ví dụ `thua cuộc`) ở cả 2 chỗ để thấy broadcast vẫn hoạt động miễn tên khớp nhau.

---

### Mẹo nhỏ 💡

- Đặt tên broadcast **giống hệt** ở cả `broadcast` và `when I receive` — sai một chữ là không nhận được tin!
- `broadcast and wait` đợi tất cả script `when I receive` chạy xong.
- Một sprite có thể có **nhiều** `when I receive` — mỗi tin một khối riêng.
- Dùng `stop other scripts in sprite` nếu chỉ muốn dừng script hiện tại của một sprite.
- Nếu không chắc tin đã gửi đi chưa, tạm thêm `say` ngay sau `broadcast` để kiểm tra bằng mắt.

---

### 🎉 Tổng kết & Ôn tập trò chơi (10 phút)

**"Trạm tiếp sức trả lời"** — chia lớp 2 đội, mỗi đội cử đại diện trả lời nhanh 1 câu rồi đổi người:

1. Broadcast dùng để làm gì? Cho ví dụ trong game.
2. Khối `broadcast` và `when I receive` khác nhau thế nào?
3. Game có 3 trạng thái thường là gì?
4. Làm sao để nhiều sprite cùng bắt đầu khi em chỉ click một nút?
5. `stop all` làm gì? Khi nào em dùng nó?

Đội trả lời đúng nhanh nhất mỗi câu được 1 điểm — tổng kết đội thắng cuối giờ.

- Mời 1–2 em chia sẻ project TH2 "Thắng hay Game Over?" của mình.
- Hẹn gặp lại ở buổi Bài tập tuần này để làm Luyện tập 1, 2 và bài mở rộng!

---

### 👩‍🏫 Ghi chú cho giáo viên

**Kịch bản demo nhanh:**
- Trước Kiến thức mới, demo trực tiếp Ví dụ mẫu 1 (nút Play) với 2 sprite đơn giản trên máy chiếu — chỉ rõ cho cả lớp thấy Cat "nghe" được tin dù không bị click trực tiếp.
- Demo Ví dụ mẫu 2 (so sánh `broadcast` và `broadcast and wait`) hai lần liên tiếp để học sinh thấy rõ khác biệt về thời điểm `say` chạy.

**Lỗi thường gặp (ngoài phần Mẹo nhỏ):**
- Gõ tên tin nhắn có dấu cách thừa hoặc viết hoa/thường khác nhau (`Start` và `start`) khiến broadcast không khớp — nhắc học sinh luôn chọn tin từ danh sách có sẵn (menu thả xuống) thay vì gõ tay hai lần.
- Đặt code `when I receive` trên sai sprite (ví dụ đặt trên chính nút Play thay vì nhân vật chính) — nhắc kiểm tra đang chọn đúng sprite ở góc dưới trái trước khi kéo khối.
- Quên `stop all` sau `when I receive game over` khiến các `forever` khác vẫn chạy ngầm — nhắc kiểm tra lại toàn bộ script sau khi Game Over.

**Quản lý lớp học:**
- Khởi động "Cả lớp cùng nghe hiệu lệnh": chuẩn bị trước 2–3 tin nhắn và quy ước để tránh mất thời gian nghĩ tại chỗ.
- Trò "Chuyền tin nhắn": chia nhóm nhỏ 5–6 bạn/hàng để tin không bị "lệch" quá nhiều và ai cũng có lượt.
- Thử thách nhóm: đi vòng nhắc các cặp đổi vai đúng lúc để cả hai bạn đều được đoán và kiểm tra.

---

## Buổi 20 — Bài tập (BT): Trạng thái game 📡

### 🎬 Khởi động ôn tập (10 phút)

**"Đúng hay Sai?"** — Giáo viên đọc từng câu, học sinh giơ ngón cái lên (Đúng) hoặc xuống (Sai):
1. "`broadcast` chỉ gửi tin cho 1 sprite duy nhất." (Sai — mọi sprite có `when I receive` cùng tên đều nhận được)
2. "Tên tin nhắn ở `broadcast` và `when I receive` phải giống hệt nhau." (Đúng)
3. "Game luôn chỉ có đúng 1 trạng thái duy nhất." (Sai — thường có Chờ, Đang chơi, Kết thúc)
4. "`stop all` chỉ dừng 1 sprite, các sprite khác vẫn chạy." (Sai — dừng toàn bộ project)
5. "`broadcast and wait` chờ script nhận tin chạy xong mới chạy tiếp." (Đúng)

### Ôn nhanh

- **Broadcast:** `broadcast` gửi tin, `when I receive` nhận tin.
- **Trạng thái game:** Chờ → Đang chơi → Kết thúc.
- **stop all:** dừng toàn bộ script khi Game Over.
- Nhiều sprite có thể cùng lắng nghe một tin broadcast.

---

### ✍️ Luyện tập 1, 2 (LT1/LT2) (15–20 phút)

Đầu buổi, em làm tại lớp có hướng dẫn hai bài luyện tập ngắn, nối tiếp buổi Học tuần trước — không phải chữa bài tập về nhà, mà là luyện lại ngay tại lớp có giáo viên hỗ trợ.

*Gợi ý:* Đổi máy với bạn bên cạnh 2 phút để kiểm tra chéo checklist — đặc biệt xem tên broadcast của bạn có gõ đúng và giống nhau ở cả hai đầu không.

#### Luyện tập 1 (LT1) — "Nút Play tự khóa ▶️🔒"

**Mô tả:** Em luyện làm game có **nút Play** — nhưng lần này nút Play biết "tự khóa": ngay khi game bắt đầu chạy, nút Play tự ẩn đi để không ai bấm lại giữa ván, chỉ hiện lại khi ván chơi kết thúc — làm ngay tại lớp có giáo viên hỗ trợ.

**Yêu cầu:**
- Sprite nút Play, click → `broadcast start`.
- Nhân vật ẩn hoặc đứng yên khi chưa Start.
- `when I receive start` → nhân vật hiện và di chuyển (4 phím hoặc tự động).
- **Nút Play tự `hide`** ngay khi nhận `start` (không cho bấm lại giữa ván), và tự `show` lại khi bấm **cờ xanh**.

**Gợi ý từng bước:**
1. Nút Play + nhân vật chính.
2. Cờ xanh: nhân vật `hide` hoặc `go to` vị trí chờ; nút Play `show`.
3. Nút: `when clicked` → `broadcast start`.
4. Nhân vật: `when I receive start` → `show` → code di chuyển.
5. **Nút Play:** `when I receive start` → `hide` (tự khóa không cho bấm lại).
6. Lưu project tên `LT1-nut-play-tu-khoa`.

**Checklist tự kiểm:**
- [ ] Chưa Start thì chưa chơi được
- [ ] Click Play thì game bắt đầu
- [ ] Nút Play tự ẩn ngay khi game chạy, không bấm lại được giữa ván
- [ ] Em đã lưu project

| Em kiểm tra | Đúng khi... |
|-------------|-------------|
| Có nút Play | Sprite riêng hoặc nút rõ ràng |
| Broadcast start | Click nút → thấy `broadcast start` |
| Chưa Start đứng yên | Cờ xanh xong, chưa click Play thì chưa chơi |
| Nút tự khóa | Sau khi click, nút Play biến mất luôn cho tới khi bấm cờ xanh lại |

**Nếu không chạy:** Kiểm tra tên tin `start` giống hệt ở `broadcast` và `when I receive`.

#### Luyện tập 2 (LT2) — "Game 4 trạng thái có đếm ngược 🎮⏳"

**Mô tả:** Em luyện làm game có **4 trạng thái** rõ ràng: **Chờ** (hiện nút Play), **Đếm ngược** ("3... 2... 1..."), **Đang chơi** (điều khiển + tính điểm), **Kết thúc** (Game Over, hiện điểm) — làm ngay tại lớp, có khó khăn cứ hỏi giáo viên.

**Yêu cầu:**
- Biến `trạng thái` nhận 4 giá trị: `chờ`, `đếm ngược`, `chơi`, `kết thúc`.
- Nút Play → `broadcast countdown` → `set trạng thái to đếm ngược` → `say` "3", "2", "1".
- Đếm xong → `broadcast start` → `set trạng thái to chơi` → điều khiển nhân vật, gom điểm.
- Thua → `broadcast game over` → `set trạng thái to kết thúc` → dừng + báo điểm.

**Gợi ý từng bước:**
1. Tạo biến `trạng thái` và `điểm`.
2. Cờ xanh: `set trạng thái to chờ`, `set điểm to 0`.
3. Nút Play: `broadcast countdown` → `set trạng thái to đếm ngược`.
4. `when I receive countdown` → `say "3"` → `say "2"` → `say "1"` → `broadcast start` → `set trạng thái to chơi`.
5. Khi `trạng thái = chơi`: code di chuyển + gom điểm chạy.
6. Khi thua: `broadcast game over` → `set trạng thái to kết thúc`.
7. Lưu project tên `LT2-4-trang-thai-dem-ngoc`.

**Checklist tự kiểm:**
- [ ] Có đủ 4 trạng thái rõ ràng
- [ ] Chờ → Đếm ngược ("3,2,1") → Chơi → Kết thúc
- [ ] Có biến điểm
- [ ] Em đã lưu project

| Em kiểm tra | Đúng khi... |
|-------------|-------------|
| Có 4 giai đoạn | Chờ → Đếm ngược → Chơi → Kết thúc |
| Đếm ngược đúng | Thấy "3, 2, 1" trước khi chơi được |
| Có điểm | Biến điểm hiển thị khi chơi |
| Game Over | Có thông báo khi kết thúc |

---

### 🎯 Giới thiệu bài mở rộng (10 phút)

Giáo viên demo nhanh **1 ví dụ mẫu** (ví dụ bài A1 "Nút Start") trên máy chiếu — chỉ rõ cách chọn backdrop menu và đặt nhân vật ở trạng thái chờ, trước khi học sinh tự chọn mức bài cho mình.

Em chọn **1 mức** A, B hoặc C, rồi chọn **1 trong 2 bài** của mức đó. Làm hết checklist trước khi đổi bài.

| Mức | Khi nào chọn |
|-----|--------------|
| **A1 hoặc A2** | Em luyện nút Start và broadcast |
| **B1 hoặc B2** | Em làm game nhiều màn / level |
| **C1 hoặc C2** | Em thử thách với mạng hoặc 2 người chơi |

---

### ✍️ Làm bài mở rộng (30–35 phút)

#### Bài A1 — Nút Start đếm ngược ▶️⏳

| | Nội dung |
|---|----------|
| **Mô tả** | Mọi game hay đều cần một "cánh cửa mở màn" ấn tượng — em làm màn hình **chờ đẹp**: backdrop menu, nút START to, click → không bắt đầu ngay mà đếm ngược "3... 2... 1..." rồi mới thật sự vào game, giống các trận đấu thể thao thực thụ! |
| **Yêu cầu bắt buộc** | Backdrop menu; sprite nút START; click → `broadcast countdown` → `say` "3","2","1" → `broadcast start`; nhân vật chờ đến khi nhận `start` |
| **Gợi ý bước** | 1. Chọn backdrop đẹp. 2. Sprite nút START ở giữa. 3. Click → `broadcast countdown`. 4. `when I receive countdown` → đếm "3,2,1" → `broadcast start`. 5. Nhân vật ẩn khi chờ, hiện khi nhận `start`. 6. Lưu project. |
| **Checklist** | - [ ] Có màn hình chờ<br>- [ ] Click Start kích hoạt đếm ngược 3-2-1<br>- [ ] Chỉ sau khi đếm xong mới thật sự chơi được<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm âm thanh "tíc" mỗi số đếm ngược, và thêm hiệu ứng chữ số phóng to/thu nhỏ mỗi lần đổi ("3" → "2" → "1") để màn chờ sống động hơn. |

---

#### Bài A2 — Pause có giới hạn lượt ⏸️🎟️

| | Nội dung |
|---|----------|
| **Mô tả** | Có lúc đang chơi giữa chừng thì cần tạm dừng (cô giáo gọi, hoặc muốn nghỉ tay) — nhưng để giữ trận đấu công bằng, em chỉ được **Pause tối đa 3 lần** mỗi ván! Bấm Pause → `broadcast pause` → mọi sprite dừng; bấm Resume → `broadcast resume` → chơi tiếp; hết 3 lượt thì nút Pause không còn tác dụng. |
| **Yêu cầu bắt buộc** | Nút Start + nút Pause; `broadcast pause` và `broadcast resume`; biến `số lần pause` (bắt đầu = 0, +1 mỗi lần Pause); nếu `số lần pause = 3` → nút Pause không `broadcast` nữa, `say` "Hết lượt pause!" |
| **Gợi ý bước** | 1. Game đơn giản có Start. 2. Thêm sprite nút PAUSE, biến `số lần pause` = 0 khi Start. 3. Click Pause: `if số lần pause < 3` → `change số lần pause by 1` → `broadcast pause`; `else` → `say "Hết lượt pause!"`. 4. Trên nhân vật: `when I receive pause` → `stop other scripts in sprite`. 5. Nút RESUME → `broadcast resume` → tiếp tục script. 6. Lưu project. |
| **Checklist** | - [ ] Có nút Pause và Resume hoạt động<br>- [ ] Biến `số lần pause` tăng đúng mỗi lần dùng<br>- [ ] Đủ 3 lần thì Pause không còn tác dụng<br>- [ ] Em đã lưu project |
| **Thử thêm** | Khi Pause, backdrop đổi màu xám (`change color effect`), và hiển thị biến `số lần pause` trên Stage như "còn 2/3 lượt" để người chơi biết mình còn bao nhiêu lượt. |

---

#### Bài B1 — Game 3 màn, màn cuối kết hợp cả hai 🎯

| | Nội dung |
|---|----------|
| **Mô tả** | Em thiết kế một hành trình phiêu lưu 3 chặng — game có **đúng 3 màn**: màn 1 bắt sao, màn 2 né địch, và màn 3 phải làm **CẢ HAI cùng lúc** (bắt sao lẫn né địch) — giống màn boss cuối trong một trò chơi thực thụ! |
| **Yêu cầu bắt buộc** | Đúng 3 backdrop/màn; `broadcast` chuyển màn; màn 1 = bắt sao, màn 2 = né địch, màn 3 = kết hợp cả bắt sao và né địch cùng lúc |
| **Gợi ý bước** | 1. Màn 1: bắt sao 5 lần → `broadcast màn 2`. 2. `when I receive màn 2` → đổi backdrop → hiện địch, nhân vật né địch trong 15 giây → `broadcast màn 3`. 3. `when I receive màn 3` → đổi backdrop → CẢ sao và địch cùng xuất hiện. 4. Thắng → `say` `Em thắng!` 5. Lưu project. |
| **Checklist** | - [ ] Có đúng 3 màn, mỗi màn đổi backdrop<br>- [ ] Dùng broadcast chuyển màn<br>- [ ] Màn 3 có cả sao và địch cùng lúc<br>- [ ] Em đã lưu project |
| **Thử thêm** | Hiển thị biến `màn hiện tại` trên Stage, và thêm màn hình "Chúc mừng qua màn!" (say hoặc đổi backdrop tạm 1 giây) mỗi khi chuyển màn để người chơi biết mình vừa tiến bộ. |

---

#### Bài B2 — Level up nhân tốc độ, giới hạn level 3 🆙

| | Nội dung |
|---|----------|
| **Mô tả** | Thay vì chia màn cố định, game của em sẽ tự "lên level" ngay khi người chơi đủ giỏi: khi `điểm` đạt **10** → `broadcast level up` → tốc độ địch = **tốc độ gốc × level** (level 2 nhanh gấp đôi, level 3 nhanh gấp ba!) — nhưng dừng lại ở level 3, không tăng vô hạn. |
| **Yêu cầu bắt buộc** | Biến `điểm`, `level` và `tốc độ gốc`; `if điểm >= 10` và `level < 3` → `broadcast level up`; `when I receive level up` → `change level by 1` → `set tốc độ địch to (tốc độ gốc × level)` + reset điểm; đạt level 3 → `say` "Em là bậc thầy!" và dừng tăng |
| **Gợi ý bước** | 1. Biến `điểm`, `level` = 1, `tốc độ gốc` = 3. 2. Game bắt sao đơn giản, địch di chuyển theo `tốc độ gốc × level`. 3. Trong `forever`: `if điểm >= 10 and level < 3` → `broadcast level up` → `set điểm to 0`. 4. `when I receive level up` → `change level by 1` → `set tốc độ địch to (tốc độ gốc × level)`. 5. `if level = 3` → `say "Em là bậc thầy!"`. 6. Lưu project. |
| **Checklist** | - [ ] Đủ 10 điểm → level up, dùng broadcast<br>- [ ] Tốc độ địch tăng đúng theo công thức tốc độ gốc × level<br>- [ ] Dừng lại ở level 3, không tăng vô hạn<br>- [ ] Có biến level hiển thị<br>- [ ] Em đã lưu project |
| **Thử thêm** | Level 3: thêm 1 sprite địch di chuyển ngang thứ hai để tăng độ khó thực sự, không chỉ tăng tốc độ. |

---

#### Bài C1 — Game có mạng + bất tử ngắn ❤️✨

| | Nội dung |
|---|----------|
| **Mô tả** | Không phải lúc nào cũng "chết" ngay lần va chạm đầu tiên — game của em cho nhân vật vài cơ hội! Game điều khiển nhân vật **tránh địch**. Chạm địch → **mất 1 mạng** + có **1 giây bất tử** (nhấp nháy, không tính va chạm) để không bị mất liền 2-3 mạng cùng lúc. Hết mạng → `broadcast game over`. |
| **Yêu cầu bắt buộc** | Biến `mạng` (bắt đầu = 3); chạm địch → `change mạng by -1` + nhấp nháy `ghost` effect + **1 giây bất tử** (tạm không kiểm tra va chạm); `if mạng = 0` → `broadcast game over`; có nút Start |
| **Gợi ý bước** | 1. Biến `mạng` và `điểm`. 2. Start: `set mạng to 3`. 3. Điều khiển 4 phím. 4. Địch di chuyển. 5. Chạm địch → `change mạng by -1` → `set ghost effect to 50` → `wait 1 secs` (trong lúc này bỏ qua kiểm tra chạm địch) → `set ghost effect to 0`. 6. Mạng = 0 → game over. 7. Lưu project. |
| **Checklist** | - [ ] Có biến mạng<br>- [ ] Chạm địch mất mạng + có 1 giây bất tử sau đó<br>- [ ] Trong lúc bất tử không bị trừ mạng liên tục<br>- [ ] Hết mạng → Game Over<br>- [ ] Em đã lưu project |
| **Thử thêm** | Đổi hiệu ứng bất tử thành nhấp nháy liên tục (đổi `ghost effect` qua lại 0/50 vài lần trong 1 giây) thay vì mờ đứng yên, để nhìn rõ hơn là nhân vật đang bất tử. |

---

#### Bài C2 — Hai người chơi, điểm chung và điểm riêng 👫📊

| | Nội dung |
|---|----------|
| **Mô tả** | Rủ bạn cùng bàn chơi chung! **2 sprite** trên Stage — người chơi 1 dùng phím mũi tên, người chơi 2 dùng phím **W A S D**. Cả hai cùng bắt sao và **chung biến `điểm`** (For all sprites) — nhưng mỗi người còn có 1 biến điểm **riêng** để cuối trận biết ai đóng góp nhiều hơn cho đội! |
| **Yêu cầu bắt buộc** | 2 sprite điều khiển khác nhau; biến `điểm` For all sprites; biến `điểm P1` và `điểm P2` (riêng cho từng sprite); chạm sao → `change điểm by 1` VÀ `change điểm P[người đó] by 1`; có nút Start; hết 30 giây → `say` tổng điểm chung + điểm riêng từng người |
| **Gợi ý bước** | 1. Sprite Cat: phím mũi tên. 2. Sprite Dog (hoặc nhân vật 2): W=lên, S=xuống, A=trái, D=phải. 3. Biến `điểm` (For all sprites), `điểm P1`, `điểm P2` (For this sprite only mỗi bên). 4. Sao: chạm Cat → `change điểm by 1` + `change điểm P1 by 1`; chạm Dog → `change điểm by 1` + `change điểm P2 by 1`. 5. `broadcast start` → đếm ngược 30 giây → `say` (join `Chung: ` điểm ` — P1: ` điểm P1 ` — P2: ` điểm P2). 6. Lưu project. |
| **Checklist** | - [ ] 2 người điều khiển được<br>- [ ] Chung 1 biến điểm VÀ mỗi người có điểm riêng<br>- [ ] Cả hai đều bắt sao được, điểm riêng cộng đúng người<br>- [ ] Có giới hạn thời gian<br>- [ ] Em đã lưu project |
| **Thử thêm** | Hiển thị `say` tên người bắt được sao cuối cùng, và thêm 1 "sao vàng" hiếm cho +3 điểm để tạo thời điểm gay cấn tranh giành giữa 2 người chơi. |

---

### 🖼️ Showcase (10 phút)

Gallery walk: học sinh để project đang chạy trên màn hình, cả lớp đi vòng quanh xem 3–4 project gần nhất, đặc biệt để ý các bài mức C có 2 người chơi cùng lúc. Mời 2–3 em (hoặc 1–2 cặp) xung phong trình chiếu trước lớp.

### ✅ Tổng kết (5 phút)

Nhắc lại: hôm nay em đã luyện `broadcast`, `when I receive` và làm game có nhiều trạng thái (Chờ, Chơi, Kết thúc). Buổi sau (**Buổi 21 — Clone**) em sẽ học cách tạo hàng loạt bản sao của một sprite để làm mưa, sao rơi, bong bóng bay.

---

# Tuần 11 — Clone 👥

---

## Buổi 21 — Học (H): Clone

### Hôm nay em học gì?

Hôm nay em học **clone** (nhân bản) — tạo **nhiều bản sao** của một sprite mà không cần thêm từng nhân vật thủ công! Em sẽ làm hiệu ứng **mưa**, **sao rơi**, **bong bóng bay** — những thứ cần rất nhiều nhân vật giống nhau! 🌧️⭐

---

### 🎬 Khởi động (10 phút)

**Trò chơi "Một người, nhiều bản sao"**

- Nhắc lại tuần trước: "Mình đã học cách broadcast để nhiều sprite phối hợp. Nhưng nếu mình cần 20 giọt mưa giống hệt nhau, phải kéo tay 20 sprite à?"
- Mời 1 em lên làm "bản gốc" — đứng yên một chỗ giơ tay lên. Sau đó lần lượt mời thêm 3–4 bạn khác đứng phía sau, bắt chước y hệt tư thế bạn đầu tiên.
- Hỏi cả lớp: "Những bạn phía sau có phải 'y hệt' bạn đầu không? Nếu bạn đầu đổi tư thế, các bạn phía sau có tự đổi theo không?" → dẫn vào khái niệm clone: bản sao giống hệt hình dạng ban đầu nhưng có vị trí và số phận riêng.

---

### Kiến thức mới (20 phút)

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

**Vì sao quan trọng?** Không có clone, muốn có 20 giọt mưa em phải tự tay kéo 20 sprite giống hệt nhau — rất mất công và project sẽ rất nặng. Clone giúp em viết code **một lần** cho bản gốc, rồi để Scratch tự "nhân bản" ra bao nhiêu bản tùy ý, mỗi bản tự chạy độc lập. Đây là kỹ thuật quan trọng để làm game có nhiều quái vật, nhiều vật phẩm, hiệu ứng thời tiết... mà không cần kéo tay từng sprite.

---

### Ví dụ mẫu 1 — Một giọt mưa rơi

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

### Ví dụ mẫu 2 — Ba giọt mưa, ba vị trí khác nhau

1. Vẫn dùng sprite giọt mưa ở Ví dụ mẫu 1.
2. Đổi code bản gốc:
   ```
   when green flag clicked
   create clone of [myself]
   create clone of [myself]
   create clone of [myself]
   ```
3. Code clone giữ nguyên như Ví dụ mẫu 1 (mỗi clone tự `pick random` vị trí x của riêng mình).
4. Bấm cờ xanh — ba giọt mưa xuất hiện gần như cùng lúc nhưng ở **ba vị trí x khác nhau**, vì mỗi clone tự chạy `pick random` độc lập!

*(Dù cả 3 clone dùng chung một đoạn code `when I start as a clone`, mỗi clone vẫn tự "bốc" một vị trí riêng — clone không hề "copy y hệt" kết quả của nhau!)*

### Em đoán xem?

Nếu bản gốc tạo clone **3 lần liên tiếp** (không có `wait` giữa các lần), em đoán cả 3 clone sẽ rơi ở cùng một vị trí x hay ba vị trí khác nhau? Đoán trước, rồi thử trên Scratch để kiểm tra!

---

### Thực hành 1 (TH1) — (15 phút) "Mưa đơn giản (clone liên tục) 🌧️"

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

### 🤸 Giải lao vận động (5 phút)

**Trò chơi "Người dẫn đầu và các bản sao"**

- Một bạn làm "bản gốc" đứng đầu hàng, thực hiện các động tác đơn giản (giơ tay, xoay người, ngồi xuống...). Các bạn phía sau xếp hàng làm "clone" — mỗi bạn copy lại đúng động tác của bạn ngay trước mình, với độ trễ nửa giây (như sóng lan truyền).
- Khi giáo viên hô "Delete clone cuối!", bạn đứng cuối hàng phải ngồi xuống (biến mất khỏi hàng) ngay lập tức — minh họa `delete this clone`.
- Đổi người dẫn đầu vài lượt để nhiều bạn được trải nghiệm cả hai vai "bản gốc" và "clone".

---

### Thực hành 2 (TH2) — (15 phút) "Clone khi nhấn phím 🎈"

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

### 🤝 Thử thách nhóm/sáng tạo (10–15 phút)

**"Đố bạn đoán số clone"**

- Ghép cặp 2 bạn. Bạn A nhấn Space một số lần bí mật (ví dụ 4 lần) trên project TH2 của mình mà không cho bạn B đếm rõ.
- Bạn B quan sát màn hình và đoán: "Bạn vừa nhấn Space mấy lần?" bằng cách đếm số bong bóng đang bay.
- Đổi vai, thử với project của bạn B.
- Khuyến khích: nếu còn thời gian, thử nhấn Space thật nhanh liên tiếp (5–6 lần trong 2 giây) và quan sát xem game có bị chậm không — nếu chậm, đây là gợi ý cho bài học "vì sao phải xóa clone" ở buổi tới.

---

### Mẹo nhỏ 💡

- Bản gốc nên `hide` nếu em chỉ muốn thấy **clone** trên màn hình (như mưa).
- Nếu game **chậm dần**, kiểm tra em đã `delete this clone` chưa — clone không xóa sẽ tích tụ!
- `wait` giữa mỗi lần `create clone` điều chỉnh **mật độ** (mưa dày hay thưa).
- Clone **kế thừa** costume và âm thanh của bản gốc — đổi costume bản gốc thì clone cũng đổi.
- Nếu không chắc code đang chạy trên bản gốc hay clone, thử thêm tạm `say` để phân biệt.

---

### 🎉 Tổng kết & Ôn tập trò chơi (10 phút)

**"Trạm tiếp sức trả lời"** — chia lớp 2 đội, mỗi đội cử đại diện trả lời nhanh 1 câu rồi đổi người:

1. Clone khác sprite gốc thế nào?
2. Khối `when I start as a clone` dùng để làm gì?
3. Tại sao phải `delete this clone`?
4. Làm sao để mưa rơi liên tục?
5. `create clone of myself` nên đặt ở bản gốc hay clone?

Đội trả lời đúng nhanh nhất mỗi câu được 1 điểm — tổng kết đội thắng cuối giờ.

- Mời 1–2 em chia sẻ project TH2 "clone khi nhấn phím" của mình.
- Hẹn gặp lại ở buổi Bài tập tuần này để làm Luyện tập 1, 2 và bài mở rộng!

---

### 👩‍🏫 Ghi chú cho giáo viên

**Kịch bản demo nhanh:**
- Trước Kiến thức mới, demo trực tiếp Ví dụ mẫu 1 (một giọt mưa) rồi ngay lập tức demo Ví dụ mẫu 2 (ba giọt mưa) để học sinh thấy rõ mỗi clone chạy độc lập, không giống hệt nhau.
- Nhấn mạnh bằng lời: "Bản gốc giống như khuôn bánh, clone giống như từng cái bánh ra khỏi khuôn — hình dạng giống nhau nhưng mỗi cái đi một nơi riêng."

**Lỗi thường gặp (ngoài phần Mẹo nhỏ):**
- Học sinh viết nhầm code di chuyển vào `when green flag clicked` của bản gốc thay vì `when I start as a clone` — nhắc phân biệt rõ hai khối Events này ngay từ đầu.
- Quên `hide` bản gốc nên thấy 1 sprite đứng yên lẫn trong đám clone đang rơi — chỉ ra điểm khác biệt khi debug.
- Không giới hạn hoặc không xóa clone khiến sau 1 phút project bị giật, lag — nhắc lại quy tắc vàng "mỗi clone sinh ra phải có đường về, tức là phải bị xóa".

**Quản lý lớp học:**
- Khởi động: chỉ cần 4–5 bạn tham gia trực tiếp, các bạn còn lại quan sát và nhận xét để tiết kiệm thời gian.
- Giải lao vận động: xếp hàng ngắn (4–5 bạn/hàng) để độ trễ dễ quan sát và không bị hỗn loạn.
- Thử thách nhóm: nhắc học sinh không nhấn Space quá nhanh gây lag máy trước khi hiểu vì sao — đây là lúc tốt để giới thiệu trước khái niệm delete clone của buổi tới.

---

## Buổi 22 — Bài tập (BT): Luyện Clone 👥

### 🎬 Khởi động ôn tập (10 phút)

**"Đúng hay Sai?"** — Giáo viên đọc từng câu, học sinh giơ ngón cái lên (Đúng) hoặc xuống (Sai):
1. "Clone có hình dạng khác hoàn toàn so với bản gốc." (Sai — clone giống hệt hình, âm thanh của bản gốc)
2. "`when I start as a clone` chạy trên bản gốc." (Sai — chỉ chạy trên clone mới tạo)
3. "Không xóa clone thì game có thể bị chậm dần." (Đúng)
4. "Một sprite chỉ được tạo tối đa 1 clone." (Sai — có thể tạo rất nhiều clone)
5. "Clone kế thừa costume của bản gốc tại thời điểm nó được tạo ra." (Đúng)

### Ôn nhanh

- **Clone:** `create clone of myself` tạo bản sao.
- **when I start as a clone:** code chạy trên mỗi clone mới.
- **delete this clone:** xóa clone — luôn xóa khi không cần nữa!
- Bản gốc thường `hide`; clone `show` và di chuyển.

---

### ✍️ Luyện tập 1, 2 (LT1/LT2) (15–20 phút)

Đầu buổi, em làm tại lớp có hướng dẫn hai bài luyện tập ngắn, nối tiếp buổi Học tuần trước — không phải chữa bài tập về nhà, mà là luyện lại ngay tại lớp có giáo viên hỗ trợ.

*Gợi ý:* Đổi máy với bạn bên cạnh 2 phút, cùng chơi thử project của nhau trong 1 phút để xem game có bị chậm dần không (dấu hiệu quên xóa clone).

#### Luyện tập 1 (LT1) — "Xóa clone đúng cách 🗑️"

**Mô tả:** Em luyện làm hiệu ứng **nhiều hạt** rơi (mưa, tuyết, lá...) và đảm bảo mỗi clone **tự xóa** khi chạm đáy màn hình — game không bị chậm, làm ngay tại lớp có giáo viên hỗ trợ.

**Yêu cầu:**
- Bản gốc tạo clone liên tục (`forever` + `wait`).
- Clone rơi từ trên xuống.
- **Bắt buộc** có `delete this clone` khi clone ra khỏi màn hình.

**Gợi ý từng bước:**
1. Sprite nhỏ (Dot, Snowflake, hoặc emoji).
2. Bản gốc: hide + forever create clone + wait 0.3.
3. Clone: random x trên cùng → rơi → delete khi y < -180.
4. Chơi 1 phút — game vẫn mượt, không đơ.
5. Lưu project tên `LT1-xoa-clone`.

**Checklist tự kiểm:**
- [ ] Clone tự xóa khi rơi hết màn hình
- [ ] Game chạy 1 phút không bị chậm
- [ ] Có ít nhất 10 clone cùng lúc trên màn hình
- [ ] Em đã lưu project

| Em kiểm tra | Đúng khi... |
|-------------|-------------|
| Có delete | Thấy `delete this clone` trong code clone |
| Không chậm | Chơi 1 phút game vẫn mượt |
| Clone rơi | Clone xuất hiện và di chuyển |
| Bản gốc ẩn | Không thấy sprite gốc đứng yên giữa màn hình |

**Nếu game chậm:** Thêm `delete this clone` — có thể em quên xóa clone cũ.

#### Luyện tập 2 (LT2) — "Sao rơi ⭐"

**Mô tả:** Em luyện làm **sao rơi** từ trên xuống. Nhân vật chính **bắt sao** (chạm clone) để +1 điểm. Sao chạm đáy thì biến mất (delete clone) — làm ngay tại lớp, có khó khăn cứ hỏi giáo viên.

**Yêu cầu:**
- Sao (clone) rơi liên tục từ trên.
- Nhân vật điều khiển 4 phím.
- Chạm sao → +1 điểm + `delete this clone` (hoặc sao tự xóa).
- Biến `điểm` hiển thị trên Stage.

**Gợi ý từng bước:**
1. Sprite **Star** làm sao rơi (clone). Sprite **Cat** điều khiển.
2. Star bản gốc: hide + forever create clone.
3. Star clone: random x, rơi xuống; `if touching Cat` → `change điểm by 1` → `delete this clone`; nếu y < -180 → `delete this clone`.
4. Cat: điều khiển 4 phím; cờ xanh reset điểm.
5. Lưu project tên `LT2-sao-roi`.

**Checklist tự kiểm:**
- [ ] Sao rơi liên tục
- [ ] Chạm sao tăng điểm
- [ ] Sao biến mất sau khi bắt hoặc chạm đáy
- [ ] Em đã lưu project

| Em kiểm tra | Đúng khi... |
|-------------|-------------|
| Sao rơi | Clone liên tục rơi từ trên |
| Bắt được | Chạm sao → điểm +1 |
| Sao biến mất | Sau khi bắt hoặc chạm đáy, sao không còn |
| Điều khiển | 4 phím mũi tên hoạt động |

---

### 🎯 Giới thiệu bài mở rộng (10 phút)

Giáo viên demo nhanh **1 ví dụ mẫu** (ví dụ bài A1 "Mưa emoji") trên máy chiếu — chỉ rõ cách đổi emoji và backdrop cho hợp không khí, trước khi học sinh tự chọn mức bài cho mình.

Em chọn **1 mức** A, B hoặc C, rồi chọn **1 trong 2 bài** của mức đó. Làm hết checklist trước khi đổi bài.

| Mức | Khi nào chọn |
|-----|--------------|
| **A1 hoặc A2** | Em luyện clone rơi xuống (mưa, tuyết) |
| **B1 hoặc B2** | Em luyện clone bay lên (bong bóng, sao) |
| **C1 hoặc C2** | Em làm game bắt đồ rơi có điểm |

---

### ✍️ Làm bài mở rộng (30–35 phút)

#### Bài A1 — Mưa emoji 🌧️

| | Nội dung |
|---|----------|
| **Mô tả** | Em muốn biến Stage thành một buổi chiều mưa buồn nhẹ nhàng — em làm **mưa emoji** (💧, ❄️, 🍂...) rơi liên tục. Đổi backdrop thành bầu trời xám cho đẹp! |
| **Yêu cầu bắt buộc** | Clone liên tục; emoji rơi từ trên; `delete this clone` khi chạm đáy; backdrop phù hợp |
| **Gợi ý bước** | 1. Sprite emoji nhỏ. 2. Bản gốc hide + forever clone + wait. 3. Clone random x, rơi, delete. 4. Backdrop bầu trời. 5. Lưu project. |
| **Checklist** | - [ ] Mưa rơi liên tục<br>- [ ] Clone tự xóa<br>- [ ] Có backdrop đẹp<br>- [ ] Em đã lưu project |
| **Thử thêm** | Random 2–3 emoji khác nhau (đổi costume khi clone bắt đầu), và thêm âm thanh mưa nhẹ lặp lại (`play sound until done` trong vòng lặp) để cảnh mưa có cả tiếng lẫn hình. |

---

#### Bài A2 — Tuyết rơi clone chậm ❄️

| | Nội dung |
|---|----------|
| **Mô tả** | Em dựng cảnh mùa đông đầu tiên trong project của mình — làm **tuyết rơi chậm**: clone bông tuyết (❄️) rơi từ trên xuống **chậm hơn mưa** (wait 0.8 giây giữa mỗi clone, `change y by` -2). Backdrop đêm hoặc mùa đông. |
| **Yêu cầu bắt buộc** | Clone liên tục với `wait (0.8) secs`; clone rơi chậm (`change y by` -2 hoặc -3); `delete this clone` khi chạm đáy; bản gốc `hide` |
| **Gợi ý bước** | 1. Sprite ❄️ nhỏ. 2. Bản gốc hide → `forever` → `create clone of myself` → `wait (0.8) secs`. 3. Clone: random x, `go to y: 180`, rơi chậm, delete khi y < -180. 4. Backdrop Winter hoặc Night. 5. Lưu project. |
| **Checklist** | - [ ] Tuyết rơi chậm, đều<br>- [ ] Clone tự xóa<br>- [ ] Không lag sau 1 phút<br>- [ ] Em đã lưu project |
| **Thử thêm** | Random kích thước mỗi bông (`set size to (pick random 30 to 80)`), và thêm hiệu ứng bông tuyết lắc nhẹ qua trái phải trong lúc rơi (`change x by (pick random -2 to 2)` mỗi vòng lặp) để trông tự nhiên hơn. |

---

#### Bài B1 — Bắn bong bóng 🎈

| | Nội dung |
|---|----------|
| **Mô tả** | Em hóa thân thành người bán bong bóng ở công viên — điều khiển **súng bong bóng** ở dưới màn hình. Nhấn Space → bắn clone bong bóng bay lên. Bong bóng chạm trần thì nổ (đổi costume + delete). |
| **Yêu cầu bắt buộc** | Nhân vật di chuyển trái/phải; Space tạo clone; clone bay lên; chạm trên cùng → delete (hoặc hiệu ứng nổ) |
| **Gợi ý bước** | 1. Sprite súng ở dưới, phím trái/phải. 2. Space → create clone tại vị trí súng. 3. Clone bay lên. 4. y > 170 → start sound + delete. 5. Lưu project. |
| **Checklist** | - [ ] Súng di chuyển trái/phải<br>- [ ] Space bắn bong bóng<br>- [ ] Bong bóng bay lên và biến mất<br>- [ ] Em đã lưu project |
| **Thử thêm** | Đếm số bong bóng bắn bằng biến `số bong bóng`, và cho bong bóng đổi màu ngẫu nhiên mỗi lần bắn (`set color effect to (pick random 0 to 200)`) để trông sặc sỡ như hội chợ. |

---

#### Bài B2 — Bắn sao Space clone bay lên 🚀

| | Nội dung |
|---|----------|
| **Mô tả** | Em là phi công của một tàu vũ trụ nhỏ đang khám phá dải ngân hà — điều khiển **tàu vũ trụ** ở dưới màn hình. Nhấn **Space** → bắn **clone sao** bay lên. Sao chạm trần → `delete this clone` + âm thanh. |
| **Yêu cầu bắt buộc** | Sprite tàu di chuyển trái/phải; Space → `create clone of myself`; clone bay lên (`change y by` 8); chạm trên cùng (y > 170) → delete; bản gốc hide |
| **Gợi ý bước** | 1. Sprite Rocket ở dưới, phím trái/phải. 2. Bản gốc hide. 3. Space → create clone tại vị trí tàu. 4. `when I start as a clone`: show → `forever` → `change y by 8` → `if y > 170` → start sound + delete. 5. Lưu project. |
| **Checklist** | - [ ] Tàu di chuyển trái/phải<br>- [ ] Space bắn sao bay lên<br>- [ ] Sao biến mất khi chạm trần<br>- [ ] Em đã lưu project |
| **Thử thêm** | Biến `số sao bắn` — tăng mỗi lần Space, và giới hạn tốc độ bắn (thêm `wait 0.2 secs` sau mỗi lần create clone trong code Space) để tránh bắn quá nhanh gây rối màn hình. |

---

#### Bài C1 — Bắt sao rơi ⭐

| | Nội dung |
|---|----------|
| **Mô tả** | Đêm nay trời đầy sao băng — em phải nhanh tay bắt được càng nhiều sao càng tốt! Game **bắt sao rơi** hoàn chỉnh: sao clone rơi ngẫu nhiên, nhân vật điều khiển bắt sao gom điểm trong 30 giây. Hết giờ báo điểm! |
| **Yêu cầu bắt buộc** | Clone sao rơi; điều khiển 4 phím; biến `điểm`; đếm ngược 30 giây; hết giờ `say` điểm + `stop all`; clone delete khi bắt hoặc chạm đáy |
| **Gợi ý bước** | 1. Biến `điểm` và `thời gian`. 2. Star clone rơi. 3. Cat bắt sao +1. 4. Đếm ngược 30 giây. 5. Hết giờ báo điểm. 6. Lưu project. |
| **Checklist** | - [ ] Sao rơi liên tục<br>- [ ] Bắt sao tăng điểm<br>- [ ] Có giới hạn 30 giây<br>- [ ] Hết giờ báo điểm<br>- [ ] Em đã lưu project |
| **Thử thêm** | Sao rơi nhanh dần theo thời gian (tăng tốc độ `change y`), và thêm 1 loại "sao bạc" hiếm (random costume) đáng giá gấp đôi điểm để tạo động lực săn tìm. |

---

#### Bài C2 — Fruit catch nhiều loại điểm khác 🍎🍌

| | Nội dung |
|---|----------|
| **Mô tả** | Em mở "vườn trái cây rơi" của riêng mình — clone táo 🍎 (+1 điểm), chuối 🍌 (+2 điểm), dưa hấu 🍉 (+3 điểm) — mỗi loại random costume khi clone bắt đầu. Nhân vật điều khiển bắt trong 30 giây. |
| **Yêu cầu bắt buộc** | Clone trái cây rơi liên tục; random costume (≥ 2 loại); chạm → `change điểm` theo loại (`if costume = táo` → +1...); biến `điểm`; đếm ngược 30 giây; `delete this clone` khi bắt hoặc chạm đáy |
| **Gợi ý bước** | 1. Sprite trái cây có 3 costume. 2. Clone rơi + random costume. 3. Cat điều khiển 4 phím. 4. Trên Cat: `if touching Fruit` → kiểm tra costume → cộng điểm tương ứng → `delete clone` (broadcast hoặc code trên Fruit). 5. Đếm ngược 30 giây. 6. Lưu project. |
| **Checklist** | - [ ] ≥ 2 loại trái cây rơi<br>- [ ] Mỗi loại điểm khác nhau<br>- [ ] Có giới hạn 30 giây<br>- [ ] Clone tự xóa<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm trái xấu 🍄 (-1 điểm khi bắt nhầm), và hiển thị bảng tổng kết cuối giờ liệt kê số lượng từng loại trái cây đã bắt (ví dụ dùng 3 biến đếm riêng: `số táo`, `số chuối`, `số dưa`). |

---

### 🖼️ Showcase (10 phút)

Gallery walk: học sinh để project đang chạy trên màn hình, cả lớp đi vòng quanh xem 3–4 project gần nhất, đặc biệt chú ý các bài mức C xem bạn bắt được bao nhiêu điểm. Mời 2–3 em xung phong trình chiếu trước lớp.

### ✅ Tổng kết (5 phút)

Nhắc lại: hôm nay em đã luyện tạo và xóa clone đúng cách qua mưa, tuyết, bong bóng và game bắt đồ rơi. Buổi sau (**Buổi 23 — My Blocks & debug**) em sẽ học cách gom code gọn gàng bằng My Blocks và tự tìm-sửa lỗi khi project không chạy đúng.

---

# Tuần 12 — My Blocks & debug 🧩

---

## Buổi 23 — Học (H): My Blocks & debug

### Hôm nay em học gì?

Hôm nay em học **My Blocks** (khối tự tạo) — gom nhiều khối lệnh thành **một khối riêng** để code gọn và dễ đọc hơn. Em cũng học cách **debug** (tìm và sửa lỗi) khi project không chạy đúng! 🧩🔧

---

### 🎬 Khởi động (10 phút)

**Trò chơi "Gói gọn hành động"**

- Hỏi cả lớp: "Từ đầu tháng đến giờ, có động tác nào mình phải lặp lại nhiều lần không?" (ví dụ: đứng dậy - giơ tay - ngồi xuống).
- Giáo viên đặt tên cho chuỗi 3 động tác đó là một "lệnh gộp", ví dụ gọi là "Chào cô!". Từ giờ, thay vì hô cả 3 bước, giáo viên chỉ hô "Chào cô!" — cả lớp tự biết làm đủ 3 bước.
- Thử gọi "Chào cô!" vài lần liên tiếp để cả lớp quen. Dẫn vào bài: đó chính là ý tưởng của **My Blocks** — gói nhiều bước thành 1 khối có tên, gọi 1 lần là chạy đủ các bước bên trong.

---

### Kiến thức mới (20 phút)

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
| 6. Hỏi bạn / thầy cô | Nếu vẫn bí, hỏi ngay bạn bên cạnh hoặc giáo viên trong lớp! |

**5. Lỗi thường gặp**

| Triệu chứng | Nguyên nhân có thể |
|-------------|-------------------|
| Sprite không di chuyển | Quên `forever`; code nằm sai sprite |
| Điểm không tăng | Quên `change`; biến sai tên |
| Broadcast không hoạt động | Tên tin khác nhau ở `broadcast` và `receive` |
| Game chậm dần | Clone không `delete` |
| Nhân vật biến mất | Quên `show`; `hide` nhầm chỗ |

**Vì sao quan trọng?** Càng làm project lớn (nhiều biến, nhiều sprite, nhiều màn), code càng dễ bị lặp lại và rối. My Blocks giúp em đặt tên rõ ràng cho từng "hành động" (reset game, tăng điểm, game over...), giống như đặt tên chương trong một cuốn sách — nhìn tên là biết đoạn đó làm gì, không cần đọc lại từng dòng. Debug thì giống như một bác sĩ khám bệnh: đọc triệu chứng, kiểm tra từng phần, rồi mới kết luận nguyên nhân — kỹ năng này sẽ theo em suốt các buổi làm dự án lớn ở tháng sau.

---

### Ví dụ mẫu 1 — Tạo khối `reset điểm`

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

### Ví dụ mẫu 2 — Debug bằng `say` test

1. Giả sử project có lỗi: chạm sao nhưng điểm không tăng. Em nghi ngờ code chạm sao chưa chạy tới.
2. Tạm thêm `say [Đã chạm sao!] for (1) secs` ngay đầu đoạn code `if touching Star then`.
3. Chạy thử: nếu **không thấy** bong bóng thoại khi chạm sao → lỗi nằm ở điều kiện `if touching` (có thể sai tên sprite). Nếu **có thấy** bong bóng thoại nhưng điểm vẫn không tăng → lỗi nằm ở khối `change điểm by 1` phía sau (có thể sai tên biến).
4. Sau khi tìm ra và sửa lỗi, xóa khối `say` test đi — đây chỉ là công cụ tạm thời để dò lỗi.

*(Đây chính là bước 5 "Thêm say test" trong bảng debug — một khối `say` tạm thời giúp em "chia đôi" đoạn code để biết lỗi nằm ở nửa nào!)*

### Em đoán xem?

Nếu em tạo My Block `tăng điểm` (bên trong có `change điểm by 1`) nhưng ở chỗ chạm sao, em **quên** gọi khối `tăng điểm`, em đoán khi chạm sao thì điểm có tăng không? Đoán trước, rồi thử tạo tình huống này trên Scratch để debug xem đúng không!

---

### Thực hành 1 (TH1) — (15 phút) "Tạo khối 'khởi tạo game' đa nhiệm 🔄"

#### Mô tả

Em tạo My Block tên **`khoi_tao_game`** đóng gói toàn bộ logic reset đầu game: vừa quản lý 2 biến (`điểm` về 0 và `thời gian` về 30 hoặc `mạng` về 3), vừa đưa nhân vật chính về vị trí xuất phát, đổi về costume mặc định và ẩn/hiện đúng trạng thái. Gọi khối này khi bấm cờ xanh để bắt đầu ván chơi mới.

#### Yêu cầu

- Có My Block `khoi_tao_game` với ít nhất **4–5 khối lệnh** bên trong.
- Vận dụng kiến thức cũ: Quản lý cùng lúc **2 biến** (`điểm` và `thời gian` hoặc `mạng`), đổi costume, đặt vị trí ban đầu `go to x: y:`.
- `when green flag clicked` → gọi `khoi_tao_game`.
- Đảm bảo mỗi lần bấm cờ xanh, toàn bộ trạng thái game được đưa về chuẩn xác.

#### Gợi ý tư duy

- **Mục tiêu:** Gom toàn bộ việc "dọn dẹp và chuẩn bị bàn cờ" vào 1 khối duy nhất.
- **Các nhóm lệnh cần dùng trong `define khoi_tao_game`:**
  - Nhóm **Variables:** `set [điểm] to (0)`, `set [thời gian] to (30)`.
  - Nhóm **Motion:** `go to x: (0) y: (-100)` (hoặc vị trí xuất phát của nhân vật).
  - Nhóm **Looks:** `switch costume to [costume1]`, `show`.
- **Thực thi:** Gọi My Block `khoi_tao_game` ngay dưới `when green flag clicked`.
- **Lưu project** với tên `TH1-my-block-reset`.

---

### Thực hành 2 (TH2) — (15 phút) "Tạo khối 'xử lý thưởng' & logic điều kiện 🏆"

#### Mô tả

Em tạo My Block **`xu_ly_thuong`** nâng cao — không chỉ tăng điểm và phát âm thanh, mà còn lồng ghép **logic điều kiện**: nếu người chơi đạt mốc điểm cao (ví dụ `điểm >= 5`), sprite sẽ kích hoạt hiệu ứng đặc biệt (đổi màu `change color effect` hoặc tăng tốc). Áp dụng khối này cho nhiều sprite vật phẩm rơi khác nhau (Star, Gem, Coin) bằng cách gọi My Block tái sử dụng.

#### Yêu cầu

- Tạo My Block `xu_ly_thuong`:
  - `change [điểm] by 1` + phát âm thanh `Collect`.
  - Có khối điều kiện `if <điểm > 4> then` để kích hoạt hiệu ứng thưởng đặc biệt (đổi màu hoặc tăng kích thước).
- Dùng khối `xu_ly_thuong` ở ít nhất **2 sprite/tình huống** khác nhau khi nhân vật bắt trúng vật phẩm.
- Vật phẩm tự dịch chuyển đến vị trí ngẫu nhiên bằng `pick random` sau khi bị bắt.
- Kết hợp hoàn hảo với khối `khoi_tao_game` từ TH1.

#### Gợi ý tư duy

- **Trong `define xu_ly_thuong`:**
  1. Tăng biến `điểm` lên 1.
  2. Phát âm thanh.
  3. Kiểm tra điều kiện: `if <[điểm] > 4> then` → thực hiện hiệu ứng nâng cao (nhóm Looks / Sound).
- **Trên Sprite vật phẩm (Star / Coin):**
  - Chạy vòng lặp `forever` kiểm tra va chạm `if <touching [Cat] ?> then`:
    - Gọi My Block `xu_ly_thuong`.
    - Đổi vị trí ngẫu nhiên: `go to x: (pick random -200 to 200) y: (pick random -140 to 140)`.
- **Lưu project** với tên `TH2-my-block-nang-cao`.

---

### 🤝 Thử thách nhóm/sáng tạo (10–15 phút)

**"Bạn có hiểu tên khối của mình không?"**

- Ghép cặp 2 bạn. Bạn A che phần code bên trong My Block, chỉ cho bạn B xem **tên khối** (`reset game`, `tăng điểm`) và hỏi: "Đoán xem bên trong khối này làm gì?"
- Bạn B đoán, sau đó bạn A mở `define` ra để kiểm tra đoán đúng không.
- Đổi vai với project của bạn B.
- Nếu bạn B đoán sai nhiều, đó là gợi ý nên đặt lại tên khối rõ ràng hơn — thử cùng nhau nghĩ tên hay hơn nếu cần.

---

### Mẹo nhỏ 💡

- Đặt tên My Block **bằng tiếng Việt không dấu** hoặc tiếng Anh: `reset game`, `tang diem` — dễ đọc, dễ nhớ.
- Một My Block nên làm **một việc rõ ràng** — đừng nhét quá nhiều việc không liên quan.
- Khi debug, thêm tạm `say` `đến đây rồi!` — nếu không thấy bong bóng thoại, code phía trên có vấn đề.
- **Sao chép project** trước khi sửa lớn — File → Save as a copy.
- Nếu không nhớ My Block đang làm gì, mở `define` ra đọc lại — đó là lý do nên đặt tên khối thật rõ nghĩa ngay từ đầu.

---

### 🎉 Tổng kết & Ôn tập trò chơi (10 phút)

**"Trạm tiếp sức trả lời"** — chia lớp 2 đội, mỗi đội cử đại diện trả lời nhanh 1 câu rồi đổi người:

1. My Block dùng để làm gì?
2. Khối `define` và khối gọi My Block khác nhau thế nào?
3. Em tạo My Block mới ở đâu trong Scratch?
4. Khi game không chạy, em debug bằng cách nào? (Nêu 3 bước)
5. Tại sao nên gom code lặp lại thành My Block?

Đội trả lời đúng nhanh nhất mỗi câu được 1 điểm — tổng kết đội thắng cuối giờ.

- Mời 1–2 em chia sẻ project TH2 "My Block tăng điểm" của mình.
- Hẹn gặp lại ở buổi Bài tập tuần này để làm Luyện tập 1, 2 và bài mở rộng!

---

### 👩‍🏫 Ghi chú cho giáo viên

**Kịch bản demo nhanh:**
- Trước Kiến thức mới, demo trực tiếp Ví dụ mẫu 1 (tạo khối `reset điểm`) từng bước chậm rãi trên máy chiếu — nhấn mạnh nút **Make a Block** nằm ở đâu trong My Blocks.
- Demo Ví dụ mẫu 2 (debug bằng `say` test) bằng cách cố ý tạo 1 lỗi nhỏ trên máy chiếu (ví dụ sai tên biến) rồi cùng cả lớp tìm lỗi bằng các bước trong bảng debug.

**Lỗi thường gặp (ngoài phần Mẹo nhỏ):**
- Học sinh tạo My Block nhưng quên kéo code vào bên trong `define` — khối gọi ra không có tác dụng gì. Nhắc kiểm tra `define` có "rỗng" không.
- Đặt tên My Block trùng với tên biến hoặc quá giống nhau (`tang diem` và `tangdiem`) gây nhầm lẫn khi gọi khối — khuyến khích đặt tên có khoảng cách rõ ràng, dễ phân biệt.
- Khi debug, học sinh thường sửa nhiều chỗ cùng lúc rồi không biết chỗ nào vừa sửa đã có tác dụng — nhắc chỉ sửa **một lỗi một lần** rồi chạy thử ngay.

**Quản lý lớp học:**
- Khởi động: chọn chuỗi động tác đơn giản, dễ nhớ để không mất thời gian giải thích lại.
- Giải lao vận động "Bắt lỗi nhanh": giữ tốc độ vừa phải để học sinh kịp quan sát, tránh làm quá nhanh gây khó.
- Thử thách nhóm: khuyến khích góp ý tích cực về tên khối, tránh để học sinh chê bai lẫn nhau.

---

## Buổi 24 — Bài tập (BT): Game mini hoàn chỉnh 🎮

### 🎬 Khởi động ôn tập (10 phút)

**"Đúng hay Sai?"** — Giáo viên đọc từng câu, học sinh giơ ngón cái lên (Đúng) hoặc xuống (Sai):
1. "My Block giúp gom nhiều khối lệnh thành một khối có tên riêng." (Đúng)
2. "Khối `define` là nơi em gọi My Block để chạy." (Sai — `define` là nơi viết code bên trong, khối riêng mới là nơi gọi)
3. "Khi debug, bước đầu tiên nên làm là đọc kỹ thông báo lỗi (nếu có)." (Đúng)
4. "Thêm `say` tạm thời để kiểm tra code là một cách debug hợp lệ." (Đúng)
5. "Game hay không cần Start hay Game Over, chỉ cần chạy mãi mãi." (Sai — nên có luồng rõ ràng: Start, chơi, Game Over)

### Ôn nhanh

- **My Blocks:** gom code lặp → gọn, dễ đọc.
- **define** = viết bên trong; khối gọi = dùng ở nơi khác.
- **Debug:** đọc lỗi → chạy từng phần → kiểm tra tên biến/broadcast → thêm `say` test.
- Game hay thường có: Start, điểm, Game Over, reset.

---

### ✍️ Luyện tập 1, 2 (LT1/LT2) (15–20 phút)

Đầu buổi, em làm tại lớp có hướng dẫn hai bài luyện tập ngắn, nối tiếp buổi Học tuần trước — không phải chữa bài tập về nhà, mà là luyện lại ngay tại lớp có giáo viên hỗ trợ.

*Gợi ý:* Đổi máy với bạn bên cạnh 2 phút — nhờ bạn thử "bắt lỗi" giúp trước khi em tự sửa, giống trò chơi khởi động vừa chơi.

#### Luyện tập 1 (LT1) — "Gom code thành My Block 🧩"

**Mô tả:** Em mở project cũ (game bắt sao hoặc game tuần trước) và **refactor** (gom code): tạo ít nhất **2 My Blocks** (ví dụ `reset game` và `tăng điểm`), thay thế code lặp lại — làm ngay tại lớp có giáo viên hỗ trợ.

**Yêu cầu:**
- Ít nhất **2 My Blocks** có tên rõ ràng.
- Mỗi My Block có ≥ 2 khối lệnh bên trong.
- Game vẫn chạy **giống như trước** khi refactor.

**Gợi ý từng bước:**
1. Mở project game cũ.
2. Tìm đoạn code **lặp lại** nhiều lần (reset, tăng điểm, game over...).
3. Tạo My Block cho mỗi đoạn.
4. Thay code cũ bằng khối gọi My Block.
5. Chạy thử — mọi thứ vẫn hoạt động?
6. Lưu project tên `LT1-refactor-my-block`.

**Checklist tự kiểm:**
- [ ] Có ≥ 2 My Blocks
- [ ] Code gọn hơn trước
- [ ] Game chạy đúng như cũ
- [ ] Em đã lưu project

| Em kiểm tra | Đúng khi... |
|-------------|-------------|
| Có ≥ 2 My Blocks | Thấy ít nhất 2 khối tự tạo trong My Blocks |
| Code gọn hơn | Ít khối lặp lại hơn project cũ |
| Game vẫn chạy | Chơi thử — mọi tính năng OK |
| Tên rõ ràng | Tên khối mô tả đúng việc làm |

**Nếu game hỏng sau refactor:** Kiểm tra `define` còn đủ khối bên trong không; kiểm tra chỗ gọi My Block đúng sprite chưa.

#### Luyện tập 2 (LT2) — "Sửa 1 project lỗi mẫu 🔧"

**Mô tả:** Giáo viên đưa em xem **1 project Scratch bị lỗi** (project mẫu `BT-loi-1.sb3`). Em đọc mô tả lỗi, **tìm nguyên nhân** và **sửa** cho game chạy đúng, ngay tại lớp có giáo viên hỗ trợ khi cần.

**Project lỗi mẫu — Mô tả lỗi cho em đọc**

**Game "Bắt sao" bị 3 lỗi:**

| Lỗi | Triệu chứng | Gợi ý sửa |
|-----|-------------|-----------|
| **Lỗi 1** | Bấm cờ xanh, điểm **không về 0** — vẫn giữ điểm cũ | Thiếu `set điểm to 0` khi `when green flag clicked` |
| **Lỗi 2** | Nhấn phím mũi tên, Cat **không di chuyển** | Code di chuyển nằm **ngoài** `forever`, hoặc thiếu `forever` |
| **Lỗi 3** | Chạm sao, điểm **không tăng** | Tên biến sai: code dùng `score` nhưng biến tên `điểm` (hoặc ngược lại) |

**Yêu cầu:**
- Em sửa **cả 3 lỗi** trên.
- Sau khi sửa: cờ xanh reset điểm; phím di chuyển OK; chạm sao +1 điểm.
- Viết ra giấy (hoặc comment Scratch): em đã sửa gì ở mỗi lỗi.

**Gợi ý từng bước:**
1. Mở project lỗi.
2. Đọc bảng lỗi ở trên.
3. **Lỗi 1:** Tìm `when green flag clicked` → thêm `set [điểm] to (0)`.
4. **Lỗi 2:** Tìm code di chuyển Cat → bọc trong `forever`.
5. **Lỗi 3:** Kiểm tra tên biến trong `change` — phải khớp với biến đã tạo.
6. Chạy thử từng lỗi sau khi sửa.
7. Lưu project tên `LT2-sua-loi-1`.

**Checklist tự kiểm:**
- [ ] Cờ xanh → điểm = 0
- [ ] Phím mũi tên di chuyển Cat
- [ ] Chạm sao → điểm +1
- [ ] Em ghi chú đã sửa gì
- [ ] Em đã lưu project

| Em kiểm tra | Đúng khi... |
|-------------|-------------|
| Lỗi 1 sửa | Cờ xanh → điểm = 0 |
| Lỗi 2 sửa | Phím mũi tên di chuyển được |
| Lỗi 3 sửa | Chạm sao → điểm tăng |
| Có ghi chú | Em biết mình sửa gì |

---

### 🎯 Giới thiệu bài mở rộng (10 phút)

Giáo viên demo nhanh **1 ví dụ mẫu** (ví dụ bài A1 "Refactor My Block") trên máy chiếu — chỉ rõ cách tìm đoạn code lặp lại trước khi gom thành khối, trước khi học sinh tự chọn mức bài cho mình.

Em chọn **1 mức** A, B hoặc C, rồi chọn **1 trong 2 bài** của mức đó. Làm hết checklist trước khi đổi bài.

| Mức | Khi nào chọn |
|-----|--------------|
| **A1 hoặc A2** | Em luyện My Blocks gom code |
| **B1 hoặc B2** | Em luyện debug / sửa lỗi |
| **C1 hoặc C2** | Em làm hoặc remix game hoàn chỉnh |

---

### ✍️ Làm bài mở rộng (30–35 phút)

#### Bài A1 — Refactor My Block 🧩

| | Nội dung |
|---|----------|
| **Mô tả** | Project game của em đang "cồng kềnh" với nhiều đoạn code giống hệt nhau lặp đi lặp lại — đã đến lúc dọn dẹp! Em refactor project game (bắt sao, tránh địch...) thành **3 My Blocks**: `reset game`, `tăng điểm`, `game over`. |
| **Yêu cầu bắt buộc** | 3 My Blocks; mỗi khối ≥ 2 lệnh bên trong; game chạy đúng sau refactor |
| **Gợi ý bước** | 1. Mở project game. 2. Tạo `reset game`, `tăng điểm`, `game over`. 3. Thay code cũ. 4. Chạy thử toàn bộ. 5. Lưu project. |
| **Checklist** | - [ ] 3 My Blocks<br>- [ ] Game chạy đúng<br>- [ ] Code gọn hơn<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm tham số cho `tăng điểm` (truyền số điểm cộng thêm), để 1 khối duy nhất dùng được cho cả "táo +1" lẫn "kim cương +5" tùy vào số truyền vào. |

---

#### Bài A2 — My Block gameOver 🛑

| | Nội dung |
|---|----------|
| **Mô tả** | Mọi game đều cần một cách kết thúc "gọn gàng" — em tạo My Block **`game over`** — bên trong: `say` thông báo, `broadcast game over`, `stop all`. Gọi khối này khi hết thời gian hoặc hết mạng. |
| **Yêu cầu bắt buộc** | My Block `game over` với ≥ 3 khối bên trong (`say` + `broadcast game over` + `stop all`); gọi ít nhất **2 lần** trong project (ví dụ: hết giờ và hết mạng); kết hợp với `reset game` |
| **Gợi ý bước** | 1. Mở project game có điểm + thời gian. 2. **Make a Block** → `game over`. 3. Bên trong: `say` `Game Over!` → `broadcast game over` → `stop all`. 4. Hết thời gian → gọi `game over`. 5. (Tùy chọn) Hết mạng → cũng gọi `game over`. 6. Lưu project. |
| **Checklist** | - [ ] Có My Block `game over`<br>- [ ] Bên trong có say + broadcast + stop all<br>- [ ] Gọi ≥ 2 lần trong project<br>- [ ] Game dừng đúng khi gọi<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm `start sound` Explosion khi game over, và thêm biến `điểm cao nhất` để My Block `game over` tự so sánh và cập nhật kỷ lục nếu điểm lần này cao hơn. |

---

#### Bài B1 — Sửa 3 project lỗi 🔧

| | Nội dung |
|---|----------|
| **Mô tả** | Em trở thành "bác sĩ Scratch" hôm nay — có 3 bệnh nhân (project) đang gặp sự cố, cần em chẩn đoán và chữa trị! Mỗi project có bảng mô tả lỗi — em đọc, tìm và sửa. |
| **Yêu cầu bắt buộc** | Sửa xong cả 3 project; mỗi project chạy đúng theo mô tả sau khi sửa |

**Project lỗi 1 — "Bắt sao"** (giống Luyện tập 2 (LT2))

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
| **Thử thêm** | Tự tạo 1 lỗi cố ý cho bạn sửa, và viết một "bảng triệu chứng" ngắn giống mẫu trên để bạn dễ chẩn đoán — tập làm người ra đề debug cho bạn cùng lớp. |

---

#### Bài B2 — Sửa project lỗi #4 🔧

| | Nội dung |
|---|----------|
| **Mô tả** | Ca bệnh cuối cùng trong ngày! Em sửa **1 project** bị lỗi (project mẫu `BT-loi-4.sb3`). Đọc bảng lỗi, tìm nguyên nhân và sửa cho game chạy đúng. |
| **Yêu cầu bắt buộc** | Sửa xong cả 3 lỗi; game có Start, điểm, và My Block hoạt động đúng sau khi sửa |

**Project lỗi 4 — "Game bắt táo"**

| Lỗi | Triệu chứng | Gợi ý sửa |
|-----|-------------|-----------|
| **Lỗi 1** | Bấm nút Start, game **không bắt đầu** — nhân vật đứng yên | Tên broadcast sai: code dùng `Start` nhưng nút gửi `start` — phải **giống hệt** |
| **Lỗi 2** | Chạm táo, điểm **không tăng** | My Block `tăng điểm` có `define` nhưng code chạm táo **không gọi** khối — thiếu khối gọi `tăng điểm` |
| **Lỗi 3** | Hết 30 giây, game **không dừng** — vẫn chơi tiếp | My Block `game over` thiếu `stop all` bên trong `define` |

| **Gợi ý bước** | 1. Mở project lỗi 4. 2. Đọc bảng lỗi. 3. **Lỗi 1:** So sánh tên tin ở `broadcast` và `when I receive`. 4. **Lỗi 2:** Tìm code `touching` táo → thêm gọi `tăng điểm`. 5. **Lỗi 3:** Mở `define game over` → thêm `stop all`. 6. Chạy thử toàn bộ. 7. Ghi chú em sửa gì. 8. Lưu project. |
| **Checklist** | - [ ] Start hoạt động<br>- [ ] Chạm táo tăng điểm<br>- [ ] Hết giờ game dừng<br>- [ ] Em có ghi chú sửa lỗi<br>- [ ] Em đã lưu project |
| **Thử thêm** | Tự tạo thêm 1 lỗi nhỏ cho bạn sửa, và thử đổi vai — để bạn tạo lỗi cho em sửa lại, xem ai tìm lỗi nhanh hơn. |

---

#### Bài C1 — Game mini hoàn chỉnh 🎮

| | Nội dung |
|---|----------|
| **Mô tả** | Đây là bài tổng hợp lớn nhất tháng 3 — em làm **một game mini hoàn chỉnh** kết hợp tất cả kỹ năng đã học: biến, broadcast, clone (hoặc nhiều sprite), My Blocks, có Start và Game Over, giống như một sản phẩm thật sự để khoe với cả lớp. |
| **Yêu cầu bắt buộc** | Nút Start (`broadcast`); biến `điểm`; điều khiển nhân vật; ≥ 1 My Block; Game Over (`broadcast` + `stop all`); có âm thanh |
| **Gợi ý bước** | 1. Chọn thể loại: bắt sao rơi / tránh địch / bắn bong bóng. 2. Vẽ storyboard 3 bước: Start → Chơi → Game Over. 3. Code nút Start + reset. 4. Code gameplay chính. 5. Tạo My Block `reset game` và `game over`. 6. Thêm âm thanh. 7. Chơi thử 3 lần, sửa bug. 8. Lưu project. |
| **Checklist** | - [ ] Có nút Start<br>- [ ] Có biến điểm<br>- [ ] Có ≥ 1 My Block<br>- [ ] Có Game Over<br>- [ ] Có âm thanh<br>- [ ] Em chơi thử 3 lần không lỗi<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm biến `mạng` hoặc đếm ngược thời gian; thêm màn thắng khi đủ điểm — và viết ra 1 câu giới thiệu ngắn về game của em để đọc khi showcase, giống như một nhà phát triển game thật sự giới thiệu sản phẩm. |

---

#### Bài C2 — Remix game tuần 22 🔄

| | Nội dung |
|---|----------|
| **Mô tả** | Không cần làm lại từ đầu — em **remix** (cải tiến) project game **tuần 22** (bắt sao rơi, fruit catch, hoặc bài clone em thích) — thêm **nút Start**, **biến điểm**, và **≥ 2 My Blocks** (`reset game`, `game over` hoặc `tăng điểm`), biến bài cũ thành phiên bản "nâng cấp" chuyên nghiệp hơn. |
| **Yêu cầu bắt buộc** | Mở project tuần 22 (hoặc tạo lại); nút Start + `broadcast start`; biến `điểm` hiển thị Stage; ≥ 2 My Blocks; Game Over khi hết thời gian (`broadcast` + `stop all`); gameplay clone vẫn hoạt động |
| **Gợi ý bước** | 1. Mở project buổi 22 (File → Save as a copy). 2. Thêm sprite nút START → `broadcast start`. 3. Code gameplay chuyển vào `when I receive start`. 4. Tạo `reset game` (cờ xanh) và `game over` (hết giờ). 5. Gom code tăng điểm thành `tăng điểm`. 6. Chơi thử 3 lần. 7. Lưu project tên `Remix-tuan-22`. |
| **Checklist** | - [ ] Có nút Start<br>- [ ] Có biến điểm<br>- [ ] Có ≥ 2 My Blocks<br>- [ ] Clone vẫn rơi/bắt OK<br>- [ ] Có Game Over<br>- [ ] Em chơi thử 3 lần không lỗi<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm âm thanh khác nhau cho mỗi loại điểm (fruit catch), và mời 1 bạn chơi thử bản remix của em rồi ghi lại 1 góp ý để cải thiện thêm nếu còn thời gian. |

---

### 🖼️ Showcase (10 phút)

Đây là buổi showcase đặc biệt cuối tháng 3 — mời 3–4 em xung phong trình chiếu game mini hoàn chỉnh của mình trước cả lớp (ưu tiên các bài mức C). Cả lớp cùng chơi thử hoặc cổ vũ, giáo viên nhận xét ngắn 1 điểm mạnh của mỗi game được chiếu.

### ✅ Tổng kết (5 phút)

Nhắc lại: hôm nay em đã học My Blocks để gom code gọn gàng, học cách debug có phương pháp, và hoàn thành một game mini kết hợp mọi kỹ năng của tháng 3. Tuần sau em bước vào **Dự án game** — tự thiết kế game theo ý thích!

---

## Em đã hoàn thành tháng 3! 🎉

Sau 8 buổi (tuần 9–12), em đã biết:

- 🎲 Dùng **Operators** và **pick random**, quản lý **nhiều biến**
- 📡 Dùng **broadcast** và **trạng thái game** (chờ → chơi → kết thúc)
- 👥 Tạo **clone** cho mưa, sao rơi, bong bóng — và **xóa clone** đúng cách
- 🧩 Tạo **My Blocks** để code gọn, và **debug** khi project bị lỗi

Tuần sau em bước vào **Dự án game** — tự thiết kế game theo ý thích! Tiếp tục trong file [thang-4-du-an-game.md](thang-4-du-an-game.md) nhé! 🚀
