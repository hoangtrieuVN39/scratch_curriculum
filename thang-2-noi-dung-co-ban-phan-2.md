# Nội dung cơ bản (2) — Tuần 5 đến 8 🎵🔁🎮

> Chào em! Đây là phần học **tháng 2** của khóa Scratch. Em sẽ học thêm **âm thanh**, **nhiều nhân vật**, **cảm biến**, **vòng lặp**, **điều kiện** và **biến** — những mảnh ghép quan trọng để làm game hay hơn!

**Tuần 5–8** | **Buổi 9–16** | Dành cho em **7–10 tuổi**

---

# Tuần 5 — Âm thanh & nhiều sprite 🎵

---

## Buổi 9 — Học (H): Âm thanh & nhiều sprite

### Hôm nay em học gì?

Hôm nay em sẽ làm project Scratch **có tiếng** và **có nhiều nhân vật cùng lúc**! Em học cách cho nhạc nền chạy liên tục, phát tiếng khi click, và cho hai sprite nói chuyện với nhau như một đoạn hội thoại nhỏ. 🎶🐱🐶

---

### 🎬 Khởi động (10 phút)

**Trò chơi "Đoán âm thanh"**

- Giáo viên phát 3–4 âm thanh ngắn (vỗ tay, huýt sáo, tiếng chuông, tiếng cười...) mà không cho học sinh nhìn — chỉ nghe rồi đoán đó là âm thanh gì.
- Hỏi cả lớp: "Buổi trước (Buổi 8) mình đã cho sprite phản ứng khi click chuột hoặc bấm phím. Hôm nay nếu click mà sprite còn **phát ra tiếng** nữa thì sao?" → dẫn vào chủ đề âm thanh (Sound) trong Scratch.
- Hỏi thêm: "Nếu 2 bạn cùng lúc nói to trong lớp, mình có nghe rõ ai nói gì không? Vậy làm sao để 2 nhân vật Scratch nói chuyện mà không bị chồng tiếng?" → dẫn vào chủ đề nhiều sprite + hội thoại của hôm nay.

---

### Kiến thức mới (20 phút)

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

**Vì sao quan trọng?** Đến giờ project của em mới chỉ có 1 nhân vật và im lặng. Âm thanh giúp project "sống động" hơn hẳn — giống phim có tiếng động thay vì phim câm. Nhiều sprite cùng lúc lại là bước đầu tiên để làm **game thật sự**: nhân vật chính, quái vật, vật phẩm... đều là những sprite riêng chạy code song song. Biết phối hợp âm thanh + nhiều sprite là nền tảng cho mọi game em sẽ làm sau này.

---

### Ví dụ mẫu 1 — Mèo chào em có tiếng "Meow"

1. Chọn sprite **Cat** (Mèo).
2. Vào tab **Sounds** → **Choose a Sound** → chọn `Meow`.
3. Kéo khối `when green flag clicked` (Events).
4. Gắn `say` `Xin chào!` `for` `2` `secs` (Looks).
5. Gắn tiếp `start sound` `Meow` (Sound).
6. Bấm **cờ xanh** — mèo nói và kêu "Meow"! 🐱

### Ví dụ mẫu 2 — Hai sprite chào nhau không chồng tiếng

1. Sprite **Mèo**: `when green flag clicked` → `say` `Chào Cún!` `for` `2` `secs`.
2. Sprite **Cún**: `when green flag clicked` → `wait` `2` `secs` → `say` `Chào Mèo!` `for` `2` `secs`.
3. Bấm cờ xanh — Mèo nói trước, đợi đúng 2 giây, rồi Cún mới nói — không bị chồng lời!

*(Nếu bỏ khối `wait 2 secs` ở Cún, hai bạn sẽ nói cùng lúc và không nghe rõ ai nói gì — đây chính là kỹ năng em sẽ luyện kỹ hơn ở TH2!)*

### Em đoán xem?

Nếu sprite Mèo `say` `Xin chào!` `for` `3` `secs`, và sprite Cún có `wait` `1` `secs` rồi mới `say` câu của mình — theo em, lúc Cún bắt đầu nói thì Mèo đã nói xong chưa? Đoán trước, rồi thử trên Scratch xem mình đoán đúng không!

---

### Thực hành 1 (TH1) — (15 phút) "Nhạc nền + tiếng click 🔊"

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

### 🤸 Giải lao vận động (5 phút)

**Trò chơi "Vỗ tay theo nhịp"**

- Cả lớp đứng dậy. Giáo viên vỗ tay một nhịp ngắn (ví dụ: vỗ - vỗ - ngừng - vỗ), học sinh vỗ lại đúng y hệt.
- Tăng dần độ khó: thêm dậm chân, búng tay xen kẽ vỗ tay.
- Chia lớp 2 nhóm: nhóm 1 vỗ tay nhịp nền liên tục (giống "nhạc nền" ở Stage), nhóm 2 thỉnh thoảng dậm chân xen vào (giống "tiếng click" ở sprite) — cả lớp cảm nhận 2 lớp âm thanh chạy cùng lúc, giống project TH1 em vừa làm.

---

### Thực hành 2 (TH2) — (15 phút) "Hội thoại 2 sprite 💬"

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

### 🤝 Thử thách nhóm/sáng tạo (10–15 phút)

**"Đoán lời thoại của bạn"**

- Ghép cặp 2 bạn. Bạn A cho bạn B xem project TH2 của mình chạy 1 lần (không cho xem code, chỉ xem/nghe kết quả).
- Bạn B đoán: "Bạn Mèo nói mấy câu? Bạn Cún nói câu gì trước?"
- Đổi vai, thử với project của bạn B.
- Khuyến khích: nếu còn thời gian, mỗi cặp thêm 1 câu thoại "bất ngờ" thứ 3 vào giữa hội thoại rồi đố cặp bên cạnh nghe xem có nhận ra câu mới không.
- Giáo viên mời 1–2 cặp trình diễn hội thoại trước lớp.

---

### Mẹo nhỏ 💡

- **Nhạc quá to?** Dùng `set volume to` `50` `%` trước khi `start sound`.
- **Hội thoại bị lệch thời gian?** Viết ra giấy thứ tự: Meo nói → đợi → Cho nói → đợi → Meo nói...
- **Muốn nhân vật đổi mặt khi nói?** Thêm `switch costume to` trước hoặc sau khối `say`.
- Âm thanh của **Stage** và **Sprite** là riêng — nhớ chọn đúng chỗ khi thêm sound!

---

### 🎉 Tổng kết & Ôn tập trò chơi (10 phút)

**"Đố vui tiếp sức"** — chia lớp 2 đội, mỗi đội cử đại diện trả lời nhanh 1 câu rồi đổi người:

1. Em thêm nhạc nền vào **Stage** hay **Sprite**? Vì sao?
2. Khối `start sound` và `play sound until done` khác nhau thế nào?
3. Làm sao để hai sprite không nói cùng một lúc?
4. Khối `when this sprite clicked` dùng để làm gì?
5. Mỗi sprite trong Scratch có code riêng hay dùng chung code?

Đội trả lời đúng nhanh nhất mỗi câu được 1 điểm — tổng kết đội thắng cuối giờ.

- Mời 1–2 em xung phong trình chiếu project TH2 "hội thoại 2 sprite" của mình.
- Hẹn gặp lại ở buổi Bài tập tuần này để làm Luyện tập 1, 2 và bài mở rộng!

---

### 👩‍🏫 Ghi chú cho giáo viên

**Kịch bản demo nhanh:**
- Trước Kiến thức mới, mở sẵn 1 project có nhạc nền + tiếng click, cho cả lớp nghe trước khi giải thích khối lệnh — nghe trước, học từ vựng sau sẽ dễ nhớ hơn.
- Demo trực tiếp Ví dụ mẫu 2 (hai sprite chào nhau) hai lần: lần 1 bỏ `wait` để cả lớp nghe tiếng chồng lên nhau, lần 2 có `wait` để so sánh rõ khác biệt.

**Lỗi thường gặp (ngoài phần Mẹo nhỏ):**
- Học sinh thêm âm thanh vào nhầm sprite thay vì Stage (hoặc ngược lại) khiến nhạc nền không phát — nhắc lại quy tắc "nhạc nền ở Stage, tiếng riêng ở sprite".
- Quên chọn đúng tên âm thanh trong khối `start sound` (vẫn để mặc định) — chỉ vào dropdown của khối, xác nhận tên khớp với sound vừa thêm.
- Hai sprite nói chồng vì tính sai số giây `wait` — hướng dẫn em viết thứ tự hội thoại ra giấy nháp trước khi kéo khối.

**Quản lý lớp học:**
- Khởi động "Đoán âm thanh": phát âm thanh vừa đủ nghe cả lớp, không quá to gây giật mình; học sinh giơ tay trả lời thay vì la to.
- Giải lao vận động dễ ồn khi 2 nhóm cùng vỗ/dậm — quy định rõ tín hiệu "Dừng!" của giáo viên để cắt ngay khi cần.
- Thử thách nhóm: đi vòng quanh lớp hỗ trợ cặp nào project chưa chạy được, ưu tiên nhắc đổi vai đúng giờ để cả hai bạn đều được đoán.

---

## Buổi 10 — Bài tập (BT): Luyện Sound 🎧

### 🎬 Khởi động ôn tập (10 phút)

**"Đúng hay Sai?"** — Giáo viên đọc từng câu, học sinh giơ ngón cái lên (Đúng) hoặc xuống (Sai). Lần này câu hỏi cần **suy luận** chứ không chỉ nhớ khái niệm:

1. "Nếu sprite Mèo `say` "Xin chào!" `for 3 seconds`, và sprite Cún có `wait 2 seconds` rồi mới nói — lúc Cún bắt đầu nói, Mèo đã nói xong chưa?" (Sai — Mèo còn 1 giây nữa mới nói xong, nên bị chồng tiếng)
2. "Nếu em đặt nhạc bằng `forever` + `start sound` ở cả Stage và ở 1 sprite, hai đoạn nhạc có phát cùng lúc không?" (Đúng — code ở Stage và ở sprite chạy độc lập với nhau)
3. "`play sound until done` đặt trong `forever` sẽ phát nhạc liên tục, không bị chồng bản." (Đúng — vì mỗi vòng lặp đợi hết nhạc rồi mới phát lại)
4. "`start sound` đặt trong `forever` cũng phát nhạc liên tục y hệt `play sound until done`." (Sai — `start sound` không đợi, nên `forever` gọi lại liên tục làm nhạc bị chồng nhiều bản cùng lúc)
5. "Nếu 3 sprite đều có `when green flag clicked` → `say` ngay lập tức, cả 3 sẽ nói chồng lên nhau trừ khi có `wait` xen kẽ hợp lý." (Đúng)

### Ôn nhanh

Nhớ lại buổi trước nhé em:

- **Sound:** `start sound`, `play sound until done` — nhạc nền thường ở **Stage**.
- **Nhiều sprite:** mỗi sprite code riêng; dùng `say` + `wait` để hội thoại.
- **Events:** `when green flag clicked`, `when this sprite clicked`.

---

### ✍️ Luyện tập 1, 2 (LT1/LT2) (15–20 phút)

Hai bài dưới đây em làm **ngay tại lớp, có giáo viên hướng dẫn** — không phải chữa bài tập về nhà, mà là luyện lại kỹ năng của buổi Học tuần trước ngay tại chỗ.

*Gợi ý:* Đổi máy với bạn bên cạnh 2 phút sau khi làm xong để cùng kiểm tra checklist của nhau — phát hiện thiếu bước nào thì nhắc bạn bổ sung ngay.

#### Luyện tập 1 (LT1) — "Click phát tiếng — 2 nhân vật + nhạc nền 🔊🐱🐶"

**Mô tả:** Em làm project có **nhạc nền chạy liên tục ở Stage**, và **2 sprite khác nhau** — mỗi sprite phát 1 âm thanh riêng kèm câu nói riêng khi được click, trong khi nhạc nền vẫn chạy.

**Yêu cầu:**
- Nhạc nền ở **Stage**, chạy liên tục bằng `forever` + `start sound` (hoặc `play sound until done`).
- **2 sprite**, mỗi sprite có **1 âm thanh riêng** — không trùng nhau và không trùng nhạc nền.
- Mỗi sprite: **click** → phát âm thanh riêng + `say` **1 câu**.
- Click nhiều lần vào từng sprite vẫn hoạt động bình thường, nhạc nền không bị tắt.

**Gợi ý từng bước:**
1. Chọn Stage → thêm nhạc nền → code `forever` + `start sound`.
2. Chọn 2 sprite khác nhau, mỗi sprite thêm 1 âm thanh riêng (tab Sounds).
3. Code từng sprite: `when this sprite clicked` → `start sound` ... → `say` ... `for` `2` `secs`.
4. Bấm cờ xanh (nhạc nền phát), click từng sprite — nghe rõ 2 tiếng khác nhau xen với nhạc nền.
5. Lưu project tên `LT1-2-nhan-vat`.

**Em tự kiểm:**
- Nhạc nền chạy ngay khi bấm cờ xanh, không bị ngắt khi click sprite
- Mỗi sprite phát đúng âm thanh của mình, không lẫn với sprite kia hay nhạc nền
- Có phản ứng (`say`) ở cả 2 sprite khi click
- Click nhiều lần từng sprite vẫn ổn định

**Nếu chưa đúng:** Kiểm tra từng sprite đã thêm **đúng sound riêng** (không dùng chung 1 sound); kiểm tra khối `forever` đang ở Stage, không bị đặt nhầm sang sprite.

