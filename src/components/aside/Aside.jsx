import styles from './aside.module.css'
import Nav from '../Nav'
import Logo from '../../assets/Logo.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
export default function Aside({aside , setAside}) {
    return(
        <>
        <aside style={{ transform: aside ? 'translateX(0)' : 'translateX(-100%)' }}>
            <div id={styles.brand}>
                <img id={styles.logo} src={Logo} alt="Zoo Planet"/>
                <h2>Zoo Planet</h2>
                <FontAwesomeIcon id={styles.brandPaw} icon={faPaw} />
                <button id={styles.asideBtn}><FontAwesomeIcon icon={faX} id={styles.icon} onClick={()=>setAside(false)}/></button>
            </div>
            <Nav styles={styles} setAside={setAside}/>
        </aside>
        <div id={styles.asideBlackScreen} style={{display: aside? `block` : `none`}}></div>
        </>
    )
}