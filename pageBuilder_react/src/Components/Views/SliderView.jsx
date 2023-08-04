import React, { useEffect, useState } from 'react'
import BigSlider from '../../utility/BigSlider';


export default function SliderView({ states }) {
    const [left, setleft] = useState(0);
    useEffect(() => {
        const interval = setInterval(changeleft, 3000);

        return () => clearInterval(interval);
    }, []);
    function changeleft() {
        setleft(prevstate => prevstate + -325 < -((states.images.length - 1) * 325) ? 0 : (prevstate + -325))
    }
    console.log(left)
    return (
        <div
            className='overflow-hidden'
            draggable={'false'}>
            <div
                style={{
                    left: `${left}px`,
                    padding:`${states.padding}px`,
                    margin:`${states.margin}px`,

                }}
                className={`items w-[${states.images.length}00%] h-[205px] relative top-0 flex gap-3 float-left justify-center ${left > -1000 ? 'transition-all duration-100' : ''}`}
            >
                {
                    states.images.map((item, index) => {
                        console.log(item)
                        return <img
                            key={index}
                            style={{ borderRadius: `${states.radius}px` }}
                            className={`w-[${100 / states.images.length}%] h-[100%]`}
                            src={item}
                            alt=""
                        />
                    }
                    )
                }
                {/* <img
                    className="w-[25%] h-[100%]"
                    src={states.images[1]}
                    style={{
                        borderRadius: `${states.radius}px`
                    }}
                    alt=""
                />
                <img
                    className="w-[25%] h-[100%]"
                    style={{
                        borderRadius: `${states.radius}px`
                    }}
                    src={states.images[2]}
                    alt=""
                />
                <img
                    className="w-[25%] h-[100%]"
                    src={states.images[0]}
                    alt=""
                /> */}
            </div>
        </ div >
    )
}
