import SCard from './ServicesCard'
import SlideBtn from './SlideBtn'
import styles from './services.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { faScissors } from '@fortawesome/free-solid-svg-icons'
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import { faSyringe } from '@fortawesome/free-solid-svg-icons'
import { faHouseMedical } from '@fortawesome/free-solid-svg-icons'
import { faStore } from '@fortawesome/free-solid-svg-icons'
import { faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons'
import { faVial } from '@fortawesome/free-solid-svg-icons'
import { faXRay } from '@fortawesome/free-solid-svg-icons'
import { faMaskFace } from '@fortawesome/free-solid-svg-icons'
import { faMicrochip } from '@fortawesome/free-solid-svg-icons'
import { faPlane } from '@fortawesome/free-solid-svg-icons'
import { faBone } from '@fortawesome/free-solid-svg-icons'
import { faWater } from '@fortawesome/free-solid-svg-icons'
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons'
import { faTeeth } from '@fortawesome/free-solid-svg-icons'
import { faBowlFood } from '@fortawesome/free-solid-svg-icons'
import groomImg from '../../assets/grooming-serv.webp'
import consultImg from '../../assets/onlineconsult-serv.webp'
import vaccineImg from '../../assets/vaccination-serv.png'
import hospitalizationImg from '../../assets/hospitalization-serv.webp'
import storeImg from '../../assets/store-serv.jpg'
import emergencyImg from '../../assets/emergency-serv.webp'
import labImg from '../../assets/lab-serv.png'
import xrayImg from '../../assets/xray-serv.webp'
import surgeriesImg from '../../assets/surgeries-serv.jpg'
import microchipImg from '../../assets/microchip-serv.jpg'
import travelImg from '../../assets/travel-serv.jpg'
import orthoImg from '../../assets/ortho-serv.jpg'
import ultrasoundImg from '../../assets/ultrasound-serv.png'
import cardiographImg from '../../assets/electrocardio-serv.jpg'
import teethImg from '../../assets/teeth-serv.jpg'
import nutritionImg from '../../assets/nutrition-serv.webp'
import { useState } from 'react'

export default function Services() {
    const [slide , setSlide] = useState(50)
    const [activeBtn, setActiveBtn] = useState('left');

    const moveLeft = () => {
        setSlide(50);
        setActiveBtn("left");
    };

    const moveRight = () => {
        setSlide(-50);
        setActiveBtn("right");
    };
    return(
        <section id='servicesSection' className={styles.services}>
            <div className={styles.customShapeDividerTop1756753075}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className={styles.shapeFill}></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className={styles.shapeFill}></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className={styles.shapeFill}></path>
                </svg>
            </div>
            <h2><FontAwesomeIcon icon={faPaw} /> Services <FontAwesomeIcon icon={faPaw} /></h2>
            <div id={styles.servicesContent} style={{left: `${slide}%`}}>
                <div className={styles.slide}>
                    <SCard icon={<FontAwesomeIcon icon={faScissors} />} title='Grooming' hoverImage={groomImg} description='“Pamper your pet with gentle care, fresh baths, and neat trims to keep them looking and feeling their best.”'/>
                    <SCard icon={<FontAwesomeIcon icon={faUserDoctor} />} title='Online Consultation' hoverImage={consultImg} description='“Get expert veterinary advice from the comfort of your home — quick, easy, and stress-free for you and your pet.”'/>
                    <SCard icon={<FontAwesomeIcon icon={faSyringe} />} title='Vaccination' hoverImage={vaccineImg} description='“Protect your pet from harmful diseases and keep them healthy for years to come.”'/>
                    <SCard icon={<FontAwesomeIcon icon={faHouseMedical} />} title='Hospitalization' hoverImage={hospitalizationImg} description='“Safe, comfortable care for your pet when they need to stay with us for extra attention and healing.”'/>
                    <SCard icon={<FontAwesomeIcon icon={faStore} />} title='Store' hoverImage={storeImg} description='“Quality food, toys, and essentials to keep tails wagging and pets happy.”'/>
                    <SCard icon={<FontAwesomeIcon icon={faHandHoldingMedical} />} title='Emergancy Care' hoverImage={emergencyImg} description='“24/7 urgent care when your pet needs immediate attention — we’re here for you, day or night.”'/>
                    <SCard icon={<FontAwesomeIcon icon={faVial} />} title='Lab analysis' hoverImage={labImg} description='“Accurate tests and quick results to better understand your pet’s health.”'/>
                    <SCard icon={<FontAwesomeIcon icon={faXRay} />} title='X-Ray' hoverImage={xrayImg} description='“Safe imaging to spot hidden issues and keep your pet on the path to healing.”'/>
                </div>
                <div className={styles.slide}>
                    <SCard icon={<FontAwesomeIcon icon={faMaskFace} />} title='Surgeries' hoverImage={surgeriesImg} description='“Compassionate surgical care with advanced techniques to help your pet heal safely.”'/>
                    <SCard icon={<FontAwesomeIcon icon={faMicrochip} />} title='Microchip Implantation' hoverImage={microchipImg} description='“A simple, safe way to ensure your pet can always find their way back home.”'/>
                    <SCard icon={<FontAwesomeIcon icon={faPlane} />} title='Travel Certificate' hoverImage={travelImg} description='“Official health certificates to make traveling with your pet smooth and worry-free.”'/>
                    <SCard icon={<FontAwesomeIcon icon={faBone} />} title='Orthopedic Surgeries' hoverImage={orthoImg} description='“Expert surgical care to treat bone and joint issues, helping your pet move comfortably again.”'/>
                    <SCard icon={<FontAwesomeIcon icon={faWater} />} title='UltraSound' hoverImage={ultrasoundImg} description='“Safe, painless imaging to detect health issues early and guide the best care for your pet.”'/>
                    <SCard icon={<FontAwesomeIcon icon={faHeartPulse} />} title='Electrocardiography' hoverImage={cardiographImg} description='“Accurate heart monitoring to detect rhythm issues and keep your pet’s heart healthy.”'/>
                    <SCard icon={<FontAwesomeIcon icon={faTeeth} />} title='Dental Care' hoverImage={teethImg} description='“Healthy teeth and fresh breath for a happier, more energetic pet.”'/>
                    <SCard icon={<FontAwesomeIcon icon={faBowlFood} />} title='Nutritional Counseling' hoverImage={nutritionImg} description='“Personalized diet plans to keep your pet healthy, strong, and full of energy.”'/>
                </div>
            </div>
            <SlideBtn slideLeft={moveLeft} slideRight={moveRight} activeBtn={activeBtn}/>
        </section>
    )
}