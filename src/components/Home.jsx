import React from 'react';
import { useNavigate } from 'react-router-dom';
import { VIDEO_OPTIONS } from '../constants/videos';

export default function Home() {
  const nav = useNavigate();
  return (
    <div className="home-grid">
      {VIDEO_OPTIONS.map(o => (
        <div
          key={o.id}
          className="home-item"
          onClick={() => nav(`/${o.id}`)}
        >
          <video
            src={o.mp4}            // e.g. "/videos/hanuka.mp4"
            muted
            loop
            playsInline
            autoPlay
            className="home-video"
            aria-label={o.label}
          />

          <span className="home-title">
            <img src={o.titleSvg} alt={o.label} />
          </span>
        </div>
      ))}
    </div>
  );
}
