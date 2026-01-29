import styles from './aside.module.css';
import Nav from '../Nav';
import Logo from '../../assets/Logo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw , faX } from '@fortawesome/free-solid-svg-icons';
export default function Aside({aside , setAside}) {
    return(
        <>
        <aside style={{ transform: aside ? 'translateX(0)' : 'translateX(-100%)' }}>
            <div className={styles.brand}>
                <img className={styles.logo} src={Logo} alt="Zoo Planet"/>
                <h2>Zoo Planet</h2>
                <FontAwesomeIcon className={styles.brandPaw} icon={faPaw} />
                <button className={styles.asideBtn} onClick={()=>setAside(false)} type='button' aria-label='close aside menu'><FontAwesomeIcon icon={faX} className={styles.icon}/></button>
            </div>
            <Nav styles={styles} setAside={setAside}/>
        </aside>
        <div className={styles.asideBlackScreen} style={{display: aside? `block` : `none`}}></div>
        </>
    )
}