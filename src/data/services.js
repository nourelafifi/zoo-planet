import {faScissors , faUserDoctor , faSyringe , faHouseMedical , faStore , faHandHoldingMedical , faVial , faXRay , faMaskFace , faMicrochip , faPlane , faBone , faWater , faHeartPulse , faTeeth , faBowlFood} from '@fortawesome/free-solid-svg-icons'
import groomImg from '../assets/services-images/grooming-serv.webp'
import consultImg from '../assets/services-images/onlineconsult-serv.webp'
import vaccineImg from '../assets/services-images/vaccination-serv.webp'
import hospitalizationImg from '../assets/services-images/hospitalization-serv.webp'
import storeImg from '../assets/services-images/store-serv.webp'
import emergencyImg from '../assets/services-images/emergency-serv.webp'
import labImg from '../assets/services-images/lab-serv.webp'
import xrayImg from '../assets/services-images/xray-serv.webp'
import surgeriesImg from '../assets/services-images/surgeries-serv.webp'
import microchipImg from '../assets/services-images/microchip-serv.webp'
import travelImg from '../assets/services-images/travel-serv.webp'
import orthoImg from '../assets/services-images/ortho-serv.webp'
import ultrasoundImg from '../assets/services-images/ultrasound-serv.webp'
import cardiographImg from '../assets/services-images/electrocardio-serv.webp'
import teethImg from '../assets/services-images/teeth-serv.webp'
import nutritionImg from '../assets/services-images/nutrition-serv.webp'
const services = [
    {
        id: 1,
        title: 'Grooming',
        icon: faScissors,
        hoverImg: groomImg,
        description: '“Pamper your pet with gentle care, fresh baths, and neat trims to keep them looking and feeling their best.”'
    } , 
    {
        id: 2,
        title: 'Online Consultation',
        icon: faUserDoctor,
        hoverImg: consultImg,
        description: '“Get expert veterinary advice from the comfort of your home — quick, easy, and stress-free for you and your pet.”'
    } ,
    {
        id: 3,
        title: 'Vaccination',
        icon: faSyringe,
        hoverImg: vaccineImg,
        description: '“Protect your pet from harmful diseases and keep them healthy for years to come.”'
    } ,
    {
        id: 4,
        title: 'Hospitalization',
        icon: faHouseMedical,
        hoverImg: hospitalizationImg,
        description: '“Safe, comfortable care for your pet when they need to stay with us for extra attention and healing.”'
    } ,
    {
        id: 5,
        title: 'Store',
        icon: faStore,
        hoverImg: storeImg,
        description: '“Quality food, toys, and essentials to keep tails wagging and pets happy.”'
    } ,
    {
        id: 6,
        title: 'Emergency Care',
        icon: faHandHoldingMedical,
        hoverImg: emergencyImg,
        description: '“24/7 urgent care when your pet needs immediate attention — we’re here for you, day or night.”'
    },
    {
        id: 7,
        title: 'Lab analysis',
        icon: faVial,
        hoverImg: labImg,
        description: '“Accurate tests and quick results to better understand your pet’s health.”'
    } ,
    {
        id: 8,
        title: 'X-ray',
        icon: faXRay,
        hoverImg: xrayImg,
        description: '“Safe imaging to spot hidden issues and keep your pet on the path to healing.”'
    } ,
    {
        id: 9,
        title: 'Surgeries',
        icon: faMaskFace,
        hoverImg: surgeriesImg,
        description: '“Get accurate and reliable veterinary diagnostics, including blood tests, urine tests, and more, for your pet’s health and well-being.”'
    } ,
    {
        id: 10,
        title: 'Microchip',
        icon: faMicrochip,
        hoverImg: microchipImg,
        description: '“Get accurate and reliable veterinary diagnostics, including blood tests, urine tests, and more, for your pet’s health and well-being.”'
    } ,
    {
        id: 11,
        title: 'Travel',
        icon: faPlane,
        hoverImg: travelImg,
        description: '“Get accurate and reliable veterinary diagnostics, including blood tests, urine tests, and more, for your pet’s health and well-being.”'
    } ,
    {
        id: 12,
        title: 'Orthopedic Care',
        icon: faBone,
        hoverImg: orthoImg,
        description: '“Get accurate and reliable veterinary diagnostics, including blood tests, urine tests, and more, for your pet’s health and well-being.”'
    } ,
    {
        id: 13,
        title: 'Ultrasound',
        icon: faWater,
        hoverImg: ultrasoundImg,
        description: '“Get accurate and reliable veterinary diagnostics, including blood tests, urine tests, and more, for your pet’s health and well-being.”'
    } ,
    {
        id: 14,
        title: 'Electrocardiogram',
        icon: faHeartPulse,
        hoverImg: cardiographImg,
        description: '“Get accurate and reliable veterinary diagnostics, including blood tests, urine tests, and more, for your pet’s health and well-being.”'
    } ,
    {
        id: 15,
        title: 'Teeth Cleaning',
        icon: faTeeth,
        hoverImg: teethImg,
        description: '“Get accurate and reliable veterinary diagnostics, including blood tests, urine tests, and more, for your pet’s health and well-being.”'
    } ,
    {
        id: 16,
        title: 'Nutrition',
        icon: faBowlFood,
        hoverImg: nutritionImg,
        description: '“Get accurate and reliable veterinary diagnostics, including blood tests, urine tests, and more, for your pet’s health and well-being.”'
    }
]
export default services