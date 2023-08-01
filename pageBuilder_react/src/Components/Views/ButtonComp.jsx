import React from 'react'
import { useButton } from '../Hooks'
export default function ButtonComp({ parentvalues }) {
    const { states, setters } = useButton();
    parentvalues.current.childcompsetters = setters;
    parentvalues.current.childcompvalues = states;
    console.log(states)
    return (
        <div>
            <button
                className='flex flex-row
            items-center gap-[5px]'
                style={{
                    backgroundColor: states.bgcolor,
                    borderRadius: `${states.radisu}px`,
                    width: `${states.size * states.width}px`,
                    color: states.textColor,
                    // backgroundColor: states.bgcolor,
                    padding: `${states.padding}px`,

                    // fontSize:states.fontSize
                }}>
                {states.hasIcon ? <img src={states.hasIcon}
                    width={'20px'}
                    height={'20px'}
                /> : <></>}
                {states.text}
            </button>

        </div>
    )
}
