import React from 'react'
import { Link } from 'react-router-dom'
import backgroundImage from "../components/Assets/BgImageOfBooking.png"
import NewRequestBooking from '../components/NewRequestBooking'


export default function BookingPage() {
  return (
    <>
    <div className='min-h-[90vh] ' >
    <div
          className="h-[250px] w-full flex flex-col items-center justify-start "
          style={{
            backgroundImage: `url(${backgroundImage})`, 
            backgroundSize:'cover',           
            backgroundPosition: 'center',          
            
            
          }}> 
          <h1 className='text-white mt-10 text-[32px] font-bold'>Grow you business with TradeConnect</h1> 
          <h2 className='text-white  text-[28px] mt-2 font-semibold '>"Connect with local customers and </h2> 
          <h2 className='text-white  text-[28px] leading-5 font-semibold '>expand your service offerings"</h2>         
    </div>
    <div className='flex flex-col justify-center items-center mt-5'>
     <h1 className=' text-[22px] font-bold text-center'>Welcome, Sagar Waghmare! Here’s what’s happening today</h1>
     <div className='flex justify-center gap-10 mt-10'>
        <button className='h-[40px] px-5 bg-color1 rounded-full text-xl text-white font-semibold'>New</button>
        <button className='h-[40px] px-5  bg-color1 rounded-full text-xl text-white font-semibold '>Completed</button>
        <button className='h-[40px] px-5 bg-color1 rounded-full text-xl text-white font-semibold'>Pending</button>
        
     </div>
     <div className='flex flex-col gap-5 mt-10'>
     <NewRequestBooking/>
     <NewRequestBooking/>
     <NewRequestBooking/>

     </div>
     


    </div>
    
    </div>

    </>
  )
}

