# Kỹ thuật nâng cao — Tuần 17 đến 20 📋🍎🏃✨

> Chào em! Đây là phần học **tháng 5** của khóa Scratch. Em đã biết làm game rồi — giờ em học những kỹ thuật giúp game của em **chuyên nghiệp hơn**: **danh sách (list)** để lưu nhiều dữ liệu, **trọng lực** để nhân vật rơi và nhảy như thật, **platformer** để chạy nhảy trên các bệ đá, và **hiệu ứng đồ họa + bút vẽ (Pen)** để game đẹp mắt!

**Tuần 17–20** | **Buổi 33–40** | Dành cho em **7–10 tuổi**

| Tuần | Buổi | Em học gì |
|------|------|-----------|
| 17 | 33–34 | Danh sách (List) — lưu nhiều giá trị cùng lúc |
| 18 | 35–36 | Trọng lực & vận tốc — rơi, nảy, nhảy |
| 19 | 37–38 | Platformer — chạy nhảy trên bệ, màn chơi |
| 20 | 39–40 | Hiệu ứng đồ họa & Pen — game đẹp mắt |

[← Về lộ trình tổng](curriculum.md) | Trước đó: [Tháng 4 — Dự án game](thang-4-du-an-game.md) | Tiếp theo: [Tháng 6 — Dự án lớn & Xuất bản](thang-6-du-an-lon-xuat-ban.md)

---

# Tuần 17 — Danh sách (List) 📋

---

## Buổi 33 — Học (H): Danh sách là gì?

### Hôm nay em học gì?

Hôm nay em học **danh sách (List)** — giống như một biến nhưng chứa được **rất nhiều giá trị cùng lúc**! Nếu biến là một chiếc hộp đựng **một** thứ, thì danh sách là một **cái tủ nhiều ngăn**: ngăn 1, ngăn 2, ngăn 3... Em sẽ dùng danh sách để làm sổ điểm danh, kho đồ, bảng điểm cao và máy bốc thăm may mắn! 📋🎰

---

### 🎬 Khởi động (10 phút)

**Trò chơi "Cái tủ nhiều ngăn"**

- Giáo viên xếp 5 chiếc ghế (hoặc 5 tờ giấy đánh số 1–5) thành một hàng trước lớp — đây là "danh sách" của lớp.
- Mời 3 bạn lên đứng vào ngăn 1, 2, 3. Hỏi cả lớp: "Bạn ở ngăn số 2 là ai? Danh sách đang có mấy bạn?"
- Giáo viên hô "Xóa ngăn 1!" → bạn ở ngăn 1 về chỗ, **hai bạn còn lại dồn lên** ngăn 1 và 2. Hỏi lại: "Giờ ngăn 1 là ai? Bạn vừa nãy ở ngăn 2 giờ ở ngăn mấy?"
- Chốt: máy tính cũng có "tủ nhiều ngăn" như vậy, gọi là **danh sách** — và khi xóa một ngăn thì các ngăn sau **tự dồn lên**.

---

### Kiến thức mới (20 phút)

**1. Biến và Danh sách khác nhau thế nào? 📦 vs 🗄️**

| | Biến (Variable) | Danh sách (List) |
|---|-----------------|------------------|
| Hình dung | Một chiếc hộp | Một cái tủ nhiều ngăn |
| Chứa được | **1** giá trị | **Rất nhiều** giá trị |
| Ví dụ | `điểm` = 25 | `bảng điểm` = 25, 18, 40, 12 |
| Khi nào dùng | Đếm điểm, mạng, thời gian | Lưu tên bạn, kho đồ, câu hỏi quiz |

**2. Tạo danh sách**

- Vào **Variables** → **Make a List** → đặt tên (ví dụ `tên bạn`) → For all sprites.
- Danh sách hiện ngay trên Stage như một bảng nhỏ có đánh số ngăn.
- Kéo góc dưới bên phải của bảng để **phóng to** cho dễ nhìn.

**3. Các khối lệnh danh sách quan trọng 🧱**

| Khối lệnh | Em dùng để làm gì? |
|-----------|-------------------|
| `add [thing] to [list]` | **Thêm** một giá trị vào **cuối** danh sách |
| `delete (1) of [list]` | **Xóa** ngăn số 1 (các ngăn sau dồn lên) |
| `delete all of [list]` | **Xóa sạch** toàn bộ danh sách |
| `insert [thing] at (1) of [list]` | **Chèn** vào giữa, ở vị trí em chọn |
| `replace item (1) of [list] with [thing]` | **Thay** nội dung một ngăn |
| `item (1) of [list]` | **Đọc** giá trị ở ngăn số 1 |
| `length of [list]` | Danh sách đang có **bao nhiêu** ngăn |
| `[list] contains [thing]?` | Danh sách **có chứa** giá trị này không? |
| `show list` / `hide list` | Hiện / ẩn bảng danh sách trên Stage |

**4. Quy tắc vàng của danh sách ⭐**

- Ngăn đầu tiên là số **1** (không phải số 0).
- `delete all of [list]` phải đặt **ngay đầu cờ xanh** — nếu không, mỗi lần chạy lại danh sách sẽ **dài mãi ra**!
- `item (length of [list]) of [list]` = giá trị **cuối cùng**.
- Bốc ngẫu nhiên: `item (pick random 1 to (length of [list])) of [list]`

```
delete all of [tên bạn]
add [An] to [tên bạn]
add [Bình] to [tên bạn]
add [Chi] to [tên bạn]
say (item (2) of [tên bạn]) for (2) secs
```

**Vì sao quan trọng?** Trước đây muốn lưu tên 5 bạn, em phải tạo 5 biến `tên1`, `tên2`, `tên3`... rất rối và không thể thêm bớt. Danh sách giải quyết gọn: **một** danh sách chứa bao nhiêu bạn cũng được, thêm bớt tùy ý. Đây chính là cách các game thật lưu **bảng điểm cao**, **kho đồ của người chơi** và **ngân hàng câu hỏi** — tháng sau em sẽ dùng nó để lưu cấu hình các màn chơi!

---

### Ví dụ mẫu 1 — Sổ điểm danh của lớp

1. **Variables** → **Make a List** → tên `điểm danh`.
2. Kéo `when green flag clicked`.
3. Gắn `delete all of [điểm danh]` (dọn sạch trước!).
4. Gắn 3 khối `add` `An` / `Bình` / `Chi` `to [điểm danh]`.
5. Gắn `say (join [Lớp có ] (length of [điểm danh])) for (2) secs`.
6. Bấm cờ xanh — bảng danh sách hiện 3 tên, sprite nói "Lớp có 3". Bấm lại lần nữa: vẫn là 3, **không bị nhân đôi** nhờ `delete all`.

### Ví dụ mẫu 2 — Máy bốc thăm ngẫu nhiên

1. Dùng lại danh sách `điểm danh` ở trên (đang có 3 tên).
2. Kéo `when space key pressed`.
3. Gắn `say (item (pick random 1 to (length of [điểm danh])) of [điểm danh]) for (2) secs`.
4. Bấm Space nhiều lần — mỗi lần máy gọi tên một bạn khác nhau! 🎰

*(Hãy để ý: `pick random 1 to (length of [list])` luôn đúng dù danh sách có 3 hay 30 tên — em không cần sửa số bằng tay khi thêm bạn mới.)*

### Em đoán xem?

Danh sách `hoa quả` đang có: ngăn 1 = `Táo`, ngăn 2 = `Chuối`, ngăn 3 = `Cam`. Nếu em chạy `delete (1) of [hoa quả]` rồi hỏi `item (1) of [hoa quả]`, em đoán kết quả là gì? Còn `length of [hoa quả]` bằng mấy? Đoán trước, rồi thử trên Scratch để kiểm tra!

---

### Thực hành 1 (TH1) — (15 phút) "Sổ tay lớp học 📋"

#### Mô tả

Em làm **sổ điểm danh điện tử**: sprite dùng `ask` hỏi tên từng bạn, mỗi tên được `add` vào danh sách, và cuối cùng sprite báo lớp có bao nhiêu bạn.

#### Yêu cầu

- Có danh sách `điểm danh` hiển thị trên Stage.
- Cờ xanh bắt đầu bằng `delete all of [điểm danh]`.
- Dùng `ask` + `add (answer) to [điểm danh]`, lặp lại **5 lần**.
- Kết thúc: `say` số bạn có trong danh sách (dùng `length of`).

#### Gợi ý từng bước

1. Tạo project mới, chọn sprite bất kỳ (gợi ý: sprite giáo viên hoặc chú mèo).
2. **Variables** → **Make a List** → tên `điểm danh` → For all sprites. Tick hiển thị trên Stage.
3. Code:
   ```
   when green flag clicked
   delete all of [điểm danh]
   repeat (5)
     ask [Bạn tên gì?] and wait
     add (answer) to [điểm danh]
   say (join [Lớp có ] (length of [điểm danh])) for (3) secs
   ```
4. Bấm cờ xanh, nhập 5 tên bạn trong lớp — xem bảng danh sách dài dần.
5. Bấm cờ xanh **lần thứ hai**, nhập lại — kiểm tra danh sách vẫn chỉ có 5 tên (nhờ `delete all`).
6. (Tùy chọn) Thử **xóa** khối `delete all` rồi chạy lại để thấy danh sách dài gấp đôi — sau đó gắn lại!
7. **Lưu project** với tên `TH1-so-diem-danh`.

#### Checklist tự kiểm

- [ ] Có danh sách `điểm danh` hiện trên Stage
- [ ] Cờ xanh có `delete all of` ở đầu
- [ ] Hỏi và thêm được đủ 5 tên
- [ ] Cuối cùng `say` đúng số bạn (5)
- [ ] Chạy lại lần 2 danh sách không bị dài thêm
- [ ] Em đã lưu project

---

### 🤸 Giải lao vận động (5 phút)

**Trò chơi "Danh sách sống"**

- Cả lớp đứng thành một hàng dọc — đây là danh sách sống, mỗi bạn là một ngăn.
- Giáo viên hô lệnh, cả lớp làm theo bằng cơ thể: "**add** bạn Nam!" → bạn Nam chạy vào **cuối hàng**; "**delete 1**!" → bạn đầu hàng ngồi xuống, cả hàng **bước lên một bước**.
- Hô "**item 3**!" → bạn đứng thứ 3 giơ tay và hô tên mình thật to.
- Hô "**length**!" → cả hàng cùng đếm to số bạn đang đứng.
- Chơi 5–6 lệnh, tăng dần tốc độ — ai làm sai thì tự nhận vai "ngăn cuối cùng" ở lượt sau cho vui.

---

### Thực hành 2 (TH2) — (15 phút) "Máy bốc thăm may mắn 🎰"

#### Mô tả

Em làm **máy bốc thăm không trùng lặp**: nhấn Space là máy gọi tên ngẫu nhiên một bạn, rồi **xóa tên đó khỏi danh sách** để lần sau không gọi trúng bạn ấy nữa. Hết danh sách thì máy báo "Đã gọi hết!".

#### Yêu cầu

- Danh sách `chờ bốc` có sẵn ít nhất 5 tên khi bấm cờ xanh.
- Nhấn Space → bốc ngẫu nhiên 1 ngăn → `say` tên → `delete` đúng ngăn đó.
- Dùng **biến** `ngăn` để nhớ số ngăn vừa bốc (bốc và xóa phải cùng một ngăn!).
- Khi `length of [chờ bốc]` `=` `0` → `say` `Đã gọi hết!`.

#### Gợi ý từng bước

1. Tạo danh sách `chờ bốc` và **biến** `ngăn`.
2. **Code cờ xanh** — nạp sẵn danh sách:
   ```
   when green flag clicked
   delete all of [chờ bốc]
   add [An] to [chờ bốc]
   add [Bình] to [chờ bốc]
   add [Chi] to [chờ bốc]
   add [Dũng] to [chờ bốc]
   add [Giang] to [chờ bốc]
   ```
3. **Code bốc thăm:**
   ```
   when space key pressed
   if <(length of [chờ bốc]) = (0)> then
     say [Đã gọi hết rồi!] for (2) secs
   else
     set [ngăn] to (pick random 1 to (length of [chờ bốc]))
     say (join [Mời bạn: ] (item (ngăn) of [chờ bốc])) for (2) secs
     delete (ngăn) of [chờ bốc]
   ```
4. Bấm cờ xanh rồi nhấn Space 6 lần liên tiếp — 5 lần đầu gọi 5 tên **khác nhau**, lần thứ 6 báo hết.
5. (Tùy chọn) Thêm `start sound [Pop]` mỗi lần bốc cho vui tai.
6. **Lưu project** với tên `TH2-may-boc-tham`.

#### Checklist tự kiểm

- [ ] Danh sách có sẵn 5 tên khi bấm cờ xanh
- [ ] Space bốc được tên ngẫu nhiên
- [ ] Tên đã bốc **biến mất** khỏi danh sách
- [ ] Không bao giờ gọi trùng tên đã gọi
- [ ] Hết danh sách thì báo "Đã gọi hết!"
- [ ] Em đã lưu project

---

### 🤝 Thử thách nhóm/sáng tạo (10–15 phút)

**"Máy bốc thăm của tổ em"**

- Chia lớp thành các tổ 3–4 bạn. Mỗi tổ dùng chung một máy, cùng sửa project TH2 thành máy bốc thăm cho **việc thật** của tổ: bốc tên bạn trực nhật, bốc câu hỏi ôn bài, hoặc bốc trò chơi giải lao.
- Mỗi tổ tự nạp danh sách riêng (ít nhất 6 mục) và thêm **một điểm nhấn**: âm thanh trống, hiệu ứng đổi màu, hoặc sprite nhảy múa khi bốc trúng.
- Cuối hoạt động, mỗi tổ cử một bạn bấm Space bốc thử trước lớp — cả lớp cùng hồi hộp xem trúng ai/trúng gì!
- Giáo viên hỏi nhanh: "Tổ nào có ý tưởng dùng danh sách vào việc thật hay nhất?"

---

### Mẹo nhỏ 💡

- Nhớ `delete all of [list]` **ngay đầu cờ xanh** — đây là lỗi hay gặp nhất với danh sách!
- Ngăn đầu tiên là **1**, không phải 0.
- Muốn bốc rồi xóa đúng ngăn: **lưu số ngăn vào biến trước**, dùng biến đó cho cả `item` và `delete`.
- Bảng danh sách trên Stage kéo góc được — phóng to cho cả lớp dễ nhìn khi demo.
- `length of [list]` rất hữu ích: dùng nó thay vì gõ số cứng để code vẫn đúng khi danh sách dài ra.
- Nếu bảng danh sách che mất nhân vật, dùng `hide list` khi chơi game và `show list` khi cần xem.

---

### 🎉 Tổng kết & Ôn tập trò chơi (10 phút)

**"Ai nhanh hơn — Đọc ngăn"** — giáo viên viết lên bảng một danh sách 4 món (ví dụ: 1-Táo, 2-Chuối, 3-Cam, 4-Xoài), rồi hỏi nhanh, ai giơ tay trước và đúng được 1 điểm:

1. `item (3) of [hoa quả]` cho ra gì?
2. `length of [hoa quả]` bằng mấy?
3. Sau khi `delete (2) of [hoa quả]`, ngăn 2 giờ là món nào?
4. Muốn thêm `Nho` vào cuối, em dùng khối nào?
5. Vì sao phải `delete all` khi bấm cờ xanh?
6. Biến và danh sách khác nhau ở điểm nào?

- Mời 1–2 em chia sẻ máy bốc thăm TH2 của mình.
- Hẹn gặp lại ở buổi Bài tập tuần này để làm Luyện tập 1, 2 và bài mở rộng!

---

### 👩‍🏫 Ghi chú cho giáo viên

**Kịch bản demo nhanh:**
- Mở Scratch, tạo một list rồi kéo bảng list trên Stage cho to hết cỡ — cả lớp cần **nhìn thấy** các ngăn thay đổi theo từng khối lệnh.
- Demo `delete (1)` thật chậm trên máy chiếu, chỉ tay vào màn hình cho học sinh thấy các ngăn **dồn lên** — đây là điểm khó hiểu nhất của bài.
- Demo cố ý **quên** `delete all of` rồi bấm cờ xanh 3 lần liên tiếp để học sinh thấy danh sách phình to — ấn tượng này giúp các em nhớ rất lâu.

**Lỗi thường gặp (ngoài phần Mẹo nhỏ):**
- Nhầm **Make a Variable** với **Make a List** — nhắc học sinh nhìn kỹ hai nút trong nhóm Variables.
- Ở TH2, học sinh viết `pick random` **hai lần** (một lần cho `item`, một lần cho `delete`) nên gọi tên bạn này lại xóa tên bạn khác — đây là lỗi trọng tâm của buổi, nhắc kỹ về biến `ngăn`.
- Quên trường hợp danh sách rỗng nên `item (pick random 1 to 0)` trả về ô trống — nhắc kiểm tra `length = 0` trước.

