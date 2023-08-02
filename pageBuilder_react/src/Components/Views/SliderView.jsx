import React from 'react'
import BigSlider from '../../utility/BigSlider';
export default function SliderView({ states }) {
    return (
        <div
            className='overflow-hidden'
            draggable={'false'}>
            <BigSlider states={states} imgData={states.images} />
        </ div>
    )
}
