import React from 'react';
import cartImage from './cart.svg';

const CartWidget = ({ cartCount }) => {
    return (
        <>
            <img src={cartImage} alt="Cart" height="40" width="40" />
            {cartCount}
        </>
    );
};

export default CartWidget;
