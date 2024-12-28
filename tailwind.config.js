/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textStrokeWidth: {
        2: "2px",
      },
      textStrokeColor: {
        white: "#ffffff",
      },
    },
  },
  plugins: [require("tailwindcss-text-fill-stroke")],
};
