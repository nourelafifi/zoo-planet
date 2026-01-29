import Logo from '../../assets/Logo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw , faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './header.module.css';
import Nav from '../Nav';
export default function Header({setAside}) {
    return (
        <header>
            <button className={styles.asideHeaderBtn} onClick={()=> setAside(true)} type='button' aria-label="Open aside menu"><FontAwesomeIcon icon={faBars}/></button>
            <div className={styles.brand}>
                <img className={styles.logo} src={Logo} alt="Zoo Planet"/>
                <h2>Zoo Planet</h2>
                <FontAwesomeIcon className={styles.brandPaw} icon={faPaw} />
            </div>
            <Nav styles={styles}/>
        </header>
    )
}