import React from 'react'

export default function Proffesion() {
  return (
    <div className="flex w-[500px] justify-between text-[40px] font-bold mt-6 text-icon-color">

    <div id="transportation">
      <i class="fa-solid fa-truck"></i>
      <p className='text-[12px]'>Moving</p>
    </div>
    <div id="electricity">
    <i class="fa-solid fa-plug-circle-bolt"></i>
    <p className='text-[12px]'>Electrical</p>
    </div>
    <div id="carpenter">
    <i class="fa-solid fa-hammer"></i>
    <p className='text-[12px]'>Carpenter</p>
    </div>
    <div id="cleaning">
    <i class="fa-solid fa-paintbrush"></i>
    <p className='text-[12px]'>Painting</p>
    </div>
    <div id="cleaning">
    <i class="fa-solid fa-broom"></i>
    <p className='text-[12px]'>Cleaning</p>
    </div>
    <div id="water">
    <i class="fa-solid fa-water"></i>
    <p className='text-[12px]'>Plumbing</p>
    </div>


  </div>
  )
}
