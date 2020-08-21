import React, { useState, createContext, useEffect } from 'react'
import axios from 'axios'
import url from '../utils/URL'

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [featured, setFeatured] = useState([]);

    useEffect(() => {
        setLoading(true);

        axios.get(`${url}/products`).then(response => {
            const featured = featuredProducts(response.data)
            setFeatured(featured);
            setProducts(response.data);
            setLoading(false);
        })
    }, [])

    const featuredProducts = (data) => {
        return data.filter(item => item.featured === true)
    }

    return (
        <ProductContext.Provider value={{ loading, products, featured }}>
            {children}
        </ProductContext.Provider>

    )
}

export default ProductProvider
