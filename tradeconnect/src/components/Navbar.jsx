import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      <nav className='flex justify-between items-center h-[10vh] border-b-2 w-full font-stdFont px-[3rem]'>
        <div className="flex ml-5" id='Logo'>
          <span className='text-[34px] font-bold mr-2 bg-Btn-color2 h-[40px] w-[80px] rounded-l-lg text-stdYellow pl-3'>
            Trade
          </span>
          <span className='text-[34px] font-bold text-color1 bg-Btn-color1 h-[40px] w-[90px] rounded-r-lg text-stdBlue'>
            Connect
          </span>
        </div>

        <div className="justify-center text-center flex gap-16 items-center">
          {/* Use Link for Service navigation */}
          <Link to="/Service" className='text-[18px] font-semibold text-color1'>
            Service
          </Link>

          {/* Sign Up button link */}
          <Link to="/signlog">
            <button className='text-[18px] font-semibold mr-7 p-1 w-[120px] h-[34px] bg-color1 text-white rounded-lg'>
              Sign Up
            </button>
          </Link>

          {/* Profile icon link */}
          <Link to="/dashboard" className='text-[24px] text-stdBlue'>
            <FaUserCircle />
          </Link>
        </div>
      </nav>
    </>
  );
}