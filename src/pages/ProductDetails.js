import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../contexts/ProductContext'
import Loading from '../components/Loading'
import { CartContext } from '../contexts/CartContext'

const ProductDetails = () => {

    const { id } = useParams();
    const { products } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);
    const product = products.find(item => item.id === parseInt(id));

    if (products.length === 0) {
        return <Loading />
    } else {
        const { image: { url }, title, price, description } = product

        return (
            <section className="single-product">
                <img src={url} alt={title} className="single-product-image" />
                <article>
                    <h1>{title}</h1>
                    <h2>${price}</h2>
                    <p>{description}</p>
                    <button className="btn btn-primary btn-block" onClick={() => {
                        addToCart(product)
                    }}>
                        add to cart
                    </button>
                </article>
            </section>
        )
    }
}

export default ProductDetails
