
import React, { useState } from 'react';
import '../styles/Cart.css'; 

export default function DetailsForm({ onFormSubmit }) {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    street: '',
    city: '',
    phone: '',
    agreedToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreedToTerms) {
      alert('יש לאשר את תנאי השימוש');
      return;
    }
    onFormSubmit();
    
  };

  return (
    
    <div className="details-container">
      <form className="details-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <input
            type="email"
            name="email"
            placeholder="המייל שלך כאן"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-section">
          <h2 className="form-title">כתובת משלוח</h2>
          <input type="text" name="firstName" placeholder="שם פרטי" value={formData.firstName} onChange={handleChange} required />
          <input type="text" name="lastName" placeholder="שם משפחה" value={formData.lastName} onChange={handleChange} required />
          <input type="text" name="street" placeholder="שם רחוב" value={formData.street} onChange={handleChange} required />
          <input type="text" name="city" placeholder="עיר" value={formData.city} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="טלפון" value={formData.phone} onChange={handleChange} required />
        </div>

        <div className="terms-container">
          <label className="terms-label">
            <input
              type="checkbox"
              name="agreedToTerms"
              checked={formData.agreedToTerms}
              onChange={handleChange}
              required
              className="hidden-checkbox" // מחביאים את התיבה המקורית
            />
            <span className="custom-checkbox"></span> {/* יוצרים תיבה מותאמת אישית */}
            <span className="terms-text">
              קראתי והבנתי את תנאי השימוש באתר ומדיניות הגנת הפרטיות של החברה והם מקובלים עלי, לרבות לעניין דיוור ישיר והזכות לבקש הסרה ממאגר זה
            </span>
          </label>
        </div>

        <div className="checkout-button-container">
          <button type="submit" className="checkout-button" >
            checkout
          </button>
        </div>
      </form>
    </div>
  );
}