#### Luyện tập 2 (LT2) — "Hội thoại 6 câu — 3 sprite 📝👥"

**Mô tả:** Em làm hội thoại **6 câu** giữa **3 sprite** (mỗi nhân vật nói 2 câu), có `wait` để 3 bạn không nói chồng lên nhau.

**Yêu cầu:**
- 3 sprite, tổng **6 câu** thoại (mỗi bạn 2 câu).
- Bắt đầu khi bấm cờ xanh, đúng thứ tự: bạn 1 → bạn 2 → bạn 3.
- Nội dung hội thoại do em tự sáng tác, có chủ đề rõ ràng.

**Gợi ý từng bước:**
1. Chọn 3 sprite.
2. Viết kịch bản 6 câu ra giấy, đánh số ai nói câu mấy theo đúng thứ tự.
3. Lập trình sprite 1: nói câu 1 → `wait` đủ thời gian sprite 2, 3 nói xong → nói câu 4.
4. Lập trình sprite 2: `wait` (đợi câu 1) → nói câu 2 → `wait` (đợi câu 3, 5) → nói câu 5.
5. Lập trình sprite 3: `wait` (đợi câu 1, 2) → nói câu 3 → `wait` (đợi câu 4) → nói câu 6.
6. Chạy thử, chỉnh `wait` cho khớp — với 3 sprite việc tính `wait` khó hơn nhiều so với 2 sprite, em cần thử vài lần mới khớp.
7. Lưu project tên `LT2-hoi-thoai-3-nhan-vat`.

**Em tự kiểm:**
- Đủ 6 câu `say` (3 sprite × 2 câu)
- Đúng thứ tự, không chồng — dù có 3 luồng code chạy song song
- Có ít nhất **4 khối `wait`** (nhiều hơn bản 2 sprite)
- Bấm cờ xanh là hội thoại bắt đầu

**Nếu nói chồng:** Vẽ sơ đồ thời gian trên giấy trước (mốc giây mỗi bạn nói) rồi mới gắn `wait` khớp theo sơ đồ.

---

### 🎯 Giới thiệu bài mở rộng (10 phút)

Giáo viên demo nhanh **1 ví dụ mẫu** (ví dụ bài A1 "Bữa tiệc âm nhạc") trên máy chiếu — chỉ rõ cách thêm nhạc vào Stage và gắn `forever` + `start sound` — trước khi học sinh tự chọn mức bài cho mình.

Em chọn **1 mức** A, B hoặc C, rồi chọn **1 trong 2 bài** của mức đó.

| Mức | Khi nào chọn |
|-----|--------------|
| **A1 hoặc A2** | 🎶 Bữa tiệc âm nhạc (A1) hoặc 🐹 Thú cưng kêu Pop (A2) — luyện nhạc nền & tiếng click 🎵 |
| **B1 hoặc B2** | 🛒 Chuyện ở siêu thị (B1) hoặc 🎤 Phóng viên nhí (B2) — luyện hội thoại 💬 |
| **C1 hoặc C2** | 🎬 Đạo diễn nhí (C1) hoặc 🥁 Ban nhạc lưu diễn (C2) — kịch bản + backdrop + âm thanh 🎬 |

Em chỉ cần làm **1 bài** em chọn!

---

### ✍️ Làm bài mở rộng (30–35 phút)

### Bài A1 — Bữa tiệc âm nhạc 🎶

| | Nội dung |
|---|----------|
| **Mô tả** | Cuối tuần, lớp em tổ chức một bữa tiệc nhỏ. Em phụ trách phần "DJ" thật sự — không chỉ bật 1 bài nhạc, mà phải **chuyển đổi giữa ít nhất 2 bài** theo phím bấm của khán giả, giống DJ chọn nhạc theo yêu cầu! |
| **Yêu cầu bắt buộc** | ≥ 2 bài nhạc khác nhau ở Stage; phím 1 → phát nhạc A liên tục; phím 2 → **dừng nhạc A** rồi phát nhạc B liên tục (dùng `stop all sounds` trước khi đổi bài để không chồng nhạc); có ít nhất 1 sprite trên Stage |
| **Gợi ý bước** | 1. Thêm 2 bài nhạc vào Stage. 2. Code: `when key 1 pressed` → `stop all sounds` → `forever` → `start sound` Nhạc A. 3. Code tương tự cho phím 2 với Nhạc B. 4. Thử bấm đổi qua lại, đảm bảo không chồng nhạc. 5. Lưu project. |
| **Thử thêm** | Thêm phím thứ 3 để `stop all sounds` (tắt hẳn nhạc), và hiển thị tên bài đang phát bằng `say` ở 1 sprite trang trí mỗi khi đổi bài |

---

### Bài B1 — Chuyện ở siêu thị 🛒

| | Nội dung |
|---|----------|
| **Mô tả** | Hai bạn nhỏ đi siêu thị cùng nhau — dọc đường xảy ra bao nhiêu chuyện thú vị: chọn đồ, gặp bạn quen, tính tiền... và cả **nhân viên thu ngân** cũng góp vui! Em viết hội thoại **8 câu** trở lên giữa **3 sprite** để kể lại chuyến đi đó. |
| **Yêu cầu bắt buộc** | 3 sprite (thêm nhân viên thu ngân); ≥ 8 câu `say`; dùng `wait` chính xác cho cả 3 luồng code chạy song song; chủ đề rõ ràng; bắt đầu bằng cờ xanh |
| **Gợi ý bước** | 1. Viết kịch bản 8 câu, chia rõ ai nói câu mấy trong số 3 bạn. 2. Vẽ sơ đồ thời gian trên giấy trước khi lập trình. 3. Code từng sprite với `wait` khớp theo sơ đồ. 4. Chạy thử nhiều lần, sửa `wait` cho khớp cả 3 luồng. 5. Lưu project. |
| **Thử thêm** | Thêm âm thanh "tính tiền" (tiếng chuông) ở nhân viên thu ngân khi tính tiền xong, và đổi costume vui/buồn cho 2 bạn kia theo diễn biến câu chuyện |

---

### Bài C1 — Đạo diễn nhí 🎬

| | Nội dung |
|---|----------|
| **Mô tả** | Em là đạo diễn của một bộ phim ngắn **4 cảnh** — mỗi cảnh có bối cảnh riêng, **3 nhân vật** cùng góp mặt và ít nhất 2 âm thanh minh họa khác nhau (tiếng cười, tiếng vỗ tay...), giống một đoạn phim thật sự. |
| **Yêu cầu bắt buộc** | ≥ 3 backdrop; ≥ 3 sprite; ≥ 2 âm thanh khác nhau; hội thoại ≥ 6 câu; dùng `switch backdrop to` đúng thời điểm cho cả 4 cảnh |
| **Gợi ý bước** | 1. Chọn 3–4 backdrop. 2. Viết kịch bản 4 cảnh, phân vai cho 3 nhân vật. 3. Mỗi lần đổi cảnh: `wait` → `switch backdrop to` → tiếp tục hội thoại + `start sound` phù hợp cảnh đó. 4. Lưu project. |
| **Thử thêm** | Thêm nhạc nền nhẹ ở Stage suốt câu chuyện, thêm dòng chữ "THE END" bằng khối `say` ở cảnh cuối như credit cuối phim, và dùng 1 âm thanh riêng cho mỗi lần đổi cảnh (không lặp lại cùng 1 tiếng) |

---

### Bài A2 — Vườn thú Pop 🐹🐰

| | Nội dung |
|---|----------|
| **Mô tả** | Em có một "góc vườn thú" mini trong Scratch với **2 thú cưng khác nhau** — mỗi con kêu 1 âm thanh riêng và phản ứng khác nhau khi em chạm/click vào, giống mỗi con vật có tính cách riêng. |
| **Yêu cầu bắt buộc** | 2 sprite thú cưng, mỗi sprite có `when this sprite clicked` → âm thanh riêng (không trùng nhau) + phản ứng riêng (`say` hoặc `next costume`); click nhiều lần từng con vẫn hoạt động |
| **Gợi ý bước** | 1. Chọn 2 sprite thú cưng khác nhau. 2. Tab Sounds → mỗi sprite thêm 1 âm thanh riêng. 3. Code từng sprite: `when this sprite clicked` → `start sound` riêng → `say` phản ứng riêng `for` `1` `secs`. 4. Click thử từng con vài lần. 5. Lưu project. |
| **Thử thêm** | Thêm `change size by` (-5) mỗi lần click cho cả 2 con — chúng nhỏ dần — và cho mỗi con đổi qua nhiều costume khác nhau bằng `next costume` mỗi lần click để trông như đang "nhảy nhót" |

---

### Bài B2 — Phóng viên nhí 🎤

| | Nội dung |
|---|----------|
| **Mô tả** | Em vào vai phóng viên nhí, phỏng vấn chính khán giả (người chơi) bằng **6 câu hỏi** thú vị — sprite hỏi, người chơi gõ trả lời, sprite phản hồi lại như một cuộc trò chuyện thật, thỉnh thoảng có sprite thứ 2 đóng vai khán giả chen vào bình luận. |
| **Yêu cầu bắt buộc** | ≥ 6 khối `ask`; mỗi câu có phản hồi bằng `join` (nối câu trả lời vào câu nói, không lặp lại y hệt một mẫu); có `wait` giữa các câu, đúng thứ tự; bắt đầu bằng cờ xanh |
| **Gợi ý bước** | 1. Viết 6 câu hỏi (tên, tuổi, sở thích, môn học yêu thích, ước mơ, con vật yêu thích...). 2. Code: `ask` → `say` (`join` "..." `answer`) → `wait` → `ask` tiếp theo... 3. Cuối: `say` "Cảm ơn em đã phỏng vấn!". 4. Chạy thử, chỉnh `wait`. 5. Lưu project. |
| **Thử thêm** | Thêm sprite thứ 2 đóng vai "khán giả", thỉnh thoảng chen vào 1 câu bình luận (`say`) giữa các câu hỏi, và thêm 1 âm thanh "tạch" nhẹ trước mỗi câu hỏi mới, giống tiếng máy quay phim phỏng vấn thật |

---

### Bài C2 — Ban nhạc lưu diễn 🥁

| | Nội dung |
|---|----------|
| **Mô tả** | Ban nhạc **2 thành viên** của em đi lưu diễn qua nhiều sân khấu khác nhau! Em làm **mini phim** ngắn: đổi backdrop theo từng điểm diễn, có ít nhất **2 loại nhạc cụ** khác nhau giữ nhịp và hội thoại xen kẽ giữa 2 thành viên ban nhạc. |
| **Yêu cầu bắt buộc** | ≥ 3 backdrop; 2 sprite (2 thành viên ban nhạc hội thoại xen kẽ); ≥ 2 loại âm thanh nhạc cụ khác nhau (ví dụ Drum và Guitar); `switch backdrop to` ít nhất 3 lần; hội thoại ≥ 5 câu |
| **Gợi ý bước** | 1. Chọn 3–4 backdrop (sân khấu, rừng, bãi biển...). 2. Thêm ≥ 2 sound nhạc cụ khác nhau. 3. Mỗi sân khấu: `say` giới thiệu xen kẽ 2 thành viên + `start sound` nhạc cụ phù hợp + `wait` → `switch backdrop to` sân khấu tiếp theo. 4. Lưu project. |
| **Thử thêm** | Thêm nhạc nền nhẹ ở Stage chạy suốt mini phim, thêm 1 hiệu ứng ánh sáng đơn giản bằng `change color effect by` mỗi khi nhạc cụ vang lên, và thêm tiếng "khán giả vỗ tay" cuối mỗi màn trình diễn |

---

### 🖼️ Showcase (10 phút)

"Gallery walk" — em để project đang chạy trên máy, cả lớp đứng dậy đi vòng quanh nghe/xem project của 3–4 bạn gần nhất trong 1–2 phút, rồi quay về chỗ. Giáo viên mời 2–3 em xung phong trình chiếu project của mình trước lớp (ưu tiên các bài mức C có nhiều cảnh/âm thanh).

### ✅ Tổng kết (5 phút)

Nhắc lại: hôm nay em đã luyện thêm âm thanh (Sound) và hội thoại nhiều sprite qua Luyện tập 1, 2 và bài mở rộng. Buổi sau (**Buổi 11 — Cảm biến & thuật toán**) em sẽ học cách cho Scratch "cảm nhận" môi trường xung quanh bằng nhóm khối Sensing.

---

# Tuần 6 — Cảm biến & thuật toán 🧠

---

## Buổi 11 — Học (H): Cảm biến & thuật toán

### Hôm nay em học gì?

Hôm nay em học nhóm khối **Sensing** (Cảm biến) — giúp Scratch **"cảm nhận"** môi trường: chạm biên màn hình, hỏi em câu hỏi và nhận câu trả lời. Em cũng làm quen với **thuật toán**: các bước có thứ tự để máy tính hiểu và làm đúng! 🔍💬

---

### 🎬 Khởi động (10 phút)

**Trò chơi "Bịt mắt cảm nhận"**

- Mời 2–3 em xung phong nhắm mắt (hoặc quay lưng lại) và đi vài bước về phía trước cho đến khi "cảm nhận" chạm vào một vật mốc (bàn, tường) do giáo viên đặt sẵn — dừng lại ngay khi chạm.
- Hỏi cả lớp: "Làm sao bạn biết phải dừng lại?" → dẫn vào ý tưởng: con người dùng giác quan để "cảm nhận" môi trường, Scratch cũng có cách để "cảm nhận" giống vậy — gọi là nhóm khối **Sensing**.
- Hỏi thêm: "Nếu cô hỏi cả lớp một câu và đợi câu trả lời rồi mới làm bước tiếp theo, đó có phải một thuật toán không?" → dẫn vào khái niệm **thuật toán** hôm nay.

