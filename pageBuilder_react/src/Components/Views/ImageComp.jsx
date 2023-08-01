import React from 'react'
import { useImage } from '../Hooks'
export default function ImageComp({ parentvalues }) {
    const { states, setters } = useImage();
    parentvalues.current.childcompsetters = setters;
    parentvalues.current.childcompvalues = states;
    return (
        <div
            className='pointer-events-none'>
            <img
                className='pointer-events-none'
                style={{
                    borderRadius: `${states.radisu}px`,
                    width: `${states.width}px`,
                    margin: `${states.gap}px`,
                    padding: `${states.padding}px`,
                }}
                src={states.image}
                alt="" />

        </div>
    )
}
