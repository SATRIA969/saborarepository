/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0908',
        charcoal: '#15130f',
        stone: '#1f1c17',
        ash: '#2c2820',
        sand: '#8b8478',
        cream: '#e8e2d5',
        gold: {
          DEFAULT: '#c8a96a',
          light: '#d9c08a',
          dark: '#a8894a',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
};
