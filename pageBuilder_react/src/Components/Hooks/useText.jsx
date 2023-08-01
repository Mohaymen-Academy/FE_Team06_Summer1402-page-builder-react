import React, { useState } from 'react'

export default function useText() {
    const [fonttype, setfonttype] = useState(null);
    const [fontfamliy, setfontfamliy] = useState(null);
    const [title, settitle] = useState(null);
    const [text, settext] = useState("            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quam nesciunt asperiores sed corporis perspiciatis numquam iusto harum placeat quos mollitia atque amet, alias similique adipisci voluptates. Neque, mollitia facilis.");
    const [textColor, settextColor] = useState('#121212');
    const [padding, setpadding] = useState(0);
    const [gap, setgap] = useState(6);
    const [link, setlink] = useState('https://google.com/');
    const [fontsize, setfontsize] = useState(null);
    const [lineHeight, setlineHeight] = useState(null);
    const [textAlign, settextAlign] = useState('end');
    const [align, setalign] = useState(0);

    return {
        states: {
            align,
            title,
            textAlign,
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
            setalign,
            settitle,
            settextAlign,
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
