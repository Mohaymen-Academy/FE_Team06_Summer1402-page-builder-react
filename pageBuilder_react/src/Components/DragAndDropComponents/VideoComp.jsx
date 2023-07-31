import React from 'react'
import { useVideo } from '../Hooks';

export default function VideoComp({ parentvalues }) {
    const { states, setters } = useVideo();
    parentvalues.current.childcompsetters = setters;
    parentvalues.current.childcompvalues = states;
    return (
        <div>
            <video
            style={{padding:states.padding}}
                controls
                autoPlay={states.autoplay}
            >
                <source src={states.src} type='video/mp4' />

            </video>
        </div>
    )
}
