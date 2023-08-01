import React from 'react'
import { useButton } from '../Hooks'
export default function ButtonComp({ parentvalues }) {
    const { states, setters } = useButton();
    parentvalues.current.childcompsetters = setters;
    parentvalues.current.childcompvalues = states;
    return (
        <div
        style={{backgroundColor:states.bgcolor}}>
            <button
                style={{
                    color: states.textColor,
                    backgroundColor: states.bgcolor,
                    padding:`${states.padding}px`,
                    borderRadius:states.radisu,
                    // fontSize:states.fontSize
                }}>
                {states.text}
            </button>
        </div>
    )
}
