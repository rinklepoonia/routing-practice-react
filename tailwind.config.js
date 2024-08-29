/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Rubik: "'Rubik',sans-serif",
      },
      colors: {
        grey: "#5f5f5f",
        dark_black: "#010101",
        orange: "#FF4C24",
        light_orange: "#FF9748",
        yellow: "#FFE36C",
        light_grey: "#00000029",
      },
      backgroundImage: {
        "gradient-tb":
          "linear-gradient(to bottom, #815CC8 29.44%, #1BABFE 81.54%)",
        "grident-rl": "linear-gradient(90deg, #815CC8 0%, #1BABFE 100%)",
        "gradient-token-box":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(196, 196, 196, 0) 100%, rgba(255, 255, 255, 0.03) 100%)",
      },

      container: {
        padding: {
          DEFAULT: "20px",
          sm: "24px",
        },
        center: true,
      },
    },
  },
  plugins: [],
};
