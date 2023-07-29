import React, { useState, useEffect, useRef, useContext } from 'react'
import Layout, { ElementsContext } from './Layout';

export default function DropAbleDiv({elementID}) {
    console.log('in herer')
    const [ishover, setishover] = useState(false);
    const elementsContext = useContext(ElementsContext);
    function handleDragCapture(e) {
        e.preventDefault();
        if (!ishover) {
            setishover(true)
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
        // draggable={'true'}
            className='flex justify-center border-[0.5px] border-gray-600 border-opacity-25 py-10 rounded-lg hover:border-opacity-60' style={{height:`${elementsContext.current.elements[elementID][0]}px`}}>

        </div>
    )
}
