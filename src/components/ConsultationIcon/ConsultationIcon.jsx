import styles from './consultationIcon.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
export default function ConsultationIcon({setConsult}) {
    return (
        <button id= {styles.consultationIcon} onClick={setConsult}>
            <FontAwesomeIcon id={styles.icon} icon={faMessage} />
        </button>
    )
}