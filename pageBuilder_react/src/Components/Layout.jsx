import React, { useState, useRef, useEffect, createContext } from 'react';
import "../assets/Styles/Page1.css"
import Header from '../Components/Header.jsx';
import RightSideBar from '../Components/RightSideBar.jsx';
const ElementsContext = createContext();
export default function Layout({ children }) {
    const elements = useRef({
        dragged: null,
        elements: {
            1: [250], //image elements info
            2: [130],
            3: [50],
            4: [200],
            5: [89],
            6: [10],
            7: [10],
        },
        components: {
            page1: [1,2,3],
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
