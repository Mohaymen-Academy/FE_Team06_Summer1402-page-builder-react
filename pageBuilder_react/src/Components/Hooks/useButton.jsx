import React, { useState } from 'react'

export default function useButton() {
    const [size, setsize] = useState(120)
    const [width, setwidth] = useState(120)
    const [padding, setpadding] = useState(10);
    const [gap, setgap] = useState(6);
    const [radisu, setradisu] = useState(10);
    const [text, settext] = useState('لورم ایپسام');
    const [textColor, settextColor] = useState('#FA0A0A');
    const [bgcolor, setbgcolor] = useState('#fff142');
    const [link, setlink] = useState(null);

    return {
        states: {
            bgcolor,
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
            setbgcolor,
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
