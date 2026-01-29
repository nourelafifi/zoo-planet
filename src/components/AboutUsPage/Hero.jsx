import styles from './hero.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
export default function Hero() {
    return (
        <>
            <section className={styles.hero}>
                <h2 className={styles.title}><FontAwesomeIcon className={styles.aboutUsPaw} icon={faPaw} />About Us<FontAwesomeIcon className={styles.aboutUsPaw} icon={faPaw} /></h2>
                <p className={styles.slogan}>Treating your pet <br /> <span className={styles.span}>with love and care <FontAwesomeIcon className='heart' icon={faHeart} /></span></p>
            </section>
        </>
    )
}