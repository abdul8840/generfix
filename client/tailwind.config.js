const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        green100: "#d5d5d5",
        green200: "#4AD66D",
        green300: "#171717",
        headingColor: "#181A1E",
        textColor: "#edf2f4",
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar'),
    flowbite.plugin(),
  ],
}