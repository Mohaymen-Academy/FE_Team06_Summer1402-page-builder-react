import React, { useState } from 'react'

export default function useVideo() {
    const [autoplay, setautoplay] = useState(false);
    const [width, setwidth] = useState(null);
    const [padding, setpadding] = useState(0);
    const [gap, setgap] = useState(6);
    return {
        states: {
            autoplay,
            width,
            padding,
            gap,
        },
        setters: {
            setautoplay
            , setwidth
            , setpadding
            , setgap
        },
    }
}
