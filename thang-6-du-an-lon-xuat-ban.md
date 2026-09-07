# Tháng 6 — Dự án lớn & Xuất bản (Tuần 21–24) 🎮🚀🌍

> Chào em! Đây là **tháng cuối cùng** của khóa Scratch nâng cao. Em sẽ dùng **tất cả** kỹ năng đã học suốt 5 tháng — di chuyển, biến, vòng lặp, broadcast, clone, danh sách, trọng lực, platformer, hiệu ứng — để làm **một game lớn có nhiều màn chơi**, tối ưu cho mượt, rồi **xuất bản** lên cộng đồng Scratch và **thuyết trình** tổng kết hành trình 6 tháng!

**Tuần 21–24** | **Buổi 41–48** | Dành cho em **7–10 tuổi**

| Tuần | Buổi | Em làm gì |
|------|------|-----------|
| 21 | 41–42 | Ý tưởng game lớn nhiều màn + storyboard + kế hoạch kỹ thuật |
| 22 | 43–44 | Code màn chơi chính + kỹ thuật chuyển màn |
| 23 | 45–46 | Hoàn thiện các màn + Tối ưu & Debug toàn diện |
| 24 | 47–48 | Chuẩn bị xuất bản + Showcase cuối khóa |

[← Về lộ trình tổng](curriculum.md) | Trước đó: [Tháng 5 — Kỹ thuật nâng cao](thang-5-ky-thuat-nang-cao.md)

---

## Tuần 21 — Ý tưởng game lớn & Storyboard

---

### Buổi 41 — Học (H): Ý tưởng game nhiều màn

#### Hôm nay em học gì?

Hôm nay em bắt đầu **dự án lớn cuối khóa**! Khác với game 1 màn ở tháng 4, lần này em sẽ thiết kế một game có **ít nhất 2–3 màn chơi**, độ khó **tăng dần**, và dùng **ít nhất 1 kỹ thuật nâng cao** đã học ở tháng 5 (danh sách, trọng lực/platformer, hoặc hiệu ứng Pen). Đây là game "phiên bản đầy đủ" — thành quả của cả 6 tháng học!

#### 🎬 Khởi động (5–10 phút)

**"Game em thích chơi có mấy màn?"**

- Mỗi em nói nhanh 1 câu: tên 1 game em thích chơi và **có mấy màn/level** (nếu không nhớ chính xác, đoán khoảng).
- Giáo viên hỏi: "Màn sau so với màn đầu thường **khó hơn** ở chỗ nào? (nhanh hơn, nhiều địch hơn, bản đồ rộng hơn...)" → dẫn vào khái niệm **độ khó tăng dần**.
- Dẫn vào bài: "Hôm nay mình thiết kế game của **riêng em** có nhiều màn như vậy!"

#### Kiến thức mới (15 phút)

**Game nhiều màn khác game 1 màn thế nào?**

| | Game 1 màn (tháng 4) | Game nhiều màn (tháng 6) |
|---|----------------------|---------------------------|
| Độ khó | Cố định suốt game | **Tăng dần** qua từng màn |
| Biến `màn hiện tại` | Không cần | **Cần** — biết đang ở màn nào |
| Chuyển cảnh | Không có | Có — dùng `broadcast` |
| Kỹ thuật | Cơ bản (di chuyển, biến, if) | Có thêm **1 kỹ thuật nâng cao** |

**Chọn kỹ thuật nâng cao cho game của em:**

| Kỹ thuật (đã học tháng 5) | Hợp với thể loại game nào? |
|---------------------------|------------------------------|
| **Danh sách (List)** | Quiz nhiều câu hỏi, kho đồ, bảng xếp hạng |
| **Trọng lực & Platformer** | Game nhảy, leo bệ, vượt chướng ngại vật |
| **Hiệu ứng & Pen** | Game vẽ, game nghệ thuật, hiệu ứng ăn mừng đẹp |

**Cách thiết kế độ khó tăng dần:**
- Màn 1: **Dễ** — ít địch/chướng ngại, tốc độ chậm, luật đơn giản.
- Màn 2: **Vừa** — thêm địch, tăng tốc độ, hoặc thêm luật mới.
- Màn 3 (nếu có): **Khó** — kết hợp nhiều thử thách cùng lúc.

**Vì sao quan trọng?** Một game hay không chỉ có luật chơi rõ ràng — nó còn phải **giữ chân người chơi** bằng cách khó dần vừa phải, không quá dễ gây chán, không quá khó gây bỏ cuộc. Đây là bí quyết mà mọi game nổi tiếng đều dùng!

#### Ví dụ mẫu — Ý tưởng "Cuộc phiêu lưu 3 màn"

- **Tên tạm:** Robot vượt chướng ngại vật
- **Kỹ thuật nâng cao:** Trọng lực & Platformer
- **Màn 1 (Dễ):** 2 bệ gần nhau, không có địch, mục tiêu: tới cờ đích.
- **Màn 2 (Vừa):** 3 bệ xa hơn, có 1 vực, mục tiêu: tới đích mà không rơi quá 2 lần.
- **Màn 3 (Khó):** 4 bệ, có 1 kẻ địch di chuyển, mục tiêu: tới đích trong 60 giây.
- **Luật thắng chung:** Vượt qua cả 3 màn.
- **Luật thua:** Hết mạng (3 mạng dùng chung cả game).

#### TH1 — Chọn ý tưởng + kỹ thuật nâng cao (20 phút)

**Mô tả:** Em brainstorm **2 ý tưởng game nhiều màn**, chọn **1 ý tưởng**, và xác định **kỹ thuật nâng cao** sẽ dùng.

**Yêu cầu:**
- Viết 2 ý tưởng, mỗi ý có: tên tạm, thể loại, kỹ thuật nâng cao dự kiến.
- Khoanh tròn 1 ý tưởng em chọn.
- Viết 1 câu giải thích vì sao game này **cần nhiều màn** (không phải 1 màn là đủ).

**Gợi ý từng bước:**
1. Nhớ lại game tháng 4 của em — có thể **phát triển tiếp** thành nhiều màn không?
2. Chọn kỹ thuật nâng cao em **thích nhất** ở tháng 5 (danh sách / platformer / hiệu ứng).
3. Nghĩ: "Màn 1 dễ như thế nào, màn cuối khó như thế nào?"
4. Hỏi bạn cùng bàn: ý tưởng nào nghe **thú vị và làm được trong 4 tuần**?

**Checklist tự kiểm:**
- [ ] Có 2 ý tưởng, mỗi ý có tên + thể loại + kỹ thuật
- [ ] Đã chọn 1 ý tưởng
- [ ] Giải thích được vì sao cần nhiều màn

---

#### 🤸 Giải lao vận động (5 phút)

**Trò chơi "Độ khó tăng dần"**

- Cả lớp đứng thành vòng tròn. Giáo viên hô "Màn 1!" — cả lớp vỗ tay chậm rãi theo nhịp giáo viên đếm 1-2-3-4.
- Hô "Màn 2!" — vỗ tay **nhanh hơn**. Hô "Màn 3!" — vỗ tay **nhanh nhất**, ai vỗ sai nhịp thì cười xòa và tiếp tục.
- Chốt: đây chính là cảm giác "độ khó tăng dần" mà em sẽ thiết kế cho game của mình.

#### TH2 — Thiết kế 3 màn (độ khó tăng dần) (20 phút)

**Mô tả:** Với ý tưởng đã chọn, em điền vào **bảng thiết kế 3 màn** (hoặc 2 màn nếu game đơn giản hơn), mô tả rõ mỗi màn khác nhau ở điểm nào.

**Yêu cầu:**
- Điền bảng cho **ít nhất 2 màn** (khuyến khích 3 màn).
- Mỗi màn ghi: **độ khó**, **thay đổi so với màn trước**, **điều kiện qua màn**.
- Ghi rõ **luật thắng chung** (qua hết các màn) và **luật thua chung** (hết mạng/hết giờ).

**Bảng mẫu:**

| Màn | Độ khó | Thay đổi so với màn trước | Điều kiện qua màn |
|-----|--------|----------------------------|---------------------|
| 1 | Dễ | (màn đầu) | ... |
| 2 | Vừa | ... | ... |
| 3 | Khó | ... | ... |

**Gợi ý từng bước:**
1. Điền màn 1 trước — đây là màn **dễ nhất**, người chơi làm quen.
2. Điền màn 2 — thêm **đúng 1–2 thứ** khó hơn (đừng đổi hết mọi thứ cùng lúc).
3. Điền màn 3 (nếu làm) — kết hợp thử thách của màn 1 và 2.
4. Viết luật thắng/thua chung cho toàn game.

**Checklist tự kiểm:**
- [ ] Có bảng thiết kế ≥ 2 màn
- [ ] Mỗi màn có độ khó khác nhau rõ rệt
- [ ] Có điều kiện cụ thể để qua màn
- [ ] Có luật thắng/thua chung cho cả game

---

#### 🤝 Thử thách nhóm/sáng tạo (10–15 phút)

**"Phản biện ý tưởng"**

- Ghép cặp 2 bạn, đổi bảng thiết kế 3 màn cho nhau đọc trong 3 phút.
- Mỗi bạn hỏi bạn kia **1 câu khó**: "Màn 3 của bạn có thực sự khó hơn màn 2 không? Khó hơn ở đâu?" hoặc "Nếu người chơi thua ở màn 2, họ có phải chơi lại từ màn 1 không?"
- Ghi lại 1 điều cần chỉnh sửa sau khi nghe phản biện.
- Giáo viên mời 2–3 cặp chia sẻ ý tưởng game của mình trước lớp.

#### Mẹo nhỏ

- Đừng thiết kế quá 3 màn — 3 màn hoàn chỉnh **tốt hơn nhiều** so với 5 màn dở dang!
- Mỗi màn chỉ nên thay đổi **1–2 thứ** so với màn trước (đừng đổi hết mọi thứ cùng lúc, sẽ khó code).
- Nếu game tháng 4 của em đã hay, hoàn toàn có thể **phát triển tiếp** thành nhiều màn thay vì làm game hoàn toàn mới.

#### Câu hỏi ôn (10 phút)

1. Game nhiều màn khác game 1 màn ở điểm nào?
2. Kể tên 3 kỹ thuật nâng cao em đã học ở tháng 5.
3. Em chọn kỹ thuật nào cho game của mình? Vì sao?
4. Độ khó tăng dần nghĩa là gì? Cho ví dụ.
5. Luật thắng chung của game em là gì?

#### 🎉 Tổng kết (10 phút)

- Nhắc lại: hôm nay em đã chọn ý tưởng game nhiều màn và thiết kế được **bảng 2–3 màn** với độ khó tăng dần.
- Mời 1–2 em chia sẻ nhanh ý tưởng game của mình.
- Hẹn gặp lại ở buổi Bài tập tuần này! Em sẽ đặt tên chính thức, vẽ storyboard và lên kế hoạch kỹ thuật chi tiết.

#### 👩‍🏫 Ghi chú cho giáo viên

- **Hỗ trợ nhóm khác tốc độ:** Em xong nhanh → khuyến khích thêm màn thứ 3 hoặc chi tiết hóa điều kiện qua màn. Em còn chậm → cho phép chỉ thiết kế **2 màn** thay vì 3, miễn có độ khó khác nhau rõ rệt.
- **Lỗi lập kế hoạch thường gặp:** Học sinh thiết kế màn 2, 3 "khó hơn" chỉ bằng cách nói chung chung ("khó hơn nhiều") mà không có gì cụ thể — hỏi lại "khó hơn ở CON SỐ nào" (nhanh hơn bao nhiêu, thêm mấy địch) ngay tại chỗ.
- **Chọn kỹ thuật nâng cao:** Nếu học sinh phân vân giữa nhiều kỹ thuật, gợi ý chọn kỹ thuật mà em **tự tin nhất** ở tháng 5 — dự án lớn không phải lúc để học kỹ thuật hoàn toàn mới.

---
### Buổi 42 — Bài tập (BT): Storyboard & Kế hoạch kỹ thuật

#### 🎬 Khởi động ôn tập (5–10 phút)

**"Nhắc lại game của mình"**

