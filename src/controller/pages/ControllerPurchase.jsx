import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getVideoById } from '../../constants/videos';
import logo from '../../assets/selectionLogo.svg';
import backArrow from '../../assets/nextMoment.svg';
import descrEllipse from '../../assets/descrEllipse.svg';
import './ControllerPurchase.css';

export default function ControllerPurchase() {
  const { videoId } = useParams();
  const navigate = useNavigate();
  const video = getVideoById(videoId);

  const handleBackToController = () => {
    navigate('/controller/transition', { state: { skipIntro: true } });
  };

  const handleBackToVideo = () => {
    navigate(`/controller/video/${videoId}`);
  };

  if (!video) {
    return <div>Video not found</div>;
  }

  return (
    <div className="controller-purchase-root">
      <div className="purchase-header">
        <button className="logo-button" onClick={handleBackToController}>
          <img src={logo} alt="לוגו" className="header-logo" />
        </button>
        <div className="video-content">
          <img src={video.titleSvgflat} alt={video.label} className="video-title-header" />
          
        </div>
        
        <div className="back-to-moment" onClick={handleBackToVideo}>
          <img src={backArrow} alt="back" className="arrow" />
          <span>חזור לרגע</span>
        </div>
      </div>
      <div className="video-description">
            <span>{video.description?.typeOfWine}</span>
            <img src={descrEllipse} alt="•" className="separator-dot" />
            <span className="video-price">₪{video.price}</span>
      </div>
      <div className="purchase-content">
        <video
          src={video.generalCheckoutVideo}
          autoPlay
          loop
          muted
          playsInline
          className="checkout-video"
        />
        <img src={video.qrCode} alt="QR Code" className="qr-code" />
        <p className="purchase-text">לרכישה סרקו את הברקוד</p>
      </div>
    </div>
  );
}
