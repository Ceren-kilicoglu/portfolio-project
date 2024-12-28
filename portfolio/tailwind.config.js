/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellw': '#CBF281',
        "bl": "#4731D3",
        "whit": "#FFFFFF",
        "dark-bl": "#3730A3"

      }
    },
  },
  darkMode: 'selector',
  plugins: [],
}
