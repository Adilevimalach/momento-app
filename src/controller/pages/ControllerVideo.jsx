import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getVideoById, getWineDetail } from '../../constants/videos';
import arrow from '../../assets/arrow.svg';
import logo from '../../assets/IPAD/logo m/m ipad.svg';
import backArrow from '../../assets/IPAD/back-arrow.svg';
import './ControllerVideo.css';
import purchaseButton from '../../assets/IPAD/TO_PURCASE.svg';

export default function ControllerVideo() {
  const { videoId } = useParams();
  const navigate = useNavigate();
  const video = getVideoById(videoId);
  const [showWineDetails, setShowWineDetails] = useState(false);

  const handleBackToController = () => {
    navigate('/controller');
  };

  const handleBackToSelection = () => {
    navigate('/controller/selection');
  };

  const handleShowWineDetails = () => {
    setShowWineDetails(true);
  };

  const handlePurchase = () => {
    navigate(`/controller/purchase/${videoId}`);
  };

  const wineDetails = [
    'typeOfWine',
    'area',
    'body',
    'taste',
    'aroma',
    'sweetness',
    'age',
    'food',
    'alcoholLevel',
  ];

  if (!video) {
    return <div>Video not found</div>;
  }

  return (
    <div className="controller-video-root">
      <div className="video-header">
        <button className="logo-button" onClick={handleBackToController}>
          <img src={logo} alt="לוגו" className="header-logo" />
        </button>
        <img src={video.titleSvg} alt={video.label} className="video-title-header" />
        <div className="not-your-moment" onClick={handleBackToSelection}>
          <span>לא הרגע שלך?</span>
          <img src={backArrow} alt="back" className="arrow" />
        </div>
      </div>

      {!showWineDetails ? (
        <div className="video-content">
          <div className="video-description">
            <p>רגע שנוצר, סיכום של יום</p>
            <p>כמו נטיפה אדומה ומשוחררת</p>
          </div>

          <button className="details-button" onClick={handleShowWineDetails}>
            <img src={arrow} alt="פרטים" className="details-arrow" />
          </button>

          <div className="main-video-container">
            <video
              src={video.ipadVideo}
              autoPlay
              loop
              muted
              playsInline
              className="main-video"
            />
          </div>
        </div>
      ) : (
        <div className="wine-details-content">
          <div className="video-description">
            <p>רגע שנוצר, סיכום של יום</p>
            <p>כמו נטיפה אדומה ומשוחררת</p>
          </div>

          <div className="wine-details-grid">
            {/* Top row */}
            {wineDetails.slice(0, 3).map((detailId) => {
              const detail = getWineDetail(detailId);
              const detailValue = video.description[detailId];
              return (
                <div key={detailId} className="wine-detail-item">
                  <div className="detail-video-container horizontal">
                    <video
                      src={detail.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="detail-video"
                    />
                    <h3 className="detail-title">{detail.title}</h3>
                  </div>
                  <div className="detail-text vertical">

                    <p className="detail-description">{detailValue}</p>
                  </div>
                </div>
              );
            })}

            <div className="grid-separator"></div>

            {/* Bottom rows */}
            {wineDetails.slice(3).map((detailId) => {
              const detail = getWineDetail(detailId);
              const detailValue = video.description[detailId];
              return (
                <div key={detailId} className="wine-detail-item vertical">
                  <div className="detail-video-container">
                    <video
                      src={detail.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="detail-video"
                    />
                  </div>
                  <h3 className="detail-title">{detail.title}</h3>
                  <p className="detail-description">{detailValue}</p>
                </div>
              );
            })}
          </div>

          <button className="back-to-video" onClick={() => setShowWineDetails(false)}>
            <img src={arrow} alt="חזור" className="back-arrow-rotated" />
          </button>
        </div>
      )}
      <div className="purchase-button" onClick={handlePurchase}>
        <img src={purchaseButton} alt="רכישה" className="purchase-button-img" />
      </div>
    </div>
  );
}
