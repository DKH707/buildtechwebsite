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
        'primary': '#ad252a',
        'secondary': '#7e552b',
        'accent': '#bf8e43'
      },
      width: {
        '7xl': '80rem'
      },
    },
  },
  plugins: [],
}