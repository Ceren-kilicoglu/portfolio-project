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

      },
      height: {
        "profile-h": "600px",

      },
      width: {
        "skills-w": "960px"
      }
    },
  },
  darkMode: 'selector',
  plugins: [],
}
