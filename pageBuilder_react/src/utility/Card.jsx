import React from 'react'

export default function Card({ type, imgsrc, text }) {
    // console.log(imgsrc)
    return (
        <div>
            {
                type == 1 ?
                    <div
                        className={'pointer-events-none'}
                        style={{
                            border: 'none',
                        }}>
                        <img
                            className={'rounded-t-lg pointer-events-none'}
                            src="images/cardType3.png" alt="" />
                        <p className='text-right' >{text}</p>
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
                            <p className='text-right pointer-events-none' >{text}</p>
                        </div> :
                        type == 3 ?
                            <div
                                className='w-[100px] h-[100px] pointer-events-none'
                                style={{
                                    backgroundImage: `url(${imgsrc})`,
                                    backgroundPosition: 'center center',
                                    backgroundSize: '100% 100%'
                                }}
                            >
                                <div
                                    className='absolute bottom-[25px] pointer-events-none'>
                                    <p>{text}</p>

                                </div>

                            </div> :
                            <div
                                className='w-[100px] h-[100px] pointer-events-none'
                                style={{
                                    backgroundImage: `url(${imgsrc})`,
                                    backgroundPosition: 'center center',
                                    backgroundSize: '100% 100%'
                                }}
                            >
                            </div>
            }
        </div>
    )
}
