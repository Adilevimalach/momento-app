import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VIDEO_OPTIONS } from '../../constants/videos';
import './ControllerSelection.css';

export default function ControllerSelection() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showColorVideo, setShowColorVideo] = useState(false);
  const navigate = useNavigate();

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setShowColorVideo(true);

    // TODO: MAKE THIS REQUEST TO THE SERVER
    fetch(`https://hadarproject.com/select_video?video_id=${video.id}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });

    setTimeout(() => {
      navigate(`/controller/loading/${video.id}`);
    }, 2000);
  };

  return (
    <div className="controller-selection-root">
      <div className="selection-header">
        <h1>בחירת הרגעים</h1>
        <p>לפניכם שישה רגעים, בחרו את הרגע המתאים עבורכם</p>
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
    </div>
  );
}
