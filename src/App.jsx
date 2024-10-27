import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import { ToastContainer } from 'react-toastify';
import MainCard from './components/cards/MainCard.jsx';
import '../src/styles/index.css'
import MenuDropdown from './components/menudropdown/MenuDropdown.jsx';


const stripePromise = loadStripe('your-stripe-public-key');



const App = () => {

  const [selectedCategory, setSelectedCategory] = useState("default");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  
  return (
    <Elements stripe={stripePromise}>
      <ToastContainer />
    <Router>
  
      <Navbar onCategoryChange={handleCategoryChange} />
      <MenuDropdown selectedCategory={selectedCategory} />
      {/* Остальные компоненты */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <MainCard />
      <Footer />
    </Router>
  </Elements>
  );
};

export default App;