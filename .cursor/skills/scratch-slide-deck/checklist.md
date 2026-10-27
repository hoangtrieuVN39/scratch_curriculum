# Checklist QA slide deck

## Nội dung

- [ ] Nội dung khớp markdown buổi (không thiếu TH/LT/BTVN); hành vi khối lệnh đã đối chiếu với Scratch thật (giáo án sai thì sửa trong slide và báo người dùng)
- [ ] Thuật ngữ Scratch trong `<code>` (mô tả ngoài khối), không dịch sai tên khối
- [ ] Nội dung `.block` **100% tiếng Việt chuẩn Scratch, không song ngữ**; toàn slide tiếng Việt
- [ ] Câu ngắn, phù hợp 7–10 tuổi
- [ ] Không thêm slide/file ngoài yêu cầu user

## Tương tác (Interactive Lab)

- [ ] Khởi động là thứ bấm được (Đúng/Sai, bình chọn hoặc lab)
- [ ] Phòng thí nghiệm mô phỏng: buổi Học ≥ 2, buổi Bài tập ≥ 1; có cả nhánh đúng và nhánh sai/thiếu khối; có phản hồi giải thích
- [ ] Bác sĩ Scratch: chỉ hiện triệu chứng, bấm "💊 Xem phương thuốc" mới hiện cách sửa
- [ ] Minigame Đúng/Sai: click nút, hiện "Câu tiếp theo ➡️", **không tự chuyển câu**, không có vận động thể chất; sai thì nêu rõ đáp án đúng
- [ ] Quiz 5 câu A/B/C/D: đáp án đúng rải đều vị trí, có danh hiệu theo điểm
- [ ] Không có âm thanh thật (kể cả lab về âm thanh)
- [ ] Mọi component gọi `e.stopPropagation()` và nằm trong danh sách loại trừ của listener `click` điều hướng (bấm sát mép không nhảy slide)
- [ ] Lab bất đồng bộ dùng `runId`; bấm "Làm lại" giữa chừng không để lại trạng thái treo

## Kỹ thuật

- [ ] File HTML tự chứa, mở được bằng browser
- [ ] `data-index` slide liên tục 0…n-1
- [ ] Slide đầu có class `active`, còn lại `next` (init JS)
- [ ] `progressBar` `aria-valuemax` và `counter` mặc định = số slide
- [ ] `brandSub` đúng tuần/buổi; chỉ số slide trong phân bổ thời gian (slide Ghi chú GV) đúng
- [ ] Không có `pageerror` / `console.error` khi bấm thử từng component

## Điều hướng

- [ ] `→` `←` `Space` `Home` `End` hoạt động
- [ ] Nút ← → và chấm tiến độ hoạt động
- [ ] **Lùi slide**: counter giảm VÀ nội dung đổi (không kẹt slide cũ)
- [ ] Vuốt trái/phải trên mobile

## Fullscreen

- [ ] `F` hoặc nút ⛶ → slide phủ 100% màn hình
- [ ] `Esc` hoặc nút ✕ thoát
- [ ] CSS dùng `html:fullscreen`, không `body:fullscreen`

## Layout

- [ ] Không slide nào tràn (`slide-body` không cần cuộn) ở 1366×768 và 1920×1080
- [ ] Slide dày dùng `.cols` / `.blocks-container.compact`
- [ ] Mọi header `.c-block` có điều kiện đã bọc trong đúng một `.block-head`; đã xem ảnh chụp, không vỡ dòng

## Trình chiếu

- [ ] Font Nunito load được (cần mạng lần đầu) hoặc fallback Segoe UI
- [ ] Thanh tiến độ cập nhật theo slide
- [ ] Gợi ý điều hướng ẩn sau lần chuyển slide đầu (`body.presenting`)
