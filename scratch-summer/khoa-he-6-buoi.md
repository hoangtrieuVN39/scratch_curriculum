# Khóa hè Scratch 6 buổi — Game Studio mùa hè

> Khóa hè ngắn dành cho lớp ghép 3 học sinh (lớp 3, lớp 7, lớp 8), trong đó có học sinh Việt kiều chỉ biết tiếng Việt căn bản. Định vị khóa học: **một xưởng game (game studio) thu nhỏ** — mỗi buổi cả nhóm phát triển và ra mắt một game hoàn chỉnh, cuối khóa mỗi người tự làm game của riêng mình.

**Thông tin chung**

| Mục | Nội dung |
|-----|----------|
| Số buổi | 6 buổi × 90 phút, học offline |
| Đầu vào | Chưa biết Scratch, học chung 1 lớp |
| Công cụ | Trang web [scratch.mit.edu](https://scratch.mit.edu) mở trên **trình duyệt** (Safari/Chrome) — **giao diện tiếng Anh** (khối lệnh tiếng Anh) |
| Thiết bị | **Chỉ dùng iPad/điện thoại** — không chuột, không bàn phím. Mọi game thiết kế cho **cảm ứng**: chạm (tap) và kéo ngón tay (drag) |
| Ngôn ngữ dạy | Giáo viên nói **tiếng Việt câu ngắn, đơn giản**; slide **song ngữ Việt–Anh** cho từ khóa |
| Sản phẩm | Mỗi buổi 1 game chơi được; cuối khóa mỗi bạn có **5 game + 1 game tự thiết kế** |
| Chủ đề xuyên suốt | Mùa hè Việt Nam: món ăn, cảnh đẹp, đời sống — chất liệu quen mà lạ với học sinh Việt kiều, đủ "meme" để học sinh cấp 2 thấy thú vị |

---

## Nguyên tắc thiết kế (hội đồng đã thống nhất)

1. **Không buổi nào chỉ học lý thuyết.** Kiến thức mới tối đa 15 phút, còn lại là làm game.
2. **Một game lõi — chọn độ khó như trong game thật.** Cả lớp cùng làm 1 game nền, sau đó mỗi người tự chọn mức nâng cấp:
   - 🟢 **Easy** — hoàn thiện bản gốc: chỉnh nhân vật, âm thanh, giao diện.
   - 🟡 **Normal** — thêm 1 luật chơi mới.
   - 🔴 **Hard** — thêm cơ chế khó: điểm, mạng, tăng tốc, nhiều màn.
   - Tự chọn mức, không gán theo lớp. Ai xong sớm nhận vai **playtester**: chơi thử game của bạn khác và báo lỗi (bug report) — kỹ năng thật của ngành game.
3. **Song ngữ có chủ đích.** Mỗi buổi 6–8 từ khóa Việt–Anh, dùng lặp lại trong ngữ cảnh thật. Khối lệnh Scratch giữ tiếng Anh, slide ghi kèm nghĩa tiếng Việt.
4. **Cuối buổi nào cũng có Playtest:** đổi máy, chơi game của nhau, góp ý theo mẫu "1 điểm hay + 1 điểm nên sửa".
5. **Buổi 6 là Demo Day:** ra mắt game tự làm, phụ huynh được mời đến chơi thử với vai người chơi đầu tiên.
6. **Thiết kế cho cảm ứng.** Học sinh chỉ dùng iPad/điện thoại (trang web Scratch mở trên trình duyệt) — không game nào dùng bàn phím. Điều khiển bằng chạm và kéo ngón tay; trên màn hình cảm ứng, ngón tay đóng vai trò `mouse-pointer` và `mouse down?` nghĩa là "đang chạm màn hình".

---

## Tổng quan 6 buổi

| Buổi | Tên buổi | Game sản phẩm | Kiến thức chính |
|------|----------|---------------|-----------------|
| 1 | Vào xưởng game | **Chase** — truy đuổi trên bãi biển | Giao diện, sprite, motion, event |
| 2 | Thiết kế màn chơi | **Maze Hội An** — mê cung phố cổ | Điều khiển cảm ứng, if–then, touching |
| 3 | Điểm số & may rủi | **Bánh mì Rush** — hứng đồ rơi | Biến điểm số, random, forever |
| 4 | Game phải có thua | **Hạ Long Dodge** — thuyền né đá | Mạng (lives), game over, độ khó tăng dần |
| 5 | Phản xạ & nhịp game | **Chuột chợ quê** — whack-a-mole | Show/hide, chạm sprite (tap), countdown |
| 6 | Demo Day | **Game của riêng mình** — remix + ra mắt | Thiết kế game, hoàn thiện, trình bày |

---

# BUỔI 1 — Vào xưởng game

**Game sản phẩm:** Chase — chú chó chạy theo ngón tay em chạm trên màn hình, chạm được con mèo thì mèo kêu và dịch chuyển ngẫu nhiên sang chỗ khác. Đơn giản nhưng đã có đủ vòng lặp game: mục tiêu → hành động → phản hồi.

**Mục tiêu buổi học**
- Biết Stage, Sprite, Backdrop, khu khối lệnh.
- Kéo–thả khối lệnh, cho nhân vật di chuyển và phát âm thanh.
- Lưu project và đặt tên.

**Từ khóa song ngữ (đưa lên slide, dùng lặp lại cả buổi)**

| Tiếng Việt | English |
|------------|---------|
| Sân khấu | Stage |
| Nhân vật | Sprite |
| Phông nền | Backdrop |
| Khối lệnh | Block |
| Di chuyển | Move |
| Khi cờ xanh được bấm | When green flag clicked |
| Âm thanh | Sound |

**Khung 90 phút**

| Thời gian | Hoạt động | Chi tiết |
|-----------|-----------|----------|
| 0–10' | 🎮 Mở màn | Chơi thử 2 game Scratch nổi bật do học sinh trên thế giới làm (chọn trước 1 game triệu view trên scratch.mit.edu). Thông điệp: người làm game này cũng bắt đầu từ con số 0 — 6 buổi tới mình làm được như vậy. |
| 10–25' | 📘 Kiến thức mới | Mở Scratch: 4 vùng màn hình (Stage – Sprite – Block – vùng code). Demo: `when green flag clicked` + `move 10 steps`. Câu hỏi dự đoán: đổi 10 thành 100 thì chuyện gì xảy ra? Chạy thử kiểm chứng. |
| 25–45' | 🛠️ Build game lõi | Từng bước: (1) chọn backdrop bãi biển, (2) thêm sprite chó + mèo, (3) chó: `forever` + `point towards mouse-pointer` + `move 5 steps` — trên iPad, `mouse-pointer` chính là **điểm ngón tay chạm**, (4) mèo: khi bị chạm → `play sound` + `go to random position`. |
| 45–50' | ☕ Giải lao | Nghỉ tự do 5 phút. |
| 50–70' | 🛠️ Nâng cấp theo mức | 🟢 Easy: đổi costume, thêm backdrop thứ hai, chọn âm thanh riêng. 🟡 Normal: thêm sprite thứ 3 với hành vi khác (chạy trốn chuột thay vì đuổi). 🔴 Hard: thêm **biến đếm số lần bắt được** — chỉ nhận thẻ gợi ý (hình khối lệnh), tự lắp ráp. |
| 70–80' | 🕹️ Playtest | Đổi máy, chơi game của nhau. Góp ý theo mẫu: 1 điểm hay + 1 điểm nên sửa. |
| 80–90' | ✅ Tổng kết | Quiz nhanh từ khóa (kiểu ai trả lời nhanh nhất). Lưu project `Buoi1-Ten`. Giới thiệu buổi sau: thiết kế màn chơi — thứ quyết định game khó hay dễ. |

**Ghi chú cho giáo viên**
- Học sinh Việt kiều có thể chưa quen gõ tiếng Việt — cho phép đặt tên project không dấu.
- Kéo-thả khối trên màn hình cảm ứng dễ trượt tay với lớp 3 — hướng dẫn ngay từ đầu cách phóng to vùng code (chụm/banh hai ngón). Chuẩn bị project mẫu đã thêm sẵn sprite, bạn nào kẹt thì mở ra làm tiếp để không tụt lại.
- Lỗi hay gặp: quên `forever` nên chó chỉ nhích một lần; kéo nhầm khối vào sprite mèo.

---

# BUỔI 2 — Thiết kế màn chơi (Maze Hội An)

**Game sản phẩm:** Maze Hội An — kéo ngón tay dẫn nhân vật đi qua mê cung phố đèn lồng (nhân vật đi về phía ngón tay); chạm tường quay về điểm xuất phát, đến đích là qua màn.

**Mục tiêu buổi học**
- Điều khiển sprite bằng ngón tay: `mouse down?` + `point towards mouse-pointer` + `move` (trên iPad, ngón tay = con trỏ).
- Hiểu điều kiện `if – then` và cảm biến `touching` / `touching color`.
- Tự thiết kế màn chơi (level design): vẽ mê cung có độ khó hợp lý.

**Từ khóa song ngữ**

| Tiếng Việt | English |
|------------|---------|
| Chạm màn hình | Tap |
| Kéo ngón tay | Drag |
| Đang chạm màn hình? | Mouse down? |
| Nếu... thì... | If... then... |
| Chạm | Touching |
| Thiết kế màn chơi | Level design |

**Khung 90 phút**

| Thời gian | Hoạt động | Chi tiết |
|-----------|-----------|----------|
| 0–10' | 🎮 Mở màn | Chiếu 2 màn chơi mê cung: một màn quá dễ, một màn không thể qua. Thảo luận nhanh: màn chơi thế nào là "khó vừa đủ để muốn chơi lại"? Đây là câu hỏi level design mà studio thật cũng phải trả lời. |
| 10–25' | 📘 Kiến thức mới | Demo điều khiển cảm ứng: `forever` + `if mouse down? then` → `point towards mouse-pointer` + `move 3 steps` — nhân vật đi về phía ngón tay khi đang chạm màn hình, thả tay là dừng. Giới thiệu `if touching color then go to x y`. Câu hỏi dự đoán: nếu tường màu đen mà áo nhân vật cũng có mảng đen thì sao? |
| 25–45' | 🛠️ Build game lõi | (1) Vẽ mê cung: tường một màu duy nhất, đích là đèn lồng vàng. (2) Gắn điều khiển cảm ứng (lái bằng ngón tay). (3) `if touching color` tường → về điểm xuất phát. (4) Chạm đích → hiện thông báo qua màn. |
| 45–50' | ☕ Giải lao | Nghỉ tự do 5 phút. |
| 50–70' | 🛠️ Nâng cấp theo mức | 🟢 Easy: hoàn thiện mê cung, thêm nhạc nền, trang trí đèn lồng. 🟡 Normal: thêm **chìa khóa** — phải nhặt trước mới mở được đích. 🔴 Hard: làm **level 2** (chạm đích → `switch backdrop`, mê cung khó hơn) hoặc thêm sprite tuần tra qua lại phải né. |
| 70–80' | 🕹️ Playtest | Thi speedrun: ai thoát mê cung của bạn nhanh nhất (bấm giờ). Người thiết kế quan sát người chơi kẹt ở đâu — đó chính là dữ liệu level design. |
| 80–90' | ✅ Tổng kết | Mỗi bạn chỉ 1 khối lệnh trong project và gọi tên tiếng Anh của nó. Lưu project. Buổi sau: điểm số — thứ khiến người ta chơi "một ván nữa thôi". |

**Ghi chú cho giáo viên**
- Vẽ mê cung dễ ngốn thời gian — chuẩn bị 2 backdrop mê cung mẫu (1 dễ, 1 khó) cho bạn nào vẽ lâu.
- Tường phải liền nét, hở là nhân vật lách qua được — học sinh lớp 7–8 sẽ chủ động thử phá game; hợp thức hóa việc đó thành hoạt động tìm bug (playtest), đừng coi là nghịch.
- Điều khiển cảm ứng: nhắc học sinh giữ ngón tay **gần nhân vật** để rẽ chính xác — vì nhân vật đi từng bước về phía ngón tay (`move 3 steps`) nên không thể "nhảy cóc" xuyên tường; nếu ai đó tăng `move` lên quá lớn, nhân vật sẽ xuyên được tường mỏng — đó là một bug thú vị để cả lớp phân tích khi playtest.

---

# BUỔI 3 — Điểm số & may rủi (Bánh mì Rush)

**Game sản phẩm:** Bánh mì Rush — kéo ngón tay điều khiển chiếc rổ hứng bánh mì rơi. Hứng được +1 điểm, hứng trúng sầu riêng −2 điểm. 60 giây, điểm cao nhất thắng.

**Mục tiêu buổi học**
- Tạo và dùng **biến** (variable) điểm số.
- Dùng `pick random` để vật rơi ở vị trí ngẫu nhiên.
- Ghép `forever` + `if touching` thành luật chơi hoàn chỉnh.

**Từ khóa song ngữ**

| Tiếng Việt | English |
|------------|---------|
| Biến | Variable |
| Điểm | Score |
| Ngẫu nhiên | Random |
| Lặp lại mãi | Forever |
| Bảng xếp hạng | Leaderboard |
| Bắt đầu lại | Reset |

**Khung 90 phút**

| Thời gian | Hoạt động | Chi tiết |
|-----------|-----------|----------|
| 0–10' | 🎮 Mở màn | Hỏi cả lớp: game nào các em chơi có điểm số / bảng xếp hạng? Vì sao điểm số khiến người ta muốn chơi lại? (Câu trả lời mong đợi: để phá kỷ lục của chính mình hoặc của bạn.) Hôm nay lớp mình lập trình chính cơ chế đó. |
| 10–25' | 📘 Kiến thức mới | Biến là "ô nhớ đựng số". Demo tạo biến `Score`, khối `change Score by 1`. Demo `pick random -240 to 240` — chạy 5 lần, mỗi lần một khác. Câu hỏi dự đoán: `change Score by -2` làm gì? |
| 25–45' | 🛠️ Build game lõi | (1) Rổ bám theo ngón tay: `forever → set x to mouse x` — rổ trượt ngang theo chỗ ngón tay chạm. (2) Bánh mì xuất hiện tại x ngẫu nhiên trên đỉnh màn hình → rơi xuống bằng `change y by -5`. (3) Chạm rổ → `change Score by 1` + âm thanh, quay lại đỉnh. (4) `when flag clicked → set Score to 0`. |
| 45–50' | ☕ Giải lao | Nghỉ tự do 5 phút. |
| 50–70' | 🛠️ Nâng cấp theo mức | 🟢 Easy: đổi vật phẩm theo ý mình (phở, xoài, kem...), thêm âm thanh riêng cho mỗi loại. 🟡 Normal: thêm sprite **sầu riêng −2 điểm** — vật phẩm bẫy. 🔴 Hard: **đồng hồ 60 giây** (biến Timer đếm ngược, hết giờ dừng game + hiện điểm cuối) hoặc vật phẩm **rơi nhanh dần** theo điểm. |
| 70–80' | 🕹️ Playtest | Giải đấu mini: mỗi bạn chơi game của bạn khác 1 lượt, ghi điểm lên bảng làm leaderboard của lớp. |
| 80–90' | ✅ Tổng kết | Hỏi nhanh: variable dùng làm gì, khối nào tạo vị trí ngẫu nhiên. Lưu project. Buổi sau: yếu tố mọi game hay đều có — khả năng thua. |

**Ghi chú cho giáo viên**
- Buổi có điểm số là lúc tính ganh đua xuất hiện — giữ giải đấu nhẹ nhàng, ghi nhận cả các mặt khác ("thiết kế đẹp nhất", "ý tưởng vật phẩm hay nhất").
- Lớp 3 dễ rối khi vật phẩm vừa rơi vừa kiểm tra chạm: chuẩn bị thẻ gợi ý in cụm khối hoàn chỉnh.
- Học sinh Việt kiều có thể chưa biết sầu riêng — để học sinh trong nước giải thích cho bạn, tự nhiên hơn giáo viên kể.

---

# BUỔI 4 — Game phải có thua (Hạ Long Dodge)

**Game sản phẩm:** Hạ Long Dodge — thuyền buồm đi trong vịnh, đá ngầm trôi tới liên tục. 3 mạng, đụng đá mất 1 mạng, hết mạng là game over. Sống càng lâu điểm càng cao.

**Mục tiêu buổi học**
- Quản lý 2 biến cùng lúc: `Score` và `Lives`.
- Màn hình **Game Over** (broadcast + `stop all`).
- Độ khó tăng dần — nguyên tắc thiết kế: game hay là game khó dần đều.

**Từ khóa song ngữ**

| Tiếng Việt | English |
|------------|---------|
| Mạng | Lives |
| Kết thúc game | Game over |
| Tốc độ | Speed |
| Độ khó | Difficulty |
| Hiện / Ẩn | Show / Hide |
| Dừng tất cả | Stop all |

**Khung 90 phút**

| Thời gian | Hoạt động | Chi tiết |
|-----------|-----------|----------|
| 0–10' | 🎮 Mở màn | Chiếu 30 giây cảnh vịnh Hạ Long (bối cảnh game hôm nay — với học sinh Việt kiều đây có thể là lần đầu thấy). Câu hỏi thiết kế: game 3 buổi trước thiếu gì? — Không thể thua. Game không thể thua thì không có gì để cố gắng. |
| 10–25' | 📘 Kiến thức mới | Demo `Lives = 3`, đụng đá → `change Lives by -1`. `if Lives = 0 → broadcast GameOver`. Sprite chữ GAME OVER nhận broadcast → `show` + `stop all`. Câu hỏi dự đoán: quên `hide` lúc bắt đầu thì màn hình mở ra trông thế nào? |
| 25–45' | 🛠️ Build game lõi | (1) Thuyền bám theo ngón tay: `forever → set y to mouse y` — kéo ngón tay lên xuống để lái thuyền. (2) Đá xuất hiện bên phải tại y ngẫu nhiên, trôi sang trái, chạm cạnh quay lại. (3) Chạm thuyền → mất mạng + hiệu ứng nhấp nháy. (4) Hết mạng → Game Over. (5) `Score` tự tăng mỗi giây còn sống. |
| 45–50' | ☕ Giải lao | Nghỉ tự do 5 phút. |
| 50–70' | 🛠️ Nâng cấp theo mức | 🟢 Easy: vẽ thêm loại đá khác nhau, thêm tiếng sóng, tiếng va chạm. 🟡 Normal: thêm **vật phẩm hồi mạng** thỉnh thoảng trôi qua (+1 mạng). 🔴 Hard: đá trôi **nhanh dần theo Score** (`speed = Score/10 + 5`) hoặc thêm luồng đá thứ hai đi chéo. |
| 70–80' | 🕹️ Playtest | Thi sinh tồn: ai trụ lâu nhất trên game của bạn khác. So sánh: game của ai "khó dần đều" mượt nhất? |
| 80–90' | ✅ Tổng kết | Câu hỏi chốt: vì sao thêm Lives làm game hấp dẫn hơn? Lưu project. **Nhiệm vụ về nghĩ (không bắt buộc làm):** buổi 6 mỗi người ra mắt game riêng — bắt đầu nghĩ xem muốn làm game gì. |

**Ghi chú cho giáo viên**
- Broadcast là khái niệm trừu tượng nhất khóa — dùng đúng 1 lần cho Game Over, không dạy sâu.
- Bạn lớp 8 làm nhanh: gợi ý tự suy ra màn hình "YOU WIN sau 60 giây sống sót" từ những gì đã học.
- Cuối buổi nhắn phụ huynh: buổi 6 là Demo Day, mời đến chơi thử game do con tự làm.

---

# BUỔI 5 — Phản xạ & nhịp game (Chuột chợ quê)

**Game sản phẩm:** Chuột chợ quê (whack-a-mole) — chuột thò đầu khỏi các thúng gạo ngẫu nhiên, chạm (tap) trúng +1 điểm; chạm nhầm con mèo đang ngủ −3 điểm. 30 giây tính điểm. Game phản xạ là thể loại hợp màn hình cảm ứng nhất — tap trực tiếp vào con chuột, đã tay hơn cả chơi bằng chuột máy tính.

**Mục tiêu buổi học**
- Sprite tự **hiện/ẩn ngẫu nhiên** (`show`/`hide` + `wait pick random`) — nhịp (timing) của game phản xạ.
- Sự kiện `when this sprite clicked` — trên màn hình cảm ứng nghĩa là **khi chạm vào sprite**.
- Đồng hồ đếm ngược hoàn chỉnh + màn hình kết quả.
- **Chốt ý tưởng game riêng cho buổi 6** (15 phút cuối).

**Từ khóa song ngữ**

| Tiếng Việt | English |
|------------|---------|
| Chạm | Tap |
| Chờ | Wait |
| Hiện / Ẩn | Show / Hide |
| Đếm ngược | Countdown |
| Ý tưởng | Idea |
| Bản thiết kế | Design doc |

**Khung 90 phút**

| Thời gian | Hoạt động | Chi tiết |
|-----------|-----------|----------|
| 0–10' | 🎮 Mở màn | Cho cả lớp chơi 1 phút một game phản xạ (bản whack-a-mole giáo viên làm sẵn). Phân tích nhanh: cái gì làm game phản xạ cuốn? — Bất ngờ (không biết chuột lên chỗ nào) + áp lực thời gian. Hôm nay lập trình cả hai thứ đó. |
| 10–25' | 📘 Kiến thức mới | Demo 1 con chuột: `forever → hide → wait pick random 1 to 3 seconds → show → wait 1 second`. `when this sprite clicked → change Score by 1 + play sound + hide` (chạm vào chuột = "clicked"). Câu hỏi dự đoán: muốn chuột khó chạm trúng hơn thì chỉnh số nào? |
| 25–45' | 🛠️ Build game lõi | (1) Backdrop chợ quê + 3 thúng. (2) Hoàn thiện 1 con chuột → **nhân bản sprite** thành 3 con ở 3 vị trí, đổi thời gian chờ mỗi con. (3) Score + countdown 30 giây → hết giờ hiện điểm cuối. |
| 45–50' | ☕ Giải lao | Nghỉ tự do 5 phút. |
| 50–65' | 🛠️ Nâng cấp theo mức | 🟢 Easy: thêm chuột thứ 4, vẽ costume chuột "dính đòn". 🟡 Normal: thêm **mèo ngủ** — chạm nhầm −3 điểm. 🔴 Hard: chuột thò lên **nhanh dần** khi điểm tăng; hiện thông báo theo mốc điểm. |
| 65–80' | 📝 **Design doc buổi 6** | Phát **phiếu thiết kế game** (song ngữ, mẫu bên dưới). Mỗi người chọn: remix 1 trong 5 game đã làm HOẶC lai 2 cơ chế (ví dụ: mê cung + mạng, né đá + level 2). Ghi rõ: nhân vật, luật chơi, điều kiện thắng/thua. Giáo viên duyệt từng bản để chắc chắn làm xong trong 1 buổi. |
| 80–90' | 🕹️ Playtest + chốt | Chơi nhanh game của nhau. Mỗi người pitch ý tưởng buổi 6 trong 30 giây trước lớp. |

**Phiếu thiết kế game (in cho học sinh, song ngữ)**

```
TÊN GAME / GAME NAME: ..................
NHÂN VẬT / SPRITES: ....................
LUẬT CHƠI / RULES: .....................
CÁCH THẮNG / HOW TO WIN: ...............
CÁCH THUA / HOW TO LOSE: ...............
DỰA TRÊN GAME BUỔI SỐ / BASED ON LESSON #: ...
```

**Ghi chú cho giáo viên**
- Duyệt ý tưởng chặt tay: quy tắc "**1 thay đổi lớn duy nhất** so với game gốc" — tham vọng quá sẽ không kịp hoàn thành trong buổi 6, và dở dang đúng hôm có phụ huynh là trải nghiệm tệ nhất có thể.
- Gợi ý theo sức: lớp 3 nên remix đổi chủ đề + 1 chi tiết mới; lớp 7–8 nên lai cơ chế (mê cung có mạng, né đá có 2 level).
- Xác nhận lần cuối giờ phụ huynh đến dự buổi 6.

---

# BUỔI 6 — Demo Day

**Sản phẩm:** Game của riêng mình — hoàn thiện theo phiếu thiết kế buổi 5, ra mắt trước phụ huynh với phần giới thiệu 1–2 phút, nhận chứng nhận hoàn thành khóa.

**Mục tiêu buổi học**
- Tự hoàn thiện game theo bản thiết kế; giáo viên chỉ gợi ý bằng câu hỏi, không làm hộ.
- Giới thiệu sản phẩm bằng tiếng Việt đơn giản, chêm từ tiếng Anh đã học tùy ý.
- Khép khóa: mỗi người mang về đủ 6 game (lưu trên tài khoản Scratch online — mở được từ bất kỳ thiết bị nào).

**Khung 90 phút**

| Thời gian | Hoạt động | Chi tiết |
|-----------|-----------|----------|
| 0–5' | 📋 Briefing | Chạy qua lịch trình Demo Day. Mỗi người xem lại phiếu thiết kế của mình. |
| 5–50' | 🛠️ Sprint hoàn thiện | Làm game theo phiếu. Giáo viên gỡ kẹt bằng câu hỏi ("khối nào làm được việc đó — buổi mấy mình từng dùng?"). Hai mốc kiểm tra: phút 25 — luật chơi cơ bản phải chạy được; phút 45 — **code freeze**, chỉ còn chỉnh hình và âm thanh (thuật ngữ thật của ngành, học sinh cấp 2 sẽ thích). |
| 50–55' | ☕ Giải lao + chạy thử lần cuối | Nghỉ ngắn, tự chạy thử game một lượt. Chuẩn bị phần giới thiệu theo khung 3 ý: tên game — cách chơi — phần tự làm mà mình ưng nhất. |
| 55–75' | 🎤 **Demo trước phụ huynh** | Phụ huynh vào lớp. Từng người giới thiệu game 1–2 phút, sau đó **phụ huynh ngồi chơi, tác giả đứng cạnh hướng dẫn** — phụ huynh là người chơi đầu tiên của game. |
| 75–85' | 🏆 Trao chứng nhận | Chứng nhận hoàn thành + giải thưởng kiểu game awards, mỗi người một hạng mục: **Best Game Design**, **Best Gameplay**, **Bug Hunter**... Chụp ảnh nhóm với game trên màn hình. |
| 85–90' | 📦 Bàn giao | Gửi mỗi gia đình: link 6 game trên tài khoản Scratch + phiếu thiết kế bản gốc + ảnh. Hướng dẫn phụ huynh mở scratch.mit.edu trên iPad/điện thoại ở nhà để con chơi tiếp, chia sẻ link với bạn bè ở nước ngoài. |

**Ghi chú cho giáo viên**
- Chuẩn bị trước: chứng nhận in sẵn, hạng mục giải thưởng nghĩ trước cho từng bạn (dựa trên điểm mạnh thật trong 5 buổi, đừng bịa).
- Phương án B: game chưa xong vẫn demo bản đang có — nói thẳng đây là bản beta, game thật ngoài đời cũng ra mắt beta trước; điều này còn khiến phần demo đáng tin hơn.
- Học sinh Việt kiều thuyết trình trộn Việt–Anh thoải mái; gợi ý phụ huynh quay video phần demo.

---

## Phụ lục A — Biên bản đồng thuận của hội đồng

| Quyết định | 👩‍🏫 Giáo viên | 🧒 Học sinh | 👨‍👩‍👧 Phụ huynh |
|------------|---------------|-------------|------------------|
| Định vị "game studio", không phải "lớp học hè" | Cùng một nội dung nhưng khung kể chuyện nghiêm túc hơn, dễ giữ kỷ luật làm sản phẩm | Lớp 7–8 muốn được đối xử như người làm game, không phải trẻ con đi trại hè | Nghe "con học trong mô hình studio" thuyết phục hơn "con đi chơi hè" |
| Mỗi buổi 1 game hoàn chỉnh | Kiến thức gói trong sản phẩm, dễ kiểm tra đầu ra | Về nhà có game khoe được ngay hôm đó | Thấy rõ kết quả sau từng buổi |
| Độ khó Easy/Normal/Hard, tự chọn | Giải bài toán lớp ghép 8–14 tuổi mà không cần 2 giáo án | Ngôn ngữ game quen thuộc; tự chọn mức là được tôn trọng; playtester là vai có giá trị, không phải "trông em" | Con nào cũng được thử thách đúng sức |
| Chủ đề Việt Nam xuyên suốt | Chất liệu kể chuyện phong phú, gần gũi | Bánh mì, sầu riêng đủ hài hước mà không sến; bối cảnh lạ với bạn Việt kiều | Đúng kỳ vọng khóa hè về nước: học code và biết thêm Việt Nam |
| Song ngữ 6–8 từ khóa/buổi | Ít mà lặp trong ngữ cảnh thật thì nhớ; khớp giao diện Scratch tiếng Anh | Không bị ngợp; từ nào cũng dùng ngay trong game | Con Việt kiều theo kịp, con trong nước thêm từ vựng ngành |
| Playtest cuối mỗi buổi | Kiểm tra sản phẩm tự nhiên nhất, kèm kỹ năng nhận xét | Phần được chờ nhất buổi; góp ý theo mẫu nên không sợ bị chê | Con học cách nhận và cho phản hồi văn minh |
| Buổi 6 là Demo Day có phụ huynh | Deadline thật khiến học sinh hoàn thiện sản phẩm | Hồi hộp nhưng là khoảnh khắc ra mắt game của chính mình | Tận mắt thấy con trình bày, kỷ niệm mùa hè đúng nghĩa |

## Phụ lục B — Chuẩn bị chung cho cả khóa

- **Thiết bị:** mỗi học sinh 1 iPad (hoặc điện thoại màn hình lớn) + giá đỡ, mở Scratch qua **trình duyệt** tại scratch.mit.edu — không cần chuột hay bàn phím, mọi game đều điều khiển cảm ứng. Loa nhỏ hoặc loa thiết bị.
- **Mạng là bắt buộc:** Scratch bản web cần internet — Wi-Fi ổn định + 1 điện thoại phát 4G dự phòng. Trước mỗi buổi mở thử scratch.mit.edu trên từng máy.
- **Tài khoản:** tạo sẵn 3 tài khoản Scratch trước buổi 1 (tên không dấu), mật khẩu ghi thẻ phát cho học sinh; đăng nhập sẵn trên trình duyệt từng máy để đỡ mất thời gian gõ.
- **Trình chiếu:** chuẩn bị cách chiếu màn hình iPad của giáo viên lên TV/máy chiếu (AirPlay hoặc cáp chuyển) để demo thao tác cảm ứng thật.
- **Thao tác cảm ứng:** dạy ngay buổi 1 hai thao tác sống còn trên Scratch web: phóng to/thu nhỏ vùng code (nút +/− hoặc chụm hai ngón) và kéo khối chính xác (chạm giữ rồi kéo chậm).
- **Thư viện tài nguyên:** bộ ảnh chủ đề Việt Nam (bánh mì, đèn lồng, thuyền buồm, thúng, chuột, mèo) dạng PNG nền trong, chuẩn bị trước — tiết kiệm 10 phút/buổi so với để học sinh tự tìm.
- **Thẻ gợi ý (hint cards):** in hình các cụm khối lệnh hoàn chỉnh của mức 🔴 Hard — đưa cho học sinh khá thay vì hướng dẫn miệng, rèn kỹ năng tự đọc code.
- **Game mở màn:** chọn trước các game Scratch cộng đồng dùng ở phần mở màn buổi 1, 2, 5 — ưu tiên game **chơi được bằng cảm ứng** (không đòi bàn phím) để học sinh thử ngay trên iPad.
- **Liên lạc phụ huynh:** sau mỗi buổi gửi 1 ảnh + 1 dòng mô tả game hôm đó vào nhóm chat; trước buổi 6 gửi thư mời Demo Day.
