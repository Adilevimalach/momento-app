import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getVideoById } from '../../constants/videos';
import './ControllerLoading.css';

export default function ControllerLoading() {
  const { videoId } = useParams();
  const navigate = useNavigate();
  const video = getVideoById(videoId);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!video) return;

    const duration = video.videoTime * 1000; // Convert to milliseconds
    const interval = 50; // Update every 50ms for smooth animation
    const increment = (100 / duration) * interval;

    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          clearInterval(timer);
          // Navigate to video page after loading completes
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

  // Create dots for the loading animation
  const totalDots = 24; // Number of dots in the circle
  const filledDots = Math.floor((progress / 100) * totalDots);

  return (
    <div className="controller-loading-root">
      <div className="loading-content">
        <h2>טעינה בזמן שהסרטון מוקרן</h2>

        <div className="loading-line">
          {Array.from({ length: totalDots }, (_, index) => (
            <div
              key={index}
              className={`loading-dot ${index < filledDots ? 'filled' : ''}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
