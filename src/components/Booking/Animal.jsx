export default function Animal({styles , appointment , setAppointment}) {
    return (
        <>
            <fieldset>
                <legend className={styles.fieldHead}>Animal Information</legend>
                <input className={styles.inputSquare} type='text' placeholder='Pet Name' onChange={(e)=> setAppointment({...appointment,petName:e.target.value})}></input>
                <label>
                    <legend>Age</legend>
                    <input className={styles.inputSquare} type='number' placeholder='Years' onChange={(e)=> setAppointment({...appointment,petAge:{...appointment.petAge,years:e.target.value}})}></input>
                    <input className={styles.inputSquare} type='number' placeholder='Months' onChange={(e)=> setAppointment({...appointment,petAge:{...appointment.petAge,months:e.target.value}})}></input>
                    <input className={styles.inputSquare} type='number' placeholder='Days' onChange={(e)=> setAppointment({...appointment,petAge:{...appointment.petAge,days:e.target.value}})}></input>
                </label>
                <div id={styles.radioContainer}>
                    <div className={styles.labelDiv}>
                        <legend>Gender</legend>
                        <label>
                            <div className={styles.container}><input className={styles.radioButton} type='radio' name='gender' value='male' onChange={()=> setAppointment({...appointment,petGender:'male'})}></input> <span>♂️Male</span></div>
                            <div className={styles.container}><input className={styles.radioButton} type='radio' name='gender' value='female' onChange={()=> setAppointment({...appointment,petGender:'female'})}></input> <span>♀️Female</span></div>
                        </label>
                    </div>
                    <div className={styles.labelDiv}>
                        <legend>Species</legend>
                        <label>
                            <div className={styles.container}><input className={styles.radioButton} type='radio' name='species' value='dog' onChange={()=> setAppointment({...appointment,petSpecies:'dog'})}></input> <span>🐶Dog</span></div>
                            <div className={styles.container}><input className={styles.radioButton} type='radio' name='species' value='cat' onChange={()=> setAppointment({...appointment,petSpecies:'cat'})}></input> <span>🐱Cat</span></div>
                            <div className={styles.container}><input className={styles.radioButton} type='radio' name='species' value='other' onChange={()=> setAppointment({...appointment,petSpecies:'other'})}></input> <span>🦎Other</span></div>
                        </label>
                    </div>
                </div>
            </fieldset>
        </>
    )
}