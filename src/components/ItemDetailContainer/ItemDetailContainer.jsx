import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';
import styles from './ItemDetailContainer.module.css';
import ItemCount from '../ItemCount/ItemCount';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/client';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const traeProductoDesdeFirebase = async () => {
            const docRef = doc(db, 'products', id);
            const docSnap = await getDoc(docRef);
    
            if (docSnap.exists()) {
                console.log(item);
                setItem({ id: docSnap.id, ...docSnap.data() });
            } else {
                console.log('No se encuentra el producto');
            }
        };
    
        traeProductoDesdeFirebase().catch(console.error);
    }, [id]);

    //Contexto del carrito

    const { addToCart } = useContext(CartContext);

    const handleAddToCart = (quantity) => {
        addToCart(item, quantity);
    };

    return (
        <>
            <div className={styles.detailContainer}>
                <img src={"../src/assets/img/" + item.id + "/1.jpeg"} alt={item.title} className={styles.image} />
                <h4 className={styles.title}>{item.title}</h4>
                <p className={styles.price}>${item.price}</p>
                <p className={styles.description}>{item.description}</p>
                <ItemCount initial={1} stock={10} onAdd={handleAddToCart} />
            </div>
        </>
    );
};

export default ItemDetailContainer;
