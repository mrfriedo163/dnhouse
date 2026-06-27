import { MapPin } from "lucide-react";
import { CTAButtons } from "@/components/CTAButtons";
import { siteConfig } from "@/config/siteConfig";

export function Contact() {
  return (
    <section id="lien-he" className="bg-page py-14 pb-28 md:py-20 md:pb-20">
      <div className="section-shell grid gap-6 lg:grid-cols-2">
        <div className="surface-card p-5 md:p-6">
          <p className="eyebrow">Liên hệ</p>
          <h2 className="section-title">{siteConfig.businessName}</h2>
          <p className="mt-4 leading-8 text-slate-700">{siteConfig.address}</p>
          <div className="mt-6 grid gap-3">
            {siteConfig.contactHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex gap-3 rounded-lg border border-slate-100 bg-page p-4">
                  <Icon className="mt-1 h-5 w-5 shrink-0 text-navy" aria-hidden />
                  <p>
                    <span className="block text-sm font-bold text-slate-500">{item.label}</span>
                    <span className="font-black text-navy">{item.value}</span>
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-6">
            <CTAButtons />
          </div>
        </div>

        <div className="surface-card overflow-hidden">
          {siteConfig.googleMapsEmbedSrc ? (
            <iframe
              title="Bản đồ DN House"
              src={siteConfig.googleMapsEmbedSrc}
              className="h-full min-h-[360px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <div className="flex min-h-[360px] flex-col items-center justify-center bg-[linear-gradient(135deg,#e6f4ff_0%,#ffffff_56%,#fff7ed_100%)] p-6 text-center">
              <span className="icon-tile h-14 w-14">
                <MapPin className="h-7 w-7" aria-hidden />
              </span>
              <p className="mt-4 text-xl font-black text-navy">Google Maps</p>
              <p className="mt-2 max-w-sm leading-7 text-slate-700">
                Bấm nút bên dưới để mở vị trí DN House trên Google Maps.
              </p>
              <a
                className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-navy px-5 font-black text-white shadow-[0_18px_38px_rgba(16,42,67,0.22)] transition duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-sky-200"
                href={siteConfig.mapsHref}
                target="_blank"
                rel="noreferrer"
              >
                <MapPin className="h-5 w-5" aria-hidden />
                Mở Google Maps
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
