# Quy trình chọn và render 50 ảnh DN House

1. Tạo contact sheet từ chính thư mục 183 ảnh Leonardo.
2. Đối chiếu từng ô ảnh với 50 chủ đề tại `../dn-house-50-topic-plan.md`.
3. Chỉ ghi 50 ảnh được chọn vào `selected-images.json`.
4. Render ảnh final bằng script; chữ tiếng Việt được vẽ cục bộ bằng font Windows, không phụ thuộc AI nên không mất dấu.
5. Kiểm tra đủ 50 file final trước khi lập danh sách file nguồn thừa để người dùng xác nhận xóa.

Không xóa file nguồn trước khi 50 ảnh final và manifest đã đủ.
