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
        stdFont : ['poppins', 'sans-serif'],
      },
      fontSize:{
        "headTag":"32px",
        "primaryFont":"18px",
        "secondaryFont":"16px"     

      },
      height:{
        "inpBtnH":"35px"
      },
      width:{
        "inpBtnW":"200px"

      }
    },
  },
  plugins: [],
}

