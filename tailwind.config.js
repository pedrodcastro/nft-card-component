/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      visibility: ['group-hover']
    },
    fontFamily: {
      'outfit': ['Outfit', 'sans-serif']
    },
    colors: {
      'white': '#FFFFFF',
      'background': '#0D192B',
      'cardbackground': '#14253D',
      'softblue': '#8BACDA',
      'cyan': '#00FFF7'
    },
  },
  plugins: [],
}

