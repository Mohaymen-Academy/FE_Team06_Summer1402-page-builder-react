import React, { useState, useRef, useEffect, useContext } from 'react'
import Layout, { ElementsContext } from './Layout';
import YellowBox from './YellowBox';
// import CardComp from './DragAndDropComponents/CardComp';
import {
    CardComp,
    ButtonComp,
    IconComp,
    ImageComp,
    SliderComp,
    TextComp,
    VideoComp
} from './DragAndDropComponents';
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

export default function DropAbleDiv({ Height, canvasvalues, dispatch, index, leftsidePager, type }) {
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
        [NUM_CARD]: <CardComp parentvalues={scrollvalues} />,
        [NUM_BUTTON]: <ButtonComp parentvalues={scrollvalues} />,
        [NUM_TEXT]: <TextComp parentvalues={scrollvalues} />,
        [NUM_IMAGE]: <ImageComp parentvalues={scrollvalues} />,
        [NUM_SLIDER]: <SliderComp parentvalues={scrollvalues} />,
        [NUM_VIDEO]: <VideoComp parentvalues={scrollvalues} />,
        [NUM_ICON]: <IconComp parentvalues={scrollvalues} />,
    }

    useEffect(() => {
        if (canvasvalues.current.choosenitem != null && canvasvalues.current.choosenitem === index) {
            layoutelements.current.setters = scrollvalues.current.childcompsetters;
            layoutelements.current.values = scrollvalues.current.childcompvalues;
            leftsidePager(type);
        }
    }, []);
    function handleClick(e) {
        layoutelements.current.setters = scrollvalues.current.childcompsetters;
        layoutelements.current.values = scrollvalues.current.childcompvalues;
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
        >
            <YellowBox>
                {
                    Comps[type]
                }
            </YellowBox>
        </div>
    )
}
