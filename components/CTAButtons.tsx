import { MapPinned, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

type CTAButtonsProps = {
  compact?: boolean;
};

export function CTAButtons({ compact = false }: CTAButtonsProps) {
  const base =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 font-black leading-6 transition duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-sky-200";
  const size = compact ? "text-[0.92rem]" : "text-base";

  return (
    <div className={compact ? "grid grid-cols-3 gap-2" : "flex flex-col gap-3 sm:flex-row"}>
      <a className={`${base} ${size} cta-pulse bg-navy text-white shadow-[0_18px_38px_rgba(16,42,67,0.22)]`} href={siteConfig.phoneHref}>
        <Phone className="h-5 w-5" aria-hidden />
        Gọi ngay
      </a>
      <a
        className={`${base} ${size} border border-sky-200 bg-white text-navy shadow-soft hover:border-navy`}
        href={siteConfig.zaloHref}
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle className="h-5 w-5" aria-hidden />
        {compact ? "Zalo" : "Nhắn Zalo"}
      </a>
      <a
        className={`${base} ${size} border border-orange-100 bg-orange-50 text-navy shadow-soft hover:border-orange-300`}
        href={siteConfig.mapsHref}
        target="_blank"
        rel="noreferrer"
      >
        <MapPinned className="h-5 w-5" aria-hidden />
        {compact ? "Đường" : "Chỉ đường"}
      </a>
    </div>
  );
}
