import React from 'react'

export default function Card({ type, imgsrc, text, bgcolor, link, width, size, borderRadius, margin, padding, textAlign, isbold, isunderline }) {
    console.log(bgcolor)
    return (
        <div>
            {
                type == 1 ?
                    <div
                        className={'pointer-events-none'}
                        style={{
                            borderRadius: `${borderRadius}px`,
                            width: `${size * width}px`,
                            backgroundColor: bgcolor,
                            padding: `${padding}px`,
                            margin: `${margin}px`,

                        }}
                    >
                        <img
                            className={'pointer-events-none'}
                            style={{
                                borderTopLeftRadius: `${borderRadius}px`,
                                borderTopRightRadius: `${borderRadius}px`,
                            }}
                            src={imgsrc} alt="" />
                        <p
                            className={`text-right pointer-events-none break-words ${isunderline ? 'underline' : ''}`}
                            style={{
                                width: `${size * width}px`,
                                textAlign: textAlign,
                                fontWeight: isbold ? 'bold' : '',
                            }}>
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
                                borderRadius: `${borderRadius}px`,
                                width: `${size * width}px`,
                                backgroundColor: bgcolor,
                                padding: `${padding}px`,
                                margin: `${margin}px`,
                            }}>
                            <img
                                className='pointer-events-none'
                                style={{ borderRadius: `${borderRadius}px` }}
                                src={imgsrc} alt="" />
                            <p
                                className={`pointer-events-none break-words ${isunderline ? 'underline' : ''}`}
                                style={{
                                    width: `${size * width}px`,
                                    textAlign: textAlign,
                                    fontWeight: isbold ? 'bold' : '',
                                }}>
                                <a href={link}>

                                    {text}
                                </a>
                            </p>
                        </div> :
                        type == 3 ?
                            <div
                                className='relative'
                                style={{
                                    backgroundPosition: 'center center',
                                    backgroundSize: '100% 100%',
                                    width: `${size * width}px`,
                                    height: `${size * width}px`,
                                    padding: `${padding}px`,
                                    margin: `${margin}px`,
                                }}>
                                <div
                                    className='absolute'
                                    style={{
                                        borderRadius: `${borderRadius}px`,
                                        backgroundImage: `url(${imgsrc})`,
                                        backgroundPosition: 'center center',
                                        backgroundSize: '100% 100%',
                                        width: `${size * width}px`,
                                        height: `${size * width}px`,
                                    }}>

                                    <a href={link}
                                        className='absolute bottom-0'
                                    >
                                        {text}
                                    </a>
                                </div>
                            </div>
                            :
                            <div
                                className='pointer-events-none'
                                style={{
                                    borderRadius: `${borderRadius}px`,
                                    backgroundImage: `url(${imgsrc})`,
                                    backgroundPosition: 'center center',
                                    backgroundSize: '100% 100%',
                                    width: `${size * width}px`,
                                    height: `${size * width}px`,
                                    padding: `${padding}px`,
                                    margin: `${margin}px`,


                                }}
                            >
                            </div>
            }
        </div>
    )
}