- Từng em nói thật nhanh (1 câu): ý tưởng game nhiều màn đã chọn tuần trước + kỹ thuật nâng cao sẽ dùng.
- Bạn bên cạnh đoán: game này có mấy màn, độ khó tăng dần thế nào?
- Dẫn vào bài: "Hôm nay mình đặt **tên chính thức**, vẽ **storyboard nhiều màn**, và liệt kê **sprite + biến** cần dùng cho từng màn!"

#### Ôn nhanh

Tuần trước em đã: chọn ý tưởng game nhiều màn, chọn kỹ thuật nâng cao, thiết kế bảng 2–3 màn với độ khó tăng dần. Hôm nay em biến kế hoạch đó thành **storyboard** (kể chuyện bằng hình) và **kế hoạch kỹ thuật** (sprite, biến, khối lệnh) chi tiết.

#### ✍️ Luyện tập 1, 2 (LT1/LT2) (15–20 phút)

Ngay đầu buổi, em làm tại lớp hai bài luyện tập ngắn để hoàn thiện phần kỹ thuật trước khi vẽ storyboard — có giáo viên hỗ trợ tại chỗ, không phải bài mang từ nhà.

#### Luyện tập 1 (LT1) — Đặt tên game và liệt kê kỹ thuật

**Mô tả:** Em đặt **tên chính thức** cho game nhiều màn và ghi rõ **kỹ thuật nâng cao** sẽ dùng ở màn nào.

**Yêu cầu:**
- Tên game: 2–5 từ, dễ nhớ.
- Ghi rõ kỹ thuật nâng cao (danh sách / trọng lực-platformer / hiệu ứng-Pen) và **màn nào sẽ dùng**.
- Viết 1 câu slogan giới thiệu game.

**Gợi ý từng bước:**
1. Thử 3–5 tên khác nhau trên giấy, chọn tên ngắn gọn.
2. Ghi kỹ thuật nâng cao — ví dụ: "Trọng lực dùng ở cả 3 màn, danh sách dùng để lưu điểm cao nhất."
3. Viết slogan 1 câu.

**Checklist tự kiểm:**
- [ ] Có tên game chính thức
- [ ] Ghi rõ kỹ thuật nâng cao và màn áp dụng
- [ ] Có slogan 1 câu

#### Luyện tập 2 (LT2) — Bảng sprite & biến cho từng màn

**Mô tả:** Em liệt kê **sprite** và **biến** cần dùng, đánh dấu rõ sprite/biến nào **dùng chung mọi màn** và cái nào **chỉ riêng một màn**.

**Yêu cầu:**
- Liệt kê **ít nhất 5 sprite** (bao gồm nhân vật chính, ít nhất 1 sprite/màn, và Stage).
- Liệt kê **ít nhất 3 biến**, trong đó có biến `màn hiện tại` (hoặc tên tương đương).
- Đánh dấu sprite/biến nào **dùng chung** (ví dụ: `điểm`, `mạng` không reset khi đổi màn) và cái nào **riêng từng màn**.

**Bảng mẫu:**

| STT | Tên sprite/biến | Vai trò | Dùng chung hay riêng màn? |
|-----|------------------|---------|------------------------------|
| 1 | NhanVatChinh | Người chơi điều khiển | Chung |
| 2 | `màn hiện tại` (biến) | Biết đang ở màn nào | Chung |
| 3 | `điểm` (biến) | Điểm xuyên suốt game | Chung |
| 4 | Be_Man1 | Bệ ở màn 1 | Riêng màn 1 |
| 5 | DichMan2 | Kẻ địch ở màn 2 | Riêng màn 2 |

**Gợi ý từng bước:**
1. Nhân vật chính luôn là sprite **dùng chung**.
2. Biến `điểm`, `mạng` thường **dùng chung** — không reset khi chuyển màn (chỉ reset khi bắt đầu ván mới).
3. Biến `màn hiện tại` là biến **mới** — dùng để biết đang ở màn mấy, bắt đầu bằng 1.
4. Sprite bệ/địch/vật trang trí riêng từng màn — đánh dấu "Riêng màn X".

**Checklist tự kiểm:**
- [ ] Có ≥ 5 sprite, ≥ 3 biến
- [ ] Có biến `màn hiện tại`
- [ ] Đánh dấu rõ chung/riêng cho từng mục
- [ ] Tên sprite không dấu, khớp giữa các bảng

#### Chọn bài mở rộng (10 phút)

Sau khi xong LT1/LT2, em chọn **1 mức** A, B hoặc C, rồi chọn **1 trong 2 bài** của mức đó để vẽ storyboard nhiều màn:

| Mức | Khi nào chọn |
|-----|--------------|
| **A1 hoặc A2** | Em muốn storyboard **2 màn** — luồng cơ bản |
| **B1 hoặc B2** | Em muốn storyboard **3 màn** — có bảng độ khó |
| **C1 hoặc C2** | Em muốn storyboard **3 màn + sơ đồ chuyển màn** đầy đủ |

Em chỉ cần làm **1 bài** em chọn. Nếu xong sớm, có thể thử bài khó hơn!

---

#### ✍️ Làm bài mở rộng (35–40 phút)

#### Bài A1 — Storyboard 2 màn cơ bản

| | |
|---|---|
| **Mô tả** | Vẽ storyboard **2 màn**, mỗi màn 2 khung (tổng 4 khung): bắt đầu màn → cao trào → qua màn/kết thúc. |
| **Yêu cầu bắt buộc** | 4 khung có số thứ tự; mỗi khung có hình vẽ + 1 câu chú thích; khung cuối màn 1 có dấu hiệu "qua màn 2" rõ ràng (ví dụ mũi tên, chữ "Màn 2 →"). |
| **Gợi ý bước** | 1. Khung 1: Bắt đầu màn 1. 2. Khung 2: Cao trào màn 1 → qua màn 2. 3. Khung 3: Bắt đầu màn 2 (khó hơn). 4. Khung 4: Kết thúc (thắng cả game hoặc thua). |
| **Checklist** | - [ ] 4 khung đủ, có số thứ tự<br>- [ ] Có dấu hiệu chuyển màn rõ ràng<br>- [ ] Khung cuối là kết quả cuối game<br>- [ ] Nhân vật khớp bảng sprite LT2 |
| **Thử thêm** | Vẽ thêm khung phụ mô tả màn hình "Chuyển màn" (ví dụ: chữ "Màn 2" hiện to giữa Stage 1 giây). |

---

#### Bài A2 — Storyboard 2 màn + màn hình chờ chuyển màn

| | |
|---|---|
| **Mô tả** | Vẽ storyboard **2 màn**, có thêm **1 khung riêng** cho màn hình "Chuyển màn" — khoảnh khắc ngắn giữa hai màn, thường có chữ "Màn 2" hoặc hiệu ứng chờ. |
| **Yêu cầu bắt buộc** | 5 khung có số thứ tự (2 khung/màn + 1 khung chuyển màn ở giữa); ghi rõ **điều kiện qua màn** dưới khung chuyển màn (ví dụ: "đủ 10 điểm"); khung cuối là kết quả. |
| **Gợi ý bước** | 1. Khung 1–2: Màn 1. 2. Khung 3: Màn hình chuyển màn — ghi điều kiện qua màn. 3. Khung 4–5: Màn 2 và kết quả. |
| **Checklist** | - [ ] 5 khung đủ<br>- [ ] Có khung chuyển màn riêng với điều kiện cụ thể<br>- [ ] Khung cuối là kết quả cuối game<br>- [ ] Nhân vật khớp bảng sprite LT2 |
| **Thử thêm** | Ghi thời gian chuyển màn dự kiến (ví dụ: "hiện chữ Màn 2 trong 1.5 giây"). |

---

#### Bài B1 — Storyboard 3 màn + bảng độ khó

| | |
|---|---|
| **Mô tả** | Vẽ storyboard **3 màn** (mỗi màn 1–2 khung) kèm bảng độ khó copy từ buổi 41 (có thể chỉnh sửa). |
| **Yêu cầu bắt buộc** | 6 khung có hình + chú thích (có thể ghép nhiều màn vào ít khung hơn nếu cần); có bảng độ khó 3 màn đặt cạnh storyboard; luật thắng/thua chung ghi rõ số cụ thể. |
| **Gợi ý bước** | 1. Khung cho từng màn (1–2 khung/màn). 2. Đặt bảng độ khó (từ TH2 buổi 41) bên cạnh. 3. Ghi luật thắng chung (qua hết 3 màn) và luật thua chung (hết mạng). 4. Kiểm tra: bảng độ khó có khớp hình vẽ không? |
| **Checklist** | - [ ] Có đủ hình cho 3 màn<br>- [ ] Có bảng độ khó đi kèm<br>- [ ] Luật thắng/thua chung có số cụ thể<br>- [ ] Storyboard khớp bảng độ khó |
| **Thử thêm** | Thêm ký hiệu ⭐ ở khung màn nào dùng kỹ thuật nâng cao đã chọn (danh sách/platformer/hiệu ứng). |

---

#### Bài B2 — Storyboard 3 màn + kỹ thuật nâng cao minh họa

| | |
|---|---|
| **Mô tả** | Vẽ storyboard **3 màn**, trong đó **ít nhất 1 khung minh họa rõ** kỹ thuật nâng cao đang dùng (ví dụ: vẽ bảng danh sách, vẽ nhân vật đang nhảy qua bệ, vẽ hiệu ứng Pen). |
| **Yêu cầu bắt buộc** | 6 khung có hình + chú thích; ít nhất 1 khung có hình minh họa kỹ thuật nâng cao rõ ràng; ghi luật thắng/thua chung với số cụ thể. |
| **Gợi ý bước** | 1. Vẽ 3 màn như bài B1. 2. Chọn 1 khung — vẽ chi tiết hơn để thể hiện kỹ thuật nâng cao (ví dụ: nếu dùng platformer, vẽ rõ các bệ và đường nhảy). 3. Ghi chú giải thích ngắn dưới khung đó. |
| **Checklist** | - [ ] Có đủ hình cho 3 màn<br>- [ ] Có khung minh họa rõ kỹ thuật nâng cao<br>- [ ] Luật thắng/thua chung có số cụ thể<br>- [ ] Storyboard mạch lạc, dễ hiểu |
| **Thử thêm** | Ghi tên khối lệnh Scratch dự kiến bên cạnh khung minh họa kỹ thuật (ví dụ: "touching bệ?", "add to list"). |

---

#### Bài C1 — Storyboard 3 màn + sơ đồ chuyển màn

| | |
|---|---|
| **Mô tả** | Vẽ storyboard **3 màn đầy đủ** kèm **sơ đồ chuyển màn** (giống sơ đồ khối) thể hiện: Màn 1 → (điều kiện) → Màn 2 → (điều kiện) → Màn 3 → Thắng, và mọi màn đều có nhánh → Thua nếu hết mạng. |
| **Yêu cầu bắt buộc** | 6+ khung storyboard; sơ đồ chuyển màn có mũi tên và điều kiện rõ ràng ở mỗi mũi tên; thể hiện rõ nhánh "hết mạng → Thua" từ mọi màn. |
| **Gợi ý bước** | 1. Vẽ storyboard 3 màn như bài B1/B2. 2. Vẽ sơ đồ riêng: 3 ô chữ nhật (Màn 1, Màn 2, Màn 3) + 1 ô "Thắng" + 1 ô "Thua", nối bằng mũi tên có ghi điều kiện (ví dụ: "đủ 10 điểm"). 3. Vẽ mũi tên từ mỗi màn tới ô "Thua" (ghi "hết mạng"). 4. Đối chiếu: mọi điều kiện trong sơ đồ có khớp bảng độ khó tuần trước? |
| **Checklist** | - [ ] Storyboard đủ 3 màn<br>- [ ] Sơ đồ chuyển màn có đủ mũi tên + điều kiện<br>- [ ] Có nhánh Thua từ mọi màn<br>- [ ] Khớp với bảng độ khó buổi 41 |
| **Thử thêm** | Thêm nhánh "Chơi lại" từ ô Thắng và ô Thua quay về Màn 1. |

---

#### Bài C2 — Storyboard 3 màn + bảng kỹ thuật lệnh dự kiến

