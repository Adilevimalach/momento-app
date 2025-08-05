
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getVideoById } from '../../constants/videos';
import selectionLogo from '../../assets/selectionLogo.svg';
import './ControllerLoading.css';


const PLAY_MS = { 
  rain: 33000, 
  avirot: 36000, 
  mishpachti: 34000, 
  shamesh: 34000, 
  shkira: 38000, 
  shranim: 34000 
};

export default function ControllerLoading() {
  const { videoId } = useParams();
  const navigate = useNavigate();
  const video = getVideoById(videoId);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!video) return;

    const duration = PLAY_MS[videoId] || 30000;
    
    const interval = 50;
    const increment = (100 / duration) * interval;

    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            navigate(`/controller/video/${videoId}`);
          }, 200);
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [video, videoId, navigate]);

  if (!video) {
    return <div>Video not found</div>;
  }

  const totalDots = 24;
  const filledDots = Math.floor((progress / 100) * totalDots);

  return (
    <div className="controller-loading-root">
      <header className="loading-header">
        <div className="header-right">
          <img src={selectionLogo} alt="Momento Logo" />
        </div>
        <div className="header-center">
          <img src={video.titleSvgflat} alt="Video Title" />
        </div>
      </header>
      <div className="loading-line">
        {Array.from({ length: totalDots }, (_, index) => (
          <div
            key={index}
            className={`loading-dot ${index < filledDots ? 'filled' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}