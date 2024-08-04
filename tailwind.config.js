// /** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./src/**/*.{html,js}"],
  theme: {
    extend:  {fontFamily: {
      bodyFont:"Poppins",
      titleFont:'Nunito Sans',
      cursive: ['cursive', 'sans-serif']},
 
  plugins: []},
  screens: {
    'max-xs': {'max':'375px'}, // Custom breakpoint for extra small screens
  },

}}

