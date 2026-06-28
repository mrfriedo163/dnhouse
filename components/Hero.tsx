import Image from "next/image";
import { BadgePercent, CheckCircle2 } from "lucide-react";
import { CTAButtons } from "@/components/CTAButtons";
import { siteConfig } from "@/config/siteConfig";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f5fbff_48%,#eaf6ff_100%)]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(16,42,67,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(16,42,67,0.04)_1px,transparent_1px)] bg-[size:36px_36px]" />
      <div className="section-shell relative grid gap-10 pb-12 pt-10 md:grid-cols-[0.95fr_1.05fr] md:items-center md:pb-16 md:pt-16">
        <div>
          <div className="animate-rise mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-orange-200 bg-white px-5 py-3 text-[1rem] font-black leading-6 text-orange-700 shadow-[0_14px_34px_rgba(234,88,12,0.16)] sm:text-[1.08rem]">
            <BadgePercent className="h-5 w-5 shrink-0" aria-hidden />
            {siteConfig.promotion}
          </div>
          <h1 className="hero-title animate-rise animate-delay-1">
            <span className="block">{siteConfig.hero.title}</span>
            <span className="mt-2 block text-[0.78em] leading-[1.2] text-slate-700">
              {siteConfig.hero.subtitle}
            </span>
          </h1>
          <p className="animate-rise animate-delay-2 mt-5 max-w-xl text-base leading-7 text-slate-700 sm:text-[1.05rem] sm:leading-8">
            {siteConfig.hero.description}
          </p>
          <div className="animate-rise animate-delay-3 mt-7">
            <CTAButtons />
          </div>
          <div className="animate-rise animate-delay-3 mt-6 grid gap-3 text-[0.95rem] font-semibold leading-6 text-slate-700 sm:grid-cols-2">
            <span className="inline-flex items-center gap-2 rounded-lg border border-slate-100 bg-white px-4 py-3 shadow-sm">
              <CheckCircle2 className="h-5 w-5 text-emerald-600" aria-hidden />
              Không nhập thông tin trên web
            </span>
            <span className="inline-flex items-center gap-2 rounded-lg border border-slate-100 bg-white px-4 py-3 shadow-sm">
              <CheckCircle2 className="h-5 w-5 text-emerald-600" aria-hidden />
              Tư vấn trực tiếp qua Zalo
            </span>
          </div>
        </div>

        <div className="surface-card soft-float relative overflow-hidden p-2 md:p-3">
          <div className="absolute inset-x-5 top-5 z-10 flex items-center justify-between gap-3 rounded-lg bg-white/95 px-4 py-3 shadow-[0_14px_34px_rgba(16,42,67,0.12)] backdrop-blur">
            <span className="inline-flex min-w-0 items-center gap-2 font-extrabold text-navy">
              <span className="relative h-7 w-7 overflow-hidden rounded-md border border-slate-100 bg-white">
                <Image
                  src={siteConfig.logoPath}
                  alt=""
                  fill
                  sizes="28px"
                  className="object-contain p-0.5"
                />
              </span>
              DN House
            </span>
            <span className="shrink-0 text-[0.95rem] font-black text-orange-700">Từ 7K/kg</span>
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
          <div className="absolute bottom-5 left-5 right-5 overflow-hidden rounded-lg bg-white/92 text-navy shadow-[0_18px_45px_rgba(16,42,67,0.26)] backdrop-blur">
            <div className="grid grid-cols-3 divide-x divide-slate-200 text-center">
              <div className="px-2 py-3">
                <p className="text-lg font-black text-orange-700 sm:text-xl">10-30%</p>
                <p className="text-[0.75rem] font-bold leading-4 text-slate-600">ưu đãi</p>
              </div>
              <div className="px-2 py-3">
                <p className="text-lg font-black text-navy sm:text-xl">7K/kg</p>
                <p className="text-[0.75rem] font-bold leading-4 text-slate-600">chỉ từ</p>
              </div>
              <div className="px-2 py-3">
                <p className="text-lg font-black text-navy sm:text-xl">Zalo</p>
                <p className="text-[0.75rem] font-bold leading-4 text-slate-600">liên hệ ngay</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
