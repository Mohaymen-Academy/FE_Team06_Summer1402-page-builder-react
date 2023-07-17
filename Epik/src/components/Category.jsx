import React, { useState } from 'react';
import Card from "./Card.jsx";
import gameimage from '../assets/images/gameimage.jpg';
import '../assets/styles/Category.scss'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
<<<<<<< HEAD
function Category() {
=======
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    width: '220px',
    height: '50px',
    color: '#FFFF',
    marginTop: '20px',
    "&.MuiButton-root": {
      // border: "2px black solid"
    },
    "&.MuiButton-text": {
      color: "grey"
    },
    "&.MuiButton-contained": {
      color: "#FFFF",
      backgroundColor: "#343333",
    },
    "&.MuiButton-contained:hover": {
      color: "white",
      backgroundColor: "#343333",
      borderColor: '#FFFF',
      border: "1px white solid"
    },
  }
}));
function Category(props) {
  const classes = useStyles();
>>>>>>> 6ab340d3d18140a346041abd4cd7cd52997dcb08
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

  // Define the number of games to show per row for different screen sizes
  const gamesPerRow = {
    small: 1,
    medium: 2,
    large: 3
  };

  // Define the number of games to show for different screen sizes
  const gamesToShow = {
    small: 3,
    medium: 4,
    large: 4
  };

  // Get the current screen size
  const screenSize = window.innerWidth < 768 ? "small" : window.innerWidth < 992 ? "medium" : "large";

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
        <h1>{props.Title}</h1>
        <div className="Category-buttons">
          <ArrowBackIosNewIcon className={classes.button} onClick={handlePrevClick} disabled={firstGameIndex === 0}/>
          <ArrowForwardIosIcon className={classes.button} onClick={handleNextClick} disabled={firstGameIndex + gamesToShow[screenSize] >= games.length} />
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