import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ControllerWelcome from './pages/ControllerWelcome';

export default function AppController() {
  return (
    <Routes>
      <Route path="/" element={<ControllerWelcome />} />
      {/* Additional controller routes can go here */}
    </Routes>
  );
}
