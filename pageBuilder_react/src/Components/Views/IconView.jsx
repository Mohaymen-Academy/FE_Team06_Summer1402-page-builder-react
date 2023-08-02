import React, { createElement } from 'react'
// import { FaBeer, FaFreeCodeCamp } from 'react-icons/fa';
import { Icons } from '../../utility/Icons';
export default function IconView({ states }) {
    let Icon = null;
    if (states.icon != null) {
        Icon = createElement(states.icon.type, {
            color: states.color,
            size: `${states.size}px`
        })
    }
    return (
        <div
            className={'pointer-events-none'}
            style={{
                margin: `${states.gap}px`,
                padding: `${states.padding}px`
            }}>
            {Icon ? Icon : <FaFreeCodeCamp />}
        </div>
    )
}