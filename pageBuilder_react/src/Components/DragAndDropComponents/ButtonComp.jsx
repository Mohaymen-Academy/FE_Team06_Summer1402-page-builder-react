import React from 'react'
import { useButton } from '../Hooks/useButton'
export default function ButtonComp({ parentvalues }) {
    const { states, setters } = useButton();
    parentvalues.current.childcompsetters = setters;
    return (
        <div>
            <button
            style={{color:states.color}}>
                {states.text}
            </button>
        </div>
    )
}
