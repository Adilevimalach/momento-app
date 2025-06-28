import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getVideoById } from '../../constants/videos';
import logo from '../../assets/IPAD/logo m/m ipad.svg';
import backArrow from '../../assets/IPAD/back-arrow.svg';
import './ControllerPurchase.css';

export default function ControllerPurchase() {
  const { videoId } = useParams();
  const navigate = useNavigate();
  const video = getVideoById(videoId);

  const handleBackToController = () => {
    navigate('/controller');
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
        <div className="back-to-moment" onClick={handleBackToVideo}>
          <span>חזור לרגע</span>
          <img src={backArrow} alt="back" className="arrow" />
        </div>
      </div>
      <div className="purchase-content">
        <img src={video.qrCode} alt="QR Code" className="qr-code" />
        <p>לרכישה סרקו את הברקוד</p>
      </div>
    </div>
  );
}
