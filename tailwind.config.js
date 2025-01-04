/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syncopate: ['Syncopate', 'sans-serif'],baiJamjuree: ['Bai Jamjuree', 'sans-serif'],
      },
      fontSize: {
        '20vw': '20vw', // تعریف مقدار سفارشی
      },
      clipPath: {
        inset: 'inset(0% 0% 0% 0%)',
      },
      gridTemplateColumns: {
        '100px-auto': '100px auto',
      },
    },
  },
  plugins: [],
}