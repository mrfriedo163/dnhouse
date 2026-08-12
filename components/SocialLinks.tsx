import { Facebook, Play } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

type SocialLinksProps = {
  dark?: boolean;
  compact?: boolean;
};

export function SocialLinks({ dark = false, compact = false }: SocialLinksProps) {
  return (
    <div className={compact ? "flex flex-wrap gap-2" : "grid gap-3 sm:grid-cols-2"}>
      {siteConfig.socialLinks.map((item) => {
        const Icon = item.label === "Facebook" ? Facebook : Play;
        return (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.description}
            className={[
              "group inline-flex min-h-11 items-center gap-3 rounded-lg border px-4 py-2.5 font-extrabold transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-sky-200",
              dark
                ? "border-white/20 bg-white/10 text-white hover:bg-white/15"
                : "border-slate-200 bg-white text-navy shadow-sm hover:border-sky-300",
              compact ? "text-sm" : ""
            ].join(" ")}
          >
            <span className={dark ? "flex h-8 w-8 items-center justify-center rounded-full bg-white/15" : "icon-tile h-8 w-8"}>
              <Icon className="h-4 w-4" aria-hidden />
            </span>
            <span>{item.label}</span>
          </a>
        );
      })}
    </div>
  );
}
