import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import Footer from './components/Footer/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
    const [cartCount, setCartCount] = useState(0);

    const addToCart = (quantity) => {
        setCartCount(cartCount + quantity);
    };

    return (
        <BrowserRouter>
            <NavBar cartCount={cartCount} />
            <main>
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/category/:id" element={<ItemListContainer />} />
                    <Route path="/item/:id" element={<ItemDetailContainer addToCart={addToCart} />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
}
