/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "480px",
      md: "850px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: "#1C1C28",
        secondary: "#28293D",
        tertiary: "#FEC107",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
};
