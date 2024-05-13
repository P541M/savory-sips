/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lora: ['Lora', 'serif'],
        josefin: ['Josefin Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
