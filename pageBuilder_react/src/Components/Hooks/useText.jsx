import React, { useState } from 'react'

export default function useText(compstates) {
    const [tagtype, settagtype] = useState(compstates?.tagtype || 1);
    const [fontfamliy, setfontfamliy] = useState(compstates?.fontfamliy || 1);
    const [title, settitle] = useState(compstates?.title || null);
    const [text, settext] = useState(compstates?.text || "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quam nesciunt asperiores sed corporis perspiciatis numquam iusto harum placeat quos mollitia atque amet, alias similique adipisci voluptates. Neque, mollitia facilis.");
    const [textColor, settextColor] = useState(compstates?.textColor || '#121212');
    const [padding, setpadding] = useState(compstates?.padding || 0);
    const [gap, setgap] = useState(compstates?.gap || 6);
    const [link, setlink] = useState(compstates?.link || 'google.com');
    const [fontsize, setfontsize] = useState(compstates?.fontsize || 10);
    const [lineHeight, setlineHeight] = useState(compstates?.lineHeight || 1.5);
    const [textAlign, settextAlign] = useState(compstates?.textAlign || 'center');
    const [align, setalign] = useState(compstates?.align || 0);
    const [isItalic, setisItalic] = useState(compstates?.isItalic || false);
    const [isbold, setIsBold] = useState(compstates?.isbold || false);
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
