import Image from "next/image";
import { Phone } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export function Header() {
  return (
    <header className="animate-fade sticky top-0 z-40 border-b border-white/70 bg-white/85 shadow-[0_8px_30px_rgba(16,42,67,0.06)] backdrop-blur-xl">
      <div className="section-shell flex items-center justify-between gap-4 py-3">
        <a href="#" className="flex min-w-0 items-center gap-3" aria-label="DN House">
          <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-slate-100 bg-white shadow-soft">
            <Image
              src={siteConfig.logoPath}
              alt="Logo Giặt sấy DN House"
              fill
              sizes="48px"
              className="object-contain p-1"
              priority
            />
          </span>
          <span className="min-w-0">
            <span className="block text-base font-extrabold leading-tight sm:text-lg">{siteConfig.businessName}</span>
            <span className="hidden text-[0.9rem] leading-5 text-slate-600 sm:block">Giặt sấy tại Cần Thơ</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-lg border border-slate-200 bg-white/80 p-1 text-[0.92rem] font-semibold leading-5 text-slate-700 md:flex">
          {siteConfig.nav.map((item) => (
            <a key={item.href} href={item.href} className="rounded-md px-3 py-2 hover:bg-skySoft hover:text-navy">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={siteConfig.phoneHref}
          className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-lg bg-navy px-4 text-[0.95rem] font-semibold leading-6 text-white shadow-[0_14px_30px_rgba(16,42,67,0.18)] transition hover:-translate-y-0.5"
        >
          <Phone className="h-4 w-4" aria-hidden />
          Gọi ngay
        </a>
      </div>
    </header>
  );
}
