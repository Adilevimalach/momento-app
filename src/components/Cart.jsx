
import React, { useEffect, useState } from 'react';
import { getCart, removeAllFromCart } from '../utils/cart';
import { getVideoById } from '../constants/videos';
import '../styles/Cart.css'; // Or a dedicated Cart.css if you want
import goToPaymentButton from '../assets/buttons/process to pay1.svg';
import { useNavigate } from 'react-router-dom';
export default function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Load cart items from localStorage
    const cart = getCart();
    // Map to array of { id, quantity, ...video }
    console.log(cart);
    const items = Object.entries(cart).map(([id, quantity]) => {
      const video = getVideoById(id);
      return video ? { ...video, quantity } : null;
    }).filter(Boolean);
    setCartItems(items);
  }, []);

  const handleRemove = (id) => {
    removeAllFromCart(id);
    setCartItems(items => items.filter(item => item.id !== id));
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        {cartItems.length === 0 ? (
          <div className="cart-empty">הסל ריק</div>
        ) : (
          <>
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-details">
                  <div className="cart-item-label">{item.label}</div>

                  {item.quantity > 1 && <div className="cart-item-qty">x{item.quantity}</div>}
                  <div className="flex-grow"> </div>
                  <button className="cart-remove-btn" onClick={() => handleRemove(item.id)}>הסרה</button>
                  <div className="cart-item-price">₪{item.price * item.quantity}</div>
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
            ))}
            <div className="cart-checkout-btn" onClick={() => navigate('/payment')}>
              <img src={goToPaymentButton} alt="go to payment" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
