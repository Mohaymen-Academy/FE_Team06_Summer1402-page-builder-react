import React, { useState } from 'react'

export default function useText() {
    const [fonttype, setfonttype] = useState(null);
    const [fontfamliy, setfontfamliy] = useState(null);
    const [text, settext] = useState('');
    const [textColor, settextColor] = useState('#121212');
    const [padding, setpadding] = useState(0);
    const [gap, setgap] = useState(6);
    const [link, setlink] = useState(null);
    const [fontsize, setfontsize] = useState(null)
    const [lineHeight, setlineHeight] = useState(null)
    return {
        states: {
            fonttype,
            fontfamliy,
            text,
            textColor,
            padding,
            gap,
            link,
            fontsize,
            lineHeight,
        },
        setters: {
            setfonttype,
            setfontfamliy,
            settext,
            settextColor,
            setpadding,
            setgap,
            setlink,
            setfontsize,
            setlineHeight
        }
    };


}
