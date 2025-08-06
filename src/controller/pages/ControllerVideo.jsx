
import React, { useState,useEffect } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import { getVideoById, getWineDetail, getVideoOptionsLength, getVideoByIndex, getVideoIndexById } from '../../constants/videos';
import arrow from '../../assets/arrow.svg';
import logo from '../../assets/IPAD/logo m/m ipad.svg';
import backArrow from '../../assets/nextMoment.svg';
import descrEllipse from '../../assets/descrEllipse.svg';
import { motion } from 'framer-motion';
import client from '../../utils/mqttClient';

import './ControllerVideo.css';

export default function ControllerVideo() {
  const { videoId } = useParams();
  const navigate = useNavigate();
  const video = getVideoById(videoId);
  const [showWineDetails, setShowWineDetails] = useState(false);

  const handleBackToController = () => {
    navigate('/controller/selection');
  };

  
    useEffect(() => {
      const timeoutIdRef = { current: null };
      const twoMinutes = 120000;
  
      const returnHomeAndClearCart = () => {
        navigate('/');
      };
  
      const resetTimer = () => {
        if (timeoutIdRef.current) {
          clearTimeout(timeoutIdRef.current);
        }
        timeoutIdRef.current = setTimeout(returnHomeAndClearCart, twoMinutes);
      };
  
      const events = ['click', 'mousemove', 'keydown', 'scroll', 'touchstart'];
  
      events.forEach(event => {
        window.addEventListener(event, resetTimer);
      });
  
      resetTimer();
  
      return () => {
        if (timeoutIdRef.current) {
          clearTimeout(timeoutIdRef.current);
        }
        events.forEach(event => {
          window.removeEventListener(event, resetTimer);
        });
      };
    }, [navigate]);

  const handleNextMoment = () => {
    const currentIndex = getVideoIndexById(videoId);
    const totalVideos = getVideoOptionsLength();
    const nextIndex = (currentIndex + 1) % totalVideos;
    const nextVideo = getVideoByIndex(nextIndex);

   

    if (nextVideo) {
       console.log('Start button clicked. Publishing MQTT commands...');
      const pcTopic = 'video/commands';
      
      const pcPayload = JSON.stringify({ id: nextVideo.id });
      console.log(`Publishing to ${pcTopic}:`, pcPayload);
  

      if (client && client.connected) {
        client.publish(pcTopic, pcPayload, (error) => {
          if (error) {
            console.error('Failed to publish to PC topic:', error);
          } else {
            console.log(`Successfully published to ${pcTopic}`);
          }
        });
    } else {
      console.error('MQTT client not connected. Cannot send commands.');
    }

    navigate(`/controller/loading/${nextVideo.id}`);
      }
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
    <motion.div
      className="controller-video-root"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 3 } }}
      exit={{ opacity: 0, transition: { duration: 0 } }}
    >
      <div className="video-header">
        <div className="logo-button" onClick={handleBackToController}>
          <img src={logo} alt="לוגו" className="header-logo" />
        </div>
        <img src={video.titleSvgflat} alt={video.label} className="video-title-header" />
        <div className="not-your-moment" onClick={handleNextMoment}>
          <span>לרגע הבא</span>
          <img src={backArrow} alt="back" className="arrow" />
        </div>
      </div>
      <div className="video-description-header">
        {video.text2 ? (
          <>
            <span>{video.text1}</span>
            <img src={descrEllipse} alt="•" className="separator-dot" />
            <span>{video.text2}</span>
          </>
        ) : (
          <span>{video.text1}</span>
        )}
      </div>
      {!showWineDetails ? (
        <div className="video-content">
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
          <div className="wine-details-grid">
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
                    <div className="title-wrapper">
                      <h3 className="detail-title-top">{detail.title}</h3>
                      <p className="detail-description">{detailValue}</p>
                    </div>
                  </div>
                </div>
                  
              );
            })}
            <div className="grid-separator"></div>
            {wineDetails.slice(3).map((detailId) => {
              const detail = getWineDetail(detailId);
              const detailValue = video.description[detailId];
              return (
                <div key={detailId} className="wine-detail-item vertical">
                  <h3 className="detail-title">{detail.title}</h3>
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
                  <p className="detail-description-botton">{detailValue}</p>
                </div>
              );
            })}
          </div>
          <button className="back-to-video" onClick={() => setShowWineDetails(false)}>
            <img src={arrow} alt="חזור" className="back-arrow-rotated" />
          </button>
        </div>
      )}
      <button className="purchase-button" onClick={handlePurchase}>
        <span className="purchase-text-buy">buy now</span>
        <span className="purchase-text-price">₪{video.price}</span>
      </button>
    </motion.div>
  );
}