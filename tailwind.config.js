/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ['Karla', 'sans-serif']
      },
      colors: {
        'light-coffee': '#C89F94'
      },
      zIndex: {
        max: '999'
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        slideDown: 'slideDown 0.3s ease-in-out',
      },
      backgroundImage: {
        'slide-bg': 'url("./imgs/slider.jpg")',
      }
    },
  },
  plugins: [],
}

