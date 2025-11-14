/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        soft: "#F5F7FA",
        primary: "#2563EB",
      },
    },
  },
  plugins: [],
};
