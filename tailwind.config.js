const { nextui } = require("@nextui-org/theme");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|ripple|spinner).js",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        amaranth: ["Amaranth", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        amarante: ["Amarante", "sans-serif"],
        arima: ["Arima", "sans-serif"],
      },
      colors: {
        primary: "#000814",
        secondary: "#FFC300",
      },
    },
  },
  plugins: [nextui()],
};
