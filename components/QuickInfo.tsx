import { siteConfig } from "@/config/siteConfig";

export function QuickInfo() {
  return (
    <section className="relative -mt-5 bg-transparent pb-8">
      <div className="section-shell stagger-list grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {siteConfig.quickBenefits.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="surface-card lift-card flex items-center gap-3 p-4">
              <span className="icon-tile h-11 w-11">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span className="font-bold text-navy">{item.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
