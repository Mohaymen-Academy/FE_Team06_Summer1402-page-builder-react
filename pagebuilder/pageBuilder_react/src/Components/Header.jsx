import React, { useState, useEffect } from 'react';
import "../assets/Styles/Page1.css"

function Header() {
    return (
        <nav className="relative flex flex-row w-screen h-[50px] top-0 bg-white justify-between border">
            <div className="flex flex-row items-center  bg-white w-fit">
                <img className="w-[30px] h-[30px] mr-[15px] " src="images/logo.png" />
                <img className="header-icon mr-[10px]" src="images/home.png" />
                <img className="header-icon" src="images/eye.png" />
                <img className="header-icon" src="images/publish.png" />

            </div>
            <div className="flex flex-row justify-center items-center bg-white text-[#0066FF] w-fit">
                نام صفحه
            </div>
            <div className="flex flex-row items-center justify-end bg-white w-fit">
                <img className="header-lest-icon" src="images/forward.png" />
                <img className="header-lest-icon" src="images/back.png" />
            </div>
            
        </nav>

    );
}

export default Header;