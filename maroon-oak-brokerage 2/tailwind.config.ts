import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: "#5A1024",
          deep: "#3A0A18",
          light: "#7C1B36",
        },
        gold: {
          DEFAULT: "#C8A04A",
          light: "#E2C482",
          dim: "#9C7F42",
        },
        stone: {
          DEFAULT: "#F7F5F1",
          alt: "#EFEBE3",
        },
        ink: {
          DEFAULT: "#0E0C0B",
          2: "#171412",
        },
        charcoal: "#241F1C",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "4px",
        lg: "10px",
      },
      boxShadow: {
        sm: "0 2px 14px rgba(14,12,11,0.06)",
        md: "0 16px 40px rgba(14,12,11,0.10)",
        lg: "0 30px 70px rgba(14,12,11,0.35)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.45s ease",
      },
    },
  },
  plugins: [],
};
export default config;
