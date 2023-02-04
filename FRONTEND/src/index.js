import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthContextProvider } from './context/AuthContext';
import { AnnonceContextProvider } from './context/AnnonceContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <GoogleOAuthProvider clientId="309969578058-djuekces314halkds6uofbht02himl4o.apps.googleusercontent.com">
        <AnnonceContextProvider>
          <App />
        </AnnonceContextProvider>
      </GoogleOAuthProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

