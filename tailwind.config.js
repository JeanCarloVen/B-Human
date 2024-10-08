/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-softblueB': '#62adde',
        'custom-gray': '#d4e0dd',
        'custom-darkestblueA': '#005599',
        'custom-softblue': '#7ceeb',
        'custom-darkestblueB':'#003368'
      },
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
}
