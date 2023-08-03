import React, { useEffect, useState } from 'react'
import BigSlider from '../../utility/BigSlider';


export default function SliderView({ states }) {
    const [left, setleft] = useState(0);
    useEffect(() => {
        const interval = setInterval(changeleft, 3000);

        return () => clearInterval(interval);
    }, []);
    function changeleft() {
        // let newleft = prevstate + -325 < -1000 ? -325 : (prevstate + -325);
        setleft(prevstate => prevstate + -325 < -1300 ? 0 : (prevstate + -325))
    }
    console.log(left)
    return (
        <div
            className='overflow-hidden'
            draggable={'false'}>
            <div
                style={{ left: `${left}px` }}
                className={`items w-[400%] h-[205px] relative top-0 flex gap-3 float-left justify-center ${left >-1000 ? 'transition-all duration-100' : ''}`}>
                <img
                    className="w-[25%] h-[100%]"
                    src={states.images[0]}
                    alt=""
                />
                <img
                    className="w-[25%] h-[100%]"
                    src={states.images[1]}
                    alt=""
                />
                <img
                    className="w-[25%] h-[100%]"
                    src={states.images[2]}
                    alt=""
                />
                <img
                    className="w-[25%] h-[100%]"
                    src={states.images[0]}
                    alt=""
                />
            </div>
        </ div >
    )
}
