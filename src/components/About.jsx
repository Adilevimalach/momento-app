import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../styles/About.css';

import toCatalog from '../assets/buttons/Group 507.svg';

export default function About() {
  const navigate = useNavigate();
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  return (
    <div className="about-container">
      <div className="about-content">
        <h2>
          אנחנו לא רק מייצרים יין
          אנחנו יוצרים רגעים
        </h2>
        <div className="text-box">
          <div className="text-content">
            כל בקבוק מספר סיפור חושי, שנועד לחבר אותנו לרגע לעין ולעצמנו קצת יותר. כל יין נולד מתוך חיבור לרגע שכולנו מכירים. נותן לנו זכרון לעצור, להרגיש, ולהיות נוכחים. יין מרגש לא רק דרך הטעם, אלא גם דרך הזיכרון, הסיפור, והרגש שהוא מלווה.
          </div>
        </div>
        <div
          className="catalog-button"
          onMouseDown={() => setIsButtonPressed(true)}
          onMouseUp={() => {
            setIsButtonPressed(false);
            navigate('/');
          }}
          onMouseLeave={() => setIsButtonPressed(false)}
        >
          <img
            src={toCatalog}
            alt="to catalog"
          />
        </div>
      </div>
    </div>
  );
}
