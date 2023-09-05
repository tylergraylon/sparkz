import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        backgroundcolor_sec: "#131313",
        backgroundcolor_pri: "#2A2A2B",
        button_color: "#D7F28B",
        textshade: "#E9EEEF",
        complimentary_1: "#46FEDC",
        complimentary_2: "#F3D4FE",
      },
      fontFamily: {
        mono: ["var(--space_mono)"],
        serrat: ["var(--montserrat)"],
      },
    },
  },
  plugins: [],
};
export default config;
