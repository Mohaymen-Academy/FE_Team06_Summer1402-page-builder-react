import React from 'react'
import { useCard } from '../Hooks';
import Card from '../../utility/Card';
export default function CardComp({ parentvalues }) {
    const { states, setters } = useCard();
    parentvalues.current.childcompsetters = setters;
    parentvalues.current.childcompvalues = states;
    return (
        <div
            // onClick={handleClick}
            className={`flex justify-center`}
            style={{
                color: states.textColor,
                gap: `${states.gap}px`,
                width: `${states.size * states.width}px`,
                // backgroundColor: states.bgColor,
                padding: `${states.padding}px`,
                // borderRadius: `${states.radius}px`,
            }}>
            {
                states.image.map((src, index) => {
                    // return <img key={index} src={src}
                    //     style={{
                    //         borderRadius: `${states.radius}px`,
                    //     }} />
                    return <Card imgsrc={'images/cardType1.png'} type={states.type} text={states.text} />
                })
            }
        </div>
    )
}
