import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styles from './ItemDetailContainer.module.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetailContainer = ({ addToCart }) => {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => setItem(response.data))
            .catch(error => console.log(error));
    }, [id]);

    return (
        <>
            <div className={styles.detailContainer}>
                <img src={item.image} alt={item.title} className={styles.image} />
                <h4 className={styles.title}>{item.title}</h4>
                <p className={styles.price}>${item.price}</p>
                <p className={styles.description}>{item.description}</p>
                <ItemCount initial={1} stock={10} onAdd={addToCart} />
            </div>
        </>
    );
};

export default ItemDetailContainer;
