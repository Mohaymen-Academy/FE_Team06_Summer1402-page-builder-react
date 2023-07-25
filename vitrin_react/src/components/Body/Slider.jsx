import React from 'react'
import Slide from './Slide'
export default function Slider({data,title}) {
    return (
        <div>
            <div
            className='flex flex-row justify-between'>
                <h3 className='pr-[4rem]'>{title}</h3>
                <a className="pl-[4rem] text-blue-700" href='#'>مشاهده همه</a>
            </div>
            <div
            className='grid justify-between w-[94%]'>
                <div
                className='carousel-container flex flex-row w-[100%] h-36 pr-[7%] overflow-hidden relative'>
                    <div
                    className='slider flex transition-transform ease-in'>

                {
                    data.map((datatype, index) => { return <Slide key={index} title={datatype.title} imagesrc={datatype.src} /> })
                }
                </div>
                </div>
            </div>
        </div>
    )
}
