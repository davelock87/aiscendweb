/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6C63FF',
        secondary: '#FB5B78',
        dark: {
          100: '#8A8AA3',
          200: '#4A3F69',
          300: '#2A2A42',
          400: '#1A1A2E',
          500: '#16213E',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};