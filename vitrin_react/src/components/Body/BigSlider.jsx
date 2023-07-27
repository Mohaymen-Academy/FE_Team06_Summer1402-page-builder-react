import React, { useEffect, useRef, useState } from 'react'
export default function BigSlider({ mainbody, imgData }) {
    const Values = useRef({
        index: 0,
        allowShift: true,
        threshold: 100,
        mouseDown: false,
        startPosition: 0,
        EndPosition: 0,
        posX1: 0,
        posX2: 0,
        posFinal: -800,
        posInitial: null,
        threshold: 100,
        animation: true,
        widht: 0,
    })
    const items = useRef(null);
    const [left, setLeft] = useState(0);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        if (mainbody.current) {
            Values.current.widht = parseInt(window.getComputedStyle(mainbody.current).width);
            setLeft(-Values.current.widht);
        }
    }, []);

    function handleTouchmove(event) {
        event=event||window.event;
        event.preventDefault();
        if (Values.current.mouseDown) {
            if (event.type == 'touchmove') {
                Values.current.posX2 = Values.current.posX1 - event.touches[0].clientX;
                Values.current.posX1 = event.touches[0].clientX;
            } else {
                Values.current.posX2 = Values.current.posX1 - event.clientX;
                Values.current.posX1 = event.clientX;
            }
            setLeft((prevstate) => prevstate - Values.current.posX2)
        }
    }
    function getPosition(event) {
        return (event.type === 'touchstart') ? event.touches[0].clientX : event.type == 'touchend' ? Values.current.posX1 : event.clientX;
    }
    function SetMouseDown(e) {
        Values.current.mouseDown = true;
        Values.current.posX1 = getPosition(e);
        Values.current.startPosition = getPosition(e);
    }
    function setMouseUp(e) {
        Values.current.mouseDown = false;
        Values.current.EndPosition = getPosition(e);
        let dir = Values.current.EndPosition - Values.current.startPosition > 0 ? 'right' : 'left';
        if (Math.abs(Values.current.EndPosition - Values.current.startPosition) > Values.current.threshold) {
            shifttheAnimation(dir)
            // console.log('za rp') //should move in the way
        }
        else {
            Values.current.animation = true;
            setLeft(-Values.current.widht);
        }

    }
    function shifttheAnimation(dir) {
        Values.current.animation = true;
        if (dir === 'right') {
            Values.current.index = ((Values.current.index + imgData.length) % imgData.length) - 1
            setLeft(0);
        }
        else {
            Values.current.index = ((Values.current.index + imgData.length) % imgData.length) + 1
            setLeft(-Values.current.widht * 2);

        }
    }

    function handleTransitionEnd(e) {
        // Values.current.animation=false;
        Values.current.animation = false;
        setIndex(Values.current.index);
        setLeft(-Values.current.widht);
    }
    return (
        <div id="bigslider" className=" ltr big-slider w-[100%] h-[300px] flex mb-[65px] vsmmobile:mb-0 vsmmobile:h-[40%]">
            <div className="overflow-hidden relative h-[100%] my-[20px]">
                <div onTransitionEnd={handleTransitionEnd} onTouchStart={SetMouseDown} onTouchMove={handleTouchmove} onMouseUp={setMouseUp} onTouchEnd={setMouseUp} onMouseMove={handleTouchmove} onMouseDown={SetMouseDown} ref={items} className={`items w-[300%] h-[100%] ${Values.current.animation ? "transition-[left] ease-out duration-200" : ""} relative top-0 flex gap-3 vsmmobile:gap-[2rem] vsmmobile:h-[85%]`} style={{ left: `${left}px` }}>
                    <div className="bigslide cursor-pointer float-left justify-center transition-all duration-100 relative">
                        <img
                            className="bigcardimages  bg-skeleton"
                            src={imgData[(index - 1 + imgData.length) % imgData.length]}
                            alt=""
                        />
                    </div>
                    <div className="bigslide  cursor-pointer float-left  justify-center transition-all duration-100 relative">
                        <img
                            className="bigcardimages  bg-skeleton"
                            src={imgData[(index + imgData.length) % imgData.length]}
                            alt=""
                        />
                    </div>
                    <div className="bigslide cursor-pointer float-left justify-center transition-all duration-100 relative">
                        <img
                            className="bigcardimages  bg-skeleton"
                            src={
                                imgData[
                                (
                                    index + 1 + imgData.length
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
