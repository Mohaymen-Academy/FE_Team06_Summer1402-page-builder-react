import React, { useState } from 'react'

export default function useImage() {
    const [image, setimage] = useState('images/pic.jpg'
    );
    const [width, setwidth] = useState(20);
    const [align,setalign] = useState(0);
    const [padding, setpadding] = useState(0);
    const [gap, setgap] = useState(26); // this is margin
    const [radisu, setradisu] = useState(10);
    
    return {
        states: {
            image,
            align,
            width,
            padding,
            gap,
            radisu,
        },
        setters: {
            setimage,
            setalign,
            setwidth,
            setpadding,
            setgap,
            setradisu
        }
    }
}
