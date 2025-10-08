import notFoundImg from '../assets/notfound.png'
import styles from '../styles/notfound.module.css'
import { Link } from 'react-router-dom'
export default function NotFound() {
    return (
        <>
            <main id={styles.notFound}>
                <div>
                    <h1>Error 404 💔</h1>
                    <p>The page you are looking for seems to be messing</p>
                    <Link id={styles.link} to='/'>Back to home page</Link>
                </div>
                <img id={styles.image} src={notFoundImg}></img>
            </main>
        </>
    )
}