import React from 'react'
import { useText } from '../Hooks'

export default function TextComp({ parentvalues }) {
    const { states, setters } = useText()
    parentvalues.current.childcompsetters = setters;
    parentvalues.current.childcompvalues = states;

    return (
        <div
            style={{
                gap: states.gap,
                lineHeight: states.lineHeight,
                color: states.textColor,
                textAlign: states.textAlign,
            }}>
            {
                states.link ?
                    <a href={states.link}>
                        {states.text}
                    </a> : states.text
            }
        </div>
    )
}
