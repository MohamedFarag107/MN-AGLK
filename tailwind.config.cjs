/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0E1C46",
        secondary: "#F5F5EF",
        secondaryGreen: "#AED768",
      },
    },
    container: {
      center: true,
      padding: "10px",
    },
  },
  plugins: [],
};
