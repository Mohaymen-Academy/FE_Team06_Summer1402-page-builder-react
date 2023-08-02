import React, { useState } from 'react'

export default function useVideo() {
    const [src, setsrc] = useState('images/vid.webm');
    const [autoplay, setautoplay] = useState(false);
    const [width, setwidth] = useState(100);
    const [padding, setpadding] = useState(5);
    const [gap, setgap] = useState(15);
    const [align , setalign] = useState(0);
    return {
        states: {
            align,
            src,
            autoplay,
            width,
            padding,
            gap,
        },
        setters: {
            setalign,
            setsrc,
            setautoplay
            , setwidth
            , setpadding
            , setgap
        },
    }
}
