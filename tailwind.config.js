const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
        green: colors.green,
        blue: colors.blue,
        /* Custom colors */
        primary: '#5F2C82',
        secondary: '#49A09D',
      }
    },
    variants: {
      extend: {
        animation: ['responsive', 'motion-safe', 'motion-reduce', 'hover']
      },
    },
    plugins: [],
  }