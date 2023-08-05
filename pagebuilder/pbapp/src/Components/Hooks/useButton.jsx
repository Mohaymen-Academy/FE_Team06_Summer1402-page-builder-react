import React, { useState } from 'react'

export default function useButton(compstates) {
    const [align, setalign] = useState(compstates?.align || 0);
    const [size, setsize] = useState(compstates?.size || 1);
    const [width, setwidth] = useState(compstates?.width || 60);
    const [padding, setpadding] = useState(compstates?.padding || 10);
    const [gap, setgap] = useState(compstates?.gap || 6);
    const [radisu, setradius] = useState(compstates?.radisu || 10);
    const [text, settext] = useState(compstates?.text || 'لورم ');
    const [textColor, settextColor] = useState(compstates?.textColor || '#FA0A0A');
    const [bgcolor, setbgcolor] = useState(compstates?.bgcolor || '#fff142');
    const [link, setlink] = useState(compstates?.link || null);
    const [textAlign, settextAlign] = useState(compstates?.textAlign || 'center');
    const [hasIcon, sethasIcon] = useState(compstates?.hasIcon || '');
    const [isItalic, setisItalic] = useState(compstates?.isItalic || false);
    const [isbold, setIsBold] = useState(compstates?.isbold || false);
    return {
        states:
        {
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
