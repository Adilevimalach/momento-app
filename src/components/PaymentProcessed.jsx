import React from 'react';
import checkmarkImg from '../assets/buttons/v after buying.svg';
import bottleVideo from '../assets/pages/bottles checkout/בקבוק יין משפחה.mp4';
import '../styles/PaymentProcessed.css';

export default function PaymentProcessed() {
  // Clear cart on mount
  React.useEffect(() => {
    localStorage.removeItem('cart');
  }, []);
  // Generate a random order number for demo
  const orderNum = '#2568426';
  return (
    <div className="payment-processed-page">
      <div className="checkmark-circle">
        <img src={checkmarkImg} alt="success" style={{ width: 70, height: 70 }} />
      </div>
      <h2 className="main-title">הרגע שלך בדרך אליך</h2>
      <p className="order-num">מספר הזמנה {orderNum}</p>
      <video className="bottle-video" src={bottleVideo} autoPlay loop muted playsInline />
      <div className="thank-you-text">
        <p>תודה שבחרתם להרגיש איתנו.</p>
        <p>אנחנו כאן איתכם · לרגעים החשובים באמת.</p>
      </div>
    </div>
  );
}

