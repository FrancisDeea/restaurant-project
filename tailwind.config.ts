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
        pride: "linear-gradient(90deg, rgba(255, 0, 0, 1) 0, rgba(255, 154, 0, 1) 10%)",
// rgba(208, 222, 33, 1) 20%,
//           rgba(79, 220, 74, 1) 30%,
//           rgba(63, 218, 216, 1) 40%,
//           rgba(47, 201, 226, 1) 50%,
//           rgba(28, 127, 238, 1) 60%,
//           rgba(95, 21, 242, 1) 70%,
//           rgba(186, 12, 248, 1) 80%,
//           rgba(251, 7, 217, 1) 90%,
//           rgba(255, 0, 0, 1) 100%)`,
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        salad:
          "radial-gradient(circle, rgba(0,0,0,.8) 0%, rgba(2,0,36,0) 90%),url('/ensalada.jpg')",
        snack:
          "radial-gradient(circle, rgba(0,0,0,.8) 0%, rgba(2,0,36,0) 90%),url('/assets/platos/patatas-bravas-caseras.webp')",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      dark: "var(--smoky-black)",
      medium: "var(--tropical-indigo)",
      light: "var(--misty-rose)",
    },
  },
  plugins: [],
};
export default config;
