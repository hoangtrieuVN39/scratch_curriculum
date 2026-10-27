# Scratch Curriculum — AI Coding Assistant & Slide Generation Guidelines 🚀

Tài liệu này là cẩm nang bắt buộc dành cho mọi AI Agent (Antigravity, Gemini, Cursor, Claude Code) khi tạo hoặc chỉnh sửa slide bài giảng HTML trong repository `ScratchCurriculum`.

---

## 1. Mẫu Chuẩn Vàng (Gold Standard Template)

- **MẪU CHUẨN VỀ CẤU TRÚC & ENGINE ĐIỀU HƯỚNG:** Luôn bắt đầu từ hoặc đối chiếu với file **[`tuan-13-buoi-25.html`](tuan-13-buoi-25.html)**.
- **MẪU CHUẨN VỀ PHONG CÁCH TƯƠNG TÁC (Interactive Lab):** Đối chiếu thêm với **[`tuan-3-buoi-6.html`](tuan-3-buoi-6.html)** (buổi Bài tập) và **[`tuan-16-buoi-31.html`](tuan-16-buoi-31.html)** (buổi Học). Hai file này là nguồn copy CSS/JS cho các component ở mục 4 — không viết lại từ đầu.
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

## 4. Quy chuẩn Tương tác — "Interactive Lab" (BẮT BUỘC)

### 4.0. Nguyên tắc: học sinh phải BẤM để hiểu, không chỉ ĐỌC

Slide kỹ thuật không được chỉ là khối lệnh tĩnh + gạch đầu dòng. Mỗi khái niệm / khối lệnh mới phải đi kèm một **phòng thí nghiệm mô phỏng** (`.anim-lab`) để cả lớp bấm thử và **nhìn thấy hành vi thật**, tốt nhất theo dạng *"có khối này" vs "thiếu / dùng sai khối này"*. Ví dụ đã có: bấm "đợi 0.3 giây" vs "Quên khối đợi" (buổi 6); tên tin `BatDau` vs `Batdau`, "bắt đầu âm thanh" vs "phát âm thanh … đến hết", nhặt sao đến khi Thắng/Thua kèm công tắc lỗi 🐞 (buổi 31).

| Thành phần | Bắt buộc? | Chuẩn triển khai |
|------------|-----------|------------------|
| **Khởi động tương tác** | Bắt buộc | Một trong: Đúng/Sai ôn bài cũ (buổi 6), bình chọn, hoặc lab công tắc bật/tắt tính năng kèm thanh "độ cuốn hút" (buổi 31, slide 3) |
| **Phòng thí nghiệm mô phỏng** | Buổi Học: ≥ 2 · Buổi Bài tập: ≥ 1 | Sân khấu mini + 2–3 nút "chạy thử" + dòng phản hồi giải thích nguyên nhân. Có nút Làm lại nếu trạng thái không tự reset |
| **Bác sĩ Scratch** | Bắt buộc | Thẻ ca bệnh chỉ hiện **triệu chứng**; bấm **"💊 Xem phương thuốc"** mới hiện cách sửa (thẻ đổi sang viền xanh). Kèm 1–2 script "bệnh nhân" bằng khối lệnh |
| **Minigame Đúng/Sai** | Bắt buộc | Mục 4.A.4 |
| **Đấu trường Quiz** | Bắt buộc | 5 câu A/B/C/D, chấm 20 điểm/câu, đáp án đúng **không** luôn ở cùng một vị trí, cuối cùng trao danh hiệu **theo điểm** (≥ 80 / ≥ 40 / còn lại) |
| **Thẻ kiến thức bấm để xem khối lệnh** | Khuyến khích | `.k-card` + `.btn-reveal` |
| **Checklist rà soát bấm để tick** | Khuyến khích (slide rà soát cuối buổi) | `.checklist.interactive` + thanh tiến độ + câu chúc khi đủ mục |
| **Huy hiệu / danh hiệu bấm để trao** | Khuyến khích (slide tổng kết / showcase) | `.award` bật/tắt `.lit` |
| **Máy gợi ý (Slot Machine)** | Tùy chọn | Mục 4.A.3 |

### 4.1. Quy tắc kỹ thuật cho mọi component tương tác

