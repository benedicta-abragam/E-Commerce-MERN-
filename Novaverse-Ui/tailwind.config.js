/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E2F0CB",
        secondary: "#CDB4DB",
      },
    },
  },
  plugins: [],
};