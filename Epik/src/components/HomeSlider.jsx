import React from 'react';
import slideimage from '../assets/images/homesliderbigimage.jpg';
import HomeSliderBigPicture from './HomeSliderBigPicture';
const HomeSlider = () => {
    return (
        <div>
            <HomeSliderBigPicture image={slideimage} desc={'This is very good game every one should buy this'} isFree={true} />
        </div>
    );
}

export default HomeSlider;
