/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
  plugins: [],
};
