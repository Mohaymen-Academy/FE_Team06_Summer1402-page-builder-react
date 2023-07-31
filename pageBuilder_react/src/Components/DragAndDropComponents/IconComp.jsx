import React from 'react'
import { useIcon } from '../Hooks';

export default function ({ parentvalues }) {
    const { states, setters } = useIcon();
    parentvalues.current.childcompsetters = setters;
    parentvalues.current.childcompvalues = states;
    return (
        <div>
        </div>
    )
}