| | |
|---|---|
| **Mô tả** | Vẽ storyboard **3 màn đầy đủ** kèm **bảng khối lệnh dự kiến** cho riêng phần chuyển màn — liệt kê chính xác các khối Scratch em nghĩ mình sẽ dùng để chuyển từ màn này sang màn khác. |
| **Yêu cầu bắt buộc** | 6+ khung storyboard; bảng khối lệnh chuyển màn có ít nhất 5 dòng (ví dụ: `broadcast [sang màn 2]`, `if màn hiện tại = 2 then show`); luật thắng/thua chung rõ ràng. |
| **Gợi ý bước** | 1. Vẽ storyboard 3 màn. 2. Lập bảng: cột 1 "Tình huống" (ví dụ: qua màn 1), cột 2 "Khối lệnh dự kiến" (ví dụ: `broadcast sang màn 2`, `change màn hiện tại by 1`). 3. Liệt kê ít nhất 5 dòng bao phủ cả 2 lần chuyển màn. |
| **Checklist** | - [ ] Storyboard đủ 3 màn<br>- [ ] Bảng khối lệnh chuyển màn ≥ 5 dòng<br>- [ ] Có nhắc tới biến `màn hiện tại` trong bảng<br>- [ ] Luật thắng/thua chung rõ ràng |
| **Thử thêm** | Ghi thêm dự kiến âm thanh/hiệu ứng đi kèm mỗi lần chuyển màn. |

---

#### 🖼️ Showcase (5–10 phút)

**"Triển lãm storyboard"** — em để storyboard trên bàn, cả lớp đứng dậy đi vòng quanh xem storyboard của 2–3 bạn gần nhất trong 1–2 phút. Giáo viên mời 1–2 em xung phong kể nhanh câu chuyện game nhiều màn của mình qua storyboard trước lớp.

#### ✅ Tổng kết (5 phút)

Nhắc lại: hôm nay em đã đặt tên game, liệt kê sprite/biến cho từng màn, và vẽ xong storyboard nhiều màn. Tuần sau (**Buổi 43**) em sẽ **mở Scratch và code thật** — làm màn chơi chính và kỹ thuật chuyển màn!

---

## Tuần 22 — Code màn chơi chính

---
### Buổi 43 — Học (H): Code màn chơi chính & chuyển màn

#### Hôm nay em học gì?

Hôm nay em **mở Scratch và code thật**! Em sẽ:
1. Code **màn 1** hoàn chỉnh theo kế hoạch.
2. Học kỹ thuật **chuyển màn** — cách ẩn/hiện đúng sprite khi chuyển từ màn này sang màn khác.

Mục tiêu cuối buổi: màn 1 chơi được, và em hiểu cách máy "biết" đang ở màn nào!

#### 🎬 Khởi động (5–10 phút)

**"Kiểm tra kế hoạch nhanh"**

- Em lấy storyboard + bảng sprite tuần trước ra, đổi cho bạn bên cạnh xem trong 1 phút.
- Bạn hỏi nhanh: "Màn 1 của bạn có gì? Biến `màn hiện tại` dùng để làm gì?" — trả lời được ngay là **sẵn sàng code**!

#### Kiến thức mới — Kỹ thuật chuyển màn (15 phút)

**Vấn đề:** Trong 1 project Scratch, **mọi sprite của mọi màn đều tồn tại cùng lúc** trên Stage. Nếu không xử lý, sprite của màn 2 sẽ hiện lên ngay từ đầu, đè lên màn 1!

**Giải pháp: biến `màn hiện tại` + `broadcast`**

```
// Cờ xanh — bắt đầu ở màn 1
when green flag clicked
set [màn hiện tại] to (1)
broadcast [bắt đầu màn 1]
```

**Mỗi sprite tự quyết định hiện hay ẩn dựa vào `màn hiện tại`:**

```
// Sprite chỉ thuộc màn 1
when I receive [bắt đầu màn 1]
show
go to x: (...) y: (...)

when I receive [bắt đầu màn 2]
hide
```

**Chuyển màn khi đạt điều kiện:**

```
// Trên nhân vật chính, kiểm tra điều kiện qua màn
if <(điểm) >= (10)> then
  change [màn hiện tại] by (1)
  broadcast [bắt đầu màn 2]
```

**Bảng tư duy — mỗi sprite tự hỏi 3 câu:**

| Câu hỏi | Ví dụ trả lời |
|---------|----------------|
| Sprite này thuộc **màn nào**? | Chỉ màn 1 / Chỉ màn 2 / **Mọi màn** (nhân vật chính) |
| Khi nhận broadcast màn đó → làm gì? | `show`, đặt lại vị trí |
| Khi nhận broadcast màn khác → làm gì? | `hide` |

**Vì sao quan trọng?** Đây là kỹ thuật cốt lõi để biến nhiều màn chơi rời rạc thành **một game liền mạch**. Nắm được nó, em có thể mở rộng game của mình thành bao nhiêu màn tùy thích — chỉ cần lặp lại đúng công thức `broadcast` + `show`/`hide`!

#### Ví dụ mẫu — Chuyển từ màn 1 sang màn 2 (game bắt sao)

1. Biến `màn hiện tại`, `điểm`.
2. Sprite `Sao_Man1`:
   ```
   when I receive [bắt đầu màn 1]
   show
   go to x: (pick random -200 to 200) y: (150)
   
   when I receive [bắt đầu màn 2]
   hide
   ```
3. Sprite `Địch_Man2` (chỉ xuất hiện màn 2):
   ```
   when I receive [bắt đầu màn 2]
   show
   go to x: (0) y: (0)
   
   when I receive [bắt đầu màn 1]
   hide
   ```
4. Nhân vật chính, kiểm tra điều kiện chuyển màn:
   ```
   when green flag clicked
   set [màn hiện tại] to (1)
   set [điểm] to (0)
   broadcast [bắt đầu màn 1]
   forever
     if <<(điểm) >= (5)> and <(màn hiện tại) = (1)>> then
       change [màn hiện tại] by (1)
       broadcast [bắt đầu màn 2]
   ```
5. Bấm cờ xanh, ăn đủ 5 điểm — quan sát `Sao_Man1` biến mất và `Địch_Man2` xuất hiện, đúng lúc chuyển màn!

*(Điều kiện `and (màn hiện tại) = (1)` rất quan trọng — nếu không có, khối `if` sẽ tiếp tục gửi broadcast liên tục mỗi khung hình vì điểm vẫn ≥ 5 sau khi đã qua màn 2!)*

#### Em đoán xem?

Nếu em quên viết `hide` trong khối `when I receive [bắt đầu màn 2]` của sprite `Sao_Man1`, em đoán chuyện gì xảy ra khi chuyển sang màn 2? Đoán trước, rồi thử trên Scratch để kiểm tra!

---

#### TH1 — Code màn 1 hoàn chỉnh (25 phút)

**Mô tả:** Em code **màn 1** của game — nhân vật di chuyển, có tương tác chính, dùng đúng kỹ thuật nâng cao đã chọn (nếu áp dụng từ màn 1).

**Yêu cầu:**
- Tạo project Scratch tên `[TênGame]-draft` (hoặc dùng project đã tạo tuần trước).
- Nhân vật chính di chuyển được theo kế hoạch.
- Có tương tác chính của màn 1 (bắt/tránh/nhảy/quiz...).
- Biến `màn hiện tại` được tạo và `set` bằng 1 ở cờ xanh.

**Gợi ý từng bước:**
1. Mở kế hoạch tuần trước — xem lại màn 1 cần gì.
2. Tạo biến `màn hiện tại`, `set màn hiện tại to (1)` ở cờ xanh.
3. Code di chuyển nhân vật chính (dùng lại kỹ thuật đã học: phím thường hoặc trọng lực).
4. Code tương tác chính của màn 1 (touching, danh sách, hoặc hiệu ứng — tùy kỹ thuật đã chọn).
5. **Test** — bấm cờ xanh, chơi thử màn 1.
6. **Lưu project.**

**Checklist tự kiểm:**
- [ ] Có biến `màn hiện tại`, bắt đầu = 1
- [ ] Nhân vật chính di chuyển đúng theo kế hoạch
- [ ] Có tương tác chính của màn 1
- [ ] Đã lưu project

---

#### 🤸 Giải lao vận động (5 phút)

**Trò chơi "Broadcast người"**

- Chia lớp thành 2–3 nhóm, mỗi nhóm là "sprite của một màn". Giáo viên hô "Broadcast: bắt đầu màn 1!" — nhóm màn 1 đứng dậy giơ tay (show), các nhóm khác ngồi xuống che mắt (hide).
- Hô "Broadcast: bắt đầu màn 2!" — đổi lại, nhóm màn 2 đứng lên, nhóm màn 1 ngồi xuống.
- Chơi 4–5 lượt, tăng tốc — giúp em cảm nhận rõ cơ chế show/hide theo broadcast trước khi tự code.

#### TH2 — Code chuyển màn (25 phút)

**Mô tả:** Em thêm **sprite riêng của màn 2** (ít nhất 1 sprite) và code cơ chế **chuyển màn** khi đạt điều kiện ở màn 1.

**Yêu cầu:**
- Có ít nhất 1 sprite chỉ thuộc màn 2, ẩn ở màn 1.
- Nhân vật chính kiểm tra điều kiện qua màn (ví dụ: đủ điểm, chạm đích) → `broadcast` sang màn 2.
- Khi chuyển màn: sprite màn 1 ẩn đi, sprite màn 2 hiện ra.
- `màn hiện tại` cập nhật đúng (từ 1 thành 2).

**Gợi ý từng bước:**
1. Tạo message `bắt đầu màn 1` và `bắt đầu màn 2` (Events → New message).
2. Nhân vật chính: `when green flag` → `broadcast [bắt đầu màn 1]` ngay sau khi `set màn hiện tại to (1)`.
3. Sprite màn 1: `when I receive [bắt đầu màn 1]` → `show`; `when I receive [bắt đầu màn 2]` → `hide`.
4. Sprite màn 2 (sprite mới): làm ngược lại — `hide` khi màn 1, `show` khi màn 2.
5. Thêm điều kiện chuyển màn trên nhân vật chính (dùng lại công thức Ví dụ mẫu ở trên).
6. **Test kỹ:** chơi màn 1 tới khi đủ điều kiện — quan sát Stage chuyển đúng, không bị 2 màn chồng lên nhau.
7. **Lưu project.**

**Checklist tự kiểm:**
- [ ] Có sprite riêng cho màn 2
- [ ] Chuyển màn đúng lúc, đúng điều kiện
- [ ] Sprite màn 1 ẩn khi sang màn 2 (không chồng hình)
- [ ] Biến `màn hiện tại` cập nhật đúng
- [ ] Đã lưu project

---

#### Mẹo nhỏ

- Luôn kiểm tra **cả 2 chiều**: sprite phải `show` đúng lúc VÀ `hide` đúng lúc — thiếu 1 trong 2 sẽ gây chồng hình.
- Đặt tên broadcast **rõ ràng**: `bắt đầu màn 1`, `bắt đầu màn 2` — dễ nhớ hơn `msg1`, `msg2`.
- Dùng biến `màn hiện tại` trong điều kiện `if` để **tránh gửi broadcast lặp lại** nhiều lần (như trong Ví dụ mẫu).
- Nếu game bị "chuyển màn liên tục" (nhấp nháy), kiểm tra điều kiện `if` có nằm trong `forever` mà thiếu chặn `màn hiện tại =` không.

#### Câu hỏi ôn (10 phút)

1. Vì sao cần biến `màn hiện tại`?
2. Sprite của màn 2 cần làm gì khi nhận broadcast "bắt đầu màn 1"?
3. Điều gì xảy ra nếu quên `hide` sprite màn 1 khi chuyển sang màn 2?
4. Em dùng điều kiện gì để biết đã đến lúc chuyển màn?
5. Em đã hoàn thành mấy phần trong kế hoạch màn 1?

#### 🎉 Tổng kết (10 phút)

- Nhắc lại: hôm nay em đã code **màn 1** và học kỹ thuật **chuyển màn** bằng broadcast — game đã "sống" thật sự với nhiều màn!
- Mời 1–2 em bấm cờ xanh demo nhanh cảnh chuyển màn cho cả lớp xem.
- Hẹn gặp lại ở buổi Bài tập tuần này! Em sẽ thêm biến điểm/mạng xuyên suốt và hoàn thiện màn 2.

