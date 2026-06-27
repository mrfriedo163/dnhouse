import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#102A43",
        skySoft: "#E6F4FF",
        page: "#F8FAFC",
        promo: "#F97316"
      },
      boxShadow: {
        soft: "0 16px 40px rgba(16, 42, 67, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
