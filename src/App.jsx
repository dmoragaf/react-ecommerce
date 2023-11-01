import React from 'react'
import NavBar from './assets/components/NavBar/NavBar.jsx'
import ItemListContainer from './assets/components/ItemListContainer/ItemListContainer.jsx'
import Footer from './assets/components/Footer/Footer.jsx'
import './App.css'

export default function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="greeting" />
      <Footer />
    </div>
  )
}

