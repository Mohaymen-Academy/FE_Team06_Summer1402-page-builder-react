import React, { useEffect, useRef, useState } from 'react'

export default function BigSlider({ mainbody }) {
    // const [left, setleft] = useState(-800);
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
        valueRef.current.bigsliderItems = items.current;
        valueRef.current.bigslides = items.current.getElementsByClassName('bigslide')
        valueRef.current.bigslidesLength = valueRef.current.bigslides.length;
        valueRef.current.biassize = parseInt(window.getComputedStyle(valueRef.current.bigsliderItems).gap)
        valueRef.current.bigslideSize = parseFloat(window.getComputedStyle(mainbody.current).width);
        valueRef.current.firstbigslide = valueRef.current.bigslides[0];
        valueRef.current.lastbigslide = valueRef.current.bigslides[valueRef.current.bigslidesLength - 1];
        valueRef.current.cloneFirst = valueRef.current.firstbigslide.cloneNode(true),
        valueRef.current.cloneLast = valueRef.current.lastbigslide.cloneNode(true),
        valueRef.current.bigsliderItems.appendChild(valueRef.current.cloneFirst);
        valueRef.current.bigsliderItems.insertBefore(valueRef.current.cloneLast, valueRef.current.firstbigslide);
        items.current.style.left = -valueRef.current.bigslideSize+ valueRef.current.biassize/4+'px';
        valueRef.current.bigsliderItems.addEventListener('touchstart', dragStart);
        valueRef.current.bigsliderItems.addEventListener('mousedown', dragStart);
        valueRef.current.bigsliderItems.addEventListener('touchend', dragEnd);
        valueRef.current.bigsliderItems.addEventListener('mouseup', dragEnd);
        valueRef.current.bigsliderItems.addEventListener('touchmove', dragAction);
        // window.addEventListener('mousemove', dragAction);
        valueRef.current.bigsliderItems.addEventListener('transitionend', checkIndex);
        return () => {
            valueRef.current.bigsliderItems.removeEventListener('touchstart', dragStart);
            valueRef.current.bigsliderItems.removeEventListener('touchend', dragEnd);
            valueRef.current.bigsliderItems.removeEventListener('touchmove', dragAction);
            valueRef.current.bigsliderItems.removeEventListener('transitionend', checkIndex);
        }
    }, [])
    function dragStart(e) {

        e = e || window.event;
        e.preventDefault();
        valueRef.current.posInitial = valueRef.current.bigsliderItems.offsetLeft;

        if (e.type == 'touchstart') {
            valueRef.current.posX1 = e.touches[0].clientX;
        } else {
            valueRef.current.posX1 = e.clientX;
            document.onmouseup = dragEnd;
            document.onmousemove = dragAction;
        }
    }
    function dragAction(e) {
        e = e || window.event;
        
        if (e.type == 'touchmove') {
            valueRef.current.posX2 = valueRef.current.posX1 - e.touches[0].clientX;
            valueRef.current.posX1 = e.touches[0].clientX;
        } else {
            valueRef.current.posX2 = valueRef.current.posX1 - e.clientX;
            valueRef.current.posX1 = e.clientX;
        }

        valueRef.current.bigsliderItems.style.left = (items.current.offsetLeft - valueRef.current.posX2) + "px";
        
    }

    function dragEnd(e) {
        valueRef.current.posFinal = valueRef.current.bigsliderItems.offsetLeft;
        if (valueRef.current.posFinal - valueRef.current.posInitial < -valueRef.current.threshold) {
            shiftbigslide(1, 'drag');
        } else if (valueRef.current.posFinal - valueRef.current.posInitial > valueRef.current.threshold) {
            shiftbigslide(-1, 'drag');
        } else {
            items.current.style.left = (valueRef.current.posInitial) + "px";
        }
        document.onmouseup = null;
        document.onmousemove = null;
    }
    //* this function will move the slider to left or fight depends on the choosen direction;
    function shiftbigslide(dir, action) {
        items.current.classList.add ('transition-[left]', 'ease-out', 'duration-200');
        if (valueRef.current.allowShift) {
            if (!action) { valueRef.current.posInitial = items.current.offsetLeft; }
            if (dir == 1) {
                items.current.style.left = (valueRef.current.posInitial - valueRef.current.bigslideSize - Math.ceil(valueRef.current.biassize / 3))
                    // Math.floor(-biassize/3);
                    + "px";
                    valueRef.current.index++;
            } else if (dir == -1) {
                items.current.style.left = (valueRef.current.posInitial + valueRef.current.bigslideSize)
                    + Math.floor(valueRef.current.biassize / 3)
                    + "px";
                valueRef.current.index--;
            }
        };

        valueRef.current.allowShift = false;
    }
    //* check if the carousel should restart from the start or the end
    function checkIndex() {
        items.current.classList.remove('transition-[left]', 'ease-out', 'duration-200');
        if (valueRef.current.index == -1) {
            items.current.style.left = (-(valueRef.current.bigslidesLength * valueRef.current.bigslideSize))
                - valueRef.current.biassize / 3
                + "px";
                valueRef.current.index = valueRef.current.bigslidesLength - 1;
        }
        if (valueRef.current.index == valueRef.current.bigslidesLength) {
            items.current.style.left = (-(1 * valueRef.current.bigslideSize))
                + Math.floor(valueRef.current.biassize / 3)
                + "px";
                valueRef.current.index = 0;
        }
        valueRef.current.allowShift = true;
    }
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
