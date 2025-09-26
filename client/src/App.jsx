import React from 'react'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import Hero from './pages/Hero'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchProduct from './pages/SearchProduct'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/product/search/:term' element={<SearchProduct/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
