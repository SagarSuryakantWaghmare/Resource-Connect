import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

export default function UserSignUp() {
    return (
        <>
            <div className='flex items-center justify-center min-h-screen font-stdFont bg-stdBg p-5'>
                <div className=' rounded-2xl w-full max-w-[420px] h-auto md:h-[65%] text-center bg-white pb-5'>
                    <div id="logo" className='mt-3'>
                        {/* <div className='text-secondaryFont font-bold text-left ml-2'>
                            <button className='bg-stdYellow p-0.5 rounded-l-md text-stdBlue'>Trade</button>
                            <button className='bg-stdBlue p-0.5 rounded-r-md text-stdYellow'>Connect</button>
                        </div> */}
                        <h1 className='text-3xl md:text-4xl font-bold text-stdBlue mt-2'>Registration</h1>
                    </div>
                    <div id="inputField" className='flex flex-col gap-3 items-center  text-secondaryFont mt-4'>
                        <input type="text" placeholder='Full Name' className='h-[40px]  w-full max-w-[300px] md:max-w-[330px] rounded-lg pl-3 outline-none  border-2 text-sm md:text-base' />
                        <input type="text" placeholder='Email' className='h-[40px]  w-full max-w-[300px] md:max-w-[330px] rounded-lg pl-3 outline-none  border-2 text-sm md:text-base' />
                        <div className='flex gap-1'>
                            <button className='bg-white h-[40px] w-[45px] rounded-l-lg  text-sm md:text-base border-2 outline-none'>+91</button>
                            <input type="phone" placeholder='Phone No' className='h-[40px] md:max-w-[180px] w-full max-w-[160px] rounded-r-lg pl-3 mr-4 text-sm md:text-base  border-2 outline-none' />
                            <input type="text" placeholder='Zip-code' className='md:max-w-[80px] w-full max-w-[70px] h-[40px] rounded-lg pl-1 text-sm md:text-base border-2 outline-none' />
                        </div>
                        <div className='flex gap-7'>
                            <div>
                                <select name="" id="" className='h-[40px] w-full max-w-[135px] md:max-w-[150px] rounded-lg pl-3 text-sm md:text-base border-2 outline-none'>
                                    <option value="">State</option>
                                    <option value="">Maharashtra</option>
                                    <option value="">Karnataka</option>
                                    <option value="">Tamil Nadu</option>
                                    <option value="">Uttar Pradesh</option>
                                    <option value="">West Bengal</option>
                                </select>
                            </div>
                            <div>
                                <select name="" id="" className='h-[40px] max-w-[135px] w-full md:max-w-[150px] rounded-lg pl-3 text-sm md:text-base  border-2 outline-none '>
                                    <option value="">City</option>
                                    <option value="">Sambhajinagar</option>
                                    <option value="">Solapur</option>
                                    <option value="">Beed</option>
                                    <option value="">jalna</option>
                                    <option value="">Dharashiv</option>
                                </select>
                            </div>
                        </div>
                        <input type="password" placeholder='Password' className='h-[40px]  w-full max-w-[300px] md:max-w-[330px] rounded-lg pl-3 outline-none  border-2 text-sm md:text-base' />
                        <input type="passwrod" placeholder='confirm password' className='h-[40px]  w-full max-w-[300px] md:max-w-[330px] rounded-lg pl-3 outline-none  border-2 text-sm md:text-base' />
                        <div className='flex items-center justify-center w-full'>
                            <p className='text-[12px] md:text-[14px] text-center max-w-[300px]'>
                                By signing up you agree to our <span className='font-bold text-stdBlue'>Terms of Use</span> and <span className='font-bold text-stdBlue'>Privacy Policy.</span>
                            </p>
                        </div>
                        <Link to="/">
                        <button className='text-stdBlue h-[40px] w-full md:w-[150px] max-w-[200px] rounded-full font-bold text-primaryFont bg-stdYellow mt-2'>Register</button>
                        </Link>

                       





                    </div>



                </div>
            </div>
        </>
    )
}
