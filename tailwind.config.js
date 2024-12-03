/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'movedown': 'movedown 3s infinite',
      },
      keyframes: {
        movedown : {
          '0%, 100%': { transform: 'scale(2)', opacity: '0.5' },
          '50%': { transform: 'scale(1.1)', opacity: '0.1' },
        },
      },
      
      colors: {
        'color-primary': '#589167',
        'color-text': '#b2b2b2',
        'color-secendary': '#f5f4f0',
        'color-white-dark': '#808080',
        'color-black-light': '#1a1a1a',
        'color-black-ass': ''
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