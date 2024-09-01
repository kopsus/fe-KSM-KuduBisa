/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2A9D8F",
        secondary: "rgba(42, 157, 143, 0.2)",
        darkPrimary: "#176F64",
        whiteSmooke: "#F7F7F7",
        danger: "#FD0A0A",
        black: "rgba(0,0,0,0.8)",
        lighBlack: "rgba(0,0,0,0.5)",
        link: "#0029FF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semi: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
};
