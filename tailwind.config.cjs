const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,ts}",
  ],
  theme: {
    fontFamily: {
      display: ['Titillium Web', ...defaultTheme.fontFamily.sans],
      heading: ['Poiret One', ...defaultTheme.fontFamily.sans]
    },
    extend: {},
  },
  plugins: [],
}
