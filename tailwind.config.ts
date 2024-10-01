import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
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

        main: "var(--color-main)",
        dark: "var(--dark-color-main)",
      },
      fontFamily: {
        "noto-200": ["var(--font-200)", "sans-serif"],
        "noto-300": ["var(--font-300)", "sans-serif"],
        "noto-400": ["var(--font-400)", "sans-serif"],
        "noto-500": ["var(--font-500)", "sans-serif"],
        "noto-600": ["var(--font-600)", "sans-serif"],
        "noto-700": ["var(--font-700)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
