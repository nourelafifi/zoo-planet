export default function Owner({styles , appointment , setAppointment}) {
    return (
        <>
            <fieldset>
                <legend className={styles.fieldHead}>Owner Information</legend>
                <input className={styles.inputSquare} type='text' placeholder='First Name' onChange={(e)=> setAppointment({...appointment, firstName:e.target.value})}></input>
                <input className={styles.inputSquare} type='text' placeholder='Last Name' onChange={(e)=> setAppointment({...appointment, lastName:e.target.value})}></input>
                <input className={styles.inputSquare} type='tel'  placeholder='Phone Number' onChange={(e)=> setAppointment({...appointment, phone:e.target.value})}></input>
                <input className={styles.inputSquare} type='email'  placeholder='E-Mail' onChange={(e)=> setAppointment({...appointment, eMail:e.target.value})}></input>
                <input className={styles.inputSquare} type="text" placeholder="Address" onChange={(e)=> setAppointment({...appointment, address:e.target.value})}/>
            </fieldset>
        </>
    ) 
}