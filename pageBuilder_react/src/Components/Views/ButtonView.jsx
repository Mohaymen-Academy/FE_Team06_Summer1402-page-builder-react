import React from 'react'
export default function ButtonView({ states }) {
    return (
        <div
            className='pointer-events-none'>
            <button
                className={`flex flex-row items-center gap-[5px] pointer-events-none ${states.isItalic ? 'underline' : ''}`}
                style={{
                    backgroundColor: states.bgcolor,
                    borderRadius: `${states.radisu}px`,
                    width: `${states.size * states.width}px`,
                    color: states.textColor,
                    padding: `${states.padding}px`,
                    margin: `${states.gap}px`,
                    fontWeight: states.isbold ? 'bold' : '',
                    justifyContent: states.textAlign,
                }}>
                {states.hasIcon ?
                    <img
                        className={'pointer-events-none'}
                        src={states.hasIcon}
                        width={'20px'}
                        height={'20px'}
                    /> : <></>}
                {states.text}
            </button>

        </div>
    )
}
