# DN House editorial charter

## Định vị

DN House là cơ sở giặt sấy tại Long Tuyền, Bình Thủy, Cần Thơ. Thư viện nội dung giải đáp cách nhận biết và xử lý vết bẩn, chăm sóc quần áo, chăn mền, rèm cửa và giày. Nội dung phải hữu ích độc lập, không biến thành quảng cáo trá hình và không hứa làm sạch tuyệt đối.

## Hợp đồng bài viết

Bản nháp dùng MDX với YAML front matter. Các trường bắt buộc: `title`, `slug`, `description`, `category`, `primaryEntity`, `searchIntent`, `contentType`, `stainType`, `garmentType`, `colorClass`, `material`, `stainAge`, `treatmentRisk`, `parentHub`, `canonical`, `sources`, `status`, `updatedAt`.

Sau front matter phải có đúng một H1 khớp `title`, tiếp theo là đoạn **Câu trả lời nhanh** 40–70 từ. Dùng H2/H3 mô tả việc cần làm ngay, cách xử lý, khác biệt giữa đồ trắng và đồ màu khi có liên quan, xử lý vết mới/vết khô, điều không nên làm, khi nào nên dừng tự xử lý và câu hỏi thường gặp.

Canonical: `https://www.giatsaycantho.vn/thu-vien/<slug>`.

Không dùng raw HTML, affiliate link, số liệu hoặc nguồn bịa, trải nghiệm giả, lời hứa “sạch 100%”, hay khẳng định DN House có quy trình/thiết bị chưa được xác nhận. CTA chỉ xuất hiện tự nhiên ở cuối bài: người đọc có thể chụp ảnh vết bẩn và gửi Zalo để DN House kiểm tra chất liệu, tình trạng rồi báo khả năng xử lý.

## Taxonomy

Category được phép:

- `tay-vet-ban`
- `cham-soc-quan-ao`
- `giat-chan-men`
- `ve-sinh-giay`
- `giat-rem-cua`
- `kien-thuc-giat-say`

`colorClass` chỉ nhận `trắng`, `màu` hoặc `null`. Chỉ tách theo chất liệu khi cách xử lý khác đáng kể. Chỉ tách vết mới/vết khô thành URL riêng khi intent và quy trình đủ khác; nếu không phải gom trong một bài.

## Nghiên cứu và an toàn

Ưu tiên nguồn sơ cấp và có thẩm quyền: hướng dẫn chăm sóc chính thức của nhà sản xuất, tổ chức an toàn hóa chất, cơ quan y tế, tiêu chuẩn và tài liệu kỹ thuật về vật liệu. Mỗi nguồn cần URL HTTPS thật, tiêu đề, publisher, ngày truy cập và claim được hỗ trợ.

Research phải nêu rõ nhiệt độ nước, chất có thể dùng, chất không được trộn, rủi ro phai màu/cố định vết/hỏng sợi/hỏng keo, yêu cầu thử vùng khuất và điểm phải ngừng tự xử lý. Bài `treatmentRisk: high` bắt buộc người vận hành duyệt.

Model chỉ đề xuất URL; URL chưa retrieval hoặc chưa được con người kiểm tra không phải nguồn đã xác minh.

## GEO, AEO và Local SEO

Trả lời câu hỏi chính trực tiếp, gọi tên thực thể nhất quán, giải thích giới hạn và tạo các đoạn tự chứa có thể được trích dẫn mà không mất ngữ cảnh. Internal link phải nối về hub và bài liên quan đúng ý định. Thông tin DN House như giá, hotline, địa chỉ, giờ mở cửa và khu vực phục vụ phải lấy từ cấu hình production, không tự bịa trong draft.

