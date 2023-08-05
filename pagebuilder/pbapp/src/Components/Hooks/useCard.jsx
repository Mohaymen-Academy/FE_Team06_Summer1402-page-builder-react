import React, { useState } from 'react'

export default function useCard(compstates) {
    const [align, setalign] = useState(compstates?.align || 1);
    const [type, settype] = useState(compstates?.type || 1);
    const [size, setsize] = useState(compstates?.size || 1)
    const [width, setwidth] = useState(compstates?.width || 80);
    const [padding, setpadding] = useState(compstates?.padding || 0);
    const [gap, setgap] = useState(compstates?.gap || 5);
    const [radius, setradius] = useState(compstates?.radius || 0);
    const [text, settext] = useState(compstates?.text || 'گل');
    const [image, setimage] = useState(compstates?.image || ['images/cardPic.avif']);
    const [bgColor, setbgColor] = useState(compstates?.bgColor || '#fff000');
    const [textColor, settextColor] = useState(compstates?.textColor || '#ffffff');
    const [textAlign, settextAlign] = useState(compstates?.textAlign || 'right');
    const [hasIcon, sethasIcon] = useState(compstates?.hasIcon || true);
    const [link, setlink] = useState(compstates?.link || '');
    const [isItalic, setisItalic] = useState(compstates?.isItalic || false);
    const [isbold, setIsBold] = useState(compstates?.isbold || false);
    return {
        states: {
            isItalic,
            isbold, width, radius, textAlign, align, size, padding, gap, radius, text, image, bgColor, textColor, hasIcon, link, type
        },
        setters: {
            setisItalic
            , setIsBold,
            setwidth, settextAlign, setradius, setalign, setsize, setpadding, setgap, settext, setimage, setbgColor, settextColor, sethasIcon, setlink, settype
        }
    };

}
