import React, { useState } from 'react'

export default function useText() {
    const [tagtype, settagtype] = useState(1);
    const [fontfamliy, setfontfamliy] = useState(1);
    const [title, settitle] = useState(null);
    const [text, settext] = useState("            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quam nesciunt asperiores sed corporis perspiciatis numquam iusto harum placeat quos mollitia atque amet, alias similique adipisci voluptates. Neque, mollitia facilis.");
    const [textColor, settextColor] = useState('#121212');
    const [padding, setpadding] = useState(0);
    const [gap, setgap] = useState(6);
    const [link, setlink] = useState('google.com');
    const [fontsize, setfontsize] = useState(10);
    const [lineHeight, setlineHeight] = useState(1.5);
    const [textAlign, settextAlign] = useState('center');
    const [align, setalign] = useState(0);
    const [isItalic, setisItalic] = useState(false);
    const [isbold,   setIsBold] = useState(false);
    return {
        states: {
            isItalic,
            isbold,
            align, title, textAlign, tagtype, fontfamliy, text, textColor, padding, gap, link, fontsize, lineHeight,
        },
        setters: {
            setisItalic,
            setIsBold,
            setalign, settitle, settextAlign, settagtype, setfontfamliy, settext, settextColor, setpadding, setgap, setlink, setfontsize, setlineHeight
        }
    };


}
