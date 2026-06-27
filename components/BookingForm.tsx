"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

function buildZaloMessage(values: Record<string, string>) {
  return [
    "Xin chào DN House, tôi muốn đặt lịch giặt.",
    `Họ tên: ${values.name}`,
    `Số điện thoại: ${values.phone}`,
    `Khu vực/địa chỉ: ${values.address}`,
    `Dịch vụ: ${values.service}`,
    `Ghi chú: ${values.note || "Không có"}`
  ].join("\n");
}

function getBookingLink(message: string) {
  // Thay link này bằng Zalo OA hoặc link cá nhân chính thức nếu có.
  return `${siteConfig.zaloHref}?text=${encodeURIComponent(message)}`;
}

export function BookingForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const values = {
      name: String(form.get("name") || ""),
      phone: String(form.get("phone") || ""),
      address: String(form.get("address") || ""),
      service: String(form.get("service") || ""),
      note: String(form.get("note") || "")
    };
    const message = buildZaloMessage(values);
    setSent(true);
    window.open(getBookingLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="dat-lich" className="bg-navy py-14 text-white md:py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="text-sm font-black uppercase tracking-wide text-orange-200">Đặt lịch nhanh</p>
          <h2 className="mt-2 text-3xl font-black leading-tight md:text-4xl">Gửi thông tin, DN House liên hệ xác nhận</h2>
          <p className="mt-4 text-lg leading-8 text-sky-100">
            Form này không cần tài khoản. Khi bấm gửi, nội dung sẽ được soạn sẵn để bạn nhắn qua Zalo.
          </p>
          <div className="mt-6 rounded-lg border border-white/15 bg-white/10 p-4 text-sky-50">
            Ưu tiên điền số điện thoại và khu vực để tiệm phản hồi nhanh hơn.
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-lg bg-white p-5 text-navy shadow-[0_26px_70px_rgba(0,0,0,0.22)] md:p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="font-bold text-navy">Họ tên</span>
              <input required name="name" className="input-field" />
            </label>
            <label className="block">
              <span className="font-bold text-navy">Số điện thoại</span>
              <input required name="phone" inputMode="tel" className="input-field" />
            </label>
          </div>
          <label className="mt-4 block">
            <span className="font-bold text-navy">Khu vực/địa chỉ</span>
            <input required name="address" className="input-field" />
          </label>
          <label className="mt-4 block">
            <span className="font-bold text-navy">Dịch vụ cần dùng</span>
            <select name="service" className="input-field">
              {siteConfig.bookingServices.map((service) => (
                <option key={service}>{service}</option>
              ))}
            </select>
          </label>
          <label className="mt-4 block">
            <span className="font-bold text-navy">Ghi chú</span>
            <textarea name="note" rows={4} className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-navy outline-none transition focus:border-navy focus:ring-4 focus:ring-sky-100" />
          </label>
          <button className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-navy px-5 text-base font-black text-white shadow-soft transition hover:-translate-y-0.5">
            <Send className="h-5 w-5" aria-hidden />
            Gửi thông tin đặt lịch
          </button>
          {sent ? (
            <p className="mt-4 rounded-lg bg-emerald-50 p-4 font-semibold text-emerald-800">
              DN House đã nhận thông tin. Tiệm sẽ liên hệ xác nhận sớm nhất.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
