/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'custom': '2px 2px 4px 2px rgba(0, 0, 0, 0.2)',
      },
      colors: {
        'slate-600': '#4c4f56', // Define a darker color for the border
      },
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.1)',
        'md': '3px 3px 6px rgba(0, 0, 0, 0.15)',
        'lg': '4px 4px 8px rgba(0, 0, 0, 0.2)',
        // add more shadows as needed
      },
      fontFamily: {
        'archivo': ['Archivo', 'open sans']
      },
      backgroundImage: {
        'aj-image': "url('./Images/aj.png')",
      }

    },
  },
  plugins: [],
}