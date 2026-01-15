import Logo from '../../assets/Logo.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styles from './header.module.css'
import Nav from '../Nav'
export default function Header({setAside}) {
    return (
        <header>
            <button id={styles.asideHeaderBtn}><FontAwesomeIcon icon={faBars} onClick={()=> setAside(true)}/></button>
            <div id={styles.brand}>
                <img id={styles.logo} src={Logo} alt="Zoo Planet"/>
                <h2>Zoo Planet</h2>
                <FontAwesomeIcon id={styles.brandPaw} icon={faPaw} />
            </div>
            <Nav styles={styles}/>
        </header>
    )
}