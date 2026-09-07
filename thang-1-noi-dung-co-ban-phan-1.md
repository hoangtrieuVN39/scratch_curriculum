# Tháng 1 — Nội dung cơ bản (phần 1)

> **Tuần 1–4** | Buổi 1–8 | Dành cho em **7–10 tuổi**
>
> Em sẽ làm quen Scratch, cho nhân vật di chuyển, tạo hoạt hình và điều khiển bằng phím.

[← Về lộ trình tổng](curriculum.md) | Tiếp theo: [Tháng 2 — phần 2](thang-2-noi-dung-co-ban-phan-2.md)

---

## Tuần 1 — Làm quen Scratch

### Buổi 1 — Học: Làm quen Scratch

#### Hôm nay em học gì?

Sau buổi này, em biết **lập trình là gì**, nhận biết **Stage, Sprite, Backdrop, khối lệnh** và bấm **cờ xanh** để chạy chương trình đầu tiên.

#### 🎬 Khởi động (10 phút)

**Trò chơi "Rô-bốt nghe lệnh"**

- Cả lớp đứng dậy, đóng vai rô-bốt. Giáo viên là "người lập trình", hô lệnh thật ngắn gọn và đúng thứ tự, ví dụ: "Tiến 2 bước!" → "Quay phải!" → "Vỗ tay 1 cái!" → "Đứng im!"
- Rô-bốt (học sinh) chỉ được làm đúng theo lệnh, đúng thứ tự, không được đoán trước lệnh tiếp theo.
- Sau 2–3 lượt, giáo viên hỏi cả lớp: "Vậy máy tính có tự biết làm gì không, hay cần ai đó ra lệnh?" → dẫn vào khái niệm **lập trình**: ra lệnh cho máy tính làm từng việc theo đúng thứ tự, giống như em vừa "lập trình" cho bạn làm rô-bốt.
- Hỏi nhanh: "Hôm nay mình sẽ làm quen một ngôi nhà mới để lập trình — các em có đoán được tên không?" (gợi mở Scratch).

#### Kiến thức mới (20 phút)

| Từ | Nghĩa |
|----|--------|
| **Lập trình** | Ra lệnh cho máy tính làm từng việc theo thứ tự |
| **Stage** | Sân khấu — nơi nhân vật biểu diễn |
| **Sprite** | Nhân vật trên sân khấu |
| **Backdrop** | Phông nền phía sau |
| **Khối lệnh** | Mảnh lego — ghép lại thành chương trình |
| **Cờ xanh** | Nút "Bắt đầu!" |

**Ẩn dụ:** Scratch giống sân khấu kịch — Sprite là diễn viên, khối lệnh là kịch bản, cờ xanh là hiệu lệnh mở màn!

**Vì sao quan trọng?** Đây là "bộ từ vựng gốc" của cả khóa học — mọi buổi sau đều nhắc lại Stage, Sprite, Backdrop, khối lệnh. Nhớ chắc 6 từ này ngay từ buổi đầu giúp em không bị "lạc" ở các buổi tiếp theo, giống như học tên các quân cờ trước khi chơi cờ vua.

#### Ví dụ mẫu 1 — Mèo di chuyển

