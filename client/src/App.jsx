import React from 'react'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import Hero from './pages/Hero'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchProduct from './pages/SearchProduct'
import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/product/search/:term' element={<SearchProduct/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
