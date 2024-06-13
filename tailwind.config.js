/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'highlight-gray': 'rgb(240 240 252)',
        'highlight-dark': 'rgb(55 51 50)',
      },
    },
  },
  plugins: [],
}

