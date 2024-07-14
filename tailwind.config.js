/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#0D0C0C", // Text colour
        bg: "#FEF5FB", // Background colour
        primary: "#602A4B", // Main colour
        secondary: "#1D2734", // Other main colour
        accent: "#F4A640", // Accent colour
        bgContrast: "#F1E9EE", // Darker contrast background
      },
    },
  },
  plugins: [],
};
