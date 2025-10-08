import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
export default function Nav({styles , setAside}) {
    return (
        <>
            <nav>
                <Link to='/' onClick={()=>setAside(false)}><FontAwesomeIcon className={styles.navPaw} icon={faPaw} />Home</Link>
                <Link ><FontAwesomeIcon className={styles.navPaw} icon={faPaw} />Store</Link>
                <HashLink smooth to='/#servicesSection' onClick={()=>setAside(false)}><FontAwesomeIcon className={styles.navPaw} icon={faPaw} />Services</HashLink>
                <HashLink smooth to='#footer' onClick={()=>setAside(false)}><FontAwesomeIcon className={styles.navPaw} icon={faPaw} />Contact Us</HashLink>
                <Link to='/bookappointment' onClick={()=>setAside(false)}><FontAwesomeIcon className={styles.navPaw} icon={faPaw} />Book an appointment</Link>
                <HashLink smooth to='/#locations' onClick={()=>setAside(false)}><FontAwesomeIcon className={styles.navPaw} icon={faPaw} />Locations</HashLink>
                <Link to='/AboutUs' onClick={()=>setAside(false)}><FontAwesomeIcon className={styles.navPaw} icon={faPaw} />About us</Link>
            </nav>
        </>
    )
}