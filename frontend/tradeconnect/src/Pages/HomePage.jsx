import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import HomePhoto01 from "../components/Assets/HomePagePhoto01.png";
import Proffessions from '../components/Proffessions';
import WorkingOnHome from '../components/WorkingOnHome';
import ReviewsHome from '../components/ReviewsHome';

export default function HomePage() {
  return (
    <>
    <div id="main" className='w-full'>
    <div className='flex  flex-col items-center bg-stdBg '>
      {/* top heading */}

      <div className="font-bold items-center mt-5">
        <h2 className='text-homeTag '>Find the best tradespeople </h2>
        <h2 className='text-center text-headTag '>with <span className='text-[42px] text-stdBlue'>TradeConnect</span></h2>
        <p className='text-center mt-2'>Connecting you with skilled tradespeople near you!</p>
      </div>

      
      <Proffessions/>
      <div className=''>
        <img src={HomePhoto01} alt="photo" className='border-b-3' style={{ width: '800px', height: 'auto', }}/>
      </div>
      </div>

      <div id="loaction" className='h-[250px] w-full max-w-[1440px] text-center bg-white flex justify-center items-center'>
        
        <h2 className='w-[300px] flex felx-wrap text-[36px] font-bold text-stdBlue'>Get free project cost information delivered to your inbox</h2>
        <div id="btns" className='flex flex-wrap gap-12 font-bold text-[18px] w-[600px] justify-center mt-4'>
          <button className='w-[250px] h-[50px] border-2 border-Btn-color1 rounded-lg'>Email address</button>
          <button className='w-[250px] h-[50px] border-2 border-Btn-color1 rounded-lg'>Zip Code(Option)</button>    
          <button className='w-[250px] h-[50px] border-2 border-Btn-color1 rounded-lg '>Zip Code(Option)</button>       
       
        </div>
        

      </div>
      <WorkingOnHome/>
      <ReviewsHome/>


      </div>


  
    </>
  );
}
