import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import AppController from './controller/AppController';
import './index.css';

const root = createRoot(document.getElementById('controller-root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <AppController />
    </HashRouter>
  </React.StrictMode>
);