---

### Kiến thức mới (20 phút)

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

**Vì sao quan trọng?** Nếu không có Sensing, sprite của em "mù" và "điếc" — không biết chạm biên, không biết em vừa gõ gì. Sensing giúp Scratch phản hồi lại người chơi và môi trường xung quanh, đây là điều bắt buộc phải có trong mọi game thật sự (game cần biết khi nào nhân vật va chạm, khi nào người chơi trả lời). Học thuật toán song song giúp em sắp xếp các bước "cảm nhận → xử lý → phản hồi" theo đúng thứ tự, tránh code bị rối.

---

### Ví dụ mẫu 1 — Hỏi tên và chào

1. Kéo `when green flag clicked`.
2. Gắn `ask` `Tên em là gì?` `and wait`.
3. Gắn `say` (join `Xin chào, ` `answer`) `for` `3` `secs`.
4. Bấm cờ xanh → gõ tên → sprite chào em! 👋

### Ví dụ mẫu 2 — Chạm biên thì nảy lại

1. `when green flag clicked`
2. `forever`:
   - `move` `(10)` `steps`
   - `if` `touching` `edge` `?` `then` → `bounce`
3. Bấm cờ xanh — sprite chạy tới biên màn hình, "cảm nhận" chạm biên rồi tự nảy lại, không cần em ra lệnh lại từ đầu.

*(Ví dụ 1 hỏi rồi đợi người **trả lời**; ví dụ 2 tự "cảm nhận" **môi trường** liên tục trong `forever` — cả hai đều thuộc nhóm Sensing nhưng theo hai cách khác nhau!)*

### Em đoán xem?

Nếu em bỏ khối `if touching edge` ra khỏi vòng `forever` ở Ví dụ mẫu 2, em đoán sprite sẽ làm gì khi chạy tới biên màn hình — dừng lại, nảy lại, hay đi thẳng ra ngoài Stage? Đoán trước, rồi thử trên Scratch để kiểm tra!

---

### Thực hành 1 (TH1) — (15 phút) "Bóng nảy sân chơi 🏀"

#### Mô tả

Em biến sprite thành một **quả bóng sống động** trong sân chơi của mình — di chuyển liên tục, và mỗi lần chạm biên thì vừa **nảy lại** vừa phát ra **tiếng "bốp"** và **đổi màu**, giống bóng thật nảy trên sân!

#### Yêu cầu

- Sprite di chuyển liên tục (dùng `forever`).
- Khi `touching` `edge` `?` thì `bounce` (nảy lại).
- Dùng khối `if` ... `then` bên trong `forever`.
- Mỗi lần nảy, phát thêm **1 âm thanh** (dùng lại kỹ năng Sound đã học tuần 5!).

#### Gợi ý từng bước

1. Chọn sprite (ví dụ Ball hoặc Basketball) và thêm 1 âm thanh "bốp" (ví dụ `Bounce` hoặc `Pop`) trong tab Sounds.
2. Kéo khối:
   ```
   when green flag clicked
   point in direction (pick random 1 to 360)
   forever
     move (10) steps
     if <touching [edge] ?> then
       bounce
       start sound [Bounce]
       change color effect by (25)
   ```
3. Bấm cờ xanh — sprite chạy, nảy khi chạm biên, và "bốp" một tiếng kèm đổi màu!
4. Thử đổi số bước `move` (5, 15, 20) — em thấy tốc độ thay đổi.
5. Lưu project tên `TH1-bong-nay-san-choi`.

#### Checklist tự kiểm

- [ ] Sprite di chuyển liên tục (`forever` + `move`)
- [ ] Có khối `if` `touching` `edge` `?`
- [ ] Chạm biên thì `bounce`
- [ ] Mỗi lần nảy có phát âm thanh
- [ ] Sprite không "kẹt" ở góc màn hình
- [ ] Em đã lưu project

---

### 🤸 Giải lao vận động (5 phút)

**Trò chơi "Chạm biên phản xạ nhanh"**

- Kẻ (hoặc tưởng tượng) 4 "biên" quanh lớp học: tường trước, tường sau, 2 bên hông. Cả lớp đứng giữa lớp.
- Giáo viên hô tên một "biên" bất kỳ (ví dụ "Biên trái!"), học sinh chạy nhanh chạm tay vào tường/vật mốc tương ứng rồi quay lại giữa lớp ngay — giống sprite "cảm nhận" chạm biên rồi bật lại (`bounce`).
- Ai chạm sai biên hoặc chậm nhất thì tạm nghỉ 1 lượt. Chơi 3–4 vòng, tăng tốc độ hô để vui hơn.

---

### Thực hành 2 (TH2) — (15 phút) "Mèo tiên tri 🔮"

#### Mô tả

Sprite của em hóa thân thành **"thầy bói" vui tính** — hỏi người chơi **1 câu hỏi bí ẩn** (ví dụ: "Em nghĩ ngày mai trời có nắng không?"), rồi **"phán"** lại một câu hài hước có nhắc đúng câu trả lời của em, kèm đổi trang phục và âm thanh huyền bí khi "phán"!

#### Yêu cầu

- Có khối `ask` ... `and wait`.
- Sprite `say` lại câu trả lời (dùng `answer` hoặc `join`).
- Đổi costume hoặc phát 1 âm thanh ngay trước lúc "phán" để tăng phần kịch tính.
- Bắt đầu khi bấm cờ xanh.

#### Gợi ý từng bước

1. Chọn sprite Cat (hoặc sprite "thầy bói" em thích) và thêm 1 âm thanh huyền bí (ví dụ `Magic Spell`).
2. Code:
   ```
   when green flag clicked
   ask [Em nghĩ ngày mai trời có nắng không?] and wait
   start sound [Magic Spell]
   switch costume to [costume-2]
   say (join [Ta phán rằng... ] (answer) [... sẽ đúng!]) for (3) secs
   ```
3. Bấm cờ xanh → gõ "Có" → mèo phát tiếng huyền bí, đổi trang phục rồi "phán": "Ta phán rằng... Có... sẽ đúng!"
4. Thử nghĩ ra 1 câu hỏi bí ẩn của riêng em (đố vui, ước mơ, con vật yêu thích...).
5. Lưu project tên `TH2-meo-tien-tri`.

#### Checklist tự kiểm

- [ ] Có khối `ask` khi bấm cờ xanh
- [ ] Ô hỏi hiện ra và em gõ được
- [ ] Sprite `say` có dùng `answer`
- [ ] Có đổi costume hoặc phát âm thanh trước khi "phán"
- [ ] Thử ít nhất 2 câu trả lời khác nhau
- [ ] Em đã lưu project

---

### 🤝 Thử thách nhóm/sáng tạo (10–15 phút)

**"Đố vui bằng câu hỏi của bạn"**

- Ghép cặp 2 bạn. Bạn A chạy project TH2 của mình cho bạn B xem (không nói trước câu hỏi là gì).
- Bạn B đoán trước khi trả lời: "Bạn hỏi mình cái gì nhỉ?" rồi mới gõ câu trả lời thật vào ô `ask`.
- Đổi vai, thử với project của bạn B.
- Khuyến khích: nếu còn thời gian, mỗi cặp nghĩ thêm 1 câu hỏi "khó" hơn (ví dụ đố vui, câu hỏi toán) để thêm vào project và đố cặp bên cạnh trả lời thử.
- Giáo viên mời 1–2 cặp chia sẻ câu hỏi sáng tạo nhất trước lớp.

---

### Mẹo nhỏ 💡

- Khối `answer` chỉ có ý nghĩa **ngay sau** khối `ask` — đừng đặt quá xa!
- Muốn hỏi câu thứ hai? Dùng thêm một khối `ask` nữa (sau khi xử lý câu 1).
- `touching` `edge` `?` nằm trong nhóm **Sensing** — hình lục giác màu xanh nhạt.
- Viết thuật toán ra giấy trước khi kéo khối — em sẽ code nhanh hơn!

---

### 🎉 Tổng kết & Ôn tập trò chơi (10 phút)

**"Đố vui nhanh" — cả lớp giơ tay trả lời, chia 2 đội thi đua:**

1. Khối `ask` và `answer` dùng để làm gì?
2. `touching` `edge` `?` trả về gì khi sprite chạm biên?
3. Thuật toán là gì? Cho ví dụ ngoài đời sống.
4. Khối `if` ... `then` dùng khi nào?
5. Em cần đặt `bounce` bên trong hay bên ngoài khối `if`?

Mỗi câu, đội nào giơ tay trước được trả lời — đúng ghi 1 điểm cho đội, tổng kết đội thắng cuối giờ.

- Mời 1–2 em xung phong trình chiếu project TH2 "hỏi 1 câu" của mình, cho cả lớp nghe câu trả lời vui nhất.
- Hẹn gặp lại ở buổi Bài tập tuần này để làm Luyện tập 1, 2 và bài mở rộng!

---

### 👩‍🏫 Ghi chú cho giáo viên

**Kịch bản demo nhanh:**
- Trước Kiến thức mới, demo trực tiếp khối `ask` + `answer` với 1 câu hỏi vui ("Con vật em thích nhất là gì?") để cả lớp thấy ô hỏi hiện ra và sprite trả lời lại đúng như em vừa gõ.
- Demo Ví dụ mẫu 2 (chạm biên) 2 lần: lần 1 không có `if touching edge` để sprite chạy thẳng ra ngoài Stage, lần 2 có đủ khối để nảy lại — giúp học sinh thấy rõ vai trò của Sensing.

**Lỗi thường gặp (ngoài phần Mẹo nhỏ):**
- Học sinh đặt khối `answer` ở một script khác, cách xa khối `ask` — nhắc `answer` chỉ có nghĩa ngay sau `ask` gần nhất.
- Quên gắn khối `if` `touching edge` vào bên trong `forever` (để ở ngoài) khiến chương trình chỉ kiểm tra một lần rồi thôi.
- Học sinh nhầm `touching edge` với `touching mouse-pointer` trong dropdown Sensing — chỉ vào đúng ô cần chọn.

**Quản lý lớp học:**
- Khởi động "Bịt mắt cảm nhận": chỉ chọn học sinh tự tin, đặt vật mốc an toàn (không góc nhọn/vật dễ đổ), luôn đứng gần để hỗ trợ.
- Giải lao "Chạm biên phản xạ nhanh" dễ va chạm khi cả lớp cùng chạy — nhắc đi nhanh chứ không chạy, để khoảng cách giữa các em.
- Thử thách nhóm: đi vòng nhắc các cặp đổi vai đúng lúc, hỗ trợ cặp nào chưa nghĩ ra câu hỏi sáng tạo.

---

## Buổi 12 — Bài tập (BT): Luyện Sensing 🔍

### 🎬 Khởi động ôn tập (10 phút)

**"Đúng hay Sai?"** — Giáo viên đọc từng câu, học sinh giơ ngón cái lên (Đúng) hoặc xuống (Sai):

1. "`ask` hiện ô hỏi và đợi em gõ trả lời." (Đúng)
2. "`answer` dùng được ở bất kỳ đâu, không cần gần khối `ask`." (Sai — nên đặt ngay sau `ask` liên quan)
3. "`touching edge ?` kiểm tra sprite có chạm sprite khác không." (Sai — kiểm tra chạm biên màn hình)
4. "Thuật toán là các bước có thứ tự để giải một việc." (Đúng)
5. "`if ... then` chỉ chạy khối bên trong khi điều kiện đúng." (Đúng)

### Ôn nhanh

- **Sensing:** `touching`, `ask`, `answer`, `key pressed?`
- **if ... then:** chạy code khi điều kiện đúng
- **Thuật toán:** các bước có thứ tự — hỏi → nhận → phản hồi

---

### ✍️ Luyện tập 1, 2 (LT1/LT2) (15–20 phút)

Hai bài dưới đây em làm **ngay tại lớp, có giáo viên hướng dẫn** — không phải chữa bài tập về nhà, mà là luyện lại kỹ năng Sensing của buổi Học tuần trước ngay tại chỗ.

*Gợi ý:* Đổi máy với bạn bên cạnh 2 phút sau khi làm xong để cùng kiểm tra checklist của nhau.

#### Luyện tập 1 (LT1) — "Hỏi tuổi 🎂"

**Mô tả:** Em hỏi "Em bao nhiêu tuổi?" và sprite chúc mừng sinh nhật hoặc nói lời chào có nhắc tuổi.

**Yêu cầu:**
- `ask` câu hỏi về tuổi.
- Sprite `say` có chứa `answer` (tuổi em gõ).
- Thêm ít nhất 1 câu chúc hoặc nhận xét.

**Gợi ý từng bước:**
1. `when green flag clicked`
2. `ask` `Em bao nhiêu tuổi?` `and wait`
3. `say` (join `Wow! Em ` `answer` ` tuổi rồi! Chúc em học giỏi!`) `for` `4` `secs`
4. Lưu project tên `LT1-hoi-tuoi`.

**Checklist tự kiểm:**
- [ ] Có hỏi về tuổi
- [ ] Có dùng `answer` trong `say`
- [ ] Có câu chúc hoặc nhận xét
- [ ] Em đã lưu project

| Em kiểm tra | Đúng khi... |
|-------------|-------------|
| Có `ask` | Ô hỏi hiện "bao nhiêu tuổi" (hoặc tương tự) |
| Có `answer` | Sprite nói lại số tuổi em gõ |
| Có lời chúc | Có thêm câu chúc/nhận xét sau khi biết tuổi |

