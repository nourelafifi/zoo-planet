import styles from './hero.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
export default function Hero() {
    return (
        <>
            <section id={styles.hero}>
                <h2 id={styles.title}><FontAwesomeIcon className={styles.aboutUsPaw} icon={faPaw} />About Us<FontAwesomeIcon className={styles.aboutUsPaw} icon={faPaw} /></h2>
                <p id={styles.slogan}>Treating your pet <br /> <span id={styles.span}>with love and care <FontAwesomeIcon className='heart' icon={faHeart} /></span></p>
            </section>
        </>
    )
}