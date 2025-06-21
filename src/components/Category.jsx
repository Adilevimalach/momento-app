import React, { useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getVideoById, getWineDetail } from '../constants/videos';
import arrow from '../assets/arrow.svg';
import cartIcon from '../assets/buttons/cart-icon.svg';
import addToCartIcon from '../assets/buttons/add to card1.svg';
import addToCartIconConfirmed from '../assets/buttons/add to card2.svg';
import '../styles/Category.css';
import { addToCart } from '../utils/cart';

export default function Category() {
  const [showContent, setShowContent] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 1200);
    return () => clearTimeout(timer);
  }, []);
  const { categoryId } = useParams();
  const video = getVideoById(categoryId);
  const detailsRef = useRef(null);

  const navigate = useNavigate();
  // Confirmation state for Add to Cart
  const [showConfirmation, setShowConfirmation] = React.useState(false);
  const confirmationTimeout = React.useRef();

  const handleAddToCart = () => {
    addToCart(video.id);
    setShowConfirmation(true);
    if (confirmationTimeout.current) clearTimeout(confirmationTimeout.current);
    confirmationTimeout.current = setTimeout(() => {
      setShowConfirmation(false);
    }, 1000);
  };

  React.useEffect(() => {
    return () => {
      if (confirmationTimeout.current) clearTimeout(confirmationTimeout.current);
    };
  }, []);

  const scrollToDetails = () => {
    window.scrollTo({
      top: window.scrollY + window.innerHeight,
      behavior: 'smooth'
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!video) {
    return <div>Category not found</div>;
  }

  const wineDetails = [
    'typeOfWine',
    'area',
    'alcoholLevel',
    'sweetness',
    'body',
    'taste',
    'aroma',
    'age',
    'food'
  ];

  return (
    <div className="category-container" style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'ContentFont, sans-serif',
      direction: 'rtl',
      color: 'white',
      textAlign: 'center',
      position: 'relative'
    }}>
      <div className="video-container">
        <video
          src={video.pageVideo}
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            display: 'block'
          }}
          aria-label={video.label}
        />
        {showContent && (
          <>
            {/* Cart Button */}
            <img
              src={cartIcon}
              alt="Cart"
              className="cart-button"
              onClick={() => navigate('/cart')}
            />

            {/* Add to Cart Button */}
            <img
              src={showConfirmation ? addToCartIconConfirmed : video.priceSvg}
              alt={showConfirmation ? 'Added to Cart' : 'Add to Cart'}
              className={`add-to-cart-button${showConfirmation ? ' confirmed' : ''}`}
              onClick={handleAddToCart}
              style={{ transition: 'opacity 0.3s' }}
            />

            <img
              src={arrow}
              alt="Scroll down"
              className="arrow-go-down"
              onClick={scrollToDetails}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && scrollToDetails()}
            />
          </>
        )}
      </div>

      {showContent && (
        <div className="fade-in-category">

          <div ref={detailsRef} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '30px',
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '0 20px'
          }}>
            {wineDetails.map((detailId) => {
              const detail = getWineDetail(detailId);
              return (
                <div key={detailId} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '20px 10px'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    marginBottom: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <video
                      src={detail.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{
                        height: '100%',
                        width: 'auto',
                        maxWidth: '100%',
                        objectFit: 'contain'
                      }}
                      aria-label={detail.title}
                    />
                  </div>
                  <h3 style={{
                    margin: '0 0 8px 0',
                    fontSize: '18px',
                    fontFamily: 'HeaderFont, sans-serif',
                    color: 'white',
                    textAlign: 'center'
                  }}>
                    {detail.title}
                  </h3>
                  <p style={{
                    margin: 0,
                    fontSize: '16px',
                    lineHeight: '1.4',
                    color: '#e0e0e0',
                    textAlign: 'center',
                    minHeight: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {video.description[detailId]}
                  </p>
                </div>
              );
            })}
            <div className="arrow-up-container">
              <img
                src={arrow}
                alt="Scroll to top"
                className="arrow-up"
                onClick={scrollToTop}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && scrollToTop()}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
