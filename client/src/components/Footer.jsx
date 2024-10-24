import React from 'react';
import logo from '../components/Assets/logo.png';

function Footer() {
    return (
        <>
        <div className="w-full bg-gray-800 py-10 mt-10 shadow-lg">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5">
                
                {/* Logo Section */}
                <div className="flex flex-col items-center md:items-start">
                    <img src={logo} alt="Logo" className="rounded-t-xl mb-4" style={{ width: '200px', height: '100px' }} />
                    <p className="text-gray-400 text-sm">Connecting people with services seamlessly.</p>
                </div>
                
                {/* Quick Links Section */}
                <div className="flex flex-col items-center md:items-start">
                    <h1 className="text-2xl font-bold text-white mb-4">Quick Links</h1>
                    <ul className="text-lg text-white font-semibold space-y-2">
                        <li className="hover:text-gray-300 cursor-pointer">Home</li>
                        <li className="hover:text-gray-300 cursor-pointer">About Us</li>
                        <li className="hover:text-gray-300 cursor-pointer">Services</li>
                        <li className="hover:text-gray-300 cursor-pointer">Login</li>
                    </ul>
                </div>
                
                {/* Contact Us Section */}
                <div className="flex flex-col items-center md:items-start">
                    <h1 className="text-2xl font-bold text-white mb-4">Contact Us</h1>
                    <div className="space-y-4">
                        <div className="flex items-center text-lg text-white font-semibold">
                            <i className="fa-solid fa-envelope mr-3"></i>
                            <span>SewaSetu@gmail.com</span>
                        </div>
                        <div className="flex items-center text-lg text-white font-semibold">
                            <i className="fa-solid fa-phone mr-3"></i>
                            <span>+91 1800 130 200</span>
                        </div>
                        <div className="flex items-center text-lg text-white font-semibold">
                            <i className="fa-brands fa-youtube mr-3"></i>
                            <span>www.SewaSetu.youtube.com</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Footer Bottom Section */}
            <div className="mt-10 border-t border-gray-600 pt-4">
                <p className="text-center text-gray-400 text-sm">
                    © 2024 SewaSetu. All Rights Reserved.
                </p>
            </div>
        </div>
        </>
    );
}

export default Footer;
