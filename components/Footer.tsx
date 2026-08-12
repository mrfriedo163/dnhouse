import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-[1.1fr_0.8fr_1fr]">
        <div className="flex items-center gap-3">
          <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-white/15 bg-white shadow-[0_14px_34px_rgba(0,0,0,0.18)]">
            <Image
              src={siteConfig.logoPath}
              alt="Logo Giặt sấy DN House"
              fill
              sizes="56px"
              className="object-contain p-1"
            />
          </span>
          <div>
            <p className="text-xl font-extrabold">{siteConfig.businessName}</p>
            <p className="mt-1 text-sky-100">{siteConfig.slogan}</p>
          </div>
        </div>
        <div className="text-sm leading-7 text-sky-100">
          <p className="mb-2 font-extrabold uppercase tracking-wide text-white">Thông tin tiệm</p>
          <p>{siteConfig.address}</p>
          <p>Hotline/Zalo: {siteConfig.hotline}</p>
          <p>Giờ mở cửa: {siteConfig.hours}</p>
          <Link href="/hoi-dap-giat-say-can-tho" className="mt-2 inline-block font-extrabold text-white underline underline-offset-4">Xem cẩm nang giặt sấy</Link>
        </div>
        <div>
          <p className="mb-3 text-sm font-extrabold uppercase tracking-wide text-white">Theo dõi DN House</p>
          <SocialLinks dark compact />
          <p className="mt-3 text-sm leading-6 text-sky-100">Hình ảnh, video và cập nhật thực tế từ tiệm.</p>
        </div>
      </div>
      <div className="bg-[#facc15] px-4 py-2 text-center text-sm font-bold leading-6 text-navy">
        Copyright © 2026 Hộ Kinh Doanh Giặt Sấy DN House. All rights reserved.
      </div>
    </footer>
  );
}
