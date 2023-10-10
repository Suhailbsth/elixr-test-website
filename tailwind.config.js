/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      flexBasis: {
        130: "500px",
      },
      aspectRatio: {
        "5/3": "5/3",
        "3/4":"3/4"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        130: "500px",
      },
      width: { 130: "500px",140:"533px" },
      fontFamily: {
        primary: ["Gilroy", "sans-serif"],
        secondary: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
