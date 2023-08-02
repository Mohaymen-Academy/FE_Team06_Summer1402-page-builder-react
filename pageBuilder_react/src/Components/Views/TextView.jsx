import React from 'react'
export default function TextView({ states }) {
    return (
        <div
            className='pointer-events-none'
            style={{
                gap: states.gap,
                lineHeight: states.lineHeight,
                color: states.textColor,
                textAlign: states.textAlign,
            }}>
            {
                states.link ?
                    <a
                        className='pointer-events-none'
                        href={states.link}>
                        {states.text}
                    </a> : states.text
            }
        </div>
    )
}
