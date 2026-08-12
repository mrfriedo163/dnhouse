import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, AlertTriangle, CheckCircle2, MessageCircle, ShieldAlert } from "lucide-react";
import { CTAButtons } from "@/components/CTAButtons";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getGuideAdvice, getGuideServiceFacts, getRelatedGuides } from "@/config/guideAdvice";
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

export default function GuidePage({ params }: PageProps) {
  const guide = getGuide(params.slug);
  if (!guide) notFound();
  const advice = getGuideAdvice(guide.slug);
  if (!advice) notFound();
  const service = getSeoPage(guide.serviceSlug)!;
  const serviceFacts = getGuideServiceFacts(guide);
  const url = `${siteConfig.siteUrl}/thu-vien/${guide.slug}`;
  const related = getRelatedGuides(guide, guides);
  const faq = [
    { question: "Việc đầu tiên nên làm là gì?", answer: guide.firstAction },
    { question: "Điều nào cần tránh?", answer: advice.avoid },
    { question: "Khi nào nên dừng tự xử lý?", answer: advice.stopWhen },
    { question: `DN House hỗ trợ gì cho trường hợp này?`, answer: `${serviceFacts.title}: ${serviceFacts.facts.join("; ")}.` }
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
              <h2 className="section-title">Bạn nên làm gì trong trường hợp này?</h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">{guide.summary}</p>
              {guide.risk === "high" && (
                <section className="mt-7 flex gap-4 rounded-2xl border border-amber-300 bg-amber-50 p-5 text-amber-950">
                  <ShieldAlert className="mt-1 h-6 w-6 shrink-0" aria-hidden />
                  <div><h3 className="font-extrabold">Trường hợp cần thận trọng</h3><p className="mt-1 leading-7">Bài này thuộc nhóm rủi ro cao. Hãy dừng ngay nếu chất liệu đổi màu, biến dạng, bong keo hoặc có hóa chất/dung môi không rõ thành phần.</p></div>
                </section>
              )}
              <section className="surface-card mt-8 p-6 md:p-8">
                <h2 className="flex items-center gap-2 text-2xl font-extrabold text-navy"><CheckCircle2 className="h-6 w-6 text-orange-700" />Ba bước xử lý phù hợp</h2>
                <ol className="mt-5 space-y-5">
                  {advice.steps.map((step, index) => <li key={step} className="grid grid-cols-[2rem_1fr] gap-3 leading-7 text-slate-700"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy font-extrabold text-white">{index + 1}</span><span>{step}</span></li>)}
                </ol>
              </section>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <section className="surface-card border-orange-100 p-6"><h2 className="flex items-center gap-2 text-xl font-extrabold text-navy"><AlertTriangle className="h-5 w-5 text-orange-700" />Điều cần tránh</h2><p className="mt-4 leading-7 text-slate-700">{advice.avoid}</p></section>
                <section className="surface-card border-sky-200 bg-skySoft p-6"><h2 className="text-xl font-extrabold text-navy">Khi nào nên dừng?</h2><p className="mt-4 leading-7 text-slate-700">{advice.stopWhen}</p></section>
              </div>
            </article>
            <aside className="space-y-5">
              <section className="surface-card p-6"><p className="eyebrow">Thông tin dịch vụ thật</p><h2 className="mt-2 text-2xl font-extrabold text-navy">{serviceFacts.title}</h2><ul className="mt-4 space-y-3">{serviceFacts.facts.map((fact) => <li key={fact} className="flex gap-2 leading-7 text-slate-700"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-orange-700" />{fact}</li>)}</ul><Link href={`/${service.slug}`} className="mt-5 inline-flex items-center gap-2 font-extrabold text-navy underline underline-offset-4">Xem trang dịch vụ và giá <ArrowRight className="h-4 w-4" /></Link></section>
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
