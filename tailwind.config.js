/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "hover-green": "#8bc34a",
        "background-gray": "#d8d8d8",
        "posts-background" : "#f8f9fa",
      },
    },
  },
  plugins: [],
};
