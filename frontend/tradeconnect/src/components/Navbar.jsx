import React from 'react'

export default function Navbar() {
  return (
    <>
      <nav className='flex justify-between items-center h-[70px] border-b-2 w-full font-stdFont '>
        <div className="flex  ml-5" id='Logo'>
          <button className='bg-Btn-color2  h-[40px] w-[80px] rounded-l-lg text-[18px] font-bold bg-stdYellow text-stdBlue pl-3'>Trade</button>
          <button className='bg-Btn-color1  h-[40px] w-[90px] rounded-r-lg  text-[18px] font-bold bg-stdBlue text-stdYellow'>Connect</button>
        </div>

        <div className=" justify-center text-center flex gap-16 items-center  ">
          <a href="" className='text-[18px] font-semibold'>Service</a>
          <button className='text-[18px] font-semibold mr-7 p-1 w-[90px] bg-stdYellow rounded-lg'> Sign In</button>
        </div>
      </nav>

    </>
  )
}







