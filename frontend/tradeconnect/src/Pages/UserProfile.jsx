import React from "react";

export default function UserProfile() {
    return (
        <>

            <div className="px-16 flex gap-20">

                {/* left section */}

                <div className="h-[calc(100vh-15px)] w-[300px] border bg-gray-100 ">
                    <h1 className="text-[24px] font-semibold text-center mb-5 mt-2">User name</h1>
                    <div className="flex flex-col gap-1">
                        <button className="h-[45px] w-full border hover:bg-color2 hover:text-btnColor hover:font-bold  ">Profile</button>
                        <button className="h-[45px] w-full border hover:bg-color2 hover:text-btnColor hover:font-bold">Chat</button>
                        <button className="h-[45px] w-full border hover:bg-color2 hover:text-btnColor hover:font-bold">Security</button>
                        <button className="h-[45px] w-full border hover:bg-color2 hover:text-btnColor hover:font-bold">My Bookings</button>
                        <button className="h-[45px] w-full border hover:bg-color2 hover:text-btnColor hover:font-bold">Account</button>
                        <button className="h-[45px] w-full border hover:bg-color2 hover:text-btnColor hover:font-bold">Balance</button>
                        <button className="h-[45px] w-full border hover:bg-color2 hover:text-btnColor hover:font-bold">Setting</button>
                    </div>

                    <div className="flex items-center justify-center mt-10">
                        <button className="w-[120px] h-[40px] border bg-color1 text-white font-bold rounded-3xl hover:bg-btnColor">LogOut</button>
                    </div>
                </div>

                {/* right section */}

                <div className="mt-10 flex flex-col">
                    <div className="flex gap-10">
                        <div>
                            <div className="border h-[200px] w-[200px] rounded-full bg-gray-100">
                                <img src="" alt="" />
                            </div>
                            <h1 className="text-center font-semibold text-[24px] mt-5">@UserName</h1>
                        </div>
                        <div>
                            <div className="flex flex-col">
                                <h1 className=" font-bold text-[24px]">@UserName Home Services</h1>
                                <span className="text-color3 text-[34px] pr-10">★ ★ ★ ★</span>
                                <button className="w-[350px] border-b-2"></button>
                            </div>
                            <div className="flex flex-col  mt-2">
                                <div className=" flex gap-5">
                                    <h1 className="font-bold text-[18px]">Services</h1>
                                    <h1 className="font-semibold">Electrical | Plumbing | Furniture | Car Wash</h1>
                                </div>
                                <button className="w-[350px] border-b-2 mt-2"></button>
                            </div>
                            <div className="flex flex-col mt-2 ">
                                <div className="flex">
                                    <h1 className="font-bold text-[18px]">Badges</h1>
                                    <button className="h-[25px] w-[50px] border rounded-3xl flex justify-center items-center  ml-12 mr-4 font-semibold bg-profilebtn text-white">Elite</button>
                                    <button className="h-[25px] w-[50px] border rounded-3xl flex justify-center items-center font-semibold bg-footercolr text-white ">Pro</button>
                                </div>
                                <button className="w-[350px] border-b-2 mt-2"></button>
                            </div>

                            <div className="flex flex-col mt-2">
                                <div className="flex ">
                                    <h1 className="font-bold text-[18px] mr-4">Job History</h1>
                                    <h1 className="font-semibold">Professional Plumber</h1>
                                </div>
                                <button className="border-b-2 w-[350px] mt-2"></button>
                            </div>

                            <div className="flex gap-6 mt-5">
                                <button className="w-[150px] h-[40px] bg-color1 rounded-3xl text-[18px] text-white font-semibold">Hire Me</button>
                                <button className="w-[150px] h-[40px] bg-btnColor rounded-3xl text-[18px] text-white font-semibold">Let’s Connect</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-10">
                        <h1 className="text-black text-[28px] font-bold">Reviews</h1>
                        <div className="flex flex-col gap-6 mt-3 mb-10">
                            <div className="h-[120px] w-[850px] border rounded-xl bg-gray-300 overflow-visible relative">
                                <div>
                                    <button className="h-[45px] w-[45px] rounded-full bg-color1 absolute -top-[20px] left-2 font-semibold text-white text-[22px]">SS</button>
                                    <p className="pl-[4rem] pt-2 text-[16px] font-semibold">"I am extremely impressed with the work done here. The quality of the service exceeded my
                                        expectations, and I am fully satisfied with the results. The attention to detail and professionalism demonstrated throughout the process were remarkable.
                                        It's clear that a lot of effort and skill went into this project."
                                    </p>
                                    <p className="text-right pr-5 pt-2 font-semibold">@username</p>
                                </div>
                            </div>

                            <div className="h-[120px] w-[850px] border rounded-xl bg-gray-300 overflow-visible relative">
                                <div>
                                    <button className="h-[45px] w-[45px] rounded-full bg-color1 absolute -top-[20px] left-2 font-semibold text-white text-[22px]">AW</button>
                                    <p className="pl-[4rem] pt-2 text-[16px] font-semibold">"I am extremely impressed with the work done here. The quality of the service exceeded my
                                        expectations, and I am fully satisfied with the results. The attention to detail and professionalism demonstrated throughout the process were remarkable.
                                        It's clear that a lot of effort and skill went into this project."
                                    </p>
                                    <p className="text-right pr-5 pt-2 font-semibold">@username</p>
                                </div>
                            </div>
                            <div className="h-[120px] w-[850px] border rounded-xl bg-gray-300 overflow-visible relative">
                                <div>
                                    <button className="h-[45px] w-[45px] rounded-full bg-color1 absolute -top-[20px] left-2 font-semibold text-white text-[22px]">SW</button>
                                    <p className="pl-[4rem] pt-2 text-[16px] font-semibold">"I am extremely impressed with the work done here. The quality of the service exceeded my
                                        expectations, and I am fully satisfied with the results. The attention to detail and professionalism demonstrated throughout the process were remarkable.
                                        It's clear that a lot of effort and skill went into this project."
                                    </p>
                                    <p className="text-right pr-5 pt-2 font-semibold">@username</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <button className="h-[40px] w-[120px] border rounded-3xl bg-btnColor font-semibold text-white ">Show more</button>

                            </div>


                        </div>
                    </div>

                </div>
            </div>



        </>

    );

}