import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { TravelPlanProvider } from './contexts/TravelPlanContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TravelPlanProvider>
      <App />
    </TravelPlanProvider>
  </React.StrictMode>
);

