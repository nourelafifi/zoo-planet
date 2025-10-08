import { useEffect } from 'react'
import styles from './team.module.css'
export default function StaffCard({staff , index , setIndex}) {
    useEffect(()=>{
        const interval= setInterval(()=> {
            setIndex((index)=> (index + 1) %staff.length)
        },9000)
        return () => clearInterval(interval);
    }, [index])
    return (
        <>
            <div className= {styles.carousel}>
                <div className= {styles.carouselTrack} style={{transform: `translateY(-${index * 100}%)`}}>
                    {staff.map((member)=> (<img key={member.id} src={member.picture} alt={member.name}/>))}
                </div>
            </div>
        </>
    )
}