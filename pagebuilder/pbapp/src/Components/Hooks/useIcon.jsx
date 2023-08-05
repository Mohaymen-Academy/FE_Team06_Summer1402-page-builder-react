import React, { useState } from 'react'
import { Icons } from '../../utility/Icons';
export default function useIcon(compstates) {
    const [size, setsize] = useState(compstates?.size || 55);
    const [padding, setpadding] = useState(compstates?.padding || 0);
    const [gap, setgap] = useState(compstates?.gap || 5);
    const [color, setcolor] = useState(compstates?.color || '#faa212');
    const [align, setalign] = useState(compstates?.align || 0);
    const [icon, seticon] = useState(compstates?.icon || 'beer');
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
