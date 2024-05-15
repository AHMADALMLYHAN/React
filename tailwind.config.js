/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EEFDFF",
        secondary: "#004E56",
        primaryText:"##5F949A"
      },
      container: {
        center: true,
        padding:{
          DEFAULT:"1rem",
        }
      },
    },
  },
  plugins: [],
};
