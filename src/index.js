import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import Head from './head';
import Fot from './fot';
import reportWebVitals from './reportWebVitals';
import './main.css';

 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Head />
    </BrowserRouter>
    <Fot />
  </React.StrictMode>
);

 
reportWebVitals();
