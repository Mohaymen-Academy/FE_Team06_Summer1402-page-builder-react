import React, { useState } from 'react'

export function useButton() {
    const [size, setsize] = useState(120)
    const [width, setwidth] = useState(120)
    const [padding, setpadding] = useState(0);
    const [gap, setgap] = useState(6);
    const [radisu, setradisu] = useState(10);
    const [text, settext] = useState('zarp');
    const [textColor, settextColor] = useState('#121212');
    const [link, setlink] = useState(null);

    return {
        states: {
            size,
            width,
            padding,
            gap,
            radisu,
            text,
            textColor,
            link,
        },
        setters: {
            setsize,
            setwidth,
            setpadding,
            setgap,
            setradisu,
            settext,
            settextColor,
            setlink
        },
    };

}
