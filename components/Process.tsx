import { siteConfig } from "@/config/siteConfig";

export function Process() {
  return (
    <section id="quy-trinh" className="bg-white py-14 md:py-20">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="eyebrow">Quy trình tại DN House</p>
          <h2 className="section-title">Liên hệ nhanh, báo giá trước, làm rõ ràng</h2>
          <p className="section-copy">
            Chỉ cần nhắn Zalo hoặc gọi hotline, DN House sẽ tư vấn dịch vụ phù hợp, báo giá trước và hẹn thời gian nhận đồ.
          </p>
        </div>
        <div className="stagger-list mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {siteConfig.steps.map((step, index) => (
            <div key={step.title} className="surface-card relative overflow-hidden p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-lg font-extrabold text-white shadow-soft">
                {index + 1}
              </span>
              <h3 className="mt-5 text-lg font-extrabold text-navy">{step.title}</h3>
              <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">{step.description}</p>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-skySoft" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
