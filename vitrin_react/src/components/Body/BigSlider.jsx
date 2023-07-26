import React, { useEffect, useRef } from 'react'
import BitSliderclass from '../../utility/BigSlider';
export default function BigSlider({ mainbody }) {
    const items = useRef(null);
    const valueRef = useRef({
        posX1: 0,
        biassize: null,
        bigsliderItems: null,
        posX2: 0,
        posInitial: null,
        posFinal: null,
        threshold: 100,
        bigslides: null,
        bigslidesLength: null,
        bigslideSize: null,
        firstbigslide: null,
        lastbigslide: null,
        cloneFirst: null,
        cloneLast: null,
        index: 0,
        allowShift: true
    });
    useEffect(() => {
        const bigSlider = new BitSliderclass(valueRef, items, mainbody)
        bigSlider.setEventListeners()
        return () => {
            bigSlider.removeEventListeners();
        }
    }, [])

    return (
        <div id="bigslider" className=" ltr big-slider w-[100%] h-[300px] flex mb-[65px] vsmmobile:mb-0 vsmmobile:h-[40%]">
            <div className="overflow-hidden relative h-[100%] my-[20px]">
                <div ref={items} className="items w-[500%] h-[100%] relative top-0 flex gap-3 vsmmobile:gap-[2rem] vsmmobile:h-[85%]">
                    <div className="bigslide cursor-pointer float-left justify-center transition-all duration-1000 relative">
                        <img
                            className="bigcardimages  bg-skeleton"
                            src={'../assets/images/bigcarousel1.jpg'}
                            alt=""
                        />
                    </div>
                    <div className="bigslide  cursor-pointer float-left  justify-center transition-all duration-1000 relative">
                        <img
                            className="bigcardimages  bg-skeleton"
                            src={'../assets/images/bigcarousel2.jpg'}
                            alt=""
                        />
                    </div>
                    <div className="bigslide cursor-pointer float-left justify-center transition-all duration-1000 relative">
                        <img
                            className="bigcardimages  bg-skeleton"
                            src={'../assets/images/bigcarousel4.jpg'}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
