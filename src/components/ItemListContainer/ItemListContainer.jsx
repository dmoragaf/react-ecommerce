import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './ItemListContainer.module.css';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => { 
    const { id } = useParams();
    const navigate = useNavigate();
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then(response => {
            if (id) {
                setItems(response.data.filter(item => item.category === id));
            } else {
                setItems(response.data);
            }
        })
        .catch(error => console.log(error));
    }, [id]);

    const handleItemClick = (itemId) => {
        navigate(`/item/${itemId}`);
    };

    return (
        <div className='flex-shrink-0 container'>
            <div className='row m-1'>
            {items.map(item => (
                <div key={item.id} className={`card col-12 col-md-6 col-lg-4 text-center ${styles.card}`} onClick={() => handleItemClick(item.id)}>                    <div className='card-head'>
                      <h4 className='text-truncate'>{item.title}</h4>
                    </div>
                    <div className='card-body'>
                      <img src={item.image} alt={item.title} className={styles.imageStyle}/>
                    </div>
                    <div className='card-footer bg-transparent'>
                      <p className='text-truncate'>${item.price}</p>
                    </div>
                </div>
            ))}

            </div>
        </div>
    );
};

export default ItemListContainer;
