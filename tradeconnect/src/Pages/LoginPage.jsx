import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import BackgroundImg from "../components/Assets/backgroundImage.png";

export default function LoginPage() {
    return (
        <>
            <div className='relative flex items-center justify-center min-h-[90vh] font-stdFont p-4 overflow-hidden'>
                {/* Background Image with blur */}
                <div
                    className="absolute top-[-10px] bottom-[-10px] left-[-10px] right-[-10px]"
                    style={{
                        backgroundImage: `url(${BackgroundImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'blur(4px)', 
                        zIndex: -1, 
                    }}>                        
                </div>

                {/* Main content */}
                <div className="relative z-10 rounded-2xl w-full max-w-[450px] md:h-[65%] h-auto text-center bg-white p-6">
                    <h1 className='text-3xl md:text-4xl font-bold text-PrimaryColor1'>Welcome</h1>
                    <p className='text-xs md:text-sm mt-1 text-stdBlue font-semibold'>
                        Welcome to our community of skilled professionals!
                    </p>
                    <div className="flex flex-col gap-4 justify-center items-center mt-10">
                        <input type="email" placeholder='Email' className='h-[45px] w-full max-w-[300px] md:max-w-[350px] border rounded-2xl pl-3 outline-none text-sm md:text-base' />
                        <input type="password" placeholder='Password' className='h-[45px] w-full max-w-[300px] md:max-w-[350px] border rounded-2xl pl-3 outline-none text-sm md:text-base' />
                    </div>
                    <p className='text-right mt-2 md:text-sm text-paraFont'>
                        <Link href="#">Forgot Password?</Link>
                    </p>
                    <div className="mt-5">
                        <Link to="/UserProfile">
                            <button className='h-[45px] w-[120px] bg-stdBlue rounded-full text-[18px] font-bold text-white'>
                                Login
                            </button>
                        </Link>
                    </div>
                    <p className='text-xs md:text-sm mt-2'>
                        Don't have an account? <Link to="/signup" className='text-[14px] font-bold text-stdBlue'>Sign Up</Link>
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
    );
}