- **Mô phỏng phải đúng với Scratch thật.** Trước khi viết lab, kiểm chứng hành vi khối lệnh (vd: `dừng lại [tất cả]` cũng tắt luôn âm thanh; `phát âm thanh … cho đến hết` làm kịch bản đứng chờ; `phát tin` đặt trong `liên tục` sẽ phát lại mỗi khung hình). Nếu giáo án markdown ghi sai hành vi, **sửa trong slide và báo cho người dùng** chứ không chép lại lỗi.
- **Không tự chuyển bước.** Minigame / Quiz luôn chờ giáo viên bấm "Câu tiếp theo ➡️". Không dùng `setTimeout` để tự sang câu.
- **Lab bất đồng bộ dùng `async/await` + `runId`** (tăng `runId` khi Làm lại / bấm nút khác) để các lần chạy không chồng lên nhau; khóa (`disabled`) các nút trong lúc đang chạy nếu chúng có thể xung đột.
- **Hằng số có tên**, không magic number: `BC_STAGGER_MS`, `END_WIN_SCORE`, `UI_SPIN_MS`…
- **Mọi handler của component gọi `e.stopPropagation()`** và container của nó phải được thêm vào danh sách loại trừ trong listener `click` điều hướng (`e.target.closest('button, code, .quiz-arena, .arena-wrap, .anim-lab, .game-lab, .story-gen, .clinic-card, .k-card, .award-grid, .checklist.interactive …')`), nếu không bấm gần mép slide sẽ bị nhảy slide.
- **Phản hồi trực quan luôn có cặp:** đúng → `bounce` / viền xanh / glow; sai → `shake` / viền đỏ. Sai thì nói rõ đáp án đúng là gì (đừng để lời giải thích mở đầu bằng "ĐÚNG!" ngay sau nhãn "Chưa đúng").
- **Lab phải vừa slide** ở 1366×768 (`slide-body` không cần cuộn). Dùng `.blocks-container.compact`, `.cols-60-40`, cỡ chữ ≤ 0.9rem trong lab.

### A. Buổi Học (Lý thuyết — ~14–15 slide):

1. **🎬 Khởi động tương tác:** Xem bảng 4.0 — phải là thứ học sinh bấm được, không chỉ câu hỏi đọc to.
2. **🌌 Trưng bày chủ đề / Trực quan hóa kiến thức:** Thẻ phân loại trực quan (ví dụ: Kho tàng 6 vũ trụ chủ đề) hoặc thẻ kiến thức bấm để xem khối lệnh.
3. **🎰 Công cụ sáng tạo ngẫu nhiên (Slot Machine / Idea Generator) — TÙY CHỌN, không bắt buộc mọi buổi:**
   - Bộ 3 guồng quay ngẫu nhiên (Bối cảnh x Nhân vật x Nhiệm vụ).
   - Animation quay số cuốn hút, có nút bấm gợi ý độc lạ cho học sinh bí ý tưởng.
   - Chỉ thêm khi buổi học thực sự cần gợi mở ý tưởng mới (ví dụ: buổi khởi động dự án, buổi brainstorm). Với các buổi ở pha "làm game" khi ý tưởng đã chốt từ trước (ví dụ chuỗi buổi từ Tuần 13 trở đi), có thể bỏ qua và thay bằng slide demo kỹ thuật / trực quan hóa khối lệnh phù hợp hơn.
4. **⚡ Minigame tương tác nhanh ("Thắng hay Thua?" hoặc "Đúng hay Sai?"):**
   - Trò chơi phản xạ tương tác thuần kỹ thuật số: Học sinh click trực tiếp nút **ĐÚNG** hoặc **SAI** trên slide để trả lời từng tình huống.
   - **KHÔNG** dùng vận động thể chất (đứng lên / ngồi xuống / giơ tay) — thay bằng click nút và phản hồi animation visual tức thì.
   - Phản hồi: rung lắc `shake` khi sai, nảy nở `bounce` / glow khi đúng, đếm chuỗi streak liên tiếp để tạo hứng khởi.
   - **Sau mỗi câu trả lời:** hiện nút **"Câu tiếp theo ➡️"** — KHÔNG tự động chuyển câu. Giáo viên bấm nút này sau khi đã giải thích và cho học sinh hỏi xong. Câu cuối đổi nhãn thành "Chơi lại từ đầu 🔄" và reset streak.
   - Bộ 6–7 tình huống, xen kẽ đáp án ĐÚNG/SAI; mỗi tình huống bám một lỗi thực tế học sinh hay gặp.
5. **🏆 Đấu trường Quiz trắc nghiệm tương tác:**
   - 5 câu hỏi A/B/C/D click chọn trực tiếp.
   - Phản hồi màu sắc xanh lá / đỏ, hiện lời giải thích cặn kẽ ngay bên dưới, chấm điểm tự động và trao cúp + danh hiệu theo điểm.
6. **🩺 Bác sĩ Scratch (Debug):** Bệnh nhân + thẻ ca bệnh bấm "💊 Xem phương thuốc" (mục 4.0).
7. **👩‍🏫 Ghi chú cho giáo viên:** Slide cuối hướng dẫn phân hóa học sinh, lỗi thường gặp, phân bổ thời gian, và **nhắc rằng lab/minigame trên slide không phát âm thanh**.

