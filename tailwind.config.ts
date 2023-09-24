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
        backgroundcolor_pri: "#08061B",
        button_color: "#D7F28B",
        textshade: "#E9EEEF",
        complimentary_1: "#46FEDC",
        complimentary_2: "#F3D4FE",
      },
      fontFamily: {
        mono: ["var(--space_mono)"],
        serrat: ["var(--montserrat)"],
      },
      gridTemplateColumns: {
        "13": "repeat(13, minmax(0, 1fr))",
        "14": "repeat(14, minmax(0, 1fr))",
        "15": "repeat(15, minmax(0, 1fr))",
        "16": "repeat(16, minmax(0, 1fr))",
        "17": "repeat(17, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
export default config;
