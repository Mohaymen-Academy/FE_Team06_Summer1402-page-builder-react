import React from 'react';
import homeSlide from '../assets/images/homesliderbigimage.jpg';
import '../assets/styles/homeslider.css';
const HomeSlider = () => {
    return (
        <div>
            <div
                className={'BigImage'}
                style={{ background: `url(${homeSlide})`}}
                >
            </div>  
        </div>
    );
}

export default HomeSlider;
