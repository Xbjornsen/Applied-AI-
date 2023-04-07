import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import {theme} from './styling/theme';
import AiTools from './components/AiTools'

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/aitools" element={<AiTools />} />
      </Routes>
      <Footer /> 
      </ThemeProvider>
    </Router>
  );
}

export default App;