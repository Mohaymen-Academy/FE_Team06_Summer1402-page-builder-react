import React, { useState } from 'react'

export default function useImage() {
    const [image, setimage] = useState(null);
    const [width, setwidth] = useState(null);
    const [padding, setpadding] = useState(0);
    const [gap, setgap] = useState(6);
    const [radisu, setradisu] = useState(10);
    return {
        states: {
            image,
            width,
            padding,
            gap,
            radisu,
        },
        setters: {
            setimage,
            setwidth,
            setpadding,
            setgap,
            setradisu
        }
    }
}
