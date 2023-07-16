import React from 'react';
import epicgames from '../assets/images/epicgames.jpeg';
import header from '../assets/styles/header.css'
const Header = () => {
    return (
        <div 
        className='header'>
            header
            <img src={epicgames} alt="" />             
        </div>
    );
}

export default Header;
