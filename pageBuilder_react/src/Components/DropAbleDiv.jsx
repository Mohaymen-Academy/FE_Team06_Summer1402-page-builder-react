import React, { useState, useRef } from 'react'
// import Layout, { ElementsContext } from './Layout';

export default function DropAbleDiv({ Height, canvasvalues, dispatch, index }) {
    // const layoutvalues = useContext(ElementsContext);
    const [ishover, setishover] = useState(false);
    // const [top, setTop] = useState(0);
    const scrollvalues = useRef({
        posY1: null,
        isDragging: false,
        posY2: null,
        posY3: null,
    })

    function handleDragCapture(e) {
        canvasvalues.current.selecteditem = index
        scrollvalues.current.isDragging = true
        canvasvalues.current.itemIsDragged=true;
    }
    function handleDragOver(e) {
        console.log(scrollvalues.current.isDragging)
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
        setishover(false)
        canvasvalues.current.selecteditem=null;
    }
    function handleDoubleClick(e) {
        dispatch({ type: 'delete', deleteitem: index })
    }
    return (
        <div
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
