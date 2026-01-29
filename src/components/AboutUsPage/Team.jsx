import staff from '../../data/staff'
import styles from './team.module.css'
import StaffPic from './StaffPic'
import StaffDetails from './StaffDetails'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
export default function Team() {
    const [ index , setIndex ]= useState(0)
    return (
        <>
        <section className={styles.team}>
            <h2><FontAwesomeIcon icon={faPaw} />Meet Our Staff<FontAwesomeIcon icon={faPaw} /></h2>
            <div className={styles.mainContainer}>
                <StaffPic staff={staff} index={index} setIndex={setIndex}/>
                <StaffDetails staff={staff} index={index}/>
            </div>
        </section>
        </>
    )
}