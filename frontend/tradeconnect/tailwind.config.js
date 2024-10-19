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
        "PrimaryColor1":"#FF3D00",
        "stdBlue":"#223265",
        "stdBg":"#ECDDD6",
        "inpBg":"#C7C8CC",
        "reviewdiv":"#FAD5B3",
         "color1":"#FF3D00",
         "color2":"#FFDACF",
         "color3":"#FDD017",
         "btnColor":"#223265",
         "profilebtn":"#4400FF",
         "footercolr":"#000836",
         "newRequestbg":"#FFEFEF",
         "redflag":"#F95454",
         "greenFlag":"#399918",
         "Completedchat":"#000836",
         "bgCompleted":"#EDE8DC",
         "Pendingbg":"#D9D9D9",
         "trackBar":"#399918",
         "hoverEffect":"#FFB69F"
        
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
        "paraFont":"14px",
        "paraHead":"36px"
       
            

      },
      height:{
        "inpBtnH":"35px",
        "inpH":"40px",
        "LargeBtn":"45px"
      },
      width:{
        "inpBtnW":"200px",
        "inpW":"330px"

      },
      padding:{
        "padsize":"15px"
        
      }
    },
  },
  plugins: [],
}

