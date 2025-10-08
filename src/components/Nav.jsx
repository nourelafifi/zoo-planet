import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
export default function Nav({styles}) {
    return (
        <>
            <nav>
                <Link to='/'><FontAwesomeIcon className={styles.navPaw} icon={faPaw} />Home</Link>
                <Link><FontAwesomeIcon className={styles.navPaw} icon={faPaw} />Store</Link>
                <HashLink smooth to='/#servicesSection'><FontAwesomeIcon className={styles.navPaw} icon={faPaw} />Services</HashLink>
                <HashLink smooth to='#footer'><FontAwesomeIcon className={styles.navPaw} icon={faPaw} />Contact Us</HashLink>
                <Link to='/bookappointment'><FontAwesomeIcon className={styles.navPaw} icon={faPaw} />Book an appointment</Link>
                <HashLink smooth to='/#locations'><FontAwesomeIcon className={styles.navPaw} icon={faPaw} />Locations</HashLink>
                <Link to='/AboutUs'><FontAwesomeIcon className={styles.navPaw} icon={faPaw} />About us</Link>
            </nav>
        </>
    )
}