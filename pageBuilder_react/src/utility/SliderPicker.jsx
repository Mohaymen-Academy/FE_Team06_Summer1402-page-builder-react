import React, { useState } from 'react'

export default function SliderPicker({ setSliderType }) {
    const [open, setopen] = useState(false)
    return (
        <div
            className='flex flex-col gap-[10px]'>
            <button
                onClick={() => setopen(prevestate => !prevestate)}
                className={`flex w-full items-center justify-between rounded bg-white p-2 ring-1 ${open ? 'ring-blue-600' : 'ring-gray-300'}`}
            >
                <span className="text-[12px]">ساختار اسلایدر خود را انتخاب کنید</span>
                <svg
                    className={`w-2.5 h-2.5 ml-2.5 ${open ? 'transform rotate-180' : ''}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>
            <div className={`transition-all ease-in-out duration-1000 flex flex-col gap-[20px] overflow-hidden ${open ? 'h-[220px]' : 'h-0'}`}>
                <button
                    onClick={(e) => setSliderType(1)}>
                    <img className='w-[100%] h-[103px]' src="images/Capture.PNG" alt="" />
                </button>
                <button
                    onClick={(e) => setSliderType(2)}>
                    <img className='w-[100%] h-[103px]' src="images/Capture2.png" alt="" />
                </button>
            </div>
        </div>
    )
}
