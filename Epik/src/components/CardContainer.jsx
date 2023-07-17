import React, { useState } from 'react';
import HomeCard from "./HomeCard.jsx";
import gameimage from '../assets/images/gameimage.jpg';
import '../assets/styles/Category.scss'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function CardContainer() {
  const games = [
    {
      id: 1,
      title: "Game Title 1",
      cost: "1.99$",
      image: gameimage
    },
    {
      id: 2,
      title: "Game Title 2",
      cost: "1.99$",
      image: gameimage
    },
    {
      id: 3,
      title: "Game Title 3",
      cost: "1.99$",
      image: gameimage
    },
    {
      id: 4,
      title: "Game Title 4",
      cost: "1.99$",
      image: gameimage
    },
    {
      id: 5,
      title: "Game Title 5",
      cost: "1.99$",
      image: gameimage
    },
    {
      id: 6,
      title: "Game Title 6",
      cost: "1.99$",
      image: gameimage
    }
  ];        

  return (
      <div className="Container-cards">
        {games.map((game) => (
          <HomeCard key={game.id} Title={game.title}  Img={game.image} />
        ))}
      </div>
  );
}

export default CardContainer;