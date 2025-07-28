import React, { useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getVideoById, getWineDetail } from '../constants/videos';
import arrow from '../assets/arrow.svg';
import addToCartIconConfirmed from '../assets/buttons/add to card2.svg';
import '../styles/Category.css';
import { addToCart } from '../utils/cart';

export default function Category() {
  const [showContent, setShowContent] = React.useState(false);
  const [relatedVideos, setRelatedVideos] = React.useState([]);

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
   // Get and set the related videos
  React.useEffect(() => {
    // 1. All possible video IDs
    const allVideoIds = ['rain', 'shranim', 'avirot', 'mishpachti', 'shamesh', 'shkira'];

    // 2. Filter out the current video's ID
    const availableIds = allVideoIds.filter(id => id !== categoryId);

    // 3. Shuffle the remaining IDs and pick the first two
    const shuffled = availableIds.sort(() => 0.5 - Math.random());
    const selectedIds = shuffled.slice(0, 2);

    // 4. Get the full video objects using the provided function
    const selectedVideos = selectedIds.map(id => getVideoById(id));

    // 5. Set the state
    setRelatedVideos(selectedVideos);
  }, [categoryId]); // This effect runs when the categoryId changes

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
      paddingTop: '0px',
      fontFamily: 'ContentFont',
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
            
            {/* Add to Cart Button */}
            <div className="purchase-container">
              {showConfirmation ? (
                <img
                  src={addToCartIconConfirmed}
                  alt="Added to Cart"
                  className="purchase-button confirmed"
                />
              ) : (
                <button className="purchase-button" onClick={handleAddToCart}>
                  <span className="purchase-text-buy">add to cart</span>
                  <span className="purchase-text-price">₪{video.price}</span>
                </button>
              )}

              <div className="purchase-texts">
                {video.text1 && <p>{video.text1}</p>}
                {video.text2 && <p>{video.text2}</p>}
              </div>
            </div>
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
                  <h3 style={{
                    margin: '0 0 8px 0',
                    fontSize: '30px',
                    fontFamily: 'Leon',
                    color: 'white',
                    textAlign: 'center',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '150%',
                    letterSpacing: '0.9px'
}}>
                    
                    {detail.title}
                  </h3>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    marginBottom: '20px',
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
                  
                  <p style={{
                    margin: 0,
                    fontSize: '16px',
                    lineHeight: '1.4',
                    color: '#e0e0e0',
                    textAlign: 'center',
                  
                    minHeight: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                  }}>
                    {video.description[detailId]}
                  </p>
                </div>
              );
            })}

            <div className="related-products-section">
                <h2 className="related-products-title">עשוי לעניין אותך</h2>
                <div className="related-products-grid">
                  {relatedVideos.map((video) => (
                    <div key={video.id} className="related-product-item" onClick={() => navigate(`/${video.id}`)}>
                      <video
                        src={video.checkoutVideo}
                        className="related-product-video"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                      
                      <h3>{video.label}</h3>
                      <p>
                        {video.text1}
                        {video.text2 && <><br />{video.tƒext2}</>}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
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
