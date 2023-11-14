import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css';
import Home from './pages/Home'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Techno from './components/Portfolio/Techno'
import Resume from './pages/Resume'
import Header from './components/Header'
import Portfolio from './pages/Portfolio'
import Lists from './pages/Portfolio/Lists/Lists';
import Biographie from './components/Portfolio/Biographie';
import CvDownload from './components/Portfolio/CvDownload/CvDownload';
import { UserProvider } from './utils/context';


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/contact' element={<Contact />} />
          <Route path='/service' element={<Service />} />
          <Route path='/resume' element={<Resume />} />
          <Route path="/list-portfolio" element={<Lists />} />
          <Route path="portfolio/:id" element={<Portfolio />} >
            <Route path="biographie" element={<Biographie />} />
            <Route path="techno" element={<Techno />} />
            <Route path="cvdownload" element={<CvDownload />} />
          </Route>
        </Routes>
      </UserProvider>
  </Router>
  </React.StrictMode>
);
reportWebVitals();
