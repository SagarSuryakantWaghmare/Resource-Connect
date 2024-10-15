import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

export default function LoginPage() {
    return (
        <>
         {/* Outer div for screen */}
            <div className='bg-stdBg flex items-center justify-center min-h-screen font-stdFont  p-4'>

         {/* Login page div  */}
         
                <div className="rounded-2xl w-full max-w-[450px] md:h-[65%] h-auto text-center bg-white p-6">
                    <h1 className='text-3xl md:text-4xl font-bold text-stdYellow'>Welcome</h1>
                    <p className='text-[12px] md:text-[14px] mt-1 text-stdBlue font-semibold'>
                        Welcome to our community of skilled professionals!
                    </p>
                    <div className="flex flex-col gap-4 justify-center items-center mt-10">
                        <input type="email" placeholder='Email' className='h-[45px] w-full max-w-[300px] md:max-w-[350px] border rounded-2xl pl-3 outline-none text-sm md:text-base' />
                        <input type="password" placeholder='Password' className='h-[45px] w-full max-w-[300px] md:max-w-[350px] border rounded-2xl pl-3 outline-none text-sm md:text-base' />
                    </div>
                    <p className='text-right  mt-2 md:text-sm text-paraFont'>
                        <Link href="#">Forgot Password?</Link>
                    </p>
                    <div className="mt-5">

                    <Link to="/UserProfile">
                    <button className='h-[45px] w-[120px] bg-stdBlue rounded-full text-[18px] font-bold text-stdYellow'>
                            Login
                        </button>
                        </Link>
                        
                    </div>
                    <p className='text-[12px] md:text-sm mt-2'>
                        Don't have an account? <Link href="#" className='text-[14px] font-semibold text-stdBlue'>Sign Up</Link>
                    </p>
                    <fieldset className='mt-2'>
                        <legend>OR</legend>
                    </fieldset>
                    <div className="flex flex-col gap-2 justify-center items-center mt-2">
                        <button className='w-full max-w-[250px] md:max-w-[280px] h-[40px] border border-stdBlue rounded-xl font-semibold'>
                            <i className="fa-brands fa-google mr-2"></i>
                            Login with Google
                        </button>
                        <button className='w-full max-w-[250px] md:max-w-[280px] h-[40px] border border-stdBlue rounded-xl font-semibold'>
                            <i className="fa-brands fa-apple mr-2.5 text-ternaryFont"></i>
                            Login with Apple
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
