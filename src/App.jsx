
// import React, { Suspense } from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import { AnimatePresence } from 'framer-motion';

// import Home             from './components/Home';
// import Header           from './components/Header';
// import Category         from './components/Category';
// import About            from './components/About';
// import Cart             from './components/Cart';
// import Payment          from './components/Payment';
// import PaymentProcessed from './components/PaymentProcessed';

// const ControllerPurchase   = React.lazy(() => import('./controller/pages/ControllerPurchase'));
// const ControllerWelcome    = React.lazy(() => import('./controller/pages/ControllerWelcome'));
// const ControllerTransition = React.lazy(() => import('./controller/pages/ControllerTransition'));
// const ControllerSelection  = React.lazy(() => import('./controller/pages/ControllerSelection'));
// const ControllerLoading    = React.lazy(() => import('./controller/pages/ControllerLoading'));
// const ControllerVideo      = React.lazy(() => import('./controller/pages/ControllerVideo'));

// export default function App() {
//   const location = useLocation();

//   const shouldHideHeader =
//     location.pathname === '/' ||
//     location.pathname.startsWith('/controller') ||
//     location.pathname.startsWith('/cart');

//   const isController = location.pathname.startsWith('/controller'); // נשאר אם תזדקק לו בהמשך

//   return (
//     <>
//       {!shouldHideHeader && <Header />}

//       {/* Suspense אחד סביב כל המערכת */}
//       <Suspense fallback={<div style={{ color: '#fff', textAlign: 'center', marginTop: '2rem' }}>טוען...</div>}>
//         <AnimatePresence mode="sync">
//           <Routes location={location} key={location.pathname}>
//             <Route path="/controller"                        element={<ControllerWelcome />} />
//             <Route path="/controller/next"                   element={<ControllerTransition />} />
//             <Route path="/controller/selection"              element={<ControllerSelection />} />
//             <Route path="/controller/loading/:videoId"       element={<ControllerLoading />} />
//             <Route path="/controller/video/:videoId"         element={<ControllerVideo />} />
//             <Route path="/controller/purchase/:videoId"      element={<ControllerPurchase />} />

//             <Route path="/about"              element={<About />} />
//             <Route path="/cart"               element={<Cart />} />
//             <Route path="/payment"            element={<Payment />} />
//             <Route path="/payment-complete"   element={<PaymentProcessed />} />

//             <Route path="/:categoryId" element={<Category />} />
//             <Route path="/"           element={<ControllerWelcome />} />
//             <Route path="/home"       element={<Home />} />
//           </Routes>
//         </AnimatePresence>
//       </Suspense>
//     </>
//   );
// }

import React, { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home             from './components/Home';
import Header           from './components/Header';
import Category         from './components/Category';
import About            from './components/About';
import Cart             from './components/Cart';
import Payment          from './components/Payment';
import PaymentProcessed from './components/PaymentProcessed';

const ControllerPurchase   = React.lazy(() => import('./controller/pages/ControllerPurchase'));
const ControllerWelcome    = React.lazy(() => import('./controller/pages/ControllerWelcome'));
const ControllerTransition = React.lazy(() => import('./controller/pages/ControllerTransition'));
const ControllerSelection  = React.lazy(() => import('./controller/pages/ControllerSelection'));
const ControllerLoading    = React.lazy(() => import('./controller/pages/ControllerLoading'));
const ControllerVideo      = React.lazy(() => import('./controller/pages/ControllerVideo'));

export default function App() {
  const location = useLocation();

  const shouldHideHeader =
    location.pathname === '/' ||
    location.pathname.startsWith('/controller') ||
    location.pathname.startsWith('/cart');

  return (
    <>
      {!shouldHideHeader && <Header />}

    
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/controller"
            element={
              <Suspense fallback={null}>
                <ControllerWelcome />
              </Suspense>
            }
          />
          <Route
            path="/controller/next"
            element={
              <Suspense fallback={null}>
                <ControllerTransition />
              </Suspense>
            }
          />
          <Route
            path="/controller/selection"
            element={
              <Suspense fallback={null}>
                <ControllerSelection />
              </Suspense>
            }
          />
          <Route
            path="/controller/loading/:videoId"
            element={
              <Suspense fallback={null}>
                <ControllerLoading />
              </Suspense>
            }
          />
          <Route
            path="/controller/video/:videoId"
            element={
              <Suspense fallback={null}>
                <ControllerVideo />
              </Suspense>
            }
          />
          <Route
            path="/controller/purchase/:videoId"
            element={
              <Suspense fallback={null}>
                <ControllerPurchase />
              </Suspense>
            }
          />

          {/* דפים רגילים – אין צורך ב-lazy או Suspense */}
          <Route path="/about"            element={<About />} />
          <Route path="/cart"             element={<Cart  />} />
          <Route path="/payment"          element={<Payment />} />
          <Route path="/payment-complete" element={<PaymentProcessed />} />
          <Route path="/:categoryId"      element={<Category />} />
          <Route path="/"                 element={<ControllerWelcome />} />
          <Route path="/home"             element={<Home />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
