import React from 'react'
import { useImage } from '../Hooks'
import { ImageView } from '../Views';
export default function ImageComp({ parentvalues }) {
    const { states, setters } = useImage();
    parentvalues.current.childcompsetters = setters;
    parentvalues.current.childcompvalues = states;
    return (
        <ImageView states={states}/>
    )
}
