import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        instagram:
          "linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...colors,
      dark: "var(--smoky-black)",
      medium: "var(--tropical-indigo)",
      light: "var(--misty-rose)",
    },
  },
  plugins: [require("flowbite/plugin")  ],
};
export default config;
