export default function Service({styles , appointment , setAppointment}) {
    return (
        <>
            <fieldset>
                <legend className={styles.fieldHead}>Services</legend>
                <div className={styles.container}><input className={styles.checkbox} type="checkbox" onChange={()=> setAppointment({...appointment, services:{...appointment.services, grooming: !appointment.services.grooming}})}></input><span>Grooming</span></div>
                <div className={styles.container}><input className={styles.checkbox} type="checkbox" onChange={()=> setAppointment({...appointment, services:{...appointment.services, vaccination: !appointment.services.vaccination}})}></input><span>Vaccination</span></div>
                <div className={styles.container}><input className={styles.checkbox} type="checkbox" onChange={()=> setAppointment({...appointment, services:{...appointment.services, hospitalization: !appointment.services.hospitalization}})}></input><span>Hospitalization</span></div>
                <div className={styles.container}><input className={styles.checkbox} type="checkbox" onChange={()=> setAppointment({...appointment, services:{...appointment.services, microchip: !appointment.services.microchip}})}></input><span>Microchip Implantation</span></div>
                <div className={styles.container}><input className={styles.checkbox} type="checkbox" onChange={()=> setAppointment({...appointment, services:{...appointment.services, certificate: !appointment.services.certificate}})}></input><span>Travel Certificate</span></div>
                <div className={styles.container}><input className={styles.checkbox} type="checkbox" onChange={()=> setAppointment({...appointment, services:{...appointment.services, dental: !appointment.services.dental}})}></input><span>Dental Care</span></div>
                <div className={styles.container}><input className={styles.checkbox} type="checkbox" onChange={()=> setAppointment({...appointment, services:{...appointment.services, lab: !appointment.services.lab}})}></input><span>Lab Analysis</span></div>
                <div className={styles.container}><input className={styles.checkbox} type="checkbox" onChange={()=> setAppointment({...appointment, services:{...appointment.services, xray: !appointment.services.xray}})}></input><span>X-ray</span></div>
                <div className={styles.container}><input className={styles.checkbox} type="checkbox" onChange={()=> setAppointment({...appointment, services:{...appointment.services, electrocardio: !appointment.services.electrocardio}})}></input><span>Electrocardiography</span></div>
                <div className={styles.container}><input className={styles.checkbox} type="checkbox" onChange={()=> setAppointment({...appointment, services:{...appointment.services, ultrasound: !appointment.services.ultrasound}})}></input><span>Ultrasonography</span></div>
                <div className={styles.container}><input className={styles.checkbox} type="checkbox" onChange={()=> setAppointment({...appointment, services:{...appointment.services, examination: !appointment.services.examination}})}></input><span>Medical Examination</span></div>
            </fieldset>
        </>
    )
}