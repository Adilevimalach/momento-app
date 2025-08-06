
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../utils/cart';


import loadingVideo from '../assets/buttons/loading-animation.mp4'; 
import successIcon from '../assets/buttons/v after buying.svg';    

import mastercardFront from '../assets/buttons/mastercard1.svg';
import paypalIcon from '../assets/buttons/paypal.svg';
import applePayIcon from '../assets/buttons/apple pay.svg';
import buyButton from '../assets/buttons/to buy1.svg';
import '../styles/Payment.css';

export default function Payment({ onHideProgressBar }) {
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState(null)
  const [viewState, setViewState] = useState('idle'); // 'idle', 'loading', 'success'

  const handleBuyClick = () => {
    
    if (viewState !== 'idle') return;
    setViewState('loading');
    if (onHideProgressBar) {
      onHideProgressBar();
    }
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
            <button
              
              className={`payment-card-button ${selectedPayment === 'card' ? 'selected' : ''}`}
              aria-label="Pay with Paypal"
           
              onClick={() => setSelectedPayment('card')}
            >
              <img src={mastercardFront} alt="mastercard" className="card-front" />
            </button>
            
          </div>
          <div className="payment-or">או תשלום באמצעות</div>
          <div className="payment-options">
            <button
              
              className={`payment-option-button ${selectedPayment === 'paypal' ? 'selected' : ''}`}
              aria-label="Pay with Paypal"
           
              onClick={() => setSelectedPayment('paypal')}
            >
              <img src={paypalIcon} alt="Paypal" />
            </button>

            <button
              className={`payment-option-button ${selectedPayment === 'applePay' ? 'selected' : ''}`}
              aria-label="Pay with Apple Pay"
              onClick={() => setSelectedPayment('applePay')}
            >
              <img src={applePayIcon} alt="Apple Pay" />
            </button>
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