import { siteConfig } from "@/config/siteConfig";

export function Pricing() {
  return (
    <section id="bang-gia" className="bg-[linear-gradient(180deg,#f8fafc_0%,#eef7ff_100%)] py-14 md:py-20">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="eyebrow">Bảng giá</p>
          <h2 className="section-title">Giá tham khảo dễ xem</h2>
          <p className="section-copy">Các mức dưới đây là placeholder để bạn thay nhanh khi có bảng giá chính thức.</p>
        </div>
        <div className="stagger-list mt-8 grid gap-4 md:grid-cols-4">
          {siteConfig.pricing.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.service} className="surface-card lift-card p-5">
                <span className="icon-tile">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-4 font-black text-navy">{item.service}</h3>
                <p className="mt-3 text-2xl font-black text-orange-700">{item.price}</p>
              </div>
            );
          })}
        </div>
        <p className="surface-card mt-5 border-sky-100 p-4 leading-7 text-slate-700">
          Giá có thể thay đổi tùy chất liệu, kích thước và tình trạng đồ. DN House sẽ báo giá trước khi làm.
        </p>
      </div>
    </section>
  );
}
