import React from 'react'
import { useSlider } from '../Hooks';
import BigSlider from '../../utility/BigSlider';
import { SliderView } from '../Views';
export default function SliderComp({ parentvalues }) {
    const { states, setters } = useSlider();
    parentvalues.current.childcompsetters = setters;
    parentvalues.current.childcompvalues = states;

    return (
        <SliderView states={states}/>
    )
}
