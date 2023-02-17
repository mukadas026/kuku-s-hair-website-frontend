

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
  
    extend: {
      colors: {
        Darker: "#FA58A1",
        Main: "#FC6DC1",
        Lighter: "#FE9DE2",
        Dark: "#010024",
        Light: "#4D4C70",
      },
      fontFamily: {
        Poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
