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
        homebg: "linear-gradient(90deg, rgba(0, 0, 0, .4) 0%, rgba(0, 0, 0, .4) 100%),url('/assets/bghome.webp')",
        instagram:
          "linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)",
        dinamicInfo:
          "linear-gradient(90deg, hsla(205, 46%, 10%, 1) 0%, hsla(191, 28%, 23%, 1) 50%, hsla(207, 41%, 27%, 1) 100%)",
        dinamicText1:
          "linear-gradient(90deg, hsla(217, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 33%, hsla(217, 100%, 50%, 1) 66%, hsla(186, 100%, 69%, 1) 100%)",
        dinamicText2:
          "linear-gradient(90deg, hsla(152, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 33%, hsla(152, 100%, 50%, 1) 66%, hsla(186, 100%, 69%, 1) 100%)",
        dinamicText3:
          "linear-gradient(90deg, hsla(16, 100%, 76%, 1) 0%, hsla(49, 100%, 81%, 1) 33%, hsla(16, 100%, 76%, 1) 66%, hsla(49, 100%, 81%, 1) 100%)",
        dinamicText4:
          "linear-gradient(90deg, hsla(238, 100%, 71%, 1) 0%, hsla(295, 100%, 84%, 1) 33%, hsla(238, 100%, 71%, 1) 66%, hsla(295, 100%, 84%, 1) 100%)",
      },
    },
    colors: {
      ...colors,
      dark: "var(--smoky-black)",
      medium: "var(--tropical-indigo)",
      light: "var(--misty-rose)",
    },
    animation: {
      "infinite-translate": "translate 3s linear infinite both",
      "hide": "hide 3s linear both",
      "show": "show 3s linear both",
    },
    keyframes: {
      translate: {
        "0%": { transform: "translate(20%)" },
        "100%": { transform: "translate(-105%)" },
      },

      hide: {
        "100%": { transform: "translate(-105%)" },
      },

      show: {
        "100%": { transform: "translate(0%)" },
      }
    },
  },
  plugins: [require("flowbite/plugin"), require("tailwindcss-animated")],
};
export default config;
