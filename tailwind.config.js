/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-gold": "#847445",
        "c-gold2": "#77683e",
        "c-gray": "#8D8E89",
      },
    },
    fontFamily: {
      rubikfont: ["Rubik", "sans-serif"],
    },
  },
  plugins: [],
};
