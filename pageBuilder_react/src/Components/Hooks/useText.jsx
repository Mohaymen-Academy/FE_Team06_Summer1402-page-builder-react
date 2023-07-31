import React, { useState } from 'react'

export default function useText() {
    const [fonttype, setfonttype] = useState(null);
    const [fontfamliy, setfontfamliy] = useState(null);
    const [text, settext] = useState('');
    const [textColor, settextColor] = useState('#121212');
    const [hasIcon, sethasIcon] = useState(false);
    const [link, setlink] = useState(null);
    const [type, settype] = useState(0);
    const [fontsize, setfontsize] = useState(null)
    const [lineHeight, setlineHeight] = useState(null)
    return {
        states: { align, size, padding, gap, radisu, text, image, bgColor, textColor, hasIcon, link, type },
        setters: { setalign, setsize, setpadding, setgap, setradisu, settext, setimage, setbgColor, settextColor, sethasIcon, setlink, settype }
    };


}
