import React from 'react'
import './App.css'





import Navbar from './components/Navnbar/Navbar.component';
import Product from './components/products/Prodacts.component';
import Preview from './components/Preview/Preview.component'


function App() {

  return (
    <div className="App">
      <Navbar/>
      <Product/>
      <Preview/>

    </div>
  )
}

export default App
