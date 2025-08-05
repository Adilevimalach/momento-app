import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { VIDEO_OPTIONS } from '../constants/videos';
import arrowIcon from '../assets/icons/arrow.svg';
import '../styles/Home.css';

export default function Home() {
  const navigate = useNavigate();
   const [viewMode, setViewMode] = useState(() => {
    return localStorage.getItem('homeViewMode') || 'grid'; 
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = VIDEO_OPTIONS[currentIndex];
  
useEffect(() => {
    localStorage.setItem('homeViewMode', viewMode);
    localStorage.setItem('homeCurrentIndex', String(currentIndex));
  }, [viewMode, currentIndex]); 

const toggleViewMode = () => {
  setViewMode(currentMode => (currentMode === 'grid' ? 'single' : 'grid'));
};

const handleNext = () => {
  setCurrentIndex(prevIndex => (prevIndex + 1) % VIDEO_OPTIONS.length);
};

const handlePrevious = () => {
  setCurrentIndex(prevIndex => (prevIndex - 1 + VIDEO_OPTIONS.length) % VIDEO_OPTIONS.length);
};


  return (
    <div className="home-container" style={{ position: 'relative' }}>
      <div className="home-header">
        <h1>קטלוג יינות</h1>
      </div>

      {viewMode === 'grid' ? (
    
        <div className="home-grid-home">
          {VIDEO_OPTIONS.map(o => (
            <div
              key={o.id}
              className="home-item"
              onClick={() => navigate(`/${o.id}`)}
            >
              <video
                src={o.mp4}
                muted loop playsInline autoPlay
                className="home-video-new"
                aria-label={o.label}
              />
              <span className="home-title">
                <img src={o.titleSvgflat} alt={o.label} />
              </span>
            </div>
          ))}
        </div>
      ) : (
      
        <div className="single-view-container">
          <button className="nav-arrow prev" onClick={handlePrevious}>
            <img src={arrowIcon} alt="Previous" />
          </button>
          <div className="home-item single" onClick={() => navigate(`/${currentItem.id}`)}>
            <video
              key={currentItem.id} 
              src={currentItem.mp4}
              muted loop playsInline autoPlay
              className="home-video-single"
              aria-label={currentItem.label}
            />
            <span className="home-title-single">
              <img src={currentItem.titleSvgflat} alt={currentItem.label} />
            </span>
            
          </div>
          <button className="nav-arrow next" onClick={handleNext}>
            <img src={arrowIcon} alt="Next" />
          </button>
        </div>
        
      )}
      <button onClick={toggleViewMode} className="shop-now-button">
          {viewMode === 'grid' ? 'Single View' : 'Full View'}
        </button>
    </div>
  );
}