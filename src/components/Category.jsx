import React from 'react';
import { useParams } from 'react-router-dom';
import { getVideoById, getWineDetail } from '../constants/videos';

export default function Category() {
  const { categoryId } = useParams();
  const video = getVideoById(categoryId);

  if (!video) {
    return <div>Category not found</div>;
  }

  const wineDetails = [
    'typeOfWine',
    'area',
    'alcoholLevel',
    'sweetness',
    'body',
    'taste',
    'aroma',
    'age',
    'food'
  ];

  return (
    <div className="category-container" style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'ContentFont, sans-serif',
      direction: 'rtl',
      color: 'white',
      textAlign: 'center'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '800px',
        margin: '0 auto 40px',
        borderRadius: '8px',
        overflow: 'hidden'
      }}>
        <video
          src={video.mp4}
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            display: 'block'
          }}
          aria-label={video.label}
        />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '30px',
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        {wineDetails.map((detailId) => {
          const detail = getWineDetail(detailId);
          return (
            <div key={detailId} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '20px 10px'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                marginBottom: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <video
                  src={detail.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    height: '100%',
                    width: 'auto',
                    maxWidth: '100%',
                    objectFit: 'contain'
                  }}
                  aria-label={detail.title}
                />
              </div>
              <h3 style={{
                margin: '0 0 8px 0',
                fontSize: '18px',
                fontFamily: 'HeaderFont, sans-serif',
                color: 'white',
                textAlign: 'center'
              }}>
                {detail.title}
              </h3>
              <p style={{
                margin: 0,
                fontSize: '16px',
                lineHeight: '1.4',
                color: '#e0e0e0',
                textAlign: 'center',
                minHeight: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {video.description[detailId]}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

