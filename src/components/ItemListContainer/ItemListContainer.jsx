import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './ItemListContainer.module.css';
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc, limit, query, where, onSnapshot } from "firebase/firestore";
import { db } from '../../firebase/client';

const ItemListContainer = () => { 
    const { id  } = useParams();
    const navigate = useNavigate();
    const [items, setItems] = useState([]);

    useEffect(() => {
        let q;
        if (id) {
            q = query(
                collection(db, "products"),
                where("category", "==", id)
            );
        } else {
            q = query(
                collection(db, "products"),
            );
        }
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id});
            });
            setItems(docs);
        }
        );
        return () => unsubscribe();
    }
    , [id]);


    const handleItemClick = (itemId) => {
        navigate(`/item/${itemId}`);
    };

    return (
        <div className='flex-shrink-0 container'>
            <div className='row m-1'>
            {items.map(item => (
                <div key={item.id} className={`card col-12 col-md-6 col-lg-4 text-center ${styles.card}`} onClick={() => handleItemClick(item.id)}>                    
                <div className='card-head'>
                      <h4 className='text-truncate'>{item.title}</h4>
                    </div>
                    <div className='card-body'>
                    <img src={"../src/assets/img/" + item.id + "/1.jpeg"} alt={item.title} className={styles.imageStyle}/>
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
