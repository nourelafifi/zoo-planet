import styles from './store.module.css'
const ProductCard= ({product}) => {
    return (
        <a href="" className= {styles.productCard}>
            <div><img src={product.image}></img></div>
            <h5>{product.name}</h5>
            <h6>{product.price}$</h6>
        </a>
    );
};

export default ProductCard