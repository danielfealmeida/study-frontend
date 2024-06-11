/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'highlight-gray': 'rgb(240 240 252)',
      },
    },
  },
  plugins: [],
}

