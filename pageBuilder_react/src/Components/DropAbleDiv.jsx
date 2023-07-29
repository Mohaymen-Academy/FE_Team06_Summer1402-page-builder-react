import React, { useState, useEffect, useRef, useContext } from 'react'
import Layout, { ElementsContext } from './Layout';

export default function DropAbleDiv({ dropdir, id, components }) {
    const [ishover, setishover] = useState(false);
    const elementsContext = useContext(ElementsContext);
     function handleDragCapture(e) {
        e.preventDefault();
        if (!ishover) {
            setishover(true)
            console.log(elementsContext.current.dragged)
        }
    }
    function handleDragLeave(e) {
        e.preventDefault();
        if (ishover) {
            console.log('z')
            setishover(false)
        }
    }
    return (
        <Layout>

            <div
                className='flex justify-center'>

            </div>
        </Layout>
    )
}
