/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'input-border' : '#333f48'
      }
    },
    fontFamily: {
      'sans' : ['Raleway', 'sans-serif']
    }
  },
  plugins: [],
}