**Quản lý lớp học:**
- Trò chơi "Danh sách sống" cần khoảng trống — dồn bàn ghế hoặc ra hành lang, nhắc học sinh bước chứ không chạy.
- Ở TH1, một số em gõ tên rất chậm — cho phép gõ tên ngắn hoặc dùng số thứ tự để kịp giờ.
- Với hoạt động nhóm, mỗi tổ chỉ dùng **một** máy để tránh chia rẽ; các bạn khác giữ vai trò đọc yêu cầu và kiểm tra checklist.

---
## Buổi 34 — Bài tập (BT): Luyện Danh sách 📋

### 🎬 Khởi động ôn tập (10 phút)

**"Đúng hay Sai?"** — Giáo viên đọc từng câu, học sinh giơ ngón cái lên (Đúng) hoặc xuống (Sai):
1. "Một danh sách chỉ chứa được 1 giá trị." (Sai — danh sách chứa rất nhiều giá trị)
2. "Ngăn đầu tiên của danh sách là số 0." (Sai — là số **1**)
3. "`add [Táo] to [list]` thêm Táo vào **cuối** danh sách." (Đúng)
4. "Khi xóa ngăn 1, các ngăn phía sau dồn lên." (Đúng)
5. "Không cần `delete all` ở cờ xanh, danh sách vẫn luôn đúng." (Sai — danh sách sẽ dài mãi ra)

### Ôn nhanh

Nhớ lại buổi trước nhé em:

- **Danh sách** = cái tủ nhiều ngăn; **biến** = một chiếc hộp.
- `add` thêm cuối, `delete (n)` xóa ngăn n, `delete all` dọn sạch.
- `item (n) of [list]` đọc ngăn n; `length of [list]` đếm số ngăn.
- Luôn `delete all` **ngay đầu cờ xanh**!
- Bốc ngẫu nhiên: lưu số ngăn vào **biến** rồi dùng lại cho `item` và `delete`.

---

### ✍️ Luyện tập 1, 2 (LT1/LT2) (15–20 phút)

Đầu buổi, em làm tại lớp có hướng dẫn hai bài luyện tập ngắn, nối tiếp buổi Học tuần trước — không phải chữa bài tập về nhà, mà là luyện lại ngay tại lớp có giáo viên hỗ trợ.

*Gợi ý:* Em có thể đổi máy với bạn bên cạnh trong 2 phút để cùng kiểm tra checklist của nhau — nếu phát hiện thiếu bước nào, nhắc bạn bổ sung.

#### Luyện tập 1 (LT1) — "Thực đơn quán ăn 🍜"

**Mô tả:** Em làm **thực đơn điện tử** cho quán ăn nhỏ: nhấn phím `a` để thêm món mới, nhấn phím `d` để xóa món cuối, nhấn `r` để xóa sạch thực đơn — làm ngay tại lớp có giáo viên hỗ trợ.

**Yêu cầu:**
- Danh sách `thực đơn` hiển thị trên Stage.
- Phím `a` → `ask` tên món → `add` vào danh sách.
- Phím `d` → xóa món **cuối cùng**.
- Phím `r` → `delete all` và báo "Đã dọn sạch!".

**Gợi ý từng bước:**
1. Tạo danh sách `thực đơn`, tick hiển thị trên Stage.
2. `when green flag clicked` → `delete all of [thực đơn]`.
3. `when [a] key pressed`:
   - `ask [Thêm món gì?] and wait`
   - `add (answer) to [thực đơn]`
4. `when [d] key pressed`:
   - `delete (length of [thực đơn]) of [thực đơn]`
5. `when [r] key pressed`:
   - `delete all of [thực đơn]` → `say [Đã dọn sạch!] for (1) secs`
6. Thử thêm 4 món, xóa 2 món, rồi dọn sạch.
7. Lưu project tên `LT1-thuc-don`.

**Checklist tự kiểm:**
- [ ] Phím `a` thêm được món
- [ ] Phím `d` xóa đúng món cuối
- [ ] Phím `r` dọn sạch danh sách
- [ ] Em đã lưu project

| Em kiểm tra | Đúng khi... |
|-------------|-------------|
| Thêm món | Món mới xuất hiện ở **cuối** bảng |
| Xóa cuối | Món vừa thêm biến mất, món cũ còn nguyên |
| Dọn sạch | Bảng trống hoàn toàn, có thông báo |
| Chạy lại | Bấm cờ xanh → bảng trống, không còn món cũ |

**Nếu chưa đúng:** Kiểm tra `delete (length of [thực đơn])` — nếu em gõ số cứng (ví dụ `delete 3`) thì chỉ đúng khi danh sách có đúng 3 món.

#### Luyện tập 2 (LT2) — "Bảng điểm cao 🏆"

**Mô tả:** Em làm **bảng lưu điểm** cho game: sau mỗi ván, điểm được `add` vào danh sách `bảng điểm`, và sprite so sánh để báo xem đây có phải **kỷ lục mới** không — làm ngay tại lớp, có khó khăn gì cứ hỏi giáo viên.

**Yêu cầu:**
- Danh sách `bảng điểm` và biến `điểm cao nhất` hiển thị trên Stage.
- Nhấn Space → tạo một điểm ngẫu nhiên 1–100 (giả vờ là điểm ván vừa chơi) → `add` vào `bảng điểm`.
- Nếu điểm mới **lớn hơn** `điểm cao nhất` → cập nhật và `say` `Kỷ lục mới!`.
- Danh sách lưu được ít nhất 5 ván.

**Gợi ý từng bước:**
1. Tạo danh sách `bảng điểm`, biến `điểm ván này` và `điểm cao nhất`.
2. `when green flag clicked`:
   - `delete all of [bảng điểm]`
   - `set [điểm cao nhất] to (0)`
3. `when space key pressed`:
   ```
   set [điểm ván này] to (pick random 1 to 100)
   add (điểm ván này) to [bảng điểm]
   if <(điểm ván này) > (điểm cao nhất)> then
     set [điểm cao nhất] to (điểm ván này)
     say [🏆 Kỷ lục mới!] for (2) secs
   else
     say (join [Điểm: ] (điểm ván này)) for (1) secs
   ```
4. Nhấn Space 6–7 lần, quan sát bảng dài dần và biến `điểm cao nhất` chỉ tăng, không giảm.
5. Lưu project tên `LT2-bang-diem-cao`.

**Checklist tự kiểm:**
- [ ] Mỗi lần Space thêm 1 điểm vào bảng
- [ ] Biến `điểm cao nhất` chỉ tăng, không bao giờ giảm
- [ ] Có thông báo khi phá kỷ lục
- [ ] Em đã lưu project

| Em kiểm tra | Đúng khi... |
|-------------|-------------|
| Lưu điểm | Bảng dài thêm 1 dòng sau mỗi lần Space |
| Kỷ lục | `điểm cao nhất` = số lớn nhất trong bảng |
| Thông báo | Chỉ báo "Kỷ lục mới" khi thật sự vượt |
| Chạy lại | Cờ xanh → bảng trống, kỷ lục về 0 |

**Nếu `điểm cao nhất` bị giảm:** Kiểm tra em có dùng `set điểm cao nhất to (điểm ván này)` **bên ngoài** khối `if` không — nó phải nằm **bên trong** `if`.

---

### 🎯 Giới thiệu bài mở rộng (10 phút)

Giáo viên demo nhanh **1 ví dụ mẫu** (ví dụ bài B1 "Quiz bốc câu ngẫu nhiên") trên máy chiếu — chỉ rõ cách dùng **hai danh sách song song** (câu hỏi và đáp án cùng số ngăn), trước khi học sinh tự chọn mức bài cho mình.

Em chọn **1 mức** A, B hoặc C, rồi chọn **1 trong 2 bài** của mức đó. Làm hết checklist trước khi đổi bài.

| Mức | Khi nào chọn |
|-----|--------------|
| **A1 hoặc A2** | Em luyện `add` / `delete` / `item` cơ bản |
| **B1 hoặc B2** | Em luyện bốc ngẫu nhiên từ danh sách và dùng `contains` |
| **C1 hoặc C2** | Em làm game dùng **2 danh sách song song** |

---

### ✍️ Làm bài mở rộng (30–35 phút)

#### Bài A1 — Sổ điểm danh câu lạc bộ 📋

| | Nội dung |
|---|----------|
| **Mô tả** | Câu lạc bộ Lập trình của trường vừa mở, và em được giao làm **thư ký** — mỗi buổi sinh hoạt em phải ghi tên các bạn có mặt. Em làm sổ điểm danh: gõ tên bạn nào thì tên bạn đó xuất hiện trên bảng, cuối buổi máy báo tổng số bạn tham gia. |
| **Yêu cầu bắt buộc** | Danh sách `có mặt`; `delete all` ở cờ xanh; `ask` + `add` ít nhất 5 lần; `say` tổng số bằng `length of` |
| **Gợi ý bước** | 1. Tạo danh sách `có mặt`. 2. Cờ xanh → `delete all`. 3. `repeat (5)` → `ask [Tên bạn?]` → `add (answer)`. 4. `say (join [Có mặt: ] (length of [có mặt]))`. 5. Lưu project. |
| **Checklist** | - [ ] Danh sách hiện trên Stage<br>- [ ] Thêm được ≥ 5 tên<br>- [ ] Báo đúng tổng số<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm phím `x` để xóa tên bạn vừa ghi nhầm (xóa ngăn cuối), và dùng `[có mặt] contains (answer)?` để cảnh báo "Bạn này đã điểm danh rồi!" khi có tên trùng. |

---

#### Bài A2 — Kho đồ của nhà thám hiểm 🎒

| | Nội dung |
|---|----------|
| **Mô tả** | Nhân vật của em là một nhà thám hiểm nhỏ đang đi rừng. Trên đường đi, em nhặt được **đá quý, bản đồ, đèn pin**... và tất cả được cất vào **kho đồ (ba lô)**. Nhấn phím để nhặt đồ, nhấn phím khác để dùng (bỏ) món đầu tiên. |
| **Yêu cầu bắt buộc** | Danh sách `ba lô`; phím thêm đồ; phím dùng (xóa ngăn 1) + `say` tên món vừa dùng; `delete all` ở cờ xanh |
| **Gợi ý bước** | 1. Danh sách `ba lô`. 2. Cờ xanh → `delete all`. 3. Phím `1`/`2`/`3` → `add [Đá quý]` / `add [Bản đồ]` / `add [Đèn pin]`. 4. Phím `u` → `say (item (1) of [ba lô])` → `delete (1) of [ba lô]`. 5. Lưu project. |
| **Checklist** | - [ ] Nhặt được ≥ 3 loại đồ<br>- [ ] Dùng đồ thì món đó biến mất<br>- [ ] Ba lô trống khi bấm cờ xanh<br>- [ ] Em đã lưu project |
| **Thử thêm** | Giới hạn ba lô chỉ chứa tối đa 5 món: nếu `length of [ba lô] = 5` thì `say [Ba lô đầy rồi!]` và không cho nhặt thêm — giống hệt kho đồ trong game thật. |

---

#### Bài B1 — Quiz bốc câu ngẫu nhiên 🎓

| | Nội dung |
|---|----------|
| **Mô tả** | Em làm **máy đố vui** cho lớp: máy có sẵn 5 câu hỏi trong danh sách, mỗi lần chơi máy **bốc ngẫu nhiên** một câu để hỏi — nên chơi 10 lần vẫn thấy mới mẻ! Trả lời đúng được cộng điểm. |
| **Yêu cầu bắt buộc** | Hai danh sách `câu hỏi` và `đáp án` **cùng số ngăn**; biến `số câu` lưu ngăn được bốc; `ask` hỏi; so sánh `answer` với `item (số câu) of [đáp án]`; biến `điểm` |
| **Gợi ý bước** | 1. Hai danh sách + biến `số câu`, `điểm`. 2. Cờ xanh: nạp 5 câu hỏi + 5 đáp án đúng thứ tự, `set điểm to 0`. 3. `repeat (3)`: `set số câu to (pick random 1 to 5)` → `ask (item (số câu) of [câu hỏi])` → `if answer = item (số câu) of [đáp án]` → `change điểm by 1` + say Đúng, `else` → say đáp án đúng. 4. Lưu project. |
| **Checklist** | - [ ] Hai danh sách cùng số ngăn<br>- [ ] Câu hỏi đổi mỗi lần chơi<br>- [ ] Chấm đúng/sai chính xác<br>- [ ] Có biến điểm<br>- [ ] Em đã lưu project |
| **Thử thêm** | Dùng danh sách `đã hỏi` để **không hỏi trùng câu** trong một lượt chơi: mỗi lần bốc, kiểm tra `[đã hỏi] contains (số câu)?` — nếu rồi thì bốc lại, nếu chưa thì hỏi và `add` số câu đó vào `đã hỏi`. |

---

#### Bài B2 — Máy gợi ý trò chơi giờ ra chơi 🎡

| | Nội dung |
|---|----------|
| **Mô tả** | Giờ ra chơi cả nhóm cứ tranh cãi mãi không biết chơi gì. Em làm **máy quyết định**: nhập vào danh sách các trò cả nhóm thích, bấm nút là máy bốc ngẫu nhiên một trò — quyết định xong trong 2 giây, không ai cãi nữa! |
| **Yêu cầu bắt buộc** | Danh sách `trò chơi`; `ask` để người dùng tự nhập ít nhất 4 trò; nhấn Space → bốc ngẫu nhiên và `say`; dùng `[trò chơi] contains (answer)?` để chặn nhập trùng |
| **Gợi ý bước** | 1. Danh sách `trò chơi`. 2. Cờ xanh → `delete all` → `repeat (4)`: `ask [Trò gì?]` → `if not <[trò chơi] contains (answer)?>` → `add (answer)`, `else` → `say [Trùng rồi!]`. 3. Space → `say (item (pick random 1 to (length of [trò chơi])) of [trò chơi]) for (3) secs`. 4. Lưu project. |
| **Checklist** | - [ ] Nhập được ≥ 4 trò<br>- [ ] Chặn được trò nhập trùng<br>- [ ] Space bốc ra trò ngẫu nhiên<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm hiệu ứng "quay số": trước khi công bố kết quả, cho sprite `repeat (10)` nói nhanh các trò ngẫu nhiên rồi mới dừng lại ở kết quả cuối — hồi hộp như vòng quay may mắn thật! |

---

#### Bài C1 — Bảng xếp hạng có tên và điểm 🥇

| | Nội dung |
|---|----------|
| **Mô tả** | Lớp em tổ chức giải đấu game mini, và em làm **bảng vàng thành tích**: mỗi lượt chơi ghi lại **tên** người chơi và **điểm** của họ vào hai danh sách song song, rồi máy tự tìm và công bố **nhà vô địch**. |
| **Yêu cầu bắt buộc** | Hai danh sách `tên` và `điểm` cùng số ngăn; `ask` nhập tên + điểm cho ≥ 4 người; dùng vòng lặp duyệt tìm điểm lớn nhất; `say` tên + điểm của người vô địch |
| **Gợi ý bước** | 1. Hai danh sách + biến `i`, `điểm max`, `tên max`. 2. Cờ xanh: `delete all` cả hai → `repeat (4)`: ask tên → add, ask điểm → add. 3. Tìm vô địch: `set i to 1`, `set điểm max to 0`, `repeat (length of [tên])`: `if (item (i) of [điểm]) > (điểm max)` → `set điểm max to (item (i) of [điểm])` + `set tên max to (item (i) of [tên])`; `change i by 1`. 4. `say (join (tên max) (join [ vô địch với  ] (điểm max)))`. 5. Lưu project. |
| **Checklist** | - [ ] Hai danh sách luôn cùng số ngăn<br>- [ ] Nhập được ≥ 4 người chơi<br>- [ ] Tìm đúng người điểm cao nhất<br>- [ ] Công bố cả tên và điểm<br>- [ ] Em đã lưu project |
| **Thử thêm** | Tìm thêm **hạng bét** (điểm thấp nhất) để trao giải "Cố gắng nhất", và đếm xem có bao nhiêu bạn đạt trên 50 điểm bằng biến `số bạn giỏi`. |

---

#### Bài C2 — Trò chơi ghi nhớ chuỗi màu 🧠

| | Nội dung |
|---|----------|
| **Mô tả** | Em làm game **luyện trí nhớ** kiểu "Simon says": máy đọc một chuỗi màu (Đỏ, Xanh, Vàng...) dài dần qua từng vòng, em phải gõ lại **đúng thứ tự**. Sai một bước là thua — càng nhớ được dài, điểm càng cao! |
| **Yêu cầu bắt buộc** | Danh sách `chuỗi máy`; mỗi vòng `add` thêm 1 màu ngẫu nhiên; máy đọc lại toàn chuỗi bằng vòng lặp; `ask` từng bước và so sánh với `item (i)`; sai → thua, đúng hết → sang vòng sau |
| **Gợi ý bước** | 1. Danh sách `chuỗi máy`, biến `i`, `vòng`, `màu`. 2. Cờ xanh: `delete all`, `set vòng to 0`. 3. Mỗi vòng: `change vòng by 1` → `set màu to (item (pick random 1 to 3) of [bảng màu])` hoặc random 1–3 rồi quy ra màu → `add` vào `chuỗi máy`. 4. Máy đọc: `set i to 1`, `repeat (length of [chuỗi máy])`: `say (item (i) of [chuỗi máy]) for (0.6) secs` → `change i by 1`. 5. Em nhập lại: `set i to 1`, `repeat (length of [chuỗi máy])`: `ask [Màu số i?]` → `if answer ≠ item (i)` → `say [Sai rồi!]` + `stop all`; `change i by 1`. 6. Lưu project. |
| **Checklist** | - [ ] Chuỗi dài thêm 1 màu mỗi vòng<br>- [ ] Máy đọc lại đúng toàn bộ chuỗi<br>- [ ] Nhập sai thì thua ngay<br>- [ ] Qua vòng thì chơi tiếp<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thay chữ bằng **hiệu ứng hình**: mỗi màu là một sprite nhấp nháy (`change color effect` + `wait`), và ghi kỷ lục "vòng cao nhất" vào một danh sách `kỷ lục` để so tài với các bạn trong lớp. |

