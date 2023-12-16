import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item, quantity) => {
        const updatedCart = [...cartItems];
        const foundIndex = updatedCart.findIndex(cartItem => cartItem.id === item.id);

        if (foundIndex !== -1) {
            updatedCart[foundIndex].quantity += quantity;
        } else {
            updatedCart.push({ ...item, quantity });
        }

        setCartItems(updatedCart);
    };

    const updateQuantity = (itemId, quantity) => {
        const updatedCart = cartItems.map(item => {
            if (item.id === itemId) {
                return { ...item, quantity: Math.max(quantity, 1) };
            }
            return item;
        });

        setCartItems(updatedCart);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
