import React from 'react'
import { useText } from '../Hooks'
import { TextView } from '../Views';

export default function TextComp({ parentvalues }) {
    const { states, setters } = useText()
    parentvalues.current.childcompsetters = setters;
    parentvalues.current.childcompvalues = states;

    return (
        <TextView states={states}/>
    )
}
