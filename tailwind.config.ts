import type { Config } from 'tailwindcss'

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  
  darkMode: 'class', // o 'media' si prefieres el modo oscuro basado en las preferencias del sistema
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        animation:{
          'wiggle-animation': 'wiggle 1s ease-in-out infinite',
        }


      },
      
    },
  },
  plugins: [],
}


export default config
