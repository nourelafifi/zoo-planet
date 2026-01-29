import styles from './services.module.css';
export default function SlideBtn({ slideLeft, slideRight, activeBtn }) {
    return (
        <div className={styles.btnContainer}>
            <button
                className={`${styles.slideBtn} ${activeBtn === "left" ? styles.activeSlideBtn : undefined}`}
                onClick={slideLeft}
                
            >
                ●
            </button>
            <button
                className={`${styles.slideBtn} ${activeBtn === "right" ? styles.activeSlideBtn : undefined}`}
                onClick={slideRight}
            >
                ●
            </button>
        </div>
    );
}