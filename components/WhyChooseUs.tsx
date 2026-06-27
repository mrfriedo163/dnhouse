import { siteConfig } from "@/config/siteConfig";

export function WhyChooseUs() {
  return (
    <section className="bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)] py-14 md:py-20">
      <div className="section-shell">
        <p className="eyebrow">Điểm tin cậy</p>
        <h2 className="section-title">Vì sao chọn DN House</h2>
        <div className="stagger-list mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.whyChooseUs.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="surface-card lift-card p-5">
                <span className="icon-tile bg-orange-50 text-orange-700">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <p className="mt-4 text-lg font-black leading-7 text-navy">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
