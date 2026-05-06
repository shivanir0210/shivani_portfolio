/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          light: '#F8FAFC',
          dark: '#0F172A',
        },
        primary: {
          DEFAULT: '#10B981',
        },
        secondary: {
          DEFAULT: '#06B6D4',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#1E293B',
        },
        content: {
          light: '#334155',
          dark: '#F8FAFC',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      }
    },
  },
  plugins: [],
}
