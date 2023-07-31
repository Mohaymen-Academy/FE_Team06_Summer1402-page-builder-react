import React, { useState } from 'react'

export default function useIcon() {
    const [icon, seticon] = useState('images/cloud.svg');
    const [size, setsize] = useState(35);
    const [padding, setpadding] = useState(0);
    const [gap, setgap] = useState(20);
    const [color, setcolor] = useState('#faa212');
    function colorConverter() { }
    return {
        states: {
            size,
            padding,
            gap,
            color,
            icon,
        },
        setters: {
            setsize
            , setpadding
            , setgap
            , setcolor
            , seticon
        },

    }
}
