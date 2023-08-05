import React from 'react'

export default function VideoView({ states }) {
    return (
        <div
            className='flex justify-center'>
            <video
            // loop={states.autoPlay}
                style={{
                    padding: `${states.padding}px`,
                    width: `${states.width}%`,
                    margin: `${states.gap}px`
                }}
                controls={true}
                autoPlay={states.autoplay}
            >
                <source src={states.src} type='video/mp4' />

            </video>
        </div>
    )
}
