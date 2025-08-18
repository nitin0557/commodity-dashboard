// tailwind.config.js
module.exports = {
  darkMode: "class", // Enable class-based dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customLight: '#f4f5fa',
        customDark: '#0d0d0d', // dark gray or any color
      },
    },
  },
  plugins: [],
};