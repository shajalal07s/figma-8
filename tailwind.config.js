/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'color-primary': '#589167',
        'color-text': '#b2b2b2',
        'color-secendary': ''
      },
      fontFamily : {
        'font-roboto': 'Roboto'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '15px',
        md: '80px'
      }
    }
  },
  plugins: [],
}