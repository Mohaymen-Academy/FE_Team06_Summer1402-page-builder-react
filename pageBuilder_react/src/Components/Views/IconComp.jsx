import React from 'react'
import { useIcon } from '../Hooks';
import { IconContext } from 'react-icons/lib';
import { FaBeer } from 'react-icons/fa';
export default function ({ parentvalues }) {
    const { states, setters } = useIcon();
    parentvalues.current.childcompsetters = setters;
    parentvalues.current.childcompvalues = states;
    return (
        <div
        className={'pointer-events-none'}
            style={{ margin: `${states.gap}px`,
            padding:`${states.padding}px` }}>
            <FaBeer
            className='pointer-events-none'
                size={states.size}
                fill={states.color} />
        </div>
    )
}