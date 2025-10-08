import aboutUsPic from '../../assets/Brand.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import styles from './about-us.module.css'
export default function AboutUs() {
    const navigate= useNavigate()
    return (
        <section id={styles.aboutUs}>
            <h2><FontAwesomeIcon className={styles.h2Paw} icon={faPaw} /> About Us <FontAwesomeIcon className='h2-paw' icon={faPaw} /></h2>
            <article>
                <p>Founded in 2012, Zoo Planet has been a trusted haven
                    for pets and their families for over a decade. As both
                    a modern pet hospital and a one-stop pet store, we are
                    dedicated to keeping your beloved companions healthy,
                    happy, and thriving. Our experienced veterinarians and
                    caring staff provide personalized medical care, from
                    routine check-ups and preventive treatments to urgent
                    care and long-term wellness support. Beyond healthcare,
                    our store offers a carefully curated selection of nutritious
                    food, fun toys, and everyday essentials to meet all your pet’s
                    needs. At Zoo Planet, we treat every pet like family—and we’re
                    proud to be part of your journey in giving them the best life possible.
                </p>
                <figure id={styles.aboutUsPic}><img src={aboutUsPic}></img></figure>
            </article>
            <button onClick={()=> navigate('/AboutUs')}>Know More</button>
        </section>
    )
}