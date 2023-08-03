import React, { useState } from 'react'
import { Icons } from '../../utility/Icons';
export default function useIcon() {
    const [size, setsize] = useState(55);
    const [padding, setpadding] = useState(0);
    const [gap, setgap] = useState(5);
    const [color, setcolor] = useState('#faa212');
    const [align, setalign] = useState(0);
    const [icon, seticon] = useState(<Icons.beer/>);
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
