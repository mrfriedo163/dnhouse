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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LaundryService",
  name: siteConfig.businessName,
  telephone: "0945632853",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address,
    addressLocality: "Cần Thơ",
    addressCountry: "VN"
  },
  areaServed: "Cần Thơ",
  serviceType: ["Laundry service", "shoe cleaning", "curtain cleaning", "bedding cleaning"]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
