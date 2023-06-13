/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'caveat': ['Caveat', 'cursive'],
        'dm': ['DM Sans', 'sans-serif'],
        'gafata': ['Gafata', 'sans-serif'],
      },
      colors: {
        'JSGOrange': '#FF957E',
        'JSGBlue': '#2E3D2F',
        'JSGCream': '#FDF6EE',
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};