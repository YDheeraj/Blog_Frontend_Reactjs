/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        'primary':'#19A7CE',
        'primary-dark':'#146C94'
      }
    },
    fontFamily:{
      sans:['roboto','sans-serif']
    },
  },
  plugins: [],
}