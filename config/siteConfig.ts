import {
  BadgePercent,
  BedDouble,
  CheckCircle2,
  Clock3,
  Droplets,
  Footprints,
  MapPin,
  Phone,
  Shirt,
  Sparkles,
  Umbrella,
  Wand2
} from "lucide-react";

export const siteConfig = {
  businessName: "DN House",
  slogan: "Giặt sấy sạch thơm - nhanh gọn tại Cần Thơ",
  hotline: "0945 632 853",
  phoneHref: "tel:0945632853",
  zaloHref: "https://zalo.me/0945632853",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=648%2F24%20Khu%20vuc%20Binh%20Trung%2C%20Long%20Tuyen%2C%20Binh%20Thuy%2C%20Can%20Tho",
  address:
    "648/24 Khu vực Bình Trung, Phường Long Tuyền, Quận Bình Thủy, TP. Cần Thơ",
  hours: "07:00 - 21:00 hằng ngày",
  area: "Long Tuyền, Bình Thủy và khu vực lân cận tại Cần Thơ",
  promotion: "Giảm 30% nhân dịp khai trương",
  logoPath: "/logo.png",
  heroImage: "/hero-laundry.png",
  googleMapsEmbedSrc: "",
  nav: [
    { label: "Dịch vụ", href: "#dich-vu" },
    { label: "Bảng giá", href: "#bang-gia" },
    { label: "Đặt lịch", href: "#dat-lich" },
    { label: "Liên hệ", href: "#lien-he" }
  ],
  hero: {
    title: "Giặt sấy DN House - sạch thơm, nhanh gọn tại Cần Thơ",
    description:
      "Bạn không có thời gian giặt đồ? Mùa mưa đồ ẩm, lâu khô, dễ có mùi? DN House hỗ trợ giặt sấy quần áo, chăn ga, giặt giày và ủi đồ để bạn luôn có đồ sạch thơm mỗi ngày."
  },
  quickBenefits: [
    { label: "Sạch thơm, gấp gọn", icon: Sparkles },
    { label: "Hỗ trợ mùa mưa", icon: Umbrella },
    { label: "Có giặt giày", icon: Footprints },
    { label: "Gần Long Tuyền - Bình Thủy", icon: MapPin }
  ],
  services: [
    {
      title: "Giặt sấy quần áo",
      description: "Giặt sạch, sấy khô, gấp gọn, thơm tho.",
      icon: Shirt
    },
    {
      title: "Giặt chăn ga, mền, drap",
      description:
        "Phù hợp mùa mưa, đồ dày, đồ lâu khô, đồ có mùi ẩm.",
      icon: BedDouble
    },
    {
      title: "Vệ sinh giày",
      description:
        "Làm sạch giày, khử mùi, chăm sóc giày đi học/đi làm.",
      icon: Footprints
    },
    {
      title: "Ủi đồ / gấp đồ",
      description:
        "Dành cho người bận rộn, cần đồ phẳng đẹp, gọn gàng.",
      icon: Wand2
    }
  ],
  pricing: [
    { service: "Giặt sấy quần áo", price: "từ ...đ/kg", icon: Shirt },
    { service: "Giặt chăn/mền", price: "từ ...đ/cái", icon: BedDouble },
    { service: "Giặt giày", price: "từ ...đ/đôi", icon: Footprints },
    { service: "Ủi đồ", price: "từ ...đ/món", icon: Sparkles }
  ],
  steps: [
    "Gọi/Zalo cho DN House",
    "Gửi thông tin đồ cần giặt",
    "Nhận đồ sạch thơm, gấp gọn"
  ],
  beforeAfter: [
    "Giày trước/sau khi vệ sinh",
    "Chăn/mền sau khi giặt sấy",
    "Quần áo được gấp gọn"
  ],
  whyChooseUs: [
    { title: "Gần khu dân cư Cần Thơ", icon: MapPin },
    { title: "Phù hợp mùa mưa, đồ lâu khô", icon: Droplets },
    { title: "Giá rõ ràng, báo trước khi làm", icon: BadgePercent },
    {
      title: "Giặt sấy, giặt giày, chăn ga trong một nơi",
      icon: CheckCircle2
    }
  ],
  faq: [
    {
      question: "DN House có nhận giặt chăn/mền không?",
      answer:
        "Có. Tiệm nhận giặt chăn, mền, drap và các loại đồ dày. Giá sẽ được báo trước theo kích thước và chất liệu."
    },
    {
      question: "Có giặt giày không?",
      answer:
        "Có. DN House hỗ trợ vệ sinh giày, khử mùi và chăm sóc giày đi học, đi làm."
    },
    {
      question: "Bao lâu thì nhận được đồ?",
      answer:
        "Thời gian tùy số lượng và loại đồ. Bạn có thể gọi hoặc nhắn Zalo để tiệm báo thời gian dự kiến."
    },
    {
      question: "Giá có thay đổi không?",
      answer:
        "Giá có thể thay đổi theo chất liệu, kích thước và tình trạng đồ. DN House sẽ báo giá trước khi làm."
    },
    {
      question: "Có hỗ trợ khu vực Long Tuyền/Bình Thủy không?",
      answer:
        "Có. DN House phục vụ Long Tuyền, Bình Thủy và khu vực lân cận tại Cần Thơ."
    }
  ],
  bookingServices: [
    "Giặt sấy quần áo",
    "Giặt chăn ga",
    "Giặt giày",
    "Ủi đồ",
    "Khác"
  ],
  contactHighlights: [
    { label: "Hotline/Zalo", value: "0945 632 853", icon: Phone },
    { label: "Khu vực phục vụ", value: "Long Tuyền - Bình Thủy", icon: MapPin },
    { label: "Giờ mở cửa", value: "07:00 - 21:00 hằng ngày", icon: Clock3 }
  ]
};

export type SiteConfig = typeof siteConfig;
