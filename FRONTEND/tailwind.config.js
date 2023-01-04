/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./src/**/*.{js,jsx,ts,tsx}", "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"],
  mode:'jit',
  theme: {
    extend: {
      
      fontFamily:{'Montserrat':'Montserrat' ,
       'LibreBaskerville':'Libre Baskerville',
         'Exo2' : 'Exo+2',
         'Dosis':'Dosis'}

    },
    
  },
  plugins: [
  ],
}
