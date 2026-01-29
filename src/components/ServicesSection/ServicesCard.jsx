import styles from './services.module.css';
import { useState } from 'react';
export default function SCard ({icon,title,hoverImage,description}) {
    const [ hovered , setHovered ] = useState(false)
    const hovering = hovered? {
        transform: 'rotate(360deg)', 
        backgroundImage: `url(${hoverImage})`,
        borderRadius: '10%'}:
        {
        backgroundImage: 'linear-gradient(to top right, #93a55d, #afc56b)',
        borderRadius: '50%'
        };
    return(
        <div className= {styles.sCard} style={hovering} onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>
            {!hovered && (
            <>
                <div className= {styles.iconCircle}>{icon}</div>
                <h3>{title}</h3>
            </>
            )}
            {hovered && (
            <>
                <p>{description}</p>
            </>
            )}
        </div>
    )
}