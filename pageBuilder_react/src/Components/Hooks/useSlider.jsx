import React, { useState } from 'react'

export default function useSlider() {
    const [type, settype] = useState(null);
    const [sliderimg, setsliderimg] = useState(null);
    const [padding, setpadding] = useState(0);
    const [gap, setgap] = useState(null);
    const [slideNumber, setslideNumber] = useState(0);
    const [display, setdisplay] = useState(0);
    const [images, setimages] = useState(['images/cardType1.png','images/cardType4.png','images/pic.jpg',]);
    const [transition, settransition] = useState(null);
    const [widthImg, setwidthImg] = useState(null);
    const [radius, setradius] = useState(null);
    const [align, setalign] = useState(0);

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
