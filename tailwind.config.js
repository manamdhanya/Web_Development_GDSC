/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'base' : '#FFFFE0',
        'text' : '#111029',
        'yellow-accent' : '#F8BD0A',
        'subhead' : 'rgba(0,0,0,0.45)',
        'green-accent' : '#5DBE74',
        'customTeal' : '#02A28F',
        'custom-gray': '#616161',
        'custom-heading' : '#000000',
        'custom-darkmode': '#3B3B3B',
        'custom-bg-dark' : '#2C2C2C',
        'custom-dark-text' : "#AAAAAA",
      },
      fontFamily: {
        'heading-text' : ['Roboto Serif' , 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

