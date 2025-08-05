// src/controller/pages/CombinedTransitionPage.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// ייבוא של כל מה שצריך
import './ControllerTransition.css';
import './ControllerSelection.css';

import secondVideo from '../../assets/IPAD/first page/כניסה טובה_5.mp4';
import narDown from '../../assets/IPAD/first page/narrowDown.svg';
import selectionLogo from '../../assets/selectionLogo.svg';
import randomIcon from '../../assets/icons/randomButton.svg';
import supriseIcon from '../../assets/icons/supriseIcon.svg';

import { VIDEO_OPTIONS } from '../../constants/videos';
import client from '../../utils/mqttClient';


const TransitionView = ({ onAdvance, showArrow }) => (
  <div className="transition-page-container">
    <video
      className="transition-video"
      src={secondVideo}
      autoPlay
      muted
      playsInline
    />
    {showArrow && (
      <button className="down-arrow" onClick={onAdvance} aria-label="Continue">
        <img src={narDown} alt="Continue Arrow" />
      </button>
    )}
  </div>
);

const SelectionView = () => {
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showColorVideo, setShowColorVideo] = useState(false);

  const handleVideoClick = (video) => {
    console.log('Start button clicked. Publishing MQTT commands...');
    const pcTopic = 'video/commands';
    
    const pcPayload = JSON.stringify({ id: video.id });
    const numberToSend = idToNumberMap[video.id];

    const espTopic = 'esp32/commands';
    const espPayload = String(numberToSend);

    if (client && client.connected) {
      client.publish(pcTopic, pcPayload, (error) => {
        if (error) {
          console.error('Failed to publish to PC topic:', error);
        } else {
          console.log(`Successfully published to ${pcTopic}`);
        }
      });
      client.publish(espTopic, espPayload, (error) => {
        if (error) {
          console.error('Failed to publish to ESP32 topic:', error);
        } else {
          console.log(`Successfully published to ${espTopic}`);
        }
      });
  } else {
    console.error('MQTT client not connected. Cannot send commands.');
  }
    setSelectedVideo(video);
    setShowColorVideo(true);

    setTimeout(() => {
      navigate(`/controller/loading/${video.id}`);
    }, 2000);
  };
  
  const idToNumberMap = {
    rain: 1,
    shranim: 2,
    avirot: 3,
    mishpachti: 4,
    shamesh: 5,
    shkira: 6
  };

  return (
    <motion.div
      className="controller-selection-root"
      initial={{ y: '100%' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    >
      <img src={selectionLogo} alt="Logo" className="selection-logo" />
      <div className="selection-header">
        <p className="header-line-one">לכל יין יש את הרגע שלו.</p>
        <p className="header-line-two">מה הרגע שלך?</p>
      </div>

  
      <div className="video-grid">
        {VIDEO_OPTIONS.map((video) => (
          <div
            key={video.id}
            className="video-option"
            onClick={() => handleVideoClick(video)}
          >
            <div className="video-wrapper">
              <video
                src={selectedVideo?.id === video.id && showColorVideo ? video.mp4 : video.mp4BW}
                autoPlay
                loop
                muted
                playsInline
                className="option-video"
              />
              <div className="video-overlay">
                <img src={video.titleSvg} alt={video.label} className="video-title" />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button
        className="random-video-button"
        onClick={() => {
          const randomVideo = VIDEO_OPTIONS[Math.floor(Math.random() * VIDEO_OPTIONS.length)];
          handleVideoClick(randomVideo);
        }}
      >
        <img src={supriseIcon} alt="Surprise Video Icon" />
        <img src={randomIcon} alt="Random Video Icon" className='random-icon'/>
      </button>

    </motion.div>
  );
};



export default function CombinedTransitionPage() {
  const [showSelectionPage, setShowSelectionPage] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowArrow(true);
    }, 11000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ position: 'relative', width: '1194px', height: '834px', margin: 'auto' }}>
      <TransitionView 
        showArrow={showArrow} 
        onAdvance={() => setShowSelectionPage(true)} 
      />

      <AnimatePresence>
        {showSelectionPage && <SelectionView />}
      </AnimatePresence>
    </div>
  );
}