# Scratch Curriculum — AI Coding Assistant & Slide Generation Guidelines 🚀

Tài liệu này là cẩm nang bắt buộc dành cho mọi AI Agent (Antigravity, Gemini, Cursor, Claude Code) khi tạo hoặc chỉnh sửa slide bài giảng HTML trong repository `ScratchCurriculum`.

---

## 1. Mẫu Chuẩn Vàng (Gold Standard Template)

- **MẪU CHUẨN DUY NHẤT:** Luôn bắt đầu từ hoặc đối chiếu với file **[`tuan-13-buoi-25.html`](tuan-13-buoi-25.html)**.
- **Quy tắc file:** File HTML tự chứa 100% (CSS inline trong `<style>`, JavaScript inline trong `<script>`), không dùng framework ngoài, không phụ thuộc internet khi trình chiếu offline.
- **Định dạng đặt tên:** `tuan-{tuần}-buoi-{buổi}.html` ngay tại thư mục gốc repository (ví dụ: `tuan-13-buoi-26.html`).

---

## 2. Tiêu chuẩn Thẩm mỹ & Giao diện (Design System)

1. **Bảng màu Scratch hiện đại:**
   - `--scratch-orange`: `#ff8c1a` (Biến số & Điểm nhấn chính)
   - `--scratch-blue`: `#4c97ff` (Chuyển động & Thẻ thông tin)
   - `--scratch-purple`: `#9966ff` (Hiển thị & Quiz Arena)
   - `--scratch-green`: `#59c059` (Thành công & Khối phép toán)
   - `--scratch-yellow`: `#ffbf00` (Sự kiện & Cảnh báo)
   - `--scratch-red`: `#ff6680` (Khối My Block & Luật thua)
   - `--scratch-cyan`: `#00bcd4` (Cảm biến & Khám phá)
   - `--scratch-dark`: `#1e2a3a` (Màu chữ chính)
   - `--scratch-bg`: `#f0f4f8` (Nền thẻ card)
2. **Hình nền & Khung slide:**
   - `body`: Nền tối sâu `radial-gradient(circle at 10% 20%, #1e3a8a 0%, #0f172a 90%)`.
   - `.slide`: Kích thước chuẩn `width: min(1120px, 95vw); height: min(720px, 86vh);`, bo góc tròn mềm mại `border-radius: 22px`, bóng đổ nhiều tầng `box-shadow: 0 28px 70px rgba(0,0,0,0.45)`.
3. **Typography:**
   - Font Google: `Nunito:wght@400;600;700;800;900`.
   - Tiêu đề H1/H2 đậm đà, màu sắc phân cấp rõ ràng.
4. **Topbar & Navigation:**
   - Global Topbar kính mờ (Glassmorphism với `backdrop-filter: blur(12px)`).
   - Hệ thống chấm tròn chuyển slide (Dots navigation) tự động đồng bộ.
   - Thanh tiến trình mượt mà trên cùng (Progress bar).
   - Nút phóng toàn màn hình (phím `F`, nút `⛶` và `Esc`).

---

## 3. Ngôn ngữ: 100% Tiếng Việt Chuẩn Scratch

- Toàn bộ nội dung slide và khối lệnh Scratch mô phỏng (`.block`) phải dùng **100% tiếng Việt chuẩn Scratch cho lứa tuổi 7–10**.
- **Tuyệt đối KHÔNG dùng song ngữ** dạng `move 10 steps / di chuyển 10 bước`.
- **Ví dụ chuẩn tiếng Việt:**
  - `khi bấm vào 🏳️` (Sự kiện)
  - `di chuyển 10 bước`, `đi tới điểm x: 0 y: -120` (Chuyển động)
  - `nói "Xin chào!" trong 2 giây`, `trang phục kế tiếp` (Hiển thị)
  - `liên tục`, `lặp lại 10 lần`, `nếu <...> thì` (Điều khiển)
  - `đặt [điểm] thành 0`, `thay đổi [mạng] một lượng -1` (Biến số)
  - `tạo bản sao của [tôi]`, `khi tôi bắt đầu là một bản sao` (Bản sao)
  - `định nghĩa [tên khối]` (Khối của tôi / My Block)

---

## 4. Quy chuẩn Game Tương tác & Quiz (BẮT BUỘC)

