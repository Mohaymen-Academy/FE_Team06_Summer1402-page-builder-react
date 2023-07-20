/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        'skeleton-loading': {
          '0%': {
            backgroundColor: 'hsl(200, 20%, 80%)',
          },
          '100%': {
            backgroundColor: 'hsl(200, 20%, 95%)',
          },
        },
        
        'blueheaderanimatioclose': {
          '0%': {
            // position:'relative',
            top:'0' ,
            // height:'100%',
          },
          '100%': {
            // position:'relative',
            top:'-90px' ,
            // height: '0',
            // display:'none'
          },
        },
        'blueheaderanimationopen': {
          '0%': {
            // position:'relative',
            top:'-90px' ,
            // height:'100%',
          },
          '100%': {
            // position:'relative',
            top:'0' ,
            // height: '0',
            // display:'none'
          },
        },

      },
      animation: {
        'skeleton-loading': 'skeleton-loading 1s linear infinite alternate',
        'blueheaderanimationopen':'blueheaderanimationopen 1s ease-out',
        'blueheaderanimatioclose':'blueheaderanimatioclose 1s ease-out',
      },
    },
  },
  variants:{
    fill: ['hover', 'focus']
  },
  plugins: [],
}

