import React from 'react'
import { useText } from '../Hooks'

export default function TextComp({ parentvalues }) {
    const { states, setters } = useText()
    parentvalues.current.childcompsetters = setters;
    parentvalues.current.childcompvalues = states;

    return (
        <div>
            {
                states.text
            }
        </div>
    )
}
