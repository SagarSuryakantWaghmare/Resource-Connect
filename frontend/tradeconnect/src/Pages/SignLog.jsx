import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import BackgroundImg from "../components/Assets/backgroundImage.png";

export default function SignLog() {
  return (
    <>
      <div className='relative flex justify-center items-center min-h-[90vh] font-stdFont p-5 overflow-hidden'>
        {/* Background Image with minimal blur */}
        <div
          className="absolute top-0 left-0 right-0 bottom-0"
          style={{
            backgroundImage: `url(${BackgroundImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(2px)',  // Reduced blur effect
            zIndex: -1,
          }}
        ></div>

        {/* Main Content */}
        <div className='bg-white w-full max-w-[450px] rounded-2xl h-auto md:h-[280px] text-center pb-3 relative '>
          <div id="head" className='text-stdBlue font-bold text-headTag md:text-paraHead mt-2'>TradeConnect</div>
          <div id="inputBtn" className='flex flex-col gap-4 text-center items-center font-bold mt-5'>

            {/* Sign Up Button */}
            <Link to="/signup">
              <button className='h-LargeBtn w-full md:w-[300px] max-w-[250px] rounded-full border text-lg'>
                Sign Up
              </button>
            </Link>

            {/* Login Button */}
            <Link to="/login">
              <button className='h-LargeBtn w-full md:w-[300px] max-w-[250px] rounded-full border bg-stdBlue text-white text-lg'>
                Login
              </button>
            </Link>

          </div>
          <div className='mt-5 flex items-center justify-center w-full'>
            <p className='text-xs md:text-xm text-center max-w-[300px]'>
              By signing up you agree to our <span className='font-bold text-stdBlue'>Terms of Use</span> and <span className='font-bold text-stdBlue'>Privacy Policy.</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
