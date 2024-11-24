/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient': 'linear-gradient(180deg, rgba(163, 172, 253, 1) 0%, rgba(191, 183, 236, 1) 100%)',
      }, 
      fontFamily: {
        'poppins': "Poppins"
      },
    },
  },
  plugins: [],
}

