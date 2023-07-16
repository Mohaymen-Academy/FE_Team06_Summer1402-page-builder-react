import React from 'react';
import Card from "./Card.jsx";
import gameimage from '../assets/images/gameimage.jpg';
import '../assets/styles/Category.scss'

function Category() {
    const games = [
        {
            id: 1,
            title: "Game Title",
            cost: "1.99$",
            image: gameimage
        },
        {
            id: 2,
            title: "Game Title",
            cost: "1.99$",
            image: gameimage
        },
        {
            id: 3,
            title: "Game Title",
            cost: "1.99$",
            image: gameimage
        },
        {
            id: 4,
            title: "Game Title",
            cost: "1.99$",
            image: gameimage
        },
        {
            id: 5,
            title: "Game Title",
            cost: "1.99$",
            image: gameimage
        },
        {
            id: 6,
            title: "Game Title",
            cost: "1.99$",
            image: gameimage
        }]        
  return (
    <div className="Category">
        <div className="Category-title">
            <h1>Category</h1>
        </div>
        <div className="Category-cards">
            {games.map((game) => (
                <Card key={game.id} Title={game.title} Cost={game.cost} Img={game.image} />
            ))}
        </div> 
    </div>
  );
}

export default Category;