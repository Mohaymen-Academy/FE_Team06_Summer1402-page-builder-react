import React, { useEffect, useRef, useState } from 'react'
import Slide from './Slide'
export default function Slider({ data, title, mainbody }) {
    const sliderdiv = useRef(null);
    const [translate, settranslate] = useState(0);

    const valueRef = useRef({
        isDragging: false,
        maxTranslate: null,
        minTranslate: null,
        posX1: 0,

    });

    useEffect(() => {
        if (mainbody.current) {
            const sliderwidth = parseFloat(window.getComputedStyle(sliderdiv.current).width)
            const mainbodywidth = parseFloat(window.getComputedStyle(mainbody.current).width)
            valueRef.current.maxTranslate = Math.abs((sliderwidth * 1.3) - mainbodywidth);
            valueRef.current.minTranslate = -25;
        }
    }, []);
    function handleMouseDown(e) {
        valueRef.current.isDragging = true;
        valueRef.current.posX1 = getPosition(e);
    }
    function getPosition(event) {
        return (event.type === 'touchstart') ? event.touches[0].clientX : event.type == 'touchmove' ? event.touches[0].clientX : event.clientX;
    }
    function handlMouseUp(e) {
        valueRef.current.isDragging = false;

    }
    function handleMoveOver(e) {
        console.log(e)
        if (valueRef.current.isDragging) {
            const position = getPosition(e)
            const tranlate = position - valueRef.current.posX1;
            console.log(translate)
            if (tranlate < valueRef.current.maxTranslate && tranlate > valueRef.current.minTranslate) {
                settranslate(tranlate);
            }
        }

    }
    return (
        <div>
            <div
                className='flex flex-row justify-between'>
                <h3 className='pr-[4rem]'>{title}</h3>
                <a className="pl-[4rem] text-blue-700" href='#'>مشاهده همه</a>
            </div>
            <div
                className='grid justify-between w-[94%]'>
                <div
                    className='carousel-container flex flex-row w-[100%] h-36 pr-[7%] overflow-hidden relative'>
                    <div
                        onMouseDown={handleMouseDown}
                        onTouchStart={handleMouseDown}
                        onMouseMove={handleMoveOver}
                        onTouchMove={handleMoveOver}
                        onTouchEnd={handlMouseUp}
                        onMouseUp={handlMouseUp}
                        className='slider flex transition-transform ease-in'
                        style={{ transform: `translateX(${translate}px)` }}
                        ref={sliderdiv}>

                        {
                            data.map((datatype, index) => { return <Slide key={index} title={datatype.title} imagesrc={datatype.src} /> })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
