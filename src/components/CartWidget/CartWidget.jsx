import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { useNavigate } from 'react-router-dom'; 
import { Modal, Button, Table } from 'react-bootstrap';
import cartImage from './cart.svg';
import styles from './CartWidget.module.css';

const CartWidget = () => {
    const { cartItems, updateQuantity } = useContext(CartContext);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const [bump, setBump] = useState(false);

    const handleCartClick = () => {
        setShowModal(true);
    };


    useEffect(() => {
        if (cartItems.length === 0) {
            return;
        }

        setBump(true);

        const timer = setTimeout(() => {
            setBump(false);
        }, 300); // Duración ligeramente más corta que la animación

        return () => {
            clearTimeout(timer);
        };
    }, [cartItems]);

    const handleQuantityChange = (item, quantity) => {
        updateQuantity(item.id, quantity);
    };

    const totalGeneral = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handlePayClick = () => {
        setShowModal(false);
        navigate('/checkout');
    };

    return (
        <>
                {cartCount} <img src={cartImage} alt="Cart" width="40" height="40" onClick={handleCartClick}  />

            <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Carrito de Compras</Modal.Title>
                </Modal.Header>
                {cartItems.length === 0 ? (
                    <Modal.Body>
                        <p>El carrito está vacío</p>
                    </Modal.Body>
                ) : (
                <>
                    <Modal.Body>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item.id}>
                                        <td><img src={"../src/assets/img/" + item.id + "/1.jpeg"} alt={item.title} className={styles.imageStyle}/></td>
                                        <td>{item.title}</td>
                                        <td>${item.price}</td>
                                        <td>
                                            <input type="number" value={item.quantity} min="1" 
                                                onChange={(e) => handleQuantityChange(item, parseInt(e.target.value))} />
                                        </td>
                                        <td>${item.price * item.quantity}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan="4">Total Carrito</td>
                                    <td>${totalGeneral}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Modal.Body>
                    <Modal.Footer className="justify-content-center">
                        <Button variant="primary" size="lg" onClick={handlePayClick}>Pagar Carrito</Button>
                    </Modal.Footer>
                </>
                )}
            </Modal>
        </> 
    );
};

export default CartWidget;
