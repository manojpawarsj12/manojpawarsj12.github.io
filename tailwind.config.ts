import type { Config } from "tailwindcss";

const t = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ground: t("ground"),
        panel: t("panel"),
        ink: t("ink"),
        quiet: t("quiet"),
        hair: t("hair"),
        red: t("line-red"),
        blue: t("line-blue"),
        green: t("line-green"),
        amber: t("line-amber"),
      },
      fontFamily: {
        sans: ['"Archivo Variable"', "Archivo", "Helvetica Neue", "Arial", "sans-serif"],
      },
      maxWidth: { page: "84rem", prose: "68ch" },
    },
  },
  plugins: [],
} satisfies Config;
