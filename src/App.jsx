import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Category from './components/Category';
import About from './components/About';
import Cart from './components/Cart';
import Payment from './components/Payment';
import PaymentProcessed from './components/PaymentProcessed';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:categoryId" element={<Category />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment-complete" element={<PaymentProcessed />} />
      </Routes>
    </>
  );
}
