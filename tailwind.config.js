/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#EDEDF9",

        primary: "#FFFFFF",
        primaryDark: "#F4F4FC",

        secondary: "#2B2B2B",
        secondaryDark: "#000000",

        accent: "#FB6F4B",
      },
    },
  },
  plugins: [],
};
