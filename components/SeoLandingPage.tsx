import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { CTAButtons } from "@/components/CTAButtons";
import { SeoPage } from "@/config/seoPages";
import { siteConfig } from "@/config/siteConfig";

type SeoLandingPageProps = {
  page: SeoPage;
};

export function SeoLandingPage({ page }: SeoLandingPageProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.description,
    areaServed: "Cần Thơ",
    provider: {
      "@type": "DryCleaningOrLaundry",
      name: "Hộ Kinh Doanh Giặt Sấy DN House",
      telephone: "+84945632853",
      url: siteConfig.siteUrl,
      address: siteConfig.address
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <main>
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f5fbff_48%,#eaf6ff_100%)] py-12 md:py-16">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(16,42,67,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(16,42,67,0.04)_1px,transparent_1px)] bg-[size:36px_36px]" />
          <div className="section-shell relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="eyebrow">{page.eyebrow}</p>
              <h1 className="mt-3 text-[2.1rem] font-extrabold leading-[1.14] text-navy sm:text-[2.7rem] lg:text-[3.2rem]">
                {page.h1}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
                {page.intro}
              </p>
              <div className="mt-7">
                <CTAButtons />
              </div>
            </div>

            <div className="surface-card overflow-hidden p-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={page.image}
                  alt={page.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 48vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-12 md:py-16">
          <div className="section-shell">
            <div className="grid gap-4 md:grid-cols-3">
              {page.highlights.map((item) => (
                <div key={item} className="surface-card flex items-center gap-3 p-4">
                  <span className="icon-tile h-11 w-11 shrink-0">
                    <CheckCircle2 className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="font-extrabold text-navy">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {page.sections.map((section) => (
                <article key={section.title} className="surface-card lift-card p-5">
                  <h2 className="text-xl font-extrabold text-navy">{section.title}</h2>
                  <p className="mt-3 leading-7 text-slate-700">{section.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#f8fafc_0%,#eef7ff_100%)] py-12 md:py-16">
          <div className="section-shell grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">Câu hỏi thường gặp</p>
              <h2 className="section-title">Thông tin nhanh về {page.title}</h2>
              <p className="section-copy">
                Bạn có thể gọi hoặc nhắn Zalo {siteConfig.hotline} để DN House tư vấn chi tiết trước khi làm.
              </p>
            </div>
            <div className="surface-card divide-y divide-slate-100 overflow-hidden">
              {page.faqs.map((item) => (
                <div key={item.question} className="p-5">
                  <h3 className="font-extrabold text-navy">{item.question}</h3>
                  <p className="mt-2 leading-7 text-slate-700">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy py-12 text-white">
          <div className="section-shell flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-wide text-orange-200">DN House</p>
              <h2 className="mt-2 text-2xl font-extrabold">Cần tư vấn dịch vụ? Liên hệ tiệm ngay</h2>
              <p className="mt-2 text-sky-100">{siteConfig.address}</p>
            </div>
            <div className="shrink-0">
              <CTAButtons />
            </div>
          </div>
        </section>

        <section className="bg-white py-8">
          <div className="section-shell">
            <Link className="font-extrabold text-navy underline underline-offset-4" href="/">
              Về trang chủ DN House
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
