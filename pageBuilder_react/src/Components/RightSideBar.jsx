import React, { useState,  useEffect } from 'react';
import "../assets/Styles/Page1.css"

function RightSideBar() {
	return (
        <>
            <div className="fixed border flex flex-col top-[100px] px-4 py-3 h-screen border-t-0 bg-white w-[200px] smmobile:hidden vsmmobile:hidden">
                <div className="my-3 text-xs font-bold">قالب ها</div>
                <div className="sidebar-button">کارت</div>
                <div className="sidebar-button">دکمه </div>
                <div className="sidebar-button">متن</div>
                <div className="sidebar-button">عکس</div>
                <div className="sidebar-button">ویدئو</div>
                <div className="sidebar-button">اسلایدر</div>
                <div className="sidebar-button">آیکون</div>
            </div>                
            <div className="fixed top-[100px] flex flex-row p-3 justify-around bg-white w-screen items-center desktop:hidden laptop:hidden tablet:hidden mobile:hidden border border-t-0">
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

export default RightSideBar;