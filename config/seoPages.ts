import { siteConfig } from "@/config/siteConfig";

export type SeoPage = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  image: string;
  highlights: string[];
  sections: Array<{
    title: string;
    body: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

export const seoPages: SeoPage[] = [
  {
    slug: "giat-say-can-tho",
    title: "Giặt sấy Cần Thơ",
    metaTitle: "Giặt sấy Cần Thơ - DN House | Sạch thơm, báo giá rõ ràng",
    description:
      "DN House nhận giặt sấy Cần Thơ cho quần áo hằng ngày, chăn mền, rèm cửa và đồ cần tẩy vết bẩn. Liên hệ Zalo/hotline để được báo giá trước.",
    eyebrow: "Dịch vụ giặt sấy Cần Thơ",
    h1: "Giặt sấy Cần Thơ sạch thơm, nhanh gọn tại DN House",
    intro:
      "DN House phục vụ khách tại Long Tuyền, Bình Thủy và khu vực lân cận ở Cần Thơ. Tiệm nhận giặt quần áo hằng ngày, giặt sấy, giặt phơi tự nhiên, chăn mền, rèm cửa và đồ cần tẩy vết bẩn.",
    image: siteConfig.heroImage,
    highlights: ["Giặt từ 3kg chỉ từ 7K/kg", "Giặt sấy từ 3kg 9K/kg", "Freeship trong bán kính 3km"],
    sections: [
      {
        title: "Phù hợp cho người bận rộn tại Cần Thơ",
        body:
          "Nếu bạn không có thời gian giặt đồ, đồ lâu khô hoặc cần quần áo sạch thơm mỗi ngày, DN House hỗ trợ giặt và gấp gọn để bạn tiết kiệm thời gian."
      },
      {
        title: "Báo giá trước khi làm",
        body:
          "Khách có thể gửi loại đồ, số lượng ước tính và khu vực qua Zalo. DN House tư vấn cách xử lý phù hợp và báo giá trước khi nhận đồ."
      },
      {
        title: "Có giặt phơi tự nhiên và giặt sấy",
        body:
          "Tùy nhu cầu, khách có thể chọn giặt phơi tự nhiên từ 3kg hoặc giặt sấy từ 3kg. Một số món đặc biệt sẽ được kiểm tra trước khi báo giá."
      }
    ],
    faqs: [
      {
        question: "DN House có nhận giặt sấy quần áo hằng ngày không?",
        answer: "Có. Tiệm nhận giặt quần áo hằng ngày, giặt phơi tự nhiên và giặt sấy tùy nhu cầu của khách."
      },
      {
        question: "Khu vực nào được phục vụ?",
        answer: "DN House phục vụ Long Tuyền, Bình Thủy và khu vực lân cận tại Cần Thơ."
      },
      {
        question: "Giặt sấy từ 3kg giá bao nhiêu?",
        answer: "Giặt sấy từ 3kg trở lên là 9K/kg. Giặt phơi tự nhiên từ 3kg trở lên là 7K/kg."
      }
    ]
  },
  {
    slug: "ve-sinh-giay-can-tho",
    title: "Vệ sinh giày Cần Thơ",
    metaTitle: "Vệ sinh giày Cần Thơ - DN House | Làm sạch, khử mùi giày",
    description:
      "DN House nhận vệ sinh giày Cần Thơ, hỗ trợ làm sạch và khử mùi giày đi học, đi làm. Giá tham khảo 50K/đôi, liên hệ Zalo để tư vấn.",
    eyebrow: "Vệ sinh giày Cần Thơ",
    h1: "Vệ sinh giày Cần Thơ cho giày sạch hơn, thơm hơn",
    intro:
      "DN House hỗ trợ vệ sinh giày tại Cần Thơ cho khách ở Long Tuyền, Bình Thủy và khu vực lân cận. Dịch vụ phù hợp với giày đi học, đi làm hoặc giày cần làm sạch sau thời gian sử dụng.",
    image: "/before-after-shoes.jpg",
    highlights: ["Vệ sinh giày 50K/đôi", "Có khử mùi", "Liên hệ Zalo để gửi hình giày"],
    sections: [
      {
        title: "Kiểm tra tình trạng trước khi làm",
        body:
          "Khách có thể gửi hình giày qua Zalo để DN House xem tình trạng bẩn, chất liệu và tư vấn cách vệ sinh phù hợp."
      },
      {
        title: "Hỗ trợ giày đi học, đi làm",
        body:
          "Dịch vụ phù hợp với những đôi giày sử dụng thường xuyên, cần làm sạch bụi bẩn, giảm mùi và giúp giày gọn gàng hơn."
      },
      {
        title: "Báo giá rõ ràng",
        body:
          "Giá vệ sinh giày tham khảo là 50K/đôi. Trường hợp giày có chất liệu hoặc tình trạng đặc biệt, tiệm sẽ trao đổi trước khi làm."
      }
    ],
    faqs: [
      {
        question: "Vệ sinh giày ở DN House giá bao nhiêu?",
        answer: "Giá tham khảo là 50K/đôi. Một số trường hợp đặc biệt sẽ được tư vấn trước."
      },
      {
        question: "Có thể gửi hình giày trước không?",
        answer: "Có. Bạn có thể nhắn Zalo để gửi hình giày, DN House sẽ tư vấn cách xử lý phù hợp."
      },
      {
        question: "DN House có nhận khách ở Bình Thủy không?",
        answer: "Có. Tiệm phục vụ Long Tuyền, Bình Thủy và khu vực lân cận tại Cần Thơ."
      }
    ]
  },
  {
    slug: "giat-chan-men-can-tho",
    title: "Giặt chăn mền Cần Thơ",
    metaTitle: "Giặt chăn mền Cần Thơ - DN House | Chăn ga, drap, rèm cửa",
    description:
      "DN House nhận giặt chăn mền Cần Thơ, chăn ga, drap, rèm cửa và đồ dày lâu khô. Giá chăn/drap từ 15K-20K/kg, báo giá trước khi làm.",
    eyebrow: "Giặt chăn mền Cần Thơ",
    h1: "Giặt chăn mền Cần Thơ cho đồ dày sạch thơm, khô ráo",
    intro:
      "Chăn mền, drap và rèm cửa thường dày, lâu khô và dễ ám mùi nếu tự giặt trong mùa ẩm. DN House hỗ trợ giặt chăn mền tại Cần Thơ, báo giá rõ ràng trước khi làm.",
    image: "/before-after-bedding.jpg",
    highlights: ["Chăn/drap từ 15K-20K/kg", "Chăn bông 25K/kg", "Rèm cửa 25K/kg"],
    sections: [
      {
        title: "Nhận chăn mền, drap và đồ dày",
        body:
          "DN House nhận xử lý các món đồ lớn như chăn mền, drap, chăn bông và một số loại đồ dày cần thời gian làm sạch kỹ hơn."
      },
      {
        title: "Phù hợp mùa mưa hoặc đồ lâu khô",
        body:
          "Với đồ dày dễ ẩm mùi, tiệm sẽ tư vấn cách xử lý phù hợp để đồ sạch hơn, thơm hơn và hạn chế tình trạng lâu khô."
      },
      {
        title: "Báo giá theo loại đồ",
        body:
          "Chăn/drap có giá từ 15K-20K/kg, chăn bông 25K/kg và rèm cửa 25K/kg. Một số món đặc biệt sẽ được kiểm tra trước khi báo giá."
      }
    ],
    faqs: [
      {
        question: "DN House có nhận giặt chăn mền không?",
        answer: "Có. Tiệm nhận giặt chăn mền, chăn ga, drap, chăn bông và một số loại đồ dày."
      },
      {
        question: "Giá giặt chăn mền tính như thế nào?",
        answer: "Chăn/drap từ 15K-20K/kg, chăn bông 25K/kg. Một số món đặc biệt sẽ được báo giá trước."
      },
      {
        question: "Có nhận giặt rèm cửa không?",
        answer: "Có. Rèm cửa có giá tham khảo 25K/kg, tùy chất liệu và tình trạng thực tế."
      }
    ]
  }
];

export function getSeoPage(slug: string) {
  return seoPages.find((page) => page.slug === slug);
}
