import React from 'react'
import Card from '../../utility/Card';
export default function CardView({ states }) {
    return (
        <div
            // onClick={handleClick}
            className={`flex justify-center pointer-events-none`}
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
                    return <Card key={index} imgsrc={'images/cardType1.png'} type={states.type} text={states.text} />
                })
            }
        </div>
    )
}
