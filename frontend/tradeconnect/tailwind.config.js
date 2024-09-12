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
        "stdBg":"#ECDDD6",
        "inpBg":"#C7C8CC",
        "reviewdiv":"#FAD5B3"
      },
      fontFamily:{
        stdFont : ['poppins', 'sans-serif'],
      },
      fontSize:{
        "homeTag":"40px",        
        "headTag":"32px",
        "primaryFont":"18px",
        "secondaryFont":"16px",
        "ternaryFont":"22px",
        "paraFont":"14px"
            

      },
      height:{
        "inpBtnH":"35px",
        "inpH":"40px"
      },
      width:{
        "inpBtnW":"200px"

      }
    },
  },
  plugins: [],
}

