import React from 'react'
import gmail from "../components/Assets/Icons/gmail.png";
import headphone from "../components/Assets/Icons/headphone.png";
import address from "../components/Assets/Icons/address.png";

export default function ContactUs() {
    return (
        <>
            <div className='flex items-center justify-center'>
                <div className='h-[500px] w-[1050px] bg-black mb-10 flex  justify-around py-8 px-4 rounded-md'>
                <div className='text-white flex flex-col gap-4  w-[300px]'>
                    <h1 className='text-[24px] font-semibold'>Get in touch by with us</h1>
                    <h2 className='text-left'>Connecting with us to get the work done in the less time.</h2>
                    <h2 className=''>Fill the form or send us an email</h2>
                    <button className='border-b-color1 border-b-2 mt-6'></button>
                    <div className='flex justify-around mt-4'>
                        <div>
                            <img src={headphone} alt="" className='h-[30px] mb-2' />
                            <img src={gmail} alt=""  className='h-[30px] mb-2'/>
                            
                            <img src={address} alt=""  className='h-[30px]'/>


                        </div>
                        <div className=''>
                        <p>+91-8856917094</p>
                        <p className='mt-3'>SewaSetu@gmail.com</p>
                        <p className='mt-4'>Deogiri college,Aurangabad</p>

                        </div>
                       
                    </div>
                </div>
                    <div className='bg-white h-[450px] w-[400px] text-center rounded-md flex flex-col gap-6 items-center '>
                        <h2 className='mt-2 text-[24px] font-bold'> Send us message</h2>
                        <input type="text" placeholder='Name' className='h-[40px] w-[300px] bg-gray-200 rounded-md pl-3 outline-none' />
                        <input type="phone" placeholder='Phone' className='h-[40px] w-[300px] bg-gray-200 rounded-md pl-3 outline-none' />
                        <input type="email" placeholder='Email' className='h-[40px] w-[300px] bg-gray-200 rounded-md pl-3 outline-none' />
                        <textarea placeholder='Comment'  className='bg-gray-200 h-[140px] w-[300px] px-2 rounded-md'></textarea>
                    </div>
                    

                </div>
            </div>
        </>
    );
}
