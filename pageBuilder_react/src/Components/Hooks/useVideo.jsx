import React, { useState } from 'react'

export default function useVideo(compstates) {
    const [src, setsrc] = useState(compstates?.src || 'images/vid.webm');
    const [autoplay, setautoplay] = useState(compstates?.autoplay || false);
    const [width, setwidth] = useState(compstates?.width || 100);
    const [padding, setpadding] = useState(compstates?.padding || 5);
    const [gap, setgap] = useState(compstates?.gap || 15);
    const [align, setalign] = useState(compstates?.align || 0);
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