#### 👩‍🏫 Ghi chú cho giáo viên

- **Hỗ trợ nhóm khác tốc độ:** Em code nhanh, xong cả TH1 + TH2 → khuyến khích thử thêm màn 3 ngay hôm nay. Em còn chậm → cho phép chỉ hoàn thành TH1 (màn 1), để TH2 (chuyển màn) làm tiếp ở buổi 44.
- **Lỗi kỹ thuật thường gặp:** Quên `hide` một chiều (chỉ `show` khi đúng màn nhưng không `hide` khi màn khác) — đây là lỗi phổ biến nhất buổi này, đi vòng kiểm tra sớm bằng cách yêu cầu học sinh chuyển màn thử ngay khi vừa code xong 1 sprite.
- **Nhắc nhở:** Nhấn mạnh khái niệm "mọi sprite luôn tồn tại, chỉ ẩn/hiện" — nhiều em nghĩ nhầm rằng chuyển màn nghĩa là "xóa" sprite cũ đi, cần làm rõ ngay từ đầu.

---
### Buổi 44 — Bài tập (BT): Làm game nhiều màn (~60–70%)

#### 🎬 Khởi động ôn tập (5–10 phút)

**"Demo chuyển màn 10 giây"** — từng em bấm cờ xanh cho bạn bên cạnh xem 10 giây phần chuyển màn đã code tuần trước. Bạn nói 1 câu nhận xét tích cực trước khi cả lớp bắt đầu code tiếp.

#### Ôn nhanh

- **Mục tiêu hôm nay:** Game hoàn thành khoảng **60–70%** kế hoạch — có ít nhất 2 màn chơi được, điểm/mạng xuyên suốt.
- 60–70% nghĩa là: màn 1 hoàn chỉnh + màn 2 cơ bản + biến điểm/mạng dùng chung + chuyển màn đúng — có thể **chưa** có màn 3, chưa polish âm thanh/hiệu ứng.
- Em chọn **1 mức** A, B hoặc C, rồi **1 trong 2 bài** tương ứng mức hoàn thành em đạt được hôm nay.

#### ✍️ Luyện tập 1, 2 (LT1/LT2) (15–20 phút)

Ngay đầu buổi, em làm tại lớp hai bài luyện tập ngắn, nối tiếp phần code tuần trước — có giáo viên hỗ trợ tại chỗ.

#### Luyện tập 1 (LT1) — Biến điểm/mạng xuyên suốt các màn

**Mô tả:** Em đảm bảo biến `điểm` và `mạng` **không bị reset** khi chuyển màn — chỉ reset khi bắt đầu **ván chơi mới** (bấm cờ xanh).

**Yêu cầu:**
- `set điểm to 0` và `set mạng to 3` chỉ nằm trong `when green flag clicked`, **không** nằm trong bất kỳ `when I receive [bắt đầu màn X]` nào.
- Test: chơi hết màn 1 với 8 điểm → sang màn 2, điểm vẫn hiển thị 8 (không về 0).

**Gợi ý từng bước:**
1. Kiểm tra lại toàn bộ script — tìm mọi chỗ có `set điểm to` hoặc `set mạng to`.
2. Nếu thấy `set điểm to (0)` nằm trong khối `when I receive [bắt đầu màn 2]` → **xóa** dòng đó, chỉ giữ lại ở cờ xanh.
3. Chạy thử: chơi màn 1 lấy vài điểm, chuyển màn 2, kiểm tra điểm còn nguyên.
4. Lưu project tên `LT1-diem-mang-xuyen-suot`.

**Checklist tự kiểm:**
- [ ] `set điểm/mạng` chỉ ở cờ xanh
- [ ] Điểm không về 0 khi chuyển màn
- [ ] Mạng giữ nguyên khi chuyển màn
- [ ] Em đã lưu project

*Nếu điểm bị reset về 0 khi chuyển màn:* Tìm kỹ trong từng sprite — có thể một sprite nào đó có `set điểm to (0)` ẩn trong khối `when I receive`.

#### Luyện tập 2 (LT2) — Hoàn thiện màn 2 cơ bản

**Mô tả:** Em hoàn thiện **màn 2** — có sprite riêng, có tương tác chính, thể hiện đúng **độ khó tăng** so với màn 1.

**Yêu cầu:**
- Màn 2 có ít nhất 1 điểm khác biệt rõ so với màn 1 (nhanh hơn, thêm địch, xa hơn...).
- Nhân vật chính vẫn di chuyển và tương tác được đúng cách ở màn 2.
- Test chuyển từ màn 1 sang màn 2 mượt mà, không lỗi.

**Gợi ý từng bước:**
1. Mở lại bảng thiết kế độ khó (buổi 41) — màn 2 khác màn 1 điểm gì?
2. Thêm sự khác biệt đó vào code (ví dụ: tăng tốc độ chướng ngại vật, thêm 1 địch).
3. Test toàn bộ luồng: cờ xanh → chơi màn 1 → chuyển màn 2 → chơi màn 2.
4. Lưu project tên `LT2-hoan-thien-man2`.

**Checklist tự kiểm:**
- [ ] Màn 2 có ít nhất 1 điểm khó hơn màn 1
- [ ] Nhân vật chính hoạt động đúng ở màn 2
- [ ] Chuyển màn mượt, không lỗi
- [ ] Em đã lưu project

#### Chọn bài mở rộng (10 phút)

Ba mức dưới đây là **mục tiêu ~60–70%** — em chọn **1 mức** A, B hoặc C, rồi **1 trong 2 bài** **bằng hoặc cao hơn** mức em vừa hoàn thành ở LT1/LT2.

| Mức | Khi nào chọn |
|-----|--------------|
| **A1 hoặc A2** | Em hoàn thành **màn 1 + chuyển màn cơ bản** |
| **B1 hoặc B2** | Em hoàn thành **màn 2 + điểm/mạng xuyên suốt** |
| **C1 hoặc C2** | Em thêm **màn 3 sơ bộ** hoặc **kỹ thuật nâng cao đầy đủ** |

---

#### ✍️ Làm bài mở rộng (35–40 phút)

#### Bài A1 — Màn 1 + chuyển màn cơ bản

| | |
|---|---|
| **Mô tả** | Em hoàn thiện **màn 1** chạy ổn định và cơ chế **chuyển sang màn 2** hoạt động đúng, dù màn 2 còn đơn giản. |
| **Yêu cầu bắt buộc** | (1) Màn 1 chơi được trọn vẹn (2) Biến `màn hiện tại` hoạt động đúng (3) Chuyển màn khi đủ điều kiện (4) Sprite màn 1 ẩn đúng khi sang màn 2 (5) Test cờ xanh ≥ 3 lần không lỗi |
| **Gợi ý bước** | 1. Hoàn thiện phần còn thiếu của màn 1 từ TH1 buổi 43. 2. Kiểm tra lại broadcast chuyển màn. 3. Test kỹ 3 lần. 4. Tick checklist kế hoạch. |
| **Checklist** | - [ ] Màn 1 hoàn chỉnh<br>- [ ] Chuyển màn hoạt động<br>- [ ] Không chồng hình giữa 2 màn<br>- [ ] Test 3 lần OK<br>- [ ] Đã lưu project |
| **Thử thêm** | Thêm hiệu ứng ngắn (ví dụ: `say [Màn 2!]`) khi vừa chuyển màn. |

---

#### Bài A2 — Chuyển màn mượt mà không lỗi

| | |
|---|---|
| **Mô tả** | Em **hoàn thiện** cơ chế chuyển màn sao cho **không bao giờ** bị chồng hình, nhấp nháy, hoặc chuyển màn lặp lại nhiều lần liên tục. |
| **Yêu cầu bắt buộc** | (1) Tất cả yêu cầu bài A1 (2) Điều kiện chuyển màn có chặn bằng `màn hiện tại =` (không gửi broadcast lặp) (3) Test bấm cờ xanh và chơi lại ≥ 5 lần không lỗi (4) Mọi sprite đều `show`/`hide` đúng cả 2 chiều |
| **Gợi ý bước** | 1. Rà lại từng sprite — liệt kê sprite nào thiếu `hide` hoặc `show` cho 1 màn. 2. Sửa điều kiện `if` để có `and (màn hiện tại) = (số)`. 3. Test 5 lần liên tiếp, bấm cờ xanh giữa chừng để chắc chắn game reset đúng. |
| **Checklist** | - [ ] Bài A1 hoàn thành<br>- [ ] Không chuyển màn lặp lại<br>- [ ] Mọi sprite show/hide đúng 2 chiều<br>- [ ] Test 5 lần OK<br>- [ ] Đã lưu project |
| **Thử thêm** | Thêm `wait (0.3) secs` ngắn ngay sau broadcast chuyển màn để tạo cảm giác "chuyển cảnh" rõ ràng hơn. |

---

#### Bài B1 — Màn 2 + điểm/mạng xuyên suốt

| | |
|---|---|
| **Mô tả** | Em làm xong bài A1 và hoàn thiện **màn 2** với biến điểm/mạng **dùng chung**, không reset khi chuyển màn. |
| **Yêu cầu bắt buộc** | (1) Tất cả yêu cầu bài A1 (2) Màn 2 có tương tác chính riêng, khó hơn màn 1 (3) `điểm`/`mạng` giữ nguyên khi chuyển từ màn 1 sang màn 2 (4) Biến hiển thị rõ trên Stage suốt cả 2 màn |
| **Gợi ý bước** | 1. Kiểm tra LT1 — sửa nếu điểm/mạng còn bị reset nhầm. 2. Hoàn thiện tương tác màn 2 theo bảng độ khó. 3. Test: lấy điểm ở màn 1, chuyển màn 2, kiểm tra điểm còn đúng. |
| **Checklist** | - [ ] Bài A1 hoàn thành<br>- [ ] Màn 2 có tương tác riêng<br>- [ ] Điểm/mạng không reset khi chuyển màn<br>- [ ] Đã lưu project |
| **Thử thêm** | Thêm biến `điểm màn 2` riêng để so sánh với `điểm màn 1` — xem người chơi làm tốt hơn ở màn nào. |

---

#### Bài B2 — Màn 2 khó hơn rõ rệt + test kỹ

| | |
|---|---|
| **Mô tả** | Em **hoàn thiện** màn 2 sao cho độ khó **khác biệt rõ ràng** so với màn 1 (không chỉ đổi màu sprite), và test toàn bộ luồng game nhiều lần để đảm bảo ổn định. |
| **Yêu cầu bắt buộc** | (1) Tất cả yêu cầu bài B1 (2) Màn 2 khó hơn màn 1 bằng **con số cụ thể** (nhanh hơn X%, thêm Y địch...) (3) Test toàn bộ luồng (màn 1 → màn 2) ≥ 5 lần, ghi lại 1 lỗi tìm được và cách sửa (4) Cả 2 màn đều dùng đúng kỹ thuật nâng cao đã chọn |
| **Gợi ý bước** | 1. So sánh cụ thể: màn 1 tốc độ bao nhiêu, màn 2 tăng thêm bao nhiêu. 2. Test 5 lần, ghi chú lỗi ra giấy trước khi sửa. 3. Kiểm tra kỹ thuật nâng cao (danh sách/platformer/hiệu ứng) đã áp dụng đúng ở cả 2 màn chưa. |
| **Checklist** | - [ ] Bài B1 hoàn thành<br>- [ ] Độ khó tăng có số cụ thể<br>- [ ] Đã ghi và sửa 1 lỗi tìm được<br>- [ ] Kỹ thuật nâng cao dùng đúng ở cả 2 màn<br>- [ ] Đã lưu project |
| **Thử thêm** | Bắt đầu phác thảo màn 3 nếu còn thời gian — chuẩn bị cho tuần 23. |

---

#### Bài C1 — Bắt đầu màn 3 sơ bộ

