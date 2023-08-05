import React from 'react'
import Card from '../../utility/Card';
export default function CardView({ states }) {
    return (
        <div
            // onClick={handleClick}
            className={`flex justify-center pointer-events-none w-[60%]`}
            style={{
                color: states.textColor,
                gap: `${states.gap}px`,
                width: `${states.size * states.width}px`,
                // padding: `${states.padding}px`,
                textDecoration: states.isItalic ? 'underline' : '',
                fontWeight: states.isbold ? 'bold' : '',
            }}>
            {
                states.image.map((src, index) => {
                    return <Card key={index} borderRadius={states.radius} bgcolor={states.bgColor}  imgsrc={src} type={states.type} text={states.text} link={states.link} width={states.width} size={states.size} padding={states.padding} margin={states.gap} textAlign={states.textAlign} isbold ={states.isbold} isunderline={states.isItalic} />
                })
            }
        </div>
    )
}
