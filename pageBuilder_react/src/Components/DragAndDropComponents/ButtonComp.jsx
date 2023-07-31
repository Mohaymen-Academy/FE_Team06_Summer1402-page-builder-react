import React from 'react'
import  {useButton} from '../Hooks'
export default function ButtonComp({ parentvalues }) {
    const { states, setters } = useButton();
    console.log(setters)
    parentvalues.current.childcompsetters = setters;
    parentvalues.current.childcompvalues = states;
    return (
        <div>
            <button
                style={{ color: states.color }}>
                {states.text}
            </button>
        </div>
    )
}
