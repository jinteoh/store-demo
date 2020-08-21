import React from 'react'

const Hero = ({ children }) => {
    return (
        <div className="hero">
            <div className="banner">
                <p>Ipsum reprehende.</p>
                <h1>Sint id reprehender</h1>
                {children}
            </div>
        </div>
    )
}

export default Hero
