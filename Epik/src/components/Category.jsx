import React, { useState } from 'react';
import Card from "./Card.jsx";
import gameimage from '../assets/images/gameimage.jpg';
import '../assets/styles/Category.scss'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { makeStyles } from "@material-ui/core/styles";
import {games} from '../Data/games.js'

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
  const [firstGameIndex, setFirstGameIndex] = useState(0);
  

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
    large: 5
  };

  // Get the current screen size
  const screenSize = window.innerWidth < 768 ? "small" : window.innerWidth < 992 ? "medium" : "large";

  // Get the games to display based on the current screen size
  const displayedGames = games.slice(firstGameIndex, firstGameIndex + gamesToShow[screenSize]);

  return (
    <div className="Category">
      <div className="Category-title">
        <h1>{props.Title}</h1>
        <div className="Category-buttons">
          <h5 onClick={handleClick} style={{color:"White", cursor:"pointer" , textDecoration:"underline"}}>View All</h5>
        </div>
      </div>

      <div className="Category-cards">
        {displayedGames.map((game) => (
          <Card key={game.id} Title={game.title} Cost={game.cost} Img={game.image} />
        ))}
      </div>
    </div>
  );
  function handleClick()
  {
      window.location.href = "/";

  }
}

export default Category;