| | |
|---|---|
| **Mô tả** | Em làm xong bài B1 và **bắt đầu code màn 3** — ít nhất có sprite riêng và 1 broadcast chuyển từ màn 2 sang màn 3, dù chưa cần hoàn chỉnh. |
| **Yêu cầu bắt buộc** | (1) Tất cả yêu cầu bài B1 (2) Có message `bắt đầu màn 3` và sprite riêng cho màn 3 (3) Có điều kiện chuyển từ màn 2 sang màn 3 (4) `màn hiện tại` cập nhật đúng thành 3 |
| **Gợi ý bước** | 1. Tạo message mới `bắt đầu màn 3`. 2. Thêm 1 sprite mới, code `show`/`hide` theo đúng công thức đã học. 3. Thêm điều kiện chuyển màn 2 → 3 trên nhân vật chính (giống công thức màn 1 → 2). 4. Test toàn bộ luồng 3 màn. |
| **Checklist** | - [ ] Bài B1 hoàn thành<br>- [ ] Có sprite và broadcast cho màn 3<br>- [ ] Chuyển màn 2 → 3 hoạt động<br>- [ ] Tick thêm 1–2 mục checklist kế hoạch<br>- [ ] Đã lưu project |
| **Thử thêm** | Nếu xong sớm: thêm luật thắng cuối cùng (qua hết màn 3 → `say [Chiến thắng!]`). |

---

#### Bài C2 — Kỹ thuật nâng cao đầy đủ ở cả 2 màn

| | |
|---|---|
| **Mô tả** | Em đảm bảo **kỹ thuật nâng cao** đã chọn (danh sách / platformer / hiệu ứng) được dùng **đầy đủ và đúng cách** ở cả màn 1 và màn 2, không chỉ dùng sơ sài. |
| **Yêu cầu bắt buộc** | (1) Tất cả yêu cầu bài B2 (2) Kỹ thuật nâng cao xuất hiện rõ ràng ở **cả 2 màn**, có khác biệt cách dùng giữa 2 màn (ví dụ: màn 1 danh sách có 3 mục, màn 2 có 6 mục) (3) Không có lỗi liên quan tới kỹ thuật đó (ví dụ: danh sách không bị dài mãi ra, platformer không bị dính bệ) |
| **Gợi ý bước** | 1. Với danh sách: kiểm tra `delete all` đúng chỗ, danh sách màn 2 phong phú hơn màn 1. 2. Với platformer: kiểm tra công thức `touching` + `vy <= 0` hoạt động đúng ở cả 2 màn. 3. Với hiệu ứng: kiểm tra `clear graphic effects` được gọi đúng lúc, không bị mờ/méo sai chỗ. 4. Test kỹ từng kỹ thuật riêng biệt. |
| **Checklist** | - [ ] Bài B2 hoàn thành<br>- [ ] Kỹ thuật nâng cao dùng đúng và rõ ở cả 2 màn<br>- [ ] Không có lỗi kỹ thuật liên quan<br>- [ ] Đã lưu project |
| **Thử thêm** | Ghi chú lại (trên giấy) 1 câu giải thích em sẽ nói khi thuyết trình về kỹ thuật nâng cao này — chuẩn bị trước cho showcase. |

---

#### 🖼️ Showcase (5–10 phút)

Em bấm cờ xanh cho 2–3 bạn gần nhất xem nhanh phần đã code hôm nay (30 giây/bạn), đặc biệt cho xem cảnh **chuyển màn**. Nghe 1 góp ý — ghi lại để sửa ở tuần 23.

#### Tự đánh giá 60–70% — Em tick trước khi về

| Mục trong kế hoạch | Xong? |
|--------------------|-------|
| Màn 1 hoàn chỉnh | [ ] |
| Biến `màn hiện tại` hoạt động đúng | [ ] |
| Chuyển màn 1 → 2 mượt mà | [ ] |
| Màn 2 có tương tác riêng, khó hơn | [ ] |
| Điểm/mạng xuyên suốt, không reset nhầm | [ ] |
| Kỹ thuật nâng cao dùng đúng | [ ] |
| Bắt đầu màn 3 (nếu làm) | [ ] |

*Nếu em tick được **5 mục trở lên** → em đạt ~60–70%! Tuần 23 em hoàn thiện và tối ưu phần còn lại.*

#### ✅ Tổng kết (5 phút)

Nhắc lại: hôm nay em đã hoàn thiện màn 2, đảm bảo điểm/mạng xuyên suốt, và một số bạn đã bắt đầu màn 3 — đúng tiến độ ~60–70%! Tuần sau (**Buổi 45**) em sẽ hoàn thiện các màn còn lại và học cách **tối ưu game cho mượt**.

---
## Tuần 23 — Hoàn thiện & Tối ưu

---

### Buổi 45 — Học (H): Hoàn thiện các màn & Tối ưu hiệu năng

#### Hôm nay em học gì?

Hôm nay em **hoàn thiện màn cuối cùng** của game, đồng thời học cách **tối ưu hóa** — làm game chạy **mượt hơn, không bị lag**, và code **gọn gàng hơn** bằng cách gộp những đoạn lặp lại thành My Blocks. Đây là kỹ năng của một "lập trình viên chuyên nghiệp nhỏ tuổi"! ⚡🧹

#### 🎬 Khởi động (5–10 phút)

**"Máy tính bị đơ — vì sao?"**

- Hỏi cả lớp: "Có bạn nào từng chơi game bị **giật, lag, đơ** chưa? Theo em vì sao game bị vậy?"
- Ghi nhanh lên bảng các ý kiến (quá nhiều thứ chạy cùng lúc, máy yếu, code có lỗi...).
- Dẫn vào bài: "Hôm nay mình học cách làm game **mượt mà**, không bị đơ, giống game chuyên nghiệp!"

#### Kiến thức mới (15 phút)

**1. Nguyên nhân game Scratch bị lag ⚠️**

| Nguyên nhân | Vì sao gây lag? |
|-------------|------------------|
| **Quá nhiều clone** không bị xóa | Mỗi clone chiếm bộ nhớ — hàng trăm clone làm máy chậm |
| **Quá nhiều `forever` chạy song song** | Máy phải xử lý tất cả cùng lúc mỗi khung hình |
| **Ảnh (costume) quá to** | Máy tốn công vẽ lại ảnh lớn liên tục |
| **Vòng lặp không cần thiết** | Ví dụ: kiểm tra điều kiện đã chắc chắn đúng/sai mà vẫn lặp lại |

**2. Cách tối ưu — 3 mẹo chính**

- **Luôn xóa clone khi không cần:** `delete this clone` ngay khi clone ra khỏi màn hình hoặc hoàn thành nhiệm vụ.
- **Gộp code lặp lại bằng My Blocks:** nếu 3 sprite đều có đoạn code giống hệt nhau (ví dụ: kiểm tra chạm biên), gộp thành 1 khối dùng chung.
- **Giảm phép tính không cần thiết:** đừng tính `pick random` hay `touching` trong vòng lặp nếu không thực sự cần mỗi khung hình.

**3. My Blocks giúp dọn code — nhắc lại từ tháng 3**

```
define resetMàn
  set [điểm] to (0)
  set [mạng] to (3)
  set [màn hiện tại] to (1)
```

Giờ mọi nơi cần reset, em chỉ cần gọi `resetMàn` — thay vì lặp lại 3 dòng ở nhiều sprite!

**4. Debug có hệ thống — quy trình 4 bước**

| Bước | Em làm gì? |
|------|------------|
| 1. **Tái hiện lỗi** | Làm lại đúng thao tác gây lỗi — lỗi có lặp lại không? |
| 2. **Cô lập** | Tắt bớt sprite/script khác — lỗi còn xảy ra không? |
| 3. **Kiểm tra biến** | Bật hiển thị biến liên quan — giá trị có đúng như mong đợi? |
| 4. **Sửa và test lại** | Sửa 1 chỗ, test ngay — đừng sửa nhiều chỗ cùng lúc |

**Vì sao quan trọng?** Một game có luật chơi hay nhưng bị lag sẽ khiến người chơi khó chịu và bỏ cuộc. Tối ưu và debug có hệ thống là kỹ năng của **lập trình viên thật** — không chỉ viết code chạy được, mà còn viết code **chạy tốt** và **dễ sửa** khi có lỗi!

#### Ví dụ mẫu — Trước và sau khi tối ưu clone

**Trước (gây lag):**
```
when green flag clicked
forever
  create clone of myself
```
→ Tạo clone **liên tục không giới hạn**, không bao giờ xóa — sau 30 giây có hàng nghìn clone, máy đơ!

**Sau (tối ưu):**
```
when green flag clicked
forever
  create clone of myself
  wait (1) secs

when I start as a clone
go to x: (pick random -200 to 200) y: (150)
repeat until <(y position) < (-180)>
  change y by (-5)
delete this clone
```
→ Mỗi giây chỉ tạo 1 clone, và clone **tự xóa** khi rơi khỏi màn hình — số lượng clone luôn được kiểm soát!

#### Em đoán xem?

Nếu game của em có **3 sprite khác nhau**, mỗi sprite đều có đoạn code giống hệt nhau để kiểm tra "chạm biên thì quay đầu", em đoán cách nào tốt hơn: viết lặp lại 3 lần, hay gộp thành **1 My Block dùng chung**? Vì sao?

---

#### TH1 — Hoàn thiện màn cuối (25 phút)

**Mô tả:** Em hoàn thiện **màn cuối cùng** của game (màn 2 hoặc màn 3 tùy kế hoạch) — đảm bảo toàn bộ các màn chơi được liền mạch từ đầu đến cuối.

**Yêu cầu:**
- Màn cuối có đủ tương tác chính, đúng độ khó đã thiết kế.
- Có **luật thắng cuối cùng** rõ ràng (qua hết màn cuối → `say` thắng → `stop all`).
- Test toàn bộ luồng: màn 1 → màn 2 → (màn 3) → thắng, không bị kẹt ở đâu.

**Gợi ý từng bước:**
1. Mở kế hoạch — xem màn cuối còn thiếu gì.
2. Hoàn thiện tương tác, độ khó của màn cuối.
3. Thêm luật thắng cuối cùng: `if <touching [đích cuối]?>` hoặc `if <(điểm) >= (số cuối)>` → `say [Chiến thắng! 🎉]` → `stop all`.
4. **Test toàn bộ:** chơi từ đầu tới cuối ít nhất 1 lần trọn vẹn.
5. **Lưu project.**

**Checklist tự kiểm:**
- [ ] Màn cuối có tương tác chính đầy đủ
- [ ] Có luật thắng cuối cùng rõ ràng
- [ ] Chơi trọn vẹn từ màn 1 đến thắng không bị kẹt
- [ ] Đã lưu project

---

#### 🤸 Giải lao vận động (5 phút)

**Trò chơi "Dọn dẹp clone"**

- Cả lớp đứng thành vòng tròn rộng. Giáo viên hô "Create clone!" — 5 bạn chạy vào giữa vòng tròn đứng thành nhóm nhỏ.
- Hô tiếp "Create clone!" nhiều lần liên tục (không giới hạn) — càng lúc càng đông bạn chen vào giữa, tạo cảnh hỗn loạn ("lag").
- Giáo viên hô "Delete this clone!" — từng bạn ra khỏi giữa vòng tròn, không gian thoáng trở lại.
- Chốt: đây chính là lý do vì sao **luôn phải xóa clone** khi không cần nữa!

#### TH2 — Tối ưu & dọn dẹp code (25 phút)

**Mô tả:** Em rà soát toàn bộ project, tìm và sửa **ít nhất 2 vấn đề tối ưu**: xóa clone thừa, gộp code lặp bằng My Blocks, hoặc giảm phép tính không cần thiết.

**Yêu cầu:**
- Kiểm tra mọi `create clone` đều có `delete this clone` tương ứng.
- Tìm **ít nhất 1 đoạn code lặp lại** ở nhiều sprite → gộp thành 1 My Block.
- Chơi thử game **liên tục 2 phút** — quan sát có bị chậm dần không.

**Gợi ý từng bước:**
1. Kiểm tra từng sprite có dùng clone — tìm khối `create clone` — xem có `delete this clone` đi kèm chưa.
2. Tìm 2–3 sprite có đoạn code **giống hệt nhau** (ví dụ: kiểm tra chạm biên, reset vị trí) → tạo 1 My Block chung, gọi lại ở cả 2-3 sprite.
3. Chơi thử liên tục 2 phút, để ý Stage có bị giật, chậm dần không.
4. Nếu phát hiện lag, dùng quy trình debug 4 bước ở trên để tìm nguyên nhân.
5. **Lưu project** với tên `[TênGame]-toi-uu`.

