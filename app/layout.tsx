import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/config/siteConfig";

const googleAnalyticsId = "G-N0YVDP7VD7";

const seoDescription =
  "Giặt sấy Cần Thơ tại DN House: nhận giặt quần áo, chăn ga, vệ sinh giày, rèm cửa và tẩy điểm. Giá rõ ràng, freeship 3km, liên hệ hotline/Zalo.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Giặt sấy Cần Thơ - DN House | Giặt đồ, vệ sinh giày, chăn ga",
    template: "%s | DN House"
  },
  description: seoDescription,
  keywords: [
    "giặt sấy cần thơ",
    "giặt đồ cần thơ",
    "tiệm giặt sấy cần thơ",
    "giặt sấy bình thủy",
    "giặt sấy long tuyền",
    "vệ sinh giày cần thơ",
    "giặt chăn ga cần thơ",
    "DN House"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Giặt sấy Cần Thơ - DN House",
    description: seoDescription,
    url: siteConfig.siteUrl,
    type: "website",
    locale: "vi_VN",
    siteName: siteConfig.businessName,
    images: [
      {
        url: siteConfig.heroImage,
        width: 1200,
        height: 900,
        alt: "DN House giặt sấy Cần Thơ"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Giặt sấy Cần Thơ - DN House",
    description: seoDescription,
    images: [siteConfig.heroImage]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');

            document.addEventListener('click', function (event) {
              var link = event.target.closest('a');
              if (!link) return;

              var href = link.getAttribute('href') || '';
              var eventName = '';

              if (href.indexOf('tel:') === 0) eventName = 'click_phone';
              else if (href.indexOf('zalo.me') !== -1) eventName = 'click_zalo';
              else if (href.indexOf('maps.app.goo.gl') !== -1 || href.indexOf('google.com/maps') !== -1) {
                eventName = 'click_directions';
              }

              if (eventName) {
                gtag('event', eventName, {
                  link_url: link.href,
                  link_text: (link.textContent || '').trim()
                });
              }
            });
          `}
        </Script>
      </body>
    </html>
  );
}
