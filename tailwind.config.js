/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'input-border' : '#333f48',
        'background-gray' : '#f2f2f2',
        'theme-orange' : '#F77C0C',
        'footer-light' : '#2F2F2F',
        'footer-dark' : '#262626',
      },
      screens : {
        'xs' : '500px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      width : {
        '98' : '450px'
      }
    },
    fontFamily: {
      'sans' : ['Raleway', 'sans-serif']
    }
  },
  plugins: [],
}
