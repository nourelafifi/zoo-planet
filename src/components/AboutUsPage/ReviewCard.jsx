import styles from './reviews.module.css'
export default function ReviewCard({reviews , id, isSmallScreen}) {
    return (
        <>
            <div className={isSmallScreen ? styles.smallReview : styles.review} id={id}>
                <h3>{reviews.name}</h3>
                <p>{reviews.opanion}</p>
                <span>{reviews.rate}</span>
            </div>
        </>
    )
}