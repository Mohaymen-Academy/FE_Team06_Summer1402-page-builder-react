import React, { useState, useRef, useEffect } from 'react'
// import Layout, { ElementsContext } from './Layout';

export default function DropAbleDiv({ Height, canvasvalues, dispatch, index, leftsidePager, type }) {
    const [ishover, setishover] = useState(false);
    const scrollvalues = useRef({
        posY1: null,
        isDragging: false,
        posY2: null,
        posY3: null,
    })
    useEffect(() => {

        // console.log(canvasvalues.current.choosenitem!=null , canvasvalues.current.choosenitem == index)
        if (canvasvalues.current.choosenitem!=null && canvasvalues.current.choosenitem === index) {
            leftsidePager(type);
        }

    }, []);
    function handleClick(e) {
        leftsidePager(type)
    }

    function handleDragCapture(e) {
        canvasvalues.current.selecteditem = index
        scrollvalues.current.isDragging = true
        canvasvalues.current.itemIsDragged = true;
    }
    function handleDragOver(e) {
        if (!scrollvalues.current.isDragging && canvasvalues.current.itemIsDragged) {
            setishover(true)
        }
    }
    function handleDragleave(e) {
        setishover(false)
    }
    function handleDrop() {
        if (canvasvalues.current.selecteditem) {
            setishover(false)
            dispatch({ type: 'reorder', selecteditem: canvasvalues.current.selecteditem, replaceditem: index })
        }
        canvasvalues.current.selecteditem = null;
    }

    function handleDoubleClick(e) {
        dispatch({ type: 'delete', deleteitem: index })
    }
    return (
        <div
            onClick={handleClick}
            onDragOver={handleDragOver}
            onDragLeave={handleDragleave}
            onDoubleClick={handleDoubleClick}
            onDrop={handleDrop}
            draggable={'true'}
            onDragStart={handleDragCapture}
            className={`flex relative justify-center ${ishover ? 'border-yellow-500 border-opacity-100 border-[1px]' : 'border-gray-600 border-[0.5px] border-opacity-100'} py-10 rounded-lg `} style={{ height: `${Height}px` }}>

        </div>
    )
}
