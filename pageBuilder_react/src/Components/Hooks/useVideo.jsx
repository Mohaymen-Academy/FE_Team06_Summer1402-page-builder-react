import React, { useState } from 'react'

export default function useVideo() {
    const [src, setsrc] = useState('images/vid.webm');
    const [autoplay, setautoplay] = useState(true);
    const [width, setwidth] = useState(null);
    const [padding, setpadding] = useState(0);
    const [gap, setgap] = useState(6);
    return {
        states: {
            src,
            autoplay,
            width,
            padding,
            gap,
        },
        setters: {
            setsrc,
            setautoplay
            , setwidth
            , setpadding
            , setgap
        },
    }
}
