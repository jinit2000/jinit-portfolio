/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        soft: "#f8fafc",      // light grey background
        primary: "#2563eb",   // nice professional blue
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.05)",
      },
      fontFamily: {
        heading: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
