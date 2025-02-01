import type { Config } from 'tailwindcss'

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  
  darkMode: 'class', // o 'media' si prefieres el modo oscuro basado en las preferencias del sistema
  theme: {
    extend: {},
  },
  plugins: [],
}


export default config
