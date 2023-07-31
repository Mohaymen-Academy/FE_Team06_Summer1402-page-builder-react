import React, { useState } from 'react'

export default function useIcon() {
    const [size, setsize] = useState(null);
    const [padding, setpadding] = useState(0);
    const [gap, setgap] = useState(null);
    const [color, setcolor] = useState('#121212');
    const [icon, seticon] = useState(null);

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