**Checklist tự kiểm:**
- [ ] Mọi clone đều có `delete this clone`
- [ ] Có ít nhất 1 My Block gộp code lặp
- [ ] Chơi liên tục 2 phút không bị chậm dần
- [ ] Đã lưu project

---

#### Mẹo nhỏ

- Clone "mồ côi" (không bao giờ bị xóa) là nguyên nhân lag phổ biến nhất — luôn kiểm tra kỹ.
- My Block không chỉ giúp code gọn — nó còn giúp em **sửa lỗi nhanh hơn**: sửa 1 chỗ, mọi nơi gọi nó đều được sửa theo.
- Nếu không chắc chỗ nào gây lag, tắt bớt từng sprite (bằng cách kéo ra ngoài Stage tạm thời) để "cô lập" — đúng bước 2 của quy trình debug.
- Đừng tối ưu quá mức tới nỗi làm hỏng code đang chạy tốt — chỉ sửa những chỗ **thực sự có vấn đề**.

#### Câu hỏi ôn (10 phút)

1. Kể 2 nguyên nhân khiến game Scratch bị lag.
2. Vì sao phải `delete this clone`?
3. My Blocks giúp ích gì khi tối ưu code?
4. Quy trình debug 4 bước là gì?
5. Em đã tìm và sửa được vấn đề tối ưu gì hôm nay?

#### 🎉 Tổng kết (10 phút)

- Nhắc lại: hôm nay em đã hoàn thiện màn cuối và học cách tối ưu game — xóa clone thừa, gộp My Blocks, debug có hệ thống.
- Mời 1–2 em chia sẻ vấn đề tối ưu mình đã tìm và sửa được.
- Hẹn gặp lại ở buổi Bài tập tuần này! Em sẽ debug toàn diện và cho bạn chơi thử để thu thập góp ý.

#### 👩‍🏫 Ghi chú cho giáo viên

- **Hỗ trợ nhóm khác tốc độ:** Em xong nhanh → khuyến khích tối ưu thêm hoặc giúp bạn tìm lỗi lag trong project của bạn. Em còn chậm → ưu tiên hoàn thiện màn cuối (TH1) trước, tối ưu (TH2) có thể làm sơ bộ và tiếp tục ở buổi 46.
- **Lỗi kỹ thuật thường gặp:** Học sinh gộp My Block nhưng quên **tham số** (input) nên My Block chỉ dùng được cho 1 trường hợp cụ thể — nếu lớp đã vững My Blocks có tham số (tháng 3), khuyến khích dùng; nếu chưa vững, My Block không tham số vẫn chấp nhận được.
- **Nhắc nhở:** Đây là buổi "dọn dẹp" — không cần thêm tính năng mới, tập trung vào việc **game đã có chạy mượt và ổn định** hơn.

---
### Buổi 46 — Bài tập (BT): Debug toàn diện & Test kỹ

#### 🎬 Khởi động ôn tập (5–10 phút)

**"Bug săn tìm"** — Giáo viên đọc 3 tình huống lỗi, học sinh đoán nhanh nguyên nhân: "Game chậm dần sau 1 phút chơi" (clone không xóa), "2 sprite cùng tên khối nhưng chỉnh 1 chỗ lỗi vẫn còn ở chỗ khác" (thiếu My Block), "Bấm cờ xanh lại thì điểm cũ vẫn còn" (thiếu reset).

#### Ôn nhanh

- **Mục tiêu hôm nay:** Game **ổn định, không lỗi nặng**, đã được người khác chơi thử và góp ý.
- Quy trình debug 4 bước: Tái hiện lỗi → Cô lập → Kiểm tra biến → Sửa và test lại.
- Luôn xóa clone thừa, gộp code lặp bằng My Blocks.

---

#### ✍️ Luyện tập 1, 2 (LT1/LT2) (15–20 phút)

Ngay đầu buổi, em làm tại lớp hai bài luyện tập ngắn, nối tiếp phần tối ưu tuần trước — có giáo viên hỗ trợ tại chỗ.

#### Luyện tập 1 (LT1) — Debug checklist có hệ thống

**Mô tả:** Em dùng **bảng debug** để rà soát toàn bộ game, đánh dấu từng mục và ghi lại lỗi tìm được (nếu có).

**Yêu cầu:**
- Đi qua đủ **6 mục** trong bảng debug.
- Với mỗi mục lỗi, ghi rõ: **hiện tượng** (thấy gì) và **cách sửa** (đã làm gì).

**Bảng debug:**

| # | Kiểm tra | Có lỗi không? |
|---|----------|-----------------|
| 1 | Bấm cờ xanh nhiều lần liên tiếp — điểm/mạng có reset đúng không? | [ ] |
| 2 | Chơi liên tục 2 phút — game có chậm dần không? | [ ] |
| 3 | Chuyển màn — có sprite nào bị chồng hình không? | [ ] |
| 4 | Thắng/thua — game có dừng đúng lúc không? | [ ] |
| 5 | Di chuyển ra mép màn hình — nhân vật có biến mất không? | [ ] |
| 6 | Bấm phím thật nhanh liên tục — có lỗi gì bất thường không? | [ ] |

**Gợi ý từng bước:**
1. Đi qua từng mục, thử đúng thao tác được mô tả.
2. Nếu phát hiện lỗi, ghi ra giấy: hiện tượng cụ thể (ví dụ: "mạng về -1 thay vì dừng ở 0").
3. Dùng quy trình debug 4 bước để sửa.
4. Test lại đúng mục đó sau khi sửa.
5. Lưu project tên `LT1-debug-checklist`.

**Checklist tự kiểm:**
- [ ] Đã kiểm tra đủ 6 mục
- [ ] Ghi lại lỗi tìm được (nếu có) và cách sửa
- [ ] Test lại sau khi sửa
- [ ] Em đã lưu project

#### Luyện tập 2 (LT2) — Test với "người chơi thật"

**Mô tả:** Em cho **bạn cùng lớp** chơi thử game của mình (không hướng dẫn trước) và ghi lại góp ý.

**Yêu cầu:**
- Đưa máy cho bạn, **không nói gì** trong 1 phút đầu — quan sát bạn tự chơi.
- Ghi lại: bạn có **hiểu cách chơi** không? Bạn bị **kẹt ở đâu**? Bạn có thấy **lỗi gì** không?
- Đổi lại, em chơi thử game của bạn và góp ý cho bạn.

**Gợi ý từng bước:**
1. Đưa máy, chỉ nói: "Bạn thử chơi xem sao."
2. Quan sát im lặng 1 phút — bạn có biết phải làm gì không?
3. Hỏi 3 câu: "Bạn có hiểu cách chơi không?", "Chỗ nào bạn thấy khó/lạ?", "Có lỗi gì bạn thấy không?"
4. Ghi lại góp ý, chọn **1 điều** để sửa ngay nếu còn thời gian.
5. Đổi vai — em chơi game bạn, góp ý lại cho bạn.

**Checklist tự kiểm:**
- [ ] Đã cho bạn chơi thử, quan sát 1 phút không hướng dẫn
- [ ] Ghi lại được góp ý cụ thể
- [ ] Đã chơi thử và góp ý cho game của bạn
- [ ] Em đã lưu project (nếu có sửa)

#### Chọn bài mở rộng (10 phút)

Ba mức dưới đây phản ánh **mức độ hoàn thiện** của game — em chọn **1 mức** A, B hoặc C, rồi **1 trong 2 bài** phù hợp với tình trạng game hiện tại.

| Mức | Khi nào chọn |
|-----|--------------|
| **A1 hoặc A2** | Game em còn vài lỗi cần sửa gấp trước khi hoàn thiện |
| **B1 hoặc B2** | Game em đã ổn định, cần polish thêm chi tiết |
| **C1 hoặc C2** | Game em đã tốt, sẵn sàng thêm tính năng nâng cao |

---

#### ✍️ Làm bài mở rộng (35–40 phút)

#### Bài A1 — Sửa lỗi ưu tiên cao

| | |
|---|---|
| **Mô tả** | Em tập trung sửa **lỗi khiến game không chơi được** (game bị treo, không chuyển màn, không dừng khi thắng/thua) — đây là lỗi cần sửa trước tiên. |
| **Yêu cầu bắt buộc** | Xác định và sửa ít nhất **2 lỗi nghiêm trọng** (game không chạy/không dừng đúng); test lại sau khi sửa; ghi rõ hiện tượng lỗi và cách đã sửa. |
| **Gợi ý bước** | 1. Ưu tiên lỗi làm game "chết" (không bấm được, không phản hồi). 2. Dùng quy trình debug 4 bước cho từng lỗi. 3. Test lại toàn bộ luồng sau khi sửa. |
| **Checklist** | - [ ] Sửa được ≥ 2 lỗi nghiêm trọng<br>- [ ] Ghi rõ hiện tượng + cách sửa<br>- [ ] Test lại không còn lỗi đó<br>- [ ] Em đã lưu project |
| **Thử thêm** | Nhờ 1 bạn khác (ngoài bạn LT2) chơi thử lại để xác nhận lỗi đã hết hẳn. |

---

#### Bài A2 — Sửa lỗi theo góp ý từ bạn

| | |
|---|---|
| **Mô tả** | Em sửa game dựa trên **góp ý cụ thể** từ bạn ở LT2 — ưu tiên chỗ bạn bị kẹt hoặc không hiểu cách chơi. |
| **Yêu cầu bắt buộc** | Sửa ít nhất **1 điểm** bạn góp ý; cho **chính bạn đó** (hoặc bạn khác) chơi thử lại sau khi sửa; ghi lại bạn có hài lòng hơn không. |
| **Gợi ý bước** | 1. Đọc lại góp ý đã ghi ở LT2. 2. Chọn góp ý quan trọng nhất — sửa. 3. Cho bạn chơi thử lại, hỏi cảm nhận. |
| **Checklist** | - [ ] Sửa được ≥ 1 điểm theo góp ý<br>- [ ] Bạn chơi thử lại xác nhận đã cải thiện<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm hướng dẫn ngắn trong game (ví dụ: `say [Dùng phím mũi tên để di chuyển!]` lúc bắt đầu) nếu bạn không hiểu cách chơi. |

---

#### Bài B1 — Polish âm thanh và hiệu ứng

| | |
|---|---|
| **Mô tả** | Game em đã ổn định — giờ thêm **âm thanh và hiệu ứng** để game sống động hơn (dùng lại kỹ thuật hiệu ứng đã học ở tháng 5). |
| **Yêu cầu bắt buộc** | Thêm ít nhất **2 âm thanh** đúng lúc (ví dụ: khi ăn điểm, khi chuyển màn); thêm ít nhất **1 hiệu ứng hình ảnh** (mờ dần, nhấp nháy, phóng to); game vẫn chạy ổn sau khi thêm. |
| **Gợi ý bước** | 1. Chọn 2 sự kiện quan trọng để thêm âm thanh (ăn điểm, chuyển màn, thắng/thua). 2. Thêm 1 hiệu ứng (ví dụ: nhân vật nhấp nháy khi mất mạng — dùng lại công thức tháng 5). 3. Test không bị lag sau khi thêm. |
| **Checklist** | - [ ] ≥ 2 âm thanh đúng lúc<br>- [ ] ≥ 1 hiệu ứng hình ảnh<br>- [ ] Không gây lag khi thêm<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm nhạc nền nhẹ nhàng chạy suốt game (dùng `play sound until done` trong `forever` với điều kiện lặp hợp lý). |

---

#### Bài B2 — Polish giao diện & thông báo rõ ràng

| | |
|---|---|
| **Mô tả** | Em cải thiện **giao diện** game — biến hiển thị đẹp, thông báo rõ ràng, dễ hiểu cho người chơi mới. |
| **Yêu cầu bắt buộc** | Sắp xếp lại vị trí các biến trên Stage cho gọn gàng, không che nhân vật; thêm thông báo hướng dẫn ngắn lúc bắt đầu (`say` hoặc sprite chữ); màn hình thắng/thua có thông báo rõ ràng, dễ đọc. |
| **Gợi ý bước** | 1. Kéo các biến trên Stage về góc, không che vùng chơi chính. 2. Thêm `say [Dùng phím ... để chơi!]` ở đầu game. 3. Kiểm tra thông báo thắng/thua đủ lớn, đủ thời gian đọc (≥ 2 giây). |
| **Checklist** | - [ ] Biến sắp xếp gọn, không che nhân vật<br>- [ ] Có hướng dẫn ngắn lúc bắt đầu<br>- [ ] Thông báo thắng/thua rõ ràng<br>- [ ] Em đã lưu project |
| **Thử thêm** | Thêm màn hình "Hướng dẫn chơi" riêng trước khi vào game thật (bấm phím bất kỳ để bắt đầu). |

