import { siteConfig } from "@/config/siteConfig";

export function Services() {
  return (
    <section id="dich-vu" className="bg-white py-14 md:py-20">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="eyebrow">Dịch vụ chính</p>
          <h2 className="section-title">Những việc DN House có thể hỗ trợ</h2>
          <p className="section-copy">Chọn nhanh dịch vụ bạn cần, sau đó gọi hoặc nhắn Zalo để tiệm tư vấn và báo giá trước khi làm.</p>
        </div>
        <div className="stagger-list mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="surface-card lift-card p-5">
                <span className="icon-tile mb-5">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-xl font-extrabold text-navy">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
