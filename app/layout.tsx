import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL("https://dn-house.vercel.app"),
  title: "DN House - Giặt sấy, vệ sinh giày tại Cần Thơ",
  description:
    "DN House nhận giặt sấy quần áo, chăn ga, vệ sinh giày, rèm cửa và tẩy điểm tại Cần Thơ. Sạch thơm, nhanh gọn, liên hệ trực tiếp qua hotline/Zalo.",
  openGraph: {
    title: "DN House - Giặt sấy, vệ sinh giày tại Cần Thơ",
    description:
      "DN House nhận giặt sấy quần áo, chăn ga, vệ sinh giày, rèm cửa và tẩy điểm tại Cần Thơ. Sạch thơm, nhanh gọn, liên hệ trực tiếp qua hotline/Zalo.",
    type: "website",
    locale: "vi_VN",
    siteName: siteConfig.businessName,
    images: [
      {
        url: siteConfig.heroImage,
        width: 1200,
        height: 900,
        alt: "DN House giặt sấy tại Cần Thơ"
      }
    ]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