---

#### Bài C1 — Thêm tính năng "chơi lại" hoàn chỉnh

| | |
|---|---|
| **Mô tả** | Em thêm nút hoặc phím **"Chơi lại"** sau khi thắng/thua — cho phép người chơi bắt đầu lại từ màn 1 mà **không cần bấm lại cờ xanh**. |
| **Yêu cầu bắt buộc** | Có sprite/phím "Chơi lại" xuất hiện sau khi thắng/thua; bấm vào reset đúng toàn bộ biến (điểm, mạng, màn hiện tại) và quay về màn 1; không để sót sprite nào chưa reset đúng. |
| **Gợi ý bước** | 1. Tạo sprite nút "Chơi lại" hoặc dùng phím `r`. 2. Khi bấm: gọi lại My Block `resetMàn` (nếu đã có từ buổi 45) hoặc viết lại đầy đủ các `set`. 3. `broadcast [bắt đầu màn 1]` để mọi sprite quay về đúng trạng thái. 4. Test bấm "Chơi lại" nhiều lần liên tiếp. |
| **Checklist** | - [ ] Có nút/phím "Chơi lại"<br>- [ ] Reset đúng toàn bộ biến<br>- [ ] Quay về màn 1 đúng cách<br>- [ ] Test nhiều lần không lỗi<br>- [ ] Em đã lưu project |
| **Thử thêm** | Lưu lại **điểm cao nhất** giữa các lần chơi lại (dùng biến `điểm cao nhất` không bị reset khi "Chơi lại"). |

---

#### Bài C2 — Kiểm thử toàn diện với nhiều bạn

| | |
|---|---|
| **Mô tả** | Em tổ chức **test game với ít nhất 3 bạn khác nhau**, tổng hợp góp ý thành danh sách và sửa những vấn đề chung được nhiều bạn cùng nhắc tới. |
| **Yêu cầu bắt buộc** | Cho ≥ 3 bạn chơi thử (có thể luân phiên nhanh); ghi lại góp ý của từng bạn; xác định **1 vấn đề chung** (từ 2 bạn trở lên) và sửa nó. |
| **Gợi ý bước** | 1. Lần lượt cho 3 bạn chơi thử 1–2 phút mỗi người. 2. Ghi nhanh góp ý mỗi bạn vào bảng: Tên bạn - Góp ý. 3. Tìm điểm chung — nếu ≥ 2 bạn cùng nhắc 1 vấn đề, đó là ưu tiên sửa. 4. Sửa và test lại. |
| **Checklist** | - [ ] Có góp ý từ ≥ 3 bạn<br>- [ ] Xác định được vấn đề chung<br>- [ ] Đã sửa vấn đề đó<br>- [ ] Em đã lưu project |
| **Thử thêm** | Viết 1 đoạn ngắn (2–3 câu) tổng kết "Những gì em đã cải thiện sau khi nghe góp ý" — dùng để kể ở phần thuyết trình tuần sau. |

---

#### 🖼️ Showcase (5–10 phút)

Em bấm cờ xanh cho 2–3 bạn gần nhất chơi thử phiên bản đã sửa hôm nay. Hỏi: "Có thấy mượt hơn / rõ ràng hơn tuần trước không?"

#### ✅ Tổng kết (5 phút)

Nhắc lại: hôm nay em đã debug có hệ thống, test với người chơi thật, và sửa được nhiều vấn đề quan trọng — game của em giờ đã **ổn định và sẵn sàng** cho bước tiếp theo. Tuần sau (**Buổi 47**) em sẽ học cách **xuất bản game lên cộng đồng Scratch** và luyện thuyết trình tổng kết cả khóa!

---

## Tuần 24 — Xuất bản & Showcase cuối khóa

---
### Buổi 47 — Học (H): Chuẩn bị xuất bản & Luyện thuyết trình

#### Hôm nay em học gì?

Đây là buổi học **cuối cùng trước Showcase toàn khóa**! Em sẽ:
1. Học cách **xuất bản (share)** project lên cộng đồng Scratch — viết hướng dẫn, mô tả, và các quy tắc **an toàn khi chia sẻ online**.
2. **Luyện thuyết trình 3 phút** — tổng kết cả hành trình 6 tháng, không chỉ 1 game.

Sau hôm nay, game của em sẽ **thật sự có mặt** trên cộng đồng Scratch toàn cầu! 🌍🚀

#### 🎬 Khởi động (5–10 phút)

**"Nếu bạn ở nước khác chơi game của em..."**

- Hỏi cả lớp: "Nếu một bạn ở **nước khác**, chưa từng gặp em, mở project của em lên chơi — bạn ấy có biết **chơi thế nào** không? Có hiểu tên game nghĩa là gì không?"
- Dẫn vào bài: "Khi xuất bản lên cộng đồng Scratch, người chơi **không có em ở bên cạnh** để hướng dẫn — vì vậy hôm nay mình học cách viết **hướng dẫn rõ ràng** để bất kỳ ai cũng chơi được!"

#### Kiến thức mới (15 phút)

**1. Cộng đồng Scratch là gì? 🌍**

Scratch (scratch.mit.edu) là nơi **hàng triệu bạn nhỏ trên khắp thế giới** chia sẻ project của mình. Khi em bấm nút **Share**, project của em sẽ xuất hiện công khai — người khác có thể xem, chơi, và thậm chí "remix" (làm lại dựa trên ý tưởng của em).

**2. Trang project cần những gì? 📝**

| Phần | Nội dung |
|------|----------|
| **Tên project** | Tên chính thức, hấp dẫn, không phải "Untitled" |
| **Thumbnail (ảnh đại diện)** | Ảnh chụp màn hình lúc đang chơi — đẹp, rõ nét |
| **Instructions (Hướng dẫn chơi)** | Phím điều khiển, luật thắng/thua — viết **ngắn gọn, rõ ràng** |
| **Notes and Credits (Ghi chú)** | Em tự làm hay dùng ý tưởng/hình ảnh từ ai — cảm ơn nếu có |

**3. Viết Instructions hay — công thức 4 dòng**

```
🎮 Cách chơi: [phím nào làm gì]
🎯 Mục tiêu: [luật thắng]
⚠️ Cẩn thận: [luật thua / điều cần tránh]
✨ Mẹo: [1 mẹo nhỏ giúp chơi tốt hơn]
```

**4. An toàn khi chia sẻ online — 3 quy tắc quan trọng ⚠️**

- **Không** chia sẻ thông tin cá nhân: họ tên đầy đủ, địa chỉ nhà, số điện thoại, trường học.
- **Tôn trọng** người khác: không copy hoàn toàn project của bạn khác mà không ghi credit; bình luận lịch sự.
- **Luôn hỏi người lớn** (bố mẹ, giáo viên) trước khi bấm Share lần đầu, để cùng kiểm tra project an toàn.

**Vì sao quan trọng?** Xuất bản không chỉ là "bấm 1 nút" — nó là bước biến bài tập trong lớp thành **sản phẩm thật** mà bất kỳ ai trên thế giới cũng có thể xem và chơi. Viết hướng dẫn rõ ràng và giữ an toàn online là kỹ năng quan trọng không chỉ cho Scratch, mà cho **mọi thứ em chia sẻ trên Internet sau này**!

#### Ví dụ mẫu — Instructions hoàn chỉnh

```
🎮 Cách chơi: Dùng phím mũi tên ← → để di chuyển, phím Space để nhảy.
🎯 Mục tiêu: Vượt qua cả 3 màn, tới cờ đích ở màn cuối để chiến thắng!
⚠️ Cẩn thận: Chạm vào thiên thạch sẽ mất 1 mạng — hết 3 mạng là thua.
✨ Mẹo: Nhảy sớm hơn 1 chút trước khi tới mép bệ để không bị hụt!
```

#### Em đoán xem?

Nếu Instructions của em chỉ viết "Chơi đi sẽ biết", em đoán người chơi lần đầu (không quen em) có chơi được không? Vì sao viết Instructions rõ ràng lại quan trọng hơn khi game có **nhiều màn** so với game 1 màn đơn giản?

---

#### TH1 — Viết Instructions + Notes and Credits (20 phút)

**Mô tả:** Em viết phần **Instructions** (hướng dẫn chơi) và **Notes and Credits** (ghi chú) cho project của mình, theo đúng công thức 4 dòng.

**Yêu cầu:**
- Instructions đủ 4 phần: Cách chơi, Mục tiêu, Cẩn thận, Mẹo.
- Notes and Credits ghi rõ: em tự làm project, và cảm ơn nếu dùng costume/sound có sẵn của Scratch.
- Đọc thử cho bạn nghe — bạn có hiểu cách chơi mà **chưa từng thấy game** của em không?

**Gợi ý từng bước:**
1. Mở project Scratch, tìm khu vực **Instructions** và **Notes and Credits** bên cạnh Stage.
2. Viết Instructions theo công thức 4 dòng ở trên.
3. Viết Notes and Credits: *"Project của [tên em], làm trong khóa Scratch InnoMind. Cảm ơn Scratch vì thư viện costume/sound có sẵn."*
4. Đọc to cho bạn cùng bàn nghe — bạn góp ý chỗ nào chưa rõ.
5. Sửa lại nếu cần.

**Checklist tự kiểm:**
- [ ] Instructions đủ 4 phần
- [ ] Notes and Credits có ghi rõ nguồn
- [ ] Bạn đọc hiểu cách chơi mà không cần hỏi thêm
- [ ] Em đã lưu project

---

#### 🤸 Giải lao vận động (5 phút)

**Trò chơi "Hướng dẫn mù"**

- Ghép cặp 2 bạn. 1 bạn bịt mắt (hoặc nhắm mắt), bạn kia chỉ được dùng **lời nói** để hướng dẫn bạn đi từ điểm A đến điểm B trong lớp (né bàn ghế).
- Đổi vai sau 1 phút.
- Hỏi cả lớp: "Hướng dẫn bằng lời khó hay dễ? Nếu hướng dẫn không rõ ràng, chuyện gì xảy ra?" → liên hệ tới việc viết Instructions rõ ràng cho người chơi chưa từng gặp em.

#### TH2 — Polish cuối cùng & Luyện thuyết trình 3 phút (25 phút)

**Mô tả:** Em polish lần cuối và luyện nói **3 phút** tổng kết cả hành trình 6 tháng — không chỉ giới thiệu game, mà kể **em đã học được gì**.

**Yêu cầu:**
- Nói đủ **5 phần:** (1) Tên game + kỹ thuật nâng cao dùng (2) Cách chơi (3) 1 khó khăn đã gặp và cách em vượt qua (4) Demo 45 giây (5) 1 câu về hành trình 6 tháng học Scratch.
- Thời gian: **2 phút 30 giây – 3 phút 30 giây**.
- Luyện **ít nhất 2 lượt** ngay tại lớp.

**Gợi ý từng bước:**
1. Viết 5 câu nháp — mỗi phần 1–2 câu.
2. **Lượt 1:** nói thử một mình hoặc với giáo viên, nhìn giấy nháp nếu cần.
3. **Lượt 2:** nói lại với bạn cùng bàn, cố gắng ít nhìn giấy hơn, thêm cảm xúc.
4. Nghe góp ý — ghi 1 việc cần sửa và áp dụng ngay.

**Mẫu lời 5 câu:**
- *"Game của em tên …, em dùng kỹ thuật … (danh sách/platformer/hiệu ứng)."*
- *"Cách chơi: … Mục tiêu: vượt qua … màn."*
- *"Khó khăn lớn nhất là …, em đã giải quyết bằng cách …"*
- *"Bây giờ em demo!"*
- *"Sau 6 tháng học Scratch, em tự hào nhất vì …"*

