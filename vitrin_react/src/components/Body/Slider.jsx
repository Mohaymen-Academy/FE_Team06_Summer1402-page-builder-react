import React, { useEffect, useRef } from 'react'
import Slide from './Slide'
export default function Slider({ data, title ,mainbody}) {
    const sliderdiv = useRef(null);
    const valueRef = useRef({
        isDragging: false,
        startPosition: 0,
        currentTranslate: 0,
        maxTranslate:null,
        minTranslate:null,
        prevTranslate: 0,
        animationID: 0,
    });
    useEffect(() => {
        const sliderwidth=parseFloat(window.getComputedStyle(sliderdiv.current).width)
        const mainbodywidth=parseFloat(window.getComputedStyle(mainbody.current).width)
        valueRef.current.maxTranslate=Math.abs((sliderwidth*1.3)-mainbodywidth);
        valueRef.current.minTranslate=-Math.abs(sliderwidth-mainbodywidth);

        sliderdiv.current.addEventListener("mousedown", onTouchStart);
        sliderdiv.current.addEventListener("touchstart", onTouchStart);
        sliderdiv.current.addEventListener("mousemove", onTouchMove);
        sliderdiv.current.addEventListener("touchmove", onTouchMove);
        sliderdiv.current.addEventListener("mouseup", onTouchEnd);
        sliderdiv.current.addEventListener("touchend", onTouchEnd);
        sliderdiv.current.addEventListener("mouseleave", onTouchEnd);
        return ()=>{
            sliderdiv.current.removeEventListener("mousedown", onTouchStart);
            sliderdiv.current.removeEventListener("touchstart", onTouchStart);
            sliderdiv.current.removeEventListener("mousemove", onTouchMove);
            sliderdiv.current.removeEventListener("touchmove", onTouchMove);
            sliderdiv.current.removeEventListener("mouseup", onTouchEnd);
            sliderdiv.current.removeEventListener("touchend", onTouchEnd);
            sliderdiv.current.removeEventListener("mouseleave", onTouchEnd);

        }

    }, []);
    function onTouchStart(event) {
        valueRef.current.isDragging = true;
        valueRef.current.startPosition = getPositionX(event);
        valueRef.current.animationID = requestAnimationFrame(animation);
        sliderdiv.current.classList.add("grabbing");
    }
    //* set the translation direction for the swiping
    function onTouchMove(event) {
        if (valueRef.current.isDragging) {
            const currentPosition = getPositionX(event);
            valueRef.current.currentTranslate = valueRef.current.prevTranslate + currentPosition - valueRef.current.startPosition;
        }
    }
    //* end the touch and mouse movement
    function onTouchEnd() {
        cancelAnimationFrame(valueRef.current.animationID);
        valueRef.current.isDragging = false;
        valueRef.current.prevTranslate = valueRef.current.currentTranslate;
        sliderdiv.current.classList.remove("grabbing");
    }
    //* return the event position
    function getPositionX(event) {
        return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
    }
    //* run the animation
    function animation() {
        setSliderPosition();
        if (valueRef.current.isDragging) {
            requestAnimationFrame(animation);
        }

    }
    //! set the style of the swiper and move to  the directi
    function setSliderPosition() {
        if (valueRef.current.currentTranslate > valueRef.current.maxTranslate) { valueRef.current.currentTranslate = valueRef.current.maxTranslate; }
        else if (valueRef.current.currentTranslate < valueRef.current.minTranslate) { valueRef.current.currentTranslate = valueRef.current.minTranslate; }
        sliderdiv.current.style.transform = `translateX(${valueRef.current.currentTranslate}px)`;
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
                        className='slider flex transition-transform ease-in'
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
