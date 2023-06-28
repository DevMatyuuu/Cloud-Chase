/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'min' : '720px','max' : '1023px'},
      
      'sl': {'min' : '1024px','max' : '1439px'},
      
      'md': {'min' : '1440px','max' : '2560px'},

      'lg': {'min' : '2559px'},

     
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['poppins', 'sans-serif']
    },
    animation:{
      'shake': 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
  },
  keyframes: {
      'shake' : {
          '10%, 90%': {
              transform: 'translate3d(-1px, 0, 0)'
          },
          '20%, 80%' : {
              transform: 'translate3d(2px, 0, 0)'
          },
          '30%, 50%, 70%': {
              transform: 'translate3d(-4px, 0, 0)'
          },
          '40%, 60%': {
              transform: 'translate3d(4px, 0, 0)'
          }
  },
}},
  
  plugins: [
  ],
}
}

