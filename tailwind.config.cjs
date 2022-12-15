/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'germania-One': '"Germania One"',
      'Poppins':'"Poppins"'
    },
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-101%)' },
        },
        smmarquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-102%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        cardHover:{
          '0%':{transform:'translateY(0) '},
          '100%':{transform:'translateY(-100px) ' }
        }
      },
      animation : {
        'spin-slow-30': 'spin 30s linear infinite',
        'spin-slow-25': 'spin 25s linear infinite',
        'spin-slow-10': 'spin 10s linear infinite',
        'marquee-infinite' : 'marquee 20s linear infinite',
        'marquee2': 'marquee2 12s linear infinite',
        'sm-marquee-infinite' : 'smmarquee 20s linear infinite',
        'card-Hover':'cardHover 1s ease-in-out forwards'

      }
    },
  },
  plugins: [],
}
