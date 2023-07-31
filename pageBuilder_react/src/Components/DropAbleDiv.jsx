import React, { useState, useRef, useEffect, useContext } from 'react'
import Layout, { ElementsContext } from './Layout';
// import CardComp from './DragAndDropComponents/CardComp';
import { CardComp, ButtonComp } from './DragAndDropComponents';
import { NUM_PAGE } from '../utility/Constants';
export default function DropAbleDiv({ Height, canvasvalues, dispatch, index, leftsidePager, type }) {
    const [ishover, setishover] = useState(false);
    const layoutelements = useContext(ElementsContext);
    const scrollvalues = useRef({
        posY1: null,
        isDragging: false,
        posY2: null,
        posY3: null,
        childcompsetters: null
    })

    useEffect(() => {
        if (canvasvalues.current.choosenitem != null && canvasvalues.current.choosenitem === index) {
            leftsidePager(type);
        }
    }, []);
    function handleClick(e) {
        layoutelements.current.setters = scrollvalues.current.childcompsetters;
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
        leftsidePager(NUM_PAGE)
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
            className={`w-auto h-auto flex relative justify-center ${ishover ? 'border-yellow-500 border-opacity-100 border-[1px]' : ''} rounded-lg `}
        // style={{ height: `${Height}px` }}
        >
            {/* <CardComp parentvalues={scrollvalues} /> */}
            <ButtonComp parentvalues={scrollvalues}/>
        </div>
    )
}
