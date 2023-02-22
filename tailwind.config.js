/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        'gray':{
          light:'#6b7280',
          default:'#374151',
          dark:'#111827'
        },
        'sky':{
          light:'#0ea5e9',
          default:'#0369a1',
          dark:'#0c4a6e'
        },
        'blue':{
          light:'#3b82f6',
          default:'#1d4ed8',
          dark:'#1e3a8a'
        },
        'yellow':{
          light:'#facc15',
          default:'#eab308',
          dark:'#713f12'
        }
      }, fontFamily: {
        sans:[ 'Roboto','Montserrat', 'sans-serif'],
        roboto:'Roboto'
      },
    },
  },
  plugins: [],
}