import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Category from './components/Category';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:categoryId" element={<Category />} />
      </Routes>
    </>
  );
}
