
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { getCart, addToCart, removeFromCart } from '../utils/cart';
// import { getVideoById } from '../constants/videos';

// import cartLogoLeft from '../assets/icons/logoM.svg';
// import cartLogoRight from '../assets/icons/exit.svg';
// import plusIcon from '../assets/icons/plus.svg'; 
// import minusIcon from '../assets/icons/minus.svg'; 
// import '../styles/Cart.css';
// import DetailsForm from './DetailsForm'; 
// import Payment from './Payment'; 

// const checkoutSteps = [
//     { id: 'cart', name: 'סל קניות', order: 0 },
//   { id: 'details', name: 'פרטים אישיים', order: 1 },
//   { id: 'payment', name: 'תשלום', order: 2 },
// ];

// export default function Cart() {
//   const navigate = useNavigate();
//   const [cartItems, setCartItems] = useState([]);
  

//   const [activeStepId, setActiveStepId] = useState(() => {
//     const savedStep = sessionStorage.getItem('checkoutStep');
//     // return savedStep ? savedStep : 'cart';
//     return 'cart'; // Default to 'cart' if no saved step
//   });
  
//   const activeStep = checkoutSteps.find(step => step.id === activeStepId);


//   useEffect(() => {
//     sessionStorage.setItem('checkoutStep', activeStepId);
//   }, [activeStepId]);

//   const updateCartState = () => {
//     const cart = getCart();
//     const items = Object.entries(cart).map(([id, quantity]) => {
//       const video = getVideoById(id);
//       return video ? { ...video, quantity } : null;
//     }).filter(Boolean);
//     setCartItems(items);
//   };

//   useEffect(() => {
//     updateCartState();
//   }, []);

//   const handleStepClick = (stepId) => {
//     setActiveStepId(stepId);
//   };
  
//   const handleIncrease = (id) => {
//     addToCart(id);
//     updateCartState();
//   };

//   const handleDecrease = (id) => {
//     removeFromCart(id);
//     updateCartState();
//   };

//   const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div className={`cart-page ${activeStepId === 'details' ? 'details-view' : ''}`}>
//       <header className="cart-header">
//         <div className="shipping-banner"><p>משלוח חינם ברכישת 2 בקבוקים ומעלה • עד סוף התערוכה</p></div>
//         <div className="logo-bar">
//           <img src={cartLogoLeft} alt="Momento Logo" className="header-logo-left" onClick={() => navigate('/about')}/>
//           <img src={cartLogoRight} alt="Close" className="header-logo" 
//           onClick={() => {
//             navigate('/home')
//             setActiveStepId('cart'); // Reset to cart step on close
//             }} />
//         </div>
//         <div className={`checkout-progress ${activeStepId === 'details' ? 'details-view' : ''}`}>
//           <div className="progress-steps">
//             {(() => {
//               const activeStepOrder = activeStep ? activeStep.order : -1;
//               return (
//                 <>
//                   <span className={`dot ${activeStepOrder >= 0 ? 'active' : ''}`}></span>
//                   <span 
//                     className={`step ${activeStepOrder >= 0 ? 'active' : ''}`} 
//                     onClick={() => handleStepClick('cart')} 
//                   >
//                     {checkoutSteps[0].name}
//                   </span>
//                   {[...Array(4)].map((_, i) => (
//                     <span key={`dot-1-${i}`} className={`dot ${activeStepOrder >= 1 ? 'active' : ''}`}></span>
//                   ))}
//                   <span 
//                     className={`step ${activeStepOrder >= 1 ? 'active' : ''}`}
//                     onClick={() => handleStepClick('details')} 
//                   >
//                     {checkoutSteps[1].name}
//                   </span>
//                   {[...Array(3)].map((_, i) => (
//                     <span key={`dot-2-${i}`} className={`dot ${activeStepOrder >= 2 ? 'active' : ''}`}></span>
//                   ))}
//                   <span 
//                     className={`step ${activeStepOrder >= 2 ? 'active' : ''}`}
//                     onClick={() => handleStepClick('payment')} 
//                   >
//                     {checkoutSteps[2].name}
//                   </span>
//                   <span className="dot"></span>
//                 </>
//               );
//             })()}
//           </div>
//           {activeStepId === 'cart' ? (
//             <h2 className="progress-title">הסל שלך</h2>
//           ) : activeStepId === 'details' ? (
//             <h2 className="progress-title">פרטי התקשרות</h2>
//           ) : null}
//         </div>
//       </header>

