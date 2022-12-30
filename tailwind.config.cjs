/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        zoom: {
          '0%,100%': { transform: 'scale(1,1)' },
          '50%': { transform: 'scale(2,2)' },
        },
        zoom2: {
          '0%,100%': { transform: 'scale(1,1)' },
          '50%': { transform: 'scale(1.05,1.05)' },
        },
      },
      animation: {
        'text-zoom': 'zoom 4s linear infinite',
        'text-zoom2': 'zoom2 4s linear infinite',
      },
      fontFamily: {
        aftika: ["Aftika", 'regular'],
        greathy: ["Greathy", 'regular'],
        lemon: ["Lemon", 'regular'],
        varsity: ["Varsity", 'regular'],

      },
    },
  },

  plugins: [],
}