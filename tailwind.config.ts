import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        hover_btn: "rgba(0, 73, 83, 1)",
        dark: {
          cards_200: "rgba(24, 28, 32, 1)",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
