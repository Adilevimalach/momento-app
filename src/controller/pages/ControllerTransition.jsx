
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ControllerTransition.css';


import secondVideo from '../../assets/IPAD/first page/כניסה טובה_5.mp4';
import narDown from '../../assets/IPAD/first page/narrowDown.svg';

const preloadSelection = () => import('../pages/ControllerSelection');

function ControllerTransition() {
  const navigate = useNavigate();
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => { preloadSelection(); }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowArrow(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const handleArrowClick = () => {
    preloadSelection().then(() => navigate('/controller/selection'));
  };


  const pageVariants = {
    initial: { y: 0 },
    animate: { y: 0 },
    exit:    { y: 0, opacity: 1, transition: { duration: 1.5 } }
  };


  return (
   

  // <motion.div
  //     className="transition-page-container"
  //     style={{ position: 'fixed', inset: 0, zIndex: 10 }}
  //     variants={pageVariants}
  //     initial="initial"
  //     animate="animate"
  //     exit="exit"
  //   >
  <motion.div
      className="transition-page-container"
      style={{ position: 'fixed', inset: 0, zIndex: 10 }}
      initial={{ y: 0 }}
      animate={{ y: 0 }}
     
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