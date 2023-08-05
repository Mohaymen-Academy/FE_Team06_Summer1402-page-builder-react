import React, { useState } from 'react'

export default function useSlider(compstates) {
    const [type, settype] = useState(compstates?.type || 1);
    const [sliderimg, setsliderimg] = useState(compstates?.sliderimg || null);
    const [padding, setpadding] = useState(compstates?.padding || 10);
    const [gap, setgap] = useState(compstates?.gap || 0);
    const [slideNumber, setslideNumber] = useState(compstates?.slideNumber || 0);
    const [display, setdisplay] = useState(compstates?.display || 0);
    const [images, setimages] = useState(compstates?.images || ['images/cardType1.png', 'images/cardPic.avif', 'images/cardType4.png', 'images/pic.jpg',]);
    const [transition, settransition] = useState(compstates?.transition || -1);
    const [width, setwidth] = useState(compstates?.widthImg || 300);
    const [radius, setradius] = useState(compstates?.radius || 5);
    const [align, setalign] = useState(compstates?.align || 0);

    return {
        states: {
            align,
            type,
            sliderimg,
            padding,
            gap,
            slideNumber,
            display,
            images,
            transition,
            width,
            radius,
        },
        setters: {
            settype
            , setalign
            , setsliderimg
            , setpadding
            , setgap
            , setslideNumber
            , setdisplay
            , setimages
            , settransition
            , setwidth
            , setradius
        }
    }
}
