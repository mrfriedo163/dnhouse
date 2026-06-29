import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { seoPages } from "@/config/seoPages";

export function PopularSearchLinks() {
  return (
    <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] py-14 md:py-20">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="eyebrow">Tìm nhanh theo nhu cầu</p>
          <h2 className="section-title">Dịch vụ được tìm nhiều tại Cần Thơ</h2>
          <p className="section-copy">
            Chọn đúng nhu cầu để xem thông tin chi tiết, giá tham khảo và cách DN House hỗ trợ từng nhóm dịch vụ.
          </p>
        </div>

        <div className="stagger-list mt-8 grid gap-4 md:grid-cols-3">
          {seoPages.map((page) => (
            <Link
              key={page.slug}
              href={`/${page.slug}`}
              className="surface-card lift-card group flex min-h-44 flex-col justify-between p-5"
            >
              <span>
                <span className="text-sm font-extrabold uppercase tracking-wide text-orange-700">{page.eyebrow}</span>
                <span className="mt-3 block text-xl font-extrabold leading-tight text-navy">{page.title}</span>
                <span className="mt-3 line-clamp-3 block leading-7 text-slate-700">{page.description}</span>
              </span>
              <span className="mt-5 inline-flex items-center gap-2 font-extrabold text-navy transition group-hover:gap-3">
                Xem chi tiết
                <ArrowRight className="h-5 w-5" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
