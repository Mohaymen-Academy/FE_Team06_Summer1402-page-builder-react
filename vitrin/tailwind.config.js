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
    extend: {
      keyframes: {
        'skeleton-loading': {
          '0%': {
            borderRadius: '20px',
            backgroundColor: 'hsl(200, 20%, 80%)',
          },
          '100%': {
            // borderRadius:'20px',
            backgroundColor: 'hsl(200, 20%, 95%)',
          },
        },

        'blueheaderanimatioclose': {
          '0%': {
            // position:'relative',
            top: '0',
            // height:'100%',
          },
          '100%': {
            // position:'relative',
            top: '-90px',
            // height: '0',
            // display:'none'
          },
        },
        'blueheaderanimationopen': {
          '0%': {
            // position:'relative',
            top: '-90px',
            // height:'100%',
          },
          '100%': {
            // position:'relative',
            top: '0',
            // height: '0',
            // display:'none'
          },
        },
        "scrollleft": {
          "0%": {
            transform: " translateX(0)",
          },
          "100%": {
            transform: "translateX(-750px)", /* Move the items to the left */
          }
        },
      },
      animation: {
        'skeleton-loading': 'skeleton-loading 1s linear infinite alternate',
        'blueheaderanimationopen': 'blueheaderanimationopen 1s ease-out',
        'blueheaderanimatioclose': 'blueheaderanimatioclose 1s ease-out',
        'scrollleft': 'scrollleft 3s linear infinite',
  
      },
    },
    variants: {
      fill: ['hover', 'focus']
    },
  },
  plugins: ['tailwindcss-transition'],
}
