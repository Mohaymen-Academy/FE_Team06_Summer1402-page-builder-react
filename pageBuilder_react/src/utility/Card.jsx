import React from 'react'

export default function Card({ type, imgsrc }) {
    console.log(imgsrc)
    return (
        <div>
            {
                type == 1 ?
                    <div
                        style={{
                            border: 'none',
                        }}>
                        <img
                            className='rounded-t-lg'
                            src="images/cardType3.png" alt="" />
                        <p className='text-right' >زارپ</p>
                    </div>
                    :
                    type == 2 ?
                        <div
                            style={{
                                border: 'none',
                            }}>
                            <img
                                className='rounded-lg'
                                src="images/cardType3.png" alt="" />
                            <p className='text-right' >زارپ</p>
                        </div>
                        :
                        type == 3 ?
                            <div
                                style={{
                                    backgroundImage: `url(${imgsrc})`,
                                    backgroundPosition: 'center center',
                                    backgroundSize: '1000px 500px'
                                }}
                            >

                            </div> :
                            <></>
            }
        </div>
    )
}
