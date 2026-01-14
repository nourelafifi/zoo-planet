export default function AppointmentDetails({styles , appointment , setAppointment}) {
    return (
        <>
            <fieldset>
                <legend className={styles.fieldHead}>Details</legend>
                <div className={styles.container}>
                <label>Branch:</label>
                <select className={styles.inputSquare} onChange={(e)=>setAppointment({...appointment, branch:e.target.value})}>
                    <option value=''>Choose a branch</option>
                    <option value='mansoura'>Mansoura</option>
                    <option value='alexandria'>Alexandria</option>
                    <option value='october'>6 October</option>
                    <option value='zamalek'>Zamalek</option>
                    <option value='sharm'>Sharm Elsheikh</option>
                    <option value='luxor'>Luxor</option>
                </select>
                </div>
                <div className={styles.container}>
                    <label>Date:</label>
                    <input className={styles.inputSquare} type="date" onChange={(e)=>setAppointment({...appointment, date:e.target.value})}></input>
                </div>
                <div className={styles.container}>
                    <label>Time:</label>
                    <select className={styles.inputSquare} onChange={(e)=>setAppointment({...appointment, time:e.target.value})}>
                        <option value=''>Choose time</option>
                        <option value= '10AM'>10 AM</option>
                        <option value= '11AM'>11 AM</option>
                        <option value= '12PM'>12 PM</option>
                        <option value= '1PM'>1 PM</option>
                        <option value= '2PM'>2 PM</option>
                        <option value= '3PM'>3 PM</option>
                        <option value= '4PM'>4 PM</option>
                        <option value= '5PM'>5 PM</option>
                        <option value= '6PM'>6 PM</option>
                        <option value= '7PM'>7 PM</option>
                        <option value= '8PM'>8 PM</option>
                        <option value= '9PM'>9 PM</option>
                        <option value= '10PM'>10 PM</option>
                    </select>
                </div>
                <div className={styles.container}>
                    {appointment.services.hospitalization? <div><label>Hospitalization Due:</label> <input type="date" className={styles.inputSquare} placeholder="Choose a date" onChange={(e)=> setAppointment({...appointment, hospitalizationDue:e.target.value})}></input></div>:""}
                </div>
            </fieldset>
        </>
    )
}