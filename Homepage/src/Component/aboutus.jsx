import React from 'react';
import phonecase from '../assets/phonecase.png'
import LoginPagePhone from '../assets/LoginPagePhone.png'

export default function HomePage() {
    return (
        <>

            <div className="grid grid-cols-12 gap-2">


                <div class="relative w-full h-[90vh] col-span-12 max-w-[95vw] mx-auto" id="home">
                    <div class="absolute inset-0 bg-slate-500 brightness-[60%]">
                        <img src="https://img.freepik.com/free-photo/man-electrical-technician-working-switchboard-with-fuses_169016-25051.jpg?ga=GA1.1.863066051.1726057861&semt=ais_hybrid" alt="Background Image" class="object-cover object-center w-full h-full" />
                    </div>
                    <div class="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
                        <div class="md:w-1/2 mb-4 md:mb-0 text-white ml-32">
                            <p class="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-2">Home Care, <br />Simplified</p>
                            <p class="font-bold text-xl mb-8 mt-4">Find trusted pros and fair pricing for any home project — and get the job done right, guaranteed.</p>
                            <a href="#contactUs"
                                class="px-6 py-3 bg-[#c8a876] text-white font-medium rounded-full hover:bg-[#c09858]  transition duration-200">Get Started</a>
                        </div>
                    </div>
                </div>

                <section class="text-gray-700 body-font mt-10 col-span-12 bg-orange-300">
                    {/* <div class="flex justify-center text-3xl font-bold text-gray-800 text-center">Why Us?</div> */}
                    <div class="container px-5 py-12 mx-auto">
                        <div class="flex flex-wrap text-center justify-center">

                            <div class="p-4 md:w-1/4 sm:w-1/2 lg:w-3/4">
                                <div class="px-4 py-4 transform transition duration-500 hover:scale-110">
                                    <div class="flex justify-center items-center gap-32">
                                        <span><strong className='text-5xl font-extrabold'>TRADECONNECT</strong></span><span><img src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp" class="w-32 mb-3" /></span>
                                    </div>
                                    <h2 class="title-font font-regular text-2xl text-gray-900">We connect skilled professionals where they're needed.</h2>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section class="bg-gray-100 col-span-12 border border-black border-solid max-w-[95vw] mx-auto" id="aboutus">
                    <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                            <div class="max-w-lg border border-black border-solid">
                                <p class="text-3xl font-extrabold text-gray-800 mb-8">Tell Us What Your Home Needs</p>
                                <p class="mt-4 text-gray-600 text-lg font-bold">From routine maintenance and repairs to dream home renovations, we handle any project — large or small.</p>
                            </div>
                            <div class="mt-12 md:mt-0">
                                {/* <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us Image" class="object-cover rounded-lg shadow-md" /> */}
                                <img class="object-cover rounded-lg shadow-md h-96" src={phonecase} alt="phonecase" />
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}