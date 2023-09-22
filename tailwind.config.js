/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: { max: "640px" },
      },
      fontFamily: {
        iranyekan: ["IranYekan"],
        iranyekannum: ["IranYekanNum"],
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
