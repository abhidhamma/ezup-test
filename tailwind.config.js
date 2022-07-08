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
      Tab: '#F0F0F0',
      SoftTab: '#FFFFFF',
      TabBorder: '#A0A0A0',
      SoftTabBorder: '#D9D9D9',
      TableHover: '#E5F3FF',
      TableHeader: '#44505E',
      ...colors,
    },
  },
  plugins: [],
}