---

### 🖼️ Showcase (10 phút)

"Gallery walk" — em để project đang chạy trên máy, cả lớp đứng dậy đi vòng quanh xem project của 3–4 bạn gần nhất trong 1–2 phút, đặc biệt chú ý các bài mức C xem bảng danh sách của bạn hoạt động thế nào. Giáo viên mời 2–3 em xung phong trình chiếu project của mình trước lớp.

### ✅ Tổng kết (5 phút)

Nhắc lại: hôm nay em đã luyện `add`, `delete`, `item`, `length`, `contains` và cách dùng **hai danh sách song song** để lưu thông tin đi kèm nhau. Buổi sau (**Buổi 35 — Trọng lực & vận tốc**) em sẽ học cách làm nhân vật rơi và nhảy **giống thật**, mở đường cho game platformer!

---
# Tuần 18 — Trọng lực & vận tốc 🍎

---

## Buổi 35 — Học (H): Trọng lực, rơi và nhảy

### Hôm nay em học gì?

Hôm nay em học cách làm nhân vật **rơi và nhảy giống thật**! Bí mật nằm ở một biến tên là **vận tốc** (`vy`): thay vì bảo nhân vật "đi xuống 10 bước", em cho nó **rơi mỗi lúc một nhanh hơn** — đúng như quả táo rơi từ trên cây. Đây là kỹ thuật mà **mọi game nhảy** trên thế giới đều dùng! 🍎🦘

---

### 🎬 Khởi động (10 phút)

**Trò chơi "Thả rơi và đoán"**

- Giáo viên cầm một tờ giấy vo tròn (hoặc quả bóng nhỏ) giơ cao rồi thả. Hỏi cả lớp: "Lúc mới rời tay, nó rơi nhanh hay chậm? Lúc gần chạm đất thì sao?"
- Thả lại lần nữa, cả lớp cùng quan sát: vật **rơi càng lúc càng nhanh**, không phải rơi đều.
- Mời 2–3 bạn lên nhảy tại chỗ. Hỏi: "Khi bạn bật lên, bạn đi lên nhanh nhất lúc nào? Lúc cao nhất bạn có đứng yên một chút không? Rồi chuyện gì xảy ra?"
- Chốt: mọi vật nhảy lên đều **chậm dần** rồi **rơi nhanh dần** — hôm nay em dạy máy tính làm đúng như vậy bằng một biến duy nhất.

---

### Kiến thức mới (20 phút)

**1. Vấn đề của cách cũ 😕**

Từ trước tới nay em cho nhân vật đi xuống bằng `change y by (-5)` — nó rơi **đều đều** như thang máy, trông rất giả. Ngoài đời không có gì rơi đều cả!

**2. Ý tưởng lớn: thêm biến `vy` (vận tốc dọc) 🚀**

| Khái niệm | Nghĩa là gì? | Trong Scratch |
|-----------|--------------|---------------|
| **Vị trí** | Nhân vật đang ở đâu | `y position` |
| **Vận tốc `vy`** | Mỗi bước nhân vật dịch chuyển bao nhiêu | biến `vy` |
| **Trọng lực** | Mỗi bước vận tốc bị kéo xuống thêm bao nhiêu | `change [vy] by (-1)` |

**Vòng lặp trọng lực — trái tim của bài học:**

```
forever
  change [vy] by (-1)        // trọng lực kéo xuống
  change y by (vy)           // di chuyển theo vận tốc
```

- `vy` dương → nhân vật **đi lên**.
- `vy` âm → nhân vật **rơi xuống**.
- Mỗi vòng lặp `vy` giảm 1 → rơi **nhanh dần**. Đúng như quả táo! 🍎

**3. Bảng theo dõi `vy` khi nhảy 📊**

Giả sử nhân vật nhảy với `vy = 10`, trọng lực −1 mỗi bước:

| Bước | `vy` | Nhân vật làm gì |
|------|------|-----------------|
| 1 | 10 → 9 | Bay lên nhanh |
| 2 | 9 → 8 | Bay lên chậm hơn |
| ... | ... | ... |
| 10 | 1 → 0 | **Đứng yên ở đỉnh** |
| 11 | 0 → −1 | Bắt đầu rơi |
| 15 | −4 → −5 | Rơi nhanh dần |

**4. Chạm đất thì dừng lại 🛬**

Nếu không có đất, nhân vật rơi mãi xuống dưới màn hình! Em cần kiểm tra:

```
if <(y position) < (-120)> then      // -120 là mặt đất
  set y to (-120)                     // đặt đúng trên mặt đất
  set [vy] to (0)                     // dừng rơi
```

**5. Nhảy — chỉ khi đang đứng trên đất! 🦘**

```
if <<key (space) pressed?> and <(y position) = (-120)>> then
  set [vy] to (12)
```

Điều kiện `y position = -120` rất quan trọng: nó ngăn nhân vật **nhảy giữa không trung** (bấm Space liên tục để bay lên trời).

**Vì sao quan trọng?** Đây là bước nhảy vọt từ "hoạt hình" sang "game thật". Mọi game nhảy — từ Mario, Flappy Bird cho tới các game em chơi trên điện thoại — đều dùng đúng công thức `vy` + trọng lực này. Nắm được nó, tuần sau em sẽ làm được **platformer** có bệ đá, và tháng sau đưa vào dự án game lớn của mình!

---

### Ví dụ mẫu 1 — Quả bóng rơi và nảy

1. Chọn sprite Ball, tạo biến `vy`.
2. Code:
   ```
   when green flag clicked
   go to x: (0) y: (150)
   set [vy] to (0)
   forever
     change [vy] by (-1)
     change y by (vy)
     if <(y position) < (-130)> then
       set y to (-130)
       set [vy] to (8)
   ```
3. Bấm cờ xanh — quả bóng rơi nhanh dần, chạm đáy thì **nảy lên** rồi lại rơi, mãi mãi. 🏀
4. Thử đổi `set vy to (8)` thành `(12)` → bóng nảy cao hơn; đổi thành `(4)` → nảy thấp hơn.

### Ví dụ mẫu 2 — So sánh rơi đều và rơi có trọng lực

1. Đặt **hai** sprite cạnh nhau ở cùng độ cao y = 150.
2. Sprite A (cách cũ): `forever` → `change y by (-4)`.
3. Sprite B (cách mới): `forever` → `change vy by (-1)` → `change y by (vy)`.
4. Bấm cờ xanh, quan sát: lúc đầu A rơi nhanh hơn, nhưng càng về sau B **vượt hẳn** A và chạm đáy trước.

*(Cùng là rơi, nhưng A rơi đều như thang máy còn B rơi nhanh dần như ngoài đời — đây chính là cảm giác "thật" mà người chơi nhận ra ngay dù không giải thích được.)*

### Em đoán xem?

Nhân vật đang có `vy = 3`, trọng lực mỗi bước là `−1`. Sau **4 bước** nữa, `vy` bằng bao nhiêu? Lúc đó nhân vật đang đi lên hay đi xuống? Đoán trước, rồi thử trên Scratch để kiểm tra!

---

### Thực hành 1 (TH1) — (15 phút) "Quả táo rơi 🍎"

#### Mô tả

Em làm quả táo **rơi từ trên cây xuống đất giống thật**: rơi chậm lúc đầu, nhanh dần về sau, chạm đất thì nằm yên (không xuyên qua đất, không rơi mất).

#### Yêu cầu

- Có biến `vy` hiển thị trên Stage (để em quan sát nó thay đổi).
- Cờ xanh: táo về vị trí trên cao, `set vy to 0`.
- `forever`: `change vy by (-1)` rồi `change y by (vy)`.
- Chạm mặt đất (y < −120) → `set y to -120` và `set vy to 0`.
- Nhấn Space → táo bay lại lên cao để rơi lần nữa.

#### Gợi ý từng bước

1. Tạo project mới, chọn backdrop có mặt đất, chọn sprite **Apple** (hoặc Ball).
2. Tạo biến `vy` → tick hiển thị trên Stage.
3. Code chính:
   ```
   when green flag clicked
   go to x: (0) y: (150)
   set [vy] to (0)
   forever
     change [vy] by (-1)
     change y by (vy)
     if <(y position) < (-120)> then
       set y to (-120)
       set [vy] to (0)
   ```
4. Bấm cờ xanh, **nhìn kỹ biến `vy`** trên Stage: nó giảm dần 0 → −1 → −2 → −3... rồi về 0 khi chạm đất.
5. Thêm khối thả lại:
   ```
   when space key pressed
   go to x: (0) y: (150)
   set [vy] to (0)
   ```
6. Nhấn Space vài lần để thả táo lại nhiều lần.
7. (Tùy chọn) Thêm `start sound [Pop]` ngay sau `set y to (-120)` để nghe tiếng táo chạm đất.
8. **Lưu project** với tên `TH1-qua-tao-roi`.

#### Checklist tự kiểm

- [ ] Có biến `vy` hiện trên Stage
- [ ] Táo rơi **nhanh dần**, không rơi đều
- [ ] Táo dừng đúng trên mặt đất, không xuyên xuống dưới
- [ ] `vy` về 0 khi chạm đất
- [ ] Space thả táo lại được
- [ ] Em đã lưu project

---

### 🤸 Giải lao vận động (5 phút)

**Trò chơi "Nhảy theo vận tốc"**

- Cả lớp đứng tại chỗ. Giáo viên hô một con số `vy` — học sinh nhảy cao tương ứng: `vy = 3` nhảy nhẹ, `vy = 8` nhảy vừa, `vy = 15` nhảy hết sức!
- Sau mỗi lần nhảy, giáo viên hô "trọng lực!" và cả lớp cùng ngồi thụp xuống — về đúng "mặt đất".
- Thử thách vui: giáo viên hô `vy = 0` → cả lớp phải **đứng im hoàn toàn** (vì vận tốc bằng 0 nghĩa là không di chuyển). Ai nhúc nhích là "bị trọng lực bắt".
- Chơi 5–6 lượt, xen kẽ số lớn số nhỏ để em cảm nhận được vận tốc lớn = nhảy cao.

---

### Thực hành 2 (TH2) — (15 phút) "Nhân vật biết nhảy 🦘"

#### Mô tả

Em cho nhân vật **chạy trái phải và nhảy** bằng phím: mũi tên trái/phải để đi, phím Space để nhảy. Nhân vật chỉ nhảy được **khi đang đứng trên đất** — bấm Space giữa không trung sẽ không có tác dụng.

#### Yêu cầu

- Biến `vy`; nhân vật đứng trên mặt đất y = −120 khi bắt đầu.
- Mũi tên trái/phải → `change x by (-5)` / `(5)`.
- Space → **chỉ khi đang đứng trên đất** → `set vy to (12)`.
- Trọng lực chạy liên tục trong `forever`.
- Chạm đất → `set y to (-120)`, `set vy to 0`.

#### Gợi ý từng bước

1. Chọn sprite nhân vật (gợi ý: Cat hoặc Avery), backdrop có mặt đất.
2. Tạo biến `vy`.
3. **Code chính — tất cả trong một `forever`:**
   ```
   when green flag clicked
   go to x: (0) y: (-120)
   set [vy] to (0)
   forever
     if <key (right arrow) pressed?> then
       change x by (5)
     if <key (left arrow) pressed?> then
       change x by (-5)
     if <<key (space) pressed?> and <(y position) = (-120)>> then
       set [vy] to (12)
     change [vy] by (-1)
     change y by (vy)
     if <(y position) < (-120)> then
       set y to (-120)
       set [vy] to (0)
   ```
4. Bấm cờ xanh: đi trái phải bằng mũi tên, nhảy bằng Space.
5. **Thử phá game:** bấm Space liên tục thật nhanh — nhân vật có bay lên trời không? Nếu có, kiểm tra lại điều kiện `and (y position) = (-120)`.
6. (Tùy chọn) Thêm `switch costume` khi nhảy, hoặc `start sound [Boing]`.
7. **Lưu project** với tên `TH2-nhan-vat-biet-nhay`.

#### Checklist tự kiểm

- [ ] Đi được trái và phải bằng mũi tên
- [ ] Space nhảy lên rồi rơi xuống mượt mà
- [ ] **Không** nhảy được khi đang ở giữa không trung
- [ ] Luôn đáp đúng xuống mặt đất
- [ ] Nhảy nhiều lần liên tiếp vẫn ổn định
- [ ] Em đã lưu project

---

### 🤝 Thử thách nhóm/sáng tạo (10–15 phút)

**"Cuộc thi chỉnh trọng lực"**

- Ghép cặp 2 bạn, mỗi bạn dùng project TH2 của mình. Mỗi cặp thử **ba thế giới** khác nhau bằng cách đổi hai con số:
  - **Mặt Trăng:** trọng lực `change vy by (-0.3)`, nhảy `set vy to (8)` → nhảy chậm, bay bổng.
  - **Trái Đất:** trọng lực `(-1)`, nhảy `(12)` → như bình thường.
  - **Sao Mộc:** trọng lực `(-2.5)`, nhảy `(12)` → nặng nề, nhảy thấp tủn.
- Hai bạn cùng bàn xem thế giới nào **chơi vui nhất** và vì sao — ghi lại cặp số mình thích nhất.
- Giáo viên mời 2–3 cặp trình chiếu "thế giới" của mình và giải thích con số đã chọn.

---

### Mẹo nhỏ 💡

- Trọng lực và lực nhảy phải "hợp nhau": trọng lực nhỏ thì lực nhảy cũng nên nhỏ, nếu không nhân vật bay mất khỏi màn hình.
- Nếu nhân vật **rung giật** khi đứng yên, kiểm tra `set y to (-120)` — thiếu dòng này nhân vật sẽ liên tục rơi xuống rồi bị đẩy lên.
- Tất cả phải nằm trong **một** `forever` duy nhất — chia thành nhiều `forever` riêng sẽ khiến chuyển động lệch nhịp.
- Muốn nhảy cao hơn: tăng số trong `set vy to`. Muốn rơi nhanh hơn: tăng số trong `change vy by`.
- Tick hiển thị biến `vy` khi đang làm bài — nhìn con số chạy giúp em hiểu và sửa lỗi nhanh hơn nhiều.
- Nếu nhân vật đi xuyên qua đất, có thể `vy` quá lớn nên nó "nhảy cóc" qua mặt đất — dùng `if y position < (-120)` (nhỏ hơn) thay vì `= (-120)` (bằng).

---

### 🎉 Tổng kết & Ôn tập trò chơi (10 phút)

**"Trạm tiếp sức trả lời"** — chia lớp 2 đội, mỗi đội cử đại diện trả lời nhanh 1 câu rồi đổi người:

1. Biến `vy` lưu cái gì?
2. `vy` dương thì nhân vật đi lên hay xuống?
3. Khối nào tạo ra "trọng lực"?
4. Vì sao phải `set vy to 0` khi chạm đất?
5. Làm sao ngăn nhân vật nhảy giữa không trung?
6. Muốn nhân vật nhảy cao hơn, em sửa số nào?

Đội trả lời đúng nhanh nhất mỗi câu được 1 điểm — tổng kết đội thắng cuối giờ.

- Mời 1–2 em chia sẻ nhân vật biết nhảy TH2 của mình.
- Hẹn gặp lại ở buổi Bài tập tuần này để làm Luyện tập 1, 2 và bài mở rộng!

---

### 👩‍🏫 Ghi chú cho giáo viên

**Kịch bản demo nhanh:**
- Trước Kiến thức mới, thả rơi thật một vật trong lớp rồi hỏi "nhanh dần hay đều?" — nối trải nghiệm thật với con số `vy` trên máy.
- Demo Ví dụ mẫu 2 (hai sprite rơi song song) trên máy chiếu: đây là cách thuyết phục nhất để học sinh thấy vì sao cần `vy`.
- Trong lúc demo, **luôn tick hiển thị biến `vy`** và chỉ tay vào nó khi con số chuyển từ dương sang âm ở đỉnh nhảy.

