import { siteConfig } from "@/config/siteConfig";

export function Process() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="section-shell">
        <p className="eyebrow">Quy trình</p>
        <h2 className="section-title">Đặt giặt tại DN House rất đơn giản</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {siteConfig.steps.map((step, index) => (
            <div key={step} className="surface-card relative overflow-hidden p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-lg font-black text-white shadow-soft">
                {index + 1}
              </span>
              <p className="mt-5 text-lg font-black text-navy">{step}</p>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-skySoft" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
