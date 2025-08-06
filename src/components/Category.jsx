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

  const containerRef = useRef(null);
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
    detailsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!video) {
    return <div>Category not found</div>;
  }

  if (!video) {
    return <div>Category not found</div>;
  }

  const wineDetails = [
    'sweetness',
    'food',
    'alcoholLevel'
  ];

return (
  <div className="category-container" ref={containerRef} style={{
    maxWidth: '1200px',
    margin: '0 auto',
    paddingTop: '0px',
    fontFamily: 'ContentFont',
    direction: 'rtl',
    color: 'white',
    textAlign: 'center',
    position: 'relative',
    overflowY: 'auto', 
      height: '100vh'
  }} >
    
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
      <div className="fade-in-category wine-details-section" ref={detailsRef}>
        <div className="dotted-separator-top"></div>

        <p className="wine-main-description">
          {video.mainDescription || 'הטקסט הראשי של היין יופיע כאן...'}
        </p>

        <div className="wine-info-grid">
          <div className="wine-info-item">
            <h3>החיבור לרגע</h3>
            <p>{video.natureConnection || 'תיאור החיבור לטבע...'}</p>
          </div>
          <div className="wine-info-item">
            <h3>כרמים ובציר</h3>
            <p>{video.vineyard || 'תיאור הכרמים והבציר...'}</p>
          </div>
          <div className="wine-info-item">
            <h3>תהליך הייצור</h3>
            <p>{video.productionProcess || 'תיאור תהליך הייצור...'}</p>
          </div>
          <div className="wine-info-item">
            <h3>טעמים</h3>
            <p>{video.flavors || 'תיאור הטעמים...'}</p>
          </div>
        </div>

        <div className="wine-icons-container">
          {wineDetails.map((detailId) => {
            const detail = getWineDetail(detailId);
            return (
              <div key={detailId} className="wine-icon-item">
                <div className="wine-video-icon-wrapper">
                  <video
                    src={detail.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    aria-label={detail.title}
                  />
                </div>
                <p>{video.description[detailId]}</p>
              </div>
            );
          })}
        </div>
        
        <div className="dotted-separator"></div>


        <div className="related-products-section">
          <h2 className="related-products-title">עשוי לעניין אותך</h2>
          <div className="related-products-grid">
            {relatedVideos.map((relatedVideoItem) => (
              <div key={relatedVideoItem.id} className="related-product-item" onClick={() => navigate(`/${relatedVideoItem.id}`)}>
                <video
                  src={relatedVideoItem.checkoutVideo}
                  className="related-product-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="product-info">
                  <h3>{relatedVideoItem.label}</h3>
                  <p>
                    {relatedVideoItem.text1}
                    {relatedVideoItem.text2 && <><br />{relatedVideoItem.text2}</>}
                  </p>
                </div>
                <p className="related-product-price">
                  ₪{relatedVideoItem.price}
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
    )}
  </div>
);

}

