import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";

export function Footer() {
  return (
    <footer className="bg-navy px-4 py-8 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
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
            <p className="text-xl font-black">{siteConfig.businessName}</p>
            <p className="mt-1 text-sky-100">{siteConfig.slogan}</p>
          </div>
        </div>
        <p className="text-sm text-sky-100">© 2026 DN House. All rights reserved.</p>
      </div>
    </footer>
  );
}
