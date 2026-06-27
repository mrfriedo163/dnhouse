"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

type BookingValues = {
  name: string;
  phone: string;
  address: string;
  service: string;
  note: string;
};

function buildZaloMessage(values: BookingValues) {
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
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "zalo">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
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
    const nextZaloLink = getBookingLink(message);

    if (!siteConfig.bookingWebhookUrl) {
      setStatus("zalo");
      window.open(nextZaloLink, "_blank", "noopener,noreferrer");
      return;
    }

    setStatus("sending");

    const payload = JSON.stringify({
      ...values,
      source: "DN House website",
      submittedAt: new Date().toISOString()
    });

    if (navigator.sendBeacon) {
      navigator.sendBeacon(siteConfig.bookingWebhookUrl, new Blob([payload], { type: "text/plain;charset=utf-8" }));
    } else {
      await fetch(siteConfig.bookingWebhookUrl, {
        method: "POST",
        mode: "no-cors",
        body: payload
      });
    }

    setStatus("sent");
    event.currentTarget.reset();
  }

  return (
    <section id="dat-lich" className="bg-navy py-14 text-white md:py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-wide text-orange-200">Đặt lịch nhanh</p>
          <h2 className="mt-2 text-3xl font-extrabold leading-tight md:text-4xl">Gửi thông tin, DN House liên hệ xác nhận</h2>
          <p className="mt-4 text-lg leading-8 text-sky-100">
            Form này không cần tài khoản. Thông tin sẽ được lưu để tiệm liên hệ xác nhận nhanh hơn.
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
          <button
            disabled={status === "sending"}
            className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-navy px-5 text-base font-extrabold text-white shadow-soft transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
          >
            <Send className="h-5 w-5" aria-hidden />
            {status === "sending" ? "Đang gửi..." : "Gửi thông tin đặt lịch"}
          </button>
          {status === "zalo" ? (
            <p className="mt-4 rounded-lg bg-sky-50 p-4 font-semibold text-sky-900">
              Website đã soạn sẵn tin nhắn Zalo. Bạn bấm gửi trong Zalo để tiệm nhận thông tin.
            </p>
          ) : null}
        </form>
      </div>
      {status === "sent" ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-success-title"
        >
          <div className="w-full max-w-md rounded-lg bg-white p-6 text-center text-navy shadow-[0_28px_90px_rgba(0,0,0,0.28)]">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-3xl font-extrabold text-emerald-700">
              ✓
            </span>
            <h3 id="booking-success-title" className="mt-5 text-2xl font-extrabold leading-tight">
              DN House đã nhận thông tin
            </h3>
            <p className="mt-3 leading-7 text-slate-700">
              Cảm ơn bạn đã đặt lịch. Tiệm sẽ liên hệ xác nhận sớm nhất qua số điện thoại bạn vừa gửi.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                className="min-h-11 rounded-lg bg-navy px-4 font-extrabold text-white shadow-soft transition hover:-translate-y-0.5"
                onClick={() => setStatus("idle")}
              >
                Đã hiểu
              </button>
              <a
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-sky-200 bg-white px-4 font-extrabold text-navy transition hover:border-navy"
                href={siteConfig.zaloHref}
                target="_blank"
                rel="noreferrer"
              >
                Nhắn Zalo
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
