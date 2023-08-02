import React from 'react'
import { useVideo } from '../Hooks';
import { VideoView } from '../Views';

export default function VideoComp({ parentvalues }) {
    const { states, setters } = useVideo();
    parentvalues.current.childcompsetters = setters;
    parentvalues.current.childcompvalues = states;
    return (
        <VideoView states={states}/>
    )
}
