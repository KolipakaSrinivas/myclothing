import React from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'



import CartPage from '../src/components/CartPage/CartPage.component'
import ShopCollection from './components/ShopCollection/ShopCollection.component'
import Navbar from './components/Navbar/Navbar.component'
import Home from '../src/components/Home/Home.component'

function App() {

  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop/:id' element={<ShopCollection/>} />
        <Route path='/cart' element={< CartPage/>}/>
      </Routes>
      
      
      

    </div>
  )
}

export default App
