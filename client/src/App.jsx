import React from 'react'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import Hero from './pages/Hero'
import Cart from './pages/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Hero />} />
          {/* <Route path='/products' element={<Products />} /> */}
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
