import React from 'react'
import { useCard } from '../Hooks/useCard';
export default function CardComp({ parentvalues}) {
    const { states, setters } = useCard();
    parentvalues.current.childcompsetters = setters;
    parentvalues.current.childcompvalues= states;
    return (
        <div 
        // onClick={handleClick}
            className={`flex  w-[100px] h-[100px] justify-center`} style={{ gap: states.gap }}>
            {states.image.map((src, index) => {
                return <img key={index} src={src} style={{ borderRadius: `${states.radisu}px` }} />
            })}
        </div>
    )
}
