import React, { useState } from 'react'

export function useCard() {
    const [size, setsize] = useState(120)
    const [padding, setpadding] = useState(0);
    const [gap, setgap] = useState(6);
    const [radisu, setradisu] = useState(10);
    const [text, settext] = useState('');
    const [image, setimage] = useState(['images/pic.jpg','images/pic.jpg']);
    const [bgColor, setbgColor] = useState('#000000');
    const [textColor, settextColor] = useState('#121212');
    const [hasIcon, sethasIcon] = useState(false);
    const [link, setlink] = useState(null);
    return {
        states: { size, padding, gap, radisu, text, image, bgColor, textColor, hasIcon, link },
        setters: {setsize, setpadding, setgap, setradisu, settext, setimage, setbgColor, settextColor, sethasIcon, setlink}
    };

}
