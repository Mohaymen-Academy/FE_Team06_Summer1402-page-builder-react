import React, { useState, useEffect } from 'react';
import Card from "./Card.jsx";
import gameimage from '../assets/images/gameimage.jpg';
import '../assets/styles/Category.scss'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { debounce } from 'lodash';

function Category() {
  const [firstGameIndex, setFirstGameIndex] = useState(0);
  const [screenSize, setScreenSize] = useState("large");
  
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

  // Define the number of games to show per row for different screen sizes
  const gamesPerRow = {
    small: 1,
    medium: 2,
    large: 3
  };

  // Define the number of games to show for different screen sizes
  const gamesToShow = {
    small: 2,
    medium: 4,
    large: 5
  };

  // Define a debounced function to update the screen size and displayed games
  const handleResize = debounce(() => {
    const width = window.innerWidth;
    if (width < 768) {
      setScreenSize("small");
      setFirstGameIndex(0);
    } else if (width < 992) {
      setScreenSize("medium");
      setFirstGameIndex(Math.min(firstGameIndex, games.length - gamesToShow.medium));
    } else {
      setScreenSize("large");
      setFirstGameIndex(Math.min(firstGameIndex, games.length - gamesToShow.large));
    }
  }, 200);

  // Call the handleResize function whenever the window is resized
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  const handleNextClick = () => {
    setFirstGameIndex((prevIndex) => Math.min(prevIndex + gamesToShow[screenSize], games.length - gamesToShow[screenSize]));
    document.querySelector(".Category-cards").classList.add("slide-left");
  };

  const handlePrevClick = () => {
    setFirstGameIndex((prevIndex) => Math.max(prevIndex - gamesToShow[screenSize], 0));
    document.querySelector(".Category-cards").classList.add("slide-right");
  };

  // Get the games to display based on the current screen size
  const displayedGames = games.slice(firstGameIndex, firstGameIndex + gamesToShow[screenSize]);

  return (
    <div className="Category">
      <div className="Category-title">
        <h1>Category</h1>
        <div className="Category-buttons">
          <ArrowBackIosNewIcon onClick={handlePrevClick} disabled={firstGameIndex === 0}/>
          <ArrowForwardIosIcon onClick={handleNextClick} disabled={firstGameIndex + gamesToShow[screenSize] >= games.length} />
        </div>
      </div>

      <div className={`Category-cards cards-${gamesPerRow[screenSize]}`}>
        {displayedGames.map((game) => (
          <Card key={game.id} Title={game.title} Cost={game.cost} Img={game.image} />
        ))}
      </div>
    </div>
  );
}

export default Category;