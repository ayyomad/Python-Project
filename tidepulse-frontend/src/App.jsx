import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import Navbar
import Home from './pages/Home'; // Import Home page
import LoginPage from './components/LoginPage';
import CommunityPage from './components/CommunityPage'; // Import Community page
import SafetyResourcesPage from './components/SafetyResourcesPage'; // Import Safety & Resources page

const App = () => {
  return (
    <Router>
      <div className="relative min-h-screen">
        {/* Navbar is now globally rendered */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/safety-resources" element={<SafetyResourcesPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;