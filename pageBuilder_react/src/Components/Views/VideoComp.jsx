import React from 'react'
import { useVideo } from '../Hooks';

export default function VideoComp({ parentvalues }) {
    const { states, setters } = useVideo();
    parentvalues.current.childcompsetters = setters;
    parentvalues.current.childcompvalues = states;
    console.log(states)
    return (
        <div
        className='flex justify-center'>
            <video
                style={{
                    padding: `${states.padding}px`,
                    width: `${states.width}%`,
                    margin:`${states.gap}px`
                }}
                controls={states.autoplay ? '' : 'controls'}
                autoPlay={states.autoplay}
            >
                <source src={states.src} type='video/mp4' />

            </video>
        </div>
    )
}
