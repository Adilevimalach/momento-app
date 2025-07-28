
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ControllerTransition.css';

import secondVideo from '../../assets/IPAD/first page/כניסה טובה_5.mp4';
import narDown from '../../assets/IPAD/first page/narrowDown.svg';

function ControllerTransition() {
  const navigate = useNavigate();
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowArrow(true);
    }, 11000);

    return () => clearTimeout(timer);
  }, []);

  const handleArrowClick = () => {
    navigate('/controller/selection');
  };

  const pageVariants = {
  initial: { 
    zIndex: 1 
  },
  animate: { 
    zIndex: 1 
  },
  exit: { 
    zIndex: 0, 
    opacity: 0, 
    transition: { duration: 0.5 } 
  },
};

  return (
    // <motion.div
    //   className="transition-page-container"
    //   exit={{ zIndex: 0,opacity: 0, transition: { duration: 1 } }}
      
    // >
    <motion.div
      className="transition-page-container"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <video
        className="transition-video"
        src={secondVideo}
        autoPlay
        muted
        playsInline
      />
      {showArrow && (
        <button className="down-arrow" onClick={handleArrowClick} aria-label="Continue">
          <img src={narDown} alt="Continue Arrow" />
        </button>
      )}
    </motion.div>
  );
}

export default ControllerTransition;