### B. Buổi Bài tập (Thực hành — ~12–13 slide):

1. **🎬 Khởi động ôn tập:** Đúng/Sai hoặc trắc nghiệm nhanh củng cố bài học trước (có nút "Câu tiếp theo").
2. **🔁 Trạm kỹ năng cốt lõi:** Thẻ kiến thức (`.knowledge-grid` / `.k-card`) **kèm một phòng thí nghiệm mô phỏng** bên cạnh (vd: Phòng thí nghiệm hoạt hình).
3. **🩺 Bác sĩ Scratch sửa lỗi mẫu (Debugging Clinic):** Game mẫu có lỗi thực tế, thẻ chẩn đoán bệnh án; bấm nút mới hiện phương thuốc.
4. **🎯 Thử thách phân tầng 3 mức độ (Mức A / B / C):**
   - _Mức A:_ Hoàn thiện cơ bản & Gom code My Blocks.
   - _Mức B:_ Bác sĩ Debug sửa lỗi đa dạng.
   - _Mức C:_ Dự án sáng tạo nâng cao / Remix tính năng độc đáo.
5. **🖼️ Trạm Showcase & Tổng kết:** Trình chiếu sản phẩm, huy hiệu / danh hiệu bấm để trao.

---

## 5. Chính sách Hiệu ứng Âm thanh & Hoạt họa

- **Chỉ dùng hiệu ứng thị giác & animation:** Dùng CSS Keyframes (`shake`, `bounce`, `slotSpin`, `pulse`, màu sắc glow, confetti giả lập).
- **KHÔNG dùng âm thanh lớn mặc định:** Nhằm giữ trật tự không gian lớp học, tránh gây xao nhãng hoặc ồn ào khi giáo viên đang giảng bài.
- **Lab về âm thanh vẫn không phát tiếng:** mô phỏng bằng nhãn 🔔, nốt nhạc bay, thanh thời gian… Muốn nghe thì giáo viên bật game Scratch mẫu.
- **Tôn trọng `prefers-reduced-motion`** cho hiệu ứng chuyển slide (đã có sẵn trong file mẫu).

---

## 6. Danh mục kiểm tra trước khi hoàn thành (Checklist)

- [ ] Lấy cấu trúc & engine điều hướng từ `tuan-13-buoi-25.html`; lấy component tương tác từ `tuan-3-buoi-6.html` / `tuan-16-buoi-31.html`.
- [ ] Số slide khớp với `aria-valuemax` và thanh counter `counter.textContent`.
- [ ] Khối lệnh Scratch mô phỏng dùng **100% tiếng Việt**.
- [ ] Đã tích hợp đủ thành phần bắt buộc ở mục 4.0: Khởi động tương tác, phòng thí nghiệm mô phỏng (Học ≥ 2 / Bài tập ≥ 1), Bác sĩ Scratch có nút "Xem phương thuốc", Minigame Đúng/Sai (có nút "Câu tiếp theo", **không** tự chuyển, **không** vận động thể chất), Đấu trường Quiz có danh hiệu theo điểm. Slot Machine chỉ khi buổi học cần.
- [ ] Hành vi mô phỏng trong lab khớp với Scratch thật (đã đối chiếu, không chép lỗi từ giáo án).
- [ ] Container của mọi component đã nằm trong danh sách loại trừ của listener `click` điều hướng; bấm sát mép component không nhảy slide.
- [ ] Phím tắt hoạt động mượt: `←`, `→`, Phím cách, `Home`, `End`, `F` (Fullscreen), `Esc`.
- [ ] Không có lỗi cú pháp JavaScript trong console (`vm.Script` check pass) và **không có `pageerror`/`console.error`** khi bấm thử từng component.
- [ ] Responsive tốt trên laptop (1366x768, 1920x1080) và màn hình cảm ứng; không slide nào tràn `slide-body` ở 1366x768.
- [ ] Đã chạy thử bằng skill `run-scratchcurriculum` (hoặc Playwright headless): bấm từng nút của mỗi lab/minigame/quiz, chụp ảnh và **xem ảnh** ít nhất các slide có lab, slide Bác sĩ, slide Tổng kết.
- [ ] Mọi header `.c-block` có điều kiện (`nếu <...> thì`, `lặp lại cho đến khi <...>`, ...) trộn text với `<span class="block-arg">` đều được bọc trong `<span class="block-head">...</span>` duy nhất — nếu không, flexbox cột sẽ tách text/span thành các dòng riêng và vỡ layout khối lệnh. Xem chi tiết & ví dụ đúng/sai trong `create-scratch-slide/SKILL.md` mục 3.1. Đã render thử (headless hoặc trình duyệt) và soi ảnh chụp từng slide có khối lệnh điều kiện để xác nhận không bị vỡ dòng trước khi báo hoàn thành.
