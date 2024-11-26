/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx}"],
  theme: {
    extend: {
      colors: {
        'main': '#FF0032'
      },
      backgroundImage: {
        'gradient': 'linear-gradient(180deg, rgba(163, 172, 253, 1) 0%, rgba(191, 183, 236, 1) 100%)',
        'shadow': 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))'
      }, 
      fontFamily: {
        'poppins': "Poppins"
      },
    },
  },
  plugins: [],
}

