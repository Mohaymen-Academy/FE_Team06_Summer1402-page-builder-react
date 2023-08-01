import React from 'react'
import { useSlider } from '../Hooks';

export default function SliderComp({ parentvalues }) {
    const { states, setters } = useSlider();
    parentvalues.current.childcompsetters = setters;
    parentvalues.current.childcompvalues = states;
    return (
        <div
            className='pointer-events-none'>
        </ div>
    )
}
