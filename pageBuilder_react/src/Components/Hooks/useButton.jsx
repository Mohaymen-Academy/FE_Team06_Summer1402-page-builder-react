import React, { useState } from 'react'

export default function useButton() {
    const [align, setalign] = useState(0);

    const [size, setsize] = useState(1)
    const [width, setwidth] = useState(60)
    const [padding, setpadding] = useState(10);
    const [gap, setgap] = useState(6);
    const [radisu, setradius] = useState(10);
    const [text, settext] = useState('لورم ');
    const [textColor, settextColor] = useState('#FA0A0A');
    const [bgcolor, setbgcolor] = useState('#fff142');
    const [link, setlink] = useState(null);
    const [textAlign, settextAlign] = useState('center');
    const [hasIcon, sethasIcon] = useState('');
    const [isItalic, setisItalic] = useState(false);
    const [isbold,   setIsBold] = useState(false);
    return {
        states: {
            isItalic,
            isbold,
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
            setisItalic,
            setIsBold,
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
