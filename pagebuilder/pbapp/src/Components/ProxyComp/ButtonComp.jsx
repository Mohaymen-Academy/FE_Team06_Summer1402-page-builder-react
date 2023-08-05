import React from 'react'
import { useButton } from '../Hooks'
import { ButtonView } from '../Views';
export default function ButtonComp({ parentvalues ,compstates }) {
    let { states, setters } = useButton(compstates );
    parentvalues.current.childcompsetters = setters;
    parentvalues.current.childcompvalues = states;
    return (
        <ButtonView states={states} />
    )
}
