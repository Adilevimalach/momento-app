import React, { useState } from 'react';
import mastercardFront from '../assets/buttons/mastercard1.svg';
import mastercardBack from '../assets/buttons/mastercard butch1.svg';
import paypalIcon from '../assets/buttons/paypal.svg';
import applePayIcon from '../assets/buttons/apple pay.svg';
import buyButton from '../assets/buttons/to buy1.svg';
import '../styles/Payment.css';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../utils/cart';

export default function Payment() {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleBuyClick = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // Clear the cart
    clearCart();
    
    // Add a slight delay for the animation to complete before navigating
    setTimeout(() => {
      navigate('/payment-complete');
    }, 300); // Match this with the CSS animation duration
  };

  return (
    <div className="payment-page">
      <div className="payment-card-stack">
        <img src={mastercardBack} alt="card shadow" className="card-back" />
        <img src={mastercardFront} alt="mastercard" className="card-front" />
      </div>
      <div className="payment-or">או תשלום באמצעות</div>
      <div className="payment-options">
        <img src={paypalIcon} alt="Paypal" />
        <img src={applePayIcon} alt="Apple Pay" />
      </div>
      <button 
        className={`buy-button ${isAnimating ? 'pulse-effect' : ''}`}
        onClick={handleBuyClick}
        disabled={isAnimating}
      >
        <img src={buyButton} alt="רכישה" className="buy-button-img" />
      </button>
    </div>
  );
}


