import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Navbar } from './components/navbar';
import { Locations } from './components/card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Locations/>
  </React.StrictMode>
);


reportWebVitals();
