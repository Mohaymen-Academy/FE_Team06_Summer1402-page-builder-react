import React, { useState,  useEffect } from 'react';
import "../assets/Styles/Page1.css"

function Header() {
	return (
		<>
            <div className="flex flex-row items-center  bg-white w-fit">
                <img className="w-[30px] h-[30px] mr-[15px] " src="images/logo.png"/>
                <img className="header-icon mr-[10px]" src="images/home.png"/>
                <img className="header-icon" src="images/eye.png"/>
                <img className="header-icon" src="images/publish.png"/>
                
            </div>
            <div className="flex flex-row justify-center items-center bg-white text-[#0066FF] w-fit">
                نام صفحه
            </div>
            <div className="flex flex-row items-center justify-end bg-white w-fit">
                <img className="header-lest-icon" src="images/forward.png"/>
                <img className="header-lest-icon" src="images/back.png"/>
            </div>
            </>
    );
}

export default Header;