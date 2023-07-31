import React, { useState, useEffect, useContext } from 'react';
import "../assets/Styles/Page1.css"
import { ElementsContext } from './Layout';
import {
    NUM_CARD,
    NUM_BUTTON,
    NUM_TEXT,
    NUM_IMAGE,
    NUM_VIDEO,
    NUM_SLIDER,
    NUM_ICON
} from '../utility/Constants';
function RightSideBar() {
    const [dragged, setdragged] = useState(false);
    const values = useContext(ElementsContext);
    
    function handleDragStart(number) {
        // console.log(number)
        // leftsidePager(number)
        values.current.dragged = number
    }

    return (
        <>
            <div className="fixed border h-screen flex flex-col px-4 py-3 border-t-0 bg-white w-[200px] smmobile:hidden vsmmobile:hidden">
                <div className="my-3 text-xs font-bold">قالب ها</div>
                <div className="sidebar-button "
                    onDragStart={() => handleDragStart(NUM_CARD)}
                    draggable={'true'}
                >
                    <div className="flex justify-evenly h-[100%] w-[100%]">
                        <img src="images/icons8-card-32.png" />
                        <button>
                            کارت
                        </button>
                    </div>
                </div>
                <div className="sidebar-button"
                    onDragStart={() => handleDragStart(NUM_BUTTON)}
                    draggable={'true'}
                >
                    <div className="flex justify-evenly h-[100%] w-[100%]">
                        <img src="images/icons8-button-16.png" />
                        <button>
                            دکمه
                        </button>
                    </div>
                </div>
                <div className="sidebar-button"
                    onDragStart={() => handleDragStart(NUM_TEXT)}
                    draggable={'true'}
                >
                    <div className="flex justify-evenly h-[100%] w-[100%]">
                        <img src="images/icons8-text-30.png" />
                        <button>
                            متن
                        </button>
                    </div>
                </div>
                <div className="sidebar-button"
                    onDragStart={() => handleDragStart(NUM_IMAGE)}
                    draggable={'true'}
                >
                    <div className="flex justify-evenly h-[100%] w-[100%]">
                        <img src="images/icons8-picture-24.png" />
                        <button>
                            عکس
                        </button>
                    </div>
                </div>
                <div className="sidebar-button"
                    onDragStart={() => handleDragStart(NUM_VIDEO)}
                    draggable={'true'}
                >
                    <div className="flex justify-evenly h-[100%] w-[100%]">
                        <img src="images/icons8-video-24.png" />
                        <button>
                            ویدئو
                        </button>
                    </div>
                </div>
                <div className="sidebar-button"
                    onDragStart={() => handleDragStart(NUM_SLIDER)}
                    draggable={'true'}
                >
                    <div className="flex justify-evenly h-[100%] w-[100%]">
                        <img src="images/icons8-slider-50.png" />
                        <button>
                            اسلایدر
                        </button>
                    </div>
                </div>
                <div className="sidebar-button"
                    onDragStart={() => handleDragStart(NUM_ICON)}
                    draggable={'true'}
                >
                    <div className="flex justify-evenly h-[100%] w-[100%]">
                        <img src="images/icons8-cat-50.png" />
                        <button>
                            آیکون
                        </button>
                    </div>
                </div>
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