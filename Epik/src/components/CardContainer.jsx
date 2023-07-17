import React, { useState,useEffect } from 'react';
import HomeCard from "./HomeCard.jsx";
import gameimage from '../assets/images/gameimage.jpg';
import '../assets/styles/Category.scss'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function CardContainer() {
  const games = [
    {
      id: 0,
      title: "Game Title 1",
      cost: "1.99$",
      image: gameimage
    },
    {
      id: 1,
      title: "Game Title 2",
      cost: "1.99$",
      image: gameimage
    },
    {
      id: 2,
      title: "Game Title 3",
      cost: "1.99$",
      image: gameimage
    },
    {
      id: 3,
      title: "Game Title 4",
      cost: "1.99$",
      image: gameimage
    },
    {
      id: 4,
      title: "Game Title 5",
      cost: "1.99$",
      image: gameimage
    },
    {
      id: 5,
      title: "Game Title 6",
      cost: "1.99$",
      image: gameimage
    }
  ];        
  const [choosenCard, setchoosenCard] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
    setchoosenCard(prevCounter => (prevCounter + 1)%games.length);
    }, 5100);
    return () => clearInterval(intervalId);
  }, []); 


  return (
      <div className="Container-cards">
        {games.map((game) => (
          <HomeCard key={game.id} id={game.id} Title={game.title}  Img={game.image} choosenCard={choosenCard} />
        ))}
      </div>
  );
}

export default CardContainer;