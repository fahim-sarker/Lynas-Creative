/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'roboto': ['ui-sans-serif', 'sans-serif'],
      'raleway': ['Raleway', 'sans-serif'],
      'bebas': ["Bebas Neue", 'sans-serif'],
      'popins': ["Poppins", 'sans-serif'],
      'sans' : ["Open Sans", 'sans-serif']
    }
  },
  plugins: [],
}