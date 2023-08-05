import React, { useState, useRef, useEffect, createContext } from 'react';
import "../assets/Styles/Page1.css"
import Header from '../Components/Header.jsx';
import RightSideBar from '../Components/RightSideBar.jsx';
// import { NUM_SLIDER } from '../utility/Constants';
const ElementsContext = createContext();
export default function Layout({ leftsidePager, children }) {
    const elements = useRef({
        setters: {},
        values:{},
        dragged: null,
        elements: {
            2: [250], //image elements info
            3: [130],
            4: [50],
            5: [200],
            6: [89],
            7: [10],
            8: [10],
        },
    })
    return (
        <ElementsContext.Provider value={elements}>
            <Header />
            <RightSideBar leftsidePager={leftsidePager} />
            {children}
        </ElementsContext.Provider>
    )
}
export { ElementsContext };
