/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{ts,tsx}'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        none: '20px',
      },
      gridTemplateColumns: {
        header: '200px minmax(900px, 1fr)',
      },
      gridAutoColumns: {
        asdasd: '1fr 3fr',
      },
    },
    colors: {
      MainTab: '#F0F0F0',
      MainTabBorder: '#A0A0A0',
      SubTab: '#FFFFFF',
      SubTabBorder: '#D9D9D9',
      ...colors,
    },
  },
  plugins: [],
}