**Lỗi thường gặp (ngoài phần Mẹo nhỏ):**
- Đặt `change vy by (-1)` **ngoài** `forever` nên trọng lực chỉ chạy một lần — nhân vật rơi đều rồi biến mất.
- Nhầm `set vy to` với `change vy by` khi nhảy: dùng `change` khiến lực nhảy cộng dồn, bấm Space nhiều lần là nhân vật bay lên trời.
- Quên điều kiện "đang đứng trên đất" ở TH2 — đây là điểm trọng tâm, nên cho học sinh **thử phá game** (bấm Space liên tục) để tự phát hiện.
- Học sinh chọn sprite có tâm (center) đặt lệch nên nhân vật lún nửa người xuống đất — hướng dẫn chỉnh tâm sprite trong trình vẽ hoặc đổi số −120 cho phù hợp.

**Quản lý lớp học:**
- Trò chơi "Nhảy theo vận tốc": nhắc học sinh nhảy tại chỗ, cách nhau một sải tay; với lớp đông có thể chia nửa lớp nhảy, nửa lớp làm giám khảo rồi đổi vai.
- Bài TH2 dài hơn TH1 — nếu lớp chậm, cho phép bỏ phần di chuyển trái/phải và chỉ tập trung vào nhảy.
- Hoạt động nhóm "chỉnh trọng lực" rất dễ gây mất tập trung vì các em thích số cực đoan — giới hạn thời gian thử mỗi thế giới khoảng 3 phút.

---
## Buổi 36 — Bài tập (BT): Luyện Trọng lực 🍎

### 🎬 Khởi động ôn tập (10 phút)

**"Đúng hay Sai?"** — Giáo viên đọc từng câu, học sinh giơ ngón cái lên (Đúng) hoặc xuống (Sai):
1. "Vật rơi trong đời thật luôn rơi với tốc độ đều nhau." (Sai — rơi nhanh dần)
2. "Biến `vy` dương nghĩa là nhân vật đang đi lên." (Đúng)
3. "Trọng lực làm `vy` giảm dần mỗi bước." (Đúng)
4. "Không cần kiểm tra chạm đất, nhân vật vẫn dừng đúng chỗ." (Sai — sẽ rơi xuyên qua đất)
5. "Nên cho nhảy được cả khi đang ở giữa không trung." (Sai — chỉ nhảy khi đang đứng trên đất)

### Ôn nhanh

Nhớ lại buổi trước nhé em:

- Công thức trọng lực: `change vy by (-1)` rồi `change y by (vy)`, lặp trong `forever`.
- `vy` dương = đi lên, `vy` âm = rơi xuống, giảm dần theo thời gian.
- Chạm đất → `set y to (mặt đất)` và `set vy to (0)`.
- Nhảy: chỉ khi `y position = (mặt đất)`, dùng `set vy to (số dương)`.

---

### ✍️ Luyện tập 1, 2 (LT1/LT2) (15–20 phút)

Đầu buổi, em làm tại lớp có hướng dẫn hai bài luyện tập ngắn, nối tiếp buổi Học tuần trước — không phải chữa bài tập về nhà, mà là luyện lại ngay tại lớp có giáo viên hỗ trợ.

*Gợi ý:* Em có thể đổi máy với bạn bên cạnh trong 2 phút để cùng kiểm tra checklist của nhau — nếu phát hiện thiếu bước nào, nhắc bạn bổ sung.

#### Luyện tập 1 (LT1) — "Bóng nảy tường đối 🏀"

**Mô tả:** Em luyện làm quả bóng **rơi và nảy** đúng công thức trọng lực, chạm đất bật lên với độ cao giảm dần qua mỗi lần nảy — làm ngay tại lớp có giáo viên hỗ trợ.

**Yêu cầu:**
- Biến `vy` hiển thị trên Stage.
- Bóng rơi theo công thức trọng lực trong `forever`.
- Chạm đất → nảy lên, nhưng lực nảy **giảm dần** mỗi lần (ví dụ nhân 0.8).
- Sau vài lần nảy, bóng gần như nằm yên trên đất.

**Gợi ý từng bước:**
1. Tạo biến `vy` và `lực nảy` (bắt đầu = 10).
2. `when green flag clicked`:
   - `go to x: (0) y: (150)`
   - `set vy to (0)`
   - `set lực nảy to (10)`
3. `forever`:
   - `change vy by (-1)`
   - `change y by (vy)`
   - `if y position < (-130) then`:
     - `set y to (-130)`
     - `set vy to (lực nảy)`
     - `set lực nảy to ((lực nảy) * (0.8))`
4. Bấm cờ xanh, quan sát bóng nảy thấp dần rồi gần như dừng.
5. Lưu project tên `LT1-bong-nay-giam-dan`.

**Checklist tự kiểm:**
- [ ] Bóng rơi nhanh dần, không rơi đều
- [ ] Chạm đất bật lên đúng
- [ ] Mỗi lần nảy thấp hơn lần trước
- [ ] Em đã lưu project

| Em kiểm tra | Đúng khi... |
|-------------|-------------|
| Rơi | Tốc độ tăng dần khi xuống |
| Nảy | Bật lên ngay khi chạm đáy |
| Giảm dần | Độ cao nảy nhỏ dần qua các lần |
| Dừng | Cuối cùng bóng gần như nằm yên |

**Nếu chưa đúng:** Kiểm tra `set lực nảy to ((lực nảy) * (0.8))` có nằm **bên trong** khối `if` không — nếu nằm ngoài, lực nảy sẽ không đổi.

#### Luyện tập 2 (LT2) — "Nhảy qua chướng ngại vật 🚧"

**Mô tả:** Em luyện cho nhân vật **chạy và nhảy qua chướng ngại vật** đang di chuyển từ phải sang trái — chạm vào là thua! — làm ngay tại lớp, có khó khăn gì cứ hỏi giáo viên.

**Yêu cầu:**
- Nhân vật có `vy`, chạy theo công thức trọng lực từ bài Học.
- Space nhảy — chỉ khi đang đứng trên đất.
- Chướng ngại vật (sprite khác) di chuyển liên tục từ phải sang trái, hết màn hình thì quay lại bên phải.
- Nhân vật chạm chướng ngại vật → `say [Thua rồi!]` → `stop all`.

**Gợi ý từng bước:**
1. Sprite nhân vật: dùng lại code trọng lực + nhảy từ TH2 buổi Học (biến `vy`).
2. Sprite chướng ngại vật (gợi ý: hòn đá hoặc chướng ngại vật có sẵn):
   ```
   when green flag clicked
   go to x: (240) y: (-120)
   forever
     change x by (-6)
     if x position < (-240) then
       set x to (240)
   ```
3. Sprite nhân vật, thêm kiểm tra va chạm trong `forever`:
   ```
   if touching (chướng ngại vật)? then
     say [Thua rồi!] for (2) secs
     stop [all]
   ```
4. Bấm cờ xanh, luyện nhảy đúng lúc để tránh chướng ngại vật.
5. Lưu project tên `LT2-nhay-vuot-chuong-ngai`.

**Checklist tự kiểm:**
- [ ] Nhân vật nhảy được qua chướng ngại vật
- [ ] Chướng ngại vật di chuyển liên tục, quay lại khi hết màn hình
- [ ] Chạm vào thì game dừng và báo thua
- [ ] Em đã lưu project

| Em kiểm tra | Đúng khi... |
|-------------|-------------|
| Nhảy | Nhân vật bay lên rồi rơi xuống mượt |
| Né được | Nhảy đúng lúc thì không chạm |
| Va chạm | Chạm vào thì dừng game ngay |
| Lặp lại | Chướng ngại quay lại từ đầu liên tục |

**Nếu không né được:** Kiểm tra tốc độ chướng ngại vật (`change x by (-6)`) có quá nhanh so với thời gian nhảy không — có thể giảm xuống `(-4)` cho dễ hơn.

---

### 🎯 Giới thiệu bài mở rộng (10 phút)

Giáo viên demo nhanh **1 ví dụ mẫu** (ví dụ bài B1 "Nhảy vượt chướng ngại có điểm") trên máy chiếu — chỉ rõ cách kết hợp `vy` với biến điểm, trước khi học sinh tự chọn mức bài cho mình.

Em chọn **1 mức** A, B hoặc C, rồi chọn **1 trong 2 bài** của mức đó. Làm hết checklist trước khi đổi bài.

| Mức | Khi nào chọn |
|-----|--------------|
| **A1 hoặc A2** | Em luyện công thức trọng lực cơ bản (rơi, nảy) |
| **B1 hoặc B2** | Em kết hợp trọng lực với chướng ngại vật và điểm |
| **C1 hoặc C2** | Em làm game nhảy có nhiều mạng hoặc độ khó tăng dần |

---

### ✍️ Làm bài mở rộng (30–35 phút)

#### Bài A1 — Trái banh tennis nảy sân 🎾

| | Nội dung |
|---|----------|
| **Mô tả** | Em đang tập làm huấn luyện viên tennis — cần một trái banh nảy đúng vật lý để luyện tập! Trái banh rơi từ trên cao, chạm sân thì nảy lên, có âm thanh mỗi lần chạm sân. |
| **Yêu cầu bắt buộc** | Biến `vy`; công thức trọng lực trong `forever`; chạm sân thì nảy lên + phát âm thanh; không rơi xuyên qua sân |
| **Gợi ý bước** | 1. Biến `vy`. 2. Cờ xanh: vị trí cao, `set vy to 0`. 3. `forever`: `change vy by -1`, `change y by vy`, `if y < mặt sân` → `set y to mặt sân`, `set vy to 10`, `start sound [Pop]`. 4. Lưu project. |
| **Checklist** | - [ ] Banh rơi nhanh dần<br>- [ ] Nảy đúng lúc chạm sân<br>- [ ] Có âm thanh khi nảy<br>- [ ] Em đã lưu project |
| **Thử thêm** | Nhấn phím mũi tên trái/phải để đẩy banh qua lại trong lúc nó nảy, tạo cảm giác như đang chơi banh thật — kết hợp `change x` cùng lúc với công thức trọng lực theo trục y. |

---

#### Bài A2 — Chim nhỏ vỗ cánh bay 🐦

| | Nội dung |
|---|----------|
| **Mô tả** | Chú chim nhỏ của em đang bay trong vườn — mỗi lần em bấm phím, chim vỗ cánh bay lên một chút rồi lại rơi xuống dần dần do trọng lực, giống hệt chim thật khi bay chậm. |
| **Yêu cầu bắt buộc** | Biến `vy`; Space làm `vy` tăng lên (vỗ cánh) thay vì nhảy 1 lần; trọng lực kéo xuống liên tục; đổi costume khi vỗ cánh |
| **Gợi ý bước** | 1. Biến `vy`. 2. `forever`: `change vy by -0.5` (trọng lực nhẹ), `change y by vy`, giới hạn không cho bay quá cao/thấp bằng `if`. 3. `when space key pressed`: `change vy by (6)` (vỗ cánh) + đổi costume cánh xòe trong 0.2s. 4. Lưu project. |
| **Checklist** | - [ ] Chim rơi dần khi không bấm phím<br>- [ ] Bấm Space thì bay lên một chút<br>- [ ] Không bay ra khỏi màn hình trên/dưới<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm ống trụ chướng ngại vật di chuyển từ phải sang trái (giống game Flappy Bird) và biến `điểm` tăng mỗi khi bay qua một cặp ống thành công. |

---

#### Bài B1 — Nhảy vượt chướng ngại có điểm 🏃‍♂️

| | Nội dung |
|---|----------|
| **Mô tả** | Trường em tổ chức "Ngày hội vượt chướng ngại vật" — mỗi lần nhân vật nhảy qua một chướng ngại vật thành công là được cộng điểm, chạm vào thì game kết thúc! |
| **Yêu cầu bắt buộc** | Biến `vy` và `điểm`; chướng ngại vật di chuyển liên tục; nhảy né được; chạm vào thì `stop all`; điểm tăng khi né thành công |
| **Gợi ý bước** | 1. Dùng lại code trọng lực + nhảy từ buổi Học. 2. Chướng ngại vật di chuyển phải→trái, quay lại khi hết màn hình, mỗi lần quay lại `change điểm by 1` (nghĩa là đã né qua). 3. `if touching chướng ngại vật` → `say [Thua! Điểm: điểm]` + `stop all`. 4. Lưu project. |
| **Checklist** | - [ ] Nhảy né được chướng ngại vật<br>- [ ] Điểm tăng mỗi lần né thành công<br>- [ ] Chạm vào thì dừng game và báo điểm<br>- [ ] Em đã lưu project |
| **Thử thêm** | Cho chướng ngại vật **tăng tốc dần** theo điểm số (`change tốc độ by 0.2` mỗi lần né qua) để game khó dần — thử thách phản xạ ngày càng cao! |

---

#### Bài B2 — Bậc thang lên núi 🏔️

| | Nội dung |
|---|----------|
| **Mô tả** | Nhân vật của em đang leo núi bằng cách nhảy từ bậc thang thấp lên bậc cao hơn. Mỗi lần nhảy lên đúng bậc mới (không rơi lại xuống) thì được cộng điểm — leo càng cao điểm càng nhiều! |
| **Yêu cầu bắt buộc** | Biến `vy` và `độ cao`; mỗi lần nhảy lên mức cao mới nhất thì `change độ cao by 1`; hiển thị độ cao hiện tại; giới hạn không rơi qua mặt đất |
| **Gợi ý bước** | 1. Biến `vy`, `độ cao`, `độ cao cao nhất`. 2. Nhân vật nhảy theo công thức trọng lực (Space, chỉ khi trên đất mới nhảy). 3. Mỗi khung hình: `if y position > độ cao cao nhất` → `set độ cao cao nhất to y position`, `change độ cao by 1`. 4. Hiển thị `độ cao` bằng `say` hoặc biến trên Stage. 5. Lưu project. |
| **Checklist** | - [ ] Nhảy lên được nhiều lần liên tiếp<br>- [ ] `độ cao` chỉ tăng khi thật sự lên cao hơn trước<br>- [ ] Không tính điểm khi nhảy lại cùng độ cao cũ<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm mốc thành tích: `if độ cao >= 10` → `say [Chinh phục đỉnh núi!]` kèm hiệu ứng ăn mừng (đổi màu, âm thanh chiến thắng). |

---

#### Bài C1 — Game nhảy 3 mạng ❤️❤️❤️

| | Nội dung |
|---|----------|
| **Mô tả** | Đây là phiên bản đầy đủ của game vượt chướng ngại vật: em có **3 mạng**, mỗi lần chạm chướng ngại vật thì mất 1 mạng và được "hồi sinh" ngắn (bất tử 1 giây), hết mạng mới thật sự thua. |
| **Yêu cầu bắt buộc** | Biến `vy`, `điểm`, `mạng` (=3 khi bắt đầu); chạm chướng ngại vật → `change mạng by -1` + có khoảng bất tử ngắn; hết mạng → `stop all`; điểm tăng theo thời gian sống sót |
| **Gợi ý bước** | 1. Biến `vy`, `điểm`, `mạng`, `bất tử`. 2. Cờ xanh: `set mạng to 3`, `set bất tử to 0`. 3. Chạm chướng ngại vật và `bất tử = 0` → `change mạng by -1`, `set bất tử to 1`, `wait 1`, `set bất tử to 0` (chạy song song bằng broadcast hoặc script riêng). 4. `if mạng <= 0` → `say [Game Over! Điểm: điểm]` + `stop all`. 5. Lưu project. |
| **Checklist** | - [ ] Có 3 mạng hiển thị rõ<br>- [ ] Chạm chướng ngại vật mất đúng 1 mạng<br>- [ ] Có khoảng bất tử ngắn sau khi mất mạng<br>- [ ] Hết mạng thì game dừng đúng<br>- [ ] Em đã lưu project |
| **Thử thêm** | Cho sprite **nhấp nháy** trong lúc bất tử (`change color effect` xen kẽ `clear graphic effects` trong vòng lặp nhỏ) để người chơi nhìn thấy rõ mình đang an toàn tạm thời. |

---

#### Bài C2 — Leo tháp không giới hạn 🗼

| | Nội dung |
|---|----------|
| **Mô tả** | Nhân vật của em leo lên một tòa tháp cao không giới hạn bằng cách nhảy từ bệ này sang bệ khác — càng lên cao, các bệ càng thưa và game càng khó, thử xem em leo được bao xa! |
| **Yêu cầu bắt buộc** | Biến `vy` và `độ cao`; ít nhất 3 "bệ" (sprite khác hoặc vị trí y cố định) để nhảy lên; camera/nền cuộn lên khi nhân vật lên cao; rơi xuống dưới đáy màn hình thì thua |
| **Gợi ý bước** | 1. Biến `vy`, `độ cao`. 2. Tạo 3–4 sprite bệ đặt ở các độ cao y khác nhau, cách nhau vừa tầm nhảy. 3. Nhân vật nhảy theo công thức trọng lực, chỉ nhảy lại được khi `touching bệ`. 4. Khi nhân vật lên cao quá nửa màn hình, `change y by (-2)` cho **toàn bộ bệ và nhân vật** để tạo cảm giác cuộn lên (hoặc đơn giản hoá: chỉ tính độ cao mà không cuộn nền). 5. Nếu `y position < -180` → `say [Rơi rồi! Độ cao: độ cao]` + `stop all`. 6. Lưu project. |
| **Checklist** | - [ ] Nhảy được từ bệ này sang bệ khác<br>- [ ] Có ít nhất 3 bệ ở độ cao khác nhau<br>- [ ] Rơi xuống đáy màn hình thì thua<br>- [ ] Hiển thị độ cao đã leo được<br>- [ ] Em đã lưu project |
| **Thử thêm** | Làm các bệ **di chuyển qua lại** (giống bệ trôi trong game thật) thay vì đứng yên — nhân vật phải canh đúng lúc để nhảy lên bệ đang di chuyển, khó hơn hẳn! |

