/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Montserrat",
      secondary: "Monoton",
      serif: ["Lora", "Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
    },
    extend: {
      colors: {
        primary: "#B809C3",
        secondary: "#ff014f",
        third: "#FEF6C7",
        fourth: "#011eff",
      },
    },
  },
  plugins: [],
}
