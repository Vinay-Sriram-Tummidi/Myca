/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    extend: {},
  },
  fontFamily: {
    sans: ['Benton Sans', 'sans-serif'],
    serif: ['Guardian', 'serif'],
  },
  container: {
    center: true,
    padding:"2 rem"
  },
  colors: {
    'amex-blue': '#016FD0',
  },
  plugins: [],
}