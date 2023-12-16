import React from 'react';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import Footer from './components/Footer/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext/CartContext.jsx';
import Checkout from './components/Checkout/Checkout.jsx';

export default function App() {
    return (
        <BrowserRouter>
            <CartProvider>
                <NavBar />
                <main className='shadow-sm'>
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="/category/:id" element={<ItemListContainer />} />
                        <Route path="/item/:id" element={<ItemDetailContainer />} />
                        <Route path="*" element={<h1>Not Found</h1>} />
                        <Route path="/checkout" element={<Checkout /> } />
                    </Routes>
                </main>
                <Footer />
            </CartProvider>
        </BrowserRouter>
    );
}
