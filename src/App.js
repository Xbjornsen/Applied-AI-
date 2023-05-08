import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/Pages/LandingPage';
import AboutUs from './components/Pages/AboutUs';
import Services from './components/Pages/Services';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import ContactUs from './components/Pages/ContactUs';
import AiTools from './components/Pages/AiTools'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/aitools" element={<AiTools />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;