---

### 🖼️ Showcase (10 phút)

"Gallery walk" — em để project đang chạy trên máy, cả lớp đứng dậy đi vòng quanh xem project của 3–4 bạn gần nhất trong 1–2 phút, đặc biệt chú ý các bài mức C xem nhân vật nhảy mượt đến đâu. Giáo viên mời 2–3 em xung phong trình chiếu project của mình trước lớp.

### ✅ Tổng kết (5 phút)

Nhắc lại: hôm nay em đã luyện công thức trọng lực `vy`, kết hợp với va chạm, điểm số và mạng để làm game nhảy hoàn chỉnh hơn. Buổi sau (**Buổi 37 — Platformer**) em sẽ học cách làm nhân vật chạy nhảy trên **nhiều bệ đá** và thiết kế cả một **màn chơi**!

---
# Tuần 19 — Platformer 🏃

---

## Buổi 37 — Học (H): Chạy nhảy trên bệ đá

### Hôm nay em học gì?

Hôm nay em học cách làm **platformer** — thể loại game nhân vật chạy nhảy qua nhiều **bệ đá** ở các độ cao khác nhau, giống Mario! Em sẽ kết hợp lại tất cả những gì đã học: trọng lực, va chạm, danh sách — để nhân vật có thể **đứng vững trên bệ**, không chỉ trên một mặt đất phẳng. Đây là thử thách kỹ thuật lớn nhất từ đầu khóa, nhưng cũng là bước gần nhất tới một game thật sự! 🏃🧱

---

### 🎬 Khởi động (10 phút)

**Trò chơi "Đá qua sông"**

- Giáo viên đặt 5–6 tờ giấy (tượng trưng cho "hòn đá") rải rác trên sàn lớp, cách nhau vừa một bước nhảy.
- Mời 1–2 bạn thử "qua sông" bằng cách chỉ được bước lên đúng các tờ giấy, không được chạm sàn (giả vờ là nước).
- Hỏi cả lớp: "Bạn ấy phải làm gì để không bị rơi xuống nước? Nếu bạn ấy đứng giữa hai tờ giấy, có bị rơi không?"
- Chốt: máy tính cũng cần biết chính xác nhân vật đang **đứng trên bệ nào**, và chỉ đứng vững khi thực sự chạm đúng bệ đó — đây là bài toán "va chạm với nhiều bệ" mà em sẽ giải hôm nay.

---

### Kiến thức mới (20 phút)

**1. Vấn đề mới: nhiều bệ, không chỉ một mặt đất 🧱🧱🧱**

Tuần trước em kiểm tra `y position < mặt đất` — chỉ có **một** mặt đất phẳng. Platformer có **nhiều bệ** ở độ cao khác nhau, nên em cần cách khác: dùng `touching`.

**2. Ý tưởng lớn: kiểm tra chạm bệ, không kiểm tra độ cao cố định**

```
if <touching [bệ]?> then
  set [vy] to (0)
else
  change [vy] by (-1)
change y by (vy)
```

- Nếu đang **chạm** bệ → dừng rơi (`vy = 0`), đứng yên trên đó.
- Nếu **không chạm** bệ nào → tiếp tục rơi bình thường.
- Nhờ vậy, nhân vật đứng được trên **bất kỳ bệ nào**, ở bất kỳ độ cao nào!

**3. Vấn đề: nhân vật bị "dính" vào bệ khi nhảy lên từ dưới 😬**

Nếu chỉ dùng `touching` đơn giản, nhân vật sẽ bị chặn lại ngay khi chạm **cạnh dưới** của bệ (giống đụng đầu vào trần) — cần thêm điều kiện chỉ dừng khi đang **rơi xuống** (`vy <= 0`) và đang ở **phía trên** bệ:

```
if <<touching [bệ]?> and <(vy) <= (0)>> then
  set [vy] to (0)
  set y to ((y position of [bệ]) + (khoảng cách an toàn))
else
  change [vy] by (-1)
change y by (vy)
```

**4. Nhiều bệ cùng lúc — dùng `touching [tất cả các bệ]`**

- Nếu các bệ là **nhân bản (clone)** của cùng một sprite → chỉ cần 1 tên để kiểm tra `touching`.
- Nếu là **nhiều sprite bệ khác nhau** (Bệ1, Bệ2, Bệ3) → có thể kiểm tra từng cái bằng `or`: `<touching Bệ1?> or <touching Bệ2?> or <touching Bệ3?>`.

**5. Thiết kế màn chơi 🗺️**

| Yếu tố | Vai trò |
|--------|---------|
| **Bệ (platform)** | Nơi nhân vật đứng và nhảy lên |
| **Vực (không có bệ)** | Nhân vật rơi xuống → thua hoặc mất mạng |
| **Vật thu thập (coin, sao)** | Chạm vào → cộng điểm, biến mất |
| **Đích (cờ, cửa)** | Chạm vào → thắng màn |

**Vì sao quan trọng?** Đây là bước hợp nhất mọi kỹ thuật em đã học trong khóa: chuyển động, điều kiện, biến, trọng lực, va chạm. Platformer là một trong những thể loại game phổ biến và được yêu thích nhất — nắm được cách làm bệ đá đúng cách, em có thể tự thiết kế **bất kỳ màn chơi nào** mình tưởng tượng ra!

---

### Ví dụ mẫu 1 — Đứng vững trên một bệ đơn

1. Tạo sprite `bệ` (hình chữ nhật dài), đặt cố định ở y = −50.
2. Sprite nhân vật, biến `vy`:
   ```
   when green flag clicked
   go to x: (0) y: (150)
   set [vy] to (0)
   forever
     if <touching [bệ]?> then
       set [vy] to (0)
     else
       change [vy] by (-1)
     change y by (vy)
   ```
3. Bấm cờ xanh — nhân vật rơi từ trên cao và **dừng lại đúng trên mặt bệ**, không rơi xuyên qua.

### Ví dụ mẫu 2 — Nhảy giữa hai bệ ở độ cao khác nhau

1. Thêm sprite `bệ2` đặt cao hơn `bệ` một chút, lệch sang phải.
2. Thêm điều kiện nhảy (chỉ nhảy khi đang chạm một trong hai bệ):
   ```
   if <<key (space) pressed?> and <<touching [bệ]?> or <touching [bệ2]?>>> then
     set [vy] to (12)
   ```
3. Bấm cờ xanh, dùng mũi tên phải + Space để nhảy từ `bệ` sang `bệ2`.

*(Em để ý: nếu nhân vật đứng ở khoảng trống giữa hai bệ, không chạm bệ nào — nó sẽ rơi tự do, đúng như luật chơi platformer thật!)*

### Em đoán xem?

Nhân vật đang đứng trên `bệ` (không rơi, `vy = 0`). Nếu em bấm mũi tên phải để đi ra khỏi mép bệ mà không nhảy, em đoán chuyện gì xảy ra tiếp theo? `touching bệ?` lúc đó sẽ là gì? Đoán trước, rồi thử trên Scratch để kiểm tra!

---

### Thực hành 1 (TH1) — (15 phút) "Nhân vật đứng vững trên nhiều bệ 🧱"

#### Mô tả

Em làm nhân vật có thể **đứng và di chuyển qua lại** trên **3 bệ đá** ở độ cao khác nhau, dùng đúng công thức `touching` + trọng lực.

#### Yêu cầu

- Có **3 bệ** (3 sprite hoặc 1 sprite đặt 3 vị trí) ở các độ cao khác nhau.
- Nhân vật rơi và đứng vững đúng trên **bất kỳ bệ nào** đang chạm.
- Nhân vật đi được trái/phải bằng mũi tên.
- Nếu rơi ra khoảng trống (không chạm bệ nào) thì tiếp tục rơi tự do.

#### Gợi ý từng bước

1. Tạo 3 sprite bệ: `bệ1` (thấp, x=−150), `bệ2` (giữa, x=0, cao hơn), `bệ3` (cao, x=150, cao nhất). Đặt cố định vị trí bằng `go to x: ... y: ...` ở cờ xanh của từng bệ.
2. Sprite nhân vật, tạo biến `vy`:
   ```
   when green flag clicked
   go to x: (-150) y: (150)
   set [vy] to (0)
   forever
     if <key (right arrow) pressed?> then
       change x by (4)
     if <key (left arrow) pressed?> then
       change x by (-4)
     if <<touching [bệ1]?> or <<touching [bệ2]?> or <touching [bệ3]?>>> then
       set [vy] to (0)
     else
       change [vy] by (-1)
     change y by (vy)
   ```
3. Bấm cờ xanh — nhân vật rơi và đứng vững trên `bệ1` (bệ ở ngay dưới vị trí ban đầu).
4. Di chuyển bằng mũi tên qua khoảng trống — quan sát nhân vật **rơi tự do** khi không chạm bệ nào.
5. **Lưu project** với tên `TH1-dung-vung-tren-be`.

#### Checklist tự kiểm

- [ ] Có 3 bệ ở độ cao khác nhau
- [ ] Nhân vật đứng vững đúng trên bệ đang chạm
- [ ] Đi trái/phải được bằng mũi tên
- [ ] Rơi tự do khi không chạm bệ nào
- [ ] Em đã lưu project

---

### 🤸 Giải lao vận động (5 phút)

**Trò chơi "Bệ di động"**

- Đặt 4–5 tờ giấy rải trên sàn làm "bệ", khoảng cách khác nhau (gần, xa, rất xa).
- Học sinh xếp hàng lần lượt "chơi platformer bằng chân": chỉ được bước/nhảy lên đúng các tờ giấy, không giẫm ra ngoài.
- Với bệ ở xa, học sinh phải **nhảy thật** để qua — mô phỏng đúng cảm giác canh khoảng cách trong game.
- Nếu giẫm ra ngoài giấy, bạn đó "rơi xuống vực" và quay lại chơi từ đầu — chơi vui, không tính thắng thua nghiêm túc.
- Đổi lượt cho 5–6 bạn chơi thử.

---

### Thực hành 2 (TH2) — (15 phút) "Màn chơi mini: nhảy và ăn sao ⭐"

#### Mô tả

Em thiết kế một **màn chơi nhỏ hoàn chỉnh**: nhân vật nhảy qua các bệ, ăn sao để cộng điểm, và chạm cờ đích thì thắng màn.

#### Yêu cầu

- Có ít nhất **3 bệ** và **2 sao** (vật thu thập) đặt trên các bệ.
- Nhân vật nhảy được lên các bệ (dùng lại công thức `touching` từ TH1).
- Chạm sao → sao **ẩn đi** + `change điểm by 1`.
- Chạm sprite **cờ đích** → `say [Thắng màn!]` → `stop all`.

#### Gợi ý từng bước

1. Dùng lại 3 bệ và nhân vật từ TH1 (thêm khối nhảy Space như buổi trước: chỉ nhảy khi đang chạm một bệ nào đó).
2. Thêm 2 sprite `sao` đặt trên `bệ2` và `bệ3`:
   ```
   when green flag clicked
   show
   ```
3. Sprite nhân vật, tạo biến `điểm`, thêm vào `forever`:
   ```
   if <touching [sao1]?> then
     change [điểm] by (1)
     hide [sao1] block sao thành hide riêng
   ```
   *(Gợi ý: dùng broadcast "ăn sao 1" gửi tới sprite sao1 để nó tự `hide`, thay vì điều khiển trực tiếp từ sprite nhân vật.)*
4. Thêm sprite `cờ đích` đặt ở `bệ3`. Trong nhân vật:
   ```
   if <touching [cờ đích]?> then
     say (join [Thắng màn! Điểm: ] (điểm)) for (3) secs
     stop [all]
   ```
5. Bấm cờ xanh, nhảy từ bệ này sang bệ khác, ăn hết sao rồi chạm cờ đích.
6. **Lưu project** với tên `TH2-man-choi-mini`.

#### Checklist tự kiểm

- [ ] Nhảy qua được ít nhất 3 bệ
- [ ] Ăn sao thì sao biến mất và cộng điểm
- [ ] Chạm cờ đích thì báo thắng và dừng game
- [ ] Biến `điểm` hiển thị đúng
- [ ] Em đã lưu project

---

### 🤝 Thử thách nhóm/sáng tạo (10–15 phút)

**"Thiết kế màn chơi cho bạn"**

- Ghép cặp 2 bạn. Mỗi bạn chỉnh sửa vị trí các bệ, sao và cờ đích trong project TH2 của mình để tạo ra **một màn chơi khó hơn** — bệ xa nhau hơn, thêm bệ thứ 4, hoặc giấu sao ở chỗ khó tới.
- Sau đó, hai bạn **đổi máy** cho nhau và thử chơi màn của bạn kia.
- Góp ý cho nhau: "Chỗ nào khó quá không nhảy được? Chỗ nào dễ quá?"
- Giáo viên mời 1–2 cặp giới thiệu màn chơi mình thiết kế và lý do chọn vị trí bệ như vậy.

---

### Mẹo nhỏ 💡

- Bệ nên là hình **chữ nhật dẹt, đủ dài** — bệ quá hẹp sẽ rất khó `touching` chính xác khi nhân vật di chuyển nhanh.
- Nếu nhân vật bị "dính" vào cạnh bệ khi nhảy từ dưới lên, kiểm tra em đã thêm điều kiện `vy <= 0` (chỉ dừng khi đang rơi xuống) chưa.
- Dùng `or` để gộp nhiều `touching` — nhưng nếu có **rất nhiều** bệ, tuần sau (My Blocks đã học ở tháng 3) hoặc dùng **clone** sẽ gọn hơn.
- Luôn đặt các bệ **cố định vị trí** ở cờ xanh (`go to x: ... y: ...`) để mỗi lần chạy lại màn chơi giống hệt nhau.
- Khoảng cách giữa hai bệ nên **nhỏ hơn** quãng đường nhân vật nhảy được — thử nhảy thật trước khi đặt bệ quá xa.

---

### 🎉 Tổng kết & Ôn tập trò chơi (10 phút)

**"Ai nhanh hơn"** — giáo viên hỏi nhanh, ai giơ tay trước và đúng được 1 điểm:

1. Vì sao platformer không dùng `y position < mặt đất` như tuần trước?
2. Khối nào giúp kiểm tra nhân vật có đang đứng trên bệ không?
3. Tại sao cần thêm điều kiện `vy <= 0` khi kiểm tra chạm bệ?
4. Nếu nhân vật không chạm bệ nào, chuyện gì xảy ra?
5. Kể tên 4 yếu tố cần có trong một màn chơi platformer.

- Mời 1–2 em chia sẻ màn chơi mini TH2 của mình.
- Hẹn gặp lại ở buổi Bài tập tuần này để làm Luyện tập 1, 2 và bài mở rộng!

---

### 👩‍🏫 Ghi chú cho giáo viên

**Kịch bản demo nhanh:**
- Demo Ví dụ mẫu 1 thật chậm: cho nhân vật rơi rồi dừng lại trên bệ, chỉ rõ khối `if touching bệ? then set vy to 0` đang chạy đúng lúc nào.
- Cố ý **bỏ điều kiện `vy <= 0`** trong ví dụ mẫu 2 và cho nhân vật nhảy từ dưới lên đâm vào bệ — học sinh sẽ thấy rõ hiện tượng "dính trần" trước khi em giải thích cách sửa.
- Nhấn mạnh: đây là bài **khó nhất** từ đầu khóa — không sao nếu học sinh chưa xong hết TH2, quan trọng là hiểu được ý tưởng `touching` + trọng lực.

**Lỗi thường gặp (ngoài phần Mẹo nhỏ):**
- Quên đặt lại vị trí các bệ ở cờ xanh (`go to x: ... y: ...`) — nếu học sinh vô tình kéo bệ đi chỗ khác lúc thiết kế, bấm cờ xanh không tự về đúng chỗ.
- Ở TH2, học sinh cho `hide` sao trực tiếp trong script nhân vật (không dùng broadcast) — vẫn chạy được với Scratch nhưng dễ lỗi khi có nhiều sao; nếu lớp còn thời gian, khuyến khích thử cách broadcast.
- Bệ đặt quá gần nhau khiến nhân vật `touching` cả hai bệ cùng lúc, gây giật hình — nhắc học sinh chừa khoảng trống rõ ràng giữa các bệ không liền kề.

**Quản lý lớp học:**
- Đây là buổi kỹ thuật nặng — nếu học sinh nào chưa quen `and`/`or` (học ở Tuần 9), dành thêm 2–3 phút ôn nhanh trước khi vào TH1.
- Trò chơi "Bệ di động": ưu tiên chơi ở khu vực rộng, xếp hàng chờ để tránh chen lấn khi nhảy.
- Với các em làm chậm, cho phép TH2 chỉ cần **2 bệ + 1 sao** thay vì đủ 3 bệ + 2 sao, miễn hiểu đúng cơ chế.

