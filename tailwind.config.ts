import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "chip-red": "#C11230",
        "chip-gold": "#D4AF37",
        "chip-dark": "#0A0A0A",
        "chip-surface": "#111111",
        "chip-border": "#1F2937",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        serif: ["Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
