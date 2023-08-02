import React from 'react'
import { useCard } from '../Hooks';
import Card from '../../utility/Card';
import { CardView } from '../Views';
export default function CardComp({ parentvalues }) {
    const { states, setters } = useCard();
    parentvalues.current.childcompsetters = setters;
    parentvalues.current.childcompvalues = states;
    return (
        <CardView states={states} />
    )
}
