import Image from "next/image";
import { Phone } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export function Header() {
  return (
    <header className="animate-fade sticky top-0 z-40 border-b border-white/70 bg-white/85 shadow-[0_8px_30px_rgba(16,42,67,0.06)] backdrop-blur-xl">
      <div className="section-shell flex items-center justify-between gap-4 py-3">
        <a href="/" className="flex min-w-0 items-center gap-3" aria-label="DN House">
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

        <nav className="hidden min-w-[500px] items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/90 p-1.5 text-[0.98rem] font-bold leading-5 text-slate-700 shadow-[0_14px_34px_rgba(16,42,67,0.08)] lg:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex min-h-11 flex-1 items-center justify-center rounded-lg px-4 py-2.5 transition hover:bg-skySoft hover:text-navy"
            >
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
      <nav className="section-shell flex gap-2 overflow-x-auto pb-3 text-sm font-extrabold text-slate-700 lg:hidden" aria-label="Điều hướng nhanh">
        <a href="/#dich-vu" className="whitespace-nowrap rounded-full bg-skySoft px-4 py-2">Dịch vụ</a>
        <a href="/#bang-gia" className="whitespace-nowrap rounded-full bg-skySoft px-4 py-2">Bảng giá</a>
        <a href="/hoi-dap-giat-say-can-tho" className="whitespace-nowrap rounded-full bg-navy px-4 py-2 text-white">Hỏi đáp</a>
        <a href="/#lien-he" className="whitespace-nowrap rounded-full bg-skySoft px-4 py-2">Địa chỉ</a>
      </nav>
    </header>
  );
}
