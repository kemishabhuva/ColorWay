/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors:{
        'rama-blue':'#02D0C4',
        'tameta':'#FA3A6D',
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
        widest: '.25em',
      },
    
      screens:{
        'xs' : '400px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      plugins: [require('tailwind-scrollbar')],

      plugins: [
        tailwindcss(),
      ],
    },
  },
  plugins: [],
}

