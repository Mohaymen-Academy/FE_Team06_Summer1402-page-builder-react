import React from 'react'
import { useIcon } from '../Hooks';

import { IconView } from '../Views';
export default function ({ parentvalues,compstates }) {
    const { states, setters } = useIcon(compstates);
    parentvalues.current.childcompsetters = setters;
    parentvalues.current.childcompvalues = states;
    return (
        <IconView states={states} />
    )
}