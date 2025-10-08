import styles from './consultationBox.module.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
export default function ConsultationBox ({setConsult , consult}) {
    const [information , setInformation] = useState(
        {firstName:'' , lastName:'' , number:'' , Email: '' , petName:'', petAge: {years:'',months:'' ,days:''} , petGender:'' , petType:''}
    )
    return (
        <>
            <div id={styles.box} className={consult? styles.active : styles.inactive}>
                <h2><FontAwesomeIcon className={styles.h2Paw} icon={faPaw} />Online Consultation<FontAwesomeIcon className={styles.h2Paw} icon={faPaw} /></h2>
                <form>
                    <fieldset>
                        <legend className={styles.fieldHead}>Owner Information</legend>
                        <input className={styles.inputSquare} type='text' placeholder='First Name' onChange={(e) => setInformation({...information, firstName:e.target.value})} value={information.firstName}></input>
                        <input className={styles.inputSquare} type='text' placeholder='Last Name' onChange={(e) => setInformation({...information, lastName:e.target.value})} value={information.lastName}></input>
                        <input className={styles.inputSquare} type='tel'  placeholder='Phone Number' onChange={(e) => setInformation({...information, number:e.target.value})} value={information.number}></input>
                        <input className={styles.inputSquare} type='email'  placeholder='E-Mail' onChange={(e) => setInformation({...information, Email:e.target.value})} value={information.Email}></input>
                    </fieldset>
                    <fieldset>
                        <legend className={styles.fieldHead}>Animal Information</legend>
                        <input className={styles.inputSquare} type='text' placeholder='Pet Name' onChange={(e) => setInformation({...information, petName:e.target.value})} value={information.petName}></input>
                        <label>
                            <legend>Age</legend>
                                <input className={styles.inputSquare} type='number' placeholder='Years' onChange={(e) => setInformation({...information, petAge:{...information.petAge, years:e.target.value}})} value={information.petAge.years}></input>
                                <input className={styles.inputSquare} type='number' placeholder='Months' onChange={(e) => setInformation({...information, petAge:{...information.petAge, months:e.target.value}})} value={information.petAge.months}></input>
                                <input className={styles.inputSquare} type='number' placeholder='Days' onChange={(e) => setInformation({...information, petAge:{...information.petAge, days:e.target.value}})} value={information.petAge.days}></input>
                        </label>
                        <div id={styles.radioContainer}>
                            <div className={styles.labelDiv}>
                                <legend>Gender</legend>
                                <label>
                                    <div className={styles.container}><input className={styles.radioButton} type='radio' name='gender' value='male' onChange={(e)=> setInformation({...information, petGender:e.target.value})}></input> <span>♂️Male</span></div>
                                    <div className={styles.container}><input className={styles.radioButton} type='radio' name='gender' value='female' onChange={(e)=> setInformation({...information, petGender:e.target.value})}></input> <span>♀️Female</span></div>
                                </label>
                            </div>
                            <div className={styles.labelDiv}>
                                <legend>Species</legend>
                                <label>
                                    <div className={styles.container}><input className={styles.radioButton} type='radio' name='species' value='dog' onChange={(e)=> setInformation({...information, petType:e.target.value})}></input> <span>🐶Dog</span></div>
                                    <div className={styles.container}><input className={styles.radioButton} type='radio' name='species' value='cat' onChange={(e)=> setInformation({...information, petType:e.target.value})}></input> <span>🐱Cat</span></div>
                                    <div className={styles.container}><input className={styles.radioButton} type='radio' name='species' value='other' onChange={(e)=> setInformation({...information, petType:e.target.value})}></input> <span>🦎Other</span></div>
                                </label>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend className={styles.fieldHead}>Message</legend>
                        <textarea name='case history' placeholder='Enter your complain'></textarea>
                    </fieldset>
                    <button id={styles.submitButton} type='submit'>Submit</button>
                </form>
                <button id={styles.exitButton} onClick={setConsult}>✖</button>
            </div>
            <div id= {styles.backgroundBox} className={consult? styles.active : styles.inactive}></div>
        </>
    )
}