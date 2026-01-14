import Curousel from './Curousel';
import styles from './story.module.css'
import Typewriter from 'typewriter-effect'
import { useState } from 'react'
import beginning from '../../assets/beginning.png'
import hospital from '../../assets/hospital.png'
import thanAStore from '../../assets/thanAStore.png'
import philosophy from '../../assets/philosophy.png'
import team from '../../assets/team.png'
import commitment from '../../assets/commitment.png'
import promise from '../../assets/promise.png'
const script = [
    "<span>Our Beginning (2012)</span><br>Zoo Planet was founded with a simple dream: to<br>create a trusted haven where pets and their<br>families could find both expert medical care<br>and everyday essentials under one roof.",
    "<span>More Than a Pet Hospital</span><br>From day one, we’ve gone beyond routine<br>treatments. Our team of skilled veterinarians<br>provides preventive care, life-saving urgent<br>care, and long-term wellness support—ensuring<br>every pet enjoys a healthier, happier life.",
    "<span>More Than a Pet Store</span><br>We carefully curate nutritious foods, fun toys,<br>grooming products, and everyday essentials.<br>Everything we stock is chosen with pets’ well-<br>being in mind, making it easier for families to<br>give their companions the very best.",
    "<span>Our Philosophy</span><br>At Zoo Planet, pets are not just animals—they<br>are family. That belief guides every service we<br>provide, every product we recommend, and<br>every interaction we have with our community.",
    "<span>Our Team</span><br>Behind Zoo Planet is a passionate family of<br>veterinarians, pet care specialists, and staff<br>who are dedicated to treating every pet with<br>compassion, patience, and love.",
    "<span>Our Commitment</span><br>We’re not just here for the medical moments or<br>shopping needs—we’re here for the entire<br>journey of pet ownership, celebrating<br>milestones and supporting families through<br>challenges.",
    "<span>Our Promise</span><br>For over a decade, we’ve stood by one promise:<br>to keep pets healthy, happy, and thriving while<br>giving families peace of mind."
];
export default function Story() {
    const [index , setIndex]= useState(0)
    const images= [beginning , hospital , thanAStore , philosophy , team , commitment , promise]
    const [fade, setFade] = useState(true);
    return (
        <>
            <section id={styles.story}>
            <div id={styles.writer} style={{opacity: fade ? 1 : 0, transition: "opacity 1s ease-in-out"}}>
                <Typewriter key={index} options={{ strings: script[index], autoStart: true, delay: 15, deletingcursor: "|"}} />
            </div>
            <Curousel index={index} images={images} setIndex={setIndex} setFade={setFade}/>
            </section>
        </>
    )
}