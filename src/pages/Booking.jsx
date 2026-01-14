import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/booking.module.css'
import Owner from '../components/Booking/Owner'
import Animal from '../components/Booking/Animal'
import Service from '../components/Booking/Service'
import AppointmentDetails from '../components/Booking/AppointmentDetails'
import { useState } from 'react'
export default function Booking() {
    const [appointment , setAppointment] = useState({firstName:'', lastName:'', phone:'', eMail:'', address:'', petName:'', 
                                                    petAge:{years:'',months:'',days:''}, petGender:'', petSpecies:'', 
                                                    services:{grooming:false, vaccination:false, hospitalization:false, 
                                                        microchip:false, certificate:false, dental:false, lab:false, xray:false, electrocardio:false, ultrasound:false, examination:false},
                                                    branch:'', date:'', time:'', hospitalizationDue:''})
    return (
        <>
            <main>
                <h2><FontAwesomeIcon icon={faPaw} />Book An Appointment<FontAwesomeIcon className={styles.h2Paw} icon={faPaw} /></h2>
                <form>
                    <Owner styles={styles} setAppointment={setAppointment} appointment={appointment}/>
                    <Animal styles={styles} setAppointment={setAppointment} appointment={appointment}/>
                    <Service styles={styles} setAppointment={setAppointment} appointment={appointment}/>
                    <AppointmentDetails styles={styles} setAppointment={setAppointment} appointment={appointment}/>
                    <button id={styles.bookBtn} type='submit'>Book</button>
                </form>
            </main>
        </>
    )
}