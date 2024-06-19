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
      colors: {
        purple: {
          1: "#0f0920",
          2: "#221c3e",
          3: "#f2f0ff",
        },
        gray: {
          1: "#b5b3bc",
          2: "#ebebeb",
          3: "#e1e1e1",
          4: "#767676",
          5: "#454343",
        },
        white: {
          1: "#ffffff",
          2: "#F1F1F1",
        },
        black: {
          1: "#000000",
        },
        blue: {
          1: "#0368ff",
        },
        yellow: {
          1: "#ffb800",
        },
        green: {
          1: "#16c586",
          2: "#0a4c65",
        },
      },
      lineHeight: {
        "desktop-mini": "1rem",
        "desktop-small": "1.255rem",
        "desktop-medium": "1.412rem",
        "desktop-larger": "1.625rem",
        "desktop-extraLarger": "1.726rem",
        "desktop-ultra": "2.098rem",
        "desktop-hiper": "2.196rem",
        "desktop-mega": "2.51rem",

        "mobile-mini": "1rem",
        "mobile-small": "1.098rem",
        "mobile-medium": "1.125rem",
        "mobile-larger": "1.255rem",
        "mobile-extraLarger": "1.375rem",
        "mobile-ultra": "1.443rem",
        "mobile-hiper": "2.196rem",
      },
      fontSize: {
        sizeParagraph: ["24px"],
        sizeParagraphSm: ["18px"],
        sizeTitle: ["38px"],
        sizeTitleSm: ["38px"],
        "desktop-mini": "0.75rem",
        "desktop-extraMini": "0.938rem",
        "desktop-small": "1rem",
        "desktop-extraSmall": "1.125rem",
        "desktop-medium": "1.25rem",
        "desktop-extraMedium": "1.375rem",
        "desktop-larger": "1.5rem",
        "desktop-extraLarger": "1.75rem",
        "desktop-ultra": "1.938rem",
        "desktop-extraUltra": "2rem",
        "desktop-hiper": "2.25rem",
        "desktop-extraHiper": "2.375rem",
        "desktop-mega": "3rem",

        "mobile-mini": "0.5rem",
        "mobile-extraMini": "0.75rem",
        "mobile-small": "0.875rem",
        "mobile-medium": "1rem",
        "mobile-larger": "1.125rem",
        "mobile-extraLarger": "1.25rem",
        "mobile-hiper": "1.375rem",
        "mobile-extraHiper": "1.75rem",
        "mobile-mega": "2.375rem",
      },
      width: {
        mini: "24.25rem",
        small: "13.5rem",
        medium: "18.625rem",
        larger: "28.688rem",
      },
      maxWidth: {
        medium: "51.625rem",
        extraMedium: "74.75rem",
        larger: "75.75rem",
      },
      height: {
        mini: "11.125rem",
        small: "11.75rem",
        medium: "3.063rem",
        extraMedium: "5.063rem",
        larger: "18.125rem",
      },
      screens: {
        xs: ["360px"],
        md: "826px",
        lg: "1212px",
      },
      dropShadow: {
        customized: "6px 10px 20px rgba(0, 0, 0, 0.2)",
      },
      gap: {
        small: "1.063rem",
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
