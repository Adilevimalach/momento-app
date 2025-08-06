
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import '../styles/About.css';

import { getAllVideo } from '../constants/videos';
import arrowIcon from '../assets/icons/arrow.svg';
import textarr from '../assets/textarr.svg';
import heart from '../assets/heart.svg';
import dotgroup from '../assets/dotgroup.svg';
import senLogo from '../assets/pages/senLogo.svg';




export default function About() {
  const navigate = useNavigate();
  const videos = getAllVideo();
  const contentRef = useRef(null);
  const contentReftop = useRef(null);

  const [isChecked, setIsChecked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); 

  
  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToTop = () => {
  console.log('Scrolling to top');
  // window.scrollTo({ top: 0, behavior: 'smooth' });
  contentReftop.current?.scrollIntoView({ top: 0, behavior: 'smooth' });
};

  const handleSubmit = () => {
  setIsSubmitted(true);
  setTimeout(() => {
    setIsSubmitted(false);
  }, 1000); 
};

  return (
  <div className="about-container" ref={contentReftop}>
    <div className="bottle-grid">
      {videos.map((video) => (
        <div key={video.id} className="bottle-item">
          <video
            src={video.checkoutVideo}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      ))}
      <button
        className="shop-now-button-center"
        onClick={() => navigate('/home')}
      >
        shop now
      </button>
    </div>

    <button className="scroll-down-arrow-about" onClick={scrollToContent}>
      <img src={arrowIcon} alt="Scroll Down" />
    </button>

    <div className="dotted-separator"></div>

    <div className="about-headline-container">
      
      <span style={{ position: 'relative', left: '0px' }}>
        <img src={senLogo} alt="אנחנו מייצרים רגעים" className="headline-logo" />
      </span>
    </div>

    <div ref={contentRef} className="about-content">
      <div className="text-box">
        <div className="text-content">
        כל בקבוק מספר סיפור חושי, שנועד לחבר אותנו לרגע, ליין ולעצמנו קצת יותר. כל יין נולד מתוך חיבור לרגע שכולנו מכירים. נותן לנו תזכורת לעצור, להרגיש ולהיות נוכחים
          <span style={{ display: 'block', marginTop: '10px' }}>
            יין מרגש לא רק דרך הטעם, אלא גם דרך הזיכרון, הסיפור, והרגע
          </span>
        </div>
      </div>
      <button
    className="momento-catalog-button"
    onClick={() => navigate('/home')}
  >
      <span className="momento-catalog-button-text">
        momento catalog
      </span>
    </button>
    </div>
    <div className="signup-form-container">
  <div className="signup-headline">
    <img src={heart} alt="heart icon" className="heart-icon" />
    <h2>רגעים מיוחדים שומרים לחברים</h2>
  </div>

  <input
    type="email"
    placeholder="המייל שלך כאן"
    className="signup-input"
  />

  <input
    type="tel"
    placeholder="נייד"
    className="signup-input"
  />

  <div className="signup-checkbox-row" onClick={() => setIsChecked(!isChecked)}>
    <div className={`custom-checkbox ${isChecked ? 'checked' : ''}`}></div>
    <span>
      ברצוני לקבל מידע ופרסומות ואני מסכימ.ה לתנאי השימוש
      <img src={dotgroup} alt="" className="dots-underline" />
    </span>
  </div>

  <button className="signup-submit-button" onClick={handleSubmit}>
  {isSubmitted ? 'נשלח' : 'הרשמ.י'}
</button>
</div>
<button className="scroll-to-top-button" onClick={scrollToTop}>
  <img src={arrowIcon} alt="Scroll to top" />
</button>
</div>
);
}