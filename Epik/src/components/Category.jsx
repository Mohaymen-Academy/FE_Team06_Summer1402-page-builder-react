import React, { useState } from 'react';
import Card from "./Card.jsx";
import gameimage from '../assets/images/gameimage.jpg';
import '../assets/styles/Category.scss'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';function Category() {
  const [firstGameIndex, setFirstGameIndex] = useState(0);
  
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

  const handleNextClick = () => {
    setFirstGameIndex((prevIndex) => Math.min(prevIndex + 5, games.length - 5));
    document.querySelector(".Category-cards").classList.add("slide-left");
  };

  const handlePrevClick = () => {
    setFirstGameIndex((prevIndex) => Math.max(prevIndex - 5, 0));
    document.querySelector(".Category-cards").classList.add("slide-right");
  };

  const displayedGames = games.slice(firstGameIndex, firstGameIndex + 5);

  return (
    <div className="Category">
      <div className="Category-title">
        <h1>Category</h1>
              <div className="Category-buttons">
        <ArrowBackIosNewIcon onClick={handlePrevClick} disabled={firstGameIndex === 0}/>
        <ArrowForwardIosIcon onClick={handleNextClick} disabled={firstGameIndex + 5 >= games.length} />
      </div>
      </div>

      <div className="Category-cards">
        {displayedGames.map((game) => (
          <Card key={game.id} Title={game.title} Cost={game.cost} Img={game.image} />
        ))}
      </div>
    </div>
  );
}

export default Category;