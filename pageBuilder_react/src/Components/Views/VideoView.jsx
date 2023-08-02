import React from 'react'

export default function VideoView({ states }) {
    return (
        <div
            className='flex justify-center pointer-events-none'>
            <video
                style={{
                    padding: `${states.padding}px`,
                    width: `${states.width}%`,
                    margin: `${states.gap}px`
                }}
                controls={states.autoplay ? '' : 'controls'}
                autoPlay={states.autoplay}
            >
                <source className='pointer-events-none' src={states.src} type='video/mp4' />

            </video>
        </div>
    )
}