#### Luyện tập 2 (LT2) — "Quiz 2 câu 📋"

**Mô tả:** Em làm **bài quiz nhỏ 2 câu hỏi**: hỏi câu 1 → đợi trả lời → hỏi câu 2 → cảm ơn.

**Yêu cầu:**
- Có **2 khối** `ask` (2 câu hỏi khác nhau).
- Sau mỗi câu, sprite `say` phản hồi ngắn (có thể dùng `answer`).
- Cuối cùng sprite `say` lời cảm ơn.

**Gợi ý từng bước:**
1. Câu 1: `ask` `Thủ đô Việt Nam là gì?` → `say` (join `Em trả lời: ` `answer`) `for` `2` `secs`
2. `wait` `2` `secs`
3. Câu 2: `ask` `1 + 1 = ?` → `say` (join `Đáp án của em: ` `answer`) `for` `2` `secs`
4. `say` `Cảm ơn em đã tham gia quiz!` `for` `2` `secs`
5. Lưu project tên `LT2-quiz-2-cau`.

**Checklist tự kiểm:**
- [ ] Có đúng 2 câu hỏi `ask`
- [ ] Có phản hồi sau mỗi câu
- [ ] Có lời cảm ơn cuối
- [ ] Thứ tự: hỏi 1 → trả lời 1 → hỏi 2 → trả lời 2
- [ ] Em đã lưu project

| Em kiểm tra | Đúng khi... |
|-------------|-------------|
| 2 câu hỏi | Đếm được 2 khối `ask` |
| Thứ tự đúng | Câu 2 chỉ hiện sau khi trả lời câu 1 |
| Có phản hồi | Mỗi câu có `say` sau `ask` |
| Kết thúc | Có lời cảm ơn cuối |

---

### 🎯 Giới thiệu bài mở rộng (10 phút)

Giáo viên demo nhanh **1 ví dụ mẫu** (ví dụ bài A1 "Cú mèo thông thái") trên máy chiếu — chỉ rõ cách dùng `if` ... `then` ... `else` để so sánh `answer` — trước khi học sinh tự chọn mức bài cho mình.

Em chọn **1 mức** A, B hoặc C, rồi chọn **1 trong 2 bài** của mức đó.

| Mức | Khi nào chọn |
|-----|--------------|
| **A1 hoặc A2** | Em luyện quiz 1 câu / chạm màu — 🦉 Cú mèo thông thái / 🌋 Sàn dung nham |
| **B1 hoặc B2** | Em luyện `ask` + `answer` — 🎙️ Gameshow 3 vòng / 🔮 Máy đoán tuổi |
| **C1 hoặc C2** | Quiz dài hơn, có đếm điểm — 🏆 Đấu trường tri thức / 🚀 Vượt 5 cửa ải |

---

### ✍️ Làm bài mở rộng (30–35 phút)

### Bài A1 — Cú mèo thông thái 🦉 (quiz 1 câu)

| | Nội dung |
|---|----------|
| **Mô tả** | Cú mèo thông thái muốn thử tài em! Em làm quiz 1 câu hỏi có **đáp án đúng**. Nếu trả lời đúng → cú mèo khen; sai → cú mèo gợi ý thử lại, giống một thầy giáo kiên nhẫn. |
| **Yêu cầu bắt buộc** | 1 câu `ask`; dùng `if` ... `then` so sánh `answer`; có `say` khi đúng và khi sai |
| **Gợi ý bước** | 1. `ask` `2 + 3 = ?` 2. `if` `answer` `=` `5` `then` → `say` `Đúng rồi!` 3. Thêm `else` → `say` `Chưa đúng, thử lại nhé!` 4. Lưu project. |
| **Checklist** | - [ ] Có 1 câu hỏi<br>- [ ] Có kiểm tra đúng/sai<br>- [ ] Có phản hồi khi đúng và sai<br>- [ ] Em đã lưu project |
| **Thử thêm** | Đổi câu hỏi sang kiến thức em thích (động vật, thể thao...), và cho phép trả lời sai được hỏi lại đúng câu đó thêm 1 lần nữa trước khi sprite tiết lộ đáp án |

---

### Bài B1 — Gameshow 3 vòng 🎙️ (quiz 3 câu)

| | Nội dung |
|---|----------|
| **Mô tả** | Em dẫn một gameshow truyền hình nhỏ — người chơi phải vượt qua **3 vòng thi** liên tiếp, mỗi vòng một câu hỏi, để đến vòng cuối nhận lời chúc mừng. |
| **Yêu cầu bắt buộc** | 3 khối `ask`; phản hồi sau mỗi câu; `wait` giữa các câu; lời kết cuối |
| **Gợi ý bước** | 1. Viết 3 câu hỏi. 2. Code: ask 1 → say → wait → ask 2 → say → wait → ask 3 → say → tổng kết. 3. Chạy thử toàn bộ. 4. Lưu project. |
| **Checklist** | - [ ] 3 câu hỏi<br>- [ ] Phản hồi mỗi câu<br>- [ ] Có lời kết<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm `switch costume to` khi trả lời đúng (mặt vui), và thêm âm thanh "tèn ten" ở vòng cuối cùng như MC công bố người chơi hoàn thành gameshow |

---

### Bài C1 — Đấu trường tri thức 🏆 (trắc nghiệm điểm)

| | Nội dung |
|---|----------|
| **Mô tả** | Đấu trường tri thức mở cửa! Em làm quiz 3 câu và **đếm điểm**: mỗi câu đúng +1, cuối cùng báo tổng điểm để xem người chơi có lọt vào "top xuất sắc" không. (Dùng biến — em sẽ học kỹ ở tuần 8, hôm nay làm thử!) |
| **Yêu cầu bắt buộc** | 3 câu có đáp án; biến `điểm` (hoặc `score`); `set` `điểm` `to` `0` lúc đầu; `change` `điểm` `by` `1` khi đúng; `say` tổng điểm cuối |
| **Gợi ý bước** | 1. Variables → Make a Variable → `điểm`. 2. Cờ xanh: `set` `điểm` `to` `0`. 3. Mỗi câu: `ask` → `if` đúng → `change` `điểm` `by` `1`. 4. Cuối: `say` (join `Điểm của em: ` `điểm`). 5. Lưu project. |
| **Checklist** | - [ ] Có biến điểm<br>- [ ] 3 câu hỏi<br>- [ ] Đúng thì tăng điểm<br>- [ ] Cuối có báo điểm<br>- [ ] Em đã lưu project |
| **Thử thêm** | Nếu điểm = 3 thì `say` `Xuất sắc!`; nếu điểm = 0 thì `say` `Cố lên lần sau nhé!` — để đấu trường có 3 mức lời khen khác nhau |

---

### Bài A2 — Sàn dung nham 🌋 (chạm màu / sprite)

| | Nội dung |
|---|----------|
| **Mô tả** | Sàn nhà bỗng hóa thành dung nham nóng bỏng! Em cho sprite **phản ứng khi chạm** vùng màu nguy hiểm hoặc chạm sprite khác — dùng `touching` và `if` ... `then` để "cảm nhận" mối nguy kịp thời. |
| **Yêu cầu bắt buộc** | Có `if` `touching` (màu hoặc sprite); phản ứng rõ ràng (`say`, đổi costume, hoặc `start sound`); sprite di chuyển bằng phím hoặc `forever` + `move` |
| **Gợi ý bước** | 1. Thêm backdrop có vùng màu rõ (hoặc thêm sprite thứ 2). 2. Code: `forever` → `if` `key` phím → di chuyển. 3. Trong `forever`: `if` `touching` `[màu]` hoặc `[sprite]` → `say` `Chạm rồi!` + `start sound`. 4. Chạy thử. 5. Lưu project. |
| **Checklist** | - [ ] Có `if touching`<br>- [ ] Chạm thì có phản ứng<br>- [ ] Sprite di chuyển được<br>- [ ] Em đã lưu project |
| **Thử thêm** | Đổi màu sprite (`change color effect by`) khi chạm, và thêm biến đếm số lần chạm dung nham để biết mình "cháy" bao nhiêu lần |

---

### Bài B2 — Máy đoán tuổi 🔮 (máy tính tuổi)

| | Nội dung |
|---|----------|
| **Mô tả** | Em xây một "cỗ máy tiên tri" nho nhỏ — hỏi **năm sinh** của người chơi, rồi tự tính ra tuổi và chúc mừng, giống thầy bói nhưng bằng phép trừ đơn giản (tuổi ≈ 2026 − năm sinh). |
| **Yêu cầu bắt buộc** | `ask` năm sinh; dùng `answer`; `say` kết quả tuổi (có thể dùng `join` hoặc phép trừ đơn giản); có lời chúc |
| **Gợi ý bước** | 1. `when green flag clicked` → `ask` `Em sinh năm nào?` `and wait`. 2. `say` (join `Vậy em khoảng ` (2026 - answer) ` tuổi nhé!`) `for` `3` `secs`. 3. Thêm `say` lời chúc. 4. Thử với 2 năm sinh khác nhau. 5. Lưu project. |
| **Checklist** | - [ ] Có `ask` năm sinh<br>- [ ] Có tính/báo tuổi<br>- [ ] Có lời chúc<br>- [ ] Em đã lưu project |
| **Thử thêm** | Nếu tuổi < 8 thì `say` `Em còn nhỏ quá!`; nếu ≥ 8 thì `say` `Tuổi học Scratch rồi!` — và thêm hỏi thêm "con giáp" dựa trên năm sinh (nếu em biết) |

---

### Bài C2 — Vượt 5 cửa ải 🚀 (quiz 5 câu)

| | Nội dung |
|---|----------|
| **Mô tả** | Một hành trình dài với **5 cửa ải** tri thức — mỗi cửa ải là 1 câu hỏi, người chơi phải trả lời hết 5 câu mới đến được đích cuối cùng. |
| **Yêu cầu bắt buộc** | 5 khối `ask`; phản hồi sau mỗi câu; `wait` giữa các câu; lời kết cuối; bắt đầu bằng cờ xanh |
| **Gợi ý bước** | 1. Viết 5 câu hỏi (toán, kiến thức, sở thích...). 2. Code: ask 1 → say → wait → ask 2 → ... → ask 5 → tổng kết. 3. Chạy thử toàn bộ 5 câu. 4. Chỉnh `wait` nếu chồng. 5. Lưu project. |
| **Checklist** | - [ ] 5 câu hỏi `ask`<br>- [ ] Phản hồi mỗi câu<br>- [ ] Có lời kết<br>- [ ] Thứ tự đúng<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm biến đếm điểm — mỗi câu đúng +1, cuối báo tổng, và nếu vượt cả 5 cửa ải đúng hết thì `say` danh hiệu đặc biệt "Nhà vô địch tri thức!" |

---

### 🖼️ Showcase (10 phút)

"Gallery walk" — em để project đang chạy trên máy, cả lớp đứng dậy đi vòng quanh thử quiz của 3–4 bạn gần nhất trong 1–2 phút, rồi quay về chỗ. Giáo viên mời 2–3 em xung phong trình chiếu project của mình trước lớp (ưu tiên các bài mức C có đếm điểm).

### ✅ Tổng kết (5 phút)

Nhắc lại: hôm nay em đã luyện thêm Sensing (`ask`, `answer`, `touching`) và `if ... then` qua Luyện tập 1, 2 và bài mở rộng. Buổi sau (**Buổi 13 — Vòng lặp**) em sẽ học cách lặp lại lệnh nhiều lần bằng `repeat` và `forever`, và thử vẽ hình bằng Pen.

---

# Tuần 7 — Vòng lặp 🔁

---

## Buổi 13 — Học (H): Vòng lặp

### Hôm nay em học gì?

Hôm nay em học **vòng lặp** — cách bảo máy tính **lặp lại** một việc nhiều lần mà không cần copy khối lệnh! Em sẽ dùng `repeat` (lặp số lần cố định) và `forever` (lặp mãi mãi). Em cũng thử **Pen** (bút vẽ) để vẽ hình! ✏️🔁

---

### 🎬 Khởi động (10 phút)

**Trò chơi "Lặp lại theo cô"**

- Giáo viên làm một động tác ngắn (ví dụ: vỗ tay – giơ tay – ngồi xuống) và nói: "Làm động tác này đúng **5 lần**!" Cả lớp đứng dậy làm theo, tự đếm số lần.
- Hỏi cả lớp: "Nếu cô muốn các em làm động tác này mãi mãi cho đến khi cô hô 'Dừng!' thì khác gì so với làm đúng 5 lần?" → dẫn vào 2 khái niệm hôm nay: `repeat` (lặp đúng số lần) và `forever` (lặp mãi cho đến khi dừng).
- Hỏi thêm: "Ở buổi trước, nếu muốn sprite chạm biên nảy lại nhiều lần, mình có phải copy khối `move` + `if` nhiều lần không? Có cách nào gọn hơn không?" → dẫn vào lý do cần vòng lặp.

---

### Kiến thức mới (20 phút)

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

**Vì sao quan trọng?** Vòng lặp là một trong những ý tưởng quan trọng nhất của lập trình — gần như mọi game đều cần chạy liên tục (nhân vật luôn có thể di chuyển, quái vật luôn di chuyển...) và điều đó chỉ có thể làm được nhờ `forever`. `repeat` giúp code của em ngắn gọn hơn rất nhiều lần so với việc copy đi copy lại cùng một khối — dễ đọc, dễ sửa, và là kỹ năng lập trình viên chuyên nghiệp nào cũng dùng hằng ngày.

