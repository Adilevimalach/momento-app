
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ControllerWelcome.css';
import client from '../../utils/mqttClient';

import playButtonIcon from '../../assets/IPAD/first page/begin button.svg';

const wordToAnimate = "moprnsq";
const letters = wordToAnimate.split('');
const animationInterval = 300;
const pauseWhenFaded = 2000;
const pauseWhenFull = 2000;

export default function ControllerWelcome() {
  const navigate = useNavigate();
  const [opacities, setOpacities] = useState(Array(letters.length).fill(1));
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (isExiting) return;
    
    let loopTimeout;

    const runAnimationCycle = () => {
      for (let i = 0; i < letters.length; i++) {
        setTimeout(() => {
          setOpacities(current => {
            const newOpacities = [...current];
            newOpacities[letters.length - 1 - i] = 0;
            return newOpacities;
          });
        }, i * animationInterval);
      }

      const fadeOutDuration = letters.length * animationInterval;
      setTimeout(() => {
        for (let i = 0; i < letters.length; i++) {
          const letterIndexToFade = letters.length - 1 - i;
          if (letterIndexToFade === 5) continue;
          setTimeout(() => {
            setOpacities(current => {
              const newOpacities = [...current];
              newOpacities[i] = 1;
              return newOpacities;
            });
          }, i * animationInterval);
        }
      }, fadeOutDuration + pauseWhenFaded);
      
      const fadeInDuration = letters.length * animationInterval;
      const totalCycleTime = fadeOutDuration + pauseWhenFaded + fadeInDuration + pauseWhenFull;
      loopTimeout = setTimeout(runAnimationCycle, totalCycleTime);
    };

    runAnimationCycle();

    return () => clearTimeout(loopTimeout);
  }, [isExiting]);

  const goToNextPage = () => {
    console.log('Start button clicked. Publishing MQTT commands...');
  

    const espTopic = 'esp32/commands';
    const espPayload = 'START_ALL';

    if (client && client.connected) {
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

    setIsExiting(true);
    setOpacities(Array(letters.length).fill(1));
    navigate('/controller/next');
  };

  const pageVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: { duration: 2 }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5, delay: 1.3 }
    }
  };

  return (
    <motion.div 
      className="controller-welcome-new-container"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="media-wrapper">
        <h1 className="welcome-title">
          {letters.map((char, index) => (
            <span 
              key={index} 
              className={index === 3 ? 'pulsing-letter' : ''}
              style={{ opacity: opacities[index] }}
            >
              {char}
            </span>
          ))}
        </h1>
        
        <button className="play-button" onClick={goToNextPage} aria-label="Start">
          <img src={playButtonIcon} alt="Play Icon" />
        </button>
      </div>

      <p className="instruction-text">לחצו על העיגול כדי להתחיל</p>
      
    </motion.div>
  );
}