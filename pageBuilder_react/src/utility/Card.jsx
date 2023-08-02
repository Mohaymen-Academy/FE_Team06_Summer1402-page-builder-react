import React from 'react'

export default function Card({ type, imgsrc, text, link, width, size }) {
    // console.log(imgsrc)
    return (
        <div>
            {
                type == 1 ?
                    <div
                        className={'pointer-events-none'}
                        style={{
                            border: 'none',
                            width: `${size * width}px`,

                        }}>
                        <img
                            className={'rounded-t-lg pointer-events-none'}
                            src="images/cardType3.png" alt="" />
                        <p className='text-right' >
                            <a href={link}>
                                {text}
                            </a>
                        </p>
                    </div>
                    :
                    type == 2 ?
                        <div
                            className={'pointer-events-none'}
                            style={{
                                border: 'none',
                            }}>
                            <img
                                className='rounded-t-lg pointer-events-none'
                                src="images/cardType3.png" alt="" />
                            <p className='text-right pointer-events-none' >
                                <a href={link}>

                                    {text}
                                </a>
                            </p>
                        </div> :
                        type == 3 ?
                            <div
                                style={{
                                    backgroundImage: `url(${imgsrc})`,
                                    backgroundPosition: 'center center',
                                    backgroundSize: '100% 100%',
                                }}>
                                <div
                                    style={{
                                        width: `${size * width}px`,
                                        height:`${size * width}px`,
                                    }}
                                    className='absolute bottom-[25px] pointer-events-none'>
                                    <a href={link}>

                                        {text}
                                    </a>

                                </div>

                            </div> :
                            <div
                                className='pointer-events-none'
                                style={{
                                    backgroundImage: `url(${imgsrc})`,
                                    backgroundPosition: 'center center',
                                    backgroundSize: '100% 100%',
                                    width: `${size * width}px`,
                                    height:`${size * width}px`,

                                }}
                            >
                            </div>
            }
        </div>
    )
}
