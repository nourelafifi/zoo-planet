import styles from './footer.module.css'
import logo from '../../assets/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
export default function Footer() {
    return (
        <footer id='footer'>
            <div id={styles.footerMain}>
                <div className={styles.customShapeDividerTop1757182312}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 0L0 0 892.25 114.72 1200 0z" className={styles.shapeFill}></path>
                    </svg>
                </div>
                <h2><img src={logo}></img>Zoo Planet</h2>
                <section id={styles.footerContacts}>
                    <h3>Contact Us</h3>
                    <h4><div className={styles.contactIcon}><FontAwesomeIcon icon={faWhatsapp} /></div>+20 *** *** ****</h4>
                    <h4><div className={styles.contactIcon}><FontAwesomeIcon icon={faEnvelope} /></div>zoo-planet01@gmail.com</h4>
                    <h4><div className={styles.contactIcon}><FontAwesomeIcon icon={faPhone} /></div>+20 *** *** ****</h4>
                </section>
                <section id={styles.footerFollow}>                
                    <h3>Follow Us</h3>
                    <ul>
                        <a href='https://www.facebook.com'><li><FontAwesomeIcon icon={faFacebook} className={styles.socialIcons}/></li></a>
                        <a href='https://www.instagram.com'><li><FontAwesomeIcon icon={faInstagram} className={styles.socialIcons}/></li></a>
                        <a href='https://www.x.com'><li><FontAwesomeIcon icon={faXTwitter} className={styles.socialIcons}/></li></a>
                        <a href='https://www.tiktok.com'><li><FontAwesomeIcon icon={faTiktok} className={styles.socialIcons}/></li></a>
                    </ul>
                </section>
            </div>
            <div id={styles.footerPortfolio}>
            <p>This website is a frontend portfolio and is intended for demonstration purposes only.<br></br>All content on this website, including text, images, and representations of people, is entirely AI-generated and not real.<br></br>Any resemblance to actual persons, living or dead, or real events is purely coincidental.</p>
            <p style={{marginTop:0}}>For ordering our service press <a href=''>here</a></p>
            <h5>All the Copywrites are reserved</h5>
            <h4>Nour Elafifi</h4>
            </div>
        </footer>
    )
}