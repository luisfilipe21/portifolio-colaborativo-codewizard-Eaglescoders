/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zen: ["Zen Dots", "sans-serif"],
        inconsolata: ["Inconsolata"],
      },
      textColor:{
        gray: ["#B5B3BC"]
      },
      fontSize:{
        sizeParagraph: ["24px"],
        sizeTitle: ["38px"],
      }
    },
  },
  plugins: [],
};
