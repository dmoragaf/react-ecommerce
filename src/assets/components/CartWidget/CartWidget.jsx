import React from 'react';
import cartImage from './cart.svg';

const CartWidget = () => {
    return (
        <>
        <img src={cartImage} alt="Cart" height="40" width="40" />
        0
        </>
        
    );
};

export default CartWidget;
