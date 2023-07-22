/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'vsmmobile': { 'max': '580px' },
      'smmobile': '580px',
      'mobile': '768px',
      'tablet': '992px',
      'laptop': '1024px',
      'desktop': '1240px',
    },
    extend: {},
  },
  plugins: [],
}

