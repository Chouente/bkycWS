import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ContextProvider } from './components/dashbord/contexts/ContextProvider';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextProvider>
);

