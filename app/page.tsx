import { BeforeAfter } from "@/components/BeforeAfter";
import { BookingForm } from "@/components/BookingForm";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { Process } from "@/components/Process";
import { QuickInfo } from "@/components/QuickInfo";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { siteConfig } from "@/config/siteConfig";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "DryCleaningOrLaundry",
  "@id": `${siteConfig.siteUrl}/#business`,
  name: "Hộ Kinh Doanh Giặt Sấy DN House",
  alternateName: siteConfig.businessName,
  url: siteConfig.siteUrl,
  logo: `${siteConfig.siteUrl}${siteConfig.logoPath}`,
  image: [
    `${siteConfig.siteUrl}${siteConfig.heroImage}`,
    `${siteConfig.siteUrl}/before-after-shoes.jpg`,
    `${siteConfig.siteUrl}/before-after-bedding.jpg`,
    `${siteConfig.siteUrl}/before-after-clothes.jpg`
  ],
  telephone: "+84945632853",
  priceRange: "7K-50K VND",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address,
    addressLocality: "Cần Thơ",
    addressRegion: "Cần Thơ",
    addressCountry: "VN"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 10.0427851,
    longitude: 105.7402216
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "07:00",
      closes: "21:00"
    }
  ],
  areaServed: [
    { "@type": "City", name: "Cần Thơ" },
    { "@type": "Place", name: "Long Tuyền" },
    { "@type": "Place", name: "Bình Thủy" }
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Dịch vụ giặt sấy DN House",
    itemListElement: siteConfig.services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description
      }
    }))
  },
  sameAs: [siteConfig.mapsHref]
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: siteConfig.faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }))
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <div className="scroll-reveal">
          <QuickInfo />
        </div>
        <div className="scroll-reveal">
          <Services />
        </div>
        <div className="scroll-reveal">
          <Pricing />
        </div>
        <div className="scroll-reveal">
          <Process />
        </div>
        <div className="scroll-reveal">
          <BookingForm />
        </div>
        <div className="scroll-reveal">
          <BeforeAfter />
        </div>
        <div className="scroll-reveal">
          <WhyChooseUs />
        </div>
        <div className="scroll-reveal">
          <FAQ />
        </div>
        <div className="scroll-reveal">
          <Contact />
        </div>
      </main>
      <FloatingCTA />
      <Footer />
    </>
  );
}
