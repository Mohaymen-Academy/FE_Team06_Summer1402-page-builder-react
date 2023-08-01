import React from 'react'
import { useButton } from '../Hooks'
export default function ButtonComp({ parentvalues }) {
    const { states, setters } = useButton();
    parentvalues.current.childcompsetters = setters;
    parentvalues.current.childcompvalues = states;
    console.log(states)
    return (
        <div
            style={{
                backgroundColor: states.bgcolor,
                borderRadius: `${states.radisu}px`,
            }}>
            <button
                style={{
                    width: `${states.size * states.width}px`,
                    color: states.textColor,
                    // backgroundColor: states.bgcolor,
                    padding: `${states.padding}px`,

                    // fontSize:states.fontSize
                }}>
                {states.text}
            </button>
        </div>
    )
}
