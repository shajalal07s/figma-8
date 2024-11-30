/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'color-primary': '#589167',
        'color-text': '#b2b2b2',
        'color-secendary': '#f5f4f0',
        'color-white-dark': '#808080',
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