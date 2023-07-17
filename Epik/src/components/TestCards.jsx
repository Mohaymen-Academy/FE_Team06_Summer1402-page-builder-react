import React from 'react'
import "../assets/styles/testcard.css"
export default function TestCards({ stars, title, desc, name }) {
    return (
        <div
            >
            <div className='testcard'>

                <div className='stars'>
                    {
                        [...Array(5)].map((star, index) => <span key={index} className="star"> &#9733;</span>)
                    }
                </div>
                {/* <div */}
                <h3

                    className='titleTest'
                >
                    This is a title
                </h3>
                {/* </div> */}
                {/* <div */}
                <p
                    className='desctiption'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nostrum obcaecati laborum architecto voluptate commodi, reprehenderit voluptatem, dolores inventore ratione accusantium magnam est suscipit? Iusto quasi repudiandae minus labore sequi.</p>
                {/* </div> */}
            </div>
            <div
                className='blueshape'>

            </div>
        </div>
    )
}
