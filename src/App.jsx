import React from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'




import ShopCollection from './components/ShopCollection/ShopCollection.component'
import Navbar from './components/Navbar/Navbar.component'
import Home from '../src/components/Home/Home.component'

function App() {

  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<ShopCollection />} />
      </Routes>
      
      
      

    </div>
  )
}

export default App
