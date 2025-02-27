/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'tracking-in-expand': {
          '0%': { letterSpacing: '-0.5em', opacity: '0' },
          '40%': { opacity: '0.6' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        'tracking-in-expand': 'tracking-in-expand 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) both'
      }
    },
  },
  plugins: [],
}

