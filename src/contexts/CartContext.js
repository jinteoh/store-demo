import React, { useState, createContext, useEffect } from 'react'
import LocalCart from '../utils/localCart'

function getCartFromLocalStorage() {
    return localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
}

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(getCartFromLocalStorage());
    const [total, setTotal] = useState(0)
    const [cartItems, setCartItems] = useState(0) // total number of cart items


    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
        let newCartItems = cart.reduce((total, item) => {
            return total += item.amount;
        }, 0)
        setCartItems(newCartItems);

        let newTotal = cart.reduce((total, item) => {
            return total += (item.amount * item.price);
        }, 0)
        newTotal = parseFloat(newTotal.toFixed(2));
        setTotal(newTotal);

        // price total

    }, [cart])

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    const decreaseAmount = (id, amount) => {
        if (amount === 1) {
            removeItem(id);
            return
        } else {
            const newCart = cart.map(item => {
                return item.id === id ? { ...item, amount: item.amount - 1 } :
                    { ...item }
            })
            setCart(newCart);
        }
    }

    const increaseAmount = (id) => {
        const newCart = cart.map(item => {
            return item.id === id ? { ...item, amount: item.amount + 1 } :
                { ...item }
        })
        setCart(newCart)

    }

    const addToCart = (product) => {
        const { id, title, price, image: { url } } = product;
        const item = cart.find(item => item.id === id);
        if (item) {
            increaseAmount(id);
            return;
        } else {
            const newItem = { id, image: url, title, price, amount: 1 }
            const newCart = [...cart, newItem];
            setCart(newCart)
        }
    }

    return (
        <CartContext.Provider value={{ cart, total, removeItem, cartItems, total, decreaseAmount, increaseAmount, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
