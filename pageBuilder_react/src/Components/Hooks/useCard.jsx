import React, { useState } from 'react'

export default function useCard() {
    const [align, setalign] = useState(1);
    const [type, settype] = useState(1);
    const [size, setsize] = useState(1)
    const [width, setwidth] = useState(80);
    const [padding, setpadding] = useState(0);
    const [gap, setgap] = useState(5);
    const [radius, setradius] = useState(0);
    const [text, settext] = useState('گل');
    const [image, setimage] = useState(['images/cardPic.avif']);
    const [bgColor, setbgColor] = useState('#fff000');
    const [textColor, settextColor] = useState('#ffffff');
    const [textAlign, settextAlign] = useState('right');
    const [hasIcon, sethasIcon] = useState(true);
    const [link, setlink] = useState('');
    const [isItalic, setisItalic] = useState(false);
    const [isbold, setIsBold] = useState(false);
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
