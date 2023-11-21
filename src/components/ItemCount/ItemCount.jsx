import React, { useState } from 'react';

const ItemCount = ({ initial, stock, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const handleIncrement = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const handleDecrement = () => {
        if (quantity > initial) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div>
            <button onClick={handleDecrement}>-</button>
            <span> {quantity} </span>
            <button onClick={handleIncrement}>+</button>
            <br/>
            <br/>
            <button onClick={() => onAdd(quantity)}>Agregar al Carrito</button>
        </div>
    );
};

export default ItemCount;
