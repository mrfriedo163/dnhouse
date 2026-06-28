import { MessageCircle, Phone } from "lucide-react";
import { CTAButtons } from "@/components/CTAButtons";
import { siteConfig } from "@/config/siteConfig";

export function FloatingCTA() {
  return (
    <>
      <div className="fixed bottom-6 right-5 z-50 hidden flex-col gap-4 md:flex">
        <a
          href={siteConfig.phoneHref}
          className="floating-action floating-action-phone"
          aria-label="Gọi DN House"
        >
          <Phone className="h-7 w-7" aria-hidden />
        </a>
        <a
          href={siteConfig.zaloHref}
          target="_blank"
          rel="noreferrer"
          className="floating-action floating-action-zalo"
          aria-label="Nhắn Zalo DN House"
        >
          <MessageCircle className="h-7 w-7" aria-hidden />
        </a>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/80 bg-white/95 p-3 shadow-[0_-18px_42px_rgba(16,42,67,0.18)] backdrop-blur-xl md:hidden">
        <CTAButtons compact />
      </div>
    </>
  );
}
