import React from "react";
import { Link } from "react-router-dom";
import ProffessionProfile from "../components/ProffessionProfile.jsx";



export default function Servicesearch(props) {
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
                            <ProffessionProfile name="John Smith" />
                            <ProffessionProfile name="Emily Clarke" />
                            <ProffessionProfile name="David Johnson" />
                        </div>
                        <div className="flex gap-20 my-10" >
                            <ProffessionProfile name="Sarah Williams" />
                            <ProffessionProfile name="James Brown" />
                            <ProffessionProfile name="Laura Davies" />
                        </div>
                        <div className="flex gap-20 my-10" >
                            <ProffessionProfile name="Jessica Taylor" />
                            <ProffessionProfile name="Thomas Harris" />
                            <ProffessionProfile name="Rebecca Thompson" />
                        </div>
                        <div className="flex gap-20 my-10" >
                            <ProffessionProfile name="Andrew White" />
                            <ProffessionProfile name="Hannah Martin" />
                            <ProffessionProfile name="Oliver Scott" />                            
                        </div>
                    </div>
                </div>

            </div>


        </>

    );
}