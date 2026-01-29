import styles from './locations.module.css'
import MapLocation from './map'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw , faLocationDot } from '@fortawesome/free-solid-svg-icons'
import branches from '../../data/branches.js'
import { useState } from 'react'
export default function Locations() {
    const [location , setLocation] = useState(branches[0].location)
    return (
        <section className={styles.locationSection} id='locations'>
            <h2><FontAwesomeIcon icon={faPaw} /> Our Branches <FontAwesomeIcon icon={faPaw} /></h2>
            <div id={styles.container}>
                <ul>
                    {branches.map((branch) => (<li key={branch.id}><button onClick={() => {setLocation(branch.location)}}><FontAwesomeIcon icon={faLocationDot} /> {branch.name}</button></li>))}
                </ul>
                <div className={styles.maps}><MapLocation clinic={location}/></div>
            </div>
        </section>
    )
}


