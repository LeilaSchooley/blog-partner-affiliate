import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0c0c0d",
        surface: "#121214",
        muted: "#1a1a1d",
        primary: {
          DEFAULT: "#7c4dff", // violet accent
          100: "#EDE7FF",
          200: "#D1C4FF",
        },
        accent: "#23D18B", // green accent used in headings
        text: "#EDEDEF",
        subt: "#9CA3AF",
      },
      borderRadius: {
        xl: "1.25rem",
      },
      boxShadow: {
        card: "0 8px 32px rgba(0,0,0,0.35) inset, 0 8px 24px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [typography],
};
export default config;
