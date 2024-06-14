/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zen: ["Zen Dots", "sans-serif"],
        inconsolata: ["Inconsolata", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
      },
      textColor: {
        gray: ["#B5B3BC"],
      },
      backgroundColor: {
        blueBg: ["#0F0920"],
        rodape: ["#221C3E"],
        buttonHeader: ["#16C586"],
        button: ["#0368FF"],
      },
      fontSize: {
        sizeParagraph: ["24px"],
        sizeParagraphSm: ["18px"],
        sizeTitle: ["38px"],
        sizeTitleSm: ["38px"],
      },
      screens: {
        xs: ["360px"]
      },
      spacing:{
        pNegativo: {
          "as" : "-15px"
        }
      }
    },
  },
  plugins: [],
};