**Checklist tự kiểm:**
- [ ] Nói đủ 5 phần
- [ ] Trong khoảng 3 phút (± 30 giây)
- [ ] Có demo game thật
- [ ] Đã luyện ít nhất 2 lượt tại lớp
- [ ] Instructions đã viết xong, sẵn sàng bấm Share (nếu được phép)

---

#### Mẹo nhỏ

- Instructions ngắn gọn nhưng **đủ thông tin** quan trọng hơn là dài dòng.
- Nếu chưa được phép Share (cần người lớn xác nhận), vẫn có thể luyện Instructions và lưu file `.sb3` để nộp/trình chiếu.
- Kể về "khó khăn đã vượt qua" khiến bài thuyết trình **thật và ấn tượng hơn** — đừng ngại nói về lỗi mình từng gặp.
- 3 phút nghe có vẻ dài, nhưng chia đều cho 5 phần thì mỗi phần chỉ khoảng 30–40 giây — không cần lo lắng.

#### Câu hỏi ôn (10 phút)

1. Instructions cần có những phần nào?
2. Kể 3 quy tắc an toàn khi chia sẻ project online.
3. Vì sao cần Notes and Credits?
4. Trong bài thuyết trình hôm nay có thêm phần gì so với thuyết trình tháng 4?
5. Em tự hào nhất điều gì sau 6 tháng học Scratch?

#### 🎉 Tổng kết (10 phút)

- Nhắc lại: hôm nay em đã viết Instructions, học quy tắc an toàn online, và luyện thuyết trình 3 phút tổng kết cả hành trình — mọi thứ đã sẵn sàng cho Showcase!
- Mời 1–2 em thuyết trình thử trước lớp để cả lớp làm quen không khí Showcase cuối khóa.
- Hẹn gặp lại ở buổi **Showcase cuối khóa** tuần này! Nhớ mang project đã lưu — mọi thứ đã chuẩn bị xong ngay tại lớp.

#### 👩‍🏫 Ghi chú cho giáo viên

- **An toàn khi Share:** Việc bấm nút Share thật (công khai project) cần có sự đồng ý và giám sát của phụ huynh/nhà trường theo chính sách của trung tâm — buổi học này chỉ dạy kỹ năng viết Instructions và hiểu quy tắc an toàn, việc Share thực tế nên thực hiện theo quy trình riêng của lớp/trung tâm.
- **Hỗ trợ nhóm khác tốc độ:** Em xong nhanh → luyện thêm lượt 3 thuyết trình hoặc giúp bạn viết Instructions. Em còn chậm → ưu tiên xong Instructions cơ bản (TH1) trước, luyện thuyết trình có thể chỉ 1 lượt tại lớp.
- **Dấu hiệu cần hỗ trợ thêm:** Nếu học sinh viết Instructions quá sơ sài ("chơi đi sẽ biết") — yêu cầu đọc thử cho 1 bạn hoàn toàn chưa biết game để tự nhận ra thiếu sót.

---
### Buổi 48 — Showcase cuối khóa: Xuất bản & Thuyết trình

> Đây là buổi **đặc biệt** — buổi cuối cùng của cả khóa Scratch 6 tháng! Không có TH/BTVN mới. Em **xuất bản game** (nếu được phép) và **thuyết trình 3 phút** trước lớp, tổng kết toàn bộ hành trình học tập.

#### Hôm nay em làm gì? (5 phút mở đầu)

1. Sắp xếp lớp / máy — mỗi bạn có **3 phút** thuyết trình.
2. (Nếu được phép) Bấm **Share** project lên Scratch cùng sự hướng dẫn của giáo viên.
3. Lần lượt lên (hoặc chia nhóm) — **nói + demo** game.
4. Bạn nghe — có thể vỗ tay, hỏi 1 câu (nếu thầy/cô cho phép).
5. Cuối buổi: tự đánh giá và ăn mừng — em đã hoàn thành **cả khóa Scratch 6 tháng**!

**⏱ Phân bổ thời gian cả buổi:** Buổi Showcase cuối khóa được phép **chạy dài hơn 90 phút** vì mọi phút đều là thuyết trình thật của học sinh — với lớp 20–25 em, thời gian trình bày (3 phút/em) đã chiếm khoảng **75–90 phút**, cộng thêm 5 phút mở đầu và 10–15 phút tổng kết cuối buổi (dài hơn buổi 32 vì đây là lễ tổng kết cả khóa), tổng buổi khoảng **90–120 phút** tuỳ sĩ số lớp.

---

#### Mẫu thuyết trình 7 bước (2 phút 30 giây – 3 phút 30 giây)

Em có thể viết 7 câu vào giấy — mỗi bước khoảng 20–30 giây:

| Bước | Em nói gì? | Ví dụ ngắn |
|------|------------|------------|
| **1. Chào** | Chào lớp, giới thiệu tên mình | *"Xin chào, em là Minh."* |
| **2. Tên & thể loại** | Tên game + loại game + số màn | *"Game em làm tên Robot Vượt Chướng Ngại, có 3 màn."* |
| **3. Câu chuyện / ý tưởng** | Vì sao em làm game này? | *"Em thích robot nên làm nhân vật robot nhảy qua bệ đá."* |
| **4. Cách chơi** | Phím gì? Thắng thua thế nào? | *"Dùng mũi tên và Space để nhảy. Qua hết 3 màn thì thắng."* |
| **5. Kỹ thuật tự hào** | 1 kỹ thuật nâng cao em dùng | *"Em dùng trọng lực để robot nhảy giống thật, và danh sách lưu điểm cao."* |
| **6. Demo** | Chạy game 45 giây | *"Em demo nhé!"* |
| **7. Hành trình 6 tháng** | 1 câu tổng kết những gì em học được | *"Sau 6 tháng, em tự hào nhất vì đã tự làm được game nhiều màn từ đầu đến cuối. Cảm ơn các bạn!"* |

**Thời gian gợi ý:**

```
Chào + Tên game       ███░░░░░░░  20 giây
Ý tưởng + Cách chơi   █████░░░░░  40 giây
Kỹ thuật tự hào       ███░░░░░░░  25 giây
Demo game              ██████░░░░  45 giây
Hành trình 6 tháng     ████░░░░░░  30 giây
──────────────────────────────────────────
Tổng                  ~2 phút 40 giây – 3 phút
```

---

#### Checklist trước khi lên trình bày (1 phút/em)

Em tick **ngay trước** khi được gọi tên:

**Máy & project:**
- [ ] Project Scratch **đã mở sẵn** (đúng tên game)
- [ ] Đã **lưu** bản mới nhất (mạng / file .sb3)
- [ ] **Cờ xanh** chạy được — em đã test 1 lần sáng nay hoặc trước giờ Showcase
- [ ] Instructions đã viết xong (nếu Share)

**Nội dung nói:**
- [ ] Em nhớ **tên game**, **số màn**, và **kỹ thuật nâng cao** đã dùng
- [ ] Em nói được **cách chơi** trong 2 câu
- [ ] Em chọn sẵn **phần khó khăn đã vượt qua** để kể
- [ ] Em biết **demo** phần nào (chuyển màn, kỹ thuật nâng cao) — không cần chơi hết cả 3 màn

**Thái độ:**
- [ ] Em đứng **quay ra lớp** (nhìn bạn, không chỉ nhìn màn hình)
- [ ] Em nói **to, rõ**, tự tin — em đã luyện 2 lượt ở buổi trước rồi!
- [ ] Nếu lỗi khi demo: bình tĩnh, bấm cờ xanh lại hoặc nói *"Lúc nãy em test vẫn chạy tốt ạ"*

---

#### Em demo những gì? (Gợi ý 45 giây)

Chọn **2–3 khoảnh khắc nổi bật** — **không** cần chơi từ màn 1 đến hết game (có thể mất quá 3 phút)!

| Điều nên demo | Vì sao chọn |
|----------------|-------------|
| Cảnh **chuyển màn** | Đây là kỹ thuật mới của tháng 6, rất ấn tượng khi xem trực tiếp |
| **Kỹ thuật nâng cao** đang hoạt động | Nhảy qua bệ, danh sách hiện điểm, hoặc hiệu ứng đẹp |
| Khoảnh khắc **thắng** hoặc gần thua | Cho thấy luật chơi rõ ràng, có kịch tính |

**Câu dẫn demo mẫu:**
- *"Bây giờ em bấm cờ xanh — em chơi nhanh màn 1 để các bạn thấy cách chuyển màn."*
- *"Đây là lúc robot nhảy qua bệ — em dùng công thức trọng lực đã học."*
- *"Và đây là màn hình chiến thắng khi qua hết cả 3 màn!"*

---

#### Sau khi thuyết trình (10–15 phút, cuối buổi)

**Tự tổng kết hành trình 6 tháng — em viết nháp hoặc chia sẻ với lớp:**

1. Buổi/tuần nào em thấy **khó nhất** trong cả khóa? Em đã vượt qua thế nào?
2. Kỹ thuật nào em **thích dùng nhất** (biến, vòng lặp, clone, broadcast, danh sách, trọng lực...)?
3. So với game đầu tiên em làm ở Tuần 1, game cuối khóa này **khác biệt** thế nào?
4. Game của bạn nào em thích — 1 điều em học được từ bạn?
5. Sau khóa học này, em có muốn tiếp tục làm game hoặc học lập trình thêm không?

**Giáo viên tổng kết cả lớp:** Nhắc lại hành trình 6 tháng — từ những khối lệnh đầu tiên (Tuần 1) tới game nhiều màn hoàn chỉnh (Tuần 24) — và chúc mừng cả lớp đã hoàn thành khóa học!

---

#### 👩‍🏫 Ghi chú cho giáo viên — Giữ nhịp buổi Showcase cuối khóa

Chuẩn bị sẵn đồng hồ bấm giờ hiện rõ cho cả lớp thấy; nếu lớp đông (>20 em), cân nhắc giới hạn demo còn **30 giây** thay vì 45 giây để cả lớp kịp trình bày trong buổi; nhắc nhẹ khi 1 em vượt quá 3 phút 30 giây để bạn tiếp theo không bị dồn giờ. Vì đây là buổi tổng kết cả khóa 6 tháng, nên dành thêm thời gian cuối buổi để mỗi em (hoặc cả lớp) chia sẻ 1 câu cảm nghĩ — đây thường là khoảnh khắc ý nghĩa nhất của cả khóa học. Nếu trung tâm có kế hoạch trao chứng nhận hoàn thành khóa học, đây là thời điểm phù hợp để tổ chức.

#### Không có bài TH / BTVN hôm nay

Buổi Showcase cuối khóa là buổi **trình bày và ăn mừng** — em mang:
- Project Scratch (online hoặc file) — thành quả của 6 tháng học tập
- (Tuỳ chọn) Storyboard / kế hoạch nhiều màn đã làm
- Tự tin, nụ cười, và niềm tự hào — em đã là một **lập trình viên game nhỏ tuổi** thực thụ! 🎮🏆

---

## Em đã hoàn thành khóa Scratch nâng cao!

**Hành trình 6 tháng của em:**

| Tháng | Em đã làm |
|-------|-----------|
| Tháng 1 | Làm quen Scratch, di chuyển, hoạt hình, phím |
| Tháng 2 | Âm thanh, cảm biến, vòng lặp, biến |
| Tháng 3 | Broadcast, clone, My Blocks, debug |
| Tháng 4 | Tự thiết kế game 1 màn + thuyết trình |
| Tháng 5 | Danh sách, trọng lực & platformer, hiệu ứng & Pen |
| Tháng 6 | **Dự án lớn nhiều màn + xuất bản + thuyết trình cuối khóa** |

**Em nhớ:**
- Tuần 21: Ý tưởng game lớn + storyboard nhiều màn
- Tuần 22: Code màn chơi chính + kỹ thuật chuyển màn
- Tuần 23: Hoàn thiện các màn + tối ưu & debug
- Tuần 24: Xuất bản + **Showcase cuối khóa**

Em đã đi từ những bước đi đầu tiên với chú mèo Scratch cho tới **tự thiết kế và hoàn thiện một game nhiều màn** — em thật sự là một **nhà làm game nhỏ**! Tiếp tục sáng tạo trên [scratch.mit.edu](https://scratch.mit.edu) nhé — đây chỉ là khởi đầu của hành trình lập trình của em!

---

*Quay lại [curriculum.md](curriculum.md) để xem lộ trình 48 buổi.*
