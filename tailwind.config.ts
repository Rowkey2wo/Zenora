import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zenoraTitle: ["var(--font-cinzel)", "serif"],
        zenoraSubtitle: ["var(--font-playfair)", "serif"],
      },
      letterSpacing: {
        zenora: "0.35em",
      },
    },
  },
  plugins: [],
};

export default config;
