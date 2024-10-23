import React from 'react';
import { Link } from "react-router-dom";

export default function ProfileAdmin() {
    return (
        <>
            <div className='px-4 flex '>
                <div className='min-h-screen w-[300px] bg-gray-100 shadow-lg rounded-lg'>
                    <h1 className='text-center text-2xl font-bold pt-4 text-gray-800'>Thomas Alisena</h1>

                    {/* Profile options */}
                    <div className='flex flex-col w-full mt-5 space-y-1 '>

                        {/* Profile Button */}
                        <button className='h-[45px] w-full text-lg font-semibold  rounded-md shadow-md text-gray-700 hover:bg-orange-500 hover:text-white hover:shadow-lg  transition-all duration-300 ease-out'>
                            Profile
                        </button>

                        {/* Password Button */}
                        <button className='h-[45px] w-full text-lg font-semibold  rounded-md shadow-md text-gray-700 hover:bg-orange-500 hover:text-white hover:shadow-lg  transition-all duration-300 ease-out'>
                            Password
                        </button>

                        {/* Address Button */}
                        <button className='h-[45px] w-full text-lg font-semibold  rounded-md shadow-md text-gray-700 hover:bg-orange-500 hover:text-white hover:shadow-lg  transition-all duration-300 ease-out'>
                            Address
                        </button>

                        {/* Security Button */}
                        <button className='h-[45px] w-full text-lg font-semibold  rounded-md shadow-md text-gray-700 hover:bg-orange-500 hover:text-white hover:shadow-lg  transition-all duration-300 ease-out'>
                            Security
                        </button>

                        {/* My Booking Button */}
                        <button className='h-[45px] w-full text-lg font-semibold  rounded-md shadow-md text-gray-700 hover:bg-orange-500 hover:text-white hover:shadow-lg  transition-all duration-300 ease-out'>
                            My Booking
                        </button>

                        {/* Notification Settings Button */}
                        <button className='h-[45px] w-full text-lg font-semibold  rounded-md shadow-md text-gray-700 hover:bg-orange-500 hover:text-white hover:shadow-lg  transition-all duration-300 ease-out'>
                            Notification Setting
                        </button>

                        {/* Balance Button */}
                        <button className='h-[45px] w-full text-lg font-semibold  rounded-md shadow-md text-gray-700 hover:bg-orange-500 hover:text-white hover:shadow-lg  transition-all duration-300 ease-out'>
                            Balance
                        </button>


                    </div>
                    <div className='flex items-center justify-center mt-8'>
                        <button className='h-[45px] w-[100px] text-lg font-semibold bg-orange-500 text-white rounded-full shadow-md hover:bg-btnColor hover:text-white hover:shadow-lg  transition-all duration-300 ease-out'>Logout</button>

                    </div>
                </div>
            </div>
        </>
    );
<<<<<<< HEAD:frontend/tradeconnect/src/Pages/ProfileAdmin.jsx
}
=======
}
>>>>>>> 6091b01c28e5c48d23db11e117146bd0fd58db3c:client/src/Pages/ProfileAdmin.jsx
