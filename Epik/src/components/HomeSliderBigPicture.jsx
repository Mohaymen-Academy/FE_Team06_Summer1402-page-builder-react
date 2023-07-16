import React from 'react'
import '../assets/styles/homeslider.css';
export default function HomeSliderBigPicture({ image, desc, isFree }) {
    return (
        <div>
            <div
                className={'BigImage'}
                style={{ background: `url(${image})` }}>
                <div
                    className='container'>
                    <p >
                        {desc}
                    </p>
                    <div
                        style={{ display: 'flex' }}>
                        {isFree ?
                            <button
                                className='playButton'>Play For Free</button> : <></>}
                        <div>
                            <button className='whishButton'>add to Washlist</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
