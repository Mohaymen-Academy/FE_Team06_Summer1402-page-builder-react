import React, { useState, useRef, useEffect, createContext } from 'react';
import "../assets/Styles/Page1.css"
import Header from '../Components/Header.jsx';
import RightSideBar from '../Components/RightSideBar.jsx';
const ElementsContext = createContext();
export default function Layout({ children }) {
    const elements = useRef({
        dragged : null,
        Elements:{
            x:{},
        }
    })
    return (
        <ElementsContext.Provider value={elements}>
            <Header />
            <RightSideBar />
            {children}
        </ElementsContext.Provider>
    )
}
export { ElementsContext };
