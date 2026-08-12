"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Search, X } from "lucide-react";
import { GuideCategory, guideCategories, guides } from "@/config/guides";

type CategoryFilter = "all" | GuideCategory;

function normalize(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

export function GuideLibrary() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [limit, setLimit] = useState(12);

  const filteredGuides = useMemo(() => {
    const queryTokens = normalize(query.trim()).split(/\s+/).filter(Boolean);
    return guides.filter((guide) => {
      const matchesCategory = category === "all" || guide.category === category;
      const haystack = normalize(`${guide.title} ${guide.summary} ${guideCategories[guide.category]}`);
      return matchesCategory && queryTokens.every((token) => haystack.includes(token));
    });
  }, [category, query]);

  const visibleGuides = filteredGuides.slice(0, limit);
  const categoryEntries = Object.entries(guideCategories) as Array<[GuideCategory, string]>;

  function chooseCategory(nextCategory: CategoryFilter) {
    setCategory(nextCategory);
    setLimit(12);
  }

  return (
    <div className="mt-8">
      <div className="surface-card p-4 md:p-5">
        <label htmlFor="guide-search" className="font-extrabold text-navy">Bạn đang cần xử lý món đồ hay vết bẩn nào?</label>
        <div className="relative mt-3">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" aria-hidden />
          <input
            id="guide-search"
            type="search"
            value={query}
            onChange={(event) => { setQuery(event.target.value); setLimit(12); }}
            placeholder="Ví dụ: giày mốc, áo dính dầu, chăn bông..."
            className="min-h-12 w-full rounded-lg border border-slate-200 bg-white py-3 pl-12 pr-11 text-base text-navy outline-none transition focus:border-navy focus:ring-4 focus:ring-sky-100"
          />
          {query && (
            <button type="button" onClick={() => setQuery("")} aria-label="Xóa nội dung tìm kiếm" className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100">
              <X className="h-4 w-4" aria-hidden />
            </button>
          )}
        </div>
        <div className="mt-4 flex gap-2 overflow-x-auto pb-1" aria-label="Lọc bài theo chủ đề">
          <button type="button" onClick={() => chooseCategory("all")} className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-extrabold transition ${category === "all" ? "bg-navy text-white" : "bg-skySoft text-navy hover:bg-sky-100"}`}>Tất cả ({guides.length})</button>
          {categoryEntries.map(([key, label]) => {
            const count = guides.filter((guide) => guide.category === key).length;
            return <button key={key} type="button" onClick={() => chooseCategory(key)} className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-extrabold transition ${category === key ? "bg-navy text-white" : "bg-skySoft text-navy hover:bg-sky-100"}`}>{label} ({count})</button>;
          })}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4 text-sm text-slate-600">
        <p><strong className="text-navy">{filteredGuides.length}</strong> hướng dẫn phù hợp</p>
        {(query || category !== "all") && <button type="button" onClick={() => { setQuery(""); chooseCategory("all"); }} className="font-extrabold text-navy underline underline-offset-4">Xóa bộ lọc</button>}
      </div>

      {visibleGuides.length > 0 ? (
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {visibleGuides.map((guide) => (
            <Link key={guide.slug} href={`/thu-vien/${guide.slug}`} className="surface-card lift-card group flex min-h-52 flex-col justify-between p-5">
              <span>
                <span className="text-sm font-extrabold uppercase tracking-wide text-orange-700">{guideCategories[guide.category]}</span>
                <span className="mt-3 block text-xl font-extrabold leading-7 text-navy">{guide.title}</span>
                <span className="mt-3 line-clamp-2 block leading-7 text-slate-700">{guide.summary}</span>
              </span>
              <span className="mt-5 inline-flex items-center gap-2 font-extrabold text-navy transition group-hover:gap-3">Đọc hướng dẫn <ArrowRight className="h-4 w-4" aria-hidden /></span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="mt-5 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
          <p className="font-extrabold text-navy">Chưa tìm thấy bài đúng với từ khóa này.</p>
          <p className="mt-2 text-slate-600">Bạn có thể thử từ ngắn hơn hoặc nhắn Zalo gửi ảnh để DN House xem trực tiếp.</p>
        </div>
      )}

      {visibleGuides.length < filteredGuides.length && (
        <div className="mt-8 text-center">
          <button type="button" onClick={() => setLimit((current) => current + 12)} className="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-200 bg-white px-6 font-extrabold text-navy shadow-sm transition hover:border-navy">Xem thêm {Math.min(12, filteredGuides.length - visibleGuides.length)} bài</button>
        </div>
      )}
    </div>
  );
}
