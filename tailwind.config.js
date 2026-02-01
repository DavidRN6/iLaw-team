/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#2C3E50",
        navbar: "#FFFEFC",
        background: "#FFF9EF",
        hover: "#0466c8",
        border: "#e2e8f0",

        secondary: "#0C091C",
        darkText: "#BF4EF4",
        darkDesc: "#d1d5db",
      },
    },
  },
  plugins: [],
};
