import React, { useState,  useEffect } from 'react';
import "../assets/Styles/Page1.css"

function RightSideBar() {
	return (
		<>
            <div className="flex flex-col px-4 py-3 h-screen bg-white w-[10%] smmobile:hidden vsmmobile:hidden">
                <div className="my-3 text-xs font-bold">قالب ها</div>
                <div className="sidebar-button">کارت</div>
                <div className="sidebar-button">دکمه </div>
                <div className="sidebar-button">متن</div>
                <div className="sidebar-button">عکس</div>
                <div className="sidebar-button">ویدئو</div>
                <div className="sidebar-button">اسلایدر</div>
                <div className="sidebar-button">آیکون</div>

            </div>
        </>
    );
}

export default RightSideBar;