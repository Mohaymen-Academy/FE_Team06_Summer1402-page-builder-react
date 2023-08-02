import React from 'react'
import BigSlider from '../../utility/BigSlider';
export default function SliderView({ states }) {
    return (
        <div
            className='w-fit overflow-hidden'
            draggable={'false'}>
            <BigSlider imgData={states.images} />
        </ div>
    )
}
