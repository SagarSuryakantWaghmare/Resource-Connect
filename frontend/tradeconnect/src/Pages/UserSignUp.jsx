import React from 'react'

export default function UserSignUp() {
    return (
        <>
            <div className='flex items-center justify-center h-screen font-stdFont bg-stdBg'>
                <div className=' rounded-2xl w-[450px] h-[72%] text-center bg-white'>
                    <div id="logo" className='mt-3'>
                        <div className='text-secondaryFont font-bold text-left ml-2'>
                            <button className='bg-stdYellow p-0.5 rounded-l-md text-stdBlue'>Trade</button>
                            <button className='bg-stdBlue p-0.5 rounded-r-md text-stdYellow'>Connect</button>
                        </div>
                        <h1 className='text-headTag font-bold text-stdBlue mt-2'>Registration</h1>
                    </div>
                    <div id="inputField" className='flex flex-col gap-3 items-center  text-secondaryFont mt-6'>
                        <input type="text" placeholder='Full Name' className='w-[330px] h-inpH rounded-lg pl-3 outline-none  border-2 '/>
                        <input type="text" placeholder='Email' className='w-[330px] h-inpH rounded-lg pl-3  border-2'  />
                        <div className='flex gap-1'>
                            <button className='bg-white h-inpBtnH w-[45px] rounded-l-lg  font-semibold  border-2'>+91</button>
                            <input type="phone" placeholder='Phone No' className='h-inpBtnH w-[160px] rounded-r-lg pl-3 mr-4  border-2 outline-none' />
                            <input type="text" placeholder='Pin-code' className='w-[100px] h-inpBtnH rounded-lg pl-3  border-2 outline-none'/>
                        </div>
                        <div className='flex gap-7'>
                            <div>
                                <select name="" id="" className='h-inpBtnH w-[150px] rounded-lg pl-3   border-2 outline-none'>
                                    <option value="">State</option>
                                    <option value="">Maharashtra</option>
                                    <option value="">Karnataka</option>
                                    <option value="">Tamil Nadu</option>
                                    <option value="">Uttar Pradesh</option>
                                    <option value="">West Bengal</option>
                                </select>
                            </div>
                            <div>
                                <select name="" id="" className='h-inpBtnH w-[150px] rounded-lg pl-3  border-2 outline-none '>
                                    <option value="">City</option>
                                    <option value="">Sambhajinagar</option>
                                    <option value="">Solapur</option>
                                    <option value="">Beed</option>
                                    <option value="">jalna</option>
                                    <option value="">Dharashiv</option>
                                </select>
                            </div>
                        </div>
                        <input type="password" placeholder='Password' className='w-[330px] h-inpH rounded-lg pl-3   border-2 outline-none' />
                        <input type="passwrod" placeholder='confirm password' className='w-[330px] h-inpH rounded-lg pl-3 border-2 outline-none ' />
                        <p className='text-[12px] '>By signing up you agree to our Terms of Use and Privacy Policy.</p>
                        <button className='text-stdBlue h-inpBtnH w-[150px] rounded-full font-bold text-primaryFont bg-stdYellow mt-2'>Register</button>

                    </div>



                </div>
            </div>
        </>
    )
}
