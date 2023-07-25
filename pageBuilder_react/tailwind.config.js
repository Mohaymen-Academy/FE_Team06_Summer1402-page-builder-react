/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'vsmmobile': { 'max': '580px' },
      'smmobile': { 'min': '581px', 'max': '767px' },
      'mobile': { 'min': '768px', 'max': '991px' },
      'tablet': { 'min': '992px', 'max': '1023px' },
      'laptop':   { 'min': '1024px', 'max': '1239px' },
      'desktop': { 'min': '1240px' },
    },
    fontFamily:{
      vazir:['Vazir']
    },
    extend: {},
  },
  plugins: [],
}