import { siteConfig } from "@/config/siteConfig";

export function Footer() {
  return (
    <footer className="bg-navy px-4 py-8 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xl font-black">{siteConfig.businessName}</p>
          <p className="mt-2 text-sky-100">{siteConfig.slogan}</p>
        </div>
        <p className="text-sm text-sky-100">© 2026 DN House. All rights reserved.</p>
      </div>
    </footer>
  );
}
