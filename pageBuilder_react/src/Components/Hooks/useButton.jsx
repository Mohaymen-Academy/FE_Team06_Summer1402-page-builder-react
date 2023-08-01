import React, { useState } from 'react'

export default function useButton() {
    const [align, setalign] = useState(0);

    const [size, setsize] = useState(60)
    const [width, setwidth] = useState(1)
    const [padding, setpadding] = useState(10);
    const [gap, setgap] = useState(6);
    const [radisu, setradius] = useState(10);
    const [text, settext] = useState('لورم ');
    const [textColor, settextColor] = useState('#FA0A0A');
    const [bgcolor, setbgcolor] = useState('#fff142');
    const [link, setlink] = useState(null);
    const [textAlign, settextAlign] = useState(0);
    const [hasIcon, sethasIcon] = useState(false);


    return {
        states: {
            align,
            bgcolor,
            size,
            width,
            padding,
            gap,
            radisu,
            text,
            textColor,
            link,
            textAlign,
            hasIcon
        },
        setters: {
            setalign,
            setbgcolor,
            setsize,
            setwidth,
            setpadding,
            setgap,
            setradius,
            settext,
            settextColor,
            setlink,
            settextAlign,
            sethasIcon
        },
    };

}
