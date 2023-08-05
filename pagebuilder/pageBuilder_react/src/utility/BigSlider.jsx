import React, { useEffect } from 'react'
import '../assets/Styles/Slider.css'
import useBigSlier from './useBigSlier';
export default function BigSlider({ states, imgData }) {
    const [handleTouchmove, Values, handleTransitionEnd, setMouseUp, SetMouseDown, index, left] = useBigSlier(imgData);

    return (
        <div id="bigslider" className=" ltr big-slider w-[280%] h-[40%]"
        // style={{
        // }}
        >
            <div className="overflow-hidden relative h-[100%]">
                <div
                    onTransitionEnd={handleTransitionEnd}
                    onTouchStart={SetMouseDown}
                    onTouchMove={handleTouchmove}
                    onMouseUp={setMouseUp}
                    onTouchEnd={setMouseUp}
                    onMouseMove={handleTouchmove}
                    onMouseDown={SetMouseDown}
                    className={`items w-[100%] h-[205px] ${Values.current.animation ? "transition-[left] ease-out duration-200" : ""} relative top-0 flex gap-3`}
                    style={{
                        left: `${left}px`,
                        padding: `${states.padding}px`,
                        gap: `${states.gap}px`,

                    }}>
                    <div className="bigslide w-[100%] cursor-pointer float-left justify-center transition-all duration-100 relative">
                        <img
                            className="w-[100%] h-[100%]"
                            src={imgData[(index + 1 + imgData.length) % imgData.length]}
                            alt=""
                        />
                    </div>
                    <div className="bigslide w-[100%] cursor-pointer float-left  justify-center transition-all duration-100 relative">
                        <img
                            className="w-[100%] h-[100%]"
                            src={imgData[(index + imgData.length) % imgData.length]}
                            alt=""
                        />
                    </div>
                    <div className="bigslide w-[100%] cursor-pointer float-left justify-center transition-all duration-100 relative">
                        <img
                            className="w-[100%] h-[100%]"
                            src={
                                imgData[
                                (
                                    index - 1 + imgData.length
                                )
                                % imgData.length
                                ]
                            }
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
