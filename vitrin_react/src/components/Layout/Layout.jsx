import React,{useRef,useEffect} from 'react'
import Header from './Header'
import Footer from './Footer'
export default function Layout({ children }) {
    const observer = useRef(null);
    const divRef = useRef(null);
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        }
        const handleIntersect = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const targetImage = entry.target;
                    // console.log(targetImage.classList)
                    targetImage.classList.remove('animate-skeleton-loading')
                    targetImage.src=targetImage.dataset.src
                }
            });
        }
        observer.current = new IntersectionObserver(handleIntersect, options);
        const images = divRef.current.querySelectorAll('img');
        images.forEach((img) => {
            observer.current.observe(img);
        })
        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        }


    }, []);
    return (
        <div
        ref={divRef}>
            <Header/>
                {children}
            <Footer/>
        </div>
    )
}
