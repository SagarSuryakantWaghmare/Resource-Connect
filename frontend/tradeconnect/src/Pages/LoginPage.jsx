import React from 'react'

export default function LoginPage() {
    return (
        <>
            <div className='flex items-center justify-center h-screen font-stdFont bg-stdBg'>
                <div className="rounded-2xl w-[450px] h-2/3 text-center bg-white">
                    <h1 className='text-headTag font-bold text-stdYellow'>Welcome</h1>
                    <p className='text-paraFont mt-1 text-stdBlue font-semibold'>Wellcome to our community of skilled proffessionals!</p>
                    <div className="flex flex-col gap-4  justify-center items-center mt-10 ">
                        <input type="email" placeholder='Email' className='h-inpH w-inpW border rounded-2xl pl-3 outline-none' />
                        <input type="password" placeholder='Password' className='h-inpH w-inpW border rounded-2xl pl-3 outline-none' />
                    </div>
                    <p className='text-right mr-5 mt-2 text-paraFont'><a href="#">Forgot Password?</a></p>
                    <div className="mt-5">
                        <button className='h-inpBtnH w-[150px] bg-stdBlue rounded-2xl  text-primaryFont font-bold text-stdYellow'>Login</button>
                    </div>

                    <p className='text-paraFont mt-2'>Don't have an account?<a href="#" className='text-secondaryFont font-semibold text-stdBlue'> Sign Up</a></p>
                    <fieldset className='mt-2'>
                        <legend>OR</legend>
                    </fieldset>
                    <div className="flex flex-col gap-2 justify-center items-center mt-3">
                        <button className='w-inpBtnW h-inpBtnH border border-stdBlue rounded-lg font-semibold'>
                            <i className="fa-brands fa-google mr-2"></i>
                            Login with Google
                        </button>
                        <button className='w-inpBtnW h-inpBtnH border border-stdBlue rounded-lg  font-semibold'>
                            <i className="fa-brands fa-apple mr-2.5 text-ternaryFont"></i>
                            Login with Apple
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}
