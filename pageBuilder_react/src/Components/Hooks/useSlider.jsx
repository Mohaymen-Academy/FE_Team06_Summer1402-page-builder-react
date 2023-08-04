import React, { useState } from 'react'

export default function useSlider(compstates) {
    const [type, settype] = useState(compstates?.type || null);
    const [sliderimg, setsliderimg] = useState(compstates?.sliderimg || null);
    const [padding, setpadding] = useState(compstates?.padding || 10);
    const [gap, setgap] = useState(compstates?.gap || 0);
    const [slideNumber, setslideNumber] = useState(compstates?.slideNumber || 0);
    const [display, setdisplay] = useState(compstates?.display || 0);
    const [images, setimages] = useState(compstates?.images || ['images/cardType1.png','images/cardPic.avif', 'images/cardType4.png', 'images/pic.jpg',]);
    const [transition, settransition] = useState(compstates?.transition || null);
    const [widthImg, setwidthImg] = useState(compstates?.widthImg || null);
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
            widthImg,
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
            , setwidthImg
            , setradius
        }
    }
}
