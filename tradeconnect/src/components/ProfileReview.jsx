import React from 'react'

export default function ProfileReview(props) {
    return (
        <div className="h-[120px] w-[850px] border rounded-xl bg-gray-300 overflow-visible relative">
            <div>
                <button className="h-[45px] w-[45px] rounded-full bg-color1 absolute -top-[20px] left-2 font-semibold text-white text-[22px]">{props.icon}</button>
                <p className="pl-[4rem] pt-2 text-[16px] font-semibold text-justify pr-2">"I am extremely impressed with the work done here. The quality of the service exceeded my
                    expectations, and I am fully satisfied with the results. The attention to detail and professionalism demonstrated throughout the process were remarkable.
                    It's clear that a lot of effort and skill went into this project."
                </p>
                <p className="text-right pr-3 pt-4 font-bold text-btnColor text-xs">@{props.name}</p>
            </div>
        </div>
    )
}
