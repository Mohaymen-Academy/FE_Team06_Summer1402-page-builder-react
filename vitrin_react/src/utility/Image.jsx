import React, { useRef, useContext, useEffect } from 'react'
import LayoutOjb from '../components/Layout/Layout';
export default function Image({ classes, src }) {
    const {_,IntersectionContext}=LayoutOjb;
    const imageRef = useRef(null);
    const intersectionObserver = useContext(IntersectionContext);
    useEffect(() => {
        if (intersectionObserver) {
            intersectionObserver.observe(imageRef.current);
        }
        return () => {
            if (intersectionObserver) {
                intersectionObserver.unobserve(imageRef.current);
            }
        };
    }, [intersectionObserver]);
    return (
        <img ref={imageRef} className={`${classes}`} data-src={`${src}`} alt="" />
    )
}
