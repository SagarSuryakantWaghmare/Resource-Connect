import React from 'react';
import { Link } from 'react-router-dom';
import HomePhoto01 from "../components/Assets/HomePagePhoto01.png";
import HomeProffessions from "../components/Assets/Icons/proffessionIcons.png";
import ReviewsHome from '../components/ReviewsHome';
import RatingPage from "./RatingProjectPage.jsx";
import ReviewHome from "../components/ReviewsHome.jsx";
import ContactUs from '../components/ContactUs.jsx';

export default function HomePage(props) {
  return (
    <>
    
      <div id="main" className="w-full h-[90vh] bg-white">
        <div className="flex flex-col items-center px-4 lg:px-0">
          <div className="font-bold items-center mt-8 lg:mt-16">
            <h2 className="text-[32px] lg:text-[52px] text-center">
              Find the best tradespeople
            </h2>
            <h2 className="text-center text-[28px] lg:text-[36px] mt-2">
              with{' '}
              <span className="text-[38px] lg:text-[50px] text-color1">
                TradeConnect
              </span>
            </h2>
            <p className="text-center mt-2 text-[14px] lg:text-[16px]">
              Connecting you with skilled tradespeople near you!
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative inline-block mt-8 lg:mt-16 w-full max-w-lg">
            <input
              className="w-full h-[50px] rounded-3xl pl-5 pr-[60px] text-[16px] lg:text-[18px] border border-gray-400 focus:outline-none focus:border-gray-400"
              type="text"
              placeholder="What do you need help with?"
            />
            <button className="absolute right-0 top-0 bg-black text-color1 text-[20px] lg:text-[22px] h-[50px] w-[60px] lg:w-[70px] rounded-r-3xl flex items-center justify-center">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>

          {/* Professions Image */}
          <div className="mt-10 lg:mt-20">
            <img
              src={HomeProffessions}
              alt="photo"
              className="border-b-3"
              style={{ width: '100%', maxWidth: '700px', height: 'auto' }}
            />
          </div>
        </div>
      </div>

      <RatingPage />

      {/* review page section */}

      <div className="flex flex-col items-center justify-center w-full py-12">
        <h2 className="text-3xl font-bold mb-10">See what happy customers are saying about TradeConnect</h2>
        <div className="flex flex-col w-full items-center ">
            <div className='flex gap-[4rem]'>
              < ReviewHome name="Sophie Carter" />
              < ReviewHome name="Benjamin Adams"/>
            </div>   
            <div>
              <div className='bg-black h-[50px] w-[50px] rounded-[50%] mt-4'></div>
            </div>
            <div className='flex gap-[4rem] mt-4 '>
              < ReviewHome name="Matthew Evans" />
              < ReviewHome name="Oliver Scott" />
            </div>         
        </div>
      </div>

      {/* ContactPage starts */}

      <h2 className='text-[32px] text-black text-center font-bold mb-12 mt-6'>Get in touch <span className='text-color1'> By Calling us</span></h2>
      <ContactUs />





    </>
  );
}