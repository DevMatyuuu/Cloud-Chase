import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetails from './pages/ProductDetails';
import Search from './pages/Search';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App