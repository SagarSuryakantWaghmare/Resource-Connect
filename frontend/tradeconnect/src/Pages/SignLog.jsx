import React from 'react'

export default function SignLog() {
  return (
    <>
      <div className='flex items-center justify-center h-screen font-stdFont bg-stdBg '>
        <div className='bg-white rounded-2xl w-[380px] h-1/3 text-center'>
          <div id="head" className='text-stdBlue font-bold text-headTag pt-2'>TradeConnect</div>
          <div id="inputBtn" className='flex flex-col gap-4 text-center items-center font-bold mt-5'>
            <button className='h-inpBtnH w-inpBtnW rounded-full border border-stdBlue'>Sign Up</button>
            <button className=' h-inpBtnH w-inpBtnW rounded-full  border border-stdBlue'>Login</button>
          </div>
          <p className='text-stdBlue text-sm mt-5'>By signing up you agree to our Terms of Use and Privacy Policy.</p>

        </div>
      </div>
    </>
  )
}
