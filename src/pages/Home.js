import React from 'react'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/Product/FeaturedProducts'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <Hero>
                <Link to="/products" className="btn btn-primary btn-hero">
                    our products
                </Link>
            </Hero>
            <FeaturedProducts />
        </>
    )
}

export default Home
