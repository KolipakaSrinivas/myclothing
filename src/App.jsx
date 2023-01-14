import React from 'react'
import './App.css'





import Navbar from './components/Navnbar/Navbar.component';
import Product from './components/products/Prodacts.component';
import Items from './components/Items/Items.componet'


function App() {

  return (
    <div className="App">
      <Navbar/>
      <Product/>
      <Items/>

    </div>
  )
}

export default App
