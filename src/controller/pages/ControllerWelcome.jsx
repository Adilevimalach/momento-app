import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import welcome1 from '../../assets/IPAD/first page/welcome1.png';
import welcome2 from '../../assets/IPAD/first page/welcome 2.png';
import logo from '../../assets/logo.svg';
import './ControllerWelcome.css';

const IMAGES = [welcome1, welcome2];

export default function ControllerWelcome() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [sliderValue, setSliderValue] = useState(13);
  const [isDragging, setIsDragging] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Simple image carousel effect
  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Detect fullscreen changes
  React.useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const enterFullscreen = () => {
    const el = document.documentElement;
    if (el.requestFullscreen) el.requestFullscreen();
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) document.exitFullscreen();
  };

  const handleDragStart = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    if (isDragging) {
      if (sliderValue < 95) {
        setSliderValue(0); // Snap back if not fully slid
      }
      setIsDragging(false);
    }
  };

  // Add global event listeners for mouse events
  React.useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();

      const sliderContainer = document.querySelector('.slider');
      if (!sliderContainer) return;

      const sliderRect = sliderContainer.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;

      // Calculate position from right side (RTL)
      let newValue = ((sliderRect.right - clientX) / sliderRect.width) * 100;

      if (newValue < 0) newValue = 0;
      if (newValue > 100) newValue = 100;

      setSliderValue(newValue);

      if (newValue >= 95) { // Threshold to navigate (when dragged to left)
        navigate('/controller/next');
      }
    };

    const handleGlobalMouseUp = () => handleDragEnd();

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
      document.addEventListener('touchmove', handleGlobalMouseMove, { passive: false });
      document.addEventListener('touchend', handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('touchmove', handleGlobalMouseMove);
      document.removeEventListener('touchend', handleGlobalMouseUp);
    };
  }, [isDragging, sliderValue, navigate]);

  return (
    <div className="controller-welcome-root">
      <div className="controller-welcome-img-container">
        {IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="ברוכות הבאות"
            className={`controller-welcome-img${i === index ? ' active' : ''}`}
            style={{ position: 'absolute', top: 0, left: 0, transition: 'opacity 1s', opacity: i === index ? 1 : 0, width: '100%', height: 'auto' }}
          />
        ))}
      </div>

      <div className="controller-welcome-bottom">
        <div className="welcome-text-container">
          <h2>למרכז הרגעים של</h2>
          <div className="logo-container">
            <img src={logo} alt="Momento Logo" className="logo" />
          </div>
        </div>

        <div className="slider-container">
          <div className="slider">
            <div
              className={`slider-handle${isDragging ? ' dragging' : ''}`}
              style={{ right: `${sliderValue}%` }}
              onMouseDown={handleDragStart}
              onTouchStart={handleDragStart}
            ></div>
            <div className="slider-track">
              <span>כניסה</span>
            </div>
          </div>
        </div>
      </div>

      {/* Toggle fullscreen buttons based on current state */}
      {!isFullscreen ? (
        <button
          className="fullscreen-btn"
          onClick={enterFullscreen}
          title="מסך מלא"
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="4" width="7" height="2" rx="1" fill="#fff"/>
            <rect x="4" y="4" width="2" height="7" rx="1" fill="#fff"/>
            <rect x="17" y="4" width="7" height="2" rx="1" fill="#fff"/>
            <rect x="22" y="4" width="2" height="7" rx="1" fill="#fff"/>
            <rect x="4" y="22" width="7" height="2" rx="1" fill="#fff"/>
            <rect x="4" y="17" width="2" height="7" rx="1" fill="#fff"/>
            <rect x="17" y="22" width="7" height="2" rx="1" fill="#fff"/>
            <rect x="22" y="17" width="2" height="7" rx="1" fill="#fff"/>
          </svg>
        </button>
      ) : null}
    </div>
  );
}

