import React from "react";
import { Link } from "react-router-dom";
import ServiceProfile from "../components/Assets/serviceProfile.png";


export default function Servicesearch() {
    return (
        <>
            <div>
                <h1 className=" text-center mt-5 text-[26px] font-bold">We found 12 results for you!</h1>
                <div className="relative left-20 top-10">
                    <input type="text" placeholder="Mechanic near me" className="w-[300px] h-[40px]  border-2 rounded-3xl pl-5 mb-5" />
                    <span className="relative right-8 cursor-pointer text-[20px] "><i className="fa-solid fa-magnifying-glass"></i></span>

                </div>
                
                <div className="relative left-20 top-10 flex gap-10">
                    <div className="w-[300px] h-[450px] rounded-xl border border-black   flex items-center flex-col">
                        
                        <div className="flex flex-col gap-5 mt-5 items-center ">
                            <button className="h-[40px] w-[200px] rounded-xl bg-color1 text-white font-semibold text-[20px]">Filters</button>
                            
                            <select name="" id="" className="w-[170px] h-[35px] rounded-3xl pl-2 bg-color2 mt-5">
                                <option value="">Service Type</option>
                                <option value="">Service Type</option>
                                <option value="">Service Type</option>
                                <option value="">Service Type</option>
                                <option value="">Service Type</option>
                            </select>
                            <select name="" id="" className="w-[170px] h-[35px] rounded-3xl pl-2 bg-color2">
                                <option value="">Price Range</option>
                                <option value="">Price Range</option>
                                <option value="">Price Range</option>
                                <option value="">Price Range</option>
                                <option value="">Price Range</option>
                            </select>
                            <select name="" id="" className="w-[170px] h-[35px] rounded-3xl pl-2 bg-color2">
                                <option value="">Available</option>
                                <option value="">Available</option>
                                <option value="">Available</option>
                                <option value="">Available</option>
                                <option value="">Available</option>
                            </select>
                            <button className="h-[35px] w-[120px] bg-black text-white rounded-md font-semibold  relative ">Apply</button>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-20" >
                            <div className="h-[320px] w-[250px] border rounded-xl">
                                <div>
                                    <img src={ServiceProfile} alt="" className="rounded-t-xl h-[160px] w-[250px]" />
                                </div>
                                <div className="flex flex-col items-center">
                                    <h1 className="text-color1 font-bold text-[18px]">Harry Potter <span className="text-color3 text-[16px] ">★★★★</span></h1>
                                    
                                    <p className="text-[14px] font-semibold">Plumber | Mechanic | Electrician</p>
                                    <button className="border-b-2 w-[180px] mt-2"></button>
                                    
                                    <p className="text-[12px] text-justify px-4 mt-2">“We provide the best mechanic and plumbing services in the city”</p>
                                    <div className="flex gap-5 mt-3">
                                        <button className="h-[30px] w-[90px] bg-btnColor  rounded-2xl text-white font-semibold text-center">Profile</button>
                                        <button className="h-[30px] w-[90px]  bg-color1 rounded-2xl text-white font-semibold text-center">Message</button>
                                    </div>
                                </div>                            

                            </div>
                            <div className="h-[320px] w-[250px] border rounded-xl">
                                <div>
                                    <img src={ServiceProfile} alt="" className="rounded-t-xl h-[160px] w-[250px]" />
                                </div>
                                <div className="flex flex-col items-center">
                                    <h1 className="text-color1 font-bold text-[18px]">Harry Potter <span className="text-color3 text-[16px] ">★★★★</span></h1>
                                    
                                    <p className="text-[14px] font-semibold">Plumber | Mechanic | Electrician</p>
                                    <button className="border-b-2 w-[180px] mt-2"></button>
                                    
                                    <p className="text-[12px] text-justify px-4 mt-2">“We provide the best mechanic and plumbing services in the city”</p>
                                    <div className="flex gap-5 mt-3">
                                        <button className="h-[30px] w-[90px] bg-btnColor  rounded-2xl text-white font-semibold text-center">Profile</button>
                                        <button className="h-[30px] w-[90px]  bg-color1 rounded-2xl text-white font-semibold text-center">Message</button>
                                    </div>
                                </div>                            

                            </div>
                            <div className="h-[320px] w-[250px] border rounded-xl">
                                <div>
                                    <img src={ServiceProfile} alt="" className="rounded-t-xl h-[160px] w-[250px]" />
                                </div>
                                <div className="flex flex-col items-center">
                                    <h1 className="text-color1 font-bold text-[18px]">Harry Potter <span className="text-color3 text-[16px] ">★★★★</span></h1>
                                    
                                    <p className="text-[14px] font-semibold">Plumber | Mechanic | Electrician</p>
                                    <button className="border-b-2 w-[180px] mt-2"></button>
                                    
                                    <p className="text-[12px] text-justify px-4 mt-2">“We provide the best mechanic and plumbing services in the city”</p>
                                    <div className="flex gap-5 mt-3">
                                        <button className="h-[30px] w-[90px] bg-btnColor  rounded-2xl text-white font-semibold text-center">Profile</button>
                                        <button className="h-[30px] w-[90px]  bg-color1 rounded-2xl text-white font-semibold text-center">Message</button>
                                    </div>
                                </div>                            

                            </div>
                        </div>
                        <div className="flex gap-20 my-10" >
                            <div className="h-[320px] w-[250px] border rounded-xl">
                                <div>
                                    <img src={ServiceProfile} alt="" className="rounded-t-xl h-[160px] w-[250px]" />
                                </div>
                                <div className="flex flex-col items-center">
                                    <h1 className="text-color1 font-bold text-[18px]">Harry Potter <span className="text-color3 text-[16px] ">★★★★</span></h1>
                                    
                                    <p className="text-[14px] font-semibold">Plumber | Mechanic | Electrician</p>
                                    <button className="border-b-2 w-[180px] mt-2"></button>
                                    
                                    <p className="text-[12px] text-justify px-4 mt-2">“We provide the best mechanic and plumbing services in the city”</p>
                                    <div className="flex gap-5 mt-3">
                                        <button className="h-[30px] w-[90px] bg-btnColor  rounded-2xl text-white font-semibold text-center">Profile</button>
                                        <button className="h-[30px] w-[90px]  bg-color1 rounded-2xl text-white font-semibold text-center">Message</button>
                                    </div>
                                </div>                            

                            </div>
                            <div className="h-[320px] w-[250px] border rounded-xl">
                                <div>
                                    <img src={ServiceProfile} alt="" className="rounded-t-xl h-[160px] w-[250px]" />
                                </div>
                                <div className="flex flex-col items-center">
                                    <h1 className="text-color1 font-bold text-[18px]">Harry Potter <span className="text-color3 text-[16px] ">★★★★</span></h1>
                                    
                                    <p className="text-[14px] font-semibold">Plumber | Mechanic | Electrician</p>
                                    <button className="border-b-2 w-[180px] mt-2"></button>
                                    
                                    <p className="text-[12px] text-justify px-4 mt-2">“We provide the best mechanic and plumbing services in the city”</p>
                                    <div className="flex gap-5 mt-3">
                                        <button className="h-[30px] w-[90px] bg-btnColor  rounded-2xl text-white font-semibold text-center">Profile</button>
                                        <button className="h-[30px] w-[90px]  bg-color1 rounded-2xl text-white font-semibold text-center">Message</button>
                                    </div>
                                </div>                            

                            </div>
                            <div className="h-[320px] w-[250px] border rounded-xl">
                                <div>
                                    <img src={ServiceProfile} alt="" className="rounded-t-xl h-[160px] w-[250px]" />
                                </div>
                                <div className="flex flex-col items-center">
                                    <h1 className="text-color1 font-bold text-[18px]">Harry Potter <span className="text-color3 text-[16px] ">★★★★</span></h1>
                                    
                                    <p className="text-[14px] font-semibold">Plumber | Mechanic | Electrician</p>
                                    <button className="border-b-2 w-[180px] mt-2"></button>
                                    
                                    <p className="text-[12px] text-justify px-4 mt-2">“We provide the best mechanic and plumbing services in the city”</p>
                                    <div className="flex gap-5 mt-3">
                                        <button className="h-[30px] w-[90px] bg-btnColor  rounded-2xl text-white font-semibold text-center">Profile</button>
                                        <button className="h-[30px] w-[90px]  bg-color1 rounded-2xl text-white font-semibold text-center">Message</button>
                                    </div>
                                </div>                            

                            </div>
                        </div>
                        <div className="flex gap-20 my-10" >
                            <div className="h-[320px] w-[250px] border rounded-xl">
                                <div>
                                    <img src={ServiceProfile} alt="" className="rounded-t-xl h-[160px] w-[250px]" />
                                </div>
                                <div className="flex flex-col items-center">
                                    <h1 className="text-color1 font-bold text-[18px]">Harry Potter <span className="text-color3 text-[16px] ">★★★★</span></h1>
                                    
                                    <p className="text-[14px] font-semibold">Plumber | Mechanic | Electrician</p>
                                    <button className="border-b-2 w-[180px] mt-2"></button>
                                    
                                    <p className="text-[12px] text-justify px-4 mt-2">“We provide the best mechanic and plumbing services in the city”</p>
                                    <div className="flex gap-5 mt-3">
                                        <button className="h-[30px] w-[90px] bg-btnColor  rounded-2xl text-white font-semibold text-center">Profile</button>
                                        <button className="h-[30px] w-[90px]  bg-color1 rounded-2xl text-white font-semibold text-center">Message</button>
                                    </div>
                                </div>                            

                            </div>
                            <div className="h-[320px] w-[250px] border rounded-xl">
                                <div>
                                    <img src={ServiceProfile} alt="" className="rounded-t-xl h-[160px] w-[250px]" />
                                </div>
                                <div className="flex flex-col items-center">
                                    <h1 className="text-color1 font-bold text-[18px]">Harry Potter <span className="text-color3 text-[16px] ">★★★★</span></h1>
                                    
                                    <p className="text-[14px] font-semibold">Plumber | Mechanic | Electrician</p>
                                    <button className="border-b-2 w-[180px] mt-2"></button>
                                    
                                    <p className="text-[12px] text-justify px-4 mt-2">“We provide the best mechanic and plumbing services in the city”</p>
                                    <div className="flex gap-5 mt-3">
                                        <button className="h-[30px] w-[90px] bg-btnColor  rounded-2xl text-white font-semibold text-center">Profile</button>
                                        <button className="h-[30px] w-[90px]  bg-color1 rounded-2xl text-white font-semibold text-center">Message</button>
                                    </div>
                                </div>                            

                            </div>
                            <div className="h-[320px] w-[250px] border rounded-xl">
                                <div>
                                    <img src={ServiceProfile} alt="" className="rounded-t-xl h-[160px] w-[250px]" />
                                </div>
                                <div className="flex flex-col items-center">
                                    <h1 className="text-color1 font-bold text-[18px]">Harry Potter <span className="text-color3 text-[16px] ">★★★★</span></h1>
                                    
                                    <p className="text-[14px] font-semibold">Plumber | Mechanic | Electrician</p>
                                    <button className="border-b-2 w-[180px] mt-2"></button>
                                    
                                    <p className="text-[12px] text-justify px-4 mt-2">“We provide the best mechanic and plumbing services in the city”</p>
                                    <div className="flex gap-5 mt-3">
                                        <button className="h-[30px] w-[90px] bg-btnColor  rounded-2xl text-white font-semibold text-center">Profile</button>
                                        <button className="h-[30px] w-[90px]  bg-color1 rounded-2xl text-white font-semibold text-center">Message</button>
                                    </div>
                                </div>                            

                            </div>
                        </div>
                        <div className="flex gap-20 my-10" >
                            <div className="h-[320px] w-[250px] border rounded-xl">
                                <div>
                                    <img src={ServiceProfile} alt="" className="rounded-t-xl h-[160px] w-[250px]" />
                                </div>
                                <div className="flex flex-col items-center">
                                    <h1 className="text-color1 font-bold text-[18px]">Harry Potter <span className="text-color3 text-[16px] ">★★★★</span></h1>
                                    
                                    <p className="text-[14px] font-semibold">Plumber | Mechanic | Electrician</p>
                                    <button className="border-b-2 w-[180px] mt-2"></button>
                                    
                                    <p className="text-[12px] text-justify px-4 mt-2">“We provide the best mechanic and plumbing services in the city”</p>
                                    <div className="flex gap-5 mt-3">
                                        <button className="h-[30px] w-[90px] bg-btnColor  rounded-2xl text-white font-semibold text-center">Profile</button>
                                        <button className="h-[30px] w-[90px]  bg-color1 rounded-2xl text-white font-semibold text-center">Message</button>
                                    </div>
                                </div>                            

                            </div>
                            <div className="h-[320px] w-[250px] border rounded-xl">
                                <div>
                                    <img src={ServiceProfile} alt="" className="rounded-t-xl h-[160px] w-[250px]" />
                                </div>
                                <div className="flex flex-col items-center">
                                    <h1 className="text-color1 font-bold text-[18px]">Harry Potter <span className="text-color3 text-[16px] ">★★★★</span></h1>
                                    
                                    <p className="text-[14px] font-semibold">Plumber | Mechanic | Electrician</p>
                                    <button className="border-b-2 w-[180px] mt-2"></button>
                                    
                                    <p className="text-[12px] text-justify px-4 mt-2">“We provide the best mechanic and plumbing services in the city”</p>
                                    <div className="flex gap-5 mt-3">
                                        <button className="h-[30px] w-[90px] bg-btnColor  rounded-2xl text-white font-semibold text-center">Profile</button>
                                        <button className="h-[30px] w-[90px]  bg-color1 rounded-2xl text-white font-semibold text-center">Message</button>
                                    </div>
                                </div>                            

                            </div>
                            <div className="h-[320px] w-[250px] border rounded-xl">
                                <div>
                                    <img src={ServiceProfile} alt="" className="rounded-t-xl h-[160px] w-[250px]" />
                                </div>
                                <div className="flex flex-col items-center">
                                    <h1 className="text-color1 font-bold text-[18px]">Harry Potter <span className="text-color3 text-[16px] ">★★★★</span></h1>
                                    
                                    <p className="text-[14px] font-semibold">Plumber | Mechanic | Electrician</p>
                                    <button className="border-b-2 w-[180px] mt-2"></button>
                                    
                                    <p className="text-[12px] text-justify px-4 mt-2">“We provide the best mechanic and plumbing services in the city”</p>
                                    <div className="flex gap-5 mt-3">
                                        <button className="h-[30px] w-[90px] bg-btnColor  rounded-2xl text-white font-semibold text-center">Profile</button>
                                        <button className="h-[30px] w-[90px]  bg-color1 rounded-2xl text-white font-semibold text-center">Message</button>
                                    </div>
                                </div>                            

                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>

    );
}