Nhằm tạo sự hứng khởi và tương tác tối đa cho lớp học, mỗi slide deck **bắt buộc** phải tích hợp các thành phần tương tác:

### A. Buổi Học (Lý thuyết — ~14–15 slide):
1. **🎬 Khởi động tương tác:** Câu hỏi gợi mở, khảo sát ý kiến hoặc mini-game thảo luận.
2. **🌌 Trưng bày chủ đề / Trực quan hóa kiến thức:** Thẻ phân loại trực quan (ví dụ: Kho tàng 6 vũ trụ chủ đề).
3. **🎰 Công cụ sáng tạo ngẫu nhiên (Slot Machine / Idea Generator):**
   - Bộ 3 guồng quay ngẫu nhiên (Bối cảnh x Nhân vật x Nhiệm vụ).
   - Animation quay số cuốn hút, có nút bấm gợi ý độc lạ cho học sinh bí ý tưởng.
4. **🏃 Minigame vận động / Phản xạ ("Thắng hay Thua?" hoặc "Đúng hay Sai?"):**
   - Trò chơi giải lao vận động kết hợp ôn kiến thức: Học sinh đứng lên / ngồi xuống / giơ tay theo tình huống trên bảng.
   - Nút bấm kiểm tra trên slide có animation phản hồi visual (rung lắc khi sai, nảy nở khi đúng, đếm chuỗi streak).
5. **🏆 Đấu trường Quiz trắc nghiệm tương tác:**
   - 5 câu hỏi A/B/C/D click chọn trực tiếp.
   - Phản hồi màu sắc xanh lá / đỏ, hiện lời giải thích cặn kẽ ngay bên dưới, chấm điểm tự động và trao cúp vinh danh.
6. **👩‍🏫 Ghi chú cho giáo viên:** Slide cuối hướng dẫn phân hóa học sinh và cách điều phối hoạt động.

### B. Buổi Bài tập (Thực hành — ~12–13 slide):
1. **🎬 Khởi động ôn tập:** Trắc nghiệm nhanh củng cố bài học trước.
2. **🔁 Trạm kỹ năng cốt lõi:** Bảng tổng hợp các khối lệnh then chốt.
3. **🩺 Bác sĩ Scratch sửa lỗi mẫu (Debugging Clinic):** Game mẫu có lỗi thực tế, bảng chẩn đoán bệnh án và phương thuốc sửa lỗi.
4. **🎯 Thử thách phân tầng 3 mức độ (Mức A / B / C):**
   - *Mức A:* Hoàn thiện cơ bản & Gom code My Blocks.
   - *Mức B:* Bác sĩ Debug sửa lỗi đa dạng.
   - *Mức C:* Dự án sáng tạo nâng cao / Remix tính năng độc đáo.
5. **🖼️ Trạm Showcase & Tổng kết:** Trình chiếu sản phẩm và vinh danh.

---

## 5. Chính sách Hiệu ứng Âm thanh & Hoạt họa

- **Chỉ dùng hiệu ứng thị giác & animation:** Dùng CSS Keyframes (`shake`, `bounce`, `slotSpin`, `pulse`, màu sắc glow, confetti giả lập).
- **KHÔNG dùng âm thanh lớn mặc định:** Nhằm giữ trật tự không gian lớp học, tránh gây xao nhãng hoặc ồn ào khi giáo viên đang giảng bài.

---

## 6. Danh mục kiểm tra trước khi hoàn thành (Checklist)

- [ ] Lấy cấu trúc từ `tuan-13-buoi-25.html`.
- [ ] Số slide khớp với `aria-valuemax` và thanh counter `counter.textContent`.
- [ ] Khối lệnh Scratch mô phỏng dùng **100% tiếng Việt**.
- [ ] Đã tích hợp đầy đủ: Slot machine / Tool sáng tạo, Minigame vận động, và Đấu trường Quiz tương tác.
- [ ] Phím tắt hoạt động mượt: `←`, `→`, Phím cách, `Home`, `End`, `F` (Fullscreen), `Esc`.
- [ ] Không có lỗi cú pháp JavaScript trong console (`vm.Script` check pass).
- [ ] Responsive tốt trên laptop (1366x768, 1920x1080) và màn hình cảm ứng.
