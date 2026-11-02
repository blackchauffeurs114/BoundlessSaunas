import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0c0a08",
        foreground: "#fbfaf7",
        kernow: {
          dark: "#110e0c",
          charcoal: "#181512",
          card: "#1e1a16",
          light: "#f7f5f0",
          cream: "#ede8df",
          sand: "#e3dcce",
          olive: "#6e7c52",
          sage: "#899362",
          lime: "#c7d67a",
          border: "rgba(255, 255, 255, 0.12)",
          borderLight: "rgba(120, 110, 90, 0.16)",
          muted: "#948e85",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
export default config;
