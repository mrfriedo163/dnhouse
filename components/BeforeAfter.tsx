import { ImagePlus } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export function BeforeAfter() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="section-shell">
        <p className="eyebrow">Hình ảnh thực tế</p>
        <h2 className="section-title">Trước và sau khi giặt</h2>
        <div className="stagger-list mt-8 grid gap-4 md:grid-cols-3">
          {siteConfig.beforeAfter.map((item) => (
            <div key={item} className="surface-card lift-card overflow-hidden">
              <div className="flex aspect-[4/3] items-center justify-center bg-[linear-gradient(135deg,#e6f4ff_0%,#ffffff_58%,#fff7ed_100%)]">
                <div className="text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-white text-navy shadow-sm">
                    <ImagePlus className="h-7 w-7" aria-hidden />
                  </span>
                  <p className="mt-3 font-black text-navy">Thêm ảnh thật tại đây</p>
                </div>
              </div>
              <p className="p-4 font-bold text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
