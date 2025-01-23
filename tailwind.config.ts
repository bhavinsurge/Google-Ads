import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "src/**/*.ts",
    "src/**/*.tsx",
    ".next/types/**/*.ts",
  ],
  theme: {
    // screen: {
    //   sm: "320px",
    //   md: "768px",
    //   lg: "1024px",
    //   xl: "1280px",
    //   txl: "1536px",
    //   a1: ["320px"],
    //   a2: "375px",
    //   a3: "768px",
    //   lap: "1024px",
    //   lapl: "1440px",
    //   fourk: "2560px",
    // },

    letterSpacing: {
      "1": "0em",
      "2": "0.025em",
      "3": "0.05em",
      "4": "0.1em",
      "5": "0.805em",
      "6": "1em",
      "7": "1.15em",
      "8": "1.2em",
      "9": "3.2em",
    },

    extend: {
      screen: {
        sm: "480px",
        // sm: "320px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        txl: "1536px",
        a1: ["320px"],
        a2: "375px",
        a3: "768px",
        lap: "1024px",
        lapl: "1440px",
        fourk: "2560px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        "black-ops": ["Black Ops One", "serif"],
        Cabin: ["Cabin", "serif"],
        Dosis: ["Dosis", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
