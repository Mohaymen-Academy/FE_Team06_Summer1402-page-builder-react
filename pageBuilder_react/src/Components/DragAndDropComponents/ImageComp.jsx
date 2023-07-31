import React from 'react'
import { useImage } from '../Hooks'
export default function ImageComp({ parentvalues }) {
    const { states, setters } = useImage();
    parentvalues.current.childcompsetters = setters;
    parentvalues.current.childcompvalues = states;
    return (
        <div>
            <img
                style={{borderRadius:states.radisu}}
                src={states.image}
                alt="" />

        </div>
    )
}
