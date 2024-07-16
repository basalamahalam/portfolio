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
        fira: ["Fira Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        archivo: ["Archivo Black", "sans-serif"],
      },
      colors: {
        primary: "#000814",
        secondary: "#2DD4BF",
      },
      height: {
        screen: "100vh",
      },
    },
  },
  plugins: [nextui(), require("tailwind-scrollbar")],
};
