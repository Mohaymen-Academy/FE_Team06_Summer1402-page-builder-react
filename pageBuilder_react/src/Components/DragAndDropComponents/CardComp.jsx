import React, { useContext, useEffect } from 'react'
import { useCard } from '../Hooks/useCard';
import { ElementsContext } from '../Layout';
export default function CardComp({ ischoosen }) {
    const { states, setters } = useCard();
    const layoutelements = useContext(ElementsContext);
    useEffect(() => {
        if (ischoosen) {
            console.log(ischoosen)
            layoutelements.current.setters = setters;
        }
    }, []);
    return (
        <div
            className={`flex  w-[100px] h-[100px] justify-center`} style={{ gap: states.gap }}>
            {states.image.map((src, index) => {
                return <img key={index} src={src} style={{ borderRadius: `${states.radisu}px` }} />
            })}
        </div>
    )
}
