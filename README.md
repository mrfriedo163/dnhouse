# DN House Landing Page

Website landing page cho tiệm giặt sấy DN House tại Cần Thơ, xây bằng Next.js và Tailwind CSS.

## Chạy dự án

```bash
npm install
npm run dev
```

Mở `http://localhost:3000` để xem website.

## Thay logo

Đặt file logo vào:

```text
public/logo.png
```

Nếu chưa có logo, header vẫn hiển thị text `DN`.

## Thay hotline, Zalo, Google Maps

Mở file:

```text
config/siteConfig.ts
```

Sửa các giá trị:

- `hotline`
- `phoneHref`
- `zaloHref`
- `mapsHref`
- `googleMapsEmbedSrc`

Với Google Maps iframe, dán link embed vào `googleMapsEmbedSrc`. Nếu chưa có, website sẽ hiển thị khung placeholder.

## Thay bảng giá

Trong `config/siteConfig.ts`, sửa mảng `pricing`:

```ts
pricing: [
  { service: "Giặt sấy quần áo", price: "từ ...đ/kg" }
]
```

## Thay nội dung trang

Các nội dung chính như slogan, mô tả hero, dịch vụ, FAQ, khu vực phục vụ và ưu đãi đều nằm trong `config/siteConfig.ts` để dễ chỉnh sửa.

## Ảnh hero

Website đang tham chiếu ảnh:

```text
public/hero-laundry.png
```

Khi có ảnh thật của tiệm, thay file này bằng ảnh mới cùng tên hoặc sửa `heroImage` trong `config/siteConfig.ts`.