---

### Ví dụ mẫu 1 — Nhảy 5 lần

1. `when green flag clicked`
2. `repeat` `5`
   - `change y by` `20` (nhảy lên)
   - `wait` `0.2` `secs`
   - `change y by` `-20` (rơi xuống)
   - `wait` `0.2` `secs`
3. Bấm cờ xanh — sprite nhảy 5 lần! 🦘

### Ví dụ mẫu 2 — Vẽ hình vuông bằng Pen

1. `when green flag clicked`
2. `clear` → `pen down`
3. `repeat` `4`
   - `move` `(80)` `steps`
   - `turn` `(90)` `degrees`
4. `pen up`
5. Bấm cờ xanh — thấy ngay hình vuông xuất hiện trên Stage!

*(Ví dụ 1 lặp một **hành động theo thời gian** (nhảy lên xuống); ví dụ 2 lặp một **hình dạng theo không gian** (4 cạnh bằng nhau) — cùng là `repeat` nhưng dùng cho hai mục đích khác nhau!)*

### Em đoán xem?

Nếu em đổi số trong `repeat` ở Ví dụ mẫu 2 từ `4` thành `3` (giữ nguyên `turn 90 degrees`), em đoán hình vẽ ra sẽ còn là hình vuông không, hay sẽ bị "hở" một cạnh? Đoán trước, rồi thử trên Scratch để kiểm tra!

---

### Thực hành 1 (TH1) — (15 phút) "Repeat 5 lần 🔢"

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

### 🤸 Giải lao vận động (5 phút)

**Trò chơi "Lặp động tác tiếp sức"**

- Chia lớp thành 2–3 nhóm đứng thành hàng. Giáo viên chọn 1 động tác ngắn (ví dụ: nhảy tại chỗ + vỗ tay).
- Từng bạn trong hàng phải lặp lại đúng động tác đó **đúng 5 lần** rồi mới được "chuyền lượt" cho bạn tiếp theo trong nhóm (giống chuỗi `repeat (5)` chạy nối tiếp nhau).
- Nhóm nào lặp đúng số lần và xong lượt trước thì thắng. Chơi 2 vòng, đổi động tác khác cho vòng 2.

---

### Thực hành 2 (TH2) — (15 phút) "Forever nảy tường (bounce) 🏀"

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

### 🤝 Thử thách nhóm/sáng tạo (10–15 phút)

**"Đoán số lần lặp"**

- Ghép cặp 2 bạn. Bạn A cho bạn B xem project TH1 của mình chạy (sprite nhảy) mà không cho xem số trong khối `repeat`.
- Bạn B đếm và đoán: "Sprite nhảy đúng mấy lần vậy?"
- Đổi vai, thử với project TH2 của bạn A: "Sprite của bạn nảy tường mãi hay dừng sau một lúc?"
- Khuyến khích: nếu còn thời gian, mỗi cặp thử đổi số trong `repeat` (ví dụ từ 5 thành 8) và đố bạn bên cạnh đoán lại số mới.
- Giáo viên mời 1–2 cặp chia sẻ trước lớp.

---

### Mẹo nhỏ 💡

- `repeat` = biết **bao nhiêu lần**; `forever` = **không biết** hoặc muốn chạy mãi (game, hoạt hình).
- Trước khi vẽ bằng Pen: nhớ `clear` và `pen down`.
- Góc quay tam giác: `turn` `(120)` độ (vì 360 ÷ 3 = 120).
- Góc quay vuông: `turn` `(90)` độ.

---

### 🎉 Tổng kết & Ôn tập trò chơi (10 phút)

**"Trạm tiếp sức trả lời"** — chia lớp 2 đội, mỗi đội cử đại diện trả lời nhanh 1 câu rồi đổi người:

1. `repeat` và `forever` khác nhau thế nào?
2. Khi nào em dùng `repeat` thay vì copy nhiều khối giống nhau?
3. Khối `pen down` làm gì?
4. Muốn vẽ tam giác cần `repeat` bao nhiêu lần? Mỗi lần `turn` bao nhiêu độ?
5. `bounce` thường dùng cùng khối sensing nào?

Đội trả lời đúng nhanh nhất mỗi câu được 1 điểm — tổng kết đội thắng cuối giờ.

- Mời 1–2 em xung phong trình chiếu project TH2 "forever nảy tường" của mình.
- Hẹn gặp lại ở buổi Bài tập tuần này để làm Luyện tập 1, 2 và bài mở rộng!

---

### 👩‍🏫 Ghi chú cho giáo viên

**Kịch bản demo nhanh:**
- Trước Kiến thức mới, kéo sẵn 10 khối `move 10 steps` liền nhau trên màn hình chiếu, rồi xóa hết và thay bằng 1 khối `repeat (10)` — cho cả lớp thấy rõ sự khác biệt về độ gọn gàng.
- Demo Ví dụ mẫu 2 (vẽ hình vuông) trực tiếp, dừng lại sau mỗi lần lặp để đếm to "1 cạnh, 2 cạnh, 3 cạnh, 4 cạnh — khép kín!"

**Lỗi thường gặp (ngoài phần Mẹo nhỏ):**
- Học sinh để khối `move`/`turn` bên ngoài `repeat` (chỉ kéo mỗi khối `repeat` rỗng) — nhắc kiểm tra khối có "nằm lọt" bên trong `repeat` hay không bằng cách nhìn viền khối.
- Nhầm `forever` với `repeat` một số lớn (ví dụ gõ `repeat (9999)`) — giải thích `forever` mới đúng ý "chạy mãi", không cần đoán số.
- Quên `pen up` cuối bài Pen khiến các nét vẽ tiếp theo bị dính vào hình cũ — nhắc luôn kết thúc bằng `pen up`.

**Quản lý lớp học:**
- Khởi động "Lặp lại theo cô": giữ động tác đơn giản, dễ lặp, tránh động tác có thể va chạm bạn bên cạnh.
- Giải lao "Lặp động tác tiếp sức" cần đủ khoảng trống giữa các nhóm — sắp xếp hàng cách nhau ít nhất 1 cánh tay.
- Thử thách nhóm: đi vòng nhắc học sinh đếm to khi đoán số lần lặp, giúp cả lớp cùng tham gia thay vì chỉ 2 bạn trong cặp.

---

## Buổi 14 — Bài tập (BT): Luyện Loop 🔁

### 🎬 Khởi động ôn tập (10 phút)

**"Nhanh tay nhanh mắt"** — giáo viên đọc 1 câu hỏi, học sinh giơ tay trả lời nhanh:

- "Muốn lặp đúng 10 lần, em dùng `repeat` hay `forever`?" (repeat)
- "Muốn sprite chạy mãi không dừng, em dùng khối nào?" (forever)
- "Trước khi vẽ bằng Pen, khối nào giúp hạ bút xuống?" (pen down)
- "Vẽ tam giác cần quay bao nhiêu độ mỗi lần?" (120 độ)

### Ôn nhanh

- `repeat` (n) — lặp n lần rồi dừng
- `forever` — lặp mãi (game, hoạt hình liên tục)
- **Pen:** `clear`, `pen down`, `pen up`, `set pen color to`

---

### ✍️ Luyện tập 1, 2 (LT1/LT2) (15–20 phút)

Hai bài dưới đây em làm **ngay tại lớp, có giáo viên hướng dẫn** — không phải chữa bài tập về nhà, mà là luyện lại kỹ năng vòng lặp của buổi Học tuần trước ngay tại chỗ.

*Gợi ý:* Đổi máy với bạn bên cạnh 2 phút sau khi làm xong để cùng kiểm tra checklist của nhau.

#### Luyện tập 1 (LT1) — "Repeat 10 lần 🔟"

**Mô tả:** Em dùng `repeat` `(10)` để sprite **đi thẳng** 10 lần (mỗi lần `move` một đoạn) hoặc **đổi costume** 10 lần.

**Yêu cầu:**
- `repeat` `(10)`.
- Mỗi lần lặp sprite thay đổi rõ ràng (di chuyển hoặc đổi hình).
- Có `wait` ngắn giữa các lần (tùy chọn nhưng nên có).

**Gợi ý từng bước:**
1. `when green flag clicked` → `go to x: (-200) y: (0)`
2. `repeat` `(10)` → `move` `(20)` `steps` → `wait` `(0.2)` `secs`
3. Hoặc: `repeat` `(10)` → `next costume` → `wait` `(0.3)` `secs`
4. Lưu project tên `LT1-repeat-10`.

**Checklist tự kiểm:**
- [ ] `repeat` đúng 10
- [ ] Có thay đổi mỗi lần lặp
- [ ] Em đã đếm thử đủ 10 lần
- [ ] Em đã lưu project

| Em kiểm tra | Đúng khi... |
|-------------|-------------|
| Đúng 10 lần | `repeat` hiển thị (10) |
| Có hiệu ứng | Mỗi lần lặp thấy sprite đổi (vị trí/costume) |
| Dừng đúng | Sau 10 lần không lặp thêm (trừ khi bấm cờ xanh lại) |

#### Luyện tập 2 (LT2) — "Vẽ tam giác bằng Pen 🔺"

**Mô tả:** Em thêm extension **Pen** và dùng `repeat` `(3)` để vẽ **hình tam giác**.

**Yêu cầu:**
- Đã thêm extension Pen.
- `clear` trước khi vẽ; `pen down` khi bắt đầu vẽ.
- `repeat` `(3)`: `move` + `turn` `120` độ.
- Tam giác nhìn thấy rõ trên Stage.

**Gợi ý từng bước:**
1. Add Extension → **Pen**.
2. `when green flag clicked` → `clear` → `pen down` → `go to x: (0) y: (0)`.
3. `set pen color to` màu em thích.
4. `repeat` `(3)` → `move` `(100)` `steps` → `turn` `(120)` `degrees`
5. `pen up` khi xong.
6. Lưu project tên `LT2-ve-tam-giac`.

**Checklist tự kiểm:**
- [ ] Có extension Pen
- [ ] Có `clear` và `pen down`
- [ ] `repeat` `(3)` với `move` và `turn` 120
- [ ] Thấy tam giác trên Stage
- [ ] Em đã lưu project

| Em kiểm tra | Đúng khi... |
|-------------|-------------|
| Có Pen | Thấy khối Pen trong code |
| Có tam giác | Stage có hình 3 cạnh |
| Góc đúng | `turn` 120 độ, lặp 3 lần |
| Không lem | Có `clear` lúc đầu |

**Nếu hình sai:** Kiểm tra `move` đủ dài (80–120); kiểm tra `turn` đúng 120.

---

### 🎯 Giới thiệu bài mở rộng (10 phút)

Giáo viên demo nhanh **1 ví dụ mẫu** (ví dụ bài A1 "Nhảy 10 lần") trên máy chiếu — chỉ rõ cách phối hợp `repeat` với âm thanh — trước khi học sinh tự chọn mức bài cho mình.

Em chọn **1 mức** A, B hoặc C, rồi chọn **1 trong 2 bài** của mức đó.

| Mức | Khi nào chọn |
|-----|--------------|
| **A1 hoặc A2** | Em luyện biến + `repeat until`: đếm ngược phóng tên lửa (A1) hoặc vòng xoáy ốc sên (A2) 🚀 |
| **B1 hoặc B2** | Em luyện biến + `if`: bóng nảy đếm điểm (B1) hoặc ping-pong tăng tốc có giới hạn (B2) 🏀 |
| **C1 hoặc C2** | Em luyện vòng lặp lồng nhau: lâu đài vuông lồng (C1) hoặc hoa vạn hoa (C2) 🌸 |

---

### ✍️ Làm bài mở rộng (30–35 phút)

### Bài A1 — Đếm ngược phóng tên lửa 🚀

| | Nội dung |
|---|----------|
| **Mô tả** | Sprite hóa thân thành tên lửa — đếm ngược to từ 10 về 0, mỗi giây một số, rồi vút bay lên trời và biến mất khi về tới 0. Máy phải tự kiểm tra biến để biết khi nào dừng, không biết trước số lần lặp. |
| **Yêu cầu bắt buộc** | Tạo biến `đếm ngược`, `set` = 10 khi cờ xanh; dùng `repeat until` `đếm ngược = 0` (không dùng `repeat` số cố định); mỗi vòng `say đếm ngược` → `wait 1` → `change đếm ngược by -1`; hết vòng lặp `say "Phóng!"` → bay vút lên → `hide` |
| **Gợi ý bước** | 1. Tạo biến `đếm ngược`. 2. `set đếm ngược to 10`. 3. `repeat until <đếm ngược = 0>`: `say đếm ngược`, `wait 1`, `change đếm ngược by -1`. 4. `say "Phóng!"` → `change y by 300` → `hide`. 5. Lưu project. |
| **Checklist** | - [ ] Có biến đếm ngược<br>- [ ] Dùng `repeat until`, không dùng `repeat` số cố định<br>- [ ] Đếm đúng từ 10 về 0<br>- [ ] Em đã lưu project |
| **Thử thêm** | Tick hiện biến `đếm ngược` trên Stage như đồng hồ đếm giờ NASA thật, và thêm `start sound` tiếng "tíc" mỗi giây |

---

### Bài B1 — Bóng nảy đếm điểm 🏀

