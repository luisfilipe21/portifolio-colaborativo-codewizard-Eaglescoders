/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "zen": ["Zen Dots", "sans-serif"],
        "inconsolata": ["Inconsolata"],
        "mulish": ["Mulish", "sans-serif"]
      },
      textColor:{
        gray: ["#B5B3BC"],
      },
      backgroundColor:{
        blueBg:["#221C3E"],
      },
      fontSize:{
        sizeParagraph: ["24px"],
        sizeParagraphSm: ["18px"],
        sizeTitle: ["38px"],
        sizeTitleSm: ["38px"],
      },
      screens: {
        xs: ["360px"]
      }
    },
  },
  plugins: [],
};
