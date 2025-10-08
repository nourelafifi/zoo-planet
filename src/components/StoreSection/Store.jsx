import styles from './store.module.css';
import ProductCard from './ProductCard'
import products from '../../data/products'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
export default function Store() {
    const lasteight = products.slice(products.length-8,products.length);
    return (
        <section id={styles.storeSection}>
            <h2><FontAwesomeIcon className={styles.h2Paw} icon={faPaw} /> Store <FontAwesomeIcon className='h2-paw' icon={faPaw} /></h2>
            <div id={styles.cardSection}>
                {lasteight.map((product) => (<ProductCard key={product.id} product={product}/>))}
            </div>
            <button id={styles.storeBtn}>Show More</button>
        </section>
    )
}