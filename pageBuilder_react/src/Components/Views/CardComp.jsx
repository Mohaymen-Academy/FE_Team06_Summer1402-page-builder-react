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
            className={`flex justify-center`}
            style={{
                gap: `${states.gap}px`,
                width: `${states.size * states.width}px`,
                backgroundColor: states.bgColor,
                padding:`${states.padding}px`,
            }}>
            {states.image.map((src, index) => {
                return <img key={index} src={src}
                    style={{
                        borderRadius: `${states.radius}px`,
                    }} />
            })}
        </div>
    )
}
