import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { SeoLandingPage } from "@/components/SeoLandingPage";
import { getSeoPage } from "@/config/seoPages";
import { siteConfig } from "@/config/siteConfig";

const page = getSeoPage("ve-sinh-giay-can-tho")!;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.description,
  alternates: {
    canonical: "/ve-sinh-giay-can-tho"
  },
  openGraph: {
    title: page.metaTitle,
    description: page.description,
    url: `${siteConfig.siteUrl}/ve-sinh-giay-can-tho`,
    images: [page.image]
  }
};

export default function VeSinhGiayCanThoPage() {
  return (
    <>
      <Header />
      <SeoLandingPage page={page} />
      <FloatingCTA />
      <Footer />
    </>
  );
}
