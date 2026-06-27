import { siteConfig } from "@/config/siteConfig";

export function Pricing() {
  return (
    <section id="bang-gia" className="bg-[linear-gradient(180deg,#f8fafc_0%,#eef7ff_100%)] py-14 md:py-20">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="eyebrow">Bảng giá</p>
          <h2 className="section-title">Giá rõ ràng, dễ chọn</h2>
          <p className="section-copy">
            Các mức phổ biến được đưa lên trước để bạn ước tính nhanh. Một số món đặc biệt sẽ được kiểm tra và báo giá trước khi làm.
          </p>
        </div>
        <div className="stagger-list mt-8 grid gap-4 md:grid-cols-4">
          {siteConfig.pricing.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.service} className="surface-card lift-card p-5">
                <span className="icon-tile">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-4 font-extrabold text-navy">{item.service}</h3>
                <p className="mt-3 text-2xl font-extrabold text-orange-700">{item.price}</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{item.note}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="surface-card overflow-hidden border-sky-100">
            <div className="grid grid-cols-[1fr_auto] bg-navy px-4 py-3 text-sm font-extrabold uppercase tracking-wide text-white">
              <span>Dịch vụ</span>
              <span>Giá</span>
            </div>
            <div className="divide-y divide-slate-100">
              {siteConfig.priceDetails.map((item) => (
                <div key={item.service} className="grid grid-cols-[1fr_auto] gap-4 px-4 py-3 text-sm leading-6 sm:text-base">
                  <span className="font-semibold text-navy">{item.service}</span>
                  <span className="text-right font-extrabold text-orange-700">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="surface-card border-orange-100 bg-orange-50 p-5">
            <p className="text-sm font-extrabold uppercase tracking-wide text-orange-700">Lưu ý</p>
            <p className="mt-3 leading-7 text-slate-700">
              Giá có thể thay đổi theo chất liệu, kích thước và tình trạng đồ. Với đồ cần tẩy, đồ dày hoặc số lượng nhiều, DN House sẽ kiểm tra và báo giá trước khi làm.
            </p>
            <a
              href="#dat-lich"
              className="mt-5 inline-flex min-h-11 items-center justify-center rounded-lg bg-navy px-4 font-extrabold text-white shadow-soft transition hover:-translate-y-0.5"
            >
              Đặt lịch tư vấn giá
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
