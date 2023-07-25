import React, { useEffect,useRef,useState } from 'react'

export default function BigSlider({mainbody}) {
    const items = useRef(null);
    var posX1 = 0,
    bigsliderItems,
    posX2 = 0,
    posInitial,
    posFinal,
    threshold,
    bigslides,
    bigslidesLength,
    bigslideSize ,
    firstbigslide,
    lastbigslide,
    cloneFirst,
    cloneLast,
    index=0,
    allowShift = true;
    useEffect(()=>{
        console.log()
        // console.log(items);
        // console.log(window.getComputedStyle(mainbody.current).width);
        // console.log(
        //     items.current.getElementsByClassName('bigslide')
        // );
        bigsliderItems=items.current;
        bigslides=items.current.getElementsByClassName('bigslide')
        bigslidesLength=bigslides.length;
        bigslideSize=parseFloat(window.getComputedStyle(mainbody.current).width);
        firstbigslide = bigslides[0];
        console.log(bigslideSize)
        lastbigslide = bigslides[bigslidesLength - 1];
        cloneFirst = firstbigslide.cloneNode(true),
        cloneLast = lastbigslide.cloneNode(true),
        bigsliderItems.appendChild(cloneFirst);
        bigsliderItems.insertBefore(cloneLast, firstbigslide);
        console.log('zaro')
        bigsliderItems.style.left='-800px';
        window.addEventListener('touchstart', dragStart);
        window.addEventListener('mousedown', dragStart);
        window.addEventListener('touchend', dragEnd);
        window.addEventListener('mouseup', dragEnd);
        window.addEventListener('touchmove', dragAction);
        // window.addEventListener('mousemove', dragAction);
        window.addEventListener('transitionend', checkIndex);
        return ()=>{
            window.removeEventListener('touchstart', dragStart);
            window.removeEventListener('touchend', dragEnd);
            window.removeEventListener('touchmove', dragAction);
            window.removeEventListener('transitionend', checkIndex);
    }},[])
    // var biassize = parseFloat(window.getComputedStyle(items).gap), //* gap between items
    //     mainbodywidth = parseFloat(window.getComputedStyle(document.getElementById('mainbody')).width); //* represent the width of the main div
    // var posX1 = 0,
    //     posX2 = 0,
    //     posInitial,
    //     posFinal,
    //     threshold = 100,
    //     bigslides = useRef(null),
    //     bigslidesLength = bigslides.length,
    //     bigslideSize = mainbodywidth,
    //     firstbigslide = bigslides[0],
    //     lastbigslide = bigslides[bigslidesLength - 1],
    //     cloneFirst = firstbigslide.cloneNode(true),
    //     cloneLast = lastbigslide.cloneNode(true),
    //     index = 0
    //     allowShift = true;

    // useEffect(() => {


    //     }
    // }, [])
    function dragStart(e) {
        e = e || window.event;
        e.preventDefault();
        posInitial = bigsliderItems.offsetLeft;

        if (e.type == 'touchstart') {
            posX1 = e.touches[0].clientX;
        } else {
            posX1 = e.clientX;
            document.onmouseup = dragEnd;
            document.onmousemove = dragAction;
        }
        // console.log('zarp1')

    }
    function dragAction(e) {
        // console.log('zarp2')

        e = e || window.event;

        if (e.type == 'touchmove') {
            posX2 = posX1 - e.touches[0].clientX;
            posX1 = e.touches[0].clientX;
        } else {
            posX2 = posX1 - e.clientX;
            posX1 = e.clientX;
        }
        bigsliderItems.style.left = (bigsliderItems.offsetLeft - posX2) + "px";
    }

    function dragEnd(e) {

        posFinal = items.offsetLeft;
        if (posFinal - posInitial < -threshold) {
            shiftbigslide(1, 'drag');
        } else if (posFinal - posInitial > threshold) {
            shiftbigslide(-1, 'drag');
        } else {
            bigsliderItems.style.left = (posInitial) + "px";
        }
        document.onmouseup = null;
        document.onmousemove = null;
    }
    //* this function will move the slider to left or fight depends on the choosen direction;
    function shiftbigslide(dir, action) {
        // console.log('zarp4')
        bigsliderItems.classList.add('transition-[left]', 'ease-out', 'duration-200');
        if (allowShift) {
            if (!action) { posInitial = bigsliderItems.offsetLeft; }
            if (dir == 1) {
                // console.log((posInitial - bigslideSize), 'what the ficlk')
                bigsliderItems.style.left = (posInitial - bigslideSize - Math.ceil(biassize / 3))
                    // Math.floor(-biassize/3);
                    + "px";
                index++;
            } else if (dir == -1) {
                bigsliderItems.style.left = (posInitial + bigslideSize)
                    + Math.floor(biassize / 3)
                    + "px";
                // console.log((posInitial + bigslideSize), 'what2')
                index--;
            }
        };

        allowShift = false;
    }
    //* check if the carousel should restart from the start or the end
    function checkIndex() {
        bigsliderItems.classList.remove('transition-[left]', 'ease-out', 'duration-200');
        if (index == -1) {
            bigsliderItems.style.left = (-(bigslidesLength * bigslideSize))
                - biassize / 3
                + "px";
            index = bigslidesLength - 1;
        }
        if (index == bigslidesLength) {
            bigsliderItems.style.left = (-(1 * bigslideSize))
                + Math.floor(biassize / 3)
                + "px";
            index = 0;
        }
        allowShift = true;
    }
    return (
        <div id="bigslider" className=" ltr big-slider w-[100%] h-[300px] flex mb-[65px] vsmmobile:mb-0 vsmmobile:h-[40%]">
            <div className="overflow-hidden relative h-[100%] my-[20px]">
                <div ref={items} className="items w-[700%] h-[100%] relative top-0 flex gap-3 vsmmobile:gap-[2rem] vsmmobile:h-[85%]">
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