---
## Buổi 38 — Bài tập (BT): Luyện Platformer 🏃

### 🎬 Khởi động ôn tập (10 phút)

**"Đúng hay Sai?"** — Giáo viên đọc từng câu, học sinh giơ ngón cái lên (Đúng) hoặc xuống (Sai):
1. "Platformer chỉ cần kiểm tra `y position < mặt đất` như bài tuần trước." (Sai — cần `touching` vì có nhiều bệ ở độ cao khác nhau)
2. "`touching [bệ]?` cho biết nhân vật có đang chạm bệ đó không." (Đúng)
3. "Không cần kiểm tra `vy <= 0` thì nhân vật vẫn đứng vững bình thường." (Sai — sẽ bị dính khi nhảy từ dưới lên)
4. "Nếu nhân vật không chạm bệ nào, nó vẫn đứng yên trên không." (Sai — nó tiếp tục rơi)
5. "Một màn platformer nên có ít nhất bệ, vật thu thập và đích." (Đúng)

### Ôn nhanh

Nhớ lại buổi trước nhé em:

- Kiểm tra đứng trên bệ: `if touching [bệ]? then set vy to 0`.
- Kết hợp `vy <= 0` để tránh dính trần khi nhảy từ dưới lên.
- Nhiều bệ: dùng `or` để gộp các điều kiện `touching`.
- Màn chơi cần: bệ, vực, vật thu thập, đích.

---

### ✍️ Luyện tập 1, 2 (LT1/LT2) (15–20 phút)

Đầu buổi, em làm tại lớp có hướng dẫn hai bài luyện tập ngắn, nối tiếp buổi Học tuần trước — không phải chữa bài tập về nhà, mà là luyện lại ngay tại lớp có giáo viên hỗ trợ.

*Gợi ý:* Em có thể đổi máy với bạn bên cạnh trong 2 phút để cùng kiểm tra checklist của nhau — nếu phát hiện thiếu bước nào, nhắc bạn bổ sung.

#### Luyện tập 1 (LT1) — "4 bệ liên hoàn 🧱🧱🧱🧱"

**Mô tả:** Em luyện dựng một chuỗi **4 bệ** ở 4 độ cao tăng dần, cho nhân vật nhảy liên tiếp từ bệ thấp lên bệ cao nhất — làm ngay tại lớp có giáo viên hỗ trợ.

**Yêu cầu:**
- 4 sprite bệ ở 4 vị trí/độ cao khác nhau, đặt cố định ở cờ xanh.
- Nhân vật đứng vững đúng công thức `touching` + `vy <= 0`.
- Nhảy được liên tiếp từ bệ 1 → 2 → 3 → 4.

**Gợi ý từng bước:**
1. Tạo 4 sprite bệ: `bệ1` (x=−180, y=−100), `bệ2` (x=−80, y=−50), `bệ3` (x=20, y=0), `bệ4` (x=120, y=50). Mỗi sprite bệ tự đặt vị trí ở cờ xanh.
2. Sprite nhân vật, biến `vy`:
   ```
   when green flag clicked
   go to x: (-180) y: (0)
   set [vy] to (0)
   forever
     if <key (right arrow) pressed?> then
       change x by (4)
     if <key (left arrow) pressed?> then
       change x by (-4)
     if <<<touching [bệ1]?> or <touching [bệ2]?>> or <<touching [bệ3]?> or <touching [bệ4]?>>> then
       if <(vy) <= (0)> then
         set [vy] to (0)
     else
       change [vy] by (-1)
     if <<key (space) pressed?> and <(vy) = (0)>> then
       set [vy] to (11)
     change y by (vy)
   ```
3. Bấm cờ xanh, luyện nhảy liên tiếp qua cả 4 bệ.
4. Lưu project tên `LT1-4-be-lien-hoan`.

**Checklist tự kiểm:**
- [ ] 4 bệ ở 4 độ cao khác nhau
- [ ] Nhảy được liên tiếp qua cả 4 bệ
- [ ] Không bị dính khi nhảy từ dưới lên
- [ ] Em đã lưu project

| Em kiểm tra | Đúng khi... |
|-------------|-------------|
| Đứng vững | Đứng yên đúng trên bệ, không rung |
| Nhảy liên tiếp | Từ bệ 1 lên được bệ 4 không bị kẹt |
| Rơi tự do | Bước ra khoảng trống thì rơi xuống |
| Không dính trần | Nhảy từ dưới không bị chặn giữa chừng |

**Nếu chưa đúng:** Nếu nhân vật hay bị "kẹt" giữa hai bệ liền kề, kiểm tra khoảng cách giữa các bệ có đủ gần để nhảy qua không.

#### Luyện tập 2 (LT2) — "Thu thập đủ 3 ngôi sao ⭐⭐⭐"

**Mô tả:** Em luyện làm màn chơi có **3 ngôi sao** đặt ở 3 vị trí khác nhau trên các bệ — chỉ khi ăn đủ cả 3 sao thì cờ đích mới "mở khóa" cho phép thắng — làm ngay tại lớp, có khó khăn gì cứ hỏi giáo viên.

**Yêu cầu:**
- Dùng lại 4 bệ và nhân vật từ LT1.
- 3 sprite sao đặt trên các bệ khác nhau, biến `số sao` đếm số sao đã ăn.
- Sprite `cờ đích`: chỉ cho thắng khi `số sao = 3`.

**Gợi ý từng bước:**
1. Tạo biến `số sao`, `set số sao to (0)` ở cờ xanh.
2. Mỗi sprite sao (sao1, sao2, sao3), code giống nhau:
   ```
   when green flag clicked
   show
   go to x: (...) y: (...)
   forever
     if <touching [nhân vật]?> then
       hide
       broadcast [ăn sao]
       stop [this script]
   ```
3. Sprite nhân vật, nhận broadcast:
   ```
   when I receive [ăn sao]
   change [số sao] by (1)
   ```
4. Sprite `cờ đích`:
   ```
   when green flag clicked
   forever
     if <touching [nhân vật]?> then
       if <(số sao) = (3)> then
         say [Thắng màn! Đủ 3 sao!] for (3) secs
         stop [all]
       else
         say [Còn thiếu sao!] for (1) secs
   ```
5. Bấm cờ xanh, thử chạm cờ đích khi chưa đủ sao, rồi ăn đủ 3 sao và thử lại.
6. Lưu project tên `LT2-thu-thap-3-sao`.

**Checklist tự kiểm:**
- [ ] Ăn được cả 3 sao, mỗi sao biến mất đúng lúc
- [ ] Biến `số sao` tăng đúng
- [ ] Chạm đích khi chưa đủ sao thì chưa thắng
- [ ] Đủ 3 sao mới thắng được
- [ ] Em đã lưu project

| Em kiểm tra | Đúng khi... |
|-------------|-------------|
| Ăn sao | Sao biến mất, `số sao` tăng 1 |
| Chưa đủ | Chạm đích mà thiếu sao thì có cảnh báo |
| Đủ sao | Chạm đích khi đủ 3 sao thì thắng |
| Không tăng nhầm | Ăn lại đúng sao đó lần 2 không cộng thêm |

**Nếu số sao tăng nhiều lần cho 1 sao:** Kiểm tra có `stop this script` (hoặc `hide` trước khi kiểm tra lại) ngay sau khi ăn sao chưa — nếu không, vòng lặp có thể tính nhiều lần trong cùng một lúc chạm.

---

### 🎯 Giới thiệu bài mở rộng (10 phút)

Giáo viên demo nhanh **1 ví dụ mẫu** (ví dụ bài B1 "Màn chơi có vực") trên máy chiếu — chỉ rõ cách kiểm tra "rơi xuống vực" bằng `y position` quá thấp, trước khi học sinh tự chọn mức bài cho mình.

Em chọn **1 mức** A, B hoặc C, rồi chọn **1 trong 2 bài** của mức đó. Làm hết checklist trước khi đổi bài.

| Mức | Khi nào chọn |
|-----|--------------|
| **A1 hoặc A2** | Em luyện đứng vững và nhảy qua vài bệ cơ bản |
| **B1 hoặc B2** | Em kết hợp bệ với vực nguy hiểm hoặc vật thu thập |
| **C1 hoặc C2** | Em làm màn chơi hoàn chỉnh nhiều bệ, nhiều sao, có đích |

---

### ✍️ Làm bài mở rộng (30–35 phút)

#### Bài A1 — Chú thỏ nhảy bậc thang 🐰

| | Nội dung |
|---|----------|
| **Mô tả** | Chú thỏ của em đang trên đường về nhà, nhưng phải đi qua một cầu thang đá gồ ghề! Em cho thỏ nhảy lên từng bậc thang (3 bệ) để về tới đỉnh. |
| **Yêu cầu bắt buộc** | 3 bệ ở độ cao tăng dần; nhân vật đứng vững đúng công thức `touching`; nhảy được từ bệ thấp lên bệ cao nhất |
| **Gợi ý bước** | 1. 3 sprite bệ, mỗi bệ tự đặt vị trí ở cờ xanh. 2. Nhân vật: biến `vy`, công thức `touching` + trọng lực + nhảy Space. 3. Thử nhảy hết 3 bệ. 4. Lưu project. |
| **Checklist** | - [ ] Có 3 bệ độ cao khác nhau<br>- [ ] Đứng vững trên từng bệ<br>- [ ] Nhảy hết được cả 3 bệ<br>- [ ] Em đã lưu project |
| **Thử thêm** | Đặt bệ thứ 4 xa hơn bình thường một chút, và thêm `say [Nhảy xa quá!] for (1) secs` khi thỏ rơi xuống hụt — tạo phản hồi vui khi người chơi thất bại. |

---

#### Bài A2 — Robot leo dây chuyền nhà máy 🤖

| | Nội dung |
|---|----------|
| **Mô tả** | Chú robot nhỏ đang kiểm tra dây chuyền trong nhà máy — nó phải nhảy qua các băng chuyền (bệ) ở độ cao khác nhau để lên tới phòng điều khiển ở trên cùng. |
| **Yêu cầu bắt buộc** | 3–4 bệ dạng "băng chuyền" (đổi màu/costume cho giống); nhân vật robot đứng vững và nhảy đúng công thức; tới bệ cao nhất thì có tín hiệu hoàn thành |
| **Gợi ý bước** | 1. 3–4 sprite bệ đặt tăng dần độ cao. 2. Robot: `vy` + công thức chuẩn. 3. Bệ cao nhất gắn thêm `if touching [robot]? then say [Đã tới phòng điều khiển!]`. 4. Lưu project. |
| **Checklist** | - [ ] Robot đứng vững trên từng bệ<br>- [ ] Nhảy được lên bệ cao nhất<br>- [ ] Có thông báo khi tới đích<br>- [ ] Em đã lưu project |
| **Thử thêm** | Cho một bệ **di chuyển ngang** liên tục (`change x by`, đổi hướng khi chạm biên) — robot phải canh đúng lúc để nhảy lên bệ đang di chuyển. |

---

#### Bài B1 — Màn chơi có vực nguy hiểm 🕳️

| | Nội dung |
|---|----------|
| **Mô tả** | Đảo kho báu của em có những khoảng trống rất sâu — rơi xuống đó là mất một mạng ngay lập tức! Em thiết kế màn chơi có bệ và vực xen kẽ, thử thách sự khéo léo khi nhảy. |
| **Yêu cầu bắt buộc** | Ít nhất 3 bệ có khoảng trống (vực) xen giữa; biến `mạng` (=3); nếu `y position` xuống quá thấp (rơi xuống vực) → mất 1 mạng + về lại vị trí bắt đầu; hết mạng → `stop all` |
| **Gợi ý bước** | 1. 3 bệ với khoảng trống lớn giữa các bệ. 2. Biến `mạng`, `set mạng to 3` ở cờ xanh. 3. Trong `forever` của nhân vật: `if y position < -170` → `change mạng by -1`, `go to x: (điểm xuất phát) y: (...)`, `set vy to 0`. 4. `if mạng <= 0` → `say [Hết mạng!]` + `stop all`. 5. Lưu project. |
| **Checklist** | - [ ] Có vực rõ ràng giữa các bệ<br>- [ ] Rơi xuống vực bị trừ mạng và về lại vị trí đầu<br>- [ ] Hết mạng thì game dừng<br>- [ ] Em đã lưu project |
| **Thử thêm** | Hiển thị số mạng bằng **icon trái tim** thay vì chỉ hiện số (dùng 3 sprite hình trái tim, ẩn dần từng cái khi mất mạng) — trực quan và đẹp mắt hơn cho người chơi. |

---

#### Bài B2 — Thu thập vàng trên các bệ nổi 💰

| | Nội dung |
|---|----------|
| **Mô tả** | Em là thợ săn kho báu, nhảy qua các bệ đá nổi giữa không trung để thu thập những đồng vàng lấp lánh — càng thu nhiều vàng, điểm càng cao! |
| **Yêu cầu bắt buộc** | 3–4 bệ; ít nhất 4 đồng vàng đặt rải rác trên các bệ; biến `điểm` tăng mỗi khi ăn vàng; đồng vàng biến mất sau khi ăn |
| **Gợi ý bước** | 1. 3–4 bệ, nhân vật đứng vững + nhảy chuẩn. 2. Mỗi sprite vàng: `forever` → `if touching [nhân vật]?` → `hide`, `broadcast [ăn vàng]`, `stop this script`. 3. Nhân vật: `when I receive [ăn vàng]` → `change điểm by 1`. 4. Lưu project. |
| **Checklist** | - [ ] Có ≥ 4 đồng vàng trên các bệ<br>- [ ] Ăn vàng thì biến mất và cộng điểm<br>- [ ] Không cộng điểm 2 lần cho cùng 1 đồng<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm một đồng vàng "đặc biệt" ở vị trí khó nhảy tới nhất, đáng **5 điểm** thay vì 1 điểm — phần thưởng lớn cho ai dám thử thách bản thân. |

---

#### Bài C1 — Màn chơi hoàn chỉnh: bệ + sao + đích 🏁

| | Nội dung |
|---|----------|
| **Mô tả** | Đây là màn chơi platformer đầy đủ nhất em từng làm: nhiều bệ ở độ cao khác nhau, sao để thu thập, vực nguy hiểm, và một cờ đích chỉ mở khóa khi ăn đủ sao — y hệt một màn chơi trong game thật! |
| **Yêu cầu bắt buộc** | Ít nhất 4 bệ; ít nhất 3 sao; biến `mạng` và `số sao`; vực khiến mất mạng; cờ đích chỉ cho thắng khi đủ sao |
| **Gợi ý bước** | 1. Thiết kế 4+ bệ ở độ cao và khoảng cách khác nhau, có vực xen giữa. 2. 3 sao dùng broadcast như LT2. 3. Biến `mạng` xử lý rơi vực như bài B1. 4. Cờ đích kiểm tra `số sao = 3` mới cho thắng như LT2. 5. Kết hợp cả 3 cơ chế trong cùng 1 project. 6. Lưu project. |
| **Checklist** | - [ ] Nhảy được qua toàn bộ các bệ<br>- [ ] Ăn đủ sao, có vực gây mất mạng<br>- [ ] Cờ đích hoạt động đúng luật (đủ sao mới thắng)<br>- [ ] Hết mạng thì thua đúng cách<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm **kẻ địch di chuyển** trên một bệ (sprite đi qua lại), chạm vào cũng bị trừ mạng như rơi xuống vực — biến màn chơi thành thử thách đa dạng hơn. |

---

#### Bài C2 — Tháp thử thách 3 tầng 🗼

| | Nội dung |
|---|----------|
| **Mô tả** | Em thiết kế một tòa tháp 3 tầng, mỗi tầng có độ khó tăng dần: tầng 1 dễ, tầng 2 có vực, tầng 3 có bệ xa và kẻ địch — chinh phục hết cả 3 tầng để trở thành nhà vô địch! |
| **Yêu cầu bắt buộc** | 3 "tầng" rõ rệt (nhóm bệ ở 3 vùng độ cao khác nhau); độ khó tăng dần theo tầng (khoảng cách bệ xa hơn, thêm vực hoặc kẻ địch); biến `tầng hiện tại` cập nhật khi lên tầng mới; thắng khi tới đỉnh tháp |
| **Gợi ý bước** | 1. Chia màn chơi thành 3 vùng y: tầng 1 (y thấp, bệ gần nhau), tầng 2 (y giữa, có vực), tầng 3 (y cao, bệ xa + 1 kẻ địch di chuyển). 2. Biến `tầng hiện tại`: cập nhật bằng `if y position > (mốc tầng)` → `set tầng hiện tại to (2 hoặc 3)`. 3. Đỉnh tháp có cờ đích: `say [Chinh phục tháp thành công!]` + `stop all`. 4. Lưu project. |
| **Checklist** | - [ ] Có đủ 3 tầng với độ khó khác nhau rõ rệt<br>- [ ] Biến `tầng hiện tại` cập nhật đúng khi lên tầng<br>- [ ] Tầng 3 có kẻ địch hoặc vực khó hơn hẳn<br>- [ ] Lên tới đỉnh thì báo thắng<br>- [ ] Em đã lưu project |
| **Thử thêm** | Hiển thị `tầng hiện tại` bằng chữ to góc màn hình (`say` liên tục hoặc biến trên Stage) để người chơi luôn biết mình đang ở đâu, giống thanh tiến trình trong game thật. |

