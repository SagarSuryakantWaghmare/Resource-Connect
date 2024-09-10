/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "stdYellow":"#FFC107",
        "stdBlue":"#223265",
        "stdBg":"#ECDDD6"
      },
      fontFamily:{
        roboto: ['stdFont', 'sans-serif'],
      },
      fontSize:{
        "primaryFont":"16px",
        "secondaryFont":"18px"

      }
    },
  },
  plugins: [],
}

