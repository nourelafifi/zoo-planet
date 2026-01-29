import { useEffect } from 'react'
import styles from './team.module.css'
export default function StaffCard({staff , index , setIndex}) {
    useEffect(()=>{
        const interval= setInterval(()=> {
            setIndex((index)=> (index + 1) %staff.length)
        },9000)
        return () => clearInterval(interval);
    }, [index])
    const firstmember = staff[0]
    const otherMembers = staff.slice(1)
    return (
        <>
            <div className= {styles.carousel}>
                <div className= {styles.carouselTrack} style={{transform: `translateY(-${index * 100}%)`}}>
                    <img src={firstmember.picture} alt={firstmember.name}/>
                    {otherMembers.map((member)=> (<img key={member.id} src={member.picture} alt={member.name} loading='lazy' decoding='async'/>))}
                </div>
            </div>
        </>
    )
}