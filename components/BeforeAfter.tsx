import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";

const beforeAfterImages = [
  {
    src: "/before-after-shoes.jpg",
    alt: "Giay trang sau khi duoc ve sinh tai DN House"
  },
  {
    src: "/before-after-bedding.jpg",
    alt: "Chan men sach thom sau khi giat say tai DN House"
  },
  {
    src: "/before-after-clothes.jpg",
    alt: "Quan ao duoc giat say va gap gon tai DN House"
  }
];

export function BeforeAfter() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="section-shell">
        <p className="eyebrow">Hình ảnh thực tế</p>
        <h2 className="section-title">Trước và sau khi giặt</h2>
        <div className="stagger-list mt-8 grid gap-4 md:grid-cols-3">
          {siteConfig.beforeAfter.map((item, index) => (
            <div key={item} className="group surface-card lift-card overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden bg-sky-50">
                <Image
                  src={beforeAfterImages[index].src}
                  alt={beforeAfterImages[index].alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/10 via-transparent to-white/5" />
              </div>
              <p className="p-4 font-bold text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
