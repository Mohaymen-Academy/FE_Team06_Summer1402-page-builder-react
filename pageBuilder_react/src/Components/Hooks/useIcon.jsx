import React, { useState } from 'react'

export default function useIcon() {
    const [icon, seticon] = useState('images/cloud.svg');
    const [size, setsize] = useState(35);
    const [padding, setpadding] = useState(0);
    const [gap, setgap] = useState(20);
    const [color, setcolor] = useState('#faa212');
    const [align, setalign] = useState(0);
    function colorConverter() { }
    return {
        states: {
            align,
            size,
            padding,
            gap,
            color,
            icon,
        },
        setters: {
            setalign,
            setsize
            , setpadding
            , setgap
            , setcolor
            , seticon
        },

    }
}
