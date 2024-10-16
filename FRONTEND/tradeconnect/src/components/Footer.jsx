import React from "react";

export default function Footer() {
    return (
        <>

            <footer className="bg-gray-100 font-poppins">
                <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">

                    <div className="flex justify-center">
                        <div className="logo flex  ml-5">
                            <button className='bg-Btn-color2  h-[40px] w-[80px] rounded-l-lg text-[18px] font-bold text-Btn-color1 pl-5'>Trade</button>
                            <button className='bg-Btn-color1  h-[40px] w-[90px] rounded-r-lg  text-[18px] font-bold text-Btn-color2 pr-5 '>Connect</button>
                        </div>
                    </div>

                    <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum
                        itaque neque.
                    </p>

                    <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                        <li>
                            <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> About </a>
                        </li>

                        <li>
                            <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Careers </a>
                        </li>

                        <li>
                            <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> History </a>
                        </li>

                        <li>
                            <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Services </a>
                        </li>

                        <li>
                            <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Projects </a>
                        </li>

                    </ul>

                </div>
            </footer>

        </>
    )
}