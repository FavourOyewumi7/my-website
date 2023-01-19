// ./tailwind.config.js

//const { blue } = require("tailwindcss/colors")

module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",],
  
     theme: {
       extend: {
        colors:{
          'theme-blue': '#424DF8',
          'text-black':'#151837',
          'special-black':'#00033D',
          'gold':'#FFA655',
          'light':'#6F6C90'

        }
       },
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }