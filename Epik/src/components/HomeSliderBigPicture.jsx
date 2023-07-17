import React from 'react'
import '../assets/styles/homeslider.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
export default function HomeSliderBigPicture({ image, desc, isFree }) {
    return (
        <div>
        <div
            className='BigImage'
            style={{ 
                backgroundImage: `url(${image})`,
                backgroundPosition: 'center center',
                backgroundSize: '1000px 500px'
            }}
        >
                <div
                    className='container'
                    >
                    {
                        isFree ?
                            <h5>
                                Now is free to play
                            </h5> : <></>
                    }
                    <p >
                        {desc}
                    </p>
                    <div
                        style={{ display: 'flex' }}>
                        {isFree ?
                            <div>

                                <h5>
                                    Free

                                </h5>
                                <div
                                    style={{ display: 'flex' }}>
                                    <button
                                        className='playButton'>Play For Free</button>
                                    <button className='whishButton'> <i>
                                        <AddCircleOutlineIcon />
                                    </i>
                                        add to Washlist
                                    </button>
                                    {/* </div> */}
                                </div>
                            </div>
                            :
                            <>
                                <button className='whishButton'> <i>
                                    <AddCircleOutlineIcon />
                                </i>
                                    add to Washlist
                                </button>

                            </>}
                    </div>
                </div>
            </div>
        </div>
    )
}
