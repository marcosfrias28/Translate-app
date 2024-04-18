/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      italianno: "italianno",
      serif: "serif",
    },
    boxShadow: {
      dark: "23px 23px 42px #292929,-23px -23px 42px #444444",
      light: "20px 20px 40px #535353,-20px -20px 40px #ffffff",
      buttonlight: "1px 1px 20px rgba(255, 255, 255, 0.638)",
      buttondark: "1px 1px 20px rgba(0, 0, 0, 0.638)",
    },
    screens: {
      smartphonexs: "320px",
      smartphone: "360px",
      // => @media (min-width: 390px) { ... }

      tablet: "760px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1270px",
      // => @media (min-width: 1300px) { ... }

      ultrawide: "2440px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
