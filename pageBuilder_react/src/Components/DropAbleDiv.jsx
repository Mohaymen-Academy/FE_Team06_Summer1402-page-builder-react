import React, { useState, useEffect, useRef, useContext } from 'react'
// import Layout, { ElementsContext } from './Layout';

export default function DropAbleDiv({ Height, canvasvalues }) {
    const [ishover, setishover] = useState(false);
    // const elementsContext = useContext(ElementsContext);
    const [top, setTop] = useState(0);
    const scrollvalues = useRef({
        posY1: null,
        isDragging: false,
        posY2: null,
        posY3: null,

    })
    function handleDragCapture(e) {
        scrollvalues.current.posY1 = e.pageY
        scrollvalues.current.isDragging = true;
        canvasvalues.current.draggedItemHeight = Height
        
    }
    function handleDragover(e) {
        e.preventDefault();
        console.log('zarppp',Height)
        console.log(scrollvalues.current.isDragging)
        if (scrollvalues.current.isDragging) {
            if (scrollvalues.current.posY3 - e.pageY != 0)
                scrollvalues.current.posY2 = scrollvalues.current.posY3 - e.pageY
            scrollvalues.current.posY3 = e.pageY
            canvasvalues.current.direction = scrollvalues.current.posY2 > 0 ? 'up' : 'down';
            setTop(e.pageY - scrollvalues.current.posY1);
        }
        else {
            console.log('zarp hereeeee');
            setTop(prevestate => prevestate + canvasvalues.current.draggedItemHeight * (canvasvalues.current.direction == 'up' ? 1 : -1))
            console.log(

            )
        }
    }
    function handleDragLeave(e) {
        e.preventDefault();
        if (ishover) {
            setishover(false)
        }
    }
    return (
        <div
            onDragOver={handleDragover}
            draggable={'true'}
            onDragStart={handleDragCapture}
            className='flex relative justify-center border-[0.5px] border-gray-600 border-opacity-85 py-10 rounded-lg hover:border-opacity-60' style={{ height: `${Height}px`, top: `${top}px` }}>

        </div>
    )
}
