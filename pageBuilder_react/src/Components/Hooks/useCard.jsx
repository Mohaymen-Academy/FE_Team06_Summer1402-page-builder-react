import React, { useState } from 'react'

export default function useCard() {
    const [align, setalign] = useState(0);
    const [type, settype] = useState(0);
    const [size, setsize] = useState(120)
    const [width, setwidth] = useState(120)
    const [padding, setpadding] = useState(0);
    const [gap, setgap] = useState(6);
    const [radius, setradius] = useState(10);
    const [text, settext] = useState('');
    const [image, setimage] = useState(['images/pic.jpg', 'images/pic.jpg']);
    const [bgColor, setbgColor] = useState('#000000');
    const [textColor, settextColor] = useState('#121212');
    const [textAlign, settextAlign] = useState(null);
    const [hasIcon, sethasIcon] = useState(false);
    const [link, setlink] = useState(null);

    return {
        states: { width, raduis, textAlign, align, size, padding, gap, radius, text, image, bgColor, textColor, hasIcon, link, type },
        setters: { setwidth, settextAlign, setradius, setalign, setsize, setpadding, setgap, settext, setimage, setbgColor, settextColor, sethasIcon, setlink, settype }
    };

}