//       <div className={`cart-content ${activeStepId === 'details' ? 'details-view-content' : ''}`}>
//         {activeStepId === 'cart' && (
//           <div className="cart-container">
//             {cartItems.length === 0 ? (
//               <div className="cart-empty">הסל ריק</div>
//             ) : (
//               <>
//                 {cartItems.map(item => (
//                   <React.Fragment key={item.id}>
//                     <div className="cart-item-row">
//                       <div className="item-info">
//                         <span className="item-name">{item.label}</span>
//                         <div className="controls-row">
//                           <div className="quantity-control">
//                             <button onClick={() => handleDecrease(item.id)} className="quantity-btn">
//                               <img src={minusIcon} alt="Decrease quantity" />
//                             </button>
//                             <span>{item.quantity}</span>
//                             <button onClick={() => handleIncrease(item.id)} className="quantity-btn">
//                               <img src={plusIcon} alt="Increase quantity" />
//                             </button>
//                           </div>
//                           <div className="price-control">
//                             <span className="item-price">₪{item.price * item.quantity}</span>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="cart-item-media">
//                         <video
//                           src={item.checkoutVideo}
//                           className="cart-item-video"
//                           autoPlay
//                           loop
//                           muted
//                           playsInline
//                         />
//                       </div>
//                     </div>
//                     <div className="dotted-separator"></div>
//                   </React.Fragment>
//                 ))}
//               </>
//             )}
//           </div>
//         )}
        
//         {activeStepId === 'details' && (
//           <DetailsForm onFormSubmit={() => handleStepClick('payment')}  />
//         )}
//         {activeStepId === 'payment' && (
//           <Payment />
//         )}
//       </div>

//       {activeStepId === 'cart' && cartItems.length > 0 && (
//         <div className="cart-total-footer">
//           <button className="payment-button" onClick={() => handleStepClick('details')}>
//             payment
//           </button>
//           <div className="total-text">
//             <span className="total-label">סה"כ לתשלום</span>
//             <span className="total-amount">₪{totalAmount}</span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCart, addToCart, removeFromCart } from '../utils/cart';
import { getVideoById } from '../constants/videos';

import cartLogoLeft from '../assets/icons/logoM.svg';
import cartLogoRight from '../assets/icons/exit.svg';
import plusIcon from '../assets/icons/plus.svg'; 
import minusIcon from '../assets/icons/minus.svg'; 
import '../styles/Cart.css';
import DetailsForm from './DetailsForm'; 
import Payment from './Payment'; 

const checkoutSteps = [
  { id: 'cart', name: 'סל קניות', order: 0 },
  { id: 'details', name: 'פרטים אישיים', order: 1 },
  { id: 'payment', name: 'תשלום', order: 2 },
];

