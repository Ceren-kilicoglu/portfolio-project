/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellw': '#CBF281',
      },
      width: {
        'wid-px': '1440px',
      },
      height: {
        'hgt-px': '671 px',
      }
    },
  },
  darkMode: 'selector',
  plugins: [],
}