---

### 🖼️ Showcase (10 phút)

"Gallery walk" — em để project đang chạy trên máy, cả lớp đứng dậy đi vòng quanh xem project của 3–4 bạn gần nhất trong 1–2 phút, đặc biệt chú ý các bài mức C xem màn chơi của bạn thiết kế có gì thú vị. Giáo viên mời 2–3 em xung phong trình chiếu project của mình trước lớp.

### ✅ Tổng kết (5 phút)

Nhắc lại: hôm nay em đã luyện dựng nhiều bệ, kết hợp vực, vật thu thập và đích để tạo màn chơi platformer hoàn chỉnh. Buổi sau (**Buổi 39 — Hiệu ứng đồ họa & Pen**) em sẽ học cách làm game của mình **đẹp mắt hơn** bằng hiệu ứng hình ảnh và bút vẽ!

---
# Tuần 20 — Hiệu ứng đồ họa & Pen ✨

---

## Buổi 39 — Học (H): Hiệu ứng đồ họa & bút vẽ

### Hôm nay em học gì?

Hôm nay em học cách làm game **đẹp mắt và chuyên nghiệp hơn**! Em sẽ dùng nhóm khối **Looks** để tạo hiệu ứng hình ảnh (mờ dần, xoay màu, phóng to thu nhỏ) và nhóm khối **Pen** (bút vẽ) để vẽ đường, vẽ vệt sáng theo nhân vật, hoặc vẽ hẳn một bức tranh bằng code! Đây là "lớp trang điểm" cuối cùng biến game của em từ "chạy được" thành "đẹp và ấn tượng". ✨🖌️

---

### 🎬 Khởi động (10 phút)

**Trò chơi "Hiệu ứng cơ thể"**

- Giáo viên hô một hiệu ứng, cả lớp làm theo bằng cơ thể: "**Mờ dần**!" → học sinh từ từ ngồi thụp xuống thấp dần; "**Phóng to**!" → đứng lên kiễng chân, giơ tay cao; "**Xoay màu**!" → xoay người tại chỗ.
- Hỏi cả lớp: "Trong Scratch, mình có khối nào làm nhân vật mờ dần không? Phóng to thì sao?"
- Giáo viên vẽ nhanh một đường ngoằn ngoèo lên bảng bằng phấn, hỏi: "Nếu máy tính vẽ một đường như thế này khi nhân vật di chuyển, mình gọi đó là gì?" → dẫn vào khái niệm **Pen** (bút vẽ).

---

### Kiến thức mới (20 phút)

**1. Nhóm khối Looks nâng cao — Hiệu ứng hình ảnh 🎨**

| Khối lệnh | Hiệu ứng |
|-----------|----------|
| `set [color] effect to (n)` | Đổi tông màu nhân vật |
| `set [ghost] effect to (n)` | Làm nhân vật **trong suốt** (0 = rõ, 100 = biến mất) |
| `set [fisheye] effect to (n)` | Làm méo hình như mắt cá |
| `set [pixelate] effect to (n)` | Làm hình bị **vỡ nét** (hiệu ứng "lỗi") |
| `set [whirl] effect to (n)` | Xoáy hình như lốc xoáy |
| `clear graphic effects` | **Xóa hết** mọi hiệu ứng, về bình thường |
| `change size by (n)` | Phóng to / thu nhỏ dần |
| `glide (1) secs to x: () y: ()` | Di chuyển **mượt mà** thay vì "nhảy cóc" |

**2. Hiệu ứng mờ dần (fade) — công thức hay dùng**

```
repeat (20)
  change [ghost] effect by (5)
  wait (0.05) secs
```

Sau 20 lần lặp, `ghost` = 100 → nhân vật **biến mất mượt mà**, không bị "phụt" đi ngay lập tức.

**3. Nhóm khối Pen (Bút vẽ) 🖌️**

| Khối lệnh | Em dùng để làm gì? |
|-----------|-------------------|
| `pen down` | **Hạ bút** — từ giờ nhân vật đi tới đâu, vẽ tới đó |
| `pen up` | **Nhấc bút** — di chuyển mà không vẽ |
| `set pen color to ()` | Chọn màu bút |
| `set pen size to ()` | Chọn độ dày nét vẽ |
| `stamp` | "Đóng dấu" hình nhân vật lên Stage tại vị trí hiện tại |
| `erase all` | Xóa sạch mọi nét vẽ trên Stage |

**4. Kết hợp Pen với chuyển động — vẽ hình học**

```
pen down
set pen color to (đỏ)
repeat (4)
  move (100) steps
  turn (90) degrees
pen up
```

→ Vẽ được một **hình vuông**! Đổi `repeat (4)` + `turn (90)` thành `repeat (3)` + `turn (120)` → vẽ **tam giác đều**.

**5. Vệt sáng theo nhân vật — hiệu ứng "đuôi lửa" 🔥**

```
forever
  set pen color to (pick random 0 to 200)
  stamp
  move (5) steps
```

Mỗi bước di chuyển để lại một "dấu ấn" màu ngẫu nhiên phía sau — tạo hiệu ứng vệt sáng rực rỡ theo dõi nhân vật.

**Vì sao quan trọng?** Hai game có cùng luật chơi, nhưng game nào có hiệu ứng đẹp — nhân vật mờ dần khi biến mất, vệt sáng khi bay, đường Pen trang trí màn hình — sẽ **ấn tượng và chuyên nghiệp hơn hẳn**. Đây là "gia vị" cuối cùng trước khi em bước vào tháng dự án lớn, giúp game của em không chỉ chạy đúng mà còn **đẹp và thu hút người chơi**!

---

### Ví dụ mẫu 1 — Nhân vật biến mất mượt mà khi thua

1. Sprite bất kỳ, kéo `when space key pressed` (giả lập sự kiện "thua").
2. Gắn:
   ```
   repeat (20)
     change [ghost] effect by (5)
     wait (0.05) secs
   hide
   clear graphic effects
   ```
3. Bấm Space — nhân vật **mờ dần rồi biến mất**, thay vì biến mất đột ngột.
4. *(Lưu ý `clear graphic effects` sau `hide` để lần sau `show` lại nhân vật hiện rõ, không bị mờ sẵn.)*

### Ví dụ mẫu 2 — Vẽ ngôi sao bằng Pen

1. Sprite bất kỳ, kéo `when green flag clicked`.
2. Gắn:
   ```
   erase all
   pen up
   go to x: (0) y: (0)
   pen down
   set pen color to (vàng)
   set pen size to (3)
   repeat (5)
     move (150) steps
     turn (144) degrees
   pen up
   ```
3. Bấm cờ xanh — Scratch tự vẽ một **ngôi sao 5 cánh** hoàn chỉnh! ⭐

*(Con số 144 độ = 360 ÷ 5 × 2 — đây là bí quyết vẽ hình sao bằng toán học đơn giản mà rất đẹp mắt.)*

### Em đoán xem?

Nếu em đổi `repeat (5)` + `turn (144)` ở Ví dụ mẫu 2 thành `repeat (6)` + `turn (60)`, em đoán Scratch sẽ vẽ ra hình gì? Đoán trước, rồi thử trên Scratch để kiểm tra!

---

### Thực hành 1 (TH1) — (15 phút) "Hiệu ứng xuất hiện và biến mất ✨"

#### Mô tả

Em làm nhân vật có **hai hiệu ứng**: khi bấm cờ xanh thì **phóng to dần từ nhỏ xíu** để xuất hiện, khi bấm Space thì **mờ dần rồi biến mất**.

#### Yêu cầu

- Cờ xanh: nhân vật bắt đầu rất nhỏ (`set size to 10`), phóng to dần lên 100.
- Space: nhân vật mờ dần (`ghost` effect tăng dần) rồi `hide`.
- Dùng `repeat` + `wait` để hiệu ứng diễn ra **mượt mà**, không giật cục.

#### Gợi ý từng bước

1. Tạo project mới, chọn sprite bất kỳ.
2. Code xuất hiện:
   ```
   when green flag clicked
   show
   clear graphic effects
   set size to (10)
   repeat (18)
     change size by (5)
     wait (0.03) secs
   ```
3. Code biến mất:
   ```
   when space key pressed
   repeat (20)
     change [ghost] effect by (5)
     wait (0.05) secs
   hide
   ```
4. Bấm cờ xanh — quan sát nhân vật **phóng to dần** từ chấm nhỏ. Bấm Space — quan sát nhân vật **mờ dần rồi biến mất**.
5. Bấm cờ xanh lại — nhân vật phải **hiện lại rõ ràng**, không còn bị mờ từ lần trước (nhờ `clear graphic effects`).
6. **Lưu project** với tên `TH1-hieu-ung-xuat-hien`.

#### Checklist tự kiểm

- [ ] Cờ xanh làm nhân vật phóng to dần, mượt mà
- [ ] Space làm nhân vật mờ dần rồi biến mất
- [ ] Bấm cờ xanh lại nhân vật hiện rõ bình thường
- [ ] Hiệu ứng không bị giật, diễn ra từ từ
- [ ] Em đã lưu project

---

### 🤸 Giải lao vận động (5 phút)

**Trò chơi "Vẽ hình bằng cơ thể"**

- Cả lớp đứng thành vòng tròn rộng. Giáo viên hô "Pen down!" — từ giờ cả lớp phải "vẽ" bằng cách di chuyển theo lệnh.
- Hô "Move 4 bước! Turn 90 độ!" — cả lớp bước 4 bước rồi xoay góc vuông tại chỗ. Lặp lại 4 lần để cả lớp "vẽ" ra hình vuông trong không gian lớp học.
- Hô "Pen up!" — cả lớp đứng yên, không di chuyển nữa.
- Thử thách thêm: đổi số lần lặp và góc xoay để "vẽ" hình tam giác (3 lần, 120 độ) — hỏi cả lớp thấy hình có đúng như dự đoán không.

---

### Thực hành 2 (TH2) — (15 phút) "Vệt sáng cầu vồng theo chuột 🌈"

#### Mô tả

Em làm nhân vật **để lại vệt màu cầu vồng** phía sau khi di chuyển theo chuột — càng di chuyển nhanh, vệt màu càng dài và đẹp mắt.

#### Yêu cầu

- Nhân vật di chuyển theo vị trí chuột (`go to mouse-pointer` hoặc tương tự).
- Bật `pen down`, màu bút **thay đổi liên tục** (dùng `change [pen color] by` hoặc `pick random`).
- Có phím để `erase all` khi muốn xóa vệt vẽ và bắt đầu lại.

#### Gợi ý từng bước

1. Tạo project mới, chọn sprite bất kỳ.
2. Code chính:
   ```
   when green flag clicked
   erase all
   set pen size to (5)
   pen down
   forever
     go to (mouse-pointer)
     change [pen color] by (5)
   ```
3. Bấm cờ xanh, di chuyển chuột khắp Stage — quan sát vệt màu cầu vồng theo sau chuột.
4. Thêm phím xóa:
   ```
   when [c] key pressed
   erase all
   ```
5. (Tùy chọn) Đổi `set pen size to (5)` thành số lớn hơn để vệt vẽ dày, ấn tượng hơn.
6. **Lưu project** với tên `TH2-vet-sang-cau-vong`.

#### Checklist tự kiểm

- [ ] Nhân vật di chuyển theo chuột
- [ ] Có vệt màu vẽ lại phía sau, màu thay đổi liên tục
- [ ] Phím `c` xóa sạch vệt vẽ
- [ ] Vệt vẽ mượt, không bị đứt quãng
- [ ] Em đã lưu project

---

### 🤝 Thử thách nhóm/sáng tạo (10–15 phút)

**"Triển lãm tranh Pen"**

- Ghép cặp 2 bạn, cùng thử nghiệm vẽ **một hình học đẹp** bằng Pen: hoa nhiều cánh, xoắn ốc, hoặc họa tiết lặp lại — dùng `repeat` lồng nhau và đổi màu bút liên tục.
- Gợi ý công thức "hoa": `repeat (36)`: `repeat (4)`: `move (50)`, `turn (90)`; sau đó `turn (10)` ở vòng ngoài — vẽ được hình hoa xoay nhiều lớp!
- Mỗi cặp chụp lại (hoặc giữ nguyên) "tác phẩm" đẹp nhất của mình sau 10 phút thử nghiệm.
- Giáo viên mở "triển lãm" — cho cả lớp đi xem nhanh 3–4 máy có hình vẽ ấn tượng nhất.

---

### Mẹo nhỏ 💡

- Luôn `pen up` khi di chuyển tới vị trí bắt đầu, chỉ `pen down` khi thực sự muốn vẽ — nếu không sẽ có nét vẽ thừa không mong muốn.
- `erase all` nên đặt ở **đầu cờ xanh** để mỗi lần chạy lại Stage sạch sẽ.
- `clear graphic effects` giúp "reset" mọi hiệu ứng hình ảnh — dùng sau mỗi hiệu ứng để tránh cộng dồn qua nhiều lần chạy.
- Vẽ hình học: góc xoay = 360 ÷ số cạnh (hình vuông: 360÷4=90, tam giác: 360÷3=120, lục giác: 360÷6=60).
- Hiệu ứng mượt mà = **nhiều bước lặp nhỏ** + `wait` ngắn, thay vì 1 bước thay đổi lớn.

---

### 🎉 Tổng kết & Ôn tập trò chơi (10 phút)

**"Trạm tiếp sức trả lời"** — chia lớp 2 đội, mỗi đội cử đại diện trả lời nhanh 1 câu rồi đổi người:

1. Khối nào làm nhân vật trong suốt dần?
2. `pen down` và `pen up` khác nhau thế nào?
3. Muốn vẽ hình vuông bằng Pen, em xoay bao nhiêu độ mỗi lần?
4. Vì sao nên đặt `erase all` ở đầu cờ xanh?
5. `clear graphic effects` dùng để làm gì?
6. `stamp` khác gì với `pen down`?

Đội trả lời đúng nhanh nhất mỗi câu được 1 điểm — tổng kết đội thắng cuối giờ.

- Mời 1–2 em chia sẻ vệt sáng cầu vồng TH2 của mình.
- Hẹn gặp lại ở buổi Bài tập tuần này để làm Luyện tập 1, 2 và bài mở rộng!

---

### 👩‍🏫 Ghi chú cho giáo viên

**Kịch bản demo nhanh:**
- Demo Ví dụ mẫu 2 (vẽ ngôi sao) trên máy chiếu — chạy chậm từng bước `move` + `turn` để học sinh thấy hình dần hiện ra, rất "wow" với lứa tuổi này.
- Demo cố ý **quên** `clear graphic effects` sau hiệu ứng ghost để học sinh thấy nhân vật vẫn mờ ở lần chạy sau — nhấn mạnh tầm quan trọng của bước reset.

**Lỗi thường gặp (ngoài phần Mẹo nhỏ):**
- Quên `pen down` nên di chuyển mà không thấy vẽ gì — nhắc kiểm tra đúng thứ tự: `pen down` **trước** khi `move`.
- Hiệu ứng `ghost` chạy 1 lần duy nhất (thiếu `repeat`) nên biến mất đột ngột thay vì mờ dần — nhắc lại cấu trúc `repeat + change + wait`.
- Ở TH2, một số em quên `forever` nên chỉ vẽ được 1 điểm rồi dừng — nhắc `forever` bọc quanh `go to mouse-pointer`.

**Quản lý lớp học:**
- Trò chơi "Vẽ hình bằng cơ thể" cần không gian rộng — có thể ra sân hoặc dồn bàn ghế; nhắc học sinh giữ khoảng cách khi xoay người.
- TH2 (vệt cầu vồng) thường khiến học sinh mê mải vẽ mà quên các yêu cầu khác — nhắc kiểm tra checklist trước khi chuyển sang thử thách nhóm.
- Hoạt động nhóm "Triển lãm tranh Pen" rất mở — nếu học sinh bí ý tưởng, gợi ý công thức "hoa xoay" có sẵn trong phần thử thách để các em có điểm khởi đầu.

---
## Buổi 40 — Bài tập (BT): Luyện Hiệu ứng & Pen ✨

### 🎬 Khởi động ôn tập (10 phút)

**"Đúng hay Sai?"** — Giáo viên đọc từng câu, học sinh giơ ngón cái lên (Đúng) hoặc xuống (Sai):
1. "`set [ghost] effect to (100)` làm nhân vật biến mất hoàn toàn." (Đúng)
2. "`pen down` làm nhân vật ngừng di chuyển." (Sai — chỉ là bắt đầu vẽ khi di chuyển)
3. "Muốn vẽ tam giác đều, em xoay 90 độ mỗi lần." (Sai — xoay 120 độ)
4. "`clear graphic effects` xóa hết mọi hiệu ứng hình ảnh về bình thường." (Đúng)
5. "`erase all` cũng xóa luôn cả nhân vật khỏi Stage." (Sai — chỉ xóa nét vẽ Pen)

