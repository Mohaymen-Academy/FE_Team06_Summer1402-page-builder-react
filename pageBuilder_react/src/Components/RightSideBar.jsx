import React, { useState, useEffect, useContext } from 'react';
import "../assets/Styles/Page1.css"
import { ElementsContext } from './Layout';
function RightSideBar() {
    const [dragged, setdragged] = useState(false);
    const values = useContext(ElementsContext);
    function handleDragStart(number) {
        console.log(number)
        values.current.dragged = number
    }
    return (
        <>
            <div className="fixed border h-fit flex flex-col px-4 py-3 border-t-0 bg-white w-[200px] smmobile:hidden vsmmobile:hidden">
                <div className="my-3 text-xs font-bold">قالب ها</div>
                <div className="sidebar-button"
                    onDragStart={()=>handleDragStart(1)}
                    draggable={'true'}
                >
                    <div className="flex justify-evenly h-[100%] w-[100%]">
                        <img src="images/icons8-card-32.png" />
                        <button>
                            کارت
                        </button>
                    </div>
                </div>
                <div className="sidebar-button">
                    <div className="flex justify-evenly h-[100%] w-[100%]">
                        <img src="images/icons8-button-16.png" />
                        <button>
                            دکمه
                        </button>
                    </div>

                </div>
                <div className="sidebar-button">متن</div>
                <div className="sidebar-button">عکس</div>
                <div className="sidebar-button">ویدئو</div>
                <div className="sidebar-button">اسلایدر</div>
                <div className="sidebar-button">آیکون</div>
            </div>
            <div className="fixed  vsmmobile:relative smmobile:relative flex flex-row p-3 justify-around bg-white w-screen items-center desktop:hidden laptop:hidden tablet:hidden mobile:hidden border border-t-0">
                <div className="sidebar-button vsmmobile:h-[40px] vsmmobile:p-[7px]">
                    <img src="images/icons8-card-32.png" />
                </div>
                <div className="sidebar-button vsmmobile:h-[40px] vsmmobile:p-[7px]">
                    <img src="images/icons8-button-16.png" />
                </div>
                <div className="sidebar-button vsmmobile:h-[40px] vsmmobile:p-[7px]">
                    <img src="images/icons8-text-30.png" />
                </div>
                <div className="sidebar-button vsmmobile:h-[40px] vsmmobile:p-[7px]">
                    <img src="images/icons8-picture-24.png" />
                </div>
                <div className="sidebar-button vsmmobile:h-[40px] vsmmobile:p-[7px]">
                    <img src="images/icons8-video-24.png" />
                </div>
                <div className="sidebar-button vsmmobile:h-[40px] vsmmobile:p-[7px]">
                    <img src="images/icons8-slider-50.png" />
                </div>
                <div className="sidebar-button vsmmobile:h-[40px] vsmmobile:p-[7px]">
                    <img src="images/icons8-cat-50.png" />
                </div>
            </div>
        </>


    );
}

export default RightSideBar;