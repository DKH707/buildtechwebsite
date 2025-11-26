/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Ysabeau SC"', 'sans-serif']
    },
    extend: {
      colors: {
        'text': '#ffffff',
        'bground':'#0c0b0b',
        'primary': '#cd252a',
        'secondary': '#7e552b',
        'accent': '#BF8E43',
        'gold-dark': '#9A7310',
        'gold': '#BF8E43',
        'gold-light': '#D4A373'
      },
      width: {
        '7xl': '80rem'
      },
    },
  },
  plugins: [],
}