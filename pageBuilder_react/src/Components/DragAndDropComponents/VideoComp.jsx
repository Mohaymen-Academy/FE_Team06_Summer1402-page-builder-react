import React from 'react'
import { useVideo } from '../Hooks';

export default function VideoComp({ parentvalues }) {
    const { states, setters } = useVideo();
    parentvalues.current.childcompsetters = setters;
    parentvalues.current.childcompvalues = states;
    return (
        <div>
        </div>
    )
}
