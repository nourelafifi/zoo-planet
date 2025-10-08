import styles from './services.module.css'
import { useState } from 'react'
export default function SCard ({icon,title,hoverImage,description}) {
    const [ hovered , setHovered ] = useState(false)
    const handleToggle = () => setHovered(!hovered);
    return (
        <div className= {styles.sCard} style={{ "--hover-img": `url(${hoverImage})` }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={handleToggle}>
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