| | Nội dung |
|---|----------|
| **Mô tả** | Quả bóng nảy mãi mãi khắp Stage, đổi màu mỗi lần chạm tường — nhưng máy còn phải tự đếm xem bóng đã chạm tường bao nhiêu lần, và reo lên khi đủ 10 lần. |
| **Yêu cầu bắt buộc** | `forever`; `move`; `if touching edge` → `bounce`; tạo biến `số lần chạm`, `set` = 0 khi cờ xanh; mỗi lần chạm biên `change số lần chạm by 1` + đổi màu bút; `if số lần chạm = 10 then` → `say "Chạm đủ 10 lần!"` |
| **Gợi ý bước** | 1. Sprite Ball, tạo biến `số lần chạm`. 2. `forever`: `move` → `if touching edge` → `bounce` + `change số lần chạm by 1` + đổi màu → `if số lần chạm = 10` → `say`. 3. Lưu project. |
| **Checklist** | - [ ] Chạy liên tục, nảy biên<br>- [ ] Có biến số lần chạm, tăng đúng mỗi lần chạm<br>- [ ] Báo khi đủ 10 lần<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm `stop this script` bên trong `if` để bóng dừng hẳn khi đủ 10 lần, và hiển thị biến `số lần chạm` trên Stage như bảng điểm thật |

---

### Bài C1 — Lâu đài vuông lồng 🏰

| | Nội dung |
|---|----------|
| **Mô tả** | Không chỉ 1 hình vuông — em vẽ liên tiếp **5 hình vuông lớn dần**, mỗi hình to hơn hình trước một chút và đổi màu khác nhau, tạo thành những vòng tường thành mở rộng như một tòa lâu đài phép thuật. Bí quyết: lồng 2 vòng lặp vào nhau. |
| **Yêu cầu bắt buộc** | Pen extension; tạo biến `kích thước`, `set` = 20; vòng lặp lồng nhau `repeat` (5) bên ngoài → bên trong `repeat` (4): `move kích thước` + `turn 90`; sau mỗi hình vuông `change kích thước by 20` + đổi màu bút |
| **Gợi ý bước** | 1. Tạo biến `kích thước`, `set` = 20. 2. `clear` → `pen down`. 3. `repeat` (5): { `repeat` (4): `move kích thước` → `turn 90` } → `change kích thước by 20` → đổi màu bút. 4. `pen up`. 5. Lưu project. |
| **Checklist** | - [ ] Có vòng lặp lồng nhau (repeat trong repeat)<br>- [ ] Vẽ đủ 5 hình vuông lớn dần<br>- [ ] Mỗi hình đổi màu khác nhau<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm `set pen size to` tăng dần theo từng hình để tường thành trông dày hơn ở vòng ngoài |

---

### Bài A2 — Vòng xoáy ốc sên 🌀

| | Nội dung |
|---|----------|
| **Mô tả** | Không vẽ 1 vòng tròn đứng yên nữa — lần này Pen vẽ một đường xoáy **lớn dần theo từng vòng**, y hệt vỏ ốc sên. Bí quyết: dùng một biến để mỗi vòng lặp bước đi lại dài thêm một chút. |
| **Yêu cầu bắt buộc** | Pen extension; tạo biến `bước đi`, `set` = 1; `repeat` (60): `move bước đi` + `turn 10 degrees`; mỗi vòng lặp `change bước đi by 0.3` (bước đi dài dần ra) |
| **Gợi ý bước** | 1. Tạo biến `bước đi`, `set` = 1. 2. `clear` → `pen down`. 3. `repeat` (60): `move bước đi` → `turn` (10) `degrees` → `change bước đi by 0.3`. 4. Bấm cờ xanh — xem đường xoáy to dần. 5. Lưu project. |
| **Checklist** | - [ ] Có biến bước đi, tăng dần mỗi vòng<br>- [ ] Đường xoáy to dần rõ ràng (không phải vòng tròn đều)<br>- [ ] Không copy tay nhiều khối giống nhau<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm `change pen color by 5` mỗi vòng lặp — vòng xoáy sẽ đổi màu cầu vồng dần ra ngoài! |

---

### Bài B2 — Ping-pong tăng tốc có giới hạn 🏓

| | Nội dung |
|---|----------|
| **Mô tả** | Quả bóng nảy **mãi** trong Stage và càng chơi lâu càng **tăng tốc dần** mỗi khi chạm biên — nhưng nếu cứ tăng mãi thì bóng sẽ nhanh đến mức nhìn không kịp! Em phải thêm một điều kiện giới hạn để bóng không bao giờ chạy quá nhanh. |
| **Yêu cầu bắt buộc** | `forever` + `move tốc độ`; `if touching edge` → `bounce`, `change tốc độ by 1`; **bắt buộc** `if tốc độ > 20 then` → `set tốc độ to 5` (giới hạn tốc độ tối đa) |
| **Gợi ý bước** | 1. Tạo biến `tốc độ`, `set` `to` `5` khi cờ xanh. 2. `forever` → `move tốc độ steps` → `if touching edge` → `bounce` + `change tốc độ by 1` → `if tốc độ > 20` → `set tốc độ to 5`. 3. Chạy thử, quan sát bóng tăng tốc rồi tự "reset". 4. Lưu project. |
| **Checklist** | - [ ] Bóng nảy liên tục, tốc độ tăng khi chạm biên<br>- [ ] Có điều kiện giới hạn tốc độ tối đa<br>- [ ] Thấy bóng tăng tốc rồi trở lại chậm<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm biến `điểm`, `change điểm by 1` mỗi lần chạm biên, và hiển thị cả 2 biến `tốc độ` + `điểm` trên Stage như bảng điều khiển trận đấu |

---

### Bài C2 — Hoa vạn hoa 🌸

| | Nội dung |
|---|----------|
| **Mô tả** | Không chỉ 1 ngôi sao — em vẽ **6 ngôi sao xoay lệch góc** chồng lên nhau, mỗi ngôi sao đổi màu khác nhau, tạo thành một bông hoa vạn hoa (kaleidoscope) rực rỡ. Bí quyết vẫn là lồng 2 vòng lặp: vòng trong vẽ 1 ngôi sao, vòng ngoài xoay và lặp lại. |
| **Yêu cầu bắt buộc** | Pen extension; `clear` + `pen down`; vòng lặp lồng nhau `repeat` (6) bên ngoài → bên trong `repeat` (5): `move` + `turn 144`; sau mỗi ngôi sao `turn 60 degrees` (xoay lệch) + đổi màu bút |
| **Gợi ý bước** | 1. Add Extension → Pen. 2. `clear` → `pen down`. 3. `repeat` (6): { `repeat` (5): `move` (100) → `turn` (144) } → `turn` (60) → đổi màu bút. 4. `pen up`. 5. Lưu project. |
| **Checklist** | - [ ] Có vòng lặp lồng nhau (repeat trong repeat)<br>- [ ] Vẽ đủ 6 ngôi sao xoay lệch góc, chồng lên nhau<br>- [ ] Mỗi ngôi sao đổi màu khác nhau<br>- [ ] Em đã lưu project |
| **Thử thêm** | Đổi `repeat` ngoài thành 12 và góc xoay thành 30° — hoa vạn hoa sẽ dày cánh hơn hẳn! |

---

### 🖼️ Showcase (10 phút)

Gallery walk: học sinh để project chạy trên màn hình, cả lớp đi vòng quanh xem 3–4 project gần nhất, đặc biệt chú ý các bài mức C xem bạn vẽ hình Pen thế nào. Mời 2–3 em xung phong trình chiếu trước lớp.

### ✅ Tổng kết (5 phút)

Nhắc lại: hôm nay em đã luyện thành thạo `repeat`, `forever` và vẽ hình bằng Pen qua Luyện tập 1, 2 và bài mở rộng. Buổi sau (**Buổi 15 — Điều kiện & biến**) em sẽ học `if/else` và biến (variable) để làm game có luật chơi và tính điểm.

---

# Tuần 8 — Điều kiện & biến 🎯

---

## Buổi 15 — Học (H): Điều kiện & biến

### Hôm nay em học gì?

Hôm nay em học **if / else** (nếu thì / không thì) để Scratch **quyết định** làm gì, và **biến** (variable) để **lưu số** như điểm số trong game! Đây là nền tảng để em làm game có luật chơi và tính điểm. 🎮⭐

---

### 🎬 Khởi động (10 phút)

**Trò chơi "Nếu... thì..."**

- Giáo viên đọc luật chơi kiểu "nếu... thì...": "Nếu cô nói tên con vật sống dưới nước, cả lớp ngồi xuống. Nếu cô nói tên con vật sống trên cạn, cả lớp đứng thẳng." Đọc nhanh vài từ: "Cá" (ngồi) → "Chó" (đứng) → "Cua" (ngồi) → "Gà" (đứng).
- Hỏi cả lớp: "Vừa rồi các em vừa làm đúng những gì cô nói 'nếu... thì...' — trong Scratch cũng có khối lệnh y hệt vậy, gọi là `if ... then`!"
- Sau đó, giáo viên gắn thêm 1 nhánh nữa: "Nếu cô nói tên con vật, thì làm theo luật; **nếu không phải** con vật (ví dụ cô nói 'cái ghế'), thì vỗ tay 1 cái" → dẫn vào khái niệm `if ... else` (nếu đúng làm 1 việc, nếu sai làm việc khác).
- Hỏi thêm: "Nếu mỗi lần vỗ tay đúng, mình cộng 1 điểm cho cả lớp thì sao? Ai sẽ nhớ giúp tổng điểm?" → dẫn vào khái niệm **biến** (ô nhớ số điểm) hôm nay.

---

### Kiến thức mới (20 phút)

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

**Vì sao quan trọng?** Đến giờ project của em chỉ "phản ứng" chứ chưa "nhớ" gì cả — mỗi lần chạy lại như mới. Biến giúp Scratch **ghi nhớ** một con số (điểm, mạng, thời gian...) xuyên suốt cả ván chơi. Kết hợp với `if/else`, Scratch có thể **quyết định** dựa trên số đó (đủ điểm thì thắng, hết mạng thì thua). Đây chính là hai mảnh ghép cuối cùng để em làm được một game hoàn chỉnh có luật chơi!

---

### Ví dụ mẫu 1 — Đếm click

1. Tạo biến `số lần click`.
2. `when green flag clicked` → `set` `số lần click` `to` `0`.
3. `when this sprite clicked` → `change` `số lần click` `by` `1`.
4. Bấm cờ xanh, click sprite nhiều lần — xem số tăng! 🔢

### Ví dụ mẫu 2 — If/else theo số lần click

1. Tiếp tục project ở Ví dụ mẫu 1.
2. Thêm: `when this sprite clicked` → `if` `số lần click` `>` `5` `then` → `say` `Em click giỏi quá!` `else` → `say` (join `Click thêm ` (5 - số lần click) ` lần nữa!`)
3. Bấm cờ xanh, click thử vài lần rồi nhiều hơn 5 lần — xem lời sprite nói thay đổi thế nào.

*(Ví dụ 1 chỉ "nhớ" số click; ví dụ 2 dùng chính số đó để **quyết định** nói câu nào — biến và if/else phối hợp với nhau chính là công thức làm game!)*

### Em đoán xem?

Nếu biến `số lần click` đang là `3` và em click thêm 2 lần nữa (tổng thành 5), theo khối `if` `số lần click` `>` `5` ở Ví dụ mẫu 2, sprite sẽ nói nhánh nào — "Em click giỏi quá!" hay "Click thêm..."? Đoán trước, rồi thử trên Scratch để kiểm tra!

---

### Thực hành 1 (TH1) — (15 phút) "Né quái đuổi, ăn sao ⭐👹💨"

#### Mô tả

Em thêm sprite **Sao** (Star) và **Quái vật** (Monster) — nhưng lần này Quái vật **không đứng yên** mà di chuyển qua lại liên tục, và càng sống sót lâu, Quái vật càng **di chuyển nhanh hơn**! Chạm sao thì được thưởng (sao đổi chỗ + có tiếng); chạm quái vật thì **mất mạng** — dùng biến `mạng` để đếm, dừng game khi hết mạng.

#### Yêu cầu

- Có 3 sprite: nhân vật (điều khiển phím mũi tên), Sao, Quái vật.
- Quái vật di chuyển liên tục qua lại (`forever` + `move` + `if on edge, bounce`) — **không đứng yên**.
- Biến `tốc độ quái`, cứ mỗi **10 giây** sống sót thì tăng thêm 1 (quái đi nhanh dần).
- Biến `mạng`, `set` = **3** khi cờ xanh; biến `giây sống` đếm thời gian còn sống.
- Trong `forever`: `if` `touching` `[Star]` → `start sound` + đổi vị trí sao.
- `if` `touching` `[Monster]` → `change` `mạng` `by` `-1` (kèm `wait` ngắn tránh trừ liên tục).
- `if` `mạng` `= 0` → `say` `"Hết mạng rồi! Em sống được (giây sống) giây!"` + `stop this script`.

#### Gợi ý từng bước

1. Giữ Cat, thêm sprite **Star** và **Monster**.
2. Tạo biến `mạng`, `giây sống`, `tốc độ quái` — For all sprites.
3. **Code Monster — di chuyển qua lại:**
   ```
   when green flag clicked
   set [tốc độ quái] to (2)
   forever
     move (tốc độ quái) steps
     if on edge, bounce
   ```
4. **Code Monster — tăng tốc theo thời gian:**
   ```
   when green flag clicked
   forever
     wait (10) seconds
     change [tốc độ quái] by (1)
   ```
5. **Code Cat — điều khiển 4 phím** (như buổi trước) + **đếm giây sống:**
   - `when green flag clicked` → `set` `mạng` `to` `3` → `set` `giây sống` `to` `0` → `forever`: `wait` `1` `seconds` → `change` `giây sống` `by` `1`.
