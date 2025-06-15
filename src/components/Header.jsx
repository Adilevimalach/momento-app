import React from 'react';
import logo from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="app-header" onClick={() => navigate('/')}>
      <img src={logo} alt="Momento logo" className="logo" />
      <p>קטלוג יינות</p>
    </header>
  );
}
