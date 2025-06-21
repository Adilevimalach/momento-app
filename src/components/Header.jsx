import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import normalLogo from '../assets/logo new.svg';
import logo1 from '../assets/logo-animation/momento1.svg';
import logo2 from '../assets/logo-animation/momento2.svg';
import logo3 from '../assets/logo-animation/momento3.svg';
import logo4 from '../assets/logo-animation/moemnto4.svg';
import logo5 from '../assets/logo-animation/moemnto5.svg';
import logo6 from '../assets/logo-animation/momento6.svg';
import logo7 from '../assets/logo-animation/momento7.svg';
import logo8 from '../assets/logo-animation/momento8.svg';
import arrow from '../assets/arrow.svg';
import { VIDEO_OPTIONS } from '../constants/videos';
import arrowX from '../assets/buttons/x.svg';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

const ANIMATION_INTERVAL = 600; // Time between logo changes in milliseconds

export default function Header() {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const [cameFromPaymentComplete, setCameFromPaymentComplete] = useState(false);

  // Handle payment complete navigation state
  useEffect(() => {
    if (location.state?.fromPaymentComplete) {
      // Clear the state to prevent it from affecting future navigations
      window.history.replaceState({ ...window.history.state, fromPaymentComplete: false }, '');
    }
  }, [location.pathname]);

  // Logo animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, ANIMATION_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const isAboutPage = location.pathname === '/about';
  const isCartPage = location.pathname === '/cart';
  const isHomePage = location.pathname === '/';
  const logoToShow = isAboutPage ? logos[currentLogoIndex] : normalLogo;

  // Category label logic based on last URL segment
  const [showCategoryLabel, setShowCategoryLabel] = useState(false);
  const [categoryLabel, setCategoryLabel] = useState("");
  useEffect(() => {
    const segments = location.pathname.split('/').filter(Boolean);
    const lastSegment = segments[segments.length - 1];
    const match = VIDEO_OPTIONS.find(opt => opt.id === lastSegment);
    if (match) {
      setCategoryLabel(match.label);
      setShowCategoryLabel(false);
      const timer = setTimeout(() => setShowCategoryLabel(true), 1200);
      return () => clearTimeout(timer);
    } else {
      setCategoryLabel("");
      setShowCategoryLabel(false);
    }
  }, [location.pathname]);

  const isPaymentComplete = location.pathname === '/payment-complete';
  // Show back button on all pages except home and about
  const showBackArrow = !isHomePage && !isAboutPage;

  return (
    <header className={`app-header${isPaymentComplete ? ' payment-complete-header' : ''}`}>
      {isPaymentComplete ? (
        <img
          src={arrowX}
          alt="close"
          className="close-btn"
          onClick={() => navigate('/', { state: { fromPaymentComplete: true } })}
        />
      ) : (
        <>
          {showBackArrow && (
            <img
              src={arrow}
              alt="back"
              className="arrow"
              onClick={() => navigate(-1)}
            />
          )}
          {location.pathname === '/payment' ? (
            <h2 style={{ textAlign: 'center', width: '100%', position: 'absolute', top: '10%', left: '50%', transform: 'translate(-50%, -50%)' }}>שיטת תשלום</h2>
          ) : isCartPage ? (
            <h2 style={{ textAlign: 'center', width: '100%', position: 'absolute', top: '10%', left: '50%', transform: 'translate(-50%, -50%)' }}>הסל שלך</h2>
          ) : (
            <>
              <div onClick={() => navigate('/about')}>
                <img
                  src={logoToShow}
                  alt="Momento logo"
                  className="logo"
                  style={isAboutPage ? { width: '92vw', height: 'auto' } : { width: '90vw', height: 'auto' }}
                />
              </div>
              {isHomePage && <p>קטלוג יינות</p>}
              {categoryLabel && (
                <p className={`fade-in-category${showCategoryLabel ? '' : ' hidden'}`}>{categoryLabel}</p>
              )}
            </>
          )}
        </>
      )}
    </header>
  );
}
