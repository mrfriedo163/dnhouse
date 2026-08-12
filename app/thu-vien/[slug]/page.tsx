import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, AlertTriangle, CheckCircle2, MessageCircle } from "lucide-react";
import { CTAButtons } from "@/components/CTAButtons";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getGuide, guideCategories, guides } from "@/config/guides";
import { getSeoPage } from "@/config/seoPages";
import { siteConfig } from "@/config/siteConfig";

type PageProps = { params: { slug: string } };

export function generateStaticParams() {
  return guides.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const guide = getGuide(params.slug);
  if (!guide) return {};
  const url = `${siteConfig.siteUrl}/thu-vien/${guide.slug}`;
  return {
    title: guide.title,
    description: guide.summary,
    alternates: { canonical: url },
    openGraph: { title: guide.title, description: guide.summary, url, images: [`/seo-images/final/${guide.slug}.jpg`] }
  };
}

function relatedGuides(slug: string, category: string) {
  return guides.filter((guide) => guide.category === category && guide.slug !== slug).slice(0, 3);
}

export default function GuidePage({ params }: PageProps) {
  const guide = getGuide(params.slug);
  if (!guide) notFound();
  const service = getSeoPage(guide.serviceSlug)!;
  const url = `${siteConfig.siteUrl}/thu-vien/${guide.slug}`;
  const related = relatedGuides(guide.slug, guide.category);
  const faq = [
    { question: `${guide.title}: nên làm gì trước?`, answer: guide.firstAction },
    { question: "Có nên tự xử lý ngay tại nhà không?", answer: "Chỉ nên làm các bước nhẹ, an toàn và phù hợp nhãn vải/chất liệu. Hãy thử ở vùng kín trước; nếu không chắc về vật liệu hoặc vết bẩn, đừng dùng chất tẩy mạnh." },
    { question: "Khi nào nên liên hệ DN House?", answer: "Khi món đồ dày, dễ hỏng, vết bẩn đã lâu, có mùi/mốc rõ hoặc bạn cần báo giá và thời gian thực tế. Gửi ảnh qua Zalo để tiệm xem tình trạng trước." }
  ];
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Article", headline: guide.title, description: guide.summary, image: `${siteConfig.siteUrl}/seo-images/final/${guide.slug}.jpg`, mainEntityOfPage: url, author: { "@type": "Organization", name: siteConfig.businessName }, publisher: { "@id": `${siteConfig.siteUrl}/#business` }, inLanguage: "vi-VN" },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Trang chủ", item: siteConfig.siteUrl }, { "@type": "ListItem", position: 2, name: "Hỏi đáp giặt sấy", item: `${siteConfig.siteUrl}/hoi-dap-giat-say-can-tho` }, { "@type": "ListItem", position: 3, name: guide.title, item: url }] },
      { "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="bg-gradient-to-b from-skySoft via-white to-white py-12 md:py-16">
          <div className="section-shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <nav aria-label="Breadcrumb" className="text-sm font-bold text-slate-600"><Link href="/hoi-dap-giat-say-can-tho" className="hover:text-navy">Hỏi đáp giặt sấy</Link><span className="mx-2">/</span>{guideCategories[guide.category]}</nav>
              <p className="eyebrow mt-5">{guideCategories[guide.category]}</p>
              <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-navy md:text-5xl">{guide.title}</h1>
              <p className="mt-5 text-lg leading-8 text-slate-700">{guide.summary}</p>
              <div className="mt-7"><CTAButtons /></div>
            </div>
            <div className="surface-card overflow-hidden p-2"><div className="relative aspect-square overflow-hidden rounded-xl"><Image src={`/seo-images/final/${guide.slug}.jpg`} alt={guide.title} fill priority sizes="(max-width: 1024px) 100vw, 46vw" className="object-cover" /></div></div>
          </div>
        </section>

        <section className="bg-white py-14 md:py-20">
          <div className="section-shell grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <article>
              <p className="eyebrow">Câu trả lời nhanh</p>
              <h2 className="section-title">Cách xử lý an toàn trước khi mang đi giặt</h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">{guide.summary}</p>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <section className="surface-card p-6"><h3 className="flex items-center gap-2 text-xl font-extrabold text-navy"><CheckCircle2 className="h-5 w-5 text-orange-700" />Việc nên làm ngay</h3><ol className="mt-4 list-decimal space-y-3 pl-5 leading-7 text-slate-700"><li>{guide.firstAction}</li><li>Đọc nhãn chăm sóc và thử thao tác ở một vùng khuất trước.</li><li>Giặt theo nhãn và chỉ làm khô hoàn toàn khi vết/mùi đã được xử lý.</li></ol></section>
                <section className="surface-card border-orange-100 p-6"><h3 className="flex items-center gap-2 text-xl font-extrabold text-navy"><AlertTriangle className="h-5 w-5 text-orange-700" />Điều nên tránh</h3><ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-slate-700"><li>Không chà xát quá mạnh hoặc dùng nhiệt cao khi chưa xử lý xong vết bẩn.</li><li>Không trộn các chất tẩy rửa với nhau.</li><li>Không tiếp tục tự xử lý nếu vải đổi màu, bong keo hoặc vết lan rộng.</li></ul></section>
              </div>
              <section className="mt-8 rounded-2xl bg-skySoft p-6 md:p-8"><p className="text-sm font-extrabold uppercase tracking-wide text-orange-700">Khi nào nên dừng tự xử lý?</p><h2 className="mt-2 text-2xl font-extrabold text-navy">Hãy kiểm tra thực tế nếu món đồ có rủi ro</h2><p className="mt-3 leading-7 text-slate-700">Với đồ có nhãn chăm sóc đặc biệt, vải mỏng, da/da lộn, chi tiết dán keo, vết lâu ngày hoặc vết bẩn không rõ nguồn gốc, cách an toàn là gửi ảnh để được kiểm tra trước. DN House không cam kết xử lý sạch tuyệt đối khi chưa xem tình trạng thực tế.</p></section>
            </article>
            <aside className="space-y-5">
              <section className="surface-card p-6"><p className="eyebrow">Dịch vụ liên quan</p><h2 className="mt-2 text-2xl font-extrabold text-navy">{service.title}</h2><p className="mt-3 leading-7 text-slate-700">{service.description}</p><Link href={`/${service.slug}`} className="mt-5 inline-flex items-center gap-2 font-extrabold text-navy underline underline-offset-4">Xem trang dịch vụ <ArrowRight className="h-4 w-4" /></Link></section>
              <section className="rounded-2xl bg-navy p-6 text-white"><MessageCircle className="h-7 w-7 text-orange-200" /><h2 className="mt-4 text-xl font-extrabold">Gửi ảnh để hỏi tình trạng đồ</h2><p className="mt-2 leading-7 text-sky-100">Khách ở {siteConfig.area} có thể nhắn Zalo để tiệm xem chất liệu, vết bẩn và báo khả năng xử lý trước.</p><a href={siteConfig.zaloHref} className="mt-5 inline-flex rounded-lg bg-white px-4 py-3 font-extrabold text-navy">Nhắn Zalo {siteConfig.hotline}</a></section>
            </aside>
          </div>
        </section>

        <section className="bg-slate-50 py-14 md:py-20"><div className="section-shell grid gap-8 lg:grid-cols-[0.82fr_1.18fr]"><div><p className="eyebrow">FAQ</p><h2 className="section-title">Câu hỏi liên quan</h2></div><div className="surface-card divide-y divide-slate-100 overflow-hidden">{faq.map((item) => <div key={item.question} className="p-5"><h3 className="font-extrabold text-navy">{item.question}</h3><p className="mt-2 leading-7 text-slate-700">{item.answer}</p></div>)}</div></div></section>

        {related.length > 0 && <section className="bg-white py-14 md:py-20"><div className="section-shell"><p className="eyebrow">Đọc tiếp</p><h2 className="section-title">Chủ đề cùng nhóm</h2><div className="mt-8 grid gap-4 md:grid-cols-3">{related.map((item) => <Link key={item.slug} href={`/thu-vien/${item.slug}`} className="surface-card lift-card p-6"><p className="text-sm font-extrabold uppercase tracking-wide text-orange-700">{guideCategories[item.category]}</p><h3 className="mt-3 text-xl font-extrabold leading-7 text-navy">{item.title}</h3><p className="mt-3 line-clamp-3 leading-7 text-slate-700">{item.summary}</p><span className="mt-5 inline-flex items-center gap-2 font-extrabold text-navy">Đọc bài <ArrowRight className="h-4 w-4" /></span></Link>)}</div></div></section>}
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
