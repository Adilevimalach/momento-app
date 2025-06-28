import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import textEntrance from '../../assets/IPAD/first page/text entrance1.svg';
import beginButton from '../../assets/IPAD/first page/begin button.svg';
import './ControllerTransition.css';

export default function ControllerTransition() {
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    navigate('/controller/selection');
  };

  return (
    <div className="controller-transition-root">
      <div className="transition-content">
        <img src={textEntrance} alt="אנחנו לא רק מייצרים יין, אנחנו מייצרים רגעים" className="transition-text-img" />
        {showButton ? (
          <button className="begin-button" onClick={handleNext}>
            <img src={beginButton} alt="שנתחיל?" />
          </button>
        ) : <div className="begin-button-placeholder"></div>}
      </div>
    </div>
  );
}