6. **Code Cat — chạm sao và quái vật** (script riêng, `forever`):
   ```
   forever
     if <touching [Star] ?> then
       start sound [Collect]
       (đặt code đổi vị trí trên sprite Star, xem bước 7)
     if <touching [Monster] ?> then
       change [mạng] by (-1)
       wait (1) seconds
     if <mạng> = (0) then
       say (join [Hết mạng rồi! Em sống được ] (giây sống) [ giây!]) for (2) secs
       stop [this script]
   ```
7. **Code Star:**
   ```
   when green flag clicked
   go to (vị trí ngẫu nhiên)
   forever
     if <touching [Cat] ?> then
       start sound [Collect]
       go to x: (pick random -200 to 200) y: (pick random -150 to 150)
   ```
8. Lưu project tên `TH1-ne-quai-duoi`.

#### Checklist tự kiểm

- [ ] Quái vật di chuyển qua lại, không đứng yên
- [ ] Quái vật tăng tốc sau mỗi 10 giây sống sót
- [ ] Chạm sao thì sao đổi vị trí + có tiếng
- [ ] Có biến `mạng`, giảm đúng khi chạm quái vật
- [ ] Dừng lại và báo khi hết mạng, kèm số giây sống sót
- [ ] Em đã lưu project

---

### 🤸 Giải lao vận động (5 phút)

**Trò chơi "Nếu chạm thì..."**

- Đặt vài "ngôi sao" tượng trưng (giấy hoặc vòng) rải rác trong lớp. Học sinh đi lại tự do; khi giáo viên hô "Bắt đầu!", các em di chuyển và cố "chạm" (chạm tay hoặc bước vào) một ngôi sao.
- Mỗi lần chạm được 1 ngôi sao, cả lớp hô to số điểm tăng lên (giống biến `điểm` tăng 1) — ngôi sao đó "di chuyển" sang vị trí khác (giáo viên nhấc sang chỗ mới).
- Chơi 1–2 phút, sau đó hỏi: "Ai chạm được nhiều sao nhất?" để liên hệ với khái niệm biến điểm trong TH2.

---

### Thực hành 2 (TH2) — (15 phút) "Đua với thời gian 🏆⏳"

#### Mô tả

Em tạo biến `điểm`, tăng khi chạm sao — nhưng giờ có thêm **đồng hồ đếm ngược 20 giây** tạo áp lực thời gian thật sự: đạt đủ **10 điểm trước khi hết giờ** thì thắng; hết giờ mà chưa đủ điểm, **hoặc hết mạng** (từ TH1) thì thua!

#### Yêu cầu

- Biến `điểm` hiển thị trên Stage, `set` = 0 khi cờ xanh.
- Biến `giây còn lại`, `set` = **20** khi cờ xanh; `forever` → `wait` `1` → `change` `giây còn lại` `by` `-1`.
- Chạm sao: `change` `điểm` `by` `1`.
- `if` `điểm` `= 10` → `say` `"Em thắng rồi!"` + `stop` `all`.
- `if` `giây còn lại` `= 0` **và** `điểm` chưa đủ 10 → `say` `"Hết giờ! Thua rồi."` + `stop` `all`.
- `if` `mạng` (từ TH1) `= 0` → `say` `"Thua rồi!"` + `stop` `all` (bắt buộc — không còn là thử thêm).

#### Gợi ý từng bước

1. **Variables** → tạo `điểm`, `giây còn lại` → For all sprites, tick hiện trên Stage.
2. `when green flag clicked` → `set` `điểm` `to` `0`, `set` `giây còn lại` `to` `20` (đặt ở Star).
3. Thêm `forever` riêng đếm ngược: `wait` `1` `seconds` → `change` `giây còn lại` `by` `(-1)`.
4. Trong `if touching Cat` (trên Star): `change` `điểm` `by` `1` → `if` `điểm` `= 10` `then` → `say` `[Em thắng rồi!]` → `stop` `[all]`.
5. Thêm `if` `<giây còn lại = 0> and <điểm < 10>` `then` → `say` `[Hết giờ! Thua rồi.]` → `stop` `[all]`.
6. Thêm `if` `mạng` `= 0` (từ TH1) `then` → `say` `[Thua rồi!]` → `stop` `[all]`.
7. Bấm cờ xanh, thử cả 3 cách kết thúc: thắng đủ điểm, thua hết giờ, thua hết mạng.
8. Lưu project tên `TH2-dua-voi-thoi-gian`.

#### Checklist tự kiểm

- [ ] Có biến `điểm` và `giây còn lại` trên Stage
- [ ] Đủ 10 điểm trước khi hết giờ thì báo thắng và dừng
- [ ] Hết giờ mà chưa đủ điểm thì báo thua
- [ ] Hết mạng (từ TH1) cũng báo thua
- [ ] Em đã lưu project

**Thử thêm:** giảm còn 15 giây hoặc tăng ngưỡng thắng lên 15 điểm để khó hơn nữa; thêm đếm ngược "3, 2, 1" bằng `say` trước khi bắt đầu chơi.

---

### 🤝 Thử thách nhóm/sáng tạo (10–15 phút)

**"Đoán điểm của bạn"**

- Ghép cặp 2 bạn. Bạn A chạm sao vài lần trong project TH2 của mình (không nói to số điểm), rồi che biến điểm trên Stage lại (hoặc quay màn hình đi).
- Bạn B đoán: "Bạn vừa chạm mấy sao rồi? Điểm đang là bao nhiêu?" rồi mới nhìn số thật để kiểm tra.
- Đổi vai, thử với project của bạn B.
- Khuyến khích: nếu còn thời gian, mỗi cặp thử thêm 1 nhánh `else` — ví dụ nếu điểm chưa đủ 5 thì sprite nói "Cố thêm chút nữa!" — và đố cặp bên cạnh đoán khi nào lời thoại đổi.
- Giáo viên mời 1–2 cặp chia sẻ trước lớp.

---

### Mẹo nhỏ 💡

- Luôn `set điểm to 0` khi **cờ xanh** — không reset thì điểm cũ còn từ lần chơi trước!
- `if` ... `else` giúp game có **hai nhánh** rõ ràng (đúng/sai, thắng/thua).
- Code `if touching` nên nằm trong `forever` để kiểm tra **liên tục**.
- Đặt tên biến tiếng Việt không dấu hoặc tiếng Anh đều được — quan trọng là em nhớ!

---

### 🎉 Tổng kết & Ôn tập trò chơi (10 phút)

**"Đố vui nhanh" — cả lớp giơ tay trả lời, chia 2 đội thi đua:**

1. Biến dùng để làm gì? Cho ví dụ trong game.
2. `set` và `change` khác nhau thế nào?
3. `if` ... `else` dùng khi nào?
4. Làm sao hiển thị điểm trên màn hình Stage?
5. Tại sao `if touching` thường đặt trong `forever`?

Mỗi câu, đội nào giơ tay trước được trả lời — đúng ghi 1 điểm cho đội, tổng kết đội thắng cuối giờ.

- Mời 1–2 em xung phong trình chiếu project TH2 "biến điểm" của mình, cho cả lớp xem điểm tăng lên khi chạm sao.
- Hẹn gặp lại ở buổi Bài tập tuần này để làm Luyện tập 1, 2 và bài mở rộng!

---

### 👩‍🏫 Ghi chú cho giáo viên

**Kịch bản demo nhanh:**
- Trước Kiến thức mới, demo trực tiếp việc tạo biến `điểm` (Variables → Make a Variable) và tick hiển thị lên Stage — để cả lớp thấy ngay số 0 xuất hiện góc màn hình trước khi giải thích khối lệnh.
- Demo Ví dụ mẫu 2 (if/else theo số click), click liên tục qua mốc 5 lần để cả lớp nghe câu nói đổi từ nhánh `else` sang nhánh `if`.

**Lỗi thường gặp (ngoài phần Mẹo nhỏ):**
- Học sinh quên `set điểm to 0` khi cờ xanh, khiến điểm cộng dồn từ lần chơi trước — nhắc luôn đặt khối này ngay sau `when green flag clicked`.
- Đặt khối `change điểm by 1` ngoài vùng `if touching`, khiến điểm tăng liên tục dù không chạm sao — kiểm tra khối có "lọt" đúng bên trong `if` không.
- Nhầm lẫn giữa `=` (so sánh bằng) và biểu tượng gán giá trị — nhắc trong Scratch, khối hình lục giác màu xanh lá `=` chỉ dùng để **so sánh**, không phải để gán.

**Quản lý lớp học:**
- Khởi động "Nếu... thì...": đọc từ đủ chậm để cả lớp nghe rõ, tăng tốc dần ở vòng sau để tạo hứng thú.
- Giải lao "Nếu chạm thì...": giới hạn khu vực di chuyển rõ ràng, tránh học sinh chen lấn quanh cùng một ngôi sao.
- Thử thách nhóm: đi vòng nhắc các cặp che màn hình đúng cách khi đoán điểm, tránh nhìn trộm trước khi đoán.

---

## Buổi 16 — Bài tập (BT): Game điểm cơ bản 🎮

### 🎬 Khởi động ôn tập (10 phút)

**"Đúng hay Sai?"** — Giáo viên đọc từng câu, học sinh giơ ngón cái lên (Đúng) hoặc xuống (Sai):

1. "Biến là một hộp nhớ lưu một giá trị, thường là số." (Đúng)
2. "`set điểm to 0` dùng để tăng điểm thêm 1." (Sai — đó là `change`, `set` dùng để gán/reset giá trị)
3. "`if ... else` chỉ chạy một nhánh, không có lựa chọn." (Sai — có 2 nhánh: đúng và sai)
4. "Muốn thấy điểm trên Stage, em phải tick ô nhỏ cạnh tên biến." (Đúng)
5. "Khối `if touching` nên đặt trong `forever` để kiểm tra liên tục." (Đúng)

### Ôn nhanh

- **if / else:** quyết định hai nhánh
- **Biến:** `set`, `change`, hiển thị trên Stage
- **Game mini:** điều khiển + chạm + điểm

---

### ✍️ Luyện tập 1, 2 (LT1/LT2) (15–20 phút)

Hai bài dưới đây em làm **ngay tại lớp, có giáo viên hướng dẫn** — không phải chữa bài tập về nhà, mà là luyện lại kỹ năng if/else và biến của buổi Học tuần trước ngay tại chỗ.

*Gợi ý:* Đổi máy với bạn bên cạnh 2 phút sau khi làm xong để cùng kiểm tra checklist của nhau.

#### Luyện tập 1 (LT1) — "If-else đơn giản 🔀"

**Mô tả:** Em hỏi một câu (hoặc dùng phím) và dùng **if-else**: đúng thì sprite vui, sai thì sprite buồn.

**Yêu cầu:**
- Có `ask` HOẶC nhấn phím để kiểm tra.
- Có `if` ... `then` ... `else`.
- Nhánh đúng và nhánh sai có phản ứng khác nhau (`say` hoặc `switch costume to`).

**Gợi ý từng bước:**
1. `when green flag clicked` → `ask` `5 + 5 = ?` `and wait`
2. `if` `answer` `=` `10` `then` → `say` `Giỏi quá!` `for` `2` `secs` → `switch costume to` costume vui
3. `else` → `say` `Cố lên nhé!` `for` `2` `secs`
4. Lưu project tên `LT1-if-else`.

**Checklist tự kiểm:**
- [ ] Có `if` và `else`
- [ ] Đúng và sai phản ứng khác nhau
- [ ] Em thử cả đáp án đúng và sai
- [ ] Em đã lưu project

| Em kiểm tra | Đúng khi... |
|-------------|-------------|
| Có else | Thấy khối `else` gắn với `if` |
| Hai nhánh khác nhau | Đúng/sai có `say` hoặc costume khác nhau |
| Thử cả hai | Em gõ đúng và sai đều thấy phản ứng khác |

#### Luyện tập 2 (LT2) — "Bắt sao đơn giản 🌟"

**Mô tả:** Em làm game mini: điều khiển nhân vật, chạm sao để **+1 điểm**, sao nhảy chỗ mới. Có biến `điểm`.

**Yêu cầu:**
- Điều khiển 4 phím mũi tên.
- Biến `điểm`; reset khi cờ xanh.
- Chạm sao → +1 điểm + sao đổi vị trí + có tiếng.

**Gợi ý từng bước:**
1. Cat + Star, biến `điểm`.
2. Code di chuyển 4 phím (như tuần 4).
3. Star: `if touching Cat` → `change điểm by 1` → `start sound` → `go to` random.
4. Cat hoặc Star: cờ xanh → `set điểm to 0`.
5. Lưu project tên `LT2-bat-sao`.

**Checklist tự kiểm:**
- [ ] Điều khiển 4 hướng OK
- [ ] Có biến điểm hiển thị
- [ ] Chạm sao tăng điểm
- [ ] Sao đổi vị trí sau khi chạm
- [ ] Em đã lưu project

| Em kiểm tra | Đúng khi... |
|-------------|-------------|
| Điểm tăng | Mỗi lần chạm sao +1 |
| Reset | Cờ xanh → điểm về 0 |
| Sao nhảy | Sau khi chạm, sao ở vị trí mới |
| Điều khiển | 4 phím mũi tên hoạt động |

---

### 🎯 Giới thiệu bài mở rộng (10 phút)

Giáo viên demo nhanh **1 ví dụ mẫu** (ví dụ bài A1 "Đếm click") trên máy chiếu — chỉ rõ cách tạo biến, reset khi cờ xanh và tăng biến khi có sự kiện — trước khi học sinh tự chọn mức bài cho mình.

Em chọn **1 mức** A, B hoặc C, rồi chọn **1 trong 2 bài** của mức đó.

