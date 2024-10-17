import React from 'react'

export default function ReviewsHome(props) {
  return (
    <>
         <div className="bg-black text-color1 shadow-lg rounded-lg p-2 text-justify  w-[500px] h-[180px]">
              <div className='flex justify-between'>
                <h3 className="font-semibold text-[20px] pl-4">{props.name}.</h3>
                <span className="text-white text-[20px] pr-10">★★★★</span>
              </div>
              <p className="text-white p-2 mt-1">
                Vitalii assembled the IKEA Norli drawer chest for me in less than 30 minutes, and he assembled a metal wire shelving unit as well in about 10 minutes. He also fixed a drawer on an already assembled desk so it
              </p>
              <p className="text-white font-semibold text-sm pb-1">IKEA Furniture Assembly</p>
          </div>
    </>
  )
}
