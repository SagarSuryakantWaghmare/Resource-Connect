import React from 'react';
import message from "../components/Assets/Icons/MessageIcon.png";
import theft from "../components/Assets/Icons/theft.png";
import home from "../components/Assets/Icons/HomeIcon.png";

export default function RatingProjectPage() {
  return (
    <div className="w-full bg-white py-12 px-10 ">
      {/* Header Section */}
      <div className="text-center mb-10 flex justify-around ">
        <h1 className="text-[32px] lg:text-[42px] font-bold mb-4 w-[500px] text-left">
          Get free project <span className="text-orange-500">cost information delivered </span>to your inbox
        </h1>
        <div className="flex flex-col items-center gap-8">
        <div className="flex gap-6 mt-6">
          <input
            className="w-[300px] lg:w-[300px] h-[50px] rounded-full px-4 text-[16px] lg:text-[18px] border border-orange-300 focus:outline-none focus:border-orange-500 mr-2"
            type="email"
            placeholder="Email Address"
          />
          <input
            className="w-[300px] lg:w-[300px] h-[50px] rounded-full px-4 text-[16px] lg:text-[18px] border border-orange-300 focus:outline-none focus:border-orange-500"
            type="text"
            placeholder="Zip Code (optional)"
          />
           
        
        </div>
        <button className="ml-4 bg-orange-500 text-white text-[18px] h-[45px] w-[150px] rounded-full font-bold">
            Submit
          </button>
        </div>
        
      </div>

      {/* How it Works Section */}
      <div className=" flex flex-col items-center justify-center  w-full text-center">
        <h2 className="text-[24px] lg:text-[36px] font-bold mb-6">How it works</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8    ">
            
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="w-[80px] h-[80px] flex items-center justify-center mb-4">
              <img  style={{ width: '70px', height: '60px' }} src={message} alt="Step 1 Icon" />
            </div>
            <h3 className="text-[20px] font-semibold mb-2">1. Tell us what your home needs</h3>
            <p className="text-gray-600 text-sm w-[300px] text-justify">
              From routine maintenance and repairs to dream home renovations, we can help with any project big or small.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="w-[80px] h-[80px] flex items-center justify-center mb-4">
              <img  style={{ width: '40px', height: '60px' }} src={theft} alt="Step 2 Icon" />
            </div>
            <h3 className="text-[20px] font-semibold mb-2">2. We'll match you with personalized solutions</h3>
            <p className="text-gray-600 text-sm w-[300px] text-justify">
              See your price and book services in an instant. Or, request and compare quotes from highly rated pros near you.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="w-[80px] h-[80px] flex items-center justify-center mb-4">
              <img  style={{ width: '100px', height: '60px' }} src={home} alt="Step 3" />
            </div>
            <h3 className="text-[20px] font-semibold mb-2">3. Start to finish, we've got you covered</h3>
            <p className="text-gray-600 text-sm w-[300px] text-justify">
              When you book and pay with Angi, you’re covered by our Happiness Guarantee. We’ll cover your projects up to full
              purchase price, plus limited damage protection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD:frontend/tradeconnect/src/Pages/RatingProjectPage.jsx
}
=======
}
>>>>>>> 6091b01c28e5c48d23db11e117146bd0fd58db3c:client/src/Pages/RatingProjectPage.jsx
