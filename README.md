# DN House Landing Page

Website landing page cho tiệm giặt sấy DN House tại Cần Thơ, xây bằng Next.js và Tailwind CSS.

## Chạy dự án

```bash
pnpm install
pnpm dev
```

Mở `http://localhost:3000` để xem website.

## Nội dung chính

Website hiện là landing page tĩnh, không có form gửi thông tin khách hàng. Khách liên hệ trực tiếp với DN House qua hotline, Zalo hoặc Google Maps.

Các nội dung chính như hotline, Zalo, địa chỉ, bảng giá, dịch vụ, FAQ, ưu đãi và quy trình nằm trong:

```text
config/siteConfig.ts
```

## Thay logo và ảnh

Logo đang dùng:

```text
public/dn-house-logo.jpg
```

Ảnh hero đang dùng:

```text
public/hero-laundry.png
```

Ảnh thực tế sau khi giặt đang dùng:

```text
public/before-after-shoes.jpg
public/before-after-bedding.jpg
public/before-after-clothes.jpg
```

## Thay hotline, Zalo, Google Maps

Mở `config/siteConfig.ts` và sửa các giá trị:

- `hotline`
- `phoneHref`
- `zaloHref`
- `mapsHref`
- `googleMapsEmbedSrc`

## Thay bảng giá

Trong `config/siteConfig.ts`, sửa các mảng:

- `pricing`
- `priceDetails`

Ví dụ:

```ts
pricing: [
  { service: "Giặt sấy từ 3kg", price: "từ 7K/kg" }
]
```
