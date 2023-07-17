import React, { useState,useEffect } from 'react';
import slideimage from '../assets/images/homesliderbigimage.jpg';
import HomeSliderBigPicture from './HomeSliderBigPicture';
import CardContainer from './CardContainer';
import {games} from '../Data/games.js'

const HomeSlider = () => {
    const [choosenCard, setchoosenCard] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
      setchoosenCard(prevCounter => (prevCounter+1)%games.length);
      }, 5000);
      return () => clearInterval(intervalId);
    }, []); 

    return (
        <div
        style={{
        paddingTop:'25px',
        display:'flex'
        ,justifyContent:'center',
        alignContent:'center'}}>
            <HomeSliderBigPicture 
            image={games[choosenCard].bigimage} 
            desc={'This is very good game every one should buy this'} 
            isFree={true} />
            <CardContainer choosenCard={choosenCard} games={games}/>
        </div>
    );
}

export default HomeSlider;
