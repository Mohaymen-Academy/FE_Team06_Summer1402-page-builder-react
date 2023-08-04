import React, { useState, useRef, useEffect, useContext } from 'react'
import Layout, { ElementsContext } from './Layout';
import YellowBox from './YellowBox';
import { v4 as uuid4 } from 'uuid';
// import CardComp from './DragAndDropComponents/CardComp';
import {
    CardComp,
    ButtonComp,
    IconComp,
    ImageComp,
    SliderComp,
    TextComp,
    VideoComp
} from './ProxyComp';
import {
    NUM_PAGE,
    NUM_CARD,
    NUM_BUTTON,
    NUM_TEXT,
    NUM_IMAGE,
    NUM_VIDEO,
    NUM_SLIDER,
    NUM_ICON,
} from '../utility/Constants';

export default function DropAbleDiv({ canvasvalues, dispatch, pageid, index, leftsidePager, type, id, states }) {
    const [ishover, setishover] = useState(false);
    const layoutelements = useContext(ElementsContext);
    const scrollvalues = useRef({
        posY1: null,
        isDragging: false,
        posY2: null,
        posY3: null,
        childcompsetters: null,
        childcompvalues: null,
    })
    const Comps = {
        [NUM_CARD]: <CardComp parentvalues={scrollvalues} compstates={states} />,
        [NUM_BUTTON]: <ButtonComp parentvalues={scrollvalues} compstates={states} />,
        [NUM_TEXT]: <TextComp parentvalues={scrollvalues} compstates={states} />,
        [NUM_IMAGE]: <ImageComp parentvalues={scrollvalues} compstates={states} />,
        [NUM_SLIDER]: <SliderComp parentvalues={scrollvalues} compstates={states} />,
        [NUM_VIDEO]: <VideoComp parentvalues={scrollvalues} compstates={states} />,
        [NUM_ICON]: <IconComp parentvalues={scrollvalues} compstates={states} />,
    }

    useEffect(() => {
        scrollvalues.current.isDragging = false;
    },);
    useEffect(() => {
        const interval = setInterval(sendDataToParent, 10000);
        // console.log(id, type)
        if (canvasvalues.current.choosenitem != null && canvasvalues.current.choosenitem === index) {
            layoutelements.current.setters = scrollvalues.current.childcompsetters;
            layoutelements.current.values = scrollvalues.current.childcompvalues;
            leftsidePager({ type: type, id: id });
        }
        return () => clearInterval(interval);
    }, []);
    function sendDataToParent() {
        canvasvalues.current.elements[id] = { states: scrollvalues.current.childcompvalues, type: type };
    }
    function handleClick(e) {
        layoutelements.current.setters = scrollvalues.current.childcompsetters;
        layoutelements.current.values = scrollvalues.current.childcompvalues;
        leftsidePager({ type: type, id: id });
    }

    function handleDragCapture(e) {
        canvasvalues.current.selecteditem = index
        scrollvalues.current.isDragging = true
        canvasvalues.current.itemIsDragged = true;
    }
    function handleDragEnter(e) {
        if (!scrollvalues.current.isDragging && canvasvalues.current.itemIsDragged) {
            setishover(true)
        }
    }
    function handleDragleave(e) {
        setishover(false)
    }
    function handleDrop() {
        if (canvasvalues.current.selecteditem != null) {
            setishover(false)
            dispatch({ type: 'reorder', selecteditem: canvasvalues.current.selecteditem, replaceditem: index });
        }
    }

    function handleDoubleClick(e) {
        dispatch({ type: 'delete', deleteitem: index });
        leftsidePager({ type: NUM_PAGE })
    }
    return (
        <div
            onClick={handleClick}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragleave}
            onDoubleClick={handleDoubleClick}
            onDrop={handleDrop}
            draggable={'true'}
            onDragStart={handleDragCapture}
            className={`w-auto h-auto flex relative justify-center ${ishover ? 'border-yellow-500 border-opacity-100 border-[1px]' : ''} rounded-lg `}
        >
            <YellowBox>
                {
                    Comps[type]
                }
            </YellowBox>
        </div>
    )
}
