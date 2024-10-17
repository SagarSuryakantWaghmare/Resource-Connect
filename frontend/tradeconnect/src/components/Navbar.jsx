import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation


export default function Navbar() {
  return (
    <>
      <nav className='flex justify-between items-center h-[10vh] border-b-2 w-full font-stdFont px-[3rem]'>
        <div className="flex  ml-5" id='Logo'>
          <span className='text-[34px] font-bold mr-2'>Trade</span>
          <span className='text-[34px] font-bold text-color1'>Connect</span>
        </div>

        

        <div className=" justify-center text-center flex gap-16 items-center  ">
          <div className='flex gap-10'>
          <Link to="/Service" className='text-[18px] font-semibold text-color1'>Service </Link>
          <Link to="/BookingPage" className='text-[18px] font-semibold text-color1'>Booking </Link>

          </div>
        

          <Link to="/signlog">
              <button className='text-[18px] font-semibold mr-7 p-1 w-[120px] h-[34px] bg-color1 text-white rounded-lg'>
                Sign Up
              </button>
            </Link>
          
          
        </div>
      </nav>

    </>
  )
}







