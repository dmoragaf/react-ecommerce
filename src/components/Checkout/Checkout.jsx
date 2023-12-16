import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const Checkout = () => {
    const { cartItems } = useContext(CartContext); 
    const precioTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const cantidadProductos = cartItems.reduce((total, item) => total + item.quantity, 0);
    const db = getFirestore();

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const buyer = {
            name: event.target.name.value,
            phone: event.target.phone.value,
            email: event.target.email.value,
        };
        const order = {
            buyer,
            items: cartItems.map(({ id, title, price, quantity }) => ({ id, title, price, quantity })),
            total: precioTotal,
        };

        try {
            const docRef = await addDoc(collection(db, "orders"), order);
            console.log("Orden registrada con ID: ", docRef.id);
            //printorder 
            alert(`Orden registrada:\nID: ${docRef.id}\n` + JSON.stringify(order, null, 2));
        } catch (e) {
            console.error("Error al añadir documento: ", e);
            alert("Error al añadir documento: " + e);
        }
    };

    return (
        <div className='container'>
            <form onSubmit={handleFormSubmit}>
                <div className='text-center'>
                    <h3>Resumen del Pedido</h3>
                </div>
                <div>
                    <p>Cantidad de productos: {cantidadProductos}</p>
                    <p>Pagaras: ${precioTotal}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" className="form-control" id="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Dirección</label>
                    <input type="text" className="form-control" id="address" required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Teléfono</label>
                    <input type="text" className="form-control" id="phone" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input type="email" className="form-control" id="email" required />
                </div>
                <input type="hidden" id="total" value={precioTotal} />
                <div className="text-center">
                    <button type="submit" className="btn btn-primary mt-3" size="lg" >Finalizar pedido</button>
                </div>
            </form>

        </div>
    );
};

export default Checkout;
