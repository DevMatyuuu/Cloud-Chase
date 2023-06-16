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

      'lg': {'min' : '2560px'},

     
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['poppins', 'sans-serif']
    },
  },
  
  plugins: [],
}
}

