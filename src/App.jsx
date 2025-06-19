// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components_c4p/Navbar';
import ContactHero from './Components_c4p/ContactUS_bg';
import Footer from './Components_c4p/Footer';
import Care4Poor from './pages/care4poor';
import ViewProjects from './Components_c4p/ViewProjects';
import DonatingProcess from './Components_c4p/Joinus';
import AboutUsNav from './Components_c4p/AboutUsNav';
import ProjectDetails from './Components_c4p/ReadMore';
import UploadProject from './Components_c4p/Upload';


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Care4Poor />} />
        <Route path="/contact" element={<ContactHero />} />
        <Route path="/moreProject" element={<ViewProjects />} />
        <Route path="/joinUs" element={<DonatingProcess />} />
        <Route path="/aboutus" element={<AboutUsNav />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/upload" element={<UploadProject />} />
      </Routes>
      <Footer />
    </Router>
  );
}
