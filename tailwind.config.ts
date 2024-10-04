import { sign } from "crypto";
import type { Config } from "tailwindcss";
import type { PluginCreator } from "tailwindcss/types/config";

const utilitiesPlugin: PluginCreator = ({ addUtilities }) => {
  addUtilities({
    ".disabled-form": {
      "pointer-events": "none;",
      opacity: "0.5;",
    },
    ".input-style": {
      "box-shadow": "0 0 0 1px var(--input-border-color) inset",
      "font-family": "var(--font-500)",
      outline: "none;",
    },
    ".label-style": {
      "font-family": "var(--font-600)",
      "font-size": "0.9rem",
      color: "var(--color-sub)",
    },
    ".title-h1": {
      "font-family": "var(--font-600)",
      "font-size": "2rem",
    },
    ".title-h2": {
      "font-family": "var(--font-600)",
      "font-size": "1.7rem",
    },
    ".title-h3": {
      "font-family": "var(--font-500)",
      "font-size": "1.4rem",
    },
    ".title-h4": {
      "font-family": "var(--font-500)",
      "font-size": "1.2rem",
    },
    ".title-h5": {
      "font-family": "var(--font-500)",
      "font-size": "1rem",
    },
  });
};

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-main": "var(--color-main)",
        "color-sub": "var(--color-sub)",
        "color-gray": "var(--color-gray)",
        "color-white": "var(--color-white)",
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
  plugins: [utilitiesPlugin],
};
export default config;
