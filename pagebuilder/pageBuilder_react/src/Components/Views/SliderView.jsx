import React, { useEffect, useState } from 'react'
import BigSlider from '../../utility/BigSlider';


export default function SliderView({ states }) {
    const [left, setleft] = useState(states.transition * states.width);
    console.log('zarp 0', left)
    useEffect(() => {
        let interval = setInterval(changeleft, 3000);
        setleft(0)
        return () => clearInterval(interval);
    }, [states.type]);

    // useEffect(() => {
    //     clearInterval(interval);
    //     console.log('ewpor 2', states.type)
    //     setleft(0);
    //     interval = setInterval(changeleft, 3000);
    // }, [
    //     states.type
    // ]);

    function changeleft() {
        if (states.type == 1) {
            setleft(prevstate => prevstate + (states.transition * states.width) <= states.transition * ((states.images.length) * states.width) ? 0 : (prevstate + states.transition * (states.width)))
        }
        else
            setleft(prevstate => prevstate + states.transition * states.width / 3 < states.transition * ((states.images.length-2) * states.width / 3) ? 0 : (prevstate + states.transition * (states.width / 3 + 20)));
    }
    console.log(left)
    return (
        <div
            className='overflow-hidden'
            draggable={'false'}>
            <div
                style={{
                    left: `${left}px`,
                    padding: `${states.padding}px`,
                    margin: `${states.margin}px`,
                    gap: `${states.gap}px`,
                }}
                className={`items w-[${states.images.length}00%] h-[205px] relative top-0 flex gap-3 float-left justify-center ${left > -1000 ? 'transition-all duration-100' : ''}`}
            >
                {
                    states.images.map((item, index) => {
                        return <img
                            key={index}
                            style={{
                                borderRadius: `${states.radius}px`,
                                width: `${states.type == 1 ? `${states.width}px` : `${states.width / 3}px`}`,
                                maxWidth: '450px'
                            }}
                            className={`h-[100%]`}
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
