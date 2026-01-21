/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2C3E50",
        navbar: "#FFFEFC",
        background: "#FFF9EF",
        hover: "#007BFF",
      },
    },
  },
  plugins: [],
};
