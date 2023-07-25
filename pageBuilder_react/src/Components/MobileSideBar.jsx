import React, { useState,  useEffect } from 'react';
import "../assets/Styles/Page1.css"

function MobileSideBar() {
	return (
		<>
                <div className="flex flex-row py-1 my-1 justify-around bg-white w-[90%] items-center ">
                    <div className="sidebar-button vsmmobile:h-[40px] vsmmobile:p-[7px]"><img src="images/icons8-card-32.png"/></div>
                    <div className="sidebar-button vsmmobile:h-[40px] vsmmobile:p-[7px]"><img src="images/icons8-button-16.png"/> </div>
                    <div className="sidebar-button vsmmobile:h-[40px] vsmmobile:p-[7px]"><img src="images/icons8-text-30.png"/></div>
                    <div className="sidebar-button vsmmobile:h-[40px] vsmmobile:p-[7px]"><img src="images/icons8-picture-24.png"/></div>
                    <div className="sidebar-button vsmmobile:h-[40px] vsmmobile:p-[7px]"><img src="images/icons8-video-24.png"/></div>
                    <div className="sidebar-button vsmmobile:h-[40px] vsmmobile:p-[7px]"><img src="images/icons8-slider-50.png"/></div>
                    <div className="sidebar-button vsmmobile:h-[40px] vsmmobile:p-[7px]"><img src="images/icons8-cat-50.png"/></div>

                </div>  
            </>
    );
}

export default MobileSideBar;