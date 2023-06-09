import React from 'react';
import ReactDOM from 'react-dom/client';
//internalisation
import i18n from "i18next";
import {initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import './index.css';
import { ContextProvider } from './components/dashbord/contexts/ContextProvider';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import HttpApi from 'i18next-http-backend';




i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'fr', 'ru'],
    fallbackLng: "en",
    detection: {
      order: [ 'cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react: {
      useSuspense: false
    }
  });





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </ContextProvider>
);

