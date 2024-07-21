/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        black: "#040803",
        green: "#41eca5",
        white: "#FFFCFE",
        accent: "#25252578",
      },

      fontFamily: {
        monster: ["Montserrat", "sans-serif"],
        kodeMono: ["Kode Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
