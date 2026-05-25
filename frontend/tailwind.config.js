/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(-30px, 30px) scale(0.95)' },
          '66%': { transform: 'translate(20px, -20px) scale(1.05)' },
        },
      },
      animation: {
        shimmer: 'shimmer 2.5s infinite linear',
        'float-1': 'float-slow 12s infinite ease-in-out',
        'float-2': 'float-delayed 15s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}