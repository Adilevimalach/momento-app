
// // import React, { useEffect, useState } from 'react';
// // import { getCart, removeAllFromCart } from '../utils/cart';
// // import { getVideoById } from '../constants/videos';
// // import '../styles/Cart.css'; // Or a dedicated Cart.css if you want
// // import goToPaymentButton from '../assets/buttons/process to pay1.svg';
// // import { useNavigate } from 'react-router-dom';
// // import cartLogoLeft from '../assets/icons/logoM.svg'; 
// // import cartLogoRight from '../assets/icons/exit.svg';



// // export default function Cart() {
// //   const navigate = useNavigate();
// //   const [cartItems, setCartItems] = useState([]);

// //   useEffect(() => {
// //     // Load cart items from localStorage
// //     const cart = getCart();
// //     // Map to array of { id, quantity, ...video }
// //     console.log(cart);
// //     const items = Object.entries(cart).map(([id, quantity]) => {
// //       const video = getVideoById(id);
// //       return video ? { ...video, quantity } : null;
// //     }).filter(Boolean);
// //     setCartItems(items);
// //   }, []);

// //   const handleRemove = (id) => {
// //     removeAllFromCart(id);
// //     setCartItems(items => items.filter(item => item.id !== id));
// //   };

// //   return (
// //     <div className="cart-page">

// //       <header className="cart-header">
// //         <div className="shipping-banner">
// //           <p>משלוח חינם ברכישת 2 בקבוקים ומעלה • עד סוף התערוכה</p>
// //         </div>
// //         <div className="logo-bar">
// //           <img src={cartLogoLeft} alt="Momento Logo" className="header-logo" />
// //           <img src={cartLogoRight} alt="Cart Logo" className="header-logo" />
// //         </div>
// //         <div className="checkout-progress">
// //         <h2 className="progress-title">הסל שלך</h2>
// //         <div className="progress-steps">
// //           <span className="dot active"></span>
// //           <span className="step active">סל קניות</span>
// //           <span className="dot"></span>
// //           <span className="step">פרטים אישיים</span>
// //           <span className="dot"></span>
// //           <span className="step">תשלום</span>
// //           <span className="dot"></span>
// //         </div>
// //       </div>
// //       </header>
// //       <div className="cart-container">
        
// //         {cartItems.length === 0 ? (
// //           <div className="cart-empty">הסל ריק</div>
// //         ) : (
// //           <>
// //             {cartItems.map(item => (
// //               <div key={item.id} className="cart-item">
// //                 <div className="cart-item-details">
// //                   <div className="cart-item-label">{item.label}</div>

// //                   {item.quantity > 1 && <div className="cart-item-qty">x{item.quantity}</div>}
// //                   <div className="flex-grow"> </div>
// //                   <button className="cart-remove-btn" onClick={() => handleRemove(item.id)}>הסרה</button>
// //                   <div className="cart-item-price">₪{item.price * item.quantity}</div>
// //                 </div>
// //                 <div className="cart-item-media">
// //                   <video
// //                     src={item.checkoutVideo}
// //                     className="cart-item-video"
// //                     autoPlay
// //                     loop
// //                     muted
// //                     playsInline
// //                   />
// //                 </div>
// //               </div>
// //             ))}
// //             <div className="cart-checkout-btn" onClick={() => navigate('/payment')}>
// //               <img src={goToPaymentButton} alt="go to payment" />
// //             </div>
// //           </>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { getCart, removeAllFromCart } from '../utils/cart';
// import { getVideoById } from '../constants/videos';
// import goToPaymentButton from '../assets/buttons/process to pay1.svg';
// import cartLogoLeft from '../assets/icons/logoM.svg'; 
// import cartLogoRight from '../assets/icons/exit.svg';
// import '../styles/Cart.css';


// const checkoutSteps = [
//   { id: 'cart', name: 'סל קניות' },
//   { id: 'details', name: 'פרטים אישיים' },
//   { id: 'payment', name: 'תשלום' },
// ];

// export default function Cart() {
//   const navigate = useNavigate();
//   const [cartItems, setCartItems] = useState([]);

//    const [activeStepId, setActiveStepId] = useState('cart');
//   const activeStep = checkoutSteps.find(step => step.id === activeStepId);

//   const handleStepClick = (stepId) => {
//     setActiveStepId(stepId);
//    };

//   useEffect(() => {
//     const cart = getCart();
//     const items = Object.entries(cart).map(([id, quantity]) => {
//       const video = getVideoById(id);
//       return video ? { ...video, quantity } : null;
//     }).filter(Boolean);
//     setCartItems(items);
//   }, []);

//   const handleRemove = (id) => {
//     removeAllFromCart(id);
//     setCartItems(items => items.filter(item => item.id !== id));
//   };

//   return (
//     <div className="cart-page">
//       <header className="cart-header">
//         <div className="shipping-banner">
//           <p>משלוח חינם ברכישת 2 בקבוקים ומעלה • עד סוף התערוכה</p>
//         </div>
//         <div className="logo-bar">
//           <img src={cartLogoLeft} alt="Momento Logo" className="header-logo" />
//           <img src={cartLogoRight} alt="Cart Logo" className="header-logo" />
//         </div>
        
//         <div className="checkout-progress">
//           <div className="progress-steps">
//             <span className="dot"></span>
//             {checkoutSteps.map((step, index) => (
//               <React.Fragment key={step.id}>
//                 <span 
//                   className={`step ${step.id === activeStepId ? 'active' : ''}`}
//                   onClick={() => handleStepClick(step.id)}
//                 >
//                   {step.name}
//                 </span>
//                 <span className="dot"></span>
//               </React.Fragment>
//             ))}
//           </div>

