import React from 'react';
import slideimage from '../assets/images/homesliderbigimage.jpg';
import HomeSliderBigPicture from './HomeSliderBigPicture';
import CardContainer from './CardContainer';
const HomeSlider = () => {
    return (
        <div
        style={{
        display:'flex'
        ,justifyContent:'space-between'}}>
            <HomeSliderBigPicture 
            image={slideimage} 
            desc={'This is very good game every one should buy this'} 
            isFree={true} />
            <CardContainer/>
        </div>
    );
}

export default HomeSlider;
