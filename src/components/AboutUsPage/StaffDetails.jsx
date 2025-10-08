import styles from './team.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStethoscope } from '@fortawesome/free-solid-svg-icons'
export default function StaffDetails({staff , index}) {
    return (
        <>
            <div className={styles.staffDetails}>
                <FontAwesomeIcon icon={faStethoscope} id={styles.icon}/>
                <div className={styles.nameContainer}>
                    {staff.map((member)=><h3 style={{transform: `translateY(-${index * 100}%)`}} key={member.id}>DR. {member.name}</h3>)}
                </div>
                <div className={styles.container}>
                {staff.map((member)=><h4 style={{transform: `translateY(-${index * 100}%)`}} key={member.id}>{member.position}</h4>)}
                </div>
                <div className={styles.container}>
                {staff.map((member)=><h4 style={{transform: `translateY(-${index * 100}%)`}} key={member.id}>Specialist of {member.speciality}</h4>)}
                </div>
                <div className={styles.container}>
                {staff.map((member)=><h4 style={{transform: `translateY(-${index * 100}%)`}} key={member.id}>Branch: {member.branch}</h4>)}
                </div>
            </div>
        </>
    )
}