import React from 'react'


export default function NavBar() {
  return (
    <>
    <nav className='flex justify-between items-center h-[70px] border-b-2 w-full '>
      <div className="logo flex  ml-5">
        <button className='bg-Btn-color2  h-[40px] w-[80px] rounded-l-lg text-[18px] font-bold text-Btn-color1 pl-5'>Trade</button>
        <button className='bg-Btn-color1  h-[40px] w-[90px] rounded-r-lg  text-[18px] font-bold text-Btn-color2 pr-5 '>Connect</button>
      </div>
      
      <div className="login justify-center text-center flex gap-20 items-center  ">
      <a href="" className='text-[18px] font-bold'>Service</a>
        <button className='text-[18px] font-bold mr-7 p-1 w-[120px] bg-Btn-color1 rounded-lg'> Sign In<i class="fa-regular fa-circle-user font-bold ml-2"></i></button>
      </div>
      



    </nav>
    </>
  )
}
