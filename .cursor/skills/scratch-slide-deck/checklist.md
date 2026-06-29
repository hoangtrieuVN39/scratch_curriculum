# Checklist QA slide deck

## Nội dung

- [ ] Nội dung khớp markdown buổi (không thiếu TH/BTVN)
- [ ] Thuật ngữ Scratch trong `<code>` (mô tả ngoài khối), không dịch sai tên khối
- [ ] Nội dung `.block`: song ngữ `English / tiếng Việt`; phần còn lại slide tiếng Việt
- [ ] Tiếng Việt, câu ngắn, phù hợp 8–10 tuổi
- [ ] Không thêm slide/file ngoài yêu cầu user

## Kỹ thuật

- [ ] File HTML tự chứa, mở được bằng browser
- [ ] `data-index` slide liên tục 0…n-1
- [ ] Slide đầu có class `active`, còn lại `next` (init JS)
- [ ] `progressBar` `aria-valuemax` = số slide
- [ ] `brandSub` đúng tuần/buổi

## Điều hướng

- [ ] `→` `←` `Space` `Home` `End` hoạt động
- [ ] Nút ← → và chấm tiến độ hoạt động
- [ ] **Lùi slide**: counter giảm VÀ nội dung đổi (không kẹt slide cũ)
- [ ] Vuốt trái/phải trên mobile
- [ ] Checklist click toggle ☑
- [ ] Quiz click hiện đáp án

## Fullscreen

- [ ] `F` hoặc nút ⛶ → slide phủ 100% màn hình
- [ ] `Esc` hoặc nút ✕ thoát
- [ ] CSS dùng `html:fullscreen`, không `body:fullscreen`

## Layout

- [ ] Không slide nào tràn (`slide-body` scroll không bắt buộc trên 1366×768)
- [ ] Slide dày dùng `.cols` / thu nhỏ blocks
- [ ] `keydown` listener tách riêng — syntax JS hợp lệ (mở DevTools, không lỗi console)

## Trình chiếu

- [ ] Font Nunito load được (cần mạng lần đầu) hoặc fallback Segoe UI
- [ ] Thanh tiến độ cập nhật theo slide
- [ ] Gợi ý điều hướng ẩn sau lần chuyển slide đầu (`body.presenting`)
