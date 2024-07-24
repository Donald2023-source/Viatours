const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        mainColor: '#05073C',
        faintText: '#C6C6D2',
        orange: '#EB662B'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui({addCommonColors: true,
  })],
}

