import styles from './services.module.css'
export default function SlideBtn({ slideLeft, slideRight, activeBtn }) {
    return (
        <div id={styles.btnContainer}>
            <button
                className={styles.slideBtn}
                onClick={slideLeft}
                id={activeBtn === "left" ? styles.activeSlideBtn : undefined}
            >
                ●
            </button>
            <button
                className={styles.slideBtn}
                onClick={slideRight}
                id={activeBtn === "right" ? styles.activeSlideBtn : undefined}
            >
                ●
            </button>
        </div>
    );
}