1. Mở [scratch.mit.edu](https://scratch.mit.edu) → **Create** (Tạo).
2. Kéo khối **Events** → `when green flag clicked`.
3. Gắn khối **Motion** → `move 10 steps` (lặp 3 lần).
4. Bấm **cờ xanh** → mèo đi!

#### Ví dụ mẫu 2 — Mèo chào rồi mới đi

1. `when green flag clicked`
2. `say` "Xin chào, em!" `for 1 seconds` (Looks)
3. `move 10 steps` (lặp 3 lần, Motion)
4. Bấm **cờ xanh** → mèo chào trước, rồi mới bước đi!

*(Cùng là "cờ xanh + move", nhưng ví dụ 2 cho thấy em có thể thêm khối `say` phía trước — thứ tự khối quyết định chuyện gì xảy ra trước!)*

#### Em đoán xem?

Nếu em gắn khối `move 10 steps` **5 lần liên tiếp** sau `when green flag clicked`, em đoán mèo sẽ đi được tổng cộng bao nhiêu bước? Ghi số em đoán ra giấy nháp, rồi thử ngay trên Scratch xem mình đoán đúng không!

#### Thực hành 1 (TH1) — (15 phút) "Mèo chào em"

**Mô tả:** Đến lượt em làm "người lập trình" thật sự — cho mèo Scratch đi 30 bước khi em bấm cờ xanh, giống như em vừa ra lệnh cho bạn ở phần khởi động.

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

#### 🤸 Giải lao vận động (5 phút)

**Trò chơi "Sprite sống"**

- Cả lớp đứng dậy làm "sprite". Giáo viên hô lệnh, học sinh làm động tác tương ứng:
  - "Cờ xanh!" → cả lớp đứng thẳng, sẵn sàng.
  - "Move 10 steps!" → bước 1 bước lên phía trước.
  - "Turn!" → xoay người một vòng nhỏ tại chỗ.
  - "Hide!" → ngồi thụp xuống.
  - "Show!" → đứng bật dậy.
- Chơi 2–3 vòng, tăng dần tốc độ hô lệnh để tạo không khí vui, giúp em "vận động" cơ thể để cảm nhận khối lệnh chạy nối tiếp nhau.

#### Thực hành 2 (TH2) — (15 phút) "Đổi cảnh mới"

**Mô tả:** Bây giờ em tự trang trí "sân khấu" của riêng mình — đổi phông nền, đổi nhân vật và đặt tên riêng cho sprite để nó thật sự là "của em".

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

#### 🤝 Thử thách nhóm/sáng tạo (15 phút)

**"Đoán bạn chọn gì?"**

- Ghép cặp 2 bạn ngồi gần nhau. Mỗi bạn nhìn màn hình của bạn kia trong 5 giây rồi quay đi.
- Bạn còn lại đố: "Đoán xem sprite của mình tên gì, backdrop là cảnh gì?"
- Sau khi đoán xong, từng bạn giới thiệu 1 câu ngắn: "Sprite của mình tên … vì …".
- Giáo viên mời 1–2 cặp chia sẻ nhanh trước lớp để cả lớp cùng xem các lựa chọn sáng tạo khác nhau.

#### Mẹo nhỏ

- **Bấm cờ xanh không chạy?** → Kiểm tra đã có `when green flag clicked` chưa.
- **Khối không dính?** → Kéo sát khối phía trên, đợi nó "khớp" như lego.
- **Sprite không di chuyển?** → Thêm khối `move` sau khối Events.

#### 🎉 Tổng kết & Ôn tập trò chơi (10 phút)

**"Đố vui nhanh" — cả lớp giơ tay trả lời, chia 2 đội thi đua:**

1. Stage trong Scratch là gì?
2. Sprite là gì?
3. Cờ xanh dùng để làm gì?
4. Khối lệnh giống vật gì trong đời thực? (Gợi ý: lego / kịch bản)
5. Em cần khối Events nào để bắt đầu chương trình khi bấm cờ xanh?

Mỗi câu, đội nào giơ tay trước được trả lời — đúng ghi 1 điểm cho đội, tổng kết đội thắng cuối giờ.

- Mời 1–2 em xung phong chiếu màn hình, giới thiệu sprite/backdrop mình vừa đổi ở TH2.
- Hẹn gặp lại ở buổi Bài tập tuần này để làm Luyện tập 1, 2 và bài mở rộng!

#### 👩‍🏫 Ghi chú cho giáo viên

**Kịch bản demo nhanh (2–3 phút trước khi phát máy):**
- Mở Scratch, chỉ tay lần lượt vào Stage, Sprite (mèo), khu vực Block Palette, khu vực Script Area khi nhắc từng từ vựng.
- Kéo mẫu `when green flag clicked` + `move 10 steps` × 3, bấm cờ xanh, hỏi cả lớp: "Mèo vừa đi bao nhiêu bước?" trước khi để các em tự làm TH1.

**Lỗi thường gặp (ngoài phần Mẹo nhỏ):**
- Học sinh kéo khối vào sai vùng (thả ra ngoài Script Area) khiến khối "biến mất" — nhắc kéo và thả hẳn vào vùng làm việc màu trắng.
- Học sinh nhầm số lần lặp khối `move` (kéo 1 khối `move 30 steps` thay vì 3 khối `move 10 steps`) — cả hai cách đều đúng, không cần sửa nếu các em tự nghĩ ra.
- Một số em bấm trực tiếp vào khối lệnh thay vì cờ xanh — vẫn chạy được, giải thích đây là cách "chạy thử nhanh" khi debug.

**Quản lý lớp học:**
- Khởi động: hô lệnh dứt khoát, tạm dừng 1–2 giây giữa các lệnh để mọi em theo kịp; học sinh nhút nhát có thể làm theo bạn bên cạnh.
- Giải lao vận động: đứng ở vị trí quan sát được cả lớp, tăng tốc dần để tạo hứng thú nhưng dừng lại nếu lớp quá ồn.
- Thử thách nhóm: đi vòng quanh lớp trong lúc các cặp đoán, hỗ trợ cặp nào gặp khó khăn khi ghép cặp hoặc thiếu tự tin chia sẻ.

---

### Buổi 2 — Bài tập: Khám phá Scratch

#### 🎬 Khởi động ôn tập (10 phút)

**"Đúng hay Sai?"** — Giáo viên đọc từng câu, học sinh giơ ngón cái lên (Đúng) hoặc xuống (Sai):
1. "Stage là nhân vật trên sân khấu." (Sai — Stage là sân khấu, Sprite mới là nhân vật)
2. "Cờ xanh dùng để bắt đầu chương trình." (Đúng)
3. "Backdrop là phông nền phía sau." (Đúng)
4. "Lưu project xong thì không mở lại được nữa." (Sai)
5. "Khối lệnh giống như mảnh lego, ghép lại thành chương trình." (Đúng)

#### Ôn nhanh

- **Stage** = sân khấu | **Sprite** = nhân vật | **Backdrop** = phông nền
- **Cờ xanh** = bắt đầu chương trình
- **Lưu project** = File → Save to your computer

#### ✍️ Luyện tập 1, 2 (LT1/LT2) (15–20 phút)

Đầu buổi, em làm tại lớp có hướng dẫn hai bài luyện tập ngắn, nối tiếp buổi Học tuần trước — không phải chữa bài tập về nhà, mà là luyện lại ngay tại lớp có giáo viên hỗ trợ.

*Gợi ý:* Em có thể đổi máy với bạn bên cạnh trong 2 phút để cùng kiểm tra checklist của nhau — nếu phát hiện thiếu bước nào, nhắc bạn bổ sung.

#### Luyện tập 1 (LT1) — "Lưu project đầu tiên"

**Mô tả:** Ngay đầu buổi, em luyện lưu project Scratch về máy với tên của em, có giáo viên hướng dẫn tại chỗ.

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

#### Luyện tập 2 (LT2) — "Mèo quay vòng"

**Mô tả:** Em luyện cho mèo đi 50 bước rồi quay một vòng tròn (360°) — làm ngay tại lớp, có khó khăn gì cứ hỏi giáo viên.

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

| Lỗi thường gặp | Em thử |
|----------------|--------|
| Không tìm thấy file | Tìm trong Desktop / Downloads |
| Quay chưa tròn | Thêm `turn` hoặc tăng số lần lặp |
| Không chạy | Kiểm tra `when green flag clicked` |

#### 🎯 Giới thiệu bài mở rộng (10 phút)

Giáo viên demo nhanh **1 ví dụ mẫu** (ví dụ bài A1 "Phòng của em") trên máy chiếu — chỉ rõ cách đổi backdrop, chọn sprite, lưu project — trước khi học sinh tự chọn mức bài cho mình.

Em chọn **1 mức** A, B hoặc C, rồi chọn **1 trong 2 bài** của mức đó. Làm hết checklist trước khi đổi bài.

| Mức | Khi nào chọn |
|-----|--------------|
| **A1 hoặc A2** | Em muốn làm chắc: đổi cảnh, sprite, lưu file |
| **B1 hoặc B2** | Em muốn kết hợp di chuyển + nói chuyện qua backdrop |
| **C1 hoặc C2** | Em muốn sáng tạo giới thiệu bản thân |

#### ✍️ Làm bài mở rộng (30–35 phút)

#### Bài A1 — Cơ bản: "Phòng của em"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Đây là căn phòng riêng của em trong Scratch — hãy trang trí nó với một nhân vật em thích nhất |
| **Yêu cầu bắt buộc** | (1) Đổi backdrop phòng (2) Chọn sprite (3) Đặt tên sprite (4) Lưu project |
| **Gợi ý bước** | Backdrop → Bedroom; Sprite → nhân vật yêu thích; đặt tên; File → Save |
| **Checklist** | Backdrop đổi / Sprite đổi / Có tên / Đã lưu `.sb3` |
| **Thử thêm** | Thêm 1 sprite phụ (đồ vật: cây, bóng đèn…), đặt vị trí hợp lý trong phòng, và cho sprite phụ đó `say` một câu mô tả căn phòng |

#### Bài A2 — Cơ bản: "Thư viện nhân vật"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Em mở một "thư viện nhân vật" nhỏ — xếp 3 sprite khác nhau đứng cạnh nhau trên cùng một backdrop, như một buổi triển lãm |
| **Yêu cầu bắt buộc** | (1) Thêm 3 sprite (2) Mỗi sprite có tên riêng (3) Đặt vị trí khác nhau (4) Lưu project |
| **Gợi ý bước** | Chọn sprite 1 → đặt tên → `go to` vị trí trái; lặp cho sprite 2 (giữa), sprite 3 (phải) |
| **Checklist** | 3 sprite / 3 tên riêng / Vị trí khác nhau / Đã lưu `.sb3` |
| **Thử thêm** | Mỗi sprite `say` tên mình khi cờ xanh, sắp xếp thứ tự nói lần lượt bằng `wait` để không bị chồng chéo lời thoại |

#### Bài B1 — Trung bình: "Chuyến tham quan"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Nhân vật của em làm một "chuyến tham quan" qua 3 địa điểm khác nhau, chào hỏi ở mỗi nơi ghé qua |
| **Yêu cầu bắt buộc** | (1) 3 backdrop (2) Sprite di chuyển khi cờ xanh (3) `say` lời chào mỗi cảnh |
| **Gợi ý bước** | `when green flag clicked` → `switch backdrop to` hoặc `next backdrop` → `move` → `say` "Xin chào!" → `wait 1 seconds` — lặp cho 3 cảnh |
| **Checklist** | 3 backdrop / Có `move` / Có `say` / Chạy được |
| **Thử thêm** | Thêm `glide` thay vì `move` giữa các cảnh, và đặt tên riêng cho mỗi địa điểm bằng một câu `say` giới thiệu tên cảnh trước khi chào |

#### Bài B2 — Trung bình: "Hành trình 2 cảnh"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Nhân vật đi qua 2 bối cảnh trong một hành trình ngắn, mỗi cảnh có một lời chào riêng |
| **Yêu cầu bắt buộc** | (1) 2 backdrop (2) `move` hoặc `glide` (3) `say` ở mỗi cảnh (4) `wait` giữa các cảnh |
| **Gợi ý bước** | Cảnh 1: backdrop 1 → `move` → `say` "Xin chào!" → `wait 1` → `switch backdrop to` cảnh 2 → `say` "Đến nơi rồi!" |
| **Checklist** | 2 backdrop / Có di chuyển / 2 câu `say` / Chạy được |
| **Thử thêm** | Thêm `turn` trước khi đổi cảnh, và thêm 1 sprite phụ chỉ xuất hiện ở cảnh thứ hai để chào đón nhân vật chính |

#### Bài C1 — Thử thách: "Poster Scratch đầu tay"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Em tạo một tấm poster sống động giới thiệu bản thân bằng Scratch, có thể chuyển động và nói chuyện |
| **Yêu cầu bắt buộc** | (1) Backdrop tự chọn (2) Sprite tự chọn (3) Ít nhất 3 khối lệnh (4) `say` tên + 1 sở thích |
| **Gợi ý bước** | Kết hợp `move`, `turn`, `say` theo ý thích; ví dụ: `say` "Em tên Minh, em thích bóng đá!" |
| **Checklist** | 3+ khối / Có lời giới thiệu / Sáng tạo riêng |
| **Thử thêm** | Thêm sprite thứ 2 là "bạn thân" cùng xuất hiện và `say` một câu về tình bạn, xếp thời gian nói xen kẽ bằng `wait` |

#### Bài C2 — Thử thách: "Thẻ danh thiếp"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Sprite của em trở thành "MC" tự giới thiệu qua một tấm thẻ danh thiếp ảo — tên, tuổi, sở thích, lần lượt từng dòng |
| **Yêu cầu bắt buộc** | (1) `say` tên (2) `say` tuổi hoặc lớp (3) `say` 1 sở thích (4) Có `wait` giữa các câu |
| **Gợi ý bước** | `when green flag clicked` → `say` "Em tên…" → `wait 2` → `say` "Em 9 tuổi" → `wait 2` → `say` "Em thích vẽ!" |
| **Checklist** | 3 thông tin / Có `wait` / Backdrop đẹp / Sáng tạo riêng |
| **Thử thêm** | Thêm `switch costume` khi nói từng dòng, và thêm 1 câu `say` kết thúc kiểu "Rất vui được làm quen với các bạn!" |

#### 🖼️ Showcase (10 phút)

"Gallery walk" — em để project đang mở trên máy, cả lớp đứng dậy đi vòng quanh xem project của 3–4 bạn gần nhất trong 1–2 phút, sau đó quay về chỗ. Giáo viên mời 2–3 em xung phong trình chiếu project của mình trước lớp.

#### ✅ Tổng kết (5 phút)

Nhắc lại: hôm nay em đã ôn Stage/Sprite/Backdrop và luyện thêm với các bài mở rộng. Buổi sau (**Buổi 3 — Di chuyển & Tọa độ**) em sẽ học cách điều khiển sprite di chuyển chính xác hơn bằng tọa độ X-Y.

---

## Tuần 2 — Di chuyển & Tọa độ

### Buổi 3 — Học: Di chuyển & Tọa độ

#### Hôm nay em học gì?

Em điều khiển sprite **di chuyển chính xác hơn** bằng `move`, `turn`, tọa độ **X-Y**, `go to` và `glide`.

#### 🎬 Khởi động (10 phút)

**Trò chơi "Bản đồ kho báu"**

- Vẽ nhanh (hoặc tưởng tượng) một lưới ô vuông trên sàn lớp/bảng. Hỏi cả lớp: "Buổi trước mình đã cho mèo đi được bao nhiêu bước rồi? Nhưng nếu muốn mèo đến CHÍNH XÁC một điểm trên bản đồ, chỉ dùng `move` có đủ không?"
- Gọi 2–3 em lên "làm sprite": đứng ở một điểm mốc, giáo viên nói chỉ dẫn đơn giản kiểu "tiến 2 ô, sang phải 1 ô" — cả lớp đoán xem bạn sẽ dừng ở đâu.
- Dẫn vào bài: hôm nay Scratch cũng có một "bản đồ" như vậy, gọi là tọa độ X-Y, giúp sprite đến đúng vị trí mình muốn.

#### Kiến thức mới (20 phút)

- **Tọa độ X-Y:** Stage có trục ngang (X) và dọc (Y). Giữa màn hình là (0, 0).
- **`move 10 steps`:** Đi thẳng theo hướng sprite đang nhìn.
- **`turn 90 degrees`:** Quay 90° (góc vuông).
- **`go to x: _ y: _`:** Nhảy đến vị trí cụ thể.
- **`glide 1 secs to x: _ y: _`:** Trượt mượt đến vị trí.

**Mẹo:** Di chuột trên Stage — em thấy số X, Y ở dưới giúp biết vị trí!

**Vì sao quan trọng?** `move`/`turn` chỉ giúp sprite đi theo hướng đang nhìn — rất khó điều khiển khi cần đến đúng một điểm. Tọa độ X-Y giống như "địa chỉ nhà" của mỗi vị trí trên Stage: biết tọa độ, sprite luôn đến đúng chỗ dù đang đứng ở đâu. Đây là nền tảng để sau này em làm game (nhân vật, vật phẩm, quái vật đều cần "địa chỉ" chính xác).

#### Ví dụ mẫu 1 — Đi đến góc màn hình

1. `when green flag clicked`
2. `go to x: (-150) y: (0)` — sang trái
3. `wait 0.5 seconds`
4. `go to x: (150) y: (0)` — sang phải

#### Ví dụ mẫu 2 — So sánh `go to` và `glide`

1. `when green flag clicked`
2. `go to x: (-150) y: (0)` — sprite "nhảy" tức thì sang trái, không thấy đường đi
3. `wait 1 seconds`
4. `glide 1 secs to x: (150) y: (0)` — sprite **trượt mượt** sang phải trong 1 giây, thấy rõ đường đi

*(Cùng đến một điểm, nhưng `go to` là "dịch chuyển tức thời", còn `glide` là "trượt có thời gian" — chọn khối nào tùy hiệu ứng em muốn!)*

#### Em đoán xem?

Nếu sprite đang ở tọa độ (0, 0) và em dùng khối `go to x: (100) y: (-50)`, em đoán sprite sẽ di chuyển sang **bên nào** (trái/phải) và **lên hay xuống**? Đoán trước, rồi thử trên Scratch để kiểm tra!

#### Thực hành 1 (TH1) — (15 phút) "Đi thẳng 50 bước"

**Mô tả:** Luyện phối hợp `move` và `turn` — cho sprite đi thẳng 50 bước, quay 90° sang phải, rồi đi thêm 30 bước, giống như đi theo một con đường có khúc rẽ.

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

#### 🤸 Giải lao vận động (5 phút)

**Trò chơi "Tọa độ cơ thể"**

- Quy ước 4 góc lớp học tương ứng 4 góc Stage: trái-trên = (-150, 100), phải-trên = (150, 100), trái-dưới = (-150, -100), phải-dưới = (150, -100), giữa lớp = (0, 0).
- Giáo viên hô tọa độ (ví dụ "Đi đến (150, 100)!"), học sinh chạy nhanh đến đúng góc tương ứng.
- Ai đến sai góc thì tạm dừng 1 lượt — chơi vài vòng cho vui, giúp em nhớ trục X ngang, trục Y dọc.

#### Thực hành 2 (TH2) — (15 phút) "Đi qua 3 điểm"

**Mô tả:** Bây giờ em thử làm "GPS" cho sprite — dùng `go to` đưa sprite đi lần lượt qua 3 vị trí trên Stage như đi qua 3 điểm trên bản đồ.

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

#### 🤝 Thử thách nhóm/sáng tạo (15 phút)

**"Đố tọa độ cùng bạn"**

- Ghép cặp 2 bạn. Bạn A nhìn 3 tọa độ bạn B vừa dùng ở TH2 (không xem project chạy), rồi thử đoán: "Sprite sẽ đi lên hay xuống ở điểm thứ 2?"
- Bạn B bấm cờ xanh để kiểm tra xem bạn A đoán đúng không.
- Đổi vai, thử với project của bạn A.
- Khuyến khích: nếu còn thời gian, mỗi cặp thêm 1 tọa độ "bí mật" thứ 4 và đố cặp bên cạnh đoán.

#### Mẹo nhỏ

- Sprite đi **sai hướng**? → Thêm `point in direction 90` (hoặc 0, 180, -90) trước `move`.
- `go to` quá nhanh? → Dùng `glide` thay `go to`.

#### 🎉 Tổng kết & Ôn tập trò chơi (10 phút)

**"Trạm tiếp sức trả lời"** — chia lớp 2 đội, mỗi đội cử đại diện trả lời nhanh 1 câu rồi đổi người:

1. Trục X nằm ngang hay dọc?
2. `go to` và `glide` khác nhau thế nào?
3. Quay 90° một lần, sprite quay bao nhiêu độ?
4. Làm sao biết tọa độ vị trí chuột trên Stage?
5. Em cần khối nào để sprite nhảy thẳng đến điểm (100, 50)?

Đội trả lời đúng nhanh nhất mỗi câu được 1 điểm — tổng kết đội thắng cuối giờ.

- Mời 1–2 em chia sẻ project TH2 "đi qua 3 điểm" của mình.
- Hẹn gặp lại ở buổi Bài tập tuần này để làm Luyện tập 1, 2 và bài mở rộng!

#### 👩‍🏫 Ghi chú cho giáo viên

**Kịch bản demo nhanh:**
- Trước Kiến thức mới, mở Scratch, di chuột khắp Stage để cả lớp thấy số X, Y đổi ở góc dưới màn hình — cho vài em xung phong đọc to tọa độ chuột đang ở.
- Demo trực tiếp Ví dụ mẫu 2 (so sánh `go to` và `glide`) chạy 2 lần liên tiếp để học sinh thấy rõ khác biệt bằng mắt.

**Lỗi thường gặp (ngoài phần Mẹo nhỏ):**
- Học sinh nhầm dấu âm/dương của tọa độ (ví dụ nghĩ x: -100 là "bên phải") — dùng lại trò khởi động "Bản đồ kho báu" để nhắc lại quy ước trái/phải, trên/dưới.
- Gõ nhầm số trong ô `go to x: _ y: _` (thiếu dấu trừ) khiến sprite bay ra ngoài Stage — hướng dẫn em bấm vào ô số, xóa và gõ lại cẩn thận.
- Nhầm lẫn khi `turn 90 degrees` làm 4 lần: nghĩ là quay lại vị trí cũ nhưng thực chất là quay hẳn 360° — có thể minh họa nhanh bằng cách tự xoay người 4 lần 90°.

**Quản lý lớp học:**
- Trò "Tọa độ cơ thể" dễ gây ồn khi học sinh chạy — quy định rõ "đi nhanh" chứ không chạy, dừng ngay khi nghe hiệu lệnh "Dừng!".
- Trong thử thách nhóm, đi vòng nhắc các cặp đổi vai đúng lúc (khoảng giữa 15 phút) để cả hai bạn đều được đoán và được kiểm tra.

---

### Buổi 4 — Bài tập: Luyện Motion

#### 🎬 Khởi động ôn tập (10 phút)

**"Nhanh tay nhanh mắt"** — giáo viên đọc 1 câu hỏi, học sinh giơ tay trả lời nhanh:
- "Tọa độ (0, 0) nằm ở đâu trên Stage?" (giữa màn hình)
- "Muốn sprite đi mượt đến 1 điểm, dùng `go to` hay `glide`?" (glide)
- "Quay 90 độ là quay bao nhiêu phần của một vòng tròn?" (1/4 vòng)
- "Trục nào là trục ngang, X hay Y?" (X)

#### Ôn nhanh

- `move` = đi thẳng | `turn` = quay
- `go to` = nhảy đến điểm | `glide` = trượt đến điểm
- Tọa độ X (ngang), Y (dọc) — giữa Stage là (0, 0)

#### ✍️ Luyện tập 1, 2 (LT1/LT2) (15–20 phút)

Đầu buổi, em làm tại lớp có hướng dẫn hai bài luyện tập ngắn, nối tiếp buổi Học tuần trước — không phải chữa bài tập về nhà, mà là luyện lại ngay tại lớp có giáo viên hỗ trợ.

*Gợi ý:* Đổi máy với bạn bên cạnh 2 phút để cùng kiểm tra checklist của nhau, góp ý nếu góc quay chưa đúng 90° hoặc sprite "nhảy cóc".

#### Luyện tập 1 (LT1) — "Vẽ chữ L"

**Mô tả:** Em dùng `move` và `turn` vẽ đường đi hình chữ **L**, làm ngay tại lớp.

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

#### Luyện tập 2 (LT2) — "Trượt qua 3 vị trí"

**Mô tả:** Em dùng `glide` đưa sprite qua 3 điểm mượt mà, làm ngay tại lớp có giáo viên hỗ trợ.

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

#### 🎯 Giới thiệu bài mở rộng (10 phút)

Giáo viên demo nhanh 1 ví dụ (ví dụ bài A1 "🚚 Rô-bốt giao hàng") ngay trên máy chiếu, chỉ rõ cách đếm số lần `move`/`turn` cần dùng, trước khi học sinh chọn mức bài phù hợp với mình.

Em chọn **1 mức** A, B hoặc C, rồi chọn **1 trong 2 bài** của mức đó.

| Mức | Khi nào chọn |
|-----|--------------|
| **A1 hoặc A2** | Em luyện `move` + `turn` — 🚚 Rô-bốt giao hàng / 🛡️ Lính canh tuần tra |
| **B1 hoặc B2** | Em luyện `go to` / `glide` đến điểm cụ thể — ⭐ Thu thập ngôi sao / 🏁 Về đích |
| **C1 hoặc C2** | Em thử thách đường đi phức tạp hơn — 🗝️ Giải cứu mê cung / 💨 Né chướng ngại vật |

#### ✍️ Làm bài mở rộng (30–35 phút)

#### Bài A1 — Cơ bản: "🚚 Rô-bốt giao hàng"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Một rô-bốt giao hàng nhận nhiệm vụ: đi 100 bước trên phố chính, rẽ vuông góc (90°) vào một con hẻm, rồi đi tiếp 50 bước để tới đúng nhà khách hàng |
| **Yêu cầu bắt buộc** | `move` 100 bước + `turn 90` + `move` 50 bước |
| **Gợi ý bước** | Dùng `move 10` × 10, rồi turn, rồi `move 10` × 5 |
| **Checklist** | 100 bước / Quay 90° / 50 bước tiếp |
| **Thử thêm** | Thêm `pen down` (Pen extension) để vẽ đường giao hàng, và thêm `say` "Đã giao hàng!" khi đến nơi |

#### Bài A2 — Cơ bản: "🛡️ Lính canh tuần tra"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Lính canh đi tuần một vòng vuông quanh căn cứ để bảo vệ, không được bỏ sót cạnh nào — dùng `move` và `turn 90 degrees` |
| **Yêu cầu bắt buộc** | 4 cạnh bằng nhau; 4 lần `turn 90 degrees` |
| **Gợi ý bước** | `move 50` → `turn 90` → lặp 4 lần (hoặc `repeat 4`) |
| **Checklist** | 4 cạnh / 4 lần quay 90° / Hình đóng kín / Chạy khi cờ xanh |
| **Thử thêm** | Dùng Pen extension để thấy hình vuông, và thêm `say` "Đang tuần tra…" trong lúc đi |

#### Bài B1 — Trung bình: "⭐ Thu thập ngôi sao"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Phi thuyền bay lần lượt tới 5 ngôi sao rải rác trong không gian để ghi điểm — dùng `go to` |
| **Yêu cầu bắt buộc** | 5 lần `go to` hoặc `glide`; có `wait` giữa các điểm |
| **Gợi ý bước** | Điểm: (-150,100) → (-50,-50) → (50,100) → (150,-50) → (0,0) |
| **Checklist** | 5 điểm / Có wait / Chạy khi cờ xanh |
| **Thử thêm** | Mỗi ngôi sao sprite `say` "Đã đến!", và đếm tổng số ngôi sao bằng câu `say` "Đã thu thập X sao!" ở điểm cuối |

#### Bài B2 — Trung bình: "🏁 Về đích!"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Vận động viên trượt (`glide`) thật mượt từ vạch xuất phát về đích rồi hô vang chiến thắng trước khán giả |
| **Yêu cầu bắt buộc** | (1) `glide` đến tọa độ đích (2) `say` khi đến (3) Có cờ xanh bắt đầu |
| **Gợi ý bước** | `when green flag clicked` → `glide 2 secs to x: (100) y: (80)` → `say` "Đến rồi!" `for 2 seconds` |
| **Checklist** | Có `glide` / Có `say` / Đích rõ ràng / Chạy được |
| **Thử thêm** | Thêm điểm xuất phát và điểm đích khác nhau, và thêm 1 mốc giữa đường bằng `glide` thứ hai trước khi về đích |

#### Bài C1 — Thử thách: "🗝️ Giải cứu khỏi mê cung"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Dò đường qua mê cung 6 ô để tìm lối thoát trước khi hết giờ — **không được đi chéo** kẻo lạc đường |
| **Yêu cầu bắt buộc** | 6 lần `glide`; chỉ đi ngang hoặc dọc từng ô |
| **Gợi ý bước** | Tưởng tượng lưới 3×2; đi từ góc trái dưới → phải → phải → lên → lên → phải |
| **Checklist** | 6 ô / Không chéo / Dùng `glide` |
| **Thử thêm** | Vẽ lưới bằng Pen trước khi đi, và thêm `say` "Tìm thấy lối ra!" ở ô cuối cùng |

#### Bài C2 — Thử thách: "💨 Né chướng ngại vật"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Né chướng ngại vật bằng cách lượn zigzag qua 6 đoạn đường liên tiếp — 6 đoạn `move` và `turn` xen kẽ |
| **Yêu cầu bắt buộc** | 6 đoạn; mỗi đoạn quay góc (ví dụ 60° hoặc 120°) |
| **Gợi ý bước** | `move 40` → `turn 60` → `move 40` → `turn -60` — lặp 3 lần |
| **Checklist** | 6 đoạn / Có `turn` xen kẽ / Đường zigzag rõ / Chạy được |
| **Thử thêm** | Đổi góc quay để zigzag khác nhau, và thêm Pen extension để vẽ lại đường zigzag vừa đi |

#### 🖼️ Showcase (10 phút)

Gallery walk: học sinh để project chạy trên màn hình, cả lớp đi vòng quanh xem 3–4 project gần nhất, đặc biệt chú ý các bài mức C xem bạn giải mê cung/né chướng ngại vật thế nào. Mời 2–3 em xung phong trình chiếu trước lớp.

#### ✅ Tổng kết (5 phút)

Nhắc lại: hôm nay em đã luyện thành thạo `move`, `turn`, `go to`, `glide` qua nhiều tình huống khác nhau. Buổi sau (**Buổi 5 — Hoạt hình & Chuỗi lệnh**) em sẽ học cách làm nhân vật chuyển động như hoạt hình và biết nói chuyện.

---

## Tuần 3 — Hoạt hình & Chuỗi lệnh

### Buổi 5 — Học: Hoạt hình & Chuỗi lệnh

#### Hôm nay em học gì?

Em tạo **hoạt hình** bằng chuỗi lệnh tuần tự, `wait`, đổi **costume** và cho sprite **nói chuyện**.

#### 🎬 Khởi động (10 phút)

**Trò chơi "Diễn hoạt hình sống"**

- Cả lớp đứng dậy. Giáo viên hô liên tiếp 3 "dáng" theo đúng thứ tự và một nhịp đều (ví dụ: "Dáng 1: giơ tay!" → "Dáng 2: cúi người!" → "Dáng 3: nhảy lên!"), lặp lại 2 vòng cho quen nhịp.
- Hỏi cả lớp: "Nếu cô đổi thứ tự 3 dáng này, các em nhìn có còn giống điệu nhảy cũ không?" → dẫn vào khái niệm: hoạt hình chính là nhiều "costume" (dáng) nối tiếp nhau đúng thứ tự — đổi liên tục tạo cảm giác chuyển động.
- Nhắc lại buổi trước (Buổi 4): mình đã cho sprite di chuyển bằng `move`/`turn`/`glide` — hôm nay mình học cách làm sprite "diễn" chứ không chỉ di chuyển.

#### Kiến thức mới (20 phút)

- **Chuỗi lệnh:** Máy chạy từ **trên xuống dưới**, từng khối một.
- **`wait 1 seconds`:** Dừng 1 giây (Control).
- **`switch costume to`:** Đổi trang phục / hình nhân vật (Looks).
- **`say` / `think`:** Nói hoặc suy nghĩ (bong bóng thoại).
- **`show` / `hide`:** Hiện / ẩn sprite.

**Vì sao quan trọng?** Hoạt hình là thứ khiến nhân vật Scratch trông "sống động" thay vì đứng im — gần như mọi game và câu chuyện em làm sau này đều cần đổi costume, `say`, `wait` đúng nhịp để tạo cảm xúc cho nhân vật.

#### Ví dụ mẫu 1 — Nhảy và nói

1. `when green flag clicked`
2. `switch costume to costume2`
3. `say` "Nhảy nào!" `for 1 seconds`
4. `wait 0.5 seconds`
5. `switch costume to costume1`

#### Ví dụ mẫu 2 — Nói thầm rồi biến mất

1. `when green flag clicked`
2. `think` "Mình sẽ biến mất nhé…" `for 1 seconds`
3. `wait 0.5 seconds`
4. `hide`

*(Cùng dùng `wait` để tạo nhịp, nhưng ví dụ 2 dùng `think` thay vì `say`, và thêm `hide` — Looks có nhiều khối khác nhau để tạo cảm xúc cho nhân vật!)*

#### Em đoán xem?

Nếu sprite dùng khối `hide` mà không có `show` ở sau, khi em bấm cờ xanh chạy lại lần 2, em đoán sprite có tự xuất hiện lại không? Đoán trước, rồi thử ngay trên Scratch để kiểm tra!

#### Thực hành 1 (TH1) — (15 phút) "Nhảy 3 bước"

**Mô tả:** Em tự làm "đạo diễn hoạt hình" — đổi costume 3 lần + `wait` tạo hiệu ứng nhảy cho nhân vật.

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

#### 🤸 Giải lao vận động (5 phút)

**Trò chơi "Costume sống"**

- Cả lớp đứng dậy. Giáo viên hô "Costume 1!" → cả lớp làm dáng A; "Costume 2!" → dáng B; "Costume 3!" → dáng C; "Wait!" → đứng im tuyệt đối 1 giây.
- Tăng dần tốc độ đổi dáng để cả lớp cảm nhận rõ: đổi dáng càng nhanh, càng giống hoạt hình mượt.

#### Thực hành 2 (TH2) — (15 phút) "Câu chuyện 2 cảnh"

**Mô tả:** Bây giờ em kể một câu chuyện ngắn của riêng mình — 2 cảnh, mỗi cảnh đổi costume + `say` 1 câu.

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

#### 🤝 Thử thách nhóm/sáng tạo (15 phút)

**"Nối tiếp câu chuyện của bạn"**

- Ghép cặp 2 bạn. Bạn A cho bạn B xem 2 câu `say` trong câu chuyện của mình ở TH2.
- Bạn B đoán và nói to 1 câu `say` thứ 3 có thể tiếp nối câu chuyện đó một cách hợp lý (hoặc hài hước).
- Nếu thích, bạn A có thể thêm luôn câu đó vào project của mình.
- Đổi vai, thử với câu chuyện của bạn B. Giáo viên mời 1–2 cặp kể lại câu chuyện đã "nối" trước lớp.

#### Mẹo nhỏ

- Nói quá nhanh? → Tăng thời gian trong `say … for 2 seconds` hoặc thêm `wait`.
- Costume không đổi? → Kiểm tra sprite có nhiều hơn 1 costume trong tab Costumes.

#### 🎉 Tổng kết & Ôn tập trò chơi (10 phút)

**"Giơ tay trả lời nhanh" — chia lớp 2 đội thi đua:**

1. Scratch chạy khối lệnh theo thứ tự nào?
2. `wait` dùng để làm gì?
3. `say` và `think` khác nhau thế nào?
4. Làm sao đổi trang phục nhân vật?
5. Em muốn sprite ẩn đi — dùng khối gì?

Mỗi câu, đội nào giơ tay trước được trả lời — đúng ghi 1 điểm, tổng kết đội thắng cuối giờ.

- Mời 1–2 em chiếu màn hình kể lại câu chuyện 2 cảnh của mình ở TH2.
- Hẹn gặp lại ở buổi Bài tập tuần này để làm Luyện tập 1, 2 và bài mở rộng!

#### 👩‍🏫 Ghi chú cho giáo viên

**Kịch bản demo nhanh:**
- Demo trực tiếp Ví dụ mẫu 1 rồi Ví dụ mẫu 2 liên tiếp, hỏi cả lớp phân biệt `say` và `think` bằng hình dạng bong bóng thoại khác nhau trên Stage.
- Trước TH1, nhắc học sinh mở tab **Costumes** để chắc chắn sprite có ít nhất 2–3 costume khác nhau.

**Lỗi thường gặp (ngoài phần Mẹo nhỏ):**
- Học sinh dùng `next costume` liên tục quá nhanh (không có `wait`) khiến hoạt hình "nhảy cóc", mắt không kịp thấy — nhắc thêm `wait 0.3` giữa mỗi lần đổi.
- Nhầm giữa đổi **backdrop** và đổi **costume** khi kể chuyện nhiều cảnh — nhắc costume là "trang phục của nhân vật", backdrop là "cảnh nền phía sau".
- Quên `show` sau khi dùng `hide`, khiến sprite biến mất vĩnh viễn ở các lần chạy sau — đây cũng là đáp án cho "Em đoán xem?".

**Quản lý lớp học:**
- Trò "Diễn hoạt hình sống" và "Costume sống" dễ ồn — quy định rõ chỉ hô 1 lệnh mỗi lần và học sinh chỉ làm khi nghe đúng từ khoá.
- Thử thách nhóm: khuyến khích các cặp nói đủ to để nghe rõ câu chuyện của nhau, nhưng nhắc giữ âm lượng vừa phải để không ảnh hưởng cặp bên cạnh.

---

### Buổi 6 — Bài tập: Luyện Looks

#### 🎬 Khởi động ôn tập (10 phút)

**"Đúng hay Sai?"** — giáo viên đọc từng câu, học sinh giơ ngón cái lên (Đúng) hoặc xuống (Sai):
1. "Scratch chạy khối lệnh từ dưới lên trên." (Sai — chạy từ trên xuống)
2. "`wait` dùng để tạm dừng chương trình một khoảng thời gian." (Đúng)
3. "`say` và `think` là cùng một khối." (Sai — khác hình bong bóng thoại)
4. "`hide` làm sprite biến mất khỏi Stage." (Đúng)

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

#### ✍️ Luyện tập 1, 2 (LT1/LT2) (15–20 phút)

Em làm tại lớp có hướng dẫn hai bài luyện tập ngắn, nối tiếp buổi Học tuần trước — không phải chữa bài tập về nhà, mà là luyện lại ngay tại lớp có giáo viên hỗ trợ.

*Gợi ý:* Đổi máy với bạn bên cạnh 2 phút để cùng kiểm tra checklist của nhau trước khi giáo viên hỏi cả lớp.

#### Luyện tập 1 (LT1) — "Nhảy 5 lần"

**Mô tả:** Em luyện lặp đổi costume + `wait` để nhảy **5 lần**, làm ngay tại lớp.

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

#### Luyện tập 2 (LT2) — "Câu chuyện 3 cảnh"

**Mô tả:** Em luyện kể chuyện **3 cảnh**, mỗi cảnh có `say` ít nhất 1 câu — làm ngay tại lớp, có khó khăn gì cứ hỏi giáo viên.

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

#### 🎯 Giới thiệu bài mở rộng (10 phút)

Giáo viên demo nhanh **1 ví dụ mẫu** (ví dụ bài A1 "Nhảy 3 bước (nâng cao)") trên máy chiếu — chỉ rõ cách thêm `play drum` vào hoạt hình nhảy — trước khi học sinh tự chọn mức bài cho mình.

Em chọn **1 mức** A, B hoặc C, rồi chọn **1 trong 2 bài** của mức đó.

| Mức | Khi nào chọn |
|-----|--------------|
| **A1 hoặc A2** | Em luyện costume + `wait` + **trống theo nhịp** |
| **B1 hoặc B2** | Em kể chuyện nhiều cảnh + **nhạc / trống** |
| **C1 hoặc C2** | Em thêm hiệu ứng Looks + **âm thanh Music** |

#### ✍️ Làm bài mở rộng (30–35 phút)

#### Bài A1 — Cơ bản: "Nhảy 3 bước (nâng cao)"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Hoạt hình nhảy với 3 costume, có thêm tiếng trống Music đệm theo từng bước nhảy cho vui tai |
| **Yêu cầu bắt buộc** | 3 costume + `wait` + chạy khi cờ xanh |
| **Gợi ý bước** | `next costume` × 3 với `wait 0.4` giữa mỗi lần |
| **Checklist** | 3 costume / Có wait / Chạy được |
| **Thử thêm** | Thêm `play drum (1 Snare) for (0.25) beats` mỗi lần nhảy, và thử đổi sang loại trống khác (Bass Drum, Claves) để so sánh âm thanh |

#### Bài A2 — Cơ bản: "Nhịp điệu"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Đổi costume theo nhịp thật nhanh (0.2 giây) — như một vũ điệu disco có tiếng trống dẫn nhịp |
| **Yêu cầu bắt buộc** | `next costume` + `wait 0.2 seconds` lặp ít nhất 8 lần |
| **Gợi ý bước** | `when green flag clicked` → `repeat 8` → `next costume` → `play drum (4 Claves) for (0.2) beats` → `wait 0.2 seconds` |
| **Checklist** | Có `repeat` hoặc lặp tay / `wait 0.2` / ≥ 8 lần đổi / Nhịp đều |
| **Thử thêm** | Thử `set tempo to (180) bpm` hoặc `wait 0.5` để so sánh nhịp, và đổi loại trống giữa các vòng lặp để tạo tiết tấu phong phú hơn |

#### Bài B1 — Trung bình: "Câu chuyện 3 cảnh"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Một truyện ngắn 3 cảnh — mỗi cảnh đổi costume kèm 1 câu thoại, có nhạc mở màn cho không khí |
| **Yêu cầu bắt buộc** | 3 cảnh; 3 câu `say`; đổi backdrop hoặc costume mỗi cảnh |
| **Gợi ý bước** | Mở đầu → cao trào → kết thúc; mỗi cảnh `wait 2 seconds` |
| **Checklist** | 3 cảnh / 3 câu / Đổi hình hoặc nền |
| **Thử thêm** | `set instrument to (1 Piano)` + `play note` mở mỗi cảnh, và đổi nhạc cụ khác nhau cho từng cảnh để phân biệt không khí |

#### Bài B2 — Trung bình: "Kịch bản 4 cảnh"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Một kịch bản dài hơn — 4 cảnh, mỗi cảnh đổi backdrop hoặc costume kèm 1 câu thoại, như một vở kịch nhỏ |
| **Yêu cầu bắt buộc** | 4 cảnh; 4 câu `say`; có `wait` giữa cảnh |
| **Gợi ý bước** | Cảnh 1 mở đầu → `wait` → Cảnh 2 cao trào → `wait` → Cảnh 3 → Cảnh 4 kết |
| **Checklist** | 4 cảnh / 4 câu / Có đổi hình hoặc nền / Có `wait` |
| **Thử thêm** | `play drum (2 Bass Drum) for (0.5) beats` giữa các cảnh; thử `think` thay `say` ở 1 cảnh, và thêm 1 câu `say` kết luận ở cuối kịch bản |

#### Bài C1 — Thử thách: "Biến hình thần chú"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Nhân vật đọc một câu thần chú bí ẩn rồi biến hình thành phiên bản "phép thuật" của chính mình |
| **Yêu cầu bắt buộc** | `say` thần chú → `wait` → `switch costume` sang hình "biến hình" |
| **Gợi ý bước** | `say` "Biến hình!" → `play note (72) for (0.3) beats` → `wait 1` → costume đặc biệt → `say` "Ta là…!" |
| **Checklist** | Có thần chú / Có biến hình / Có kết |
| **Thử thêm** | 2–3 nốt tăng dần (60 → 64 → 67) trước khi biến, và cho nhân vật biến lại costume cũ sau 3 giây để hoàn thành một vòng "biến hình rồi trở lại" |

#### Bài C2 — Thử thách: "Câu chuyện ma vui"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Một câu chuyện ma hài hước: sprite biến mất bất ngờ rồi xuất hiện lại làm khán giả giật mình |
| **Yêu cầu bắt buộc** | (1) `hide` (2) `wait` (3) `show` (4) `say` câu bất ngờ |
| **Gợi ý bước** | `say` "Trong rừng tối…" → `hide` → `rest for (2) beats` → `show` → `play drum (1 Snare) for (0.5) beats` → `say` "Bù!" |
| **Checklist** | Có hide/show / Có wait hoặc rest / Có thoại / Gây bất ngờ vui |
| **Thử thêm** | Đổi loại trống (Snare, Bass Drum) để thử âm thanh khác nhau, và thêm 1 lần `hide`/`show` thứ hai để tạo bất ngờ liên tiếp |

#### 🎵 Thử thách thêm (không bắt buộc)

Nếu còn thời gian sau khi hoàn thành bài mở rộng, em có thể thử sáng tác một bài nhạc ngắn ngay tại lớp bằng các khối **Music** — hoàn toàn tự chọn, không bắt buộc.

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Em sáng tác một đoạn nhạc khoảng 30–60 giây, chỉ dùng extension Music |
| **Yêu cầu bắt buộc** | Extension Music; ≥ 1 `play note`; ≥ 1 `play drum`; có `set tempo to` |
| **Gợi ý bước** | 1. Thêm Music (+ góc dưới trái). 2. `set tempo to (120) bpm`. 3. `set instrument to (1 Piano)`. 4. Xếp chuỗi `play note` + `play drum` + `rest`. 5. Dùng `repeat` cho đoạn lặp. 6. Nghe thử và chỉnh sửa. |
| **Checklist** | Có Music / Có note + drum / Có tempo / Đã lưu project |
| **Thử thêm** | Đổi nhạc cụ giữa các đoạn; dùng `rest` tạo khoảng lặng |

#### 🖼️ Showcase (10 phút)

Gallery walk: học sinh để project chạy trên màn hình, cả lớp đi vòng quanh xem 3–4 project gần nhất — đặc biệt nghe thử các bạn có làm "Thử thách thêm" âm nhạc. Mời 2–3 em xung phong trình chiếu trước lớp.

#### ✅ Tổng kết (5 phút)

Nhắc lại: hôm nay em đã ôn Looks, luyện thêm với Music, và làm bài mở rộng theo mức mình chọn. Buổi sau (**Buổi 7 — Sự kiện & Điều khiển**) em sẽ học cách điều khiển sprite bằng phím và click chuột.

---

## Tuần 4 — Sự kiện & Điều khiển

### Buổi 7 — Học: Sự kiện & Điều khiển

#### Hôm nay em học gì?

Em điều khiển sprite bằng **phím** và **click chuột** — không chỉ bấm cờ xanh! Hôm nay em chính thức trở thành **"game thủ"** đầu tiên điều khiển nhân vật do chính mình lập trình.

#### 🎬 Khởi động (10 phút)

**Trò chơi "Điều khiển từ xa"**

- Quy ước: khi giáo viên hô "Mũi tên lên!" → học sinh nhảy lên 1 cái; "Mũi tên xuống!" → ngồi thụp; "Space!" → vỗ tay; "Click!" → giơ tay vẫy.
- Giáo viên hô ngẫu nhiên các lệnh, học sinh phản ứng thật nhanh — chơi vài vòng cho vui, tăng tốc dần.
- Dẫn vào bài: "Hôm nay Scratch cũng phản ứng y như vậy — mỗi khi em nhấn phím hoặc click, sprite sẽ làm một việc khác nhau!" Nhắc lại buổi trước (Buổi 6): sprite mới chỉ chạy tự động theo cờ xanh, hôm nay em sẽ tự tay điều khiển nó.

#### Kiến thức mới (20 phút)

- **`when green flag clicked`:** Bắt đầu khi cờ xanh.
- **`when key pressed`:** Khi nhấn phím (mũi tên, space…).
- **`when this sprite clicked`:** Khi click vào sprite.
- Mỗi khối Events có thể bắt đầu **chuỗi lệnh riêng**.

**Ví dụ:** Phím ↑ → `change y by 10` (đi lên). Phím ↓ → `change y by -10`.

**Vì sao quan trọng?** Từ giờ sprite không chỉ tự chạy theo cờ xanh — em có thể ĐIỀU KHIỂN nó trực tiếp bằng phím và chuột, giống hệt cách chơi game thật. Đây là bước đầu tiên để làm ra một trò chơi do chính em điều khiển.

#### Ví dụ mẫu 1 — Đi lên / xuống

1. Khối riêng: `when key up arrow pressed` → `change y by 10`
2. Khối riêng: `when key down arrow pressed` → `change y by -10`

#### Ví dụ mẫu 2 — Click để chào

1. Khối riêng: `when this sprite clicked` → `say` "Chào bạn!" `for 1 seconds`

*(Khác với ví dụ 1 dùng phím, ví dụ này dùng sự kiện click chuột trực tiếp vào sprite — Events không chỉ có phím!)*

#### Em đoán xem?

Nếu em có 2 khối Events riêng — một khối `when key up arrow pressed` và một khối `when key down arrow pressed` — em đoán xem: nếu em nhấn CẢ HAI phím cùng lúc, chuyện gì sẽ xảy ra với sprite? Đoán trước rồi thử ngay trên Scratch!

#### Thực hành 1 (TH1) — (15 phút) "🚀 Phi thuyền lên xuống"

**Mô tả:** Em là phi công điều khiển phi thuyền — nhấn phím ↑ phi thuyền bay lên, phím ↓ hạ xuống.

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

#### 🤸 Giải lao vận động (5 phút)

**Trò chơi "Người máy nghe phím"**

- Cả lớp đứng dậy làm "người máy". Giáo viên hô "phím" tưởng tượng: "↑ (mũi tên lên)!" → nhón chân cao; "↓ (mũi tên xuống)!" → ngồi thấp; "Space!" → nhảy tại chỗ; "Click chuột!" → xoay 1 vòng.
- Tăng tốc độ hô lệnh dần để tạo không khí vui, giúp em nhớ Events phản ứng theo từng hành động khác nhau.

#### Thực hành 2 (TH2) — (15 phút) "🕹️ Điều khiển như game thủ"

**Mô tả:** Nâng cấp phi thuyền lên bản đầy đủ — dùng cả 4 phím mũi tên để bay tự do khắp bốn phương, y hệt một game thủ thực thụ.

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

#### 🤝 Thử thách nhóm/sáng tạo (15 phút)

**"🕵️ Điệp viên đoán phím"**

- Ghép cặp 2 bạn. Bạn A nhắm mắt (hoặc quay đi), bạn B bấm 1 trong 4 phím mũi tên trên project của bạn A.
- Bạn A mở mắt nhìn vị trí mới của sprite và đoán xem bạn B vừa bấm phím nào.
- Đổi vai, thử vài lượt. Giáo viên mời 1–2 cặp thi đố trước lớp cho vui.

#### Mẹo nhỏ

- Nhấn phím không phản ứng? → Click vào vùng Stage trước (Scratch cần "focus").
- Di chuyển quá nhanh? → Giảm số bước (5 thay vì 10).

#### 🎉 Tổng kết & Ôn tập trò chơi (10 phút)

**"Giơ tay trả lời nhanh" — chia lớp 2 đội thi đua:**

1. `when key pressed` khác `when green flag clicked` thế nào?
2. Làm sao sprite đi lên khi nhấn phím ↑?
3. Em có thể có nhiều khối Events không?
4. `when this sprite clicked` dùng khi nào?
5. `change x by 10` nghĩa là gì?

Mỗi câu, đội nào giơ tay trước được trả lời — đúng ghi 1 điểm, tổng kết đội thắng cuối giờ.

- Mời 1–2 em chiếu màn hình, thử điều khiển sprite bằng 4 phím trước lớp.
- Hẹn gặp lại ở buổi Bài tập tuần này để làm Luyện tập 1, 2 và bài mở rộng!

#### 👩‍🏫 Ghi chú cho giáo viên

**Kịch bản demo nhanh:**
- Demo Ví dụ mẫu 1: nhấn ↑ và ↓ trước lớp, chỉ rõ mỗi phím có một khối Events riêng biệt, không gộp chung.
- Demo Ví dụ mẫu 2: click trực tiếp vào sprite trên Stage để cả lớp thấy `when this sprite clicked` khác `when key pressed` thế nào.

**Lỗi thường gặp (ngoài phần Mẹo nhỏ):**
- Học sinh cố gắn nhiều phím vào chung 1 khối `when key pressed` — nhắc mỗi phím cần một khối Events riêng.
- Quên click vào vùng Stage trước khi nhấn phím thử, tưởng chương trình bị lỗi — đây là lỗi rất phổ biến, nhắc lại nhiều lần trong buổi.
- Nhầm dấu `+`/`-` trong `change x/y by`, khiến sprite đi ngược hướng mong muốn.

**Quản lý lớp học:**
- Trò "Điều khiển từ xa" và "Người máy nghe phím" dễ gây ồn — quy định rõ chỉ phản ứng khi nghe đúng từ khoá, dừng ngay khi giáo viên giơ tay ra hiệu.
- Thử thách nhóm: nhắc bạn A thực sự nhắm mắt/quay đi để trò chơi công bằng, đi vòng hỗ trợ các cặp gặp khó khăn.

---

### Buổi 8 — Bài tập: Luyện Events

#### 🎬 Khởi động ôn tập (10 phút)

**"Nhanh tay nhanh mắt"** — giáo viên đọc 1 câu hỏi, học sinh giơ tay trả lời nhanh:
- "Muốn sprite phản ứng khi nhấn phím, dùng khối Events nào?" (`when key pressed`)
- "Muốn sprite phản ứng khi click chuột vào nó, dùng khối nào?" (`when this sprite clicked`)
- "Mỗi khối Events có thể có chuỗi lệnh riêng hay phải dùng chung?" (riêng)

#### Ôn nhanh

- Events = "Khi… thì…" (khi nhấn phím, khi click…)
- Mỗi sự kiện có thể có chuỗi khối riêng
- `change x by` / `change y by` = di chuyển từng bước nhỏ

#### ✍️ Luyện tập 1, 2 (LT1/LT2) (15–20 phút)

Em làm tại lớp có hướng dẫn hai bài luyện tập ngắn, nối tiếp buổi Học tuần trước — không phải chữa bài tập về nhà, mà là luyện lại ngay tại lớp có giáo viên hỗ trợ.

*Gợi ý:* Đổi máy với bạn bên cạnh 2 phút để cùng kiểm tra checklist của nhau trước khi giáo viên hỏi cả lớp.

#### Luyện tập 1 (LT1) — "Space đổi costume"

**Mô tả:** Em luyện cho sprite đổi sang costume tiếp theo mỗi lần nhấn **phím Space**.

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

#### Luyện tập 2 (LT2) — "Click để chào"

**Mô tả:** Em luyện cho sprite `say` lời chào mỗi khi được click vào — làm ngay tại lớp, có khó khăn gì cứ hỏi giáo viên.

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

| Lỗi thường gặp | Em thử |
|----------------|--------|
| Gộp nhiều phím vào 1 khối Events | Tách mỗi phím thành 1 khối `when key` riêng |
| Nhấn phím không di chuyển | Kiểm tra `change x/y` — dấu +/− có đúng không? |
| Nhảy mãi lên trời | Thêm `change y by -30` sau `wait` để rơi xuống |
| `if touching` không chạy | Chọn đúng tên sprite trong dropdown |

#### 🎯 Giới thiệu bài mở rộng (10 phút)

Giáo viên demo nhanh **1 ví dụ mẫu** (ví dụ bài A1 "Tứ phương") trên máy chiếu — chỉ rõ cách gắn `point in direction` trước khi di chuyển — trước khi học sinh tự chọn mức bài cho mình.

Em chọn **1 mức** A, B hoặc C, rồi chọn **1 trong 2 bài** của mức đó.

| Mức | Khi nào chọn |
|-----|--------------|
| **A1 hoặc A2** | Em luyện điều khiển phím |
| **B1 hoặc B2** | Em kết hợp phím + phản ứng |
| **C1 hoặc C2** | Em làm mini game tương tác |

#### ✍️ Làm bài mở rộng (30–35 phút)

#### Bài A1 — Cơ bản: "Tứ phương"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Điều khiển sprite đi 4 hướng bằng phím mũi tên, giống như di chuyển một nhân vật trong game — sprite quay đúng hướng đang đi |
| **Yêu cầu bắt buộc** | 4 phím ↑↓←→; mỗi phím 1 khối Events; mỗi phím có `point in direction` (↑0, ↓180, ←-90, →90) |
| **Gợi ý bước** | `change y` cho lên/xuống; `change x` cho trái/phải; thêm `point in direction` trước khi di chuyển |
| **Checklist** | 4 phím / 4 khối Events / Hướng nhìn đúng / Di chuyển mượt |
| **Thử thêm** | Backdrop bản đồ + `if on edge, bounce`, và thêm `switch costume` khi đổi hướng để nhân vật trông sống động hơn |

#### Bài A2 — Cơ bản: "Trái và phải"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Một phiên bản đơn giản hơn — chỉ dùng phím ← và →, sprite quay mặt đúng hướng khi đổi chiều di chuyển |
| **Yêu cầu bắt buộc** | `when key left arrow` → `point in direction (-90)` → `change x by -10`; tương tự phải với `90` |
| **Gợi ý bước** | Tạo 2 khối Events riêng; thử `glide 0.1 secs to x: (x position) y: (y position)` sau `change x` cho mượt |
| **Checklist** | ← hoạt động / → hoạt động / Quay hướng đúng / 2 khối Events |
| **Thử thêm** | `if on edge, bounce` — không trôi khỏi sân, và thêm `switch costume` khi bắt đầu di chuyển để tạo cảm giác bước chân |

#### Bài B1 — Trung bình: "Nhân vật phản ứng"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Nhân vật của em có 3 "phản xạ" khác nhau — mỗi phím bấm sẽ đổi costume và phát ra âm thanh riêng biệt |
| **Yêu cầu bắt buộc** | 3 phím (ví dụ a / s / d); mỗi phím: `switch costume to` khác nhau + `play sound` khác nhau |
| **Gợi ý bước** | `when key a pressed` → `switch costume to` A → `play sound` A; lặp cho s và d |
| **Checklist** | 3 phím hoạt động / Mỗi phím costume khác / Mỗi phím âm thanh khác |
| **Thử thêm** | Thêm `say` ngắn mỗi khi nhấn phím, và thử thêm phím thứ 4 với phản xạ hoàn toàn mới |

#### Bài B2 — Trung bình: "Nhảy khi Space"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Nhấn Space để nhân vật nhảy lên rồi rơi xuống như trong game platformer — chỉ được nhảy khi đang đứng trên sàn |
| **Yêu cầu bắt buộc** | `when key space pressed` → `if touching color` (sàn) → `change y by 30` → `wait 0.3` → `change y by -30` |
| **Gợi ý bước** | Chọn backdrop có màu sàn rõ; dùng eyedropper lấy màu sàn cho `touching color` |
| **Checklist** | Space nhảy / Có lên và xuống / Chỉ nhảy khi chạm sàn / Không bay mãi |
| **Thử thêm** | `play sound` khi nhảy, và thêm phím ← → để nhân vật vừa nhảy vừa di chuyển ngang |

#### Bài C1 — Thử thách: "Mini đuổi bắt"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Một mini game đuổi bắt: Player do em điều khiển bằng phím, đi bắt Target đang di chuyển ngẫu nhiên trên Stage |
| **Yêu cầu bắt buộc** | 2 sprite; Player: 4 phím mũi tên; Target: `forever` + `glide 1 secs to random position`; Player: `forever` + `if touching [Target]` → `say` + `play sound` + `hide` Target |
| **Gợi ý bước** | Đặt tên sprite rõ (Player, Target); kiểm tra dropdown `touching` chọn đúng Target |
| **Checklist** | 2 sprite / Player điều khiển được / Target di chuyển / Chạm có thông báo + ẩn Target |
| **Thử thêm** | Bấm cờ xanh → `show` Target lại để chơi tiếp, và thêm biến đếm số lần bắt được nếu em đã học biến |

#### Bài C2 — Thử thách: "Trốn thợ săn chuột"

| Mục | Nội dung |
|-----|----------|
| **Mô tả** | Một cuộc rượt đuổi hai chiều: Prey (con mồi) chạy trốn bằng phím, còn Hunter (thợ săn) tự động luôn đuổi theo vị trí con trỏ chuột |
| **Yêu cầu bắt buộc** | Prey: 4 phím mũi tên; Hunter: `forever` → `point towards mouse-pointer` → `move 8 steps`; Hunter: `forever` + `if touching [Prey]` → `say` "Bắt được!" + `stop all` |
| **Gợi ý bước** | Thêm 2 sprite (ví dụ Chuột + Mèo); code Hunter trên sprite Mèo, code Prey trên sprite Chuột |
| **Checklist** | Prey điều khiển phím / Hunter theo chuột / Chạm có thông báo / Game dừng khi bắt được |
| **Thử thêm** | Prey `say` "Còn chạy được!" mỗi 5 giây (stack `wait 5` riêng), và thử tăng tốc độ Hunter dần theo thời gian để tăng độ khó |

#### 🖼️ Showcase (10 phút)

Gallery walk: học sinh để project chạy trên màn hình, cả lớp đi vòng quanh thử chơi 2–3 mini game của bạn gần nhất, đặc biệt các bài mức C. Mời 2–3 em xung phong trình chiếu và cho cả lớp thử chơi trước lớp.

#### ✅ Tổng kết (5 phút)

Nhắc lại: hôm nay em đã ôn Events, luyện điều khiển bằng phím/chuột, và làm mini game theo mức mình chọn. Đây là buổi cuối Tháng 1 — chương trình học tiếp theo sẽ mở ra âm thanh, cảm biến, vòng lặp và biến số ở Tháng 2!

---

## Tổng kết tháng 1

Em đã học:
- Giao diện Scratch, Motion, Looks, Events
- Hoạt hình, câu chuyện ngắn, điều khiển bằng phím

**Tiếp theo:** [Tháng 2 — Âm thanh, cảm biến, vòng lặp, biến](thang-2-noi-dung-co-ban-phan-2.md)
