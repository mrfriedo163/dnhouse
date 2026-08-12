import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { CTAButtons } from "@/components/CTAButtons";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/config/siteConfig";
import { seoPages } from "@/config/seoPages";
import { GuideLibrary } from "@/components/GuideLibrary";

const pageUrl = `${siteConfig.siteUrl}/hoi-dap-giat-say-can-tho`;

export const metadata: Metadata = {
  title: "Hỏi đáp giặt sấy tại Cần Thơ",
  description:
    "Giải đáp các câu hỏi thường gặp về giặt sấy quần áo, chăn mền, rèm cửa, vệ sinh giày và giao nhận tại Cần Thơ.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Hỏi đáp giặt sấy tại Cần Thơ | DN House",
    description: "Thông tin thực tế để khách tại Cần Thơ chuẩn bị đồ và trao đổi báo giá với DN House.",
    url: pageUrl
  }
};

const questions = [
  { question: "DN House nhận những loại đồ nào?", answer: "Tiệm nhận giặt sấy quần áo, chăn ga/mền, rèm cửa và vệ sinh giày. Với món đồ đặc biệt hoặc tình trạng khó, khách nên gửi hình qua Zalo để tiệm kiểm tra trước." },
  { question: "Giặt sấy giá bao nhiêu?", answer: "Giặt sấy từ 3kg có giá từ 7K/kg; gói dưới 3kg là 35K/lần. Chăn, rèm, giày và đồ cần tẩy điểm có mức giá riêng; DN House báo giá trước khi làm." },
  { question: "DN House có freeship không?", answer: "DN House hỗ trợ freeship trong bán kính 3km. Với khu vực xa hơn hoặc đơn hàng có yêu cầu đặc biệt, hãy nhắn Zalo để tiệm xác nhận trước." },
  { question: "Quần áo bị dính vết bẩn có xử lý được không?", answer: "Tiệm có hỗ trợ tẩy điểm. Khả năng xử lý phụ thuộc vào loại vết bẩn, thời gian bám vết và chất liệu vải; khách nên báo rõ tình trạng hoặc gửi ảnh để được tư vấn thực tế." },
  { question: "Bao lâu thì nhận lại đồ?", answer: "Thời gian hoàn tất tùy theo số lượng, loại đồ và tình trạng thực tế. DN House sẽ xác nhận thời gian dự kiến khi nhận thông tin đơn hàng." },
  { question: "Giày có cần gửi hình trước khi mang đến không?", answer: "Nên gửi hình nếu giày bị bẩn nặng, có mốc, ố vàng hoặc cần xử lý mùi. Tiệm sẽ xem chất liệu và tình trạng để tư vấn hướng xử lý phù hợp." }
];

const topicGroups = [
  "Vết bẩn trên quần áo: máu, dầu ăn, cà phê, mực, son và mùi ẩm mốc.",
  "Giặt chăn mền, chăn ga, rèm cửa và đồ dày vào mùa mưa Cần Thơ.",
  "Vệ sinh giày: giày trắng, giày vải, giày thể thao, mùi hôi và mốc.",
  "Chuẩn bị đồ trước khi gửi giặt, cách bảo quản và các lưu ý nhận đồ."
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: questions.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } }))
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: siteConfig.siteUrl },
    { "@type": "ListItem", position: 2, name: "Hỏi đáp giặt sấy", item: pageUrl }
  ]
};

export default function LaundryFaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Header />
      <main>
        <section className="bg-gradient-to-b from-skySoft via-white to-white py-16 md:py-24">
          <div className="section-shell max-w-4xl text-center">
            <p className="eyebrow">Cẩm nang DN House</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-navy md:text-5xl">Hỏi đáp giặt sấy tại Cần Thơ</h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-700">Nơi DN House tổng hợp câu hỏi thường gặp, tình huống thực tế và hướng dẫn chăm sóc đồ theo từng nhóm chủ đề.</p>
            <div className="mt-8 flex justify-center"><CTAButtons /></div>
          </div>
        </section>
        <section className="bg-white py-14 md:py-20">
          <div className="section-shell grid gap-10 lg:grid-cols-[1.45fr_0.85fr]">
            <div>
              <p className="eyebrow">Câu hỏi thường gặp</p>
              <h2 className="section-title">Thông tin cần biết trước khi gửi đồ</h2>
              <div className="surface-card mt-8 divide-y divide-slate-100 overflow-hidden">
                {questions.map((item) => (
                  <details key={item.question} className="group p-5 open:bg-skySoft/40">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-extrabold text-navy">{item.question}<span className="text-xl leading-none text-orange-700 transition group-open:rotate-45">+</span></summary>
                    <p className="mt-3 leading-7 text-slate-700">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
            <aside className="surface-card h-fit p-6 md:p-8">
              <p className="eyebrow">Các nhóm bài</p>
              <h2 className="mt-2 text-2xl font-extrabold text-navy">Tìm theo loại tình huống</h2>
              <ul className="mt-6 space-y-4 text-slate-700">
                {topicGroups.map((topic) => (
                  <li key={topic} className="flex gap-3 leading-7"><ArrowRight className="mt-1 h-4 w-4 shrink-0 text-orange-700" aria-hidden /><span>{topic}</span></li>
                ))}
              </ul>
              <div className="mt-7 rounded-xl bg-skySoft p-4 text-sm leading-6 text-slate-700">Cần câu trả lời đúng với món đồ của bạn? Gửi ảnh và mô tả qua Zalo để DN House kiểm tra trước.</div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <a href={siteConfig.zaloHref} className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy px-4 py-3 font-bold text-white"><MessageCircle className="h-4 w-4" aria-hidden /> Nhắn Zalo</a>
                <a href={siteConfig.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-3 font-bold text-navy"><Phone className="h-4 w-4" aria-hidden /> Gọi {siteConfig.hotline}</a>
              </div>
            </aside>
          </div>
        </section>
        <section className="bg-slate-50 py-14 md:py-20">
          <div className="section-shell">
            <div className="max-w-2xl">
              <p className="eyebrow">Bài dịch vụ hiện có</p>
              <h2 className="section-title">Xem theo nhu cầu giặt sấy cụ thể</h2>
              <p className="section-copy">Ba trang dịch vụ hiện có được gom tại đây. Khi xuất bản các bài mới, chúng tôi sẽ đặt vào đúng nhóm chủ đề và liên kết ngược về các trang dịch vụ này.</p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {seoPages.map((page) => (
                <Link key={page.slug} href={`/${page.slug}`} className="surface-card lift-card group flex min-h-48 flex-col justify-between p-6">
                  <span>
                    <span className="text-sm font-extrabold uppercase tracking-wide text-orange-700">{page.eyebrow}</span>
                    <span className="mt-3 block text-xl font-extrabold leading-tight text-navy">{page.title}</span>
                    <span className="mt-3 line-clamp-3 block leading-7 text-slate-700">{page.description}</span>
                  </span>
                  <span className="mt-5 inline-flex items-center gap-2 font-extrabold text-navy transition group-hover:gap-3">Xem trang dịch vụ <ArrowRight className="h-5 w-5" aria-hidden /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-white py-14 md:py-20">
          <div className="section-shell">
            <div className="max-w-3xl">
              <p className="eyebrow">Thư viện cẩm nang</p>
              <h2 className="section-title">50 tình huống giặt sấy, vệ sinh giày và chăm sóc đồ</h2>
              <p className="section-copy">Chọn đúng tình huống để xem câu trả lời nhanh, các bước an toàn và khi nào cần gửi ảnh cho DN House kiểm tra trước.</p>
            </div>
            <GuideLibrary />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
