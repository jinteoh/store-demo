import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import CartItem from '../components/Cart/CartItem'
import { Link } from 'react-router-dom'


const Cart = () => {

    let user = false;

    const { cart, total } = useContext(CartContext)


    return (
        <section className="cart-items section">
            <h2>your cart</h2>
            {cart.map(item => {
                return <CartItem key={item.id} {...item} />
            })}
            <h2>total : ${total}</h2>
            {user ?
                <Link to="/checkout" className="btn btn-primary btn-block">
                    checkout
            </Link>
                :
                <Link to="/login" className="btn btn-primary btn-block">
                    login
                </Link>
            }

        </section>
    )
}

export default Cart