| Mức | Khi nào chọn |
|-----|--------------|
| **A1 hoặc A2** | Em luyện đếm click (A1) hoặc đếm thời gian (A2) 🖱️ |
| **B1 hoặc B2** | Em luyện bắt sao (B1) hoặc bắt táo rơi (B2) 🌟 |
| **C1 hoặc C2** | Em luyện tránh thiên thạch (C1) hoặc game 3 mạng (C2) ☄️ |

---

### ✍️ Làm bài mở rộng (30–35 phút)

### Bài A1 — Đếm click thần tốc 🖱️⚡

| | Nội dung |
|---|----------|
| **Mô tả** | Sprite của em mở "quầy đếm số" tốc độ — nhưng lần này có đồng hồ đếm ngược! Em phải click đủ **15 lần trong vòng 10 giây**, chậm quá là thua ngay. |
| **Yêu cầu bắt buộc** | Biến `lần click` và `giây còn lại`; `set` `lần click` = 0, `giây còn lại` = 10 khi cờ xanh; `forever` đếm ngược `giây còn lại`; `when sprite clicked` → `change` `lần click` +1; `if` `lần click` `=` `15` → `say` thắng + `stop all`; `if` `giây còn lại` `=` `0` và `lần click` `<` `15` → `say` thua + `stop all` |
| **Gợi ý bước** | 1. Tạo 2 biến. 2. Cờ xanh: reset cả 2 + `forever` đếm ngược `giây còn lại`. 3. Click → tăng `lần click`. 4. `if` đủ 15 → `say` `Siêu tốc! Em thắng rồi!` + `stop all`. 5. `if` hết giờ chưa đủ 15 → `say` `Hết giờ rồi, thử lại nhé!` + `stop all`. 6. Lưu project. |
| **Checklist** | - [ ] Biến `lần click` và `giây còn lại` hiển thị trên Stage<br>- [ ] Click tăng `lần click`<br>- [ ] Đủ 15 trong giờ thì báo thắng<br>- [ ] Hết giờ chưa đủ thì báo thua<br>- [ ] Em đã lưu project |
| **Thử thêm** | Giảm còn 8 giây để khó hơn nữa; đổi costume sprite mỗi khi đạt mốc 5, 10 và 15 lần click |

---

### Bài B1 — Bắt sao 🌟🌑

| | Nội dung |
|---|----------|
| **Mô tả** | Một cơn mưa sao xuất hiện — nhưng lẫn trong đó có cả **sao vàng** đặc biệt (+3 điểm) và **sao đen** nguy hiểm (−2 điểm nếu chạm nhầm)! Trong **20 giây**, em vừa lượm sao tốt vừa né sao xấu để đạt điểm cao nhất. |
| **Yêu cầu bắt buộc** | Biến `điểm`; biến hoặc `wait` 20 giây; điều khiển 4 phím; ít nhất 2 loại sao — sao thường (+1) hoặc sao vàng (+3), và sao đen (−2); hết giờ `say` tổng điểm và `stop all` |
| **Gợi ý bước** | 1. Biến `điểm`, reset cờ xanh. 2. Cat điều khiển 4 phím. 3. Star thường: chạm → +1 → random vị trí. 4. Star vàng (sprite riêng): chạm → +3 → random vị trí. 5. Star đen (sprite riêng): chạm → −2 → random vị trí. 6. `when green flag` → `wait` 20 secs → `say` (join `Hết giờ! Điểm: ` `điểm`) → `stop all`. 7. Lưu project. |
| **Checklist** | - [ ] Chơi được bằng phím<br>- [ ] Có ít nhất 2 loại sao (tốt + đen)<br>- [ ] Sao đen trừ điểm khi chạm nhầm<br>- [ ] Hết giờ báo điểm<br>- [ ] Em đã lưu project |
| **Thử thêm** | Nếu điểm ≥ 15 thì `say` `Siêu sao!`, và cho sao đen di chuyển nhanh hơn sao thường để né khó hơn nữa |

---

### Bài C1 — Tránh thiên thạch ☄️☄️

| | Nội dung |
|---|----------|
| **Mô tả** | Tàu vũ trụ của em bay vào một vùng đầy **2 luồng thiên thạch rơi lệch nhịp** — và càng sống sót lâu, thiên thạch càng rơi nhanh hơn! Nhiệm vụ là né tránh càng lâu càng tốt, vì chỉ cần chạm 1 lần là nhiệm vụ kết thúc. |
| **Yêu cầu bắt buộc** | ≥ 3 sprite (tàu + 2 thiên thạch lệch nhịp); điều khiển trái/phải; thiên thạch rơi (`forever` + `change y`), tốc độ rơi tăng dần theo biến `giây sống` (mỗi 5 giây rơi nhanh hơn); `if touching` bất kỳ thiên thạch nào → `say` Game Over + `stop all`; biến `giây sống` hiển thị |
| **Gợi ý bước** | 1. Sprite Rocket (tàu) ở dưới, điều khiển trái/phải. 2. Thiên thạch 1: `go to` trên cùng → `forever` → `change y by` (biến tốc độ, âm) → chạm biên dưới thì `go to` lại trên. 3. Thiên thạch 2: giống thiên thạch 1 nhưng xuất phát lệch thời điểm/vị trí. 4. Biến `giây sống`: `forever` → `wait` 1 → `change giây sống by 1`; mỗi 5 giây → `change tốc độ rơi by 1`. 5. `if touching` thiên thạch nào cũng → thua. 6. Lưu project. |
| **Checklist** | - [ ] Tàu di chuyển trái/phải<br>- [ ] Có 2 thiên thạch rơi lệch nhịp<br>- [ ] Thiên thạch rơi nhanh dần theo thời gian<br>- [ ] Chạm thì Game Over<br>- [ ] Có biến `giây sống`<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm âm thanh nổ khi Game Over; thêm thiên thạch thứ 3; cho tàu "bất tử" chớp nhoáng 0.5 giây sau mỗi lần né sát |

---

### Bài A2 — Đếm giờ thách đấu ⏱️🎯

| | Nội dung |
|---|----------|
| **Mô tả** | Trước khi bắt đầu, sprite hỏi em **dự đoán** mình sẽ click sau mấy giây. Đồng hồ chạy, và khi em click, sprite so sánh kết quả thật với dự đoán — đoán đúng thì "Chuẩn không cần chỉnh!", sai thì chỉ ra hơn/kém bao nhiêu! |
| **Yêu cầu bắt buộc** | Biến `giây` và `dự đoán`; `when green flag clicked` → `ask` `"Em đoán mình sẽ click sau mấy giây?"` `and wait` → `set` `dự đoán` `to` `answer`; `set giây to 0` + `forever` → `wait 1` → `change giây by 1`; `when sprite clicked` → `if giây = dự đoán` → `say` khen; `else` → `say` so sánh + `stop all` |
| **Gợi ý bước** | 1. Tạo biến `giây`, `dự đoán`, hiển thị trên Stage. 2. Cờ xanh: `ask` dự đoán → `set dự đoán to answer` → `set giây to 0` + `forever` đếm giây. 3. Click sprite → `if giây = dự đoán` → `say "Chuẩn không cần chỉnh!"`; `else` → `say` (join `Em click lúc ` giây ` giây — đoán là ` dự đoán ` giây`). 4. `stop all`. 5. Chơi thử 2–3 lần. 6. Lưu project. |
| **Checklist** | - [ ] Có `ask` dự đoán trước khi chơi<br>- [ ] Biến `giây` hiển thị và tăng đúng<br>- [ ] Click thì so sánh giây thật với dự đoán<br>- [ ] Cờ xanh reset về 0<br>- [ ] Em đã lưu project |
| **Thử thêm** | Nếu chênh lệch không quá 2 giây thì vẫn tính "Gần đúng, giỏi lắm!"; thử đoán lại nhiều lần xem lần sau có chuẩn hơn không |

---

### Bài B2 — Bắt táo rơi 🍎🍏

| | Nội dung |
|---|----------|
| **Mô tả** | Một cây táo thần kỳ liên tục rụng quả — nhưng có cả **táo hỏng** lẫn vào, và táo rơi **càng lúc càng nhanh** theo thời gian! Em điều khiển giỏ chạy qua lại để bắt đúng táo ngon trong **30 giây**, lỡ bắt táo hỏng thì bị trừ điểm. |
| **Yêu cầu bắt buộc** | ≥ 3 sprite (giỏ + táo ngon + táo hỏng); điều khiển trái/phải; táo rơi (`forever` + `change y by` âm), tốc độ rơi tăng dần theo thời gian (biến `tốc độ rơi`, mỗi 10 giây tăng 1); táo ngon chạm → +1 điểm, táo hỏng chạm → −1 điểm; biến `điểm`; hết 30 giây `say` tổng điểm + `stop all` |
| **Gợi ý bước** | 1. Biến `điểm`, `tốc độ rơi` = 3, reset cờ xanh. 2. Giỏ điều khiển ← → ở dưới Stage. 3. Táo ngon: `go to` trên → `forever` → rơi theo `tốc độ rơi` → chạm biên dưới thì về trên. 4. Táo hỏng: tương tự táo ngon nhưng costume/màu khác. 5. `if touching` táo ngon → `change điểm by 1`; `if touching` táo hỏng → `change điểm by -1`. 6. Mỗi 10 giây → `change tốc độ rơi by 1`. 7. `wait 30 secs` → `say` tổng điểm → `stop all`. 8. Lưu project. |
| **Checklist** | - [ ] Điều khiển trái/phải OK<br>- [ ] Có cả táo ngon và táo hỏng<br>- [ ] Táo rơi nhanh dần theo thời gian<br>- [ ] Bắt đúng/nhầm cộng/trừ điểm đúng<br>- [ ] Hết giờ báo điểm<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm 1 loại "táo vàng" đặc biệt +3 điểm, hiếm khi xuất hiện; giảm xuống 20 giây để khó hơn nữa |

---

### Bài C2 — Game 3 mạng ❤️❤️❤️💖

| | Nội dung |
|---|----------|
| **Mô tả** | Trận đấu sinh tồn bắt đầu! Em làm game có **3 mạng** (lives) và ít nhất **2 địch di chuyển** — nhưng còn có **trái tim hồi máu** xuất hiện ngẫu nhiên, chạm vào được hồi 1 mạng! Kết hợp né địch và săn tim hồi máu để sống sót lâu nhất. |
| **Yêu cầu bắt buộc** | Biến `mạng`; `set mạng to 3` khi cờ xanh; ≥ 2 sprite địch **di chuyển liên tục** (không đứng yên); `if touching` địch → `change mạng by -1` + địch về vị trí mới (kèm `wait` tránh trừ liên tục); sprite trái tim: `if touching` và `mạng < 3` → `change mạng by 1` + trái tim ẩn/đổi vị trí; `if mạng = 0` → `say` Game Over + `stop all`; hiển thị `mạng` trên Stage |
| **Gợi ý bước** | 1. Tạo biến `mạng`, hiển thị trên Stage. 2. Nhân vật điều khiển 4 phím (hoặc trái/phải). 3. Địch 1, Địch 2: mỗi sprite `forever` tự di chuyển/rơi theo hướng riêng. 4. Chạm địch: `change mạng by -1`, `wait` ngắn, kiểm tra `if mạng = 0`. 5. Trái tim: `forever` → `if touching Cat and mạng < 3` → `change mạng by 1` → ẩn 1–2 giây rồi hiện lại ở vị trí random. 6. Lưu project. |
| **Checklist** | - [ ] Bắt đầu có 3 mạng<br>- [ ] Có ít nhất 2 địch di chuyển<br>- [ ] Chạm địch mất 1 mạng<br>- [ ] Chạm tim hồi máu được +1 mạng (nếu chưa đủ 3)<br>- [ ] Hết mạng → Game Over<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm âm thanh khi mất mạng/hồi mạng; khi còn 1 mạng sprite `say` `Cẩn thận!`, và thêm biến `điểm` riêng tăng theo thời gian sống sót |

---

### 🖼️ Showcase (10 phút)

Gallery walk: học sinh để project chạy trên màn hình, cả lớp đi vòng quanh xem 3–4 project gần nhất, đặc biệt chú ý các bài mức C xem bạn làm game có mạng/thời gian thế nào. Mời 2–3 em xung phong trình chiếu trước lớp, ưu tiên bạn có game chạy mượt và có luật chơi rõ ràng.

### ✅ Tổng kết (5 phút)

Nhắc lại: hôm nay em đã hoàn thiện kỹ năng if/else và biến qua Luyện tập 1, 2 và bài mở rộng — đủ để tự làm một game có điểm, thời gian hoặc mạng. Đây cũng là buổi khép lại **Tháng 2**! Tháng sau em sẽ học **broadcast**, **clone** và **My Blocks** để làm game phức hợp và hay hơn nữa.

---

## Em đã hoàn thành tháng 2! 🎉

Sau 8 buổi (tuần 5–8), em đã biết:

- 🎵 Thêm **âm thanh** và làm **hội thoại** nhiều sprite
- 🔍 Dùng **Sensing** (`ask`, `touching`) và **thuật toán**
- 🔁 Dùng **vòng lặp** `repeat` và `forever`, vẽ bằng **Pen**
- 🎯 Dùng **if/else** và **biến** để làm game có điểm

Tuần sau em sẽ học **broadcast**, **clone** và **My Blocks** — game của em sẽ hay hơn nhiều! Tiếp tục trong file [thang-3-logic-nang-cao.md](thang-3-logic-nang-cao.md) nhé! 🚀
