import React, { useState } from 'react'

export default function useImage(compstates) {
    const [image, setimage] = useState(compstates?.image || 'images/pic.jpg');
    const [width, setwidth] = useState(compstates?.width || 100);
    const [align, setalign] = useState(compstates?.align || 0);
    const [padding, setpadding] = useState(compstates?.padding || 0);
    const [gap, setgap] = useState(compstates?.gap || 0); // this is margin
    const [radisu, setradisu] = useState(compstates?.radisu || 10);

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
