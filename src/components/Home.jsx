import React from 'react';
import { useNavigate } from 'react-router-dom';
import { VIDEO_OPTIONS } from '../constants/videos';
import cartIcon from '../assets/buttons/cart-icon.svg';
import '../styles/Home.css';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-container" style={{ position: 'relative' }}>
      {/* Cart Button */}
      <img
        src={cartIcon}
        alt="Cart"
        className="cart-button"
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
        onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onClick={() => navigate('/cart')}
      />
      <div className="home-grid">
      {VIDEO_OPTIONS.map(o => (
        <div
          key={o.id}
          className="home-item"
          onClick={() => navigate(`/${o.id}`)}
        >
          <video
            src={o.mp4}
            muted
            loop
            playsInline
            autoPlay
            className="home-video"
            aria-label={o.label}
          />

          <span className="home-title">
            <img src={o.titleSvg} alt={o.label} />
          </span>
        </div>
      ))}
      </div>
    </div>
  );
}
