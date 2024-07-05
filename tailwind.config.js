/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#F24C3E",
        yellow: "#F5B423",
      },
      keyframes: {
        click: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
        appear: {
          "0%": { transform: "translateY(-10vmin)", opacity: 1 },
          "100%": { transform: "translateY(-35vmin)", opacity: 1 },
        },
      },
      animation: {
        click: "click 0.2s",
        appear: "appear 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
