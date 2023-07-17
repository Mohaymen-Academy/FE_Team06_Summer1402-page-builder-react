import React from 'react'
import { TestCards } from '.'
import "../assets/styles/testcard.css"
export default function Testimonials() {
    return (
        <div>

        <h1
        style={{color:'white',marginLeft:'120px'}}
        >Testimonials</h1>
        <div
        className='TestomContainer'>
            <TestCards />
            <TestCards />
            <TestCards />
        </div>
            </div>
    )
}
