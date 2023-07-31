import React from 'react'
import { useCard } from '../Hooks';
export default function CardComp({ parentvalues }) {
    const { states, setters } = useCard();
    parentvalues.current.childcompsetters = setters;
    parentvalues.current.childcompvalues = states;
    console.log(states.gap)
    return (
        <div
            // onClick={handleClick}
            className={`flex  w-[100px] h-[100px] justify-center`} style={{ gap: `${states.gap }px`}}>
            {states.image.map((src, index) => {
                return <img key={index} src={src} style={{ borderRadius: `${states.radius}px` }} />
            })}
        </div>
    )
}