//           <h2 className="progress-title">
//             {activeStep ? activeStep.name : 'הסל שלך'}
//           </h2>
//         </div>
//       </header>

//       <div className="cart-container">
//        {cartItems.length === 0 ? (
//           <div className="cart-empty">הסל ריק</div>
//         ) : (
//           <>
//             {cartItems.map(item => (
//               <div key={item.id} className="cart-item">
//                 <div className="cart-item-details">
//                   <div className="cart-item-label">{item.label}</div>
//                   {item.quantity > 1 && <div className="cart-item-qty">x{item.quantity}</div>}
//                   <div className="flex-grow"></div>
//                   <button className="cart-remove-btn" onClick={() => handleRemove(item.id)}>הסרה</button>
//                   <div className="cart-item-price">₪{item.price * item.quantity}</div>
//                 </div>
//                 <div className="cart-item-media">
//                   <video
//                     src={item.checkoutVideo}
//                     className="cart-item-video"
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                   />
//                 </div>
//               </div>
//             ))}
//             <div className="cart-checkout-btn" onClick={() => navigate('/payment')}>
//               <img src={goToPaymentButton} alt="go to payment" />
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCart, addToCart, removeFromCart, removeAllFromCart } from '../utils/cart';
import { getVideoById } from '../constants/videos';
import goToPaymentButton from '../assets/buttons/process to pay1.svg';
import cartLogoLeft from '../assets/icons/logoM.svg';
import cartLogoRight from '../assets/icons/exit.svg';
import plusIcon from '../assets/icons/plus.svg'; // ייבא אייקון לפלוס
import minusIcon from '../assets/icons/minus.svg'; // ייבא אייקון למינוס
import '../styles/Cart.css';

const checkoutSteps = [
  { id: 'cart', name: 'סל קניות' },
  { id: 'details', name: 'פרטים אישיים' },
  { id: 'payment', name: 'תשלום' },
];

export default function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [activeStepId, setActiveStepId] = useState('cart');
  const activeStep = checkoutSteps.find(step => step.id === activeStepId);

  const updateCartState = () => {
    const cart = getCart();
    const items = Object.entries(cart).map(([id, quantity]) => {
      const video = getVideoById(id);
      return video ? { ...video, quantity } : null;
    }).filter(Boolean);
    setCartItems(items);
  };

  useEffect(() => {
    updateCartState();
  }, []);

  const handleStepClick = (stepId) => {
    setActiveStepId(stepId);
    navigate(`/${stepId}`);
  };
  
  // פונקציות חדשות לניהול כמות
  const handleIncrease = (id) => {
    addToCart(id);
    updateCartState();
  };

  const handleDecrease = (id) => {
    removeFromCart(id);
    updateCartState();
  };

  // חישוב הסכום הכולל
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <header className="cart-header">
        {/* ... Header code remains the same ... */}
        <div className="shipping-banner"><p>משלוח חינם ברכישת 2 בקבוקים ומעלה • עד סוף התערוכה</p></div>
        <div className="logo-bar">
          <img src={cartLogoLeft} alt="Momento Logo" className="header-logo" onClick={() => navigate('/about')}/>
          <img src={cartLogoRight} alt="Close" className="header-logo" onClick={() => navigate('/home')} />
        </div>
        <div className="checkout-progress">
          <div className="progress-steps">
            <span className="dot"></span>
            {checkoutSteps.map((step) => (
              <React.Fragment key={step.id}>
                <span className={`step ${step.id === activeStepId ? 'active' : ''}`} onClick={() => handleStepClick(step.id)}>
                  {step.name}
                </span>
                <span className="dot"></span>
              </React.Fragment>
            ))}
          </div>
          <h2 className="progress-title">{activeStep ? activeStep.name : 'הסל שלך'}</h2>
        </div>
      </header>

      {/* ============== תצוגה מותנית לגוף הדף ============== */}
      <div className="cart-content">
        {activeStepId === 'cart' && (
          <div className="cart-container">
            {cartItems.length === 0 ? (
              <div className="cart-empty">הסל ריק</div>
            ) : (
              <>
                {cartItems.map(item => (
                  <React.Fragment key={item.id}>
                    <div className="cart-item-row">
                      <div className="item-info">
                        <span className="item-name">{item.label}</span>
                        <div className="quantity-control">
                          <div className="price-control">
                          <span className="item-price">₪{item.price * item.quantity}</span>
                          </div>
                            <button onClick={() => handleDecrease(item.id)} className="quantity-btn">
                              <img src={minusIcon} alt="Decrease quantity" />
                            </button>
                            <span>{item.quantity}</span>
                            <button onClick={() => handleIncrease(item.id)} className="quantity-btn">
                              <img src={plusIcon} alt="Increase quantity" />
                            </button>
                        
                        </div>
                      </div>
                      <div className="cart-item-media">
                      <video
                        src={item.checkoutVideo}
                        className="cart-item-video"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    </div>
                    </div>
                    <div className="dotted-separator"></div>
                  </React.Fragment>
                ))}

                <div className="cart-total-footer">
                  
                  <button className="payment-button" onClick={() => navigate('/payment')}>
                    payment
                  </button>
                  <div className="total-text">
                    <span className="total-label">סה"כ לתשלום</span>
                    <span className="total-amount">₪{totalAmount}</span>
                  </div>
                </div>

                
              </>
            )}
          </div>
        )}
        
        {activeStepId === 'details' && (
          <div className="details-container">פרטי משלוח יופיעו כאן</div>
        )}

        {/* {activeStepId === 'payment' && (
          <div className="payment-container">אמצעי תשלום יופיעו כאן</div>
        )} */}
      </div>
    </div>
  );
}