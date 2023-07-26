import React from 'react'

export default function CatIcons({ title, link ,imagesrc}) {
    return (
        <div>
            <a href={link} className='iconscarda'>
                <div
                className='flex flex-col gap-2'>
                    <div>
                        <img data-src={imagesrc} alt="" className='iconcardimg' />
                    </div>
                    <div
                    className="text-center text-xs">
                        {title}
                    </div>
                </div>
            </a>
        </div>
    )
}
