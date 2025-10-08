import styles from './curousel.module.css'
import { useEffect } from 'react'
export default function Curousel( {index , setIndex , images , setFade}) {
    useEffect(()=>{
        const fadeTimer = setTimeout(() => {
            setFade(false);
        }, 19000);
        const switchTimer = setTimeout(() => {
            setIndex((prev) => (prev + 1) % images.length);
            setFade(true);
        }, 20000);
    return () => {
        clearTimeout(fadeTimer);
        clearTimeout(switchTimer);
    };
    }, [index, images.length])
    return (
        <>
        <div className= {styles.carousel}>
            <div className= {styles.carouselTrack} style={{transform: `translateX(-${index * 100}%)`}}>
                {images.map((src, i) => (<img key={i} src={src} alt={`slide-${i}`} />))}
            </div>
        </div>
        </>
    )
}