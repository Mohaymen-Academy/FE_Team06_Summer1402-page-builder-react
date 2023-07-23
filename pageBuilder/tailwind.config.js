/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'vsmmobile': { 'max': '580px' },
      'smmobile': { 'min': '581px', 'max': '767px' },
      'mobile': { 'min': '768px', 'max': '991px' },
      'tablet': { 'min': '992px', 'max': '1023px' },
      'laptop':   { 'min': '1024px', 'max': '1239px' },
      'desktop': { 'min': '1240px' },
    },
    extend: {},
  },
  plugins: [],
}

