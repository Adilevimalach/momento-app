import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './components/Home';
import Header from './components/Header';
import Category from './components/Category';
import About from './components/About';
import Cart from './components/Cart';
import Payment from './components/Payment';
import PaymentProcessed from './components/PaymentProcessed';
import ControllerPurchase from './controller/pages/ControllerPurchase';
import { useLocation } from 'react-router-dom';

const ControllerWelcome = React.lazy(() => import('./controller/pages/ControllerWelcome'));
const ControllerTransition = React.lazy(() => import('./controller/pages/ControllerTransition'));
const ControllerSelection = React.lazy(() => import('./controller/pages/ControllerSelection'));
const ControllerLoading = React.lazy(() => import('./controller/pages/ControllerLoading'));
const ControllerVideo = React.lazy(() => import('./controller/pages/ControllerVideo'));
// const ControllerPurchase = React.lazy(() => import('./controller/pages/ControllerPurchase'));

export default function App() {
  const location = useLocation();
   const shouldHideHeader = location.pathname === '/' || location.pathname.startsWith('/controller') ||location.pathname.startsWith('/cart');
  
  const isController = location.pathname.startsWith('/controller');
  console.log(location.pathname);

  return (
    <>
      {!shouldHideHeader  && <Header />}
      <AnimatePresence mode="popLayout">
      
      <Routes location={location} key={location.pathname}>  
        <Route path="/controller" element={
          <Suspense fallback={<div style={{ color: '#fff', textAlign: 'center', marginTop: '2rem' }}>טוען...</div>}>
            <ControllerWelcome />
          </Suspense>
        } />

      
        <Route path="/controller/next" element={
          <Suspense fallback={<div style={{ color: '#fff', textAlign: 'center', marginTop: '2rem' }}>טוען...</div>}>
            <ControllerTransition />
          </Suspense>
        } />
        <Route path="/controller/selection" element={
          <Suspense fallback={<div style={{ color: '#fff', textAlign: 'center', marginTop: '2rem' }}>טוען...</div>}>
            <ControllerSelection />
          </Suspense>
        } />
        <Route path="/controller/loading/:videoId" element={
          <Suspense fallback={<div style={{ color: '#fff', textAlign: 'center', marginTop: '2rem' }}>טוען...</div>}>
            <ControllerLoading />
          </Suspense>
        } />
        <Route path="/controller/video/:videoId" element={
          <Suspense fallback={<div style={{ color: '#fff', textAlign: 'center', marginTop: '2rem' }}>טוען...</div>}>
            <ControllerVideo />
          </Suspense>
        } />
        {/* <Route path="/controller/purchase/:videoId" element={
          <Suspense fallback={<div style={{ color: '#fff', textAlign: 'center', marginTop: '2rem' }}>טוען...</div>}>
            <ControllerPurchase />
          </Suspense>
        } /> */}
        <Route path="/controller/purchase/:videoId" element={<ControllerPurchase />} />
        
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment-complete" element={<PaymentProcessed />} />
        <Route path="/:categoryId" element={<Category />} />
        
        <Route path="/" element={<ControllerWelcome />} />
        <Route path="/home" element={<Home />} />
        
       
      </Routes>
      
      </AnimatePresence>
    </>
  );
}
