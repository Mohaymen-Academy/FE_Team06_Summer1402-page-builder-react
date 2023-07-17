import React, { useState,useEffect } from 'react';
import slideimage from '../assets/images/homesliderbigimage.jpg';
import HomeSliderBigPicture from './HomeSliderBigPicture';
import CardContainer from './CardContainer';
import { homeslide1,homeslide2,homeslide3,homeslide4,homeslide5,homeslide6 } from '../assets/images/index.js';

const HomeSlider = () => {
    const [choosenCard, setchoosenCard] = useState(0);
    const games = [
        {
          id: 0,
          title: "Genshin impact",
          cost: "1.99$",
          image:  homeslide1
        },
        {
          id: 1,
          title: "Game Title 2",
          cost: "1.99$",
          image: homeslide2
        },
        {
          id: 2,
          title: "Game Title 3",
          cost: "1.99$",
          image: homeslide3
        },
        {
          id: 3,
          title: "Game Title 4",
          cost: "1.99$",
          image: homeslide4
        },
        {
          id: 4,
          title: "Game Title 5",
          cost: "1.99$",
          image: homeslide5
        },
        {
          id: 5,
          title: "Game Title 6",
          cost: "1.99$",
          image: homeslide6
        }
      
    ];        
    
    useEffect(() => {
      const intervalId = setInterval(() => {
      setchoosenCard(prevCounter => (prevCounter + 1)%games.length);
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
            image={games[choosenCard].image} 
            desc={'This is very good game every one should buy this'} 
            isFree={true} />
            <CardContainer choosenCard={choosenCard} games={games}/>
        </div>
    );
}

export default HomeSlider;
