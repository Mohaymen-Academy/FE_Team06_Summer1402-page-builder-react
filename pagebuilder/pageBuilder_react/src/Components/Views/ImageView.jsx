import React from 'react'
export default function ImageView({ states }) {
    return (
        <div
            className='pointer-events-none'>
            <img
                className='pointer-events-none'
                style={{
                    borderRadius: `${states.radisu}px`,
                    width: `${states.width}px`,
                    margin: `${states.gap}px`,
                    padding: `${states.padding}px`,
                }}
                src={states.image}
                alt="" />

        </div>
    )
}
