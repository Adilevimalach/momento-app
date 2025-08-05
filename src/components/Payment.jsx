// import React, { useState } from 'react';
// import mastercardFront from '../assets/buttons/mastercard1.svg';

// import paypalIcon from '../assets/buttons/paypal.svg';
// import applePayIcon from '../assets/buttons/apple pay.svg';
// import buyButton from '../assets/buttons/to buy1.svg';
// import '../styles/Payment.css';
// import { useNavigate } from 'react-router-dom';
// import { clearCart } from '../utils/cart';


// export default function Payment() {
//   const navigate = useNavigate();
//   const [isAnimating, setIsAnimating] = useState(false);

//   const handleBuyClick = () => {
//     if (isAnimating) return;
    
//     setIsAnimating(true);
    
//     // Clear the cart
//     clearCart();
    
//     // Add a slight delay for the animation to complete before navigating
//     setTimeout(() => {
//       navigate('/payment-complete');
//     }, 300); // Match this with the CSS animation duration
//   };

//   return (
//     <div className="payment-page">
//       <div className="payment-card-stack">
//         {/* <img src={mastercardBack} alt="card shadow" className="card-back" /> */}
//         <img src={mastercardFront} alt="mastercard" className="card-front" />
//       </div>
//       <div className="payment-or">או תשלום באמצעות</div>
//       <div className="payment-options">
//         <img src={paypalIcon} alt="Paypal" />
//         <img src={applePayIcon} alt="Apple Pay" />
//       </div>
//       <button 
//         className={`buy-button ${isAnimating ? 'pulse-effect' : ''}`}
//         onClick={handleBuyClick}
//         disabled={isAnimating}
//       >
//         <img src={buyButton} alt="buy now" className="buy-button-img" />
//       </button>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../utils/cart';


import loadingVideo from '../assets/buttons/loading-animation.mp4'; // שנה לנתיב הנכון של סרטון הטעינה
import successIcon from '../assets/buttons/v after buying.svg';    // שנה לנתיב הנכון של אייקון ה-V

import mastercardFront from '../assets/buttons/mastercard1.svg';
import paypalIcon from '../assets/buttons/paypal.svg';
import applePayIcon from '../assets/buttons/apple pay.svg';
import buyButton from '../assets/buttons/to buy1.svg';
import '../styles/Payment.css';

export default function Payment() {
  const navigate = useNavigate();
 
  const [viewState, setViewState] = useState('idle'); // 'idle', 'loading', 'success'

  const handleBuyClick = () => {
    
    if (viewState !== 'idle') return;
    
   
    setViewState('loading');
    clearCart();
    
    
    setTimeout(() => {
      setViewState('success');
      
     
      setTimeout(() => {
        navigate('/payment-complete');
      }, 1500); 
    }, 3000); 
  };

  return (
    <div className="payment-page">
      
      {viewState === 'idle' && (
        <>
          <div className="payment-card-stack">
            <img src={mastercardFront} alt="mastercard" className="card-front" />
          </div>
          <div className="payment-or">או תשלום באמצעות</div>
          <div className="payment-options">
            <img src={paypalIcon} alt="Paypal" />
            <img src={applePayIcon} alt="Apple Pay" />
          </div>
          <button 
            className="buy-button"
            onClick={handleBuyClick}
          >
            <img src={buyButton} alt="buy now" className="buy-button-img" />
          </button>
        </>
      )}


      {viewState === 'loading' && (
        <div className="loading-container">
          <video 
            src={loadingVideo} 
            className="loading-video-container" 
            autoPlay 
            loop 
            muted 
            playsInline 
          />
        </div>
      )}

      
      {viewState === 'success' && (
        <div className="success-container">
          <img src={successIcon} alt="Payment successful" className="success-icon" />
          <h2 className="success-title">תשלום בוצע בהצלחה!</h2>
        </div>
      )}
    </div>
  );
}