export default function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [activeStepId, setActiveStepId] = useState('cart');
  const [isProgressVisible, setIsProgressVisible] = useState(true);
  const activeStep = checkoutSteps.find(step => step.id === activeStepId);

  useEffect(() => {
    sessionStorage.setItem('checkoutStep', activeStepId);
  }, [activeStepId]);

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

  const handleStepClick = (targetStepId) => {
    const targetStep = checkoutSteps.find(step => step.id === targetStepId);
    if (!targetStep) return;

    const currentOrder = activeStep.order;
    const targetOrder = targetStep.order;

    if (targetOrder < currentOrder) {
      setActiveStepId(targetStepId);
      return;
    }

    if (targetOrder === currentOrder + 1) {
      if (activeStep.id === 'cart' && cartItems.length === 0) {
        alert('הסל שלך ריק, לא ניתן להמשיך.');
        return;
      }
      setActiveStepId(targetStepId);
    }
  };
  
  const handleIncrease = (id) => {
    addToCart(id);
    updateCartState();
  };

  const handleDecrease = (id) => {
    removeFromCart(id);
    updateCartState();
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={`cart-page ${activeStepId === 'details' ? 'details-view' : ''}`}>
      <header className="cart-header">
        <div className="shipping-banner"><p>משלוח חינם ברכישת 2 בקבוקים ומעלה • עד סוף התערוכה</p></div>
        <div className="logo-bar">
          <img src={cartLogoLeft} alt="Momento Logo" className="header-logo-left" onClick={() => navigate('/about')}/>
          <img src={cartLogoRight} alt="Close" className="header-logo" onClick={() => navigate('/home')} />
        </div>
        
        {isProgressVisible && (
          <div className={`checkout-progress ${activeStepId === 'details' ? 'details-view' : ''}`}>
            <div className="progress-steps">
              {(() => {
                const activeStepOrder = activeStep ? activeStep.order : -1;
                return (
                  <>
                    <span className={`dot ${activeStepOrder >= 0 ? 'active' : ''}`}></span>
                    <span 
                      className={`step ${activeStepOrder >= 0 ? 'active' : ''}`} 
                      onClick={() => handleStepClick('cart')} 
                    >
                      {checkoutSteps[0].name}
                    </span>
                    {[...Array(4)].map((_, i) => (
                      <span key={`dot-1-${i}`} className={`dot ${activeStepOrder >= 1 ? 'active' : ''}`}></span>
                    ))}
                    <span 
                      className={`step ${activeStepOrder >= 1 ? 'active' : ''}`}
                      onClick={() => handleStepClick('details')} 
                    >
                      {checkoutSteps[1].name}
                    </span>
                    {[...Array(3)].map((_, i) => (
                      <span key={`dot-2-${i}`} className={`dot ${activeStepOrder >= 2 ? 'active' : ''}`}></span>
                    ))}
                    <span 
                      className={`step ${activeStepOrder >= 2 ? 'active' : ''}`}
                      onClick={() => handleStepClick('payment')} 
                    >
                      {checkoutSteps[2].name}
                    </span>
                    <span className="dot"></span>
                  </>
                );
              })()}
            </div>
            {activeStepId === 'cart' ? (
              <h2 className="progress-title">הסל שלך</h2>
            ) : activeStepId === 'details' ? (
              <h2 className="progress-title">פרטי התקשרות</h2>
            ) : null}
          </div>
        )}
      </header>

      <div className={`cart-content ${activeStepId === 'details' ? 'details-view-content' : ''}`}>
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
                        <div className="controls-row">
                          <div className="quantity-control">
                            <button onClick={() => handleDecrease(item.id)} className="quantity-btn">
                              <img src={minusIcon} alt="Decrease quantity" />
                            </button>
                            <span>{item.quantity}</span>
                            <button onClick={() => handleIncrease(item.id)} className="quantity-btn">
                              <img src={plusIcon} alt="Increase quantity" />
                            </button>
                          </div>
                          <div className="price-control">
                            <span className="item-price">₪{item.price * item.quantity}</span>
                          </div>
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
              </>
            )}
          </div>
        )}
        
        {activeStepId === 'details' && (
          <DetailsForm onFormSubmit={() => handleStepClick('payment')}  />
        )}

        {activeStepId === 'payment' && (
          <Payment onHideProgressBar={() => setIsProgressVisible(false)} />
        )}
      </div>

      {activeStepId === 'cart' && cartItems.length > 0 && (
        <div className="cart-total-footer">
          <button className="payment-button" onClick={() => handleStepClick('details')}>
            payment
          </button>
          <div className="total-text">
            <span className="total-label">סה"כ לתשלום</span>
            <span className="total-amount">₪{totalAmount}</span>
          </div>
        </div>
      )}
    </div>
  );
}