### Ôn nhanh

Nhớ lại buổi trước nhé em:

- `ghost`, `color`, `whirl`, `pixelate`... là các hiệu ứng Looks; `clear graphic effects` để reset.
- Hiệu ứng mượt = `repeat` nhỏ + `change` từng chút + `wait` ngắn.
- `pen down` / `pen up` bật tắt việc vẽ; `set pen color`, `set pen size` chỉnh nét vẽ.
- Vẽ đa giác đều: góc xoay = 360 ÷ số cạnh.

---

### ✍️ Luyện tập 1, 2 (LT1/LT2) (15–20 phút)

Đầu buổi, em làm tại lớp có hướng dẫn hai bài luyện tập ngắn, nối tiếp buổi Học tuần trước — không phải chữa bài tập về nhà, mà là luyện lại ngay tại lớp có giáo viên hỗ trợ.

*Gợi ý:* Em có thể đổi máy với bạn bên cạnh trong 2 phút để cùng kiểm tra checklist của nhau — nếu phát hiện thiếu bước nào, nhắc bạn bổ sung.

#### Luyện tập 1 (LT1) — "Nhân vật nhấp nháy cảnh báo ⚠️"

**Mô tả:** Em luyện làm nhân vật **nhấp nháy liên tục** (đổi giữa rõ và mờ) khi ở trạng thái nguy hiểm — giống hiệu ứng cảnh báo trong game thật — làm ngay tại lớp có giáo viên hỗ trợ.

**Yêu cầu:**
- Nhấn phím `w` → nhân vật nhấp nháy 6 lần (mờ rồi rõ xen kẽ).
- Sau khi nhấp nháy xong, nhân vật trở lại **hoàn toàn bình thường**.
- Dùng `repeat` + `wait` để nhấp nháy đều nhịp.

**Gợi ý từng bước:**
1. Chọn sprite bất kỳ.
2. `when [w] key pressed`:
   ```
   repeat (6)
     set [ghost] effect to (70)
     wait (0.15) secs
     set [ghost] effect to (0)
     wait (0.15) secs
   clear graphic effects
   ```
3. Nhấn phím `w` nhiều lần, quan sát nhân vật nhấp nháy rồi trở lại bình thường.
4. Lưu project tên `LT1-nhap-nhay-canh-bao`.

**Checklist tự kiểm:**
- [ ] Phím `w` làm nhân vật nhấp nháy đúng 6 lần
- [ ] Nhấp nháy đều nhịp, không giật
- [ ] Sau khi xong trở lại bình thường hoàn toàn
- [ ] Em đã lưu project

| Em kiểm tra | Đúng khi... |
|-------------|-------------|
| Nhấp nháy | Rõ - mờ - rõ - mờ đều đặn |
| Số lần | Đúng 6 lần rồi dừng |
| Kết thúc | Không còn mờ, về hoàn toàn rõ |
| Lặp lại | Nhấn `w` lần 2 vẫn hoạt động bình thường |

**Nếu chưa đúng:** Nếu nhân vật mờ hẳn sau khi nhấp nháy xong, kiểm tra có `clear graphic effects` ở cuối chưa.

#### Luyện tập 2 (LT2) — "Vẽ bông hoa nhiều cánh 🌸"

**Mô tả:** Em luyện dùng Pen với **vòng lặp lồng nhau** để vẽ một bông hoa có nhiều cánh xoay đối xứng, mỗi cánh một màu — làm ngay tại lớp, có khó khăn gì cứ hỏi giáo viên.

**Yêu cầu:**
- Cờ xanh: `erase all`, đặt nhân vật về giữa Stage.
- Vẽ **6 cánh hoa** (mỗi cánh là 1 hình vuông nhỏ) xoay đều quanh tâm.
- Mỗi cánh có màu khác nhau (đổi `pen color` giữa các lần lặp).

**Gợi ý từng bước:**
1. Chọn sprite bất kỳ, set pen size vừa phải.
2. `when green flag clicked`:
   ```
   erase all
   go to x: (0) y: (0)
   pen up
   set pen size to (3)
   repeat (6)
     change [pen color] by (30)
     pen down
     repeat (4)
       move (60) steps
       turn (90) degrees
     pen up
     turn (60) degrees
   ```
3. Bấm cờ xanh, quan sát 6 hình vuông nhỏ xoay đều quanh tâm tạo hình bông hoa.
4. Lưu project tên `LT2-hoa-nhieu-canh`.

**Checklist tự kiểm:**
- [ ] Vẽ được đúng 6 cánh hoa
- [ ] Các cánh xoay đều quanh tâm, không chồng lấp lộn xộn
- [ ] Mỗi cánh có màu khác nhau
- [ ] Em đã lưu project

| Em kiểm tra | Đúng khi... |
|-------------|-------------|
| Số cánh | Đếm được đúng 6 hình vuông |
| Xoay đều | Các cánh cách đều nhau quanh tâm |
| Màu sắc | Mỗi cánh một màu, không trùng hết |
| Chạy lại | Cờ xanh lần 2 vẫn vẽ đúng, không chồng hình cũ do thiếu `erase all` |

**Nếu các cánh không đều:** Kiểm tra `turn (60) degrees` bên ngoài vòng lặp con — 360 ÷ 6 = 60, đúng số cánh em muốn vẽ.

---

### 🎯 Giới thiệu bài mở rộng (10 phút)

Giáo viên demo nhanh **1 ví dụ mẫu** (ví dụ bài B1 "Pháo hoa mừng chiến thắng") trên máy chiếu — chỉ rõ cách kết hợp `stamp` với hiệu ứng màu ngẫu nhiên, trước khi học sinh tự chọn mức bài cho mình.

Em chọn **1 mức** A, B hoặc C, rồi chọn **1 trong 2 bài** của mức đó. Làm hết checklist trước khi đổi bài.

| Mức | Khi nào chọn |
|-----|--------------|
| **A1 hoặc A2** | Em luyện hiệu ứng Looks cơ bản (mờ dần, phóng to) |
| **B1 hoặc B2** | Em kết hợp Pen với game hoặc hiệu ứng chuyển động |
| **C1 hoặc C2** | Em làm hiệu ứng phức tạp kết hợp nhiều kỹ thuật |

---

### ✍️ Làm bài mở rộng (30–35 phút)

#### Bài A1 — Đèn lồng phát sáng 🏮

| | Nội dung |
|---|----------|
| **Mô tả** | Lễ hội đèn lồng sắp tới, và em được giao thiết kế chiếc đèn lồng đặc biệt — sáng dần khi trời tối, tắt dần khi trời sáng, lặp lại liên tục như đèn thật ngoài phố! |
| **Yêu cầu bắt buộc** | Nhân vật đèn lồng; hiệu ứng sáng/tắt dần mượt mà bằng `ghost` hoặc `brightness`; lặp lại liên tục trong `forever` |
| **Gợi ý bước** | 1. Chọn sprite đèn lồng hoặc ngôi sao. 2. `forever`: `repeat (15) change ghost by -2 wait 0.05`, rồi `repeat (15) change ghost by 2 wait 0.05`. 3. Lưu project. |
| **Checklist** | - [ ] Đèn sáng dần rồi tắt dần liên tục<br>- [ ] Hiệu ứng mượt, không giật cục<br>- [ ] Lặp lại không dừng<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm 2–3 đèn lồng khác nhau, mỗi đèn sáng/tắt **lệch nhịp nhau** (dùng `wait` khác nhau lúc bắt đầu) để tạo hiệu ứng lung linh như dãy đèn thật ngoài phố. |

---

#### Bài A2 — Bong bóng xà phòng bay lên 🫧

| | Nội dung |
|---|----------|
| **Mô tả** | Em làm những quả bong bóng xà phòng bay lên từ dưới và **mờ dần biến mất** khi lên tới đỉnh màn hình — giống hệt bong bóng xà phòng thật ngoài đời! |
| **Yêu cầu bắt buộc** | Nhân vật bong bóng; di chuyển lên trên liên tục; mờ dần (`ghost` tăng) khi càng lên cao; biến mất và quay lại vị trí thấp để lặp lại |
| **Gợi ý bước** | 1. Sprite bong bóng, `go to x: (...) y: (-150)`. 2. `forever`: `change y by (2)`, `change ghost effect by (1)`, `if y position > 150` → về lại vị trí thấp, `set ghost effect to (0)`. 3. Lưu project. |
| **Checklist** | - [ ] Bong bóng bay lên liên tục<br>- [ ] Mờ dần khi lên cao<br>- [ ] Quay lại từ đầu sau khi lên hết<br>- [ ] Em đã lưu project |
| **Thử thêm** | Tạo 3–4 sprite bong bóng kích thước khác nhau, bay với tốc độ khác nhau (`change y by` số khác nhau) để tạo cảnh nhiều bong bóng bay lên tự nhiên hơn. |

---

#### Bài B1 — Pháo hoa mừng chiến thắng 🎆

| | Nội dung |
|---|----------|
| **Mô tả** | Đội bóng của trường em vừa thắng trận chung kết! Em làm màn **bắn pháo hoa ăn mừng**: nhấn Space là một chùm "pháo hoa" (nhiều dấu `stamp` màu ngẫu nhiên) nổ ra từ một điểm, tỏa ra các hướng khác nhau. |
| **Yêu cầu bắt buộc** | Nhấn Space → nhân vật xoay nhiều hướng và `stamp` màu ngẫu nhiên tại mỗi hướng; dùng `pick random` cho màu; có `erase all` để dọn màn hình |
| **Gợi ý bước** | 1. Sprite chấm nhỏ (dot), `go to x: (0) y: (0)` khi bắt đầu chùm pháo hoa. 2. `when space key pressed`: `repeat (36)`: `set pen color to (pick random 0 to 200)`, `move (pick random 20 to 100) steps`, `stamp`, `go to x: (0) y: (0)`, `turn (10) degrees`. 3. Thêm phím `c` → `erase all`. 4. Lưu project. |
| **Checklist** | - [ ] Space tạo ra chùm pháo hoa tỏa nhiều hướng<br>- [ ] Màu sắc ngẫu nhiên, rực rỡ<br>- [ ] Phím xóa hoạt động<br>- [ ] Em đã lưu project |
| **Thử thêm** | Cho pháo hoa "bay lên rồi nổ": trước khi `stamp` tỏa hướng, cho sprite di chuyển thẳng lên trên một đoạn ngắn kèm âm thanh, giống pháo hoa thật bắn lên trời rồi mới nổ tung. |

---

#### Bài B2 — Đường đua có vệt khói xe 🏎️

| | Nội dung |
|---|----------|
| **Mô tả** | Chiếc xe đua của em để lại **vệt khói bụi** phía sau khi tăng tốc — vệt khói mờ dần và biến mất theo thời gian, giống hiệu ứng tốc độ trong phim đua xe. |
| **Yêu cầu bắt buộc** | Xe di chuyển bằng phím; để lại vệt Pen phía sau; vệt khói **mờ dần rồi biến mất** sau một khoảng thời gian (dùng `erase all` định kỳ hoặc `ghost` cho một sprite khói riêng) |
| **Gợi ý bước** | 1. Sprite xe di chuyển trái/phải bằng phím, `pen down`, màu bút xám nhạt. 2. Thêm `forever` riêng: `wait (2)` → `erase all` (xóa vệt cũ định kỳ để không dày đặc mãi). 3. (Nâng cao) Dùng sprite khói riêng, `create clone` mỗi khi xe di chuyển, clone tự mờ dần rồi `delete this clone`. 4. Lưu project. |
| **Checklist** | - [ ] Xe để lại vệt Pen khi di chuyển<br>- [ ] Vệt khói không tồn tại mãi mãi (có xóa định kỳ hoặc mờ dần)<br>- [ ] Điều khiển xe mượt bằng phím<br>- [ ] Em đã lưu project |
| **Thử thêm** | Đổi màu vệt khói theo tốc độ xe: xe càng chạy nhanh (giữ phím lâu) thì màu vệt càng đậm hoặc chuyển sang màu cam/đỏ như hiệu ứng tốc độ cao trong game đua xe thật. |

---

#### Bài C1 — Vẽ vạn hoa xoay (Kaleidoscope) 🌀

| | Nội dung |
|---|----------|
| **Mô tả** | Em tạo ra một **cỗ máy vẽ vạn hoa**: dùng nhiều vòng lặp lồng nhau kết hợp đổi màu liên tục để vẽ ra những họa tiết đối xứng, phức tạp và đầy màu sắc — như nhìn qua kính vạn hoa thật! |
| **Yêu cầu bắt buộc** | Ít nhất **3 lớp vòng lặp lồng nhau**; màu bút thay đổi liên tục; hình vẽ có tính đối xứng rõ rệt (xoay đều quanh tâm); có phím xóa và vẽ lại |
| **Gợi ý bước** | 1. Sprite ở giữa Stage. 2. `when space key pressed`: `erase all` → `repeat (12)` (12 lớp xoay): `repeat (5)` (mỗi lớp vẽ hình 5 cạnh nhỏ): `change pen color by (7)`, `move (40) steps`, `turn (72) degrees`; sau đó `turn (30) degrees` (360÷12) ở vòng ngoài, quay `move (-40*5) hoặc pen up về tâm`. 3. Thử nghiệm nhiều con số khác nhau để tìm họa tiết đẹp nhất. 4. Lưu project. |
| **Checklist** | - [ ] Có ít nhất 3 lớp vòng lặp lồng nhau<br>- [ ] Họa tiết đối xứng quanh tâm<br>- [ ] Màu sắc thay đổi liên tục, rực rỡ<br>- [ ] Có phím xóa và vẽ lại được<br>- [ ] Em đã lưu project |
| **Thử thêm** | Cho họa tiết **tự động vẽ chậm dần theo thời gian thực** (thêm `wait (0.02)` trong vòng lặp trong cùng) để người xem thấy quá trình hình thành hoa văn, giống video timelapse nghệ thuật. |

---

#### Bài C2 — Game "né đạn" với hiệu ứng đầy đủ 💥

| | Nội dung |
|---|----------|
| **Mô tả** | Em làm một mini-game **né đạn**: nhân vật né các "viên đạn" rơi từ trên xuống, có đầy đủ hiệu ứng chuyên nghiệp — nhân vật nhấp nháy khi trúng đạn, nổ tung bằng hiệu ứng `stamp` màu, và vệt Pen theo dõi đường đi của đạn. |
| **Yêu cầu bắt buộc** | Nhân vật né đạn bằng phím trái/phải; ít nhất 1 "đạn" rơi liên tục từ trên xuống (lặp lại vị trí ngẫu nhiên); trúng đạn → hiệu ứng nhấp nháy + `stamp` nổ; biến `mạng` hoặc `điểm sống sót` |
| **Gợi ý bước** | 1. Nhân vật né trái/phải bằng phím, giữ trong vùng màn hình. 2. Sprite đạn: `forever`: `change y by (-6)`, `if y < -170` → về lại trên cao ở x ngẫu nhiên. 3. Nhân vật: `if touching [đạn]?` → nhấp nháy 6 lần (như LT1) + `stamp` hiệu ứng nổ màu đỏ cam tại vị trí va chạm + `change mạng by -1`. 4. `if mạng <= 0` → `say [Thua rồi!]` + `stop all`. 5. Lưu project. |
| **Checklist** | - [ ] Đạn rơi liên tục, vị trí đổi ngẫu nhiên mỗi lượt<br>- [ ] Né được bằng phím trái/phải<br>- [ ] Trúng đạn có hiệu ứng nhấp nháy + nổ<br>- [ ] Hết mạng thì game dừng đúng<br>- [ ] Em đã lưu project |
| **Thử thêm** | Tăng dần **tốc độ rơi** của đạn theo thời gian sống sót (`change y by` số âm lớn hơn dần) để game càng chơi càng khó, kết hợp biến `thời gian sống sót` hiển thị điểm số cuối cùng. |

---

### 🖼️ Showcase (10 phút)

"Gallery walk" — em để project đang chạy trên máy, cả lớp đứng dậy đi vòng quanh xem project của 3–4 bạn gần nhất trong 1–2 phút, đặc biệt chú ý các bài mức C xem hiệu ứng của bạn đẹp và mượt đến đâu. Giáo viên mời 2–3 em xung phong trình chiếu project của mình trước lớp.

### ✅ Tổng kết (5 phút)

Nhắc lại: hôm nay em đã luyện hiệu ứng Looks (mờ dần, nhấp nháy, phóng to) và Pen (vẽ hình, vệt màu, pháo hoa) để làm game đẹp mắt hơn. Đây cũng là buổi cuối cùng của **Tháng 5**! Tháng sau em sẽ dùng **tất cả** những gì đã học suốt 5 tháng để làm **dự án game lớn cuối khóa**, rồi xuất bản và chia sẻ trên cộng đồng Scratch. Tiếp tục trong file [thang-6-du-an-lon-xuat-ban.md](thang-6-du-an-lon-xuat-ban.md) nhé! 🚀

---
