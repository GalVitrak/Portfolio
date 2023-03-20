import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Components/Layout/Layout/Layout';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import MobileLayout from './Components/Layout/MobileLayout/MobileLayout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
  {window.innerWidth > 600 ?  <Layout /> : <MobileLayout/>}
  </BrowserRouter>
);

reportWebVitals();
