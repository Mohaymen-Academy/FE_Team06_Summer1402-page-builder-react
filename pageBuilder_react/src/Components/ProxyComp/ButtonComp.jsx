import React from 'react'
import { useButton } from '../Hooks'
import { ButtonView } from '../Views';
export default function ButtonComp({ parentvalues }) {
    const { states, setters } = useButton();
    parentvalues.current.childcompsetters = setters;
    parentvalues.current.childcompvalues = states;
    // console.log(states)
    return (
        <ButtonView states={states}/>
        )
}
