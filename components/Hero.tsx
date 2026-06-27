import Image from "next/image";
import { BadgePercent, CheckCircle2 } from "lucide-react";
import { CTAButtons } from "@/components/CTAButtons";
import { siteConfig } from "@/config/siteConfig";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f5fbff_48%,#eaf6ff_100%)]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(16,42,67,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(16,42,67,0.04)_1px,transparent_1px)] bg-[size:36px_36px]" />
      <div className="section-shell relative grid gap-8 pb-12 pt-8 md:grid-cols-[1.02fr_0.98fr] md:items-center md:pb-16 md:pt-14">
        <div>
          <div className="animate-rise mb-5 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-white px-4 py-2 text-[0.92rem] font-bold leading-6 text-orange-700 shadow-sm">
            <BadgePercent className="h-4 w-4" aria-hidden />
            {siteConfig.promotion}
          </div>
          <h1 className="hero-title animate-rise animate-delay-1">
            {siteConfig.hero.title}
          </h1>
          <p className="animate-rise animate-delay-2 mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            {siteConfig.hero.description}
          </p>
          <div className="animate-rise animate-delay-3 mt-7">
            <CTAButtons />
          </div>
          <div className="animate-rise animate-delay-3 mt-6 grid gap-3 text-[0.95rem] font-semibold leading-6 text-slate-700 sm:grid-cols-2">
            <span className="inline-flex items-center gap-2 rounded-lg border border-slate-100 bg-white px-4 py-3 shadow-sm">
              <CheckCircle2 className="h-5 w-5 text-emerald-600" aria-hidden />
              Không đăng nhập
            </span>
            <span className="inline-flex items-center gap-2 rounded-lg border border-slate-100 bg-white px-4 py-3 shadow-sm">
              <CheckCircle2 className="h-5 w-5 text-emerald-600" aria-hidden />
              Đặt lịch nhanh qua Zalo
            </span>
          </div>
        </div>

        <div className="surface-card soft-float relative overflow-hidden p-2">
          <div className="absolute inset-x-5 top-5 z-10 flex items-center justify-between rounded-lg bg-white/90 px-4 py-3 shadow-sm backdrop-blur">
            <span className="font-black text-navy">DN House</span>
            <span className="text-[0.92rem] font-bold text-orange-700">Sạch thơm mỗi ngày</span>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={siteConfig.heroImage}
              alt="Quần áo sạch thơm và giày đã vệ sinh tại DN House"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 48vw"
              className="image-breathe object-cover"
            />
          </div>
          <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-2 rounded-lg bg-navy/90 p-3 text-center text-white backdrop-blur">
            <div>
              <p className="text-base font-black sm:text-lg">30%</p>
              <p className="text-[0.75rem] leading-4 text-sky-100">ưu đãi</p>
            </div>
            <div>
              <p className="text-base font-black sm:text-lg">4</p>
              <p className="text-[0.75rem] leading-4 text-sky-100">dịch vụ</p>
            </div>
            <div>
              <p className="text-base font-black sm:text-lg">Zalo</p>
              <p className="text-[0.75rem] leading-4 text-sky-100">đặt nhanh</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
