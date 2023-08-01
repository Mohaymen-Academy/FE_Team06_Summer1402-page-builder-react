import React from 'react'
import { useButton } from '../Hooks'
export default function ButtonComp({ parentvalues }) {
    const { states, setters } = useButton();
    parentvalues.current.childcompsetters = setters;
    parentvalues.current.childcompvalues = states;
    // console.log(states)
    return (
        <div
            className='pointer-events-none'>
            <button
                className='flex flex-row
            items-center gap-[5px]
            pointer-events-none'
                style={{
                    backgroundColor: states.bgcolor,
                    borderRadius: `${states.radisu}px`,
                    width: `${states.size * states.width}px`,
                    color: states.textColor,
                    padding: `${states.padding}px`,
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
