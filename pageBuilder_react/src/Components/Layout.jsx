import React, { useState, useEffect } from 'react';
import "../assets/Styles/Page1.css"
import Header from '../Components/Header.jsx';
import RightSideBar from '../Components/RightSideBar.jsx';

export default function Layout({ children }) {
    return (
        <div>
            <Header/>
            <RightSideBar/>
            {children}
        </div>
    )
}
