import { MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { CTAButtons } from "@/components/CTAButtons";
import { siteConfig } from "@/config/siteConfig";

export function BookingForm() {
  return (
    <section id="dat-lich" className="bg-navy py-14 text-white md:py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-wide text-orange-200">Liên hệ trực tiếp</p>
          <h2 className="mt-2 text-3xl font-extrabold leading-tight md:text-4xl">
            Cần giặt sấy? Nhắn Zalo hoặc gọi DN House
          </h2>
          <p className="mt-4 text-lg leading-8 text-sky-100">
            Website không có form gửi thông tin khách hàng. Khách liên hệ trực tiếp qua Zalo hoặc hotline để tiệm tư vấn,
            báo giá và xác nhận thời gian phục vụ.
          </p>
          <div className="mt-6 rounded-lg border border-white/15 bg-white/10 p-4 text-sky-50">
            Khi nhắn Zalo, bạn có thể gửi loại đồ cần giặt, số lượng ước tính và khu vực để DN House phản hồi nhanh hơn.
          </div>
        </div>

        <div className="rounded-lg bg-white p-5 text-navy shadow-[0_26px_70px_rgba(0,0,0,0.22)] md:p-6">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-slate-100 bg-sky-50 p-4">
              <MessageCircle className="h-7 w-7 text-navy" aria-hidden />
              <h3 className="mt-4 font-extrabold">Nhắn Zalo</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">Gửi hình đồ hoặc hỏi giá nhanh.</p>
            </div>
            <div className="rounded-lg border border-slate-100 bg-orange-50 p-4">
              <Phone className="h-7 w-7 text-navy" aria-hidden />
              <h3 className="mt-4 font-extrabold">Gọi hotline</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{siteConfig.hotline}</p>
            </div>
            <div className="rounded-lg border border-slate-100 bg-emerald-50 p-4">
              <ShieldCheck className="h-7 w-7 text-navy" aria-hidden />
              <h3 className="mt-4 font-extrabold">Báo giá trước</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">Tiệm xác nhận trước khi làm.</p>
            </div>
          </div>

          <div className="mt-6">
            <CTAButtons />
          </div>
        </div>
      </div>
    </section>
  );
}
