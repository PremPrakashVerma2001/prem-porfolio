/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(20deg)" },
          "20%": { transform: "rotate(-6deg)" },
          "30%": { transform: "rotate(20deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(20deg)" },
          "60%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        "waving-hand": "wave 2.1s .6s infinite",
      },

      boxShadow: {
        t: "0px -4px 6px 1px rgba(59,130,246,0.6);",
        b: "0px 4px 6px 1px rgba(234,179,8,0.6);",
      },
    },
  },
  plugins: [],
};
